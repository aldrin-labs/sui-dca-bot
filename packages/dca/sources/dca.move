// TODO: Overflows + Numerical Precision
module dca::dca {
    use std::option::{Option, Self, none, is_some};
    use sui::object::{Self, UID, ID};
    use sui::tx_context::{TxContext, sender};
    use sui::balance::{Self, Balance};
    use sui::clock::{Self, Clock};
    use sui::dynamic_field as df;
    use sui::math;
    use sui::transfer;
    use sui::coin::{Coin, Self};
    use sui::event;
    use sui::sui::SUI;

    use trade_proof::proof::{Self, TradeProof};

    use dca::time;
    use dca::protocol_list::{Self, ProtocolList};

    // === CONSTS ===

    const GAS_BUDGET_PER_TRADE: u64 = 25_000_000;

    // === Error Codes ===
    
    const EInvalidTimeScale: u64 = 1;
    const EInvalidEvery: u64 = 2;
    const EInvalidOwner: u64 = 3;
    const EInvalidDelegatee: u64 = 4;
    const EInvalidAuthority: u64 = 5;
    const EInsufficientInputBalance: u64 = 6;
    const EInsufficientOutputBalance: u64 = 7;
    const ENotEnoughTimePassed: u64 = 8;
    const ENoRemainingOrders: u64 = 9;
    const EBelowMinPrice: u64 = 10;
    const EAboveMaxPrice: u64 = 11;
    const EInactive: u64 = 12;
    const EUnfundedAccount: u64 = 13;

    // === Structs ===

    struct ProofKey has copy, store, drop {}

    struct TradePromise<phantom Input, phantom Output> {
        trader: address,
        input: u64,
        min_price: Option<u64>,
        max_price: Option<u64>,
        output: Option<Coin<Output>>,
        dfs: UID,
    }

    struct DCA<phantom Input, phantom Output> has key, store {
        id: UID,
        /// The original owner of the funds
        owner: address,
        /// Address of the delagatee that can periodically withdraw the funds
        delegatee: address,
        /// Start timestamp determined by the Clock time of when the init
        /// transaction took place
        start_time_ms: u64,
        /// Last time funds were withdrawn from the balance
        last_time_ms: u64,
        /// How many units of time, define in terms of time scale
        every: u64,
        /// How many orders remain to be executed
        remaining_orders: u64,
        /// Bit Flag representing the time scale
        /// 0 => seconds
        /// 1 => minutes
        /// 2 => hour
        /// 3 => day
        /// 4 => week
        /// 5 => month
        time_scale: u8,
        /// Balance to be invested over time. This amount can increase or decrease
        input_balance: Balance<Input>,
        split_allocation: u64, // amonut to withdraw each time
        trade_params: TradeParams,
        active: bool,
        gas_budget: Balance<SUI>,
    }

    struct TradeParams has store, copy, drop {
        min_price: Option<u64>,
        max_price: Option<u64>,
    }

    // === Events ===

    struct DCACreatedEvent has copy, drop {
        id: ID,
        owner: address,
        delegatee: address,
    }

    public fun add_trade_proof<Wit: drop, Input, Output>(
        wit: Wit,
        promise: &mut TradePromise<Input, Output>,
        input: u64,
        output: u64
    ) {
        df::add(&mut promise.dfs, ProofKey {}, proof::create<Wit, Input, Output>(wit, input, output))
    }
    
    public fun add_trade_proof_with_coin<Wit: drop, Input, Output>(
        wit: Wit,
        promise: &mut TradePromise<Input, Output>,
        input: u64,
        output: Coin<Output>,
    ) {
        let output_amount = coin::value(&output);
        option::fill(&mut promise.output, output);

        df::add(&mut promise.dfs, ProofKey {}, proof::create<Wit, Input, Output>(wit, input, output_amount))
    }


    // === Constructor Functions ===

    #[lint_allow(share_owned)]
    public entry fun init_account<Input, Output>(
        clock: &Clock,
        delegatee: address,
        input_funds: Coin<Input>,
        every: u64,
        future_orders: u64,
        time_scale: u8,
        gas_funds: &mut Coin<SUI>,
        ctx: &mut TxContext,
    ) {
        let dca = new<Input, Output>(
            clock,
            delegatee,
            input_funds,
            every,
            future_orders,
            time_scale,
            gas_funds,
            ctx,
        );

        transfer::share_object(dca);
    }
    
    public fun new<Input, Output>(
        clock: &Clock,
        delegatee: address,
        input_funds: Coin<Input>,
        every: u64,
        future_orders: u64,
        time_scale: u8,
        gas_funds: &mut Coin<SUI>,
        ctx: &mut TxContext,
    ): DCA<Input, Output> {
        assert_time_scale(time_scale);
        assert_every(every, time_scale);
        assert_how_many_orders(future_orders, every, time_scale);

        let input_funds = coin::into_balance(input_funds);

        let current_time = clock::timestamp_ms(clock);
        // At init-time we set split_allocation = outlay / total_orders
        let split_allocation = math::divide_and_round_up(balance::value(&input_funds), future_orders);

        let dca_uid = object::new(ctx);
        let owner = sender(ctx);

        event::emit(DCACreatedEvent {
            id: object::uid_to_inner(&dca_uid),
            owner,
            delegatee
        });

        let gas_budget = coin::into_balance(coin::split(gas_funds, gas_budget_estimate(future_orders), ctx));

        DCA {
            id: dca_uid,
            owner,
            delegatee,
            start_time_ms: current_time,
            last_time_ms: current_time,
            every,
            remaining_orders: future_orders,
            time_scale,
            input_balance: input_funds,
            split_allocation,
            trade_params: TradeParams { min_price: none(), max_price: none() },
            active: true,
            gas_budget,
        }
    }
    
    #[lint_allow(share_owned)]
    public entry fun init_account_with_params<Input, Output>(
        clock: &Clock,
        delegatee: address,
        outlay: Coin<Input>,
        every: u64,
        future_orders: u64,
        time_scale: u8,
        gas_funds: &mut Coin<SUI>,
        min_price: u64,
        max_price: u64,
        ctx: &mut TxContext,
    ) {
        let dca = new_with_params<Input, Output>(
            clock,
            delegatee,
            outlay,
            every,
            future_orders,
            time_scale,
            gas_funds,
            min_price,
            max_price,
            ctx,
        );

        transfer::share_object(dca);
    }
    
    public fun new_with_params<Input, Output>(
        clock: &Clock,
        delegatee: address,
        outlay: Coin<Input>,
        every: u64,
        future_orders: u64,
        time_scale: u8,
        gas_funds: &mut Coin<SUI>,
        min_price: u64,
        max_price: u64,
        ctx: &mut TxContext,
    ): DCA<Input, Output> {
        let dca = new<Input, Output>(
            clock,
            delegatee,
            outlay,
            every,
            future_orders,
            time_scale,
            gas_funds,
            ctx,
        );

        option::fill(&mut dca.trade_params.min_price, min_price);
        option::fill(&mut dca.trade_params.max_price, max_price);

        dca
    }


    // === Trade Functions ===
    
    public fun init_trade<Input, Output>(
        dca: &mut DCA<Input, Output>,
        clock: &Clock,
        ctx: &mut TxContext,
    ): (Coin<Input>, TradePromise<Input, Output>) {
        assert_delegatee(dca, ctx);
        assert_active(dca);

        // Assert that enough time has passed
        let current_time = clock::timestamp_ms(clock);
        assert_time(current_time, dca.last_time_ms, dca.every, dca.time_scale);

        // Pop funds, update last_time_ts, and update remaining orders
        let input_funds = balance::split(&mut dca.input_balance, dca.split_allocation);
        dca.last_time_ms = clock::timestamp_ms(clock);
        dca.remaining_orders = dca.remaining_orders - 1;

        let promise = TradePromise<Input, Output> {
            trader: dca.owner,
            input: dca.split_allocation,
            min_price: dca.trade_params.min_price,
            max_price: dca.trade_params.max_price,
            output: none(),
            dfs: object::new(ctx)
        };
        
        (coin::from_balance(input_funds, ctx), promise)
    }
    
    public fun resolve_trade<Input, Output, Protocol: drop>(
        dca: &mut DCA<Input, Output>,
        promise: TradePromise<Input, Output>,
        protocol_list: &ProtocolList,
        gas_cost: u64,
        ctx: &mut TxContext,
    ): Coin<SUI> {
        // TODO: Tradepromise must have address
        let TradePromise { trader, input, min_price, max_price, output, dfs } = promise;

        // Fails if proof does not exist or is of wrong type
        let proof: &TradeProof<Protocol, Input, Output> = df::borrow(&dfs, ProofKey {});

        protocol_list::proove<Protocol>(protocol_list);
        
        // Checks that input amount corresponds
        assert!(input == dca.split_allocation, 0);

        // Assert that promise is from the corresponding user
        assert!(trader == dca.owner, 0);

        // Transfers output to owner if any
        if (is_some(&output)) {
            let out = option::extract(&mut output);

            transfer::public_transfer(out, dca.owner);
        };

        option::destroy_none(output);

        assert_delegatee(dca, ctx);
        assert_active(dca);

        // TODO: Numerical Precision && Overflow
        let min_execution_price = proof::min_price<Protocol, Input, Output>(proof);

        if (is_some(&min_price)) {
            assert!(min_execution_price >= *option::borrow(&min_price), EBelowMinPrice);
        };
        
        if (is_some(&max_price)) {
            assert!(min_execution_price <= *option::borrow(&max_price), EAboveMaxPrice);
        };

        object::delete(dfs);

        // If no more trades to make, set DCA to inactive
        if (dca.remaining_orders == 0 || balance::value(&dca.input_balance) == 0) {
            set_inactive(dca);
        };
        
        coin::from_balance(
            balance::split(&mut dca.gas_budget, gas_cost), ctx
        )
    }

    // === Funding Functions ===

    public entry fun deposit_input<Input, Output>(
        dca: &mut DCA<Input, Output>,
        input_funds: Coin<Input>,
        new_orders: u64,
        gas_funds: &mut Coin<SUI>,
        ctx: &mut TxContext,
    ) {
        assert_owner(dca, ctx);
        dca.active = true;

        let funds = coin::into_balance(input_funds);

        // Add funds to balance
        balance::join(&mut dca.input_balance, funds);

        dca.remaining_orders = dca.remaining_orders + new_orders;

        let gas_budget = coin::into_balance(
            coin::split(gas_funds, gas_budget_estimate(new_orders), ctx)
        );

        balance::join(&mut dca.gas_budget, gas_budget);

        // Recompute split_allocation
        recompute_split_allocation(dca);
    }
    
    public fun increase_remaining_orders<Input, Output>(
        dca: &mut DCA<Input, Output>,
        gas_funds: &mut Coin<SUI>,
        new_orders: u64,
        ctx: &mut TxContext,
    ) {
        dca.remaining_orders = dca.remaining_orders + new_orders;

        let gas_budget = coin::into_balance(
            coin::split(gas_funds, gas_budget_estimate(new_orders), ctx)
        );

        balance::join(&mut dca.gas_budget, gas_budget);

        // Recompute split allocation
        recompute_split_allocation(dca);
    }

    public entry fun withdraw_input<Input, Output>(
        dca: &mut DCA<Input, Output>,
        amount: u64,
        decrease_orders: u64,
        ctx: &mut TxContext,
    ) {
        // Assertions made in the inner function call
        let (funds, gas_budget) = withdraw_input_(dca, amount, decrease_orders, ctx);
        let funds = coin::from_balance(funds, ctx);
        let gas_budget = coin::from_balance(gas_budget, ctx);

        transfer::public_transfer(funds, dca.owner);
        transfer::public_transfer(gas_budget, dca.owner);
    }
    
    public fun withdraw_input_<Input, Output>(
        dca: &mut DCA<Input, Output>,
        amount: u64,
        decrease_orders: u64,
        ctx: &TxContext,
    ): (Balance<Input>, Balance<SUI>) {
        assert_owner(dca, ctx);
        assert_input_balance(&dca.input_balance, amount);

        // Withdraw funds
        let funds = balance::split(&mut dca.input_balance, amount);
        dca.remaining_orders = dca.remaining_orders - decrease_orders;

        // Withdraw gas budget
        let gas_budget = balance::split(&mut dca.gas_budget, gas_budget_estimate(decrease_orders));
        
        // Recompute split_allocation
        recompute_split_allocation(dca);

        // Return funds
        (funds, gas_budget)
    }
    
    public entry fun add_gas_budget<Input, Output>(
        dca: &mut DCA<Input, Output>,
        gas_funds: Coin<SUI>,
    ) {
        let gas_budget = coin::into_balance(gas_funds);
        balance::join(&mut dca.gas_budget, gas_budget);
    }
    

    // === Destructor Functions ===

    public entry fun redeem_funds_and_close<Input, Output>(
        dca: DCA<Input, Output>,
        ctx: &mut TxContext,
    ) {
        let DCA {
            id,
            owner,
            delegatee,
            start_time_ms: _,
            last_time_ms: _,
            every: _,
            remaining_orders: _,
            time_scale: _,
            input_balance,
            split_allocation: _,
            trade_params: _,
            active: _,
            gas_budget,
        } = dca;

        let sender = sender(ctx);

        assert!((sender == owner) || (sender == delegatee), EInvalidAuthority);

        if (balance::value(&input_balance) > 0) {
            let input_funds = coin::from_balance(input_balance, ctx);
            transfer::public_transfer(input_funds, owner);
        } else {
            balance::destroy_zero(input_balance);
        };

        transfer::public_transfer(
            coin::from_balance(gas_budget, ctx),
            owner            
        );

        object::delete(id);
    }

    // === Activity Setters ===

    public entry fun set_inactive_as_delegatee<Input, Output>(
        dca: &mut DCA<Input, Output>,
        ctx: &TxContext,
    ) {
        assert_delegatee(dca, ctx);

        dca.active = false;
    }
    
    public entry fun reactivate_as_owner<Input, Output>(
        dca: &mut DCA<Input, Output>,
        ctx: &TxContext,
    ) {
        assert_owner(dca, ctx);

        assert!(balance::value(&dca.input_balance) > 0, EUnfundedAccount);
        assert!(dca.remaining_orders > 0,  ENoRemainingOrders);
        
        recompute_split_allocation_unsafe(dca);

        dca.active = true;
    }

    // == Getters
    
    public fun owner<Input, Output>(dca: &DCA<Input, Output>): address { dca.owner }
    public fun delegatee<Input, Output>(dca: &DCA<Input, Output>): address { dca.delegatee }
    public fun start_time_ms<Input, Output>(dca: &DCA<Input, Output>): u64 { dca.start_time_ms }
    public fun last_time_ms<Input, Output>(dca: &DCA<Input, Output>): u64 { dca.last_time_ms }
    public fun every<Input, Output>(dca: &DCA<Input, Output>): u64 { dca.every }
    public fun remaining_orders<Input, Output>(dca: &DCA<Input, Output>): u64 { dca.remaining_orders }
    public fun time_scale<Input, Output>(dca: &DCA<Input, Output>): u8 { dca.time_scale }
    public fun input_balance<Input, Output>(dca: &DCA<Input, Output>): &Balance<Input> { &dca.input_balance }
    public fun split_allocation<Input, Output>(dca: &DCA<Input, Output>): u64 { dca.split_allocation }
    public fun trade_params<Input, Output>(dca: &DCA<Input, Output>): TradeParams { dca.trade_params }
    public fun active<Input, Output>(dca: &DCA<Input, Output>): bool { dca.active }

    public fun trade_owner<Input, Output>(promise: &TradePromise<Input, Output>): address { promise.trader }
    public fun trade_input<Input, Output>(promise: &TradePromise<Input, Output>): u64 { promise.input }
    public fun trade_min_price<Input, Output>(promise: &TradePromise<Input, Output>): Option<u64> { promise.min_price }
    public fun trade_max_price<Input, Output>(promise: &TradePromise<Input, Output>): Option<u64> { promise.max_price }

    // === Private Functions ===

    fun recompute_split_allocation<Input, Output>(dca: &mut DCA<Input, Output>) {
        let funds = balance::value(&dca.input_balance);

        if (dca.remaining_orders == 0 || funds == 0) {
            set_inactive(dca)
        } else {
            recompute_split_allocation_unsafe(dca);
        }
    }
    
    fun recompute_split_allocation_unsafe<Input, Output>(dca: &mut DCA<Input, Output>) {
        dca.split_allocation = math::divide_and_round_up(balance::value(&dca.input_balance), dca.remaining_orders);
    }

    fun set_inactive<Input, Output>(dca: &mut DCA<Input, Output>) {
        dca.split_allocation = 0;
        dca.remaining_orders = 0;
        dca.active = false;
    }

    fun gas_budget_estimate(n_tx: u64): u64 {
        // TODO: Numerical precision + overflow
        GAS_BUDGET_PER_TRADE * n_tx
    }

    // === Assertions ===

    fun assert_active<Input, Output>(dca: &DCA<Input, Output>) {
        assert!(dca.active == true, EInactive);
    }
    
    fun assert_time_scale(time_scale: u8) {
        // Number needs to conform the bitflag
        assert!(time_scale <= 5, EInvalidTimeScale);
    }

    // TODO: Relax assumptions?
    fun assert_every(every: u64, time_scale: u8) {
        // Depending on the time_scale the restrictions on `every` are different
        let is_ok = {
            if (time_scale == 0) { // 0 => seconds
                // Lower bound --> 30 seconds
                // Upper bound --> 59 seconds
                every >= 30 && every <= 59
            } else if (time_scale == 1) { // 1 => minutes
                // Lower bound --> 1 minute
                // Upper bound --> 59 minutes
                every >= 1 && every <= 59
            } else if (time_scale == 2) { // 2 => hours
                // Lower bound --> 1 hour
                // Upper bound --> 24 hours
                every >= 1 && every <= 24
            } else if (time_scale == 3) { // 3 => days
                // Lower bound --> 1 day
                // Upper bound --> 6 days
                every >= 1 && every <= 6
            } else if (time_scale == 4) { // 4 => weeks
                // Lower bound --> 1 week
                // Upper bound --> 4 weeks
                every >= 1 && every <= 4
            } else if (time_scale == 5) { // 5 => months
                // Lower bound --> 1 month
                // Upper bound --> 12 months
                every >= 1 && every <= 12
            } else {
                abort(EInvalidTimeScale)
            }
        };

        assert!(is_ok, EInvalidEvery);
    }
    
    fun assert_how_many_orders(_how_many_orders: u64, _every: u64, _time_scale: u8) {
        // TODO: Depending on the time_scale and ever the restrictions on `how_many_orders` are different
    }
    
    fun assert_owner<Input, Output>(dca: &DCA<Input, Output>, ctx: &TxContext) {
        assert!(dca.owner == sender(ctx), EInvalidOwner);
    }
    
    fun assert_delegatee<Input, Output>(dca: &DCA<Input, Output>, ctx: &TxContext) {
        assert!(dca.delegatee == sender(ctx), EInvalidDelegatee);
    }
    
    fun assert_input_balance<T>(balance: &Balance<T>, withdraw_amount: u64) {
        assert!(balance::value(balance) >= withdraw_amount, EInsufficientInputBalance);
    }

    fun assert_time(current_ts: u64, last_ts: u64, every: u64, time_scale: u8) {
        let has_time_passed = {
            if (time_scale == 0) { // 0 => seconds
            time::has_n_seconds_passed(current_ts, last_ts, every)
            } else if (time_scale == 1) { // 1 => minutes
                time::has_n_minutes_passed(current_ts, last_ts, every)
            } else if (time_scale == 2) { // 2 => hours
                time::has_n_hours_passed(current_ts, last_ts, every)
            } else if (time_scale == 3) { // 3 => days
                time::has_n_days_passed(current_ts, last_ts, every)
            } else if (time_scale == 4) { // 4 => weeks
                time::has_n_weeks_passed(current_ts, last_ts, every)
            } else if (time_scale == 5) { // 5 => months
                time::has_n_months_passed(current_ts, last_ts, every)
            } else {
                abort(0)
            }
        };

        assert!(has_time_passed == true, ENotEnoughTimePassed);
    }

    // === Test-only functions ===

    #[test_only]
    public fun destroy_promise_for_testing<Input, Output>(promise: TradePromise<Input, Output>) {
        let TradePromise {
            trader: _, input: _, min_price: _, max_price: _, output, dfs
        } = promise;

        if (is_some(&output)) {
            let out = option::extract(&mut output);

            coin::burn_for_testing(out);
        };
        
        option::destroy_none(output);
        object::delete(dfs);
    }
    
    #[test_only]
    public fun destroy_for_testing<Input, Output>(dca: DCA<Input, Output>) {
        let DCA {
            id,
            owner: _,
            delegatee: _,
            start_time_ms: _,
            last_time_ms: _,
            every: _,
            remaining_orders: _,
            time_scale: _,
            input_balance,
            split_allocation: _,
            trade_params: _,
            active: _,
            gas_budget,
        } = dca;

        object::delete(id);
        balance::destroy_for_testing(input_balance);
        balance::destroy_for_testing(gas_budget);
    }
}

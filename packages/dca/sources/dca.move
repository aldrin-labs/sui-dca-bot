module dca::dca {
    use std::debug::print;
    use std::option::{Option, Self, none, is_some, borrow};
    use sui::object::{Self, UID, ID};
    use sui::tx_context::{TxContext, sender};
    use sui::balance::{Self, Balance};
    use sui::clock::{Self, Clock};
    use sui::transfer;
    use sui::coin::{Coin, Self};
    use sui::event;
    use sui::sui::SUI;

    use dca::time;
    use dca::math::{mul, div};

    friend dca::cetus;
    friend dca::flow_x;
    friend dca::turbos;

    const VERSION: u64 = 2;

    // === CONSTS ===

    const GAS_BUDGET_PER_TRADE: u64 = 25_000_000;
    const BASE_FEES_BPS: u64 = 5;
    const ORDER_LIMIT: u64 = 25_000;
    const MINIMUM_FUNDING_PER_TRADE: u64 = 100_000;

    // === Error Codes === 
    
    const EWrongVersion: u64 = 0;
    
    // Init/activate errors
    const EInvalidTimeScale: u64 = 10;
    const EInvalidEvery: u64 = 11;
    const EBelowMinimumFunding: u64 = 12;
    const EInsufficientGasProvision: u64 = 13;
    const EUnfundedAccount: u64 = 14;
    const ENoRemainingOrders: u64 = 15;
    const ETotalOrdersAboveLimit: u64 = 16;
    const EBaseAmountCantBeZero: u64 = 18;
    const EQuoteAmountCantBeZero: u64 = 19;
    
    // IAM errors 
    const EInvalidOwner: u64 = 20;
    const EInvalidDelegatee: u64 = 21;
    const EInvalidAuthority: u64 = 22;

    // Trading/Withdraw errors
    const ENotEnoughTimePassed: u64 = 30;
    const EInactive: u64 = 31;
    #[allow(unused_const)]
    const EBelowMinPrice: u64 = 32;
    const EAboveMaxPrice: u64 = 33;
    const EInsufficientInputBalance: u64 = 34; // Withdraw error

    // === Structs ===

    struct ProofKey has copy, store, drop {}

    struct TradePromise<phantom Input, phantom Output> has drop {
        input: u64,
        min_output: u64,
    }

    struct Price has store, copy, drop {
        base_val: u64,
        quote_val: u64
    }

    struct DCA<phantom Input, phantom Output> has key, store {
        id: UID,
        version: u64,
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

    // Price defined in terms of: X units of Input per 1 unit of Output
    struct TradeParams has store, copy, drop {
        min_price: Option<Price>,
        max_price: Option<Price>,
    }

    // === Events ===

    struct DCACreatedEvent has copy, drop {
        id: ID,
        owner: address,
        delegatee: address,
    }

    // === Constructor Functions ===

    #[lint_allow(share_owned)]
    public entry fun init_account<Input, Output>(
        clock: &Clock,
        delegatee: address,
        input_funds: Coin<Input>,
        every: u64,
        total_orders: u64,
        time_scale: u8,
        gas_funds: &mut Coin<SUI>,
        ctx: &mut TxContext,
    ) {
        let dca = new<Input, Output>(
            clock,
            delegatee,
            input_funds,
            every,
            total_orders,
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
        total_orders: u64,
        time_scale: u8,
        gas_funds: &mut Coin<SUI>,
        ctx: &mut TxContext,
    ): DCA<Input, Output> {
        assert_time_scale(time_scale);
        assert_every(every, time_scale);
        assert_how_many_orders(total_orders, every, time_scale);
        assert_minimum_funding_per_trade(coin::balance(&input_funds), total_orders);
        assert_minimum_gas_funds(coin::balance(gas_funds), total_orders);

        let input_funds = coin::into_balance(input_funds);

        let current_time = clock::timestamp_ms(clock);
        // At init-time we set split_allocation = outlay / total_orders
        let split_allocation = compute_split_allocation(balance::value(&input_funds), total_orders);

        let dca_uid = object::new(ctx);
        let owner = sender(ctx);

        event::emit(DCACreatedEvent {
            id: object::uid_to_inner(&dca_uid),
            owner,
            delegatee
        });

        let gas_budget = coin::into_balance(coin::split(gas_funds, gas_budget_estimate(total_orders), ctx));

        DCA {
            id: dca_uid,
            version: VERSION,
            owner,
            delegatee,
            start_time_ms: current_time,
            last_time_ms: current_time,
            every,
            remaining_orders: total_orders,
            time_scale,
            input_balance: input_funds,
            split_allocation,
            trade_params: TradeParams { min_price: none(), max_price: none() },
            active: true,
            gas_budget,
        }
    }
    
    #[lint_allow(share_owned)]
    public fun init_account_with_params<Input, Output>(
        clock: &Clock,
        delegatee: address,
        outlay: Coin<Input>,
        every: u64,
        total_orders: u64,
        time_scale: u8,
        gas_funds: &mut Coin<SUI>,
        trade_params: TradeParams,
        ctx: &mut TxContext,
    ) {
        let dca = new_with_params<Input, Output>(
            clock,
            delegatee,
            outlay,
            every,
            total_orders,
            time_scale,
            gas_funds,
            trade_params,
            ctx,
        );

        transfer::share_object(dca);
    }
    
    public fun new_with_params<Input, Output>(
        clock: &Clock,
        delegatee: address,
        outlay: Coin<Input>,
        every: u64,
        total_orders: u64,
        time_scale: u8,
        gas_funds: &mut Coin<SUI>,
        trade_params: TradeParams,
        ctx: &mut TxContext,
    ): DCA<Input, Output> {
        let dca = new<Input, Output>(
            clock,
            delegatee,
            outlay,
            every,
            total_orders,
            time_scale,
            gas_funds,
            ctx,
        );
        
        dca.trade_params = trade_params;

        dca
    }

    public fun with_price(base_val: u64, quote_val: u64): Price {
        assert!(base_val > 0, EBaseAmountCantBeZero);
        assert!(quote_val > 0, EQuoteAmountCantBeZero);
        Price {
            base_val,
            quote_val
        }
    }
    
    public fun with_trade_params(
        min_price: Option<Price>,
        max_price: Option<Price>
    ): TradeParams {
        TradeParams {
            min_price,
            max_price
        }
    }


    // === Trade Functions ===
    
    public(friend) fun init_trade<Input, Output>(
        dca: &mut DCA<Input, Output>,
        clock: &Clock,
        ctx: &mut TxContext,
    ): (Balance<Input>, TradePromise<Input, Output>) {
        check_version_and_upgrade(dca);
        assert_delegatee(dca, ctx);
        assert_active(dca);

        // Assert that enough time has passed
        let current_time = clock::timestamp_ms(clock);
        assert_time(current_time, dca.last_time_ms, dca.every, dca.time_scale);

        // Pop funds, update last_time_ts, and update remaining orders
        let input_funds = if (dca.remaining_orders > 1) {
            balance::split(&mut dca.input_balance, dca.split_allocation)
        } else {
            // If its the last order we withdraw all the balance to
            // compensate for the accumulated rounding differences.
            balance::withdraw_all(&mut dca.input_balance)
        };

        dca.last_time_ms = clock::timestamp_ms(clock);
        dca.remaining_orders = dca.remaining_orders - 1;

        // Compute and transfer fees to delegatee
        
        let fee_amount = fee_amount(dca.split_allocation);
        let fees = coin::from_balance(balance::split(&mut input_funds, fee_amount), ctx);
        transfer::public_transfer(fees, dca.delegatee);

        let input = balance::value(&input_funds);

        let promise = TradePromise<Input, Output> {
            input,
            min_output: get_min_output_amount(dca, input),
        };
        
        (input_funds, promise)
    }
    
    public(friend) fun resolve_trade<Input, Output>(
        dca: &mut DCA<Input, Output>,
        promise: TradePromise<Input, Output>,
        gas_cost: u64,
        ctx: &mut TxContext,
    ): Coin<SUI> {
        // No need to assert version as its already checked in the
        // `init_trade` function

        let TradePromise { input: _, min_output: _ } = promise;

        // If no more trades to make, set DCA to inactive
        if (dca.remaining_orders == 0 || balance::value(&dca.input_balance) == 0) {
            set_inactive_and_reset(dca);
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
        check_version_and_upgrade(dca);
        assert_owner(dca, ctx);
        assert_minimum_funding_per_trade(coin::balance(&input_funds), new_orders);
        assert_minimum_gas_funds(coin::balance(gas_funds), new_orders);
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
        check_version_and_upgrade(dca);
        assert_minimum_gas_funds(coin::balance(gas_funds), new_orders);

        dca.remaining_orders = dca.remaining_orders + new_orders;

        assert_minimum_funding_per_trade(&dca.input_balance, dca.remaining_orders);

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
        check_version_and_upgrade(dca);
        assert_owner(dca, ctx);
        assert_input_balance(&dca.input_balance, amount);

        // Withdraw funds
        let funds = balance::split(&mut dca.input_balance, amount);
        dca.remaining_orders = dca.remaining_orders - decrease_orders;

        // Withdraw gas budget
        let gas_budget = balance::split(&mut dca.gas_budget, gas_budget_estimate(decrease_orders));
        
        // Recompute split_allocation
        recompute_split_allocation(dca);
        assert_minimum_funding_per_trade(&dca.input_balance, dca.remaining_orders);

        // Return funds
        (funds, gas_budget)
    }
    
    public entry fun add_gas_budget<Input, Output>(
        dca: &mut DCA<Input, Output>,
        gas_funds: Coin<SUI>,
    ) {
        check_version_and_upgrade(dca);
        let gas_budget = coin::into_balance(gas_funds);
        balance::join(&mut dca.gas_budget, gas_budget);
    }
    

    // === Destructor Functions ===

    public entry fun redeem_funds_and_close<Input, Output>(
        dca: DCA<Input, Output>,
        ctx: &mut TxContext,
    ) {
        check_version_and_upgrade(&mut dca);
        assert_owner_or_delegatee(&dca, ctx);

        let DCA {
            id,
            version: _,
            owner,
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

        if (balance::value(&input_balance) > 0) {
            let input_funds = coin::from_balance(input_balance, ctx);
            transfer::public_transfer(input_funds, owner);
        } else {
            balance::destroy_zero(input_balance);
        };
        
        if (balance::value(&gas_budget) > 0) {
            let input_funds = coin::from_balance(gas_budget, ctx);
            transfer::public_transfer(input_funds, owner);
        } else {
            balance::destroy_zero(gas_budget);
        };

        object::delete(id);
    }
    
    public fun redeem_funds_and_deactivate<Input, Output>(
        dca: &mut DCA<Input, Output>,
        ctx: &mut TxContext,
    ) {
        check_version_and_upgrade(dca);
        assert_owner_or_delegatee(dca, ctx);

        if (balance::value(&dca.input_balance) > 0) {
            let input_balance = balance::withdraw_all(&mut dca.input_balance);
            let input_funds = coin::from_balance(input_balance, ctx);
            transfer::public_transfer(input_funds, dca.owner);
        };
        
        if (balance::value(&dca.gas_budget) > 0) {
            let gas_budget = balance::withdraw_all(&mut dca.gas_budget);
            let gas_budget = coin::from_balance(gas_budget, ctx);
            transfer::public_transfer(gas_budget, dca.owner);
        };

        set_inactive_and_reset(dca);
    }

    // === Activity Setters ===

    public entry fun set_inactive<Input, Output>(
        dca: &mut DCA<Input, Output>,
        ctx: &TxContext,
    ) {
        check_version_and_upgrade(dca);
        assert_owner_or_delegatee(dca, ctx);

        dca.active = false;
    }
    
    public entry fun reactivate_as_owner<Input, Output>(
        dca: &mut DCA<Input, Output>,
        ctx: &TxContext,
    ) {
        check_version_and_upgrade(dca);
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

    public fun trade_input<Input, Output>(promise: &TradePromise<Input, Output>): u64 { promise.input }
    public fun trade_min_output<Input, Output>(promise: &TradePromise<Input, Output>): u64 { promise.min_output }

    public fun gas_budget_per_trade(): u64 { GAS_BUDGET_PER_TRADE }
    public fun base_fee_bps(): u64 { BASE_FEES_BPS }
    public fun order_limit(): u64 { ORDER_LIMIT }
    public fun minimum_funding_per_trade(): u64 { MINIMUM_FUNDING_PER_TRADE }

    // === Private Functions ===

    fun recompute_split_allocation<Input, Output>(dca: &mut DCA<Input, Output>) {
        let funds = balance::value(&dca.input_balance);

        if (dca.remaining_orders == 0 || funds == 0) {
            set_inactive_and_reset(dca)
        } else {
            recompute_split_allocation_unsafe(dca);
        }
    }
    
    fun recompute_split_allocation_unsafe<Input, Output>(dca: &mut DCA<Input, Output>) {
        dca.split_allocation = compute_split_allocation(balance::value(&dca.input_balance), dca.remaining_orders);
    }

    fun compute_split_allocation(input_amount: u64, orders: u64): u64 {
        // Rounds down
        div(input_amount, orders)
    }

    fun compute_min_output(input_amount: u64, max_price: &Price): u64 {
        div_by_price(input_amount, max_price)
    }

    fun mul_by_price(x: u64, price: &Price): u64 {
        div(mul(x, price.base_val), price.quote_val)
    }
    
    fun div_by_price(x: u64, price: &Price): u64 {
        div(mul(x, price.quote_val), price.base_val)
    }

    fun set_inactive_and_reset<Input, Output>(dca: &mut DCA<Input, Output>) {
        dca.split_allocation = 0;
        dca.remaining_orders = 0;
        dca.active = false;
    }

    fun gas_budget_estimate(n_tx: u64): u64 {
        mul(GAS_BUDGET_PER_TRADE, n_tx)
    }

    fun get_min_output_amount<Input, Output>(dca: &DCA<Input, Output>, input_amount: u64): u64 {
        if (option::is_none(&dca.trade_params.max_price)) {
            // We return 1 for extra safety as no trade should return zero as output
            1
        } else {
            let max_price = option::borrow(&dca.trade_params.max_price);

            let min_output = compute_min_output(input_amount, max_price);
            min_output
        }
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
                every >= 1 && every <= 30
            } else if (time_scale == 4) { // 4 => weeks
                // Lower bound --> 1 week
                // Upper bound --> 4 weeks
                every >= 1 && every <= 52
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
    
    fun assert_how_many_orders(how_many_orders: u64, _every: u64, _time_scale: u8) {
        assert!(how_many_orders <= ORDER_LIMIT, ETotalOrdersAboveLimit);
    }
    
    fun assert_minimum_funding_per_trade<T>(total_funding: &Balance<T>, n_tx: u64) {
        let funding_amount = balance::value(total_funding);
        assert!(funding_amount >= mul(n_tx, MINIMUM_FUNDING_PER_TRADE), EBelowMinimumFunding);
    }
    
    fun assert_minimum_gas_funds<T>(gas_funds: &Balance<T>, n_tx: u64) {
        let gas_amount = balance::value(gas_funds);
        assert!(gas_amount >= gas_budget_estimate(n_tx), EInsufficientGasProvision);
    }
    
    fun assert_owner<Input, Output>(dca: &DCA<Input, Output>, ctx: &TxContext) {
        assert!(dca.owner == sender(ctx), EInvalidOwner);
    }
    
    fun assert_delegatee<Input, Output>(dca: &DCA<Input, Output>, ctx: &TxContext) {
        assert!(dca.delegatee == sender(ctx), EInvalidDelegatee);
    }
    
    fun assert_owner_or_delegatee<Input, Output>(dca: &DCA<Input, Output>, ctx: &TxContext) {
        let sender = sender(ctx);
        assert!((sender == dca.owner) || (sender == dca.delegatee), EInvalidAuthority);
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

    public(friend) fun assert_max_price_via_output<Input, Output>(output_amount: u64, promise: &TradePromise<Input, Output>) {
        let min_output = trade_min_output(promise);
        assert!(
            output_amount >= min_output,
            EAboveMaxPrice
        );
    }
    
    public(friend) fun assert_max_price<Input, Output>(input_amount: u64, output_amount: u64, dca: &DCA<Input, Output>) {
        if (is_some(&dca.trade_params.max_price)) {
            let max_price = borrow(&dca.trade_params.max_price);

            assert!(
                input_amount <= mul_by_price(output_amount, max_price),
                EAboveMaxPrice
            );
        }
    }

    public(friend) fun fee_amount(amount: u64): u64 {
        amount - net_allocation(amount)
    }
    
    public(friend) fun net_allocation(amount: u64): u64 {
        if (amount >= 1_844_674_407_370_955) {
            // Reduce overflow risk
            // Downscale first then upscale
            mul(div(amount, 10_000), 10_000 - BASE_FEES_BPS)
        } else {
            // Increase precision
            // Upscale first then downscale
            div(mul(amount, 10_000 - BASE_FEES_BPS), 10_000)
        }
    }

    public(friend) fun funds_net_of_fees(amount: u64): u64 {
        amount - fee_amount(amount)
    }

    // === Versioning ===

    fun assert_version<Input, Output>(dca: &DCA<Input, Output>) {
        assert!(dca.version == VERSION, EWrongVersion);
    }

    fun check_version_and_upgrade<Input, Output>(dca: &mut DCA<Input, Output>) {
        if (dca.version < VERSION) {
            dca.version = VERSION;
        };
        assert_version(dca);
    }

    // === Test-only functions ===

    #[test_only]
    friend dca::test_utils;
    #[test_only]
    friend dca::dca_tests_2;

    #[test_only]
    public fun destroy_promise_for_testing<Input, Output>(promise: TradePromise<Input, Output>) {
        let TradePromise {
            input: _, min_output: _,
        } = promise;
    }
    
    #[test_only]
    public fun destroy_for_testing<Input, Output>(dca: DCA<Input, Output>) {
        let DCA {
            id,
            version: _,
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

    #[test_only]
    public fun gas_budget_estimate_(n_tx: u64): u64 {
        gas_budget_estimate(n_tx)
    }

    // === Tests ===

    #[test]
    fun test_gas_budget() {
        assert!(gas_budget_estimate(3) == 75_000_000, 0);
        assert!(gas_budget_estimate(33) == 825_000_000, 0);
        assert!(gas_budget_estimate(333) == 8_325_000_000, 0);
        assert!(gas_budget_estimate(3333) == 83_325_000_000, 0);
        assert!(gas_budget_estimate(24333) == 608_325_000_000, 0);
        assert!(gas_budget_estimate(25000) == 625_000_000_000, 0);
    }
    
    #[test]
    fun test_compute_min_price() {
        assert!(compute_min_output(100000, &with_price(3, 1)) == 33333, 0);
        assert!(compute_min_output(100000, &with_price(33, 1)) == 3030, 0);
        assert!(compute_min_output(100000, &with_price(333, 1)) == 300, 0);
        assert!(compute_min_output(100000, &with_price(3333, 1)) == 30, 0);
        assert!(compute_min_output(100000, &with_price(33333, 1)) == 3, 0);
        assert!(compute_min_output(100000, &with_price(333333, 1)) == 0, 0);
        assert!(compute_min_output(100000, &with_price(3333333, 1)) == 0, 0);

        // Rounds down
        assert!(compute_min_output(777777, &with_price(3, 1)) == 259259, 0); // 259259
        assert!(compute_min_output(777777, &with_price(33, 1)) == 23569, 0); // 23569
        assert!(compute_min_output(777777, &with_price(333, 1)) == 2335, 0); // 2335.666667
        assert!(compute_min_output(777777, &with_price(3333, 1)) == 233, 0); // 233.3564356
        assert!(compute_min_output(777777, &with_price(33333, 1)) == 23, 0); // 23.33354334
        assert!(compute_min_output(777777, &with_price(333333, 1)) == 2, 0); // 2.333333333
        assert!(compute_min_output(777777, &with_price(3333333, 1)) == 0, 0); // 0.233333123
    }
    
    #[test]
    fun test_fee_amount() {
        // print(&fee_amount(1_333_333));
        assert!(fee_amount(1_333_333) == 667, 0);
        assert!(fee_amount(133_333) == 67, 0);
        assert!(fee_amount(13_333) == 7, 0);

        assert!(fee_amount(31_415_926_536) == 15707964, 0); // (Pi)
        assert!(fee_amount(27_182_818_285) == 13591410, 0); // e (Euler's Number)
        assert!(fee_amount(14_142_135_624) == 7071068, 0); // (Square Root of 2)
        assert!(fee_amount(17_320_508_076) == 8660255, 0); // (Square Root of 3)
        assert!(fee_amount(16_180_339_887) == 8090170, 0); // Golden Ratio
        assert!(fee_amount(22_360_679_775) == 11180340, 0); // (Square Root of 5)
        assert!(fee_amount(26_457_513_111) == 13228757, 0); // (Square Root of 7)
        assert!(fee_amount(33_166_247_904) == 16583124, 0); // (Square Root of 11)
        assert!(fee_amount(36_055_512_755) == 18027757, 0); // (Square Root of 13)
        assert!(fee_amount(41_231_056_256) == 20615529, 0); // (Square Root of 17)
        assert!(fee_amount(43_588_989_435) == 21794495, 0); // (Square Root of 19)
        assert!(fee_amount(47_958_315_233) == 23979158, 0); // (Square Root of 23)
        assert!(fee_amount(53_851_648_071) == 26925825, 0); // (Square Root of 29)
        assert!(fee_amount(55_677_643_628) == 27838822, 0); // (Square Root of 31)
        assert!(fee_amount(60_827_625_303) == 30413813, 0); // (Square Root of 37)
        assert!(fee_amount(98_696_044_011) == 49348023, 0); // pi^2
        assert!(fee_amount(26_651_441_427) == 13325721, 0); // 2^sqrt(2) (Gelfond-Schneider Constant)
        assert!(fee_amount(231_406_926_328) == 115703464, 0); // e^pi  (Gelfond's Constant)
        assert!(fee_amount(6_931_471_806) == 3465736, 0); // ln(2) (Natural Logarithm of 2)
        assert!(fee_amount(10_986_122_887) == 5493062, 0); // ln(3) (Natural Logarithm of 3)
        assert!(fee_amount(5_859_874_482) == 2929938, 0); // pi+e
        assert!(fee_amount(4_233_108_251) == 2116555, 0); // pi-e
        assert!(fee_amount(44_428_829_382) == 22214415, 0); // pi.sqrt(2)
        assert!(fee_amount(38_442_310_282) == 19221156, 0); // esqrt(2)
        assert!(fee_amount(491_737_432) == 245869, 0); // phi^e
        assert!(fee_amount(17_724_538_509) == 8862270, 0); // sqrt(pi)
        assert!(fee_amount(41_132_503_788) == 20566252, 0); // e^(sqrt(2))
        assert!(fee_amount(29_706_864_236) == 14853433, 0); // sqrt(2)^pi
        assert!(fee_amount(22_214_414_691) == 11107208, 0); // pi/sqrt(2)
        assert!(fee_amount(19_221_155_141) == 9610578, 0); // e/sqrt(2)
    }
}

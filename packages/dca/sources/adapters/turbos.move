// wrapper for module turbos_clmm::swap_router
#[allow(lint(self_transfer))]
module dca::turbos {
    use sui::tx_context::{TxContext, sender};
    use turbos_clmm::swap_router;
    use turbos_clmm::pool::{Pool, Versioned};
	use sui::coin::{Self, Coin};
    use sui::clock::Clock;
    use sui::transfer;
    use sui::balance;
    use dca::dca::{Self, DCA, init_trade, resolve_trade};

    public fun swap_a_b<CoinTypeA, CoinTypeB, FeeType>(
		pool: &mut Pool<CoinTypeA, CoinTypeB, FeeType>,
        coin_a: Coin<CoinTypeA>,
		// Exact input amount
        _amount: u64, // todo assert
        amount_threshold: u64, // Minimum output amount
        sqrt_price_limit: u128,
        _is_exact_in: bool,
        _receiver: address, 
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeB>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;

        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = balance::value(&funds);
        balance::join(coin::balance_mut(&mut coin_a), funds);

        dca::assert_max_price_via_output(amount_threshold, &promise);

        swap_router::swap_a_b(
            pool,
            vector[coin_a],
            amount,
            amount_threshold,
            sqrt_price_limit,
            is_exact_in,
            dca::owner(dca),
            deadline,
            clock,
            versioned,
            ctx,
        );

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun swap_b_a<CoinTypeA, CoinTypeB, FeeType>(
		pool: &mut Pool<CoinTypeA, CoinTypeB, FeeType>,
        coin_b: Coin<CoinTypeB>,
		// Exact input amount
        _amount: u64, // todo assert
        amount_threshold: u64,
        sqrt_price_limit: u128,
        _is_exact_in: bool,
        _receiver: address, 
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeB, CoinTypeA>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;

        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = balance::value(&funds);
        balance::join(coin::balance_mut(&mut coin_b), funds);

        dca::assert_max_price_via_output(amount_threshold, &promise);

        swap_router::swap_b_a(
            pool,
            vector[coin_b],
            amount,
            amount_threshold,
            sqrt_price_limit,
            is_exact_in,
            dca::owner(dca),
            deadline,
            clock,
            versioned,
            ctx,
        );

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun swap_a_b_b_c<CoinTypeA, FeeTypeA, CoinTypeB, FeeTypeB, CoinTypeC>(
		pool_a: &mut Pool<CoinTypeA, CoinTypeB, FeeTypeA>,
        pool_b: &mut Pool<CoinTypeB, CoinTypeC, FeeTypeB>,
        coin_a: Coin<CoinTypeA>,
		// Exact input amount
        _amount: u64, // todo assert
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        _is_exact_in: bool,
        _receiver: address,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeC>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;
        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = balance::value(&funds);
        balance::join(coin::balance_mut(&mut coin_a), funds);

        dca::assert_max_price_via_output(amount_threshold, &promise);

        swap_router::swap_a_b_b_c(
            pool_a,
            pool_b,
            vector[coin_a],
            amount,
            amount_threshold,
            sqrt_price_limit_one,
            sqrt_price_limit_two,
            is_exact_in,
            dca::owner(dca),
            deadline,
            clock,
            versioned,
            ctx,
        );

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun swap_a_b_c_b<CoinTypeA, FeeTypeA, CoinTypeB, FeeTypeB, CoinTypeC>(
		pool_a: &mut Pool<CoinTypeA, CoinTypeB, FeeTypeA>,
        pool_b: &mut Pool<CoinTypeC, CoinTypeB, FeeTypeB>,
        coin_a: Coin<CoinTypeA>,
		// Exact input amount
        _amount: u64, // todo assert
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        _is_exact_in: bool,
        _receiver: address,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeC>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;
        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = balance::value(&funds);
        balance::join(coin::balance_mut(&mut coin_a), funds);

        dca::assert_max_price_via_output(amount_threshold, &promise);

        swap_router::swap_a_b_c_b(
            pool_a,
            pool_b,
            vector[coin_a],
            amount,
            amount_threshold,
            sqrt_price_limit_one,
            sqrt_price_limit_two,
            is_exact_in,
            dca::owner(dca),
            deadline,
            clock,
            versioned,
            ctx,
        );

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun swap_b_a_b_c<CoinTypeA, FeeTypeA, CoinTypeB, FeeTypeB, CoinTypeC>(
		pool_a: &mut Pool<CoinTypeB, CoinTypeA, FeeTypeA>,
        pool_b: &mut Pool<CoinTypeB, CoinTypeC, FeeTypeB>,
        coin_a: Coin<CoinTypeA>,
		// Exact input amount
        _amount: u64, // todo assert
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        _is_exact_in: bool,
        _receiver: address,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeC>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;
        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = balance::value(&funds);
        balance::join(coin::balance_mut(&mut coin_a), funds);

        dca::assert_max_price_via_output(amount_threshold, &promise);

        swap_router::swap_b_a_b_c(
            pool_a,
            pool_b,
            vector[coin_a],
            amount,
            amount_threshold,
            sqrt_price_limit_one,
            sqrt_price_limit_two,
            is_exact_in,
            dca::owner(dca),
            deadline,
            clock,
            versioned,
            ctx,
        );

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun swap_b_a_c_b<CoinTypeA, FeeTypeA, CoinTypeB, FeeTypeB, CoinTypeC>(
		pool_a: &mut Pool<CoinTypeB, CoinTypeA, FeeTypeA>,
        pool_b: &mut Pool<CoinTypeC, CoinTypeB, FeeTypeB>,
        coin_a: Coin<CoinTypeA>,
		// Exact input amount
        _amount: u64, // todo assert
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        _is_exact_in: bool,
        _receiver: address,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeC>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;
        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = balance::value(&funds);
        balance::join(coin::balance_mut(&mut coin_a), funds);

        dca::assert_max_price_via_output(amount_threshold, &promise);

        swap_router::swap_b_a_c_b(
            pool_a,
            pool_b,
            vector[coin_a],
            amount,
            amount_threshold,
            sqrt_price_limit_one,
            sqrt_price_limit_two,
            is_exact_in,
            dca::owner(dca),
            deadline,
            clock,
            versioned,
            ctx,
        );

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }
}
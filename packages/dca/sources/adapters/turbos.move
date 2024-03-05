// wrapper for module turbos_clmm::swap_router
#[allow(lint(self_transfer))]
module dca::turbos {
    use sui::tx_context::{TxContext, sender};
    use turbos_clmm::swap_router;
    use turbos_clmm::pool::{Pool, Versioned};
	use sui::coin;
    use sui::clock::Clock;
    use sui::transfer;
    use dca::dca::{Self, DCA, init_trade, resolve_trade};

    const EMinOutputBelowThreshold: u64 = 1;

    public fun swap_a_b<CoinTypeA, CoinTypeB, FeeType>(
		pool: &mut Pool<CoinTypeA, CoinTypeB, FeeType>,
        amount_threshold: u64, // TODO: Minimum output amount
        sqrt_price_limit: u128,
        is_exact_in: bool,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeB>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = coin::value(&funds);

        let min_output = dca::trade_min_output(&promise);
        assert!(
            amount_threshold >= min_output,
            EMinOutputBelowThreshold
        );

        swap_router::swap_a_b(
            pool,
            vector[funds],
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
        amount_threshold: u64,
        sqrt_price_limit: u128,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeB, CoinTypeA>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;

        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = coin::value(&funds);

        let min_output = dca::trade_min_output(&promise);
        assert!(
            amount_threshold >= min_output,
            EMinOutputBelowThreshold
        );

        swap_router::swap_b_a(
            pool,
            vector[funds],
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
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeC>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;
        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = coin::value(&funds);

        let min_output = dca::trade_min_output(&promise);
        assert!(
            amount_threshold >= min_output,
            EMinOutputBelowThreshold
        );

        swap_router::swap_a_b_b_c(
            pool_a,
            pool_b,
            vector[funds],
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
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeC>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;
        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = coin::value(&funds);

        let min_output = dca::trade_min_output(&promise);
        assert!(
            amount_threshold >= min_output,
            EMinOutputBelowThreshold
        );

        swap_router::swap_a_b_c_b(
            pool_a,
            pool_b,
            vector[funds],
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
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeC>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;
        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = coin::value(&funds);

        let min_output = dca::trade_min_output(&promise);
        assert!(
            amount_threshold >= min_output,
            EMinOutputBelowThreshold
        );

        swap_router::swap_b_a_b_c(
            pool_a,
            pool_b,
            vector[funds],
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
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        dca: &mut DCA<CoinTypeA, CoinTypeC>,
        gas_cost: u64,
		ctx: &mut TxContext
    ) {
        let is_exact_in = true;
        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = coin::value(&funds);

        let min_output = dca::trade_min_output(&promise);
        assert!(
            amount_threshold >= min_output,
            EMinOutputBelowThreshold
        );

        swap_router::swap_b_a_c_b(
            pool_a,
            pool_b,
            vector[funds],
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
#[allow(lint(self_transfer))]
module dca::cetus {
    use cetus_clmm::config::GlobalConfig;
    use cetus_clmm::pool::Pool;
    use cetus::router;
    use sui::clock::Clock;
    use sui::coin::{Self, Coin};
    use sui::transfer;
    use sui::tx_context::{TxContext, sender};
    use dca::dca::{Self, DCA, init_trade, resolve_trade};

    public fun swap_ab<A, B>(
        config: &GlobalConfig,
        pool: &mut Pool<A, B>,
        // two constant of sqrt price(x64 fixed-point number). When a2b equals true,
        // it equals 4295048016, when a2b equals false, it equals 79226673515401279992447579055.
        sqrt_price_limit: u128,
        arg_8: bool,
        clock: &Clock,
        dca: &mut DCA<A, B>,
        gas_cost: u64,
        ctx: &mut TxContext
    ) {
        // When it equals true means want to fix the amount of input coin.
        // when it equal false means want to fix the amount of output coin.
        let by_amount_in = true;
        let a2b = true;

        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = coin::value(&funds);

        let (coin_a, coin_b) = router::swap(
            config,
            pool,
            funds,
            coin::zero(ctx),
            a2b,
            by_amount_in,
            amount,
            sqrt_price_limit,
            arg_8,
            clock,
            ctx
        );

        dca::assert_min_price(coin::value(&coin_b), &promise);

        transfer::public_transfer(coin_a, dca::owner(dca));
        transfer::public_transfer(coin_b, dca::owner(dca));

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }
    
    public fun swap_ba<A, B>(
        config: &GlobalConfig,
        pool: &mut Pool<A, B>,
        // two constant of sqrt price(x64 fixed-point number). When a2b equals true,
        // it equals 4295048016, when a2b equals false, it equals 79226673515401279992447579055.
        sqrt_price_limit: u128,
        arg_8: bool,
        clock: &Clock,
        dca: &mut DCA<B, A>,
        gas_cost: u64,
        ctx: &mut TxContext
    ) {
        // When it equals true means want to fix the amount of input coin.
        // when it equal false means want to fix the amount of output coin.
        let by_amount_in = true;
        let a2b = false;

        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount = coin::value(&funds);

        let (coin_a, coin_b) = router::swap(
            config,
            pool,
            coin::zero(ctx),
            funds,
            a2b,
            by_amount_in,
            amount,
            sqrt_price_limit,
            arg_8,
            clock,
            ctx
        );

        dca::assert_min_price(coin::value(&coin_a), &promise);

        transfer::public_transfer(coin_a, dca::owner(dca));
        transfer::public_transfer(coin_b, dca::owner(dca));

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun swap_ab_bc<A, B, C>(
        config: &GlobalConfig,
        pool_i: &mut Pool<A, B>,
        pool_ii: &mut Pool<B, C>,
        _amount_0: u64, // TODO: Consider removing to eliminate redundancy or keep to mitigate interface changes
        amount_1: u64,
        sqrt_price_limit_0: u128,
        sqrt_price_limit_1: u128,
        clock: &Clock,
        dca: &mut DCA<A, C>,
        gas_cost: u64,
        ctx: &mut TxContext
    ) {
        // When it equals true means want to fix the amount of input coin.
        // when it equal false means want to fix the amount of output coin.
        let by_amount_in = true;

        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount_0 = coin::value(&funds);

        let (coin_a, coin_c) = router::swap_ab_bc(
            config,
            pool_i,
            pool_ii,
            funds,
            coin::zero(ctx),
            by_amount_in,
            amount_0,
            amount_1,
            sqrt_price_limit_0,
            sqrt_price_limit_1,
            clock,
            ctx
        );

        dca::assert_min_price(coin::value(&coin_c), &promise);

        transfer::public_transfer(coin_a, dca::owner(dca));
        transfer::public_transfer(coin_c, dca::owner(dca));

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun swap_ab_cb<A, B, C>(
        config: &GlobalConfig,
        pool_i: &mut Pool<A,B>,
        pool_ii: &mut Pool<C,B>,
        _amount_0: u64,
        amount_1: u64,
        sqrt_price_limit_0: u128,
        sqrt_price_limit_1: u128,
        clock: &Clock,
        dca: &mut DCA<A, C>,
        gas_cost: u64,
        ctx: &mut TxContext
    ) {
        // When it equals true means want to fix the amount of input coin.
        // when it equal false means want to fix the amount of output coin.
        let by_amount_in = true;

        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount_0 = coin::value(&funds);

        let (coin_a, coin_c) = router::swap_ab_cb(
            config,
            pool_i,
            pool_ii,
            funds,
            coin::zero(ctx),
            by_amount_in,
            amount_0,
            amount_1,
            sqrt_price_limit_0,
            sqrt_price_limit_1,
            clock,
            ctx
        );

        dca::assert_min_price(coin::value(&coin_c), &promise);

        transfer::public_transfer(coin_a, dca::owner(dca));
        transfer::public_transfer(coin_c, dca::owner(dca));

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun swap_ba_bc<A, B, C>(
        config: &GlobalConfig,
        pool_i: &mut Pool<B, A>,
        pool_ii: &mut Pool<B, C>,
        _amount_0: u64,
        amount_1: u64,
        sqrt_price_limit_0: u128,
        sqrt_price_limit_1: u128,
        clock: &Clock,
        dca: &mut DCA<A, C>,
        gas_cost: u64,
        ctx: &mut TxContext
    ) {
        // When it equals true means want to fix the amount of input coin.
        // when it equal false means want to fix the amount of output coin.
        let by_amount_in = true;

        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount_0 = coin::value(&funds);

        let (coin_a, coin_c) = router::swap_ba_bc(
            config,
            pool_i,
            pool_ii,
            funds,
            coin::zero(ctx),
            by_amount_in,
            amount_0,
            amount_1,
            sqrt_price_limit_0,
            sqrt_price_limit_1,
            clock,
            ctx
        );

        dca::assert_min_price(coin::value(&coin_c), &promise);

        transfer::public_transfer(coin_a, dca::owner(dca));
        transfer::public_transfer(coin_c, dca::owner(dca));

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun swap_ba_cb<A, B, C>(
        config: &GlobalConfig,
        pool_i: &mut Pool<B, A>,
        pool_ii: &mut Pool<C,B>,
        _amount_0: u64,
        amount_1: u64,
        sqrt_price_limit_0: u128,
        sqrt_price_limit_1: u128,
        clock: &Clock,
        dca: &mut DCA<A, C>,
        gas_cost: u64,
        ctx: &mut TxContext
    ) {
        // When it equals true means want to fix the amount of input coin.
        // when it equal false means want to fix the amount of output coin.
        let by_amount_in = true;

        let (funds, promise) = init_trade(dca, clock, ctx);
        let amount_0 = coin::value(&funds);

        let (coin_a, coin_c) = router::swap_ba_cb(
            config,
            pool_i,
            pool_ii,
            funds,
            coin::zero(ctx),
            by_amount_in,
            amount_0,
            amount_1,
            sqrt_price_limit_0,
            sqrt_price_limit_1,
            clock,
            ctx
        );

        dca::assert_min_price(coin::value(&coin_c), &promise);

        transfer::public_transfer(coin_a, dca::owner(dca));
        transfer::public_transfer(coin_c, dca::owner(dca));

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
    }

    public fun calculate_router_swap_result<Ty0, Ty1, Ty2, Ty3>(
        pool_1: &mut Pool<Ty0, Ty1>,
        pool_2: &mut Pool<Ty2, Ty3>,
        a2b: bool,
        b2c: bool,
        by_amount_in: bool,
        amount: u64
    ) {
        router::calculate_router_swap_result(
            pool_1,
            pool_2,
            a2b,
            b2c,
            by_amount_in,
            amount
        )
    }

    public fun check_coin_threshold<Output>(arg_0: &Coin<Output>, arg_1: u64) {
        router::check_coin_threshold(arg_0, arg_1)
    }
}
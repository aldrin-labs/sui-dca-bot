module adapter::cetus_router {
    use cetus_clmm::config::GlobalConfig;
    use cetus_clmm::pool::Pool;
    use cetus::router;
    use std::option::{Self, Option};
    use sui::clock::Clock;
    use sui::coin::Coin;
    use sui::transfer;
    use sui::tx_context::TxContext;
    use dca::dca::{Self, TradePromise};

    // Errors
    const ETradeInputAmountMismatch: u64 = 1;
    const EInputAmountNotFixed: u64 = 2;

	// Witness object
    struct Cetus has drop {}

    public fun swap<A, B>(
        config: &GlobalConfig,
        pool: &mut Pool<A, B>,
        coin_a: Coin<A>,
        coin_b: Coin<B>,
        // the swap direction, a2b equals true means sold coin a then get coin b.
        a2b: bool,
        // When it equals true means want to fix the amount of input coin.
        // when it equal false means want to fix the amount of output coin.
        by_amount_in: bool,
        // when by_amount_in equals true, amount means the quantity of input coin,
        // when by_amount_in equals false, amount means the quantity of output coin.
        amount: u64,
        // two constant of sqrt price(x64 fixed-point number). When a2b equals true,
        // it equals 4295048016, when a2b equals false, it equals 79226673515401279992447579055.
        sqrt_price_limit: u128,
        arg_8: bool,
        clock: &Clock,
        promise_a2b: &mut Option<TradePromise<A, B>>,
        promise_b2a: &mut Option<TradePromise<B, A>>,
        ctx: &mut TxContext
    ) {
        assert!(by_amount_in == true, EInputAmountNotFixed);

        let (coin_a, coin_b) = router::swap(
            config,
            pool,
            coin_a,
            coin_b,
            a2b,
            by_amount_in,
            amount,
            sqrt_price_limit,
            arg_8,
            clock,
            ctx
        );

		
        if (a2b == true) {
            let promise = option::borrow_mut(promise_a2b);
            
            assert!(
                dca::trade_input(promise) == amount,
                ETradeInputAmountMismatch
            );

            transfer::public_transfer(coin_a, dca::trade_owner(promise));
            dca::add_trade_proof_with_coin(Cetus {}, promise, amount, coin_b);
        } else {
            let promise = option::borrow_mut(promise_b2a);

            assert!(
                dca::trade_input(promise) == amount,
                ETradeInputAmountMismatch
            );

            transfer::public_transfer(coin_b, dca::trade_owner(promise));
            dca::add_trade_proof_with_coin(Cetus {}, promise, amount, coin_a);
        }
    }

    public fun swap_ab_bc<A, B, C>(
        config: &GlobalConfig,
        pool_i: &mut Pool<A, B>,
        pool_ii: &mut Pool<B, C>,
        coin_a: Coin<A>,
        coin_c: Coin<C>,
        by_amount_in: bool,
        amount_0: u64,
        amount_1: u64,
        sqrt_price_limit_0: u128,
        sqrt_price_limit_1: u128,
        clock: &Clock,
        promise: &mut TradePromise<A, C>,
        ctx: &mut TxContext
    ) {
        assert!(by_amount_in == true, EInputAmountNotFixed);

        assert!(
            dca::trade_input(promise) == amount_0,
            ETradeInputAmountMismatch
        );

        let (coin_a, coin_c) = router::swap_ab_bc(
            config,
            pool_i,
            pool_ii,
            coin_a,
            coin_c,
            by_amount_in,
            amount_0,
            amount_1,
            sqrt_price_limit_0,
            sqrt_price_limit_1,
            clock,
            ctx
        );

        transfer::public_transfer(coin_a, dca::trade_owner(promise));
        dca::add_trade_proof_with_coin(Cetus {}, promise, amount_0, coin_c);
    }

    public fun swap_ab_cb<A, B, C>(
        config: &GlobalConfig,
        pool_i: &mut Pool<A,B>,
        pool_ii: &mut Pool<C,B>,
        coin_a: Coin<A>,
        coin_c: Coin<C>,
        by_amount_in: bool,
        amount_0: u64,
        amount_1: u64,
        sqrt_price_limit_0: u128,
        sqrt_price_limit_1: u128,
        clock: &Clock,
        promise: &mut TradePromise<A, C>,
        ctx: &mut TxContext
    ) {
        assert!(by_amount_in == true, EInputAmountNotFixed);

        assert!(
            dca::trade_input(promise) == amount_0,
            ETradeInputAmountMismatch
        );

        let (coin_a, coin_c) = router::swap_ab_cb(
            config,
            pool_i,
            pool_ii,
            coin_a,
            coin_c,
            by_amount_in,
            amount_0,
            amount_1,
            sqrt_price_limit_0,
            sqrt_price_limit_1,
            clock,
            ctx
        );

        transfer::public_transfer(coin_a, dca::trade_owner(promise));
        dca::add_trade_proof_with_coin(Cetus {}, promise, amount_0, coin_c);
    }

    public fun swap_ba_bc<A, B, C>(
        config: &GlobalConfig,
        pool_i: &mut Pool<B, A>,
        pool_ii: &mut Pool<B, C>,
        coin_a: Coin<A>,
        coin_c: Coin<C>,
        by_amount_in: bool,
        amount_0: u64,
        amount_1: u64,
        sqrt_price_limit_0: u128,
        sqrt_price_limit_1: u128,
        clock: &Clock,
        promise: &mut TradePromise<A, C>,
        ctx: &mut TxContext
    ) {
        assert!(by_amount_in == true, EInputAmountNotFixed);

        assert!(
            dca::trade_input(promise) == amount_0,
            ETradeInputAmountMismatch
        );

        let (coin_a, coin_c) = router::swap_ba_bc(
            config,
            pool_i,
            pool_ii,
            coin_a,
            coin_c,
            by_amount_in,
            amount_0,
            amount_1,
            sqrt_price_limit_0,
            sqrt_price_limit_1,
            clock,
            ctx
        );

        transfer::public_transfer(coin_a, dca::trade_owner(promise));
        dca::add_trade_proof_with_coin(Cetus {}, promise, amount_0, coin_c);
    }

    public fun swap_ba_cb<A, B, C>(
        config: &GlobalConfig,
        pool_i: &mut Pool<B, A>,
        pool_ii: &mut Pool<C,B>,
        coin_a: Coin<A>,
        coin_c: Coin<C>,
        by_amount_in: bool,
        amount_0: u64,
        amount_1: u64,
        sqrt_price_limit_0: u128,
        sqrt_price_limit_1: u128,
        clock: &Clock,
        promise: &mut TradePromise<A, C>,
        ctx: &mut TxContext
    ) {
        assert!(by_amount_in == true, EInputAmountNotFixed);

        assert!(
            dca::trade_input(promise) == amount_0,
            ETradeInputAmountMismatch
        );

        let (coin_a, coin_c) = router::swap_ba_cb(
            config,
            pool_i,
            pool_ii,
            coin_a,
            coin_c,
            by_amount_in,
            amount_0,
            amount_1,
            sqrt_price_limit_0,
            sqrt_price_limit_1,
            clock,
            ctx
        );

        transfer::public_transfer(coin_a, dca::trade_owner(promise));
        dca::add_trade_proof_with_coin(Cetus {}, promise, amount_0, coin_c);
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
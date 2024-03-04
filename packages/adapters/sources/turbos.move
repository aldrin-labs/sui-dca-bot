// wrapper for module turbos_clmm::swap_router
module adapter::turbos {
    use sui::tx_context::{TxContext};
    use turbos_clmm::swap_router;
    use turbos_clmm::pool::{Pool, Versioned};
	use sui::coin::{Coin};
    use sui::clock::Clock;
    use dca::dca::{Self, TradePromise};

    // Errors
    const ETradeInputAmountMismatch: u64 = 1;

    // Witness object
    struct Turbos has drop {}

    public fun swap_a_b<CoinTypeA, CoinTypeB, FeeType>(
		pool: &mut Pool<CoinTypeA, CoinTypeB, FeeType>,
		coins_a: vector<Coin<CoinTypeA>>, 
		amount: u64, // Input Trade amount
        amount_threshold: u64,
        sqrt_price_limit: u128,
        is_exact_in: bool,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        promise: &mut TradePromise<CoinTypeA, CoinTypeB>,
		ctx: &mut TxContext
    ) {
        assert!(
            dca::trade_input(promise) == amount,
            ETradeInputAmountMismatch
        );

        swap_router::swap_a_b(
            pool,
            coins_a,
            amount,
            amount_threshold,
            sqrt_price_limit,
            is_exact_in,
            dca::trade_owner(promise),
            deadline,
            clock,
            versioned,
            ctx,
        );

        dca::add_trade_proof(Turbos {}, promise, amount, amount_threshold);
    }

    public fun swap_b_a<CoinTypeA, CoinTypeB, FeeType>(
		pool: &mut Pool<CoinTypeA, CoinTypeB, FeeType>,
		coins_b: vector<Coin<CoinTypeB>>, 
		amount: u64,
        amount_threshold: u64,
        sqrt_price_limit: u128,
        is_exact_in: bool,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        promise: &mut TradePromise<CoinTypeB, CoinTypeA>,
		ctx: &mut TxContext
    ) {
        assert!(
            dca::trade_input(promise) == amount,
            ETradeInputAmountMismatch
        );

        swap_router::swap_b_a(
            pool,
            coins_b,
            amount,
            amount_threshold,
            sqrt_price_limit,
            is_exact_in,
            dca::trade_owner(promise),
            deadline,
            clock,
            versioned,
            ctx,
        );

        dca::add_trade_proof(Turbos {}, promise, amount, amount_threshold);
    }

    public fun swap_a_b_b_c<CoinTypeA, FeeTypeA, CoinTypeB, FeeTypeB, CoinTypeC>(
		pool_a: &mut Pool<CoinTypeA, CoinTypeB, FeeTypeA>,
        pool_b: &mut Pool<CoinTypeB, CoinTypeC, FeeTypeB>,
		coins_a: vector<Coin<CoinTypeA>>, 
		amount: u64,
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        is_exact_in: bool,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        promise: &mut TradePromise<CoinTypeA, CoinTypeC>,
		ctx: &mut TxContext
    ) {
        assert!(
            dca::trade_input(promise) == amount,
            ETradeInputAmountMismatch
        );

        swap_router::swap_a_b_b_c(
            pool_a,
            pool_b,
            coins_a,
            amount,
            amount_threshold,
            sqrt_price_limit_one,
            sqrt_price_limit_two,
            is_exact_in,
            dca::trade_owner(promise),
            deadline,
            clock,
            versioned,
            ctx,
        );

        dca::add_trade_proof(Turbos {}, promise, amount, amount_threshold);
    }

    public fun swap_a_b_c_b<CoinTypeA, FeeTypeA, CoinTypeB, FeeTypeB, CoinTypeC>(
		pool_a: &mut Pool<CoinTypeA, CoinTypeB, FeeTypeA>,
        pool_b: &mut Pool<CoinTypeC, CoinTypeB, FeeTypeB>,
		coins_a: vector<Coin<CoinTypeA>>, 
		amount: u64,
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        is_exact_in: bool,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        promise: &mut TradePromise<CoinTypeA, CoinTypeC>,
		ctx: &mut TxContext
    ) {
        assert!(
            dca::trade_input(promise) == amount,
            ETradeInputAmountMismatch
        );

        swap_router::swap_a_b_c_b(
            pool_a,
            pool_b,
            coins_a,
            amount,
            amount_threshold,
            sqrt_price_limit_one,
            sqrt_price_limit_two,
            is_exact_in,
            dca::trade_owner(promise),
            deadline,
            clock,
            versioned,
            ctx,
        );

        dca::add_trade_proof(Turbos {}, promise, amount, amount_threshold);
    }

    public fun swap_b_a_b_c<CoinTypeA, FeeTypeA, CoinTypeB, FeeTypeB, CoinTypeC>(
		pool_a: &mut Pool<CoinTypeB, CoinTypeA, FeeTypeA>,
        pool_b: &mut Pool<CoinTypeB, CoinTypeC, FeeTypeB>,
		coins_a: vector<Coin<CoinTypeA>>, 
		amount: u64,
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        is_exact_in: bool,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        promise: &mut TradePromise<CoinTypeA, CoinTypeC>,
		ctx: &mut TxContext
    ) {
        assert!(
            dca::trade_input(promise) == amount,
            ETradeInputAmountMismatch
        );

        swap_router::swap_b_a_b_c(
            pool_a,
            pool_b,
            coins_a,
            amount,
            amount_threshold,
            sqrt_price_limit_one,
            sqrt_price_limit_two,
            is_exact_in,
            dca::trade_owner(promise),
            deadline,
            clock,
            versioned,
            ctx,
        );

        dca::add_trade_proof(Turbos {}, promise, amount, amount_threshold);
    }

    public fun swap_b_a_c_b<CoinTypeA, FeeTypeA, CoinTypeB, FeeTypeB, CoinTypeC>(
		pool_a: &mut Pool<CoinTypeB, CoinTypeA, FeeTypeA>,
        pool_b: &mut Pool<CoinTypeC, CoinTypeB, FeeTypeB>,
		coins_a: vector<Coin<CoinTypeA>>, 
		amount: u64,
        amount_threshold: u64,
        sqrt_price_limit_one: u128,
        sqrt_price_limit_two: u128,
        is_exact_in: bool,
        deadline: u64,
        clock: &Clock,
        versioned: &Versioned,
        promise: &mut TradePromise<CoinTypeA, CoinTypeC>,
		ctx: &mut TxContext
    ) {
        assert!(
            dca::trade_input(promise) == amount,
            ETradeInputAmountMismatch
        );

        swap_router::swap_b_a_c_b(
            pool_a,
            pool_b,
            coins_a,
            amount,
            amount_threshold,
            sqrt_price_limit_one,
            sqrt_price_limit_two,
            is_exact_in,
            dca::trade_owner(promise),
            deadline,
            clock,
            versioned,
            ctx,
        );

        dca::add_trade_proof(Turbos {}, promise, amount, amount_threshold);
    }
}
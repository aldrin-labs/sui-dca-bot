module cetus::router {
    use cetus_clmm::config::GlobalConfig;
    use cetus_clmm::pool::Pool;
    use cetus::expect_swap;
    use sui::balance;
    use sui::clock::Clock;
    use sui::coin::Coin;
    use sui::event;
    use sui::tx_context::TxContext;

    struct CalculatedRouterSwapResult has copy, drop, store {
    	amount_in: u64,
    	amount_medium: u64,
    	amount_out: u64,
    	is_exceed: bool,
    	current_sqrt_price_ab: u128,
    	current_sqrt_price_cd: u128,
    	targ_et_sqrt_price_ab: u128,
    	targ_et_sqrt_price_cd: u128
    }

    struct CalculatedRouterSwapResultEvent has copy, drop, store {
    	data: CalculatedRouterSwapResult
    }

    public fun swap<Ty0, Ty1>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty0, Ty1>, arg_2: Coin<Ty0>, arg_3: Coin<Ty1>, arg_4: bool, arg_5: bool, arg_6: u64, arg_7: u128, arg_8: bool, arg_9: &Clock, arg_10: &mut TxContext): (Coin<Ty0>, Coin<Ty1>) {
        abort(0)
    }

    public fun swap_ab_bc<Ty0, Ty1, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty0, Ty1>, arg_2: &mut Pool<Ty1, Ty2>, arg_3: Coin<Ty0>, arg_4: Coin<Ty2>, arg_5: bool, arg_6: u64, arg_7: u64, arg_8: u128, arg_9: u128, arg_10: &Clock, arg_11: &mut TxContext): (Coin<Ty0>, Coin<Ty2>) {
        abort(0)
    }

    public fun swap_ab_cb<Ty0, Ty1, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty0, Ty1>, arg_2: &mut Pool<Ty2, Ty1>, arg_3: Coin<Ty0>, arg_4: Coin<Ty2>, arg_5: bool, arg_6: u64, arg_7: u64, arg_8: u128, arg_9: u128, arg_10: &Clock, arg_11: &mut TxContext): (Coin<Ty0>, Coin<Ty2>) {
        abort(0)
    }

    public fun swap_ba_bc<Ty0, Ty1, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty1, Ty0>, arg_2: &mut Pool<Ty1, Ty2>, arg_3: Coin<Ty0>, arg_4: Coin<Ty2>, arg_5: bool, arg_6: u64, arg_7: u64, arg_8: u128, arg_9: u128, arg_10: &Clock, arg_11: &mut TxContext): (Coin<Ty0>, Coin<Ty2>) {
        abort(0)
    }

    public fun swap_ba_cb<Ty0, Ty1, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty1, Ty0>, arg_2: &mut Pool<Ty2, Ty1>, arg_3: Coin<Ty0>, arg_4: Coin<Ty2>, arg_5: bool, arg_6: u64, arg_7: u64, arg_8: u128, arg_9: u128, arg_10: &Clock, arg_11: &mut TxContext): (Coin<Ty0>, Coin<Ty2>) {
        abort(0)
    }

    public fun calculate_router_swap_result<A, B, C, D>(arg_0: &mut Pool<A, B>, arg_1: &mut Pool<C, D>, arg_2: bool, arg_3: bool, arg_4: bool, arg_5: u64) {
        abort(0)
    }

    public fun check_coin_threshold<Ty0>(arg_0: &Coin<Ty0>, arg_1: u64) {
        abort(0)
    }
}
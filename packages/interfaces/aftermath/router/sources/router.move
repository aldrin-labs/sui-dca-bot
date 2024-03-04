module aftermath_router::router {
    use deepbook::clob_v2::Pool;
    use deepbook::custodian_v2::AccountCap;
    use aftermath_swap_cap::admin::AdminCap;
    use aftermath_swap_cap::swap_cap::RouterSwapCap;
    use sui::clock::Clock;
    use sui::coin::Coin;
    use sui::object::UID;
    use sui::transfer;
    use sui::tx_context::TxContext;

    struct DeepBookRouterWrapper has store, key {
    	id: UID,
    	account_cap: AccountCap
    }

    fun init(arg_0: &mut TxContext) {}

    public fun authorize(arg_0: &AdminCap, arg_1: &mut DeepBookRouterWrapper) {
        abort(0)
    }

    public fun revoke_auth(arg_0: &AdminCap, arg_1: &mut DeepBookRouterWrapper) {
        abort(0)
    }

    public fun swap_exact_base_for_quote<Ty0, Ty1, Ty2>(arg_0: &mut DeepBookRouterWrapper, arg_1: &mut RouterSwapCap<Ty0>, arg_2: &mut Pool<Ty1, Ty2>, arg_3: Coin<Ty1>, arg_4: &Clock, arg_5: u64, arg_6: &mut TxContext): Coin<Ty2> {
        abort(0)
    }

    public fun swap_exact_quote_for_base<Ty0, Ty1, Ty2>(arg_0: &mut DeepBookRouterWrapper, arg_1: &mut RouterSwapCap<Ty0>, arg_2: &mut Pool<Ty1, Ty2>, arg_3: Coin<Ty2>, arg_4: &Clock, arg_5: &mut TxContext): Coin<Ty1> {
        abort(0)
    }
}
module cetus::router_with_partner {
    use cetus_clmm::config::GlobalConfig;
    use cetus_clmm::partner::Partner;
    use cetus_clmm::pool::Pool;
    use sui::balance;
    use sui::clock::Clock;
    use sui::coin::Coin;
    use sui::tx_context::TxContext;

    public fun swap_with_partner<Ty0, Ty1>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty0, Ty1>, arg_2: &mut Partner, arg_3: Coin<Ty0>, arg_4: Coin<Ty1>, arg_5: bool, arg_6: bool, arg_7: u64, arg_8: u128, arg_9: bool, arg_10: &Clock, arg_11: &mut TxContext): (Coin<Ty0>, Coin<Ty1>) {
        abort(0)
    }

    public fun swap_ab_bc_with_partner<Ty0, Ty1, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty0, Ty1>, arg_2: &mut Pool<Ty1, Ty2>, arg_3: &mut Partner, arg_4: Coin<Ty0>, arg_5: Coin<Ty2>, arg_6: bool, arg_7: u64, arg_8: u64, arg_9: u128, arg_10: u128, arg_11: &Clock, arg_12: &mut TxContext): (Coin<Ty0>, Coin<Ty2>) {
        abort(0)
    }

    public fun swap_ab_cb_with_partner<Ty0, Ty1, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty0, Ty1>, arg_2: &mut Pool<Ty2, Ty1>, arg_3: &mut Partner, arg_4: Coin<Ty0>, arg_5: Coin<Ty2>, arg_6: bool, arg_7: u64, arg_8: u64, arg_9: u128, arg_10: u128, arg_11: &Clock, arg_12: &mut TxContext): (Coin<Ty0>, Coin<Ty2>) {
        abort(0)
    }

    public fun swap_ba_bc_with_partner<Ty0, Ty1, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty1, Ty0>, arg_2: &mut Pool<Ty1, Ty2>, arg_3: &mut Partner, arg_4: Coin<Ty0>, arg_5: Coin<Ty2>, arg_6: bool, arg_7: u64, arg_8: u64, arg_9: u128, arg_10: u128, arg_11: &Clock, arg_12: &mut TxContext): (Coin<Ty0>, Coin<Ty2>) {
        abort(0)
    }

    public fun swap_ba_cb_with_partner<Ty0, Ty1, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty1, Ty0>, arg_2: &mut Pool<Ty2, Ty1>, arg_3: &mut Partner, arg_4: Coin<Ty0>, arg_5: Coin<Ty2>, arg_6: bool, arg_7: u64, arg_8: u64, arg_9: u128, arg_10: u128, arg_11: &Clock, arg_12: &mut TxContext): (Coin<Ty0>, Coin<Ty2>) {
        abort(0)
    }

}
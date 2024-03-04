module cetus::utils {
    use std::vector;
    use sui::coin::Coin;
    use sui::pay;
    use sui::transfer;
    use sui::tx_context::TxContext;

    public fun merge_coins<Ty0>(arg_0: vector<Coin<Ty0>>, arg_1: &mut TxContext): Coin<Ty0> {
        abort(0)
    }

    public fun send_coin<Ty0>(arg_0: Coin<Ty0>, arg_1: address) {
        abort(0)
    }

    public fun transfer_coin_to_sender<Ty0>(arg_0: Coin<Ty0>, arg_1: &TxContext) {
        abort(0)
    }

}
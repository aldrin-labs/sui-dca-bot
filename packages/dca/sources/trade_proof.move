module dca::proof {
    use dca::math::div;

    struct TradeProof<phantom W, phantom Input, phantom Output> has store, drop {
        input: u64,
        min_output: u64
    }

    public fun create<W: drop, Input, Output>(_wit: W, input: u64, min_output: u64): TradeProof<W, Input, Output> {
        TradeProof<W, Input, Output> {
            input,
            min_output
        }
    }

    public fun min_price<W: drop, Input, Output>(trade_proof: &TradeProof<W, Input, Output>): u64 {
        div(trade_proof.input, trade_proof.min_output)
    }
}

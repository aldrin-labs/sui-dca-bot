module turbos_clmm::math_liquidity {
    use turbos_clmm::i128;

    public fun get_liquidity_for_amounts(
        sqrt_price: u128,
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        amount_a: u128,
        amount_b: u128
    ): u128 {
        abort(0)
    }

    public fun  get_liquidity_for_amount_a(
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        amount_a: u128,
    ): u128 {
        abort(0)
    }

    public fun  get_liquidity_for_amount_b(
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        amount_b: u128,
    ): u128 {
        abort(0)
    }

    public fun add_delta(x: u128, y: i128::I128): u128 {
        abort(0)
    }

    public fun get_amount_for_liquidity(
        sqrt_price: u128,
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        liquidity: u128
    ): (u128, u128) {
        abort(0)
    }

    public fun get_amount_a_for_liquidity(
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        liquidity: u128
    ): u128 {
        abort(0)
    }

    public fun get_amount_b_for_liquidity(
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        liquidity: u128
    ): u128 {
        abort(0)
    }
}
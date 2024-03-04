module turbos_clmm::math_sqrt_price {
    use turbos_clmm::i128;

    public fun get_amount_a_delta_(
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        liquidity: u128,
        round_up: bool,
    ): u128 {
        abort(0)
    }

    public fun get_amount_b_delta_(
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        liquidity: u128,
        round_up: bool,
    ): u128 {
        abort(0)
    }

    public fun get_amount_a_delta(
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        liquidity: i128::I128,
    ): i128::I128 {
        abort(0)
    }

    public fun get_amount_b_delta(
        sqrt_price_a: u128,
        sqrt_price_b: u128,
        liquidity: i128::I128,
    ): i128::I128 {
        abort(0)
    }

    public fun get_next_sqrt_price(
        sqrt_price: u128,
        liquidity: u128,
        amount: u128,
        amount_specified_is_input: bool,
        a_to_b: bool,
    ): u128 {
        abort(0)
    }

    fun get_next_sqrt_price_from_amount_a_rounding_up(
        sqrt_price: u128,
        liquidity: u128,
        amount: u128,
        add: bool
    ): u128 {
        abort(0)
    }

    public fun mul_div_round_fixed(num1: u256, num2: u256, denom: u256): u128 {
        abort(0)
    }

    fun get_next_sqrt_price_from_amount_b_rounding_down(
        sqrt_price: u128,
        liquidity: u128,
        amount: u128,
        add: bool
    ): u128 {
        abort(0)
    }
}
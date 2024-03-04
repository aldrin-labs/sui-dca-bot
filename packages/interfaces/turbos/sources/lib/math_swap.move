module turbos_clmm::math_swap {
    public fun compute_swap(
        sqrt_price_current: u128,
        sqrt_price_targ_et: u128,
        liquidity: u128,
        amount_remaining: u128,
        amount_specified_is_input: bool,
        fee_rate: u32,
    ): (u128, u128, u128, u128) {
        abort(0)
    }
    
    public fun get_amount_fixed_delta(
        sqrt_price_current: u128,
        sqrt_price_targ_et: u128,
        liquidity: u128,
        amount_specified_is_input: bool,
        a_to_b: bool,
    ): u128 {
        abort(0)
    }

    public fun get_amount_unfixed_delta(
        sqrt_price_current: u128,
        sqrt_price_targ_et: u128,
        liquidity: u128,
        amount_specified_is_input: bool,
        a_to_b: bool,
    ): u128 {
        abort(0)
    }
}

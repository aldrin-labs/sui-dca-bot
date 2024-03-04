module turbos_clmm::math_tick {
    use turbos_clmm::i32;

    public fun get_min_tick(tick_sacing: u32): i32::I32 {
		abort(0)
    }

	public fun get_max_tick(tick_sacing: u32): i32::I32 {
		abort(0)
    }

    public fun max_liquidity_per_tick(tick_spacing: u32): u128 {
        abort(0)
    }

    public fun tick_index_from_sqrt_price(sqrt_price_x64: u128): i32::I32 {
        abort(0)
    }

    public fun sqrt_price_from_tick_index(tick: i32::I32) : u128 {
        abort(0)
    }

    public fun get_sqrt_price_positive_tick(tick: i32::I32) : u128 {
        abort(0)
    }

    public fun get_sqrt_price_negative_tick(tick: i32::I32) : u128 {
        abort(0)
    }
}
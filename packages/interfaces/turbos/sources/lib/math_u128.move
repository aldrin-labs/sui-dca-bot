module turbos_clmm::math_u128 {
    public fun wrapping_add(n1: u128, n2: u128): u128 {
        abort(0)
    }

    public fun overflowing_add(n1: u128, n2: u128): (u128, bool) {
        abort(0)
    }
    
    public fun wrapping_sub(n1: u128, n2: u128): u128 {
        abort(0)
    }
    
    public fun overflowing_sub(n1: u128, n2: u128): (u128, bool) {
        abort(0)
    }
    
    public fun wrapping_mul(n1: u128, n2: u128): u128 {
        abort(0)
    }
    
    public fun overflowing_mul(n1: u128, n2: u128): (u128, bool) {
        abort(0)
    }

    public fun full_mul(n1: u128, n2: u128): (u128, u128) {
        abort(0)
    }

    public fun hi(n: u128): u64 {
        abort(0)
    }

    public fun lo(n: u128): u64 {
        abort(0)
    }

    public fun hi_u128(n: u128): u128 {
        abort(0)
    }

    public fun lo_u128(n: u128): u128 {
        abort(0)
    }

    public fun from_lo_hi(lo: u64, hi: u64): u128 {
        abort(0)
    }

    public fun checked_div_round(num: u128, denom: u128, round_up: bool): u128 {
        abort(0)
    }

    public fun max(num1: u128, num2: u128): u128 {
        abort(0)
    }

    public fun min(num1: u128, num2: u128): u128 {
        abort(0)
    }

    public fun leading_zeros(a: u128): u8 {
        abort(0)
    }

    public fun pow(base: u128, exponent: u8): u128 {
        abort(0)
    }
}
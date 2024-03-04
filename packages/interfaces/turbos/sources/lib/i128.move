module turbos_clmm::i128 {
    use turbos_clmm::i64;
    use turbos_clmm::i32;

    struct I128 has copy, drop, store {
        bits: u128
    }

    public fun zero(): I128 {
        abort(0)
    }

    public fun from(v: u128): I128 {
        abort(0)
    }

    public fun neg_from(v: u128): I128 {
        abort(0)
    }

    public fun neg(v: I128): I128 {
        abort(0)
    }

    public fun wrapping_add(num1: I128, num2:I128): I128 {
        abort(0)
    }

    public fun add(num1: I128, num2: I128): I128 {
        abort(0)
    }

    public fun overflowing_add(num1: I128, num2: I128): (I128, bool) {
        abort(0)
    }

    public fun wrapping_sub(num1: I128, num2: I128): I128 {
        abort(0)
    }
    
    public fun sub(num1: I128, num2: I128): I128 {
        abort(0)
    }

    public fun overflowing_sub(num1: I128, num2: I128): (I128, bool) {
        abort(0)
    }

    public fun mul(num1: I128, num2: I128): I128 {
        abort(0)
    }

    public fun div(num1: I128, num2: I128): I128 {
        abort(0)
    }

    public fun abs(v: I128): I128 {
        abort(0)
    }

    public fun abs_u128(v: I128): u128 {
        abort(0)
    }

    public fun shl(v: I128, shift: u8): I128 {
        abort(0)
    }

    public fun shr(v: I128, shift: u8): I128 {
        abort(0)
    }

    public fun as_u128(v: I128): u128 {
        abort(0)
    }

    public fun as_i64(v: I128): i64::I64 {
        abort(0)
    }

    public fun as_i32(v: I128): i32::I32 {
        abort(0)
    }

    public fun sign(v: I128): u8 {
        abort(0)
    }

    public fun is_neg(v: I128): bool {
        abort(0)
    }

    public fun cmp(num1: I128, num2: I128): u8 {
        abort(0)
    }

    public fun eq(num1: I128, num2: I128): bool {
        abort(0)
    }

    public fun gt(num1: I128, num2: I128): bool {
        abort(0)
    }
    
    public fun gte(num1: I128, num2: I128): bool {
        abort(0)
    }
    
    public fun lt(num1: I128, num2: I128): bool {
        abort(0)
    }
    
    public fun lte(num1: I128, num2: I128): bool {
        abort(0)
    }

    public fun or(num1: I128, num2: I128): I128 {
        abort(0)
    }

    public fun and(num1: I128, num2: I128): I128 {
        abort(0)
    }

    fun u128_neg(v :u128) : u128 {
        abort(0)
    }

    fun u8_neg(v: u8): u8 {
        abort(0)
    }

}
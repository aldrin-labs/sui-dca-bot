module turbos_clmm::i64 {
    struct I64 has copy, drop, store {
        bits: u64
    }

    public fun zero(): I64 {
        abort(0)
    }

    public fun from_u64(v: u64): I64 {
        abort(0)
    }

    public fun from(v: u64): I64 {
        abort(0)
    }

    public fun neg_from(v: u64): I64 {
        abort(0)
    }

    public fun wrapping_add(num1: I64, num2: I64): I64 {
        abort(0)
    }

    public fun add(num1: I64, num2: I64): I64 {
        abort(0)
    }

    public fun wrapping_sub(num1: I64, num2: I64): I64 {
        abort(0)
    }

    public fun sub(num1: I64, num2: I64): I64 {
        abort(0)
    }

    public fun mul(num1: I64, num2: I64): I64 {
        abort(0)
    }

    public fun div(num1: I64, num2: I64): I64 {
        abort(0)
    }

    public fun abs(v: I64): I64 {
        abort(0)
    }

    public fun abs_u64(v: I64): u64 {
        abort(0)
    }

    public fun shl(v: I64, shift: u8): I64 {
        abort(0)
    }

    public fun shr(v: I64, shift: u8): I64 {
        abort(0)
    }

    public fun mod(v: I64, n: I64): I64 {
        abort(0)
    }

    public fun as_u64(v: I64): u64 {
        abort(0)
    }

    public fun sign(v: I64): u8 {
        abort(0)
    }

    public fun is_neg(v: I64): bool {
        abort(0)
    }

    public fun cmp(num1: I64, num2: I64): u8 {
        abort(0)
    }

    public fun eq(num1: I64, num2: I64): bool {
        abort(0)
    }

    public fun gt(num1: I64, num2: I64): bool {
        abort(0)
    }

    public fun gte(num1: I64, num2: I64): bool {
        abort(0)
    }

    public fun lt(num1: I64, num2: I64): bool {
        abort(0)
    }

    public fun lte(num1: I64, num2: I64): bool {
        abort(0)
    }

    public fun or(num1: I64, num2: I64): I64 {
        abort(0)
    }

    public fun and(num1: I64, num2: I64): I64 {
        abort(0)
    }

    fun u64_neg(v: u64): u64 {
        abort(0)
    }

    fun u8_neg(v: u8): u8 {
        abort(0)
    }
}
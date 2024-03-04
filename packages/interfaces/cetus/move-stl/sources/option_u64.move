module move_stl::option_u64 {
    struct OptionU64 has copy, drop, store {
        is_none: bool,
        v: u64
    }

    public fun some(v: u64): OptionU64 {
        abort(0)
    }

    public fun none(): OptionU64 {
        abort(0)
    }

    public fun borrow(opt: &OptionU64): u64 {
        abort(0)
    }

    public fun borrow_mut(opt: &mut OptionU64): &mut u64 {
        abort(0)
    }

    public fun swap_or_fill(opt: &mut OptionU64, v: u64) {
        abort(0)
    }

    public fun is_some(opt: &OptionU64): bool {
        abort(0)
    }

    public fun is_none(opt: &OptionU64): bool {
        abort(0)
    }

    public fun contains(opt: &OptionU64, e_ref: u64): bool {
        abort(0)
    }

    public fun is_some_and_lte(opt: &OptionU64, v: u64): bool {
        abort(0)
    }
}
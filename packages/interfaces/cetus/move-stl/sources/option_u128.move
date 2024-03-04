module move_stl::option_u128 {
    struct OptionU128 has copy, drop, store {
        is_none: bool,
        v: u128
    }

    public fun some(v: u128): OptionU128 {
        abort(0)
    }

    public fun none(): OptionU128 {
        abort(0)
    }

    public fun borrow(opt: &OptionU128): u128 {
        abort(0)
    }

    public fun borrow_mut(opt: &mut OptionU128): &mut u128 {
        abort(0)
    }

    public fun swap_or_fill(opt: &mut OptionU128, v: u128) {
        abort(0)
    }

    public fun is_some(opt: &OptionU128): bool {
        abort(0)
    }

    public fun is_none(opt: &OptionU128): bool {
        abort(0)
    }

    public fun contains(opt: &OptionU128, e_ref: u128): bool {
        abort(0)
    }

    public fun is_some_and_eq(opt: &OptionU128, v: u128): bool {
        abort(0)
    }

    public fun is_some_and_lte(opt: &OptionU128, v: u128): bool {
        abort(0)
    }
}
module move_stl::random {
    struct Random has drop, store, copy {
        seed: u64
    }

    public fun new(seed: u64): Random {
        abort(0)
    }

    public fun seed(r: &mut Random, seed: u64) {
        abort(0)
    }

    public fun rand_n(r: &mut Random, n: u64): u64 {
        abort(0)
    }

    public fun rand(r: &mut Random): u64 {
        abort(0)
    }

    public fun seed_rand(r: &mut Random, seed: u64): u64 {
        abort(0)
    }
}
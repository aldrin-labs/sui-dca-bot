module cetus_clmm::tick {
    use std::option::Option;
    use integer_mate::i32::I32;
    use integer_mate::i128::I128;
    use move_stl::skip_list::SkipList;
    use move_stl::option_u64::OptionU64;

    struct TickManager has store {
        tick_spacing: u32,
        ticks: SkipList<Tick>
    }

    struct Tick has copy, drop, store {
        index: I32,
        sqrt_price: u128,
        liquidity_net: I128,
        liquidity_gross: u128,
        fee_growth_outside_a: u128,
        fee_growth_outside_b: u128,
        points_growth_outside: u128,
        rewards_growth_outside: vector<u128>,
    }

    public fun first_score_for_swap(
        _manager: &TickManager,
        _current_tick_idx: I32,
        _a2b: bool,
    ): OptionU64 {
        abort(0)
    }

    public fun borrow_tick_for_swap(_manager: &TickManager, _score: u64, _a2b: bool): (&Tick, OptionU64) {
        abort(0)
    }

    public fun tick_spacing(_manager: &TickManager): u32 {
        abort(0)
    }

    public fun index(_tick: &Tick): I32 {
        abort(0)
    }

    public fun sqrt_price(_tick: &Tick): u128 {
        abort(0)
    }

    public fun liquidity_net(_tick: &Tick): I128 {
        abort(0)
    }

    public fun liquidity_gross(_tick: &Tick): u128 {
        abort(0)
    }

    public fun fee_growth_outside(_tick: &Tick): (u128, u128) {
        abort(0)
    }

    public fun points_growth_outside(_tick: &Tick): u128 {
        abort(0)
    }

    public fun rewards_growth_outside(_tick: &Tick): &vector<u128> {
        abort(0)
    }

    public fun borrow_tick(_manager: &TickManager, _idx: I32): &Tick {
        abort(0)
    }

    public fun get_reward_growth_outside(_tick: &Tick, _idx: u64): u128 {
        abort(0)
    }

    public fun get_fee_in_range(
        _pool_current_tick_index: I32,
        _fee_growth_global_a: u128,
        _fee_growth_global_b: u128,
        _op_tick_lower: Option<Tick>,
        _op_tick_upper: Option<Tick>
    ): (u128, u128) {
        abort(0)
    }

    public fun get_rewards_in_range(
        _pool_current_tick_index: I32,
        _rewards_growth_globals: vector<u128>,
        _op_tick_lower: Option<Tick>,
        _op_tick_upper: Option<Tick>
    ): vector<u128> {
        abort(0)
    }

    public fun get_points_in_range(
        _pool_current_tick_index: I32,
        _points_growth_global: u128,
        _op_tick_lower: Option<Tick>,
        _op_tick_upper: Option<Tick>
    ): u128 {
        abort(0)
    }


    public fun fetch_ticks(
        _manager: &TickManager,
        _start: vector<u32>,
        _limit: u64
    ): vector<Tick> {
        abort(0)
    }
}

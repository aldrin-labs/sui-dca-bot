module cetus::fetcher_script {
    use cetus_clmm::config::GlobalConfig;
    use cetus_clmm::factory::{Pools, PoolSimpleInfo};
    use cetus_clmm::pool::{Pool, CalculatedSwapResult};
    use cetus_clmm::position::PositionInfo;
    use cetus_clmm::tick::Tick;
    use sui::clock::Clock;
    use sui::object::ID;

    struct FetchTicksResultEvent has copy, drop, store {
    	ticks: vector<Tick>
    }

    struct CalculatedSwapResultEvent has copy, drop, store {
    	data: CalculatedSwapResult
    }

    struct FetchPositionsEvent has copy, drop, store {
    	positions: vector<PositionInfo>
    }

    struct FetchPoolsEvent has copy, drop, store {
    	pools: vector<PoolSimpleInfo>
    }

    struct FetchPositionRewardsEvent has copy, drop, store {
    	data: vector<u64>,
    	position_id: ID
    }

    struct FetchPositionFeesEvent has copy, drop, store {
    	position_id: ID,
    	fee_owned_a: u64,
    	fee_owned_b: u64
    }

    struct FetchPositionPointsEvent has copy, drop, store {
    	position_id: ID,
    	points_owned: u128
    }

    entry public fun fetch_ticks<Ty0, Ty1>(arg_0: &Pool<Ty0, Ty1>, arg_1: vector<u32>, arg_2: u64) {
        abort(0)
    }

    entry public fun fetch_positions<Ty0, Ty1>(arg_0: &Pool<Ty0, Ty1>, arg_1: vector<ID>, arg_2: u64) {
        abort(0)
    }

    entry public fun fetch_pools(arg_0: &Pools, arg_1: vector<ID>, arg_2: u64) {
        abort(0)
    }

    entry public fun calculate_swap_result<Ty0, Ty1>(arg_0: &Pool<Ty0, Ty1>, arg_1: bool, arg_2: bool, arg_3: u64) {
        abort(0)
    }

    entry public fun fetch_position_rewards<Ty0, Ty1>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty0, Ty1>, arg_2: ID, arg_3: &Clock) {
        abort(0)
    }

    entry public fun fetch_position_fees<Ty0, Ty1>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty0, Ty1>, arg_2: ID) {
        abort(0)
    }

    entry public fun fetch_position_points<Ty0, Ty1>(arg_0: &GlobalConfig, arg_1: &mut Pool<Ty0, Ty0>, arg_2: ID, arg_3: &Clock) {
        abort(0)
    }

}
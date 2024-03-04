module cetus::pool_script_v2 {
    use cetus_clmm::config::GlobalConfig;
	use cetus_clmm::factory::Pools;
	use cetus_clmm::partner::Partner;
	use cetus_clmm::pool::Pool;
	use cetus_clmm::position::Position;
	use cetus_clmm::rewarder::RewarderGlobalVault;
	use std::string::String;
	use sui::clock::Clock;
	use sui::coin::Coin;
	use sui::package::Publisher;
	use sui::tx_context::TxContext;
    
    entry public fun create_pool<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pools, arg_2: u32, arg_3: u128, arg_4: String, arg_5: &Clock, arg_6: &mut TxContext) {
        abort(0)
    }
    
    entry public fun create_pool_with_liquidity<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pools, arg_2: u32, arg_3: u128, arg_4: String, arg_5: Coin<QUOTE>, arg_6: Coin<BASE>, arg_7: u32, arg_8: u32, arg_9: u64, arg_10: u64, arg_11: bool, arg_12: &Clock, arg_13: &mut TxContext) {
        abort(0)
    }
    
    entry public fun open_position<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: u32, arg_3: u32, arg_4: &mut TxContext) {
        abort(0)
    }
    
    entry public fun open_position_with_liquidity<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: u32, arg_3: u32, arg_4: Coin<QUOTE>, arg_5: Coin<BASE>, arg_6: u64, arg_7: u64, arg_8: u128, arg_9: &Clock, arg_10: &mut TxContext) {
        abort(0)
    }
    
    entry public fun open_position_with_liquidity_by_fix_coin<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: u32, arg_3: u32, arg_4: Coin<QUOTE>, arg_5: Coin<BASE>, arg_6: u64, arg_7: u64, arg_8: bool, arg_9: &Clock, arg_10: &mut TxContext) {
        abort(0)
    }
    
    entry public fun add_liquidity<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &mut Position, arg_3: Coin<QUOTE>, arg_4: Coin<BASE>, arg_5: u64, arg_6: u64, arg_7: u128, arg_8: &Clock, arg_9: &mut TxContext) {
        abort(0)
    }
    
    entry public fun add_liquidity_by_fix_coin<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &mut Position, arg_3: Coin<QUOTE>, arg_4: Coin<BASE>, arg_5: u64, arg_6: u64, arg_7: bool, arg_8: &Clock, arg_9: &mut TxContext) {
        abort(0)
    }
    
    entry public fun remove_liquidity<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &mut Position, arg_3: u128, arg_4: u64, arg_5: u64, arg_6: &Clock, arg_7: &mut TxContext) {
        abort(0)
    }
    
    entry public fun close_position<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: Position, arg_3: u64, arg_4: u64, arg_5: &Clock, arg_6: &mut TxContext) {
        abort(0)
    }
    
    entry public fun collect_fee<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &mut Position, arg_3: Coin<QUOTE>, arg_4: Coin<BASE>, arg_5: &mut TxContext) {
        abort(0)
    }
    
    entry public fun collect_reward<QUOTE, BASE, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &mut Position, arg_3: &mut RewarderGlobalVault, arg_4: Coin<Ty2>, arg_5: &Clock, arg_6: &mut TxContext) {
        abort(0)
    }
    
    entry public fun collect_protocol_fee<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: Coin<QUOTE>, arg_3: Coin<BASE>, arg_4: &mut TxContext) {
        abort(0)
    }
    
    entry public fun swap_a2b<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: Coin<QUOTE>, arg_3: Coin<BASE>, arg_4: bool, arg_5: u64, arg_6: u64, arg_7: u128, arg_8: &Clock, arg_9: &mut TxContext) {
        abort(0)
    }
    
    entry public fun swap_b2a<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: Coin<QUOTE>, arg_3: Coin<BASE>, arg_4: bool, arg_5: u64, arg_6: u64, arg_7: u128, arg_8: &Clock, arg_9: &mut TxContext) {
        abort(0)
    }
    
    entry public fun swap_a2b_with_partner<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &mut Partner, arg_3: Coin<QUOTE>, arg_4: Coin<BASE>, arg_5: bool, arg_6: u64, arg_7: u64, arg_8: u128, arg_9: &Clock, arg_10: &mut TxContext) {
        abort(0)
    }
    
    entry public fun swap_b2a_with_partner<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &mut Partner, arg_3: Coin<QUOTE>, arg_4: Coin<BASE>, arg_5: bool, arg_6: u64, arg_7: u64, arg_8: u128, arg_9: &Clock, arg_10: &mut TxContext) {
        abort(0)
    }
    
    entry public fun update_fee_rate<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: u64, arg_3: &TxContext) {
        abort(0)
    }
    
    entry public fun initialize_rewarder<QUOTE, BASE, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &mut TxContext) {
        abort(0)
    }
    
    entry public fun update_rewarder_emission<QUOTE, BASE, Ty2>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &RewarderGlobalVault, arg_3: u128, arg_4: &Clock, arg_5: &mut TxContext) {
        abort(0)
    }
    
    entry public fun pause_pool<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &TxContext) {
        abort(0)
    }
    
    entry public fun unpause_pool<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: &TxContext) {
        abort(0)
    }
    
    entry public fun update_position_url<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &mut Pool<QUOTE, BASE>, arg_2: String, arg_3: &TxContext) {
        abort(0)
    }
    
    entry public fun set_display<QUOTE, BASE>(arg_0: &GlobalConfig, arg_1: &Publisher, arg_2: String, arg_3: String, arg_4: String, arg_5: String, arg_6: String, arg_7: String, arg_8: &mut TxContext) {
        abort(0)
    }
}

module cetus::config_script {
    use cetus_clmm::config::{GlobalConfig, AdminCap};
    use std::string::String;
    use sui::package::Publisher;
    use sui::tx_context::TxContext;
    
    entry public fun update_protocol_fee_rate(arg_0: &mut GlobalConfig, arg_1: u64, arg_2: &TxContext) {
        abort(0)
    }
    
    entry public fun add_fee_tier(arg_0: &mut GlobalConfig, arg_1: u32, arg_2: u64, arg_3: &TxContext) {
        abort(0)
    }
    
    entry public fun update_fee_tier(arg_0: &mut GlobalConfig, arg_1: u32, arg_2: u64, arg_3: &TxContext) {
        abort(0)
    }
    
    entry public fun delete_fee_tier(arg_0: &mut GlobalConfig, arg_1: u32, arg_2: &TxContext) {
        abort(0)
    }
    
    entry public fun set_roles(arg_0: &AdminCap, arg_1: &mut GlobalConfig, arg_2: address, arg_3: u128) {
        abort(0)
    }
    
    entry public fun add_role(arg_0: &AdminCap, arg_1: &mut GlobalConfig, arg_2: address, arg_3: u8) {
        abort(0)
    }
    
    entry public fun remove_role(arg_0: &AdminCap, arg_1: &mut GlobalConfig, arg_2: address, arg_3: u8) {
        abort(0)
    }
    
    entry public fun remove_member(arg_0: &AdminCap, arg_1: &mut GlobalConfig, arg_2: address) {
        abort(0)
    }
    
    entry public fun set_position_display(arg_0: &GlobalConfig, arg_1: &Publisher, arg_2: String, arg_3: String, arg_4: String, arg_5: String, arg_6: &mut TxContext) {
        abort(0)
    }
}
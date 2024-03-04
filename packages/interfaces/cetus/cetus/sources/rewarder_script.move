module cetus::rewarder_script {
    use cetus_clmm::config::{GlobalConfig, AdminCap};
    use cetus_clmm::rewarder::RewarderGlobalVault;
    use cetus::utils;
    use sui::balance;
    use sui::coin::Coin;
    use sui::tx_context::TxContext;

    entry public fun deposit_reward<Ty0>(arg_0: &GlobalConfig, arg_1: &mut RewarderGlobalVault, arg_2: vector<Coin<Ty0>>, arg_3: u64, arg_4: &mut TxContext) {
        abort(0)
    }
    entry public fun emergent_withdraw<Ty0>(arg_0: &AdminCap, arg_1: &GlobalConfig, arg_2: &mut RewarderGlobalVault, arg_3: u64, arg_4: address, arg_5: &mut TxContext) {
        abort(0)
    }
    entry public fun emergent_withdraw_all<Ty0>(arg_0: &AdminCap, arg_1: &GlobalConfig, arg_2: &mut RewarderGlobalVault, arg_3: address, arg_4: &mut TxContext) {
        abort(0)
    }
}
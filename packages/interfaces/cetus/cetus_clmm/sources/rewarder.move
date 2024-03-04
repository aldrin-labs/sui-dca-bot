module cetus_clmm::rewarder {
    use std::option::Option;
    use std::type_name::TypeName;
    use sui::bag::Bag;
    use sui::balance::Balance;
    use sui::object::{UID, ID};
    use cetus_clmm::config::{GlobalConfig, AdminCap};

    struct RewarderManager has store {
        rewarders: vector<Rewarder>,
        points_released: u128,
        points_growth_global: u128,
        last_updated_time: u64,
    }

    struct Rewarder has copy, drop, store {
        reward_coin: TypeName,
        emissions_per_second: u128,
        growth_global: u128,
    }

    struct RewarderGlobalVault has key, store {
        id: UID,
        balances: Bag
    }

    struct RewarderInitEvent has copy, drop {
        global_vault_id: ID,
    }

    struct DepositEvent has copy, drop, store {
        reward_type: TypeName,
        deposit_amount: u64,
        after_amount: u64
    }

    struct EmergentWithdrawEvent has copy, drop, store {
        reward_type: TypeName,
        withdraw_amount: u64,
        after_amount: u64
    }

    public fun rewarders(_manager: &RewarderManager): vector<Rewarder> {
        abort(0)
    }

    public fun rewards_growth_global(_manager: &RewarderManager): vector<u128> {
        abort(0)
    }

    public fun points_released(_manager: &RewarderManager): u128 {
        abort(0)
    }

    public fun points_growth_global(_manager: &RewarderManager): u128 {
        abort(0)
    }

    public fun last_update_time(_manager: &RewarderManager): u64 {
        abort(0)
    }

    public fun reward_coin(_rewarder: &Rewarder): TypeName {
        abort(0)
    }

    public fun emissions_per_second(_rewarder: &Rewarder): u128 {
        abort(0)
    }

    public fun growth_global(_rewarder: &Rewarder): u128 {
        abort(0)
    }

    public fun rewarder_index<CoinType>(_manager: &RewarderManager): Option<u64> {
        abort(0)
    }

    public fun borrow_rewarder<CoinType>(_manager: &RewarderManager): &Rewarder {
        abort(0)
    }

    public fun deposit_reward<CoinType>(
        _config: &GlobalConfig,
        _vault: &mut RewarderGlobalVault,
        _balance: Balance<CoinType>
    ): u64 {
        abort(0)
    }

    public fun emergent_withdraw<CoinType>(
        _: &AdminCap,
        _config: &GlobalConfig,
        _vault: &mut RewarderGlobalVault,
        _amount: u64
    ): Balance<CoinType> {
        abort(0)
    }

    public fun balances(
        _vault: & RewarderGlobalVault
    ): &Bag {
        abort(0)
    }

    public fun balance_of<CoinType>(
        _vault: &RewarderGlobalVault
    ): u64 {
        abort(0)
    }
}

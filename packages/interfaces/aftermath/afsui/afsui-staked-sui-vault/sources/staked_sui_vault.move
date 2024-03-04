// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module lsd::staked_sui_vault {
	struct AdminCap has store, key {
		id: sui::object::UID
	}

	struct CreateStakedSuiVaultCap has store, key {
		id: sui::object::UID
	}

	struct STAKED_SUI_VAULT has drop {
		dummy_field: bool
	}

	struct StakedSuiVault has key {
		id: sui::object::UID,
		version: u64
	}

	fun init(
		_arg_0: lsd::staked_sui_vault::STAKED_SUI_VAULT,
		_arg_1: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun afsui_to_sui_exchange_rate(
		_arg_0: &lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>
	): u128
	{
		abort 0
	}

	public fun afsui_to_sui(
		_arg_0: &lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: u64
	): u64
	{
		abort 0
	}

	public fun sui_to_afsui_exchange_rate(
		_arg_0: &lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>
	): u128
	{
		abort 0
	}

	public fun sui_to_afsui(
		_arg_0: &lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: u64
	): u64
	{
		abort 0
	}

	public fun total_sui_amount(
		_arg_0: &lsd::staked_sui_vault::StakedSuiVault
	): u64
	{
		abort 0
	}

	public fun total_rewards_amount(
		_arg_0: &lsd::staked_sui_vault::StakedSuiVault
	): u64
	{
		abort 0
	}

	public fun epoch_was_changed(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &mut sui_system::sui_system::SuiSystemState,
		_arg_3: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_4: &mut afsui_treasury::treasury::Treasury,
		_arg_5: u64,
		_arg_6: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun add_crank_incentives(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: sui::coin::Coin<sui::sui::SUI>
	)
	{
		abort 0
	}

	public fun request_stake(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &mut sui_system::sui_system::SuiSystemState,
		_arg_3: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_4: sui::coin::Coin<sui::sui::SUI>,
		_arg_5: address,
		_arg_6: &mut sui::tx_context::TxContext
	): sui::coin::Coin<afsui::afsui::AFSUI>
	{
		abort 0
	}

	entry fun request_stake_and_keep(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &mut sui_system::sui_system::SuiSystemState,
		_arg_3: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_4: sui::coin::Coin<sui::sui::SUI>,
		_arg_5: address,
		_arg_6: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun request_stake_vec(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &mut sui_system::sui_system::SuiSystemState,
		_arg_3: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_4: vector<sui::coin::Coin<sui::sui::SUI>>,
		_arg_5: address,
		_arg_6: &mut sui::tx_context::TxContext
	): sui::coin::Coin<afsui::afsui::AFSUI>
	{
		abort 0
	}

	entry fun request_stake_vec_and_keep(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &mut sui_system::sui_system::SuiSystemState,
		_arg_3: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_4: vector<sui::coin::Coin<sui::sui::SUI>>,
		_arg_5: address,
		_arg_6: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun request_stake_staked_sui(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &mut sui_system::sui_system::SuiSystemState,
		_arg_3: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_4: sui_system::staking_pool::StakedSui,
		_arg_5: address,
		_arg_6: &mut sui::tx_context::TxContext
	): sui::coin::Coin<afsui::afsui::AFSUI>
	{
		abort 0
	}

	entry fun request_stake_staked_sui_and_keep(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &mut sui_system::sui_system::SuiSystemState,
		_arg_3: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_4: sui_system::staking_pool::StakedSui,
		_arg_5: address,
		_arg_6: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun request_stake_staked_sui_vec(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &mut sui_system::sui_system::SuiSystemState,
		_arg_3: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_4: vector<sui_system::staking_pool::StakedSui>,
		_arg_5: address,
		_arg_6: &mut sui::tx_context::TxContext
	): sui::coin::Coin<afsui::afsui::AFSUI>
	{
		abort 0
	}

	entry fun request_stake_staked_sui_vec_and_keep(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &mut sui_system::sui_system::SuiSystemState,
		_arg_3: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_4: vector<sui_system::staking_pool::StakedSui>,
		_arg_5: address,
		_arg_6: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun request_unstake(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: sui::coin::Coin<afsui::afsui::AFSUI>,
		_arg_3: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun request_unstake_vec(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: vector<sui::coin::Coin<afsui::afsui::AFSUI>>,
		_arg_3: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun add_atomic_unstake_sui_reserves(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: sui::coin::Coin<sui::sui::SUI>
	)
	{
		abort 0
	}

	public fun request_unstake_atomic(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_3: &mut afsui_treasury::treasury::Treasury,
		_arg_4: sui::coin::Coin<afsui::afsui::AFSUI>,
		_arg_5: &mut sui::tx_context::TxContext
	): sui::coin::Coin<sui::sui::SUI>
	{
		abort 0
	}

	entry fun request_unstake_atomic_and_keep(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_3: &mut afsui_treasury::treasury::Treasury,
		_arg_4: sui::coin::Coin<afsui::afsui::AFSUI>,
		_arg_5: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun request_unstake_vec_atomic(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_3: &mut afsui_treasury::treasury::Treasury,
		_arg_4: vector<sui::coin::Coin<afsui::afsui::AFSUI>>,
		_arg_5: &mut sui::tx_context::TxContext
	): sui::coin::Coin<sui::sui::SUI>
	{
		abort 0
	}

	entry fun request_unstake_vec_atomic_and_keep(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_2: &afsui_referral_vault::referral_vault::ReferralVault,
		_arg_3: &mut afsui_treasury::treasury::Treasury,
		_arg_4: vector<sui::coin::Coin<afsui::afsui::AFSUI>>,
		_arg_5: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun rotate_operation_cap(
		_arg_0: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_1: &mut sui_system::sui_system::SuiSystemState,
		_arg_2: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun update_validator_fee(
		_arg_0: &lsd::validator::UnverifiedValidatorOperationCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun create_staked_sui_vault(
		_arg_0: lsd::staked_sui_vault::CreateStakedSuiVaultCap,
		_arg_1: &mut sui_system::sui_system::SuiSystemState,
		_arg_2: address,
		_arg_3: u64,
		_arg_4: u64,
		_arg_5: u64,
		_arg_6: u64,
		_arg_7: u64,
		_arg_8: u64,
		_arg_9: u64,
		_arg_10: u64,
		_arg_11: u64,
		_arg_12: u64,
		_arg_13: u64,
		_arg_14: u64,
		_arg_15: u64,
		_arg_16: u64,
		_arg_17: u64,
		_arg_18: u64,
		_arg_19: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun authorize(
		_arg_0: &safe::safe::OwnerCap,
		_arg_1: &lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>
	)
	{
		abort 0
	}

	public fun revoke_auth(
		_arg_0: &safe::safe::OwnerCap,
		_arg_1: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>
	)
	{
		abort 0
	}

	entry fun migrate(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault
	)
	{
		abort 0
	}

	entry fun update_dev_account(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: address
	)
	{
		abort 0
	}

	entry fun update_crank_incentive_reward_per_instruction(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_max_crank_incentive_reward(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_reference_gas_price(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_min_staking_threshold(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_min_fields_requests_per_tx(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_pool_rates_epoch_gap(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_unstaking_bunch_size(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_default_unstake_total_fee(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_default_unstake_fee_allocations(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64,
		_arg_3: u64,
		_arg_4: u64
	)
	{
		abort 0
	}

	entry fun update_default_unstake_referee_discount(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_atomic_unstake_max_fee(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_atomic_unstake_min_fee(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_atomic_unstake_fee_allocations(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64,
		_arg_3: u64,
		_arg_4: u64
	)
	{
		abort 0
	}

	entry fun update_atomic_unstake_referee_discount(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}

	entry fun update_atomic_unstake_sui_reserves_targ_et_value(
		_arg_0: &lsd::staked_sui_vault::AdminCap,
		_arg_1: &mut lsd::staked_sui_vault::StakedSuiVault,
		_arg_2: u64
	)
	{
		abort 0
	}
}
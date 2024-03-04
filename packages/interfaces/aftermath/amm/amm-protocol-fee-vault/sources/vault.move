// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module protocol_fee_vault::vault {
	struct ChangeFeeCap has key {
		id: sui::object::UID,
		last_used_epoch: u64
	}

	struct FeePercentages has store {
		total_protocol_fee: u64,
		treasury: u64,
		insurance_fund: u64,
		dev_wallet: u64,
		referee_discount: u64
	}

	struct ProtocolFeeVault has store, key {
		id: sui::object::UID,
		version: u64,
		dev_wallet: address,
		fee_percentages: protocol_fee_vault::vault::FeePercentages
	}

	public fun transfer(
		_arg_0: protocol_fee_vault::vault::ChangeFeeCap,
		_arg_1: address
	)
	{
		abort 0
	}

	fun init(
		_arg_0: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun total_protocol_fee(
		_arg_0: &protocol_fee_vault::vault::ProtocolFeeVault
	): u64
	{
		abort 0
	}

	public fun treasury_fee(
		_arg_0: &protocol_fee_vault::vault::ProtocolFeeVault
	): u64
	{
		abort 0
	}

	public fun insurance_fund_fee(
		_arg_0: &protocol_fee_vault::vault::ProtocolFeeVault
	): u64
	{
		abort 0
	}

	public fun dev_wallet_fee(
		_arg_0: &protocol_fee_vault::vault::ProtocolFeeVault
	): u64
	{
		abort 0
	}

	public fun referee_discount(
		_arg_0: &protocol_fee_vault::vault::ProtocolFeeVault
	): u64
	{
		abort 0
	}

	public fun collect_fees<T0>(
		_arg_0: &protocol_fee_vault::vault::ProtocolFeeVault,
		_arg_1: &mut treasury::treasury::Treasury,
		_arg_2: &mut insurance_fund::insurance_fund::InsuranceFund,
		_arg_3: &referral_vault::referral_vault::ReferralVault,
		_arg_4: &mut sui::coin::Coin<T0>,
		_arg_5: address,
		_arg_6: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun minimum_before_fees(
		_arg_0: &protocol_fee_vault::vault::ProtocolFeeVault,
		_arg_1: u64
	): u64
	{
		abort 0
	}

	public entry fun update_dev_wallet_address(
		_arg_0: &mut protocol_fee_vault::vault::ProtocolFeeVault,
		_arg_1: address,
		_arg_2: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public entry fun change_fee_percentages(
		_arg_0: &mut protocol_fee_vault::vault::ChangeFeeCap,
		_arg_1: &mut protocol_fee_vault::vault::ProtocolFeeVault,
		_arg_2: std::option::Option<u64>,
		_arg_3: std::option::Option<u64>,
		_arg_4: std::option::Option<u64>,
		_arg_5: std::option::Option<u64>,
		_arg_6: std::option::Option<u64>,
		_arg_7: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun assert_version(
		_arg_0: &protocol_fee_vault::vault::ProtocolFeeVault
	)
	{
		abort 0
	}
}
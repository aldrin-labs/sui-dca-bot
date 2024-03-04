// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module amm::swap {
	public fun add_swap_exact_in_to_route<T0, T1, T2, T3>(
		_arg_0: &sui::object::UID,
		_arg_1: &amm::pool_registry::PoolRegistry,
		_arg_2: &mut amm::pool::Pool<T1>,
		_arg_3: sui::coin::Coin<T2>,
		_arg_4: u64,
		_arg_5: &mut sui::tx_context::TxContext
	): sui::coin::Coin<T3>
	{
		abort 0
	}

	public fun swap_exact_in<T0, T1, T2>(
		_arg_0: &mut amm::pool::Pool<T0>,
		_arg_1: &amm::pool_registry::PoolRegistry,
		_arg_2: &protocol_fee_vault::vault::ProtocolFeeVault,
		_arg_3: &mut treasury::treasury::Treasury,
		_arg_4: &mut insurance_fund::insurance_fund::InsuranceFund,
		_arg_5: &referral_vault::referral_vault::ReferralVault,
		_arg_6: sui::coin::Coin<T1>,
		_arg_7: u64,
		_arg_8: u64,
		_arg_9: &mut sui::tx_context::TxContext
	): sui::coin::Coin<T2>
	{
		abort 0
	}

	public fun add_swap_exact_out_to_route<T0, T1, T2, T3>(
		_arg_0: &sui::object::UID,
		_arg_1: &amm::pool_registry::PoolRegistry,
		_arg_2: &mut amm::pool::Pool<T1>,
		_arg_3: u64,
		_arg_4: &mut sui::coin::Coin<T2>,
		_arg_5: u64,
		_arg_6: &mut sui::tx_context::TxContext
	): sui::coin::Coin<T3>
	{
		abort 0
	}

	public fun swap_exact_out<T0, T1, T2>(
		_arg_0: &mut amm::pool::Pool<T0>,
		_arg_1: &amm::pool_registry::PoolRegistry,
		_arg_2: &protocol_fee_vault::vault::ProtocolFeeVault,
		_arg_3: &mut treasury::treasury::Treasury,
		_arg_4: &mut insurance_fund::insurance_fund::InsuranceFund,
		_arg_5: &referral_vault::referral_vault::ReferralVault,
		_arg_6: u64,
		_arg_7: &mut sui::coin::Coin<T1>,
		_arg_8: u64,
		_arg_9: u64,
		_arg_10: &mut sui::tx_context::TxContext
	): sui::coin::Coin<T2>
	{
		abort 0
	}
}
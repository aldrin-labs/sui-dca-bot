// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module insurance_fund::insurance_fund {
	struct AdminReceipt<phantom T0, phantom T1> {
		dummy_field: bool
	}

	struct AdminCap has key {
		id: sui::object::UID
	}

	struct InsuranceFund has key {
		id: sui::object::UID,
		version: u64,
		funds: sui::bag::Bag
	}

	public fun transfer(
		_arg_0: insurance_fund::insurance_fund::AdminCap,
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

	public fun admin_withdraw<T0, T1>(
		_arg_0: &insurance_fund::insurance_fund::AdminCap,
		_arg_1: &mut insurance_fund::insurance_fund::InsuranceFund,
		_arg_2: u64,
		_arg_3: &mut sui::tx_context::TxContext
	): (sui::coin::Coin<T1>, insurance_fund::insurance_fund::AdminReceipt<T0, T1>)
	{
		abort 0
	}

	public fun admin_deposit<T0, T1>(
		_arg_0: &insurance_fund::insurance_fund::AdminCap,
		_arg_1: &mut insurance_fund::insurance_fund::InsuranceFund,
		_arg_2: insurance_fund::insurance_fund::AdminReceipt<T0, T1>,
		_arg_3: sui::coin::Coin<T0>
	)
	{
		abort 0
	}

	public fun balance_of<T0>(
		_arg_0: &mut insurance_fund::insurance_fund::InsuranceFund
	): u64
	{
		abort 0
	}

	public fun deposit<T0>(
		_arg_0: &mut insurance_fund::insurance_fund::InsuranceFund,
		_arg_1: sui::coin::Coin<T0>
	)
	{
		abort 0
	}

	public fun assert_version(
		_arg_0: &insurance_fund::insurance_fund::InsuranceFund
	)
	{
		abort 0
	}
}
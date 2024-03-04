// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module treasury::treasury {
	struct Treasury has key {
		id: sui::object::UID,
		version: u64,
		funds: sui::bag::Bag
	}

	fun init(
		_arg_0: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun balance_of<T0>(
		_arg_0: &mut treasury::treasury::Treasury
	): u64
	{
		abort 0
	}

	public fun deposit<T0>(
		_arg_0: &mut treasury::treasury::Treasury,
		_arg_1: sui::coin::Coin<T0>
	)
	{
		abort 0
	}

	public fun assert_version(
		_arg_0: &treasury::treasury::Treasury
	)
	{
		abort 0
	}
}
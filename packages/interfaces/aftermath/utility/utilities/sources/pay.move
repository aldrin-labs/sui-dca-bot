// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module utilities::pay {
	public entry fun zero<T0>(
		_arg_0: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public entry fun join_vec_and_split<T0>(
		_arg_0: sui::coin::Coin<T0>,
		_arg_1: vector<sui::coin::Coin<T0>>,
		_arg_2: u64,
		_arg_3: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}
}
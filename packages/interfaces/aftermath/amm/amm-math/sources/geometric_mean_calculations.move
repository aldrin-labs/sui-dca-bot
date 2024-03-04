// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module amm_math::geometric_mean_calculations {
	public fun calc_invariant(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u64>
	): u128
	{
		abort 0
	}

	public fun calc_invariant_full(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u64>
	): u256
	{
		abort 0
	}

	public fun calc_spot_price_full(
		_arg_0: u256,
		_arg_1: u256,
		_arg_2: u256,
		_arg_3: u256
	): u256
	{
		abort 0
	}

	public fun calc_spot_price_full_with_fees(
		_arg_0: u256,
		_arg_1: u256,
		_arg_2: u256,
		_arg_3: u256,
		_arg_4: u256,
		_arg_5: u256
	): u256
	{
		abort 0
	}

	public fun calc_spot_price(
		_arg_0: u128,
		_arg_1: u128,
		_arg_2: u64,
		_arg_3: u64
	): u128
	{
		abort 0
	}

	public fun calc_spot_price_with_fees(
		_arg_0: u128,
		_arg_1: u128,
		_arg_2: u64,
		_arg_3: u64,
		_arg_4: u64,
		_arg_5: u64
	): u128
	{
		abort 0
	}

	public fun calc_out_given_in(
		_arg_0: u128,
		_arg_1: u128,
		_arg_2: u64,
		_arg_3: u64,
		_arg_4: u64,
		_arg_5: u64,
		_arg_6: u128,
		_arg_7: u128
	): u64
	{
		abort 0
	}

	public fun calc_in_given_out(
		_arg_0: u128,
		_arg_1: u128,
		_arg_2: u64,
		_arg_3: u64,
		_arg_4: u64,
		_arg_5: u64,
		_arg_6: u128,
		_arg_7: u128
	): u64
	{
		abort 0
	}

	public fun calc_swap_fixed_in(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u64>,
		_arg_2: &vector<u64>,
		_arg_3: &vector<u64>,
		_arg_4: &vector<u128>,
		_arg_5: &vector<u128>
	): u64
	{
		abort 0
	}

	public fun calc_swap_fixed_out(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u64>,
		_arg_2: &vector<u64>,
		_arg_3: &vector<u64>,
		_arg_4: &vector<u128>,
		_arg_5: &vector<u128>
	): u64
	{
		abort 0
	}

	public fun calc_withdraw_fixed_amounts(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u64>,
		_arg_2: &vector<u64>,
		_arg_3: &vector<u64>,
		_arg_4: &vector<u128>,
		_arg_5: u128
	): u64
	{
		abort 0
	}

	public fun calc_deposit_fixed_amounts(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u64>,
		_arg_2: &vector<u64>,
		_arg_3: &vector<u64>,
		_arg_4: &vector<u128>,
		_arg_5: u128
	): u64
	{
		abort 0
	}

	public fun calc_withdraw_flp_amounts_out(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u64>,
		_arg_2: &vector<u64>,
		_arg_3: &vector<u64>,
		_arg_4: &vector<u128>,
		_arg_5: u128
	): u64
	{
		abort 0
	}

	public fun calc_all_coin_deposit(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u128>
	): u64
	{
		abort 0
	}

	public fun calc_all_coin_withdraw(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u128>
	): u64
	{
		abort 0
	}
}
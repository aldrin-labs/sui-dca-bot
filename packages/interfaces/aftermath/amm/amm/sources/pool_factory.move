// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module amm::pool_factory {
	public fun create_lp_coin<T0: drop>(
		_arg_0: T0,
		_arg_1: u8,
		_arg_2: &mut sui::tx_context::TxContext
	): amm::pool::CreatePoolCap<T0>
	{
		abort 0
	}

	public fun create_pool_2_coins<T0, T1, T2>(
		_arg_0: amm::pool::CreatePoolCap<T0>,
		_arg_1: &mut amm::pool_registry::PoolRegistry,
		_arg_2: vector<u8>,
		_arg_3: vector<u8>,
		_arg_4: vector<u8>,
		_arg_5: vector<u8>,
		_arg_6: vector<u8>,
		_arg_7: vector<u64>,
		_arg_8: u64,
		_arg_9: vector<u64>,
		_arg_10: vector<u64>,
		_arg_11: vector<u64>,
		_arg_12: vector<u64>,
		_arg_13: sui::coin::Coin<T1>,
		_arg_14: sui::coin::Coin<T2>,
		_arg_15: std::option::Option<vector<u8>>,
		_arg_16: bool,
		_arg_17: std::option::Option<u8>,
		_arg_18: &mut sui::tx_context::TxContext
	): (amm::pool::Pool<T0>, sui::coin::Coin<T0>)
	{
		abort 0
	}

	public fun create_pool_3_coins<T0, T1, T2, T3>(
		_arg_0: amm::pool::CreatePoolCap<T0>,
		_arg_1: &mut amm::pool_registry::PoolRegistry,
		_arg_2: vector<u8>,
		_arg_3: vector<u8>,
		_arg_4: vector<u8>,
		_arg_5: vector<u8>,
		_arg_6: vector<u8>,
		_arg_7: vector<u64>,
		_arg_8: u64,
		_arg_9: vector<u64>,
		_arg_10: vector<u64>,
		_arg_11: vector<u64>,
		_arg_12: vector<u64>,
		_arg_13: sui::coin::Coin<T1>,
		_arg_14: sui::coin::Coin<T2>,
		_arg_15: sui::coin::Coin<T3>,
		_arg_16: std::option::Option<vector<u8>>,
		_arg_17: bool,
		_arg_18: std::option::Option<u8>,
		_arg_19: &mut sui::tx_context::TxContext
	): (amm::pool::Pool<T0>, sui::coin::Coin<T0>)
	{
		abort 0
	}

	public fun create_pool_4_coins<T0, T1, T2, T3, T4>(
		_arg_0: amm::pool::CreatePoolCap<T0>,
		_arg_1: &mut amm::pool_registry::PoolRegistry,
		_arg_2: vector<u8>,
		_arg_3: vector<u8>,
		_arg_4: vector<u8>,
		_arg_5: vector<u8>,
		_arg_6: vector<u8>,
		_arg_7: vector<u64>,
		_arg_8: u64,
		_arg_9: vector<u64>,
		_arg_10: vector<u64>,
		_arg_11: vector<u64>,
		_arg_12: vector<u64>,
		_arg_13: sui::coin::Coin<T1>,
		_arg_14: sui::coin::Coin<T2>,
		_arg_15: sui::coin::Coin<T3>,
		_arg_16: sui::coin::Coin<T4>,
		_arg_17: std::option::Option<vector<u8>>,
		_arg_18: bool,
		_arg_19: std::option::Option<u8>,
		_arg_20: &mut sui::tx_context::TxContext
	): (amm::pool::Pool<T0>, sui::coin::Coin<T0>)
	{
		abort 0
	}

	public fun create_pool_5_coins<T0, T1, T2, T3, T4, T5>(
		_arg_0: amm::pool::CreatePoolCap<T0>,
		_arg_1: &mut amm::pool_registry::PoolRegistry,
		_arg_2: vector<u8>,
		_arg_3: vector<u8>,
		_arg_4: vector<u8>,
		_arg_5: vector<u8>,
		_arg_6: vector<u8>,
		_arg_7: vector<u64>,
		_arg_8: u64,
		_arg_9: vector<u64>,
		_arg_10: vector<u64>,
		_arg_11: vector<u64>,
		_arg_12: vector<u64>,
		_arg_13: sui::coin::Coin<T1>,
		_arg_14: sui::coin::Coin<T2>,
		_arg_15: sui::coin::Coin<T3>,
		_arg_16: sui::coin::Coin<T4>,
		_arg_17: sui::coin::Coin<T5>,
		_arg_18: std::option::Option<vector<u8>>,
		_arg_19: bool,
		_arg_20: std::option::Option<u8>,
		_arg_21: &mut sui::tx_context::TxContext
	): (amm::pool::Pool<T0>, sui::coin::Coin<T0>)
	{
		abort 0
	}

	public fun create_pool_6_coins<T0, T1, T2, T3, T4, T5, T6>(
		_arg_0: amm::pool::CreatePoolCap<T0>,
		_arg_1: &mut amm::pool_registry::PoolRegistry,
		_arg_2: vector<u8>,
		_arg_3: vector<u8>,
		_arg_4: vector<u8>,
		_arg_5: vector<u8>,
		_arg_6: vector<u8>,
		_arg_7: vector<u64>,
		_arg_8: u64,
		_arg_9: vector<u64>,
		_arg_10: vector<u64>,
		_arg_11: vector<u64>,
		_arg_12: vector<u64>,
		_arg_13: sui::coin::Coin<T1>,
		_arg_14: sui::coin::Coin<T2>,
		_arg_15: sui::coin::Coin<T3>,
		_arg_16: sui::coin::Coin<T4>,
		_arg_17: sui::coin::Coin<T5>,
		_arg_18: sui::coin::Coin<T6>,
		_arg_19: std::option::Option<vector<u8>>,
		_arg_20: bool,
		_arg_21: std::option::Option<u8>,
		_arg_22: &mut sui::tx_context::TxContext
	): (amm::pool::Pool<T0>, sui::coin::Coin<T0>)
	{
		abort 0
	}

	public fun create_pool_7_coins<T0, T1, T2, T3, T4, T5, T6, T7>(
		_arg_0: amm::pool::CreatePoolCap<T0>,
		_arg_1: &mut amm::pool_registry::PoolRegistry,
		_arg_2: vector<u8>,
		_arg_3: vector<u8>,
		_arg_4: vector<u8>,
		_arg_5: vector<u8>,
		_arg_6: vector<u8>,
		_arg_7: vector<u64>,
		_arg_8: u64,
		_arg_9: vector<u64>,
		_arg_10: vector<u64>,
		_arg_11: vector<u64>,
		_arg_12: vector<u64>,
		_arg_13: sui::coin::Coin<T1>,
		_arg_14: sui::coin::Coin<T2>,
		_arg_15: sui::coin::Coin<T3>,
		_arg_16: sui::coin::Coin<T4>,
		_arg_17: sui::coin::Coin<T5>,
		_arg_18: sui::coin::Coin<T6>,
		_arg_19: sui::coin::Coin<T7>,
		_arg_20: std::option::Option<vector<u8>>,
		_arg_21: bool,
		_arg_22: std::option::Option<u8>,
		_arg_23: &mut sui::tx_context::TxContext
	): (amm::pool::Pool<T0>, sui::coin::Coin<T0>)
	{
		abort 0
	}

	public fun create_pool_8_coins<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
		_arg_0: amm::pool::CreatePoolCap<T0>,
		_arg_1: &mut amm::pool_registry::PoolRegistry,
		_arg_2: vector<u8>,
		_arg_3: vector<u8>,
		_arg_4: vector<u8>,
		_arg_5: vector<u8>,
		_arg_6: vector<u8>,
		_arg_7: vector<u64>,
		_arg_8: u64,
		_arg_9: vector<u64>,
		_arg_10: vector<u64>,
		_arg_11: vector<u64>,
		_arg_12: vector<u64>,
		_arg_13: sui::coin::Coin<T1>,
		_arg_14: sui::coin::Coin<T2>,
		_arg_15: sui::coin::Coin<T3>,
		_arg_16: sui::coin::Coin<T4>,
		_arg_17: sui::coin::Coin<T5>,
		_arg_18: sui::coin::Coin<T6>,
		_arg_19: sui::coin::Coin<T7>,
		_arg_20: sui::coin::Coin<T8>,
		_arg_21: std::option::Option<vector<u8>>,
		_arg_22: bool,
		_arg_23: std::option::Option<u8>,
		_arg_24: &mut sui::tx_context::TxContext
	): (amm::pool::Pool<T0>, sui::coin::Coin<T0>)
	{
		abort 0
	}
}
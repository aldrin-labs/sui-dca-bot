// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module amm::admin {
	struct AdminCap has store, key {
		id: sui::object::UID
	}

	struct AuthKey has copy, drop, store {
		dummy_field: bool
	}

	struct AuthCap has drop, store {
		dummy_field: bool
	}

	fun init(
		_arg_0: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun transfer(
		_arg_0: amm::admin::AdminCap,
		_arg_1: address
	)
	{
		abort 0
	}

	public fun is_authorized(
		_arg_0: &sui::object::UID
	): bool
	{
		abort 0
	}

	public fun authorize(
		_arg_0: &amm::admin::AdminCap,
		_arg_1: &mut sui::object::UID
	)
	{
		abort 0
	}

	public fun revoke_auth(
		_arg_0: &amm::admin::AdminCap,
		_arg_1: &mut sui::object::UID
	)
	{
		abort 0
	}
}
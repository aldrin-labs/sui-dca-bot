// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module afsui::afsui {
	struct AFSUI has drop {
		dummy_field: bool
	}

	fun init(
		_arg_0: afsui::afsui::AFSUI,
		_arg_1: &mut sui::tx_context::TxContext
	)
	{
		abort 0
	}

	public fun total_supply(
		_arg_0: &safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>
	): u64
	{
		abort 0
	}

	public fun mint(
		_arg_0: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_1: &sui::object::UID,
		_arg_2: u64,
		_arg_3: &mut sui::tx_context::TxContext
	): sui::coin::Coin<afsui::afsui::AFSUI>
	{
		abort 0
	}

	public fun burn(
		_arg_0: &mut safe::safe::Safe<sui::coin::TreasuryCap<afsui::afsui::AFSUI>>,
		_arg_1: &sui::object::UID,
		_arg_2: sui::coin::Coin<afsui::afsui::AFSUI>
	): u64
	{
		abort 0
	}
}
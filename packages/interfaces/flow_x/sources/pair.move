#[lint_allow(coin_field)]
module flowx_amm::pair {
	use flowx_amm::math;
	use flowx_amm::treasury;
	use flowx_amm::type_helper;
	use std::string::String;
	use sui::balance::Supply;
	use sui::coin::Coin;
	use sui::event;
	use sui::object::UID;
	use sui::transfer;
	use sui::tx_context::TxContext;

	struct LP<phantom BASE, phantom QUOTE> has drop {
		dummy_field: bool
	}

	struct PairMetadata<phantom BASE, phantom QUOTE> has store, key {
		id: UID,
		reserve_x: Coin<BASE>,
		reserve_y: Coin<QUOTE>,
		k_last: u128,
		lp_supply: Supply<LP<BASE, QUOTE>>,
		fee_rate: u64
	}

	struct LiquidityAdded has copy, drop {
		user: address,
		coin_x: String,
		coin_y: String,
		amount_x: u64,
		amount_y: u64,
		liquidity: u64,
		fee: u64
	}

	struct LiquidityRemoved has copy, drop {
		user: address,
		coin_x: String,
		coin_y: String,
		amount_x: u64,
		amount_y: u64,
		liquidity: u64,
		fee: u64
	}

	struct Swapped has copy, drop {
		user: address,
		coin_x: String,
		coin_y: String,
		amount_x_in: u64,
		amount_y_in: u64,
		amount_x_out: u64,
		amount_y_out: u64
	}

	
	public fun get_reserves<BASE, QUOTE>(arg_0: &PairMetadata<BASE, QUOTE>): (u64, u64) {
		abort(0)
	}
	
	public fun total_lp_supply<BASE, QUOTE>(arg_0: &PairMetadata<BASE, QUOTE>): u64 {
		abort(0)
	}
	
	public fun k<BASE, QUOTE>(arg_0: &PairMetadata<BASE, QUOTE>): u128 {
		abort(0)
	}
	
	public fun fee_rate<BASE, QUOTE>(arg_0: &PairMetadata<BASE, QUOTE>): u64 {
		abort(0)
	}
	
	fun update_k_last<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>) {
		abort(0)
	}
	
	public fun get_lp_name<BASE, QUOTE>(): String {
		abort(0)
	}
	
	public(friend) fun create_pair<BASE, QUOTE>(arg_0: &mut TxContext): PairMetadata<BASE, QUOTE> {
		abort(0)
	}
	
	public(friend) fun set_fee_rate<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: u64) {
		abort(0)
	}
}







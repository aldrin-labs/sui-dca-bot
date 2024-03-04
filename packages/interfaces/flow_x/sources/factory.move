module flowx_amm::factory {
	use flowx_amm::pair::PairMetadata;
	use flowx_amm::swap_utils;
	use flowx_amm::treasury::Treasury;
	use flowx_amm::type_helper;
	use std::string::String;
	use sui::bag::Bag;
	use sui::event;
	use sui::object::UID;
	use sui::transfer;
	use sui::tx_context::TxContext;

	struct Container has key {
		id: UID,
		pairs: Bag,
		treasury: Treasury
	}

	struct AdminCap has store, key {
		id: UID
	}

	struct PairCreated has copy, drop {
		user: address,
		pair: String,
		coin_x: String,
		coin_y: String
	}

	struct FeeChanged has copy, drop {
		user: address,
		coin_x: String,
		coin_y: String,
		fee_rate: u64
	}

	fun init(ctx: &mut TxContext) {
		abort(0)
	}

	public fun create_pair<BASE, QUOTE>(container: &mut Container, ctx: &mut TxContext) {
		abort(0)
	}

	public fun pair_is_created<BASE, QUOTE>(container: &Container): bool {
		abort(0)
	}

	public fun borrow_pair<BASE, QUOTE>(arg_0: &Container): &PairMetadata<BASE, QUOTE> {
		abort(0)
	}
	
	public fun borrow_mut_pair<BASE, QUOTE>(arg_0: &mut Container): &mut PairMetadata<BASE, QUOTE> {
		abort(0)
	}
	
	public fun borrow_treasury(arg_0: &Container): &Treasury {
		abort(0)
	}
	
	entry public fun set_fee_to(arg_0: &mut AdminCap, arg_1: &mut Container, arg_2: address) {
		abort(0)
	}
	
	fun set_fee_rate_<BASE, QUOTE>(arg_0: &mut Container, arg_1: u64, arg_2: &mut TxContext) {
		abort(0)
	}
	
	entry public fun set_fee_rate<BASE, QUOTE>(arg_0: &mut AdminCap, arg_1: &mut Container, arg_2: u64, arg_3: &mut TxContext) {
		abort(0)
	}
}

module flowx_amm::router {
	use flowx_amm::factory::Container;
	use flowx_amm::pair::{PairMetadata, LP};
	use flowx_amm::swap_utils;
	use flowx_amm::treasury::Treasury;
	use sui::clock::Clock;
	use sui::coin::Coin;
	use sui::transfer;
	use sui::tx_context::TxContext;

	fun ensure(arg_0: &Clock, arg_1: u64) {
		abort(0)
	}
	
	public fun add_liquidity_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: &Treasury, arg_2: Coin<BASE>, arg_3: Coin<QUOTE>, arg_4: u64, arg_5: u64, arg_6: &mut TxContext): Coin<LP<BASE, QUOTE>> {
		abort(0)
	}
	
	entry public fun add_liquidity<BASE, QUOTE>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<BASE>, arg_3: Coin<QUOTE>, arg_4: u64, arg_5: u64, arg_6: address, arg_7: u64, arg_8: &mut TxContext) {
		abort(0)
	}
	
	entry public fun remove_liquidity<BASE, QUOTE>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<LP<BASE, QUOTE>>, arg_3: u64, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
		abort(0)
	}
	
	public fun swap_exact_x_to_y_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: Coin<BASE>, arg_2: &mut TxContext): Coin<QUOTE> {
		abort(0)
	}
	
	public fun swap_exact_y_to_x_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: Coin<QUOTE>, arg_2: &mut TxContext): Coin<BASE> {
		abort(0)
	}
	
	public fun swap_exact_input_direct<INPUT, OUTPUT>(arg_0: &mut Container, arg_1: Coin<INPUT>, arg_2: &mut TxContext): Coin<OUTPUT> {
		abort(0)
	}
	
	entry public fun swap_exact_input<INPUT, OUTPUT>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<INPUT>, arg_3: u64, arg_4: address, arg_5: u64, arg_6: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_input_doublehop<Ty0, Ty1, Ty2>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: address, arg_5: u64, arg_6: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_input_triplehop<Ty0, Ty1, Ty2, Ty3>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: address, arg_5: u64, arg_6: &mut TxContext) {
		abort(0)
	}
	
	public fun swap_x_to_exact_y_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: Coin<BASE>, arg_2: u64, arg_3: &mut TxContext): Coin<QUOTE> {
		abort(0)
	}
	
	public fun swap_y_to_exact_x_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: Coin<QUOTE>, arg_2: u64, arg_3: &mut TxContext): Coin<BASE> {
		abort(0)
	}
	
	public fun swap_exact_output_direct<INPUT, OUTPUT>(arg_0: &mut Container, arg_1: Coin<INPUT>, arg_2: u64, arg_3: &mut TxContext): Coin<OUTPUT> {
		abort(0)
	}
	
	entry public fun swap_exact_output<INPUT, OUTPUT>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<INPUT>, arg_3: u64, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_output_doublehop<Ty0, Ty1, Ty2>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_output_triplehop<Ty0, Ty1, Ty2, Ty3>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_input_double_output<Ty0, Ty1, Ty2>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: u64, arg_6: u64, arg_7: address, arg_8: u64, arg_9: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_input_triple_output<Ty0, Ty1, Ty2, Ty3>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: u64, arg_6: u64, arg_7: u64, arg_8: u64, arg_9: address, arg_10: u64, arg_11: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_input_quadruple_output<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: u64, arg_6: u64, arg_7: u64, arg_8: u64, arg_9: u64, arg_10: u64, arg_11: address, arg_12: u64, arg_13: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_input_quintuple_output<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: u64, arg_6: u64, arg_7: u64, arg_8: u64, arg_9: u64, arg_10: u64, arg_11: u64, arg_12: u64, arg_13: address, arg_14: u64, arg_15: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_double_input<Ty0, Ty1, Ty2>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: Coin<Ty1>, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_triple_input<Ty0, Ty1, Ty2, Ty3>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: Coin<Ty1>, arg_4: Coin<Ty2>, arg_5: u64, arg_6: address, arg_7: u64, arg_8: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_quadruple_input<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: Coin<Ty1>, arg_4: Coin<Ty2>, arg_5: Coin<Ty3>, arg_6: u64, arg_7: address, arg_8: u64, arg_9: &mut TxContext) {
		abort(0)
	}
	
	entry public fun swap_exact_quintuple_input<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: Coin<Ty1>, arg_4: Coin<Ty2>, arg_5: Coin<Ty3>, arg_6: Coin<Ty4>, arg_7: u64, arg_8: address, arg_9: u64, arg_10: &mut TxContext) {
		abort(0)
	}
}


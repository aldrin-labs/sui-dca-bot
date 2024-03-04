module adapter::flow_x {
	use flowx_amm::router;
	use flowx_amm::factory::Container;
	use flowx_amm::pair::PairMetadata;
	use sui::coin::{Self, Coin};
	use sui::tx_context::TxContext;
	use dca::dca::{Self, TradePromise};

    // Errors
    const ETradeInputAmountMismatch: u64 = 1;

	// Witness object
    struct FlowX has drop {}
	
	public fun swap_exact_x_to_y_direct<X, Y>(
		pool: &mut PairMetadata<X, Y>,
		input: Coin<X>,
		promise: &mut TradePromise<X, Y>,
		ctx: &mut TxContext
	) {
		let input_amount = coin::value(&input);

		assert!(
            dca::trade_input(promise) == input_amount,
            ETradeInputAmountMismatch
        );

		let coin = router::swap_exact_x_to_y_direct(pool, input, ctx);

		dca::add_trade_proof_with_coin(FlowX {}, promise, input_amount, coin);
	}
	
	public fun swap_exact_y_to_x_direct<X, Y>(
		pool: &mut PairMetadata<X, Y>,
		input: Coin<Y>,
		promise: &mut TradePromise<Y, X>,
		ctx: &mut TxContext
	) {
		let input_amount = coin::value(&input);

		assert!(
            dca::trade_input(promise) == input_amount,
            ETradeInputAmountMismatch
        );

		let coin = router::swap_exact_y_to_x_direct(pool, input, ctx);

		dca::add_trade_proof_with_coin(FlowX {}, promise, input_amount, coin);
	}
	
	public fun swap_exact_input_direct<INPUT, OUTPUT>(
		pools: &mut Container,
		input: Coin<INPUT>,
		promise: &mut TradePromise<INPUT, OUTPUT>,
		ctx: &mut TxContext
	) {
		let input_amount = coin::value(&input);

		assert!(
            dca::trade_input(promise) == input_amount,
            ETradeInputAmountMismatch
        );

		let coin = router::swap_exact_input_direct(pools, input, ctx);

		dca::add_trade_proof_with_coin(FlowX {}, promise, input_amount, coin);
	}

	public fun swap_x_to_exact_y_direct<X, Y>(
		pool: &mut PairMetadata<X, Y>,
		input: Coin<X>,
		output_amount: u64,
		promise: &mut TradePromise<X, Y>,
		ctx: &mut TxContext
	) {
		let input_amount = coin::value(&input);

		assert!(
            dca::trade_input(promise) == input_amount,
            ETradeInputAmountMismatch
        );

		let coin = router::swap_x_to_exact_y_direct(pool, input, output_amount, ctx);

		dca::add_trade_proof_with_coin(FlowX {}, promise, input_amount, coin);
	}
	
	public fun swap_y_to_exact_x_direct<X, Y>(
		pool: &mut PairMetadata<X, Y>,
		input: Coin<Y>,
		output_amount: u64,
		promise: &mut TradePromise<Y, X>,
		ctx: &mut TxContext
	) {
		let input_amount = coin::value(&input);

		assert!(
            dca::trade_input(promise) == input_amount,
            ETradeInputAmountMismatch
        );

		let coin = router::swap_y_to_exact_x_direct(pool, input, output_amount, ctx);
		
		dca::add_trade_proof_with_coin(FlowX {}, promise, input_amount, coin);
	}
	
	public fun swap_exact_output_direct<INPUT, OUTPUT>(
		pools: &mut Container,
		input: Coin<INPUT>,
		output_amount: u64,
		promise: &mut TradePromise<INPUT, OUTPUT>,
		ctx: &mut TxContext
	) {
		let input_amount = coin::value(&input);

		assert!(
            dca::trade_input(promise) == input_amount,
            ETradeInputAmountMismatch
        );

		let coin = router::swap_exact_output_direct(pools, input, output_amount, ctx);

		dca::add_trade_proof_with_coin(FlowX {}, promise, input_amount, coin);
	}

	// public fun add_liquidity_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: &Treasury, arg_2: Coin<BASE>, arg_3: Coin<QUOTE>, arg_4: u64, arg_5: u64, arg_6: &mut TxContext): Coin<LP<BASE, QUOTE>> {
	// 	router::add_liquidity_direct(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6)
	// }
	
	// entry public fun add_liquidity<BASE, QUOTE>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<BASE>, arg_3: Coin<QUOTE>, arg_4: u64, arg_5: u64, arg_6: address, arg_7: u64, arg_8: &mut TxContext) {
	// 	router::add_liquidity(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8)
	// }
	
	// entry public fun remove_liquidity<BASE, QUOTE>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<LP<BASE, QUOTE>>, arg_3: u64, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
	// 	router::remove_liquidity(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7)
	// }
	
	// NOTE: No need for entry at this point
	// entry public fun swap_exact_input<INPUT, OUTPUT>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<INPUT>, arg_3: u64, arg_4: address, arg_5: u64, arg_6: &mut TxContext) {
	// 	router::swap_exact_input<INPUT, OUTPUT>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6)
	// }
	
	// entry public fun swap_exact_input_doublehop<Ty0, Ty1, Ty2>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: address, arg_5: u64, arg_6: &mut TxContext) {
	// 	router::swap_exact_input_doublehop<Ty0, Ty1, Ty2>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6)
	// }
	
	// entry public fun swap_exact_input_triplehop<Ty0, Ty1, Ty2, Ty3>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: address, arg_5: u64, arg_6: &mut TxContext) {
	// 	router::swap_exact_input_triplehop<Ty0, Ty1, Ty2, Ty3>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6)
	// }
	
	// entry public fun swap_exact_output<INPUT, OUTPUT>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<INPUT>, arg_3: u64, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
	// 	router::swap_exact_output<INPUT, OUTPUT>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7)
	// }
	
	// entry public fun swap_exact_output_doublehop<Ty0, Ty1, Ty2>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
	// 	router::swap_exact_output_doublehop<Ty0, Ty1, Ty2>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7)
	// }
	
	// entry public fun swap_exact_output_triplehop<Ty0, Ty1, Ty2, Ty3>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
	// 	router::swap_exact_output_triplehop<Ty0, Ty1, Ty2, Ty3>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7)
	// }
	
	// entry public fun swap_exact_input_double_output<Ty0, Ty1, Ty2>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: u64, arg_6: u64, arg_7: address, arg_8: u64, arg_9: &mut TxContext) {
	// 	router::swap_exact_input_double_output<Ty0, Ty1, Ty2>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9)
	// }
	
	// entry public fun swap_exact_input_triple_output<Ty0, Ty1, Ty2, Ty3>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: u64, arg_6: u64, arg_7: u64, arg_8: u64, arg_9: address, arg_10: u64, arg_11: &mut TxContext) {
	// 	router::swap_exact_input_triple_output<Ty0, Ty1, Ty2, Ty3>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10, arg_11)
	// }
	
	// entry public fun swap_exact_input_quadruple_output<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: u64, arg_6: u64, arg_7: u64, arg_8: u64, arg_9: u64, arg_10: u64, arg_11: address, arg_12: u64, arg_13: &mut TxContext) {
	// 	router::swap_exact_input_quadruple_output<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10, arg_11, arg_12, arg_13)
	// }
	
	// entry public fun swap_exact_input_quintuple_output<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: u64, arg_4: u64, arg_5: u64, arg_6: u64, arg_7: u64, arg_8: u64, arg_9: u64, arg_10: u64, arg_11: u64, arg_12: u64, arg_13: address, arg_14: u64, arg_15: &mut TxContext) {
	// 	router::swap_exact_input_quintuple_output<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10, arg_11, arg_12, arg_13, arg_14, arg_15)
	// }
	
	// entry public fun swap_exact_double_input<Ty0, Ty1, Ty2>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: Coin<Ty1>, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
	// 	router::swap_exact_double_input<Ty0, Ty1, Ty2>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7)
	// }
	
	// entry public fun swap_exact_triple_input<Ty0, Ty1, Ty2, Ty3>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: Coin<Ty1>, arg_4: Coin<Ty2>, arg_5: u64, arg_6: address, arg_7: u64, arg_8: &mut TxContext) {
	// 	router::swap_exact_triple_input<Ty0, Ty1, Ty2, Ty3>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8)
	// }
	
	// entry public fun swap_exact_quadruple_input<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: Coin<Ty1>, arg_4: Coin<Ty2>, arg_5: Coin<Ty3>, arg_6: u64, arg_7: address, arg_8: u64, arg_9: &mut TxContext) {
	// 	router::swap_exact_quadruple_input<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9);
	// }
	
	// entry public fun swap_exact_quintuple_input<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<Ty0>, arg_3: Coin<Ty1>, arg_4: Coin<Ty2>, arg_5: Coin<Ty3>, arg_6: Coin<Ty4>, arg_7: u64, arg_8: address, arg_9: u64, arg_10: &mut TxContext) {
	// 	router::swap_exact_quintuple_input<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10)
	// }
}


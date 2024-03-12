#[allow(lint(self_transfer))]
module dca::flow_x {
	use flowx_amm::router;
	use flowx_amm::factory::Container;
	use flowx_amm::pair::PairMetadata;
	use sui::clock::Clock;
	use sui::transfer;
	use sui::balance;
	use sui::coin::{Self, Coin};
	use sui::tx_context::{TxContext, sender};
	use dca::dca::{Self, DCA, init_trade, resolve_trade};
	
	public fun swap_exact_x_to_y_direct<X, Y>(
		pool: &mut PairMetadata<X, Y>,
		input_funds: Coin<X>,
		dca: &mut DCA<X, Y>,
		gas_cost: u64,
		clock: &Clock,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, 0);

		let (funds, promise) = init_trade(dca, clock, ctx);
        balance::join(coin::balance_mut(&mut input_funds), funds);

		let coin = router::swap_exact_x_to_y_direct(pool, input_funds, ctx);

		dca::assert_max_price_via_output(coin::value(&coin), &promise);

		transfer::public_transfer(coin, dca::owner(dca));

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
	
	public fun swap_exact_y_to_x_direct<X, Y>(
		pool: &mut PairMetadata<X, Y>,
		input_funds: Coin<Y>,
		dca: &mut DCA<Y, X>,
		gas_cost: u64,
		clock: &Clock,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, 0);

		let (funds, promise) = init_trade(dca, clock, ctx);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		let coin = router::swap_exact_y_to_x_direct(pool, input_funds, ctx);

		dca::assert_max_price_via_output(coin::value(&coin), &promise);

		transfer::public_transfer(coin, dca::owner(dca));

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}

	// public fun swap_x_to_exact_y_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: Coin<BASE>, arg_2: u64, arg_3: &mut TxContext): Coin<QUOTE> {
	// 	abort(0)
	// }
	
	// public fun swap_y_to_exact_x_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: Coin<QUOTE>, arg_2: u64, arg_3: &mut TxContext): Coin<BASE> {
	// 	abort(0)
	// }

	// public fun swap_exact_output_direct<INPUT, OUTPUT>(arg_0: &mut Container, arg_1: Coin<INPUT>, arg_2: u64, arg_3: &mut TxContext): Coin<OUTPUT> {
	// 	abort(0)
	// }
	
	// entry public fun swap_exact_output<INPUT, OUTPUT>(arg_0: &Clock, arg_1: &mut Container, arg_2: Coin<INPUT>, arg_3: u64, arg_4: u64, arg_5: address, arg_6: u64, arg_7: &mut TxContext) {
	// 	abort(0)
	// }
	
	public fun swap_exact_input_direct<INPUT, OUTPUT>(
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		clock: &Clock,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, 0);

		let (funds, promise) = init_trade(dca, clock, ctx);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		let coin = router::swap_exact_input_direct<INPUT, OUTPUT>(pools, input_funds, ctx);

		dca::assert_max_price_via_output(coin::value(&coin), &promise);

		transfer::public_transfer(coin, dca::owner(dca));

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
	
	public fun swap_exact_input_doublehop<INPUT, HOP, OUTPUT>(
		clock: &Clock,
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		min_output: u64,
		_recipient: address,
		sqrt_price: u64, // confirm...
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, 0);

		let (funds, promise) = init_trade(dca, clock, ctx);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		dca::assert_max_price_via_output(min_output, &promise);
		router::swap_exact_input_doublehop<INPUT, HOP, OUTPUT>(clock, pools, input_funds, min_output, dca::owner(dca), sqrt_price, ctx);

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}

	public fun swap_exact_input_triplehop<INPUT, HOP1, HOP2, OUTPUT>(
		clock: &Clock,
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		min_output: u64,
		_recipient: address,
		sqrt_price: u64, // confirm...
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, 0);

		let (funds, promise) = init_trade(dca, clock, ctx);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		dca::assert_max_price_via_output(min_output, &promise);
		router::swap_exact_input_triplehop<INPUT, HOP1, HOP2, OUTPUT>(clock, pools, input_funds, min_output, dca::owner(dca), sqrt_price, ctx);

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}

	entry public fun swap_exact_output_doublehop<INPUT, HOP1, OUTPUT>(
		clock: &Clock,
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		_max_input_amount: u64,
		exact_output: u64,
		_recipient: address,
		sqrt_price: u64,
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, 0);

		let (funds, promise) = init_trade(dca, clock, ctx);
		let max_input_amount = balance::value(&funds);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		dca::assert_max_price(_max_input_amount, exact_output, dca);
		router::swap_exact_output_doublehop<INPUT, HOP1, OUTPUT>(clock, pools, input_funds, max_input_amount, exact_output, dca::owner(dca), sqrt_price, ctx);

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
	
	entry public fun swap_exact_output_triplehop<INPUT, HOP1, HOP2, OUTPUT>(
		clock: &Clock,
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		_max_input_amount: u64,
		exact_output: u64,
		_recipient: address,
		sqrt_price: u64,
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, 0);

		let (funds, promise) = init_trade(dca, clock, ctx);
		let max_input_amount = balance::value(&funds);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		dca::assert_max_price(_max_input_amount, exact_output, dca);
		router::swap_exact_output_doublehop<INPUT, HOP1, OUTPUT>(clock, pools, input_funds, max_input_amount, exact_output, dca::owner(dca), sqrt_price, ctx);

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
}

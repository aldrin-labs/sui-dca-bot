// Router functions here: https://github.com/FlowX-Finance/ts-sdk/blob/001d2b549931001fe01f4547c311b9639182e0af/src/constants.ts#L55
#[allow(lint(self_transfer))]
module dca::flow_x {
	use flowx_amm::router;
	use flowx_amm::factory::Container;
	// use flowx_amm::pair::PairMetadata;
	use sui::clock::Clock;
	use sui::transfer;
	use sui::balance;
	use sui::coin::{Self, Coin};
	use sui::tx_context::{TxContext, sender};
	use dca::dca::{Self, DCA, init_trade, resolve_trade};

	const EAmountParamNotEqualToTradeAmount: u64 = 0;
	const ECoinInputMustBeEmpty: u64 = 1;
	const ERecipientAddressNotDcaOwner: u64 = 2;

	entry public fun swap_exact_output<INPUT, OUTPUT>(
		clock: &Clock,
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		input_amount: u64,
		exact_output: u64,
		recipient: address,
		sqrt_price: u64,
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, ECoinInputMustBeEmpty);
		assert!(recipient == dca::owner(dca), ERecipientAddressNotDcaOwner);

		let (funds, promise) = init_trade(dca, clock, ctx);
		let real_input_amount = balance::value(&funds);
		assert!(input_amount == real_input_amount, EAmountParamNotEqualToTradeAmount);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		dca::assert_max_price(input_amount, exact_output, dca);
		router::swap_exact_output<INPUT, OUTPUT>(clock, pools, input_funds, input_amount, exact_output, dca::owner(dca), sqrt_price, ctx);

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}

	entry public fun swap_exact_output_doublehop<INPUT, HOP1, OUTPUT>(
		clock: &Clock,
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		input_amount: u64,
		exact_output: u64,
		recipient: address,
		sqrt_price: u64,
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, ECoinInputMustBeEmpty);
		assert!(recipient == dca::owner(dca), ERecipientAddressNotDcaOwner);

		let (funds, promise) = init_trade(dca, clock, ctx);
		let real_input_amount = balance::value(&funds);
		assert!(input_amount == real_input_amount, EAmountParamNotEqualToTradeAmount);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		dca::assert_max_price(real_input_amount, exact_output, dca);
		router::swap_exact_output_doublehop<INPUT, HOP1, OUTPUT>(clock, pools, input_funds, real_input_amount, exact_output, dca::owner(dca), sqrt_price, ctx);

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
	
	entry public fun swap_exact_output_triplehop<INPUT, HOP1, HOP2, OUTPUT>(
		clock: &Clock,
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		input_amount: u64,
		exact_output: u64,
		recipient: address,
		sqrt_price: u64,
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, ECoinInputMustBeEmpty);
		assert!(recipient == dca::owner(dca), ERecipientAddressNotDcaOwner);

		let (funds, promise) = init_trade(dca, clock, ctx);
		let real_input_amount = balance::value(&funds);
		assert!(input_amount == real_input_amount, EAmountParamNotEqualToTradeAmount);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		dca::assert_max_price(real_input_amount, exact_output, dca);
		router::swap_exact_output_triplehop<INPUT, HOP1, HOP2, OUTPUT>(clock, pools, input_funds, real_input_amount, exact_output, dca::owner(dca), sqrt_price, ctx);

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}

	entry public fun swap_exact_input<INPUT, OUTPUT>(
		clock: &Clock,
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		min_output: u64,
		recipient: address,
		sqrt_price: u64,
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, ECoinInputMustBeEmpty);
		assert!(recipient == dca::owner(dca), ERecipientAddressNotDcaOwner);

		let (funds, promise) = init_trade(dca, clock, ctx);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		dca::assert_max_price_via_output(min_output, &promise);
		router::swap_exact_input<INPUT, OUTPUT>(clock, pools, input_funds, min_output, dca::owner(dca), sqrt_price, ctx);

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
	
	public fun swap_exact_input_doublehop<INPUT, HOP, OUTPUT>(
		clock: &Clock,
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		min_output: u64,
		recipient: address,
		sqrt_price: u64, // confirm...
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, ECoinInputMustBeEmpty);
		assert!(recipient == dca::owner(dca), ERecipientAddressNotDcaOwner);

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
		recipient: address,
		sqrt_price: u64, // confirm...
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		ctx: &mut TxContext
	) {
		assert!(coin::value(&input_funds) == 0, ECoinInputMustBeEmpty);
		assert!(recipient == dca::owner(dca), ERecipientAddressNotDcaOwner);

		let (funds, promise) = init_trade(dca, clock, ctx);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		dca::assert_max_price_via_output(min_output, &promise);
		router::swap_exact_input_triplehop<INPUT, HOP1, HOP2, OUTPUT>(clock, pools, input_funds, min_output, dca::owner(dca), sqrt_price, ctx);

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}


	// === Not in the router ===

	// public fun swap_exact_input_direct<INPUT, OUTPUT>(
	// 	pools: &mut Container,
	// 	input_funds: Coin<INPUT>,
	// 	dca: &mut DCA<INPUT, OUTPUT>,
	// 	gas_cost: u64,
	// 	clock: &Clock,
	// 	ctx: &mut TxContext
	// ) {
	// 	assert!(coin::value(&input_funds) == 0, ECoinInputMustBeEmpty);

	// 	let (funds, promise) = init_trade(dca, clock, ctx);
	// 	balance::join(coin::balance_mut(&mut input_funds), funds);

	// 	let coin = router::swap_exact_input_direct<INPUT, OUTPUT>(pools, input_funds, ctx);

	// 	dca::assert_max_price_via_output(coin::value(&coin), &promise);

	// 	transfer::public_transfer(coin, dca::owner(dca));

	// 	let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
    //     transfer::public_transfer(gas_refund, sender(ctx));
	// }


	// public fun swap_exact_x_to_y_direct<X, Y>(
	// 	pool: &mut PairMetadata<X, Y>,
	// 	input_funds: Coin<X>,
	// 	dca: &mut DCA<X, Y>,
	// 	gas_cost: u64,
	// 	clock: &Clock,
	// 	ctx: &mut TxContext
	// ) {
	// 	assert!(coin::value(&input_funds) == 0, ECoinInputMustBeEmpty);

	// 	let (funds, promise) = init_trade(dca, clock, ctx);
    //     balance::join(coin::balance_mut(&mut input_funds), funds);

	// 	let coin = router::swap_exact_x_to_y_direct(pool, input_funds, ctx);

	// 	dca::assert_max_price_via_output(coin::value(&coin), &promise);

	// 	transfer::public_transfer(coin, dca::owner(dca));

	// 	let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
    //     transfer::public_transfer(gas_refund, sender(ctx));
	// }
	
	// public fun swap_exact_y_to_x_direct<X, Y>(
	// 	pool: &mut PairMetadata<X, Y>,
	// 	input_funds: Coin<Y>,
	// 	dca: &mut DCA<Y, X>,
	// 	gas_cost: u64,
	// 	clock: &Clock,
	// 	ctx: &mut TxContext
	// ) {
	// 	assert!(coin::value(&input_funds) == 0, ECoinInputMustBeEmpty);

	// 	let (funds, promise) = init_trade(dca, clock, ctx);
	// 	balance::join(coin::balance_mut(&mut input_funds), funds);

	// 	let coin = router::swap_exact_y_to_x_direct(pool, input_funds, ctx);

	// 	dca::assert_max_price_via_output(coin::value(&coin), &promise);

	// 	transfer::public_transfer(coin, dca::owner(dca));

	// 	let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
    //     transfer::public_transfer(gas_refund, sender(ctx));
	// }

	// public fun swap_exact_output_direct<INPUT, OUTPUT>(
	// 	container: &mut Container,
	// 	input_funds: Coin<INPUT>,
	// 	exact_output: u64,
	// 	ctx: &mut TxContext
	// ): Coin<OUTPUT> {
	// 	abort(0)
	// }
	

	// public fun swap_x_to_exact_y_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: Coin<BASE>, arg_2: u64, arg_3: &mut TxContext): Coin<QUOTE> {
	// 	abort(0)
	// }
	
	// public fun swap_y_to_exact_x_direct<BASE, QUOTE>(arg_0: &mut PairMetadata<BASE, QUOTE>, arg_1: Coin<QUOTE>, arg_2: u64, arg_3: &mut TxContext): Coin<BASE> {
	// 	abort(0)
	// }
}

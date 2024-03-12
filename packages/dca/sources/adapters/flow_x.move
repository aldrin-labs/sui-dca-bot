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
		let (funds, promise) = init_trade(dca, clock, ctx);
        balance::join(coin::balance_mut(&mut input_funds), funds);

		let coin = router::swap_exact_x_to_y_direct(pool, input_funds, ctx);

		dca::assert_min_price(coin::value(&coin), &promise);

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
		let (funds, promise) = init_trade(dca, clock, ctx);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		let coin = router::swap_exact_y_to_x_direct(pool, input_funds, ctx);

		dca::assert_min_price(coin::value(&coin), &promise);

		transfer::public_transfer(coin, dca::owner(dca));

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
	
	public fun swap_exact_input_direct<INPUT, OUTPUT>(
		pools: &mut Container,
		input_funds: Coin<INPUT>,
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		clock: &Clock,
		ctx: &mut TxContext
	) {
		let (funds, promise) = init_trade(dca, clock, ctx);
		balance::join(coin::balance_mut(&mut input_funds), funds);

		let coin = router::swap_exact_input_direct<INPUT, OUTPUT>(pools, input_funds, ctx);

		dca::assert_min_price(coin::value(&coin), &promise);

		transfer::public_transfer(coin, dca::owner(dca));

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
}

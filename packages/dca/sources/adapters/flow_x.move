#[allow(lint(self_transfer))]
module dca::flow_x {
	use flowx_amm::router;
	use flowx_amm::factory::Container;
	use flowx_amm::pair::PairMetadata;
	use sui::clock::Clock;
	use sui::transfer;
	use sui::coin;
	use sui::tx_context::{TxContext, sender};
	use dca::dca::{Self, DCA, init_trade, resolve_trade};
	
	public fun swap_exact_x_to_y_direct<X, Y>(
		pool: &mut PairMetadata<X, Y>,
		dca: &mut DCA<X, Y>,
		gas_cost: u64,
		clock: &Clock,
		ctx: &mut TxContext
	) {
		let (funds, promise) = init_trade(dca, clock, ctx);

		let coin = router::swap_exact_x_to_y_direct(pool, funds, ctx);

		dca::assert_min_price(coin::value(&coin), &promise);

		transfer::public_transfer(coin, dca::owner(dca));

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
	
	public fun swap_exact_y_to_x_direct<X, Y>(
		pool: &mut PairMetadata<X, Y>,
		dca: &mut DCA<Y, X>,
		gas_cost: u64,
		clock: &Clock,
		ctx: &mut TxContext
	) {
		let (funds, promise) = init_trade(dca, clock, ctx);

		let coin = router::swap_exact_y_to_x_direct(pool, funds, ctx);

		dca::assert_min_price(coin::value(&coin), &promise);

		transfer::public_transfer(coin, dca::owner(dca));

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
	
	public fun swap_exact_input_direct<INPUT, OUTPUT>(
		pools: &mut Container,
		dca: &mut DCA<INPUT, OUTPUT>,
		gas_cost: u64,
		clock: &Clock,
		ctx: &mut TxContext
	) {
		let (funds, promise) = init_trade(dca, clock, ctx);

		let coin = router::swap_exact_input_direct<INPUT, OUTPUT>(pools, funds, ctx);

		dca::assert_min_price(coin::value(&coin), &promise);

		transfer::public_transfer(coin, dca::owner(dca));

		let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
	}
}

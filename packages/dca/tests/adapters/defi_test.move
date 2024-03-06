#[test_only]
module dca::defi_test {
    use sui::clock::{Self, Clock};
    use sui::coin::{Self, Coin};
    use sui::transfer;
    use sui::tx_context::{TxContext, sender};
    use dca::dca::{Self, DCA, init_trade, resolve_trade};

    const EMinOutputBelowThreshold: u64 = 1;
    
    #[test_only]
    public fun swap_ab<A, B>(
        output_amount: u64,
        dca: &mut DCA<A, B>,
        gas_cost: u64,
        clock: &Clock,
        ctx: &mut TxContext
    ) {
        let (input_coin, promise) = init_trade(dca, clock, ctx);
        // let output_coin = coin::mint_for_testing<B>(output_amount, ctx);

        // let min_output = dca::trade_min_output(&promise);
        // assert!(
        //     coin::value(&output_coin) >= min_output,
        //     EMinOutputBelowThreshold
        // );

        transfer::public_transfer(input_coin, dca::owner(dca));
        // transfer::public_transfer(output_coin, dca::owner(dca));

        // let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        // transfer::public_transfer(gas_refund, sender(ctx));
    }

    #[test_only]
    public fun init_trade_and_check<Input, Output>(
        output_amount: u64,
        ts: u64,
        dca: &mut DCA<Input, Output>,
        clock: &mut Clock,
        ctx: &mut TxContext,
    ) {
        clock::set_for_testing(clock, ts);

        swap_ab(
            output_amount,
            dca,
            1, // gas cost
            clock,
            ctx
        );
    }

}
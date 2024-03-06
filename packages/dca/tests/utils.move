#[test_only]
module dca::test_utils {
    use sui::clock::{Self, Clock};
    use sui::coin;
    use sui::sui::SUI;
    use sui::transfer;
    use sui::tx_context::{TxContext, sender};
    use dca::dca::{Self, DCA, init_trade, resolve_trade, gas_budget_estimate_};
    use dca::time_scale;

    // Test struct mocking USDC type
    struct USDC has drop {}

    const OWNER: address = @0x1;
    const DELEGATEE: address = @0x2;

    const FAKE_OWNER: address = @0x3;
    const FAKE_DELEGATEE: address = @0x4;
    
    const FUNDING_AMOUNT: u64 = 1_200_000;

    
    #[test_only]
    public fun owner(): address { OWNER }
    public fun delegatee(): address { DELEGATEE }
    public fun fake_owner(): address { FAKE_OWNER }
    public fun fake_delegatee(): address { FAKE_DELEGATEE }
    
    public fun default_funding_amount(): u64 { FUNDING_AMOUNT }
    
    #[test_only]
    public fun swap_ab<A, B>(
        output_amount: u64,
        dca: &mut DCA<A, B>,
        gas_cost: u64,
        clock: &Clock,
        ctx: &mut TxContext
    ) {
        let (input_coin, promise) = init_trade(dca, clock, ctx);
        let output_coin = coin::mint_for_testing<B>(output_amount, ctx);

        dca::assert_min_price(coin::value(&output_coin), &promise);

        transfer::public_transfer(input_coin, dca::owner(dca));
        transfer::public_transfer(output_coin, dca::owner(dca));

        let gas_refund = resolve_trade(dca, promise, gas_cost, ctx);
        transfer::public_transfer(gas_refund, sender(ctx));
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

    #[test_only]
    public fun init_dca_and_clock(
        outlay: u64,
        clock_ts: u64,
        ctx: &mut TxContext,
    ): (DCA<USDC, SUI>, Clock) {
        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, clock_ts); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(outlay, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            outlay,
            1, // every 1 month
            12, // for 12 months
            time_scale::month(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        (dca, clock)
    }
    
}
#[test_only]
module dca::dca_tests {
    // use std::debug::print;
    use sui::tx_context::TxContext;
    use sui::balance::{Self};
    use sui::clock::{Self, Clock};
    use sui::sui::SUI;
    use sui::coin;
    use sui::test_scenario::{Self, ctx};

    use dca::dca::{Self, DCA};
    use dca::time_scale;
    use dca::protocol_list::{Self, ProtocolList, DummyDefi, dummy_defi_wit, protocol_registry_for_testing};
    use dca::time::{seconds_per_month, mean_deviation_month};

    // Test struct mocking USDC type
    struct USDC has drop {}

    const OWNER: address = @0x1;
    const DELEGATEE: address = @0x2;

    const FAKE_OWNER: address = @0x3;
    const FAKE_DELEGATEE: address = @0x4;

    const GAS_BUDGET_PER_TRADE: u64 = 1;

    #[test]
    fun it_works_base_case_months() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let (dca, clock, protocols) = init_dca_and_clock(12_000, 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, DELEGATEE);
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(1706745600, &mut dca, &protocols, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        // init_trade_and_check(1709251200, &mut dca, &protocols, &mut clock, ctx); // Fri Mar 01 2024 00:00:00 GMT+0000s
        // init_trade_and_check(1711926000, &mut dca, &protocols, &mut clock, ctx); // Mon Apr 01 2024 23:00:00 GMT+0000
        // init_trade_and_check(1714518000, &mut dca, &protocols, &mut clock, ctx); // Wed May 01 2024 23:00:00 GMT+0000
        // init_trade_and_check(1717196400, &mut dca, &protocols, &mut clock, ctx); // Fri May 31 2024 23:00:00 GMT+0000
        // init_trade_and_check(1719788400, &mut dca, &protocols, &mut clock, ctx); // Sun Jun 30 2024 23:00:00 GMT+0000
        // init_trade_and_check(1722466800, &mut dca, &protocols, &mut clock, ctx); // Wed Jul 31 2024 23:00:00 GMT+0000
        // init_trade_and_check(1725145200, &mut dca, &protocols, &mut clock, ctx); // Sat Aug 31 2024 23:00:00 GMT+0000
        // init_trade_and_check(1727737200, &mut dca, &protocols, &mut clock, ctx); // Mon Sep 30 2024 23:00:00 GMT+0000
        // init_trade_and_check(1730419200, &mut dca, &protocols, &mut clock, ctx); // Fri Nov 01 2024 00:00:00 GMT+0000
        // init_trade_and_check(1733011200, &mut dca, &protocols, &mut clock, ctx); // Sun Dec 01 2024 00:00:00 GMT+0000
        // init_trade_and_check(1735689600, &mut dca, &protocols, &mut clock, ctx); // Wed Jan 01 2025 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, OWNER);
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        protocol_list::delete_for_testing(protocols);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_works_with_exact_lower_mean_months() {
        // TODO
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let start_time = 1704067200;

        let (dca, clock, protocols) = init_dca_and_clock(12_000, start_time, ctx);

        test_scenario::next_tx(&mut scenario, DELEGATEE);
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(start_time + seconds_per_month() * 1, &mut dca, &protocols, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 2, &mut dca, &protocols, &mut clock, ctx); // Fri Mar 01 2024 00:00:00 GMT+0000s
        init_trade_and_check(start_time + seconds_per_month() * 3, &mut dca, &protocols, &mut clock, ctx); // Mon Apr 01 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 4, &mut dca, &protocols, &mut clock, ctx); // Wed May 01 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 5, &mut dca, &protocols, &mut clock, ctx); // Fri May 31 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 6, &mut dca, &protocols, &mut clock, ctx); // Sun Jun 30 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 7, &mut dca, &protocols, &mut clock, ctx); // Wed Jul 31 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 8, &mut dca, &protocols, &mut clock, ctx); // Sat Aug 31 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 9, &mut dca, &protocols, &mut clock, ctx); // Mon Sep 30 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 10, &mut dca, &protocols, &mut clock, ctx); // Fri Nov 01 2024 00:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 11, &mut dca, &protocols, &mut clock, ctx); // Sun Dec 01 2024 00:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 12, &mut dca, &protocols, &mut clock, ctx); // Wed Jan 01 2025 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, OWNER);
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        protocol_list::delete_for_testing(protocols);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_works_under_lower_bound_and_lower_mean_months() {
        // TODO
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let start_time = 1704067200;

        let (dca, clock, protocols) = init_dca_and_clock(12_000, start_time, ctx);

        test_scenario::next_tx(&mut scenario, DELEGATEE);
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(start_time + seconds_per_month() * 1 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 2 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Fri Mar 01 2024 00:00:00 GMT+0000s
        init_trade_and_check(start_time + seconds_per_month() * 3 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Mon Apr 01 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 4 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Wed May 01 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 5 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Fri May 31 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 6 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Sun Jun 30 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 7 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Wed Jul 31 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 8 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Sat Aug 31 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 9 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Mon Sep 30 2024 23:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 10 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Fri Nov 01 2024 00:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 11 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Sun Dec 01 2024 00:00:00 GMT+0000
        init_trade_and_check(start_time + seconds_per_month() * 12 - mean_deviation_month(), &mut dca, &protocols, &mut clock, ctx); // Wed Jan 01 2025 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, OWNER);
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        protocol_list::delete_for_testing(protocols);
        test_scenario::end(scenario);
    }
    
    #[test]
    #[expected_failure(abort_code = dca::dca::ENotEnoughTimePassed)]
    fun it_fails_below_lower_bound_and_lower_mean_months() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let start_time = 1704067200;

        let (dca, clock, protocols) = init_dca_and_clock(12_000, start_time, ctx);

        test_scenario::next_tx(&mut scenario, DELEGATEE);
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(start_time + seconds_per_month() * 1 - mean_deviation_month() - 1, &mut dca, &protocols, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, OWNER);
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        protocol_list::delete_for_testing(protocols);
        test_scenario::end(scenario);
    }

    #[test_only]
    fun init_dca_and_clock(
        outlay: u64,
        clock_ts: u64,
        ctx: &mut TxContext,
    ): (DCA<USDC, SUI>, Clock, ProtocolList) {
        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, clock_ts); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(outlay, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(GAS_BUDGET_PER_TRADE, ctx);

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

        let protocols = protocol_registry_for_testing(ctx);
        coin::burn_for_testing(gas_funds);

        (dca, clock, protocols)
    }

    #[test_only]
    fun init_trade_and_check<Input, Output>(
        ts: u64,
        dca: &mut DCA<Input, Output>,
        protocols: &ProtocolList,
        clock: &mut Clock,
        ctx: &mut TxContext,
    ) {
        clock::set_for_testing(clock, ts);
        let (coin, promise) = dca::init_trade(dca, clock, ctx);

        assert!(coin::value(&coin) == 1_000, 0);
        assert!(dca::trade_input(&promise) == 1_000, 0);

        // Mocks trade
        dca::add_trade_proof_with_coin(dummy_defi_wit(), &mut promise, 1_000, coin::mint_for_testing<Output>(10, ctx));

        let gas_budget = dca::resolve_trade<Input, Output, DummyDefi>(dca, promise, protocols, GAS_BUDGET_PER_TRADE, ctx);
        coin::burn_for_testing(coin);
        coin::burn_for_testing(gas_budget);
    }

    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidDelegatee)]
    fun fail_access_as_fake_delegatee() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let (dca, clock, protocols) = init_dca_and_clock(12_000, 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, FAKE_DELEGATEE);
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(1706745600, &mut dca, &protocols, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, OWNER);
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        protocol_list::delete_for_testing(protocols);
        test_scenario::end(scenario);
    }
    
    // #[test]
    // fun early_account_close_as_owner() {
    //     let scenario = test_scenario::begin(OWNER);
    //     let ctx = ctx(&mut scenario);

    //     let (dca, clock, protocols) = init_dca_and_clock(12_000, 1704067200, ctx);

    //     test_scenario::next_tx(&mut scenario, FAKE_OWNER);
    //     let ctx = ctx(&mut scenario);

    //     // Periodic Withdrawal process
    //     init_trade_and_check(1706745600, &mut dca, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        
    //     // Close DCA account
    //     test_scenario::next_tx(&mut scenario, OWNER);
    //     let ctx = ctx(&mut scenario);

    //     dca::redeem_funds_and_close(dca, ctx);

    //     // Finish testing
    //     clock::destroy_for_testing(clock);
    //     test_scenario::end(scenario);
    // }

    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidAuthority)]
    fun fail_close_account_as_fake_owner() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let (dca, clock, protocols) = init_dca_and_clock(12_000, 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, FAKE_OWNER);
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        protocol_list::delete_for_testing(protocols);
        test_scenario::end(scenario);
    }
    
    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidOwner)]
    fun fail_withdraw_base_as_fake_owner() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let (dca, clock, protocols) = init_dca_and_clock(12_000, 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, FAKE_OWNER);
        let ctx = ctx(&mut scenario);

        dca::withdraw_input(&mut dca, 12_000, 12, ctx);
        dca::destroy_for_testing(dca);

        // Finish testing
        clock::destroy_for_testing(clock);
        protocol_list::delete_for_testing(protocols);
        test_scenario::end(scenario);
    }
    
    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidOwner)]
    fun fail_withdraw_base_as_fake_owner_1() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let (dca, clock, protocols) = init_dca_and_clock(12_000, 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, FAKE_OWNER);
        let ctx = ctx(&mut scenario);

        let (funds, gas_budget) = dca::withdraw_input_(&mut dca, 12_000, 12, ctx);
        dca::destroy_for_testing(dca);

        // Finish testing
        balance::destroy_for_testing(funds);
        balance::destroy_for_testing(gas_budget);
        clock::destroy_for_testing(clock);
        protocol_list::delete_for_testing(protocols);
        test_scenario::end(scenario);
    }
}

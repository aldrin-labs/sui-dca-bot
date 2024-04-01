#[test_only]
module dca::dca_tests_2 {
    // use std::debug::print;
    use std::option::{none, some};
    use sui::clock;
    use sui::sui::SUI;
    use sui::coin;
    use sui::test_scenario::{Self, ctx};

    use dca::dca::{Self, gas_budget_estimate_, with_trade_params, with_price};
    use dca::time_scale;
    use dca::test_utils::{
        USDC, swap_ab, init_trade_and_check,
        owner, delegatee, default_funding_amount,
    };

    #[test]
    #[expected_failure(abort_code = dca::dca::EInactive)]
    fun fails_no_remaining_orders() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(default_funding_amount(), ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(1), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            1, // for 1 months
            time_scale::month(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        test_scenario::next_tx(&mut scenario, delegatee());

        // Periodic Withdrawal process
        init_trade_and_check(500, 1706745600, &mut dca, &mut clock, &mut scenario); // Thu Feb 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, 1709251200, &mut dca, &mut clock, &mut scenario); // Fri Mar 01 2024 00:00:00 GMT+0000s
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    #[expected_failure(abort_code = dca::dca::EUnfundedAccount)]
    fun fails_no_remaining_orders_nor_funding() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(default_funding_amount(), ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(1), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            1, // for 1 months
            time_scale::month(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        test_scenario::next_tx(&mut scenario, delegatee());

        // Periodic Withdrawal process
        init_trade_and_check(500, 1706745600, &mut dca, &mut clock, &mut scenario); // Thu Feb 01 2024 00:00:00 GMT+0000

        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);
        
        dca::reactivate_as_owner(&mut dca, ctx);
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    fun it_trades_max_price() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(100_000, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new_with_params<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            1, // for 1 month
            time_scale::month(),
            &mut gas_funds,
            with_trade_params(none(), some(with_price(2, 1))), // no min_price; max price USDC/SUI = 2.0
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        test_scenario::next_tx(&mut scenario, delegatee());
        let ctx = ctx(&mut scenario);

        clock::set_for_testing(&mut clock, 1706745600);
        
        let min_sui_amount = dca::net_trade_amount_(50_000); // 100_000 USDC / 2 (price)

        swap_ab(
            min_sui_amount,
            &mut dca,
            1, // gas cost
            &clock,
            ctx
        );

        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_trades_max_price_when_max_price_below_1() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(100_000, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new_with_params<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            1, // for 1 month
            time_scale::month(),
            &mut gas_funds,
            with_trade_params(none(), some(with_price(1, 2))), // no min_price; max price USDC/SUI = 0.5
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        test_scenario::next_tx(&mut scenario, delegatee());
        let ctx = ctx(&mut scenario);

        clock::set_for_testing(&mut clock, 1706745600);

        let min_sui_amount = dca::net_trade_amount_(200_000); // 100_000 USDC --> 0.5 (price)

        swap_ab(
            min_sui_amount,
            &mut dca,
            1, // gas cost
            &clock,
            ctx
        );

        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    #[expected_failure(abort_code = dca::dca::EAboveMaxPrice)]
    fun fails_if_trade_above_max_price() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(100_000, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new_with_params<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            1, // for 1 month
            time_scale::month(),
            &mut gas_funds,
            with_trade_params(none(), some(with_price(2, 1))), // no min_price; max price USDC/SUI = 2.0
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        test_scenario::next_tx(&mut scenario, delegatee());
        let ctx = ctx(&mut scenario);

        clock::set_for_testing(&mut clock, 1706745600);

        let min_sui_amount = dca::net_trade_amount_(50_000); // 100_000 USDC / 2 (price)

        swap_ab(
            min_sui_amount - 1,
            &mut dca,
            1, // gas cost
            &clock,
            ctx
        );
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    #[expected_failure(abort_code = dca::dca::EAboveMaxPrice)]
    fun fails_if_trade_above_max_price_when_max_price_below_1() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(100_000, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new_with_params<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            1, // for 1 month
            time_scale::month(),
            &mut gas_funds,
            with_trade_params(none(), some(with_price(1, 2))), // no min_price; max price USDC/SUI = 0.5
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        test_scenario::next_tx(&mut scenario, delegatee());
        let ctx = ctx(&mut scenario);

        clock::set_for_testing(&mut clock, 1706745600);

        let min_sui_amount = dca::net_trade_amount_(200_000); // 100_000 USDC / 0.5 (price)

        swap_ab(
            min_sui_amount - 1,
            &mut dca,
            1, // gas cost
            &clock,
            ctx
        );
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    #[expected_failure(abort_code = dca::dca::ETotalOrdersAboveLimit)]
    fun fails_orders_above_limit() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(100_000_000_000_000_000, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(25_000 + 1), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            25_000 + 1, // for 1 months
            time_scale::month(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        clock::destroy_for_testing(clock);
        dca::destroy_for_testing(dca);
        test_scenario::end(scenario);
    }

    #[test]
    #[expected_failure(abort_code = dca::dca::EBelowMinimumFunding)]
    fun fails_below_minimum_funding_per_trade() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(dca::minimum_funding_per_trade() * 12 - 1, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            12, // for 12 months
            time_scale::month(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        clock::destroy_for_testing(clock);
        dca::destroy_for_testing(dca);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_works_at_minimum_funding_per_trade() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(dca::minimum_funding_per_trade() * 12, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            12, // for 12 months
            time_scale::month(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        clock::destroy_for_testing(clock);
        dca::destroy_for_testing(dca);
        test_scenario::end(scenario);
    }

    #[test]
    #[expected_failure(abort_code = dca::dca::EInsufficientGasProvision)]
    fun is_fails_below_minimum_gas_funding() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1704067200); // Mon Jan 01 2024 00:00:00 GMT+0000

        let outlay = coin::mint_for_testing<USDC>(dca::minimum_funding_per_trade() * 12, ctx);
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12) - 1, ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            delegatee(),
            outlay,
            1, // every 1 month
            12, // for 12 months
            time_scale::month(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        clock::destroy_for_testing(clock);
        dca::destroy_for_testing(dca);
        test_scenario::end(scenario);
    }
}

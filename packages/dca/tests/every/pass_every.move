#[test_only]
module dca::dca_tests_every_pass {
    use sui::clock;
    use sui::sui::SUI;
    use sui::coin;
    use sui::test_scenario::{Self, ctx};

    use dca::dca::{Self, gas_budget_estimate_};
    use dca::time_scale;

    // Test struct mocking USDC type
    struct USDC has drop {}

    const OWNER: address = @0x1;
    const DELEGATEE: address = @0x2;

    const FAKE_OWNER: address = @0x3;
    const FAKE_DELEGATEE: address = @0x4;
    
    const GAS_BUDGET_PER_TRADE: u64 = 1;
    const FUNDING_AMOUNT: u64 = 1_200_000;
    
    #[test]
    fun it_fails_invalid_every_seconds_lower() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            30,
            12,
            time_scale::second(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_fails_invalid_every_seconds_upper() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            59,
            12,
            time_scale::second(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_fails_invalid_every_minutes_lower() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            1,
            12,
            time_scale::minute(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    fun it_fails_invalid_every_minutes_upper() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            59,
            12,
            time_scale::second(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    fun it_fails_invalid_every_hours_lower() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            1,
            12,
            time_scale::hour(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    fun it_fails_invalid_every_hours_upper() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            24,
            12,
            time_scale::hour(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_fails_invalid_every_days_lower() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            1,
            12,
            time_scale::day(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    fun it_fails_invalid_every_days_upper() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            30,
            12,
            time_scale::day(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_fails_invalid_every_weeks_lower() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            1,
            12,
            time_scale::week(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    fun it_fails_invalid_every_weeks_upper() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            52,
            12,
            time_scale::week(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_fails_invalid_every_months_lower() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            1,
            12,
            time_scale::month(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_fails_invalid_every_months_upper() {
        let scenario = test_scenario::begin(OWNER);
        let ctx = ctx(&mut scenario);

        let clock = clock::create_for_testing(ctx);
        clock::set_for_testing(&mut clock, 1706745600); // 
        
        let gas_funds = coin::mint_for_testing<SUI>(gas_budget_estimate_(12), ctx);

        // Initiate account
        let dca = dca::new<USDC, SUI>(
            &clock,
            DELEGATEE,
            coin::mint_for_testing<USDC>(FUNDING_AMOUNT, ctx),
            12,
            12,
            time_scale::month(),
            &mut gas_funds,
            ctx,
        );

        coin::burn_for_testing(gas_funds);

        // Finish testing
        dca::destroy_for_testing(dca);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
}

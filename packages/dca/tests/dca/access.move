#[test_only]
module dca::dca_access_tests {
    // use std::debug::print;
    use sui::balance::{Self};
    use sui::clock;
    use sui::coin;
    use sui::test_scenario::{Self, ctx};

    use dca::dca::{Self, gas_budget_estimate_};
    use dca::test_utils::{
        init_trade_and_check, owner, delegatee, default_funding_amount,
        init_dca_and_clock, fake_owner, fake_delegatee
    };

    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidOwner)]
    fun fail_withdraw_input_as_fake_owner() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, fake_owner());
        let ctx = ctx(&mut scenario);

        dca::withdraw_input(&mut dca, default_funding_amount(), 12, ctx);
        dca::destroy_for_testing(dca);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidOwner)]
    fun fail_withdraw_input_as_fake_owner_1() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, fake_owner());
        let ctx = ctx(&mut scenario);

        let (funds, gas_budget) = dca::withdraw_input_(&mut dca, default_funding_amount(), 12, ctx);
        dca::destroy_for_testing(dca);

        // Finish testing
        balance::destroy_for_testing(funds);
        balance::destroy_for_testing(gas_budget);
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidOwner)]
    fun fail_deposit_input_as_fake_owner() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, fake_owner());
        let ctx = ctx(&mut scenario);

        let gas_funds = coin::mint_for_testing(gas_budget_estimate_(1), ctx);

        dca::deposit_input(
            &mut dca,
            coin::mint_for_testing(100_000, ctx),
            1,
            &mut gas_funds,
            ctx
        );
        dca::destroy_for_testing(dca);

        // Finish testing
        clock::destroy_for_testing(clock);
        coin::burn_for_testing(gas_funds);
        test_scenario::end(scenario);
    }

    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidAuthority)]
    fun fail_close_account_as_fake_owner() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, fake_owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidDelegatee)]
    fun fail_access_as_fake_delegatee() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, fake_delegatee());
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(500, 1706745600, &mut dca, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidOwner)]
    fun fail_reactivate_account_as_fake_owner() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, delegatee());
        let ctx = ctx(&mut scenario);

        dca::set_inactive(&mut dca, ctx);
        
        test_scenario::next_tx(&mut scenario, fake_owner());
        let ctx = ctx(&mut scenario);

        dca::reactivate_as_owner(&mut dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        dca::destroy_for_testing(dca);
        test_scenario::end(scenario);
    }
    
    #[test]
    #[expected_failure(abort_code = dca::dca::EInvalidAuthority)]
    fun fail_set_inactivate_as_fake_owner() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, fake_owner());
        let ctx = ctx(&mut scenario);

        dca::set_inactive(&mut dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        dca::destroy_for_testing(dca);
        test_scenario::end(scenario);
    }
}

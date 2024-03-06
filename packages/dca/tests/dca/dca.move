#[test_only]
module dca::dca_tests {
    // use std::debug::print;
    use sui::clock;
    use sui::test_scenario::{Self, ctx};

    use dca::dca;
    use dca::time::{seconds_per_month, mean_deviation_month};
    use dca::test_utils::{init_trade_and_check, owner, delegatee, default_funding_amount, init_dca_and_clock};

    #[test]
    fun it_works_base_case_months() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), 1704067200, ctx);

        test_scenario::next_tx(&mut scenario, delegatee());
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(500, 1706745600, &mut dca, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, 1709251200, &mut dca, &mut clock, ctx); // Fri Mar 01 2024 00:00:00 GMT+0000s
        init_trade_and_check(500, 1711926000, &mut dca, &mut clock, ctx); // Mon Apr 01 2024 23:00:00 GMT+0000
        init_trade_and_check(500, 1714518000, &mut dca, &mut clock, ctx); // Wed May 01 2024 23:00:00 GMT+0000
        init_trade_and_check(500, 1717196400, &mut dca, &mut clock, ctx); // Fri May 31 2024 23:00:00 GMT+0000
        init_trade_and_check(500, 1719788400, &mut dca, &mut clock, ctx); // Sun Jun 30 2024 23:00:00 GMT+0000
        init_trade_and_check(500, 1722466800, &mut dca, &mut clock, ctx); // Wed Jul 31 2024 23:00:00 GMT+0000
        init_trade_and_check(500, 1725145200, &mut dca, &mut clock, ctx); // Sat Aug 31 2024 23:00:00 GMT+0000
        init_trade_and_check(500, 1727737200, &mut dca, &mut clock, ctx); // Mon Sep 30 2024 23:00:00 GMT+0000
        init_trade_and_check(500, 1730419200, &mut dca, &mut clock, ctx); // Fri Nov 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, 1733011200, &mut dca, &mut clock, ctx); // Sun Dec 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, 1735689600, &mut dca, &mut clock, ctx); // Wed Jan 01 2025 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_works_with_exact_lower_mean_months() {
        // TODO
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let start_time = 1704067200;

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), start_time, ctx);

        test_scenario::next_tx(&mut scenario, delegatee());
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(500, start_time + seconds_per_month() * 1, &mut dca, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 2, &mut dca, &mut clock, ctx); // Fri Mar 01 2024 00:00:00 GMT+0000s
        init_trade_and_check(500, start_time + seconds_per_month() * 3, &mut dca, &mut clock, ctx); // Mon Apr 01 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 4, &mut dca, &mut clock, ctx); // Wed May 01 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 5, &mut dca, &mut clock, ctx); // Fri May 31 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 6, &mut dca, &mut clock, ctx); // Sun Jun 30 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 7, &mut dca, &mut clock, ctx); // Wed Jul 31 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 8, &mut dca, &mut clock, ctx); // Sat Aug 31 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 9, &mut dca, &mut clock, ctx); // Mon Sep 30 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 10, &mut dca, &mut clock, ctx); // Fri Nov 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 11, &mut dca, &mut clock, ctx); // Sun Dec 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 12, &mut dca, &mut clock, ctx); // Wed Jan 01 2025 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    fun it_works_under_lower_bound_and_lower_mean_months() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let start_time = 1704067200;

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), start_time, ctx);

        test_scenario::next_tx(&mut scenario, delegatee());
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(500, start_time + seconds_per_month() * 1 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 2 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Fri Mar 01 2024 00:00:00 GMT+0000s
        init_trade_and_check(500, start_time + seconds_per_month() * 3 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Mon Apr 01 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 4 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Wed May 01 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 5 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Fri May 31 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 6 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Sun Jun 30 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 7 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Wed Jul 31 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 8 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Sat Aug 31 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 9 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Mon Sep 30 2024 23:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 10 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Fri Nov 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 11 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Sun Dec 01 2024 00:00:00 GMT+0000
        init_trade_and_check(500, start_time + seconds_per_month() * 12 - mean_deviation_month(), &mut dca, &mut clock, ctx); // Wed Jan 01 2025 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }
    
    #[test]
    #[expected_failure(abort_code = dca::dca::ENotEnoughTimePassed)]
    fun it_fails_below_lower_bound_and_lower_mean_months() {
        let scenario = test_scenario::begin(owner());
        let ctx = ctx(&mut scenario);

        let start_time = 1704067200;

        let (dca, clock) = init_dca_and_clock(default_funding_amount(), start_time, ctx);

        test_scenario::next_tx(&mut scenario, delegatee());
        let ctx = ctx(&mut scenario);

        // Periodic Withdrawal process
        init_trade_and_check(500, start_time + seconds_per_month() * 1 - mean_deviation_month() - 1, &mut dca, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        
        // Close DCA account
        test_scenario::next_tx(&mut scenario, owner());
        let ctx = ctx(&mut scenario);

        dca::redeem_funds_and_close(dca, ctx);

        // Finish testing
        clock::destroy_for_testing(clock);
        test_scenario::end(scenario);
    }

    // #[test]
    // fun early_account_close_as_owner() {
    //     let scenario = test_scenario::begin(owner());
    //     let ctx = ctx(&mut scenario);

    //     let (dca, clock) = init_dca_and_clock(default_funding_amount(), 1704067200, ctx);

    //     test_scenario::next_tx(&mut scenario, FAKE_owner());
    //     let ctx = ctx(&mut scenario);

    //     // Periodic Withdrawal process
    //     init_trade_and_check(500, 1706745600, &mut dca, &mut clock, ctx); // Thu Feb 01 2024 00:00:00 GMT+0000
        
    //     // Close DCA account
    //     test_scenario::next_tx(&mut scenario, owner());
    //     let ctx = ctx(&mut scenario);

    //     dca::redeem_funds_and_close(dca, ctx);

    //     // Finish testing
    //     clock::destroy_for_testing(clock);
    //     test_scenario::end(scenario);
    // }
}

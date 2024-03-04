module dca::time {
    // Constants for time conversion
    const SECONDS_PER_MINUTE: u64 = 60;
    const SECONDS_PER_HOUR: u64 = 3600; // 60 * 60
    const SECONDS_PER_DAY: u64 = 86400; // 3600 * 24
    const SECONDS_PER_WEEK: u64 = 604800; // 86400 * 7
    const SECONDS_PER_MONTH: u64 = 2419200; // 86400 * 28 we take the lower bound

    // Constants representing mean deviation bounds
    const MEAN_DEVIATION_SECOND: u64 = 15; // 15 Seconds
    const MEAN_DEVIATION_MINUTE: u64 = 30; // 30 Seconds
    const MEAN_DEVIATION_HOUR: u64 = 3600; // 1800 seconds = 30 minutes
    const MEAN_DEVIATION_DAY: u64 = 21600; // 21600 seconds = 6 hours
    const MEAN_DEVIATION_WEEK: u64 = 86400; // 86400 seconds = 1 day
    const MEAN_DEVIATION_MONTH: u64 = 86400; // 86400 seconds = 1 day

    // Check if `n` seconds have passed from `a_ts` to `b_ts`
    public fun has_n_seconds_passed(b_ts: u64, a_ts: u64, n: u64): bool {
        has_n_seconds_passed_(b_ts, a_ts, n, MEAN_DEVIATION_SECOND)
    }

    // Check if `n` minutes have passed from `a_ts` to `b_ts`
    public fun has_n_minutes_passed(b_ts: u64, a_ts: u64, n: u64): bool {
        Self::has_n_seconds_passed_(b_ts, a_ts, n * SECONDS_PER_MINUTE, MEAN_DEVIATION_MINUTE)
    }

    // Check if `n` hours have passed from `a_ts` to `b_ts`
    public fun has_n_hours_passed(b_ts: u64, a_ts: u64, n: u64): bool {
        Self::has_n_seconds_passed_(b_ts, a_ts, n * SECONDS_PER_HOUR, MEAN_DEVIATION_HOUR)
    }

    // Check if `n` days have passed from `a_ts` to `b_ts`
    public fun has_n_days_passed(b_ts: u64, a_ts: u64, n: u64): bool {
        Self::has_n_seconds_passed_(b_ts, a_ts, n * SECONDS_PER_DAY, MEAN_DEVIATION_DAY)
    }

    // Check if `n` weeks have passed from `a_ts` to `b_ts`
    public fun has_n_weeks_passed(b_ts: u64, a_ts: u64, n: u64): bool {
        Self::has_n_seconds_passed_(b_ts, a_ts, n * SECONDS_PER_WEEK, MEAN_DEVIATION_WEEK)
    }

    // Check if `n` months have passed from `a_ts` to `b_ts`
    public fun has_n_months_passed(b_ts: u64, a_ts: u64, n: u64): bool {
        Self::has_n_seconds_passed_(b_ts, a_ts, n * SECONDS_PER_MONTH, MEAN_DEVIATION_MONTH)
    }

    // Check if `n` seconds have passed from `a_ts` to `b_ts`
    fun has_n_seconds_passed_(b_ts: u64, a_ts: u64, n: u64, mean_deviation: u64): bool {
        assert!(b_ts >= a_ts, 0);
        let time_passed = b_ts - a_ts;
        time_passed >= n - mean_deviation
    }

    // === Test Functions ===

    #[test_only]
    public fun seconds_per_minute(): u64 { SECONDS_PER_MINUTE }
    #[test_only]
    public fun seconds_per_hour(): u64 { SECONDS_PER_HOUR }
    #[test_only]
    public fun seconds_per_day(): u64 { SECONDS_PER_DAY }
    #[test_only]
    public fun seconds_per_week(): u64 { SECONDS_PER_WEEK }
    #[test_only]
    public fun seconds_per_month(): u64 { SECONDS_PER_MONTH }
    #[test_only]
    public fun mean_deviation_second(): u64 { MEAN_DEVIATION_SECOND }
    #[test_only]
    public fun mean_deviation_minute(): u64 { MEAN_DEVIATION_MINUTE }
    #[test_only]
    public fun mean_deviation_hour(): u64 { MEAN_DEVIATION_HOUR }
    #[test_only]
    public fun mean_deviation_day(): u64 { MEAN_DEVIATION_DAY }
    #[test_only]
    public fun mean_deviation_week(): u64 { MEAN_DEVIATION_WEEK }
    #[test_only]
    public fun mean_deviation_month(): u64 { MEAN_DEVIATION_MONTH }
}

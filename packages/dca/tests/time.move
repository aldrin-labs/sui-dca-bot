#[test_only]
module dca::time_tests {
    use dca::time::{
        Self, seconds_per_minute, seconds_per_hour,
        seconds_per_day, seconds_per_week, seconds_per_month,
        mean_deviation_second, mean_deviation_minute, mean_deviation_hour,
        mean_deviation_day, mean_deviation_week, mean_deviation_month
    };

    #[test]
    fun test_seconds() {
        let start_time = 1704067200;

        let (every, n_orders) = (30, 2);
        let delta_seconds = every * n_orders;
        // Should be `true`
        assert!(true == time::has_n_seconds_passed(start_time + delta_seconds, start_time, delta_seconds), 0);
        assert!(true == time::has_n_seconds_passed(start_time + delta_seconds + 1, start_time, delta_seconds), 0);
        assert!(true == time::has_n_seconds_passed(start_time + delta_seconds - mean_deviation_second(), start_time, delta_seconds), 0);
        // Should be `false`
        assert!(false == time::has_n_seconds_passed(start_time + delta_seconds - mean_deviation_second() - 1, start_time, delta_seconds), 0);
    }
    
    #[test]
    fun test_minutes() {
        let start_time = 1704067200;

        let (every, n_orders) = (10, 6);
        let delta_minutes = every * n_orders;
        let delta_seconds = delta_minutes * seconds_per_minute();
        
        // Should be `true`
        assert!(true == time::has_n_minutes_passed(start_time + delta_seconds, start_time, delta_minutes), 0);
        assert!(true == time::has_n_minutes_passed(start_time + delta_seconds + 1, start_time, delta_minutes), 0);
        assert!(true == time ::has_n_minutes_passed(start_time + delta_seconds - mean_deviation_minute(), start_time, delta_minutes), 0);
        // Should be `false`
        assert!(false == time::has_n_minutes_passed(start_time + delta_seconds - mean_deviation_minute() - 1, start_time, delta_minutes), 0);
    }
    
    #[test]
    fun test_hours() {
        let start_time = 1704067200;

        let (every, n_orders) = (2, 12);
        let delta_hours = every * n_orders;
        let delta_seconds = every * n_orders * seconds_per_hour();
        
        // Should be `true`
        assert!(true == time::has_n_hours_passed(start_time + delta_seconds, start_time, delta_hours), 0);
        assert!(true == time::has_n_hours_passed(start_time + delta_seconds + 1, start_time, delta_hours), 0);
        assert!(true == time ::has_n_hours_passed(start_time + delta_seconds - mean_deviation_hour(), start_time, delta_hours), 0);
        // Should be `false`
        assert!(false == time::has_n_hours_passed(start_time + delta_seconds - mean_deviation_hour() - 1, start_time, delta_hours), 0);
    }
    
    #[test]
    fun test_days() {
        let start_time = 1704067200;

        let (every, n_orders) = (2, 12);
        let delta_days = every * n_orders;
        let delta_seconds = every * n_orders * seconds_per_day();
        
        // Should be `true`
        assert!(true == time::has_n_days_passed(start_time + delta_seconds, start_time, delta_days), 0);
        assert!(true == time::has_n_days_passed(start_time + delta_seconds + 1, start_time, delta_days), 0);
        assert!(true == time ::has_n_days_passed(start_time + delta_seconds - mean_deviation_day(), start_time, delta_days), 0);
        // Should be `false`
        assert!(false == time::has_n_days_passed(start_time + delta_seconds - mean_deviation_day() - 1, start_time, delta_days), 0);
    }
    
    #[test]
    fun test_weeks() {
        let start_time = 1704067200;

        let (every, n_orders) = (2, 12);
        let delta_weeks = every * n_orders;
        let delta_seconds = every * n_orders * seconds_per_week();
        
        // Should be `true`
        assert!(true == time::has_n_weeks_passed(start_time + delta_seconds, start_time, delta_weeks), 0);
        assert!(true == time::has_n_weeks_passed(start_time + delta_seconds + 1, start_time, delta_weeks), 0);
        assert!(true == time ::has_n_weeks_passed(start_time + delta_seconds - mean_deviation_week(), start_time, delta_weeks), 0);
        // Should be `false`
        assert!(false == time::has_n_weeks_passed(start_time + delta_seconds - mean_deviation_week() - 1, start_time, delta_weeks), 0);
    }
    
    #[test]
    fun test_month() {
        let start_time = 1704067200;

        let (every, n_orders) = (2, 12);
        let delta_months = every * n_orders;
        let delta_seconds = every * n_orders * seconds_per_month();
        
        // Should be `true`
        assert!(true == time::has_n_months_passed(start_time + delta_seconds, start_time, delta_months), 0);
        assert!(true == time::has_n_months_passed(start_time + delta_seconds + 1, start_time, delta_months), 0);
        assert!(true == time ::has_n_months_passed(start_time + delta_seconds - mean_deviation_month(), start_time, delta_months), 0);
        // Should be `false`
        assert!(false == time::has_n_months_passed(start_time + delta_seconds - mean_deviation_month() - 1, start_time, delta_months), 0);
    }
    
}

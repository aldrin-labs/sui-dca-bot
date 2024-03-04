module cetus::expect_swap {
    use cetus_clmm::clmm_math;
    use cetus_clmm::pool::Pool;
    use cetus_clmm::tick;
    use integer_mate::full_math_u128;
    use integer_mate::full_math_u64;
    use integer_mate::i128;
    use integer_mate::i32;
    use integer_mate::math_u128;
    use integer_mate::math_u256;
    use move_stl::option_u64;
    use sui::event;

    struct ExpectSwapResult has copy, drop, store {
        amount_in: u256,
        amount_out: u256,
        fee_amount: u256,
        fee_rate: u64,
        after_sqrt_price: u128,
        is_exceed: bool,
        step_results: vector<SwapStepResult>
    }

    struct SwapStepResult has copy, drop, store {
        current_sqrt_price: u128,
        targ_et_sqrt_price: u128,
        current_liquidity: u128,
        amount_in: u256,
        amount_out: u256,
        fee_amount: u256,
        remainder_amount: u64
    }

    struct SwapResult has copy, drop {
        amount_in: u256,
        amount_out: u256,
        fee_amount: u256,
        ref_fee_amount: u256,
        steps: u64
    }

    struct ExpectSwapResultEvent has copy, drop, store {
        data: ExpectSwapResult,
        current_sqrt_price: u128
    }

    entry public fun get_expect_swap_result<Ty0, Ty1>(arg_0: &Pool<Ty0, Ty1>, arg_1: bool, arg_2: bool, arg_3: u64) {
        abort(0)
    }

    public fun expect_swap<Ty0, Ty1>(arg_0: &Pool<Ty0, Ty1>, arg_1: bool, arg_2: bool, arg_3: u64): ExpectSwapResult {
        abort(0)
    }

    public fun expect_swap_result_amount_out(arg_0: &ExpectSwapResult): u256 {
        abort(0)
    }

    public fun expect_swap_result_is_exceed(arg_0: &ExpectSwapResult): bool {
        abort(0)
    }

    public fun expect_swap_result_amount_in(arg_0: &ExpectSwapResult): u256 {
        abort(0)
    }

    public fun expect_swap_result_after_sqrt_price(arg_0: &ExpectSwapResult): u128 {
        abort(0)
    }

    public fun expect_swap_result_fee_amount(arg_0: &ExpectSwapResult): u256 {
        abort(0)
    }

    public fun expect_swap_result_step_results(arg_0: &ExpectSwapResult): &vector<SwapStepResult> {
        abort(0)
    }

    public fun expect_swap_result_steps_length(arg_0: &ExpectSwapResult): u64 {
        abort(0)
    }

    public fun expect_swap_result_step_swap_result(arg_0: &ExpectSwapResult, arg_1: u64): &SwapStepResult {
        abort(0)
    }

    public fun step_swap_result_amount_in(arg_0: &SwapStepResult): u256 {
        abort(0)
    }

    public fun step_swap_result_amount_out(arg_0: &SwapStepResult): u256 {
        abort(0)
    }

    public fun step_swap_result_fee_amount(arg_0: &SwapStepResult): u256 {
        abort(0)
    }

    public fun step_swap_result_current_sqrt_price(arg_0: &SwapStepResult): u128 {
        abort(0)
    }

    public fun step_swap_result_targ_et_sqrt_price(arg_0: &SwapStepResult): u128 {
        abort(0)
    }

    public fun step_swap_result_current_liquidity(arg_0: &SwapStepResult): u128 {
        abort(0)
    }

    public fun step_swap_result_remainder_amount(arg_0: &SwapStepResult): u64 {
        abort(0)
    }

    public fun compute_swap_step(arg_0: u128, arg_1: u128, arg_2: u128, arg_3: u64, arg_4: u64, arg_5: bool, arg_6: bool): (u256, u256, u128, u256) {
        abort(0)
    }

    fun update_swap_result(arg_0: &mut SwapResult, arg_1: u256, arg_2: u256, arg_3: u256) {
        abort(0)
    }

    fun default_swap_result(): SwapResult {
        abort(0)
    }

    fun check_remainer_amount_sub(arg_0: u64, arg_1: u64): u64 {
        abort(0)
    }

}
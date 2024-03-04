module cetus_clmm::pool {
    use sui::object::{UID, ID};
    use sui::balance::Balance;
    use std::string::String;
    use std::type_name::TypeName;
    use sui::tx_context::TxContext;
    use sui::clock::Clock;
    use sui::package::Publisher;

    use integer_mate::i32::I32;

    use cetus_clmm::config::GlobalConfig;
    use cetus_clmm::partner::Partner;
    use cetus_clmm::position::{Position, PositionManager, PositionInfo};
    use cetus_clmm::tick::{Tick, TickManager};
    use cetus_clmm::rewarder::{RewarderManager, RewarderGlobalVault};
    
    struct POOL has drop {}

    struct Pool<phantom CoinTypeA, phantom CoinTypeB> has key, store {
        id: UID,
        coin_a: Balance<CoinTypeA>,
        coin_b: Balance<CoinTypeB>,
        tick_spacing: u32,
        fee_rate: u64,
        liquidity: u128,
        current_sqrt_price: u128,
        current_tick_index: I32,
        fee_growth_global_a: u128,
        fee_growth_global_b: u128,
        fee_protocol_coin_a: u64,
        fee_protocol_coin_b: u64,
        tick_manager: TickManager,
        rewarder_manager: RewarderManager,
        position_manager: PositionManager,
        is_pause: bool,
        index: u64,
        url: String,
    }
    
    struct SwapResult has copy, drop {
        amount_in: u64,
        amount_out: u64,
        fee_amount: u64,
        ref_fee_amount: u64,
        steps: u64,
    }
    
    struct FlashSwapReceipt<phantom CoinTypeA, phantom CoinTypeB> {
        pool_id: ID,
        a2b: bool,
        partner_id: ID,
        pay_amount: u64,
        ref_fee_amount: u64
    }

    struct AddLiquidityReceipt<phantom CoinTypeA, phantom CoinTypeB> {
        pool_id: ID,
        amount_a: u64,
        amount_b: u64
    }

    struct CalculatedSwapResult has copy, drop, store {
        amount_in: u64,
        amount_out: u64,
        fee_amount: u64,
        fee_rate: u64,
        after_sqrt_price: u128,
        is_exceed: bool,
        step_results: vector<SwapStepResult>
    }

    struct SwapStepResult has copy, drop, store {
        current_sqrt_price: u128,
        targ_et_sqrt_price: u128,
        current_liquidity: u128,
        amount_in: u64,
        amount_out: u64,
        fee_amount: u64,
        remainder_amount: u64
    }
    
    struct OpenPositionEvent has copy, drop, store {
        pool: ID,
        tick_lower: I32,
        tick_upper: I32,
        position: ID,
    }

    struct ClosePositionEvent has copy, drop, store {
        pool: ID,
        position: ID,
    }
    
    struct AddLiquidityEvent has copy, drop, store {
        pool: ID,
        position: ID,
        tick_lower: I32,
        tick_upper: I32,
        liquidity: u128,
        after_liquidity: u128,
        amount_a: u64,
        amount_b: u64,
    }
    
    struct RemoveLiquidityEvent has copy, drop, store {
        pool: ID,
        position: ID,
        tick_lower: I32,
        tick_upper: I32,
        liquidity: u128,
        after_liquidity: u128,
        amount_a: u64,
        amount_b: u64,
    }

    struct SwapEvent has copy, drop, store {
        atob: bool,
        pool: ID,
        partner: ID,
        amount_in: u64,
        amount_out: u64,
        ref_amount: u64,
        fee_amount: u64,
        vault_a_amount: u64,
        vault_b_amount: u64,
        before_sqrt_price: u128,
        after_sqrt_price: u128,
        steps: u64,
    }
    
    struct CollectProtocolFeeEvent has copy, drop, store {
        pool: ID,
        amount_a: u64,
        amount_b: u64
    }

    struct CollectFeeEvent has copy, drop, store {
        position: ID,
        pool: ID,
        amount_a: u64,
        amount_b: u64
    }

    struct UpdateFeeRateEvent has copy, drop, store {
        pool: ID,
        old_fee_rate: u64,
        new_fee_rate: u64
    }

    struct UpdateEmissionEvent has copy, drop, store {
        pool: ID,
        rewarder_type: TypeName,
        emissions_per_second: u128,
    }

    struct AddRewarderEvent has copy, drop, store {
        pool: ID,
        rewarder_type: TypeName,
    }

    struct CollectRewardEvent has copy, drop, store {
        position: ID,
        pool: ID,
        amount: u64,
    }

    public fun set_display<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _publisher: &Publisher,
        _name: String,
        _description: String,
        _url: String,
        _link: String,
        _website: String,
        _creator: String,
        _ctx: &mut TxContext
    ) {
        abort(0)
    }

    public fun open_position<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _tick_lower: u32,
        _tick_upper: u32,
        _ctx: &mut TxContext
    ): Position {
        abort(0)
    }

    public fun add_liquidity<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_nft: &mut Position,
        _delta_liquidity: u128,
        _clock: &Clock,
    ): AddLiquidityReceipt<CoinTypeA, CoinTypeB> {
        abort(0)
    }

    public fun add_liquidity_fix_coin<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_nft: &mut Position,
        _amount: u64,
        _fix_amount_a: bool,
        _clock: &Clock
    ): AddLiquidityReceipt<CoinTypeA, CoinTypeB> {
        abort(0)
    }

    public fun add_liquidity_pay_amount<CoinTypeA, CoinTypeB>(
        _receipt: &AddLiquidityReceipt<CoinTypeA, CoinTypeB>
    ): (u64, u64) {
        abort(0)
    }

    public fun repay_add_liquidity<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _balance_a: Balance<CoinTypeA>,
        _balance_b: Balance<CoinTypeB>,
        _receipt: AddLiquidityReceipt<CoinTypeA, CoinTypeB>
    ) {
        abort(0)
    }

    public fun remove_liquidity<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_nft: &mut Position,
        _delta_liquidity: u128,
        _clock: &Clock,
    ): (Balance<CoinTypeA>, Balance<CoinTypeB>) {
        abort(0)
    }

    public fun close_position<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_nft: Position,
    ) {
        abort(0)
    }


    public fun collect_fee<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_nft: &Position,
        _recalculate: bool,
    ): (Balance<CoinTypeA>, Balance<CoinTypeB>) {
        abort(0)
    }

    public fun collect_reward<CoinTypeA, CoinTypeB, CoinTypeC>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_nft: &Position,
        _vault: &mut RewarderGlobalVault,
        _recalculate: bool,
        _clock: &Clock
    ): Balance<CoinTypeC> {
        abort(0)
    }

    public fun calculate_and_update_rewards<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID,
        _clock: &Clock
    ): vector<u64> {
        abort(0)
    }

    public fun calculate_and_update_reward<CoinTypeA, CoinTypeB, CoinTypeC>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID,
        _clock: &Clock
    ): u64 {
        abort(0)
    }

    public fun calculate_and_update_points<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID,
        _clock: &Clock
    ): u128 {
        abort(0)
    }

    public fun calculate_and_update_fee<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID,
    ): (u64, u64) {
        abort(0)
    }

    public fun get_position_amounts<CoinTypeA, CoinTypeB>(
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID,
    ): (u64, u64) {
        abort(0)
    }

    public fun flash_swap<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _a2b: bool,
        _by_amount_in: bool,
        _amount: u64,
        _sqrt_price_limit: u128,
        _clock: &Clock,
    ): (Balance<CoinTypeA>, Balance<CoinTypeB>, FlashSwapReceipt<CoinTypeA, CoinTypeB>) {
        abort(0)
    }

    public fun repay_flash_swap<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _coin_a: Balance<CoinTypeA>,
        _coin_b: Balance<CoinTypeB>,
        _receipt: FlashSwapReceipt<CoinTypeA, CoinTypeB>
    ) {
        abort(0)
    }

    public fun flash_swap_with_partner<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _partner: &Partner,
        _a2b: bool,
        _by_amount_in: bool,
        _amount: u64,
        _sqrt_price_limit: u128,
        _clock: &Clock,
    ): (Balance<CoinTypeA>, Balance<CoinTypeB>, FlashSwapReceipt<CoinTypeA, CoinTypeB>) {
        abort(0)
    }

    public fun repay_flash_swap_with_partner<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _partner: &mut Partner,
        _coin_a: Balance<CoinTypeA>,
        _coin_b: Balance<CoinTypeB>,
        _receipt: FlashSwapReceipt<CoinTypeA, CoinTypeB>
    ) {
        abort(0)
    }


    public fun collect_protocol_fee<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _ctx: &TxContext,
    ): (Balance<CoinTypeA>, Balance<CoinTypeB>) {
        abort(0)
    }

    public fun initialize_rewarder<CoinTypeA, CoinTypeB, CoinTypeC>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun update_emission<CoinTypeA, CoinTypeB, CoinTypeC>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _vault: &RewarderGlobalVault,
        _emissions_per_second: u128,
        _clock: &Clock,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun update_position_url<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _url: String,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun update_fee_rate<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _fee_rate: u64,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun pause<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun unpause<CoinTypeA, CoinTypeB>(
        _config: &GlobalConfig,
        _pool: &mut Pool<CoinTypeA, CoinTypeB>,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun get_amount_by_liquidity(
        _tick_lower: I32,
        _tick_upper: I32,
        _current_tick_index: I32,
        _current_sqrt_price: u128,
        _liquidity: u128,
        _round_up: bool
    ): (u64, u64) {
        abort(0)
    }

    public fun get_liquidity_from_amount(
        _lower_index: I32,
        _upper_index: I32,
        _current_tick_index: I32,
        _current_sqrt_price: u128,
        _amount: u64,
        _is_fixed_a: bool
    ): (u128, u64, u64) {
        abort(0)
    }

    public fun get_fee_in_tick_range<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _tick_lower_index: I32,
        _tick_upper_index: I32,
    ): (u128, u128) {
        abort(0)
    }

    public fun get_rewards_in_tick_range<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _tick_lower_index: I32,
        _tick_upper_index: I32,
    ): vector<u128> {
        abort(0)
    }

    public fun get_points_in_tick_range<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _tick_lower_index: I32,
        _tick_upper_index: I32,
    ): u128 {
        abort(0)
    }

    public fun get_fee_rewards_points_in_tick_range<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _tick_lower_index: I32,
        _tick_upper_index: I32,
    ): (u128, u128, vector<u128>, u128) {
        abort(0)
    }

    public fun fetch_ticks<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _start: vector<u32>,
        _limit: u64
    ): vector<Tick> {
        abort(0)
    }

    public fun fetch_positions<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>, _start: vector<ID>, _limit: u64
    ): vector<PositionInfo> {
        abort(0)
    }

    public fun calculate_swap_result<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _a2b: bool,
        _by_amount_in: bool,
        _amount: u64,
    ): CalculatedSwapResult {
        abort(0)
    }

    public fun balances<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>
    ): (&Balance<CoinTypeA>, &Balance<CoinTypeB>) {
        abort(0)
    }

    public fun tick_spacing<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): u32 {
        abort(0)
    }

    public fun fee_rate<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): u64 {
        abort(0)
    }

    public fun liquidity<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): u128 {
        abort(0)
    }

    public fun current_sqrt_price<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): u128 {
        abort(0)
    }

    public fun current_tick_index<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): I32 {
        abort(0)
    }

    public fun fees_growth_global<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): (u128, u128) {
        abort(0)
    }

    public fun protocol_fee<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): (u64, u64) {
        abort(0)
    }

    public fun tick_manager<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): &TickManager {
        abort(0)
    }

    public fun position_manager<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>
    ): &PositionManager {
        abort(0)
    }

    public fun rewarder_manager<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): &RewarderManager {
        abort(0)
    }

    public fun is_pause<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): bool {
        abort(0)
    }

    public fun index<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): u64 {
        abort(0)
    }

    public fun url<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>): String {
        abort(0)
    }

    public fun borrow_tick<CoinTypeA, CoinTypeB>(_pool: &Pool<CoinTypeA, CoinTypeB>, _tick_idx: I32): &Tick {
        abort(0)
    }

    public fun borrow_position_info<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID
    ): &PositionInfo {
        abort(0)
    }

    public fun swap_pay_amount<CoinTypeA, CoinTypeB>(_receipt: &FlashSwapReceipt<CoinTypeA, CoinTypeB>): u64 {
        abort(0)
    }

    public fun ref_fee_amount<CoinTypeA, CoinTypeB>(_receipt: &FlashSwapReceipt<CoinTypeA, CoinTypeB>): u64 {
        abort(0)
    }

    public fun get_position_fee<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID
    ): (u64, u64) {
        abort(0)
    }

    public fun get_position_points<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID
    ): u128 {
        abort(0)
    }

    public fun get_position_rewards<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID
    ): vector<u64> {
        abort(0)
    }

    public fun get_position_reward<CoinTypeA, CoinTypeB, CoinTypeC>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID
    ): u64 {
        abort(0)
    }

    public fun is_position_exist<CoinTypeA, CoinTypeB>(
        _pool: &Pool<CoinTypeA, CoinTypeB>,
        _position_id: ID
    ): bool {
        abort(0)
    }

    public fun calculated_swap_result_amount_out(_calculatedSwapResult: &CalculatedSwapResult): u64 {
        abort(0)
    }

    public fun calculated_swap_result_is_exceed(_calculatedSwapResult: &CalculatedSwapResult): bool {
        abort(0)
    }

    public fun calculated_swap_result_amount_in(_calculatedSwapResult: &CalculatedSwapResult): u64 {
        abort(0)
    }

    public fun calculated_swap_result_after_sqrt_price(_calculatedSwapResult: &CalculatedSwapResult): u128 {
        abort(0)
    }

    public fun calculated_swap_result_fee_amount(_calculatedSwapResult: &CalculatedSwapResult): u64 {
        abort(0)
    }

    public fun calculate_swap_result_step_results(
        _calculatedSwapResult: &CalculatedSwapResult
    ): &vector<SwapStepResult> {
        abort(0)
    }

    public fun calculated_swap_result_steps_length(_calculatedSwapResult: &CalculatedSwapResult): u64 {
        abort(0)
    }

    public fun calculated_swap_result_step_swap_result(
        _calculatedSwapResult: &CalculatedSwapResult,
        _index: u64
    ): &SwapStepResult {
        abort(0)
    }

    public fun step_swap_result_amount_in(_stepSwapResult: &SwapStepResult): u64 {
        abort(0)
    }

    public fun step_swap_result_amount_out(_stepSwapResult: &SwapStepResult): u64 {
        abort(0)
    }

    public fun step_swap_result_fee_amount(_stepSwapResult: &SwapStepResult): u64 {
        abort(0)
    }

    public fun step_swap_result_current_sqrt_price(_stepSwapResult: &SwapStepResult): u128 {
        abort(0)
    }

    public fun step_swap_result_targ_et_sqrt_price(_stepSwapResult: &SwapStepResult): u128 {
        abort(0)
    }

    public fun step_swap_result_current_liquidity(_stepSwapResult: &SwapStepResult): u128 {
        abort(0)
    }

    public fun step_swap_result_remainder_amount(_stepSwapResult: &SwapStepResult): u64 {
        abort(0)
    }
}

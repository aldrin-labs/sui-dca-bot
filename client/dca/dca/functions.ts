import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export function timeScale(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::time_scale`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export interface NewArgs {
    clock: ObjectArg; delegatee: string | TransactionArgument; inputFunds: ObjectArg; every: bigint | TransactionArgument; futureOrders: bigint | TransactionArgument; timeScale: number | TransactionArgument; gasFunds: ObjectArg
}

export function new_(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: NewArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::new`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), pure(txb, args.delegatee, `address`), obj(txb, args.inputFunds), pure(txb, args.every, `u64`), pure(txb, args.futureOrders, `u64`), pure(txb, args.timeScale, `u8`), obj(txb, args.gasFunds)
        ],
    })
}

export function owner(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::owner`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function feeAmount(
    txb: TransactionBlock,
    amount: bigint | TransactionArgument
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::fee_amount`,
        arguments: [
            pure(txb, amount, `u64`)
        ],
    })
}

export function active(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::active`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export interface AddGasBudgetArgs {
    dca: ObjectArg; gasFunds: ObjectArg
}

export function addGasBudget(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: AddGasBudgetArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::add_gas_budget`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.dca), obj(txb, args.gasFunds)
        ],
    })
}

export function assertActive(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_active`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function assertDelegatee(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_delegatee`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export interface AssertEveryArgs {
    every: bigint | TransactionArgument; timeScale: number | TransactionArgument
}

export function assertEvery(
    txb: TransactionBlock,
    args: AssertEveryArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_every`,
        arguments: [
            pure(txb, args.every, `u64`), pure(txb, args.timeScale, `u8`)
        ],
    })
}

export function every(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::every`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export interface AssertHowManyOrdersArgs {
    howManyOrders: bigint | TransactionArgument; every: bigint | TransactionArgument; timeScale: number | TransactionArgument
}

export function assertHowManyOrders(
    txb: TransactionBlock,
    args: AssertHowManyOrdersArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_how_many_orders`,
        arguments: [
            pure(txb, args.howManyOrders, `u64`), pure(txb, args.every, `u64`), pure(txb, args.timeScale, `u8`)
        ],
    })
}

export interface AssertInputBalanceArgs {
    balance: ObjectArg; withdrawAmount: bigint | TransactionArgument
}

export function assertInputBalance(
    txb: TransactionBlock,
    typeArg: string,
    args: AssertInputBalanceArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_input_balance`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.balance), pure(txb, args.withdrawAmount, `u64`)
        ],
    })
}

export interface AssertMaxPriceArgs {
    inputAmount: bigint | TransactionArgument; outputAmount: bigint | TransactionArgument; dca: ObjectArg
}

export function assertMaxPrice(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: AssertMaxPriceArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_max_price`,
        typeArguments: typeArgs,
        arguments: [
            pure(txb, args.inputAmount, `u64`), pure(txb, args.outputAmount, `u64`), obj(txb, args.dca)
        ],
    })
}

export interface AssertMaxPriceViaOutputArgs {
    outputAmount: bigint | TransactionArgument; promise: ObjectArg
}

export function assertMaxPriceViaOutput(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: AssertMaxPriceViaOutputArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_max_price_via_output`,
        typeArguments: typeArgs,
        arguments: [
            pure(txb, args.outputAmount, `u64`), obj(txb, args.promise)
        ],
    })
}

export interface AssertMinimumFundingPerTradeArgs {
    totalFunding: ObjectArg; nTx: bigint | TransactionArgument
}

export function assertMinimumFundingPerTrade(
    txb: TransactionBlock,
    typeArg: string,
    args: AssertMinimumFundingPerTradeArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_minimum_funding_per_trade`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.totalFunding), pure(txb, args.nTx, `u64`)
        ],
    })
}

export interface AssertMinimumGasFundsArgs {
    gasFunds: ObjectArg; nTx: bigint | TransactionArgument
}

export function assertMinimumGasFunds(
    txb: TransactionBlock,
    typeArg: string,
    args: AssertMinimumGasFundsArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_minimum_gas_funds`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.gasFunds), pure(txb, args.nTx, `u64`)
        ],
    })
}

export function assertOwner(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_owner`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function assertOwnerOrDelegatee(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_owner_or_delegatee`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export interface AssertTimeArgs {
    currentTs: bigint | TransactionArgument; lastTs: bigint | TransactionArgument; every: bigint | TransactionArgument; timeScale: number | TransactionArgument
}

export function assertTime(
    txb: TransactionBlock,
    args: AssertTimeArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_time`,
        arguments: [
            pure(txb, args.currentTs, `u64`), pure(txb, args.lastTs, `u64`), pure(txb, args.every, `u64`), pure(txb, args.timeScale, `u8`)
        ],
    })
}

export function assertTimeScale(
    txb: TransactionBlock,
    timeScale: number | TransactionArgument
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::assert_time_scale`,
        arguments: [
            pure(txb, timeScale, `u8`)
        ],
    })
}

export interface ComputeMinOutputArgs {
    inputAmount: bigint | TransactionArgument; maxPrice: bigint | TransactionArgument
}

export function computeMinOutput(
    txb: TransactionBlock,
    args: ComputeMinOutputArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::compute_min_output`,
        arguments: [
            pure(txb, args.inputAmount, `u64`), pure(txb, args.maxPrice, `u64`)
        ],
    })
}

export interface ComputeSplitAllocationArgs {
    inputAmount: bigint | TransactionArgument; orders: bigint | TransactionArgument
}

export function computeSplitAllocation(
    txb: TransactionBlock,
    args: ComputeSplitAllocationArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::compute_split_allocation`,
        arguments: [
            pure(txb, args.inputAmount, `u64`), pure(txb, args.orders, `u64`)
        ],
    })
}

export function delegatee(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::delegatee`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export interface DepositInputArgs {
    dca: ObjectArg; inputFunds: ObjectArg; newOrders: bigint | TransactionArgument; gasFunds: ObjectArg
}

export function depositInput(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: DepositInputArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::deposit_input`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.dca), obj(txb, args.inputFunds), pure(txb, args.newOrders, `u64`), obj(txb, args.gasFunds)
        ],
    })
}

export function fundsNetOfFees(
    txb: TransactionBlock,
    amount: bigint | TransactionArgument
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::funds_net_of_fees`,
        arguments: [
            pure(txb, amount, `u64`)
        ],
    })
}

export function gasBudgetEstimate(
    txb: TransactionBlock,
    nTx: bigint | TransactionArgument
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::gas_budget_estimate`,
        arguments: [
            pure(txb, nTx, `u64`)
        ],
    })
}

export interface GetMinOutputAmountArgs {
    dca: ObjectArg; inputAmount: bigint | TransactionArgument
}

export function getMinOutputAmount(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: GetMinOutputAmountArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::get_min_output_amount`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.dca), pure(txb, args.inputAmount, `u64`)
        ],
    })
}

export interface IncreaseRemainingOrdersArgs {
    dca: ObjectArg; gasFunds: ObjectArg; newOrders: bigint | TransactionArgument
}

export function increaseRemainingOrders(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: IncreaseRemainingOrdersArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::increase_remaining_orders`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.dca), obj(txb, args.gasFunds), pure(txb, args.newOrders, `u64`)
        ],
    })
}

export interface InitAccountArgs {
    clock: ObjectArg; delegatee: string | TransactionArgument; inputFunds: ObjectArg; every: bigint | TransactionArgument; futureOrders: bigint | TransactionArgument; timeScale: number | TransactionArgument; gasFunds: ObjectArg
}

export function initAccount(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: InitAccountArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::init_account`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), pure(txb, args.delegatee, `address`), obj(txb, args.inputFunds), pure(txb, args.every, `u64`), pure(txb, args.futureOrders, `u64`), pure(txb, args.timeScale, `u8`), obj(txb, args.gasFunds)
        ],
    })
}

export interface InitAccountWithParamsArgs {
    clock: ObjectArg; delegatee: string | TransactionArgument; outlay: ObjectArg; every: bigint | TransactionArgument; futureOrders: bigint | TransactionArgument; timeScale: number | TransactionArgument; gasFunds: ObjectArg; minPrice: bigint | TransactionArgument; maxPrice: bigint | TransactionArgument
}

export function initAccountWithParams(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: InitAccountWithParamsArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::init_account_with_params`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), pure(txb, args.delegatee, `address`), obj(txb, args.outlay), pure(txb, args.every, `u64`), pure(txb, args.futureOrders, `u64`), pure(txb, args.timeScale, `u8`), obj(txb, args.gasFunds), pure(txb, args.minPrice, `u64`), pure(txb, args.maxPrice, `u64`)
        ],
    })
}

export interface InitTradeArgs {
    dca: ObjectArg; clock: ObjectArg
}

export function initTrade(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: InitTradeArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::init_trade`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.dca), obj(txb, args.clock)
        ],
    })
}

export function inputBalance(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::input_balance`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function lastTimeMs(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::last_time_ms`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export interface NewWithParamsArgs {
    clock: ObjectArg; delegatee: string | TransactionArgument; outlay: ObjectArg; every: bigint | TransactionArgument; futureOrders: bigint | TransactionArgument; timeScale: number | TransactionArgument; gasFunds: ObjectArg; minPrice: bigint | TransactionArgument; maxPrice: bigint | TransactionArgument
}

export function newWithParams(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: NewWithParamsArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::new_with_params`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), pure(txb, args.delegatee, `address`), obj(txb, args.outlay), pure(txb, args.every, `u64`), pure(txb, args.futureOrders, `u64`), pure(txb, args.timeScale, `u8`), obj(txb, args.gasFunds), pure(txb, args.minPrice, `u64`), pure(txb, args.maxPrice, `u64`)
        ],
    })
}

export function reactivateAsOwner(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::reactivate_as_owner`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function recomputeSplitAllocation(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::recompute_split_allocation`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function recomputeSplitAllocationUnsafe(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::recompute_split_allocation_unsafe`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function redeemFundsAndClose(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::redeem_funds_and_close`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function remainingOrders(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::remaining_orders`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export interface ResolveTradeArgs {
    dca: ObjectArg; promise: ObjectArg; gasCost: bigint | TransactionArgument
}

export function resolveTrade(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: ResolveTradeArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::resolve_trade`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.dca), obj(txb, args.promise), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export function setInactive(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::set_inactive`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function setInactiveAndReset(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::set_inactive_and_reset`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function splitAllocation(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::split_allocation`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function startTimeMs(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::start_time_ms`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export function tradeInput(
    txb: TransactionBlock,
    typeArgs: [string, string],
    promise: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::trade_input`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, promise)
        ],
    })
}

export function tradeMinOutput(
    txb: TransactionBlock,
    typeArgs: [string, string],
    promise: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::trade_min_output`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, promise)
        ],
    })
}

export function tradeParams(
    txb: TransactionBlock,
    typeArgs: [string, string],
    dca: ObjectArg
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::trade_params`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, dca)
        ],
    })
}

export interface WithdrawInputArgs {
    dca: ObjectArg; amount: bigint | TransactionArgument; decreaseOrders: bigint | TransactionArgument
}

export function withdrawInput(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: WithdrawInputArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::withdraw_input`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.dca), pure(txb, args.amount, `u64`), pure(txb, args.decreaseOrders, `u64`)
        ],
    })
}

export interface WithdrawInput_Args {
    dca: ObjectArg; amount: bigint | TransactionArgument; decreaseOrders: bigint | TransactionArgument
}

export function withdrawInput_(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: WithdrawInput_Args
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::dca::withdraw_input_`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.dca), pure(txb, args.amount, `u64`), pure(txb, args.decreaseOrders, `u64`)
        ],
    })
}

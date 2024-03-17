import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface CalculateRouterSwapResultArgs {
    pool1: ObjectArg; pool2: ObjectArg; a2B: boolean | TransactionArgument; b2C: boolean | TransactionArgument; byAmountIn: boolean | TransactionArgument; amount: bigint | TransactionArgument
}

export function calculateRouterSwapResult(
    txb: TransactionBlock,
    typeArgs: [string, string, string, string],
    args: CalculateRouterSwapResultArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::cetus::calculate_router_swap_result`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.pool1), obj(txb, args.pool2), pure(txb, args.a2B, `bool`), pure(txb, args.b2C, `bool`), pure(txb, args.byAmountIn, `bool`), pure(txb, args.amount, `u64`)
        ],
    })
}

export interface CheckCoinThresholdArgs {
    arg0: ObjectArg; arg1: bigint | TransactionArgument
}

export function checkCoinThreshold(
    txb: TransactionBlock,
    typeArg: string,
    args: CheckCoinThresholdArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::cetus::check_coin_threshold`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.arg0), pure(txb, args.arg1, `u64`)
        ],
    })
}

export interface SwapAbBcArgs {
    config: ObjectArg; poolI: ObjectArg; poolIi: ObjectArg; inputFunds: ObjectArg; outputFunds: ObjectArg; byAmountIn: boolean | TransactionArgument; amount0: bigint | TransactionArgument; amount1: bigint | TransactionArgument; sqrtPriceLimit0: bigint | TransactionArgument; sqrtPriceLimit1: bigint | TransactionArgument; clock: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapAbBc(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapAbBcArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::cetus::swap_ab_bc`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.config), obj(txb, args.poolI), obj(txb, args.poolIi), obj(txb, args.inputFunds), obj(txb, args.outputFunds), pure(txb, args.byAmountIn, `bool`), pure(txb, args.amount0, `u64`), pure(txb, args.amount1, `u64`), pure(txb, args.sqrtPriceLimit0, `u128`), pure(txb, args.sqrtPriceLimit1, `u128`), obj(txb, args.clock), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapAbCbArgs {
    config: ObjectArg; poolI: ObjectArg; poolIi: ObjectArg; inputFunds: ObjectArg; outputFunds: ObjectArg; byAmountIn: boolean | TransactionArgument; amount0: bigint | TransactionArgument; amount1: bigint | TransactionArgument; sqrtPriceLimit0: bigint | TransactionArgument; sqrtPriceLimit1: bigint | TransactionArgument; clock: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapAbCb(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapAbCbArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::cetus::swap_ab_cb`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.config), obj(txb, args.poolI), obj(txb, args.poolIi), obj(txb, args.inputFunds), obj(txb, args.outputFunds), pure(txb, args.byAmountIn, `bool`), pure(txb, args.amount0, `u64`), pure(txb, args.amount1, `u64`), pure(txb, args.sqrtPriceLimit0, `u128`), pure(txb, args.sqrtPriceLimit1, `u128`), obj(txb, args.clock), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapBaBcArgs {
    config: ObjectArg; poolI: ObjectArg; poolIi: ObjectArg; inputFunds: ObjectArg; outputFunds: ObjectArg; byAmountIn: boolean | TransactionArgument; amount0: bigint | TransactionArgument; amount1: bigint | TransactionArgument; sqrtPriceLimit0: bigint | TransactionArgument; sqrtPriceLimit1: bigint | TransactionArgument; clock: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapBaBc(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapBaBcArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::cetus::swap_ba_bc`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.config), obj(txb, args.poolI), obj(txb, args.poolIi), obj(txb, args.inputFunds), obj(txb, args.outputFunds), pure(txb, args.byAmountIn, `bool`), pure(txb, args.amount0, `u64`), pure(txb, args.amount1, `u64`), pure(txb, args.sqrtPriceLimit0, `u128`), pure(txb, args.sqrtPriceLimit1, `u128`), obj(txb, args.clock), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapBaCbArgs {
    config: ObjectArg; poolI: ObjectArg; poolIi: ObjectArg; inputFunds: ObjectArg; outputFunds: ObjectArg; byAmountIn: boolean | TransactionArgument; amount0: bigint | TransactionArgument; amount1: bigint | TransactionArgument; sqrtPriceLimit0: bigint | TransactionArgument; sqrtPriceLimit1: bigint | TransactionArgument; clock: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapBaCb(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapBaCbArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::cetus::swap_ba_cb`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.config), obj(txb, args.poolI), obj(txb, args.poolIi), obj(txb, args.inputFunds), obj(txb, args.outputFunds), pure(txb, args.byAmountIn, `bool`), pure(txb, args.amount0, `u64`), pure(txb, args.amount1, `u64`), pure(txb, args.sqrtPriceLimit0, `u128`), pure(txb, args.sqrtPriceLimit1, `u128`), obj(txb, args.clock), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapAbArgs {
    config: ObjectArg; pool: ObjectArg; inputFunds: ObjectArg; outputFunds: ObjectArg; a2B: boolean | TransactionArgument; byAmountIn: boolean | TransactionArgument; amount: bigint | TransactionArgument; sqrtPriceLimit: bigint | TransactionArgument; arg8: boolean | TransactionArgument; clock: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapAb(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: SwapAbArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::cetus::swap_ab`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.config), obj(txb, args.pool), obj(txb, args.inputFunds), obj(txb, args.outputFunds), pure(txb, args.a2B, `bool`), pure(txb, args.byAmountIn, `bool`), pure(txb, args.amount, `u64`), pure(txb, args.sqrtPriceLimit, `u128`), pure(txb, args.arg8, `bool`), obj(txb, args.clock), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapBaArgs {
    config: ObjectArg; pool: ObjectArg; inputFunds: ObjectArg; outputFunds: ObjectArg; a2B: boolean | TransactionArgument; byAmountIn: boolean | TransactionArgument; amount: bigint | TransactionArgument; sqrtPriceLimit: bigint | TransactionArgument; arg8: boolean | TransactionArgument; clock: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapBa(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: SwapBaArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::cetus::swap_ba`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.config), obj(txb, args.pool), obj(txb, args.inputFunds), obj(txb, args.outputFunds), pure(txb, args.a2B, `bool`), pure(txb, args.byAmountIn, `bool`), pure(txb, args.amount, `u64`), pure(txb, args.sqrtPriceLimit, `u128`), pure(txb, args.arg8, `bool`), obj(txb, args.clock), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

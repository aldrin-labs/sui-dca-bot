import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface SwapABArgs {
    pool: ObjectArg; coinA: ObjectArg; amount: bigint | TransactionArgument; amountThreshold: bigint | TransactionArgument; sqrtPriceLimit: bigint | TransactionArgument; isExactIn: boolean | TransactionArgument; receiver: string | TransactionArgument; deadline: bigint | TransactionArgument; clock: ObjectArg; versioned: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapAB(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapABArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::turbos::swap_a_b`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.pool), obj(txb, args.coinA), pure(txb, args.amount, `u64`), pure(txb, args.amountThreshold, `u64`), pure(txb, args.sqrtPriceLimit, `u128`), pure(txb, args.isExactIn, `bool`), pure(txb, args.receiver, `address`), pure(txb, args.deadline, `u64`), obj(txb, args.clock), obj(txb, args.versioned), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapABBCArgs {
    poolA: ObjectArg; poolB: ObjectArg; coinA: ObjectArg; amount: bigint | TransactionArgument; amountThreshold: bigint | TransactionArgument; sqrtPriceLimitOne: bigint | TransactionArgument; sqrtPriceLimitTwo: bigint | TransactionArgument; isExactIn: boolean | TransactionArgument; receiver: string | TransactionArgument; deadline: bigint | TransactionArgument; clock: ObjectArg; versioned: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapABBC(
    txb: TransactionBlock,
    typeArgs: [string, string, string, string, string],
    args: SwapABBCArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::turbos::swap_a_b_b_c`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.poolA), obj(txb, args.poolB), obj(txb, args.coinA), pure(txb, args.amount, `u64`), pure(txb, args.amountThreshold, `u64`), pure(txb, args.sqrtPriceLimitOne, `u128`), pure(txb, args.sqrtPriceLimitTwo, `u128`), pure(txb, args.isExactIn, `bool`), pure(txb, args.receiver, `address`), pure(txb, args.deadline, `u64`), obj(txb, args.clock), obj(txb, args.versioned), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapABCBArgs {
    poolA: ObjectArg; poolB: ObjectArg; coinA: ObjectArg; amount: bigint | TransactionArgument; amountThreshold: bigint | TransactionArgument; sqrtPriceLimitOne: bigint | TransactionArgument; sqrtPriceLimitTwo: bigint | TransactionArgument; isExactIn: boolean | TransactionArgument; receiver: string | TransactionArgument; deadline: bigint | TransactionArgument; clock: ObjectArg; versioned: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapABCB(
    txb: TransactionBlock,
    typeArgs: [string, string, string, string, string],
    args: SwapABCBArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::turbos::swap_a_b_c_b`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.poolA), obj(txb, args.poolB), obj(txb, args.coinA), pure(txb, args.amount, `u64`), pure(txb, args.amountThreshold, `u64`), pure(txb, args.sqrtPriceLimitOne, `u128`), pure(txb, args.sqrtPriceLimitTwo, `u128`), pure(txb, args.isExactIn, `bool`), pure(txb, args.receiver, `address`), pure(txb, args.deadline, `u64`), obj(txb, args.clock), obj(txb, args.versioned), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapBAArgs {
    pool: ObjectArg; coinB: ObjectArg; amount: bigint | TransactionArgument; amountThreshold: bigint | TransactionArgument; sqrtPriceLimit: bigint | TransactionArgument; isExactIn: boolean | TransactionArgument; receiver: string | TransactionArgument; deadline: bigint | TransactionArgument; clock: ObjectArg; versioned: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapBA(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapBAArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::turbos::swap_b_a`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.pool), obj(txb, args.coinB), pure(txb, args.amount, `u64`), pure(txb, args.amountThreshold, `u64`), pure(txb, args.sqrtPriceLimit, `u128`), pure(txb, args.isExactIn, `bool`), pure(txb, args.receiver, `address`), pure(txb, args.deadline, `u64`), obj(txb, args.clock), obj(txb, args.versioned), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapBABCArgs {
    poolA: ObjectArg; poolB: ObjectArg; coinA: ObjectArg; amount: bigint | TransactionArgument; amountThreshold: bigint | TransactionArgument; sqrtPriceLimitOne: bigint | TransactionArgument; sqrtPriceLimitTwo: bigint | TransactionArgument; isExactIn: boolean | TransactionArgument; receiver: string | TransactionArgument; deadline: bigint | TransactionArgument; clock: ObjectArg; versioned: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapBABC(
    txb: TransactionBlock,
    typeArgs: [string, string, string, string, string],
    args: SwapBABCArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::turbos::swap_b_a_b_c`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.poolA), obj(txb, args.poolB), obj(txb, args.coinA), pure(txb, args.amount, `u64`), pure(txb, args.amountThreshold, `u64`), pure(txb, args.sqrtPriceLimitOne, `u128`), pure(txb, args.sqrtPriceLimitTwo, `u128`), pure(txb, args.isExactIn, `bool`), pure(txb, args.receiver, `address`), pure(txb, args.deadline, `u64`), obj(txb, args.clock), obj(txb, args.versioned), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapBACBArgs {
    poolA: ObjectArg; poolB: ObjectArg; coinA: ObjectArg; amount: bigint | TransactionArgument; amountThreshold: bigint | TransactionArgument; sqrtPriceLimitOne: bigint | TransactionArgument; sqrtPriceLimitTwo: bigint | TransactionArgument; isExactIn: boolean | TransactionArgument; receiver: string | TransactionArgument; deadline: bigint | TransactionArgument; clock: ObjectArg; versioned: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapBACB(
    txb: TransactionBlock,
    typeArgs: [string, string, string, string, string],
    args: SwapBACBArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::turbos::swap_b_a_c_b`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.poolA), obj(txb, args.poolB), obj(txb, args.coinA), pure(txb, args.amount, `u64`), pure(txb, args.amountThreshold, `u64`), pure(txb, args.sqrtPriceLimitOne, `u128`), pure(txb, args.sqrtPriceLimitTwo, `u128`), pure(txb, args.isExactIn, `bool`), pure(txb, args.receiver, `address`), pure(txb, args.deadline, `u64`), obj(txb, args.clock), obj(txb, args.versioned), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

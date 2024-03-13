import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface SwapExactInputArgs {
    clock: ObjectArg; pools: ObjectArg; inputFunds: ObjectArg; minOutput: bigint | TransactionArgument; recipient: string | TransactionArgument; sqrtPrice: bigint | TransactionArgument; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapExactInput(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: SwapExactInputArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::flow_x::swap_exact_input`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), obj(txb, args.pools), obj(txb, args.inputFunds), pure(txb, args.minOutput, `u64`), pure(txb, args.recipient, `address`), pure(txb, args.sqrtPrice, `u64`), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapExactInputDoublehopArgs {
    clock: ObjectArg; pools: ObjectArg; inputFunds: ObjectArg; minOutput: bigint | TransactionArgument; recipient: string | TransactionArgument; sqrtPrice: bigint | TransactionArgument; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapExactInputDoublehop(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapExactInputDoublehopArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::flow_x::swap_exact_input_doublehop`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), obj(txb, args.pools), obj(txb, args.inputFunds), pure(txb, args.minOutput, `u64`), pure(txb, args.recipient, `address`), pure(txb, args.sqrtPrice, `u64`), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapExactInputTriplehopArgs {
    clock: ObjectArg; pools: ObjectArg; inputFunds: ObjectArg; minOutput: bigint | TransactionArgument; recipient: string | TransactionArgument; sqrtPrice: bigint | TransactionArgument; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapExactInputTriplehop(
    txb: TransactionBlock,
    typeArgs: [string, string, string, string],
    args: SwapExactInputTriplehopArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::flow_x::swap_exact_input_triplehop`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), obj(txb, args.pools), obj(txb, args.inputFunds), pure(txb, args.minOutput, `u64`), pure(txb, args.recipient, `address`), pure(txb, args.sqrtPrice, `u64`), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapExactOutputArgs {
    clock: ObjectArg; pools: ObjectArg; inputFunds: ObjectArg; maxInputAmount: bigint | TransactionArgument; exactOutput: bigint | TransactionArgument; recipient: string | TransactionArgument; sqrtPrice: bigint | TransactionArgument; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapExactOutput(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: SwapExactOutputArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::flow_x::swap_exact_output`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), obj(txb, args.pools), obj(txb, args.inputFunds), pure(txb, args.maxInputAmount, `u64`), pure(txb, args.exactOutput, `u64`), pure(txb, args.recipient, `address`), pure(txb, args.sqrtPrice, `u64`), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapExactOutputDoublehopArgs {
    clock: ObjectArg; pools: ObjectArg; inputFunds: ObjectArg; maxInputAmount: bigint | TransactionArgument; exactOutput: bigint | TransactionArgument; recipient: string | TransactionArgument; sqrtPrice: bigint | TransactionArgument; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapExactOutputDoublehop(
    txb: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapExactOutputDoublehopArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::flow_x::swap_exact_output_doublehop`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), obj(txb, args.pools), obj(txb, args.inputFunds), pure(txb, args.maxInputAmount, `u64`), pure(txb, args.exactOutput, `u64`), pure(txb, args.recipient, `address`), pure(txb, args.sqrtPrice, `u64`), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

export interface SwapExactOutputTriplehopArgs {
    clock: ObjectArg; pools: ObjectArg; inputFunds: ObjectArg; maxInputAmount: bigint | TransactionArgument; exactOutput: bigint | TransactionArgument; recipient: string | TransactionArgument; sqrtPrice: bigint | TransactionArgument; dca: ObjectArg; gasCost: bigint | TransactionArgument
}

export function swapExactOutputTriplehop(
    txb: TransactionBlock,
    typeArgs: [string, string, string, string],
    args: SwapExactOutputTriplehopArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::flow_x::swap_exact_output_triplehop`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.clock), obj(txb, args.pools), obj(txb, args.inputFunds), pure(txb, args.maxInputAmount, `u64`), pure(txb, args.exactOutput, `u64`), pure(txb, args.recipient, `address`), pure(txb, args.sqrtPrice, `u64`), obj(txb, args.dca), pure(txb, args.gasCost, `u64`)
        ],
    })
}

import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface SwapExactInputDirectArgs {
    pools: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument; clock: ObjectArg
}

export function swapExactInputDirect(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: SwapExactInputDirectArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::flow_x::swap_exact_input_direct`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.pools), obj(txb, args.dca), pure(txb, args.gasCost, `u64`), obj(txb, args.clock)
        ],
    })
}

export interface SwapExactXToYDirectArgs {
    pool: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument; clock: ObjectArg
}

export function swapExactXToYDirect(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: SwapExactXToYDirectArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::flow_x::swap_exact_x_to_y_direct`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.pool), obj(txb, args.dca), pure(txb, args.gasCost, `u64`), obj(txb, args.clock)
        ],
    })
}

export interface SwapExactYToXDirectArgs {
    pool: ObjectArg; dca: ObjectArg; gasCost: bigint | TransactionArgument; clock: ObjectArg
}

export function swapExactYToXDirect(
    txb: TransactionBlock,
    typeArgs: [string, string],
    args: SwapExactYToXDirectArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::flow_x::swap_exact_y_to_x_direct`,
        typeArguments: typeArgs,
        arguments: [
            obj(txb, args.pool), obj(txb, args.dca), pure(txb, args.gasCost, `u64`), obj(txb, args.clock)
        ],
    })
}

import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface DivArgs {
    x: bigint | TransactionArgument; y: bigint | TransactionArgument
}

export function div(
    txb: TransactionBlock,
    args: DivArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::math::div`,
        arguments: [
            pure(txb, args.x, `u64`), pure(txb, args.y, `u64`)
        ],
    })
}

export interface MulArgs {
    x: bigint | TransactionArgument; y: bigint | TransactionArgument
}

export function mul(
    txb: TransactionBlock,
    args: MulArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::math::mul`,
        arguments: [
            pure(txb, args.x, `u64`), pure(txb, args.y, `u64`)
        ],
    })
}

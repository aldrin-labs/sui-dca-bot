import {PUBLISHED_AT} from "..";
import {TransactionBlock} from "@mysten/sui.js/transactions";

export function day(
    txb: TransactionBlock,
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time_scale::day`,
        arguments: [],
    })
}

export function hour(
    txb: TransactionBlock,
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time_scale::hour`,
        arguments: [],
    })
}

export function minute(
    txb: TransactionBlock,
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time_scale::minute`,
        arguments: [],
    })
}

export function month(
    txb: TransactionBlock,
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time_scale::month`,
        arguments: [],
    })
}

export function second(
    txb: TransactionBlock,
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time_scale::second`,
        arguments: [],
    })
}

export function week(
    txb: TransactionBlock,
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time_scale::week`,
        arguments: [],
    })
}

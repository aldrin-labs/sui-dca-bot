import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface HasNDaysPassedArgs {
    bTs: bigint | TransactionArgument; aTs: bigint | TransactionArgument; n: bigint | TransactionArgument
}

export function hasNDaysPassed(
    txb: TransactionBlock,
    args: HasNDaysPassedArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time::has_n_days_passed`,
        arguments: [
            pure(txb, args.bTs, `u64`), pure(txb, args.aTs, `u64`), pure(txb, args.n, `u64`)
        ],
    })
}

export interface HasNHoursPassedArgs {
    bTs: bigint | TransactionArgument; aTs: bigint | TransactionArgument; n: bigint | TransactionArgument
}

export function hasNHoursPassed(
    txb: TransactionBlock,
    args: HasNHoursPassedArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time::has_n_hours_passed`,
        arguments: [
            pure(txb, args.bTs, `u64`), pure(txb, args.aTs, `u64`), pure(txb, args.n, `u64`)
        ],
    })
}

export interface HasNMinutesPassedArgs {
    bTs: bigint | TransactionArgument; aTs: bigint | TransactionArgument; n: bigint | TransactionArgument
}

export function hasNMinutesPassed(
    txb: TransactionBlock,
    args: HasNMinutesPassedArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time::has_n_minutes_passed`,
        arguments: [
            pure(txb, args.bTs, `u64`), pure(txb, args.aTs, `u64`), pure(txb, args.n, `u64`)
        ],
    })
}

export interface HasNMonthsPassedArgs {
    bTs: bigint | TransactionArgument; aTs: bigint | TransactionArgument; n: bigint | TransactionArgument
}

export function hasNMonthsPassed(
    txb: TransactionBlock,
    args: HasNMonthsPassedArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time::has_n_months_passed`,
        arguments: [
            pure(txb, args.bTs, `u64`), pure(txb, args.aTs, `u64`), pure(txb, args.n, `u64`)
        ],
    })
}

export interface HasNSecondsPassedArgs {
    bTs: bigint | TransactionArgument; aTs: bigint | TransactionArgument; n: bigint | TransactionArgument
}

export function hasNSecondsPassed(
    txb: TransactionBlock,
    args: HasNSecondsPassedArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time::has_n_seconds_passed`,
        arguments: [
            pure(txb, args.bTs, `u64`), pure(txb, args.aTs, `u64`), pure(txb, args.n, `u64`)
        ],
    })
}

export interface HasNSecondsPassed_Args {
    bTs: bigint | TransactionArgument; aTs: bigint | TransactionArgument; n: bigint | TransactionArgument; meanDeviation: bigint | TransactionArgument
}

export function hasNSecondsPassed_(
    txb: TransactionBlock,
    args: HasNSecondsPassed_Args
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time::has_n_seconds_passed_`,
        arguments: [
            pure(txb, args.bTs, `u64`), pure(txb, args.aTs, `u64`), pure(txb, args.n, `u64`), pure(txb, args.meanDeviation, `u64`)
        ],
    })
}

export interface HasNWeeksPassedArgs {
    bTs: bigint | TransactionArgument; aTs: bigint | TransactionArgument; n: bigint | TransactionArgument
}

export function hasNWeeksPassed(
    txb: TransactionBlock,
    args: HasNWeeksPassedArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::time::has_n_weeks_passed`,
        arguments: [
            pure(txb, args.bTs, `u64`), pure(txb, args.aTs, `u64`), pure(txb, args.n, `u64`)
        ],
    })
}

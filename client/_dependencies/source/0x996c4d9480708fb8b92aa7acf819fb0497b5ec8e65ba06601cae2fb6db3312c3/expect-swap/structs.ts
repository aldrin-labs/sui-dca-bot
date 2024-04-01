import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== SwapResult =============================== */

export function isSwapResult(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapResult";
}

export interface SwapResultFields {
    amountIn: ToField<"u256">; amountOut: ToField<"u256">; feeAmount: ToField<"u256">; refFeeAmount: ToField<"u256">; steps: ToField<"u64">
}

export type SwapResultReified = Reified<
    SwapResult,
    SwapResultFields
>;

export class SwapResult implements StructClass {
    static readonly $typeName = "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapResult";
    static readonly $numTypeParams = 0;

    readonly $typeName = SwapResult.$typeName;

    readonly $fullTypeName: "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapResult";

    readonly $typeArgs: [];

    readonly amountIn:
        ToField<"u256">
    ; readonly amountOut:
        ToField<"u256">
    ; readonly feeAmount:
        ToField<"u256">
    ; readonly refFeeAmount:
        ToField<"u256">
    ; readonly steps:
        ToField<"u64">

    private constructor(typeArgs: [], fields: SwapResultFields,
    ) {
        this.$fullTypeName = composeSuiType(
            SwapResult.$typeName,
            ...typeArgs
        ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapResult";
        this.$typeArgs = typeArgs;

        this.amountIn = fields.amountIn;; this.amountOut = fields.amountOut;; this.feeAmount = fields.feeAmount;; this.refFeeAmount = fields.refFeeAmount;; this.steps = fields.steps;
    }

    static reified(): SwapResultReified {
        return {
            typeName: SwapResult.$typeName,
            fullTypeName: composeSuiType(
                SwapResult.$typeName,
                ...[]
            ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapResult",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                SwapResult.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                SwapResult.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                SwapResult.fromBcs(
                    data,
                ),
            bcs: SwapResult.bcs,
            fromJSONField: (field: any) =>
                SwapResult.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                SwapResult.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                SwapResult.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => SwapResult.fetch(
                client,
                id,
            ),
            new: (
                fields: SwapResultFields,
            ) => {
                return new SwapResult(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return SwapResult.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<SwapResult>> {
        return phantom(SwapResult.reified());
    }

    static get p() {
        return SwapResult.phantom()
    }

    static get bcs() {
        return bcs.struct("SwapResult", {
            amount_in:
                bcs.u256()
            , amount_out:
                bcs.u256()
            , fee_amount:
                bcs.u256()
            , ref_fee_amount:
                bcs.u256()
            , steps:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): SwapResult {
        return SwapResult.reified().new(
            {amountIn: decodeFromFields("u256", fields.amount_in), amountOut: decodeFromFields("u256", fields.amount_out), feeAmount: decodeFromFields("u256", fields.fee_amount), refFeeAmount: decodeFromFields("u256", fields.ref_fee_amount), steps: decodeFromFields("u64", fields.steps)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): SwapResult {
        if (!isSwapResult(item.type)) {
            throw new Error("not a SwapResult type");
        }

        return SwapResult.reified().new(
            {amountIn: decodeFromFieldsWithTypes("u256", item.fields.amount_in), amountOut: decodeFromFieldsWithTypes("u256", item.fields.amount_out), feeAmount: decodeFromFieldsWithTypes("u256", item.fields.fee_amount), refFeeAmount: decodeFromFieldsWithTypes("u256", item.fields.ref_fee_amount), steps: decodeFromFieldsWithTypes("u64", item.fields.steps)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): SwapResult {

        return SwapResult.fromFields(
            SwapResult.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            amountIn: this.amountIn.toString(),amountOut: this.amountOut.toString(),feeAmount: this.feeAmount.toString(),refFeeAmount: this.refFeeAmount.toString(),steps: this.steps.toString(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField(
         field: any
    ): SwapResult {
        return SwapResult.reified().new(
            {amountIn: decodeFromJSONField("u256", field.amountIn), amountOut: decodeFromJSONField("u256", field.amountOut), feeAmount: decodeFromJSONField("u256", field.feeAmount), refFeeAmount: decodeFromJSONField("u256", field.refFeeAmount), steps: decodeFromJSONField("u64", field.steps)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): SwapResult {
        if (json.$typeName !== SwapResult.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return SwapResult.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): SwapResult {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSwapResult(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SwapResult object`);
        }
        return SwapResult.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<SwapResult> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching SwapResult object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSwapResult(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SwapResult object`);
        }

        return SwapResult.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== SwapStepResult =============================== */

export function isSwapStepResult(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapStepResult";
}

export interface SwapStepResultFields {
    currentSqrtPrice: ToField<"u128">; targEtSqrtPrice: ToField<"u128">; currentLiquidity: ToField<"u128">; amountIn: ToField<"u256">; amountOut: ToField<"u256">; feeAmount: ToField<"u256">; remainderAmount: ToField<"u64">
}

export type SwapStepResultReified = Reified<
    SwapStepResult,
    SwapStepResultFields
>;

export class SwapStepResult implements StructClass {
    static readonly $typeName = "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapStepResult";
    static readonly $numTypeParams = 0;

    readonly $typeName = SwapStepResult.$typeName;

    readonly $fullTypeName: "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapStepResult";

    readonly $typeArgs: [];

    readonly currentSqrtPrice:
        ToField<"u128">
    ; readonly targEtSqrtPrice:
        ToField<"u128">
    ; readonly currentLiquidity:
        ToField<"u128">
    ; readonly amountIn:
        ToField<"u256">
    ; readonly amountOut:
        ToField<"u256">
    ; readonly feeAmount:
        ToField<"u256">
    ; readonly remainderAmount:
        ToField<"u64">

    private constructor(typeArgs: [], fields: SwapStepResultFields,
    ) {
        this.$fullTypeName = composeSuiType(
            SwapStepResult.$typeName,
            ...typeArgs
        ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapStepResult";
        this.$typeArgs = typeArgs;

        this.currentSqrtPrice = fields.currentSqrtPrice;; this.targEtSqrtPrice = fields.targEtSqrtPrice;; this.currentLiquidity = fields.currentLiquidity;; this.amountIn = fields.amountIn;; this.amountOut = fields.amountOut;; this.feeAmount = fields.feeAmount;; this.remainderAmount = fields.remainderAmount;
    }

    static reified(): SwapStepResultReified {
        return {
            typeName: SwapStepResult.$typeName,
            fullTypeName: composeSuiType(
                SwapStepResult.$typeName,
                ...[]
            ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapStepResult",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                SwapStepResult.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                SwapStepResult.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                SwapStepResult.fromBcs(
                    data,
                ),
            bcs: SwapStepResult.bcs,
            fromJSONField: (field: any) =>
                SwapStepResult.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                SwapStepResult.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                SwapStepResult.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => SwapStepResult.fetch(
                client,
                id,
            ),
            new: (
                fields: SwapStepResultFields,
            ) => {
                return new SwapStepResult(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return SwapStepResult.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<SwapStepResult>> {
        return phantom(SwapStepResult.reified());
    }

    static get p() {
        return SwapStepResult.phantom()
    }

    static get bcs() {
        return bcs.struct("SwapStepResult", {
            current_sqrt_price:
                bcs.u128()
            , targ_et_sqrt_price:
                bcs.u128()
            , current_liquidity:
                bcs.u128()
            , amount_in:
                bcs.u256()
            , amount_out:
                bcs.u256()
            , fee_amount:
                bcs.u256()
            , remainder_amount:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): SwapStepResult {
        return SwapStepResult.reified().new(
            {currentSqrtPrice: decodeFromFields("u128", fields.current_sqrt_price), targEtSqrtPrice: decodeFromFields("u128", fields.targ_et_sqrt_price), currentLiquidity: decodeFromFields("u128", fields.current_liquidity), amountIn: decodeFromFields("u256", fields.amount_in), amountOut: decodeFromFields("u256", fields.amount_out), feeAmount: decodeFromFields("u256", fields.fee_amount), remainderAmount: decodeFromFields("u64", fields.remainder_amount)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): SwapStepResult {
        if (!isSwapStepResult(item.type)) {
            throw new Error("not a SwapStepResult type");
        }

        return SwapStepResult.reified().new(
            {currentSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.current_sqrt_price), targEtSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.targ_et_sqrt_price), currentLiquidity: decodeFromFieldsWithTypes("u128", item.fields.current_liquidity), amountIn: decodeFromFieldsWithTypes("u256", item.fields.amount_in), amountOut: decodeFromFieldsWithTypes("u256", item.fields.amount_out), feeAmount: decodeFromFieldsWithTypes("u256", item.fields.fee_amount), remainderAmount: decodeFromFieldsWithTypes("u64", item.fields.remainder_amount)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): SwapStepResult {

        return SwapStepResult.fromFields(
            SwapStepResult.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            currentSqrtPrice: this.currentSqrtPrice.toString(),targEtSqrtPrice: this.targEtSqrtPrice.toString(),currentLiquidity: this.currentLiquidity.toString(),amountIn: this.amountIn.toString(),amountOut: this.amountOut.toString(),feeAmount: this.feeAmount.toString(),remainderAmount: this.remainderAmount.toString(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField(
         field: any
    ): SwapStepResult {
        return SwapStepResult.reified().new(
            {currentSqrtPrice: decodeFromJSONField("u128", field.currentSqrtPrice), targEtSqrtPrice: decodeFromJSONField("u128", field.targEtSqrtPrice), currentLiquidity: decodeFromJSONField("u128", field.currentLiquidity), amountIn: decodeFromJSONField("u256", field.amountIn), amountOut: decodeFromJSONField("u256", field.amountOut), feeAmount: decodeFromJSONField("u256", field.feeAmount), remainderAmount: decodeFromJSONField("u64", field.remainderAmount)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): SwapStepResult {
        if (json.$typeName !== SwapStepResult.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return SwapStepResult.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): SwapStepResult {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSwapStepResult(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SwapStepResult object`);
        }
        return SwapStepResult.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<SwapStepResult> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching SwapStepResult object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSwapStepResult(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SwapStepResult object`);
        }

        return SwapStepResult.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== ExpectSwapResult =============================== */

export function isExpectSwapResult(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResult";
}

export interface ExpectSwapResultFields {
    amountIn: ToField<"u256">; amountOut: ToField<"u256">; feeAmount: ToField<"u256">; feeRate: ToField<"u64">; afterSqrtPrice: ToField<"u128">; isExceed: ToField<"bool">; stepResults: ToField<Vector<SwapStepResult>>
}

export type ExpectSwapResultReified = Reified<
    ExpectSwapResult,
    ExpectSwapResultFields
>;

export class ExpectSwapResult implements StructClass {
    static readonly $typeName = "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResult";
    static readonly $numTypeParams = 0;

    readonly $typeName = ExpectSwapResult.$typeName;

    readonly $fullTypeName: "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResult";

    readonly $typeArgs: [];

    readonly amountIn:
        ToField<"u256">
    ; readonly amountOut:
        ToField<"u256">
    ; readonly feeAmount:
        ToField<"u256">
    ; readonly feeRate:
        ToField<"u64">
    ; readonly afterSqrtPrice:
        ToField<"u128">
    ; readonly isExceed:
        ToField<"bool">
    ; readonly stepResults:
        ToField<Vector<SwapStepResult>>

    private constructor(typeArgs: [], fields: ExpectSwapResultFields,
    ) {
        this.$fullTypeName = composeSuiType(
            ExpectSwapResult.$typeName,
            ...typeArgs
        ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResult";
        this.$typeArgs = typeArgs;

        this.amountIn = fields.amountIn;; this.amountOut = fields.amountOut;; this.feeAmount = fields.feeAmount;; this.feeRate = fields.feeRate;; this.afterSqrtPrice = fields.afterSqrtPrice;; this.isExceed = fields.isExceed;; this.stepResults = fields.stepResults;
    }

    static reified(): ExpectSwapResultReified {
        return {
            typeName: ExpectSwapResult.$typeName,
            fullTypeName: composeSuiType(
                ExpectSwapResult.$typeName,
                ...[]
            ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResult",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                ExpectSwapResult.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                ExpectSwapResult.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                ExpectSwapResult.fromBcs(
                    data,
                ),
            bcs: ExpectSwapResult.bcs,
            fromJSONField: (field: any) =>
                ExpectSwapResult.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                ExpectSwapResult.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                ExpectSwapResult.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => ExpectSwapResult.fetch(
                client,
                id,
            ),
            new: (
                fields: ExpectSwapResultFields,
            ) => {
                return new ExpectSwapResult(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return ExpectSwapResult.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<ExpectSwapResult>> {
        return phantom(ExpectSwapResult.reified());
    }

    static get p() {
        return ExpectSwapResult.phantom()
    }

    static get bcs() {
        return bcs.struct("ExpectSwapResult", {
            amount_in:
                bcs.u256()
            , amount_out:
                bcs.u256()
            , fee_amount:
                bcs.u256()
            , fee_rate:
                bcs.u64()
            , after_sqrt_price:
                bcs.u128()
            , is_exceed:
                bcs.bool()
            , step_results:
                bcs.vector(SwapStepResult.bcs)

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): ExpectSwapResult {
        return ExpectSwapResult.reified().new(
            {amountIn: decodeFromFields("u256", fields.amount_in), amountOut: decodeFromFields("u256", fields.amount_out), feeAmount: decodeFromFields("u256", fields.fee_amount), feeRate: decodeFromFields("u64", fields.fee_rate), afterSqrtPrice: decodeFromFields("u128", fields.after_sqrt_price), isExceed: decodeFromFields("bool", fields.is_exceed), stepResults: decodeFromFields(reified.vector(SwapStepResult.reified()), fields.step_results)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): ExpectSwapResult {
        if (!isExpectSwapResult(item.type)) {
            throw new Error("not a ExpectSwapResult type");
        }

        return ExpectSwapResult.reified().new(
            {amountIn: decodeFromFieldsWithTypes("u256", item.fields.amount_in), amountOut: decodeFromFieldsWithTypes("u256", item.fields.amount_out), feeAmount: decodeFromFieldsWithTypes("u256", item.fields.fee_amount), feeRate: decodeFromFieldsWithTypes("u64", item.fields.fee_rate), afterSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.after_sqrt_price), isExceed: decodeFromFieldsWithTypes("bool", item.fields.is_exceed), stepResults: decodeFromFieldsWithTypes(reified.vector(SwapStepResult.reified()), item.fields.step_results)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): ExpectSwapResult {

        return ExpectSwapResult.fromFields(
            ExpectSwapResult.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            amountIn: this.amountIn.toString(),amountOut: this.amountOut.toString(),feeAmount: this.feeAmount.toString(),feeRate: this.feeRate.toString(),afterSqrtPrice: this.afterSqrtPrice.toString(),isExceed: this.isExceed,stepResults: fieldToJSON<Vector<SwapStepResult>>(`vector<0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::SwapStepResult>`, this.stepResults),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField(
         field: any
    ): ExpectSwapResult {
        return ExpectSwapResult.reified().new(
            {amountIn: decodeFromJSONField("u256", field.amountIn), amountOut: decodeFromJSONField("u256", field.amountOut), feeAmount: decodeFromJSONField("u256", field.feeAmount), feeRate: decodeFromJSONField("u64", field.feeRate), afterSqrtPrice: decodeFromJSONField("u128", field.afterSqrtPrice), isExceed: decodeFromJSONField("bool", field.isExceed), stepResults: decodeFromJSONField(reified.vector(SwapStepResult.reified()), field.stepResults)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): ExpectSwapResult {
        if (json.$typeName !== ExpectSwapResult.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return ExpectSwapResult.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): ExpectSwapResult {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isExpectSwapResult(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ExpectSwapResult object`);
        }
        return ExpectSwapResult.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<ExpectSwapResult> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching ExpectSwapResult object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isExpectSwapResult(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExpectSwapResult object`);
        }

        return ExpectSwapResult.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== ExpectSwapResultEvent =============================== */

export function isExpectSwapResultEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResultEvent";
}

export interface ExpectSwapResultEventFields {
    data: ToField<ExpectSwapResult>; currentSqrtPrice: ToField<"u128">
}

export type ExpectSwapResultEventReified = Reified<
    ExpectSwapResultEvent,
    ExpectSwapResultEventFields
>;

export class ExpectSwapResultEvent implements StructClass {
    static readonly $typeName = "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResultEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = ExpectSwapResultEvent.$typeName;

    readonly $fullTypeName: "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResultEvent";

    readonly $typeArgs: [];

    readonly data:
        ToField<ExpectSwapResult>
    ; readonly currentSqrtPrice:
        ToField<"u128">

    private constructor(typeArgs: [], fields: ExpectSwapResultEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            ExpectSwapResultEvent.$typeName,
            ...typeArgs
        ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResultEvent";
        this.$typeArgs = typeArgs;

        this.data = fields.data;; this.currentSqrtPrice = fields.currentSqrtPrice;
    }

    static reified(): ExpectSwapResultEventReified {
        return {
            typeName: ExpectSwapResultEvent.$typeName,
            fullTypeName: composeSuiType(
                ExpectSwapResultEvent.$typeName,
                ...[]
            ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::expect_swap::ExpectSwapResultEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                ExpectSwapResultEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                ExpectSwapResultEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                ExpectSwapResultEvent.fromBcs(
                    data,
                ),
            bcs: ExpectSwapResultEvent.bcs,
            fromJSONField: (field: any) =>
                ExpectSwapResultEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                ExpectSwapResultEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                ExpectSwapResultEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => ExpectSwapResultEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: ExpectSwapResultEventFields,
            ) => {
                return new ExpectSwapResultEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return ExpectSwapResultEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<ExpectSwapResultEvent>> {
        return phantom(ExpectSwapResultEvent.reified());
    }

    static get p() {
        return ExpectSwapResultEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("ExpectSwapResultEvent", {
            data:
                ExpectSwapResult.bcs
            , current_sqrt_price:
                bcs.u128()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): ExpectSwapResultEvent {
        return ExpectSwapResultEvent.reified().new(
            {data: decodeFromFields(ExpectSwapResult.reified(), fields.data), currentSqrtPrice: decodeFromFields("u128", fields.current_sqrt_price)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): ExpectSwapResultEvent {
        if (!isExpectSwapResultEvent(item.type)) {
            throw new Error("not a ExpectSwapResultEvent type");
        }

        return ExpectSwapResultEvent.reified().new(
            {data: decodeFromFieldsWithTypes(ExpectSwapResult.reified(), item.fields.data), currentSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.current_sqrt_price)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): ExpectSwapResultEvent {

        return ExpectSwapResultEvent.fromFields(
            ExpectSwapResultEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            data: this.data.toJSONField(),currentSqrtPrice: this.currentSqrtPrice.toString(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField(
         field: any
    ): ExpectSwapResultEvent {
        return ExpectSwapResultEvent.reified().new(
            {data: decodeFromJSONField(ExpectSwapResult.reified(), field.data), currentSqrtPrice: decodeFromJSONField("u128", field.currentSqrtPrice)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): ExpectSwapResultEvent {
        if (json.$typeName !== ExpectSwapResultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return ExpectSwapResultEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): ExpectSwapResultEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isExpectSwapResultEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ExpectSwapResultEvent object`);
        }
        return ExpectSwapResultEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<ExpectSwapResultEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching ExpectSwapResultEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isExpectSwapResultEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExpectSwapResultEvent object`);
        }

        return ExpectSwapResultEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

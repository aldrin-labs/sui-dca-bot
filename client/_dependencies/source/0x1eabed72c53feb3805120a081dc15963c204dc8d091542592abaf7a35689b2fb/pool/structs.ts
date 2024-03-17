import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {TypeName} from "../../0x1/type-name/structs";
import {Balance} from "../../0x2/balance/structs";
import {ID, UID} from "../../0x2/object/structs";
import {I32} from "../../0x714a63a0dba6da4f017b42d5d0fb78867f18bcde904868e51d951a5a6f5b7f57/i32/structs";
import {PositionManager} from "../position/structs";
import {RewarderManager} from "../rewarder/structs";
import {TickManager} from "../tick/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== UpdateFeeRateEvent =============================== */

export function isUpdateFeeRateEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateFeeRateEvent";
}

export interface UpdateFeeRateEventFields {
    pool: ToField<ID>; oldFeeRate: ToField<"u64">; newFeeRate: ToField<"u64">
}

export type UpdateFeeRateEventReified = Reified<
    UpdateFeeRateEvent,
    UpdateFeeRateEventFields
>;

export class UpdateFeeRateEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateFeeRateEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateFeeRateEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateFeeRateEvent";

    readonly $typeArgs: [];

    readonly pool:
        ToField<ID>
    ; readonly oldFeeRate:
        ToField<"u64">
    ; readonly newFeeRate:
        ToField<"u64">

    private constructor(typeArgs: [], fields: UpdateFeeRateEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            UpdateFeeRateEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateFeeRateEvent";
        this.$typeArgs = typeArgs;

        this.pool = fields.pool;; this.oldFeeRate = fields.oldFeeRate;; this.newFeeRate = fields.newFeeRate;
    }

    static reified(): UpdateFeeRateEventReified {
        return {
            typeName: UpdateFeeRateEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateFeeRateEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateFeeRateEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                UpdateFeeRateEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                UpdateFeeRateEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                UpdateFeeRateEvent.fromBcs(
                    data,
                ),
            bcs: UpdateFeeRateEvent.bcs,
            fromJSONField: (field: any) =>
                UpdateFeeRateEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                UpdateFeeRateEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                UpdateFeeRateEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => UpdateFeeRateEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: UpdateFeeRateEventFields,
            ) => {
                return new UpdateFeeRateEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return UpdateFeeRateEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateFeeRateEvent>> {
        return phantom(UpdateFeeRateEvent.reified());
    }

    static get p() {
        return UpdateFeeRateEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("UpdateFeeRateEvent", {
            pool:
                ID.bcs
            , old_fee_rate:
                bcs.u64()
            , new_fee_rate:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): UpdateFeeRateEvent {
        return UpdateFeeRateEvent.reified().new(
            {pool: decodeFromFields(ID.reified(), fields.pool), oldFeeRate: decodeFromFields("u64", fields.old_fee_rate), newFeeRate: decodeFromFields("u64", fields.new_fee_rate)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): UpdateFeeRateEvent {
        if (!isUpdateFeeRateEvent(item.type)) {
            throw new Error("not a UpdateFeeRateEvent type");
        }

        return UpdateFeeRateEvent.reified().new(
            {pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), oldFeeRate: decodeFromFieldsWithTypes("u64", item.fields.old_fee_rate), newFeeRate: decodeFromFieldsWithTypes("u64", item.fields.new_fee_rate)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): UpdateFeeRateEvent {

        return UpdateFeeRateEvent.fromFields(
            UpdateFeeRateEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            pool: this.pool,oldFeeRate: this.oldFeeRate.toString(),newFeeRate: this.newFeeRate.toString(),

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
    ): UpdateFeeRateEvent {
        return UpdateFeeRateEvent.reified().new(
            {pool: decodeFromJSONField(ID.reified(), field.pool), oldFeeRate: decodeFromJSONField("u64", field.oldFeeRate), newFeeRate: decodeFromJSONField("u64", field.newFeeRate)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): UpdateFeeRateEvent {
        if (json.$typeName !== UpdateFeeRateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return UpdateFeeRateEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): UpdateFeeRateEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateFeeRateEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateFeeRateEvent object`);
        }
        return UpdateFeeRateEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<UpdateFeeRateEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching UpdateFeeRateEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateFeeRateEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateFeeRateEvent object`);
        }

        return UpdateFeeRateEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== AddLiquidityEvent =============================== */

export function isAddLiquidityEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityEvent";
}

export interface AddLiquidityEventFields {
    pool: ToField<ID>; position: ToField<ID>; tickLower: ToField<I32>; tickUpper: ToField<I32>; liquidity: ToField<"u128">; afterLiquidity: ToField<"u128">; amountA: ToField<"u64">; amountB: ToField<"u64">
}

export type AddLiquidityEventReified = Reified<
    AddLiquidityEvent,
    AddLiquidityEventFields
>;

export class AddLiquidityEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddLiquidityEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityEvent";

    readonly $typeArgs: [];

    readonly pool:
        ToField<ID>
    ; readonly position:
        ToField<ID>
    ; readonly tickLower:
        ToField<I32>
    ; readonly tickUpper:
        ToField<I32>
    ; readonly liquidity:
        ToField<"u128">
    ; readonly afterLiquidity:
        ToField<"u128">
    ; readonly amountA:
        ToField<"u64">
    ; readonly amountB:
        ToField<"u64">

    private constructor(typeArgs: [], fields: AddLiquidityEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            AddLiquidityEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityEvent";
        this.$typeArgs = typeArgs;

        this.pool = fields.pool;; this.position = fields.position;; this.tickLower = fields.tickLower;; this.tickUpper = fields.tickUpper;; this.liquidity = fields.liquidity;; this.afterLiquidity = fields.afterLiquidity;; this.amountA = fields.amountA;; this.amountB = fields.amountB;
    }

    static reified(): AddLiquidityEventReified {
        return {
            typeName: AddLiquidityEvent.$typeName,
            fullTypeName: composeSuiType(
                AddLiquidityEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                AddLiquidityEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                AddLiquidityEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                AddLiquidityEvent.fromBcs(
                    data,
                ),
            bcs: AddLiquidityEvent.bcs,
            fromJSONField: (field: any) =>
                AddLiquidityEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                AddLiquidityEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                AddLiquidityEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => AddLiquidityEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: AddLiquidityEventFields,
            ) => {
                return new AddLiquidityEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return AddLiquidityEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<AddLiquidityEvent>> {
        return phantom(AddLiquidityEvent.reified());
    }

    static get p() {
        return AddLiquidityEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("AddLiquidityEvent", {
            pool:
                ID.bcs
            , position:
                ID.bcs
            , tick_lower:
                I32.bcs
            , tick_upper:
                I32.bcs
            , liquidity:
                bcs.u128()
            , after_liquidity:
                bcs.u128()
            , amount_a:
                bcs.u64()
            , amount_b:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): AddLiquidityEvent {
        return AddLiquidityEvent.reified().new(
            {pool: decodeFromFields(ID.reified(), fields.pool), position: decodeFromFields(ID.reified(), fields.position), tickLower: decodeFromFields(I32.reified(), fields.tick_lower), tickUpper: decodeFromFields(I32.reified(), fields.tick_upper), liquidity: decodeFromFields("u128", fields.liquidity), afterLiquidity: decodeFromFields("u128", fields.after_liquidity), amountA: decodeFromFields("u64", fields.amount_a), amountB: decodeFromFields("u64", fields.amount_b)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): AddLiquidityEvent {
        if (!isAddLiquidityEvent(item.type)) {
            throw new Error("not a AddLiquidityEvent type");
        }

        return AddLiquidityEvent.reified().new(
            {pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), position: decodeFromFieldsWithTypes(ID.reified(), item.fields.position), tickLower: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower), tickUpper: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper), liquidity: decodeFromFieldsWithTypes("u128", item.fields.liquidity), afterLiquidity: decodeFromFieldsWithTypes("u128", item.fields.after_liquidity), amountA: decodeFromFieldsWithTypes("u64", item.fields.amount_a), amountB: decodeFromFieldsWithTypes("u64", item.fields.amount_b)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): AddLiquidityEvent {

        return AddLiquidityEvent.fromFields(
            AddLiquidityEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            pool: this.pool,position: this.position,tickLower: this.tickLower.toJSONField(),tickUpper: this.tickUpper.toJSONField(),liquidity: this.liquidity.toString(),afterLiquidity: this.afterLiquidity.toString(),amountA: this.amountA.toString(),amountB: this.amountB.toString(),

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
    ): AddLiquidityEvent {
        return AddLiquidityEvent.reified().new(
            {pool: decodeFromJSONField(ID.reified(), field.pool), position: decodeFromJSONField(ID.reified(), field.position), tickLower: decodeFromJSONField(I32.reified(), field.tickLower), tickUpper: decodeFromJSONField(I32.reified(), field.tickUpper), liquidity: decodeFromJSONField("u128", field.liquidity), afterLiquidity: decodeFromJSONField("u128", field.afterLiquidity), amountA: decodeFromJSONField("u64", field.amountA), amountB: decodeFromJSONField("u64", field.amountB)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): AddLiquidityEvent {
        if (json.$typeName !== AddLiquidityEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return AddLiquidityEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): AddLiquidityEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddLiquidityEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddLiquidityEvent object`);
        }
        return AddLiquidityEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<AddLiquidityEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching AddLiquidityEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddLiquidityEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddLiquidityEvent object`);
        }

        return AddLiquidityEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== AddLiquidityReceipt =============================== */

export function isAddLiquidityReceipt(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityReceipt<");
}

export interface AddLiquidityReceiptFields<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument> {
    poolId: ToField<ID>; amountA: ToField<"u64">; amountB: ToField<"u64">
}

export type AddLiquidityReceiptReified<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument> = Reified<
    AddLiquidityReceipt<CoinTypeA, CoinTypeB>,
    AddLiquidityReceiptFields<CoinTypeA, CoinTypeB>
>;

export class AddLiquidityReceipt<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityReceipt";
    static readonly $numTypeParams = 2;

    readonly $typeName = AddLiquidityReceipt.$typeName;

    readonly $fullTypeName: `0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityReceipt<${PhantomToTypeStr<CoinTypeA>}, ${PhantomToTypeStr<CoinTypeB>}>`;

    readonly $typeArgs: [PhantomToTypeStr<CoinTypeA>, PhantomToTypeStr<CoinTypeB>];

    readonly poolId:
        ToField<ID>
    ; readonly amountA:
        ToField<"u64">
    ; readonly amountB:
        ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<CoinTypeA>, PhantomToTypeStr<CoinTypeB>], fields: AddLiquidityReceiptFields<CoinTypeA, CoinTypeB>,
    ) {
        this.$fullTypeName = composeSuiType(
            AddLiquidityReceipt.$typeName,
            ...typeArgs
        ) as `0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityReceipt<${PhantomToTypeStr<CoinTypeA>}, ${PhantomToTypeStr<CoinTypeB>}>`;
        this.$typeArgs = typeArgs;

        this.poolId = fields.poolId;; this.amountA = fields.amountA;; this.amountB = fields.amountB;
    }

    static reified<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        CoinTypeA: CoinTypeA, CoinTypeB: CoinTypeB
    ): AddLiquidityReceiptReified<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        return {
            typeName: AddLiquidityReceipt.$typeName,
            fullTypeName: composeSuiType(
                AddLiquidityReceipt.$typeName,
                ...[extractType(CoinTypeA), extractType(CoinTypeB)]
            ) as `0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddLiquidityReceipt<${PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeA>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeB>>}>`,
            typeArgs: [
                extractType(CoinTypeA), extractType(CoinTypeB)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeA>>, PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeB>>],
            reifiedTypeArgs: [CoinTypeA, CoinTypeB],
            fromFields: (fields: Record<string, any>) =>
                AddLiquidityReceipt.fromFields(
                    [CoinTypeA, CoinTypeB],
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                AddLiquidityReceipt.fromFieldsWithTypes(
                    [CoinTypeA, CoinTypeB],
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                AddLiquidityReceipt.fromBcs(
                    [CoinTypeA, CoinTypeB],
                    data,
                ),
            bcs: AddLiquidityReceipt.bcs,
            fromJSONField: (field: any) =>
                AddLiquidityReceipt.fromJSONField(
                    [CoinTypeA, CoinTypeB],
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                AddLiquidityReceipt.fromJSON(
                    [CoinTypeA, CoinTypeB],
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                AddLiquidityReceipt.fromSuiParsedData(
                    [CoinTypeA, CoinTypeB],
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => AddLiquidityReceipt.fetch(
                client,
                [CoinTypeA, CoinTypeB],
                id,
            ),
            new: (
                fields: AddLiquidityReceiptFields<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>>,
            ) => {
                return new AddLiquidityReceipt(
                    [extractType(CoinTypeA), extractType(CoinTypeB)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return AddLiquidityReceipt.reified
    }

    static phantom<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        CoinTypeA: CoinTypeA, CoinTypeB: CoinTypeB
    ): PhantomReified<ToTypeStr<AddLiquidityReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>>>> {
        return phantom(AddLiquidityReceipt.reified(
            CoinTypeA, CoinTypeB
        ));
    }

    static get p() {
        return AddLiquidityReceipt.phantom
    }

    static get bcs() {
        return bcs.struct("AddLiquidityReceipt", {
            pool_id:
                ID.bcs
            , amount_a:
                bcs.u64()
            , amount_b:
                bcs.u64()

        })
    };

    static fromFields<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], fields: Record<string, any>
    ): AddLiquidityReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        return AddLiquidityReceipt.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {poolId: decodeFromFields(ID.reified(), fields.pool_id), amountA: decodeFromFields("u64", fields.amount_a), amountB: decodeFromFields("u64", fields.amount_b)}
        )
    }

    static fromFieldsWithTypes<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], item: FieldsWithTypes
    ): AddLiquidityReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        if (!isAddLiquidityReceipt(item.type)) {
            throw new Error("not a AddLiquidityReceipt type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return AddLiquidityReceipt.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), amountA: decodeFromFieldsWithTypes("u64", item.fields.amount_a), amountB: decodeFromFieldsWithTypes("u64", item.fields.amount_b)}
        )
    }

    static fromBcs<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], data: Uint8Array
    ): AddLiquidityReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {

        return AddLiquidityReceipt.fromFields(
            typeArgs,
            AddLiquidityReceipt.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            poolId: this.poolId,amountA: this.amountA.toString(),amountB: this.amountB.toString(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], field: any
    ): AddLiquidityReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        return AddLiquidityReceipt.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {poolId: decodeFromJSONField(ID.reified(), field.poolId), amountA: decodeFromJSONField("u64", field.amountA), amountB: decodeFromJSONField("u64", field.amountB)}
        )
    }

    static fromJSON<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], json: Record<string, any>
    ): AddLiquidityReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        if (json.$typeName !== AddLiquidityReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(AddLiquidityReceipt.$typeName,
            ...typeArgs.map(extractType)),
            json.$typeArgs,
            typeArgs,
        )

        return AddLiquidityReceipt.fromJSONField(
            typeArgs,
            json,
        )
    }

    static fromSuiParsedData<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], content: SuiParsedData
    ): AddLiquidityReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddLiquidityReceipt(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddLiquidityReceipt object`);
        }
        return AddLiquidityReceipt.fromFieldsWithTypes(
            typeArgs,
            content
        );
    }

    static async fetch<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArgs: [CoinTypeA, CoinTypeB], id: string
    ): Promise<AddLiquidityReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching AddLiquidityReceipt object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddLiquidityReceipt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddLiquidityReceipt object`);
        }

        return AddLiquidityReceipt.fromBcs(
            typeArgs,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== AddRewarderEvent =============================== */

export function isAddRewarderEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddRewarderEvent";
}

export interface AddRewarderEventFields {
    pool: ToField<ID>; rewarderType: ToField<TypeName>
}

export type AddRewarderEventReified = Reified<
    AddRewarderEvent,
    AddRewarderEventFields
>;

export class AddRewarderEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddRewarderEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddRewarderEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddRewarderEvent";

    readonly $typeArgs: [];

    readonly pool:
        ToField<ID>
    ; readonly rewarderType:
        ToField<TypeName>

    private constructor(typeArgs: [], fields: AddRewarderEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            AddRewarderEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddRewarderEvent";
        this.$typeArgs = typeArgs;

        this.pool = fields.pool;; this.rewarderType = fields.rewarderType;
    }

    static reified(): AddRewarderEventReified {
        return {
            typeName: AddRewarderEvent.$typeName,
            fullTypeName: composeSuiType(
                AddRewarderEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::AddRewarderEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                AddRewarderEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                AddRewarderEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                AddRewarderEvent.fromBcs(
                    data,
                ),
            bcs: AddRewarderEvent.bcs,
            fromJSONField: (field: any) =>
                AddRewarderEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                AddRewarderEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                AddRewarderEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => AddRewarderEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: AddRewarderEventFields,
            ) => {
                return new AddRewarderEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return AddRewarderEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<AddRewarderEvent>> {
        return phantom(AddRewarderEvent.reified());
    }

    static get p() {
        return AddRewarderEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("AddRewarderEvent", {
            pool:
                ID.bcs
            , rewarder_type:
                TypeName.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): AddRewarderEvent {
        return AddRewarderEvent.reified().new(
            {pool: decodeFromFields(ID.reified(), fields.pool), rewarderType: decodeFromFields(TypeName.reified(), fields.rewarder_type)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): AddRewarderEvent {
        if (!isAddRewarderEvent(item.type)) {
            throw new Error("not a AddRewarderEvent type");
        }

        return AddRewarderEvent.reified().new(
            {pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), rewarderType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.rewarder_type)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): AddRewarderEvent {

        return AddRewarderEvent.fromFields(
            AddRewarderEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            pool: this.pool,rewarderType: this.rewarderType.toJSONField(),

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
    ): AddRewarderEvent {
        return AddRewarderEvent.reified().new(
            {pool: decodeFromJSONField(ID.reified(), field.pool), rewarderType: decodeFromJSONField(TypeName.reified(), field.rewarderType)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): AddRewarderEvent {
        if (json.$typeName !== AddRewarderEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return AddRewarderEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): AddRewarderEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddRewarderEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddRewarderEvent object`);
        }
        return AddRewarderEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<AddRewarderEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching AddRewarderEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddRewarderEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddRewarderEvent object`);
        }

        return AddRewarderEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== CalculatedSwapResult =============================== */

export function isCalculatedSwapResult(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CalculatedSwapResult";
}

export interface CalculatedSwapResultFields {
    amountIn: ToField<"u64">; amountOut: ToField<"u64">; feeAmount: ToField<"u64">; feeRate: ToField<"u64">; afterSqrtPrice: ToField<"u128">; isExceed: ToField<"bool">; stepResults: ToField<Vector<SwapStepResult>>
}

export type CalculatedSwapResultReified = Reified<
    CalculatedSwapResult,
    CalculatedSwapResultFields
>;

export class CalculatedSwapResult implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CalculatedSwapResult";
    static readonly $numTypeParams = 0;

    readonly $typeName = CalculatedSwapResult.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CalculatedSwapResult";

    readonly $typeArgs: [];

    readonly amountIn:
        ToField<"u64">
    ; readonly amountOut:
        ToField<"u64">
    ; readonly feeAmount:
        ToField<"u64">
    ; readonly feeRate:
        ToField<"u64">
    ; readonly afterSqrtPrice:
        ToField<"u128">
    ; readonly isExceed:
        ToField<"bool">
    ; readonly stepResults:
        ToField<Vector<SwapStepResult>>

    private constructor(typeArgs: [], fields: CalculatedSwapResultFields,
    ) {
        this.$fullTypeName = composeSuiType(
            CalculatedSwapResult.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CalculatedSwapResult";
        this.$typeArgs = typeArgs;

        this.amountIn = fields.amountIn;; this.amountOut = fields.amountOut;; this.feeAmount = fields.feeAmount;; this.feeRate = fields.feeRate;; this.afterSqrtPrice = fields.afterSqrtPrice;; this.isExceed = fields.isExceed;; this.stepResults = fields.stepResults;
    }

    static reified(): CalculatedSwapResultReified {
        return {
            typeName: CalculatedSwapResult.$typeName,
            fullTypeName: composeSuiType(
                CalculatedSwapResult.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CalculatedSwapResult",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                CalculatedSwapResult.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                CalculatedSwapResult.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                CalculatedSwapResult.fromBcs(
                    data,
                ),
            bcs: CalculatedSwapResult.bcs,
            fromJSONField: (field: any) =>
                CalculatedSwapResult.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                CalculatedSwapResult.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                CalculatedSwapResult.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => CalculatedSwapResult.fetch(
                client,
                id,
            ),
            new: (
                fields: CalculatedSwapResultFields,
            ) => {
                return new CalculatedSwapResult(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return CalculatedSwapResult.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<CalculatedSwapResult>> {
        return phantom(CalculatedSwapResult.reified());
    }

    static get p() {
        return CalculatedSwapResult.phantom()
    }

    static get bcs() {
        return bcs.struct("CalculatedSwapResult", {
            amount_in:
                bcs.u64()
            , amount_out:
                bcs.u64()
            , fee_amount:
                bcs.u64()
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
    ): CalculatedSwapResult {
        return CalculatedSwapResult.reified().new(
            {amountIn: decodeFromFields("u64", fields.amount_in), amountOut: decodeFromFields("u64", fields.amount_out), feeAmount: decodeFromFields("u64", fields.fee_amount), feeRate: decodeFromFields("u64", fields.fee_rate), afterSqrtPrice: decodeFromFields("u128", fields.after_sqrt_price), isExceed: decodeFromFields("bool", fields.is_exceed), stepResults: decodeFromFields(reified.vector(SwapStepResult.reified()), fields.step_results)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): CalculatedSwapResult {
        if (!isCalculatedSwapResult(item.type)) {
            throw new Error("not a CalculatedSwapResult type");
        }

        return CalculatedSwapResult.reified().new(
            {amountIn: decodeFromFieldsWithTypes("u64", item.fields.amount_in), amountOut: decodeFromFieldsWithTypes("u64", item.fields.amount_out), feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount), feeRate: decodeFromFieldsWithTypes("u64", item.fields.fee_rate), afterSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.after_sqrt_price), isExceed: decodeFromFieldsWithTypes("bool", item.fields.is_exceed), stepResults: decodeFromFieldsWithTypes(reified.vector(SwapStepResult.reified()), item.fields.step_results)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): CalculatedSwapResult {

        return CalculatedSwapResult.fromFields(
            CalculatedSwapResult.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            amountIn: this.amountIn.toString(),amountOut: this.amountOut.toString(),feeAmount: this.feeAmount.toString(),feeRate: this.feeRate.toString(),afterSqrtPrice: this.afterSqrtPrice.toString(),isExceed: this.isExceed,stepResults: fieldToJSON<Vector<SwapStepResult>>(`vector<0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapStepResult>`, this.stepResults),

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
    ): CalculatedSwapResult {
        return CalculatedSwapResult.reified().new(
            {amountIn: decodeFromJSONField("u64", field.amountIn), amountOut: decodeFromJSONField("u64", field.amountOut), feeAmount: decodeFromJSONField("u64", field.feeAmount), feeRate: decodeFromJSONField("u64", field.feeRate), afterSqrtPrice: decodeFromJSONField("u128", field.afterSqrtPrice), isExceed: decodeFromJSONField("bool", field.isExceed), stepResults: decodeFromJSONField(reified.vector(SwapStepResult.reified()), field.stepResults)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): CalculatedSwapResult {
        if (json.$typeName !== CalculatedSwapResult.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return CalculatedSwapResult.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): CalculatedSwapResult {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCalculatedSwapResult(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CalculatedSwapResult object`);
        }
        return CalculatedSwapResult.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<CalculatedSwapResult> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching CalculatedSwapResult object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCalculatedSwapResult(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CalculatedSwapResult object`);
        }

        return CalculatedSwapResult.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== ClosePositionEvent =============================== */

export function isClosePositionEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::ClosePositionEvent";
}

export interface ClosePositionEventFields {
    pool: ToField<ID>; position: ToField<ID>
}

export type ClosePositionEventReified = Reified<
    ClosePositionEvent,
    ClosePositionEventFields
>;

export class ClosePositionEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::ClosePositionEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = ClosePositionEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::ClosePositionEvent";

    readonly $typeArgs: [];

    readonly pool:
        ToField<ID>
    ; readonly position:
        ToField<ID>

    private constructor(typeArgs: [], fields: ClosePositionEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            ClosePositionEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::ClosePositionEvent";
        this.$typeArgs = typeArgs;

        this.pool = fields.pool;; this.position = fields.position;
    }

    static reified(): ClosePositionEventReified {
        return {
            typeName: ClosePositionEvent.$typeName,
            fullTypeName: composeSuiType(
                ClosePositionEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::ClosePositionEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                ClosePositionEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                ClosePositionEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                ClosePositionEvent.fromBcs(
                    data,
                ),
            bcs: ClosePositionEvent.bcs,
            fromJSONField: (field: any) =>
                ClosePositionEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                ClosePositionEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                ClosePositionEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => ClosePositionEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: ClosePositionEventFields,
            ) => {
                return new ClosePositionEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return ClosePositionEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<ClosePositionEvent>> {
        return phantom(ClosePositionEvent.reified());
    }

    static get p() {
        return ClosePositionEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("ClosePositionEvent", {
            pool:
                ID.bcs
            , position:
                ID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): ClosePositionEvent {
        return ClosePositionEvent.reified().new(
            {pool: decodeFromFields(ID.reified(), fields.pool), position: decodeFromFields(ID.reified(), fields.position)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): ClosePositionEvent {
        if (!isClosePositionEvent(item.type)) {
            throw new Error("not a ClosePositionEvent type");
        }

        return ClosePositionEvent.reified().new(
            {pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), position: decodeFromFieldsWithTypes(ID.reified(), item.fields.position)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): ClosePositionEvent {

        return ClosePositionEvent.fromFields(
            ClosePositionEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            pool: this.pool,position: this.position,

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
    ): ClosePositionEvent {
        return ClosePositionEvent.reified().new(
            {pool: decodeFromJSONField(ID.reified(), field.pool), position: decodeFromJSONField(ID.reified(), field.position)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): ClosePositionEvent {
        if (json.$typeName !== ClosePositionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return ClosePositionEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): ClosePositionEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isClosePositionEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ClosePositionEvent object`);
        }
        return ClosePositionEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<ClosePositionEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching ClosePositionEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isClosePositionEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ClosePositionEvent object`);
        }

        return ClosePositionEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== CollectFeeEvent =============================== */

export function isCollectFeeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectFeeEvent";
}

export interface CollectFeeEventFields {
    position: ToField<ID>; pool: ToField<ID>; amountA: ToField<"u64">; amountB: ToField<"u64">
}

export type CollectFeeEventReified = Reified<
    CollectFeeEvent,
    CollectFeeEventFields
>;

export class CollectFeeEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectFeeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CollectFeeEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectFeeEvent";

    readonly $typeArgs: [];

    readonly position:
        ToField<ID>
    ; readonly pool:
        ToField<ID>
    ; readonly amountA:
        ToField<"u64">
    ; readonly amountB:
        ToField<"u64">

    private constructor(typeArgs: [], fields: CollectFeeEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            CollectFeeEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectFeeEvent";
        this.$typeArgs = typeArgs;

        this.position = fields.position;; this.pool = fields.pool;; this.amountA = fields.amountA;; this.amountB = fields.amountB;
    }

    static reified(): CollectFeeEventReified {
        return {
            typeName: CollectFeeEvent.$typeName,
            fullTypeName: composeSuiType(
                CollectFeeEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectFeeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                CollectFeeEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                CollectFeeEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                CollectFeeEvent.fromBcs(
                    data,
                ),
            bcs: CollectFeeEvent.bcs,
            fromJSONField: (field: any) =>
                CollectFeeEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                CollectFeeEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                CollectFeeEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => CollectFeeEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: CollectFeeEventFields,
            ) => {
                return new CollectFeeEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return CollectFeeEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<CollectFeeEvent>> {
        return phantom(CollectFeeEvent.reified());
    }

    static get p() {
        return CollectFeeEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("CollectFeeEvent", {
            position:
                ID.bcs
            , pool:
                ID.bcs
            , amount_a:
                bcs.u64()
            , amount_b:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): CollectFeeEvent {
        return CollectFeeEvent.reified().new(
            {position: decodeFromFields(ID.reified(), fields.position), pool: decodeFromFields(ID.reified(), fields.pool), amountA: decodeFromFields("u64", fields.amount_a), amountB: decodeFromFields("u64", fields.amount_b)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): CollectFeeEvent {
        if (!isCollectFeeEvent(item.type)) {
            throw new Error("not a CollectFeeEvent type");
        }

        return CollectFeeEvent.reified().new(
            {position: decodeFromFieldsWithTypes(ID.reified(), item.fields.position), pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), amountA: decodeFromFieldsWithTypes("u64", item.fields.amount_a), amountB: decodeFromFieldsWithTypes("u64", item.fields.amount_b)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): CollectFeeEvent {

        return CollectFeeEvent.fromFields(
            CollectFeeEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            position: this.position,pool: this.pool,amountA: this.amountA.toString(),amountB: this.amountB.toString(),

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
    ): CollectFeeEvent {
        return CollectFeeEvent.reified().new(
            {position: decodeFromJSONField(ID.reified(), field.position), pool: decodeFromJSONField(ID.reified(), field.pool), amountA: decodeFromJSONField("u64", field.amountA), amountB: decodeFromJSONField("u64", field.amountB)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): CollectFeeEvent {
        if (json.$typeName !== CollectFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return CollectFeeEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): CollectFeeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCollectFeeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CollectFeeEvent object`);
        }
        return CollectFeeEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<CollectFeeEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching CollectFeeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCollectFeeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CollectFeeEvent object`);
        }

        return CollectFeeEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== CollectProtocolFeeEvent =============================== */

export function isCollectProtocolFeeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectProtocolFeeEvent";
}

export interface CollectProtocolFeeEventFields {
    pool: ToField<ID>; amountA: ToField<"u64">; amountB: ToField<"u64">
}

export type CollectProtocolFeeEventReified = Reified<
    CollectProtocolFeeEvent,
    CollectProtocolFeeEventFields
>;

export class CollectProtocolFeeEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectProtocolFeeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CollectProtocolFeeEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectProtocolFeeEvent";

    readonly $typeArgs: [];

    readonly pool:
        ToField<ID>
    ; readonly amountA:
        ToField<"u64">
    ; readonly amountB:
        ToField<"u64">

    private constructor(typeArgs: [], fields: CollectProtocolFeeEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            CollectProtocolFeeEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectProtocolFeeEvent";
        this.$typeArgs = typeArgs;

        this.pool = fields.pool;; this.amountA = fields.amountA;; this.amountB = fields.amountB;
    }

    static reified(): CollectProtocolFeeEventReified {
        return {
            typeName: CollectProtocolFeeEvent.$typeName,
            fullTypeName: composeSuiType(
                CollectProtocolFeeEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectProtocolFeeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                CollectProtocolFeeEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                CollectProtocolFeeEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                CollectProtocolFeeEvent.fromBcs(
                    data,
                ),
            bcs: CollectProtocolFeeEvent.bcs,
            fromJSONField: (field: any) =>
                CollectProtocolFeeEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                CollectProtocolFeeEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                CollectProtocolFeeEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => CollectProtocolFeeEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: CollectProtocolFeeEventFields,
            ) => {
                return new CollectProtocolFeeEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return CollectProtocolFeeEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<CollectProtocolFeeEvent>> {
        return phantom(CollectProtocolFeeEvent.reified());
    }

    static get p() {
        return CollectProtocolFeeEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("CollectProtocolFeeEvent", {
            pool:
                ID.bcs
            , amount_a:
                bcs.u64()
            , amount_b:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): CollectProtocolFeeEvent {
        return CollectProtocolFeeEvent.reified().new(
            {pool: decodeFromFields(ID.reified(), fields.pool), amountA: decodeFromFields("u64", fields.amount_a), amountB: decodeFromFields("u64", fields.amount_b)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): CollectProtocolFeeEvent {
        if (!isCollectProtocolFeeEvent(item.type)) {
            throw new Error("not a CollectProtocolFeeEvent type");
        }

        return CollectProtocolFeeEvent.reified().new(
            {pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), amountA: decodeFromFieldsWithTypes("u64", item.fields.amount_a), amountB: decodeFromFieldsWithTypes("u64", item.fields.amount_b)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): CollectProtocolFeeEvent {

        return CollectProtocolFeeEvent.fromFields(
            CollectProtocolFeeEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            pool: this.pool,amountA: this.amountA.toString(),amountB: this.amountB.toString(),

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
    ): CollectProtocolFeeEvent {
        return CollectProtocolFeeEvent.reified().new(
            {pool: decodeFromJSONField(ID.reified(), field.pool), amountA: decodeFromJSONField("u64", field.amountA), amountB: decodeFromJSONField("u64", field.amountB)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): CollectProtocolFeeEvent {
        if (json.$typeName !== CollectProtocolFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return CollectProtocolFeeEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): CollectProtocolFeeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCollectProtocolFeeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CollectProtocolFeeEvent object`);
        }
        return CollectProtocolFeeEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<CollectProtocolFeeEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching CollectProtocolFeeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCollectProtocolFeeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CollectProtocolFeeEvent object`);
        }

        return CollectProtocolFeeEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== CollectRewardEvent =============================== */

export function isCollectRewardEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectRewardEvent";
}

export interface CollectRewardEventFields {
    position: ToField<ID>; pool: ToField<ID>; amount: ToField<"u64">
}

export type CollectRewardEventReified = Reified<
    CollectRewardEvent,
    CollectRewardEventFields
>;

export class CollectRewardEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectRewardEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CollectRewardEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectRewardEvent";

    readonly $typeArgs: [];

    readonly position:
        ToField<ID>
    ; readonly pool:
        ToField<ID>
    ; readonly amount:
        ToField<"u64">

    private constructor(typeArgs: [], fields: CollectRewardEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            CollectRewardEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectRewardEvent";
        this.$typeArgs = typeArgs;

        this.position = fields.position;; this.pool = fields.pool;; this.amount = fields.amount;
    }

    static reified(): CollectRewardEventReified {
        return {
            typeName: CollectRewardEvent.$typeName,
            fullTypeName: composeSuiType(
                CollectRewardEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::CollectRewardEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                CollectRewardEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                CollectRewardEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                CollectRewardEvent.fromBcs(
                    data,
                ),
            bcs: CollectRewardEvent.bcs,
            fromJSONField: (field: any) =>
                CollectRewardEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                CollectRewardEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                CollectRewardEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => CollectRewardEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: CollectRewardEventFields,
            ) => {
                return new CollectRewardEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return CollectRewardEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<CollectRewardEvent>> {
        return phantom(CollectRewardEvent.reified());
    }

    static get p() {
        return CollectRewardEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("CollectRewardEvent", {
            position:
                ID.bcs
            , pool:
                ID.bcs
            , amount:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): CollectRewardEvent {
        return CollectRewardEvent.reified().new(
            {position: decodeFromFields(ID.reified(), fields.position), pool: decodeFromFields(ID.reified(), fields.pool), amount: decodeFromFields("u64", fields.amount)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): CollectRewardEvent {
        if (!isCollectRewardEvent(item.type)) {
            throw new Error("not a CollectRewardEvent type");
        }

        return CollectRewardEvent.reified().new(
            {position: decodeFromFieldsWithTypes(ID.reified(), item.fields.position), pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), amount: decodeFromFieldsWithTypes("u64", item.fields.amount)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): CollectRewardEvent {

        return CollectRewardEvent.fromFields(
            CollectRewardEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            position: this.position,pool: this.pool,amount: this.amount.toString(),

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
    ): CollectRewardEvent {
        return CollectRewardEvent.reified().new(
            {position: decodeFromJSONField(ID.reified(), field.position), pool: decodeFromJSONField(ID.reified(), field.pool), amount: decodeFromJSONField("u64", field.amount)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): CollectRewardEvent {
        if (json.$typeName !== CollectRewardEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return CollectRewardEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): CollectRewardEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCollectRewardEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CollectRewardEvent object`);
        }
        return CollectRewardEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<CollectRewardEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching CollectRewardEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCollectRewardEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CollectRewardEvent object`);
        }

        return CollectRewardEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== FlashSwapReceipt =============================== */

export function isFlashSwapReceipt(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::FlashSwapReceipt<");
}

export interface FlashSwapReceiptFields<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument> {
    poolId: ToField<ID>; a2B: ToField<"bool">; partnerId: ToField<ID>; payAmount: ToField<"u64">; refFeeAmount: ToField<"u64">
}

export type FlashSwapReceiptReified<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument> = Reified<
    FlashSwapReceipt<CoinTypeA, CoinTypeB>,
    FlashSwapReceiptFields<CoinTypeA, CoinTypeB>
>;

export class FlashSwapReceipt<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::FlashSwapReceipt";
    static readonly $numTypeParams = 2;

    readonly $typeName = FlashSwapReceipt.$typeName;

    readonly $fullTypeName: `0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::FlashSwapReceipt<${PhantomToTypeStr<CoinTypeA>}, ${PhantomToTypeStr<CoinTypeB>}>`;

    readonly $typeArgs: [PhantomToTypeStr<CoinTypeA>, PhantomToTypeStr<CoinTypeB>];

    readonly poolId:
        ToField<ID>
    ; readonly a2B:
        ToField<"bool">
    ; readonly partnerId:
        ToField<ID>
    ; readonly payAmount:
        ToField<"u64">
    ; readonly refFeeAmount:
        ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<CoinTypeA>, PhantomToTypeStr<CoinTypeB>], fields: FlashSwapReceiptFields<CoinTypeA, CoinTypeB>,
    ) {
        this.$fullTypeName = composeSuiType(
            FlashSwapReceipt.$typeName,
            ...typeArgs
        ) as `0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::FlashSwapReceipt<${PhantomToTypeStr<CoinTypeA>}, ${PhantomToTypeStr<CoinTypeB>}>`;
        this.$typeArgs = typeArgs;

        this.poolId = fields.poolId;; this.a2B = fields.a2B;; this.partnerId = fields.partnerId;; this.payAmount = fields.payAmount;; this.refFeeAmount = fields.refFeeAmount;
    }

    static reified<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        CoinTypeA: CoinTypeA, CoinTypeB: CoinTypeB
    ): FlashSwapReceiptReified<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        return {
            typeName: FlashSwapReceipt.$typeName,
            fullTypeName: composeSuiType(
                FlashSwapReceipt.$typeName,
                ...[extractType(CoinTypeA), extractType(CoinTypeB)]
            ) as `0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::FlashSwapReceipt<${PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeA>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeB>>}>`,
            typeArgs: [
                extractType(CoinTypeA), extractType(CoinTypeB)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeA>>, PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeB>>],
            reifiedTypeArgs: [CoinTypeA, CoinTypeB],
            fromFields: (fields: Record<string, any>) =>
                FlashSwapReceipt.fromFields(
                    [CoinTypeA, CoinTypeB],
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                FlashSwapReceipt.fromFieldsWithTypes(
                    [CoinTypeA, CoinTypeB],
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                FlashSwapReceipt.fromBcs(
                    [CoinTypeA, CoinTypeB],
                    data,
                ),
            bcs: FlashSwapReceipt.bcs,
            fromJSONField: (field: any) =>
                FlashSwapReceipt.fromJSONField(
                    [CoinTypeA, CoinTypeB],
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                FlashSwapReceipt.fromJSON(
                    [CoinTypeA, CoinTypeB],
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                FlashSwapReceipt.fromSuiParsedData(
                    [CoinTypeA, CoinTypeB],
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => FlashSwapReceipt.fetch(
                client,
                [CoinTypeA, CoinTypeB],
                id,
            ),
            new: (
                fields: FlashSwapReceiptFields<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>>,
            ) => {
                return new FlashSwapReceipt(
                    [extractType(CoinTypeA), extractType(CoinTypeB)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return FlashSwapReceipt.reified
    }

    static phantom<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        CoinTypeA: CoinTypeA, CoinTypeB: CoinTypeB
    ): PhantomReified<ToTypeStr<FlashSwapReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>>>> {
        return phantom(FlashSwapReceipt.reified(
            CoinTypeA, CoinTypeB
        ));
    }

    static get p() {
        return FlashSwapReceipt.phantom
    }

    static get bcs() {
        return bcs.struct("FlashSwapReceipt", {
            pool_id:
                ID.bcs
            , a2b:
                bcs.bool()
            , partner_id:
                ID.bcs
            , pay_amount:
                bcs.u64()
            , ref_fee_amount:
                bcs.u64()

        })
    };

    static fromFields<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], fields: Record<string, any>
    ): FlashSwapReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        return FlashSwapReceipt.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {poolId: decodeFromFields(ID.reified(), fields.pool_id), a2B: decodeFromFields("bool", fields.a2b), partnerId: decodeFromFields(ID.reified(), fields.partner_id), payAmount: decodeFromFields("u64", fields.pay_amount), refFeeAmount: decodeFromFields("u64", fields.ref_fee_amount)}
        )
    }

    static fromFieldsWithTypes<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], item: FieldsWithTypes
    ): FlashSwapReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        if (!isFlashSwapReceipt(item.type)) {
            throw new Error("not a FlashSwapReceipt type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return FlashSwapReceipt.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), a2B: decodeFromFieldsWithTypes("bool", item.fields.a2b), partnerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.partner_id), payAmount: decodeFromFieldsWithTypes("u64", item.fields.pay_amount), refFeeAmount: decodeFromFieldsWithTypes("u64", item.fields.ref_fee_amount)}
        )
    }

    static fromBcs<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], data: Uint8Array
    ): FlashSwapReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {

        return FlashSwapReceipt.fromFields(
            typeArgs,
            FlashSwapReceipt.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            poolId: this.poolId,a2B: this.a2B,partnerId: this.partnerId,payAmount: this.payAmount.toString(),refFeeAmount: this.refFeeAmount.toString(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], field: any
    ): FlashSwapReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        return FlashSwapReceipt.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {poolId: decodeFromJSONField(ID.reified(), field.poolId), a2B: decodeFromJSONField("bool", field.a2B), partnerId: decodeFromJSONField(ID.reified(), field.partnerId), payAmount: decodeFromJSONField("u64", field.payAmount), refFeeAmount: decodeFromJSONField("u64", field.refFeeAmount)}
        )
    }

    static fromJSON<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], json: Record<string, any>
    ): FlashSwapReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        if (json.$typeName !== FlashSwapReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(FlashSwapReceipt.$typeName,
            ...typeArgs.map(extractType)),
            json.$typeArgs,
            typeArgs,
        )

        return FlashSwapReceipt.fromJSONField(
            typeArgs,
            json,
        )
    }

    static fromSuiParsedData<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], content: SuiParsedData
    ): FlashSwapReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFlashSwapReceipt(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FlashSwapReceipt object`);
        }
        return FlashSwapReceipt.fromFieldsWithTypes(
            typeArgs,
            content
        );
    }

    static async fetch<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArgs: [CoinTypeA, CoinTypeB], id: string
    ): Promise<FlashSwapReceipt<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching FlashSwapReceipt object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFlashSwapReceipt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FlashSwapReceipt object`);
        }

        return FlashSwapReceipt.fromBcs(
            typeArgs,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== OpenPositionEvent =============================== */

export function isOpenPositionEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::OpenPositionEvent";
}

export interface OpenPositionEventFields {
    pool: ToField<ID>; tickLower: ToField<I32>; tickUpper: ToField<I32>; position: ToField<ID>
}

export type OpenPositionEventReified = Reified<
    OpenPositionEvent,
    OpenPositionEventFields
>;

export class OpenPositionEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::OpenPositionEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = OpenPositionEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::OpenPositionEvent";

    readonly $typeArgs: [];

    readonly pool:
        ToField<ID>
    ; readonly tickLower:
        ToField<I32>
    ; readonly tickUpper:
        ToField<I32>
    ; readonly position:
        ToField<ID>

    private constructor(typeArgs: [], fields: OpenPositionEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            OpenPositionEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::OpenPositionEvent";
        this.$typeArgs = typeArgs;

        this.pool = fields.pool;; this.tickLower = fields.tickLower;; this.tickUpper = fields.tickUpper;; this.position = fields.position;
    }

    static reified(): OpenPositionEventReified {
        return {
            typeName: OpenPositionEvent.$typeName,
            fullTypeName: composeSuiType(
                OpenPositionEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::OpenPositionEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                OpenPositionEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                OpenPositionEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                OpenPositionEvent.fromBcs(
                    data,
                ),
            bcs: OpenPositionEvent.bcs,
            fromJSONField: (field: any) =>
                OpenPositionEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                OpenPositionEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                OpenPositionEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => OpenPositionEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: OpenPositionEventFields,
            ) => {
                return new OpenPositionEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return OpenPositionEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<OpenPositionEvent>> {
        return phantom(OpenPositionEvent.reified());
    }

    static get p() {
        return OpenPositionEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("OpenPositionEvent", {
            pool:
                ID.bcs
            , tick_lower:
                I32.bcs
            , tick_upper:
                I32.bcs
            , position:
                ID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): OpenPositionEvent {
        return OpenPositionEvent.reified().new(
            {pool: decodeFromFields(ID.reified(), fields.pool), tickLower: decodeFromFields(I32.reified(), fields.tick_lower), tickUpper: decodeFromFields(I32.reified(), fields.tick_upper), position: decodeFromFields(ID.reified(), fields.position)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): OpenPositionEvent {
        if (!isOpenPositionEvent(item.type)) {
            throw new Error("not a OpenPositionEvent type");
        }

        return OpenPositionEvent.reified().new(
            {pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), tickLower: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower), tickUpper: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper), position: decodeFromFieldsWithTypes(ID.reified(), item.fields.position)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): OpenPositionEvent {

        return OpenPositionEvent.fromFields(
            OpenPositionEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            pool: this.pool,tickLower: this.tickLower.toJSONField(),tickUpper: this.tickUpper.toJSONField(),position: this.position,

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
    ): OpenPositionEvent {
        return OpenPositionEvent.reified().new(
            {pool: decodeFromJSONField(ID.reified(), field.pool), tickLower: decodeFromJSONField(I32.reified(), field.tickLower), tickUpper: decodeFromJSONField(I32.reified(), field.tickUpper), position: decodeFromJSONField(ID.reified(), field.position)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): OpenPositionEvent {
        if (json.$typeName !== OpenPositionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return OpenPositionEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): OpenPositionEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isOpenPositionEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a OpenPositionEvent object`);
        }
        return OpenPositionEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<OpenPositionEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching OpenPositionEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isOpenPositionEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a OpenPositionEvent object`);
        }

        return OpenPositionEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== POOL =============================== */

export function isPOOL(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::POOL";
}

export interface POOLFields {
    dummyField: ToField<"bool">
}

export type POOLReified = Reified<
    POOL,
    POOLFields
>;

export class POOL implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::POOL";
    static readonly $numTypeParams = 0;

    readonly $typeName = POOL.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::POOL";

    readonly $typeArgs: [];

    readonly dummyField:
        ToField<"bool">

    private constructor(typeArgs: [], fields: POOLFields,
    ) {
        this.$fullTypeName = composeSuiType(
            POOL.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::POOL";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): POOLReified {
        return {
            typeName: POOL.$typeName,
            fullTypeName: composeSuiType(
                POOL.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::POOL",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                POOL.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                POOL.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                POOL.fromBcs(
                    data,
                ),
            bcs: POOL.bcs,
            fromJSONField: (field: any) =>
                POOL.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                POOL.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                POOL.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => POOL.fetch(
                client,
                id,
            ),
            new: (
                fields: POOLFields,
            ) => {
                return new POOL(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return POOL.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<POOL>> {
        return phantom(POOL.reified());
    }

    static get p() {
        return POOL.phantom()
    }

    static get bcs() {
        return bcs.struct("POOL", {
            dummy_field:
                bcs.bool()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): POOL {
        return POOL.reified().new(
            {dummyField: decodeFromFields("bool", fields.dummy_field)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): POOL {
        if (!isPOOL(item.type)) {
            throw new Error("not a POOL type");
        }

        return POOL.reified().new(
            {dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): POOL {

        return POOL.fromFields(
            POOL.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,

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
    ): POOL {
        return POOL.reified().new(
            {dummyField: decodeFromJSONField("bool", field.dummyField)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): POOL {
        if (json.$typeName !== POOL.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return POOL.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): POOL {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPOOL(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a POOL object`);
        }
        return POOL.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<POOL> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching POOL object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPOOL(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a POOL object`);
        }

        return POOL.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Pool =============================== */

export function isPool(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::Pool<");
}

export interface PoolFields<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument> {
    id: ToField<UID>; coinA: ToField<Balance<CoinTypeA>>; coinB: ToField<Balance<CoinTypeB>>; tickSpacing: ToField<"u32">; feeRate: ToField<"u64">; liquidity: ToField<"u128">; currentSqrtPrice: ToField<"u128">; currentTickIndex: ToField<I32>; feeGrowthGlobalA: ToField<"u128">; feeGrowthGlobalB: ToField<"u128">; feeProtocolCoinA: ToField<"u64">; feeProtocolCoinB: ToField<"u64">; tickManager: ToField<TickManager>; rewarderManager: ToField<RewarderManager>; positionManager: ToField<PositionManager>; isPause: ToField<"bool">; index: ToField<"u64">; url: ToField<String>
}

export type PoolReified<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument> = Reified<
    Pool<CoinTypeA, CoinTypeB>,
    PoolFields<CoinTypeA, CoinTypeB>
>;

export class Pool<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::Pool";
    static readonly $numTypeParams = 2;

    readonly $typeName = Pool.$typeName;

    readonly $fullTypeName: `0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::Pool<${PhantomToTypeStr<CoinTypeA>}, ${PhantomToTypeStr<CoinTypeB>}>`;

    readonly $typeArgs: [PhantomToTypeStr<CoinTypeA>, PhantomToTypeStr<CoinTypeB>];

    readonly id:
        ToField<UID>
    ; readonly coinA:
        ToField<Balance<CoinTypeA>>
    ; readonly coinB:
        ToField<Balance<CoinTypeB>>
    ; readonly tickSpacing:
        ToField<"u32">
    ; readonly feeRate:
        ToField<"u64">
    ; readonly liquidity:
        ToField<"u128">
    ; readonly currentSqrtPrice:
        ToField<"u128">
    ; readonly currentTickIndex:
        ToField<I32>
    ; readonly feeGrowthGlobalA:
        ToField<"u128">
    ; readonly feeGrowthGlobalB:
        ToField<"u128">
    ; readonly feeProtocolCoinA:
        ToField<"u64">
    ; readonly feeProtocolCoinB:
        ToField<"u64">
    ; readonly tickManager:
        ToField<TickManager>
    ; readonly rewarderManager:
        ToField<RewarderManager>
    ; readonly positionManager:
        ToField<PositionManager>
    ; readonly isPause:
        ToField<"bool">
    ; readonly index:
        ToField<"u64">
    ; readonly url:
        ToField<String>

    private constructor(typeArgs: [PhantomToTypeStr<CoinTypeA>, PhantomToTypeStr<CoinTypeB>], fields: PoolFields<CoinTypeA, CoinTypeB>,
    ) {
        this.$fullTypeName = composeSuiType(
            Pool.$typeName,
            ...typeArgs
        ) as `0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::Pool<${PhantomToTypeStr<CoinTypeA>}, ${PhantomToTypeStr<CoinTypeB>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.coinA = fields.coinA;; this.coinB = fields.coinB;; this.tickSpacing = fields.tickSpacing;; this.feeRate = fields.feeRate;; this.liquidity = fields.liquidity;; this.currentSqrtPrice = fields.currentSqrtPrice;; this.currentTickIndex = fields.currentTickIndex;; this.feeGrowthGlobalA = fields.feeGrowthGlobalA;; this.feeGrowthGlobalB = fields.feeGrowthGlobalB;; this.feeProtocolCoinA = fields.feeProtocolCoinA;; this.feeProtocolCoinB = fields.feeProtocolCoinB;; this.tickManager = fields.tickManager;; this.rewarderManager = fields.rewarderManager;; this.positionManager = fields.positionManager;; this.isPause = fields.isPause;; this.index = fields.index;; this.url = fields.url;
    }

    static reified<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        CoinTypeA: CoinTypeA, CoinTypeB: CoinTypeB
    ): PoolReified<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        return {
            typeName: Pool.$typeName,
            fullTypeName: composeSuiType(
                Pool.$typeName,
                ...[extractType(CoinTypeA), extractType(CoinTypeB)]
            ) as `0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::Pool<${PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeA>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeB>>}>`,
            typeArgs: [
                extractType(CoinTypeA), extractType(CoinTypeB)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeA>>, PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeB>>],
            reifiedTypeArgs: [CoinTypeA, CoinTypeB],
            fromFields: (fields: Record<string, any>) =>
                Pool.fromFields(
                    [CoinTypeA, CoinTypeB],
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Pool.fromFieldsWithTypes(
                    [CoinTypeA, CoinTypeB],
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Pool.fromBcs(
                    [CoinTypeA, CoinTypeB],
                    data,
                ),
            bcs: Pool.bcs,
            fromJSONField: (field: any) =>
                Pool.fromJSONField(
                    [CoinTypeA, CoinTypeB],
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Pool.fromJSON(
                    [CoinTypeA, CoinTypeB],
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Pool.fromSuiParsedData(
                    [CoinTypeA, CoinTypeB],
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Pool.fetch(
                client,
                [CoinTypeA, CoinTypeB],
                id,
            ),
            new: (
                fields: PoolFields<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>>,
            ) => {
                return new Pool(
                    [extractType(CoinTypeA), extractType(CoinTypeB)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Pool.reified
    }

    static phantom<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        CoinTypeA: CoinTypeA, CoinTypeB: CoinTypeB
    ): PhantomReified<ToTypeStr<Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>>>> {
        return phantom(Pool.reified(
            CoinTypeA, CoinTypeB
        ));
    }

    static get p() {
        return Pool.phantom
    }

    static get bcs() {
        return bcs.struct("Pool", {
            id:
                UID.bcs
            , coin_a:
                Balance.bcs
            , coin_b:
                Balance.bcs
            , tick_spacing:
                bcs.u32()
            , fee_rate:
                bcs.u64()
            , liquidity:
                bcs.u128()
            , current_sqrt_price:
                bcs.u128()
            , current_tick_index:
                I32.bcs
            , fee_growth_global_a:
                bcs.u128()
            , fee_growth_global_b:
                bcs.u128()
            , fee_protocol_coin_a:
                bcs.u64()
            , fee_protocol_coin_b:
                bcs.u64()
            , tick_manager:
                TickManager.bcs
            , rewarder_manager:
                RewarderManager.bcs
            , position_manager:
                PositionManager.bcs
            , is_pause:
                bcs.bool()
            , index:
                bcs.u64()
            , url:
                String.bcs

        })
    };

    static fromFields<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], fields: Record<string, any>
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        return Pool.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {id: decodeFromFields(UID.reified(), fields.id), coinA: decodeFromFields(Balance.reified(typeArgs[0]), fields.coin_a), coinB: decodeFromFields(Balance.reified(typeArgs[1]), fields.coin_b), tickSpacing: decodeFromFields("u32", fields.tick_spacing), feeRate: decodeFromFields("u64", fields.fee_rate), liquidity: decodeFromFields("u128", fields.liquidity), currentSqrtPrice: decodeFromFields("u128", fields.current_sqrt_price), currentTickIndex: decodeFromFields(I32.reified(), fields.current_tick_index), feeGrowthGlobalA: decodeFromFields("u128", fields.fee_growth_global_a), feeGrowthGlobalB: decodeFromFields("u128", fields.fee_growth_global_b), feeProtocolCoinA: decodeFromFields("u64", fields.fee_protocol_coin_a), feeProtocolCoinB: decodeFromFields("u64", fields.fee_protocol_coin_b), tickManager: decodeFromFields(TickManager.reified(), fields.tick_manager), rewarderManager: decodeFromFields(RewarderManager.reified(), fields.rewarder_manager), positionManager: decodeFromFields(PositionManager.reified(), fields.position_manager), isPause: decodeFromFields("bool", fields.is_pause), index: decodeFromFields("u64", fields.index), url: decodeFromFields(String.reified(), fields.url)}
        )
    }

    static fromFieldsWithTypes<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], item: FieldsWithTypes
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        if (!isPool(item.type)) {
            throw new Error("not a Pool type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return Pool.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), coinA: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.coin_a), coinB: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.coin_b), tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing), feeRate: decodeFromFieldsWithTypes("u64", item.fields.fee_rate), liquidity: decodeFromFieldsWithTypes("u128", item.fields.liquidity), currentSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.current_sqrt_price), currentTickIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.current_tick_index), feeGrowthGlobalA: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_global_a), feeGrowthGlobalB: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_global_b), feeProtocolCoinA: decodeFromFieldsWithTypes("u64", item.fields.fee_protocol_coin_a), feeProtocolCoinB: decodeFromFieldsWithTypes("u64", item.fields.fee_protocol_coin_b), tickManager: decodeFromFieldsWithTypes(TickManager.reified(), item.fields.tick_manager), rewarderManager: decodeFromFieldsWithTypes(RewarderManager.reified(), item.fields.rewarder_manager), positionManager: decodeFromFieldsWithTypes(PositionManager.reified(), item.fields.position_manager), isPause: decodeFromFieldsWithTypes("bool", item.fields.is_pause), index: decodeFromFieldsWithTypes("u64", item.fields.index), url: decodeFromFieldsWithTypes(String.reified(), item.fields.url)}
        )
    }

    static fromBcs<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], data: Uint8Array
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {

        return Pool.fromFields(
            typeArgs,
            Pool.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,coinA: this.coinA.toJSONField(),coinB: this.coinB.toJSONField(),tickSpacing: this.tickSpacing,feeRate: this.feeRate.toString(),liquidity: this.liquidity.toString(),currentSqrtPrice: this.currentSqrtPrice.toString(),currentTickIndex: this.currentTickIndex.toJSONField(),feeGrowthGlobalA: this.feeGrowthGlobalA.toString(),feeGrowthGlobalB: this.feeGrowthGlobalB.toString(),feeProtocolCoinA: this.feeProtocolCoinA.toString(),feeProtocolCoinB: this.feeProtocolCoinB.toString(),tickManager: this.tickManager.toJSONField(),rewarderManager: this.rewarderManager.toJSONField(),positionManager: this.positionManager.toJSONField(),isPause: this.isPause,index: this.index.toString(),url: this.url,

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], field: any
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        return Pool.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {id: decodeFromJSONField(UID.reified(), field.id), coinA: decodeFromJSONField(Balance.reified(typeArgs[0]), field.coinA), coinB: decodeFromJSONField(Balance.reified(typeArgs[1]), field.coinB), tickSpacing: decodeFromJSONField("u32", field.tickSpacing), feeRate: decodeFromJSONField("u64", field.feeRate), liquidity: decodeFromJSONField("u128", field.liquidity), currentSqrtPrice: decodeFromJSONField("u128", field.currentSqrtPrice), currentTickIndex: decodeFromJSONField(I32.reified(), field.currentTickIndex), feeGrowthGlobalA: decodeFromJSONField("u128", field.feeGrowthGlobalA), feeGrowthGlobalB: decodeFromJSONField("u128", field.feeGrowthGlobalB), feeProtocolCoinA: decodeFromJSONField("u64", field.feeProtocolCoinA), feeProtocolCoinB: decodeFromJSONField("u64", field.feeProtocolCoinB), tickManager: decodeFromJSONField(TickManager.reified(), field.tickManager), rewarderManager: decodeFromJSONField(RewarderManager.reified(), field.rewarderManager), positionManager: decodeFromJSONField(PositionManager.reified(), field.positionManager), isPause: decodeFromJSONField("bool", field.isPause), index: decodeFromJSONField("u64", field.index), url: decodeFromJSONField(String.reified(), field.url)}
        )
    }

    static fromJSON<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], json: Record<string, any>
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        if (json.$typeName !== Pool.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(Pool.$typeName,
            ...typeArgs.map(extractType)),
            json.$typeArgs,
            typeArgs,
        )

        return Pool.fromJSONField(
            typeArgs,
            json,
        )
    }

    static fromSuiParsedData<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB], content: SuiParsedData
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Pool object`);
        }
        return Pool.fromFieldsWithTypes(
            typeArgs,
            content
        );
    }

    static async fetch<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArgs: [CoinTypeA, CoinTypeB], id: string
    ): Promise<Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Pool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Pool object`);
        }

        return Pool.fromBcs(
            typeArgs,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== RemoveLiquidityEvent =============================== */

export function isRemoveLiquidityEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::RemoveLiquidityEvent";
}

export interface RemoveLiquidityEventFields {
    pool: ToField<ID>; position: ToField<ID>; tickLower: ToField<I32>; tickUpper: ToField<I32>; liquidity: ToField<"u128">; afterLiquidity: ToField<"u128">; amountA: ToField<"u64">; amountB: ToField<"u64">
}

export type RemoveLiquidityEventReified = Reified<
    RemoveLiquidityEvent,
    RemoveLiquidityEventFields
>;

export class RemoveLiquidityEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::RemoveLiquidityEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RemoveLiquidityEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::RemoveLiquidityEvent";

    readonly $typeArgs: [];

    readonly pool:
        ToField<ID>
    ; readonly position:
        ToField<ID>
    ; readonly tickLower:
        ToField<I32>
    ; readonly tickUpper:
        ToField<I32>
    ; readonly liquidity:
        ToField<"u128">
    ; readonly afterLiquidity:
        ToField<"u128">
    ; readonly amountA:
        ToField<"u64">
    ; readonly amountB:
        ToField<"u64">

    private constructor(typeArgs: [], fields: RemoveLiquidityEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            RemoveLiquidityEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::RemoveLiquidityEvent";
        this.$typeArgs = typeArgs;

        this.pool = fields.pool;; this.position = fields.position;; this.tickLower = fields.tickLower;; this.tickUpper = fields.tickUpper;; this.liquidity = fields.liquidity;; this.afterLiquidity = fields.afterLiquidity;; this.amountA = fields.amountA;; this.amountB = fields.amountB;
    }

    static reified(): RemoveLiquidityEventReified {
        return {
            typeName: RemoveLiquidityEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveLiquidityEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::RemoveLiquidityEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                RemoveLiquidityEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                RemoveLiquidityEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                RemoveLiquidityEvent.fromBcs(
                    data,
                ),
            bcs: RemoveLiquidityEvent.bcs,
            fromJSONField: (field: any) =>
                RemoveLiquidityEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                RemoveLiquidityEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                RemoveLiquidityEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => RemoveLiquidityEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: RemoveLiquidityEventFields,
            ) => {
                return new RemoveLiquidityEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return RemoveLiquidityEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveLiquidityEvent>> {
        return phantom(RemoveLiquidityEvent.reified());
    }

    static get p() {
        return RemoveLiquidityEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("RemoveLiquidityEvent", {
            pool:
                ID.bcs
            , position:
                ID.bcs
            , tick_lower:
                I32.bcs
            , tick_upper:
                I32.bcs
            , liquidity:
                bcs.u128()
            , after_liquidity:
                bcs.u128()
            , amount_a:
                bcs.u64()
            , amount_b:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): RemoveLiquidityEvent {
        return RemoveLiquidityEvent.reified().new(
            {pool: decodeFromFields(ID.reified(), fields.pool), position: decodeFromFields(ID.reified(), fields.position), tickLower: decodeFromFields(I32.reified(), fields.tick_lower), tickUpper: decodeFromFields(I32.reified(), fields.tick_upper), liquidity: decodeFromFields("u128", fields.liquidity), afterLiquidity: decodeFromFields("u128", fields.after_liquidity), amountA: decodeFromFields("u64", fields.amount_a), amountB: decodeFromFields("u64", fields.amount_b)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): RemoveLiquidityEvent {
        if (!isRemoveLiquidityEvent(item.type)) {
            throw new Error("not a RemoveLiquidityEvent type");
        }

        return RemoveLiquidityEvent.reified().new(
            {pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), position: decodeFromFieldsWithTypes(ID.reified(), item.fields.position), tickLower: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower), tickUpper: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper), liquidity: decodeFromFieldsWithTypes("u128", item.fields.liquidity), afterLiquidity: decodeFromFieldsWithTypes("u128", item.fields.after_liquidity), amountA: decodeFromFieldsWithTypes("u64", item.fields.amount_a), amountB: decodeFromFieldsWithTypes("u64", item.fields.amount_b)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): RemoveLiquidityEvent {

        return RemoveLiquidityEvent.fromFields(
            RemoveLiquidityEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            pool: this.pool,position: this.position,tickLower: this.tickLower.toJSONField(),tickUpper: this.tickUpper.toJSONField(),liquidity: this.liquidity.toString(),afterLiquidity: this.afterLiquidity.toString(),amountA: this.amountA.toString(),amountB: this.amountB.toString(),

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
    ): RemoveLiquidityEvent {
        return RemoveLiquidityEvent.reified().new(
            {pool: decodeFromJSONField(ID.reified(), field.pool), position: decodeFromJSONField(ID.reified(), field.position), tickLower: decodeFromJSONField(I32.reified(), field.tickLower), tickUpper: decodeFromJSONField(I32.reified(), field.tickUpper), liquidity: decodeFromJSONField("u128", field.liquidity), afterLiquidity: decodeFromJSONField("u128", field.afterLiquidity), amountA: decodeFromJSONField("u64", field.amountA), amountB: decodeFromJSONField("u64", field.amountB)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): RemoveLiquidityEvent {
        if (json.$typeName !== RemoveLiquidityEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return RemoveLiquidityEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): RemoveLiquidityEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveLiquidityEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveLiquidityEvent object`);
        }
        return RemoveLiquidityEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<RemoveLiquidityEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching RemoveLiquidityEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveLiquidityEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveLiquidityEvent object`);
        }

        return RemoveLiquidityEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== SwapEvent =============================== */

export function isSwapEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapEvent";
}

export interface SwapEventFields {
    atob: ToField<"bool">; pool: ToField<ID>; partner: ToField<ID>; amountIn: ToField<"u64">; amountOut: ToField<"u64">; refAmount: ToField<"u64">; feeAmount: ToField<"u64">; vaultAAmount: ToField<"u64">; vaultBAmount: ToField<"u64">; beforeSqrtPrice: ToField<"u128">; afterSqrtPrice: ToField<"u128">; steps: ToField<"u64">
}

export type SwapEventReified = Reified<
    SwapEvent,
    SwapEventFields
>;

export class SwapEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SwapEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapEvent";

    readonly $typeArgs: [];

    readonly atob:
        ToField<"bool">
    ; readonly pool:
        ToField<ID>
    ; readonly partner:
        ToField<ID>
    ; readonly amountIn:
        ToField<"u64">
    ; readonly amountOut:
        ToField<"u64">
    ; readonly refAmount:
        ToField<"u64">
    ; readonly feeAmount:
        ToField<"u64">
    ; readonly vaultAAmount:
        ToField<"u64">
    ; readonly vaultBAmount:
        ToField<"u64">
    ; readonly beforeSqrtPrice:
        ToField<"u128">
    ; readonly afterSqrtPrice:
        ToField<"u128">
    ; readonly steps:
        ToField<"u64">

    private constructor(typeArgs: [], fields: SwapEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            SwapEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapEvent";
        this.$typeArgs = typeArgs;

        this.atob = fields.atob;; this.pool = fields.pool;; this.partner = fields.partner;; this.amountIn = fields.amountIn;; this.amountOut = fields.amountOut;; this.refAmount = fields.refAmount;; this.feeAmount = fields.feeAmount;; this.vaultAAmount = fields.vaultAAmount;; this.vaultBAmount = fields.vaultBAmount;; this.beforeSqrtPrice = fields.beforeSqrtPrice;; this.afterSqrtPrice = fields.afterSqrtPrice;; this.steps = fields.steps;
    }

    static reified(): SwapEventReified {
        return {
            typeName: SwapEvent.$typeName,
            fullTypeName: composeSuiType(
                SwapEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                SwapEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                SwapEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                SwapEvent.fromBcs(
                    data,
                ),
            bcs: SwapEvent.bcs,
            fromJSONField: (field: any) =>
                SwapEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                SwapEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                SwapEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => SwapEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: SwapEventFields,
            ) => {
                return new SwapEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return SwapEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<SwapEvent>> {
        return phantom(SwapEvent.reified());
    }

    static get p() {
        return SwapEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("SwapEvent", {
            atob:
                bcs.bool()
            , pool:
                ID.bcs
            , partner:
                ID.bcs
            , amount_in:
                bcs.u64()
            , amount_out:
                bcs.u64()
            , ref_amount:
                bcs.u64()
            , fee_amount:
                bcs.u64()
            , vault_a_amount:
                bcs.u64()
            , vault_b_amount:
                bcs.u64()
            , before_sqrt_price:
                bcs.u128()
            , after_sqrt_price:
                bcs.u128()
            , steps:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): SwapEvent {
        return SwapEvent.reified().new(
            {atob: decodeFromFields("bool", fields.atob), pool: decodeFromFields(ID.reified(), fields.pool), partner: decodeFromFields(ID.reified(), fields.partner), amountIn: decodeFromFields("u64", fields.amount_in), amountOut: decodeFromFields("u64", fields.amount_out), refAmount: decodeFromFields("u64", fields.ref_amount), feeAmount: decodeFromFields("u64", fields.fee_amount), vaultAAmount: decodeFromFields("u64", fields.vault_a_amount), vaultBAmount: decodeFromFields("u64", fields.vault_b_amount), beforeSqrtPrice: decodeFromFields("u128", fields.before_sqrt_price), afterSqrtPrice: decodeFromFields("u128", fields.after_sqrt_price), steps: decodeFromFields("u64", fields.steps)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): SwapEvent {
        if (!isSwapEvent(item.type)) {
            throw new Error("not a SwapEvent type");
        }

        return SwapEvent.reified().new(
            {atob: decodeFromFieldsWithTypes("bool", item.fields.atob), pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), partner: decodeFromFieldsWithTypes(ID.reified(), item.fields.partner), amountIn: decodeFromFieldsWithTypes("u64", item.fields.amount_in), amountOut: decodeFromFieldsWithTypes("u64", item.fields.amount_out), refAmount: decodeFromFieldsWithTypes("u64", item.fields.ref_amount), feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount), vaultAAmount: decodeFromFieldsWithTypes("u64", item.fields.vault_a_amount), vaultBAmount: decodeFromFieldsWithTypes("u64", item.fields.vault_b_amount), beforeSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.before_sqrt_price), afterSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.after_sqrt_price), steps: decodeFromFieldsWithTypes("u64", item.fields.steps)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): SwapEvent {

        return SwapEvent.fromFields(
            SwapEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            atob: this.atob,pool: this.pool,partner: this.partner,amountIn: this.amountIn.toString(),amountOut: this.amountOut.toString(),refAmount: this.refAmount.toString(),feeAmount: this.feeAmount.toString(),vaultAAmount: this.vaultAAmount.toString(),vaultBAmount: this.vaultBAmount.toString(),beforeSqrtPrice: this.beforeSqrtPrice.toString(),afterSqrtPrice: this.afterSqrtPrice.toString(),steps: this.steps.toString(),

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
    ): SwapEvent {
        return SwapEvent.reified().new(
            {atob: decodeFromJSONField("bool", field.atob), pool: decodeFromJSONField(ID.reified(), field.pool), partner: decodeFromJSONField(ID.reified(), field.partner), amountIn: decodeFromJSONField("u64", field.amountIn), amountOut: decodeFromJSONField("u64", field.amountOut), refAmount: decodeFromJSONField("u64", field.refAmount), feeAmount: decodeFromJSONField("u64", field.feeAmount), vaultAAmount: decodeFromJSONField("u64", field.vaultAAmount), vaultBAmount: decodeFromJSONField("u64", field.vaultBAmount), beforeSqrtPrice: decodeFromJSONField("u128", field.beforeSqrtPrice), afterSqrtPrice: decodeFromJSONField("u128", field.afterSqrtPrice), steps: decodeFromJSONField("u64", field.steps)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): SwapEvent {
        if (json.$typeName !== SwapEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return SwapEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): SwapEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSwapEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SwapEvent object`);
        }
        return SwapEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<SwapEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching SwapEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSwapEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SwapEvent object`);
        }

        return SwapEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== SwapResult =============================== */

export function isSwapResult(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapResult";
}

export interface SwapResultFields {
    amountIn: ToField<"u64">; amountOut: ToField<"u64">; feeAmount: ToField<"u64">; refFeeAmount: ToField<"u64">; steps: ToField<"u64">
}

export type SwapResultReified = Reified<
    SwapResult,
    SwapResultFields
>;

export class SwapResult implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapResult";
    static readonly $numTypeParams = 0;

    readonly $typeName = SwapResult.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapResult";

    readonly $typeArgs: [];

    readonly amountIn:
        ToField<"u64">
    ; readonly amountOut:
        ToField<"u64">
    ; readonly feeAmount:
        ToField<"u64">
    ; readonly refFeeAmount:
        ToField<"u64">
    ; readonly steps:
        ToField<"u64">

    private constructor(typeArgs: [], fields: SwapResultFields,
    ) {
        this.$fullTypeName = composeSuiType(
            SwapResult.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapResult";
        this.$typeArgs = typeArgs;

        this.amountIn = fields.amountIn;; this.amountOut = fields.amountOut;; this.feeAmount = fields.feeAmount;; this.refFeeAmount = fields.refFeeAmount;; this.steps = fields.steps;
    }

    static reified(): SwapResultReified {
        return {
            typeName: SwapResult.$typeName,
            fullTypeName: composeSuiType(
                SwapResult.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapResult",
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
                bcs.u64()
            , amount_out:
                bcs.u64()
            , fee_amount:
                bcs.u64()
            , ref_fee_amount:
                bcs.u64()
            , steps:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): SwapResult {
        return SwapResult.reified().new(
            {amountIn: decodeFromFields("u64", fields.amount_in), amountOut: decodeFromFields("u64", fields.amount_out), feeAmount: decodeFromFields("u64", fields.fee_amount), refFeeAmount: decodeFromFields("u64", fields.ref_fee_amount), steps: decodeFromFields("u64", fields.steps)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): SwapResult {
        if (!isSwapResult(item.type)) {
            throw new Error("not a SwapResult type");
        }

        return SwapResult.reified().new(
            {amountIn: decodeFromFieldsWithTypes("u64", item.fields.amount_in), amountOut: decodeFromFieldsWithTypes("u64", item.fields.amount_out), feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount), refFeeAmount: decodeFromFieldsWithTypes("u64", item.fields.ref_fee_amount), steps: decodeFromFieldsWithTypes("u64", item.fields.steps)}
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
            {amountIn: decodeFromJSONField("u64", field.amountIn), amountOut: decodeFromJSONField("u64", field.amountOut), feeAmount: decodeFromJSONField("u64", field.feeAmount), refFeeAmount: decodeFromJSONField("u64", field.refFeeAmount), steps: decodeFromJSONField("u64", field.steps)}
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
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapStepResult";
}

export interface SwapStepResultFields {
    currentSqrtPrice: ToField<"u128">; targEtSqrtPrice: ToField<"u128">; currentLiquidity: ToField<"u128">; amountIn: ToField<"u64">; amountOut: ToField<"u64">; feeAmount: ToField<"u64">; remainderAmount: ToField<"u64">
}

export type SwapStepResultReified = Reified<
    SwapStepResult,
    SwapStepResultFields
>;

export class SwapStepResult implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapStepResult";
    static readonly $numTypeParams = 0;

    readonly $typeName = SwapStepResult.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapStepResult";

    readonly $typeArgs: [];

    readonly currentSqrtPrice:
        ToField<"u128">
    ; readonly targEtSqrtPrice:
        ToField<"u128">
    ; readonly currentLiquidity:
        ToField<"u128">
    ; readonly amountIn:
        ToField<"u64">
    ; readonly amountOut:
        ToField<"u64">
    ; readonly feeAmount:
        ToField<"u64">
    ; readonly remainderAmount:
        ToField<"u64">

    private constructor(typeArgs: [], fields: SwapStepResultFields,
    ) {
        this.$fullTypeName = composeSuiType(
            SwapStepResult.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapStepResult";
        this.$typeArgs = typeArgs;

        this.currentSqrtPrice = fields.currentSqrtPrice;; this.targEtSqrtPrice = fields.targEtSqrtPrice;; this.currentLiquidity = fields.currentLiquidity;; this.amountIn = fields.amountIn;; this.amountOut = fields.amountOut;; this.feeAmount = fields.feeAmount;; this.remainderAmount = fields.remainderAmount;
    }

    static reified(): SwapStepResultReified {
        return {
            typeName: SwapStepResult.$typeName,
            fullTypeName: composeSuiType(
                SwapStepResult.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::SwapStepResult",
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
                bcs.u64()
            , amount_out:
                bcs.u64()
            , fee_amount:
                bcs.u64()
            , remainder_amount:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): SwapStepResult {
        return SwapStepResult.reified().new(
            {currentSqrtPrice: decodeFromFields("u128", fields.current_sqrt_price), targEtSqrtPrice: decodeFromFields("u128", fields.targ_et_sqrt_price), currentLiquidity: decodeFromFields("u128", fields.current_liquidity), amountIn: decodeFromFields("u64", fields.amount_in), amountOut: decodeFromFields("u64", fields.amount_out), feeAmount: decodeFromFields("u64", fields.fee_amount), remainderAmount: decodeFromFields("u64", fields.remainder_amount)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): SwapStepResult {
        if (!isSwapStepResult(item.type)) {
            throw new Error("not a SwapStepResult type");
        }

        return SwapStepResult.reified().new(
            {currentSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.current_sqrt_price), targEtSqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.targ_et_sqrt_price), currentLiquidity: decodeFromFieldsWithTypes("u128", item.fields.current_liquidity), amountIn: decodeFromFieldsWithTypes("u64", item.fields.amount_in), amountOut: decodeFromFieldsWithTypes("u64", item.fields.amount_out), feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount), remainderAmount: decodeFromFieldsWithTypes("u64", item.fields.remainder_amount)}
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
            {currentSqrtPrice: decodeFromJSONField("u128", field.currentSqrtPrice), targEtSqrtPrice: decodeFromJSONField("u128", field.targEtSqrtPrice), currentLiquidity: decodeFromJSONField("u128", field.currentLiquidity), amountIn: decodeFromJSONField("u64", field.amountIn), amountOut: decodeFromJSONField("u64", field.amountOut), feeAmount: decodeFromJSONField("u64", field.feeAmount), remainderAmount: decodeFromJSONField("u64", field.remainderAmount)}
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

/* ============================== UpdateEmissionEvent =============================== */

export function isUpdateEmissionEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateEmissionEvent";
}

export interface UpdateEmissionEventFields {
    pool: ToField<ID>; rewarderType: ToField<TypeName>; emissionsPerSecond: ToField<"u128">
}

export type UpdateEmissionEventReified = Reified<
    UpdateEmissionEvent,
    UpdateEmissionEventFields
>;

export class UpdateEmissionEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateEmissionEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateEmissionEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateEmissionEvent";

    readonly $typeArgs: [];

    readonly pool:
        ToField<ID>
    ; readonly rewarderType:
        ToField<TypeName>
    ; readonly emissionsPerSecond:
        ToField<"u128">

    private constructor(typeArgs: [], fields: UpdateEmissionEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            UpdateEmissionEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateEmissionEvent";
        this.$typeArgs = typeArgs;

        this.pool = fields.pool;; this.rewarderType = fields.rewarderType;; this.emissionsPerSecond = fields.emissionsPerSecond;
    }

    static reified(): UpdateEmissionEventReified {
        return {
            typeName: UpdateEmissionEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateEmissionEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::pool::UpdateEmissionEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                UpdateEmissionEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                UpdateEmissionEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                UpdateEmissionEvent.fromBcs(
                    data,
                ),
            bcs: UpdateEmissionEvent.bcs,
            fromJSONField: (field: any) =>
                UpdateEmissionEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                UpdateEmissionEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                UpdateEmissionEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => UpdateEmissionEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: UpdateEmissionEventFields,
            ) => {
                return new UpdateEmissionEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return UpdateEmissionEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateEmissionEvent>> {
        return phantom(UpdateEmissionEvent.reified());
    }

    static get p() {
        return UpdateEmissionEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("UpdateEmissionEvent", {
            pool:
                ID.bcs
            , rewarder_type:
                TypeName.bcs
            , emissions_per_second:
                bcs.u128()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): UpdateEmissionEvent {
        return UpdateEmissionEvent.reified().new(
            {pool: decodeFromFields(ID.reified(), fields.pool), rewarderType: decodeFromFields(TypeName.reified(), fields.rewarder_type), emissionsPerSecond: decodeFromFields("u128", fields.emissions_per_second)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): UpdateEmissionEvent {
        if (!isUpdateEmissionEvent(item.type)) {
            throw new Error("not a UpdateEmissionEvent type");
        }

        return UpdateEmissionEvent.reified().new(
            {pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), rewarderType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.rewarder_type), emissionsPerSecond: decodeFromFieldsWithTypes("u128", item.fields.emissions_per_second)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): UpdateEmissionEvent {

        return UpdateEmissionEvent.fromFields(
            UpdateEmissionEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            pool: this.pool,rewarderType: this.rewarderType.toJSONField(),emissionsPerSecond: this.emissionsPerSecond.toString(),

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
    ): UpdateEmissionEvent {
        return UpdateEmissionEvent.reified().new(
            {pool: decodeFromJSONField(ID.reified(), field.pool), rewarderType: decodeFromJSONField(TypeName.reified(), field.rewarderType), emissionsPerSecond: decodeFromJSONField("u128", field.emissionsPerSecond)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): UpdateEmissionEvent {
        if (json.$typeName !== UpdateEmissionEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return UpdateEmissionEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): UpdateEmissionEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateEmissionEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateEmissionEvent object`);
        }
        return UpdateEmissionEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<UpdateEmissionEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching UpdateEmissionEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateEmissionEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateEmissionEvent object`);
        }

        return UpdateEmissionEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

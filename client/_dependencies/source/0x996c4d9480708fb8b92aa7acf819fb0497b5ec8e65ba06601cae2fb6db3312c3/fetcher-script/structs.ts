import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {PoolSimpleInfo} from "../../0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb/factory/structs";
import {CalculatedSwapResult} from "../../0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb/pool/structs";
import {PositionInfo} from "../../0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb/position/structs";
import {Tick} from "../../0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb/tick/structs";
import {ID} from "../../0x2/object/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== CalculatedSwapResultEvent =============================== */

export function isCalculatedSwapResultEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::CalculatedSwapResultEvent";
}

export interface CalculatedSwapResultEventFields {
    data: ToField<CalculatedSwapResult>
}

export type CalculatedSwapResultEventReified = Reified<
    CalculatedSwapResultEvent,
    CalculatedSwapResultEventFields
>;

export class CalculatedSwapResultEvent implements StructClass {
    static readonly $typeName = "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::CalculatedSwapResultEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CalculatedSwapResultEvent.$typeName;

    readonly $fullTypeName: "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::CalculatedSwapResultEvent";

    readonly $typeArgs: [];

    readonly data:
        ToField<CalculatedSwapResult>

    private constructor(typeArgs: [], fields: CalculatedSwapResultEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            CalculatedSwapResultEvent.$typeName,
            ...typeArgs
        ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::CalculatedSwapResultEvent";
        this.$typeArgs = typeArgs;

        this.data = fields.data;
    }

    static reified(): CalculatedSwapResultEventReified {
        return {
            typeName: CalculatedSwapResultEvent.$typeName,
            fullTypeName: composeSuiType(
                CalculatedSwapResultEvent.$typeName,
                ...[]
            ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::CalculatedSwapResultEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                CalculatedSwapResultEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                CalculatedSwapResultEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                CalculatedSwapResultEvent.fromBcs(
                    data,
                ),
            bcs: CalculatedSwapResultEvent.bcs,
            fromJSONField: (field: any) =>
                CalculatedSwapResultEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                CalculatedSwapResultEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                CalculatedSwapResultEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => CalculatedSwapResultEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: CalculatedSwapResultEventFields,
            ) => {
                return new CalculatedSwapResultEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return CalculatedSwapResultEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<CalculatedSwapResultEvent>> {
        return phantom(CalculatedSwapResultEvent.reified());
    }

    static get p() {
        return CalculatedSwapResultEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("CalculatedSwapResultEvent", {
            data:
                CalculatedSwapResult.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): CalculatedSwapResultEvent {
        return CalculatedSwapResultEvent.reified().new(
            {data: decodeFromFields(CalculatedSwapResult.reified(), fields.data)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): CalculatedSwapResultEvent {
        if (!isCalculatedSwapResultEvent(item.type)) {
            throw new Error("not a CalculatedSwapResultEvent type");
        }

        return CalculatedSwapResultEvent.reified().new(
            {data: decodeFromFieldsWithTypes(CalculatedSwapResult.reified(), item.fields.data)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): CalculatedSwapResultEvent {

        return CalculatedSwapResultEvent.fromFields(
            CalculatedSwapResultEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            data: this.data.toJSONField(),

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
    ): CalculatedSwapResultEvent {
        return CalculatedSwapResultEvent.reified().new(
            {data: decodeFromJSONField(CalculatedSwapResult.reified(), field.data)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): CalculatedSwapResultEvent {
        if (json.$typeName !== CalculatedSwapResultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return CalculatedSwapResultEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): CalculatedSwapResultEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCalculatedSwapResultEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CalculatedSwapResultEvent object`);
        }
        return CalculatedSwapResultEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<CalculatedSwapResultEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching CalculatedSwapResultEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCalculatedSwapResultEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CalculatedSwapResultEvent object`);
        }

        return CalculatedSwapResultEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== FetchPoolsEvent =============================== */

export function isFetchPoolsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPoolsEvent";
}

export interface FetchPoolsEventFields {
    pools: ToField<Vector<PoolSimpleInfo>>
}

export type FetchPoolsEventReified = Reified<
    FetchPoolsEvent,
    FetchPoolsEventFields
>;

export class FetchPoolsEvent implements StructClass {
    static readonly $typeName = "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPoolsEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = FetchPoolsEvent.$typeName;

    readonly $fullTypeName: "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPoolsEvent";

    readonly $typeArgs: [];

    readonly pools:
        ToField<Vector<PoolSimpleInfo>>

    private constructor(typeArgs: [], fields: FetchPoolsEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            FetchPoolsEvent.$typeName,
            ...typeArgs
        ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPoolsEvent";
        this.$typeArgs = typeArgs;

        this.pools = fields.pools;
    }

    static reified(): FetchPoolsEventReified {
        return {
            typeName: FetchPoolsEvent.$typeName,
            fullTypeName: composeSuiType(
                FetchPoolsEvent.$typeName,
                ...[]
            ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPoolsEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                FetchPoolsEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                FetchPoolsEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                FetchPoolsEvent.fromBcs(
                    data,
                ),
            bcs: FetchPoolsEvent.bcs,
            fromJSONField: (field: any) =>
                FetchPoolsEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                FetchPoolsEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                FetchPoolsEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => FetchPoolsEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: FetchPoolsEventFields,
            ) => {
                return new FetchPoolsEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return FetchPoolsEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<FetchPoolsEvent>> {
        return phantom(FetchPoolsEvent.reified());
    }

    static get p() {
        return FetchPoolsEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("FetchPoolsEvent", {
            pools:
                bcs.vector(PoolSimpleInfo.bcs)

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): FetchPoolsEvent {
        return FetchPoolsEvent.reified().new(
            {pools: decodeFromFields(reified.vector(PoolSimpleInfo.reified()), fields.pools)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): FetchPoolsEvent {
        if (!isFetchPoolsEvent(item.type)) {
            throw new Error("not a FetchPoolsEvent type");
        }

        return FetchPoolsEvent.reified().new(
            {pools: decodeFromFieldsWithTypes(reified.vector(PoolSimpleInfo.reified()), item.fields.pools)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): FetchPoolsEvent {

        return FetchPoolsEvent.fromFields(
            FetchPoolsEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            pools: fieldToJSON<Vector<PoolSimpleInfo>>(`vector<0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::PoolSimpleInfo>`, this.pools),

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
    ): FetchPoolsEvent {
        return FetchPoolsEvent.reified().new(
            {pools: decodeFromJSONField(reified.vector(PoolSimpleInfo.reified()), field.pools)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): FetchPoolsEvent {
        if (json.$typeName !== FetchPoolsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return FetchPoolsEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): FetchPoolsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFetchPoolsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FetchPoolsEvent object`);
        }
        return FetchPoolsEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<FetchPoolsEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching FetchPoolsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFetchPoolsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FetchPoolsEvent object`);
        }

        return FetchPoolsEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== FetchPositionFeesEvent =============================== */

export function isFetchPositionFeesEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionFeesEvent";
}

export interface FetchPositionFeesEventFields {
    positionId: ToField<ID>; feeOwnedA: ToField<"u64">; feeOwnedB: ToField<"u64">
}

export type FetchPositionFeesEventReified = Reified<
    FetchPositionFeesEvent,
    FetchPositionFeesEventFields
>;

export class FetchPositionFeesEvent implements StructClass {
    static readonly $typeName = "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionFeesEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = FetchPositionFeesEvent.$typeName;

    readonly $fullTypeName: "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionFeesEvent";

    readonly $typeArgs: [];

    readonly positionId:
        ToField<ID>
    ; readonly feeOwnedA:
        ToField<"u64">
    ; readonly feeOwnedB:
        ToField<"u64">

    private constructor(typeArgs: [], fields: FetchPositionFeesEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            FetchPositionFeesEvent.$typeName,
            ...typeArgs
        ) as "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionFeesEvent";
        this.$typeArgs = typeArgs;

        this.positionId = fields.positionId;; this.feeOwnedA = fields.feeOwnedA;; this.feeOwnedB = fields.feeOwnedB;
    }

    static reified(): FetchPositionFeesEventReified {
        return {
            typeName: FetchPositionFeesEvent.$typeName,
            fullTypeName: composeSuiType(
                FetchPositionFeesEvent.$typeName,
                ...[]
            ) as "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionFeesEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                FetchPositionFeesEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                FetchPositionFeesEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                FetchPositionFeesEvent.fromBcs(
                    data,
                ),
            bcs: FetchPositionFeesEvent.bcs,
            fromJSONField: (field: any) =>
                FetchPositionFeesEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                FetchPositionFeesEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                FetchPositionFeesEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => FetchPositionFeesEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: FetchPositionFeesEventFields,
            ) => {
                return new FetchPositionFeesEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return FetchPositionFeesEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<FetchPositionFeesEvent>> {
        return phantom(FetchPositionFeesEvent.reified());
    }

    static get p() {
        return FetchPositionFeesEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("FetchPositionFeesEvent", {
            position_id:
                ID.bcs
            , fee_owned_a:
                bcs.u64()
            , fee_owned_b:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): FetchPositionFeesEvent {
        return FetchPositionFeesEvent.reified().new(
            {positionId: decodeFromFields(ID.reified(), fields.position_id), feeOwnedA: decodeFromFields("u64", fields.fee_owned_a), feeOwnedB: decodeFromFields("u64", fields.fee_owned_b)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): FetchPositionFeesEvent {
        if (!isFetchPositionFeesEvent(item.type)) {
            throw new Error("not a FetchPositionFeesEvent type");
        }

        return FetchPositionFeesEvent.reified().new(
            {positionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.position_id), feeOwnedA: decodeFromFieldsWithTypes("u64", item.fields.fee_owned_a), feeOwnedB: decodeFromFieldsWithTypes("u64", item.fields.fee_owned_b)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): FetchPositionFeesEvent {

        return FetchPositionFeesEvent.fromFields(
            FetchPositionFeesEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            positionId: this.positionId,feeOwnedA: this.feeOwnedA.toString(),feeOwnedB: this.feeOwnedB.toString(),

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
    ): FetchPositionFeesEvent {
        return FetchPositionFeesEvent.reified().new(
            {positionId: decodeFromJSONField(ID.reified(), field.positionId), feeOwnedA: decodeFromJSONField("u64", field.feeOwnedA), feeOwnedB: decodeFromJSONField("u64", field.feeOwnedB)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): FetchPositionFeesEvent {
        if (json.$typeName !== FetchPositionFeesEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return FetchPositionFeesEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): FetchPositionFeesEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFetchPositionFeesEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FetchPositionFeesEvent object`);
        }
        return FetchPositionFeesEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<FetchPositionFeesEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching FetchPositionFeesEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFetchPositionFeesEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FetchPositionFeesEvent object`);
        }

        return FetchPositionFeesEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== FetchPositionPointsEvent =============================== */

export function isFetchPositionPointsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionPointsEvent";
}

export interface FetchPositionPointsEventFields {
    positionId: ToField<ID>; pointsOwned: ToField<"u128">
}

export type FetchPositionPointsEventReified = Reified<
    FetchPositionPointsEvent,
    FetchPositionPointsEventFields
>;

export class FetchPositionPointsEvent implements StructClass {
    static readonly $typeName = "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionPointsEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = FetchPositionPointsEvent.$typeName;

    readonly $fullTypeName: "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionPointsEvent";

    readonly $typeArgs: [];

    readonly positionId:
        ToField<ID>
    ; readonly pointsOwned:
        ToField<"u128">

    private constructor(typeArgs: [], fields: FetchPositionPointsEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            FetchPositionPointsEvent.$typeName,
            ...typeArgs
        ) as "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionPointsEvent";
        this.$typeArgs = typeArgs;

        this.positionId = fields.positionId;; this.pointsOwned = fields.pointsOwned;
    }

    static reified(): FetchPositionPointsEventReified {
        return {
            typeName: FetchPositionPointsEvent.$typeName,
            fullTypeName: composeSuiType(
                FetchPositionPointsEvent.$typeName,
                ...[]
            ) as "0x45d8b5727430ccbc1202de8fd841ca23d3c49a6ef7968286d6266e1ac2c9b4a3::fetcher_script::FetchPositionPointsEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                FetchPositionPointsEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                FetchPositionPointsEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                FetchPositionPointsEvent.fromBcs(
                    data,
                ),
            bcs: FetchPositionPointsEvent.bcs,
            fromJSONField: (field: any) =>
                FetchPositionPointsEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                FetchPositionPointsEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                FetchPositionPointsEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => FetchPositionPointsEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: FetchPositionPointsEventFields,
            ) => {
                return new FetchPositionPointsEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return FetchPositionPointsEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<FetchPositionPointsEvent>> {
        return phantom(FetchPositionPointsEvent.reified());
    }

    static get p() {
        return FetchPositionPointsEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("FetchPositionPointsEvent", {
            position_id:
                ID.bcs
            , points_owned:
                bcs.u128()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): FetchPositionPointsEvent {
        return FetchPositionPointsEvent.reified().new(
            {positionId: decodeFromFields(ID.reified(), fields.position_id), pointsOwned: decodeFromFields("u128", fields.points_owned)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): FetchPositionPointsEvent {
        if (!isFetchPositionPointsEvent(item.type)) {
            throw new Error("not a FetchPositionPointsEvent type");
        }

        return FetchPositionPointsEvent.reified().new(
            {positionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.position_id), pointsOwned: decodeFromFieldsWithTypes("u128", item.fields.points_owned)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): FetchPositionPointsEvent {

        return FetchPositionPointsEvent.fromFields(
            FetchPositionPointsEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            positionId: this.positionId,pointsOwned: this.pointsOwned.toString(),

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
    ): FetchPositionPointsEvent {
        return FetchPositionPointsEvent.reified().new(
            {positionId: decodeFromJSONField(ID.reified(), field.positionId), pointsOwned: decodeFromJSONField("u128", field.pointsOwned)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): FetchPositionPointsEvent {
        if (json.$typeName !== FetchPositionPointsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return FetchPositionPointsEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): FetchPositionPointsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFetchPositionPointsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FetchPositionPointsEvent object`);
        }
        return FetchPositionPointsEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<FetchPositionPointsEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching FetchPositionPointsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFetchPositionPointsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FetchPositionPointsEvent object`);
        }

        return FetchPositionPointsEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== FetchPositionRewardsEvent =============================== */

export function isFetchPositionRewardsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionRewardsEvent";
}

export interface FetchPositionRewardsEventFields {
    data: ToField<Vector<"u64">>; positionId: ToField<ID>
}

export type FetchPositionRewardsEventReified = Reified<
    FetchPositionRewardsEvent,
    FetchPositionRewardsEventFields
>;

export class FetchPositionRewardsEvent implements StructClass {
    static readonly $typeName = "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionRewardsEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = FetchPositionRewardsEvent.$typeName;

    readonly $fullTypeName: "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionRewardsEvent";

    readonly $typeArgs: [];

    readonly data:
        ToField<Vector<"u64">>
    ; readonly positionId:
        ToField<ID>

    private constructor(typeArgs: [], fields: FetchPositionRewardsEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            FetchPositionRewardsEvent.$typeName,
            ...typeArgs
        ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionRewardsEvent";
        this.$typeArgs = typeArgs;

        this.data = fields.data;; this.positionId = fields.positionId;
    }

    static reified(): FetchPositionRewardsEventReified {
        return {
            typeName: FetchPositionRewardsEvent.$typeName,
            fullTypeName: composeSuiType(
                FetchPositionRewardsEvent.$typeName,
                ...[]
            ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionRewardsEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                FetchPositionRewardsEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                FetchPositionRewardsEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                FetchPositionRewardsEvent.fromBcs(
                    data,
                ),
            bcs: FetchPositionRewardsEvent.bcs,
            fromJSONField: (field: any) =>
                FetchPositionRewardsEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                FetchPositionRewardsEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                FetchPositionRewardsEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => FetchPositionRewardsEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: FetchPositionRewardsEventFields,
            ) => {
                return new FetchPositionRewardsEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return FetchPositionRewardsEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<FetchPositionRewardsEvent>> {
        return phantom(FetchPositionRewardsEvent.reified());
    }

    static get p() {
        return FetchPositionRewardsEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("FetchPositionRewardsEvent", {
            data:
                bcs.vector(bcs.u64())
            , position_id:
                ID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): FetchPositionRewardsEvent {
        return FetchPositionRewardsEvent.reified().new(
            {data: decodeFromFields(reified.vector("u64"), fields.data), positionId: decodeFromFields(ID.reified(), fields.position_id)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): FetchPositionRewardsEvent {
        if (!isFetchPositionRewardsEvent(item.type)) {
            throw new Error("not a FetchPositionRewardsEvent type");
        }

        return FetchPositionRewardsEvent.reified().new(
            {data: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.data), positionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.position_id)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): FetchPositionRewardsEvent {

        return FetchPositionRewardsEvent.fromFields(
            FetchPositionRewardsEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            data: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.data),positionId: this.positionId,

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
    ): FetchPositionRewardsEvent {
        return FetchPositionRewardsEvent.reified().new(
            {data: decodeFromJSONField(reified.vector("u64"), field.data), positionId: decodeFromJSONField(ID.reified(), field.positionId)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): FetchPositionRewardsEvent {
        if (json.$typeName !== FetchPositionRewardsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return FetchPositionRewardsEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): FetchPositionRewardsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFetchPositionRewardsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FetchPositionRewardsEvent object`);
        }
        return FetchPositionRewardsEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<FetchPositionRewardsEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching FetchPositionRewardsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFetchPositionRewardsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FetchPositionRewardsEvent object`);
        }

        return FetchPositionRewardsEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== FetchPositionsEvent =============================== */

export function isFetchPositionsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionsEvent";
}

export interface FetchPositionsEventFields {
    positions: ToField<Vector<PositionInfo>>
}

export type FetchPositionsEventReified = Reified<
    FetchPositionsEvent,
    FetchPositionsEventFields
>;

export class FetchPositionsEvent implements StructClass {
    static readonly $typeName = "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionsEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = FetchPositionsEvent.$typeName;

    readonly $fullTypeName: "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionsEvent";

    readonly $typeArgs: [];

    readonly positions:
        ToField<Vector<PositionInfo>>

    private constructor(typeArgs: [], fields: FetchPositionsEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            FetchPositionsEvent.$typeName,
            ...typeArgs
        ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionsEvent";
        this.$typeArgs = typeArgs;

        this.positions = fields.positions;
    }

    static reified(): FetchPositionsEventReified {
        return {
            typeName: FetchPositionsEvent.$typeName,
            fullTypeName: composeSuiType(
                FetchPositionsEvent.$typeName,
                ...[]
            ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchPositionsEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                FetchPositionsEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                FetchPositionsEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                FetchPositionsEvent.fromBcs(
                    data,
                ),
            bcs: FetchPositionsEvent.bcs,
            fromJSONField: (field: any) =>
                FetchPositionsEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                FetchPositionsEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                FetchPositionsEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => FetchPositionsEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: FetchPositionsEventFields,
            ) => {
                return new FetchPositionsEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return FetchPositionsEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<FetchPositionsEvent>> {
        return phantom(FetchPositionsEvent.reified());
    }

    static get p() {
        return FetchPositionsEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("FetchPositionsEvent", {
            positions:
                bcs.vector(PositionInfo.bcs)

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): FetchPositionsEvent {
        return FetchPositionsEvent.reified().new(
            {positions: decodeFromFields(reified.vector(PositionInfo.reified()), fields.positions)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): FetchPositionsEvent {
        if (!isFetchPositionsEvent(item.type)) {
            throw new Error("not a FetchPositionsEvent type");
        }

        return FetchPositionsEvent.reified().new(
            {positions: decodeFromFieldsWithTypes(reified.vector(PositionInfo.reified()), item.fields.positions)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): FetchPositionsEvent {

        return FetchPositionsEvent.fromFields(
            FetchPositionsEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            positions: fieldToJSON<Vector<PositionInfo>>(`vector<0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionInfo>`, this.positions),

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
    ): FetchPositionsEvent {
        return FetchPositionsEvent.reified().new(
            {positions: decodeFromJSONField(reified.vector(PositionInfo.reified()), field.positions)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): FetchPositionsEvent {
        if (json.$typeName !== FetchPositionsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return FetchPositionsEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): FetchPositionsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFetchPositionsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FetchPositionsEvent object`);
        }
        return FetchPositionsEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<FetchPositionsEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching FetchPositionsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFetchPositionsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FetchPositionsEvent object`);
        }

        return FetchPositionsEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== FetchTicksResultEvent =============================== */

export function isFetchTicksResultEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchTicksResultEvent";
}

export interface FetchTicksResultEventFields {
    ticks: ToField<Vector<Tick>>
}

export type FetchTicksResultEventReified = Reified<
    FetchTicksResultEvent,
    FetchTicksResultEventFields
>;

export class FetchTicksResultEvent implements StructClass {
    static readonly $typeName = "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchTicksResultEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = FetchTicksResultEvent.$typeName;

    readonly $fullTypeName: "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchTicksResultEvent";

    readonly $typeArgs: [];

    readonly ticks:
        ToField<Vector<Tick>>

    private constructor(typeArgs: [], fields: FetchTicksResultEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            FetchTicksResultEvent.$typeName,
            ...typeArgs
        ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchTicksResultEvent";
        this.$typeArgs = typeArgs;

        this.ticks = fields.ticks;
    }

    static reified(): FetchTicksResultEventReified {
        return {
            typeName: FetchTicksResultEvent.$typeName,
            fullTypeName: composeSuiType(
                FetchTicksResultEvent.$typeName,
                ...[]
            ) as "0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3::fetcher_script::FetchTicksResultEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                FetchTicksResultEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                FetchTicksResultEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                FetchTicksResultEvent.fromBcs(
                    data,
                ),
            bcs: FetchTicksResultEvent.bcs,
            fromJSONField: (field: any) =>
                FetchTicksResultEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                FetchTicksResultEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                FetchTicksResultEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => FetchTicksResultEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: FetchTicksResultEventFields,
            ) => {
                return new FetchTicksResultEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return FetchTicksResultEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<FetchTicksResultEvent>> {
        return phantom(FetchTicksResultEvent.reified());
    }

    static get p() {
        return FetchTicksResultEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("FetchTicksResultEvent", {
            ticks:
                bcs.vector(Tick.bcs)

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): FetchTicksResultEvent {
        return FetchTicksResultEvent.reified().new(
            {ticks: decodeFromFields(reified.vector(Tick.reified()), fields.ticks)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): FetchTicksResultEvent {
        if (!isFetchTicksResultEvent(item.type)) {
            throw new Error("not a FetchTicksResultEvent type");
        }

        return FetchTicksResultEvent.reified().new(
            {ticks: decodeFromFieldsWithTypes(reified.vector(Tick.reified()), item.fields.ticks)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): FetchTicksResultEvent {

        return FetchTicksResultEvent.fromFields(
            FetchTicksResultEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            ticks: fieldToJSON<Vector<Tick>>(`vector<0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::Tick>`, this.ticks),

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
    ): FetchTicksResultEvent {
        return FetchTicksResultEvent.reified().new(
            {ticks: decodeFromJSONField(reified.vector(Tick.reified()), field.ticks)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): FetchTicksResultEvent {
        if (json.$typeName !== FetchTicksResultEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return FetchTicksResultEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): FetchTicksResultEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFetchTicksResultEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FetchTicksResultEvent object`);
        }
        return FetchTicksResultEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<FetchTicksResultEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching FetchTicksResultEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFetchTicksResultEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FetchTicksResultEvent object`);
        }

        return FetchTicksResultEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

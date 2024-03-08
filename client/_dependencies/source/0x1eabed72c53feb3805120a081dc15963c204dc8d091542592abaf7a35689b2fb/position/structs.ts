import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {TypeName} from "../../0x1/type-name/structs";
import {ID, UID} from "../../0x2/object/structs";
import {I32} from "../../0x714a63a0dba6da4f017b42d5d0fb78867f18bcde904868e51d951a5a6f5b7f57/i32/structs";
import {LinkedTable} from "../../0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa/linked-table/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== POSITION =============================== */

export function isPOSITION(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::POSITION";
}

export interface POSITIONFields {
    dummyField: ToField<"bool">
}

export type POSITIONReified = Reified<
    POSITION,
    POSITIONFields
>;

export class POSITION implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::POSITION";
    static readonly $numTypeParams = 0;

    readonly $typeName = POSITION.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::POSITION";

    readonly $typeArgs: [];

    readonly dummyField:
        ToField<"bool">

    private constructor(typeArgs: [], fields: POSITIONFields,
    ) {
        this.$fullTypeName = composeSuiType(
            POSITION.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::POSITION";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): POSITIONReified {
        return {
            typeName: POSITION.$typeName,
            fullTypeName: composeSuiType(
                POSITION.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::POSITION",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                POSITION.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                POSITION.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                POSITION.fromBcs(
                    data,
                ),
            bcs: POSITION.bcs,
            fromJSONField: (field: any) =>
                POSITION.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                POSITION.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                POSITION.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => POSITION.fetch(
                client,
                id,
            ),
            new: (
                fields: POSITIONFields,
            ) => {
                return new POSITION(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return POSITION.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<POSITION>> {
        return phantom(POSITION.reified());
    }

    static get p() {
        return POSITION.phantom()
    }

    static get bcs() {
        return bcs.struct("POSITION", {
            dummy_field:
                bcs.bool()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): POSITION {
        return POSITION.reified().new(
            {dummyField: decodeFromFields("bool", fields.dummy_field)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): POSITION {
        if (!isPOSITION(item.type)) {
            throw new Error("not a POSITION type");
        }

        return POSITION.reified().new(
            {dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): POSITION {

        return POSITION.fromFields(
            POSITION.bcs.parse(data)
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
    ): POSITION {
        return POSITION.reified().new(
            {dummyField: decodeFromJSONField("bool", field.dummyField)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): POSITION {
        if (json.$typeName !== POSITION.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return POSITION.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): POSITION {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPOSITION(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a POSITION object`);
        }
        return POSITION.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<POSITION> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching POSITION object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPOSITION(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a POSITION object`);
        }

        return POSITION.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Position =============================== */

export function isPosition(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::Position";
}

export interface PositionFields {
    id: ToField<UID>; pool: ToField<ID>; index: ToField<"u64">; coinTypeA: ToField<TypeName>; coinTypeB: ToField<TypeName>; name: ToField<String>; description: ToField<String>; url: ToField<String>; tickLowerIndex: ToField<I32>; tickUpperIndex: ToField<I32>; liquidity: ToField<"u128">
}

export type PositionReified = Reified<
    Position,
    PositionFields
>;

export class Position implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::Position";
    static readonly $numTypeParams = 0;

    readonly $typeName = Position.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::Position";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly pool:
        ToField<ID>
    ; readonly index:
        ToField<"u64">
    ; readonly coinTypeA:
        ToField<TypeName>
    ; readonly coinTypeB:
        ToField<TypeName>
    ; readonly name:
        ToField<String>
    ; readonly description:
        ToField<String>
    ; readonly url:
        ToField<String>
    ; readonly tickLowerIndex:
        ToField<I32>
    ; readonly tickUpperIndex:
        ToField<I32>
    ; readonly liquidity:
        ToField<"u128">

    private constructor(typeArgs: [], fields: PositionFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Position.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::Position";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.pool = fields.pool;; this.index = fields.index;; this.coinTypeA = fields.coinTypeA;; this.coinTypeB = fields.coinTypeB;; this.name = fields.name;; this.description = fields.description;; this.url = fields.url;; this.tickLowerIndex = fields.tickLowerIndex;; this.tickUpperIndex = fields.tickUpperIndex;; this.liquidity = fields.liquidity;
    }

    static reified(): PositionReified {
        return {
            typeName: Position.$typeName,
            fullTypeName: composeSuiType(
                Position.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::Position",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Position.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Position.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Position.fromBcs(
                    data,
                ),
            bcs: Position.bcs,
            fromJSONField: (field: any) =>
                Position.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Position.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Position.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Position.fetch(
                client,
                id,
            ),
            new: (
                fields: PositionFields,
            ) => {
                return new Position(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Position.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Position>> {
        return phantom(Position.reified());
    }

    static get p() {
        return Position.phantom()
    }

    static get bcs() {
        return bcs.struct("Position", {
            id:
                UID.bcs
            , pool:
                ID.bcs
            , index:
                bcs.u64()
            , coin_type_a:
                TypeName.bcs
            , coin_type_b:
                TypeName.bcs
            , name:
                String.bcs
            , description:
                String.bcs
            , url:
                String.bcs
            , tick_lower_index:
                I32.bcs
            , tick_upper_index:
                I32.bcs
            , liquidity:
                bcs.u128()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Position {
        return Position.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), pool: decodeFromFields(ID.reified(), fields.pool), index: decodeFromFields("u64", fields.index), coinTypeA: decodeFromFields(TypeName.reified(), fields.coin_type_a), coinTypeB: decodeFromFields(TypeName.reified(), fields.coin_type_b), name: decodeFromFields(String.reified(), fields.name), description: decodeFromFields(String.reified(), fields.description), url: decodeFromFields(String.reified(), fields.url), tickLowerIndex: decodeFromFields(I32.reified(), fields.tick_lower_index), tickUpperIndex: decodeFromFields(I32.reified(), fields.tick_upper_index), liquidity: decodeFromFields("u128", fields.liquidity)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Position {
        if (!isPosition(item.type)) {
            throw new Error("not a Position type");
        }

        return Position.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), index: decodeFromFieldsWithTypes("u64", item.fields.index), coinTypeA: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_a), coinTypeB: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_b), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), description: decodeFromFieldsWithTypes(String.reified(), item.fields.description), url: decodeFromFieldsWithTypes(String.reified(), item.fields.url), tickLowerIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower_index), tickUpperIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper_index), liquidity: decodeFromFieldsWithTypes("u128", item.fields.liquidity)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Position {

        return Position.fromFields(
            Position.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,pool: this.pool,index: this.index.toString(),coinTypeA: this.coinTypeA.toJSONField(),coinTypeB: this.coinTypeB.toJSONField(),name: this.name,description: this.description,url: this.url,tickLowerIndex: this.tickLowerIndex.toJSONField(),tickUpperIndex: this.tickUpperIndex.toJSONField(),liquidity: this.liquidity.toString(),

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
    ): Position {
        return Position.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), pool: decodeFromJSONField(ID.reified(), field.pool), index: decodeFromJSONField("u64", field.index), coinTypeA: decodeFromJSONField(TypeName.reified(), field.coinTypeA), coinTypeB: decodeFromJSONField(TypeName.reified(), field.coinTypeB), name: decodeFromJSONField(String.reified(), field.name), description: decodeFromJSONField(String.reified(), field.description), url: decodeFromJSONField(String.reified(), field.url), tickLowerIndex: decodeFromJSONField(I32.reified(), field.tickLowerIndex), tickUpperIndex: decodeFromJSONField(I32.reified(), field.tickUpperIndex), liquidity: decodeFromJSONField("u128", field.liquidity)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Position {
        if (json.$typeName !== Position.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Position.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Position {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPosition(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Position object`);
        }
        return Position.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Position> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Position object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPosition(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Position object`);
        }

        return Position.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PositionInfo =============================== */

export function isPositionInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionInfo";
}

export interface PositionInfoFields {
    positionId: ToField<ID>; liquidity: ToField<"u128">; tickLowerIndex: ToField<I32>; tickUpperIndex: ToField<I32>; feeGrowthInsideA: ToField<"u128">; feeGrowthInsideB: ToField<"u128">; feeOwnedA: ToField<"u64">; feeOwnedB: ToField<"u64">; pointsOwned: ToField<"u128">; pointsGrowthInside: ToField<"u128">; rewards: ToField<Vector<PositionReward>>
}

export type PositionInfoReified = Reified<
    PositionInfo,
    PositionInfoFields
>;

export class PositionInfo implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = PositionInfo.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionInfo";

    readonly $typeArgs: [];

    readonly positionId:
        ToField<ID>
    ; readonly liquidity:
        ToField<"u128">
    ; readonly tickLowerIndex:
        ToField<I32>
    ; readonly tickUpperIndex:
        ToField<I32>
    ; readonly feeGrowthInsideA:
        ToField<"u128">
    ; readonly feeGrowthInsideB:
        ToField<"u128">
    ; readonly feeOwnedA:
        ToField<"u64">
    ; readonly feeOwnedB:
        ToField<"u64">
    ; readonly pointsOwned:
        ToField<"u128">
    ; readonly pointsGrowthInside:
        ToField<"u128">
    ; readonly rewards:
        ToField<Vector<PositionReward>>

    private constructor(typeArgs: [], fields: PositionInfoFields,
    ) {
        this.$fullTypeName = composeSuiType(
            PositionInfo.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionInfo";
        this.$typeArgs = typeArgs;

        this.positionId = fields.positionId;; this.liquidity = fields.liquidity;; this.tickLowerIndex = fields.tickLowerIndex;; this.tickUpperIndex = fields.tickUpperIndex;; this.feeGrowthInsideA = fields.feeGrowthInsideA;; this.feeGrowthInsideB = fields.feeGrowthInsideB;; this.feeOwnedA = fields.feeOwnedA;; this.feeOwnedB = fields.feeOwnedB;; this.pointsOwned = fields.pointsOwned;; this.pointsGrowthInside = fields.pointsGrowthInside;; this.rewards = fields.rewards;
    }

    static reified(): PositionInfoReified {
        return {
            typeName: PositionInfo.$typeName,
            fullTypeName: composeSuiType(
                PositionInfo.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                PositionInfo.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PositionInfo.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PositionInfo.fromBcs(
                    data,
                ),
            bcs: PositionInfo.bcs,
            fromJSONField: (field: any) =>
                PositionInfo.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PositionInfo.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PositionInfo.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PositionInfo.fetch(
                client,
                id,
            ),
            new: (
                fields: PositionInfoFields,
            ) => {
                return new PositionInfo(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PositionInfo.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<PositionInfo>> {
        return phantom(PositionInfo.reified());
    }

    static get p() {
        return PositionInfo.phantom()
    }

    static get bcs() {
        return bcs.struct("PositionInfo", {
            position_id:
                ID.bcs
            , liquidity:
                bcs.u128()
            , tick_lower_index:
                I32.bcs
            , tick_upper_index:
                I32.bcs
            , fee_growth_inside_a:
                bcs.u128()
            , fee_growth_inside_b:
                bcs.u128()
            , fee_owned_a:
                bcs.u64()
            , fee_owned_b:
                bcs.u64()
            , points_owned:
                bcs.u128()
            , points_growth_inside:
                bcs.u128()
            , rewards:
                bcs.vector(PositionReward.bcs)

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): PositionInfo {
        return PositionInfo.reified().new(
            {positionId: decodeFromFields(ID.reified(), fields.position_id), liquidity: decodeFromFields("u128", fields.liquidity), tickLowerIndex: decodeFromFields(I32.reified(), fields.tick_lower_index), tickUpperIndex: decodeFromFields(I32.reified(), fields.tick_upper_index), feeGrowthInsideA: decodeFromFields("u128", fields.fee_growth_inside_a), feeGrowthInsideB: decodeFromFields("u128", fields.fee_growth_inside_b), feeOwnedA: decodeFromFields("u64", fields.fee_owned_a), feeOwnedB: decodeFromFields("u64", fields.fee_owned_b), pointsOwned: decodeFromFields("u128", fields.points_owned), pointsGrowthInside: decodeFromFields("u128", fields.points_growth_inside), rewards: decodeFromFields(reified.vector(PositionReward.reified()), fields.rewards)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): PositionInfo {
        if (!isPositionInfo(item.type)) {
            throw new Error("not a PositionInfo type");
        }

        return PositionInfo.reified().new(
            {positionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.position_id), liquidity: decodeFromFieldsWithTypes("u128", item.fields.liquidity), tickLowerIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower_index), tickUpperIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper_index), feeGrowthInsideA: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_inside_a), feeGrowthInsideB: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_inside_b), feeOwnedA: decodeFromFieldsWithTypes("u64", item.fields.fee_owned_a), feeOwnedB: decodeFromFieldsWithTypes("u64", item.fields.fee_owned_b), pointsOwned: decodeFromFieldsWithTypes("u128", item.fields.points_owned), pointsGrowthInside: decodeFromFieldsWithTypes("u128", item.fields.points_growth_inside), rewards: decodeFromFieldsWithTypes(reified.vector(PositionReward.reified()), item.fields.rewards)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): PositionInfo {

        return PositionInfo.fromFields(
            PositionInfo.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            positionId: this.positionId,liquidity: this.liquidity.toString(),tickLowerIndex: this.tickLowerIndex.toJSONField(),tickUpperIndex: this.tickUpperIndex.toJSONField(),feeGrowthInsideA: this.feeGrowthInsideA.toString(),feeGrowthInsideB: this.feeGrowthInsideB.toString(),feeOwnedA: this.feeOwnedA.toString(),feeOwnedB: this.feeOwnedB.toString(),pointsOwned: this.pointsOwned.toString(),pointsGrowthInside: this.pointsGrowthInside.toString(),rewards: fieldToJSON<Vector<PositionReward>>(`vector<0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionReward>`, this.rewards),

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
    ): PositionInfo {
        return PositionInfo.reified().new(
            {positionId: decodeFromJSONField(ID.reified(), field.positionId), liquidity: decodeFromJSONField("u128", field.liquidity), tickLowerIndex: decodeFromJSONField(I32.reified(), field.tickLowerIndex), tickUpperIndex: decodeFromJSONField(I32.reified(), field.tickUpperIndex), feeGrowthInsideA: decodeFromJSONField("u128", field.feeGrowthInsideA), feeGrowthInsideB: decodeFromJSONField("u128", field.feeGrowthInsideB), feeOwnedA: decodeFromJSONField("u64", field.feeOwnedA), feeOwnedB: decodeFromJSONField("u64", field.feeOwnedB), pointsOwned: decodeFromJSONField("u128", field.pointsOwned), pointsGrowthInside: decodeFromJSONField("u128", field.pointsGrowthInside), rewards: decodeFromJSONField(reified.vector(PositionReward.reified()), field.rewards)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): PositionInfo {
        if (json.$typeName !== PositionInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return PositionInfo.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): PositionInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPositionInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PositionInfo object`);
        }
        return PositionInfo.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<PositionInfo> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PositionInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPositionInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PositionInfo object`);
        }

        return PositionInfo.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PositionManager =============================== */

export function isPositionManager(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionManager";
}

export interface PositionManagerFields {
    tickSpacing: ToField<"u32">; positionIndex: ToField<"u64">; positions: ToField<LinkedTable<ID, ToPhantom<PositionInfo>>>
}

export type PositionManagerReified = Reified<
    PositionManager,
    PositionManagerFields
>;

export class PositionManager implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionManager";
    static readonly $numTypeParams = 0;

    readonly $typeName = PositionManager.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionManager";

    readonly $typeArgs: [];

    readonly tickSpacing:
        ToField<"u32">
    ; readonly positionIndex:
        ToField<"u64">
    ; readonly positions:
        ToField<LinkedTable<ID, ToPhantom<PositionInfo>>>

    private constructor(typeArgs: [], fields: PositionManagerFields,
    ) {
        this.$fullTypeName = composeSuiType(
            PositionManager.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionManager";
        this.$typeArgs = typeArgs;

        this.tickSpacing = fields.tickSpacing;; this.positionIndex = fields.positionIndex;; this.positions = fields.positions;
    }

    static reified(): PositionManagerReified {
        return {
            typeName: PositionManager.$typeName,
            fullTypeName: composeSuiType(
                PositionManager.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionManager",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                PositionManager.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PositionManager.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PositionManager.fromBcs(
                    data,
                ),
            bcs: PositionManager.bcs,
            fromJSONField: (field: any) =>
                PositionManager.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PositionManager.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PositionManager.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PositionManager.fetch(
                client,
                id,
            ),
            new: (
                fields: PositionManagerFields,
            ) => {
                return new PositionManager(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PositionManager.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<PositionManager>> {
        return phantom(PositionManager.reified());
    }

    static get p() {
        return PositionManager.phantom()
    }

    static get bcs() {
        return bcs.struct("PositionManager", {
            tick_spacing:
                bcs.u32()
            , position_index:
                bcs.u64()
            , positions:
                LinkedTable.bcs(ID.bcs)

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): PositionManager {
        return PositionManager.reified().new(
            {tickSpacing: decodeFromFields("u32", fields.tick_spacing), positionIndex: decodeFromFields("u64", fields.position_index), positions: decodeFromFields(LinkedTable.reified(ID.reified(), reified.phantom(PositionInfo.reified())), fields.positions)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): PositionManager {
        if (!isPositionManager(item.type)) {
            throw new Error("not a PositionManager type");
        }

        return PositionManager.reified().new(
            {tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing), positionIndex: decodeFromFieldsWithTypes("u64", item.fields.position_index), positions: decodeFromFieldsWithTypes(LinkedTable.reified(ID.reified(), reified.phantom(PositionInfo.reified())), item.fields.positions)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): PositionManager {

        return PositionManager.fromFields(
            PositionManager.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            tickSpacing: this.tickSpacing,positionIndex: this.positionIndex.toString(),positions: this.positions.toJSONField(),

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
    ): PositionManager {
        return PositionManager.reified().new(
            {tickSpacing: decodeFromJSONField("u32", field.tickSpacing), positionIndex: decodeFromJSONField("u64", field.positionIndex), positions: decodeFromJSONField(LinkedTable.reified(ID.reified(), reified.phantom(PositionInfo.reified())), field.positions)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): PositionManager {
        if (json.$typeName !== PositionManager.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return PositionManager.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): PositionManager {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPositionManager(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PositionManager object`);
        }
        return PositionManager.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<PositionManager> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PositionManager object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPositionManager(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PositionManager object`);
        }

        return PositionManager.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PositionReward =============================== */

export function isPositionReward(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionReward";
}

export interface PositionRewardFields {
    growthInside: ToField<"u128">; amountOwned: ToField<"u64">
}

export type PositionRewardReified = Reified<
    PositionReward,
    PositionRewardFields
>;

export class PositionReward implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionReward";
    static readonly $numTypeParams = 0;

    readonly $typeName = PositionReward.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionReward";

    readonly $typeArgs: [];

    readonly growthInside:
        ToField<"u128">
    ; readonly amountOwned:
        ToField<"u64">

    private constructor(typeArgs: [], fields: PositionRewardFields,
    ) {
        this.$fullTypeName = composeSuiType(
            PositionReward.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionReward";
        this.$typeArgs = typeArgs;

        this.growthInside = fields.growthInside;; this.amountOwned = fields.amountOwned;
    }

    static reified(): PositionRewardReified {
        return {
            typeName: PositionReward.$typeName,
            fullTypeName: composeSuiType(
                PositionReward.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::position::PositionReward",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                PositionReward.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PositionReward.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PositionReward.fromBcs(
                    data,
                ),
            bcs: PositionReward.bcs,
            fromJSONField: (field: any) =>
                PositionReward.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PositionReward.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PositionReward.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PositionReward.fetch(
                client,
                id,
            ),
            new: (
                fields: PositionRewardFields,
            ) => {
                return new PositionReward(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PositionReward.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<PositionReward>> {
        return phantom(PositionReward.reified());
    }

    static get p() {
        return PositionReward.phantom()
    }

    static get bcs() {
        return bcs.struct("PositionReward", {
            growth_inside:
                bcs.u128()
            , amount_owned:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): PositionReward {
        return PositionReward.reified().new(
            {growthInside: decodeFromFields("u128", fields.growth_inside), amountOwned: decodeFromFields("u64", fields.amount_owned)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): PositionReward {
        if (!isPositionReward(item.type)) {
            throw new Error("not a PositionReward type");
        }

        return PositionReward.reified().new(
            {growthInside: decodeFromFieldsWithTypes("u128", item.fields.growth_inside), amountOwned: decodeFromFieldsWithTypes("u64", item.fields.amount_owned)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): PositionReward {

        return PositionReward.fromFields(
            PositionReward.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            growthInside: this.growthInside.toString(),amountOwned: this.amountOwned.toString(),

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
    ): PositionReward {
        return PositionReward.reified().new(
            {growthInside: decodeFromJSONField("u128", field.growthInside), amountOwned: decodeFromJSONField("u64", field.amountOwned)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): PositionReward {
        if (json.$typeName !== PositionReward.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return PositionReward.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): PositionReward {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPositionReward(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PositionReward object`);
        }
        return PositionReward.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<PositionReward> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PositionReward object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPositionReward(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PositionReward object`);
        }

        return PositionReward.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

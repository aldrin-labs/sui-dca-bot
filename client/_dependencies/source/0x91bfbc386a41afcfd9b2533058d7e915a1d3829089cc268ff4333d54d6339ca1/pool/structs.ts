import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {Balance} from "../../0x2/balance/structs";
import {UID} from "../../0x2/object/structs";
import {Table} from "../../0x2/table/structs";
import {I128} from "../i128/structs";
import {I32} from "../i32/structs";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Versioned =============================== */

export function isVersioned(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned";
}

export interface VersionedFields {
    id: ToField<UID>; version: ToField<"u64">
}

export type VersionedReified = Reified<
    Versioned,
    VersionedFields
>;

export class Versioned implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned";
    static readonly $numTypeParams = 0;

    readonly $typeName = Versioned.$typeName;

    readonly $fullTypeName: "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly version:
        ToField<"u64">

    private constructor(typeArgs: [], fields: VersionedFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Versioned.$typeName,
            ...typeArgs
        ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.version = fields.version;
    }

    static reified(): VersionedReified {
        return {
            typeName: Versioned.$typeName,
            fullTypeName: composeSuiType(
                Versioned.$typeName,
                ...[]
            ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Versioned.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Versioned.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Versioned.fromBcs(
                    data,
                ),
            bcs: Versioned.bcs,
            fromJSONField: (field: any) =>
                Versioned.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Versioned.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Versioned.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Versioned.fetch(
                client,
                id,
            ),
            new: (
                fields: VersionedFields,
            ) => {
                return new Versioned(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Versioned.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Versioned>> {
        return phantom(Versioned.reified());
    }

    static get p() {
        return Versioned.phantom()
    }

    static get bcs() {
        return bcs.struct("Versioned", {
            id:
                UID.bcs
            , version:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Versioned {
        return Versioned.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Versioned {
        if (!isVersioned(item.type)) {
            throw new Error("not a Versioned type");
        }

        return Versioned.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Versioned {

        return Versioned.fromFields(
            Versioned.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,version: this.version.toString(),

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
    ): Versioned {
        return Versioned.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Versioned {
        if (json.$typeName !== Versioned.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Versioned.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Versioned {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isVersioned(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Versioned object`);
        }
        return Versioned.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Versioned> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Versioned object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isVersioned(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Versioned object`);
        }

        return Versioned.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Position =============================== */

export function isPosition(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position";
}

export interface PositionFields {
    id: ToField<UID>; liquidity: ToField<"u128">; feeGrowthInsideA: ToField<"u128">; feeGrowthInsideB: ToField<"u128">; tokensOwedA: ToField<"u64">; tokensOwedB: ToField<"u64">; rewardInfos: ToField<Vector<PositionRewardInfo>>
}

export type PositionReified = Reified<
    Position,
    PositionFields
>;

export class Position implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position";
    static readonly $numTypeParams = 0;

    readonly $typeName = Position.$typeName;

    readonly $fullTypeName: "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly liquidity:
        ToField<"u128">
    ; readonly feeGrowthInsideA:
        ToField<"u128">
    ; readonly feeGrowthInsideB:
        ToField<"u128">
    ; readonly tokensOwedA:
        ToField<"u64">
    ; readonly tokensOwedB:
        ToField<"u64">
    ; readonly rewardInfos:
        ToField<Vector<PositionRewardInfo>>

    private constructor(typeArgs: [], fields: PositionFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Position.$typeName,
            ...typeArgs
        ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.liquidity = fields.liquidity;; this.feeGrowthInsideA = fields.feeGrowthInsideA;; this.feeGrowthInsideB = fields.feeGrowthInsideB;; this.tokensOwedA = fields.tokensOwedA;; this.tokensOwedB = fields.tokensOwedB;; this.rewardInfos = fields.rewardInfos;
    }

    static reified(): PositionReified {
        return {
            typeName: Position.$typeName,
            fullTypeName: composeSuiType(
                Position.$typeName,
                ...[]
            ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position",
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
            , liquidity:
                bcs.u128()
            , fee_growth_inside_a:
                bcs.u128()
            , fee_growth_inside_b:
                bcs.u128()
            , tokens_owed_a:
                bcs.u64()
            , tokens_owed_b:
                bcs.u64()
            , reward_infos:
                bcs.vector(PositionRewardInfo.bcs)

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Position {
        return Position.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), liquidity: decodeFromFields("u128", fields.liquidity), feeGrowthInsideA: decodeFromFields("u128", fields.fee_growth_inside_a), feeGrowthInsideB: decodeFromFields("u128", fields.fee_growth_inside_b), tokensOwedA: decodeFromFields("u64", fields.tokens_owed_a), tokensOwedB: decodeFromFields("u64", fields.tokens_owed_b), rewardInfos: decodeFromFields(reified.vector(PositionRewardInfo.reified()), fields.reward_infos)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Position {
        if (!isPosition(item.type)) {
            throw new Error("not a Position type");
        }

        return Position.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), liquidity: decodeFromFieldsWithTypes("u128", item.fields.liquidity), feeGrowthInsideA: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_inside_a), feeGrowthInsideB: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_inside_b), tokensOwedA: decodeFromFieldsWithTypes("u64", item.fields.tokens_owed_a), tokensOwedB: decodeFromFieldsWithTypes("u64", item.fields.tokens_owed_b), rewardInfos: decodeFromFieldsWithTypes(reified.vector(PositionRewardInfo.reified()), item.fields.reward_infos)}
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
            id: this.id,liquidity: this.liquidity.toString(),feeGrowthInsideA: this.feeGrowthInsideA.toString(),feeGrowthInsideB: this.feeGrowthInsideB.toString(),tokensOwedA: this.tokensOwedA.toString(),tokensOwedB: this.tokensOwedB.toString(),rewardInfos: fieldToJSON<Vector<PositionRewardInfo>>(`vector<0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo>`, this.rewardInfos),

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
            {id: decodeFromJSONField(UID.reified(), field.id), liquidity: decodeFromJSONField("u128", field.liquidity), feeGrowthInsideA: decodeFromJSONField("u128", field.feeGrowthInsideA), feeGrowthInsideB: decodeFromJSONField("u128", field.feeGrowthInsideB), tokensOwedA: decodeFromJSONField("u64", field.tokensOwedA), tokensOwedB: decodeFromJSONField("u64", field.tokensOwedB), rewardInfos: decodeFromJSONField(reified.vector(PositionRewardInfo.reified()), field.rewardInfos)}
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

/* ============================== Tick =============================== */

export function isTick(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick";
}

export interface TickFields {
    id: ToField<UID>; liquidityGross: ToField<"u128">; liquidityNet: ToField<I128>; feeGrowthOutsideA: ToField<"u128">; feeGrowthOutsideB: ToField<"u128">; rewardGrowthsOutside: ToField<Vector<"u128">>; initialized: ToField<"bool">
}

export type TickReified = Reified<
    Tick,
    TickFields
>;

export class Tick implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick";
    static readonly $numTypeParams = 0;

    readonly $typeName = Tick.$typeName;

    readonly $fullTypeName: "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly liquidityGross:
        ToField<"u128">
    ; readonly liquidityNet:
        ToField<I128>
    ; readonly feeGrowthOutsideA:
        ToField<"u128">
    ; readonly feeGrowthOutsideB:
        ToField<"u128">
    ; readonly rewardGrowthsOutside:
        ToField<Vector<"u128">>
    ; readonly initialized:
        ToField<"bool">

    private constructor(typeArgs: [], fields: TickFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Tick.$typeName,
            ...typeArgs
        ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.liquidityGross = fields.liquidityGross;; this.liquidityNet = fields.liquidityNet;; this.feeGrowthOutsideA = fields.feeGrowthOutsideA;; this.feeGrowthOutsideB = fields.feeGrowthOutsideB;; this.rewardGrowthsOutside = fields.rewardGrowthsOutside;; this.initialized = fields.initialized;
    }

    static reified(): TickReified {
        return {
            typeName: Tick.$typeName,
            fullTypeName: composeSuiType(
                Tick.$typeName,
                ...[]
            ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Tick.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Tick.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Tick.fromBcs(
                    data,
                ),
            bcs: Tick.bcs,
            fromJSONField: (field: any) =>
                Tick.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Tick.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Tick.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Tick.fetch(
                client,
                id,
            ),
            new: (
                fields: TickFields,
            ) => {
                return new Tick(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Tick.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Tick>> {
        return phantom(Tick.reified());
    }

    static get p() {
        return Tick.phantom()
    }

    static get bcs() {
        return bcs.struct("Tick", {
            id:
                UID.bcs
            , liquidity_gross:
                bcs.u128()
            , liquidity_net:
                I128.bcs
            , fee_growth_outside_a:
                bcs.u128()
            , fee_growth_outside_b:
                bcs.u128()
            , reward_growths_outside:
                bcs.vector(bcs.u128())
            , initialized:
                bcs.bool()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Tick {
        return Tick.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), liquidityGross: decodeFromFields("u128", fields.liquidity_gross), liquidityNet: decodeFromFields(I128.reified(), fields.liquidity_net), feeGrowthOutsideA: decodeFromFields("u128", fields.fee_growth_outside_a), feeGrowthOutsideB: decodeFromFields("u128", fields.fee_growth_outside_b), rewardGrowthsOutside: decodeFromFields(reified.vector("u128"), fields.reward_growths_outside), initialized: decodeFromFields("bool", fields.initialized)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Tick {
        if (!isTick(item.type)) {
            throw new Error("not a Tick type");
        }

        return Tick.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), liquidityGross: decodeFromFieldsWithTypes("u128", item.fields.liquidity_gross), liquidityNet: decodeFromFieldsWithTypes(I128.reified(), item.fields.liquidity_net), feeGrowthOutsideA: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_outside_a), feeGrowthOutsideB: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_outside_b), rewardGrowthsOutside: decodeFromFieldsWithTypes(reified.vector("u128"), item.fields.reward_growths_outside), initialized: decodeFromFieldsWithTypes("bool", item.fields.initialized)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Tick {

        return Tick.fromFields(
            Tick.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,liquidityGross: this.liquidityGross.toString(),liquidityNet: this.liquidityNet.toJSONField(),feeGrowthOutsideA: this.feeGrowthOutsideA.toString(),feeGrowthOutsideB: this.feeGrowthOutsideB.toString(),rewardGrowthsOutside: fieldToJSON<Vector<"u128">>(`vector<u128>`, this.rewardGrowthsOutside),initialized: this.initialized,

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
    ): Tick {
        return Tick.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), liquidityGross: decodeFromJSONField("u128", field.liquidityGross), liquidityNet: decodeFromJSONField(I128.reified(), field.liquidityNet), feeGrowthOutsideA: decodeFromJSONField("u128", field.feeGrowthOutsideA), feeGrowthOutsideB: decodeFromJSONField("u128", field.feeGrowthOutsideB), rewardGrowthsOutside: decodeFromJSONField(reified.vector("u128"), field.rewardGrowthsOutside), initialized: decodeFromJSONField("bool", field.initialized)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Tick {
        if (json.$typeName !== Tick.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Tick.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Tick {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTick(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Tick object`);
        }
        return Tick.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Tick> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Tick object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTick(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Tick object`);
        }

        return Tick.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Pool =============================== */

export function isPool(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool<");
}

export interface PoolFields<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument, FeeType extends PhantomTypeArgument> {
    id: ToField<UID>; coinA: ToField<Balance<CoinTypeA>>; coinB: ToField<Balance<CoinTypeB>>; protocolFeesA: ToField<"u64">; protocolFeesB: ToField<"u64">; sqrtPrice: ToField<"u128">; tickCurrentIndex: ToField<I32>; tickSpacing: ToField<"u32">; maxLiquidityPerTick: ToField<"u128">; fee: ToField<"u32">; feeProtocol: ToField<"u32">; unlocked: ToField<"bool">; feeGrowthGlobalA: ToField<"u128">; feeGrowthGlobalB: ToField<"u128">; liquidity: ToField<"u128">; tickMap: ToField<Table<ToPhantom<I32>, "u256">>; deployTimeMs: ToField<"u64">; rewardInfos: ToField<Vector<PoolRewardInfo>>; rewardLastUpdatedTimeMs: ToField<"u64">
}

export type PoolReified<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument, FeeType extends PhantomTypeArgument> = Reified<
    Pool<CoinTypeA, CoinTypeB, FeeType>,
    PoolFields<CoinTypeA, CoinTypeB, FeeType>
>;

export class Pool<CoinTypeA extends PhantomTypeArgument, CoinTypeB extends PhantomTypeArgument, FeeType extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool";
    static readonly $numTypeParams = 3;

    readonly $typeName = Pool.$typeName;

    readonly $fullTypeName: `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool<${PhantomToTypeStr<CoinTypeA>}, ${PhantomToTypeStr<CoinTypeB>}, ${PhantomToTypeStr<FeeType>}>`;

    readonly $typeArgs: [PhantomToTypeStr<CoinTypeA>, PhantomToTypeStr<CoinTypeB>, PhantomToTypeStr<FeeType>];

    readonly id:
        ToField<UID>
    ; readonly coinA:
        ToField<Balance<CoinTypeA>>
    ; readonly coinB:
        ToField<Balance<CoinTypeB>>
    ; readonly protocolFeesA:
        ToField<"u64">
    ; readonly protocolFeesB:
        ToField<"u64">
    ; readonly sqrtPrice:
        ToField<"u128">
    ; readonly tickCurrentIndex:
        ToField<I32>
    ; readonly tickSpacing:
        ToField<"u32">
    ; readonly maxLiquidityPerTick:
        ToField<"u128">
    ; readonly fee:
        ToField<"u32">
    ; readonly feeProtocol:
        ToField<"u32">
    ; readonly unlocked:
        ToField<"bool">
    ; readonly feeGrowthGlobalA:
        ToField<"u128">
    ; readonly feeGrowthGlobalB:
        ToField<"u128">
    ; readonly liquidity:
        ToField<"u128">
    ; readonly tickMap:
        ToField<Table<ToPhantom<I32>, "u256">>
    ; readonly deployTimeMs:
        ToField<"u64">
    ; readonly rewardInfos:
        ToField<Vector<PoolRewardInfo>>
    ; readonly rewardLastUpdatedTimeMs:
        ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<CoinTypeA>, PhantomToTypeStr<CoinTypeB>, PhantomToTypeStr<FeeType>], fields: PoolFields<CoinTypeA, CoinTypeB, FeeType>,
    ) {
        this.$fullTypeName = composeSuiType(
            Pool.$typeName,
            ...typeArgs
        ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool<${PhantomToTypeStr<CoinTypeA>}, ${PhantomToTypeStr<CoinTypeB>}, ${PhantomToTypeStr<FeeType>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.coinA = fields.coinA;; this.coinB = fields.coinB;; this.protocolFeesA = fields.protocolFeesA;; this.protocolFeesB = fields.protocolFeesB;; this.sqrtPrice = fields.sqrtPrice;; this.tickCurrentIndex = fields.tickCurrentIndex;; this.tickSpacing = fields.tickSpacing;; this.maxLiquidityPerTick = fields.maxLiquidityPerTick;; this.fee = fields.fee;; this.feeProtocol = fields.feeProtocol;; this.unlocked = fields.unlocked;; this.feeGrowthGlobalA = fields.feeGrowthGlobalA;; this.feeGrowthGlobalB = fields.feeGrowthGlobalB;; this.liquidity = fields.liquidity;; this.tickMap = fields.tickMap;; this.deployTimeMs = fields.deployTimeMs;; this.rewardInfos = fields.rewardInfos;; this.rewardLastUpdatedTimeMs = fields.rewardLastUpdatedTimeMs;
    }

    static reified<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>, FeeType extends PhantomReified<PhantomTypeArgument>>(
        CoinTypeA: CoinTypeA, CoinTypeB: CoinTypeB, FeeType: FeeType
    ): PoolReified<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>> {
        return {
            typeName: Pool.$typeName,
            fullTypeName: composeSuiType(
                Pool.$typeName,
                ...[extractType(CoinTypeA), extractType(CoinTypeB), extractType(FeeType)]
            ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool<${PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeA>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeB>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<FeeType>>}>`,
            typeArgs: [
                extractType(CoinTypeA), extractType(CoinTypeB), extractType(FeeType)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeA>>, PhantomToTypeStr<ToPhantomTypeArgument<CoinTypeB>>, PhantomToTypeStr<ToPhantomTypeArgument<FeeType>>],
            reifiedTypeArgs: [CoinTypeA, CoinTypeB, FeeType],
            fromFields: (fields: Record<string, any>) =>
                Pool.fromFields(
                    [CoinTypeA, CoinTypeB, FeeType],
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Pool.fromFieldsWithTypes(
                    [CoinTypeA, CoinTypeB, FeeType],
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Pool.fromBcs(
                    [CoinTypeA, CoinTypeB, FeeType],
                    data,
                ),
            bcs: Pool.bcs,
            fromJSONField: (field: any) =>
                Pool.fromJSONField(
                    [CoinTypeA, CoinTypeB, FeeType],
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Pool.fromJSON(
                    [CoinTypeA, CoinTypeB, FeeType],
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Pool.fromSuiParsedData(
                    [CoinTypeA, CoinTypeB, FeeType],
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Pool.fetch(
                client,
                [CoinTypeA, CoinTypeB, FeeType],
                id,
            ),
            new: (
                fields: PoolFields<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>>,
            ) => {
                return new Pool(
                    [extractType(CoinTypeA), extractType(CoinTypeB), extractType(FeeType)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Pool.reified
    }

    static phantom<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>, FeeType extends PhantomReified<PhantomTypeArgument>>(
        CoinTypeA: CoinTypeA, CoinTypeB: CoinTypeB, FeeType: FeeType
    ): PhantomReified<ToTypeStr<Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>>>> {
        return phantom(Pool.reified(
            CoinTypeA, CoinTypeB, FeeType
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
            , protocol_fees_a:
                bcs.u64()
            , protocol_fees_b:
                bcs.u64()
            , sqrt_price:
                bcs.u128()
            , tick_current_index:
                I32.bcs
            , tick_spacing:
                bcs.u32()
            , max_liquidity_per_tick:
                bcs.u128()
            , fee:
                bcs.u32()
            , fee_protocol:
                bcs.u32()
            , unlocked:
                bcs.bool()
            , fee_growth_global_a:
                bcs.u128()
            , fee_growth_global_b:
                bcs.u128()
            , liquidity:
                bcs.u128()
            , tick_map:
                Table.bcs
            , deploy_time_ms:
                bcs.u64()
            , reward_infos:
                bcs.vector(PoolRewardInfo.bcs)
            , reward_last_updated_time_ms:
                bcs.u64()

        })
    };

    static fromFields<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>, FeeType extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB, FeeType], fields: Record<string, any>
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>> {
        return Pool.reified(
            typeArgs[0], typeArgs[1], typeArgs[2],
        ).new(
            {id: decodeFromFields(UID.reified(), fields.id), coinA: decodeFromFields(Balance.reified(typeArgs[0]), fields.coin_a), coinB: decodeFromFields(Balance.reified(typeArgs[1]), fields.coin_b), protocolFeesA: decodeFromFields("u64", fields.protocol_fees_a), protocolFeesB: decodeFromFields("u64", fields.protocol_fees_b), sqrtPrice: decodeFromFields("u128", fields.sqrt_price), tickCurrentIndex: decodeFromFields(I32.reified(), fields.tick_current_index), tickSpacing: decodeFromFields("u32", fields.tick_spacing), maxLiquidityPerTick: decodeFromFields("u128", fields.max_liquidity_per_tick), fee: decodeFromFields("u32", fields.fee), feeProtocol: decodeFromFields("u32", fields.fee_protocol), unlocked: decodeFromFields("bool", fields.unlocked), feeGrowthGlobalA: decodeFromFields("u128", fields.fee_growth_global_a), feeGrowthGlobalB: decodeFromFields("u128", fields.fee_growth_global_b), liquidity: decodeFromFields("u128", fields.liquidity), tickMap: decodeFromFields(Table.reified(reified.phantom(I32.reified()), reified.phantom("u256")), fields.tick_map), deployTimeMs: decodeFromFields("u64", fields.deploy_time_ms), rewardInfos: decodeFromFields(reified.vector(PoolRewardInfo.reified()), fields.reward_infos), rewardLastUpdatedTimeMs: decodeFromFields("u64", fields.reward_last_updated_time_ms)}
        )
    }

    static fromFieldsWithTypes<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>, FeeType extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB, FeeType], item: FieldsWithTypes
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>> {
        if (!isPool(item.type)) {
            throw new Error("not a Pool type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return Pool.reified(
            typeArgs[0], typeArgs[1], typeArgs[2],
        ).new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), coinA: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.coin_a), coinB: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.coin_b), protocolFeesA: decodeFromFieldsWithTypes("u64", item.fields.protocol_fees_a), protocolFeesB: decodeFromFieldsWithTypes("u64", item.fields.protocol_fees_b), sqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.sqrt_price), tickCurrentIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_current_index), tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing), maxLiquidityPerTick: decodeFromFieldsWithTypes("u128", item.fields.max_liquidity_per_tick), fee: decodeFromFieldsWithTypes("u32", item.fields.fee), feeProtocol: decodeFromFieldsWithTypes("u32", item.fields.fee_protocol), unlocked: decodeFromFieldsWithTypes("bool", item.fields.unlocked), feeGrowthGlobalA: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_global_a), feeGrowthGlobalB: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_global_b), liquidity: decodeFromFieldsWithTypes("u128", item.fields.liquidity), tickMap: decodeFromFieldsWithTypes(Table.reified(reified.phantom(I32.reified()), reified.phantom("u256")), item.fields.tick_map), deployTimeMs: decodeFromFieldsWithTypes("u64", item.fields.deploy_time_ms), rewardInfos: decodeFromFieldsWithTypes(reified.vector(PoolRewardInfo.reified()), item.fields.reward_infos), rewardLastUpdatedTimeMs: decodeFromFieldsWithTypes("u64", item.fields.reward_last_updated_time_ms)}
        )
    }

    static fromBcs<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>, FeeType extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB, FeeType], data: Uint8Array
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>> {

        return Pool.fromFields(
            typeArgs,
            Pool.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,coinA: this.coinA.toJSONField(),coinB: this.coinB.toJSONField(),protocolFeesA: this.protocolFeesA.toString(),protocolFeesB: this.protocolFeesB.toString(),sqrtPrice: this.sqrtPrice.toString(),tickCurrentIndex: this.tickCurrentIndex.toJSONField(),tickSpacing: this.tickSpacing,maxLiquidityPerTick: this.maxLiquidityPerTick.toString(),fee: this.fee,feeProtocol: this.feeProtocol,unlocked: this.unlocked,feeGrowthGlobalA: this.feeGrowthGlobalA.toString(),feeGrowthGlobalB: this.feeGrowthGlobalB.toString(),liquidity: this.liquidity.toString(),tickMap: this.tickMap.toJSONField(),deployTimeMs: this.deployTimeMs.toString(),rewardInfos: fieldToJSON<Vector<PoolRewardInfo>>(`vector<0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo>`, this.rewardInfos),rewardLastUpdatedTimeMs: this.rewardLastUpdatedTimeMs.toString(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>, FeeType extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB, FeeType], field: any
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>> {
        return Pool.reified(
            typeArgs[0], typeArgs[1], typeArgs[2],
        ).new(
            {id: decodeFromJSONField(UID.reified(), field.id), coinA: decodeFromJSONField(Balance.reified(typeArgs[0]), field.coinA), coinB: decodeFromJSONField(Balance.reified(typeArgs[1]), field.coinB), protocolFeesA: decodeFromJSONField("u64", field.protocolFeesA), protocolFeesB: decodeFromJSONField("u64", field.protocolFeesB), sqrtPrice: decodeFromJSONField("u128", field.sqrtPrice), tickCurrentIndex: decodeFromJSONField(I32.reified(), field.tickCurrentIndex), tickSpacing: decodeFromJSONField("u32", field.tickSpacing), maxLiquidityPerTick: decodeFromJSONField("u128", field.maxLiquidityPerTick), fee: decodeFromJSONField("u32", field.fee), feeProtocol: decodeFromJSONField("u32", field.feeProtocol), unlocked: decodeFromJSONField("bool", field.unlocked), feeGrowthGlobalA: decodeFromJSONField("u128", field.feeGrowthGlobalA), feeGrowthGlobalB: decodeFromJSONField("u128", field.feeGrowthGlobalB), liquidity: decodeFromJSONField("u128", field.liquidity), tickMap: decodeFromJSONField(Table.reified(reified.phantom(I32.reified()), reified.phantom("u256")), field.tickMap), deployTimeMs: decodeFromJSONField("u64", field.deployTimeMs), rewardInfos: decodeFromJSONField(reified.vector(PoolRewardInfo.reified()), field.rewardInfos), rewardLastUpdatedTimeMs: decodeFromJSONField("u64", field.rewardLastUpdatedTimeMs)}
        )
    }

    static fromJSON<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>, FeeType extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB, FeeType], json: Record<string, any>
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>> {
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

    static fromSuiParsedData<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>, FeeType extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [CoinTypeA, CoinTypeB, FeeType], content: SuiParsedData
    ): Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>> {
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

    static async fetch<CoinTypeA extends PhantomReified<PhantomTypeArgument>, CoinTypeB extends PhantomReified<PhantomTypeArgument>, FeeType extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArgs: [CoinTypeA, CoinTypeB, FeeType], id: string
    ): Promise<Pool<ToPhantomTypeArgument<CoinTypeA>, ToPhantomTypeArgument<CoinTypeB>, ToPhantomTypeArgument<FeeType>>> {
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

/* ============================== ComputeSwapState =============================== */

export function isComputeSwapState(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState";
}

export interface ComputeSwapStateFields {
    amountA: ToField<"u128">; amountB: ToField<"u128">; amountSpecifiedRemaining: ToField<"u128">; amountCalculated: ToField<"u128">; sqrtPrice: ToField<"u128">; tickCurrentIndex: ToField<I32>; feeGrowthGlobal: ToField<"u128">; protocolFee: ToField<"u128">; liquidity: ToField<"u128">; feeAmount: ToField<"u128">
}

export type ComputeSwapStateReified = Reified<
    ComputeSwapState,
    ComputeSwapStateFields
>;

export class ComputeSwapState implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState";
    static readonly $numTypeParams = 0;

    readonly $typeName = ComputeSwapState.$typeName;

    readonly $fullTypeName: "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState";

    readonly $typeArgs: [];

    readonly amountA:
        ToField<"u128">
    ; readonly amountB:
        ToField<"u128">
    ; readonly amountSpecifiedRemaining:
        ToField<"u128">
    ; readonly amountCalculated:
        ToField<"u128">
    ; readonly sqrtPrice:
        ToField<"u128">
    ; readonly tickCurrentIndex:
        ToField<I32>
    ; readonly feeGrowthGlobal:
        ToField<"u128">
    ; readonly protocolFee:
        ToField<"u128">
    ; readonly liquidity:
        ToField<"u128">
    ; readonly feeAmount:
        ToField<"u128">

    private constructor(typeArgs: [], fields: ComputeSwapStateFields,
    ) {
        this.$fullTypeName = composeSuiType(
            ComputeSwapState.$typeName,
            ...typeArgs
        ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState";
        this.$typeArgs = typeArgs;

        this.amountA = fields.amountA;; this.amountB = fields.amountB;; this.amountSpecifiedRemaining = fields.amountSpecifiedRemaining;; this.amountCalculated = fields.amountCalculated;; this.sqrtPrice = fields.sqrtPrice;; this.tickCurrentIndex = fields.tickCurrentIndex;; this.feeGrowthGlobal = fields.feeGrowthGlobal;; this.protocolFee = fields.protocolFee;; this.liquidity = fields.liquidity;; this.feeAmount = fields.feeAmount;
    }

    static reified(): ComputeSwapStateReified {
        return {
            typeName: ComputeSwapState.$typeName,
            fullTypeName: composeSuiType(
                ComputeSwapState.$typeName,
                ...[]
            ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                ComputeSwapState.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                ComputeSwapState.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                ComputeSwapState.fromBcs(
                    data,
                ),
            bcs: ComputeSwapState.bcs,
            fromJSONField: (field: any) =>
                ComputeSwapState.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                ComputeSwapState.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                ComputeSwapState.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => ComputeSwapState.fetch(
                client,
                id,
            ),
            new: (
                fields: ComputeSwapStateFields,
            ) => {
                return new ComputeSwapState(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return ComputeSwapState.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<ComputeSwapState>> {
        return phantom(ComputeSwapState.reified());
    }

    static get p() {
        return ComputeSwapState.phantom()
    }

    static get bcs() {
        return bcs.struct("ComputeSwapState", {
            amount_a:
                bcs.u128()
            , amount_b:
                bcs.u128()
            , amount_specified_remaining:
                bcs.u128()
            , amount_calculated:
                bcs.u128()
            , sqrt_price:
                bcs.u128()
            , tick_current_index:
                I32.bcs
            , fee_growth_global:
                bcs.u128()
            , protocol_fee:
                bcs.u128()
            , liquidity:
                bcs.u128()
            , fee_amount:
                bcs.u128()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): ComputeSwapState {
        return ComputeSwapState.reified().new(
            {amountA: decodeFromFields("u128", fields.amount_a), amountB: decodeFromFields("u128", fields.amount_b), amountSpecifiedRemaining: decodeFromFields("u128", fields.amount_specified_remaining), amountCalculated: decodeFromFields("u128", fields.amount_calculated), sqrtPrice: decodeFromFields("u128", fields.sqrt_price), tickCurrentIndex: decodeFromFields(I32.reified(), fields.tick_current_index), feeGrowthGlobal: decodeFromFields("u128", fields.fee_growth_global), protocolFee: decodeFromFields("u128", fields.protocol_fee), liquidity: decodeFromFields("u128", fields.liquidity), feeAmount: decodeFromFields("u128", fields.fee_amount)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): ComputeSwapState {
        if (!isComputeSwapState(item.type)) {
            throw new Error("not a ComputeSwapState type");
        }

        return ComputeSwapState.reified().new(
            {amountA: decodeFromFieldsWithTypes("u128", item.fields.amount_a), amountB: decodeFromFieldsWithTypes("u128", item.fields.amount_b), amountSpecifiedRemaining: decodeFromFieldsWithTypes("u128", item.fields.amount_specified_remaining), amountCalculated: decodeFromFieldsWithTypes("u128", item.fields.amount_calculated), sqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.sqrt_price), tickCurrentIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_current_index), feeGrowthGlobal: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_global), protocolFee: decodeFromFieldsWithTypes("u128", item.fields.protocol_fee), liquidity: decodeFromFieldsWithTypes("u128", item.fields.liquidity), feeAmount: decodeFromFieldsWithTypes("u128", item.fields.fee_amount)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): ComputeSwapState {

        return ComputeSwapState.fromFields(
            ComputeSwapState.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            amountA: this.amountA.toString(),amountB: this.amountB.toString(),amountSpecifiedRemaining: this.amountSpecifiedRemaining.toString(),amountCalculated: this.amountCalculated.toString(),sqrtPrice: this.sqrtPrice.toString(),tickCurrentIndex: this.tickCurrentIndex.toJSONField(),feeGrowthGlobal: this.feeGrowthGlobal.toString(),protocolFee: this.protocolFee.toString(),liquidity: this.liquidity.toString(),feeAmount: this.feeAmount.toString(),

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
    ): ComputeSwapState {
        return ComputeSwapState.reified().new(
            {amountA: decodeFromJSONField("u128", field.amountA), amountB: decodeFromJSONField("u128", field.amountB), amountSpecifiedRemaining: decodeFromJSONField("u128", field.amountSpecifiedRemaining), amountCalculated: decodeFromJSONField("u128", field.amountCalculated), sqrtPrice: decodeFromJSONField("u128", field.sqrtPrice), tickCurrentIndex: decodeFromJSONField(I32.reified(), field.tickCurrentIndex), feeGrowthGlobal: decodeFromJSONField("u128", field.feeGrowthGlobal), protocolFee: decodeFromJSONField("u128", field.protocolFee), liquidity: decodeFromJSONField("u128", field.liquidity), feeAmount: decodeFromJSONField("u128", field.feeAmount)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): ComputeSwapState {
        if (json.$typeName !== ComputeSwapState.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return ComputeSwapState.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): ComputeSwapState {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isComputeSwapState(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ComputeSwapState object`);
        }
        return ComputeSwapState.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<ComputeSwapState> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching ComputeSwapState object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isComputeSwapState(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ComputeSwapState object`);
        }

        return ComputeSwapState.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PoolRewardInfo =============================== */

export function isPoolRewardInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo";
}

export interface PoolRewardInfoFields {
    id: ToField<UID>; vault: ToField<"address">; vaultCoinType: ToField<String>; emissionsPerSecond: ToField<"u128">; growthGlobal: ToField<"u128">; manager: ToField<"address">
}

export type PoolRewardInfoReified = Reified<
    PoolRewardInfo,
    PoolRewardInfoFields
>;

export class PoolRewardInfo implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = PoolRewardInfo.$typeName;

    readonly $fullTypeName: "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly vault:
        ToField<"address">
    ; readonly vaultCoinType:
        ToField<String>
    ; readonly emissionsPerSecond:
        ToField<"u128">
    ; readonly growthGlobal:
        ToField<"u128">
    ; readonly manager:
        ToField<"address">

    private constructor(typeArgs: [], fields: PoolRewardInfoFields,
    ) {
        this.$fullTypeName = composeSuiType(
            PoolRewardInfo.$typeName,
            ...typeArgs
        ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.vault = fields.vault;; this.vaultCoinType = fields.vaultCoinType;; this.emissionsPerSecond = fields.emissionsPerSecond;; this.growthGlobal = fields.growthGlobal;; this.manager = fields.manager;
    }

    static reified(): PoolRewardInfoReified {
        return {
            typeName: PoolRewardInfo.$typeName,
            fullTypeName: composeSuiType(
                PoolRewardInfo.$typeName,
                ...[]
            ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                PoolRewardInfo.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PoolRewardInfo.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PoolRewardInfo.fromBcs(
                    data,
                ),
            bcs: PoolRewardInfo.bcs,
            fromJSONField: (field: any) =>
                PoolRewardInfo.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PoolRewardInfo.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PoolRewardInfo.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PoolRewardInfo.fetch(
                client,
                id,
            ),
            new: (
                fields: PoolRewardInfoFields,
            ) => {
                return new PoolRewardInfo(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PoolRewardInfo.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<PoolRewardInfo>> {
        return phantom(PoolRewardInfo.reified());
    }

    static get p() {
        return PoolRewardInfo.phantom()
    }

    static get bcs() {
        return bcs.struct("PoolRewardInfo", {
            id:
                UID.bcs
            , vault:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , vault_coin_type:
                String.bcs
            , emissions_per_second:
                bcs.u128()
            , growth_global:
                bcs.u128()
            , manager:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): PoolRewardInfo {
        return PoolRewardInfo.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), vault: decodeFromFields("address", fields.vault), vaultCoinType: decodeFromFields(String.reified(), fields.vault_coin_type), emissionsPerSecond: decodeFromFields("u128", fields.emissions_per_second), growthGlobal: decodeFromFields("u128", fields.growth_global), manager: decodeFromFields("address", fields.manager)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): PoolRewardInfo {
        if (!isPoolRewardInfo(item.type)) {
            throw new Error("not a PoolRewardInfo type");
        }

        return PoolRewardInfo.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), vault: decodeFromFieldsWithTypes("address", item.fields.vault), vaultCoinType: decodeFromFieldsWithTypes(String.reified(), item.fields.vault_coin_type), emissionsPerSecond: decodeFromFieldsWithTypes("u128", item.fields.emissions_per_second), growthGlobal: decodeFromFieldsWithTypes("u128", item.fields.growth_global), manager: decodeFromFieldsWithTypes("address", item.fields.manager)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): PoolRewardInfo {

        return PoolRewardInfo.fromFields(
            PoolRewardInfo.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,vault: this.vault,vaultCoinType: this.vaultCoinType,emissionsPerSecond: this.emissionsPerSecond.toString(),growthGlobal: this.growthGlobal.toString(),manager: this.manager,

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
    ): PoolRewardInfo {
        return PoolRewardInfo.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), vault: decodeFromJSONField("address", field.vault), vaultCoinType: decodeFromJSONField(String.reified(), field.vaultCoinType), emissionsPerSecond: decodeFromJSONField("u128", field.emissionsPerSecond), growthGlobal: decodeFromJSONField("u128", field.growthGlobal), manager: decodeFromJSONField("address", field.manager)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): PoolRewardInfo {
        if (json.$typeName !== PoolRewardInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return PoolRewardInfo.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): PoolRewardInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPoolRewardInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PoolRewardInfo object`);
        }
        return PoolRewardInfo.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<PoolRewardInfo> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PoolRewardInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPoolRewardInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolRewardInfo object`);
        }

        return PoolRewardInfo.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PoolRewardVault =============================== */

export function isPoolRewardVault(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault<");
}

export interface PoolRewardVaultFields<RewardCoin extends PhantomTypeArgument> {
    id: ToField<UID>; coin: ToField<Balance<RewardCoin>>
}

export type PoolRewardVaultReified<RewardCoin extends PhantomTypeArgument> = Reified<
    PoolRewardVault<RewardCoin>,
    PoolRewardVaultFields<RewardCoin>
>;

export class PoolRewardVault<RewardCoin extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault";
    static readonly $numTypeParams = 1;

    readonly $typeName = PoolRewardVault.$typeName;

    readonly $fullTypeName: `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault<${PhantomToTypeStr<RewardCoin>}>`;

    readonly $typeArgs: [PhantomToTypeStr<RewardCoin>];

    readonly id:
        ToField<UID>
    ; readonly coin:
        ToField<Balance<RewardCoin>>

    private constructor(typeArgs: [PhantomToTypeStr<RewardCoin>], fields: PoolRewardVaultFields<RewardCoin>,
    ) {
        this.$fullTypeName = composeSuiType(
            PoolRewardVault.$typeName,
            ...typeArgs
        ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault<${PhantomToTypeStr<RewardCoin>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.coin = fields.coin;
    }

    static reified<RewardCoin extends PhantomReified<PhantomTypeArgument>>(
        RewardCoin: RewardCoin
    ): PoolRewardVaultReified<ToPhantomTypeArgument<RewardCoin>> {
        return {
            typeName: PoolRewardVault.$typeName,
            fullTypeName: composeSuiType(
                PoolRewardVault.$typeName,
                ...[extractType(RewardCoin)]
            ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault<${PhantomToTypeStr<ToPhantomTypeArgument<RewardCoin>>}>`,
            typeArgs: [
                extractType(RewardCoin)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<RewardCoin>>],
            reifiedTypeArgs: [RewardCoin],
            fromFields: (fields: Record<string, any>) =>
                PoolRewardVault.fromFields(
                    RewardCoin,
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PoolRewardVault.fromFieldsWithTypes(
                    RewardCoin,
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PoolRewardVault.fromBcs(
                    RewardCoin,
                    data,
                ),
            bcs: PoolRewardVault.bcs,
            fromJSONField: (field: any) =>
                PoolRewardVault.fromJSONField(
                    RewardCoin,
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PoolRewardVault.fromJSON(
                    RewardCoin,
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PoolRewardVault.fromSuiParsedData(
                    RewardCoin,
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PoolRewardVault.fetch(
                client,
                RewardCoin,
                id,
            ),
            new: (
                fields: PoolRewardVaultFields<ToPhantomTypeArgument<RewardCoin>>,
            ) => {
                return new PoolRewardVault(
                    [extractType(RewardCoin)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PoolRewardVault.reified
    }

    static phantom<RewardCoin extends PhantomReified<PhantomTypeArgument>>(
        RewardCoin: RewardCoin
    ): PhantomReified<ToTypeStr<PoolRewardVault<ToPhantomTypeArgument<RewardCoin>>>> {
        return phantom(PoolRewardVault.reified(
            RewardCoin
        ));
    }

    static get p() {
        return PoolRewardVault.phantom
    }

    static get bcs() {
        return bcs.struct("PoolRewardVault", {
            id:
                UID.bcs
            , coin:
                Balance.bcs

        })
    };

    static fromFields<RewardCoin extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardCoin, fields: Record<string, any>
    ): PoolRewardVault<ToPhantomTypeArgument<RewardCoin>> {
        return PoolRewardVault.reified(
            typeArg,
        ).new(
            {id: decodeFromFields(UID.reified(), fields.id), coin: decodeFromFields(Balance.reified(typeArg), fields.coin)}
        )
    }

    static fromFieldsWithTypes<RewardCoin extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardCoin, item: FieldsWithTypes
    ): PoolRewardVault<ToPhantomTypeArgument<RewardCoin>> {
        if (!isPoolRewardVault(item.type)) {
            throw new Error("not a PoolRewardVault type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return PoolRewardVault.reified(
            typeArg,
        ).new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), coin: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.coin)}
        )
    }

    static fromBcs<RewardCoin extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardCoin, data: Uint8Array
    ): PoolRewardVault<ToPhantomTypeArgument<RewardCoin>> {

        return PoolRewardVault.fromFields(
            typeArg,
            PoolRewardVault.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,coin: this.coin.toJSONField(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<RewardCoin extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardCoin, field: any
    ): PoolRewardVault<ToPhantomTypeArgument<RewardCoin>> {
        return PoolRewardVault.reified(
            typeArg,
        ).new(
            {id: decodeFromJSONField(UID.reified(), field.id), coin: decodeFromJSONField(Balance.reified(typeArg), field.coin)}
        )
    }

    static fromJSON<RewardCoin extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardCoin, json: Record<string, any>
    ): PoolRewardVault<ToPhantomTypeArgument<RewardCoin>> {
        if (json.$typeName !== PoolRewardVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(PoolRewardVault.$typeName,
            extractType(typeArg)),
            json.$typeArgs,
            [typeArg],
        )

        return PoolRewardVault.fromJSONField(
            typeArg,
            json,
        )
    }

    static fromSuiParsedData<RewardCoin extends PhantomReified<PhantomTypeArgument>>(
        typeArg: RewardCoin, content: SuiParsedData
    ): PoolRewardVault<ToPhantomTypeArgument<RewardCoin>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPoolRewardVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PoolRewardVault object`);
        }
        return PoolRewardVault.fromFieldsWithTypes(
            typeArg,
            content
        );
    }

    static async fetch<RewardCoin extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArg: RewardCoin, id: string
    ): Promise<PoolRewardVault<ToPhantomTypeArgument<RewardCoin>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PoolRewardVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPoolRewardVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolRewardVault object`);
        }

        return PoolRewardVault.fromBcs(
            typeArg,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PositionRewardInfo =============================== */

export function isPositionRewardInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo";
}

export interface PositionRewardInfoFields {
    rewardGrowthInside: ToField<"u128">; amountOwed: ToField<"u64">
}

export type PositionRewardInfoReified = Reified<
    PositionRewardInfo,
    PositionRewardInfoFields
>;

export class PositionRewardInfo implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = PositionRewardInfo.$typeName;

    readonly $fullTypeName: "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo";

    readonly $typeArgs: [];

    readonly rewardGrowthInside:
        ToField<"u128">
    ; readonly amountOwed:
        ToField<"u64">

    private constructor(typeArgs: [], fields: PositionRewardInfoFields,
    ) {
        this.$fullTypeName = composeSuiType(
            PositionRewardInfo.$typeName,
            ...typeArgs
        ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo";
        this.$typeArgs = typeArgs;

        this.rewardGrowthInside = fields.rewardGrowthInside;; this.amountOwed = fields.amountOwed;
    }

    static reified(): PositionRewardInfoReified {
        return {
            typeName: PositionRewardInfo.$typeName,
            fullTypeName: composeSuiType(
                PositionRewardInfo.$typeName,
                ...[]
            ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                PositionRewardInfo.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PositionRewardInfo.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PositionRewardInfo.fromBcs(
                    data,
                ),
            bcs: PositionRewardInfo.bcs,
            fromJSONField: (field: any) =>
                PositionRewardInfo.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PositionRewardInfo.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PositionRewardInfo.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PositionRewardInfo.fetch(
                client,
                id,
            ),
            new: (
                fields: PositionRewardInfoFields,
            ) => {
                return new PositionRewardInfo(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PositionRewardInfo.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<PositionRewardInfo>> {
        return phantom(PositionRewardInfo.reified());
    }

    static get p() {
        return PositionRewardInfo.phantom()
    }

    static get bcs() {
        return bcs.struct("PositionRewardInfo", {
            reward_growth_inside:
                bcs.u128()
            , amount_owed:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): PositionRewardInfo {
        return PositionRewardInfo.reified().new(
            {rewardGrowthInside: decodeFromFields("u128", fields.reward_growth_inside), amountOwed: decodeFromFields("u64", fields.amount_owed)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): PositionRewardInfo {
        if (!isPositionRewardInfo(item.type)) {
            throw new Error("not a PositionRewardInfo type");
        }

        return PositionRewardInfo.reified().new(
            {rewardGrowthInside: decodeFromFieldsWithTypes("u128", item.fields.reward_growth_inside), amountOwed: decodeFromFieldsWithTypes("u64", item.fields.amount_owed)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): PositionRewardInfo {

        return PositionRewardInfo.fromFields(
            PositionRewardInfo.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            rewardGrowthInside: this.rewardGrowthInside.toString(),amountOwed: this.amountOwed.toString(),

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
    ): PositionRewardInfo {
        return PositionRewardInfo.reified().new(
            {rewardGrowthInside: decodeFromJSONField("u128", field.rewardGrowthInside), amountOwed: decodeFromJSONField("u64", field.amountOwed)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): PositionRewardInfo {
        if (json.$typeName !== PositionRewardInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return PositionRewardInfo.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): PositionRewardInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPositionRewardInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PositionRewardInfo object`);
        }
        return PositionRewardInfo.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<PositionRewardInfo> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PositionRewardInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPositionRewardInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PositionRewardInfo object`);
        }

        return PositionRewardInfo.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

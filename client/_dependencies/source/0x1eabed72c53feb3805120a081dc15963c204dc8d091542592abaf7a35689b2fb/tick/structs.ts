import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {I128} from "../../0x714a63a0dba6da4f017b42d5d0fb78867f18bcde904868e51d951a5a6f5b7f57/i128/structs";
import {I32} from "../../0x714a63a0dba6da4f017b42d5d0fb78867f18bcde904868e51d951a5a6f5b7f57/i32/structs";
import {SkipList} from "../../0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa/skip-list/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Tick =============================== */

export function isTick(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::Tick";
}

export interface TickFields {
    index: ToField<I32>; sqrtPrice: ToField<"u128">; liquidityNet: ToField<I128>; liquidityGross: ToField<"u128">; feeGrowthOutsideA: ToField<"u128">; feeGrowthOutsideB: ToField<"u128">; pointsGrowthOutside: ToField<"u128">; rewardsGrowthOutside: ToField<Vector<"u128">>
}

export type TickReified = Reified<
    Tick,
    TickFields
>;

export class Tick implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::Tick";
    static readonly $numTypeParams = 0;

    readonly $typeName = Tick.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::Tick";

    readonly $typeArgs: [];

    readonly index:
        ToField<I32>
    ; readonly sqrtPrice:
        ToField<"u128">
    ; readonly liquidityNet:
        ToField<I128>
    ; readonly liquidityGross:
        ToField<"u128">
    ; readonly feeGrowthOutsideA:
        ToField<"u128">
    ; readonly feeGrowthOutsideB:
        ToField<"u128">
    ; readonly pointsGrowthOutside:
        ToField<"u128">
    ; readonly rewardsGrowthOutside:
        ToField<Vector<"u128">>

    private constructor(typeArgs: [], fields: TickFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Tick.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::Tick";
        this.$typeArgs = typeArgs;

        this.index = fields.index;; this.sqrtPrice = fields.sqrtPrice;; this.liquidityNet = fields.liquidityNet;; this.liquidityGross = fields.liquidityGross;; this.feeGrowthOutsideA = fields.feeGrowthOutsideA;; this.feeGrowthOutsideB = fields.feeGrowthOutsideB;; this.pointsGrowthOutside = fields.pointsGrowthOutside;; this.rewardsGrowthOutside = fields.rewardsGrowthOutside;
    }

    static reified(): TickReified {
        return {
            typeName: Tick.$typeName,
            fullTypeName: composeSuiType(
                Tick.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::Tick",
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
            index:
                I32.bcs
            , sqrt_price:
                bcs.u128()
            , liquidity_net:
                I128.bcs
            , liquidity_gross:
                bcs.u128()
            , fee_growth_outside_a:
                bcs.u128()
            , fee_growth_outside_b:
                bcs.u128()
            , points_growth_outside:
                bcs.u128()
            , rewards_growth_outside:
                bcs.vector(bcs.u128())

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Tick {
        return Tick.reified().new(
            {index: decodeFromFields(I32.reified(), fields.index), sqrtPrice: decodeFromFields("u128", fields.sqrt_price), liquidityNet: decodeFromFields(I128.reified(), fields.liquidity_net), liquidityGross: decodeFromFields("u128", fields.liquidity_gross), feeGrowthOutsideA: decodeFromFields("u128", fields.fee_growth_outside_a), feeGrowthOutsideB: decodeFromFields("u128", fields.fee_growth_outside_b), pointsGrowthOutside: decodeFromFields("u128", fields.points_growth_outside), rewardsGrowthOutside: decodeFromFields(reified.vector("u128"), fields.rewards_growth_outside)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Tick {
        if (!isTick(item.type)) {
            throw new Error("not a Tick type");
        }

        return Tick.reified().new(
            {index: decodeFromFieldsWithTypes(I32.reified(), item.fields.index), sqrtPrice: decodeFromFieldsWithTypes("u128", item.fields.sqrt_price), liquidityNet: decodeFromFieldsWithTypes(I128.reified(), item.fields.liquidity_net), liquidityGross: decodeFromFieldsWithTypes("u128", item.fields.liquidity_gross), feeGrowthOutsideA: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_outside_a), feeGrowthOutsideB: decodeFromFieldsWithTypes("u128", item.fields.fee_growth_outside_b), pointsGrowthOutside: decodeFromFieldsWithTypes("u128", item.fields.points_growth_outside), rewardsGrowthOutside: decodeFromFieldsWithTypes(reified.vector("u128"), item.fields.rewards_growth_outside)}
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
            index: this.index.toJSONField(),sqrtPrice: this.sqrtPrice.toString(),liquidityNet: this.liquidityNet.toJSONField(),liquidityGross: this.liquidityGross.toString(),feeGrowthOutsideA: this.feeGrowthOutsideA.toString(),feeGrowthOutsideB: this.feeGrowthOutsideB.toString(),pointsGrowthOutside: this.pointsGrowthOutside.toString(),rewardsGrowthOutside: fieldToJSON<Vector<"u128">>(`vector<u128>`, this.rewardsGrowthOutside),

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
            {index: decodeFromJSONField(I32.reified(), field.index), sqrtPrice: decodeFromJSONField("u128", field.sqrtPrice), liquidityNet: decodeFromJSONField(I128.reified(), field.liquidityNet), liquidityGross: decodeFromJSONField("u128", field.liquidityGross), feeGrowthOutsideA: decodeFromJSONField("u128", field.feeGrowthOutsideA), feeGrowthOutsideB: decodeFromJSONField("u128", field.feeGrowthOutsideB), pointsGrowthOutside: decodeFromJSONField("u128", field.pointsGrowthOutside), rewardsGrowthOutside: decodeFromJSONField(reified.vector("u128"), field.rewardsGrowthOutside)}
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

/* ============================== TickManager =============================== */

export function isTickManager(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::TickManager";
}

export interface TickManagerFields {
    tickSpacing: ToField<"u32">; ticks: ToField<SkipList<ToPhantom<Tick>>>
}

export type TickManagerReified = Reified<
    TickManager,
    TickManagerFields
>;

export class TickManager implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::TickManager";
    static readonly $numTypeParams = 0;

    readonly $typeName = TickManager.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::TickManager";

    readonly $typeArgs: [];

    readonly tickSpacing:
        ToField<"u32">
    ; readonly ticks:
        ToField<SkipList<ToPhantom<Tick>>>

    private constructor(typeArgs: [], fields: TickManagerFields,
    ) {
        this.$fullTypeName = composeSuiType(
            TickManager.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::TickManager";
        this.$typeArgs = typeArgs;

        this.tickSpacing = fields.tickSpacing;; this.ticks = fields.ticks;
    }

    static reified(): TickManagerReified {
        return {
            typeName: TickManager.$typeName,
            fullTypeName: composeSuiType(
                TickManager.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::tick::TickManager",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                TickManager.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                TickManager.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                TickManager.fromBcs(
                    data,
                ),
            bcs: TickManager.bcs,
            fromJSONField: (field: any) =>
                TickManager.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                TickManager.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                TickManager.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => TickManager.fetch(
                client,
                id,
            ),
            new: (
                fields: TickManagerFields,
            ) => {
                return new TickManager(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return TickManager.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<TickManager>> {
        return phantom(TickManager.reified());
    }

    static get p() {
        return TickManager.phantom()
    }

    static get bcs() {
        return bcs.struct("TickManager", {
            tick_spacing:
                bcs.u32()
            , ticks:
                SkipList.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): TickManager {
        return TickManager.reified().new(
            {tickSpacing: decodeFromFields("u32", fields.tick_spacing), ticks: decodeFromFields(SkipList.reified(reified.phantom(Tick.reified())), fields.ticks)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): TickManager {
        if (!isTickManager(item.type)) {
            throw new Error("not a TickManager type");
        }

        return TickManager.reified().new(
            {tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing), ticks: decodeFromFieldsWithTypes(SkipList.reified(reified.phantom(Tick.reified())), item.fields.ticks)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): TickManager {

        return TickManager.fromFields(
            TickManager.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            tickSpacing: this.tickSpacing,ticks: this.ticks.toJSONField(),

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
    ): TickManager {
        return TickManager.reified().new(
            {tickSpacing: decodeFromJSONField("u32", field.tickSpacing), ticks: decodeFromJSONField(SkipList.reified(reified.phantom(Tick.reified())), field.ticks)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): TickManager {
        if (json.$typeName !== TickManager.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return TickManager.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): TickManager {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTickManager(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TickManager object`);
        }
        return TickManager.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<TickManager> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching TickManager object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTickManager(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TickManager object`);
        }

        return TickManager.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

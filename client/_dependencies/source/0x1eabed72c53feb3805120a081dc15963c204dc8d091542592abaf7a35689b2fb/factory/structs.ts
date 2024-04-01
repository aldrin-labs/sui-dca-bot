import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {TypeName} from "../../0x1/type-name/structs";
import {ID, UID} from "../../0x2/object/structs";
import {LinkedTable} from "../../0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa/linked-table/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== CreatePoolEvent =============================== */

export function isCreatePoolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::CreatePoolEvent";
}

export interface CreatePoolEventFields {
    poolId: ToField<ID>; coinTypeA: ToField<String>; coinTypeB: ToField<String>; tickSpacing: ToField<"u32">
}

export type CreatePoolEventReified = Reified<
    CreatePoolEvent,
    CreatePoolEventFields
>;

export class CreatePoolEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::CreatePoolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CreatePoolEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::CreatePoolEvent";

    readonly $typeArgs: [];

    readonly poolId:
        ToField<ID>
    ; readonly coinTypeA:
        ToField<String>
    ; readonly coinTypeB:
        ToField<String>
    ; readonly tickSpacing:
        ToField<"u32">

    private constructor(typeArgs: [], fields: CreatePoolEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            CreatePoolEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::CreatePoolEvent";
        this.$typeArgs = typeArgs;

        this.poolId = fields.poolId;; this.coinTypeA = fields.coinTypeA;; this.coinTypeB = fields.coinTypeB;; this.tickSpacing = fields.tickSpacing;
    }

    static reified(): CreatePoolEventReified {
        return {
            typeName: CreatePoolEvent.$typeName,
            fullTypeName: composeSuiType(
                CreatePoolEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::CreatePoolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                CreatePoolEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                CreatePoolEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                CreatePoolEvent.fromBcs(
                    data,
                ),
            bcs: CreatePoolEvent.bcs,
            fromJSONField: (field: any) =>
                CreatePoolEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                CreatePoolEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                CreatePoolEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => CreatePoolEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: CreatePoolEventFields,
            ) => {
                return new CreatePoolEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return CreatePoolEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<CreatePoolEvent>> {
        return phantom(CreatePoolEvent.reified());
    }

    static get p() {
        return CreatePoolEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("CreatePoolEvent", {
            pool_id:
                ID.bcs
            , coin_type_a:
                String.bcs
            , coin_type_b:
                String.bcs
            , tick_spacing:
                bcs.u32()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): CreatePoolEvent {
        return CreatePoolEvent.reified().new(
            {poolId: decodeFromFields(ID.reified(), fields.pool_id), coinTypeA: decodeFromFields(String.reified(), fields.coin_type_a), coinTypeB: decodeFromFields(String.reified(), fields.coin_type_b), tickSpacing: decodeFromFields("u32", fields.tick_spacing)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): CreatePoolEvent {
        if (!isCreatePoolEvent(item.type)) {
            throw new Error("not a CreatePoolEvent type");
        }

        return CreatePoolEvent.reified().new(
            {poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), coinTypeA: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_type_a), coinTypeB: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_type_b), tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): CreatePoolEvent {

        return CreatePoolEvent.fromFields(
            CreatePoolEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            poolId: this.poolId,coinTypeA: this.coinTypeA,coinTypeB: this.coinTypeB,tickSpacing: this.tickSpacing,

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
    ): CreatePoolEvent {
        return CreatePoolEvent.reified().new(
            {poolId: decodeFromJSONField(ID.reified(), field.poolId), coinTypeA: decodeFromJSONField(String.reified(), field.coinTypeA), coinTypeB: decodeFromJSONField(String.reified(), field.coinTypeB), tickSpacing: decodeFromJSONField("u32", field.tickSpacing)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): CreatePoolEvent {
        if (json.$typeName !== CreatePoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return CreatePoolEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): CreatePoolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCreatePoolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CreatePoolEvent object`);
        }
        return CreatePoolEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<CreatePoolEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching CreatePoolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCreatePoolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CreatePoolEvent object`);
        }

        return CreatePoolEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== InitFactoryEvent =============================== */

export function isInitFactoryEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::InitFactoryEvent";
}

export interface InitFactoryEventFields {
    poolsId: ToField<ID>
}

export type InitFactoryEventReified = Reified<
    InitFactoryEvent,
    InitFactoryEventFields
>;

export class InitFactoryEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::InitFactoryEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = InitFactoryEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::InitFactoryEvent";

    readonly $typeArgs: [];

    readonly poolsId:
        ToField<ID>

    private constructor(typeArgs: [], fields: InitFactoryEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            InitFactoryEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::InitFactoryEvent";
        this.$typeArgs = typeArgs;

        this.poolsId = fields.poolsId;
    }

    static reified(): InitFactoryEventReified {
        return {
            typeName: InitFactoryEvent.$typeName,
            fullTypeName: composeSuiType(
                InitFactoryEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::InitFactoryEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                InitFactoryEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                InitFactoryEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                InitFactoryEvent.fromBcs(
                    data,
                ),
            bcs: InitFactoryEvent.bcs,
            fromJSONField: (field: any) =>
                InitFactoryEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                InitFactoryEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                InitFactoryEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => InitFactoryEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: InitFactoryEventFields,
            ) => {
                return new InitFactoryEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return InitFactoryEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<InitFactoryEvent>> {
        return phantom(InitFactoryEvent.reified());
    }

    static get p() {
        return InitFactoryEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("InitFactoryEvent", {
            pools_id:
                ID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): InitFactoryEvent {
        return InitFactoryEvent.reified().new(
            {poolsId: decodeFromFields(ID.reified(), fields.pools_id)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): InitFactoryEvent {
        if (!isInitFactoryEvent(item.type)) {
            throw new Error("not a InitFactoryEvent type");
        }

        return InitFactoryEvent.reified().new(
            {poolsId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pools_id)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): InitFactoryEvent {

        return InitFactoryEvent.fromFields(
            InitFactoryEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            poolsId: this.poolsId,

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
    ): InitFactoryEvent {
        return InitFactoryEvent.reified().new(
            {poolsId: decodeFromJSONField(ID.reified(), field.poolsId)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): InitFactoryEvent {
        if (json.$typeName !== InitFactoryEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return InitFactoryEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): InitFactoryEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isInitFactoryEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a InitFactoryEvent object`);
        }
        return InitFactoryEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<InitFactoryEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching InitFactoryEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isInitFactoryEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a InitFactoryEvent object`);
        }

        return InitFactoryEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PoolSimpleInfo =============================== */

export function isPoolSimpleInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::PoolSimpleInfo";
}

export interface PoolSimpleInfoFields {
    poolId: ToField<ID>; poolKey: ToField<ID>; coinTypeA: ToField<TypeName>; coinTypeB: ToField<TypeName>; tickSpacing: ToField<"u32">
}

export type PoolSimpleInfoReified = Reified<
    PoolSimpleInfo,
    PoolSimpleInfoFields
>;

export class PoolSimpleInfo implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::PoolSimpleInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = PoolSimpleInfo.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::PoolSimpleInfo";

    readonly $typeArgs: [];

    readonly poolId:
        ToField<ID>
    ; readonly poolKey:
        ToField<ID>
    ; readonly coinTypeA:
        ToField<TypeName>
    ; readonly coinTypeB:
        ToField<TypeName>
    ; readonly tickSpacing:
        ToField<"u32">

    private constructor(typeArgs: [], fields: PoolSimpleInfoFields,
    ) {
        this.$fullTypeName = composeSuiType(
            PoolSimpleInfo.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::PoolSimpleInfo";
        this.$typeArgs = typeArgs;

        this.poolId = fields.poolId;; this.poolKey = fields.poolKey;; this.coinTypeA = fields.coinTypeA;; this.coinTypeB = fields.coinTypeB;; this.tickSpacing = fields.tickSpacing;
    }

    static reified(): PoolSimpleInfoReified {
        return {
            typeName: PoolSimpleInfo.$typeName,
            fullTypeName: composeSuiType(
                PoolSimpleInfo.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::PoolSimpleInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                PoolSimpleInfo.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PoolSimpleInfo.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PoolSimpleInfo.fromBcs(
                    data,
                ),
            bcs: PoolSimpleInfo.bcs,
            fromJSONField: (field: any) =>
                PoolSimpleInfo.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PoolSimpleInfo.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PoolSimpleInfo.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PoolSimpleInfo.fetch(
                client,
                id,
            ),
            new: (
                fields: PoolSimpleInfoFields,
            ) => {
                return new PoolSimpleInfo(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PoolSimpleInfo.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<PoolSimpleInfo>> {
        return phantom(PoolSimpleInfo.reified());
    }

    static get p() {
        return PoolSimpleInfo.phantom()
    }

    static get bcs() {
        return bcs.struct("PoolSimpleInfo", {
            pool_id:
                ID.bcs
            , pool_key:
                ID.bcs
            , coin_type_a:
                TypeName.bcs
            , coin_type_b:
                TypeName.bcs
            , tick_spacing:
                bcs.u32()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): PoolSimpleInfo {
        return PoolSimpleInfo.reified().new(
            {poolId: decodeFromFields(ID.reified(), fields.pool_id), poolKey: decodeFromFields(ID.reified(), fields.pool_key), coinTypeA: decodeFromFields(TypeName.reified(), fields.coin_type_a), coinTypeB: decodeFromFields(TypeName.reified(), fields.coin_type_b), tickSpacing: decodeFromFields("u32", fields.tick_spacing)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): PoolSimpleInfo {
        if (!isPoolSimpleInfo(item.type)) {
            throw new Error("not a PoolSimpleInfo type");
        }

        return PoolSimpleInfo.reified().new(
            {poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), poolKey: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_key), coinTypeA: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_a), coinTypeB: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_b), tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): PoolSimpleInfo {

        return PoolSimpleInfo.fromFields(
            PoolSimpleInfo.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            poolId: this.poolId,poolKey: this.poolKey,coinTypeA: this.coinTypeA.toJSONField(),coinTypeB: this.coinTypeB.toJSONField(),tickSpacing: this.tickSpacing,

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
    ): PoolSimpleInfo {
        return PoolSimpleInfo.reified().new(
            {poolId: decodeFromJSONField(ID.reified(), field.poolId), poolKey: decodeFromJSONField(ID.reified(), field.poolKey), coinTypeA: decodeFromJSONField(TypeName.reified(), field.coinTypeA), coinTypeB: decodeFromJSONField(TypeName.reified(), field.coinTypeB), tickSpacing: decodeFromJSONField("u32", field.tickSpacing)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): PoolSimpleInfo {
        if (json.$typeName !== PoolSimpleInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return PoolSimpleInfo.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): PoolSimpleInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPoolSimpleInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PoolSimpleInfo object`);
        }
        return PoolSimpleInfo.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<PoolSimpleInfo> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PoolSimpleInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPoolSimpleInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolSimpleInfo object`);
        }

        return PoolSimpleInfo.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Pools =============================== */

export function isPools(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::Pools";
}

export interface PoolsFields {
    id: ToField<UID>; list: ToField<LinkedTable<ID, ToPhantom<PoolSimpleInfo>>>; index: ToField<"u64">
}

export type PoolsReified = Reified<
    Pools,
    PoolsFields
>;

export class Pools implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::Pools";
    static readonly $numTypeParams = 0;

    readonly $typeName = Pools.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::Pools";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly list:
        ToField<LinkedTable<ID, ToPhantom<PoolSimpleInfo>>>
    ; readonly index:
        ToField<"u64">

    private constructor(typeArgs: [], fields: PoolsFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Pools.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::Pools";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.list = fields.list;; this.index = fields.index;
    }

    static reified(): PoolsReified {
        return {
            typeName: Pools.$typeName,
            fullTypeName: composeSuiType(
                Pools.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::factory::Pools",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Pools.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Pools.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Pools.fromBcs(
                    data,
                ),
            bcs: Pools.bcs,
            fromJSONField: (field: any) =>
                Pools.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Pools.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Pools.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Pools.fetch(
                client,
                id,
            ),
            new: (
                fields: PoolsFields,
            ) => {
                return new Pools(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Pools.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Pools>> {
        return phantom(Pools.reified());
    }

    static get p() {
        return Pools.phantom()
    }

    static get bcs() {
        return bcs.struct("Pools", {
            id:
                UID.bcs
            , list:
                LinkedTable.bcs(ID.bcs)
            , index:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Pools {
        return Pools.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), list: decodeFromFields(LinkedTable.reified(ID.reified(), reified.phantom(PoolSimpleInfo.reified())), fields.list), index: decodeFromFields("u64", fields.index)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Pools {
        if (!isPools(item.type)) {
            throw new Error("not a Pools type");
        }

        return Pools.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), list: decodeFromFieldsWithTypes(LinkedTable.reified(ID.reified(), reified.phantom(PoolSimpleInfo.reified())), item.fields.list), index: decodeFromFieldsWithTypes("u64", item.fields.index)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Pools {

        return Pools.fromFields(
            Pools.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,list: this.list.toJSONField(),index: this.index.toString(),

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
    ): Pools {
        return Pools.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), list: decodeFromJSONField(LinkedTable.reified(ID.reified(), reified.phantom(PoolSimpleInfo.reified())), field.list), index: decodeFromJSONField("u64", field.index)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Pools {
        if (json.$typeName !== Pools.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Pools.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Pools {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPools(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Pools object`);
        }
        return Pools.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Pools> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Pools object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPools(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Pools object`);
        }

        return Pools.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

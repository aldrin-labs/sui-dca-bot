import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {TypeName} from "../../0x1/type-name/structs";
import {Bag} from "../../0x2/bag/structs";
import {ID, UID} from "../../0x2/object/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== DepositEvent =============================== */

export function isDepositEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::DepositEvent";
}

export interface DepositEventFields {
    rewardType: ToField<TypeName>; depositAmount: ToField<"u64">; afterAmount: ToField<"u64">
}

export type DepositEventReified = Reified<
    DepositEvent,
    DepositEventFields
>;

export class DepositEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::DepositEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = DepositEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::DepositEvent";

    readonly $typeArgs: [];

    readonly rewardType:
        ToField<TypeName>
    ; readonly depositAmount:
        ToField<"u64">
    ; readonly afterAmount:
        ToField<"u64">

    private constructor(typeArgs: [], fields: DepositEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            DepositEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::DepositEvent";
        this.$typeArgs = typeArgs;

        this.rewardType = fields.rewardType;; this.depositAmount = fields.depositAmount;; this.afterAmount = fields.afterAmount;
    }

    static reified(): DepositEventReified {
        return {
            typeName: DepositEvent.$typeName,
            fullTypeName: composeSuiType(
                DepositEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::DepositEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                DepositEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                DepositEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                DepositEvent.fromBcs(
                    data,
                ),
            bcs: DepositEvent.bcs,
            fromJSONField: (field: any) =>
                DepositEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                DepositEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                DepositEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => DepositEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: DepositEventFields,
            ) => {
                return new DepositEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return DepositEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<DepositEvent>> {
        return phantom(DepositEvent.reified());
    }

    static get p() {
        return DepositEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("DepositEvent", {
            reward_type:
                TypeName.bcs
            , deposit_amount:
                bcs.u64()
            , after_amount:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): DepositEvent {
        return DepositEvent.reified().new(
            {rewardType: decodeFromFields(TypeName.reified(), fields.reward_type), depositAmount: decodeFromFields("u64", fields.deposit_amount), afterAmount: decodeFromFields("u64", fields.after_amount)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): DepositEvent {
        if (!isDepositEvent(item.type)) {
            throw new Error("not a DepositEvent type");
        }

        return DepositEvent.reified().new(
            {rewardType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.reward_type), depositAmount: decodeFromFieldsWithTypes("u64", item.fields.deposit_amount), afterAmount: decodeFromFieldsWithTypes("u64", item.fields.after_amount)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): DepositEvent {

        return DepositEvent.fromFields(
            DepositEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            rewardType: this.rewardType.toJSONField(),depositAmount: this.depositAmount.toString(),afterAmount: this.afterAmount.toString(),

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
    ): DepositEvent {
        return DepositEvent.reified().new(
            {rewardType: decodeFromJSONField(TypeName.reified(), field.rewardType), depositAmount: decodeFromJSONField("u64", field.depositAmount), afterAmount: decodeFromJSONField("u64", field.afterAmount)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): DepositEvent {
        if (json.$typeName !== DepositEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return DepositEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): DepositEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDepositEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DepositEvent object`);
        }
        return DepositEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<DepositEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching DepositEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDepositEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DepositEvent object`);
        }

        return DepositEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== EmergentWithdrawEvent =============================== */

export function isEmergentWithdrawEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::EmergentWithdrawEvent";
}

export interface EmergentWithdrawEventFields {
    rewardType: ToField<TypeName>; withdrawAmount: ToField<"u64">; afterAmount: ToField<"u64">
}

export type EmergentWithdrawEventReified = Reified<
    EmergentWithdrawEvent,
    EmergentWithdrawEventFields
>;

export class EmergentWithdrawEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::EmergentWithdrawEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = EmergentWithdrawEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::EmergentWithdrawEvent";

    readonly $typeArgs: [];

    readonly rewardType:
        ToField<TypeName>
    ; readonly withdrawAmount:
        ToField<"u64">
    ; readonly afterAmount:
        ToField<"u64">

    private constructor(typeArgs: [], fields: EmergentWithdrawEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            EmergentWithdrawEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::EmergentWithdrawEvent";
        this.$typeArgs = typeArgs;

        this.rewardType = fields.rewardType;; this.withdrawAmount = fields.withdrawAmount;; this.afterAmount = fields.afterAmount;
    }

    static reified(): EmergentWithdrawEventReified {
        return {
            typeName: EmergentWithdrawEvent.$typeName,
            fullTypeName: composeSuiType(
                EmergentWithdrawEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::EmergentWithdrawEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                EmergentWithdrawEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                EmergentWithdrawEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                EmergentWithdrawEvent.fromBcs(
                    data,
                ),
            bcs: EmergentWithdrawEvent.bcs,
            fromJSONField: (field: any) =>
                EmergentWithdrawEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                EmergentWithdrawEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                EmergentWithdrawEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => EmergentWithdrawEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: EmergentWithdrawEventFields,
            ) => {
                return new EmergentWithdrawEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return EmergentWithdrawEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<EmergentWithdrawEvent>> {
        return phantom(EmergentWithdrawEvent.reified());
    }

    static get p() {
        return EmergentWithdrawEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("EmergentWithdrawEvent", {
            reward_type:
                TypeName.bcs
            , withdraw_amount:
                bcs.u64()
            , after_amount:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): EmergentWithdrawEvent {
        return EmergentWithdrawEvent.reified().new(
            {rewardType: decodeFromFields(TypeName.reified(), fields.reward_type), withdrawAmount: decodeFromFields("u64", fields.withdraw_amount), afterAmount: decodeFromFields("u64", fields.after_amount)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): EmergentWithdrawEvent {
        if (!isEmergentWithdrawEvent(item.type)) {
            throw new Error("not a EmergentWithdrawEvent type");
        }

        return EmergentWithdrawEvent.reified().new(
            {rewardType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.reward_type), withdrawAmount: decodeFromFieldsWithTypes("u64", item.fields.withdraw_amount), afterAmount: decodeFromFieldsWithTypes("u64", item.fields.after_amount)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): EmergentWithdrawEvent {

        return EmergentWithdrawEvent.fromFields(
            EmergentWithdrawEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            rewardType: this.rewardType.toJSONField(),withdrawAmount: this.withdrawAmount.toString(),afterAmount: this.afterAmount.toString(),

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
    ): EmergentWithdrawEvent {
        return EmergentWithdrawEvent.reified().new(
            {rewardType: decodeFromJSONField(TypeName.reified(), field.rewardType), withdrawAmount: decodeFromJSONField("u64", field.withdrawAmount), afterAmount: decodeFromJSONField("u64", field.afterAmount)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): EmergentWithdrawEvent {
        if (json.$typeName !== EmergentWithdrawEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return EmergentWithdrawEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): EmergentWithdrawEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isEmergentWithdrawEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a EmergentWithdrawEvent object`);
        }
        return EmergentWithdrawEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<EmergentWithdrawEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching EmergentWithdrawEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isEmergentWithdrawEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EmergentWithdrawEvent object`);
        }

        return EmergentWithdrawEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Rewarder =============================== */

export function isRewarder(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::Rewarder";
}

export interface RewarderFields {
    rewardCoin: ToField<TypeName>; emissionsPerSecond: ToField<"u128">; growthGlobal: ToField<"u128">
}

export type RewarderReified = Reified<
    Rewarder,
    RewarderFields
>;

export class Rewarder implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::Rewarder";
    static readonly $numTypeParams = 0;

    readonly $typeName = Rewarder.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::Rewarder";

    readonly $typeArgs: [];

    readonly rewardCoin:
        ToField<TypeName>
    ; readonly emissionsPerSecond:
        ToField<"u128">
    ; readonly growthGlobal:
        ToField<"u128">

    private constructor(typeArgs: [], fields: RewarderFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Rewarder.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::Rewarder";
        this.$typeArgs = typeArgs;

        this.rewardCoin = fields.rewardCoin;; this.emissionsPerSecond = fields.emissionsPerSecond;; this.growthGlobal = fields.growthGlobal;
    }

    static reified(): RewarderReified {
        return {
            typeName: Rewarder.$typeName,
            fullTypeName: composeSuiType(
                Rewarder.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::Rewarder",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Rewarder.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Rewarder.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Rewarder.fromBcs(
                    data,
                ),
            bcs: Rewarder.bcs,
            fromJSONField: (field: any) =>
                Rewarder.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Rewarder.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Rewarder.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Rewarder.fetch(
                client,
                id,
            ),
            new: (
                fields: RewarderFields,
            ) => {
                return new Rewarder(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Rewarder.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Rewarder>> {
        return phantom(Rewarder.reified());
    }

    static get p() {
        return Rewarder.phantom()
    }

    static get bcs() {
        return bcs.struct("Rewarder", {
            reward_coin:
                TypeName.bcs
            , emissions_per_second:
                bcs.u128()
            , growth_global:
                bcs.u128()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Rewarder {
        return Rewarder.reified().new(
            {rewardCoin: decodeFromFields(TypeName.reified(), fields.reward_coin), emissionsPerSecond: decodeFromFields("u128", fields.emissions_per_second), growthGlobal: decodeFromFields("u128", fields.growth_global)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Rewarder {
        if (!isRewarder(item.type)) {
            throw new Error("not a Rewarder type");
        }

        return Rewarder.reified().new(
            {rewardCoin: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.reward_coin), emissionsPerSecond: decodeFromFieldsWithTypes("u128", item.fields.emissions_per_second), growthGlobal: decodeFromFieldsWithTypes("u128", item.fields.growth_global)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Rewarder {

        return Rewarder.fromFields(
            Rewarder.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            rewardCoin: this.rewardCoin.toJSONField(),emissionsPerSecond: this.emissionsPerSecond.toString(),growthGlobal: this.growthGlobal.toString(),

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
    ): Rewarder {
        return Rewarder.reified().new(
            {rewardCoin: decodeFromJSONField(TypeName.reified(), field.rewardCoin), emissionsPerSecond: decodeFromJSONField("u128", field.emissionsPerSecond), growthGlobal: decodeFromJSONField("u128", field.growthGlobal)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Rewarder {
        if (json.$typeName !== Rewarder.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Rewarder.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Rewarder {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRewarder(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Rewarder object`);
        }
        return Rewarder.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Rewarder> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Rewarder object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRewarder(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Rewarder object`);
        }

        return Rewarder.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== RewarderGlobalVault =============================== */

export function isRewarderGlobalVault(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderGlobalVault";
}

export interface RewarderGlobalVaultFields {
    id: ToField<UID>; balances: ToField<Bag>
}

export type RewarderGlobalVaultReified = Reified<
    RewarderGlobalVault,
    RewarderGlobalVaultFields
>;

export class RewarderGlobalVault implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderGlobalVault";
    static readonly $numTypeParams = 0;

    readonly $typeName = RewarderGlobalVault.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderGlobalVault";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly balances:
        ToField<Bag>

    private constructor(typeArgs: [], fields: RewarderGlobalVaultFields,
    ) {
        this.$fullTypeName = composeSuiType(
            RewarderGlobalVault.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderGlobalVault";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.balances = fields.balances;
    }

    static reified(): RewarderGlobalVaultReified {
        return {
            typeName: RewarderGlobalVault.$typeName,
            fullTypeName: composeSuiType(
                RewarderGlobalVault.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderGlobalVault",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                RewarderGlobalVault.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                RewarderGlobalVault.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                RewarderGlobalVault.fromBcs(
                    data,
                ),
            bcs: RewarderGlobalVault.bcs,
            fromJSONField: (field: any) =>
                RewarderGlobalVault.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                RewarderGlobalVault.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                RewarderGlobalVault.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => RewarderGlobalVault.fetch(
                client,
                id,
            ),
            new: (
                fields: RewarderGlobalVaultFields,
            ) => {
                return new RewarderGlobalVault(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return RewarderGlobalVault.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<RewarderGlobalVault>> {
        return phantom(RewarderGlobalVault.reified());
    }

    static get p() {
        return RewarderGlobalVault.phantom()
    }

    static get bcs() {
        return bcs.struct("RewarderGlobalVault", {
            id:
                UID.bcs
            , balances:
                Bag.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): RewarderGlobalVault {
        return RewarderGlobalVault.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), balances: decodeFromFields(Bag.reified(), fields.balances)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): RewarderGlobalVault {
        if (!isRewarderGlobalVault(item.type)) {
            throw new Error("not a RewarderGlobalVault type");
        }

        return RewarderGlobalVault.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), balances: decodeFromFieldsWithTypes(Bag.reified(), item.fields.balances)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): RewarderGlobalVault {

        return RewarderGlobalVault.fromFields(
            RewarderGlobalVault.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,balances: this.balances.toJSONField(),

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
    ): RewarderGlobalVault {
        return RewarderGlobalVault.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), balances: decodeFromJSONField(Bag.reified(), field.balances)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): RewarderGlobalVault {
        if (json.$typeName !== RewarderGlobalVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return RewarderGlobalVault.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): RewarderGlobalVault {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRewarderGlobalVault(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RewarderGlobalVault object`);
        }
        return RewarderGlobalVault.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<RewarderGlobalVault> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching RewarderGlobalVault object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRewarderGlobalVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RewarderGlobalVault object`);
        }

        return RewarderGlobalVault.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== RewarderInitEvent =============================== */

export function isRewarderInitEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderInitEvent";
}

export interface RewarderInitEventFields {
    globalVaultId: ToField<ID>
}

export type RewarderInitEventReified = Reified<
    RewarderInitEvent,
    RewarderInitEventFields
>;

export class RewarderInitEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderInitEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RewarderInitEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderInitEvent";

    readonly $typeArgs: [];

    readonly globalVaultId:
        ToField<ID>

    private constructor(typeArgs: [], fields: RewarderInitEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            RewarderInitEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderInitEvent";
        this.$typeArgs = typeArgs;

        this.globalVaultId = fields.globalVaultId;
    }

    static reified(): RewarderInitEventReified {
        return {
            typeName: RewarderInitEvent.$typeName,
            fullTypeName: composeSuiType(
                RewarderInitEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderInitEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                RewarderInitEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                RewarderInitEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                RewarderInitEvent.fromBcs(
                    data,
                ),
            bcs: RewarderInitEvent.bcs,
            fromJSONField: (field: any) =>
                RewarderInitEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                RewarderInitEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                RewarderInitEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => RewarderInitEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: RewarderInitEventFields,
            ) => {
                return new RewarderInitEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return RewarderInitEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<RewarderInitEvent>> {
        return phantom(RewarderInitEvent.reified());
    }

    static get p() {
        return RewarderInitEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("RewarderInitEvent", {
            global_vault_id:
                ID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): RewarderInitEvent {
        return RewarderInitEvent.reified().new(
            {globalVaultId: decodeFromFields(ID.reified(), fields.global_vault_id)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): RewarderInitEvent {
        if (!isRewarderInitEvent(item.type)) {
            throw new Error("not a RewarderInitEvent type");
        }

        return RewarderInitEvent.reified().new(
            {globalVaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.global_vault_id)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): RewarderInitEvent {

        return RewarderInitEvent.fromFields(
            RewarderInitEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            globalVaultId: this.globalVaultId,

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
    ): RewarderInitEvent {
        return RewarderInitEvent.reified().new(
            {globalVaultId: decodeFromJSONField(ID.reified(), field.globalVaultId)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): RewarderInitEvent {
        if (json.$typeName !== RewarderInitEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return RewarderInitEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): RewarderInitEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRewarderInitEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RewarderInitEvent object`);
        }
        return RewarderInitEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<RewarderInitEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching RewarderInitEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRewarderInitEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RewarderInitEvent object`);
        }

        return RewarderInitEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== RewarderManager =============================== */

export function isRewarderManager(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderManager";
}

export interface RewarderManagerFields {
    rewarders: ToField<Vector<Rewarder>>; pointsReleased: ToField<"u128">; pointsGrowthGlobal: ToField<"u128">; lastUpdatedTime: ToField<"u64">
}

export type RewarderManagerReified = Reified<
    RewarderManager,
    RewarderManagerFields
>;

export class RewarderManager implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderManager";
    static readonly $numTypeParams = 0;

    readonly $typeName = RewarderManager.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderManager";

    readonly $typeArgs: [];

    readonly rewarders:
        ToField<Vector<Rewarder>>
    ; readonly pointsReleased:
        ToField<"u128">
    ; readonly pointsGrowthGlobal:
        ToField<"u128">
    ; readonly lastUpdatedTime:
        ToField<"u64">

    private constructor(typeArgs: [], fields: RewarderManagerFields,
    ) {
        this.$fullTypeName = composeSuiType(
            RewarderManager.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderManager";
        this.$typeArgs = typeArgs;

        this.rewarders = fields.rewarders;; this.pointsReleased = fields.pointsReleased;; this.pointsGrowthGlobal = fields.pointsGrowthGlobal;; this.lastUpdatedTime = fields.lastUpdatedTime;
    }

    static reified(): RewarderManagerReified {
        return {
            typeName: RewarderManager.$typeName,
            fullTypeName: composeSuiType(
                RewarderManager.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::RewarderManager",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                RewarderManager.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                RewarderManager.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                RewarderManager.fromBcs(
                    data,
                ),
            bcs: RewarderManager.bcs,
            fromJSONField: (field: any) =>
                RewarderManager.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                RewarderManager.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                RewarderManager.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => RewarderManager.fetch(
                client,
                id,
            ),
            new: (
                fields: RewarderManagerFields,
            ) => {
                return new RewarderManager(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return RewarderManager.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<RewarderManager>> {
        return phantom(RewarderManager.reified());
    }

    static get p() {
        return RewarderManager.phantom()
    }

    static get bcs() {
        return bcs.struct("RewarderManager", {
            rewarders:
                bcs.vector(Rewarder.bcs)
            , points_released:
                bcs.u128()
            , points_growth_global:
                bcs.u128()
            , last_updated_time:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): RewarderManager {
        return RewarderManager.reified().new(
            {rewarders: decodeFromFields(reified.vector(Rewarder.reified()), fields.rewarders), pointsReleased: decodeFromFields("u128", fields.points_released), pointsGrowthGlobal: decodeFromFields("u128", fields.points_growth_global), lastUpdatedTime: decodeFromFields("u64", fields.last_updated_time)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): RewarderManager {
        if (!isRewarderManager(item.type)) {
            throw new Error("not a RewarderManager type");
        }

        return RewarderManager.reified().new(
            {rewarders: decodeFromFieldsWithTypes(reified.vector(Rewarder.reified()), item.fields.rewarders), pointsReleased: decodeFromFieldsWithTypes("u128", item.fields.points_released), pointsGrowthGlobal: decodeFromFieldsWithTypes("u128", item.fields.points_growth_global), lastUpdatedTime: decodeFromFieldsWithTypes("u64", item.fields.last_updated_time)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): RewarderManager {

        return RewarderManager.fromFields(
            RewarderManager.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            rewarders: fieldToJSON<Vector<Rewarder>>(`vector<0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::rewarder::Rewarder>`, this.rewarders),pointsReleased: this.pointsReleased.toString(),pointsGrowthGlobal: this.pointsGrowthGlobal.toString(),lastUpdatedTime: this.lastUpdatedTime.toString(),

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
    ): RewarderManager {
        return RewarderManager.reified().new(
            {rewarders: decodeFromJSONField(reified.vector(Rewarder.reified()), field.rewarders), pointsReleased: decodeFromJSONField("u128", field.pointsReleased), pointsGrowthGlobal: decodeFromJSONField("u128", field.pointsGrowthGlobal), lastUpdatedTime: decodeFromJSONField("u64", field.lastUpdatedTime)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): RewarderManager {
        if (json.$typeName !== RewarderManager.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return RewarderManager.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): RewarderManager {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRewarderManager(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RewarderManager object`);
        }
        return RewarderManager.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<RewarderManager> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching RewarderManager object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRewarderManager(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RewarderManager object`);
        }

        return RewarderManager.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

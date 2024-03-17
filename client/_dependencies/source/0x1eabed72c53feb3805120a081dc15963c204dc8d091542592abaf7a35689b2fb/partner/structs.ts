import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {Bag} from "../../0x2/bag/structs";
import {ID, UID} from "../../0x2/object/structs";
import {VecMap} from "../../0x2/vec-map/structs";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== ClaimRefFeeEvent =============================== */

export function isClaimRefFeeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ClaimRefFeeEvent";
}

export interface ClaimRefFeeEventFields {
    partnerId: ToField<ID>; amount: ToField<"u64">; typeName: ToField<String>
}

export type ClaimRefFeeEventReified = Reified<
    ClaimRefFeeEvent,
    ClaimRefFeeEventFields
>;

export class ClaimRefFeeEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ClaimRefFeeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = ClaimRefFeeEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ClaimRefFeeEvent";

    readonly $typeArgs: [];

    readonly partnerId:
        ToField<ID>
    ; readonly amount:
        ToField<"u64">
    ; readonly typeName:
        ToField<String>

    private constructor(typeArgs: [], fields: ClaimRefFeeEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            ClaimRefFeeEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ClaimRefFeeEvent";
        this.$typeArgs = typeArgs;

        this.partnerId = fields.partnerId;; this.amount = fields.amount;; this.typeName = fields.typeName;
    }

    static reified(): ClaimRefFeeEventReified {
        return {
            typeName: ClaimRefFeeEvent.$typeName,
            fullTypeName: composeSuiType(
                ClaimRefFeeEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ClaimRefFeeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                ClaimRefFeeEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                ClaimRefFeeEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                ClaimRefFeeEvent.fromBcs(
                    data,
                ),
            bcs: ClaimRefFeeEvent.bcs,
            fromJSONField: (field: any) =>
                ClaimRefFeeEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                ClaimRefFeeEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                ClaimRefFeeEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => ClaimRefFeeEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: ClaimRefFeeEventFields,
            ) => {
                return new ClaimRefFeeEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return ClaimRefFeeEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<ClaimRefFeeEvent>> {
        return phantom(ClaimRefFeeEvent.reified());
    }

    static get p() {
        return ClaimRefFeeEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("ClaimRefFeeEvent", {
            partner_id:
                ID.bcs
            , amount:
                bcs.u64()
            , type_name:
                String.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): ClaimRefFeeEvent {
        return ClaimRefFeeEvent.reified().new(
            {partnerId: decodeFromFields(ID.reified(), fields.partner_id), amount: decodeFromFields("u64", fields.amount), typeName: decodeFromFields(String.reified(), fields.type_name)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): ClaimRefFeeEvent {
        if (!isClaimRefFeeEvent(item.type)) {
            throw new Error("not a ClaimRefFeeEvent type");
        }

        return ClaimRefFeeEvent.reified().new(
            {partnerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.partner_id), amount: decodeFromFieldsWithTypes("u64", item.fields.amount), typeName: decodeFromFieldsWithTypes(String.reified(), item.fields.type_name)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): ClaimRefFeeEvent {

        return ClaimRefFeeEvent.fromFields(
            ClaimRefFeeEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            partnerId: this.partnerId,amount: this.amount.toString(),typeName: this.typeName,

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
    ): ClaimRefFeeEvent {
        return ClaimRefFeeEvent.reified().new(
            {partnerId: decodeFromJSONField(ID.reified(), field.partnerId), amount: decodeFromJSONField("u64", field.amount), typeName: decodeFromJSONField(String.reified(), field.typeName)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): ClaimRefFeeEvent {
        if (json.$typeName !== ClaimRefFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return ClaimRefFeeEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): ClaimRefFeeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isClaimRefFeeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ClaimRefFeeEvent object`);
        }
        return ClaimRefFeeEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<ClaimRefFeeEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching ClaimRefFeeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isClaimRefFeeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ClaimRefFeeEvent object`);
        }

        return ClaimRefFeeEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== CreatePartnerEvent =============================== */

export function isCreatePartnerEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::CreatePartnerEvent";
}

export interface CreatePartnerEventFields {
    recipient: ToField<"address">; partnerId: ToField<ID>; partnerCapId: ToField<ID>; refFeeRate: ToField<"u64">; name: ToField<String>; startTime: ToField<"u64">; endTime: ToField<"u64">
}

export type CreatePartnerEventReified = Reified<
    CreatePartnerEvent,
    CreatePartnerEventFields
>;

export class CreatePartnerEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::CreatePartnerEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = CreatePartnerEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::CreatePartnerEvent";

    readonly $typeArgs: [];

    readonly recipient:
        ToField<"address">
    ; readonly partnerId:
        ToField<ID>
    ; readonly partnerCapId:
        ToField<ID>
    ; readonly refFeeRate:
        ToField<"u64">
    ; readonly name:
        ToField<String>
    ; readonly startTime:
        ToField<"u64">
    ; readonly endTime:
        ToField<"u64">

    private constructor(typeArgs: [], fields: CreatePartnerEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            CreatePartnerEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::CreatePartnerEvent";
        this.$typeArgs = typeArgs;

        this.recipient = fields.recipient;; this.partnerId = fields.partnerId;; this.partnerCapId = fields.partnerCapId;; this.refFeeRate = fields.refFeeRate;; this.name = fields.name;; this.startTime = fields.startTime;; this.endTime = fields.endTime;
    }

    static reified(): CreatePartnerEventReified {
        return {
            typeName: CreatePartnerEvent.$typeName,
            fullTypeName: composeSuiType(
                CreatePartnerEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::CreatePartnerEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                CreatePartnerEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                CreatePartnerEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                CreatePartnerEvent.fromBcs(
                    data,
                ),
            bcs: CreatePartnerEvent.bcs,
            fromJSONField: (field: any) =>
                CreatePartnerEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                CreatePartnerEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                CreatePartnerEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => CreatePartnerEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: CreatePartnerEventFields,
            ) => {
                return new CreatePartnerEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return CreatePartnerEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<CreatePartnerEvent>> {
        return phantom(CreatePartnerEvent.reified());
    }

    static get p() {
        return CreatePartnerEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("CreatePartnerEvent", {
            recipient:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , partner_id:
                ID.bcs
            , partner_cap_id:
                ID.bcs
            , ref_fee_rate:
                bcs.u64()
            , name:
                String.bcs
            , start_time:
                bcs.u64()
            , end_time:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): CreatePartnerEvent {
        return CreatePartnerEvent.reified().new(
            {recipient: decodeFromFields("address", fields.recipient), partnerId: decodeFromFields(ID.reified(), fields.partner_id), partnerCapId: decodeFromFields(ID.reified(), fields.partner_cap_id), refFeeRate: decodeFromFields("u64", fields.ref_fee_rate), name: decodeFromFields(String.reified(), fields.name), startTime: decodeFromFields("u64", fields.start_time), endTime: decodeFromFields("u64", fields.end_time)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): CreatePartnerEvent {
        if (!isCreatePartnerEvent(item.type)) {
            throw new Error("not a CreatePartnerEvent type");
        }

        return CreatePartnerEvent.reified().new(
            {recipient: decodeFromFieldsWithTypes("address", item.fields.recipient), partnerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.partner_id), partnerCapId: decodeFromFieldsWithTypes(ID.reified(), item.fields.partner_cap_id), refFeeRate: decodeFromFieldsWithTypes("u64", item.fields.ref_fee_rate), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), startTime: decodeFromFieldsWithTypes("u64", item.fields.start_time), endTime: decodeFromFieldsWithTypes("u64", item.fields.end_time)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): CreatePartnerEvent {

        return CreatePartnerEvent.fromFields(
            CreatePartnerEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            recipient: this.recipient,partnerId: this.partnerId,partnerCapId: this.partnerCapId,refFeeRate: this.refFeeRate.toString(),name: this.name,startTime: this.startTime.toString(),endTime: this.endTime.toString(),

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
    ): CreatePartnerEvent {
        return CreatePartnerEvent.reified().new(
            {recipient: decodeFromJSONField("address", field.recipient), partnerId: decodeFromJSONField(ID.reified(), field.partnerId), partnerCapId: decodeFromJSONField(ID.reified(), field.partnerCapId), refFeeRate: decodeFromJSONField("u64", field.refFeeRate), name: decodeFromJSONField(String.reified(), field.name), startTime: decodeFromJSONField("u64", field.startTime), endTime: decodeFromJSONField("u64", field.endTime)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): CreatePartnerEvent {
        if (json.$typeName !== CreatePartnerEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return CreatePartnerEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): CreatePartnerEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isCreatePartnerEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a CreatePartnerEvent object`);
        }
        return CreatePartnerEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<CreatePartnerEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching CreatePartnerEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isCreatePartnerEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CreatePartnerEvent object`);
        }

        return CreatePartnerEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== InitPartnerEvent =============================== */

export function isInitPartnerEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::InitPartnerEvent";
}

export interface InitPartnerEventFields {
    partnersId: ToField<ID>
}

export type InitPartnerEventReified = Reified<
    InitPartnerEvent,
    InitPartnerEventFields
>;

export class InitPartnerEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::InitPartnerEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = InitPartnerEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::InitPartnerEvent";

    readonly $typeArgs: [];

    readonly partnersId:
        ToField<ID>

    private constructor(typeArgs: [], fields: InitPartnerEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            InitPartnerEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::InitPartnerEvent";
        this.$typeArgs = typeArgs;

        this.partnersId = fields.partnersId;
    }

    static reified(): InitPartnerEventReified {
        return {
            typeName: InitPartnerEvent.$typeName,
            fullTypeName: composeSuiType(
                InitPartnerEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::InitPartnerEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                InitPartnerEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                InitPartnerEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                InitPartnerEvent.fromBcs(
                    data,
                ),
            bcs: InitPartnerEvent.bcs,
            fromJSONField: (field: any) =>
                InitPartnerEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                InitPartnerEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                InitPartnerEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => InitPartnerEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: InitPartnerEventFields,
            ) => {
                return new InitPartnerEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return InitPartnerEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<InitPartnerEvent>> {
        return phantom(InitPartnerEvent.reified());
    }

    static get p() {
        return InitPartnerEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("InitPartnerEvent", {
            partners_id:
                ID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): InitPartnerEvent {
        return InitPartnerEvent.reified().new(
            {partnersId: decodeFromFields(ID.reified(), fields.partners_id)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): InitPartnerEvent {
        if (!isInitPartnerEvent(item.type)) {
            throw new Error("not a InitPartnerEvent type");
        }

        return InitPartnerEvent.reified().new(
            {partnersId: decodeFromFieldsWithTypes(ID.reified(), item.fields.partners_id)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): InitPartnerEvent {

        return InitPartnerEvent.fromFields(
            InitPartnerEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            partnersId: this.partnersId,

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
    ): InitPartnerEvent {
        return InitPartnerEvent.reified().new(
            {partnersId: decodeFromJSONField(ID.reified(), field.partnersId)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): InitPartnerEvent {
        if (json.$typeName !== InitPartnerEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return InitPartnerEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): InitPartnerEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isInitPartnerEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a InitPartnerEvent object`);
        }
        return InitPartnerEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<InitPartnerEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching InitPartnerEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isInitPartnerEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a InitPartnerEvent object`);
        }

        return InitPartnerEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Partner =============================== */

export function isPartner(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partner";
}

export interface PartnerFields {
    id: ToField<UID>; name: ToField<String>; refFeeRate: ToField<"u64">; startTime: ToField<"u64">; endTime: ToField<"u64">; balances: ToField<Bag>
}

export type PartnerReified = Reified<
    Partner,
    PartnerFields
>;

export class Partner implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partner";
    static readonly $numTypeParams = 0;

    readonly $typeName = Partner.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partner";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly name:
        ToField<String>
    ; readonly refFeeRate:
        ToField<"u64">
    ; readonly startTime:
        ToField<"u64">
    ; readonly endTime:
        ToField<"u64">
    ; readonly balances:
        ToField<Bag>

    private constructor(typeArgs: [], fields: PartnerFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Partner.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partner";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.name = fields.name;; this.refFeeRate = fields.refFeeRate;; this.startTime = fields.startTime;; this.endTime = fields.endTime;; this.balances = fields.balances;
    }

    static reified(): PartnerReified {
        return {
            typeName: Partner.$typeName,
            fullTypeName: composeSuiType(
                Partner.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partner",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Partner.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Partner.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Partner.fromBcs(
                    data,
                ),
            bcs: Partner.bcs,
            fromJSONField: (field: any) =>
                Partner.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Partner.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Partner.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Partner.fetch(
                client,
                id,
            ),
            new: (
                fields: PartnerFields,
            ) => {
                return new Partner(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Partner.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Partner>> {
        return phantom(Partner.reified());
    }

    static get p() {
        return Partner.phantom()
    }

    static get bcs() {
        return bcs.struct("Partner", {
            id:
                UID.bcs
            , name:
                String.bcs
            , ref_fee_rate:
                bcs.u64()
            , start_time:
                bcs.u64()
            , end_time:
                bcs.u64()
            , balances:
                Bag.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Partner {
        return Partner.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), name: decodeFromFields(String.reified(), fields.name), refFeeRate: decodeFromFields("u64", fields.ref_fee_rate), startTime: decodeFromFields("u64", fields.start_time), endTime: decodeFromFields("u64", fields.end_time), balances: decodeFromFields(Bag.reified(), fields.balances)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Partner {
        if (!isPartner(item.type)) {
            throw new Error("not a Partner type");
        }

        return Partner.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), refFeeRate: decodeFromFieldsWithTypes("u64", item.fields.ref_fee_rate), startTime: decodeFromFieldsWithTypes("u64", item.fields.start_time), endTime: decodeFromFieldsWithTypes("u64", item.fields.end_time), balances: decodeFromFieldsWithTypes(Bag.reified(), item.fields.balances)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Partner {

        return Partner.fromFields(
            Partner.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,name: this.name,refFeeRate: this.refFeeRate.toString(),startTime: this.startTime.toString(),endTime: this.endTime.toString(),balances: this.balances.toJSONField(),

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
    ): Partner {
        return Partner.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), name: decodeFromJSONField(String.reified(), field.name), refFeeRate: decodeFromJSONField("u64", field.refFeeRate), startTime: decodeFromJSONField("u64", field.startTime), endTime: decodeFromJSONField("u64", field.endTime), balances: decodeFromJSONField(Bag.reified(), field.balances)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Partner {
        if (json.$typeName !== Partner.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Partner.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Partner {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPartner(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Partner object`);
        }
        return Partner.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Partner> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Partner object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPartner(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Partner object`);
        }

        return Partner.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PartnerCap =============================== */

export function isPartnerCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::PartnerCap";
}

export interface PartnerCapFields {
    id: ToField<UID>; name: ToField<String>; partnerId: ToField<ID>
}

export type PartnerCapReified = Reified<
    PartnerCap,
    PartnerCapFields
>;

export class PartnerCap implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::PartnerCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = PartnerCap.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::PartnerCap";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly name:
        ToField<String>
    ; readonly partnerId:
        ToField<ID>

    private constructor(typeArgs: [], fields: PartnerCapFields,
    ) {
        this.$fullTypeName = composeSuiType(
            PartnerCap.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::PartnerCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.name = fields.name;; this.partnerId = fields.partnerId;
    }

    static reified(): PartnerCapReified {
        return {
            typeName: PartnerCap.$typeName,
            fullTypeName: composeSuiType(
                PartnerCap.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::PartnerCap",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                PartnerCap.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PartnerCap.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PartnerCap.fromBcs(
                    data,
                ),
            bcs: PartnerCap.bcs,
            fromJSONField: (field: any) =>
                PartnerCap.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PartnerCap.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PartnerCap.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PartnerCap.fetch(
                client,
                id,
            ),
            new: (
                fields: PartnerCapFields,
            ) => {
                return new PartnerCap(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PartnerCap.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<PartnerCap>> {
        return phantom(PartnerCap.reified());
    }

    static get p() {
        return PartnerCap.phantom()
    }

    static get bcs() {
        return bcs.struct("PartnerCap", {
            id:
                UID.bcs
            , name:
                String.bcs
            , partner_id:
                ID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): PartnerCap {
        return PartnerCap.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), name: decodeFromFields(String.reified(), fields.name), partnerId: decodeFromFields(ID.reified(), fields.partner_id)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): PartnerCap {
        if (!isPartnerCap(item.type)) {
            throw new Error("not a PartnerCap type");
        }

        return PartnerCap.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), partnerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.partner_id)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): PartnerCap {

        return PartnerCap.fromFields(
            PartnerCap.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,name: this.name,partnerId: this.partnerId,

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
    ): PartnerCap {
        return PartnerCap.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), name: decodeFromJSONField(String.reified(), field.name), partnerId: decodeFromJSONField(ID.reified(), field.partnerId)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): PartnerCap {
        if (json.$typeName !== PartnerCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return PartnerCap.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): PartnerCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPartnerCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PartnerCap object`);
        }
        return PartnerCap.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<PartnerCap> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PartnerCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPartnerCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PartnerCap object`);
        }

        return PartnerCap.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Partners =============================== */

export function isPartners(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partners";
}

export interface PartnersFields {
    id: ToField<UID>; partners: ToField<VecMap<String, ID>>
}

export type PartnersReified = Reified<
    Partners,
    PartnersFields
>;

export class Partners implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partners";
    static readonly $numTypeParams = 0;

    readonly $typeName = Partners.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partners";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly partners:
        ToField<VecMap<String, ID>>

    private constructor(typeArgs: [], fields: PartnersFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Partners.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partners";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.partners = fields.partners;
    }

    static reified(): PartnersReified {
        return {
            typeName: Partners.$typeName,
            fullTypeName: composeSuiType(
                Partners.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::Partners",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Partners.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Partners.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Partners.fromBcs(
                    data,
                ),
            bcs: Partners.bcs,
            fromJSONField: (field: any) =>
                Partners.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Partners.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Partners.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Partners.fetch(
                client,
                id,
            ),
            new: (
                fields: PartnersFields,
            ) => {
                return new Partners(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Partners.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Partners>> {
        return phantom(Partners.reified());
    }

    static get p() {
        return Partners.phantom()
    }

    static get bcs() {
        return bcs.struct("Partners", {
            id:
                UID.bcs
            , partners:
                VecMap.bcs(String.bcs, ID.bcs)

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Partners {
        return Partners.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), partners: decodeFromFields(VecMap.reified(String.reified(), ID.reified()), fields.partners)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Partners {
        if (!isPartners(item.type)) {
            throw new Error("not a Partners type");
        }

        return Partners.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), partners: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), ID.reified()), item.fields.partners)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Partners {

        return Partners.fromFields(
            Partners.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,partners: this.partners.toJSONField(),

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
    ): Partners {
        return Partners.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), partners: decodeFromJSONField(VecMap.reified(String.reified(), ID.reified()), field.partners)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Partners {
        if (json.$typeName !== Partners.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Partners.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Partners {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPartners(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Partners object`);
        }
        return Partners.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Partners> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Partners object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPartners(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Partners object`);
        }

        return Partners.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== ReceiveRefFeeEvent =============================== */

export function isReceiveRefFeeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ReceiveRefFeeEvent";
}

export interface ReceiveRefFeeEventFields {
    partnerId: ToField<ID>; amount: ToField<"u64">; typeName: ToField<String>
}

export type ReceiveRefFeeEventReified = Reified<
    ReceiveRefFeeEvent,
    ReceiveRefFeeEventFields
>;

export class ReceiveRefFeeEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ReceiveRefFeeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = ReceiveRefFeeEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ReceiveRefFeeEvent";

    readonly $typeArgs: [];

    readonly partnerId:
        ToField<ID>
    ; readonly amount:
        ToField<"u64">
    ; readonly typeName:
        ToField<String>

    private constructor(typeArgs: [], fields: ReceiveRefFeeEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            ReceiveRefFeeEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ReceiveRefFeeEvent";
        this.$typeArgs = typeArgs;

        this.partnerId = fields.partnerId;; this.amount = fields.amount;; this.typeName = fields.typeName;
    }

    static reified(): ReceiveRefFeeEventReified {
        return {
            typeName: ReceiveRefFeeEvent.$typeName,
            fullTypeName: composeSuiType(
                ReceiveRefFeeEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::ReceiveRefFeeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                ReceiveRefFeeEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                ReceiveRefFeeEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                ReceiveRefFeeEvent.fromBcs(
                    data,
                ),
            bcs: ReceiveRefFeeEvent.bcs,
            fromJSONField: (field: any) =>
                ReceiveRefFeeEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                ReceiveRefFeeEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                ReceiveRefFeeEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => ReceiveRefFeeEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: ReceiveRefFeeEventFields,
            ) => {
                return new ReceiveRefFeeEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return ReceiveRefFeeEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<ReceiveRefFeeEvent>> {
        return phantom(ReceiveRefFeeEvent.reified());
    }

    static get p() {
        return ReceiveRefFeeEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("ReceiveRefFeeEvent", {
            partner_id:
                ID.bcs
            , amount:
                bcs.u64()
            , type_name:
                String.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): ReceiveRefFeeEvent {
        return ReceiveRefFeeEvent.reified().new(
            {partnerId: decodeFromFields(ID.reified(), fields.partner_id), amount: decodeFromFields("u64", fields.amount), typeName: decodeFromFields(String.reified(), fields.type_name)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): ReceiveRefFeeEvent {
        if (!isReceiveRefFeeEvent(item.type)) {
            throw new Error("not a ReceiveRefFeeEvent type");
        }

        return ReceiveRefFeeEvent.reified().new(
            {partnerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.partner_id), amount: decodeFromFieldsWithTypes("u64", item.fields.amount), typeName: decodeFromFieldsWithTypes(String.reified(), item.fields.type_name)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): ReceiveRefFeeEvent {

        return ReceiveRefFeeEvent.fromFields(
            ReceiveRefFeeEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            partnerId: this.partnerId,amount: this.amount.toString(),typeName: this.typeName,

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
    ): ReceiveRefFeeEvent {
        return ReceiveRefFeeEvent.reified().new(
            {partnerId: decodeFromJSONField(ID.reified(), field.partnerId), amount: decodeFromJSONField("u64", field.amount), typeName: decodeFromJSONField(String.reified(), field.typeName)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): ReceiveRefFeeEvent {
        if (json.$typeName !== ReceiveRefFeeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return ReceiveRefFeeEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): ReceiveRefFeeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isReceiveRefFeeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ReceiveRefFeeEvent object`);
        }
        return ReceiveRefFeeEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<ReceiveRefFeeEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching ReceiveRefFeeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isReceiveRefFeeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ReceiveRefFeeEvent object`);
        }

        return ReceiveRefFeeEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== UpdateRefFeeRateEvent =============================== */

export function isUpdateRefFeeRateEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateRefFeeRateEvent";
}

export interface UpdateRefFeeRateEventFields {
    partnerId: ToField<ID>; oldFeeRate: ToField<"u64">; newFeeRate: ToField<"u64">
}

export type UpdateRefFeeRateEventReified = Reified<
    UpdateRefFeeRateEvent,
    UpdateRefFeeRateEventFields
>;

export class UpdateRefFeeRateEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateRefFeeRateEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateRefFeeRateEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateRefFeeRateEvent";

    readonly $typeArgs: [];

    readonly partnerId:
        ToField<ID>
    ; readonly oldFeeRate:
        ToField<"u64">
    ; readonly newFeeRate:
        ToField<"u64">

    private constructor(typeArgs: [], fields: UpdateRefFeeRateEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            UpdateRefFeeRateEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateRefFeeRateEvent";
        this.$typeArgs = typeArgs;

        this.partnerId = fields.partnerId;; this.oldFeeRate = fields.oldFeeRate;; this.newFeeRate = fields.newFeeRate;
    }

    static reified(): UpdateRefFeeRateEventReified {
        return {
            typeName: UpdateRefFeeRateEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateRefFeeRateEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateRefFeeRateEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                UpdateRefFeeRateEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                UpdateRefFeeRateEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                UpdateRefFeeRateEvent.fromBcs(
                    data,
                ),
            bcs: UpdateRefFeeRateEvent.bcs,
            fromJSONField: (field: any) =>
                UpdateRefFeeRateEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                UpdateRefFeeRateEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                UpdateRefFeeRateEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => UpdateRefFeeRateEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: UpdateRefFeeRateEventFields,
            ) => {
                return new UpdateRefFeeRateEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return UpdateRefFeeRateEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateRefFeeRateEvent>> {
        return phantom(UpdateRefFeeRateEvent.reified());
    }

    static get p() {
        return UpdateRefFeeRateEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("UpdateRefFeeRateEvent", {
            partner_id:
                ID.bcs
            , old_fee_rate:
                bcs.u64()
            , new_fee_rate:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): UpdateRefFeeRateEvent {
        return UpdateRefFeeRateEvent.reified().new(
            {partnerId: decodeFromFields(ID.reified(), fields.partner_id), oldFeeRate: decodeFromFields("u64", fields.old_fee_rate), newFeeRate: decodeFromFields("u64", fields.new_fee_rate)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): UpdateRefFeeRateEvent {
        if (!isUpdateRefFeeRateEvent(item.type)) {
            throw new Error("not a UpdateRefFeeRateEvent type");
        }

        return UpdateRefFeeRateEvent.reified().new(
            {partnerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.partner_id), oldFeeRate: decodeFromFieldsWithTypes("u64", item.fields.old_fee_rate), newFeeRate: decodeFromFieldsWithTypes("u64", item.fields.new_fee_rate)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): UpdateRefFeeRateEvent {

        return UpdateRefFeeRateEvent.fromFields(
            UpdateRefFeeRateEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            partnerId: this.partnerId,oldFeeRate: this.oldFeeRate.toString(),newFeeRate: this.newFeeRate.toString(),

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
    ): UpdateRefFeeRateEvent {
        return UpdateRefFeeRateEvent.reified().new(
            {partnerId: decodeFromJSONField(ID.reified(), field.partnerId), oldFeeRate: decodeFromJSONField("u64", field.oldFeeRate), newFeeRate: decodeFromJSONField("u64", field.newFeeRate)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): UpdateRefFeeRateEvent {
        if (json.$typeName !== UpdateRefFeeRateEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return UpdateRefFeeRateEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): UpdateRefFeeRateEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateRefFeeRateEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateRefFeeRateEvent object`);
        }
        return UpdateRefFeeRateEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<UpdateRefFeeRateEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching UpdateRefFeeRateEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateRefFeeRateEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateRefFeeRateEvent object`);
        }

        return UpdateRefFeeRateEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== UpdateTimeRangeEvent =============================== */

export function isUpdateTimeRangeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateTimeRangeEvent";
}

export interface UpdateTimeRangeEventFields {
    partnerId: ToField<ID>; startTime: ToField<"u64">; endTime: ToField<"u64">
}

export type UpdateTimeRangeEventReified = Reified<
    UpdateTimeRangeEvent,
    UpdateTimeRangeEventFields
>;

export class UpdateTimeRangeEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateTimeRangeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateTimeRangeEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateTimeRangeEvent";

    readonly $typeArgs: [];

    readonly partnerId:
        ToField<ID>
    ; readonly startTime:
        ToField<"u64">
    ; readonly endTime:
        ToField<"u64">

    private constructor(typeArgs: [], fields: UpdateTimeRangeEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            UpdateTimeRangeEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateTimeRangeEvent";
        this.$typeArgs = typeArgs;

        this.partnerId = fields.partnerId;; this.startTime = fields.startTime;; this.endTime = fields.endTime;
    }

    static reified(): UpdateTimeRangeEventReified {
        return {
            typeName: UpdateTimeRangeEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateTimeRangeEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::partner::UpdateTimeRangeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                UpdateTimeRangeEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                UpdateTimeRangeEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                UpdateTimeRangeEvent.fromBcs(
                    data,
                ),
            bcs: UpdateTimeRangeEvent.bcs,
            fromJSONField: (field: any) =>
                UpdateTimeRangeEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                UpdateTimeRangeEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                UpdateTimeRangeEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => UpdateTimeRangeEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: UpdateTimeRangeEventFields,
            ) => {
                return new UpdateTimeRangeEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return UpdateTimeRangeEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateTimeRangeEvent>> {
        return phantom(UpdateTimeRangeEvent.reified());
    }

    static get p() {
        return UpdateTimeRangeEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("UpdateTimeRangeEvent", {
            partner_id:
                ID.bcs
            , start_time:
                bcs.u64()
            , end_time:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): UpdateTimeRangeEvent {
        return UpdateTimeRangeEvent.reified().new(
            {partnerId: decodeFromFields(ID.reified(), fields.partner_id), startTime: decodeFromFields("u64", fields.start_time), endTime: decodeFromFields("u64", fields.end_time)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): UpdateTimeRangeEvent {
        if (!isUpdateTimeRangeEvent(item.type)) {
            throw new Error("not a UpdateTimeRangeEvent type");
        }

        return UpdateTimeRangeEvent.reified().new(
            {partnerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.partner_id), startTime: decodeFromFieldsWithTypes("u64", item.fields.start_time), endTime: decodeFromFieldsWithTypes("u64", item.fields.end_time)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): UpdateTimeRangeEvent {

        return UpdateTimeRangeEvent.fromFields(
            UpdateTimeRangeEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            partnerId: this.partnerId,startTime: this.startTime.toString(),endTime: this.endTime.toString(),

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
    ): UpdateTimeRangeEvent {
        return UpdateTimeRangeEvent.reified().new(
            {partnerId: decodeFromJSONField(ID.reified(), field.partnerId), startTime: decodeFromJSONField("u64", field.startTime), endTime: decodeFromJSONField("u64", field.endTime)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): UpdateTimeRangeEvent {
        if (json.$typeName !== UpdateTimeRangeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return UpdateTimeRangeEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): UpdateTimeRangeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateTimeRangeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateTimeRangeEvent object`);
        }
        return UpdateTimeRangeEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<UpdateTimeRangeEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching UpdateTimeRangeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateTimeRangeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateTimeRangeEvent object`);
        }

        return UpdateTimeRangeEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

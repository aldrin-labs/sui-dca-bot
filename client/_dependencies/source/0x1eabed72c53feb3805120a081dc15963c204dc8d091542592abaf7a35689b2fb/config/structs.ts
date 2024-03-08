import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {ID, UID} from "../../0x2/object/structs";
import {VecMap} from "../../0x2/vec-map/structs";
import {ACL} from "../acl/structs";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== AddFeeTierEvent =============================== */

export function isAddFeeTierEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddFeeTierEvent";
}

export interface AddFeeTierEventFields {
    tickSpacing: ToField<"u32">; feeRate: ToField<"u64">
}

export type AddFeeTierEventReified = Reified<
    AddFeeTierEvent,
    AddFeeTierEventFields
>;

export class AddFeeTierEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddFeeTierEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddFeeTierEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddFeeTierEvent";

    readonly $typeArgs: [];

    readonly tickSpacing:
        ToField<"u32">
    ; readonly feeRate:
        ToField<"u64">

    private constructor(typeArgs: [], fields: AddFeeTierEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            AddFeeTierEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddFeeTierEvent";
        this.$typeArgs = typeArgs;

        this.tickSpacing = fields.tickSpacing;; this.feeRate = fields.feeRate;
    }

    static reified(): AddFeeTierEventReified {
        return {
            typeName: AddFeeTierEvent.$typeName,
            fullTypeName: composeSuiType(
                AddFeeTierEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddFeeTierEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                AddFeeTierEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                AddFeeTierEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                AddFeeTierEvent.fromBcs(
                    data,
                ),
            bcs: AddFeeTierEvent.bcs,
            fromJSONField: (field: any) =>
                AddFeeTierEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                AddFeeTierEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                AddFeeTierEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => AddFeeTierEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: AddFeeTierEventFields,
            ) => {
                return new AddFeeTierEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return AddFeeTierEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<AddFeeTierEvent>> {
        return phantom(AddFeeTierEvent.reified());
    }

    static get p() {
        return AddFeeTierEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("AddFeeTierEvent", {
            tick_spacing:
                bcs.u32()
            , fee_rate:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): AddFeeTierEvent {
        return AddFeeTierEvent.reified().new(
            {tickSpacing: decodeFromFields("u32", fields.tick_spacing), feeRate: decodeFromFields("u64", fields.fee_rate)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): AddFeeTierEvent {
        if (!isAddFeeTierEvent(item.type)) {
            throw new Error("not a AddFeeTierEvent type");
        }

        return AddFeeTierEvent.reified().new(
            {tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing), feeRate: decodeFromFieldsWithTypes("u64", item.fields.fee_rate)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): AddFeeTierEvent {

        return AddFeeTierEvent.fromFields(
            AddFeeTierEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            tickSpacing: this.tickSpacing,feeRate: this.feeRate.toString(),

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
    ): AddFeeTierEvent {
        return AddFeeTierEvent.reified().new(
            {tickSpacing: decodeFromJSONField("u32", field.tickSpacing), feeRate: decodeFromJSONField("u64", field.feeRate)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): AddFeeTierEvent {
        if (json.$typeName !== AddFeeTierEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return AddFeeTierEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): AddFeeTierEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddFeeTierEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddFeeTierEvent object`);
        }
        return AddFeeTierEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<AddFeeTierEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching AddFeeTierEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddFeeTierEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddFeeTierEvent object`);
        }

        return AddFeeTierEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== AddRoleEvent =============================== */

export function isAddRoleEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddRoleEvent";
}

export interface AddRoleEventFields {
    member: ToField<"address">; role: ToField<"u8">
}

export type AddRoleEventReified = Reified<
    AddRoleEvent,
    AddRoleEventFields
>;

export class AddRoleEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddRoleEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddRoleEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddRoleEvent";

    readonly $typeArgs: [];

    readonly member:
        ToField<"address">
    ; readonly role:
        ToField<"u8">

    private constructor(typeArgs: [], fields: AddRoleEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            AddRoleEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddRoleEvent";
        this.$typeArgs = typeArgs;

        this.member = fields.member;; this.role = fields.role;
    }

    static reified(): AddRoleEventReified {
        return {
            typeName: AddRoleEvent.$typeName,
            fullTypeName: composeSuiType(
                AddRoleEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AddRoleEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                AddRoleEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                AddRoleEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                AddRoleEvent.fromBcs(
                    data,
                ),
            bcs: AddRoleEvent.bcs,
            fromJSONField: (field: any) =>
                AddRoleEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                AddRoleEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                AddRoleEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => AddRoleEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: AddRoleEventFields,
            ) => {
                return new AddRoleEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return AddRoleEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<AddRoleEvent>> {
        return phantom(AddRoleEvent.reified());
    }

    static get p() {
        return AddRoleEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("AddRoleEvent", {
            member:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , role:
                bcs.u8()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): AddRoleEvent {
        return AddRoleEvent.reified().new(
            {member: decodeFromFields("address", fields.member), role: decodeFromFields("u8", fields.role)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): AddRoleEvent {
        if (!isAddRoleEvent(item.type)) {
            throw new Error("not a AddRoleEvent type");
        }

        return AddRoleEvent.reified().new(
            {member: decodeFromFieldsWithTypes("address", item.fields.member), role: decodeFromFieldsWithTypes("u8", item.fields.role)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): AddRoleEvent {

        return AddRoleEvent.fromFields(
            AddRoleEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            member: this.member,role: this.role,

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
    ): AddRoleEvent {
        return AddRoleEvent.reified().new(
            {member: decodeFromJSONField("address", field.member), role: decodeFromJSONField("u8", field.role)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): AddRoleEvent {
        if (json.$typeName !== AddRoleEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return AddRoleEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): AddRoleEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddRoleEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddRoleEvent object`);
        }
        return AddRoleEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<AddRoleEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching AddRoleEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddRoleEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddRoleEvent object`);
        }

        return AddRoleEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AdminCap";
}

export interface AdminCapFields {
    id: ToField<UID>
}

export type AdminCapReified = Reified<
    AdminCap,
    AdminCapFields
>;

export class AdminCap implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AdminCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = AdminCap.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AdminCap";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>

    private constructor(typeArgs: [], fields: AdminCapFields,
    ) {
        this.$fullTypeName = composeSuiType(
            AdminCap.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AdminCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): AdminCapReified {
        return {
            typeName: AdminCap.$typeName,
            fullTypeName: composeSuiType(
                AdminCap.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::AdminCap",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                AdminCap.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                AdminCap.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                AdminCap.fromBcs(
                    data,
                ),
            bcs: AdminCap.bcs,
            fromJSONField: (field: any) =>
                AdminCap.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                AdminCap.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                AdminCap.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => AdminCap.fetch(
                client,
                id,
            ),
            new: (
                fields: AdminCapFields,
            ) => {
                return new AdminCap(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return AdminCap.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<AdminCap>> {
        return phantom(AdminCap.reified());
    }

    static get p() {
        return AdminCap.phantom()
    }

    static get bcs() {
        return bcs.struct("AdminCap", {
            id:
                UID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): AdminCap {
        return AdminCap.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): AdminCap {
        if (!isAdminCap(item.type)) {
            throw new Error("not a AdminCap type");
        }

        return AdminCap.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): AdminCap {

        return AdminCap.fromFields(
            AdminCap.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,

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
    ): AdminCap {
        return AdminCap.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): AdminCap {
        if (json.$typeName !== AdminCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return AdminCap.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): AdminCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAdminCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`);
        }
        return AdminCap.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<AdminCap> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AdminCap object`);
        }

        return AdminCap.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== DeleteFeeTierEvent =============================== */

export function isDeleteFeeTierEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::DeleteFeeTierEvent";
}

export interface DeleteFeeTierEventFields {
    tickSpacing: ToField<"u32">; feeRate: ToField<"u64">
}

export type DeleteFeeTierEventReified = Reified<
    DeleteFeeTierEvent,
    DeleteFeeTierEventFields
>;

export class DeleteFeeTierEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::DeleteFeeTierEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = DeleteFeeTierEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::DeleteFeeTierEvent";

    readonly $typeArgs: [];

    readonly tickSpacing:
        ToField<"u32">
    ; readonly feeRate:
        ToField<"u64">

    private constructor(typeArgs: [], fields: DeleteFeeTierEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            DeleteFeeTierEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::DeleteFeeTierEvent";
        this.$typeArgs = typeArgs;

        this.tickSpacing = fields.tickSpacing;; this.feeRate = fields.feeRate;
    }

    static reified(): DeleteFeeTierEventReified {
        return {
            typeName: DeleteFeeTierEvent.$typeName,
            fullTypeName: composeSuiType(
                DeleteFeeTierEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::DeleteFeeTierEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                DeleteFeeTierEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                DeleteFeeTierEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                DeleteFeeTierEvent.fromBcs(
                    data,
                ),
            bcs: DeleteFeeTierEvent.bcs,
            fromJSONField: (field: any) =>
                DeleteFeeTierEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                DeleteFeeTierEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                DeleteFeeTierEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => DeleteFeeTierEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: DeleteFeeTierEventFields,
            ) => {
                return new DeleteFeeTierEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return DeleteFeeTierEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<DeleteFeeTierEvent>> {
        return phantom(DeleteFeeTierEvent.reified());
    }

    static get p() {
        return DeleteFeeTierEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("DeleteFeeTierEvent", {
            tick_spacing:
                bcs.u32()
            , fee_rate:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): DeleteFeeTierEvent {
        return DeleteFeeTierEvent.reified().new(
            {tickSpacing: decodeFromFields("u32", fields.tick_spacing), feeRate: decodeFromFields("u64", fields.fee_rate)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): DeleteFeeTierEvent {
        if (!isDeleteFeeTierEvent(item.type)) {
            throw new Error("not a DeleteFeeTierEvent type");
        }

        return DeleteFeeTierEvent.reified().new(
            {tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing), feeRate: decodeFromFieldsWithTypes("u64", item.fields.fee_rate)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): DeleteFeeTierEvent {

        return DeleteFeeTierEvent.fromFields(
            DeleteFeeTierEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            tickSpacing: this.tickSpacing,feeRate: this.feeRate.toString(),

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
    ): DeleteFeeTierEvent {
        return DeleteFeeTierEvent.reified().new(
            {tickSpacing: decodeFromJSONField("u32", field.tickSpacing), feeRate: decodeFromJSONField("u64", field.feeRate)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): DeleteFeeTierEvent {
        if (json.$typeName !== DeleteFeeTierEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return DeleteFeeTierEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): DeleteFeeTierEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeleteFeeTierEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DeleteFeeTierEvent object`);
        }
        return DeleteFeeTierEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<DeleteFeeTierEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching DeleteFeeTierEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDeleteFeeTierEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DeleteFeeTierEvent object`);
        }

        return DeleteFeeTierEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== FeeTier =============================== */

export function isFeeTier(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::FeeTier";
}

export interface FeeTierFields {
    tickSpacing: ToField<"u32">; feeRate: ToField<"u64">
}

export type FeeTierReified = Reified<
    FeeTier,
    FeeTierFields
>;

export class FeeTier implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::FeeTier";
    static readonly $numTypeParams = 0;

    readonly $typeName = FeeTier.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::FeeTier";

    readonly $typeArgs: [];

    readonly tickSpacing:
        ToField<"u32">
    ; readonly feeRate:
        ToField<"u64">

    private constructor(typeArgs: [], fields: FeeTierFields,
    ) {
        this.$fullTypeName = composeSuiType(
            FeeTier.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::FeeTier";
        this.$typeArgs = typeArgs;

        this.tickSpacing = fields.tickSpacing;; this.feeRate = fields.feeRate;
    }

    static reified(): FeeTierReified {
        return {
            typeName: FeeTier.$typeName,
            fullTypeName: composeSuiType(
                FeeTier.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::FeeTier",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                FeeTier.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                FeeTier.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                FeeTier.fromBcs(
                    data,
                ),
            bcs: FeeTier.bcs,
            fromJSONField: (field: any) =>
                FeeTier.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                FeeTier.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                FeeTier.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => FeeTier.fetch(
                client,
                id,
            ),
            new: (
                fields: FeeTierFields,
            ) => {
                return new FeeTier(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return FeeTier.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<FeeTier>> {
        return phantom(FeeTier.reified());
    }

    static get p() {
        return FeeTier.phantom()
    }

    static get bcs() {
        return bcs.struct("FeeTier", {
            tick_spacing:
                bcs.u32()
            , fee_rate:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): FeeTier {
        return FeeTier.reified().new(
            {tickSpacing: decodeFromFields("u32", fields.tick_spacing), feeRate: decodeFromFields("u64", fields.fee_rate)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): FeeTier {
        if (!isFeeTier(item.type)) {
            throw new Error("not a FeeTier type");
        }

        return FeeTier.reified().new(
            {tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing), feeRate: decodeFromFieldsWithTypes("u64", item.fields.fee_rate)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): FeeTier {

        return FeeTier.fromFields(
            FeeTier.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            tickSpacing: this.tickSpacing,feeRate: this.feeRate.toString(),

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
    ): FeeTier {
        return FeeTier.reified().new(
            {tickSpacing: decodeFromJSONField("u32", field.tickSpacing), feeRate: decodeFromJSONField("u64", field.feeRate)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): FeeTier {
        if (json.$typeName !== FeeTier.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return FeeTier.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): FeeTier {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFeeTier(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FeeTier object`);
        }
        return FeeTier.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<FeeTier> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching FeeTier object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFeeTier(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeTier object`);
        }

        return FeeTier.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== GlobalConfig =============================== */

export function isGlobalConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::GlobalConfig";
}

export interface GlobalConfigFields {
    id: ToField<UID>; protocolFeeRate: ToField<"u64">; feeTiers: ToField<VecMap<"u32", FeeTier>>; acl: ToField<ACL>; packageVersion: ToField<"u64">
}

export type GlobalConfigReified = Reified<
    GlobalConfig,
    GlobalConfigFields
>;

export class GlobalConfig implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::GlobalConfig";
    static readonly $numTypeParams = 0;

    readonly $typeName = GlobalConfig.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::GlobalConfig";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly protocolFeeRate:
        ToField<"u64">
    ; readonly feeTiers:
        ToField<VecMap<"u32", FeeTier>>
    ; readonly acl:
        ToField<ACL>
    ; readonly packageVersion:
        ToField<"u64">

    private constructor(typeArgs: [], fields: GlobalConfigFields,
    ) {
        this.$fullTypeName = composeSuiType(
            GlobalConfig.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::GlobalConfig";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.protocolFeeRate = fields.protocolFeeRate;; this.feeTiers = fields.feeTiers;; this.acl = fields.acl;; this.packageVersion = fields.packageVersion;
    }

    static reified(): GlobalConfigReified {
        return {
            typeName: GlobalConfig.$typeName,
            fullTypeName: composeSuiType(
                GlobalConfig.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::GlobalConfig",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                GlobalConfig.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                GlobalConfig.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                GlobalConfig.fromBcs(
                    data,
                ),
            bcs: GlobalConfig.bcs,
            fromJSONField: (field: any) =>
                GlobalConfig.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                GlobalConfig.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                GlobalConfig.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => GlobalConfig.fetch(
                client,
                id,
            ),
            new: (
                fields: GlobalConfigFields,
            ) => {
                return new GlobalConfig(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return GlobalConfig.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<GlobalConfig>> {
        return phantom(GlobalConfig.reified());
    }

    static get p() {
        return GlobalConfig.phantom()
    }

    static get bcs() {
        return bcs.struct("GlobalConfig", {
            id:
                UID.bcs
            , protocol_fee_rate:
                bcs.u64()
            , fee_tiers:
                VecMap.bcs(bcs.u32(), FeeTier.bcs)
            , acl:
                ACL.bcs
            , package_version:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): GlobalConfig {
        return GlobalConfig.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), protocolFeeRate: decodeFromFields("u64", fields.protocol_fee_rate), feeTiers: decodeFromFields(VecMap.reified("u32", FeeTier.reified()), fields.fee_tiers), acl: decodeFromFields(ACL.reified(), fields.acl), packageVersion: decodeFromFields("u64", fields.package_version)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): GlobalConfig {
        if (!isGlobalConfig(item.type)) {
            throw new Error("not a GlobalConfig type");
        }

        return GlobalConfig.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), protocolFeeRate: decodeFromFieldsWithTypes("u64", item.fields.protocol_fee_rate), feeTiers: decodeFromFieldsWithTypes(VecMap.reified("u32", FeeTier.reified()), item.fields.fee_tiers), acl: decodeFromFieldsWithTypes(ACL.reified(), item.fields.acl), packageVersion: decodeFromFieldsWithTypes("u64", item.fields.package_version)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): GlobalConfig {

        return GlobalConfig.fromFields(
            GlobalConfig.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,protocolFeeRate: this.protocolFeeRate.toString(),feeTiers: this.feeTiers.toJSONField(),acl: this.acl.toJSONField(),packageVersion: this.packageVersion.toString(),

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
    ): GlobalConfig {
        return GlobalConfig.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), protocolFeeRate: decodeFromJSONField("u64", field.protocolFeeRate), feeTiers: decodeFromJSONField(VecMap.reified("u32", FeeTier.reified()), field.feeTiers), acl: decodeFromJSONField(ACL.reified(), field.acl), packageVersion: decodeFromJSONField("u64", field.packageVersion)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): GlobalConfig {
        if (json.$typeName !== GlobalConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return GlobalConfig.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): GlobalConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isGlobalConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a GlobalConfig object`);
        }
        return GlobalConfig.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<GlobalConfig> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching GlobalConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isGlobalConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GlobalConfig object`);
        }

        return GlobalConfig.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== InitConfigEvent =============================== */

export function isInitConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::InitConfigEvent";
}

export interface InitConfigEventFields {
    adminCapId: ToField<ID>; globalConfigId: ToField<ID>
}

export type InitConfigEventReified = Reified<
    InitConfigEvent,
    InitConfigEventFields
>;

export class InitConfigEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::InitConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = InitConfigEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::InitConfigEvent";

    readonly $typeArgs: [];

    readonly adminCapId:
        ToField<ID>
    ; readonly globalConfigId:
        ToField<ID>

    private constructor(typeArgs: [], fields: InitConfigEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            InitConfigEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::InitConfigEvent";
        this.$typeArgs = typeArgs;

        this.adminCapId = fields.adminCapId;; this.globalConfigId = fields.globalConfigId;
    }

    static reified(): InitConfigEventReified {
        return {
            typeName: InitConfigEvent.$typeName,
            fullTypeName: composeSuiType(
                InitConfigEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::InitConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                InitConfigEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                InitConfigEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                InitConfigEvent.fromBcs(
                    data,
                ),
            bcs: InitConfigEvent.bcs,
            fromJSONField: (field: any) =>
                InitConfigEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                InitConfigEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                InitConfigEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => InitConfigEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: InitConfigEventFields,
            ) => {
                return new InitConfigEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return InitConfigEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<InitConfigEvent>> {
        return phantom(InitConfigEvent.reified());
    }

    static get p() {
        return InitConfigEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("InitConfigEvent", {
            admin_cap_id:
                ID.bcs
            , global_config_id:
                ID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): InitConfigEvent {
        return InitConfigEvent.reified().new(
            {adminCapId: decodeFromFields(ID.reified(), fields.admin_cap_id), globalConfigId: decodeFromFields(ID.reified(), fields.global_config_id)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): InitConfigEvent {
        if (!isInitConfigEvent(item.type)) {
            throw new Error("not a InitConfigEvent type");
        }

        return InitConfigEvent.reified().new(
            {adminCapId: decodeFromFieldsWithTypes(ID.reified(), item.fields.admin_cap_id), globalConfigId: decodeFromFieldsWithTypes(ID.reified(), item.fields.global_config_id)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): InitConfigEvent {

        return InitConfigEvent.fromFields(
            InitConfigEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            adminCapId: this.adminCapId,globalConfigId: this.globalConfigId,

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
    ): InitConfigEvent {
        return InitConfigEvent.reified().new(
            {adminCapId: decodeFromJSONField(ID.reified(), field.adminCapId), globalConfigId: decodeFromJSONField(ID.reified(), field.globalConfigId)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): InitConfigEvent {
        if (json.$typeName !== InitConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return InitConfigEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): InitConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isInitConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a InitConfigEvent object`);
        }
        return InitConfigEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<InitConfigEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching InitConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isInitConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a InitConfigEvent object`);
        }

        return InitConfigEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== ProtocolFeeClaimCap =============================== */

export function isProtocolFeeClaimCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::ProtocolFeeClaimCap";
}

export interface ProtocolFeeClaimCapFields {
    id: ToField<UID>
}

export type ProtocolFeeClaimCapReified = Reified<
    ProtocolFeeClaimCap,
    ProtocolFeeClaimCapFields
>;

export class ProtocolFeeClaimCap implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::ProtocolFeeClaimCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = ProtocolFeeClaimCap.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::ProtocolFeeClaimCap";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>

    private constructor(typeArgs: [], fields: ProtocolFeeClaimCapFields,
    ) {
        this.$fullTypeName = composeSuiType(
            ProtocolFeeClaimCap.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::ProtocolFeeClaimCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): ProtocolFeeClaimCapReified {
        return {
            typeName: ProtocolFeeClaimCap.$typeName,
            fullTypeName: composeSuiType(
                ProtocolFeeClaimCap.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::ProtocolFeeClaimCap",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                ProtocolFeeClaimCap.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                ProtocolFeeClaimCap.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                ProtocolFeeClaimCap.fromBcs(
                    data,
                ),
            bcs: ProtocolFeeClaimCap.bcs,
            fromJSONField: (field: any) =>
                ProtocolFeeClaimCap.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                ProtocolFeeClaimCap.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                ProtocolFeeClaimCap.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => ProtocolFeeClaimCap.fetch(
                client,
                id,
            ),
            new: (
                fields: ProtocolFeeClaimCapFields,
            ) => {
                return new ProtocolFeeClaimCap(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return ProtocolFeeClaimCap.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<ProtocolFeeClaimCap>> {
        return phantom(ProtocolFeeClaimCap.reified());
    }

    static get p() {
        return ProtocolFeeClaimCap.phantom()
    }

    static get bcs() {
        return bcs.struct("ProtocolFeeClaimCap", {
            id:
                UID.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): ProtocolFeeClaimCap {
        return ProtocolFeeClaimCap.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): ProtocolFeeClaimCap {
        if (!isProtocolFeeClaimCap(item.type)) {
            throw new Error("not a ProtocolFeeClaimCap type");
        }

        return ProtocolFeeClaimCap.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): ProtocolFeeClaimCap {

        return ProtocolFeeClaimCap.fromFields(
            ProtocolFeeClaimCap.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,

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
    ): ProtocolFeeClaimCap {
        return ProtocolFeeClaimCap.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): ProtocolFeeClaimCap {
        if (json.$typeName !== ProtocolFeeClaimCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return ProtocolFeeClaimCap.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): ProtocolFeeClaimCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isProtocolFeeClaimCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ProtocolFeeClaimCap object`);
        }
        return ProtocolFeeClaimCap.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<ProtocolFeeClaimCap> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching ProtocolFeeClaimCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isProtocolFeeClaimCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProtocolFeeClaimCap object`);
        }

        return ProtocolFeeClaimCap.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== RemoveMemberEvent =============================== */

export function isRemoveMemberEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveMemberEvent";
}

export interface RemoveMemberEventFields {
    member: ToField<"address">
}

export type RemoveMemberEventReified = Reified<
    RemoveMemberEvent,
    RemoveMemberEventFields
>;

export class RemoveMemberEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveMemberEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RemoveMemberEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveMemberEvent";

    readonly $typeArgs: [];

    readonly member:
        ToField<"address">

    private constructor(typeArgs: [], fields: RemoveMemberEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            RemoveMemberEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveMemberEvent";
        this.$typeArgs = typeArgs;

        this.member = fields.member;
    }

    static reified(): RemoveMemberEventReified {
        return {
            typeName: RemoveMemberEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveMemberEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveMemberEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                RemoveMemberEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                RemoveMemberEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                RemoveMemberEvent.fromBcs(
                    data,
                ),
            bcs: RemoveMemberEvent.bcs,
            fromJSONField: (field: any) =>
                RemoveMemberEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                RemoveMemberEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                RemoveMemberEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => RemoveMemberEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: RemoveMemberEventFields,
            ) => {
                return new RemoveMemberEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return RemoveMemberEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveMemberEvent>> {
        return phantom(RemoveMemberEvent.reified());
    }

    static get p() {
        return RemoveMemberEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("RemoveMemberEvent", {
            member:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): RemoveMemberEvent {
        return RemoveMemberEvent.reified().new(
            {member: decodeFromFields("address", fields.member)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): RemoveMemberEvent {
        if (!isRemoveMemberEvent(item.type)) {
            throw new Error("not a RemoveMemberEvent type");
        }

        return RemoveMemberEvent.reified().new(
            {member: decodeFromFieldsWithTypes("address", item.fields.member)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): RemoveMemberEvent {

        return RemoveMemberEvent.fromFields(
            RemoveMemberEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            member: this.member,

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
    ): RemoveMemberEvent {
        return RemoveMemberEvent.reified().new(
            {member: decodeFromJSONField("address", field.member)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): RemoveMemberEvent {
        if (json.$typeName !== RemoveMemberEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return RemoveMemberEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): RemoveMemberEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveMemberEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveMemberEvent object`);
        }
        return RemoveMemberEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<RemoveMemberEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching RemoveMemberEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveMemberEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveMemberEvent object`);
        }

        return RemoveMemberEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== RemoveRoleEvent =============================== */

export function isRemoveRoleEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveRoleEvent";
}

export interface RemoveRoleEventFields {
    member: ToField<"address">; role: ToField<"u8">
}

export type RemoveRoleEventReified = Reified<
    RemoveRoleEvent,
    RemoveRoleEventFields
>;

export class RemoveRoleEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveRoleEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RemoveRoleEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveRoleEvent";

    readonly $typeArgs: [];

    readonly member:
        ToField<"address">
    ; readonly role:
        ToField<"u8">

    private constructor(typeArgs: [], fields: RemoveRoleEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            RemoveRoleEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveRoleEvent";
        this.$typeArgs = typeArgs;

        this.member = fields.member;; this.role = fields.role;
    }

    static reified(): RemoveRoleEventReified {
        return {
            typeName: RemoveRoleEvent.$typeName,
            fullTypeName: composeSuiType(
                RemoveRoleEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::RemoveRoleEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                RemoveRoleEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                RemoveRoleEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                RemoveRoleEvent.fromBcs(
                    data,
                ),
            bcs: RemoveRoleEvent.bcs,
            fromJSONField: (field: any) =>
                RemoveRoleEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                RemoveRoleEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                RemoveRoleEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => RemoveRoleEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: RemoveRoleEventFields,
            ) => {
                return new RemoveRoleEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return RemoveRoleEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveRoleEvent>> {
        return phantom(RemoveRoleEvent.reified());
    }

    static get p() {
        return RemoveRoleEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("RemoveRoleEvent", {
            member:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , role:
                bcs.u8()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): RemoveRoleEvent {
        return RemoveRoleEvent.reified().new(
            {member: decodeFromFields("address", fields.member), role: decodeFromFields("u8", fields.role)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): RemoveRoleEvent {
        if (!isRemoveRoleEvent(item.type)) {
            throw new Error("not a RemoveRoleEvent type");
        }

        return RemoveRoleEvent.reified().new(
            {member: decodeFromFieldsWithTypes("address", item.fields.member), role: decodeFromFieldsWithTypes("u8", item.fields.role)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): RemoveRoleEvent {

        return RemoveRoleEvent.fromFields(
            RemoveRoleEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            member: this.member,role: this.role,

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
    ): RemoveRoleEvent {
        return RemoveRoleEvent.reified().new(
            {member: decodeFromJSONField("address", field.member), role: decodeFromJSONField("u8", field.role)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): RemoveRoleEvent {
        if (json.$typeName !== RemoveRoleEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return RemoveRoleEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): RemoveRoleEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveRoleEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveRoleEvent object`);
        }
        return RemoveRoleEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<RemoveRoleEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching RemoveRoleEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveRoleEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveRoleEvent object`);
        }

        return RemoveRoleEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== SetPackageVersion =============================== */

export function isSetPackageVersion(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetPackageVersion";
}

export interface SetPackageVersionFields {
    newVersion: ToField<"u64">; oldVersion: ToField<"u64">
}

export type SetPackageVersionReified = Reified<
    SetPackageVersion,
    SetPackageVersionFields
>;

export class SetPackageVersion implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetPackageVersion";
    static readonly $numTypeParams = 0;

    readonly $typeName = SetPackageVersion.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetPackageVersion";

    readonly $typeArgs: [];

    readonly newVersion:
        ToField<"u64">
    ; readonly oldVersion:
        ToField<"u64">

    private constructor(typeArgs: [], fields: SetPackageVersionFields,
    ) {
        this.$fullTypeName = composeSuiType(
            SetPackageVersion.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetPackageVersion";
        this.$typeArgs = typeArgs;

        this.newVersion = fields.newVersion;; this.oldVersion = fields.oldVersion;
    }

    static reified(): SetPackageVersionReified {
        return {
            typeName: SetPackageVersion.$typeName,
            fullTypeName: composeSuiType(
                SetPackageVersion.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetPackageVersion",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                SetPackageVersion.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                SetPackageVersion.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                SetPackageVersion.fromBcs(
                    data,
                ),
            bcs: SetPackageVersion.bcs,
            fromJSONField: (field: any) =>
                SetPackageVersion.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                SetPackageVersion.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                SetPackageVersion.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => SetPackageVersion.fetch(
                client,
                id,
            ),
            new: (
                fields: SetPackageVersionFields,
            ) => {
                return new SetPackageVersion(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return SetPackageVersion.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<SetPackageVersion>> {
        return phantom(SetPackageVersion.reified());
    }

    static get p() {
        return SetPackageVersion.phantom()
    }

    static get bcs() {
        return bcs.struct("SetPackageVersion", {
            new_version:
                bcs.u64()
            , old_version:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): SetPackageVersion {
        return SetPackageVersion.reified().new(
            {newVersion: decodeFromFields("u64", fields.new_version), oldVersion: decodeFromFields("u64", fields.old_version)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): SetPackageVersion {
        if (!isSetPackageVersion(item.type)) {
            throw new Error("not a SetPackageVersion type");
        }

        return SetPackageVersion.reified().new(
            {newVersion: decodeFromFieldsWithTypes("u64", item.fields.new_version), oldVersion: decodeFromFieldsWithTypes("u64", item.fields.old_version)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): SetPackageVersion {

        return SetPackageVersion.fromFields(
            SetPackageVersion.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            newVersion: this.newVersion.toString(),oldVersion: this.oldVersion.toString(),

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
    ): SetPackageVersion {
        return SetPackageVersion.reified().new(
            {newVersion: decodeFromJSONField("u64", field.newVersion), oldVersion: decodeFromJSONField("u64", field.oldVersion)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): SetPackageVersion {
        if (json.$typeName !== SetPackageVersion.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return SetPackageVersion.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): SetPackageVersion {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSetPackageVersion(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SetPackageVersion object`);
        }
        return SetPackageVersion.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<SetPackageVersion> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching SetPackageVersion object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSetPackageVersion(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SetPackageVersion object`);
        }

        return SetPackageVersion.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== SetRolesEvent =============================== */

export function isSetRolesEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetRolesEvent";
}

export interface SetRolesEventFields {
    member: ToField<"address">; roles: ToField<"u128">
}

export type SetRolesEventReified = Reified<
    SetRolesEvent,
    SetRolesEventFields
>;

export class SetRolesEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetRolesEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = SetRolesEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetRolesEvent";

    readonly $typeArgs: [];

    readonly member:
        ToField<"address">
    ; readonly roles:
        ToField<"u128">

    private constructor(typeArgs: [], fields: SetRolesEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            SetRolesEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetRolesEvent";
        this.$typeArgs = typeArgs;

        this.member = fields.member;; this.roles = fields.roles;
    }

    static reified(): SetRolesEventReified {
        return {
            typeName: SetRolesEvent.$typeName,
            fullTypeName: composeSuiType(
                SetRolesEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::SetRolesEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                SetRolesEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                SetRolesEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                SetRolesEvent.fromBcs(
                    data,
                ),
            bcs: SetRolesEvent.bcs,
            fromJSONField: (field: any) =>
                SetRolesEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                SetRolesEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                SetRolesEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => SetRolesEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: SetRolesEventFields,
            ) => {
                return new SetRolesEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return SetRolesEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<SetRolesEvent>> {
        return phantom(SetRolesEvent.reified());
    }

    static get p() {
        return SetRolesEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("SetRolesEvent", {
            member:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , roles:
                bcs.u128()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): SetRolesEvent {
        return SetRolesEvent.reified().new(
            {member: decodeFromFields("address", fields.member), roles: decodeFromFields("u128", fields.roles)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): SetRolesEvent {
        if (!isSetRolesEvent(item.type)) {
            throw new Error("not a SetRolesEvent type");
        }

        return SetRolesEvent.reified().new(
            {member: decodeFromFieldsWithTypes("address", item.fields.member), roles: decodeFromFieldsWithTypes("u128", item.fields.roles)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): SetRolesEvent {

        return SetRolesEvent.fromFields(
            SetRolesEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            member: this.member,roles: this.roles.toString(),

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
    ): SetRolesEvent {
        return SetRolesEvent.reified().new(
            {member: decodeFromJSONField("address", field.member), roles: decodeFromJSONField("u128", field.roles)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): SetRolesEvent {
        if (json.$typeName !== SetRolesEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return SetRolesEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): SetRolesEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSetRolesEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SetRolesEvent object`);
        }
        return SetRolesEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<SetRolesEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching SetRolesEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSetRolesEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SetRolesEvent object`);
        }

        return SetRolesEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== UpdateFeeRateEvent =============================== */

export function isUpdateFeeRateEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeRateEvent";
}

export interface UpdateFeeRateEventFields {
    oldFeeRate: ToField<"u64">; newFeeRate: ToField<"u64">
}

export type UpdateFeeRateEventReified = Reified<
    UpdateFeeRateEvent,
    UpdateFeeRateEventFields
>;

export class UpdateFeeRateEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeRateEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateFeeRateEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeRateEvent";

    readonly $typeArgs: [];

    readonly oldFeeRate:
        ToField<"u64">
    ; readonly newFeeRate:
        ToField<"u64">

    private constructor(typeArgs: [], fields: UpdateFeeRateEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            UpdateFeeRateEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeRateEvent";
        this.$typeArgs = typeArgs;

        this.oldFeeRate = fields.oldFeeRate;; this.newFeeRate = fields.newFeeRate;
    }

    static reified(): UpdateFeeRateEventReified {
        return {
            typeName: UpdateFeeRateEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateFeeRateEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeRateEvent",
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
            old_fee_rate:
                bcs.u64()
            , new_fee_rate:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): UpdateFeeRateEvent {
        return UpdateFeeRateEvent.reified().new(
            {oldFeeRate: decodeFromFields("u64", fields.old_fee_rate), newFeeRate: decodeFromFields("u64", fields.new_fee_rate)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): UpdateFeeRateEvent {
        if (!isUpdateFeeRateEvent(item.type)) {
            throw new Error("not a UpdateFeeRateEvent type");
        }

        return UpdateFeeRateEvent.reified().new(
            {oldFeeRate: decodeFromFieldsWithTypes("u64", item.fields.old_fee_rate), newFeeRate: decodeFromFieldsWithTypes("u64", item.fields.new_fee_rate)}
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
            oldFeeRate: this.oldFeeRate.toString(),newFeeRate: this.newFeeRate.toString(),

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
            {oldFeeRate: decodeFromJSONField("u64", field.oldFeeRate), newFeeRate: decodeFromJSONField("u64", field.newFeeRate)}
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

/* ============================== UpdateFeeTierEvent =============================== */

export function isUpdateFeeTierEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeTierEvent";
}

export interface UpdateFeeTierEventFields {
    tickSpacing: ToField<"u32">; oldFeeRate: ToField<"u64">; newFeeRate: ToField<"u64">
}

export type UpdateFeeTierEventReified = Reified<
    UpdateFeeTierEvent,
    UpdateFeeTierEventFields
>;

export class UpdateFeeTierEvent implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeTierEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateFeeTierEvent.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeTierEvent";

    readonly $typeArgs: [];

    readonly tickSpacing:
        ToField<"u32">
    ; readonly oldFeeRate:
        ToField<"u64">
    ; readonly newFeeRate:
        ToField<"u64">

    private constructor(typeArgs: [], fields: UpdateFeeTierEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            UpdateFeeTierEvent.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeTierEvent";
        this.$typeArgs = typeArgs;

        this.tickSpacing = fields.tickSpacing;; this.oldFeeRate = fields.oldFeeRate;; this.newFeeRate = fields.newFeeRate;
    }

    static reified(): UpdateFeeTierEventReified {
        return {
            typeName: UpdateFeeTierEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateFeeTierEvent.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::config::UpdateFeeTierEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                UpdateFeeTierEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                UpdateFeeTierEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                UpdateFeeTierEvent.fromBcs(
                    data,
                ),
            bcs: UpdateFeeTierEvent.bcs,
            fromJSONField: (field: any) =>
                UpdateFeeTierEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                UpdateFeeTierEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                UpdateFeeTierEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => UpdateFeeTierEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: UpdateFeeTierEventFields,
            ) => {
                return new UpdateFeeTierEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return UpdateFeeTierEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateFeeTierEvent>> {
        return phantom(UpdateFeeTierEvent.reified());
    }

    static get p() {
        return UpdateFeeTierEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("UpdateFeeTierEvent", {
            tick_spacing:
                bcs.u32()
            , old_fee_rate:
                bcs.u64()
            , new_fee_rate:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): UpdateFeeTierEvent {
        return UpdateFeeTierEvent.reified().new(
            {tickSpacing: decodeFromFields("u32", fields.tick_spacing), oldFeeRate: decodeFromFields("u64", fields.old_fee_rate), newFeeRate: decodeFromFields("u64", fields.new_fee_rate)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): UpdateFeeTierEvent {
        if (!isUpdateFeeTierEvent(item.type)) {
            throw new Error("not a UpdateFeeTierEvent type");
        }

        return UpdateFeeTierEvent.reified().new(
            {tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing), oldFeeRate: decodeFromFieldsWithTypes("u64", item.fields.old_fee_rate), newFeeRate: decodeFromFieldsWithTypes("u64", item.fields.new_fee_rate)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): UpdateFeeTierEvent {

        return UpdateFeeTierEvent.fromFields(
            UpdateFeeTierEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            tickSpacing: this.tickSpacing,oldFeeRate: this.oldFeeRate.toString(),newFeeRate: this.newFeeRate.toString(),

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
    ): UpdateFeeTierEvent {
        return UpdateFeeTierEvent.reified().new(
            {tickSpacing: decodeFromJSONField("u32", field.tickSpacing), oldFeeRate: decodeFromJSONField("u64", field.oldFeeRate), newFeeRate: decodeFromJSONField("u64", field.newFeeRate)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): UpdateFeeTierEvent {
        if (json.$typeName !== UpdateFeeTierEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return UpdateFeeTierEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): UpdateFeeTierEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateFeeTierEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateFeeTierEvent object`);
        }
        return UpdateFeeTierEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<UpdateFeeTierEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching UpdateFeeTierEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateFeeTierEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateFeeTierEvent object`);
        }

        return UpdateFeeTierEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

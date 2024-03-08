import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {LinkedTable} from "../../0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa/linked-table/structs";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== ACL =============================== */

export function isACL(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::ACL";
}

export interface ACLFields {
    permissions: ToField<LinkedTable<"address", "u128">>
}

export type ACLReified = Reified<
    ACL,
    ACLFields
>;

export class ACL implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::ACL";
    static readonly $numTypeParams = 0;

    readonly $typeName = ACL.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::ACL";

    readonly $typeArgs: [];

    readonly permissions:
        ToField<LinkedTable<"address", "u128">>

    private constructor(typeArgs: [], fields: ACLFields,
    ) {
        this.$fullTypeName = composeSuiType(
            ACL.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::ACL";
        this.$typeArgs = typeArgs;

        this.permissions = fields.permissions;
    }

    static reified(): ACLReified {
        return {
            typeName: ACL.$typeName,
            fullTypeName: composeSuiType(
                ACL.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::ACL",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                ACL.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                ACL.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                ACL.fromBcs(
                    data,
                ),
            bcs: ACL.bcs,
            fromJSONField: (field: any) =>
                ACL.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                ACL.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                ACL.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => ACL.fetch(
                client,
                id,
            ),
            new: (
                fields: ACLFields,
            ) => {
                return new ACL(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return ACL.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<ACL>> {
        return phantom(ACL.reified());
    }

    static get p() {
        return ACL.phantom()
    }

    static get bcs() {
        return bcs.struct("ACL", {
            permissions:
                LinkedTable.bcs(bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),}))

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): ACL {
        return ACL.reified().new(
            {permissions: decodeFromFields(LinkedTable.reified("address", reified.phantom("u128")), fields.permissions)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): ACL {
        if (!isACL(item.type)) {
            throw new Error("not a ACL type");
        }

        return ACL.reified().new(
            {permissions: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("u128")), item.fields.permissions)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): ACL {

        return ACL.fromFields(
            ACL.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            permissions: this.permissions.toJSONField(),

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
    ): ACL {
        return ACL.reified().new(
            {permissions: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("u128")), field.permissions)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): ACL {
        if (json.$typeName !== ACL.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return ACL.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): ACL {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isACL(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ACL object`);
        }
        return ACL.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<ACL> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching ACL object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isACL(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ACL object`);
        }

        return ACL.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Member =============================== */

export function isMember(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::Member";
}

export interface MemberFields {
    address: ToField<"address">; permission: ToField<"u128">
}

export type MemberReified = Reified<
    Member,
    MemberFields
>;

export class Member implements StructClass {
    static readonly $typeName = "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::Member";
    static readonly $numTypeParams = 0;

    readonly $typeName = Member.$typeName;

    readonly $fullTypeName: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::Member";

    readonly $typeArgs: [];

    readonly address:
        ToField<"address">
    ; readonly permission:
        ToField<"u128">

    private constructor(typeArgs: [], fields: MemberFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Member.$typeName,
            ...typeArgs
        ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::Member";
        this.$typeArgs = typeArgs;

        this.address = fields.address;; this.permission = fields.permission;
    }

    static reified(): MemberReified {
        return {
            typeName: Member.$typeName,
            fullTypeName: composeSuiType(
                Member.$typeName,
                ...[]
            ) as "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb::acl::Member",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Member.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Member.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Member.fromBcs(
                    data,
                ),
            bcs: Member.bcs,
            fromJSONField: (field: any) =>
                Member.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Member.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Member.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Member.fetch(
                client,
                id,
            ),
            new: (
                fields: MemberFields,
            ) => {
                return new Member(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Member.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Member>> {
        return phantom(Member.reified());
    }

    static get p() {
        return Member.phantom()
    }

    static get bcs() {
        return bcs.struct("Member", {
            address:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , permission:
                bcs.u128()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Member {
        return Member.reified().new(
            {address: decodeFromFields("address", fields.address), permission: decodeFromFields("u128", fields.permission)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Member {
        if (!isMember(item.type)) {
            throw new Error("not a Member type");
        }

        return Member.reified().new(
            {address: decodeFromFieldsWithTypes("address", item.fields.address), permission: decodeFromFieldsWithTypes("u128", item.fields.permission)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Member {

        return Member.fromFields(
            Member.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            address: this.address,permission: this.permission.toString(),

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
    ): Member {
        return Member.reified().new(
            {address: decodeFromJSONField("address", field.address), permission: decodeFromJSONField("u128", field.permission)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Member {
        if (json.$typeName !== Member.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Member.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Member {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isMember(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Member object`);
        }
        return Member.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Member> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Member object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isMember(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Member object`);
        }

        return Member.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

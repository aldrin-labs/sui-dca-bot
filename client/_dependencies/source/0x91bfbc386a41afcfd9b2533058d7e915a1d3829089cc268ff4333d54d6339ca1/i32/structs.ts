import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== I32 =============================== */

export function isI32(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::i32::I32";
}

export interface I32Fields {
    bits: ToField<"u32">
}

export type I32Reified = Reified<
    I32,
    I32Fields
>;

export class I32 implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::i32::I32";
    static readonly $numTypeParams = 0;

    readonly $typeName = I32.$typeName;

    readonly $fullTypeName: "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::i32::I32";

    readonly $typeArgs: [];

    readonly bits:
        ToField<"u32">

    private constructor(typeArgs: [], fields: I32Fields,
    ) {
        this.$fullTypeName = composeSuiType(
            I32.$typeName,
            ...typeArgs
        ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::i32::I32";
        this.$typeArgs = typeArgs;

        this.bits = fields.bits;
    }

    static reified(): I32Reified {
        return {
            typeName: I32.$typeName,
            fullTypeName: composeSuiType(
                I32.$typeName,
                ...[]
            ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::i32::I32",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                I32.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                I32.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                I32.fromBcs(
                    data,
                ),
            bcs: I32.bcs,
            fromJSONField: (field: any) =>
                I32.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                I32.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                I32.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => I32.fetch(
                client,
                id,
            ),
            new: (
                fields: I32Fields,
            ) => {
                return new I32(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return I32.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<I32>> {
        return phantom(I32.reified());
    }

    static get p() {
        return I32.phantom()
    }

    static get bcs() {
        return bcs.struct("I32", {
            bits:
                bcs.u32()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): I32 {
        return I32.reified().new(
            {bits: decodeFromFields("u32", fields.bits)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): I32 {
        if (!isI32(item.type)) {
            throw new Error("not a I32 type");
        }

        return I32.reified().new(
            {bits: decodeFromFieldsWithTypes("u32", item.fields.bits)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): I32 {

        return I32.fromFields(
            I32.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            bits: this.bits,

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
    ): I32 {
        return I32.reified().new(
            {bits: decodeFromJSONField("u32", field.bits)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): I32 {
        if (json.$typeName !== I32.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return I32.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): I32 {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isI32(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a I32 object`);
        }
        return I32.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<I32> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching I32 object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isI32(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a I32 object`);
        }

        return I32.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

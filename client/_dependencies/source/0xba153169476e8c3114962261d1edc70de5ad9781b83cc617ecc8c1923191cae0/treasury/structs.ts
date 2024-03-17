import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Treasury =============================== */

export function isTreasury(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::treasury::Treasury";
}

export interface TreasuryFields {
    treasurer: ToField<"address">
}

export type TreasuryReified = Reified<
    Treasury,
    TreasuryFields
>;

export class Treasury implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::treasury::Treasury";
    static readonly $numTypeParams = 0;

    readonly $typeName = Treasury.$typeName;

    readonly $fullTypeName: "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::treasury::Treasury";

    readonly $typeArgs: [];

    readonly treasurer:
        ToField<"address">

    private constructor(typeArgs: [], fields: TreasuryFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Treasury.$typeName,
            ...typeArgs
        ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::treasury::Treasury";
        this.$typeArgs = typeArgs;

        this.treasurer = fields.treasurer;
    }

    static reified(): TreasuryReified {
        return {
            typeName: Treasury.$typeName,
            fullTypeName: composeSuiType(
                Treasury.$typeName,
                ...[]
            ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::treasury::Treasury",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Treasury.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Treasury.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Treasury.fromBcs(
                    data,
                ),
            bcs: Treasury.bcs,
            fromJSONField: (field: any) =>
                Treasury.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Treasury.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Treasury.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Treasury.fetch(
                client,
                id,
            ),
            new: (
                fields: TreasuryFields,
            ) => {
                return new Treasury(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Treasury.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Treasury>> {
        return phantom(Treasury.reified());
    }

    static get p() {
        return Treasury.phantom()
    }

    static get bcs() {
        return bcs.struct("Treasury", {
            treasurer:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Treasury {
        return Treasury.reified().new(
            {treasurer: decodeFromFields("address", fields.treasurer)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Treasury {
        if (!isTreasury(item.type)) {
            throw new Error("not a Treasury type");
        }

        return Treasury.reified().new(
            {treasurer: decodeFromFieldsWithTypes("address", item.fields.treasurer)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Treasury {

        return Treasury.fromFields(
            Treasury.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            treasurer: this.treasurer,

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
    ): Treasury {
        return Treasury.reified().new(
            {treasurer: decodeFromJSONField("address", field.treasurer)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Treasury {
        if (json.$typeName !== Treasury.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Treasury.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Treasury {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTreasury(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Treasury object`);
        }
        return Treasury.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Treasury> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Treasury object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTreasury(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Treasury object`);
        }

        return Treasury.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Result =============================== */

export function isResult(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::comparator::Result";
}

export interface ResultFields {
    inner: ToField<"u8">
}

export type ResultReified = Reified<
    Result,
    ResultFields
>;

export class Result implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::comparator::Result";
    static readonly $numTypeParams = 0;

    readonly $typeName = Result.$typeName;

    readonly $fullTypeName: "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::comparator::Result";

    readonly $typeArgs: [];

    readonly inner:
        ToField<"u8">

    private constructor(typeArgs: [], fields: ResultFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Result.$typeName,
            ...typeArgs
        ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::comparator::Result";
        this.$typeArgs = typeArgs;

        this.inner = fields.inner;
    }

    static reified(): ResultReified {
        return {
            typeName: Result.$typeName,
            fullTypeName: composeSuiType(
                Result.$typeName,
                ...[]
            ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::comparator::Result",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Result.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Result.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Result.fromBcs(
                    data,
                ),
            bcs: Result.bcs,
            fromJSONField: (field: any) =>
                Result.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Result.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Result.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Result.fetch(
                client,
                id,
            ),
            new: (
                fields: ResultFields,
            ) => {
                return new Result(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Result.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Result>> {
        return phantom(Result.reified());
    }

    static get p() {
        return Result.phantom()
    }

    static get bcs() {
        return bcs.struct("Result", {
            inner:
                bcs.u8()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Result {
        return Result.reified().new(
            {inner: decodeFromFields("u8", fields.inner)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Result {
        if (!isResult(item.type)) {
            throw new Error("not a Result type");
        }

        return Result.reified().new(
            {inner: decodeFromFieldsWithTypes("u8", item.fields.inner)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Result {

        return Result.fromFields(
            Result.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            inner: this.inner,

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
    ): Result {
        return Result.reified().new(
            {inner: decodeFromJSONField("u8", field.inner)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Result {
        if (json.$typeName !== Result.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Result.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Result {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isResult(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Result object`);
        }
        return Result.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Result> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Result object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isResult(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Result object`);
        }

        return Result.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

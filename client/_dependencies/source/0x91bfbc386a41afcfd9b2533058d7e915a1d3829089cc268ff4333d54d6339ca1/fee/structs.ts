import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {UID} from "../../0x2/object/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Fee =============================== */

export function isFee(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee<");
}

export interface FeeFields<T extends PhantomTypeArgument> {
    id: ToField<UID>; fee: ToField<"u32">; tickSpacing: ToField<"u32">
}

export type FeeReified<T extends PhantomTypeArgument> = Reified<
    Fee<T>,
    FeeFields<T>
>;

export class Fee<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee";
    static readonly $numTypeParams = 1;

    readonly $typeName = Fee.$typeName;

    readonly $fullTypeName: `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee<${PhantomToTypeStr<T>}>`;

    readonly $typeArgs: [PhantomToTypeStr<T>];

    readonly id:
        ToField<UID>
    ; readonly fee:
        ToField<"u32">
    ; readonly tickSpacing:
        ToField<"u32">

    private constructor(typeArgs: [PhantomToTypeStr<T>], fields: FeeFields<T>,
    ) {
        this.$fullTypeName = composeSuiType(
            Fee.$typeName,
            ...typeArgs
        ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee<${PhantomToTypeStr<T>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.fee = fields.fee;; this.tickSpacing = fields.tickSpacing;
    }

    static reified<T extends PhantomReified<PhantomTypeArgument>>(
        T: T
    ): FeeReified<ToPhantomTypeArgument<T>> {
        return {
            typeName: Fee.$typeName,
            fullTypeName: composeSuiType(
                Fee.$typeName,
                ...[extractType(T)]
            ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
            typeArgs: [
                extractType(T)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>],
            reifiedTypeArgs: [T],
            fromFields: (fields: Record<string, any>) =>
                Fee.fromFields(
                    T,
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Fee.fromFieldsWithTypes(
                    T,
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Fee.fromBcs(
                    T,
                    data,
                ),
            bcs: Fee.bcs,
            fromJSONField: (field: any) =>
                Fee.fromJSONField(
                    T,
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Fee.fromJSON(
                    T,
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Fee.fromSuiParsedData(
                    T,
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Fee.fetch(
                client,
                T,
                id,
            ),
            new: (
                fields: FeeFields<ToPhantomTypeArgument<T>>,
            ) => {
                return new Fee(
                    [extractType(T)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Fee.reified
    }

    static phantom<T extends PhantomReified<PhantomTypeArgument>>(
        T: T
    ): PhantomReified<ToTypeStr<Fee<ToPhantomTypeArgument<T>>>> {
        return phantom(Fee.reified(
            T
        ));
    }

    static get p() {
        return Fee.phantom
    }

    static get bcs() {
        return bcs.struct("Fee", {
            id:
                UID.bcs
            , fee:
                bcs.u32()
            , tick_spacing:
                bcs.u32()

        })
    };

    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T, fields: Record<string, any>
    ): Fee<ToPhantomTypeArgument<T>> {
        return Fee.reified(
            typeArg,
        ).new(
            {id: decodeFromFields(UID.reified(), fields.id), fee: decodeFromFields("u32", fields.fee), tickSpacing: decodeFromFields("u32", fields.tick_spacing)}
        )
    }

    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T, item: FieldsWithTypes
    ): Fee<ToPhantomTypeArgument<T>> {
        if (!isFee(item.type)) {
            throw new Error("not a Fee type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return Fee.reified(
            typeArg,
        ).new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), fee: decodeFromFieldsWithTypes("u32", item.fields.fee), tickSpacing: decodeFromFieldsWithTypes("u32", item.fields.tick_spacing)}
        )
    }

    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T, data: Uint8Array
    ): Fee<ToPhantomTypeArgument<T>> {

        return Fee.fromFields(
            typeArg,
            Fee.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,fee: this.fee,tickSpacing: this.tickSpacing,

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T, field: any
    ): Fee<ToPhantomTypeArgument<T>> {
        return Fee.reified(
            typeArg,
        ).new(
            {id: decodeFromJSONField(UID.reified(), field.id), fee: decodeFromJSONField("u32", field.fee), tickSpacing: decodeFromJSONField("u32", field.tickSpacing)}
        )
    }

    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T, json: Record<string, any>
    ): Fee<ToPhantomTypeArgument<T>> {
        if (json.$typeName !== Fee.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(Fee.$typeName,
            extractType(typeArg)),
            json.$typeArgs,
            [typeArg],
        )

        return Fee.fromJSONField(
            typeArg,
            json,
        )
    }

    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
        typeArg: T, content: SuiParsedData
    ): Fee<ToPhantomTypeArgument<T>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFee(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Fee object`);
        }
        return Fee.fromFieldsWithTypes(
            typeArg,
            content
        );
    }

    static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArg: T, id: string
    ): Promise<Fee<ToPhantomTypeArgument<T>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Fee object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Fee object`);
        }

        return Fee.fromBcs(
            typeArg,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

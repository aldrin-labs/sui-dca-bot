import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {Supply} from "../../0x2/balance/structs";
import {Coin} from "../../0x2/coin/structs";
import {UID} from "../../0x2/object/structs";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== LP =============================== */

export function isLP(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LP<");
}

export interface LPFields<BASE extends PhantomTypeArgument, QUOTE extends PhantomTypeArgument> {
    dummyField: ToField<"bool">
}

export type LPReified<BASE extends PhantomTypeArgument, QUOTE extends PhantomTypeArgument> = Reified<
    LP<BASE, QUOTE>,
    LPFields<BASE, QUOTE>
>;

export class LP<BASE extends PhantomTypeArgument, QUOTE extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LP";
    static readonly $numTypeParams = 2;

    readonly $typeName = LP.$typeName;

    readonly $fullTypeName: `0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LP<${PhantomToTypeStr<BASE>}, ${PhantomToTypeStr<QUOTE>}>`;

    readonly $typeArgs: [PhantomToTypeStr<BASE>, PhantomToTypeStr<QUOTE>];

    readonly dummyField:
        ToField<"bool">

    private constructor(typeArgs: [PhantomToTypeStr<BASE>, PhantomToTypeStr<QUOTE>], fields: LPFields<BASE, QUOTE>,
    ) {
        this.$fullTypeName = composeSuiType(
            LP.$typeName,
            ...typeArgs
        ) as `0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LP<${PhantomToTypeStr<BASE>}, ${PhantomToTypeStr<QUOTE>}>`;
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        BASE: BASE, QUOTE: QUOTE
    ): LPReified<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        return {
            typeName: LP.$typeName,
            fullTypeName: composeSuiType(
                LP.$typeName,
                ...[extractType(BASE), extractType(QUOTE)]
            ) as `0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LP<${PhantomToTypeStr<ToPhantomTypeArgument<BASE>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<QUOTE>>}>`,
            typeArgs: [
                extractType(BASE), extractType(QUOTE)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<BASE>>, PhantomToTypeStr<ToPhantomTypeArgument<QUOTE>>],
            reifiedTypeArgs: [BASE, QUOTE],
            fromFields: (fields: Record<string, any>) =>
                LP.fromFields(
                    [BASE, QUOTE],
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                LP.fromFieldsWithTypes(
                    [BASE, QUOTE],
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                LP.fromBcs(
                    [BASE, QUOTE],
                    data,
                ),
            bcs: LP.bcs,
            fromJSONField: (field: any) =>
                LP.fromJSONField(
                    [BASE, QUOTE],
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                LP.fromJSON(
                    [BASE, QUOTE],
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                LP.fromSuiParsedData(
                    [BASE, QUOTE],
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => LP.fetch(
                client,
                [BASE, QUOTE],
                id,
            ),
            new: (
                fields: LPFields<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>>,
            ) => {
                return new LP(
                    [extractType(BASE), extractType(QUOTE)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return LP.reified
    }

    static phantom<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        BASE: BASE, QUOTE: QUOTE
    ): PhantomReified<ToTypeStr<LP<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>>>> {
        return phantom(LP.reified(
            BASE, QUOTE
        ));
    }

    static get p() {
        return LP.phantom
    }

    static get bcs() {
        return bcs.struct("LP", {
            dummy_field:
                bcs.bool()

        })
    };

    static fromFields<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], fields: Record<string, any>
    ): LP<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        return LP.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {dummyField: decodeFromFields("bool", fields.dummy_field)}
        )
    }

    static fromFieldsWithTypes<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], item: FieldsWithTypes
    ): LP<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        if (!isLP(item.type)) {
            throw new Error("not a LP type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return LP.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field)}
        )
    }

    static fromBcs<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], data: Uint8Array
    ): LP<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {

        return LP.fromFields(
            typeArgs,
            LP.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], field: any
    ): LP<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        return LP.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {dummyField: decodeFromJSONField("bool", field.dummyField)}
        )
    }

    static fromJSON<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], json: Record<string, any>
    ): LP<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        if (json.$typeName !== LP.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(LP.$typeName,
            ...typeArgs.map(extractType)),
            json.$typeArgs,
            typeArgs,
        )

        return LP.fromJSONField(
            typeArgs,
            json,
        )
    }

    static fromSuiParsedData<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], content: SuiParsedData
    ): LP<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLP(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LP object`);
        }
        return LP.fromFieldsWithTypes(
            typeArgs,
            content
        );
    }

    static async fetch<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArgs: [BASE, QUOTE], id: string
    ): Promise<LP<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching LP object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLP(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LP object`);
        }

        return LP.fromBcs(
            typeArgs,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== LiquidityAdded =============================== */

export function isLiquidityAdded(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityAdded";
}

export interface LiquidityAddedFields {
    user: ToField<"address">; coinX: ToField<String>; coinY: ToField<String>; amountX: ToField<"u64">; amountY: ToField<"u64">; liquidity: ToField<"u64">; fee: ToField<"u64">
}

export type LiquidityAddedReified = Reified<
    LiquidityAdded,
    LiquidityAddedFields
>;

export class LiquidityAdded implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityAdded";
    static readonly $numTypeParams = 0;

    readonly $typeName = LiquidityAdded.$typeName;

    readonly $fullTypeName: "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityAdded";

    readonly $typeArgs: [];

    readonly user:
        ToField<"address">
    ; readonly coinX:
        ToField<String>
    ; readonly coinY:
        ToField<String>
    ; readonly amountX:
        ToField<"u64">
    ; readonly amountY:
        ToField<"u64">
    ; readonly liquidity:
        ToField<"u64">
    ; readonly fee:
        ToField<"u64">

    private constructor(typeArgs: [], fields: LiquidityAddedFields,
    ) {
        this.$fullTypeName = composeSuiType(
            LiquidityAdded.$typeName,
            ...typeArgs
        ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityAdded";
        this.$typeArgs = typeArgs;

        this.user = fields.user;; this.coinX = fields.coinX;; this.coinY = fields.coinY;; this.amountX = fields.amountX;; this.amountY = fields.amountY;; this.liquidity = fields.liquidity;; this.fee = fields.fee;
    }

    static reified(): LiquidityAddedReified {
        return {
            typeName: LiquidityAdded.$typeName,
            fullTypeName: composeSuiType(
                LiquidityAdded.$typeName,
                ...[]
            ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityAdded",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                LiquidityAdded.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                LiquidityAdded.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                LiquidityAdded.fromBcs(
                    data,
                ),
            bcs: LiquidityAdded.bcs,
            fromJSONField: (field: any) =>
                LiquidityAdded.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                LiquidityAdded.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                LiquidityAdded.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => LiquidityAdded.fetch(
                client,
                id,
            ),
            new: (
                fields: LiquidityAddedFields,
            ) => {
                return new LiquidityAdded(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return LiquidityAdded.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<LiquidityAdded>> {
        return phantom(LiquidityAdded.reified());
    }

    static get p() {
        return LiquidityAdded.phantom()
    }

    static get bcs() {
        return bcs.struct("LiquidityAdded", {
            user:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , coin_x:
                String.bcs
            , coin_y:
                String.bcs
            , amount_x:
                bcs.u64()
            , amount_y:
                bcs.u64()
            , liquidity:
                bcs.u64()
            , fee:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): LiquidityAdded {
        return LiquidityAdded.reified().new(
            {user: decodeFromFields("address", fields.user), coinX: decodeFromFields(String.reified(), fields.coin_x), coinY: decodeFromFields(String.reified(), fields.coin_y), amountX: decodeFromFields("u64", fields.amount_x), amountY: decodeFromFields("u64", fields.amount_y), liquidity: decodeFromFields("u64", fields.liquidity), fee: decodeFromFields("u64", fields.fee)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): LiquidityAdded {
        if (!isLiquidityAdded(item.type)) {
            throw new Error("not a LiquidityAdded type");
        }

        return LiquidityAdded.reified().new(
            {user: decodeFromFieldsWithTypes("address", item.fields.user), coinX: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_x), coinY: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_y), amountX: decodeFromFieldsWithTypes("u64", item.fields.amount_x), amountY: decodeFromFieldsWithTypes("u64", item.fields.amount_y), liquidity: decodeFromFieldsWithTypes("u64", item.fields.liquidity), fee: decodeFromFieldsWithTypes("u64", item.fields.fee)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): LiquidityAdded {

        return LiquidityAdded.fromFields(
            LiquidityAdded.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            user: this.user,coinX: this.coinX,coinY: this.coinY,amountX: this.amountX.toString(),amountY: this.amountY.toString(),liquidity: this.liquidity.toString(),fee: this.fee.toString(),

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
    ): LiquidityAdded {
        return LiquidityAdded.reified().new(
            {user: decodeFromJSONField("address", field.user), coinX: decodeFromJSONField(String.reified(), field.coinX), coinY: decodeFromJSONField(String.reified(), field.coinY), amountX: decodeFromJSONField("u64", field.amountX), amountY: decodeFromJSONField("u64", field.amountY), liquidity: decodeFromJSONField("u64", field.liquidity), fee: decodeFromJSONField("u64", field.fee)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): LiquidityAdded {
        if (json.$typeName !== LiquidityAdded.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return LiquidityAdded.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): LiquidityAdded {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidityAdded(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LiquidityAdded object`);
        }
        return LiquidityAdded.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<LiquidityAdded> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching LiquidityAdded object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidityAdded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidityAdded object`);
        }

        return LiquidityAdded.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== LiquidityRemoved =============================== */

export function isLiquidityRemoved(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityRemoved";
}

export interface LiquidityRemovedFields {
    user: ToField<"address">; coinX: ToField<String>; coinY: ToField<String>; amountX: ToField<"u64">; amountY: ToField<"u64">; liquidity: ToField<"u64">; fee: ToField<"u64">
}

export type LiquidityRemovedReified = Reified<
    LiquidityRemoved,
    LiquidityRemovedFields
>;

export class LiquidityRemoved implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityRemoved";
    static readonly $numTypeParams = 0;

    readonly $typeName = LiquidityRemoved.$typeName;

    readonly $fullTypeName: "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityRemoved";

    readonly $typeArgs: [];

    readonly user:
        ToField<"address">
    ; readonly coinX:
        ToField<String>
    ; readonly coinY:
        ToField<String>
    ; readonly amountX:
        ToField<"u64">
    ; readonly amountY:
        ToField<"u64">
    ; readonly liquidity:
        ToField<"u64">
    ; readonly fee:
        ToField<"u64">

    private constructor(typeArgs: [], fields: LiquidityRemovedFields,
    ) {
        this.$fullTypeName = composeSuiType(
            LiquidityRemoved.$typeName,
            ...typeArgs
        ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityRemoved";
        this.$typeArgs = typeArgs;

        this.user = fields.user;; this.coinX = fields.coinX;; this.coinY = fields.coinY;; this.amountX = fields.amountX;; this.amountY = fields.amountY;; this.liquidity = fields.liquidity;; this.fee = fields.fee;
    }

    static reified(): LiquidityRemovedReified {
        return {
            typeName: LiquidityRemoved.$typeName,
            fullTypeName: composeSuiType(
                LiquidityRemoved.$typeName,
                ...[]
            ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::LiquidityRemoved",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                LiquidityRemoved.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                LiquidityRemoved.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                LiquidityRemoved.fromBcs(
                    data,
                ),
            bcs: LiquidityRemoved.bcs,
            fromJSONField: (field: any) =>
                LiquidityRemoved.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                LiquidityRemoved.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                LiquidityRemoved.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => LiquidityRemoved.fetch(
                client,
                id,
            ),
            new: (
                fields: LiquidityRemovedFields,
            ) => {
                return new LiquidityRemoved(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return LiquidityRemoved.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<LiquidityRemoved>> {
        return phantom(LiquidityRemoved.reified());
    }

    static get p() {
        return LiquidityRemoved.phantom()
    }

    static get bcs() {
        return bcs.struct("LiquidityRemoved", {
            user:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , coin_x:
                String.bcs
            , coin_y:
                String.bcs
            , amount_x:
                bcs.u64()
            , amount_y:
                bcs.u64()
            , liquidity:
                bcs.u64()
            , fee:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): LiquidityRemoved {
        return LiquidityRemoved.reified().new(
            {user: decodeFromFields("address", fields.user), coinX: decodeFromFields(String.reified(), fields.coin_x), coinY: decodeFromFields(String.reified(), fields.coin_y), amountX: decodeFromFields("u64", fields.amount_x), amountY: decodeFromFields("u64", fields.amount_y), liquidity: decodeFromFields("u64", fields.liquidity), fee: decodeFromFields("u64", fields.fee)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): LiquidityRemoved {
        if (!isLiquidityRemoved(item.type)) {
            throw new Error("not a LiquidityRemoved type");
        }

        return LiquidityRemoved.reified().new(
            {user: decodeFromFieldsWithTypes("address", item.fields.user), coinX: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_x), coinY: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_y), amountX: decodeFromFieldsWithTypes("u64", item.fields.amount_x), amountY: decodeFromFieldsWithTypes("u64", item.fields.amount_y), liquidity: decodeFromFieldsWithTypes("u64", item.fields.liquidity), fee: decodeFromFieldsWithTypes("u64", item.fields.fee)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): LiquidityRemoved {

        return LiquidityRemoved.fromFields(
            LiquidityRemoved.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            user: this.user,coinX: this.coinX,coinY: this.coinY,amountX: this.amountX.toString(),amountY: this.amountY.toString(),liquidity: this.liquidity.toString(),fee: this.fee.toString(),

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
    ): LiquidityRemoved {
        return LiquidityRemoved.reified().new(
            {user: decodeFromJSONField("address", field.user), coinX: decodeFromJSONField(String.reified(), field.coinX), coinY: decodeFromJSONField(String.reified(), field.coinY), amountX: decodeFromJSONField("u64", field.amountX), amountY: decodeFromJSONField("u64", field.amountY), liquidity: decodeFromJSONField("u64", field.liquidity), fee: decodeFromJSONField("u64", field.fee)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): LiquidityRemoved {
        if (json.$typeName !== LiquidityRemoved.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return LiquidityRemoved.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): LiquidityRemoved {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLiquidityRemoved(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LiquidityRemoved object`);
        }
        return LiquidityRemoved.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<LiquidityRemoved> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching LiquidityRemoved object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidityRemoved(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidityRemoved object`);
        }

        return LiquidityRemoved.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PairMetadata =============================== */

export function isPairMetadata(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::PairMetadata<");
}

export interface PairMetadataFields<BASE extends PhantomTypeArgument, QUOTE extends PhantomTypeArgument> {
    id: ToField<UID>; reserveX: ToField<Coin<BASE>>; reserveY: ToField<Coin<QUOTE>>; kLast: ToField<"u128">; lpSupply: ToField<Supply<ToPhantom<LP<BASE, QUOTE>>>>; feeRate: ToField<"u64">
}

export type PairMetadataReified<BASE extends PhantomTypeArgument, QUOTE extends PhantomTypeArgument> = Reified<
    PairMetadata<BASE, QUOTE>,
    PairMetadataFields<BASE, QUOTE>
>;

export class PairMetadata<BASE extends PhantomTypeArgument, QUOTE extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::PairMetadata";
    static readonly $numTypeParams = 2;

    readonly $typeName = PairMetadata.$typeName;

    readonly $fullTypeName: `0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::PairMetadata<${PhantomToTypeStr<BASE>}, ${PhantomToTypeStr<QUOTE>}>`;

    readonly $typeArgs: [PhantomToTypeStr<BASE>, PhantomToTypeStr<QUOTE>];

    readonly id:
        ToField<UID>
    ; readonly reserveX:
        ToField<Coin<BASE>>
    ; readonly reserveY:
        ToField<Coin<QUOTE>>
    ; readonly kLast:
        ToField<"u128">
    ; readonly lpSupply:
        ToField<Supply<ToPhantom<LP<BASE, QUOTE>>>>
    ; readonly feeRate:
        ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<BASE>, PhantomToTypeStr<QUOTE>], fields: PairMetadataFields<BASE, QUOTE>,
    ) {
        this.$fullTypeName = composeSuiType(
            PairMetadata.$typeName,
            ...typeArgs
        ) as `0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::PairMetadata<${PhantomToTypeStr<BASE>}, ${PhantomToTypeStr<QUOTE>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.reserveX = fields.reserveX;; this.reserveY = fields.reserveY;; this.kLast = fields.kLast;; this.lpSupply = fields.lpSupply;; this.feeRate = fields.feeRate;
    }

    static reified<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        BASE: BASE, QUOTE: QUOTE
    ): PairMetadataReified<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        return {
            typeName: PairMetadata.$typeName,
            fullTypeName: composeSuiType(
                PairMetadata.$typeName,
                ...[extractType(BASE), extractType(QUOTE)]
            ) as `0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::PairMetadata<${PhantomToTypeStr<ToPhantomTypeArgument<BASE>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<QUOTE>>}>`,
            typeArgs: [
                extractType(BASE), extractType(QUOTE)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<BASE>>, PhantomToTypeStr<ToPhantomTypeArgument<QUOTE>>],
            reifiedTypeArgs: [BASE, QUOTE],
            fromFields: (fields: Record<string, any>) =>
                PairMetadata.fromFields(
                    [BASE, QUOTE],
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PairMetadata.fromFieldsWithTypes(
                    [BASE, QUOTE],
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PairMetadata.fromBcs(
                    [BASE, QUOTE],
                    data,
                ),
            bcs: PairMetadata.bcs,
            fromJSONField: (field: any) =>
                PairMetadata.fromJSONField(
                    [BASE, QUOTE],
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PairMetadata.fromJSON(
                    [BASE, QUOTE],
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PairMetadata.fromSuiParsedData(
                    [BASE, QUOTE],
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PairMetadata.fetch(
                client,
                [BASE, QUOTE],
                id,
            ),
            new: (
                fields: PairMetadataFields<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>>,
            ) => {
                return new PairMetadata(
                    [extractType(BASE), extractType(QUOTE)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PairMetadata.reified
    }

    static phantom<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        BASE: BASE, QUOTE: QUOTE
    ): PhantomReified<ToTypeStr<PairMetadata<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>>>> {
        return phantom(PairMetadata.reified(
            BASE, QUOTE
        ));
    }

    static get p() {
        return PairMetadata.phantom
    }

    static get bcs() {
        return bcs.struct("PairMetadata", {
            id:
                UID.bcs
            , reserve_x:
                Coin.bcs
            , reserve_y:
                Coin.bcs
            , k_last:
                bcs.u128()
            , lp_supply:
                Supply.bcs
            , fee_rate:
                bcs.u64()

        })
    };

    static fromFields<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], fields: Record<string, any>
    ): PairMetadata<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        return PairMetadata.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {id: decodeFromFields(UID.reified(), fields.id), reserveX: decodeFromFields(Coin.reified(typeArgs[0]), fields.reserve_x), reserveY: decodeFromFields(Coin.reified(typeArgs[1]), fields.reserve_y), kLast: decodeFromFields("u128", fields.k_last), lpSupply: decodeFromFields(Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1]))), fields.lp_supply), feeRate: decodeFromFields("u64", fields.fee_rate)}
        )
    }

    static fromFieldsWithTypes<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], item: FieldsWithTypes
    ): PairMetadata<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        if (!isPairMetadata(item.type)) {
            throw new Error("not a PairMetadata type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return PairMetadata.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), reserveX: decodeFromFieldsWithTypes(Coin.reified(typeArgs[0]), item.fields.reserve_x), reserveY: decodeFromFieldsWithTypes(Coin.reified(typeArgs[1]), item.fields.reserve_y), kLast: decodeFromFieldsWithTypes("u128", item.fields.k_last), lpSupply: decodeFromFieldsWithTypes(Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1]))), item.fields.lp_supply), feeRate: decodeFromFieldsWithTypes("u64", item.fields.fee_rate)}
        )
    }

    static fromBcs<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], data: Uint8Array
    ): PairMetadata<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {

        return PairMetadata.fromFields(
            typeArgs,
            PairMetadata.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,reserveX: this.reserveX.toJSONField(),reserveY: this.reserveY.toJSONField(),kLast: this.kLast.toString(),lpSupply: this.lpSupply.toJSONField(),feeRate: this.feeRate.toString(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], field: any
    ): PairMetadata<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        return PairMetadata.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {id: decodeFromJSONField(UID.reified(), field.id), reserveX: decodeFromJSONField(Coin.reified(typeArgs[0]), field.reserveX), reserveY: decodeFromJSONField(Coin.reified(typeArgs[1]), field.reserveY), kLast: decodeFromJSONField("u128", field.kLast), lpSupply: decodeFromJSONField(Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1]))), field.lpSupply), feeRate: decodeFromJSONField("u64", field.feeRate)}
        )
    }

    static fromJSON<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], json: Record<string, any>
    ): PairMetadata<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        if (json.$typeName !== PairMetadata.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(PairMetadata.$typeName,
            ...typeArgs.map(extractType)),
            json.$typeArgs,
            typeArgs,
        )

        return PairMetadata.fromJSONField(
            typeArgs,
            json,
        )
    }

    static fromSuiParsedData<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [BASE, QUOTE], content: SuiParsedData
    ): PairMetadata<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPairMetadata(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PairMetadata object`);
        }
        return PairMetadata.fromFieldsWithTypes(
            typeArgs,
            content
        );
    }

    static async fetch<BASE extends PhantomReified<PhantomTypeArgument>, QUOTE extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArgs: [BASE, QUOTE], id: string
    ): Promise<PairMetadata<ToPhantomTypeArgument<BASE>, ToPhantomTypeArgument<QUOTE>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PairMetadata object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPairMetadata(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PairMetadata object`);
        }

        return PairMetadata.fromBcs(
            typeArgs,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== Swapped =============================== */

export function isSwapped(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::Swapped";
}

export interface SwappedFields {
    user: ToField<"address">; coinX: ToField<String>; coinY: ToField<String>; amountXIn: ToField<"u64">; amountYIn: ToField<"u64">; amountXOut: ToField<"u64">; amountYOut: ToField<"u64">
}

export type SwappedReified = Reified<
    Swapped,
    SwappedFields
>;

export class Swapped implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::Swapped";
    static readonly $numTypeParams = 0;

    readonly $typeName = Swapped.$typeName;

    readonly $fullTypeName: "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::Swapped";

    readonly $typeArgs: [];

    readonly user:
        ToField<"address">
    ; readonly coinX:
        ToField<String>
    ; readonly coinY:
        ToField<String>
    ; readonly amountXIn:
        ToField<"u64">
    ; readonly amountYIn:
        ToField<"u64">
    ; readonly amountXOut:
        ToField<"u64">
    ; readonly amountYOut:
        ToField<"u64">

    private constructor(typeArgs: [], fields: SwappedFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Swapped.$typeName,
            ...typeArgs
        ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::Swapped";
        this.$typeArgs = typeArgs;

        this.user = fields.user;; this.coinX = fields.coinX;; this.coinY = fields.coinY;; this.amountXIn = fields.amountXIn;; this.amountYIn = fields.amountYIn;; this.amountXOut = fields.amountXOut;; this.amountYOut = fields.amountYOut;
    }

    static reified(): SwappedReified {
        return {
            typeName: Swapped.$typeName,
            fullTypeName: composeSuiType(
                Swapped.$typeName,
                ...[]
            ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::pair::Swapped",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Swapped.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Swapped.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Swapped.fromBcs(
                    data,
                ),
            bcs: Swapped.bcs,
            fromJSONField: (field: any) =>
                Swapped.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Swapped.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Swapped.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Swapped.fetch(
                client,
                id,
            ),
            new: (
                fields: SwappedFields,
            ) => {
                return new Swapped(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Swapped.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Swapped>> {
        return phantom(Swapped.reified());
    }

    static get p() {
        return Swapped.phantom()
    }

    static get bcs() {
        return bcs.struct("Swapped", {
            user:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , coin_x:
                String.bcs
            , coin_y:
                String.bcs
            , amount_x_in:
                bcs.u64()
            , amount_y_in:
                bcs.u64()
            , amount_x_out:
                bcs.u64()
            , amount_y_out:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Swapped {
        return Swapped.reified().new(
            {user: decodeFromFields("address", fields.user), coinX: decodeFromFields(String.reified(), fields.coin_x), coinY: decodeFromFields(String.reified(), fields.coin_y), amountXIn: decodeFromFields("u64", fields.amount_x_in), amountYIn: decodeFromFields("u64", fields.amount_y_in), amountXOut: decodeFromFields("u64", fields.amount_x_out), amountYOut: decodeFromFields("u64", fields.amount_y_out)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Swapped {
        if (!isSwapped(item.type)) {
            throw new Error("not a Swapped type");
        }

        return Swapped.reified().new(
            {user: decodeFromFieldsWithTypes("address", item.fields.user), coinX: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_x), coinY: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_y), amountXIn: decodeFromFieldsWithTypes("u64", item.fields.amount_x_in), amountYIn: decodeFromFieldsWithTypes("u64", item.fields.amount_y_in), amountXOut: decodeFromFieldsWithTypes("u64", item.fields.amount_x_out), amountYOut: decodeFromFieldsWithTypes("u64", item.fields.amount_y_out)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Swapped {

        return Swapped.fromFields(
            Swapped.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            user: this.user,coinX: this.coinX,coinY: this.coinY,amountXIn: this.amountXIn.toString(),amountYIn: this.amountYIn.toString(),amountXOut: this.amountXOut.toString(),amountYOut: this.amountYOut.toString(),

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
    ): Swapped {
        return Swapped.reified().new(
            {user: decodeFromJSONField("address", field.user), coinX: decodeFromJSONField(String.reified(), field.coinX), coinY: decodeFromJSONField(String.reified(), field.coinY), amountXIn: decodeFromJSONField("u64", field.amountXIn), amountYIn: decodeFromJSONField("u64", field.amountYIn), amountXOut: decodeFromJSONField("u64", field.amountXOut), amountYOut: decodeFromJSONField("u64", field.amountYOut)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Swapped {
        if (json.$typeName !== Swapped.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Swapped.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Swapped {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSwapped(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Swapped object`);
        }
        return Swapped.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Swapped> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Swapped object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSwapped(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Swapped object`);
        }

        return Swapped.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

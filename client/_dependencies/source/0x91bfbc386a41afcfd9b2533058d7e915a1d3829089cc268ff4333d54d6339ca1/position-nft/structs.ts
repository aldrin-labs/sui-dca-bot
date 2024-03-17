import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {TypeName} from "../../0x1/type-name/structs";
import {ID, UID} from "../../0x2/object/structs";
import {Url} from "../../0x2/url/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== TurbosPositionNFT =============================== */

export function isTurbosPositionNFT(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT";
}

export interface TurbosPositionNFTFields {
    id: ToField<UID>; name: ToField<String>; description: ToField<String>; imgUrl: ToField<Url>; poolId: ToField<ID>; positionId: ToField<ID>; coinTypeA: ToField<TypeName>; coinTypeB: ToField<TypeName>; feeType: ToField<TypeName>
}

export type TurbosPositionNFTReified = Reified<
    TurbosPositionNFT,
    TurbosPositionNFTFields
>;

export class TurbosPositionNFT implements StructClass {
    static readonly $typeName = "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT";
    static readonly $numTypeParams = 0;

    readonly $typeName = TurbosPositionNFT.$typeName;

    readonly $fullTypeName: "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly name:
        ToField<String>
    ; readonly description:
        ToField<String>
    ; readonly imgUrl:
        ToField<Url>
    ; readonly poolId:
        ToField<ID>
    ; readonly positionId:
        ToField<ID>
    ; readonly coinTypeA:
        ToField<TypeName>
    ; readonly coinTypeB:
        ToField<TypeName>
    ; readonly feeType:
        ToField<TypeName>

    private constructor(typeArgs: [], fields: TurbosPositionNFTFields,
    ) {
        this.$fullTypeName = composeSuiType(
            TurbosPositionNFT.$typeName,
            ...typeArgs
        ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.name = fields.name;; this.description = fields.description;; this.imgUrl = fields.imgUrl;; this.poolId = fields.poolId;; this.positionId = fields.positionId;; this.coinTypeA = fields.coinTypeA;; this.coinTypeB = fields.coinTypeB;; this.feeType = fields.feeType;
    }

    static reified(): TurbosPositionNFTReified {
        return {
            typeName: TurbosPositionNFT.$typeName,
            fullTypeName: composeSuiType(
                TurbosPositionNFT.$typeName,
                ...[]
            ) as "0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                TurbosPositionNFT.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                TurbosPositionNFT.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                TurbosPositionNFT.fromBcs(
                    data,
                ),
            bcs: TurbosPositionNFT.bcs,
            fromJSONField: (field: any) =>
                TurbosPositionNFT.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                TurbosPositionNFT.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                TurbosPositionNFT.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => TurbosPositionNFT.fetch(
                client,
                id,
            ),
            new: (
                fields: TurbosPositionNFTFields,
            ) => {
                return new TurbosPositionNFT(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return TurbosPositionNFT.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<TurbosPositionNFT>> {
        return phantom(TurbosPositionNFT.reified());
    }

    static get p() {
        return TurbosPositionNFT.phantom()
    }

    static get bcs() {
        return bcs.struct("TurbosPositionNFT", {
            id:
                UID.bcs
            , name:
                String.bcs
            , description:
                String.bcs
            , img_url:
                Url.bcs
            , pool_id:
                ID.bcs
            , position_id:
                ID.bcs
            , coin_type_a:
                TypeName.bcs
            , coin_type_b:
                TypeName.bcs
            , fee_type:
                TypeName.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): TurbosPositionNFT {
        return TurbosPositionNFT.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), name: decodeFromFields(String.reified(), fields.name), description: decodeFromFields(String.reified(), fields.description), imgUrl: decodeFromFields(Url.reified(), fields.img_url), poolId: decodeFromFields(ID.reified(), fields.pool_id), positionId: decodeFromFields(ID.reified(), fields.position_id), coinTypeA: decodeFromFields(TypeName.reified(), fields.coin_type_a), coinTypeB: decodeFromFields(TypeName.reified(), fields.coin_type_b), feeType: decodeFromFields(TypeName.reified(), fields.fee_type)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): TurbosPositionNFT {
        if (!isTurbosPositionNFT(item.type)) {
            throw new Error("not a TurbosPositionNFT type");
        }

        return TurbosPositionNFT.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), description: decodeFromFieldsWithTypes(String.reified(), item.fields.description), imgUrl: decodeFromFieldsWithTypes(Url.reified(), item.fields.img_url), poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), positionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.position_id), coinTypeA: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_a), coinTypeB: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_b), feeType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.fee_type)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): TurbosPositionNFT {

        return TurbosPositionNFT.fromFields(
            TurbosPositionNFT.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,name: this.name,description: this.description,imgUrl: this.imgUrl,poolId: this.poolId,positionId: this.positionId,coinTypeA: this.coinTypeA.toJSONField(),coinTypeB: this.coinTypeB.toJSONField(),feeType: this.feeType.toJSONField(),

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
    ): TurbosPositionNFT {
        return TurbosPositionNFT.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), name: decodeFromJSONField(String.reified(), field.name), description: decodeFromJSONField(String.reified(), field.description), imgUrl: decodeFromJSONField(Url.reified(), field.imgUrl), poolId: decodeFromJSONField(ID.reified(), field.poolId), positionId: decodeFromJSONField(ID.reified(), field.positionId), coinTypeA: decodeFromJSONField(TypeName.reified(), field.coinTypeA), coinTypeB: decodeFromJSONField(TypeName.reified(), field.coinTypeB), feeType: decodeFromJSONField(TypeName.reified(), field.feeType)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): TurbosPositionNFT {
        if (json.$typeName !== TurbosPositionNFT.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return TurbosPositionNFT.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): TurbosPositionNFT {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTurbosPositionNFT(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TurbosPositionNFT object`);
        }
        return TurbosPositionNFT.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<TurbosPositionNFT> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching TurbosPositionNFT object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTurbosPositionNFT(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TurbosPositionNFT object`);
        }

        return TurbosPositionNFT.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

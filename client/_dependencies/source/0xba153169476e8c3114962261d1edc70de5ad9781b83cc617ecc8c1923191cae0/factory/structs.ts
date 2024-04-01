import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {Bag} from "../../0x2/bag/structs";
import {UID} from "../../0x2/object/structs";
import {Treasury} from "../treasury/structs";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::AdminCap";
}

export interface AdminCapFields {
    id: ToField<UID>
}

export type AdminCapReified = Reified<
    AdminCap,
    AdminCapFields
>;

export class AdminCap implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::AdminCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = AdminCap.$typeName;

    readonly $fullTypeName: "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::AdminCap";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>

    private constructor(typeArgs: [], fields: AdminCapFields,
    ) {
        this.$fullTypeName = composeSuiType(
            AdminCap.$typeName,
            ...typeArgs
        ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::AdminCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): AdminCapReified {
        return {
            typeName: AdminCap.$typeName,
            fullTypeName: composeSuiType(
                AdminCap.$typeName,
                ...[]
            ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::AdminCap",
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

/* ============================== Container =============================== */

export function isContainer(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::Container";
}

export interface ContainerFields {
    id: ToField<UID>; pairs: ToField<Bag>; treasury: ToField<Treasury>
}

export type ContainerReified = Reified<
    Container,
    ContainerFields
>;

export class Container implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::Container";
    static readonly $numTypeParams = 0;

    readonly $typeName = Container.$typeName;

    readonly $fullTypeName: "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::Container";

    readonly $typeArgs: [];

    readonly id:
        ToField<UID>
    ; readonly pairs:
        ToField<Bag>
    ; readonly treasury:
        ToField<Treasury>

    private constructor(typeArgs: [], fields: ContainerFields,
    ) {
        this.$fullTypeName = composeSuiType(
            Container.$typeName,
            ...typeArgs
        ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::Container";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.pairs = fields.pairs;; this.treasury = fields.treasury;
    }

    static reified(): ContainerReified {
        return {
            typeName: Container.$typeName,
            fullTypeName: composeSuiType(
                Container.$typeName,
                ...[]
            ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::Container",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                Container.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Container.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Container.fromBcs(
                    data,
                ),
            bcs: Container.bcs,
            fromJSONField: (field: any) =>
                Container.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Container.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Container.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Container.fetch(
                client,
                id,
            ),
            new: (
                fields: ContainerFields,
            ) => {
                return new Container(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Container.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<Container>> {
        return phantom(Container.reified());
    }

    static get p() {
        return Container.phantom()
    }

    static get bcs() {
        return bcs.struct("Container", {
            id:
                UID.bcs
            , pairs:
                Bag.bcs
            , treasury:
                Treasury.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): Container {
        return Container.reified().new(
            {id: decodeFromFields(UID.reified(), fields.id), pairs: decodeFromFields(Bag.reified(), fields.pairs), treasury: decodeFromFields(Treasury.reified(), fields.treasury)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): Container {
        if (!isContainer(item.type)) {
            throw new Error("not a Container type");
        }

        return Container.reified().new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), pairs: decodeFromFieldsWithTypes(Bag.reified(), item.fields.pairs), treasury: decodeFromFieldsWithTypes(Treasury.reified(), item.fields.treasury)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): Container {

        return Container.fromFields(
            Container.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,pairs: this.pairs.toJSONField(),treasury: this.treasury.toJSONField(),

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
    ): Container {
        return Container.reified().new(
            {id: decodeFromJSONField(UID.reified(), field.id), pairs: decodeFromJSONField(Bag.reified(), field.pairs), treasury: decodeFromJSONField(Treasury.reified(), field.treasury)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): Container {
        if (json.$typeName !== Container.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return Container.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): Container {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isContainer(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Container object`);
        }
        return Container.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<Container> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Container object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isContainer(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Container object`);
        }

        return Container.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== FeeChanged =============================== */

export function isFeeChanged(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::FeeChanged";
}

export interface FeeChangedFields {
    user: ToField<"address">; coinX: ToField<String>; coinY: ToField<String>; feeRate: ToField<"u64">
}

export type FeeChangedReified = Reified<
    FeeChanged,
    FeeChangedFields
>;

export class FeeChanged implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::FeeChanged";
    static readonly $numTypeParams = 0;

    readonly $typeName = FeeChanged.$typeName;

    readonly $fullTypeName: "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::FeeChanged";

    readonly $typeArgs: [];

    readonly user:
        ToField<"address">
    ; readonly coinX:
        ToField<String>
    ; readonly coinY:
        ToField<String>
    ; readonly feeRate:
        ToField<"u64">

    private constructor(typeArgs: [], fields: FeeChangedFields,
    ) {
        this.$fullTypeName = composeSuiType(
            FeeChanged.$typeName,
            ...typeArgs
        ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::FeeChanged";
        this.$typeArgs = typeArgs;

        this.user = fields.user;; this.coinX = fields.coinX;; this.coinY = fields.coinY;; this.feeRate = fields.feeRate;
    }

    static reified(): FeeChangedReified {
        return {
            typeName: FeeChanged.$typeName,
            fullTypeName: composeSuiType(
                FeeChanged.$typeName,
                ...[]
            ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::FeeChanged",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                FeeChanged.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                FeeChanged.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                FeeChanged.fromBcs(
                    data,
                ),
            bcs: FeeChanged.bcs,
            fromJSONField: (field: any) =>
                FeeChanged.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                FeeChanged.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                FeeChanged.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => FeeChanged.fetch(
                client,
                id,
            ),
            new: (
                fields: FeeChangedFields,
            ) => {
                return new FeeChanged(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return FeeChanged.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<FeeChanged>> {
        return phantom(FeeChanged.reified());
    }

    static get p() {
        return FeeChanged.phantom()
    }

    static get bcs() {
        return bcs.struct("FeeChanged", {
            user:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , coin_x:
                String.bcs
            , coin_y:
                String.bcs
            , fee_rate:
                bcs.u64()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): FeeChanged {
        return FeeChanged.reified().new(
            {user: decodeFromFields("address", fields.user), coinX: decodeFromFields(String.reified(), fields.coin_x), coinY: decodeFromFields(String.reified(), fields.coin_y), feeRate: decodeFromFields("u64", fields.fee_rate)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): FeeChanged {
        if (!isFeeChanged(item.type)) {
            throw new Error("not a FeeChanged type");
        }

        return FeeChanged.reified().new(
            {user: decodeFromFieldsWithTypes("address", item.fields.user), coinX: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_x), coinY: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_y), feeRate: decodeFromFieldsWithTypes("u64", item.fields.fee_rate)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): FeeChanged {

        return FeeChanged.fromFields(
            FeeChanged.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            user: this.user,coinX: this.coinX,coinY: this.coinY,feeRate: this.feeRate.toString(),

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
    ): FeeChanged {
        return FeeChanged.reified().new(
            {user: decodeFromJSONField("address", field.user), coinX: decodeFromJSONField(String.reified(), field.coinX), coinY: decodeFromJSONField(String.reified(), field.coinY), feeRate: decodeFromJSONField("u64", field.feeRate)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): FeeChanged {
        if (json.$typeName !== FeeChanged.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return FeeChanged.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): FeeChanged {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isFeeChanged(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a FeeChanged object`);
        }
        return FeeChanged.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<FeeChanged> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching FeeChanged object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isFeeChanged(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeChanged object`);
        }

        return FeeChanged.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== PairCreated =============================== */

export function isPairCreated(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::PairCreated";
}

export interface PairCreatedFields {
    user: ToField<"address">; pair: ToField<String>; coinX: ToField<String>; coinY: ToField<String>
}

export type PairCreatedReified = Reified<
    PairCreated,
    PairCreatedFields
>;

export class PairCreated implements StructClass {
    static readonly $typeName = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::PairCreated";
    static readonly $numTypeParams = 0;

    readonly $typeName = PairCreated.$typeName;

    readonly $fullTypeName: "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::PairCreated";

    readonly $typeArgs: [];

    readonly user:
        ToField<"address">
    ; readonly pair:
        ToField<String>
    ; readonly coinX:
        ToField<String>
    ; readonly coinY:
        ToField<String>

    private constructor(typeArgs: [], fields: PairCreatedFields,
    ) {
        this.$fullTypeName = composeSuiType(
            PairCreated.$typeName,
            ...typeArgs
        ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::PairCreated";
        this.$typeArgs = typeArgs;

        this.user = fields.user;; this.pair = fields.pair;; this.coinX = fields.coinX;; this.coinY = fields.coinY;
    }

    static reified(): PairCreatedReified {
        return {
            typeName: PairCreated.$typeName,
            fullTypeName: composeSuiType(
                PairCreated.$typeName,
                ...[]
            ) as "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0::factory::PairCreated",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                PairCreated.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                PairCreated.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                PairCreated.fromBcs(
                    data,
                ),
            bcs: PairCreated.bcs,
            fromJSONField: (field: any) =>
                PairCreated.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                PairCreated.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                PairCreated.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => PairCreated.fetch(
                client,
                id,
            ),
            new: (
                fields: PairCreatedFields,
            ) => {
                return new PairCreated(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return PairCreated.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<PairCreated>> {
        return phantom(PairCreated.reified());
    }

    static get p() {
        return PairCreated.phantom()
    }

    static get bcs() {
        return bcs.struct("PairCreated", {
            user:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , pair:
                String.bcs
            , coin_x:
                String.bcs
            , coin_y:
                String.bcs

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): PairCreated {
        return PairCreated.reified().new(
            {user: decodeFromFields("address", fields.user), pair: decodeFromFields(String.reified(), fields.pair), coinX: decodeFromFields(String.reified(), fields.coin_x), coinY: decodeFromFields(String.reified(), fields.coin_y)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): PairCreated {
        if (!isPairCreated(item.type)) {
            throw new Error("not a PairCreated type");
        }

        return PairCreated.reified().new(
            {user: decodeFromFieldsWithTypes("address", item.fields.user), pair: decodeFromFieldsWithTypes(String.reified(), item.fields.pair), coinX: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_x), coinY: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_y)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): PairCreated {

        return PairCreated.fromFields(
            PairCreated.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            user: this.user,pair: this.pair,coinX: this.coinX,coinY: this.coinY,

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
    ): PairCreated {
        return PairCreated.reified().new(
            {user: decodeFromJSONField("address", field.user), pair: decodeFromJSONField(String.reified(), field.pair), coinX: decodeFromJSONField(String.reified(), field.coinX), coinY: decodeFromJSONField(String.reified(), field.coinY)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): PairCreated {
        if (json.$typeName !== PairCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return PairCreated.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): PairCreated {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isPairCreated(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a PairCreated object`);
        }
        return PairCreated.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<PairCreated> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching PairCreated object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isPairCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PairCreated object`);
        }

        return PairCreated.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

import * as reified from "../../_framework/reified";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {ID, UID} from "../../_dependencies/source/0x2/object/structs";
import {SUI} from "../../_dependencies/source/0x2/sui/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== DCA =============================== */

export function isDCA(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCA<");
}

export interface DCAFields<Input extends PhantomTypeArgument, Output extends PhantomTypeArgument> {
    id: ToField<UID>; owner: ToField<"address">; delegatee: ToField<"address">; startTimeMs: ToField<"u64">; lastTimeMs: ToField<"u64">; every: ToField<"u64">; remainingOrders: ToField<"u64">; timeScale: ToField<"u8">; inputBalance: ToField<Balance<Input>>; splitAllocation: ToField<"u64">; tradeParams: ToField<TradeParams>; active: ToField<"bool">; gasBudget: ToField<Balance<ToPhantom<SUI>>>
}

export type DCAReified<Input extends PhantomTypeArgument, Output extends PhantomTypeArgument> = Reified<
    DCA<Input, Output>,
    DCAFields<Input, Output>
>;

export class DCA<Input extends PhantomTypeArgument, Output extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCA";
    static readonly $numTypeParams = 2;

    readonly $typeName = DCA.$typeName;

    readonly $fullTypeName: `0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCA<${PhantomToTypeStr<Input>}, ${PhantomToTypeStr<Output>}>`;

    readonly $typeArgs: [PhantomToTypeStr<Input>, PhantomToTypeStr<Output>];

    readonly id:
        ToField<UID>
    ; readonly owner:
        ToField<"address">
    ; readonly delegatee:
        ToField<"address">
    ; readonly startTimeMs:
        ToField<"u64">
    ; readonly lastTimeMs:
        ToField<"u64">
    ; readonly every:
        ToField<"u64">
    ; readonly remainingOrders:
        ToField<"u64">
    ; readonly timeScale:
        ToField<"u8">
    ; readonly inputBalance:
        ToField<Balance<Input>>
    ; readonly splitAllocation:
        ToField<"u64">
    ; readonly tradeParams:
        ToField<TradeParams>
    ; readonly active:
        ToField<"bool">
    ; readonly gasBudget:
        ToField<Balance<ToPhantom<SUI>>>

    private constructor(typeArgs: [PhantomToTypeStr<Input>, PhantomToTypeStr<Output>], fields: DCAFields<Input, Output>,
    ) {
        this.$fullTypeName = composeSuiType(
            DCA.$typeName,
            ...typeArgs
        ) as `0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCA<${PhantomToTypeStr<Input>}, ${PhantomToTypeStr<Output>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.owner = fields.owner;; this.delegatee = fields.delegatee;; this.startTimeMs = fields.startTimeMs;; this.lastTimeMs = fields.lastTimeMs;; this.every = fields.every;; this.remainingOrders = fields.remainingOrders;; this.timeScale = fields.timeScale;; this.inputBalance = fields.inputBalance;; this.splitAllocation = fields.splitAllocation;; this.tradeParams = fields.tradeParams;; this.active = fields.active;; this.gasBudget = fields.gasBudget;
    }

    static reified<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        Input: Input, Output: Output
    ): DCAReified<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        return {
            typeName: DCA.$typeName,
            fullTypeName: composeSuiType(
                DCA.$typeName,
                ...[extractType(Input), extractType(Output)]
            ) as `0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCA<${PhantomToTypeStr<ToPhantomTypeArgument<Input>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Output>>}>`,
            typeArgs: [
                extractType(Input), extractType(Output)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<Input>>, PhantomToTypeStr<ToPhantomTypeArgument<Output>>],
            reifiedTypeArgs: [Input, Output],
            fromFields: (fields: Record<string, any>) =>
                DCA.fromFields(
                    [Input, Output],
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                DCA.fromFieldsWithTypes(
                    [Input, Output],
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                DCA.fromBcs(
                    [Input, Output],
                    data,
                ),
            bcs: DCA.bcs,
            fromJSONField: (field: any) =>
                DCA.fromJSONField(
                    [Input, Output],
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                DCA.fromJSON(
                    [Input, Output],
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                DCA.fromSuiParsedData(
                    [Input, Output],
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => DCA.fetch(
                client,
                [Input, Output],
                id,
            ),
            new: (
                fields: DCAFields<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>>,
            ) => {
                return new DCA(
                    [extractType(Input), extractType(Output)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return DCA.reified
    }

    static phantom<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        Input: Input, Output: Output
    ): PhantomReified<ToTypeStr<DCA<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>>>> {
        return phantom(DCA.reified(
            Input, Output
        ));
    }

    static get p() {
        return DCA.phantom
    }

    static get bcs() {
        return bcs.struct("DCA", {
            id:
                UID.bcs
            , owner:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , delegatee:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , start_time_ms:
                bcs.u64()
            , last_time_ms:
                bcs.u64()
            , every:
                bcs.u64()
            , remaining_orders:
                bcs.u64()
            , time_scale:
                bcs.u8()
            , input_balance:
                Balance.bcs
            , split_allocation:
                bcs.u64()
            , trade_params:
                TradeParams.bcs
            , active:
                bcs.bool()
            , gas_budget:
                Balance.bcs

        })
    };

    static fromFields<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], fields: Record<string, any>
    ): DCA<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        return DCA.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {id: decodeFromFields(UID.reified(), fields.id), owner: decodeFromFields("address", fields.owner), delegatee: decodeFromFields("address", fields.delegatee), startTimeMs: decodeFromFields("u64", fields.start_time_ms), lastTimeMs: decodeFromFields("u64", fields.last_time_ms), every: decodeFromFields("u64", fields.every), remainingOrders: decodeFromFields("u64", fields.remaining_orders), timeScale: decodeFromFields("u8", fields.time_scale), inputBalance: decodeFromFields(Balance.reified(typeArgs[0]), fields.input_balance), splitAllocation: decodeFromFields("u64", fields.split_allocation), tradeParams: decodeFromFields(TradeParams.reified(), fields.trade_params), active: decodeFromFields("bool", fields.active), gasBudget: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.gas_budget)}
        )
    }

    static fromFieldsWithTypes<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], item: FieldsWithTypes
    ): DCA<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        if (!isDCA(item.type)) {
            throw new Error("not a DCA type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return DCA.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), owner: decodeFromFieldsWithTypes("address", item.fields.owner), delegatee: decodeFromFieldsWithTypes("address", item.fields.delegatee), startTimeMs: decodeFromFieldsWithTypes("u64", item.fields.start_time_ms), lastTimeMs: decodeFromFieldsWithTypes("u64", item.fields.last_time_ms), every: decodeFromFieldsWithTypes("u64", item.fields.every), remainingOrders: decodeFromFieldsWithTypes("u64", item.fields.remaining_orders), timeScale: decodeFromFieldsWithTypes("u8", item.fields.time_scale), inputBalance: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.input_balance), splitAllocation: decodeFromFieldsWithTypes("u64", item.fields.split_allocation), tradeParams: decodeFromFieldsWithTypes(TradeParams.reified(), item.fields.trade_params), active: decodeFromFieldsWithTypes("bool", item.fields.active), gasBudget: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.gas_budget)}
        )
    }

    static fromBcs<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], data: Uint8Array
    ): DCA<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {

        return DCA.fromFields(
            typeArgs,
            DCA.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,owner: this.owner,delegatee: this.delegatee,startTimeMs: this.startTimeMs.toString(),lastTimeMs: this.lastTimeMs.toString(),every: this.every.toString(),remainingOrders: this.remainingOrders.toString(),timeScale: this.timeScale,inputBalance: this.inputBalance.toJSONField(),splitAllocation: this.splitAllocation.toString(),tradeParams: this.tradeParams.toJSONField(),active: this.active,gasBudget: this.gasBudget.toJSONField(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], field: any
    ): DCA<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        return DCA.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {id: decodeFromJSONField(UID.reified(), field.id), owner: decodeFromJSONField("address", field.owner), delegatee: decodeFromJSONField("address", field.delegatee), startTimeMs: decodeFromJSONField("u64", field.startTimeMs), lastTimeMs: decodeFromJSONField("u64", field.lastTimeMs), every: decodeFromJSONField("u64", field.every), remainingOrders: decodeFromJSONField("u64", field.remainingOrders), timeScale: decodeFromJSONField("u8", field.timeScale), inputBalance: decodeFromJSONField(Balance.reified(typeArgs[0]), field.inputBalance), splitAllocation: decodeFromJSONField("u64", field.splitAllocation), tradeParams: decodeFromJSONField(TradeParams.reified(), field.tradeParams), active: decodeFromJSONField("bool", field.active), gasBudget: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.gasBudget)}
        )
    }

    static fromJSON<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], json: Record<string, any>
    ): DCA<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        if (json.$typeName !== DCA.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(DCA.$typeName,
            ...typeArgs.map(extractType)),
            json.$typeArgs,
            typeArgs,
        )

        return DCA.fromJSONField(
            typeArgs,
            json,
        )
    }

    static fromSuiParsedData<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], content: SuiParsedData
    ): DCA<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDCA(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DCA object`);
        }
        return DCA.fromFieldsWithTypes(
            typeArgs,
            content
        );
    }

    static async fetch<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArgs: [Input, Output], id: string
    ): Promise<DCA<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching DCA object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDCA(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DCA object`);
        }

        return DCA.fromBcs(
            typeArgs,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== DCACreatedEvent =============================== */

export function isDCACreatedEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCACreatedEvent";
}

export interface DCACreatedEventFields {
    id: ToField<ID>; owner: ToField<"address">; delegatee: ToField<"address">
}

export type DCACreatedEventReified = Reified<
    DCACreatedEvent,
    DCACreatedEventFields
>;

export class DCACreatedEvent implements StructClass {
    static readonly $typeName = "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCACreatedEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = DCACreatedEvent.$typeName;

    readonly $fullTypeName: "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCACreatedEvent";

    readonly $typeArgs: [];

    readonly id:
        ToField<ID>
    ; readonly owner:
        ToField<"address">
    ; readonly delegatee:
        ToField<"address">

    private constructor(typeArgs: [], fields: DCACreatedEventFields,
    ) {
        this.$fullTypeName = composeSuiType(
            DCACreatedEvent.$typeName,
            ...typeArgs
        ) as "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCACreatedEvent";
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.owner = fields.owner;; this.delegatee = fields.delegatee;
    }

    static reified(): DCACreatedEventReified {
        return {
            typeName: DCACreatedEvent.$typeName,
            fullTypeName: composeSuiType(
                DCACreatedEvent.$typeName,
                ...[]
            ) as "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::DCACreatedEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                DCACreatedEvent.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                DCACreatedEvent.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                DCACreatedEvent.fromBcs(
                    data,
                ),
            bcs: DCACreatedEvent.bcs,
            fromJSONField: (field: any) =>
                DCACreatedEvent.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                DCACreatedEvent.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                DCACreatedEvent.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => DCACreatedEvent.fetch(
                client,
                id,
            ),
            new: (
                fields: DCACreatedEventFields,
            ) => {
                return new DCACreatedEvent(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return DCACreatedEvent.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<DCACreatedEvent>> {
        return phantom(DCACreatedEvent.reified());
    }

    static get p() {
        return DCACreatedEvent.phantom()
    }

    static get bcs() {
        return bcs.struct("DCACreatedEvent", {
            id:
                ID.bcs
            , owner:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})
            , delegatee:
                bcs.bytes(32).transform({input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),})

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): DCACreatedEvent {
        return DCACreatedEvent.reified().new(
            {id: decodeFromFields(ID.reified(), fields.id), owner: decodeFromFields("address", fields.owner), delegatee: decodeFromFields("address", fields.delegatee)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): DCACreatedEvent {
        if (!isDCACreatedEvent(item.type)) {
            throw new Error("not a DCACreatedEvent type");
        }

        return DCACreatedEvent.reified().new(
            {id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), owner: decodeFromFieldsWithTypes("address", item.fields.owner), delegatee: decodeFromFieldsWithTypes("address", item.fields.delegatee)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): DCACreatedEvent {

        return DCACreatedEvent.fromFields(
            DCACreatedEvent.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,owner: this.owner,delegatee: this.delegatee,

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
    ): DCACreatedEvent {
        return DCACreatedEvent.reified().new(
            {id: decodeFromJSONField(ID.reified(), field.id), owner: decodeFromJSONField("address", field.owner), delegatee: decodeFromJSONField("address", field.delegatee)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): DCACreatedEvent {
        if (json.$typeName !== DCACreatedEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return DCACreatedEvent.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): DCACreatedEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDCACreatedEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DCACreatedEvent object`);
        }
        return DCACreatedEvent.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<DCACreatedEvent> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching DCACreatedEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDCACreatedEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DCACreatedEvent object`);
        }

        return DCACreatedEvent.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== ProofKey =============================== */

export function isProofKey(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::ProofKey";
}

export interface ProofKeyFields {
    dummyField: ToField<"bool">
}

export type ProofKeyReified = Reified<
    ProofKey,
    ProofKeyFields
>;

export class ProofKey implements StructClass {
    static readonly $typeName = "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::ProofKey";
    static readonly $numTypeParams = 0;

    readonly $typeName = ProofKey.$typeName;

    readonly $fullTypeName: "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::ProofKey";

    readonly $typeArgs: [];

    readonly dummyField:
        ToField<"bool">

    private constructor(typeArgs: [], fields: ProofKeyFields,
    ) {
        this.$fullTypeName = composeSuiType(
            ProofKey.$typeName,
            ...typeArgs
        ) as "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::ProofKey";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): ProofKeyReified {
        return {
            typeName: ProofKey.$typeName,
            fullTypeName: composeSuiType(
                ProofKey.$typeName,
                ...[]
            ) as "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::ProofKey",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                ProofKey.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                ProofKey.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                ProofKey.fromBcs(
                    data,
                ),
            bcs: ProofKey.bcs,
            fromJSONField: (field: any) =>
                ProofKey.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                ProofKey.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                ProofKey.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => ProofKey.fetch(
                client,
                id,
            ),
            new: (
                fields: ProofKeyFields,
            ) => {
                return new ProofKey(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return ProofKey.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<ProofKey>> {
        return phantom(ProofKey.reified());
    }

    static get p() {
        return ProofKey.phantom()
    }

    static get bcs() {
        return bcs.struct("ProofKey", {
            dummy_field:
                bcs.bool()

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): ProofKey {
        return ProofKey.reified().new(
            {dummyField: decodeFromFields("bool", fields.dummy_field)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): ProofKey {
        if (!isProofKey(item.type)) {
            throw new Error("not a ProofKey type");
        }

        return ProofKey.reified().new(
            {dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): ProofKey {

        return ProofKey.fromFields(
            ProofKey.bcs.parse(data)
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

    static fromJSONField(
         field: any
    ): ProofKey {
        return ProofKey.reified().new(
            {dummyField: decodeFromJSONField("bool", field.dummyField)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): ProofKey {
        if (json.$typeName !== ProofKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return ProofKey.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): ProofKey {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isProofKey(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ProofKey object`);
        }
        return ProofKey.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<ProofKey> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching ProofKey object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isProofKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProofKey object`);
        }

        return ProofKey.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== TradeParams =============================== */

export function isTradeParams(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradeParams";
}

export interface TradeParamsFields {
    minPrice: ToField<Option<"u64">>; maxPrice: ToField<Option<"u64">>
}

export type TradeParamsReified = Reified<
    TradeParams,
    TradeParamsFields
>;

export class TradeParams implements StructClass {
    static readonly $typeName = "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradeParams";
    static readonly $numTypeParams = 0;

    readonly $typeName = TradeParams.$typeName;

    readonly $fullTypeName: "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradeParams";

    readonly $typeArgs: [];

    readonly minPrice:
        ToField<Option<"u64">>
    ; readonly maxPrice:
        ToField<Option<"u64">>

    private constructor(typeArgs: [], fields: TradeParamsFields,
    ) {
        this.$fullTypeName = composeSuiType(
            TradeParams.$typeName,
            ...typeArgs
        ) as "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradeParams";
        this.$typeArgs = typeArgs;

        this.minPrice = fields.minPrice;; this.maxPrice = fields.maxPrice;
    }

    static reified(): TradeParamsReified {
        return {
            typeName: TradeParams.$typeName,
            fullTypeName: composeSuiType(
                TradeParams.$typeName,
                ...[]
            ) as "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradeParams",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) =>
                TradeParams.fromFields(
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                TradeParams.fromFieldsWithTypes(
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                TradeParams.fromBcs(
                    data,
                ),
            bcs: TradeParams.bcs,
            fromJSONField: (field: any) =>
                TradeParams.fromJSONField(
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                TradeParams.fromJSON(
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                TradeParams.fromSuiParsedData(
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => TradeParams.fetch(
                client,
                id,
            ),
            new: (
                fields: TradeParamsFields,
            ) => {
                return new TradeParams(
                    [],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return TradeParams.reified()
    }

    static phantom(): PhantomReified<ToTypeStr<TradeParams>> {
        return phantom(TradeParams.reified());
    }

    static get p() {
        return TradeParams.phantom()
    }

    static get bcs() {
        return bcs.struct("TradeParams", {
            min_price:
                Option.bcs(bcs.u64())
            , max_price:
                Option.bcs(bcs.u64())

        })
    };

    static fromFields(
         fields: Record<string, any>
    ): TradeParams {
        return TradeParams.reified().new(
            {minPrice: decodeFromFields(Option.reified("u64"), fields.min_price), maxPrice: decodeFromFields(Option.reified("u64"), fields.max_price)}
        )
    }

    static fromFieldsWithTypes(
         item: FieldsWithTypes
    ): TradeParams {
        if (!isTradeParams(item.type)) {
            throw new Error("not a TradeParams type");
        }

        return TradeParams.reified().new(
            {minPrice: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.min_price), maxPrice: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.max_price)}
        )
    }

    static fromBcs(
         data: Uint8Array
    ): TradeParams {

        return TradeParams.fromFields(
            TradeParams.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            minPrice: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.minPrice),maxPrice: fieldToJSON<Option<"u64">>(`0x1::option::Option<u64>`, this.maxPrice),

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
    ): TradeParams {
        return TradeParams.reified().new(
            {minPrice: decodeFromJSONField(Option.reified("u64"), field.minPrice), maxPrice: decodeFromJSONField(Option.reified("u64"), field.maxPrice)}
        )
    }

    static fromJSON(
         json: Record<string, any>
    ): TradeParams {
        if (json.$typeName !== TradeParams.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };

        return TradeParams.fromJSONField(
            json,
        )
    }

    static fromSuiParsedData(
         content: SuiParsedData
    ): TradeParams {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTradeParams(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TradeParams object`);
        }
        return TradeParams.fromFieldsWithTypes(
            content
        );
    }

    static async fetch(
        client: SuiClient, id: string
    ): Promise<TradeParams> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching TradeParams object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTradeParams(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TradeParams object`);
        }

        return TradeParams.fromBcs(
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== TradePromise =============================== */

export function isTradePromise(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradePromise<");
}

export interface TradePromiseFields<Input extends PhantomTypeArgument, Output extends PhantomTypeArgument> {
    input: ToField<"u64">; minOutput: ToField<"u64">
}

export type TradePromiseReified<Input extends PhantomTypeArgument, Output extends PhantomTypeArgument> = Reified<
    TradePromise<Input, Output>,
    TradePromiseFields<Input, Output>
>;

export class TradePromise<Input extends PhantomTypeArgument, Output extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradePromise";
    static readonly $numTypeParams = 2;

    readonly $typeName = TradePromise.$typeName;

    readonly $fullTypeName: `0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradePromise<${PhantomToTypeStr<Input>}, ${PhantomToTypeStr<Output>}>`;

    readonly $typeArgs: [PhantomToTypeStr<Input>, PhantomToTypeStr<Output>];

    readonly input:
        ToField<"u64">
    ; readonly minOutput:
        ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<Input>, PhantomToTypeStr<Output>], fields: TradePromiseFields<Input, Output>,
    ) {
        this.$fullTypeName = composeSuiType(
            TradePromise.$typeName,
            ...typeArgs
        ) as `0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradePromise<${PhantomToTypeStr<Input>}, ${PhantomToTypeStr<Output>}>`;
        this.$typeArgs = typeArgs;

        this.input = fields.input;; this.minOutput = fields.minOutput;
    }

    static reified<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        Input: Input, Output: Output
    ): TradePromiseReified<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        return {
            typeName: TradePromise.$typeName,
            fullTypeName: composeSuiType(
                TradePromise.$typeName,
                ...[extractType(Input), extractType(Output)]
            ) as `0xa74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f::dca::TradePromise<${PhantomToTypeStr<ToPhantomTypeArgument<Input>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Output>>}>`,
            typeArgs: [
                extractType(Input), extractType(Output)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<Input>>, PhantomToTypeStr<ToPhantomTypeArgument<Output>>],
            reifiedTypeArgs: [Input, Output],
            fromFields: (fields: Record<string, any>) =>
                TradePromise.fromFields(
                    [Input, Output],
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                TradePromise.fromFieldsWithTypes(
                    [Input, Output],
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                TradePromise.fromBcs(
                    [Input, Output],
                    data,
                ),
            bcs: TradePromise.bcs,
            fromJSONField: (field: any) =>
                TradePromise.fromJSONField(
                    [Input, Output],
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                TradePromise.fromJSON(
                    [Input, Output],
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                TradePromise.fromSuiParsedData(
                    [Input, Output],
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => TradePromise.fetch(
                client,
                [Input, Output],
                id,
            ),
            new: (
                fields: TradePromiseFields<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>>,
            ) => {
                return new TradePromise(
                    [extractType(Input), extractType(Output)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return TradePromise.reified
    }

    static phantom<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        Input: Input, Output: Output
    ): PhantomReified<ToTypeStr<TradePromise<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>>>> {
        return phantom(TradePromise.reified(
            Input, Output
        ));
    }

    static get p() {
        return TradePromise.phantom
    }

    static get bcs() {
        return bcs.struct("TradePromise", {
            input:
                bcs.u64()
            , min_output:
                bcs.u64()

        })
    };

    static fromFields<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], fields: Record<string, any>
    ): TradePromise<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        return TradePromise.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {input: decodeFromFields("u64", fields.input), minOutput: decodeFromFields("u64", fields.min_output)}
        )
    }

    static fromFieldsWithTypes<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], item: FieldsWithTypes
    ): TradePromise<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        if (!isTradePromise(item.type)) {
            throw new Error("not a TradePromise type");
        }
        assertFieldsWithTypesArgsMatch(item, typeArgs);

        return TradePromise.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {input: decodeFromFieldsWithTypes("u64", item.fields.input), minOutput: decodeFromFieldsWithTypes("u64", item.fields.min_output)}
        )
    }

    static fromBcs<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], data: Uint8Array
    ): TradePromise<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {

        return TradePromise.fromFields(
            typeArgs,
            TradePromise.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            input: this.input.toString(),minOutput: this.minOutput.toString(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], field: any
    ): TradePromise<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        return TradePromise.reified(
            typeArgs[0], typeArgs[1],
        ).new(
            {input: decodeFromJSONField("u64", field.input), minOutput: decodeFromJSONField("u64", field.minOutput)}
        )
    }

    static fromJSON<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], json: Record<string, any>
    ): TradePromise<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        if (json.$typeName !== TradePromise.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(TradePromise.$typeName,
            ...typeArgs.map(extractType)),
            json.$typeArgs,
            typeArgs,
        )

        return TradePromise.fromJSONField(
            typeArgs,
            json,
        )
    }

    static fromSuiParsedData<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        typeArgs: [Input, Output], content: SuiParsedData
    ): TradePromise<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isTradePromise(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a TradePromise object`);
        }
        return TradePromise.fromFieldsWithTypes(
            typeArgs,
            content
        );
    }

    static async fetch<Input extends PhantomReified<PhantomTypeArgument>, Output extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArgs: [Input, Output], id: string
    ): Promise<TradePromise<ToPhantomTypeArgument<Input>, ToPhantomTypeArgument<Output>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching TradePromise object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isTradePromise(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TradePromise object`);
        }

        return TradePromise.fromBcs(
            typeArgs,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

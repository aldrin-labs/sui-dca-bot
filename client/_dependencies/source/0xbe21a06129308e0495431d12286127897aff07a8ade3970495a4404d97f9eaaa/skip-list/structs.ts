import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeArgument, ToTypeStr, TypeArgument, Vector, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, toBcs} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {UID} from "../../0x2/object/structs";
import {OptionU64} from "../option-u64/structs";
import {Random} from "../random/structs";
import {BcsType, bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Node =============================== */

export function isNode(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::Node<");
}

export interface NodeFields<V extends TypeArgument> {
    score: ToField<"u64">; nexts: ToField<Vector<OptionU64>>; prev: ToField<OptionU64>; value: ToField<V>
}

export type NodeReified<V extends TypeArgument> = Reified<
    Node<V>,
    NodeFields<V>
>;

export class Node<V extends TypeArgument> implements StructClass {
    static readonly $typeName = "0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::Node";
    static readonly $numTypeParams = 1;

    readonly $typeName = Node.$typeName;

    readonly $fullTypeName: `0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::Node<${ToTypeStr<V>}>`;

    readonly $typeArgs: [ToTypeStr<V>];

    readonly score:
        ToField<"u64">
    ; readonly nexts:
        ToField<Vector<OptionU64>>
    ; readonly prev:
        ToField<OptionU64>
    ; readonly value:
        ToField<V>

    private constructor(typeArgs: [ToTypeStr<V>], fields: NodeFields<V>,
    ) {
        this.$fullTypeName = composeSuiType(
            Node.$typeName,
            ...typeArgs
        ) as `0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::Node<${ToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.score = fields.score;; this.nexts = fields.nexts;; this.prev = fields.prev;; this.value = fields.value;
    }

    static reified<V extends Reified<TypeArgument, any>>(
        V: V
    ): NodeReified<ToTypeArgument<V>> {
        return {
            typeName: Node.$typeName,
            fullTypeName: composeSuiType(
                Node.$typeName,
                ...[extractType(V)]
            ) as `0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::Node<${ToTypeStr<ToTypeArgument<V>>}>`,
            typeArgs: [
                extractType(V)
            ] as [ToTypeStr<ToTypeArgument<V>>],
            reifiedTypeArgs: [V],
            fromFields: (fields: Record<string, any>) =>
                Node.fromFields(
                    V,
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                Node.fromFieldsWithTypes(
                    V,
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                Node.fromBcs(
                    V,
                    data,
                ),
            bcs: Node.bcs(toBcs(V)),
            fromJSONField: (field: any) =>
                Node.fromJSONField(
                    V,
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                Node.fromJSON(
                    V,
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                Node.fromSuiParsedData(
                    V,
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => Node.fetch(
                client,
                V,
                id,
            ),
            new: (
                fields: NodeFields<ToTypeArgument<V>>,
            ) => {
                return new Node(
                    [extractType(V)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return Node.reified
    }

    static phantom<V extends Reified<TypeArgument, any>>(
        V: V
    ): PhantomReified<ToTypeStr<Node<ToTypeArgument<V>>>> {
        return phantom(Node.reified(
            V
        ));
    }

    static get p() {
        return Node.phantom
    }

    static get bcs() {
        return <V extends BcsType<any>>(V: V) => bcs.struct(`Node<${V.name}>`, {
            score:
                bcs.u64()
            , nexts:
                bcs.vector(OptionU64.bcs)
            , prev:
                OptionU64.bcs
            , value:
                V

        })
    };

    static fromFields<V extends Reified<TypeArgument, any>>(
        typeArg: V, fields: Record<string, any>
    ): Node<ToTypeArgument<V>> {
        return Node.reified(
            typeArg,
        ).new(
            {score: decodeFromFields("u64", fields.score), nexts: decodeFromFields(reified.vector(OptionU64.reified()), fields.nexts), prev: decodeFromFields(OptionU64.reified(), fields.prev), value: decodeFromFields(typeArg, fields.value)}
        )
    }

    static fromFieldsWithTypes<V extends Reified<TypeArgument, any>>(
        typeArg: V, item: FieldsWithTypes
    ): Node<ToTypeArgument<V>> {
        if (!isNode(item.type)) {
            throw new Error("not a Node type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return Node.reified(
            typeArg,
        ).new(
            {score: decodeFromFieldsWithTypes("u64", item.fields.score), nexts: decodeFromFieldsWithTypes(reified.vector(OptionU64.reified()), item.fields.nexts), prev: decodeFromFieldsWithTypes(OptionU64.reified(), item.fields.prev), value: decodeFromFieldsWithTypes(typeArg, item.fields.value)}
        )
    }

    static fromBcs<V extends Reified<TypeArgument, any>>(
        typeArg: V, data: Uint8Array
    ): Node<ToTypeArgument<V>> {
        const typeArgs = [typeArg];

        return Node.fromFields(
            typeArg,
            Node.bcs(toBcs(typeArgs[0])).parse(data)
        )
    }

    toJSONField() {
        return {
            score: this.score.toString(),nexts: fieldToJSON<Vector<OptionU64>>(`vector<0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::option_u64::OptionU64>`, this.nexts),prev: this.prev.toJSONField(),value: fieldToJSON<V>(this.$typeArgs[0], this.value),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<V extends Reified<TypeArgument, any>>(
        typeArg: V, field: any
    ): Node<ToTypeArgument<V>> {
        return Node.reified(
            typeArg,
        ).new(
            {score: decodeFromJSONField("u64", field.score), nexts: decodeFromJSONField(reified.vector(OptionU64.reified()), field.nexts), prev: decodeFromJSONField(OptionU64.reified(), field.prev), value: decodeFromJSONField(typeArg, field.value)}
        )
    }

    static fromJSON<V extends Reified<TypeArgument, any>>(
        typeArg: V, json: Record<string, any>
    ): Node<ToTypeArgument<V>> {
        if (json.$typeName !== Node.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(Node.$typeName,
            extractType(typeArg)),
            json.$typeArgs,
            [typeArg],
        )

        return Node.fromJSONField(
            typeArg,
            json,
        )
    }

    static fromSuiParsedData<V extends Reified<TypeArgument, any>>(
        typeArg: V, content: SuiParsedData
    ): Node<ToTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNode(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Node object`);
        }
        return Node.fromFieldsWithTypes(
            typeArg,
            content
        );
    }

    static async fetch<V extends Reified<TypeArgument, any>>(
        client: SuiClient, typeArg: V, id: string
    ): Promise<Node<ToTypeArgument<V>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching Node object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNode(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Node object`);
        }

        return Node.fromBcs(
            typeArg,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

/* ============================== SkipList =============================== */

export function isSkipList(type: string): boolean {
    type = compressSuiType(type);
    return type.startsWith("0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::SkipList<");
}

export interface SkipListFields<V extends PhantomTypeArgument> {
    id: ToField<UID>; head: ToField<Vector<OptionU64>>; tail: ToField<OptionU64>; level: ToField<"u64">; maxLevel: ToField<"u64">; listP: ToField<"u64">; size: ToField<"u64">; random: ToField<Random>
}

export type SkipListReified<V extends PhantomTypeArgument> = Reified<
    SkipList<V>,
    SkipListFields<V>
>;

export class SkipList<V extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::SkipList";
    static readonly $numTypeParams = 1;

    readonly $typeName = SkipList.$typeName;

    readonly $fullTypeName: `0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::SkipList<${PhantomToTypeStr<V>}>`;

    readonly $typeArgs: [PhantomToTypeStr<V>];

    readonly id:
        ToField<UID>
    ; readonly head:
        ToField<Vector<OptionU64>>
    ; readonly tail:
        ToField<OptionU64>
    ; readonly level:
        ToField<"u64">
    ; readonly maxLevel:
        ToField<"u64">
    ; readonly listP:
        ToField<"u64">
    ; readonly size:
        ToField<"u64">
    ; readonly random:
        ToField<Random>

    private constructor(typeArgs: [PhantomToTypeStr<V>], fields: SkipListFields<V>,
    ) {
        this.$fullTypeName = composeSuiType(
            SkipList.$typeName,
            ...typeArgs
        ) as `0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::SkipList<${PhantomToTypeStr<V>}>`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;; this.head = fields.head;; this.tail = fields.tail;; this.level = fields.level;; this.maxLevel = fields.maxLevel;; this.listP = fields.listP;; this.size = fields.size;; this.random = fields.random;
    }

    static reified<V extends PhantomReified<PhantomTypeArgument>>(
        V: V
    ): SkipListReified<ToPhantomTypeArgument<V>> {
        return {
            typeName: SkipList.$typeName,
            fullTypeName: composeSuiType(
                SkipList.$typeName,
                ...[extractType(V)]
            ) as `0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::skip_list::SkipList<${PhantomToTypeStr<ToPhantomTypeArgument<V>>}>`,
            typeArgs: [
                extractType(V)
            ] as [PhantomToTypeStr<ToPhantomTypeArgument<V>>],
            reifiedTypeArgs: [V],
            fromFields: (fields: Record<string, any>) =>
                SkipList.fromFields(
                    V,
                    fields,
                ),
            fromFieldsWithTypes: (item: FieldsWithTypes) =>
                SkipList.fromFieldsWithTypes(
                    V,
                    item,
                ),
            fromBcs: (data: Uint8Array) =>
                SkipList.fromBcs(
                    V,
                    data,
                ),
            bcs: SkipList.bcs,
            fromJSONField: (field: any) =>
                SkipList.fromJSONField(
                    V,
                    field,
                ),
            fromJSON: (json: Record<string, any>) =>
                SkipList.fromJSON(
                    V,
                    json,
                ),
            fromSuiParsedData: (content: SuiParsedData) =>
                SkipList.fromSuiParsedData(
                    V,
                    content,
                ),
            fetch: async (client: SuiClient, id: string) => SkipList.fetch(
                client,
                V,
                id,
            ),
            new: (
                fields: SkipListFields<ToPhantomTypeArgument<V>>,
            ) => {
                return new SkipList(
                    [extractType(V)],
                    fields
                )
            },
            kind: "StructClassReified",
        }
    }

    static get r() {
        return SkipList.reified
    }

    static phantom<V extends PhantomReified<PhantomTypeArgument>>(
        V: V
    ): PhantomReified<ToTypeStr<SkipList<ToPhantomTypeArgument<V>>>> {
        return phantom(SkipList.reified(
            V
        ));
    }

    static get p() {
        return SkipList.phantom
    }

    static get bcs() {
        return bcs.struct("SkipList", {
            id:
                UID.bcs
            , head:
                bcs.vector(OptionU64.bcs)
            , tail:
                OptionU64.bcs
            , level:
                bcs.u64()
            , max_level:
                bcs.u64()
            , list_p:
                bcs.u64()
            , size:
                bcs.u64()
            , random:
                Random.bcs

        })
    };

    static fromFields<V extends PhantomReified<PhantomTypeArgument>>(
        typeArg: V, fields: Record<string, any>
    ): SkipList<ToPhantomTypeArgument<V>> {
        return SkipList.reified(
            typeArg,
        ).new(
            {id: decodeFromFields(UID.reified(), fields.id), head: decodeFromFields(reified.vector(OptionU64.reified()), fields.head), tail: decodeFromFields(OptionU64.reified(), fields.tail), level: decodeFromFields("u64", fields.level), maxLevel: decodeFromFields("u64", fields.max_level), listP: decodeFromFields("u64", fields.list_p), size: decodeFromFields("u64", fields.size), random: decodeFromFields(Random.reified(), fields.random)}
        )
    }

    static fromFieldsWithTypes<V extends PhantomReified<PhantomTypeArgument>>(
        typeArg: V, item: FieldsWithTypes
    ): SkipList<ToPhantomTypeArgument<V>> {
        if (!isSkipList(item.type)) {
            throw new Error("not a SkipList type");
        }
        assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return SkipList.reified(
            typeArg,
        ).new(
            {id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), head: decodeFromFieldsWithTypes(reified.vector(OptionU64.reified()), item.fields.head), tail: decodeFromFieldsWithTypes(OptionU64.reified(), item.fields.tail), level: decodeFromFieldsWithTypes("u64", item.fields.level), maxLevel: decodeFromFieldsWithTypes("u64", item.fields.max_level), listP: decodeFromFieldsWithTypes("u64", item.fields.list_p), size: decodeFromFieldsWithTypes("u64", item.fields.size), random: decodeFromFieldsWithTypes(Random.reified(), item.fields.random)}
        )
    }

    static fromBcs<V extends PhantomReified<PhantomTypeArgument>>(
        typeArg: V, data: Uint8Array
    ): SkipList<ToPhantomTypeArgument<V>> {

        return SkipList.fromFields(
            typeArg,
            SkipList.bcs.parse(data)
        )
    }

    toJSONField() {
        return {
            id: this.id,head: fieldToJSON<Vector<OptionU64>>(`vector<0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa::option_u64::OptionU64>`, this.head),tail: this.tail.toJSONField(),level: this.level.toString(),maxLevel: this.maxLevel.toString(),listP: this.listP.toString(),size: this.size.toString(),random: this.random.toJSONField(),

        }
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField()
        }
    }

    static fromJSONField<V extends PhantomReified<PhantomTypeArgument>>(
        typeArg: V, field: any
    ): SkipList<ToPhantomTypeArgument<V>> {
        return SkipList.reified(
            typeArg,
        ).new(
            {id: decodeFromJSONField(UID.reified(), field.id), head: decodeFromJSONField(reified.vector(OptionU64.reified()), field.head), tail: decodeFromJSONField(OptionU64.reified(), field.tail), level: decodeFromJSONField("u64", field.level), maxLevel: decodeFromJSONField("u64", field.maxLevel), listP: decodeFromJSONField("u64", field.listP), size: decodeFromJSONField("u64", field.size), random: decodeFromJSONField(Random.reified(), field.random)}
        )
    }

    static fromJSON<V extends PhantomReified<PhantomTypeArgument>>(
        typeArg: V, json: Record<string, any>
    ): SkipList<ToPhantomTypeArgument<V>> {
        if (json.$typeName !== SkipList.$typeName) {
            throw new Error("not a WithTwoGenerics json object")
        };
        assertReifiedTypeArgsMatch(
            composeSuiType(SkipList.$typeName,
            extractType(typeArg)),
            json.$typeArgs,
            [typeArg],
        )

        return SkipList.fromJSONField(
            typeArg,
            json,
        )
    }

    static fromSuiParsedData<V extends PhantomReified<PhantomTypeArgument>>(
        typeArg: V, content: SuiParsedData
    ): SkipList<ToPhantomTypeArgument<V>> {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSkipList(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SkipList object`);
        }
        return SkipList.fromFieldsWithTypes(
            typeArg,
            content
        );
    }

    static async fetch<V extends PhantomReified<PhantomTypeArgument>>(
        client: SuiClient, typeArg: V, id: string
    ): Promise<SkipList<ToPhantomTypeArgument<V>>> {
        const res = await client.getObject({
            id,
            options: {
                showBcs: true,
            },
        });
        if (res.error) {
            throw new Error(`error fetching SkipList object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSkipList(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SkipList object`);
        }

        return SkipList.fromBcs(
            typeArg,
            fromB64(res.data.bcs.bcsBytes)
        );
    }
}

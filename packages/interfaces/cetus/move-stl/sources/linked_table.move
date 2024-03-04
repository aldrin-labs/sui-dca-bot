module move_stl::linked_table {
    use std::option::{Option, none, is_none, is_some, swap_or_fill, some};
    use std::option;
    use sui::tx_context::TxContext;
    use sui::object::{Self, UID};
    use sui::dynamic_field as field;

    struct LinkedTable<K: store + drop + copy, phantom V: store> has key, store {
        id: UID,
        head: Option<K>,
        tail: Option<K>,
        size: u64
    }

    struct Node<K: store + drop + copy, V: store> has store {
        prev: Option<K>,
        next: Option<K>,
        value: V
    }

    public fun new<K: store + drop + copy, V: store>(ctx: &mut TxContext): LinkedTable<K, V> {
        abort(0)
    }

    public fun is_empty<K: store + drop + copy, V: store>(table: &LinkedTable<K, V>): bool {
        abort(0)
    }

    public fun length<K: store + drop + copy, V: store>(table: &LinkedTable<K, V>): u64 {
        abort(0)
    }

    public fun contains<K: store + drop + copy, V: store>(table: &LinkedTable<K, V>, key: K): bool {
        abort(0)
    }

    public fun head<K: store + drop + copy, V: store>(table: &LinkedTable<K, V>): option::Option<K> {
        abort(0)
    }

    public fun tail<K: store + drop + copy, V: store>(table: &LinkedTable<K, V>): option::Option<K> {
        abort(0)
    }

    public fun next<K: store + drop + copy, V: store>(node: &Node<K, V>): Option<K> {
        abort(0)
    }

    public fun prev<K: store + drop + copy, V: store>(node: &Node<K, V>): Option<K> {
        abort(0)
    }

    public fun borrow<K: store + drop + copy, V: store>(table: &LinkedTable<K, V>, key: K): &V {
        abort(0)
    }

    public fun borrow_mut<K: store + drop + copy, V: store>(table: &mut LinkedTable<K, V>, key: K): &mut V {
        abort(0)
    }

    public fun borrow_node<K: store + drop + copy, V: store>(table: &LinkedTable<K, V>, key: K): &Node<K, V> {
        abort(0)
    }

    public fun borrow_mut_node<K: store + drop + copy, V: store>(table: &mut LinkedTable<K, V>, key: K): &mut Node<K, V> {
        abort(0)
    }

    public fun borrow_value<K: store + drop + copy, V: store>(node: &Node<K, V>): &V{
        abort(0)
    }

    public fun borrow_mut_value<K: store + drop + copy, V: store>(node: &mut Node<K, V>): &mut V{
        abort(0)
    }

    public fun push_back<K: store + drop + copy, V: store>(table: &mut LinkedTable<K, V>, key: K, value: V) {
        abort(0)
    }

    public fun push_front<K: store + drop + copy, V: store>(table: &mut LinkedTable<K, V>, key: K, value: V) {
        abort(0)
    }

    public fun insert_before<K: store + drop + copy, V: store>(table: &mut LinkedTable<K, V>, current_key: K, key: K, value: V) {
        abort(0)
    }

    public fun insert_after<K: store + drop + copy, V: store>(table: &mut LinkedTable<K, V>, current_key: K, key: K, value: V) {
        abort(0)
    }

    public fun remove<K: store + drop + copy, V: store>(table: &mut LinkedTable<K, V>, key: K): V {
        abort(0)
    }

    public fun destroy_empty<K: store + copy + drop, V: store + drop>(table: LinkedTable<K, V>) {
        abort(0)
    }

    public fun drop<K: store + copy + drop, V: store>(table: LinkedTable<K, V>) {
        abort(0)
    }
}
module move_stl::skip_list {
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;
    use std::vector::{Self, push_back};
    use move_stl::option_u64::{Self, OptionU64, none, some, is_none, is_some, swap_or_fill, is_some_and_lte};
    use move_stl::random::{Self, Random};
    
    struct SkipList<phantom V: store> has key, store {
        id: UID,
        head: vector<OptionU64>,
        tail: OptionU64,
        level: u64,
        max_level: u64,
        list_p: u64,
        size: u64,
        random: Random,
    }

    struct Node<V: store> has store {
        score: u64,
        nexts: vector<OptionU64>,
        prev: OptionU64,
        value: V,
    }

    public fun new<V: store>(max_level: u64, list_p: u64, seed: u64, ctx: &mut TxContext): SkipList<V> {
        abort(0)
    }

    public fun length<V: store>(list: &SkipList<V>): u64 {
        abort(0)
    }

    public fun is_empty<V: store>(list: &SkipList<V>): bool {
        abort(0)
    }

    public fun head<V: store>(list: &SkipList<V>): OptionU64 {
        abort(0)
    }

    public fun tail<V: store>(list: &SkipList<V>): OptionU64 {
        abort(0)
    }

    public fun destroy_empty<V: store + drop>(list: SkipList<V>) {
        abort(0)
    }

    public fun contains<V: store>(list: &SkipList<V>, score: u64): bool {
        abort(0)
    }

    public fun borrow<V: store>(list: &SkipList<V>, score: u64): &V {
        abort(0)
    }

    public fun borrow_mut<V: store>(list: &mut SkipList<V>, score: u64): &mut V {
        abort(0)
    }

    public fun borrow_node<V: store>(list: &SkipList<V>, score: u64): &Node<V> {
        abort(0)
    }

    public fun borrow_mut_node<V: store>(list: &mut SkipList<V>, score: u64): &mut Node<V> {
        abort(0)
    }

    public fun metadata<V: store>(list: &SkipList<V>): (vector<OptionU64>, OptionU64, u64, u64, u64, u64) {
        abort(0)
    }

    public fun next_score<V: store>(node: &Node<V>): OptionU64 {
        abort(0)
    }

    public fun prev_score<V: store>(node: &Node<V>): OptionU64 {
        abort(0)
    }

    public fun borrow_value<V: store>(node: &Node<V>): &V {
        abort(0)
    }

    public fun borrow_mut_value<V: store>(node: &mut Node<V>): &mut V {
        abort(0)
    }

    public fun insert<V: store>(list: &mut SkipList<V>, score: u64, v: V) {
        abort(0)
    }

    public fun remove<V: store>(list: &mut SkipList<V>, score: u64): V {
        
        abort(0)
    }

    public fun find_next<V: store>(list: &SkipList<V>, score: u64, include: bool): OptionU64 {
        abort(0)
    }

    public fun find_prev<V: store>(list: &SkipList<V>, score: u64, include: bool): OptionU64 {
        abort(0)
    }

    fun find<V: store>(list: &SkipList<V>, score: u64): OptionU64 {
        abort(0)
    }

    fun rand_level<V: store>(seed: u64, list: &SkipList<V>): u64 {
        abort(0)
    }

    fun create_node<V: store>(list: &mut SkipList<V>, score: u64, value: V): (u64, Node<V>) {
        abort(0)
    }

    fun drop_node<V: store>(node: Node<V>): V {
        abort(0)
    }
}
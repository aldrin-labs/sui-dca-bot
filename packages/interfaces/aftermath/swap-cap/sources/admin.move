module aftermath_swap_cap::admin {
    use sui::dynamic_field;
    use sui::object::UID;
    use sui::transfer;
    use sui::tx_context::TxContext;

    struct AdminCap has store, key {
    	id: UID
    }

    struct AuthKey has copy, drop, store {
    	dummy_field: bool
    }

    struct AuthCap has drop, store {
    	dummy_field: bool
    }

    fun init(arg_0: &mut TxContext) {
        abort(0)
    }

    public fun transfer(arg_0: AdminCap, arg_1: address) {
        abort(0)
    }
    
    public fun is_authorized(arg_0: &UID): bool {
        abort(0)
    }
    
    public fun authorize(arg_0: &AdminCap, arg_1: &mut UID) {
        abort(0)
    }
    
    public fun revoke_auth(arg_0: &AdminCap, arg_1: &mut UID) {
        abort(0)
    }
}
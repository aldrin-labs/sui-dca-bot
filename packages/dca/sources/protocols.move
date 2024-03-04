module dca::protocol_list {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{TxContext, sender};
    use sui::bag::{Self, Bag};
    use sui::package::{Self, Publisher};

    friend dca::dca;

    const EProtocolWitNotAuthorized: u64 = 1;
    
    // OTW
    struct PROTOCOL_LIST has drop {}

    // Marker type for protocol witness
    struct Protocol<phantom P> has copy, store, drop {}

    // Registry created at init time
    struct ProtocolList has key, store {
        id: UID,
        list: Bag
    }

    fun init(otw: PROTOCOL_LIST, ctx: &mut TxContext) {
        // Init Publisher
        let publisher = sui::package::claim(otw, ctx);
        let list = ProtocolList {
            id: object::new(ctx),
            list: bag::new(ctx)
        };

        transfer::public_transfer(publisher, sender(ctx));
        transfer::share_object(list);
    }

    public(friend) fun proove<Wit>(
        list: &ProtocolList,
    ) {
        assert!(
            bag::contains(
                &list.list,
                Protocol<Wit> {}
            ),
            EProtocolWitNotAuthorized
        );
    }

    // === Admin Endpoint ===

    public entry fun register_protocol<Wit>(
        pub: &Publisher,
        list: &mut ProtocolList,
    ) {
        // Only Package owner can all this
        assert!(package::from_package<PROTOCOL_LIST>(pub), 0);

        bag::add(
            &mut list.list,
            Protocol<Wit> {},
            true
        );
    }

    #[test_only]
    struct DummyDefi has drop {}

    #[test_only]
    public fun dummy_defi_wit(): DummyDefi { DummyDefi {}}
    
    #[test_only]
    public fun protocol_registry_for_testing(ctx: &mut TxContext): ProtocolList {
        let list = ProtocolList {
            id: object::new(ctx),
            list: bag::new(ctx)
        };

        let pub = package::test_claim(PROTOCOL_LIST {}, ctx);
        register_protocol<DummyDefi>(&pub, &mut list);
        package::burn_publisher(pub); // delete for testing purposes

        list 
    }
    
    #[test_only]
    public fun delete_for_testing(list: ProtocolList) {
        let ProtocolList { id, list } = list;

        object::delete(id);
        
        let _: bool = bag::remove(
            &mut list,
            Protocol<DummyDefi> {}
        );

        bag::destroy_empty(list);
    }

}

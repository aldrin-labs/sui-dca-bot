module turbos_clmm::position_nft {
    use sui::url::Url;
    use std::string::String;
    use sui::object::{ID, UID};
    use std::type_name::{TypeName};

    struct TurbosPositionNFT has key, store {
        id: UID,
        name: String,
        description: String,
        img_url: Url,
        pool_id: ID,
        position_id: ID,
        coin_type_a: TypeName,
        coin_type_b: TypeName,
        fee_type: TypeName,
    }

    public fun pool_id(nft: &TurbosPositionNFT): ID {
        abort(0)
    }

    public fun position_id(nft: &TurbosPositionNFT): ID {
        abort(0)
    }

}
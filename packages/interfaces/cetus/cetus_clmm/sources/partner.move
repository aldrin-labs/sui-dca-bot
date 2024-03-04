module cetus_clmm::partner {
    use sui::object::{UID, ID};
    use sui::vec_map::VecMap;
    use std::string::String;
    use sui::bag::Bag;
    use sui::balance::Balance;
    use sui::tx_context::TxContext;
    use sui::clock::Clock;
    use cetus_clmm::config::GlobalConfig;
     
    struct Partners has key {
        id: UID,
        partners: VecMap<String, ID>
    }
    
    struct PartnerCap has key, store {
        id: UID,
        name: String,
        partner_id: ID,
    }
    
    struct Partner has key, store {
        id: UID,
        name: String,
        ref_fee_rate: u64,
        start_time: u64,
        end_time: u64,
        balances: Bag,
    }

    struct InitPartnerEvent has copy, drop {
        partners_id: ID,
    }

    struct CreatePartnerEvent has copy, drop {
        recipient: address,
        partner_id: ID,
        partner_cap_id: ID,
        ref_fee_rate: u64,
        name: String,
        start_time: u64,
        end_time: u64,
    }
    
    struct UpdateRefFeeRateEvent has copy, drop {
        partner_id: ID,
        old_fee_rate: u64,
        new_fee_rate: u64,
    }

    struct UpdateTimeRangeEvent has copy, drop {
        partner_id: ID,
        start_time: u64,
        end_time: u64,
    }

    struct ReceiveRefFeeEvent has copy, drop {
        partner_id: ID,
        amount: u64,
        type_name: String,
    }
    
    struct ClaimRefFeeEvent has copy, drop {
        partner_id: ID,
        amount: u64,
        type_name: String,
    }

    public fun create_partner(
        _config: &GlobalConfig,
        _partners: &mut Partners,
        _name: String,
        _ref_fee_rate: u64,
        _start_time: u64,
        _end_time: u64,
        _recipient: address,
        _clock: &Clock,
        _ctx: &mut TxContext
    ) {
        abort(0)
    }

    public fun name(_partner: &Partner): String {
        abort(0)
    }

    public fun ref_fee_rate(_partner: &Partner): u64 {
        abort(0)
    }

    public fun start_time(_partner: &Partner): u64 {
        abort(0)
    }

    public fun end_time(_partner: &Partner): u64 {
        abort(0)
    }

    public fun balances(_partner: &Partner): &Bag {
        abort(0)
    }

    public fun current_ref_fee_rate(
        _partner: &Partner,
        _current_time: u64
    ): u64 {
        abort(0)
    }

    public fun update_ref_fee_rate(
        _config: &GlobalConfig,
        _partner: &mut Partner,
        _new_fee_rate: u64,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun update_time_range(
        _config: &GlobalConfig,
        _partner: &mut Partner,
        _start_time: u64,
        _end_time: u64,
        _clock: &Clock,
        _ctx: &mut TxContext
    ) {
        abort(0)
    }

    public fun receive_ref_fee<T>(
        _partner: &mut Partner,
        _fee: Balance<T>
    ) {
        abort(0)
    }

    public fun claim_ref_fee<T>(
        _config: &GlobalConfig,
        _partner_cap: &PartnerCap,
        _partner: &mut Partner,
        _ctx: &mut TxContext
    ) {
        abort(0)
    }
}

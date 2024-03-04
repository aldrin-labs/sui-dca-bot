module cetus::partner_script {
    use cetus_clmm::config::GlobalConfig;
    use cetus_clmm::partner::{Partners, Partner, PartnerCap};
    use std::string::String;
    use sui::clock::Clock;
    use sui::tx_context::TxContext;

    entry public fun create_partner(arg_0: &GlobalConfig, arg_1: &mut Partners, arg_2: String, arg_3: u64, arg_4: u64, arg_5: u64, arg_6: address, arg_7: &Clock, arg_8: &mut TxContext) {
        abort(0)
    }

    entry public fun update_partner_ref_fee_rate(arg_0: &GlobalConfig, arg_1: &mut Partner, arg_2: u64, arg_3: &TxContext) {
        abort(0)
    }

    entry public fun update_partner_time_range(arg_0: &GlobalConfig, arg_1: &mut Partner, arg_2: u64, arg_3: u64, arg_4: &Clock, arg_5: &mut TxContext) {
        abort(0)
    }

    entry public fun claim_ref_fee<Ty0>(arg_0: &GlobalConfig, arg_1: &PartnerCap, arg_2: &mut Partner, arg_3: &mut TxContext) {
        abort(0)
    }

}
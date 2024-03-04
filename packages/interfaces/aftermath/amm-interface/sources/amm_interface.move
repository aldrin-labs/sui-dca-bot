module amm_interface::amm_interface {
    use amm::deposit;
    use amm::pool::{Pool, CreatePoolCap};
    use amm::pool_factory;
    use amm::pool_registry::PoolRegistry;
    use amm::price;
    use amm::swap;
    use amm::withdraw;
    use insurance_fund::insurance_fund::InsuranceFund;
    use protocol_fee_vault::vault::ProtocolFeeVault;
    use referral_vault::referral_vault::ReferralVault;
    use std::option::Option;
    use sui::coin::Coin;
    use sui::transfer;
    use sui::tx_context::TxContext;
    use treasury::treasury::Treasury;

    entry public fun create_lp_coin<Ty0: drop>(arg_0: Ty0, arg_1: u8, arg_2: &mut TxContext) {
        abort(0)
    }

    entry public fun create_pool_2_coins<Ty0, Ty1, Ty2>(arg_0: CreatePoolCap<Ty0>, arg_1: &mut PoolRegistry, arg_2: vector<u8>, arg_3: vector<u8>, arg_4: vector<u8>, arg_5: vector<u8>, arg_6: vector<u8>, arg_7: vector<u64>, arg_8: u64, arg_9: vector<u64>, arg_10: vector<u64>, arg_11: vector<u64>, arg_12: vector<u64>, arg_13: Coin<Ty1>, arg_14: Coin<Ty2>, arg_15: Option<vector<u8>>, arg_16: bool, arg_17: Option<u8>, arg_18: &mut TxContext) {
        abort(0)
    }

    entry public fun create_pool_3_coins<Ty0, Ty1, Ty2, Ty3>(arg_0: CreatePoolCap<Ty0>, arg_1: &mut PoolRegistry, arg_2: vector<u8>, arg_3: vector<u8>, arg_4: vector<u8>, arg_5: vector<u8>, arg_6: vector<u8>, arg_7: vector<u64>, arg_8: u64, arg_9: vector<u64>, arg_10: vector<u64>, arg_11: vector<u64>, arg_12: vector<u64>, arg_13: Coin<Ty1>, arg_14: Coin<Ty2>, arg_15: Coin<Ty3>, arg_16: Option<vector<u8>>, arg_17: bool, arg_18: Option<u8>, arg_19: &mut TxContext) {
        abort(0)
    }

    entry public fun create_pool_4_coins<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0: CreatePoolCap<Ty0>, arg_1: &mut PoolRegistry, arg_2: vector<u8>, arg_3: vector<u8>, arg_4: vector<u8>, arg_5: vector<u8>, arg_6: vector<u8>, arg_7: vector<u64>, arg_8: u64, arg_9: vector<u64>, arg_10: vector<u64>, arg_11: vector<u64>, arg_12: vector<u64>, arg_13: Coin<Ty1>, arg_14: Coin<Ty2>, arg_15: Coin<Ty3>, arg_16: Coin<Ty4>, arg_17: Option<vector<u8>>, arg_18: bool, arg_19: Option<u8>, arg_20: &mut TxContext) {
        abort(0)
    }

    entry public fun create_pool_5_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0: CreatePoolCap<Ty0>, arg_1: &mut PoolRegistry, arg_2: vector<u8>, arg_3: vector<u8>, arg_4: vector<u8>, arg_5: vector<u8>, arg_6: vector<u8>, arg_7: vector<u64>, arg_8: u64, arg_9: vector<u64>, arg_10: vector<u64>, arg_11: vector<u64>, arg_12: vector<u64>, arg_13: Coin<Ty1>, arg_14: Coin<Ty2>, arg_15: Coin<Ty3>, arg_16: Coin<Ty4>, arg_17: Coin<Ty5>, arg_18: Option<vector<u8>>, arg_19: bool, arg_20: Option<u8>, arg_21: &mut TxContext) {
        abort(0)
    }

    entry public fun create_pool_6_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6>(arg_0: CreatePoolCap<Ty0>, arg_1: &mut PoolRegistry, arg_2: vector<u8>, arg_3: vector<u8>, arg_4: vector<u8>, arg_5: vector<u8>, arg_6: vector<u8>, arg_7: vector<u64>, arg_8: u64, arg_9: vector<u64>, arg_10: vector<u64>, arg_11: vector<u64>, arg_12: vector<u64>, arg_13: Coin<Ty1>, arg_14: Coin<Ty2>, arg_15: Coin<Ty3>, arg_16: Coin<Ty4>, arg_17: Coin<Ty5>, arg_18: Coin<Ty6>, arg_19: Option<vector<u8>>, arg_20: bool, arg_21: Option<u8>, arg_22: &mut TxContext) {
        abort(0)
    }

    entry public fun create_pool_7_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6, Ty7>(arg_0: CreatePoolCap<Ty0>, arg_1: &mut PoolRegistry, arg_2: vector<u8>, arg_3: vector<u8>, arg_4: vector<u8>, arg_5: vector<u8>, arg_6: vector<u8>, arg_7: vector<u64>, arg_8: u64, arg_9: vector<u64>, arg_10: vector<u64>, arg_11: vector<u64>, arg_12: vector<u64>, arg_13: Coin<Ty1>, arg_14: Coin<Ty2>, arg_15: Coin<Ty3>, arg_16: Coin<Ty4>, arg_17: Coin<Ty5>, arg_18: Coin<Ty6>, arg_19: Coin<Ty7>, arg_20: Option<vector<u8>>, arg_21: bool, arg_22: Option<u8>, arg_23: &mut TxContext) {
        abort(0)
    }

    entry public fun create_pool_8_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6, Ty7, Ty8>(arg_0: CreatePoolCap<Ty0>, arg_1: &mut PoolRegistry, arg_2: vector<u8>, arg_3: vector<u8>, arg_4: vector<u8>, arg_5: vector<u8>, arg_6: vector<u8>, arg_7: vector<u64>, arg_8: u64, arg_9: vector<u64>, arg_10: vector<u64>, arg_11: vector<u64>, arg_12: vector<u64>, arg_13: Coin<Ty1>, arg_14: Coin<Ty2>, arg_15: Coin<Ty3>, arg_16: Coin<Ty4>, arg_17: Coin<Ty5>, arg_18: Coin<Ty6>, arg_19: Coin<Ty7>, arg_20: Coin<Ty8>, arg_21: Option<vector<u8>>, arg_22: bool, arg_23: Option<u8>, arg_24: &mut TxContext) {
        abort(0)
    }

    entry public fun oracle_price<Ty0, Ty1, Ty2>(arg_0: &Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &TxContext) {
        abort(0)
    }

    entry public fun spot_price<Ty0, Ty1, Ty2>(arg_0: &Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &TxContext) {
        abort(0)
    }

    entry public fun swap_exact_in<Ty0, Ty1, Ty2>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: u64, arg_8: u64, arg_9: &mut TxContext) {
        abort(0)
    }

    entry public fun swap_exact_out<Ty0, Ty1, Ty2>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: u64, arg_7: Coin<Ty1>, arg_8: u64, arg_9: u64, arg_10: &mut TxContext) {
        abort(0)
    }

    entry public fun deposit_1_coins<Ty0, Ty1>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: u128, arg_8: u64, arg_9: &mut TxContext) {
        abort(0)
    }

    entry public fun deposit_2_coins<Ty0, Ty1, Ty2>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: u128, arg_9: u64, arg_10: &mut TxContext) {
        abort(0)
    }

    entry public fun deposit_3_coins<Ty0, Ty1, Ty2, Ty3>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: u128, arg_10: u64, arg_11: &mut TxContext) {
        abort(0)
    }

    entry public fun deposit_4_coins<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: u128, arg_11: u64, arg_12: &mut TxContext) {
        abort(0)
    }

    entry public fun deposit_5_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: Coin<Ty5>, arg_11: u128, arg_12: u64, arg_13: &mut TxContext) {
        abort(0)
    }

    entry public fun deposit_6_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: Coin<Ty5>, arg_11: Coin<Ty6>, arg_12: u128, arg_13: u64, arg_14: &mut TxContext) {
        abort(0)
    }

    entry public fun deposit_7_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6, Ty7>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: Coin<Ty5>, arg_11: Coin<Ty6>, arg_12: Coin<Ty7>, arg_13: u128, arg_14: u64, arg_15: &mut TxContext) {
        abort(0)
    }

    entry public fun deposit_8_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6, Ty7, Ty8>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: Coin<Ty5>, arg_11: Coin<Ty6>, arg_12: Coin<Ty7>, arg_13: Coin<Ty8>, arg_14: u128, arg_15: u64, arg_16: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_deposit_2_coins<Ty0, Ty1, Ty2>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_deposit_3_coins<Ty0, Ty1, Ty2, Ty3>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_deposit_4_coins<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_deposit_5_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: Coin<Ty5>, arg_11: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_deposit_6_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: Coin<Ty5>, arg_11: Coin<Ty6>, arg_12: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_deposit_7_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6, Ty7>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: Coin<Ty5>, arg_11: Coin<Ty6>, arg_12: Coin<Ty7>, arg_13: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_deposit_8_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6, Ty7, Ty8>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty1>, arg_7: Coin<Ty2>, arg_8: Coin<Ty3>, arg_9: Coin<Ty4>, arg_10: Coin<Ty5>, arg_11: Coin<Ty6>, arg_12: Coin<Ty7>, arg_13: Coin<Ty8>, arg_14: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_withdraw_2_coins<Ty0, Ty1, Ty2>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty0>, arg_7: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_withdraw_3_coins<Ty0, Ty1, Ty2, Ty3>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty0>, arg_7: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_withdraw_4_coins<Ty0, Ty1, Ty2, Ty3, Ty4>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty0>, arg_7: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_withdraw_5_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty0>, arg_7: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_withdraw_6_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty0>, arg_7: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_withdraw_7_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6, Ty7>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty0>, arg_7: &mut TxContext) {
        abort(0)
    }

    entry public fun all_coin_withdraw_8_coins<Ty0, Ty1, Ty2, Ty3, Ty4, Ty5, Ty6, Ty7, Ty8>(arg_0: &mut Pool<Ty0>, arg_1: &PoolRegistry, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: Coin<Ty0>, arg_7: &mut TxContext) {
        abort(0)
    }

    public fun transfer_if_nonzero<Ty0>(arg_0: Coin<Ty0>, arg_1: address) {
        abort(0)
    }
}
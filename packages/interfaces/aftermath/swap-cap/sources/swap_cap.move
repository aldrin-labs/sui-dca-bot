module aftermath_swap_cap::swap_cap {
    use insurance_fund::insurance_fund::InsuranceFund;
    use protocol_fee_vault::vault::ProtocolFeeVault;
    use referral_vault::referral_vault::ReferralVault;
    use aftermath_swap_cap::admin;
    use std::ascii::String;
    use std::option::Option;
    use std::type_name;
    use sui::coin::Coin;
    use sui::event;
    use sui::object::UID;
    use sui::transfer;
    use sui::tx_context::TxContext;
    use treasury::treasury::Treasury;
    use utilities::fixed;

    struct SwapCompletedEvent has copy, drop {
    	swapper: address,
    	type_in: String,
    	amount_in: u64,
    	type_out: String,
    	amount_out: u64,
    	router_fee_recipient: address,
    	router_fee: u64,
    	referrer: Option<address>
    }

    struct RouterFeeMetadata has copy, drop {
    	recipient: address,
    	fee: u64
    }

    struct SwapMetadata has copy, drop {
    	type: vector<u8>,
    	amount: u64
    }

    #[allow(lint(coin_field))]
    struct RouterSwapCap<phantom Ty0> {
    	coin_in: Coin<Ty0>,
    	min_amount_out: u64,
    	first_swap: SwapMetadata,
    	previous_swap: SwapMetadata,
    	final_swap: SwapMetadata,
    	router_fee_metadata: RouterFeeMetadata,
    	referrer: Option<address>
    }

    fun emit_swap_completed_event(arg_0: SwapMetadata, arg_1: SwapMetadata, arg_2: RouterFeeMetadata, arg_3: Option<address>, arg_4: &TxContext) {
        abort(0)
    }

    public fun obtain_router_cap<Ty0, Ty1>(arg_0: Coin<Ty0>, arg_1: u64, arg_2: Option<address>, arg_3: Option<address>, arg_4: Option<u64>): RouterSwapCap<Ty0> {
        abort(0)
    }

    public fun initiate_path<Ty0>(arg_0: &mut RouterSwapCap<Ty0>, arg_1: u64, arg_2: &mut TxContext): Coin<Ty0> {
        abort(0)
    }

    public fun assert_valid_swap<Ty0, Ty1>(arg_0: &RouterSwapCap<Ty0>, arg_1: &Coin<Ty1>) {
        abort(0)
    }

    public fun update_path_metadata<Ty0, Ty1>(arg_0: &UID, arg_1: &mut RouterSwapCap<Ty0>, arg_2: u64) {
        abort(0)
    }

    public fun pay_protocol_and_router_fee<Ty0, Ty1, Ty2>(arg_0: &UID, arg_1: &mut RouterSwapCap<Ty0>, arg_2: &mut Coin<Ty1>, arg_3: &ProtocolFeeVault, arg_4: &mut Treasury, arg_5: &mut InsuranceFund, arg_6: &ReferralVault, arg_7: &mut TxContext) {
        abort(0)
    }

    public fun return_router_cap<Ty0, Ty1>(arg_0: RouterSwapCap<Ty0>, arg_1: &mut Coin<Ty1>, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: &mut TxContext) {
        abort(0)
    }

    public fun return_router_cap_already_payed_fee<Ty0>(arg_0: RouterSwapCap<Ty0>, arg_1: &mut TxContext) {
        abort(0)
    }

    fun type_to_bytes<Ty0>(): vector<u8> {
        abort(0)
    }

    fun is_same_type<Ty0>(arg_0: &vector<u8>): bool {
        abort(0)
    }

    fun is_valid_swap<Ty0, Ty1>(arg_0: &RouterSwapCap<Ty0>, arg_1: &Coin<Ty1>): bool {
        abort(0)
    }

    fun previous_swap_was_valid<Ty0>(arg_0: &RouterSwapCap<Ty0>): bool {
        abort(0)
    }

    fun update_path_metadata_inner<Ty0, Ty1>(arg_0: &mut RouterSwapCap<Ty0>, arg_1: u64) {
        abort(0)
    }

    fun update_final_swap_metadata<Ty0>(arg_0: &mut RouterSwapCap<Ty0>) {
        abort(0)
    }

    fun transfer_router_fee<Ty0>(arg_0: &mut Coin<Ty0>, arg_1: RouterFeeMetadata, arg_2: &mut TxContext) {
        abort(0)
    }

    fun pay_protocol_and_router_fee_inner<Ty0, Ty1>(arg_0: &mut RouterSwapCap<Ty0>, arg_1: &mut Coin<Ty1>, arg_2: &ProtocolFeeVault, arg_3: &mut Treasury, arg_4: &mut InsuranceFund, arg_5: &ReferralVault, arg_6: &mut TxContext) {
        abort(0)
    }
}
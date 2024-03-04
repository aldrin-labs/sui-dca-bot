module flowx_amm::treasury {
	struct Treasury has store {
		treasurer: address
	}

	public(friend) fun new(arg_0: address): Treasury {
		abort(0)
	}
	
	public fun treasurer(arg_0: &Treasury): address {
		abort(0)
	}
	
	public fun appoint(arg_0: &mut Treasury, arg_1: address) {
		abort(0)
	}
}

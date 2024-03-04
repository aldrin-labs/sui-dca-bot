module turbos_clmm::fee {
	use sui::object;

	struct Fee<phantom T> has key, store {
        id: object::UID,
        fee: u32,
        tick_spacing: u32,
    }

	public fun get_fee<T>(self: &Fee<T>): u32 {
        abort(0)
    }

    public fun get_tick_spacing<T>(self: &Fee<T>): u32 {
        abort(0)
    }
}
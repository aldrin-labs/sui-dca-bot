module flowx_amm::comparator {
    use std::bcs;

    struct Result has drop {
	    inner: u8
    }

	public fun is_equal(res: &Result): bool {
		abort(0)
	}
	
	public fun is_smaller_than(res: &Result): bool {
		abort(0)
	}
	
	public fun is_greater_than(res: &Result): bool {
		abort(0)
	}
	
	public fun compare<T>(a: &T, b: &T): Result {
		abort(0)
	}
	
	public fun compare_u8_vector(a: vector<u8>, b: vector<u8>): Result {
		abort(0)
	}

}
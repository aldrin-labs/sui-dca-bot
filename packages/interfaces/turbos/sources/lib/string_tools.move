module turbos_clmm::string_tools {
    use std::vector;
    use std::bcs;
    use std::string::{Self, String};
    use sui::math;
    
    public fun get_position_key(
        owner: address, 
        tick_lower_index: u32, 
        tick_lower_index_is_neg: bool, 
        tick_upper_index: u32, 
        tick_upper_index_is_neg: bool, 
    ): String {
        abort(0)
    }

    public fun address_to_hexstring(addr: &address): String {
        abort(0)
    }

    public fun u64_to_hexstring(num: u64): String {
        abort(0)
    }

    public fun bytes_to_hexstring(bytes: &vector<u8>): String {
        abort(0)
    }

    public fun u64_to_string(number: u64): String {
        abort(0)
    }
}
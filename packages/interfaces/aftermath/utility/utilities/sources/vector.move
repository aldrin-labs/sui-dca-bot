// Copyright (c) Aftermath Technologies, Inc.
// SPDX-License-Identifier: Apache-2.0

module utilities::vector {
	public fun empty_vector(
		_arg_0: u64
	): vector<u64>
	{
		abort 0
	}

	public fun empty_vector_128(
		_arg_0: u64
	): vector<u128>
	{
		abort 0
	}

	public fun sum_u64(
		_arg_0: &vector<u64>
	): u64
	{
		abort 0
	}

	public fun scale_fixed_vector_64(
		_arg_0: u64,
		_arg_1: &vector<u64>
	): vector<u64>
	{
		abort 0
	}

	public fun scale_fixed_vector_64_by_128(
		_arg_0: u128,
		_arg_1: &vector<u64>
	): vector<u64>
	{
		abort 0
	}

	public fun scale_fixed_vector_128_by_64(
		_arg_0: u64,
		_arg_1: &vector<u128>
	): vector<u128>
	{
		abort 0
	}

	public fun scale_fixed_vector_128_by_128(
		_arg_0: u128,
		_arg_1: &vector<u128>
	): vector<u128>
	{
		abort 0
	}

	public fun scale_mut_vector_64_64(
		_arg_0: &mut vector<u64>,
		_arg_1: u64
	)
	{
		abort 0
	}

	public fun scale_mut_vector_64_128(
		_arg_0: &mut vector<u64>,
		_arg_1: u128
	)
	{
		abort 0
	}

	public fun scale_mut_vector_128_64(
		_arg_0: &mut vector<u128>,
		_arg_1: u64
	)
	{
		abort 0
	}

	public fun scale_mut_vector_128_128(
		_arg_0: &mut vector<u128>,
		_arg_1: u128
	)
	{
		abort 0
	}

	public fun add_vectors(
		_arg_0: &vector<u64>,
		_arg_1: &vector<u64>
	): vector<u64>
	{
		abort 0
	}

	public fun add_vectors_128(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u128>
	): vector<u128>
	{
		abort 0
	}

	public fun subtract_vectors(
		_arg_0: &vector<u64>,
		_arg_1: &vector<u64>
	): (vector<u64>, vector<u64>)
	{
		abort 0
	}

	public fun subtract_vectors_128(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u128>
	): (vector<u128>, vector<u128>)
	{
		abort 0
	}

	public fun dot_64_8_128(
		_arg_0: &vector<u64>,
		_arg_1: &vector<u8>
	): u128
	{
		abort 0
	}

	public fun vectors_disjoint_u64(
		_arg_0: &vector<u64>,
		_arg_1: &vector<u64>
	): bool
	{
		abort 0
	}

	public fun vectors_disjoint_u128(
		_arg_0: &vector<u128>,
		_arg_1: &vector<u128>
	): bool
	{
		abort 0
	}

	public fun is_sorted(
		_arg_0: &vector<std::ascii::String>
	): bool
	{
		abort 0
	}

	public fun in_lexicographical_order(
		_arg_0: &std::ascii::String,
		_arg_1: &std::ascii::String
	): bool
	{
		abort 0
	}
}
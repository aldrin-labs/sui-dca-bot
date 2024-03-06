module dca::math {
    /// Scaling settings for float
    const FLOAT_SCALING: u64 = 1_000_000_000;
    const FLOAT_SCALING_U128: u128 = 1_000_000_000;

    public fun mul(x: u64, y: u64): u64 {
        let x = (x as u128);
        let y = (y as u128);
        ((x * y) as u64)
    }

    public fun div(x: u64, y: u64): u64 {
        let x = (x as u128);
        let y = (y as u128);
        ((x / y) as u64)
    }
}

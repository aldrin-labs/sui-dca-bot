module dca::math {
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

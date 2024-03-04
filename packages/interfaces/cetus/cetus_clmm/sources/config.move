module cetus_clmm::config {
    use sui::object::{UID, ID};
    use sui::tx_context::TxContext;
    use sui::vec_map::VecMap;
    use cetus_clmm::acl;

    struct AdminCap has key, store {
        id: UID,
    }
    
    struct ProtocolFeeClaimCap has key, store {
        id: UID,
    }
    
    struct FeeTier has store, copy, drop {
        tick_spacing: u32,
        fee_rate: u64,
    }

    struct GlobalConfig has key, store {
        id: UID,
        protocol_fee_rate: u64,
        fee_tiers: VecMap<u32, FeeTier>,
        acl: acl::ACL,
        package_version: u64
    }

    struct InitConfigEvent has copy, drop {
        admin_cap_id: ID,
        global_config_id: ID,
    }

    struct UpdateFeeRateEvent has copy, drop {
        old_fee_rate: u64,
        new_fee_rate: u64,
    }
    
    struct AddFeeTierEvent has copy, drop {
        tick_spacing: u32,
        fee_rate: u64,
    }

    struct UpdateFeeTierEvent has copy, drop {
        tick_spacing: u32,
        old_fee_rate: u64,
        new_fee_rate: u64,
    }

    struct DeleteFeeTierEvent has copy, drop {
        tick_spacing: u32,
        fee_rate: u64,
    }

    struct SetRolesEvent has copy, drop {
        member: address,
        roles: u128,
    }

    struct AddRoleEvent has copy, drop {
        member: address,
        role: u8,
    }
    
    struct RemoveRoleEvent has copy, drop {
        member: address,
        role: u8
    }

    struct RemoveMemberEvent has copy, drop {
        member: address,
    }

    struct SetPackageVersion has copy, drop {
        new_version: u64,
        old_version: u64
    }

    public fun update_protocol_fee_rate(
        _config: &mut GlobalConfig,
        _protocol_fee_rate: u64,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun add_fee_tier(
        _config: &mut GlobalConfig,
        _tick_spacing: u32,
        _fee_rate: u64,
        _ctx: &TxContext,
    ) {
        abort(0)
    }

    public fun delete_fee_tier(
        _config: &mut GlobalConfig,
        _tick_spacing: u32,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun update_fee_tier(
        _config: &mut GlobalConfig,
        _tick_spacing: u32,
        _new_fee_rate: u64,
        _ctx: &TxContext
    ) {
        abort(0)
    }

    public fun set_roles(_: &AdminCap, _config: &mut GlobalConfig, _member: address, _roles: u128) {
        abort(0)
    }

    public fun add_role(_: &AdminCap, _config: &mut GlobalConfig, _member: address,  _role: u8) {
        abort(0)
    }

    public fun remove_role(_: &AdminCap, _config: &mut GlobalConfig, _member: address, _role: u8) {
        abort(0)
    }

    public fun remove_member(_: &AdminCap, _config: &mut GlobalConfig, _member: address) {
        abort(0)
    }

    public fun get_members(_config: &GlobalConfig): vector<acl::Member> {
        abort(0)
    }

    public fun get_protocol_fee_rate(_global_config: &GlobalConfig): u64 {
        abort(0)
    }

    public fun get_fee_rate(
        _tick_spacing: u32,
        _global_config: &GlobalConfig
    ): u64 {
        abort(0)
    }

    public fun max_fee_rate(): u64 {
        abort(0)
    }

    public fun max_protocol_fee_rate(): u64 {
        abort(0)
    }

    public fun check_pool_manager_role(_config: &GlobalConfig, _member: address) {
        abort(0)
    }

    public fun check_fee_tier_manager_role(_config: &GlobalConfig, _member: address) {
        abort(0)
    }

    public fun check_protocol_fee_claim_role(_config: &GlobalConfig, _member: address) {
        abort(0)
    }

    public fun check_partner_manager_role(_config: &GlobalConfig, _member: address) {
        abort(0)
    }

    public fun check_rewarder_manager_role(_config: &GlobalConfig, _member: address) {
        abort(0)
    }

    public fun tick_spacing(_fee_tier: &FeeTier): u32 {
        abort(0)
    }

    public fun fee_rate(_fee_tier: &FeeTier): u64 {
        abort(0)
    }

    public fun protocol_fee_rate(_config: &GlobalConfig): u64 {
        abort(0)
    }

    public fun fee_tiers(_config: &GlobalConfig): &VecMap<u32, FeeTier> {
        abort(0)
    }

    public fun acl(_config: &GlobalConfig): &acl::ACL {
        abort(0)
    }

    public fun checked_package_version(_config: &GlobalConfig) {
        abort(0)
    }

    public fun update_package_version(_: &AdminCap, _config: &mut GlobalConfig, _version: u64) {
        abort(0)
    }

    public fun package_version() : u64 {
        abort(0)
    }
}

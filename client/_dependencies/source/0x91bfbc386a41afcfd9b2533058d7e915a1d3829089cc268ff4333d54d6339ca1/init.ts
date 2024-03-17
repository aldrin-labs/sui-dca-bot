import * as fee from "./fee/structs";
import * as i128 from "./i128/structs";
import * as i32 from "./i32/structs";
import * as i64 from "./i64/structs";
import * as poolFactory from "./pool-factory/structs";
import * as pool from "./pool/structs";
import * as positionManager from "./position-manager/structs";
import * as positionNft from "./position-nft/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(fee.Fee);
    loader.register(i64.I64);
    loader.register(i32.I32);
    loader.register(i128.I128);
    loader.register(pool.Versioned);
    loader.register(pool.Position);
    loader.register(pool.Tick);
    loader.register(pool.Pool);
    loader.register(pool.ComputeSwapState);
    loader.register(pool.PoolRewardInfo);
    loader.register(pool.PoolRewardVault);
    loader.register(pool.PositionRewardInfo);
    loader.register(positionNft.TurbosPositionNFT);
    loader.register(positionManager.Position);
    loader.register(positionManager.PositionRewardInfo);
    loader.register(positionManager.Positions);
    loader.register(poolFactory.PoolSimpleInfo);
    loader.register(poolFactory.PoolConfig);
    loader.register(poolFactory.PoolFactoryAdminCap);
}

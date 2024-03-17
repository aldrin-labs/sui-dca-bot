import * as comparator from "./comparator/structs";
import * as factory from "./factory/structs";
import * as pair from "./pair/structs";
import * as treasury from "./treasury/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(comparator.Result);
    loader.register(treasury.Treasury);
    loader.register(pair.LP);
    loader.register(pair.LiquidityAdded);
    loader.register(pair.LiquidityRemoved);
    loader.register(pair.PairMetadata);
    loader.register(pair.Swapped);
    loader.register(factory.AdminCap);
    loader.register(factory.Container);
    loader.register(factory.FeeChanged);
    loader.register(factory.PairCreated);
}

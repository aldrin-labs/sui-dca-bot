import * as dca from "./dca/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(dca.DCA);
    loader.register(dca.DCACreatedEvent);
    loader.register(dca.ProofKey);
    loader.register(dca.TradeParams);
    loader.register(dca.TradePromise);
}

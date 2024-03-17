import * as expectSwap from "./expect-swap/structs";
import * as fetcherScript from "./fetcher-script/structs";
import * as router from "./router/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(expectSwap.SwapResult);
    loader.register(expectSwap.SwapStepResult);
    loader.register(expectSwap.ExpectSwapResult);
    loader.register(expectSwap.ExpectSwapResultEvent);
    loader.register(fetcherScript.CalculatedSwapResultEvent);
    loader.register(fetcherScript.FetchPoolsEvent);
    loader.register(fetcherScript.FetchPositionFeesEvent);
    loader.register(fetcherScript.FetchPositionPointsEvent);
    loader.register(fetcherScript.FetchPositionRewardsEvent);
    loader.register(fetcherScript.FetchPositionsEvent);
    loader.register(fetcherScript.FetchTicksResultEvent);
    loader.register(router.CalculatedRouterSwapResult);
    loader.register(router.CalculatedRouterSwapResultEvent);
}

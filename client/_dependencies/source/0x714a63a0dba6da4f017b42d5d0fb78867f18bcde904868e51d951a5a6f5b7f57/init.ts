import * as i128 from "./i128/structs";
import * as i32 from "./i32/structs";
import * as i64 from "./i64/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(i32.I32);
    loader.register(i64.I64);
    loader.register(i128.I128);
}

import * as linkedTable from "./linked-table/structs";
import * as optionU128 from "./option-u128/structs";
import * as optionU64 from "./option-u64/structs";
import * as random from "./random/structs";
import * as skipListU128 from "./skip-list-u128/structs";
import * as skipList from "./skip-list/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(linkedTable.LinkedTable);
    loader.register(linkedTable.Node);
    loader.register(random.Random);
    loader.register(optionU64.OptionU64);
    loader.register(skipList.Node);
    loader.register(skipList.SkipList);
    loader.register(optionU128.OptionU128);
    loader.register(skipListU128.SkipList);
    loader.register(skipListU128.SkipListNode);
}

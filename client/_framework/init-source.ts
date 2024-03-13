import * as package_1 from "../_dependencies/source/0x1/init";
import * as package_1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb from "../_dependencies/source/0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb/init";
import * as package_2 from "../_dependencies/source/0x2/init";
import * as package_714a63a0dba6da4f017b42d5d0fb78867f18bcde904868e51d951a5a6f5b7f57 from "../_dependencies/source/0x714a63a0dba6da4f017b42d5d0fb78867f18bcde904868e51d951a5a6f5b7f57/init";
import * as package_91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1 from "../_dependencies/source/0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1/init";
import * as package_996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3 from "../_dependencies/source/0x996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3/init";
import * as package_ba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0 from "../_dependencies/source/0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0/init";
import * as package_be21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa from "../_dependencies/source/0xbe21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa/init";
import * as package_a74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f from "../dca/init";
import {structClassLoaderSource as structClassLoader} from "./loader";

let initialized = false;

export function initLoaderIfNeeded() {
    if (initialized) {
        return
    };
    initialized = true;

    package_1.registerClasses(structClassLoader);
    package_2.registerClasses(structClassLoader);
    package_1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb.registerClasses(structClassLoader);
    package_714a63a0dba6da4f017b42d5d0fb78867f18bcde904868e51d951a5a6f5b7f57.registerClasses(structClassLoader);
    package_91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1.registerClasses(structClassLoader);
    package_996c4d9480708fb8b92aa7acf819fb0497b5ec8e65ba06601cae2fb6db3312c3.registerClasses(structClassLoader);
    package_a74eb3567306ba569100dab765ed9bbbb83d581d912f742fd93ade2a1c4adb2f.registerClasses(structClassLoader);
    package_ba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0.registerClasses(structClassLoader);
    package_be21a06129308e0495431d12286127897aff07a8ade3970495a4404d97f9eaaa.registerClasses(structClassLoader);
}

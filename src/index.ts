import FlakeId from "flake-idgen";
import { toBigIntBE } from "bigint-buffer";

interface ConstructorOptions {
    datacenter?: number | undefined;
    worker?: number | undefined;
    id?: number | undefined;
    epoch?: number | undefined;
    seqMask?: number | undefined;
}

export function snowflakeIdGenerator(options?: ConstructorOptions) {
    const flakeId = new FlakeId(options);

    return function generateId() {
        return toBigIntBE(flakeId.next());
    };
}

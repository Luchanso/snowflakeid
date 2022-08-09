import { snowflakeIdGenerator } from "../index";

let snowflakeId: ReturnType<typeof snowflakeIdGenerator>;

beforeEach(() => {
    snowflakeId = snowflakeIdGenerator();
});

test("should generate new id", () => {
    const id = snowflakeId();
    expect(id).toBeGreaterThan(Date.now());
    expect(typeof id).toBe("bigint");
});

test("should generate difference ids", () => {
    const uniqueIds = new Set();
    const uniqueIdsLength = 1024;
    for (let i = 0; i < uniqueIdsLength; i++) {
        uniqueIds.add(snowflakeId());
    }

    expect(Array.from(uniqueIds)).toHaveLength(uniqueIdsLength);
});

test("should generate sequence order", () => {
    const ids: bigint[] = [];
    const idsLength = 1024;
    for (let i = 0; i < idsLength; i++) {
        ids.push(snowflakeId());
    }

    let isCorrectOrder = true;

    for (let i = 1; i < ids.length; i++) {
        if (ids[i - 1] > ids[i]) {
            isCorrectOrder = false;
            break;
        }
    }

    expect(isCorrectOrder).toBe(true);
});

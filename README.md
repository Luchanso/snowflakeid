# SnowflakeId generator

Generator for [snowflakes ids](https://en.wikipedia.org/wiki/Snowflake_ID) or watch: https://www.youtube.com/watch?v=aLYKd7h7vgY

install:

```sh
yarn add @luchanso/snowflakeid
```

usage:

```
import { snowflakeIdGenerator } from "@luchanso/snowflakeid";

const snowflakeId = snowflakeIdGenerator();
console.log(snowflakeId()) // 6962786777434161152n
```

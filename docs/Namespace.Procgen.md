# Procgen

Procedural Generation Library

## Classes

### DiffusionLimitedAggregation

Defined in: [src/procgen/DiffusionLimitedAggregation.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L8)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `number` |

#### Constructors

##### Constructor

> **new DiffusionLimitedAggregation**\<`T`\>(`grid`, `srng`): [`DiffusionLimitedAggregation`](#diffusionlimitedaggregation)\<`T`\>

Defined in: [src/procgen/DiffusionLimitedAggregation.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `grid` | `GridType` |
| `srng` | [`SeededRandomNumberGenerator`](Namespace.Random.md#seededrandomnumbergenerator) |

###### Returns

[`DiffusionLimitedAggregation`](#diffusionlimitedaggregation)\<`T`\>

#### Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="current_aggregates"></a> `current_aggregates` | [`GridLens`](Namespace.Grid.md#gridlens)\<`T`\>[] | `[]` | [src/procgen/DiffusionLimitedAggregation.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L20) |
| <a id="cycles"></a> `cycles` | `number` | `DEFAULT_CYCLES` | [src/procgen/DiffusionLimitedAggregation.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L13) |
| <a id="fill_value"></a> `fill_value` | `T` | `null` | [src/procgen/DiffusionLimitedAggregation.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L15) |
| <a id="filter_whitelist"></a> `filter_whitelist` | `T`[] | `undefined` | [src/procgen/DiffusionLimitedAggregation.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L16) |
| <a id="grid"></a> `grid` | `GridType`\<`T`\> | `undefined` | [src/procgen/DiffusionLimitedAggregation.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L9) |
| <a id="max_aggregates"></a> `max_aggregates` | `number` | `DEFAULT_MAX_AGGREGATES` | [src/procgen/DiffusionLimitedAggregation.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L14) |
| <a id="particle"></a> `particle` | [`GridLens`](Namespace.Grid.md#gridlens)\<`T`\> | `null` | [src/procgen/DiffusionLimitedAggregation.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L21) |
| <a id="seed_point"></a> `seed_point` | [`GridLens`](Namespace.Grid.md#gridlens)\<`T`\> | `null` | [src/procgen/DiffusionLimitedAggregation.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L17) |
| <a id="srng"></a> `srng` | [`SeededRandomNumberGenerator`](Namespace.Random.md#seededrandomnumbergenerator) | `undefined` | [src/procgen/DiffusionLimitedAggregation.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L10) |

#### Methods

##### process()

> **process**(`opts`): `void`

Defined in: [src/procgen/DiffusionLimitedAggregation.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/DiffusionLimitedAggregation.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

`void`

***

### PathCrawler

Defined in: [src/procgen/PathCrawler.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L9)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Constructors

##### Constructor

> **new PathCrawler**\<`T`\>(`grid`, `srng`): [`PathCrawler`](#pathcrawler)\<`T`\>

Defined in: [src/procgen/PathCrawler.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `grid` | `GridType`\<`T`\> |
| `srng` | [`SeededRandomNumberGenerator`](Namespace.Random.md#seededrandomnumbergenerator) |

###### Returns

[`PathCrawler`](#pathcrawler)\<`T`\>

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="grid-1"></a> `grid` | `public` | `GridType`\<`T`\> | `undefined` | [src/procgen/PathCrawler.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L10) |
| <a id="srng-1"></a> `srng` | `public` | [`SeededRandomNumberGenerator`](Namespace.Random.md#seededrandomnumbergenerator) | `undefined` | [src/procgen/PathCrawler.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L11) |
| <a id="starting_point"></a> `starting_point` | `public` | [`GridLens`](Namespace.Grid.md#gridlens)\<`T`\> | `null` | [src/procgen/PathCrawler.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L24) |
| <a id="steps"></a> `steps` | `public` | `number` | `10` | [src/procgen/PathCrawler.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L23) |
| <a id="default_distribution"></a> `default_distribution` | `static` | `object` | `undefined` | [src/procgen/PathCrawler.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L13) |
| `default_distribution.bottom` | `public` | `number` | `1` | [src/procgen/PathCrawler.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L15) |
| `default_distribution.down` | `public` | `number` | `1` | [src/procgen/PathCrawler.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L19) |
| `default_distribution.left` | `public` | `number` | `1` | [src/procgen/PathCrawler.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L16) |
| `default_distribution.right` | `public` | `number` | `1` | [src/procgen/PathCrawler.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L17) |
| `default_distribution.top` | `public` | `number` | `1` | [src/procgen/PathCrawler.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L14) |
| `default_distribution.up` | `public` | `number` | `1` | [src/procgen/PathCrawler.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L18) |

#### Methods

##### crawl()

> **crawl**(`opts?`): [`GridLens`](Namespace.Grid.md#gridlens)\<`T`\>[]

Defined in: [src/procgen/PathCrawler.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/PathCrawler.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

[`GridLens`](Namespace.Grid.md#gridlens)\<`T`\>[]

***

### RoomGeneration

Defined in: [src/procgen/RoomGeneration.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/RoomGeneration.ts#L10)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Constructors

##### Constructor

> **new RoomGeneration**\<`T`\>(`grid`, `srng`): [`RoomGeneration`](#roomgeneration)\<`T`\>

Defined in: [src/procgen/RoomGeneration.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/RoomGeneration.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `grid` | `GridType`\<`T`\> |
| `srng` | [`SeededRandomNumberGenerator`](Namespace.Random.md#seededrandomnumbergenerator) |

###### Returns

[`RoomGeneration`](#roomgeneration)\<`T`\>

#### Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="grid-2"></a> `grid` | `GridType`\<`T`\> | `undefined` | [src/procgen/RoomGeneration.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/RoomGeneration.ts#L11) |
| <a id="placed_rooms"></a> `placed_rooms` | [`SubGrid`](Namespace.Grid.md#subgrid-1)\<`number`\>[] | `[]` | [src/procgen/RoomGeneration.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/RoomGeneration.ts#L14) |
| <a id="srng-2"></a> `srng` | [`SeededRandomNumberGenerator`](Namespace.Random.md#seededrandomnumbergenerator) | `undefined` | [src/procgen/RoomGeneration.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/RoomGeneration.ts#L12) |

#### Methods

##### generateRoom()

> **generateRoom**(`opts`): [`SubGrid`](Namespace.Grid.md#subgrid-1)\<`T`\>

Defined in: [src/procgen/RoomGeneration.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/procgen/RoomGeneration.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

[`SubGrid`](Namespace.Grid.md#subgrid-1)\<`T`\>

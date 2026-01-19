[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Util

# Util

Utility Library

## Functions

### CheckClass()

> **CheckClass**(`e`, `classname`): `boolean`

Defined in: [util/index.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L68)

Returns 'true' if the given entity has the given classname

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |
| `classname` | `string` |

#### Returns

`boolean`

***

### DeepCopy()

> **DeepCopy**(`o`): `any`

Defined in: [util/index.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L11)

Returns a deep copy of the provided object, `o`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | `any` |

#### Returns

`any`

***

### GenerateAddOutput()

> **GenerateAddOutput**(`opts`): `string`

Defined in: [util/index.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L40)

Generate an 'AddOutput' line for IO Events.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

#### Returns

`string`

***

### GetPlayerName()

> **GetPlayerName**(`player_pawn`): `string` \| `null`

Defined in: [util/index.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L16)

Return the player name of a CSPlayerPawn, or `null` if it isn't available.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

#### Returns

`string` \| `null`

***

### Memoize()

> **Memoize**(`func`): (...`args`) => `any`

Defined in: [util/index.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L28)

Standard Memoize Function

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `func` | `Function` |

#### Returns

> (...`args`): `any`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any` |

##### Returns

`any`

***

### UniqueGen()

> **UniqueGen**(`s`): () => `string`

Defined in: [util/index.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L61)

Returns a function that generates unique indexed names prefixed with `s`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `s` | `string` | `"ScriptedEuch-"` |

#### Returns

> (): `string`

##### Returns

`string`

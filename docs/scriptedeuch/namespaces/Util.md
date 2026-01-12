[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Util

# Util

Utility Library

## Functions

### DeepCopy()

> **DeepCopy**(`o`): `any`

Defined in: [util/index.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L10)

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

Defined in: [util/index.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L39)

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

Defined in: [util/index.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L15)

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

Defined in: [util/index.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L27)

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

Defined in: [util/index.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/util/index.ts#L60)

Returns a function that generates unique indexed names prefixed with `s`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `s` | `string` | `"ScriptedEuch-"` |

#### Returns

> (): `string`

##### Returns

`string`

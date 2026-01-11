[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Random

# Random

## Classes

### SeededRandomNumberGenerator

Defined in: [random/SeededRandomNumberGenerator.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L47)

#### Constructors

##### Constructor

> **new SeededRandomNumberGenerator**(`seed`, `options`): [`SeededRandomNumberGenerator`](#seededrandomnumbergenerator)

Defined in: [random/SeededRandomNumberGenerator.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `seed` | `string` |
| `options` | \{ \} |

###### Returns

[`SeededRandomNumberGenerator`](#seededrandomnumbergenerator)

#### Methods

##### \_getDistribution()

> **\_getDistribution**(`tupl`, `norm_factor`): `any`[][]

Defined in: [random/SeededRandomNumberGenerator.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tupl` | `any` |
| `norm_factor` | `any` |

###### Returns

`any`[][]

##### randomChance()

> **randomChance**(`norm`): `boolean`

Defined in: [random/SeededRandomNumberGenerator.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L124)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `norm` | `number` |

###### Returns

`boolean`

##### randomChoice()

> **randomChoice**\<`T`\>(`array`, `bDelete`): `T` \| `null`

Defined in: [random/SeededRandomNumberGenerator.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L143)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `array` | `T`[] | `undefined` |
| `bDelete` | `boolean` | `false` |

###### Returns

`T` \| `null`

##### randomCombination()

> **randomCombination**\<`T`\>(`array`, `count`, `bDelete`): `T`[]

Defined in: [random/SeededRandomNumberGenerator.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L153)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `array` | `T`[] | `undefined` |
| `count` | `number` | `1` |
| `bDelete` | `boolean` | `false` |

###### Returns

`T`[]

##### randomDistribution()

> **randomDistribution**(`o`): `string`

Defined in: [random/SeededRandomNumberGenerator.ts:96](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L96)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | `Object` |

###### Returns

`string`

##### randomFloat()

> **randomFloat**(`start`, `end?`): `number`

Defined in: [random/SeededRandomNumberGenerator.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L128)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `start` | `number` |
| `end?` | `number` |

###### Returns

`number`

##### randomInteger()

> **randomInteger**(`start`, `end?`): `number`

Defined in: [random/SeededRandomNumberGenerator.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L137)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `start` | `number` |
| `end?` | `number` |

###### Returns

`number`

##### randomShuffle()

> **randomShuffle**\<`T`\>(`array`, `bCopy`): `T`[]

Defined in: [random/SeededRandomNumberGenerator.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L171)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `array` | `T`[] | `undefined` |
| `bCopy` | `boolean` | `false` |

###### Returns

`T`[]

## Functions

### RandomChoiceGenerator()

> **RandomChoiceGenerator**(`xs`): `Generator`\<`any`, `void`, `unknown`\>

Defined in: [random/RandomChoiceGenerator.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/RandomChoiceGenerator.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `xs` | `any` |

#### Returns

`Generator`\<`any`, `void`, `unknown`\>

***

### RandomInteger()

> **RandomInteger**(`start`, `end?`): `number`

Defined in: [random/utils.ts:1](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/utils.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `start` | `number` |
| `end?` | `number` |

#### Returns

`number`

***

### RandomSeed()

> **RandomSeed**(): `string`

Defined in: [random/utils.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/utils.ts#L26)

#### Returns

`string`

***

### RandomWord()

> **RandomWord**(): `string`

Defined in: [random/utils.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/utils.ts#L10)

#### Returns

`string`

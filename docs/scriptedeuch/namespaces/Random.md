[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Random

# Random

Random Utility Library

## Classes

### SeededRandomNumberGenerator

Defined in: [random/SeededRandomNumberGenerator.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L50)

Generate predictable randomness with a provided `seed` string.

#### Constructors

##### Constructor

> **new SeededRandomNumberGenerator**(`seed`, `options`): [`SeededRandomNumberGenerator`](#seededrandomnumbergenerator)

Defined in: [random/SeededRandomNumberGenerator.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L56)

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

Defined in: [random/SeededRandomNumberGenerator.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tupl` | `any` |
| `norm_factor` | `any` |

###### Returns

`any`[][]

##### randomChance()

> **randomChance**(`norm`): `boolean`

Defined in: [random/SeededRandomNumberGenerator.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L132)

`norm` is a value between 0.0 and 1.0, and returns true if the
generated value is less than `norm`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `norm` | `number` |

###### Returns

`boolean`

###### Example

```ts
let srng = new SeededRandomNumberGenerator("Test");
let coinFlip = () => { return srng.randomChance(0.5); };
let quarter = () => { return coinFlip() && coinFlip(); };
let deca = () => { return srng.randomChance(0.1); };
```

##### randomChoice()

> **randomChoice**\<`T`\>(`array`, `bDelete`): `T` \| `null`

Defined in: [random/SeededRandomNumberGenerator.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L153)

Returns a random choice from an array.
if `bDelete`, remove the element from the array.

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

Defined in: [random/SeededRandomNumberGenerator.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L165)

Returns a random combination of values from the `array` as a
choice of values of size `count`
if `bDelete`, remove the elements from the array.

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

Defined in: [random/SeededRandomNumberGenerator.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L101)

Get random distribution based on keyvalue weights.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | `Object` |

###### Returns

`string`

###### Example

```typescript
let srng = new SeededRandomNumberGenerator("Test2");
let dist = {
  Head: 2,
  Chest: 3,
  Legs: 1,
}
let gen = () => { return srng.randomDistribution(dist); };
console.log(gen()); // Head
console.log(gen()); // Head
console.log(gen()); // Legs
console.log(gen()); // Chest
console.log(gen()); // Chest
console.log(gen()); // Chest
```

##### randomFloat()

> **randomFloat**(`start`, `end?`): `number`

Defined in: [random/SeededRandomNumberGenerator.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L136)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `start` | `number` |
| `end?` | `number` |

###### Returns

`number`

##### randomInteger()

> **randomInteger**(`start`, `end?`): `number`

Defined in: [random/SeededRandomNumberGenerator.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L145)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `start` | `number` |
| `end?` | `number` |

###### Returns

`number`

##### randomShuffle()

> **randomShuffle**\<`T`\>(`array`, `bCopy`): `T`[]

Defined in: [random/SeededRandomNumberGenerator.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/random/SeededRandomNumberGenerator.ts#L185)

Shuffles the elements of an array.
if `bCopy`, returns a new array.

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

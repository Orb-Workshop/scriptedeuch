[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Noise

# Noise

Noise Utility Library

## Classes

### SimplexNoise

Defined in: [noise/SimplexNoise.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L18)

Noise Generation Classes and Functions.

#### Constructors

##### Constructor

> **new SimplexNoise**(): [`SimplexNoise`](#simplexnoise)

###### Returns

[`SimplexNoise`](#simplexnoise)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="f2"></a> `F2` | `static` | `number` | [noise/SimplexNoise.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L62) |
| <a id="g2"></a> `G2` | `static` | `number` | [noise/SimplexNoise.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L63) |
| <a id="grad3"></a> `grad3` | `static` | `Grad`[] | [noise/SimplexNoise.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L19) |
| <a id="p"></a> `p` | `static` | `number`[] | [noise/SimplexNoise.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L25) |
| <a id="perm"></a> `perm` | `static` | `number`[] | [noise/SimplexNoise.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L49) |
| <a id="permmod12"></a> `permMod12` | `static` | `number`[] | [noise/SimplexNoise.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L59) |

#### Methods

##### \_fill\_perm()

> `static` **\_fill\_perm**(): `number`[]

Defined in: [noise/SimplexNoise.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L41)

###### Returns

`number`[]

##### \_fill\_permMod12()

> `static` **\_fill\_permMod12**(): `number`[]

Defined in: [noise/SimplexNoise.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L51)

###### Returns

`number`[]

##### dot()

> `static` **dot**(`g`, `x`, `y`): `number`

Defined in: [noise/SimplexNoise.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `g` | `Grad` |
| `x` | `number` |
| `y` | `number` |

###### Returns

`number`

##### noise()

> `static` **noise**(`xin`, `yin`): `number`

Defined in: [noise/SimplexNoise.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L71)

Main Static Method

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `xin` | `number` |
| `yin` | `number` |

###### Returns

`number`

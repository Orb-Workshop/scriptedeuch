[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Noise

# Noise

Noise Utility Library

## Classes

### SimplexNoise

Defined in: [noise/SimplexNoise.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L21)

2D Simplex Noise

#### Constructors

##### Constructor

> **new SimplexNoise**(): [`SimplexNoise`](#simplexnoise)

###### Returns

[`SimplexNoise`](#simplexnoise)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="f2"></a> `F2` | `static` | `number` | [noise/SimplexNoise.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L65) |
| <a id="g2"></a> `G2` | `static` | `number` | [noise/SimplexNoise.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L66) |
| <a id="grad3"></a> `grad3` | `static` | `Grad`[] | [noise/SimplexNoise.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L22) |
| <a id="p"></a> `p` | `static` | `number`[] | [noise/SimplexNoise.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L28) |
| <a id="perm"></a> `perm` | `static` | `number`[] | [noise/SimplexNoise.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L52) |
| <a id="permmod12"></a> `permMod12` | `static` | `number`[] | [noise/SimplexNoise.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L62) |

#### Methods

##### \_fill\_perm()

> `static` **\_fill\_perm**(): `number`[]

Defined in: [noise/SimplexNoise.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L44)

###### Returns

`number`[]

##### \_fill\_permMod12()

> `static` **\_fill\_permMod12**(): `number`[]

Defined in: [noise/SimplexNoise.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L54)

###### Returns

`number`[]

##### dot()

> `static` **dot**(`g`, `x`, `y`): `number`

Defined in: [noise/SimplexNoise.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L69)

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

Defined in: [noise/SimplexNoise.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/noise/SimplexNoise.ts#L74)

Main Static Method

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `xin` | `number` |
| `yin` | `number` |

###### Returns

`number`

**scriptedeuch**

***

# scriptedeuch

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Actor](scriptedeuch/namespaces/Actor.md) | Spawnable Actors (Auto-Mounting) that extend `Base.Actor` |
| [Base](scriptedeuch/namespaces/Base/README.md) | Base Library Framework Components |
| [Event](scriptedeuch/namespaces/Event.md) | Event Listener and Sender |
| [Grid](scriptedeuch/namespaces/Grid.md) | Grid Library |
| [Helper](scriptedeuch/namespaces/Helper.md) | Entity Helper Library |
| [Math](scriptedeuch/namespaces/Math.md) | Math Library |
| [Noise](scriptedeuch/namespaces/Noise.md) | Noisy Library |
| [Procgen](scriptedeuch/namespaces/Procgen.md) | Procedural Generation Library |
| [Random](scriptedeuch/namespaces/Random.md) | Randomness Library |
| [System](scriptedeuch/namespaces/System.md) | Mountable Systems that extend `Base.System` |
| [Util](scriptedeuch/namespaces/Util.md) | Utility Library |

## Classes

### Color

Defined in: [src/color/Color.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L17)

Color Library

#### Implements

- `unknown`

#### Constructors

##### Constructor

> **new Color**(`r`, `g`, `b`, `a?`): [`Color`](#color)

Defined in: [src/color/Color.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L22)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `r` | `number` | `undefined` |
| `g` | `number` | `undefined` |
| `b` | `number` | `undefined` |
| `a` | `number` | `MAX_VALUE` |

###### Returns

[`Color`](#color)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="a"></a> `a` | `public` | `number` | [src/color/Color.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L21) |
| <a id="b"></a> `b` | `public` | `number` | [src/color/Color.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L20) |
| <a id="g"></a> `g` | `public` | `number` | [src/color/Color.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L19) |
| <a id="r"></a> `r` | `public` | `number` | [src/color/Color.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L18) |

#### Methods

##### toHSLA()

> **toHSLA**(): `HSLAType`

Defined in: [src/color/Color.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L61)

###### Returns

`HSLAType`

##### From()

> `static` **From**(`__namedParameters`): [`Color`](#color)

Defined in: [src/color/Color.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `ColorType` |

###### Returns

[`Color`](#color)

##### FromHSLA()

> `static` **FromHSLA**(`__namedParameters`): [`Color`](#color)

Defined in: [src/color/Color.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `HSLAType` |

###### Returns

[`Color`](#color)

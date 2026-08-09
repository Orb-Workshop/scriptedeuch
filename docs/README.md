# scriptedeuch

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Actor](Namespace.Actor.md) | Spawnable Actors (Auto-Mounting) that extend `Base.Actor` |
| [Base](Namespace.Base.md) | Base Library Framework Components |
| [Entity](Namespace.Entity.md) | Entity Helper Library |
| [Event](Namespace.Event.md) | Event Listener and Sender |
| [Grid](Namespace.Grid.md) | Grid Library |
| [Math](Namespace.Math.md) | Math Library |
| [Noise](Namespace.Noise.md) | Noisy Library |
| [Procgen](Namespace.Procgen.md) | Procedural Generation Library |
| [Random](Namespace.Random.md) | Randomness Library |
| [System](Namespace.System.md) | Mountable Systems that extend `Base.System` |
| [Util](Namespace.Util.md) | Utility Library |

## Classes

### Color

Defined in: [src/color/Color.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L15)

Color Library

#### Implements

- `unknown`

#### Constructors

##### Constructor

> **new Color**(`r`, `g`, `b`, `a?`): [`Color`](#color)

Defined in: [src/color/Color.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L20)

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
| <a id="a"></a> `a` | `public` | `number` | [src/color/Color.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L19) |
| <a id="b"></a> `b` | `public` | `number` | [src/color/Color.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L18) |
| <a id="g"></a> `g` | `public` | `number` | [src/color/Color.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L17) |
| <a id="r"></a> `r` | `public` | `number` | [src/color/Color.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L16) |

#### Methods

##### toHSLA()

> **toHSLA**(): `HSLAType`

Defined in: [src/color/Color.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L59)

###### Returns

`HSLAType`

##### From()

> `static` **From**(`__namedParameters`): [`Color`](#color)

Defined in: [src/color/Color.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `ColorType` |

###### Returns

[`Color`](#color)

##### FromHSLA()

> `static` **FromHSLA**(`__namedParameters`): [`Color`](#color)

Defined in: [src/color/Color.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/color/Color.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `HSLAType` |

###### Returns

[`Color`](#color)

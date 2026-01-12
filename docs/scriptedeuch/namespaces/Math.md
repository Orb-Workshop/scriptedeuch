[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Math

# Math

Math Utility Library

## Classes

### BBox2

Defined in: [math/BBox2.ts:4](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L4)

#### Constructors

##### Constructor

> **new BBox2**(`x`, `y`, `w`, `h`): [`BBox2`](#bbox2)

Defined in: [math/BBox2.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L10)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `w` | `number` | `0` |
| `h` | `number` | `0` |

###### Returns

[`BBox2`](#bbox2)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="h"></a> `h` | `number` | [math/BBox2.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L8) |
| <a id="w"></a> `w` | `number` | [math/BBox2.ts:7](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L7) |
| <a id="x"></a> `x` | `number` | [math/BBox2.ts:5](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L5) |
| <a id="y"></a> `y` | `number` | [math/BBox2.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L6) |

#### Methods

##### center()

> **center**(): [`Point2`](#point2)

Defined in: [math/BBox2.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L17)

###### Returns

[`Point2`](#point2)

##### checkInside()

> **checkInside**(`ibbox`): `boolean`

Defined in: [math/BBox2.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ibbox` | [`BBox2`](#bbox2) |

###### Returns

`boolean`

##### checkIntersection()

> **checkIntersection**(`bbox`): `boolean`

Defined in: [math/BBox2.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `bbox` | [`BBox2`](#bbox2) |

###### Returns

`boolean`

##### contract()

> **contract**(`xw`, `yh?`): [`BBox2`](#bbox2)

Defined in: [math/BBox2.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `xw` | `number` |
| `yh?` | `number` |

###### Returns

[`BBox2`](#bbox2)

##### expand()

> **expand**(`xw`, `yh?`): [`BBox2`](#bbox2)

Defined in: [math/BBox2.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `xw` | `number` |
| `yh?` | `number` |

###### Returns

[`BBox2`](#bbox2)

##### extendDown()

> **extendDown**(`amt`): [`BBox2`](#bbox2)

Defined in: [math/BBox2.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L107)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox2`](#bbox2)

##### extendLeft()

> **extendLeft**(`amt`): [`BBox2`](#bbox2)

Defined in: [math/BBox2.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox2`](#bbox2)

##### extendRight()

> **extendRight**(`amt`): [`BBox2`](#bbox2)

Defined in: [math/BBox2.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L91)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox2`](#bbox2)

##### extendUp()

> **extendUp**(`amt`): [`BBox2`](#bbox2)

Defined in: [math/BBox2.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox2`](#bbox2)

##### translate()

> **translate**(`x`, `y`): [`BBox2`](#bbox2)

Defined in: [math/BBox2.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox2.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |

###### Returns

[`BBox2`](#bbox2)

***

### BBox3

Defined in: [math/BBox3.ts:4](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L4)

#### Constructors

##### Constructor

> **new BBox3**(`x`, `y`, `z`, `w`, `h`, `d`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L13)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |
| `w` | `number` | `0` |
| `h` | `number` | `0` |
| `d` | `number` | `0` |

###### Returns

[`BBox3`](#bbox3)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="d"></a> `d` | `number` | [math/BBox3.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L11) |
| <a id="h-1"></a> `h` | `number` | [math/BBox3.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L10) |
| <a id="w-1"></a> `w` | `number` | [math/BBox3.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L9) |
| <a id="x-1"></a> `x` | `number` | [math/BBox3.ts:5](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L5) |
| <a id="y-1"></a> `y` | `number` | [math/BBox3.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L6) |
| <a id="z"></a> `z` | `number` | [math/BBox3.ts:7](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L7) |

#### Methods

##### center()

> **center**(): [`Point3`](#point3)

Defined in: [math/BBox3.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L23)

###### Returns

[`Point3`](#point3)

##### checkInside()

> **checkInside**(`ibbox`): `boolean`

Defined in: [math/BBox3.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ibbox` | [`BBox3`](#bbox3) |

###### Returns

`boolean`

##### checkIntersection()

> **checkIntersection**(`bbox`): `boolean`

Defined in: [math/BBox3.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `bbox` | [`BBox3`](#bbox3) |

###### Returns

`boolean`

##### contract()

> **contract**(`xw`, `yh?`, `zd?`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:84](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L84)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `xw` | `number` |
| `yh?` | `number` |
| `zd?` | `number` |

###### Returns

[`BBox3`](#bbox3)

##### expand()

> **expand**(`xw`, `yh?`, `zd?`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `xw` | `number` |
| `yh?` | `number` |
| `zd?` | `number` |

###### Returns

[`BBox3`](#bbox3)

##### extendBottom()

> **extendBottom**(`amt`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L158)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox3`](#bbox3)

##### extendDown()

> **extendDown**(`amt`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L138)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox3`](#bbox3)

##### extendLeft()

> **extendLeft**(`amt`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:108](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L108)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox3`](#bbox3)

##### extendRight()

> **extendRight**(`amt`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L118)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox3`](#bbox3)

##### extendTop()

> **extendTop**(`amt`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L148)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox3`](#bbox3)

##### extendUp()

> **extendUp**(`amt`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L128)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amt` | `number` |

###### Returns

[`BBox3`](#bbox3)

##### translate()

> **translate**(`x`, `y`, `z`): [`BBox3`](#bbox3)

Defined in: [math/BBox3.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/BBox3.ts#L97)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

###### Returns

[`BBox3`](#bbox3)

***

### LineSegment2

Defined in: [math/LineSegment2.ts:4](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment2.ts#L4)

#### Constructors

##### Constructor

> **new LineSegment2**(`point_a`, `point_b`): [`LineSegment2`](#linesegment2)

Defined in: [math/LineSegment2.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment2.ts#L8)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `point_a` | [`Point2`](#point2) |
| `point_b` | [`Point2`](#point2) |

###### Returns

[`LineSegment2`](#linesegment2)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="a"></a> `a` | [`Point2`](#point2) | [math/LineSegment2.ts:5](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment2.ts#L5) |
| <a id="b"></a> `b` | [`Point2`](#point2) | [math/LineSegment2.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment2.ts#L6) |

#### Methods

##### direction()

> **direction**(): [`Vector2`](#vector2)

Defined in: [math/LineSegment2.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment2.ts#L28)

###### Returns

[`Vector2`](#vector2)

A unit/direction vector from point `this.a` to `this.b`.

##### distance()

> **distance**(): `number`

Defined in: [math/LineSegment2.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment2.ts#L19)

###### Returns

`number`

##### getNormalizedPoint()

> **getNormalizedPoint**(`norm`): [`Point2`](#point2)

Defined in: [math/LineSegment2.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment2.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `norm` | `number` |

###### Returns

[`Point2`](#point2)

A Point between `this.a` and `this.b` based on a normalized value
between 0.0 and 1.0
ex. norm = 0. --> `return this.a`
    norm = 1. --> `return this.b`

##### midpoint()

> **midpoint**(): [`Point2`](#point2)

Defined in: [math/LineSegment2.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment2.ts#L13)

###### Returns

[`Point2`](#point2)

***

### LineSegment3

Defined in: [math/LineSegment3.ts:4](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment3.ts#L4)

#### Constructors

##### Constructor

> **new LineSegment3**(`point_a`, `point_b`): [`LineSegment3`](#linesegment3)

Defined in: [math/LineSegment3.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment3.ts#L8)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `point_a` | [`Point3`](#point3) |
| `point_b` | [`Point3`](#point3) |

###### Returns

[`LineSegment3`](#linesegment3)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="a-1"></a> `a` | [`Point3`](#point3) | [math/LineSegment3.ts:5](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment3.ts#L5) |
| <a id="b-1"></a> `b` | [`Point3`](#point3) | [math/LineSegment3.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment3.ts#L6) |

#### Methods

##### direction()

> **direction**(): [`Vector3`](#vector3)

Defined in: [math/LineSegment3.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment3.ts#L31)

###### Returns

[`Vector3`](#vector3)

A unit/direction vector from point `this.a` to `this.b`.

##### distance()

> **distance**(): `number`

Defined in: [math/LineSegment3.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment3.ts#L19)

###### Returns

`number`

##### getNormalizedPoint()

> **getNormalizedPoint**(`norm`): [`Point3`](#point3)

Defined in: [math/LineSegment3.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment3.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `norm` | `number` |

###### Returns

[`Point3`](#point3)

A Point between `this.a` and `this.b` based on a normalized value
between 0.0 and 1.0
ex. norm = 0. --> `return this.a`
    norm = 1. --> `return this.b`

##### midpoint()

> **midpoint**(): [`Point3`](#point3)

Defined in: [math/LineSegment3.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/LineSegment3.ts#L13)

###### Returns

[`Point3`](#point3)

***

### Point2

Defined in: [math/Point2.ts:1](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point2.ts#L1)

#### Constructors

##### Constructor

> **new Point2**(`x`, `y`): [`Point2`](#point2)

Defined in: [math/Point2.ts:5](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point2.ts#L5)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

###### Returns

[`Point2`](#point2)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="x-2"></a> `x` | `number` | [math/Point2.ts:2](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point2.ts#L2) |
| <a id="y-2"></a> `y` | `number` | [math/Point2.ts:3](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point2.ts#L3) |

#### Methods

##### toArray()

> **toArray**(): `number`[]

Defined in: [math/Point2.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point2.ts#L10)

###### Returns

`number`[]

***

### Point3

Defined in: [math/Point3.ts:1](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point3.ts#L1)

#### Constructors

##### Constructor

> **new Point3**(`x`, `y`, `z`): [`Point3`](#point3)

Defined in: [math/Point3.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point3.ts#L6)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |

###### Returns

[`Point3`](#point3)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="x-3"></a> `x` | `number` | [math/Point3.ts:2](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point3.ts#L2) |
| <a id="y-3"></a> `y` | `number` | [math/Point3.ts:3](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point3.ts#L3) |
| <a id="z-1"></a> `z` | `number` | [math/Point3.ts:4](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point3.ts#L4) |

#### Methods

##### toArray()

> **toArray**(): `number`[]

Defined in: [math/Point3.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Point3.ts#L12)

###### Returns

`number`[]

***

### QAngle

Defined in: [math/QAngle.ts:4](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L4)

#### Constructors

##### Constructor

> **new QAngle**(`pitch`, `yaw`, `roll`): [`QAngle`](#qangle)

Defined in: [math/QAngle.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L15)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `pitch` | `number` | `0` |
| `yaw` | `number` | `0` |
| `roll` | `number` | `0` |

###### Returns

[`QAngle`](#qangle)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="pitch"></a> `pitch` | `public` | `number` | [math/QAngle.ts:5](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L5) |
| <a id="roll"></a> `roll` | `public` | `number` | [math/QAngle.ts:7](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L7) |
| <a id="yaw"></a> `yaw` | `public` | `number` | [math/QAngle.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L6) |
| <a id="zero"></a> `Zero` | `static` | [`QAngle`](#qangle) | [math/QAngle.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L9) |

#### Methods

##### add()

> **add**(`a`): [`QAngle`](#qangle)

Defined in: [math/QAngle.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | [`QAngle`](#qangle) |

###### Returns

[`QAngle`](#qangle)

##### clone()

> **clone**(): [`QAngle`](#qangle)

Defined in: [math/QAngle.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L29)

###### Returns

[`QAngle`](#qangle)

##### direction()

> **direction**(): [`Vector3`](#vector3)

Defined in: [math/QAngle.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L69)

###### Returns

[`Vector3`](#vector3)

##### equals()

> **equals**(`a`): `boolean`

Defined in: [math/QAngle.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | [`QAngle`](#qangle) |

###### Returns

`boolean`

##### normalize()

> **normalize**(): [`QAngle`](#qangle)

Defined in: [math/QAngle.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L51)

###### Returns

[`QAngle`](#qangle)

##### scale()

> **scale**(`s`): [`QAngle`](#qangle)

Defined in: [math/QAngle.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

[`QAngle`](#qangle)

##### sub()

> **sub**(`a`): [`QAngle`](#qangle)

Defined in: [math/QAngle.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | [`QAngle`](#qangle) |

###### Returns

[`QAngle`](#qangle)

##### Create()

> `static` **Create**(`pitch`, `yaw`, `roll`): [`QAngle`](#qangle)

Defined in: [math/QAngle.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L21)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `pitch` | `number` | `0` |
| `yaw` | `number` | `0` |
| `roll` | `number` | `0` |

###### Returns

[`QAngle`](#qangle)

##### Deg2Rad()

> `static` **Deg2Rad**(`deg`): `number`

Defined in: [math/QAngle.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L11)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `deg` | `number` |

###### Returns

`number`

##### From()

> `static` **From**(`__namedParameters`): [`QAngle`](#qangle)

Defined in: [math/QAngle.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/QAngle.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `QAngleType` |

###### Returns

[`QAngle`](#qangle)

***

### Vector2

Defined in: [math/Vector2.ts:1](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L1)

Math Classes and Functions. Adapters for Instance.Vector, Instance.QAngle interfaces.

#### Constructors

##### Constructor

> **new Vector2**(`x`, `y`): [`Vector2`](#vector2)

Defined in: [math/Vector2.ts:5](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L5)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |

###### Returns

[`Vector2`](#vector2)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="x-4"></a> `x` | `public` | `number` | [math/Vector2.ts:2](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L2) |
| <a id="y-4"></a> `y` | `public` | `number` | [math/Vector2.ts:3](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L3) |
| <a id="null"></a> `Null` | `static` | [`Vector2`](#vector2) | [math/Vector2.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L10) |
| <a id="zero-1"></a> `Zero` | `static` | [`Vector2`](#vector2) | [math/Vector2.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L11) |

#### Methods

##### add()

> **add**(`v`): [`Vector2`](#vector2)

Defined in: [math/Vector2.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector2`](#vector2) |

###### Returns

[`Vector2`](#vector2)

##### cross()

> **cross**(`v`): `number`

Defined in: [math/Vector2.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector2`](#vector2) |

###### Returns

`number`

##### distance()

> **distance**(`v`): `number`

Defined in: [math/Vector2.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector2`](#vector2) |

###### Returns

`number`

##### dot()

> **dot**(`v`): `number`

Defined in: [math/Vector2.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector2`](#vector2) |

###### Returns

`number`

##### equals()

> **equals**(`v`): `boolean`

Defined in: [math/Vector2.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `any` |

###### Returns

`boolean`

##### magnitude()

> **magnitude**(): `number`

Defined in: [math/Vector2.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L43)

###### Returns

`number`

##### normalize()

> **normalize**(): [`Vector2`](#vector2)

Defined in: [math/Vector2.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L47)

###### Returns

[`Vector2`](#vector2)

##### scale()

> **scale**(`s`): [`Vector2`](#vector2)

Defined in: [math/Vector2.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

[`Vector2`](#vector2)

##### sub()

> **sub**(`v`): [`Vector2`](#vector2)

Defined in: [math/Vector2.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector2`](#vector2) |

###### Returns

[`Vector2`](#vector2)

##### Create()

> `static` **Create**(`x`, `y`): [`Vector2`](#vector2)

Defined in: [math/Vector2.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector2.ts#L13)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

###### Returns

[`Vector2`](#vector2)

***

### Vector3

Defined in: [math/Vector3.ts:3](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L3)

#### Implements

- `unknown`

#### Constructors

##### Constructor

> **new Vector3**(`x`, `y`, `z`): [`Vector3`](#vector3)

Defined in: [math/Vector3.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L8)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

###### Returns

[`Vector3`](#vector3)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="x-5"></a> `x` | `public` | `number` | [math/Vector3.ts:4](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L4) |
| <a id="y-5"></a> `y` | `public` | `number` | [math/Vector3.ts:5](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L5) |
| <a id="z-2"></a> `z` | `public` | `number` | [math/Vector3.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L6) |
| <a id="null-1"></a> `Null` | `static` | [`Vector3`](#vector3) | [math/Vector3.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L14) |
| <a id="zero-2"></a> `Zero` | `static` | [`Vector3`](#vector3) | [math/Vector3.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L15) |

#### Methods

##### add()

> **add**(`v`): [`Vector3`](#vector3)

Defined in: [math/Vector3.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L28)

Add two vectors and return a new `Vector3`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector3`](#vector3) |

###### Returns

[`Vector3`](#vector3)

##### cross()

> **cross**(`v`): [`Vector3`](#vector3)

Defined in: [math/Vector3.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector3`](#vector3) |

###### Returns

[`Vector3`](#vector3)

##### distance()

> **distance**(`v`): `number`

Defined in: [math/Vector3.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector3`](#vector3) |

###### Returns

`number`

##### dot()

> **dot**(`v`): `number`

Defined in: [math/Vector3.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L49)

Return dot product of this vector with `v`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector3`](#vector3) |

###### Returns

`number`

##### equals()

> **equals**(`v`): `boolean`

Defined in: [math/Vector3.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `any` |

###### Returns

`boolean`

##### magnitude()

> **magnitude**(): `number`

Defined in: [math/Vector3.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L60)

###### Returns

`number`

##### normalize()

> **normalize**(): [`Vector3`](#vector3)

Defined in: [math/Vector3.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L64)

###### Returns

[`Vector3`](#vector3)

##### scale()

> **scale**(`s`): [`Vector3`](#vector3)

Defined in: [math/Vector3.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L42)

Return a scaled `Vector3`, scaled by `s`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

[`Vector3`](#vector3)

##### sub()

> **sub**(`v`): [`Vector3`](#vector3)

Defined in: [math/Vector3.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L35)

Subtract two vectors and return a new `Vector3`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | [`Vector3`](#vector3) |

###### Returns

[`Vector3`](#vector3)

##### Create()

> `static` **Create**(`x`, `y`, `z`): [`Vector3`](#vector3)

Defined in: [math/Vector3.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L18)

Same as constructor

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |

###### Returns

[`Vector3`](#vector3)

##### From()

> `static` **From**(`__namedParameters`): [`Vector3`](#vector3)

Defined in: [math/Vector3.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/math/Vector3.ts#L23)

Create Vector from CS Vector Interface

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `VectorType` |

###### Returns

[`Vector3`](#vector3)

***

### Voronoi

Defined in: math/Voronoi.ts:32

#### Constructors

##### Constructor

> **new Voronoi**(`options`): [`Voronoi`](#voronoi)

Defined in: math/Voronoi.ts:45

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ \} |

###### Returns

[`Voronoi`](#voronoi)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bbox_default"></a> `bbox_default` | `static` | `object` | math/Voronoi.ts:38 |
| `bbox_default.xl` | `public` | `number` | math/Voronoi.ts:39 |
| `bbox_default.xr` | `public` | `number` | math/Voronoi.ts:40 |
| `bbox_default.yb` | `public` | `number` | math/Voronoi.ts:42 |
| `bbox_default.yt` | `public` | `number` | math/Voronoi.ts:41 |

#### Methods

##### \_convertPointArrayToSites()

> **\_convertPointArrayToSites**(`point_array`): `object`[]

Defined in: math/Voronoi.ts:49

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `point_array` | [`Point2`](#point2)[] |

###### Returns

`object`[]

##### compute()

> **compute**(`point_array`): `void`

Defined in: math/Voronoi.ts:55

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `point_array` | [`Point2`](#point2)[] |

###### Returns

`void`

##### getCompleteEdges()

> **getCompleteEdges**(): `EdgeResult`[]

Defined in: math/Voronoi.ts:67

###### Returns

`EdgeResult`[]

##### getEquidistantPoints()

> **getEquidistantPoints**(): [`Point2`](#point2)[]

Defined in: math/Voronoi.ts:78

###### Returns

[`Point2`](#point2)[]

##### getRawDiagram()

> **getRawDiagram**(): `null`

Defined in: math/Voronoi.ts:63

###### Returns

`null`

##### isComputed()

> **isComputed**(): `boolean`

Defined in: math/Voronoi.ts:61

###### Returns

`boolean`

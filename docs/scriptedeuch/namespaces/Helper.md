[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Helper

# Helper

Entity Helper Library

## Classes

### EntityHelper

Defined in: [helper/EntityHelper.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L6)

#### Extended by

- [`TriggerMultiple`](#triggermultiple)

#### Constructors

##### Constructor

> **new EntityHelper**(`entity`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L8)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EntityHelper`](#entityhelper)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L12)

###### Returns

`Entity`

#### Methods

##### FireEvent()

> **FireEvent**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

***

### TriggerMultiple

Defined in: [helper/TriggerMultiple.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L11)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new TriggerMultiple**(`entity`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L12)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L12)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw)

#### Methods

##### FireEvent()

> **FireEvent**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireEvent`](#fireevent)

##### HandleEndTouch()

> **HandleEndTouch**(`callback`): `number`

Defined in: [helper/TriggerMultiple.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `any` |

###### Returns

`number`

##### HandleEndTouchAll()

> **HandleEndTouchAll**(`callback`): `number`

Defined in: [helper/TriggerMultiple.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `any` |

###### Returns

`number`

##### HandleStartTouch()

> **HandleStartTouch**(`callback`): `number`

Defined in: [helper/TriggerMultiple.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `any` |

###### Returns

`number`

##### HandleStartTouchAll()

> **HandleStartTouchAll**(`callback`): `number`

Defined in: [helper/TriggerMultiple.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `any` |

###### Returns

`number`

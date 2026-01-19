[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Helper

# Helper

Entity Helper Library

## Classes

### BaseModelEntity

Defined in: [helper/BaseModelEntity.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L11)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new BaseModelEntity**(`entity`): [`BaseModelEntity`](#basemodelentity)

Defined in: [helper/BaseModelEntity.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L12)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireEvent()

> **FireEvent**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireEvent`](#fireevent-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L115)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L107)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L123)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L143)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L147)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L131)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L135)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:207](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L207)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L175)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L119)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L111)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L127)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L187)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L155)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L163)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L171)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [helper/BaseModelEntity.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `any` |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L199)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L103)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:203](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L203)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:215](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L215)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**\<`T`\>(`event_name`, `callback`): `T`

Defined in: [helper/EntityHelper.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L93)

Represents EventListening of IO entities with `this.ConnectOutput`

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`T`

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:219](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L219)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [helper/BaseModelEntity.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `ColorType` |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L179)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L191)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [helper/BaseModelEntity.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

##### SetModelScale()

> **SetModelScale**(`s`): `void`

Defined in: [helper/BaseModelEntity.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L167)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:211](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L211)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `attacker`: `any`; `damage`: `any`; `inflictor`: `any`; `weapon`: `any`; \} |
| `__namedParameters.attacker` | `any` |
| `__namedParameters.damage` | `any` |
| `__namedParameters.inflictor` | `any` |
| `__namedParameters.weapon` | `any` |

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [helper/EntityHelper.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L139)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Teleport`](#teleport-2)

##### Unglow()

> **Unglow**(): `void`

Defined in: [helper/BaseModelEntity.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L45)

###### Returns

`void`

##### Find()

> `abstract` `static` **Find**\<`T`\>(`r`): `T` \| `null`

Defined in: [helper/BaseModelEntity.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L20)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`BaseModelEntity`](#basemodelentity) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [helper/EntityHelper.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L54)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**\<`T`\>(`classname`, `r`): `T`[]

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**\<`T`\>(`classname`, `r`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**\<`T`\>(`e`): `T` \| `null`

Defined in: [helper/BaseModelEntity.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L16)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`BaseModelEntity`](#basemodelentity) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `any` |

###### Returns

`T` \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`From`](#from-2)

***

### `abstract` EntityHelper

Defined in: [helper/EntityHelper.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L22)

#### Extended by

- [`TriggerMultiple`](#triggermultiple)
- [`BaseModelEntity`](#basemodelentity)
- [`PointTemplate`](#pointtemplate)
- [`PointSoundEvent`](#pointsoundevent)
- [`MoveableSoundEvent`](#moveablesoundevent)
- [`EnvironmentFade`](#environmentfade)

#### Constructors

##### Constructor

> **new EntityHelper**(`entity`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L25)

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

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Returns

`Entity`

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

##### FireEvent()

> **FireEvent**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L115)

###### Returns

[`QAngle`](Math.md#qangle)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L107)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L123)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L143)

###### Returns

`string`

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L147)

###### Returns

`string`

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L131)

###### Returns

[`QAngle`](Math.md#qangle)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L135)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:207](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L207)

###### Returns

`any`

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L175)

###### Returns

`number`

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L119)

###### Returns

[`QAngle`](Math.md#qangle)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L111)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L127)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L187)

###### Returns

`number`

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L155)

###### Returns

`any`

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L163)

###### Returns

`any`

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L171)

###### Returns

`number`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L199)

###### Returns

`boolean`

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L103)

###### Returns

`boolean`

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:203](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L203)

###### Returns

`boolean`

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:215](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L215)

###### Returns

`void`

##### On()

> **On**\<`T`\>(`event_name`, `callback`): `T`

Defined in: [helper/EntityHelper.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L93)

Represents EventListening of IO entities with `this.ConnectOutput`

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`T`

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:219](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L219)

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L179)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L191)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L167)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:211](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L211)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `attacker`: `any`; `damage`: `any`; `inflictor`: `any`; `weapon`: `any`; \} |
| `__namedParameters.attacker` | `any` |
| `__namedParameters.damage` | `any` |
| `__namedParameters.inflictor` | `any` |
| `__namedParameters.weapon` | `any` |

###### Returns

`number`

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [helper/EntityHelper.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L139)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

##### Find()

> `abstract` `static` **Find**\<`T`\>(`r`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L49)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [helper/EntityHelper.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L54)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

##### FindAllByClass()

> `static` **FindAllByClass**\<`T`\>(`classname`, `r`): `T`[]

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

##### FindByClass()

> `static` **FindByClass**\<`T`\>(`classname`, `r`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

##### From()

> `static` **From**\<`T`\>(`e`, `check_class?`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L29)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `any` |
| `check_class?` | `string` |

###### Returns

`T` \| `null`

***

### EnvironmentFade

Defined in: [helper/EnvironmentFade.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L14)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentFade**(`entity`): [`EnvironmentFade`](#environmentfade)

Defined in: [helper/EnvironmentFade.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentFade`](#environmentfade)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### Fade()

> **Fade**(`opts`): `void`

Defined in: [helper/EnvironmentFade.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireEvent()

> **FireEvent**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireEvent`](#fireevent-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L115)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L107)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L123)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L143)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L147)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L131)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L135)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:207](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L207)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L175)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L119)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L111)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L127)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L187)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L155)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L163)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L171)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L199)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L103)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:203](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L203)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:215](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L215)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**\<`T`\>(`event_name`, `callback`): `T`

Defined in: [helper/EntityHelper.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L93)

Represents EventListening of IO entities with `this.ConnectOutput`

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`T`

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:219](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L219)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L179)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L191)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L167)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:211](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L211)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `attacker`: `any`; `damage`: `any`; `inflictor`: `any`; `weapon`: `any`; \} |
| `__namedParameters.attacker` | `any` |
| `__namedParameters.damage` | `any` |
| `__namedParameters.inflictor` | `any` |
| `__namedParameters.weapon` | `any` |

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [helper/EntityHelper.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L139)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `abstract` `static` **Find**(`r`): [`EnvironmentFade`](#environmentfade) \| `null`

Defined in: [helper/EnvironmentFade.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentFade`](#environmentfade) \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [helper/EnvironmentFade.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L31)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EnvironmentFade`](#environmentfade) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Overrides

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**\<`T`\>(`classname`, `r`): `T`[]

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**\<`T`\>(`classname`, `r`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**(`e`): [`EnvironmentFade`](#environmentfade) \| `null`

Defined in: [helper/EnvironmentFade.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `any` |

###### Returns

[`EnvironmentFade`](#environmentfade) \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`From`](#from-2)

***

### MoveableSoundEvent

Defined in: [helper/MoveableSoundEvent.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L8)

Wraps the sound event template.

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new MoveableSoundEvent**(`empty_prop_dynamic_entity`, `sound_event_entity`): [`MoveableSoundEvent`](#moveablesoundevent)

Defined in: [helper/MoveableSoundEvent.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `empty_prop_dynamic_entity` | `Entity` |
| `sound_event_entity` | `Entity` |

###### Returns

[`MoveableSoundEvent`](#moveablesoundevent)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireEvent()

> **FireEvent**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireEvent`](#fireevent-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L115)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L107)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L123)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L143)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L147)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L131)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L135)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:207](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L207)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L175)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L119)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L111)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L127)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L187)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L155)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L163)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L171)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L199)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L103)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:203](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L203)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:215](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L215)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**\<`T`\>(`event_name`, `callback`): `T`

Defined in: [helper/EntityHelper.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L93)

Represents EventListening of IO entities with `this.ConnectOutput`

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`T`

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:219](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L219)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L179)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L191)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L167)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetParent`](#setparent-2)

##### SetSoundEventName()

> **SetSoundEventName**(`soundevent_name`, `opts`): `void`

Defined in: [helper/MoveableSoundEvent.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundevent_name` | `string` |
| `opts` | `any` |

###### Returns

`void`

##### StartSound()

> **StartSound**(`opts`): `void`

Defined in: [helper/MoveableSoundEvent.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

`void`

##### StopSound()

> **StopSound**(`opts`): `void`

Defined in: [helper/MoveableSoundEvent.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:211](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L211)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `attacker`: `any`; `damage`: `any`; `inflictor`: `any`; `weapon`: `any`; \} |
| `__namedParameters.attacker` | `any` |
| `__namedParameters.damage` | `any` |
| `__namedParameters.inflictor` | `any` |
| `__namedParameters.weapon` | `any` |

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [helper/EntityHelper.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L139)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `abstract` `static` **Find**\<`T`\>(`r`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L49)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [helper/EntityHelper.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L54)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**\<`T`\>(`classname`, `r`): `T`[]

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**\<`T`\>(`classname`, `r`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**\<`T`\>(`e`, `check_class?`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L29)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `any` |
| `check_class?` | `string` |

###### Returns

`T` \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`From`](#from-2)

##### Spawn()

> `static` **Spawn**(`soundevent_name`, `position`): [`MoveableSoundEvent`](#moveablesoundevent)

Defined in: [helper/MoveableSoundEvent.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L15)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `soundevent_name` | `any` | `undefined` |
| `position` | `any` | `Math.Vector3.Zero` |

###### Returns

[`MoveableSoundEvent`](#moveablesoundevent)

***

### PointSoundEvent

Defined in: [helper/PointSoundEvent.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L15)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new PointSoundEvent**(`entity`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [helper/PointSoundEvent.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireEvent()

> **FireEvent**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireEvent`](#fireevent-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L115)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L107)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L123)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L143)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L147)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L131)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L135)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:207](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L207)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L175)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L119)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L111)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L127)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L187)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L155)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L163)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L171)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L199)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L103)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:203](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L203)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:215](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L215)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**\<`T`\>(`event_name`, `callback`): `T`

Defined in: [helper/EntityHelper.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L93)

Represents EventListening of IO entities with `this.ConnectOutput`

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`T`

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:219](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L219)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L179)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L191)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L167)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetParent`](#setparent-2)

##### SetSoundEventName()

> **SetSoundEventName**(`soundevent_name`, `opts`): `void`

Defined in: [helper/PointSoundEvent.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundevent_name` | `string` |
| `opts` | `any` |

###### Returns

`void`

##### StartSound()

> **StartSound**(`opts`): `void`

Defined in: [helper/PointSoundEvent.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopSound()

> **StopSound**(`opts`): `void`

Defined in: [helper/PointSoundEvent.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:211](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L211)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `attacker`: `any`; `damage`: `any`; `inflictor`: `any`; `weapon`: `any`; \} |
| `__namedParameters.attacker` | `any` |
| `__namedParameters.damage` | `any` |
| `__namedParameters.inflictor` | `any` |
| `__namedParameters.weapon` | `any` |

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [helper/EntityHelper.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L139)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `abstract` `static` **Find**(`r`): [`PointSoundEvent`](#pointsoundevent) \| `null`

Defined in: [helper/PointSoundEvent.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointSoundEvent`](#pointsoundevent) \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [helper/PointSoundEvent.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L31)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`PointSoundEvent`](#pointsoundevent) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Overrides

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**\<`T`\>(`classname`, `r`): `T`[]

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**\<`T`\>(`classname`, `r`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**(`e`): [`PointSoundEvent`](#pointsoundevent) \| `null`

Defined in: [helper/PointSoundEvent.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `any` |

###### Returns

[`PointSoundEvent`](#pointsoundevent) \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`From`](#from-2)

***

### PointTemplate

Defined in: [helper/PointTemplate.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L12)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new PointTemplate**(`entity`): [`PointTemplate`](#pointtemplate)

Defined in: [helper/PointTemplate.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PointTemplate`](#pointtemplate)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireEvent()

> **FireEvent**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireEvent`](#fireevent-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser4`](#fireuser4-2)

##### ForceSpawn()

> **ForceSpawn**(`origin?`, `rotation?`): `Entity`[] \| `undefined`

Defined in: [helper/PointTemplate.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin?` | `any` |
| `rotation?` | `any` |

###### Returns

`Entity`[] \| `undefined`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L115)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L107)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L123)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L143)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L147)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L131)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L135)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:207](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L207)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L175)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L119)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L111)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L127)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L187)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L155)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L163)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L171)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L199)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L103)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:203](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L203)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:215](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L215)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**\<`T`\>(`event_name`, `callback`): `T`

Defined in: [helper/EntityHelper.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L93)

Represents EventListening of IO entities with `this.ConnectOutput`

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`T`

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:219](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L219)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L179)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L191)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L167)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:211](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L211)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `attacker`: `any`; `damage`: `any`; `inflictor`: `any`; `weapon`: `any`; \} |
| `__namedParameters.attacker` | `any` |
| `__namedParameters.damage` | `any` |
| `__namedParameters.inflictor` | `any` |
| `__namedParameters.weapon` | `any` |

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [helper/EntityHelper.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L139)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `abstract` `static` **Find**\<`T`\>(`r`): `T` \| `null`

Defined in: [helper/PointTemplate.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L23)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`PointTemplate`](#pointtemplate) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [helper/EntityHelper.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L54)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**\<`T`\>(`classname`, `r`): `T`[]

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**\<`T`\>(`classname`, `r`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**\<`T`\>(`e`): `T` \| `null`

Defined in: [helper/PointTemplate.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L19)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`PointTemplate`](#pointtemplate) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `any` |

###### Returns

`T` \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`From`](#from-2)

***

### TriggerMultiple

Defined in: [helper/TriggerMultiple.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L15)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new TriggerMultiple**(`entity`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireEvent()

> **FireEvent**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireEvent`](#fireevent-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L115)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L107)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L123)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L143)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L147)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L131)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L135)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:207](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L207)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L175)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L119)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L111)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L127)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L187)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L155)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L163)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L171)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L199)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L103)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:203](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L203)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:215](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L215)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**\<`T`\>(`event_name`, `callback`): `T`

Defined in: [helper/EntityHelper.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L93)

Represents EventListening of IO entities with `this.ConnectOutput`

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`T`

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### OnEndTouch()

> **OnEndTouch**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnEndTouchAll()

> **OnEndTouchAll**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnStartTouch()

> **OnStartTouch**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnStartTouchAll()

> **OnStartTouchAll**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:219](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L219)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L179)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L191)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L167)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:211](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L211)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `attacker`: `any`; `damage`: `any`; `inflictor`: `any`; `weapon`: `any`; \} |
| `__namedParameters.attacker` | `any` |
| `__namedParameters.damage` | `any` |
| `__namedParameters.inflictor` | `any` |
| `__namedParameters.weapon` | `any` |

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [helper/EntityHelper.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L139)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `abstract` `static` **Find**\<`T`\>(`r`): `T` \| `null`

Defined in: [helper/TriggerMultiple.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L24)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`TriggerMultiple`](#triggermultiple) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [helper/TriggerMultiple.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L28)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`TriggerMultiple`](#triggermultiple) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Overrides

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**\<`T`\>(`classname`, `r`): `T`[]

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**\<`T`\>(`classname`, `r`): `T` \| `null`

Defined in: [helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

`T` \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**\<`T`\>(`e`): `T` \| `null`

Defined in: [helper/TriggerMultiple.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L20)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`TriggerMultiple`](#triggermultiple) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `MaybeEntity` |

###### Returns

`T` \| `null`

###### Overrides

[`EntityHelper`](#entityhelper).[`From`](#from-2)

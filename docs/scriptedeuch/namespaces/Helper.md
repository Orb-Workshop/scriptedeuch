[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Helper

# Helper

Entity Helper Library

## Classes

### BaseModelEntity

Defined in: [helper/BaseModelEntity.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L14)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Extended by

- [`FuncButton`](#funcbutton)
- [`PropDynamic`](#propdynamic)

#### Constructors

##### Constructor

> **new BaseModelEntity**(`entity`): [`BaseModelEntity`](#basemodelentity)

Defined in: [helper/BaseModelEntity.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

Represents EventListening of IO entities with `this.ConnectOutput`
TODO: Use Global Events to 'latch onto' the callbacks this method represents.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

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

Defined in: [helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

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

Defined in: [helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

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

Defined in: [helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

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

Defined in: [helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [helper/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `any` |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#entityhelper)

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [helper/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `ColorType` |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [helper/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

##### SetModelScale()

> **SetModelScale**(`s`): `void`

Defined in: [helper/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

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

Defined in: [helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

Defined in: [helper/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L56)

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`BaseModelEntity`](#basemodelentity)

Defined in: [helper/BaseModelEntity.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`BaseModelEntity`](#basemodelentity)[]

Defined in: [helper/BaseModelEntity.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`BaseModelEntity`](#basemodelentity)[]

###### Overrides

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#entityhelper)[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error`): [`EntityHelper`](#entityhelper) \| `null`

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**(`e`): [`BaseModelEntity`](#basemodelentity)

Defined in: [helper/BaseModelEntity.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

***

### Color

Defined in: [helper/Color.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/Color.ts#L10)

#### Implements

- `unknown`

#### Constructors

##### Constructor

> **new Color**(`r`, `g`, `b`, `a`): [`Color`](#color)

Defined in: [helper/Color.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/Color.ts#L15)

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
| <a id="a"></a> `a` | `public` | `number` | [helper/Color.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/Color.ts#L14) |
| <a id="b"></a> `b` | `public` | `number` | [helper/Color.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/Color.ts#L13) |
| <a id="g"></a> `g` | `public` | `number` | [helper/Color.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/Color.ts#L12) |
| <a id="r"></a> `r` | `public` | `number` | [helper/Color.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/Color.ts#L11) |

#### Methods

##### From()

> `static` **From**(`__namedParameters`): [`Color`](#color)

Defined in: [helper/Color.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/Color.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `ColorType` |

###### Returns

[`Color`](#color)

***

### `abstract` EntityHelper

Defined in: [helper/EntityHelper.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L27)

#### Extended by

- [`BaseModelEntity`](#basemodelentity)
- [`EnvironmentFade`](#environmentfade)
- [`PointSoundEvent`](#pointsoundevent)
- [`PointTemplate`](#pointtemplate)
- [`TriggerMultiple`](#triggermultiple)
- [`MoveableSoundEvent`](#moveablesoundevent)

#### Constructors

##### Constructor

> **new EntityHelper**(`entity`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `any` |

###### Returns

[`EntityHelper`](#entityhelper)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

Represents EventListening of IO entities with `this.ConnectOutput`
TODO: Use Global Events to 'latch onto' the callbacks this method represents.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Math.md#qangle)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#entityhelper)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

> `abstract` `static` **Find**\<`T`\>(`r`): `T`

Defined in: [helper/EntityHelper.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L34)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

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

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#entityhelper)[]

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error`): [`EntityHelper`](#entityhelper) \| `null`

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#entityhelper) \| `null`

***

### EnvironmentFade

Defined in: [helper/EnvironmentFade.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L17)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentFade**(`entity`): [`EnvironmentFade`](#environmentfade)

Defined in: [helper/EnvironmentFade.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentFade`](#environmentfade)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

Represents EventListening of IO entities with `this.ConnectOutput`
TODO: Use Global Events to 'latch onto' the callbacks this method represents.

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

Defined in: [helper/EnvironmentFade.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

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

Defined in: [helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

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

Defined in: [helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

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

Defined in: [helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

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

Defined in: [helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#entityhelper)

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

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

Defined in: [helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

> `static` **Find**(`r`): [`EnvironmentFade`](#environmentfade)

Defined in: [helper/EnvironmentFade.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentFade`](#environmentfade)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentFade`](#environmentfade)[]

Defined in: [helper/EnvironmentFade.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentFade`](#environmentfade)[]

###### Overrides

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#entityhelper)[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error`): [`EntityHelper`](#entityhelper) \| `null`

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**(`e`): [`EnvironmentFade`](#environmentfade)

Defined in: [helper/EnvironmentFade.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentFade`](#environmentfade)

***

### FuncButton

Defined in: [helper/FuncButton.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L20)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new FuncButton**(`entity`): [`FuncButton`](#funcbutton)

Defined in: [helper/FuncButton.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`FuncButton`](#funcbutton)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`constructor`](#constructor)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

Represents EventListening of IO entities with `this.ConnectOutput`
TODO: Use Global Events to 'latch onto' the callbacks this method represents.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`ConnectOutput`](#connectoutput)

##### FireIO()

> **FireIO**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireIO`](#fireio)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser1`](#fireuser1)

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser2`](#fireuser2)

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser3`](#fireuser3)

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser4`](#fireuser4)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [helper/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `any` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Glow`](#glow)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### Lock()

> **Lock**(`opts`): `void`

Defined in: [helper/FuncButton.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`On`](#on)

##### OnPressed()

> **OnPressed**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [helper/FuncButton.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnUseLocked()

> **OnUseLocked**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [helper/FuncButton.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### Press()

> **Press**(`opts`): `void`

Defined in: [helper/FuncButton.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [helper/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `ColorType` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetColor`](#setcolor)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetEntityName`](#setentityname)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetHealth`](#sethealth)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetMaxHealth`](#setmaxhealth)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [helper/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetModel`](#setmodel)

##### SetModelScale()

> **SetModelScale**(`s`): `void`

Defined in: [helper/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetModelScale`](#setmodelscale)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetOwner`](#setowner)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetParent`](#setparent)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`BaseModelEntity`](#basemodelentity).[`TakeDamage`](#takedamage)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`BaseModelEntity`](#basemodelentity).[`Teleport`](#teleport)

##### Unglow()

> **Unglow**(): `void`

Defined in: [helper/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L56)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Unlock()

> **Unlock**(`opts`): `void`

Defined in: [helper/FuncButton.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`FuncButton`](#funcbutton)

Defined in: [helper/FuncButton.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncButton`](#funcbutton)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`Find`](#find)

##### FindAll()

> `static` **FindAll**(`r`): [`FuncButton`](#funcbutton)[]

Defined in: [helper/FuncButton.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncButton`](#funcbutton)[]

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`FindAll`](#findall)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#entityhelper)[]

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindAllByClass`](#findallbyclass)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error`): [`EntityHelper`](#entityhelper) \| `null`

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#entityhelper) \| `null`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClass`](#findbyclass)

##### From()

> `static` **From**(`e`): [`FuncButton`](#funcbutton)

Defined in: [helper/FuncButton.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`FuncButton`](#funcbutton)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`From`](#from)

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

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

Represents EventListening of IO entities with `this.ConnectOutput`
TODO: Use Global Events to 'latch onto' the callbacks this method represents.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

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

Defined in: [helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

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

Defined in: [helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

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

Defined in: [helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

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

Defined in: [helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#entityhelper)

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

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

Defined in: [helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

> `abstract` `static` **Find**\<`T`\>(`r`): `T`

Defined in: [helper/EntityHelper.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L34)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

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

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#entityhelper)[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error`): [`EntityHelper`](#entityhelper) \| `null`

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

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

Defined in: [helper/PointSoundEvent.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L17)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new PointSoundEvent**(`entity`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [helper/PointSoundEvent.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

Represents EventListening of IO entities with `this.ConnectOutput`
TODO: Use Global Events to 'latch onto' the callbacks this method represents.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

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

Defined in: [helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

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

Defined in: [helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

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

Defined in: [helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

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

Defined in: [helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#entityhelper)

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

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

Defined in: [helper/PointSoundEvent.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundevent_name` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### StartSound()

> **StartSound**(`opts`): `void`

Defined in: [helper/PointSoundEvent.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopSound()

> **StopSound**(`opts`): `void`

Defined in: [helper/PointSoundEvent.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

> `static` **Find**(`r`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [helper/PointSoundEvent.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`PointSoundEvent`](#pointsoundevent)[]

Defined in: [helper/PointSoundEvent.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)[]

###### Overrides

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#entityhelper)[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error`): [`EntityHelper`](#entityhelper) \| `null`

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**(`e`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [helper/PointSoundEvent.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

***

### PointTemplate

Defined in: [helper/PointTemplate.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L15)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new PointTemplate**(`entity`): [`PointTemplate`](#pointtemplate)

Defined in: [helper/PointTemplate.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PointTemplate`](#pointtemplate)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

Represents EventListening of IO entities with `this.ConnectOutput`
TODO: Use Global Events to 'latch onto' the callbacks this method represents.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

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

Defined in: [helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

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

Defined in: [helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

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

Defined in: [helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireUser4`](#fireuser4-2)

##### ForceSpawn()

> **ForceSpawn**(`origin?`, `rotation?`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/PointTemplate.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin?` | `any` |
| `rotation?` | `any` |

###### Returns

[`EntityHelper`](#entityhelper)[]

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#entityhelper)

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

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

Defined in: [helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

> `static` **Find**(`r`): [`PointTemplate`](#pointtemplate)

Defined in: [helper/PointTemplate.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointTemplate`](#pointtemplate)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`PointTemplate`](#pointtemplate)[]

Defined in: [helper/PointTemplate.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointTemplate`](#pointtemplate)[]

###### Overrides

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#entityhelper)[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error`): [`EntityHelper`](#entityhelper) \| `null`

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**(`e`): [`PointTemplate`](#pointtemplate)

Defined in: [helper/PointTemplate.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PointTemplate`](#pointtemplate)

***

### PropDynamic

Defined in: [helper/PropDynamic.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L18)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new PropDynamic**(`entity`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`constructor`](#constructor)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### Break()

> **Break**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

Represents EventListening of IO entities with `this.ConnectOutput`
TODO: Use Global Events to 'latch onto' the callbacks this method represents.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`ConnectOutput`](#connectoutput)

##### FireIO()

> **FireIO**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireIO`](#fireio)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser1`](#fireuser1)

##### FireUser2()

> **FireUser2**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser2`](#fireuser2)

##### FireUser3()

> **FireUser3**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser3`](#fireuser3)

##### FireUser4()

> **FireUser4**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser4`](#fireuser4)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [helper/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `any` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Glow`](#glow)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`On`](#on)

##### OnBreak()

> **OnBreak**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [helper/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `ColorType` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetColor`](#setcolor)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetEntityName`](#setentityname)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetHealth`](#sethealth)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetMaxHealth`](#setmaxhealth)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [helper/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetModel`](#setmodel)

##### SetModelScale()

> **SetModelScale**(`s`): `void`

Defined in: [helper/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetModelScale`](#setmodelscale)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetOwner`](#setowner)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetParent`](#setparent)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`BaseModelEntity`](#basemodelentity).[`TakeDamage`](#takedamage)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`BaseModelEntity`](#basemodelentity).[`Teleport`](#teleport)

##### Unglow()

> **Unglow**(): `void`

Defined in: [helper/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L56)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Find()

> `static` **Find**(`r`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`Find`](#find)

##### FindAll()

> `static` **FindAll**(`r`): [`PropDynamic`](#propdynamic)[]

Defined in: [helper/PropDynamic.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamic`](#propdynamic)[]

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`FindAll`](#findall)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#entityhelper)[]

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindAllByClass`](#findallbyclass)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error`): [`EntityHelper`](#entityhelper) \| `null`

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#entityhelper) \| `null`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClass`](#findbyclass)

##### From()

> `static` **From**(`e`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`From`](#from)

***

### TriggerMultiple

Defined in: [helper/TriggerMultiple.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L16)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new TriggerMultiple**(`entity`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

###### Overrides

[`EntityHelper`](#entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

Represents EventListening of IO entities with `this.ConnectOutput`
TODO: Use Global Events to 'latch onto' the callbacks this method represents.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts`): `void`

Defined in: [helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

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

Defined in: [helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

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

Defined in: [helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

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

Defined in: [helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

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

Defined in: [helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Kill`](#kill-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#entityhelper)

Defined in: [helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#entityhelper)

###### Inherited from

[`EntityHelper`](#entityhelper).[`On`](#on-2)

##### OnEndTouch()

> **OnEndTouch**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnEndTouchAll()

> **OnEndTouchAll**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnStartTouch()

> **OnStartTouch**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnStartTouchAll()

> **OnStartTouchAll**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

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

Defined in: [helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

> `static` **Find**(`r`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`TriggerMultiple`](#triggermultiple)[]

Defined in: [helper/TriggerMultiple.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerMultiple`](#triggermultiple)[]

###### Overrides

[`EntityHelper`](#entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#entityhelper)[]

Defined in: [helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#entityhelper)[]

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error`): [`EntityHelper`](#entityhelper) \| `null`

Defined in: [helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#entityhelper).[`FindByClass`](#findbyclass-2)

##### From()

> `static` **From**(`entity`): [`TriggerMultiple`](#triggermultiple)

Defined in: [helper/TriggerMultiple.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

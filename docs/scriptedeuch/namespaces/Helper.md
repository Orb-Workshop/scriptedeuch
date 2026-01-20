[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Helper

# Helper

Entity Helper Library

## Enumerations

### WinCondition

Defined in: [helper/InfoMapParameters.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L48)

@see: https://developer.valvesoftware.com/wiki/Info_map_parameters_(Counter-Strike_series)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="all_hostages_rescued"></a> `ALL_HOSTAGES_RESCUED` | `10` | [helper/InfoMapParameters.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L59) |
| <a id="bomb_defused"></a> `BOMB_DEFUSED` | `6` | [helper/InfoMapParameters.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L55) |
| <a id="cts_prevent_escape"></a> `CTS_PREVENT_ESCAPE` | `4` | [helper/InfoMapParameters.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L53) |
| <a id="cts_win"></a> `CTS_WIN` | `7` | [helper/InfoMapParameters.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L56) |
| <a id="draw"></a> `DRAW` | `9` | [helper/InfoMapParameters.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L58) |
| <a id="escaping_terrorists_neutralized"></a> `ESCAPING_TERRORISTS_NEUTRALIZED` | `5` | [helper/InfoMapParameters.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L54) |
| <a id="game_commencing"></a> `GAME_COMMENCING` | `15` | [helper/InfoMapParameters.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L64) |
| <a id="hostages_not_rescued"></a> `HOSTAGES_NOT_RESCUED` | `12` | [helper/InfoMapParameters.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L61) |
| <a id="target_bombed"></a> `TARGET_BOMBED` | `0` | [helper/InfoMapParameters.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L49) |
| <a id="target_saved"></a> `TARGET_SAVED` | `11` | [helper/InfoMapParameters.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L60) |
| <a id="terrorists_escaped"></a> `TERRORISTS_ESCAPED` | `3` | [helper/InfoMapParameters.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L52) |
| <a id="terrorists_not_escaped"></a> `TERRORISTS_NOT_ESCAPED` | `13` | [helper/InfoMapParameters.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L62) |
| <a id="terrorists_win"></a> `TERRORISTS_WIN` | `8` | [helper/InfoMapParameters.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L57) |
| <a id="vip_assassinated"></a> `VIP_ASSASSINATED` | `2` | [helper/InfoMapParameters.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L51) |
| <a id="vip_escaped"></a> `VIP_ESCAPED` | `1` | [helper/InfoMapParameters.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L50) |
| <a id="vip_not_escaped"></a> `VIP_NOT_ESCAPED` | `14` | [helper/InfoMapParameters.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L63) |

## Classes

### BaseModelEntity

Defined in: [helper/BaseModelEntity.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L14)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Extended by

- [`FuncBreakable`](#funcbreakable)
- [`FuncButton`](#funcbutton)

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
- [`EnvironmentHudHint`](#environmenthudhint)
- [`EnvironmentShake`](#environmentshake)
- [`GameMoney`](#gamemoney)
- [`InfoTarget`](#infotarget)
- [`InfoTeleportDestination`](#infoteleportdestination)
- [`LogicRelay`](#logicrelay)
- [`PointSoundEvent`](#pointsoundevent)
- [`PointTemplate`](#pointtemplate)
- [`TriggerMultiple`](#triggermultiple)
- [`InfoMapParameters`](#infomapparameters)
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

Defined in: [helper/EnvironmentFade.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L42)

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

### EnvironmentHudHint

Defined in: [helper/EnvironmentHudHint.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L17)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentHudHint**(`entity`): [`EnvironmentHudHint`](#environmenthudhint)

Defined in: [helper/EnvironmentHudHint.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)

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

##### HideHudHint()

> **HideHudHint**(`opts`): `void`

Defined in: [helper/EnvironmentHudHint.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

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

##### ShowHudHint()

> **ShowHudHint**(`opts`): `void`

Defined in: [helper/EnvironmentHudHint.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L42)

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

> `static` **Find**(`r`): [`EnvironmentHudHint`](#environmenthudhint)

Defined in: [helper/EnvironmentHudHint.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentHudHint`](#environmenthudhint)[]

Defined in: [helper/EnvironmentHudHint.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)[]

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

> `static` **From**(`e`): [`EnvironmentHudHint`](#environmenthudhint)

Defined in: [helper/EnvironmentHudHint.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)

***

### EnvironmentShake

Defined in: [helper/EnvironmentShake.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L17)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentShake**(`entity`): [`EnvironmentShake`](#environmentshake)

Defined in: [helper/EnvironmentShake.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentShake`](#environmentshake)

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

##### Amplitude()

> **Amplitude**(`opts`): `void`

Defined in: [helper/EnvironmentShake.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L50)

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

##### Frequency()

> **Frequency**(`opts`): `void`

Defined in: [helper/EnvironmentShake.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L54)

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

##### StartShake()

> **StartShake**(`opts`): `void`

Defined in: [helper/EnvironmentShake.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopShake()

> **StopShake**(`opts`): `void`

Defined in: [helper/EnvironmentShake.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L46)

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

> `static` **Find**(`r`): [`EnvironmentShake`](#environmentshake)

Defined in: [helper/EnvironmentShake.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentShake`](#environmentshake)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentShake`](#environmentshake)[]

Defined in: [helper/EnvironmentShake.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentShake`](#environmentshake)[]

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

> `static` **From**(`e`): [`EnvironmentShake`](#environmentshake)

Defined in: [helper/EnvironmentShake.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentShake`](#environmentshake)

***

### FuncBreakable

Defined in: [helper/FuncBreakable.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L18)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Extended by

- [`PropDynamic`](#propdynamic)
- [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

#### Constructors

##### Constructor

> **new FuncBreakable**(`entity`): [`FuncBreakable`](#funcbreakable)

Defined in: [helper/FuncBreakable.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`FuncBreakable`](#funcbreakable)

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

##### AddHealth()

> **AddHealth**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Break()

> **Break**(`opts`): `void`

Defined in: [helper/FuncBreakable.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L41)

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

> **OnBreak**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [helper/FuncBreakable.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

##### OnHealthChanged()

> **OnHealthChanged**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [helper/FuncBreakable.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

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

> **SetHealth**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`SetHealth`](#sethealth)

##### SetMass()

> **SetMass**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

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

> `static` **Find**(`r`): [`FuncBreakable`](#funcbreakable)

Defined in: [helper/FuncBreakable.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncBreakable`](#funcbreakable)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`Find`](#find)

##### FindAll()

> `static` **FindAll**(`r`): [`FuncBreakable`](#funcbreakable)[]

Defined in: [helper/FuncBreakable.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncBreakable`](#funcbreakable)[]

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

> `static` **From**(`e`): [`FuncBreakable`](#funcbreakable)

Defined in: [helper/FuncBreakable.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`FuncBreakable`](#funcbreakable)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`From`](#from)

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

### GameMoney

Defined in: [helper/GameMoney.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L19)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new GameMoney**(`entity`): [`GameMoney`](#gamemoney)

Defined in: [helper/GameMoney.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`GameMoney`](#gamemoney)

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

##### AddMoneyPlayer()

> **AddMoneyPlayer**(`opts`): `void`

Defined in: [helper/GameMoney.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### AddTeamMoneyCT()

> **AddTeamMoneyCT**(`opts`): `void`

Defined in: [helper/GameMoney.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### AddTeamMoneyTerrorist()

> **AddTeamMoneyTerrorist**(`opts`): `void`

Defined in: [helper/GameMoney.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L64)

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

##### GiveMoney()

> **GiveMoney**(`player`, `amount`): `void`

Defined in: [helper/GameMoney.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | `CSPlayerPawn` |
| `amount` | `number` |

###### Returns

`void`

##### GiveTeamMoney\_CT()

> **GiveTeamMoney\_CT**(`amount`): `void`

Defined in: [helper/GameMoney.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

###### Returns

`void`

##### GiveTeamMoney\_T()

> **GiveTeamMoney\_T**(`amount`): `void`

Defined in: [helper/GameMoney.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

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

##### OnMoneySpent()

> **OnMoneySpent**(`callback`): [`GameMoney`](#gamemoney)

Defined in: [helper/GameMoney.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`GameMoney`](#gamemoney)

##### OnMoneySpentFail()

> **OnMoneySpentFail**(`callback`): [`GameMoney`](#gamemoney)

Defined in: [helper/GameMoney.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`GameMoney`](#gamemoney)

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

##### SetMoneyAmount()

> **SetMoneyAmount**(`value`, `opts`): `void`

Defined in: [helper/GameMoney.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

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

##### SpendMoneyFromPlayer()

> **SpendMoneyFromPlayer**(`opts`): `void`

Defined in: [helper/GameMoney.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L72)

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

> `static` **Find**(`r`): [`GameMoney`](#gamemoney)

Defined in: [helper/GameMoney.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`GameMoney`](#gamemoney)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`GameMoney`](#gamemoney)[]

Defined in: [helper/GameMoney.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`GameMoney`](#gamemoney)[]

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

> `static` **From**(`e`): [`GameMoney`](#gamemoney)

Defined in: [helper/GameMoney.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`GameMoney`](#gamemoney)

***

### InfoMapParameters

Defined in: [helper/InfoMapParameters.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L17)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new InfoMapParameters**(`entity`): [`InfoMapParameters`](#infomapparameters)

Defined in: [helper/InfoMapParameters.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoMapParameters`](#infomapparameters)

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

##### FireWinCondition()

> **FireWinCondition**(`value`, `opts`): `void`

Defined in: [helper/InfoMapParameters.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`WinCondition`](#wincondition) |
| `opts` | \{ \} |

###### Returns

`void`

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

> `static` **Find**(`r`): [`InfoMapParameters`](#infomapparameters)

Defined in: [helper/InfoMapParameters.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoMapParameters`](#infomapparameters)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoMapParameters`](#infomapparameters)[]

Defined in: [helper/InfoMapParameters.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoMapParameters`](#infomapparameters)[]

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

> `static` **From**(`e`): [`InfoMapParameters`](#infomapparameters)

Defined in: [helper/InfoMapParameters.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoMapParameters`](#infomapparameters)

***

### InfoTarget

Defined in: [helper/InfoTarget.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L15)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new InfoTarget**(`entity`): [`InfoTarget`](#infotarget)

Defined in: [helper/InfoTarget.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoTarget`](#infotarget)

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

> `static` **Find**(`r`): [`InfoTarget`](#infotarget)

Defined in: [helper/InfoTarget.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTarget`](#infotarget)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoTarget`](#infotarget)[]

Defined in: [helper/InfoTarget.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTarget`](#infotarget)[]

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

> `static` **From**(`e`): [`InfoTarget`](#infotarget)

Defined in: [helper/InfoTarget.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoTarget`](#infotarget)

***

### InfoTeleportDestination

Defined in: [helper/InfoTeleportDestination.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L15)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new InfoTeleportDestination**(`entity`): [`InfoTeleportDestination`](#infoteleportdestination)

Defined in: [helper/InfoTeleportDestination.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)

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

> `static` **Find**(`r`): [`InfoTeleportDestination`](#infoteleportdestination)

Defined in: [helper/InfoTeleportDestination.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoTeleportDestination`](#infoteleportdestination)[]

Defined in: [helper/InfoTeleportDestination.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)[]

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

> `static` **From**(`e`): [`InfoTeleportDestination`](#infoteleportdestination)

Defined in: [helper/InfoTeleportDestination.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)

***

### LogicRelay

Defined in: [helper/LogicRelay.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L17)

#### Extends

- [`EntityHelper`](#entityhelper)

#### Constructors

##### Constructor

> **new LogicRelay**(`entity`): [`LogicRelay`](#logicrelay)

Defined in: [helper/LogicRelay.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`LogicRelay`](#logicrelay)

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

##### CancelPending()

> **CancelPending**(`opts`): `void`

Defined in: [helper/LogicRelay.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L56)

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

[`EntityHelper`](#entityhelper).[`ConnectOutput`](#connectoutput-2)

##### Disable()

> **Disable**(`opts`): `void`

Defined in: [helper/LogicRelay.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts`): `void`

Defined in: [helper/LogicRelay.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L40)

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

##### OnTrigger()

> **OnTrigger**(`callback`): [`LogicRelay`](#logicrelay)

Defined in: [helper/LogicRelay.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicRelay`](#logicrelay)

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

##### Toggle()

> **Toggle**(`opts`): `void`

Defined in: [helper/LogicRelay.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Trigger()

> **Trigger**(`opts`): `void`

Defined in: [helper/LogicRelay.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`LogicRelay`](#logicrelay)

Defined in: [helper/LogicRelay.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicRelay`](#logicrelay)

###### Overrides

[`EntityHelper`](#entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`LogicRelay`](#logicrelay)[]

Defined in: [helper/LogicRelay.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicRelay`](#logicrelay)[]

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

> `static` **From**(`e`): [`LogicRelay`](#logicrelay)

Defined in: [helper/LogicRelay.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`LogicRelay`](#logicrelay)

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

##### OnSoundFinished()

> **OnSoundFinished**(`callback`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [helper/PointSoundEvent.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

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

Defined in: [helper/PointSoundEvent.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundevent_name` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### StartSound()

> **StartSound**(`opts`): `void`

Defined in: [helper/PointSoundEvent.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopSound()

> **StopSound**(`opts`): `void`

Defined in: [helper/PointSoundEvent.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L49)

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

- [`FuncBreakable`](#funcbreakable)

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

[`FuncBreakable`](#funcbreakable).[`constructor`](#constructor-6)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`raw`](#raw-5)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`AddHealth`](#addhealth)

##### Break()

> **Break**(`opts`): `void`

Defined in: [helper/FuncBreakable.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Break`](#break)

##### ClearRenderAttribute()

> **ClearRenderAttribute**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L54)

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

[`FuncBreakable`](#funcbreakable).[`ConnectOutput`](#connectoutput-10)

##### Disable()

> **Disable**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableCollision()

> **DisableCollision**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableShadow()

> **DisableShadow**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L95)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableCollision()

> **EnableCollision**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableShadow()

> **EnableShadow**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L58)

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

[`FuncBreakable`](#funcbreakable).[`FireIO`](#fireio-10)

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

[`FuncBreakable`](#funcbreakable).[`FireUser1`](#fireuser1-10)

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

[`FuncBreakable`](#funcbreakable).[`FireUser2`](#fireuser2-10)

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

[`FuncBreakable`](#funcbreakable).[`FireUser3`](#fireuser3-10)

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

[`FuncBreakable`](#funcbreakable).[`FireUser4`](#fireuser4-10)

##### FollowEntity()

> **FollowEntity**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L42)

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

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsAngles`](#getabsangles-10)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsOrigin`](#getabsorigin-10)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsVelocity`](#getabsvelocity-10)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetClassName`](#getclassname-10)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEntityName`](#getentityname-10)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyeAngles`](#geteyeangles-10)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyePosition`](#geteyeposition-10)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetGroundEntity`](#getgroundentity-10)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetHealth`](#gethealth-10)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalAngles`](#getlocalangles-10)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalOrigin`](#getlocalorigin-10)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalVelocity`](#getlocalvelocity-10)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetMaxHealth`](#getmaxhealth-10)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetOwner`](#getowner-10)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetParent`](#getparent-10)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetTeamNumber`](#getteamnumber-10)

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

[`FuncBreakable`](#funcbreakable).[`Glow`](#glow-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsAlive`](#isalive-10)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsValid`](#isvalid-10)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsWorld`](#isworld-10)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Kill`](#kill-10)

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

[`FuncBreakable`](#funcbreakable).[`On`](#on-10)

##### OnAnimationBegun()

> **OnAnimationBegun**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L145)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationDone()

> **OnAnimationDone**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L149)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationLoopCycleDone()

> **OnAnimationLoopCycleDone**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L161)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationReachedEnd()

> **OnAnimationReachedEnd**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L153)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationReachedStart()

> **OnAnimationReachedStart**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L157)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnBreak()

> **OnBreak**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [helper/FuncBreakable.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`OnBreak`](#onbreak)

##### OnDestructibleHitGroupDamageLevelChanged()

> **OnDestructibleHitGroupDamageLevelChanged**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L165)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnHealthChanged()

> **OnHealthChanged**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L141)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`OnHealthChanged`](#onhealthchanged)

##### OnTakeDamage()

> **OnTakeDamage**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [helper/PropDynamic.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L137)

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

[`FuncBreakable`](#funcbreakable).[`Remove`](#remove-10)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`RemoveHealth`](#removehealth)

##### SetAnimationLooping()

> **SetAnimationLooping**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L107)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimationNoResetLooping()

> **SetAnimationNoResetLooping**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L111)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimationNoResetNotLooping()

> **SetAnimationNoResetNotLooping**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L123)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimationNotLooping()

> **SetAnimationNotLooping**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L119)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimGraphParameter()

> **SetAnimGraphParameter**(`name`, `value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetBodyGroup()

> **SetBodyGroup**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L103)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

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

[`FuncBreakable`](#funcbreakable).[`SetColor`](#setcolor-2)

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

[`FuncBreakable`](#funcbreakable).[`SetEntityName`](#setentityname-10)

##### SetHealth()

> **SetHealth**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetHealth`](#sethealth-10)

##### SetIdleAnimationLooping()

> **SetIdleAnimationLooping**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L115)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetIdleAnimationNotLooping()

> **SetIdleAnimationNotLooping**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L127)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMass()

> **SetMass**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetMass`](#setmass)

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

[`FuncBreakable`](#funcbreakable).[`SetMaxHealth`](#setmaxhealth-10)

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

[`FuncBreakable`](#funcbreakable).[`SetModel`](#setmodel-2)

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

[`FuncBreakable`](#funcbreakable).[`SetModelScale`](#setmodelscale-2)

##### SetNavIgnore()

> **SetNavIgnore**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

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

[`FuncBreakable`](#funcbreakable).[`SetOwner`](#setowner-10)

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

[`FuncBreakable`](#funcbreakable).[`SetParent`](#setparent-10)

##### SetPlaybackRate()

> **SetPlaybackRate**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L131)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetRagdollProfile()

> **SetRagdollProfile**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetRenderAttribute()

> **SetRenderAttribute**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### Skin()

> **Skin**(`value`, `opts`): `void`

Defined in: [helper/PropDynamic.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
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

[`FuncBreakable`](#funcbreakable).[`TakeDamage`](#takedamage-10)

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

[`FuncBreakable`](#funcbreakable).[`Teleport`](#teleport-10)

##### TurnOff()

> **TurnOff**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L91)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TurnOn()

> **TurnOn**(`opts`): `void`

Defined in: [helper/PropDynamic.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Unglow()

> **Unglow**(): `void`

Defined in: [helper/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L56)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Unglow`](#unglow-2)

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

[`FuncBreakable`](#funcbreakable).[`Find`](#find-10)

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

[`FuncBreakable`](#funcbreakable).[`FindAll`](#findall-10)

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

[`FuncBreakable`](#funcbreakable).[`FindAllByClass`](#findallbyclass-10)

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

[`FuncBreakable`](#funcbreakable).[`FindByClass`](#findbyclass-10)

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

[`FuncBreakable`](#funcbreakable).[`From`](#from-10)

***

### PropPhysicsMultiplayer

Defined in: [helper/PropPhysicsMultiplayer.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L18)

#### Extends

- [`FuncBreakable`](#funcbreakable)

#### Constructors

##### Constructor

> **new PropPhysicsMultiplayer**(`entity`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [helper/PropPhysicsMultiplayer.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`constructor`](#constructor-6)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`raw`](#raw-5)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`AddHealth`](#addhealth)

##### Break()

> **Break**(`opts`): `void`

Defined in: [helper/FuncBreakable.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Break`](#break)

##### ClearRenderAttribute()

> **ClearRenderAttribute**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:102](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L102)

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

[`FuncBreakable`](#funcbreakable).[`ConnectOutput`](#connectoutput-10)

##### DisableDamageForces()

> **DisableDamageForces**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableGravity()

> **DisableGravity**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableMotion()

> **DisableMotion**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableShadow()

> **DisableShadow**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableDamageForces()

> **EnableDamageForces**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableGravity()

> **EnableGravity**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableMotion()

> **EnableMotion**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableShadow()

> **EnableShadow**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L82)

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

[`FuncBreakable`](#funcbreakable).[`FireIO`](#fireio-10)

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

[`FuncBreakable`](#funcbreakable).[`FireUser1`](#fireuser1-10)

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

[`FuncBreakable`](#funcbreakable).[`FireUser2`](#fireuser2-10)

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

[`FuncBreakable`](#funcbreakable).[`FireUser3`](#fireuser3-10)

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

[`FuncBreakable`](#funcbreakable).[`FireUser4`](#fireuser4-10)

##### FollowEntity()

> **FollowEntity**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L42)

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

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsAngles`](#getabsangles-10)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsOrigin`](#getabsorigin-10)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsVelocity`](#getabsvelocity-10)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetClassName`](#getclassname-10)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEntityName`](#getentityname-10)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyeAngles`](#geteyeangles-10)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyePosition`](#geteyeposition-10)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetGroundEntity`](#getgroundentity-10)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetHealth`](#gethealth-10)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Math.md#qangle)

Defined in: [helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalAngles`](#getlocalangles-10)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalOrigin`](#getlocalorigin-10)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Math.md#vector3)

Defined in: [helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalVelocity`](#getlocalvelocity-10)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetMaxHealth`](#getmaxhealth-10)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetOwner`](#getowner-10)

##### GetParent()

> **GetParent**(): `any`

Defined in: [helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetParent`](#getparent-10)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetTeamNumber`](#getteamnumber-10)

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

[`FuncBreakable`](#funcbreakable).[`Glow`](#glow-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsAlive`](#isalive-10)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsValid`](#isvalid-10)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsWorld`](#isworld-10)

##### Kill()

> **Kill**(): `void`

Defined in: [helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Kill`](#kill-10)

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

[`FuncBreakable`](#funcbreakable).[`On`](#on-10)

##### OnAwakened()

> **OnAwakened**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [helper/PropPhysicsMultiplayer.ts:116](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L116)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnBreak()

> **OnBreak**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [helper/FuncBreakable.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`OnBreak`](#onbreak)

##### OnHealthChanged()

> **OnHealthChanged**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [helper/FuncBreakable.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`OnHealthChanged`](#onhealthchanged)

##### OnMotionEnabled()

> **OnMotionEnabled**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [helper/PropPhysicsMultiplayer.ts:108](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L108)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnOutOfWorld()

> **OnOutOfWorld**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [helper/PropPhysicsMultiplayer.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L124)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnPlayerUse()

> **OnPlayerUse**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [helper/PropPhysicsMultiplayer.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L120)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnTakeDamage()

> **OnTakeDamage**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [helper/PropPhysicsMultiplayer.ts:112](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L112)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### physdamagescale()

> **physdamagescale**(`value`, `opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L94)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Remove`](#remove-10)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`RemoveHealth`](#removehealth)

##### SetBodyGroup()

> **SetBodyGroup**(`value`, `opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:90](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L90)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

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

[`FuncBreakable`](#funcbreakable).[`SetColor`](#setcolor-2)

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

[`FuncBreakable`](#funcbreakable).[`SetEntityName`](#setentityname-10)

##### SetHealth()

> **SetHealth**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetHealth`](#sethealth-10)

##### SetMass()

> **SetMass**(`value`, `opts`): `void`

Defined in: [helper/FuncBreakable.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetMass`](#setmass)

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

[`FuncBreakable`](#funcbreakable).[`SetMaxHealth`](#setmaxhealth-10)

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

[`FuncBreakable`](#funcbreakable).[`SetModel`](#setmodel-2)

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

[`FuncBreakable`](#funcbreakable).[`SetModelScale`](#setmodelscale-2)

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

[`FuncBreakable`](#funcbreakable).[`SetOwner`](#setowner-10)

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

[`FuncBreakable`](#funcbreakable).[`SetParent`](#setparent-10)

##### SetRenderAttribute()

> **SetRenderAttribute**(`value`, `opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:98](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L98)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### Skin()

> **Skin**(`value`, `opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Sleep()

> **Sleep**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L50)

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

[`FuncBreakable`](#funcbreakable).[`TakeDamage`](#takedamage-10)

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

[`FuncBreakable`](#funcbreakable).[`Teleport`](#teleport-10)

##### Unglow()

> **Unglow**(): `void`

Defined in: [helper/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L56)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Unglow`](#unglow-2)

##### Wake()

> **Wake**(`opts`): `void`

Defined in: [helper/PropPhysicsMultiplayer.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [helper/PropPhysicsMultiplayer.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`Find`](#find-10)

##### FindAll()

> `static` **FindAll**(`r`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)[]

Defined in: [helper/PropPhysicsMultiplayer.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)[]

###### Overrides

[`FuncBreakable`](#funcbreakable).[`FindAll`](#findall-10)

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

[`FuncBreakable`](#funcbreakable).[`FindAllByClass`](#findallbyclass-10)

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

[`FuncBreakable`](#funcbreakable).[`FindByClass`](#findbyclass-10)

##### From()

> `static` **From**(`e`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [helper/PropPhysicsMultiplayer.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`From`](#from-10)

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

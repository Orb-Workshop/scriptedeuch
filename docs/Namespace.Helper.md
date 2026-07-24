# Helper

Entity Helper Library

## Enumerations

### WinCondition

Defined in: [src/helper/InfoMapParameters.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L48)

@see: https://developer.valvesoftware.com/wiki/Info_map_parameters_(Counter-Strike_series)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="enumeration-member-all_hostages_rescued"></a> `ALL_HOSTAGES_RESCUED` | `10` | [src/helper/InfoMapParameters.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L59) |
| <a id="enumeration-member-bomb_defused"></a> `BOMB_DEFUSED` | `6` | [src/helper/InfoMapParameters.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L55) |
| <a id="enumeration-member-cts_prevent_escape"></a> `CTS_PREVENT_ESCAPE` | `4` | [src/helper/InfoMapParameters.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L53) |
| <a id="enumeration-member-cts_win"></a> `CTS_WIN` | `7` | [src/helper/InfoMapParameters.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L56) |
| <a id="enumeration-member-draw"></a> `DRAW` | `9` | [src/helper/InfoMapParameters.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L58) |
| <a id="enumeration-member-escaping_terrorists_neutralized"></a> `ESCAPING_TERRORISTS_NEUTRALIZED` | `5` | [src/helper/InfoMapParameters.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L54) |
| <a id="enumeration-member-game_commencing"></a> `GAME_COMMENCING` | `15` | [src/helper/InfoMapParameters.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L64) |
| <a id="enumeration-member-hostages_not_rescued"></a> `HOSTAGES_NOT_RESCUED` | `12` | [src/helper/InfoMapParameters.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L61) |
| <a id="enumeration-member-target_bombed"></a> `TARGET_BOMBED` | `0` | [src/helper/InfoMapParameters.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L49) |
| <a id="enumeration-member-target_saved"></a> `TARGET_SAVED` | `11` | [src/helper/InfoMapParameters.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L60) |
| <a id="enumeration-member-terrorists_escaped"></a> `TERRORISTS_ESCAPED` | `3` | [src/helper/InfoMapParameters.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L52) |
| <a id="enumeration-member-terrorists_not_escaped"></a> `TERRORISTS_NOT_ESCAPED` | `13` | [src/helper/InfoMapParameters.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L62) |
| <a id="enumeration-member-terrorists_win"></a> `TERRORISTS_WIN` | `8` | [src/helper/InfoMapParameters.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L57) |
| <a id="enumeration-member-vip_assassinated"></a> `VIP_ASSASSINATED` | `2` | [src/helper/InfoMapParameters.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L51) |
| <a id="enumeration-member-vip_escaped"></a> `VIP_ESCAPED` | `1` | [src/helper/InfoMapParameters.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L50) |
| <a id="enumeration-member-vip_not_escaped"></a> `VIP_NOT_ESCAPED` | `14` | [src/helper/InfoMapParameters.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L63) |

## Classes

### BaseModelEntity

Defined in: [src/helper/BaseModelEntity.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L14)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Extended by

- [`FuncBreakable`](#funcbreakable)
- [`FuncButton`](#funcbutton)
- [`FuncMoveLinear`](#funcmovelinear)
- [`FuncTrackTrain`](#functracktrain)
- [`PathTrack`](#pathtrack)

#### Constructors

##### Constructor

> **new BaseModelEntity**(`entity`): [`BaseModelEntity`](#basemodelentity)

Defined in: [src/helper/BaseModelEntity.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetColor()

> **GetColor**(): `ColorType`

Defined in: [src/helper/BaseModelEntity.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L59)

###### Returns

`ColorType`

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L43)

###### Returns

`string`

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L51)

###### Returns

`string`

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/helper/BaseModelEntity.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `any` |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/helper/BaseModelEntity.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L71)

###### Returns

`boolean`

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/helper/BaseModelEntity.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `ColorType` |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/helper/BaseModelEntity.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

##### SetModelScale()

> **SetModelScale**(`s`): `void`

Defined in: [src/helper/BaseModelEntity.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/helper/BaseModelEntity.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L67)

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`BaseModelEntity`](#basemodelentity)

Defined in: [src/helper/BaseModelEntity.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`BaseModelEntity`](#basemodelentity)[]

Defined in: [src/helper/BaseModelEntity.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`BaseModelEntity`](#basemodelentity)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`BaseModelEntity`](#basemodelentity)

Defined in: [src/helper/BaseModelEntity.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

***

### `abstract` EntityHelper

Defined in: [src/helper/EntityHelper.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L27)

#### Extended by

- [`BaseModelEntity`](#basemodelentity)
- [`EnvironmentFade`](#environmentfade)
- [`EnvironmentHudHint`](#environmenthudhint)
- [`EnvironmentParticleGlow`](#environmentparticleglow)
- [`EnvironmentShake`](#environmentshake)
- [`GameMoney`](#gamemoney)
- [`InfoMapParameters`](#infomapparameters)
- [`InfoParticleSystem`](#infoparticlesystem)
- [`InfoParticleTarget`](#infoparticletarget)
- [`InfoTarget`](#infotarget)
- [`InfoTeleportDestination`](#infoteleportdestination)
- [`LogicCase`](#logiccase)
- [`LogicRelay`](#logicrelay)
- [`MathCounter`](#mathcounter)
- [`PointSoundEvent`](#pointsoundevent)
- [`PointTemplate`](#pointtemplate)
- [`TriggerMultiple`](#triggermultiple)
- [`TriggerTeleport`](#triggerteleport)
- [`MoveableSoundEvent`](#moveablesoundevent)

#### Constructors

##### Constructor

> **new EntityHelper**(`entity`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `any` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

Defined in: [src/helper/EntityHelper.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L34)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#abstract-entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [src/helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#abstract-entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

***

### EnvironmentFade

Defined in: [src/helper/EnvironmentFade.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentFade**(`entity`): [`EnvironmentFade`](#environmentfade)

Defined in: [src/helper/EnvironmentFade.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentFade`](#environmentfade)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### Fade()

> **Fade**(`opts?`): `void`

Defined in: [src/helper/EnvironmentFade.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`EnvironmentFade`](#environmentfade)

Defined in: [src/helper/EnvironmentFade.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentFade`](#environmentfade)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentFade`](#environmentfade)[]

Defined in: [src/helper/EnvironmentFade.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentFade`](#environmentfade)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`EnvironmentFade`](#environmentfade)

Defined in: [src/helper/EnvironmentFade.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentFade.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentFade`](#environmentfade)

***

### EnvironmentHudHint

Defined in: [src/helper/EnvironmentHudHint.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentHudHint**(`entity`): [`EnvironmentHudHint`](#environmenthudhint)

Defined in: [src/helper/EnvironmentHudHint.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### HideHudHint()

> **HideHudHint**(`opts?`): `void`

Defined in: [src/helper/EnvironmentHudHint.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### ShowHudHint()

> **ShowHudHint**(`opts?`): `void`

Defined in: [src/helper/EnvironmentHudHint.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`EnvironmentHudHint`](#environmenthudhint)

Defined in: [src/helper/EnvironmentHudHint.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentHudHint`](#environmenthudhint)[]

Defined in: [src/helper/EnvironmentHudHint.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`EnvironmentHudHint`](#environmenthudhint)

Defined in: [src/helper/EnvironmentHudHint.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentHudHint.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)

***

### EnvironmentParticleGlow

Defined in: [src/helper/EnvironmentParticleGlow.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentParticleGlow**(`entity`): [`EnvironmentParticleGlow`](#environmentparticleglow)

Defined in: [src/helper/EnvironmentParticleGlow.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentParticleGlow`](#environmentparticleglow)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### DestroyImmediately()

> **DestroyImmediately**(`opts?`): `void`

Defined in: [src/helper/EnvironmentParticleGlow.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### setalphascale()

> **setalphascale**(`opts?`): `void`

Defined in: [src/helper/EnvironmentParticleGlow.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### setcolortint()

> **setcolortint**(`opts?`): `void`

Defined in: [src/helper/EnvironmentParticleGlow.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetControlPoint()

> **SetControlPoint**(`x`, `y`, `z`, `opts?`): `void`

Defined in: [src/helper/EnvironmentParticleGlow.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### setscale()

> **setscale**(`opts?`): `void`

Defined in: [src/helper/EnvironmentParticleGlow.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Start()

> **Start**(`opts?`): `void`

Defined in: [src/helper/EnvironmentParticleGlow.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Stop()

> **Stop**(`opts?`): `void`

Defined in: [src/helper/EnvironmentParticleGlow.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopPlayEndCap()

> **StopPlayEndCap**(`opts?`): `void`

Defined in: [src/helper/EnvironmentParticleGlow.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`EnvironmentParticleGlow`](#environmentparticleglow)

Defined in: [src/helper/EnvironmentParticleGlow.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentParticleGlow`](#environmentparticleglow)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentParticleGlow`](#environmentparticleglow)[]

Defined in: [src/helper/EnvironmentParticleGlow.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentParticleGlow`](#environmentparticleglow)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`EnvironmentParticleGlow`](#environmentparticleglow)

Defined in: [src/helper/EnvironmentParticleGlow.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentParticleGlow.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentParticleGlow`](#environmentparticleglow)

***

### EnvironmentShake

Defined in: [src/helper/EnvironmentShake.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentShake**(`entity`): [`EnvironmentShake`](#environmentshake)

Defined in: [src/helper/EnvironmentShake.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentShake`](#environmentshake)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### Amplitude()

> **Amplitude**(`opts?`): `void`

Defined in: [src/helper/EnvironmentShake.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### Frequency()

> **Frequency**(`opts?`): `void`

Defined in: [src/helper/EnvironmentShake.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### StartShake()

> **StartShake**(`opts?`): `void`

Defined in: [src/helper/EnvironmentShake.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopShake()

> **StopShake**(`opts?`): `void`

Defined in: [src/helper/EnvironmentShake.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`EnvironmentShake`](#environmentshake)

Defined in: [src/helper/EnvironmentShake.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentShake`](#environmentshake)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentShake`](#environmentshake)[]

Defined in: [src/helper/EnvironmentShake.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentShake`](#environmentshake)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`EnvironmentShake`](#environmentshake)

Defined in: [src/helper/EnvironmentShake.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EnvironmentShake.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentShake`](#environmentshake)

***

### FuncBreakable

Defined in: [src/helper/FuncBreakable.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L18)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Extended by

- [`PropDynamic`](#propdynamic)
- [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

#### Constructors

##### Constructor

> **new FuncBreakable**(`entity`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/helper/FuncBreakable.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L19)

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

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Break()

> **Break**(`opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireIO`](#fireio)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser1`](#fireuser1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser2`](#fireuser2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser3`](#fireuser3)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser4`](#fireuser4)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): `ColorType`

Defined in: [src/helper/BaseModelEntity.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L59)

###### Returns

`ColorType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L43)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L51)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/helper/BaseModelEntity.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L63)

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

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/helper/BaseModelEntity.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L71)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillHierarchy`](#killhierarchy)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`On`](#on)

##### OnBreak()

> **OnBreak**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/helper/FuncBreakable.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

##### OnHealthChanged()

> **OnHealthChanged**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/helper/FuncBreakable.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/helper/BaseModelEntity.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L55)

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

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetEntityName`](#setentityname)

##### SetHealth()

> **SetHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L45)

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

> **SetMass**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [src/helper/BaseModelEntity.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L39)

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

Defined in: [src/helper/BaseModelEntity.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L47)

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

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

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

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

Defined in: [src/helper/BaseModelEntity.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L67)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Find()

> `static` **Find**(`r`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/helper/FuncBreakable.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L29)

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

Defined in: [src/helper/FuncBreakable.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncBreakable`](#funcbreakable)[]

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`FindAll`](#findall)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindAllByClass`](#findallbyclass)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClass`](#findbyclass)

##### From()

> `static` **From**(`e`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/helper/FuncBreakable.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L23)

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

Defined in: [src/helper/FuncButton.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L20)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new FuncButton**(`entity`): [`FuncButton`](#funcbutton)

Defined in: [src/helper/FuncButton.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L21)

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

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/helper/FuncButton.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/helper/FuncButton.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireIO`](#fireio)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser1`](#fireuser1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser2`](#fireuser2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser3`](#fireuser3)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser4`](#fireuser4)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): `ColorType`

Defined in: [src/helper/BaseModelEntity.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L59)

###### Returns

`ColorType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L43)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L51)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/helper/BaseModelEntity.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L63)

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

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/helper/BaseModelEntity.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L71)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillHierarchy`](#killhierarchy)

##### Lock()

> **Lock**(`opts?`): `void`

Defined in: [src/helper/FuncButton.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`On`](#on)

##### OnDamaged()

> **OnDamaged**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/helper/FuncButton.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnIn()

> **OnIn**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/helper/FuncButton.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnOut()

> **OnOut**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/helper/FuncButton.ts:90](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L90)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnPressed()

> **OnPressed**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/helper/FuncButton.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnTouching()

> **OnTouching**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/helper/FuncButton.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L94)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnUseLocked()

> **OnUseLocked**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/helper/FuncButton.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### Press()

> **Press**(`opts?`): `void`

Defined in: [src/helper/FuncButton.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### PressIn()

> **PressIn**(`opts?`): `void`

Defined in: [src/helper/FuncButton.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### PressOut()

> **PressOut**(`opts?`): `void`

Defined in: [src/helper/FuncButton.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/helper/BaseModelEntity.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L55)

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

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [src/helper/BaseModelEntity.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L39)

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

Defined in: [src/helper/BaseModelEntity.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L47)

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

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

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

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

Defined in: [src/helper/BaseModelEntity.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L67)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Unlock()

> **Unlock**(`opts?`): `void`

Defined in: [src/helper/FuncButton.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`FuncButton`](#funcbutton)

Defined in: [src/helper/FuncButton.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L31)

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

Defined in: [src/helper/FuncButton.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncButton`](#funcbutton)[]

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`FindAll`](#findall)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindAllByClass`](#findallbyclass)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClass`](#findbyclass)

##### From()

> `static` **From**(`e`): [`FuncButton`](#funcbutton)

Defined in: [src/helper/FuncButton.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncButton.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`FuncButton`](#funcbutton)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`From`](#from)

***

### FuncMoveLinear

Defined in: [src/helper/FuncMoveLinear.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L20)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new FuncMoveLinear**(`entity`): [`FuncMoveLinear`](#funcmovelinear)

Defined in: [src/helper/FuncMoveLinear.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`FuncMoveLinear`](#funcmovelinear)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`constructor`](#constructor)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### Close()

> **Close**(`opts?`): `void`

Defined in: [src/helper/FuncMoveLinear.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireIO`](#fireio)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser1`](#fireuser1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser2`](#fireuser2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser3`](#fireuser3)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser4`](#fireuser4)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): `ColorType`

Defined in: [src/helper/BaseModelEntity.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L59)

###### Returns

`ColorType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L43)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L51)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/helper/BaseModelEntity.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L63)

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

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/helper/BaseModelEntity.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L71)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillHierarchy`](#killhierarchy)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`On`](#on)

##### OnFullyClosed()

> **OnFullyClosed**(`callback`): [`FuncMoveLinear`](#funcmovelinear)

Defined in: [src/helper/FuncMoveLinear.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L81)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncMoveLinear`](#funcmovelinear)

##### OnFullyOpened()

> **OnFullyOpened**(`callback`): [`FuncMoveLinear`](#funcmovelinear)

Defined in: [src/helper/FuncMoveLinear.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L77)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncMoveLinear`](#funcmovelinear)

##### Open()

> **Open**(`opts?`): `void`

Defined in: [src/helper/FuncMoveLinear.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### ResetPosition()

> **ResetPosition**(`opts?`): `void`

Defined in: [src/helper/FuncMoveLinear.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/helper/BaseModelEntity.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L55)

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

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [src/helper/BaseModelEntity.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L39)

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

Defined in: [src/helper/BaseModelEntity.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetModelScale`](#setmodelscale)

##### SetMoveDistanceFromEnd()

> **SetMoveDistanceFromEnd**(`opts?`): `void`

Defined in: [src/helper/FuncMoveLinear.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L71)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMoveDistanceFromStart()

> **SetMoveDistanceFromStart**(`opts?`): `void`

Defined in: [src/helper/FuncMoveLinear.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetParent`](#setparent)

##### SetPosition()

> **SetPosition**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncMoveLinear.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetSpeed()

> **SetSpeed**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncMoveLinear.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

##### TeleportToTarget()

> **TeleportToTarget**(`opts?`): `void`

Defined in: [src/helper/FuncMoveLinear.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/helper/BaseModelEntity.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L67)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Find()

> `static` **Find**(`r`): [`FuncMoveLinear`](#funcmovelinear)

Defined in: [src/helper/FuncMoveLinear.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncMoveLinear`](#funcmovelinear)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`Find`](#find)

##### FindAll()

> `static` **FindAll**(`r`): [`FuncMoveLinear`](#funcmovelinear)[]

Defined in: [src/helper/FuncMoveLinear.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncMoveLinear`](#funcmovelinear)[]

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`FindAll`](#findall)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindAllByClass`](#findallbyclass)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClass`](#findbyclass)

##### From()

> `static` **From**(`e`): [`FuncMoveLinear`](#funcmovelinear)

Defined in: [src/helper/FuncMoveLinear.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncMoveLinear.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`FuncMoveLinear`](#funcmovelinear)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`From`](#from)

***

### FuncTrackTrain

Defined in: [src/helper/FuncTrackTrain.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L20)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new FuncTrackTrain**(`entity`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/helper/FuncTrackTrain.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`constructor`](#constructor)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

##### DisableShadows()

> **DisableShadows**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableShadows()

> **EnableShadows**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireIO`](#fireio)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser1`](#fireuser1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser2`](#fireuser2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser3`](#fireuser3)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser4`](#fireuser4)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): `ColorType`

Defined in: [src/helper/BaseModelEntity.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L59)

###### Returns

`ColorType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L43)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L51)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/helper/BaseModelEntity.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L63)

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

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/helper/BaseModelEntity.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L71)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillHierarchy`](#killhierarchy)

##### LockOrientation()

> **LockOrientation**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### MoveToPathNode()

> **MoveToPathNode**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L91)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`On`](#on)

##### OnArrivedAtDestinationNode()

> **OnArrivedAtDestinationNode**(`callback`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/helper/FuncTrackTrain.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L117)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

##### OnKilled()

> **OnKilled**(`callback`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/helper/FuncTrackTrain.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L121)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

##### OnNext()

> **OnNext**(`callback`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/helper/FuncTrackTrain.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L113)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

##### OnStart()

> **OnStart**(`callback`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/helper/FuncTrackTrain.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L109)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### Resume()

> **Resume**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Reverse()

> **Reverse**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/helper/BaseModelEntity.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L55)

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

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetMaxHealth`](#setmaxhealth)

##### SetMaxSpeed()

> **SetMaxSpeed**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/helper/BaseModelEntity.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L39)

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

Defined in: [src/helper/BaseModelEntity.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetModelScale`](#setmodelscale)

##### SetMoveDistanceFromEnd()

> **SetMoveDistanceFromEnd**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetParent`](#setparent)

##### SetSpeed()

> **SetSpeed**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetSpeedDir()

> **SetSpeedDir**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### StartBackward()

> **StartBackward**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StartForward()

> **StartForward**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L71)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Stop()

> **Stop**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

##### TeleportToPathNode()

> **TeleportToPathNode**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L95)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### Toggle()

> **Toggle**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/helper/BaseModelEntity.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L67)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### UnlockOrientation()

> **UnlockOrientation**(`opts?`): `void`

Defined in: [src/helper/FuncTrackTrain.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L103)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/helper/FuncTrackTrain.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`Find`](#find)

##### FindAll()

> `static` **FindAll**(`r`): [`FuncTrackTrain`](#functracktrain)[]

Defined in: [src/helper/FuncTrackTrain.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`FuncTrackTrain`](#functracktrain)[]

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`FindAll`](#findall)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindAllByClass`](#findallbyclass)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClass`](#findbyclass)

##### From()

> `static` **From**(`e`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/helper/FuncTrackTrain.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncTrackTrain.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`From`](#from)

***

### GameMoney

Defined in: [src/helper/GameMoney.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L19)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new GameMoney**(`entity`): [`GameMoney`](#gamemoney)

Defined in: [src/helper/GameMoney.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`GameMoney`](#gamemoney)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### AddMoneyPlayer()

> **AddMoneyPlayer**(`opts?`): `void`

Defined in: [src/helper/GameMoney.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### AddTeamMoneyCT()

> **AddTeamMoneyCT**(`opts?`): `void`

Defined in: [src/helper/GameMoney.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### AddTeamMoneyTerrorist()

> **AddTeamMoneyTerrorist**(`opts?`): `void`

Defined in: [src/helper/GameMoney.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### GiveMoney()

> **GiveMoney**(`player`, `amount`): `void`

Defined in: [src/helper/GameMoney.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | `CSPlayerPawn` |
| `amount` | `number` |

###### Returns

`void`

##### GiveTeamMoney\_CT()

> **GiveTeamMoney\_CT**(`amount`): `void`

Defined in: [src/helper/GameMoney.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

###### Returns

`void`

##### GiveTeamMoney\_T()

> **GiveTeamMoney\_T**(`amount`): `void`

Defined in: [src/helper/GameMoney.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### OnMoneySpent()

> **OnMoneySpent**(`callback`): [`GameMoney`](#gamemoney)

Defined in: [src/helper/GameMoney.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`GameMoney`](#gamemoney)

##### OnMoneySpentFail()

> **OnMoneySpentFail**(`callback`): [`GameMoney`](#gamemoney)

Defined in: [src/helper/GameMoney.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`GameMoney`](#gamemoney)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetMoneyAmount()

> **SetMoneyAmount**(`value`, `opts?`): `void`

Defined in: [src/helper/GameMoney.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### SpendMoneyFromPlayer()

> **SpendMoneyFromPlayer**(`opts?`): `void`

Defined in: [src/helper/GameMoney.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`GameMoney`](#gamemoney)

Defined in: [src/helper/GameMoney.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`GameMoney`](#gamemoney)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`GameMoney`](#gamemoney)[]

Defined in: [src/helper/GameMoney.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`GameMoney`](#gamemoney)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`GameMoney`](#gamemoney)

Defined in: [src/helper/GameMoney.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/GameMoney.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`GameMoney`](#gamemoney)

***

### InfoMapParameters

Defined in: [src/helper/InfoMapParameters.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoMapParameters**(`entity`): [`InfoMapParameters`](#infomapparameters)

Defined in: [src/helper/InfoMapParameters.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoMapParameters`](#infomapparameters)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### FireWinCondition()

> **FireWinCondition**(`value`, `opts?`): `void`

Defined in: [src/helper/InfoMapParameters.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`WinCondition`](#wincondition) |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`InfoMapParameters`](#infomapparameters)

Defined in: [src/helper/InfoMapParameters.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoMapParameters`](#infomapparameters)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoMapParameters`](#infomapparameters)[]

Defined in: [src/helper/InfoMapParameters.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoMapParameters`](#infomapparameters)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`InfoMapParameters`](#infomapparameters)

Defined in: [src/helper/InfoMapParameters.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoMapParameters.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoMapParameters`](#infomapparameters)

***

### InfoParticleSystem

Defined in: [src/helper/InfoParticleSystem.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoParticleSystem**(`entity`): [`InfoParticleSystem`](#infoparticlesystem)

Defined in: [src/helper/InfoParticleSystem.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoParticleSystem`](#infoparticlesystem)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### DestroyImmediately()

> **DestroyImmediately**(`opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### Freeze()

> **Freeze**(`opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetControlPoint()

> **SetControlPoint**(`x?`, `y?`, `z?`, `opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L66)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |
| `opts` | \{ \} | `{}` |

###### Returns

`void`

##### SetDataControlPointX()

> **SetDataControlPointX**(`value?`, `opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L70)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | `number` | `0` |
| `opts` | \{ \} | `{}` |

###### Returns

`void`

##### SetDataControlPointY()

> **SetDataControlPointY**(`value?`, `opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L74)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | `number` | `0` |
| `opts` | \{ \} | `{}` |

###### Returns

`void`

##### SetDataControlPointZ()

> **SetDataControlPointZ**(`value?`, `opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L78)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | `number` | `0` |
| `opts` | \{ \} | `{}` |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### Start()

> **Start**(`opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Stop()

> **Stop**(`opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopPlayEndCap()

> **StopPlayEndCap**(`opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Thaw()

> **Thaw**(`opts?`): `void`

Defined in: [src/helper/InfoParticleSystem.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`InfoParticleSystem`](#infoparticlesystem)

Defined in: [src/helper/InfoParticleSystem.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoParticleSystem`](#infoparticlesystem)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoParticleSystem`](#infoparticlesystem)[]

Defined in: [src/helper/InfoParticleSystem.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoParticleSystem`](#infoparticlesystem)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`InfoParticleSystem`](#infoparticlesystem)

Defined in: [src/helper/InfoParticleSystem.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleSystem.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoParticleSystem`](#infoparticlesystem)

***

### InfoParticleTarget

Defined in: [src/helper/InfoParticleTarget.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleTarget.ts#L15)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoParticleTarget**(`entity`): [`InfoParticleTarget`](#infoparticletarget)

Defined in: [src/helper/InfoParticleTarget.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleTarget.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoParticleTarget`](#infoparticletarget)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`InfoParticleTarget`](#infoparticletarget)

Defined in: [src/helper/InfoParticleTarget.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleTarget.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoParticleTarget`](#infoparticletarget)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoParticleTarget`](#infoparticletarget)[]

Defined in: [src/helper/InfoParticleTarget.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleTarget.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoParticleTarget`](#infoparticletarget)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`InfoParticleTarget`](#infoparticletarget)

Defined in: [src/helper/InfoParticleTarget.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoParticleTarget.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoParticleTarget`](#infoparticletarget)

***

### InfoTarget

Defined in: [src/helper/InfoTarget.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L15)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoTarget**(`entity`): [`InfoTarget`](#infotarget)

Defined in: [src/helper/InfoTarget.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoTarget`](#infotarget)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`InfoTarget`](#infotarget)

Defined in: [src/helper/InfoTarget.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTarget`](#infotarget)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoTarget`](#infotarget)[]

Defined in: [src/helper/InfoTarget.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTarget`](#infotarget)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`InfoTarget`](#infotarget)

Defined in: [src/helper/InfoTarget.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTarget.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoTarget`](#infotarget)

***

### InfoTeleportDestination

Defined in: [src/helper/InfoTeleportDestination.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L15)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoTeleportDestination**(`entity`): [`InfoTeleportDestination`](#infoteleportdestination)

Defined in: [src/helper/InfoTeleportDestination.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`InfoTeleportDestination`](#infoteleportdestination)

Defined in: [src/helper/InfoTeleportDestination.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoTeleportDestination`](#infoteleportdestination)[]

Defined in: [src/helper/InfoTeleportDestination.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`InfoTeleportDestination`](#infoteleportdestination)

Defined in: [src/helper/InfoTeleportDestination.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/InfoTeleportDestination.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)

***

### LogicCase

Defined in: [src/helper/LogicCase.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new LogicCase**(`entity`): [`LogicCase`](#logiccase)

Defined in: [src/helper/LogicCase.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`LogicCase`](#logiccase)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### InValue()

> **InValue**(`value`, `opts?`): `void`

Defined in: [src/helper/LogicCase.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### OnCase()

> **OnCase**(`case_number`, `callback`): [`LogicCase`](#logiccase)

Defined in: [src/helper/LogicCase.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `case_number` | `number` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicCase`](#logiccase)

##### OnDefault()

> **OnDefault**(`callback`): [`LogicCase`](#logiccase)

Defined in: [src/helper/LogicCase.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicCase`](#logiccase)

##### OnKilled()

> **OnKilled**(`callback`): [`LogicCase`](#logiccase)

Defined in: [src/helper/LogicCase.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicCase`](#logiccase)

##### PickRandom()

> **PickRandom**(`opts?`): `void`

Defined in: [src/helper/LogicCase.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### PickRandomShuffle()

> **PickRandomShuffle**(`opts?`): `void`

Defined in: [src/helper/LogicCase.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### ResetShuffle()

> **ResetShuffle**(`opts?`): `void`

Defined in: [src/helper/LogicCase.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`LogicCase`](#logiccase)

Defined in: [src/helper/LogicCase.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicCase`](#logiccase)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`LogicCase`](#logiccase)[]

Defined in: [src/helper/LogicCase.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicCase`](#logiccase)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`LogicCase`](#logiccase)

Defined in: [src/helper/LogicCase.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicCase.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`LogicCase`](#logiccase)

***

### LogicRelay

Defined in: [src/helper/LogicRelay.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new LogicRelay**(`entity`): [`LogicRelay`](#logicrelay)

Defined in: [src/helper/LogicRelay.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`LogicRelay`](#logicrelay)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### CancelPending()

> **CancelPending**(`opts?`): `void`

Defined in: [src/helper/LogicRelay.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/helper/LogicRelay.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/helper/LogicRelay.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### OnKilled()

> **OnKilled**(`callback`): [`LogicRelay`](#logicrelay)

Defined in: [src/helper/LogicRelay.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicRelay`](#logicrelay)

##### OnSpawn()

> **OnSpawn**(`callback`): [`LogicRelay`](#logicrelay)

Defined in: [src/helper/LogicRelay.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicRelay`](#logicrelay)

##### OnTrigger()

> **OnTrigger**(`callback`): [`LogicRelay`](#logicrelay)

Defined in: [src/helper/LogicRelay.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicRelay`](#logicrelay)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Toggle()

> **Toggle**(`opts?`): `void`

Defined in: [src/helper/LogicRelay.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Trigger()

> **Trigger**(`opts?`): `void`

Defined in: [src/helper/LogicRelay.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`LogicRelay`](#logicrelay)

Defined in: [src/helper/LogicRelay.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicRelay`](#logicrelay)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`LogicRelay`](#logicrelay)[]

Defined in: [src/helper/LogicRelay.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicRelay`](#logicrelay)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`LogicRelay`](#logicrelay)

Defined in: [src/helper/LogicRelay.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/LogicRelay.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`LogicRelay`](#logicrelay)

***

### MathCounter

Defined in: [src/helper/MathCounter.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new MathCounter**(`entity`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`MathCounter`](#mathcounter)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### Add()

> **Add**(`value`, `opts?`): `void`

Defined in: [src/helper/MathCounter.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/helper/MathCounter.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Divide()

> **Divide**(`value`, `opts?`): `void`

Defined in: [src/helper/MathCounter.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/helper/MathCounter.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### GetValue()

> **GetValue**(`opts?`): `void`

Defined in: [src/helper/MathCounter.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### Multiply()

> **Multiply**(`value`, `opts?`): `void`

Defined in: [src/helper/MathCounter.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### OnChangedFromMax()

> **OnChangedFromMax**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:106](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L106)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnChangedFromMin()

> **OnChangedFromMin**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:102](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L102)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnGetValue()

> **OnGetValue**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnHitMax()

> **OnHitMax**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:98](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L98)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnHitMin()

> **OnHitMin**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L94)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnKilled()

> **OnKilled**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OutValue()

> **OutValue**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:90](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L90)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetHitMax()

> **SetHitMax**(`value`, `opts?`): `void`

Defined in: [src/helper/MathCounter.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetHitMin()

> **SetHitMin**(`value`, `opts?`): `void`

Defined in: [src/helper/MathCounter.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### SetValue()

> **SetValue**(`value`, `opts?`): `void`

Defined in: [src/helper/MathCounter.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetValueNoFire()

> **SetValueNoFire**(`value`, `opts?`): `void`

Defined in: [src/helper/MathCounter.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Subtract()

> **Subtract**(`value`, `opts?`): `void`

Defined in: [src/helper/MathCounter.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`MathCounter`](#mathcounter)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`MathCounter`](#mathcounter)[]

Defined in: [src/helper/MathCounter.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`MathCounter`](#mathcounter)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`MathCounter`](#mathcounter)

Defined in: [src/helper/MathCounter.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MathCounter.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`MathCounter`](#mathcounter)

***

### MoveableSoundEvent

Defined in: [src/helper/MoveableSoundEvent.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L8)

Wraps the sound event template.

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new MoveableSoundEvent**(`empty_prop_dynamic_entity`, `sound_event_entity`): [`MoveableSoundEvent`](#moveablesoundevent)

Defined in: [src/helper/MoveableSoundEvent.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `empty_prop_dynamic_entity` | `Entity` |
| `sound_event_entity` | `Entity` |

###### Returns

[`MoveableSoundEvent`](#moveablesoundevent)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### SetSoundEventName()

> **SetSoundEventName**(`soundevent_name`, `opts`): `void`

Defined in: [src/helper/MoveableSoundEvent.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundevent_name` | `string` |
| `opts` | `any` |

###### Returns

`void`

##### StartSound()

> **StartSound**(`opts`): `void`

Defined in: [src/helper/MoveableSoundEvent.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

`void`

##### StopSound()

> **StopSound**(`opts`): `void`

Defined in: [src/helper/MoveableSoundEvent.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `abstract` `static` **Find**\<`T`\>(`r`): `T`

Defined in: [src/helper/EntityHelper.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L34)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#abstract-entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [src/helper/EntityHelper.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L39)

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`EntityHelper`](#abstract-entityhelper) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

`T`[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### Spawn()

> `static` **Spawn**(`soundevent_name`, `position?`): [`MoveableSoundEvent`](#moveablesoundevent)

Defined in: [src/helper/MoveableSoundEvent.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/MoveableSoundEvent.ts#L15)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `soundevent_name` | `any` | `undefined` |
| `position` | `any` | `Math.Vector3.Zero` |

###### Returns

[`MoveableSoundEvent`](#moveablesoundevent)

***

### PathTrack

Defined in: [src/helper/PathTrack.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L20)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new PathTrack**(`entity`): [`PathTrack`](#pathtrack)

Defined in: [src/helper/PathTrack.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PathTrack`](#pathtrack)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`constructor`](#constructor)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

##### DisableAlternatePath()

> **DisableAlternatePath**(`opts?`): `void`

Defined in: [src/helper/PathTrack.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisablePath()

> **DisablePath**(`opts?`): `void`

Defined in: [src/helper/PathTrack.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableAlternatePath()

> **EnableAlternatePath**(`opts?`): `void`

Defined in: [src/helper/PathTrack.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnablePath()

> **EnablePath**(`opts?`): `void`

Defined in: [src/helper/PathTrack.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireIO`](#fireio)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser1`](#fireuser1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser2`](#fireuser2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser3`](#fireuser3)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FireUser4`](#fireuser4)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): `ColorType`

Defined in: [src/helper/BaseModelEntity.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L59)

###### Returns

`ColorType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L43)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L51)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/helper/BaseModelEntity.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L63)

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

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/helper/BaseModelEntity.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L71)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillHierarchy`](#killhierarchy)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`On`](#on)

##### OnPass()

> **OnPass**(`callback`): [`PathTrack`](#pathtrack)

Defined in: [src/helper/PathTrack.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PathTrack`](#pathtrack)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/helper/BaseModelEntity.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L55)

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

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

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

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

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

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

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

Defined in: [src/helper/BaseModelEntity.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L39)

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

Defined in: [src/helper/BaseModelEntity.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L47)

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

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

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

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

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

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

##### ToggleAlternatePath()

> **ToggleAlternatePath**(`opts?`): `void`

Defined in: [src/helper/PathTrack.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TogglePath()

> **TogglePath**(`opts?`): `void`

Defined in: [src/helper/PathTrack.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/helper/BaseModelEntity.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L67)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Find()

> `static` **Find**(`r`): [`PathTrack`](#pathtrack)

Defined in: [src/helper/PathTrack.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PathTrack`](#pathtrack)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`Find`](#find)

##### FindAll()

> `static` **FindAll**(`r`): [`PathTrack`](#pathtrack)[]

Defined in: [src/helper/PathTrack.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PathTrack`](#pathtrack)[]

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`FindAll`](#findall)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindAllByClass`](#findallbyclass)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClass`](#findbyclass)

##### From()

> `static` **From**(`e`): [`PathTrack`](#pathtrack)

Defined in: [src/helper/PathTrack.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PathTrack.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PathTrack`](#pathtrack)

###### Overrides

[`BaseModelEntity`](#basemodelentity).[`From`](#from)

***

### PointSoundEvent

Defined in: [src/helper/PointSoundEvent.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L17)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new PointSoundEvent**(`entity`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [src/helper/PointSoundEvent.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### OnSoundFinished()

> **OnSoundFinished**(`callback`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [src/helper/PointSoundEvent.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### SetSoundEventName()

> **SetSoundEventName**(`soundevent_name`, `opts?`): `void`

Defined in: [src/helper/PointSoundEvent.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundevent_name` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### StartSound()

> **StartSound**(`opts?`): `void`

Defined in: [src/helper/PointSoundEvent.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopSound()

> **StopSound**(`opts?`): `void`

Defined in: [src/helper/PointSoundEvent.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [src/helper/PointSoundEvent.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`PointSoundEvent`](#pointsoundevent)[]

Defined in: [src/helper/PointSoundEvent.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [src/helper/PointSoundEvent.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointSoundEvent.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

***

### PointTemplate

Defined in: [src/helper/PointTemplate.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L15)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new PointTemplate**(`entity`): [`PointTemplate`](#pointtemplate)

Defined in: [src/helper/PointTemplate.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PointTemplate`](#pointtemplate)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### ForceSpawn()

> **ForceSpawn**(`origin?`, `rotation?`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/PointTemplate.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin?` | `any` |
| `rotation?` | `any` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Find()

> `static` **Find**(`r`): [`PointTemplate`](#pointtemplate)

Defined in: [src/helper/PointTemplate.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointTemplate`](#pointtemplate)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`PointTemplate`](#pointtemplate)[]

Defined in: [src/helper/PointTemplate.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointTemplate`](#pointtemplate)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`e`): [`PointTemplate`](#pointtemplate)

Defined in: [src/helper/PointTemplate.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PointTemplate.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PointTemplate`](#pointtemplate)

***

### PropDynamic

Defined in: [src/helper/PropDynamic.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L18)

#### Extends

- [`FuncBreakable`](#funcbreakable)

#### Extended by

- [`PropDynamicOrnament`](#propdynamicornament)

#### Constructors

##### Constructor

> **new PropDynamic**(`entity`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L19)

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

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`raw`](#raw-6)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L49)

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

> **Break**(`opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Break`](#break)

##### ClearRenderAttribute()

> **ClearRenderAttribute**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`FuncBreakable`](#funcbreakable).[`ConnectOutput`](#connectoutput-6)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableCollision()

> **DisableCollision**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableShadow()

> **DisableShadow**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L95)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableCollision()

> **EnableCollision**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableShadow()

> **EnableShadow**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireIO`](#fireio-6)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser1`](#fireuser1-6)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser2`](#fireuser2-6)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser3`](#fireuser3-6)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser4`](#fireuser4-6)

##### FollowEntity()

> **FollowEntity**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsAngles`](#getabsangles-6)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsOrigin`](#getabsorigin-6)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsVelocity`](#getabsvelocity-6)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetClassName`](#getclassname-6)

##### GetColor()

> **GetColor**(): `ColorType`

Defined in: [src/helper/BaseModelEntity.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L59)

###### Returns

`ColorType`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetColor`](#getcolor-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEntityName`](#getentityname-6)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyeAngles`](#geteyeangles-6)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyePosition`](#geteyeposition-6)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetGroundEntity`](#getgroundentity-6)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetHealth`](#gethealth-6)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalAngles`](#getlocalangles-6)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalOrigin`](#getlocalorigin-6)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalVelocity`](#getlocalvelocity-6)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetMaxHealth`](#getmaxhealth-6)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L43)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetModelName`](#getmodelname-1)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L51)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetModelScale`](#getmodelscale-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetOwner`](#getowner-6)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetParent`](#getparent-6)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetTeamNumber`](#getteamnumber-6)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/helper/BaseModelEntity.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `any` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Glow`](#glow-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsAlive`](#isalive-6)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/helper/BaseModelEntity.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L71)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsGlowing`](#isglowing-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsValid`](#isvalid-6)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsWorld`](#isworld-6)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Kill`](#kill-6)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`KillAll`](#killall-6)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`KillHierarchy`](#killhierarchy-6)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`On`](#on-6)

##### OnAnimationBegun()

> **OnAnimationBegun**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L145)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationDone()

> **OnAnimationDone**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L149)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationLoopCycleDone()

> **OnAnimationLoopCycleDone**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L161)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationReachedEnd()

> **OnAnimationReachedEnd**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L153)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationReachedStart()

> **OnAnimationReachedStart**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L157)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnBreak()

> **OnBreak**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/helper/FuncBreakable.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L62)

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

Defined in: [src/helper/PropDynamic.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L165)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnHealthChanged()

> **OnHealthChanged**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L141)

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

Defined in: [src/helper/PropDynamic.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L137)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Remove`](#remove-6)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L53)

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

> **SetAnimationLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L107)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimationNoResetLooping()

> **SetAnimationNoResetLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L111)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimationNoResetNotLooping()

> **SetAnimationNoResetNotLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L123)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimationNotLooping()

> **SetAnimationNotLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L119)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimGraphParameter()

> **SetAnimGraphParameter**(`name`, `value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetBodyGroup()

> **SetBodyGroup**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L103)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/helper/BaseModelEntity.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `ColorType` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetColor`](#setcolor-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetEntityName`](#setentityname-6)

##### SetHealth()

> **SetHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetHealth`](#sethealth-6)

##### SetIdleAnimationLooping()

> **SetIdleAnimationLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L115)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetIdleAnimationNotLooping()

> **SetIdleAnimationNotLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L127)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMass()

> **SetMass**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L57)

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

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetMaxHealth`](#setmaxhealth-6)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/helper/BaseModelEntity.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetModel`](#setmodel-1)

##### SetModelScale()

> **SetModelScale**(`s`): `void`

Defined in: [src/helper/BaseModelEntity.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetModelScale`](#setmodelscale-1)

##### SetNavIgnore()

> **SetNavIgnore**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetOwner`](#setowner-6)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetParent`](#setparent-6)

##### SetPlaybackRate()

> **SetPlaybackRate**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L131)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetRagdollProfile()

> **SetRagdollProfile**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetRenderAttribute()

> **SetRenderAttribute**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### Skin()

> **Skin**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`FuncBreakable`](#funcbreakable).[`TakeDamage`](#takedamage-6)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`FuncBreakable`](#funcbreakable).[`Teleport`](#teleport-6)

##### TurnOff()

> **TurnOff**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L91)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TurnOn()

> **TurnOn**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/helper/BaseModelEntity.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L67)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Unglow`](#unglow-1)

##### Find()

> `static` **Find**(`r`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`Find`](#find-6)

##### FindAll()

> `static` **FindAll**(`r`): [`PropDynamic`](#propdynamic)[]

Defined in: [src/helper/PropDynamic.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamic`](#propdynamic)[]

###### Overrides

[`FuncBreakable`](#funcbreakable).[`FindAll`](#findall-6)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindAllByClass`](#findallbyclass-6)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindByClass`](#findbyclass-6)

##### From()

> `static` **From**(`e`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`From`](#from-5)

***

### PropDynamicOrnament

Defined in: [src/helper/PropDynamicOrnament.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamicOrnament.ts#L17)

#### Extends

- [`PropDynamic`](#propdynamic)

#### Constructors

##### Constructor

> **new PropDynamicOrnament**(`entity`): [`PropDynamicOrnament`](#propdynamicornament)

Defined in: [src/helper/PropDynamicOrnament.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamicOrnament.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PropDynamicOrnament`](#propdynamicornament)

###### Overrides

[`PropDynamic`](#propdynamic).[`constructor`](#constructor-23)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`PropDynamic`](#propdynamic).[`raw`](#raw-23)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`AddHealth`](#addhealth-1)

##### Break()

> **Break**(`opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Break`](#break-1)

##### ClearRenderAttribute()

> **ClearRenderAttribute**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`ClearRenderAttribute`](#clearrenderattribute)

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`PropDynamic`](#propdynamic).[`ConnectOutput`](#connectoutput-23)

##### Detached()

> **Detached**(`opts?`): `void`

Defined in: [src/helper/PropDynamicOrnament.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamicOrnament.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Disable`](#disable-3)

##### DisableCollision()

> **DisableCollision**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`DisableCollision`](#disablecollision)

##### DisableShadow()

> **DisableShadow**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`DisableShadow`](#disableshadow)

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L95)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Enable`](#enable-3)

##### EnableCollision()

> **EnableCollision**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`EnableCollision`](#enablecollision)

##### EnableShadow()

> **EnableShadow**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`EnableShadow`](#enableshadow)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireIO`](#fireio-23)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireUser1`](#fireuser1-23)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireUser2`](#fireuser2-23)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireUser3`](#fireuser3-23)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireUser4`](#fireuser4-23)

##### FollowEntity()

> **FollowEntity**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FollowEntity`](#followentity)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetAbsAngles`](#getabsangles-23)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetAbsOrigin`](#getabsorigin-23)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetAbsVelocity`](#getabsvelocity-23)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetClassName`](#getclassname-23)

##### GetColor()

> **GetColor**(): `ColorType`

Defined in: [src/helper/BaseModelEntity.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L59)

###### Returns

`ColorType`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetColor`](#getcolor-6)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetEntityName`](#getentityname-23)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetEyeAngles`](#geteyeangles-23)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetEyePosition`](#geteyeposition-23)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetGroundEntity`](#getgroundentity-23)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetHealth`](#gethealth-23)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetLocalAngles`](#getlocalangles-23)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetLocalOrigin`](#getlocalorigin-23)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetLocalVelocity`](#getlocalvelocity-23)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetMaxHealth`](#getmaxhealth-23)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L43)

###### Returns

`string`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetModelName`](#getmodelname-6)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L51)

###### Returns

`string`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetModelScale`](#getmodelscale-6)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetOwner`](#getowner-23)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetParent`](#getparent-23)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetTeamNumber`](#getteamnumber-23)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/helper/BaseModelEntity.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `any` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Glow`](#glow-6)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`PropDynamic`](#propdynamic).[`IsAlive`](#isalive-23)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/helper/BaseModelEntity.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L71)

###### Returns

`boolean`

###### Inherited from

[`PropDynamic`](#propdynamic).[`IsGlowing`](#isglowing-6)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`PropDynamic`](#propdynamic).[`IsValid`](#isvalid-23)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`PropDynamic`](#propdynamic).[`IsWorld`](#isworld-23)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Kill`](#kill-23)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`KillAll`](#killall-23)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`KillHierarchy`](#killhierarchy-23)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`PropDynamic`](#propdynamic).[`On`](#on-23)

##### OnAnimationBegun()

> **OnAnimationBegun**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L145)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Inherited from

[`PropDynamic`](#propdynamic).[`OnAnimationBegun`](#onanimationbegun)

##### OnAnimationDone()

> **OnAnimationDone**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L149)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Inherited from

[`PropDynamic`](#propdynamic).[`OnAnimationDone`](#onanimationdone)

##### OnAnimationLoopCycleDone()

> **OnAnimationLoopCycleDone**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L161)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Inherited from

[`PropDynamic`](#propdynamic).[`OnAnimationLoopCycleDone`](#onanimationloopcycledone)

##### OnAnimationReachedEnd()

> **OnAnimationReachedEnd**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L153)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Inherited from

[`PropDynamic`](#propdynamic).[`OnAnimationReachedEnd`](#onanimationreachedend)

##### OnAnimationReachedStart()

> **OnAnimationReachedStart**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L157)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Inherited from

[`PropDynamic`](#propdynamic).[`OnAnimationReachedStart`](#onanimationreachedstart)

##### OnBreak()

> **OnBreak**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/helper/FuncBreakable.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

###### Inherited from

[`PropDynamic`](#propdynamic).[`OnBreak`](#onbreak-1)

##### OnDestructibleHitGroupDamageLevelChanged()

> **OnDestructibleHitGroupDamageLevelChanged**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L165)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Inherited from

[`PropDynamic`](#propdynamic).[`OnDestructibleHitGroupDamageLevelChanged`](#ondestructiblehitgroupdamagelevelchanged)

##### OnHealthChanged()

> **OnHealthChanged**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L141)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Inherited from

[`PropDynamic`](#propdynamic).[`OnHealthChanged`](#onhealthchanged-1)

##### OnTakeDamage()

> **OnTakeDamage**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/helper/PropDynamic.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L137)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Inherited from

[`PropDynamic`](#propdynamic).[`OnTakeDamage`](#ontakedamage)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Remove`](#remove-23)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`RemoveHealth`](#removehealth-1)

##### SetAnimationLooping()

> **SetAnimationLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L107)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetAnimationLooping`](#setanimationlooping)

##### SetAnimationNoResetLooping()

> **SetAnimationNoResetLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L111)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetAnimationNoResetLooping`](#setanimationnoresetlooping)

##### SetAnimationNoResetNotLooping()

> **SetAnimationNoResetNotLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L123)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetAnimationNoResetNotLooping`](#setanimationnoresetnotlooping)

##### SetAnimationNotLooping()

> **SetAnimationNotLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L119)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetAnimationNotLooping`](#setanimationnotlooping)

##### SetAnimGraphParameter()

> **SetAnimGraphParameter**(`name`, `value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetAnimGraphParameter`](#setanimgraphparameter)

##### SetAttached()

> **SetAttached**(`opts?`): `void`

Defined in: [src/helper/PropDynamicOrnament.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamicOrnament.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetBodyGroup()

> **SetBodyGroup**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L103)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetBodyGroup`](#setbodygroup)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/helper/BaseModelEntity.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `ColorType` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetColor`](#setcolor-6)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetEntityName`](#setentityname-23)

##### SetHealth()

> **SetHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetHealth`](#sethealth-23)

##### SetIdleAnimationLooping()

> **SetIdleAnimationLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L115)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetIdleAnimationLooping`](#setidleanimationlooping)

##### SetIdleAnimationNotLooping()

> **SetIdleAnimationNotLooping**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L127)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetIdleAnimationNotLooping`](#setidleanimationnotlooping)

##### SetMass()

> **SetMass**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetMass`](#setmass-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetMaxHealth`](#setmaxhealth-23)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/helper/BaseModelEntity.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetModel`](#setmodel-6)

##### SetModelScale()

> **SetModelScale**(`s`): `void`

Defined in: [src/helper/BaseModelEntity.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetModelScale`](#setmodelscale-6)

##### SetNavIgnore()

> **SetNavIgnore**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetNavIgnore`](#setnavignore)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetOwner`](#setowner-23)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetParent`](#setparent-23)

##### SetPlaybackRate()

> **SetPlaybackRate**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L131)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetPlaybackRate`](#setplaybackrate)

##### SetRagdollProfile()

> **SetRagdollProfile**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetRagdollProfile`](#setragdollprofile)

##### SetRenderAttribute()

> **SetRenderAttribute**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetRenderAttribute`](#setrenderattribute)

##### Skin()

> **Skin**(`value`, `opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Skin`](#skin)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`PropDynamic`](#propdynamic).[`TakeDamage`](#takedamage-23)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`PropDynamic`](#propdynamic).[`Teleport`](#teleport-23)

##### TurnOff()

> **TurnOff**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L91)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`TurnOff`](#turnoff)

##### TurnOn()

> **TurnOn**(`opts?`): `void`

Defined in: [src/helper/PropDynamic.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamic.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`TurnOn`](#turnon)

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/helper/BaseModelEntity.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L67)

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Unglow`](#unglow-6)

##### Find()

> `static` **Find**(`r`): [`PropDynamicOrnament`](#propdynamicornament)

Defined in: [src/helper/PropDynamicOrnament.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamicOrnament.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamicOrnament`](#propdynamicornament)

###### Overrides

[`PropDynamic`](#propdynamic).[`Find`](#find-23)

##### FindAll()

> `static` **FindAll**(`r`): [`PropDynamicOrnament`](#propdynamicornament)[]

Defined in: [src/helper/PropDynamicOrnament.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamicOrnament.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamicOrnament`](#propdynamicornament)[]

###### Overrides

[`PropDynamic`](#propdynamic).[`FindAll`](#findall-23)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`PropDynamic`](#propdynamic).[`FindAllByClass`](#findallbyclass-23)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FindByClass`](#findbyclass-23)

##### From()

> `static` **From**(`e`): [`PropDynamicOrnament`](#propdynamicornament)

Defined in: [src/helper/PropDynamicOrnament.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropDynamicOrnament.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PropDynamicOrnament`](#propdynamicornament)

###### Overrides

[`PropDynamic`](#propdynamic).[`From`](#from-21)

***

### PropPhysicsMultiplayer

Defined in: [src/helper/PropPhysicsMultiplayer.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L18)

#### Extends

- [`FuncBreakable`](#funcbreakable)

#### Constructors

##### Constructor

> **new PropPhysicsMultiplayer**(`entity`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/helper/PropPhysicsMultiplayer.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L19)

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

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`raw`](#raw-6)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L49)

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

> **Break**(`opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Break`](#break)

##### ClearRenderAttribute()

> **ClearRenderAttribute**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:102](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L102)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`FuncBreakable`](#funcbreakable).[`ConnectOutput`](#connectoutput-6)

##### DisableDamageForces()

> **DisableDamageForces**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableGravity()

> **DisableGravity**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableMotion()

> **DisableMotion**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableShadow()

> **DisableShadow**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableDamageForces()

> **EnableDamageForces**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableGravity()

> **EnableGravity**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableMotion()

> **EnableMotion**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableShadow()

> **EnableShadow**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireIO`](#fireio-6)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser1`](#fireuser1-6)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser2`](#fireuser2-6)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser3`](#fireuser3-6)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser4`](#fireuser4-6)

##### FollowEntity()

> **FollowEntity**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsAngles`](#getabsangles-6)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsOrigin`](#getabsorigin-6)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsVelocity`](#getabsvelocity-6)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetClassName`](#getclassname-6)

##### GetColor()

> **GetColor**(): `ColorType`

Defined in: [src/helper/BaseModelEntity.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L59)

###### Returns

`ColorType`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetColor`](#getcolor-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEntityName`](#getentityname-6)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyeAngles`](#geteyeangles-6)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyePosition`](#geteyeposition-6)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetGroundEntity`](#getgroundentity-6)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetHealth`](#gethealth-6)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalAngles`](#getlocalangles-6)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalOrigin`](#getlocalorigin-6)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalVelocity`](#getlocalvelocity-6)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetMaxHealth`](#getmaxhealth-6)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L43)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetModelName`](#getmodelname-1)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/helper/BaseModelEntity.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L51)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetModelScale`](#getmodelscale-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetOwner`](#getowner-6)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetParent`](#getparent-6)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetTeamNumber`](#getteamnumber-6)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/helper/BaseModelEntity.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `any` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Glow`](#glow-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsAlive`](#isalive-6)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/helper/BaseModelEntity.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L71)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsGlowing`](#isglowing-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsValid`](#isvalid-6)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsWorld`](#isworld-6)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Kill`](#kill-6)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`KillAll`](#killall-6)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`KillHierarchy`](#killhierarchy-6)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`On`](#on-6)

##### OnAwakened()

> **OnAwakened**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/helper/PropPhysicsMultiplayer.ts:116](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L116)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnBreak()

> **OnBreak**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/helper/FuncBreakable.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L62)

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

Defined in: [src/helper/FuncBreakable.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L67)

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

Defined in: [src/helper/PropPhysicsMultiplayer.ts:108](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L108)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnOutOfWorld()

> **OnOutOfWorld**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/helper/PropPhysicsMultiplayer.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L124)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnPlayerUse()

> **OnPlayerUse**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/helper/PropPhysicsMultiplayer.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L120)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnTakeDamage()

> **OnTakeDamage**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/helper/PropPhysicsMultiplayer.ts:112](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L112)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### physdamagescale()

> **physdamagescale**(`value`, `opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L94)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Remove`](#remove-6)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L53)

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

> **SetBodyGroup**(`value`, `opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:90](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L90)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/helper/BaseModelEntity.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `ColorType` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetColor`](#setcolor-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetEntityName`](#setentityname-6)

##### SetHealth()

> **SetHealth**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetHealth`](#sethealth-6)

##### SetMass()

> **SetMass**(`value`, `opts?`): `void`

Defined in: [src/helper/FuncBreakable.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/FuncBreakable.ts#L57)

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

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetMaxHealth`](#setmaxhealth-6)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/helper/BaseModelEntity.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetModel`](#setmodel-1)

##### SetModelScale()

> **SetModelScale**(`s`): `void`

Defined in: [src/helper/BaseModelEntity.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetModelScale`](#setmodelscale-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetOwner`](#setowner-6)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetParent`](#setparent-6)

##### SetRenderAttribute()

> **SetRenderAttribute**(`value`, `opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:98](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L98)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### Skin()

> **Skin**(`value`, `opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Sleep()

> **Sleep**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`FuncBreakable`](#funcbreakable).[`TakeDamage`](#takedamage-6)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`FuncBreakable`](#funcbreakable).[`Teleport`](#teleport-6)

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/helper/BaseModelEntity.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/BaseModelEntity.ts#L67)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Unglow`](#unglow-1)

##### Wake()

> **Wake**(`opts?`): `void`

Defined in: [src/helper/PropPhysicsMultiplayer.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/helper/PropPhysicsMultiplayer.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`Find`](#find-6)

##### FindAll()

> `static` **FindAll**(`r`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)[]

Defined in: [src/helper/PropPhysicsMultiplayer.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)[]

###### Overrides

[`FuncBreakable`](#funcbreakable).[`FindAll`](#findall-6)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindAllByClass`](#findallbyclass-6)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindByClass`](#findbyclass-6)

##### From()

> `static` **From**(`e`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/helper/PropPhysicsMultiplayer.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/PropPhysicsMultiplayer.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`From`](#from-5)

***

### TriggerMultiple

Defined in: [src/helper/TriggerMultiple.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L16)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new TriggerMultiple**(`entity`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/helper/TriggerMultiple.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/helper/TriggerMultiple.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### OnEndTouch()

> **OnEndTouch**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnEndTouchAll()

> **OnEndTouchAll**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnNotTouching()

> **OnNotTouching**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnStartTouch()

> **OnStartTouch**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnStartTouchAll()

> **OnStartTouchAll**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnTouching()

> **OnTouching**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L77)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnTouchingEachEntity()

> **OnTouchingEachEntity**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L81)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnTrigger()

> **OnTrigger**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Toggle()

> **Toggle**(`opts?`): `void`

Defined in: [src/helper/TriggerMultiple.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TouchTest()

> **TouchTest**(`opts?`): `void`

Defined in: [src/helper/TriggerMultiple.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`TriggerMultiple`](#triggermultiple)[]

Defined in: [src/helper/TriggerMultiple.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerMultiple`](#triggermultiple)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`entity`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/helper/TriggerMultiple.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerMultiple.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

***

### TriggerTeleport

Defined in: [src/helper/TriggerTeleport.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L16)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new TriggerTeleport**(`entity`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/helper/TriggerTeleport.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-1)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/helper/EntityHelper.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L57)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-1)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/helper/EntityHelper.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L95)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-1)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/helper/TriggerTeleport.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/helper/TriggerTeleport.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-1)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-1)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-1)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-1)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-1)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:126](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L126)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-1)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L118)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-1)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L134)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-1)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/helper/EntityHelper.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L154)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/helper/EntityHelper.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L158)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-1)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L142)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-1)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L146)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-1)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/helper/EntityHelper.ts:218](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L218)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-1)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L186)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-1)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/helper/EntityHelper.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L130)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-1)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L122)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-1)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/helper/EntityHelper.ts:138](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L138)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-1)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/helper/EntityHelper.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L198)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-1)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/helper/EntityHelper.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L166)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-1)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/helper/EntityHelper.ts:174](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L174)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-1)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/helper/EntityHelper.ts:182](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L182)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-1)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L210)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L114)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-1)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/helper/EntityHelper.ts:214](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L214)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-1)

##### Kill()

> **Kill**(): `void`

Defined in: [src/helper/EntityHelper.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L226)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-1)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/helper/EntityHelper.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L234)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-1)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/helper/EntityHelper.ts:230](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L230)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-1)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/helper/EntityHelper.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-1)

##### OnEndTouch()

> **OnEndTouch**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/helper/TriggerTeleport.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### OnEndTouchAll()

> **OnEndTouchAll**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/helper/TriggerTeleport.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### OnKilled()

> **OnKilled**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/helper/TriggerTeleport.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### OnStartTouch()

> **OnStartTouch**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/helper/TriggerTeleport.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### OnStartTouchAll()

> **OnStartTouchAll**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/helper/TriggerTeleport.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### Remove()

> **Remove**(): `void`

Defined in: [src/helper/EntityHelper.ts:238](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L238)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-1)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/helper/EntityHelper.ts:162](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L162)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-1)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-1)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/helper/EntityHelper.ts:202](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L202)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-1)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:170](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-1)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/helper/EntityHelper.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L178)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-1)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/helper/EntityHelper.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L222)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-1)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/helper/EntityHelper.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L150)

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

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-1)

##### Toggle()

> **Toggle**(`opts?`): `void`

Defined in: [src/helper/TriggerTeleport.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/helper/TriggerTeleport.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-1)

##### FindAll()

> `static` **FindAll**(`r`): [`TriggerTeleport`](#triggerteleport)[]

Defined in: [src/helper/TriggerTeleport.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerTeleport`](#triggerteleport)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-1)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/helper/EntityHelper.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-1)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/helper/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-1)

##### From()

> `static` **From**(`entity`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/helper/TriggerTeleport.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/helper/TriggerTeleport.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

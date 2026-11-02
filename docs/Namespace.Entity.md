# Entity

Entity Helper Library

## Enumerations

### WinCondition

Defined in: [src/entity/InfoMapParameters.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L46)

@see: https://developer.valvesoftware.com/wiki/Info_map_parameters_(Counter-Strike_series)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="enumeration-member-all_hostages_rescued"></a> `ALL_HOSTAGES_RESCUED` | `10` | [src/entity/InfoMapParameters.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L57) |
| <a id="enumeration-member-bomb_defused"></a> `BOMB_DEFUSED` | `6` | [src/entity/InfoMapParameters.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L53) |
| <a id="enumeration-member-cts_prevent_escape"></a> `CTS_PREVENT_ESCAPE` | `4` | [src/entity/InfoMapParameters.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L51) |
| <a id="enumeration-member-cts_win"></a> `CTS_WIN` | `7` | [src/entity/InfoMapParameters.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L54) |
| <a id="enumeration-member-draw"></a> `DRAW` | `9` | [src/entity/InfoMapParameters.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L56) |
| <a id="enumeration-member-escaping_terrorists_neutralized"></a> `ESCAPING_TERRORISTS_NEUTRALIZED` | `5` | [src/entity/InfoMapParameters.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L52) |
| <a id="enumeration-member-game_commencing"></a> `GAME_COMMENCING` | `15` | [src/entity/InfoMapParameters.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L62) |
| <a id="enumeration-member-hostages_not_rescued"></a> `HOSTAGES_NOT_RESCUED` | `12` | [src/entity/InfoMapParameters.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L59) |
| <a id="enumeration-member-target_bombed"></a> `TARGET_BOMBED` | `0` | [src/entity/InfoMapParameters.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L47) |
| <a id="enumeration-member-target_saved"></a> `TARGET_SAVED` | `11` | [src/entity/InfoMapParameters.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L58) |
| <a id="enumeration-member-terrorists_escaped"></a> `TERRORISTS_ESCAPED` | `3` | [src/entity/InfoMapParameters.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L50) |
| <a id="enumeration-member-terrorists_not_escaped"></a> `TERRORISTS_NOT_ESCAPED` | `13` | [src/entity/InfoMapParameters.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L60) |
| <a id="enumeration-member-terrorists_win"></a> `TERRORISTS_WIN` | `8` | [src/entity/InfoMapParameters.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L55) |
| <a id="enumeration-member-vip_assassinated"></a> `VIP_ASSASSINATED` | `2` | [src/entity/InfoMapParameters.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L49) |
| <a id="enumeration-member-vip_escaped"></a> `VIP_ESCAPED` | `1` | [src/entity/InfoMapParameters.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L48) |
| <a id="enumeration-member-vip_not_escaped"></a> `VIP_NOT_ESCAPED` | `14` | [src/entity/InfoMapParameters.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L61) |

## Classes

### BaseModelEntity

Defined in: [src/entity/BaseModelEntity.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L15)

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

Defined in: [src/entity/BaseModelEntity.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetColor()

> **GetColor**(): [`Color`](README.md#color)

Defined in: [src/entity/BaseModelEntity.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L60)

###### Returns

[`Color`](README.md#color)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L44)

###### Returns

`string`

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L52)

###### Returns

`string`

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/entity/BaseModelEntity.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `any` |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/entity/BaseModelEntity.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L72)

###### Returns

`boolean`

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/entity/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | `ColorType` |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/entity/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

##### SetModelScale()

> **SetModelScale**(`s`): `void`

Defined in: [src/entity/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/entity/BaseModelEntity.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L68)

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`BaseModelEntity`](#basemodelentity)

Defined in: [src/entity/BaseModelEntity.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`BaseModelEntity`](#basemodelentity)[]

Defined in: [src/entity/BaseModelEntity.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`BaseModelEntity`](#basemodelentity)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`BaseModelEntity`](#basemodelentity)

Defined in: [src/entity/BaseModelEntity.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`BaseModelEntity`](#basemodelentity)

***

### CustomHudLayout

Defined in: src/entity/CustomHudlayout.ts:14

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new CustomHudLayout**(`entity`): [`CustomHudLayout`](#customhudlayout)

Defined in: src/entity/CustomHudlayout.ts:15

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`CustomHudLayout`](#customhudlayout)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsInputCaptureEnabled()

> **IsInputCaptureEnabled**(`playerSlot`): `boolean`

Defined in: src/entity/CustomHudlayout.ts:56

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerSlot` | `number` |

###### Returns

`boolean`

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetDialogVariableString()

> **SetDialogVariableString**(`panelId`, `variableName`, `value`): `void`

Defined in: src/entity/CustomHudlayout.ts:44

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelId` | `string` |
| `variableName` | `string` |
| `value` | `string` |

###### Returns

`void`

##### SetDialogVariableStringForPlayer()

> **SetDialogVariableStringForPlayer**(`playerSlot`, `panelId`, `variableName`, `value`): `void`

Defined in: src/entity/CustomHudlayout.ts:48

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerSlot` | `number` |
| `panelId` | `string` |
| `variableName` | `string` |
| `value` | `string` |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHasClass()

> **SetHasClass**(`panelId`, `className`, `hasClass?`): `void`

Defined in: src/entity/CustomHudlayout.ts:36

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelId` | `string` |
| `className` | `string` |
| `hasClass?` | `boolean` |

###### Returns

`void`

##### SetHasClassForPlayer()

> **SetHasClassForPlayer**(`playerSlot`, `panelId`, `className`, `hasClass?`): `void`

Defined in: src/entity/CustomHudlayout.ts:40

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerSlot` | `number` |
| `panelId` | `string` |
| `className` | `string` |
| `hasClass?` | `boolean` |

###### Returns

`void`

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetInputCaptureEnabled()

> **SetInputCaptureEnabled**(`playerSlot`, `enabled`): `void`

Defined in: src/entity/CustomHudlayout.ts:52

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerSlot` | `number` |
| `enabled` | `boolean` |

###### Returns

`void`

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`CustomHudLayout`](#customhudlayout)

Defined in: src/entity/CustomHudlayout.ts:25

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`CustomHudLayout`](#customhudlayout)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`CustomHudLayout`](#customhudlayout)[]

Defined in: src/entity/CustomHudlayout.ts:31

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`CustomHudLayout`](#customhudlayout)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`CustomHudLayout`](#customhudlayout)

Defined in: src/entity/CustomHudlayout.ts:19

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`CustomHudLayout`](#customhudlayout)

***

### `abstract` EntityHelper

Defined in: [src/entity/EntityHelper.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L29)

#### Extended by

- [`BaseModelEntity`](#basemodelentity)
- [`CustomHudLayout`](#customhudlayout)
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

Defined in: [src/entity/EntityHelper.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L32)

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

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

##### Find()

> `abstract` `static` **Find**\<`T`\>(`r`): `T`

Defined in: [src/entity/EntityHelper.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L36)

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

Defined in: [src/entity/EntityHelper.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L40)

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

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

***

### EnvironmentFade

Defined in: [src/entity/EnvironmentFade.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentFade.ts#L14)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentFade**(`entity`): [`EnvironmentFade`](#environmentfade)

Defined in: [src/entity/EnvironmentFade.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentFade.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentFade`](#environmentfade)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### Fade()

> **Fade**(`opts?`): `void`

Defined in: [src/entity/EnvironmentFade.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentFade.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`EnvironmentFade`](#environmentfade)

Defined in: [src/entity/EnvironmentFade.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentFade.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentFade`](#environmentfade)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentFade`](#environmentfade)[]

Defined in: [src/entity/EnvironmentFade.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentFade.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentFade`](#environmentfade)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`EnvironmentFade`](#environmentfade)

Defined in: [src/entity/EnvironmentFade.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentFade.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentFade`](#environmentfade)

***

### EnvironmentHudHint

Defined in: [src/entity/EnvironmentHudHint.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentHudHint.ts#L12)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentHudHint**(`entity`): [`EnvironmentHudHint`](#environmenthudhint)

Defined in: [src/entity/EnvironmentHudHint.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentHudHint.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### HideHudHint()

> **HideHudHint**(`opts?`): `void`

Defined in: [src/entity/EnvironmentHudHint.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentHudHint.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### ShowHudHint()

> **ShowHudHint**(`opts?`): `void`

Defined in: [src/entity/EnvironmentHudHint.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentHudHint.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`EnvironmentHudHint`](#environmenthudhint)

Defined in: [src/entity/EnvironmentHudHint.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentHudHint.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentHudHint`](#environmenthudhint)[]

Defined in: [src/entity/EnvironmentHudHint.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentHudHint.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`EnvironmentHudHint`](#environmenthudhint)

Defined in: [src/entity/EnvironmentHudHint.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentHudHint.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentHudHint`](#environmenthudhint)

***

### EnvironmentParticleGlow

Defined in: [src/entity/EnvironmentParticleGlow.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L12)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentParticleGlow**(`entity`): [`EnvironmentParticleGlow`](#environmentparticleglow)

Defined in: [src/entity/EnvironmentParticleGlow.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentParticleGlow`](#environmentparticleglow)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### DestroyImmediately()

> **DestroyImmediately**(`opts?`): `void`

Defined in: [src/entity/EnvironmentParticleGlow.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### setalphascale()

> **setalphascale**(`opts?`): `void`

Defined in: [src/entity/EnvironmentParticleGlow.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### setcolortint()

> **setcolortint**(`opts?`): `void`

Defined in: [src/entity/EnvironmentParticleGlow.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetControlPoint()

> **SetControlPoint**(`x`, `y`, `z`, `opts?`): `void`

Defined in: [src/entity/EnvironmentParticleGlow.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L64)

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

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### setscale()

> **setscale**(`opts?`): `void`

Defined in: [src/entity/EnvironmentParticleGlow.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Start()

> **Start**(`opts?`): `void`

Defined in: [src/entity/EnvironmentParticleGlow.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Stop()

> **Stop**(`opts?`): `void`

Defined in: [src/entity/EnvironmentParticleGlow.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopPlayEndCap()

> **StopPlayEndCap**(`opts?`): `void`

Defined in: [src/entity/EnvironmentParticleGlow.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`EnvironmentParticleGlow`](#environmentparticleglow)

Defined in: [src/entity/EnvironmentParticleGlow.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentParticleGlow`](#environmentparticleglow)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentParticleGlow`](#environmentparticleglow)[]

Defined in: [src/entity/EnvironmentParticleGlow.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentParticleGlow`](#environmentparticleglow)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`EnvironmentParticleGlow`](#environmentparticleglow)

Defined in: [src/entity/EnvironmentParticleGlow.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentParticleGlow.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentParticleGlow`](#environmentparticleglow)

***

### EnvironmentShake

Defined in: [src/entity/EnvironmentShake.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentShake.ts#L14)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new EnvironmentShake**(`entity`): [`EnvironmentShake`](#environmentshake)

Defined in: [src/entity/EnvironmentShake.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentShake.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`EnvironmentShake`](#environmentshake)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### Amplitude()

> **Amplitude**(`opts?`): `void`

Defined in: [src/entity/EnvironmentShake.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentShake.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### Frequency()

> **Frequency**(`opts?`): `void`

Defined in: [src/entity/EnvironmentShake.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentShake.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### StartShake()

> **StartShake**(`opts?`): `void`

Defined in: [src/entity/EnvironmentShake.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentShake.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopShake()

> **StopShake**(`opts?`): `void`

Defined in: [src/entity/EnvironmentShake.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentShake.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`EnvironmentShake`](#environmentshake)

Defined in: [src/entity/EnvironmentShake.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentShake.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentShake`](#environmentshake)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`EnvironmentShake`](#environmentshake)[]

Defined in: [src/entity/EnvironmentShake.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentShake.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`EnvironmentShake`](#environmentshake)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`EnvironmentShake`](#environmentshake)

Defined in: [src/entity/EnvironmentShake.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EnvironmentShake.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`EnvironmentShake`](#environmentshake)

***

### FuncBreakable

Defined in: [src/entity/FuncBreakable.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L16)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Extended by

- [`PropDynamic`](#propdynamic)
- [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

#### Constructors

##### Constructor

> **new FuncBreakable**(`entity`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/entity/FuncBreakable.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L17)

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

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Break()

> **Break**(`opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

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

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

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

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

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

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

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

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

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

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngularVelocity`](#getabsangularvelocity)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): [`Color`](README.md#color)

Defined in: [src/entity/BaseModelEntity.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L60)

###### Returns

[`Color`](README.md#color)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngularVelocity`](#getlocalangularvelocity)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L44)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L52)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMoveType`](#getmovetype)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/entity/BaseModelEntity.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L64)

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

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/entity/BaseModelEntity.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L72)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillHierarchy`](#killhierarchy)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Move`](#move)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

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

Defined in: [src/entity/FuncBreakable.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

##### OnHealthChanged()

> **OnHealthChanged**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/entity/FuncBreakable.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncBreakable`](#funcbreakable)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/entity/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L56)

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

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

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

Defined in: [src/entity/FuncBreakable.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L43)

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

Defined in: [src/entity/FuncBreakable.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

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

Defined in: [src/entity/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L40)

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

Defined in: [src/entity/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetModelScale`](#setmodelscale)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetMoveType`](#setmovetype)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

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

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

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

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Teleport`](#teleport)

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/entity/BaseModelEntity.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L68)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Find()

> `static` **Find**(`r`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/entity/FuncBreakable.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L27)

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

Defined in: [src/entity/FuncBreakable.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L32)

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

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

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

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

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

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClassStrict`](#findbyclassstrict)

##### From()

> `static` **From**(`e`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/entity/FuncBreakable.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L21)

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

Defined in: [src/entity/FuncButton.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L13)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new FuncButton**(`entity`): [`FuncButton`](#funcbutton)

Defined in: [src/entity/FuncButton.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L14)

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

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

Defined in: [src/entity/FuncButton.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/entity/FuncButton.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

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

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

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

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

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

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

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

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

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

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngularVelocity`](#getabsangularvelocity)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): [`Color`](README.md#color)

Defined in: [src/entity/BaseModelEntity.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L60)

###### Returns

[`Color`](README.md#color)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngularVelocity`](#getlocalangularvelocity)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L44)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L52)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMoveType`](#getmovetype)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/entity/BaseModelEntity.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L64)

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

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/entity/BaseModelEntity.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L72)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

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

Defined in: [src/entity/FuncButton.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Move`](#move)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

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

Defined in: [src/entity/FuncButton.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnIn()

> **OnIn**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/entity/FuncButton.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnOut()

> **OnOut**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/entity/FuncButton.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnPressed()

> **OnPressed**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/entity/FuncButton.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnTouching()

> **OnTouching**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/entity/FuncButton.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### OnUseLocked()

> **OnUseLocked**(`callback`): [`FuncButton`](#funcbutton)

Defined in: [src/entity/FuncButton.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L71)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncButton`](#funcbutton)

##### Press()

> **Press**(`opts?`): `void`

Defined in: [src/entity/FuncButton.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### PressIn()

> **PressIn**(`opts?`): `void`

Defined in: [src/entity/FuncButton.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### PressOut()

> **PressOut**(`opts?`): `void`

Defined in: [src/entity/FuncButton.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/entity/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L56)

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

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

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

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

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

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

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

Defined in: [src/entity/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L40)

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

Defined in: [src/entity/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetModelScale`](#setmodelscale)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetMoveType`](#setmovetype)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

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

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

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

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Teleport`](#teleport)

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/entity/BaseModelEntity.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L68)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Unlock()

> **Unlock**(`opts?`): `void`

Defined in: [src/entity/FuncButton.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`FuncButton`](#funcbutton)

Defined in: [src/entity/FuncButton.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L24)

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

Defined in: [src/entity/FuncButton.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L30)

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

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

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

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

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

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClassStrict`](#findbyclassstrict)

##### From()

> `static` **From**(`e`): [`FuncButton`](#funcbutton)

Defined in: [src/entity/FuncButton.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncButton.ts#L18)

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

Defined in: [src/entity/FuncMoveLinear.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L16)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new FuncMoveLinear**(`entity`): [`FuncMoveLinear`](#funcmovelinear)

Defined in: [src/entity/FuncMoveLinear.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L17)

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

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### Close()

> **Close**(`opts?`): `void`

Defined in: [src/entity/FuncMoveLinear.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

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

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

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

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

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

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

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

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

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

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngularVelocity`](#getabsangularvelocity)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): [`Color`](README.md#color)

Defined in: [src/entity/BaseModelEntity.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L60)

###### Returns

[`Color`](README.md#color)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngularVelocity`](#getlocalangularvelocity)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L44)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L52)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMoveType`](#getmovetype)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/entity/BaseModelEntity.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L64)

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

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/entity/BaseModelEntity.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L72)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillHierarchy`](#killhierarchy)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Move`](#move)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

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

Defined in: [src/entity/FuncMoveLinear.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L77)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncMoveLinear`](#funcmovelinear)

##### OnFullyOpened()

> **OnFullyOpened**(`callback`): [`FuncMoveLinear`](#funcmovelinear)

Defined in: [src/entity/FuncMoveLinear.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncMoveLinear`](#funcmovelinear)

##### Open()

> **Open**(`opts?`): `void`

Defined in: [src/entity/FuncMoveLinear.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### ResetPosition()

> **ResetPosition**(`opts?`): `void`

Defined in: [src/entity/FuncMoveLinear.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/entity/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L56)

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

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

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

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

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

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

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

Defined in: [src/entity/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L40)

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

Defined in: [src/entity/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L48)

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

Defined in: [src/entity/FuncMoveLinear.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMoveDistanceFromStart()

> **SetMoveDistanceFromStart**(`opts?`): `void`

Defined in: [src/entity/FuncMoveLinear.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetMoveType`](#setmovetype)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

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

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

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

Defined in: [src/entity/FuncMoveLinear.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetSpeed()

> **SetSpeed**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncMoveLinear.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Teleport`](#teleport)

##### TeleportToTarget()

> **TeleportToTarget**(`opts?`): `void`

Defined in: [src/entity/FuncMoveLinear.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/entity/BaseModelEntity.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L68)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Find()

> `static` **Find**(`r`): [`FuncMoveLinear`](#funcmovelinear)

Defined in: [src/entity/FuncMoveLinear.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L27)

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

Defined in: [src/entity/FuncMoveLinear.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L32)

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

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

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

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

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

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClassStrict`](#findbyclassstrict)

##### From()

> `static` **From**(`e`): [`FuncMoveLinear`](#funcmovelinear)

Defined in: [src/entity/FuncMoveLinear.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncMoveLinear.ts#L21)

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

Defined in: [src/entity/FuncTrackTrain.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L16)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new FuncTrackTrain**(`entity`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/entity/FuncTrackTrain.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L17)

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

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

Defined in: [src/entity/FuncTrackTrain.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableShadows()

> **EnableShadows**(`opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

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

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

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

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

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

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

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

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

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

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngularVelocity`](#getabsangularvelocity)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): [`Color`](README.md#color)

Defined in: [src/entity/BaseModelEntity.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L60)

###### Returns

[`Color`](README.md#color)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngularVelocity`](#getlocalangularvelocity)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L44)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L52)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMoveType`](#getmovetype)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/entity/BaseModelEntity.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L64)

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

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/entity/BaseModelEntity.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L72)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

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

Defined in: [src/entity/FuncTrackTrain.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L95)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Move`](#move)

##### MoveToPathNode()

> **MoveToPathNode**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

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

Defined in: [src/entity/FuncTrackTrain.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L113)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

##### OnKilled()

> **OnKilled**(`callback`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/entity/FuncTrackTrain.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L117)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

##### OnNext()

> **OnNext**(`callback`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/entity/FuncTrackTrain.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L109)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

##### OnStart()

> **OnStart**(`callback`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/entity/FuncTrackTrain.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L105)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`FuncTrackTrain`](#functracktrain)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### Resume()

> **Resume**(`opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Reverse()

> **Reverse**(`opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/entity/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L56)

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

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

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

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

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

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

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

Defined in: [src/entity/FuncTrackTrain.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/entity/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L40)

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

Defined in: [src/entity/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L48)

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

Defined in: [src/entity/FuncTrackTrain.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetMoveType`](#setmovetype)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

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

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

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

Defined in: [src/entity/FuncTrackTrain.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetSpeedDir()

> **SetSpeedDir**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### StartBackward()

> **StartBackward**(`opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L71)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StartForward()

> **StartForward**(`opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Stop()

> **Stop**(`opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Teleport`](#teleport)

##### TeleportToPathNode()

> **TeleportToPathNode**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L91)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### Toggle()

> **Toggle**(`opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/entity/BaseModelEntity.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L68)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### UnlockOrientation()

> **UnlockOrientation**(`opts?`): `void`

Defined in: [src/entity/FuncTrackTrain.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/entity/FuncTrackTrain.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L27)

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

Defined in: [src/entity/FuncTrackTrain.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L32)

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

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

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

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

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

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClassStrict`](#findbyclassstrict)

##### From()

> `static` **From**(`e`): [`FuncTrackTrain`](#functracktrain)

Defined in: [src/entity/FuncTrackTrain.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncTrackTrain.ts#L21)

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

Defined in: [src/entity/GameMoney.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L15)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new GameMoney**(`entity`): [`GameMoney`](#gamemoney)

Defined in: [src/entity/GameMoney.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`GameMoney`](#gamemoney)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### AddMoneyPlayer()

> **AddMoneyPlayer**(`opts?`): `void`

Defined in: [src/entity/GameMoney.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### AddTeamMoneyCT()

> **AddTeamMoneyCT**(`opts?`): `void`

Defined in: [src/entity/GameMoney.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### AddTeamMoneyTerrorist()

> **AddTeamMoneyTerrorist**(`opts?`): `void`

Defined in: [src/entity/GameMoney.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### GiveMoney()

> **GiveMoney**(`player`, `amount`): `void`

Defined in: [src/entity/GameMoney.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | `CSPlayerPawn` |
| `amount` | `number` |

###### Returns

`void`

##### GiveTeamMoney\_CT()

> **GiveTeamMoney\_CT**(`amount`): `void`

Defined in: [src/entity/GameMoney.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

###### Returns

`void`

##### GiveTeamMoney\_T()

> **GiveTeamMoney\_T**(`amount`): `void`

Defined in: [src/entity/GameMoney.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### OnMoneySpent()

> **OnMoneySpent**(`callback`): [`GameMoney`](#gamemoney)

Defined in: [src/entity/GameMoney.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`GameMoney`](#gamemoney)

##### OnMoneySpentFail()

> **OnMoneySpentFail**(`callback`): [`GameMoney`](#gamemoney)

Defined in: [src/entity/GameMoney.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`GameMoney`](#gamemoney)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoneyAmount()

> **SetMoneyAmount**(`value`, `opts?`): `void`

Defined in: [src/entity/GameMoney.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### SpendMoneyFromPlayer()

> **SpendMoneyFromPlayer**(`opts?`): `void`

Defined in: [src/entity/GameMoney.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`GameMoney`](#gamemoney)

Defined in: [src/entity/GameMoney.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`GameMoney`](#gamemoney)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`GameMoney`](#gamemoney)[]

Defined in: [src/entity/GameMoney.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`GameMoney`](#gamemoney)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`GameMoney`](#gamemoney)

Defined in: [src/entity/GameMoney.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/GameMoney.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`GameMoney`](#gamemoney)

***

### InfoMapParameters

Defined in: [src/entity/InfoMapParameters.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L15)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoMapParameters**(`entity`): [`InfoMapParameters`](#infomapparameters)

Defined in: [src/entity/InfoMapParameters.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoMapParameters`](#infomapparameters)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### FireWinCondition()

> **FireWinCondition**(`value`, `opts?`): `void`

Defined in: [src/entity/InfoMapParameters.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`WinCondition`](#wincondition) |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`InfoMapParameters`](#infomapparameters)

Defined in: [src/entity/InfoMapParameters.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoMapParameters`](#infomapparameters)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoMapParameters`](#infomapparameters)[]

Defined in: [src/entity/InfoMapParameters.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoMapParameters`](#infomapparameters)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`InfoMapParameters`](#infomapparameters)

Defined in: [src/entity/InfoMapParameters.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoMapParameters.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoMapParameters`](#infomapparameters)

***

### InfoParticleSystem

Defined in: [src/entity/InfoParticleSystem.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L16)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoParticleSystem**(`entity`): [`InfoParticleSystem`](#infoparticlesystem)

Defined in: [src/entity/InfoParticleSystem.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoParticleSystem`](#infoparticlesystem)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### DestroyImmediately()

> **DestroyImmediately**(`opts?`): `void`

Defined in: [src/entity/InfoParticleSystem.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### Freeze()

> **Freeze**(`opts?`): `void`

Defined in: [src/entity/InfoParticleSystem.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetControlPoint()

> **SetControlPoint**(`x?`, `y?`, `z?`, `opts?`): `void`

Defined in: [src/entity/InfoParticleSystem.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L65)

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

Defined in: [src/entity/InfoParticleSystem.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L69)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | `number` | `0` |
| `opts` | \{ \} | `{}` |

###### Returns

`void`

##### SetDataControlPointY()

> **SetDataControlPointY**(`value?`, `opts?`): `void`

Defined in: [src/entity/InfoParticleSystem.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L73)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | `number` | `0` |
| `opts` | \{ \} | `{}` |

###### Returns

`void`

##### SetDataControlPointZ()

> **SetDataControlPointZ**(`value?`, `opts?`): `void`

Defined in: [src/entity/InfoParticleSystem.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L77)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | `number` | `0` |
| `opts` | \{ \} | `{}` |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### Start()

> **Start**(`opts?`): `void`

Defined in: [src/entity/InfoParticleSystem.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Stop()

> **Stop**(`opts?`): `void`

Defined in: [src/entity/InfoParticleSystem.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopPlayEndCap()

> **StopPlayEndCap**(`opts?`): `void`

Defined in: [src/entity/InfoParticleSystem.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Thaw()

> **Thaw**(`opts?`): `void`

Defined in: [src/entity/InfoParticleSystem.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`InfoParticleSystem`](#infoparticlesystem)

Defined in: [src/entity/InfoParticleSystem.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoParticleSystem`](#infoparticlesystem)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoParticleSystem`](#infoparticlesystem)[]

Defined in: [src/entity/InfoParticleSystem.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoParticleSystem`](#infoparticlesystem)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`InfoParticleSystem`](#infoparticlesystem)

Defined in: [src/entity/InfoParticleSystem.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleSystem.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoParticleSystem`](#infoparticlesystem)

***

### InfoParticleTarget

Defined in: [src/entity/InfoParticleTarget.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleTarget.ts#L13)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoParticleTarget**(`entity`): [`InfoParticleTarget`](#infoparticletarget)

Defined in: [src/entity/InfoParticleTarget.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleTarget.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoParticleTarget`](#infoparticletarget)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`InfoParticleTarget`](#infoparticletarget)

Defined in: [src/entity/InfoParticleTarget.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleTarget.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoParticleTarget`](#infoparticletarget)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoParticleTarget`](#infoparticletarget)[]

Defined in: [src/entity/InfoParticleTarget.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleTarget.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoParticleTarget`](#infoparticletarget)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`InfoParticleTarget`](#infoparticletarget)

Defined in: [src/entity/InfoParticleTarget.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoParticleTarget.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoParticleTarget`](#infoparticletarget)

***

### InfoTarget

Defined in: [src/entity/InfoTarget.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTarget.ts#L13)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoTarget**(`entity`): [`InfoTarget`](#infotarget)

Defined in: [src/entity/InfoTarget.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTarget.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoTarget`](#infotarget)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`InfoTarget`](#infotarget)

Defined in: [src/entity/InfoTarget.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTarget.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTarget`](#infotarget)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoTarget`](#infotarget)[]

Defined in: [src/entity/InfoTarget.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTarget.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTarget`](#infotarget)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`InfoTarget`](#infotarget)

Defined in: [src/entity/InfoTarget.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTarget.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoTarget`](#infotarget)

***

### InfoTeleportDestination

Defined in: [src/entity/InfoTeleportDestination.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTeleportDestination.ts#L13)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new InfoTeleportDestination**(`entity`): [`InfoTeleportDestination`](#infoteleportdestination)

Defined in: [src/entity/InfoTeleportDestination.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTeleportDestination.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`InfoTeleportDestination`](#infoteleportdestination)

Defined in: [src/entity/InfoTeleportDestination.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTeleportDestination.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`InfoTeleportDestination`](#infoteleportdestination)[]

Defined in: [src/entity/InfoTeleportDestination.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTeleportDestination.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`InfoTeleportDestination`](#infoteleportdestination)

Defined in: [src/entity/InfoTeleportDestination.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/InfoTeleportDestination.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`InfoTeleportDestination`](#infoteleportdestination)

***

### LogicCase

Defined in: [src/entity/LogicCase.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L11)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new LogicCase**(`entity`): [`LogicCase`](#logiccase)

Defined in: [src/entity/LogicCase.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L12)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`LogicCase`](#logiccase)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### InValue()

> **InValue**(`value`, `opts?`): `void`

Defined in: [src/entity/LogicCase.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### OnCase()

> **OnCase**(`case_number`, `callback`): [`LogicCase`](#logiccase)

Defined in: [src/entity/LogicCase.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `case_number` | `number` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicCase`](#logiccase)

##### OnDefault()

> **OnDefault**(`callback`): [`LogicCase`](#logiccase)

Defined in: [src/entity/LogicCase.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicCase`](#logiccase)

##### OnKilled()

> **OnKilled**(`callback`): [`LogicCase`](#logiccase)

Defined in: [src/entity/LogicCase.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicCase`](#logiccase)

##### PickRandom()

> **PickRandom**(`opts?`): `void`

Defined in: [src/entity/LogicCase.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### PickRandomShuffle()

> **PickRandomShuffle**(`opts?`): `void`

Defined in: [src/entity/LogicCase.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### ResetShuffle()

> **ResetShuffle**(`opts?`): `void`

Defined in: [src/entity/LogicCase.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`LogicCase`](#logiccase)

Defined in: [src/entity/LogicCase.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicCase`](#logiccase)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`LogicCase`](#logiccase)[]

Defined in: [src/entity/LogicCase.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicCase`](#logiccase)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`LogicCase`](#logiccase)

Defined in: [src/entity/LogicCase.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicCase.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`LogicCase`](#logiccase)

***

### LogicRelay

Defined in: [src/entity/LogicRelay.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L13)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new LogicRelay**(`entity`): [`LogicRelay`](#logicrelay)

Defined in: [src/entity/LogicRelay.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`LogicRelay`](#logicrelay)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### CancelPending()

> **CancelPending**(`opts?`): `void`

Defined in: [src/entity/LogicRelay.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/entity/LogicRelay.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/entity/LogicRelay.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### OnKilled()

> **OnKilled**(`callback`): [`LogicRelay`](#logicrelay)

Defined in: [src/entity/LogicRelay.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicRelay`](#logicrelay)

##### OnSpawn()

> **OnSpawn**(`callback`): [`LogicRelay`](#logicrelay)

Defined in: [src/entity/LogicRelay.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicRelay`](#logicrelay)

##### OnTrigger()

> **OnTrigger**(`callback`): [`LogicRelay`](#logicrelay)

Defined in: [src/entity/LogicRelay.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`LogicRelay`](#logicrelay)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Toggle()

> **Toggle**(`opts?`): `void`

Defined in: [src/entity/LogicRelay.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Trigger()

> **Trigger**(`opts?`): `void`

Defined in: [src/entity/LogicRelay.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`LogicRelay`](#logicrelay)

Defined in: [src/entity/LogicRelay.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicRelay`](#logicrelay)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`LogicRelay`](#logicrelay)[]

Defined in: [src/entity/LogicRelay.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`LogicRelay`](#logicrelay)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`LogicRelay`](#logicrelay)

Defined in: [src/entity/LogicRelay.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/LogicRelay.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`LogicRelay`](#logicrelay)

***

### MathCounter

Defined in: [src/entity/MathCounter.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L12)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new MathCounter**(`entity`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`MathCounter`](#mathcounter)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### Add()

> **Add**(`value`, `opts?`): `void`

Defined in: [src/entity/MathCounter.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/entity/MathCounter.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Divide()

> **Divide**(`value`, `opts?`): `void`

Defined in: [src/entity/MathCounter.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/entity/MathCounter.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### GetValue()

> **GetValue**(`opts?`): `void`

Defined in: [src/entity/MathCounter.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### Multiply()

> **Multiply**(`value`, `opts?`): `void`

Defined in: [src/entity/MathCounter.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### OnChangedFromMax()

> **OnChangedFromMax**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L101)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnChangedFromMin()

> **OnChangedFromMin**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L97)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnGetValue()

> **OnGetValue**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L105)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnHitMax()

> **OnHitMax**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L93)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnHitMin()

> **OnHitMin**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L89)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OnKilled()

> **OnKilled**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L81)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### OutValue()

> **OutValue**(`callback`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`MathCounter`](#mathcounter)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetHitMax()

> **SetHitMax**(`value`, `opts?`): `void`

Defined in: [src/entity/MathCounter.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L71)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetHitMin()

> **SetHitMin**(`value`, `opts?`): `void`

Defined in: [src/entity/MathCounter.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### SetValue()

> **SetValue**(`value`, `opts?`): `void`

Defined in: [src/entity/MathCounter.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetValueNoFire()

> **SetValueNoFire**(`value`, `opts?`): `void`

Defined in: [src/entity/MathCounter.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Subtract()

> **Subtract**(`value`, `opts?`): `void`

Defined in: [src/entity/MathCounter.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`MathCounter`](#mathcounter)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`MathCounter`](#mathcounter)[]

Defined in: [src/entity/MathCounter.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`MathCounter`](#mathcounter)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`MathCounter`](#mathcounter)

Defined in: [src/entity/MathCounter.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MathCounter.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`MathCounter`](#mathcounter)

***

### MoveableSoundEvent

Defined in: [src/entity/MoveableSoundEvent.ts:7](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MoveableSoundEvent.ts#L7)

Wraps the sound event template.

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new MoveableSoundEvent**(`empty_prop_dynamic_entity`, `sound_event_entity`): [`MoveableSoundEvent`](#moveablesoundevent)

Defined in: [src/entity/MoveableSoundEvent.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MoveableSoundEvent.ts#L9)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `empty_prop_dynamic_entity` | `Entity` |
| `sound_event_entity` | `Entity` |

###### Returns

[`MoveableSoundEvent`](#moveablesoundevent)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### SetSoundEventName()

> **SetSoundEventName**(`soundevent_name`, `opts`): `void`

Defined in: [src/entity/MoveableSoundEvent.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MoveableSoundEvent.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundevent_name` | `string` |
| `opts` | `any` |

###### Returns

`void`

##### StartSound()

> **StartSound**(`opts`): `void`

Defined in: [src/entity/MoveableSoundEvent.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MoveableSoundEvent.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

`void`

##### StopSound()

> **StopSound**(`opts`): `void`

Defined in: [src/entity/MoveableSoundEvent.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MoveableSoundEvent.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `abstract` `static` **Find**\<`T`\>(`r`): `T`

Defined in: [src/entity/EntityHelper.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L36)

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

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `abstract` `static` **FindAll**\<`T`\>(`r`): `T`[]

Defined in: [src/entity/EntityHelper.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L40)

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

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### Spawn()

> `static` **Spawn**(`soundevent_name`, `position?`): [`MoveableSoundEvent`](#moveablesoundevent)

Defined in: [src/entity/MoveableSoundEvent.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/MoveableSoundEvent.ts#L14)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `soundevent_name` | `any` | `undefined` |
| `position` | `any` | `Math.Vector3.Zero` |

###### Returns

[`MoveableSoundEvent`](#moveablesoundevent)

***

### PathTrack

Defined in: [src/entity/PathTrack.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L16)

#### Extends

- [`BaseModelEntity`](#basemodelentity)

#### Constructors

##### Constructor

> **new PathTrack**(`entity`): [`PathTrack`](#pathtrack)

Defined in: [src/entity/PathTrack.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L17)

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

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`raw`](#raw)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

Defined in: [src/entity/PathTrack.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisablePath()

> **DisablePath**(`opts?`): `void`

Defined in: [src/entity/PathTrack.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableAlternatePath()

> **EnableAlternatePath**(`opts?`): `void`

Defined in: [src/entity/PathTrack.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnablePath()

> **EnablePath**(`opts?`): `void`

Defined in: [src/entity/PathTrack.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

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

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

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

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

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

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

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

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

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

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngles`](#getabsangles)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsAngularVelocity`](#getabsangularvelocity)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsOrigin`](#getabsorigin)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetAbsVelocity`](#getabsvelocity)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetClassName`](#getclassname)

##### GetColor()

> **GetColor**(): [`Color`](README.md#color)

Defined in: [src/entity/BaseModelEntity.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L60)

###### Returns

[`Color`](README.md#color)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetColor`](#getcolor)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEntityName`](#getentityname)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyeAngles`](#geteyeangles)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetEyePosition`](#geteyeposition)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetGroundEntity`](#getgroundentity)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetHealth`](#gethealth)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngles`](#getlocalangles)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalAngularVelocity`](#getlocalangularvelocity)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalOrigin`](#getlocalorigin)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetLocalVelocity`](#getlocalvelocity)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMaxHealth`](#getmaxhealth)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L44)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelName`](#getmodelname)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L52)

###### Returns

`string`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetModelScale`](#getmodelscale)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetMoveType`](#getmovetype)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetOwner`](#getowner)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetParent`](#getparent)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`GetTeamNumber`](#getteamnumber)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/entity/BaseModelEntity.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L64)

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

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsAlive`](#isalive)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/entity/BaseModelEntity.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L72)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsGlowing`](#isglowing)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsValid`](#isvalid)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`IsWorld`](#isworld)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Kill`](#kill)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillAll`](#killall)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`KillHierarchy`](#killhierarchy)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Move`](#move)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

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

Defined in: [src/entity/PathTrack.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PathTrack`](#pathtrack)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Remove`](#remove)

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/entity/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L56)

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

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

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

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

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

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

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

Defined in: [src/entity/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L40)

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

Defined in: [src/entity/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetModelScale`](#setmodelscale)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`SetMoveType`](#setmovetype)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

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

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

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

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Teleport`](#teleport)

##### ToggleAlternatePath()

> **ToggleAlternatePath**(`opts?`): `void`

Defined in: [src/entity/PathTrack.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TogglePath()

> **TogglePath**(`opts?`): `void`

Defined in: [src/entity/PathTrack.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/entity/BaseModelEntity.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L68)

###### Returns

`void`

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`Unglow`](#unglow)

##### Find()

> `static` **Find**(`r`): [`PathTrack`](#pathtrack)

Defined in: [src/entity/PathTrack.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L27)

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

Defined in: [src/entity/PathTrack.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L32)

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

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

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

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

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

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`BaseModelEntity`](#basemodelentity).[`FindByClassStrict`](#findbyclassstrict)

##### From()

> `static` **From**(`e`): [`PathTrack`](#pathtrack)

Defined in: [src/entity/PathTrack.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PathTrack.ts#L21)

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

Defined in: [src/entity/PointSoundEvent.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointSoundEvent.ts#L15)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new PointSoundEvent**(`entity`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [src/entity/PointSoundEvent.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointSoundEvent.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### OnSoundFinished()

> **OnSoundFinished**(`callback`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [src/entity/PointSoundEvent.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointSoundEvent.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### SetSoundEventName()

> **SetSoundEventName**(`soundevent_name`, `opts?`): `void`

Defined in: [src/entity/PointSoundEvent.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointSoundEvent.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundevent_name` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### StartSound()

> **StartSound**(`opts?`): `void`

Defined in: [src/entity/PointSoundEvent.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointSoundEvent.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### StopSound()

> **StopSound**(`opts?`): `void`

Defined in: [src/entity/PointSoundEvent.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointSoundEvent.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [src/entity/PointSoundEvent.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointSoundEvent.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`PointSoundEvent`](#pointsoundevent)[]

Defined in: [src/entity/PointSoundEvent.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointSoundEvent.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`PointSoundEvent`](#pointsoundevent)

Defined in: [src/entity/PointSoundEvent.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointSoundEvent.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PointSoundEvent`](#pointsoundevent)

***

### PointTemplate

Defined in: [src/entity/PointTemplate.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointTemplate.ts#L15)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new PointTemplate**(`entity`): [`PointTemplate`](#pointtemplate)

Defined in: [src/entity/PointTemplate.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointTemplate.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PointTemplate`](#pointtemplate)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### ForceSpawn()

> **ForceSpawn**(`origin?`, `rotation?`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/PointTemplate.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointTemplate.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin?` | `any` |
| `rotation?` | `any` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Find()

> `static` **Find**(`r`): [`PointTemplate`](#pointtemplate)

Defined in: [src/entity/PointTemplate.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointTemplate.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointTemplate`](#pointtemplate)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`PointTemplate`](#pointtemplate)[]

Defined in: [src/entity/PointTemplate.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointTemplate.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PointTemplate`](#pointtemplate)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`e`): [`PointTemplate`](#pointtemplate)

Defined in: [src/entity/PointTemplate.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PointTemplate.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PointTemplate`](#pointtemplate)

***

### PropDynamic

Defined in: [src/entity/PropDynamic.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L16)

#### Extends

- [`FuncBreakable`](#funcbreakable)

#### Extended by

- [`PropDynamicOrnament`](#propdynamicornament)

#### Constructors

##### Constructor

> **new PropDynamic**(`entity`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`constructor`](#constructor-7)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`raw`](#raw-7)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L47)

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

Defined in: [src/entity/FuncBreakable.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L39)

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

Defined in: [src/entity/PropDynamic.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`FuncBreakable`](#funcbreakable).[`ConnectOutput`](#connectoutput-7)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L97)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableCollision()

> **DisableCollision**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableShadow()

> **DisableShadow**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L93)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableCollision()

> **EnableCollision**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableShadow()

> **EnableShadow**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireIO`](#fireio-7)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser1`](#fireuser1-7)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser2`](#fireuser2-7)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser3`](#fireuser3-7)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser4`](#fireuser4-7)

##### FollowEntity()

> **FollowEntity**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsAngles`](#getabsangles-7)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsAngularVelocity`](#getabsangularvelocity-7)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsOrigin`](#getabsorigin-7)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsVelocity`](#getabsvelocity-7)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetClassName`](#getclassname-7)

##### GetColor()

> **GetColor**(): [`Color`](README.md#color)

Defined in: [src/entity/BaseModelEntity.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L60)

###### Returns

[`Color`](README.md#color)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetColor`](#getcolor-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEntityName`](#getentityname-7)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyeAngles`](#geteyeangles-7)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyePosition`](#geteyeposition-7)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetGroundEntity`](#getgroundentity-7)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetHealth`](#gethealth-7)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalAngles`](#getlocalangles-7)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalAngularVelocity`](#getlocalangularvelocity-7)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalOrigin`](#getlocalorigin-7)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalVelocity`](#getlocalvelocity-7)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetMaxHealth`](#getmaxhealth-7)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L44)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetModelName`](#getmodelname-1)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L52)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetModelScale`](#getmodelscale-1)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetMoveType`](#getmovetype-7)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetOwner`](#getowner-7)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetParent`](#getparent-7)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetTeamNumber`](#getteamnumber-7)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/entity/BaseModelEntity.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L64)

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

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsAlive`](#isalive-7)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/entity/BaseModelEntity.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L72)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsGlowing`](#isglowing-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsValid`](#isvalid-7)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsWorld`](#isworld-7)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Kill`](#kill-7)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`KillAll`](#killall-7)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`KillHierarchy`](#killhierarchy-7)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Move`](#move-7)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`On`](#on-7)

##### OnAnimationBegun()

> **OnAnimationBegun**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L143)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationDone()

> **OnAnimationDone**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L147)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationLoopCycleDone()

> **OnAnimationLoopCycleDone**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationReachedEnd()

> **OnAnimationReachedEnd**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnAnimationReachedStart()

> **OnAnimationReachedStart**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L155)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnBreak()

> **OnBreak**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/entity/FuncBreakable.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L60)

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

Defined in: [src/entity/PropDynamic.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L163)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### OnHealthChanged()

> **OnHealthChanged**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L139)

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

Defined in: [src/entity/PropDynamic.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L135)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropDynamic`](#propdynamic)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Remove`](#remove-7)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L51)

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

Defined in: [src/entity/PropDynamic.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L105)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimationNoResetLooping()

> **SetAnimationNoResetLooping**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L109)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimationNoResetNotLooping()

> **SetAnimationNoResetNotLooping**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L121)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimationNotLooping()

> **SetAnimationNotLooping**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L117)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetAnimGraphParameter()

> **SetAnimGraphParameter**(`name`, `value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L76)

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

Defined in: [src/entity/PropDynamic.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L101)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/entity/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L56)

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

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetEntityName`](#setentityname-7)

##### SetHealth()

> **SetHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetHealth`](#sethealth-7)

##### SetIdleAnimationLooping()

> **SetIdleAnimationLooping**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L113)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetIdleAnimationNotLooping()

> **SetIdleAnimationNotLooping**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L125)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetMass()

> **SetMass**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L55)

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

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetMaxHealth`](#setmaxhealth-7)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/entity/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L40)

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

Defined in: [src/entity/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetModelScale`](#setmodelscale-1)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetMoveType`](#setmovetype-7)

##### SetNavIgnore()

> **SetNavIgnore**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetOwner`](#setowner-7)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetParent`](#setparent-7)

##### SetPlaybackRate()

> **SetPlaybackRate**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L129)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetRagdollProfile()

> **SetRagdollProfile**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L81)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetRenderAttribute()

> **SetRenderAttribute**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### Skin()

> **Skin**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`FuncBreakable`](#funcbreakable).[`TakeDamage`](#takedamage-7)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Teleport`](#teleport-7)

##### TurnOff()

> **TurnOff**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L89)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TurnOn()

> **TurnOn**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/entity/BaseModelEntity.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L68)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Unglow`](#unglow-1)

##### Find()

> `static` **Find**(`r`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`Find`](#find-7)

##### FindAll()

> `static` **FindAll**(`r`): [`PropDynamic`](#propdynamic)[]

Defined in: [src/entity/PropDynamic.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamic`](#propdynamic)[]

###### Overrides

[`FuncBreakable`](#funcbreakable).[`FindAll`](#findall-7)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindAllByClass`](#findallbyclass-7)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindByClass`](#findbyclass-7)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindByClassStrict`](#findbyclassstrict-7)

##### From()

> `static` **From**(`e`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PropDynamic`](#propdynamic)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`From`](#from-6)

***

### PropDynamicOrnament

Defined in: [src/entity/PropDynamicOrnament.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamicOrnament.ts#L15)

#### Extends

- [`PropDynamic`](#propdynamic)

#### Constructors

##### Constructor

> **new PropDynamicOrnament**(`entity`): [`PropDynamicOrnament`](#propdynamicornament)

Defined in: [src/entity/PropDynamicOrnament.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamicOrnament.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PropDynamicOrnament`](#propdynamicornament)

###### Overrides

[`PropDynamic`](#propdynamic).[`constructor`](#constructor-24)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`PropDynamic`](#propdynamic).[`raw`](#raw-24)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L47)

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

Defined in: [src/entity/FuncBreakable.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L39)

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

Defined in: [src/entity/PropDynamic.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L52)

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

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`PropDynamic`](#propdynamic).[`ConnectOutput`](#connectoutput-24)

##### Detached()

> **Detached**(`opts?`): `void`

Defined in: [src/entity/PropDynamicOrnament.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamicOrnament.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L97)

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

Defined in: [src/entity/PropDynamic.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L68)

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

Defined in: [src/entity/PropDynamic.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L60)

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

Defined in: [src/entity/PropDynamic.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L93)

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

Defined in: [src/entity/PropDynamic.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L64)

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

Defined in: [src/entity/PropDynamic.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L56)

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

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireIO`](#fireio-24)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireUser1`](#fireuser1-24)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireUser2`](#fireuser2-24)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireUser3`](#fireuser3-24)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FireUser4`](#fireuser4-24)

##### FollowEntity()

> **FollowEntity**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L40)

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

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetAbsAngles`](#getabsangles-24)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetAbsAngularVelocity`](#getabsangularvelocity-24)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetAbsOrigin`](#getabsorigin-24)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetAbsVelocity`](#getabsvelocity-24)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetClassName`](#getclassname-24)

##### GetColor()

> **GetColor**(): [`Color`](README.md#color)

Defined in: [src/entity/BaseModelEntity.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L60)

###### Returns

[`Color`](README.md#color)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetColor`](#getcolor-6)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetEntityName`](#getentityname-24)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetEyeAngles`](#geteyeangles-24)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetEyePosition`](#geteyeposition-24)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetGroundEntity`](#getgroundentity-24)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetHealth`](#gethealth-24)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetLocalAngles`](#getlocalangles-24)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetLocalAngularVelocity`](#getlocalangularvelocity-24)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetLocalOrigin`](#getlocalorigin-24)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetLocalVelocity`](#getlocalvelocity-24)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetMaxHealth`](#getmaxhealth-24)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L44)

###### Returns

`string`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetModelName`](#getmodelname-6)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L52)

###### Returns

`string`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetModelScale`](#getmodelscale-6)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetMoveType`](#getmovetype-24)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetOwner`](#getowner-24)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetParent`](#getparent-24)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`PropDynamic`](#propdynamic).[`GetTeamNumber`](#getteamnumber-24)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/entity/BaseModelEntity.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L64)

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

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`PropDynamic`](#propdynamic).[`IsAlive`](#isalive-24)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/entity/BaseModelEntity.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L72)

###### Returns

`boolean`

###### Inherited from

[`PropDynamic`](#propdynamic).[`IsGlowing`](#isglowing-6)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`PropDynamic`](#propdynamic).[`IsValid`](#isvalid-24)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`PropDynamic`](#propdynamic).[`IsWorld`](#isworld-24)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Kill`](#kill-24)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`KillAll`](#killall-24)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`KillHierarchy`](#killhierarchy-24)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Move`](#move-24)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`PropDynamic`](#propdynamic).[`On`](#on-24)

##### OnAnimationBegun()

> **OnAnimationBegun**(`callback`): [`PropDynamic`](#propdynamic)

Defined in: [src/entity/PropDynamic.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L143)

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

Defined in: [src/entity/PropDynamic.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L147)

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

Defined in: [src/entity/PropDynamic.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L159)

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

Defined in: [src/entity/PropDynamic.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L151)

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

Defined in: [src/entity/PropDynamic.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L155)

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

Defined in: [src/entity/FuncBreakable.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L60)

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

Defined in: [src/entity/PropDynamic.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L163)

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

Defined in: [src/entity/PropDynamic.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L139)

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

Defined in: [src/entity/PropDynamic.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L135)

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

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Remove`](#remove-24)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L51)

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

Defined in: [src/entity/PropDynamic.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L105)

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

Defined in: [src/entity/PropDynamic.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L109)

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

Defined in: [src/entity/PropDynamic.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L121)

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

Defined in: [src/entity/PropDynamic.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L117)

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

Defined in: [src/entity/PropDynamic.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L76)

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

Defined in: [src/entity/PropDynamicOrnament.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamicOrnament.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### SetBodyGroup()

> **SetBodyGroup**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L101)

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

Defined in: [src/entity/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L56)

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

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetEntityName`](#setentityname-24)

##### SetHealth()

> **SetHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetHealth`](#sethealth-24)

##### SetIdleAnimationLooping()

> **SetIdleAnimationLooping**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L113)

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

Defined in: [src/entity/PropDynamic.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L125)

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

Defined in: [src/entity/FuncBreakable.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L55)

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

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetMaxHealth`](#setmaxhealth-24)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/entity/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L40)

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

Defined in: [src/entity/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetModelScale`](#setmodelscale-6)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetMoveType`](#setmovetype-24)

##### SetNavIgnore()

> **SetNavIgnore**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L72)

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

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetOwner`](#setowner-24)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`SetParent`](#setparent-24)

##### SetPlaybackRate()

> **SetPlaybackRate**(`value`, `opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L129)

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

Defined in: [src/entity/PropDynamic.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L81)

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

Defined in: [src/entity/PropDynamic.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L48)

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

Defined in: [src/entity/PropDynamic.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L44)

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

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`PropDynamic`](#propdynamic).[`TakeDamage`](#takedamage-24)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Teleport`](#teleport-24)

##### TurnOff()

> **TurnOff**(`opts?`): `void`

Defined in: [src/entity/PropDynamic.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L89)

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

Defined in: [src/entity/PropDynamic.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamic.ts#L85)

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

Defined in: [src/entity/BaseModelEntity.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L68)

###### Returns

`void`

###### Inherited from

[`PropDynamic`](#propdynamic).[`Unglow`](#unglow-6)

##### Find()

> `static` **Find**(`r`): [`PropDynamicOrnament`](#propdynamicornament)

Defined in: [src/entity/PropDynamicOrnament.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamicOrnament.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamicOrnament`](#propdynamicornament)

###### Overrides

[`PropDynamic`](#propdynamic).[`Find`](#find-24)

##### FindAll()

> `static` **FindAll**(`r`): [`PropDynamicOrnament`](#propdynamicornament)[]

Defined in: [src/entity/PropDynamicOrnament.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamicOrnament.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropDynamicOrnament`](#propdynamicornament)[]

###### Overrides

[`PropDynamic`](#propdynamic).[`FindAll`](#findall-24)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`PropDynamic`](#propdynamic).[`FindAllByClass`](#findallbyclass-24)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`PropDynamic`](#propdynamic).[`FindByClass`](#findbyclass-24)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`PropDynamic`](#propdynamic).[`FindByClassStrict`](#findbyclassstrict-24)

##### From()

> `static` **From**(`e`): [`PropDynamicOrnament`](#propdynamicornament)

Defined in: [src/entity/PropDynamicOrnament.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropDynamicOrnament.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PropDynamicOrnament`](#propdynamicornament)

###### Overrides

[`PropDynamic`](#propdynamic).[`From`](#from-22)

***

### PropPhysicsMultiplayer

Defined in: [src/entity/PropPhysicsMultiplayer.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L16)

#### Extends

- [`FuncBreakable`](#funcbreakable)

#### Constructors

##### Constructor

> **new PropPhysicsMultiplayer**(`entity`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/entity/PropPhysicsMultiplayer.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`constructor`](#constructor-7)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`raw`](#raw-7)

#### Methods

##### AddHealth()

> **AddHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L47)

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

Defined in: [src/entity/FuncBreakable.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L39)

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

Defined in: [src/entity/PropPhysicsMultiplayer.ts:100](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L100)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`FuncBreakable`](#funcbreakable).[`ConnectOutput`](#connectoutput-7)

##### DisableDamageForces()

> **DisableDamageForces**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableGravity()

> **DisableGravity**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableMotion()

> **DisableMotion**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### DisableShadow()

> **DisableShadow**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:84](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L84)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableDamageForces()

> **EnableDamageForces**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableGravity()

> **EnableGravity**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableMotion()

> **EnableMotion**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### EnableShadow()

> **EnableShadow**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireIO`](#fireio-7)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser1`](#fireuser1-7)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser2`](#fireuser2-7)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser3`](#fireuser3-7)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FireUser4`](#fireuser4-7)

##### FollowEntity()

> **FollowEntity**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsAngles`](#getabsangles-7)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsAngularVelocity`](#getabsangularvelocity-7)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsOrigin`](#getabsorigin-7)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetAbsVelocity`](#getabsvelocity-7)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetClassName`](#getclassname-7)

##### GetColor()

> **GetColor**(): [`Color`](README.md#color)

Defined in: [src/entity/BaseModelEntity.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L60)

###### Returns

[`Color`](README.md#color)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetColor`](#getcolor-1)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEntityName`](#getentityname-7)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyeAngles`](#geteyeangles-7)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetEyePosition`](#geteyeposition-7)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetGroundEntity`](#getgroundentity-7)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetHealth`](#gethealth-7)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalAngles`](#getlocalangles-7)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalAngularVelocity`](#getlocalangularvelocity-7)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalOrigin`](#getlocalorigin-7)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetLocalVelocity`](#getlocalvelocity-7)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetMaxHealth`](#getmaxhealth-7)

##### GetModelName()

> **GetModelName**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L44)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetModelName`](#getmodelname-1)

##### GetModelScale()

> **GetModelScale**(): `string`

Defined in: [src/entity/BaseModelEntity.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L52)

###### Returns

`string`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetModelScale`](#getmodelscale-1)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetMoveType`](#getmovetype-7)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetOwner`](#getowner-7)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetParent`](#getparent-7)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`GetTeamNumber`](#getteamnumber-7)

##### Glow()

> **Glow**(`color?`): `void`

Defined in: [src/entity/BaseModelEntity.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L64)

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

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsAlive`](#isalive-7)

##### IsGlowing()

> **IsGlowing**(): `boolean`

Defined in: [src/entity/BaseModelEntity.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L72)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsGlowing`](#isglowing-1)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsValid`](#isvalid-7)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`IsWorld`](#isworld-7)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Kill`](#kill-7)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`KillAll`](#killall-7)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`KillHierarchy`](#killhierarchy-7)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Move`](#move-7)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`On`](#on-7)

##### OnAwakened()

> **OnAwakened**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/entity/PropPhysicsMultiplayer.ts:114](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L114)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnBreak()

> **OnBreak**(`callback`): [`FuncBreakable`](#funcbreakable)

Defined in: [src/entity/FuncBreakable.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L60)

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

Defined in: [src/entity/FuncBreakable.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L65)

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

Defined in: [src/entity/PropPhysicsMultiplayer.ts:106](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L106)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnOutOfWorld()

> **OnOutOfWorld**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/entity/PropPhysicsMultiplayer.ts:122](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L122)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnPlayerUse()

> **OnPlayerUse**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/entity/PropPhysicsMultiplayer.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L118)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### OnTakeDamage()

> **OnTakeDamage**(`callback`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/entity/PropPhysicsMultiplayer.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

##### physdamagescale()

> **physdamagescale**(`value`, `opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:92](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L92)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Remove`](#remove-7)

##### RemoveHealth()

> **RemoveHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L51)

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

Defined in: [src/entity/PropPhysicsMultiplayer.ts:88](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L88)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### SetColor()

> **SetColor**(`c`): `void`

Defined in: [src/entity/BaseModelEntity.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L56)

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

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetEntityName`](#setentityname-7)

##### SetHealth()

> **SetHealth**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetHealth`](#sethealth-7)

##### SetMass()

> **SetMass**(`value`, `opts?`): `void`

Defined in: [src/entity/FuncBreakable.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/FuncBreakable.ts#L55)

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

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetMaxHealth`](#setmaxhealth-7)

##### SetModel()

> **SetModel**(`s`): `void`

Defined in: [src/entity/BaseModelEntity.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L40)

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

Defined in: [src/entity/BaseModelEntity.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `number` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetModelScale`](#setmodelscale-1)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetMoveType`](#setmovetype-7)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetOwner`](#setowner-7)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`SetParent`](#setparent-7)

##### SetRenderAttribute()

> **SetRenderAttribute**(`value`, `opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:96](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L96)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `opts` | \{ \} |

###### Returns

`void`

##### Skin()

> **Skin**(`value`, `opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | \{ \} |

###### Returns

`void`

##### Sleep()

> **Sleep**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`FuncBreakable`](#funcbreakable).[`TakeDamage`](#takedamage-7)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Teleport`](#teleport-7)

##### Unglow()

> **Unglow**(): `void`

Defined in: [src/entity/BaseModelEntity.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/BaseModelEntity.ts#L68)

###### Returns

`void`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`Unglow`](#unglow-1)

##### Wake()

> **Wake**(`opts?`): `void`

Defined in: [src/entity/PropPhysicsMultiplayer.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/entity/PropPhysicsMultiplayer.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`Find`](#find-7)

##### FindAll()

> `static` **FindAll**(`r`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)[]

Defined in: [src/entity/PropPhysicsMultiplayer.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)[]

###### Overrides

[`FuncBreakable`](#funcbreakable).[`FindAll`](#findall-7)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindAllByClass`](#findallbyclass-7)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindByClass`](#findbyclass-7)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`FuncBreakable`](#funcbreakable).[`FindByClassStrict`](#findbyclassstrict-7)

##### From()

> `static` **From**(`e`): [`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

Defined in: [src/entity/PropPhysicsMultiplayer.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/PropPhysicsMultiplayer.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

[`PropPhysicsMultiplayer`](#propphysicsmultiplayer)

###### Overrides

[`FuncBreakable`](#funcbreakable).[`From`](#from-6)

***

### TriggerMultiple

Defined in: [src/entity/TriggerMultiple.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L14)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new TriggerMultiple**(`entity`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/entity/TriggerMultiple.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/entity/TriggerMultiple.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### OnEndTouch()

> **OnEndTouch**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnEndTouchAll()

> **OnEndTouchAll**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnNotTouching()

> **OnNotTouching**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnStartTouch()

> **OnStartTouch**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnStartTouchAll()

> **OnStartTouchAll**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnTouching()

> **OnTouching**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnTouchingEachEntity()

> **OnTouchingEachEntity**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### OnTrigger()

> **OnTrigger**(`callback`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L71)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Toggle()

> **Toggle**(`opts?`): `void`

Defined in: [src/entity/TriggerMultiple.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### TouchTest()

> **TouchTest**(`opts?`): `void`

Defined in: [src/entity/TriggerMultiple.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`TriggerMultiple`](#triggermultiple)[]

Defined in: [src/entity/TriggerMultiple.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerMultiple`](#triggermultiple)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`entity`): [`TriggerMultiple`](#triggermultiple)

Defined in: [src/entity/TriggerMultiple.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerMultiple.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerMultiple`](#triggermultiple)

***

### TriggerTeleport

Defined in: [src/entity/TriggerTeleport.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L14)

#### Extends

- [`EntityHelper`](#abstract-entityhelper)

#### Constructors

##### Constructor

> **new TriggerTeleport**(`entity`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/entity/TriggerTeleport.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`constructor`](#constructor-2)

#### Accessors

##### raw

###### Get Signature

> **get** **raw**(): `Entity`

Defined in: [src/entity/EntityHelper.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L63)

###### Returns

`Entity`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`raw`](#raw-2)

#### Methods

##### ConnectOutput()

> **ConnectOutput**(`event_name`, `callback`): `void`

Defined in: [src/entity/EntityHelper.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L101)

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

[`EntityHelper`](#abstract-entityhelper).[`ConnectOutput`](#connectoutput-2)

##### Disable()

> **Disable**(`opts?`): `void`

Defined in: [src/entity/TriggerTeleport.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Enable()

> **Enable**(`opts?`): `void`

Defined in: [src/entity/TriggerTeleport.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### FireIO()

> **FireIO**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireIO`](#fireio-2)

##### FireUser1()

> **FireUser1**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser1`](#fireuser1-2)

##### FireUser2()

> **FireUser2**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser2`](#fireuser2-2)

##### FireUser3()

> **FireUser3**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser3`](#fireuser3-2)

##### FireUser4()

> **FireUser4**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FireUser4`](#fireuser4-2)

##### GetAbsAngles()

> **GetAbsAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L132)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngles`](#getabsangles-2)

##### GetAbsAngularVelocity()

> **GetAbsAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L148)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsAngularVelocity`](#getabsangularvelocity-2)

##### GetAbsOrigin()

> **GetAbsOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L124)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsOrigin`](#getabsorigin-2)

##### GetAbsVelocity()

> **GetAbsVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:140](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L140)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetAbsVelocity`](#getabsvelocity-2)

##### GetClassName()

> **GetClassName**(): `string`

Defined in: [src/entity/EntityHelper.ts:180](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L180)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetClassName`](#getclassname-2)

##### GetEntityName()

> **GetEntityName**(): `string`

Defined in: [src/entity/EntityHelper.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L184)

###### Returns

`string`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEntityName`](#getentityname-2)

##### GetEyeAngles()

> **GetEyeAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:156](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L156)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyeAngles`](#geteyeangles-2)

##### GetEyePosition()

> **GetEyePosition**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L160)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetEyePosition`](#geteyeposition-2)

##### GetGroundEntity()

> **GetGroundEntity**(): `any`

Defined in: [src/entity/EntityHelper.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L244)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetGroundEntity`](#getgroundentity-2)

##### GetHealth()

> **GetHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L212)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetHealth`](#gethealth-2)

##### GetLocalAngles()

> **GetLocalAngles**(): [`QAngle`](Namespace.Math.md#qangle)

Defined in: [src/entity/EntityHelper.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L136)

###### Returns

[`QAngle`](Namespace.Math.md#qangle)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngles`](#getlocalangles-2)

##### GetLocalAngularVelocity()

> **GetLocalAngularVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L152)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalAngularVelocity`](#getlocalangularvelocity-2)

##### GetLocalOrigin()

> **GetLocalOrigin**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L128)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalOrigin`](#getlocalorigin-2)

##### GetLocalVelocity()

> **GetLocalVelocity**(): [`Vector3`](Namespace.Math.md#vector3)

Defined in: [src/entity/EntityHelper.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L144)

###### Returns

[`Vector3`](Namespace.Math.md#vector3)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetLocalVelocity`](#getlocalvelocity-2)

##### GetMaxHealth()

> **GetMaxHealth**(): `number`

Defined in: [src/entity/EntityHelper.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L224)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMaxHealth`](#getmaxhealth-2)

##### GetMoveType()

> **GetMoveType**(): `CSMoveType`

Defined in: [src/entity/EntityHelper.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L172)

###### Returns

`CSMoveType`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetMoveType`](#getmovetype-2)

##### GetOwner()

> **GetOwner**(): `any`

Defined in: [src/entity/EntityHelper.ts:192](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L192)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetOwner`](#getowner-2)

##### GetParent()

> **GetParent**(): `any`

Defined in: [src/entity/EntityHelper.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L200)

###### Returns

`any`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetParent`](#getparent-2)

##### GetTeamNumber()

> **GetTeamNumber**(): `number`

Defined in: [src/entity/EntityHelper.ts:208](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L208)

###### Returns

`number`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`GetTeamNumber`](#getteamnumber-2)

##### IsAlive()

> **IsAlive**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L236)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsAlive`](#isalive-2)

##### IsValid()

> **IsValid**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:120](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L120)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsValid`](#isvalid-2)

##### IsWorld()

> **IsWorld**(): `boolean`

Defined in: [src/entity/EntityHelper.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L240)

###### Returns

`boolean`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`IsWorld`](#isworld-2)

##### Kill()

> **Kill**(): `void`

Defined in: [src/entity/EntityHelper.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L252)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Kill`](#kill-2)

##### KillAll()

> **KillAll**(): `void`

Defined in: [src/entity/EntityHelper.ts:260](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L260)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillAll`](#killall-2)

##### KillHierarchy()

> **KillHierarchy**(`opts?`): `void`

Defined in: [src/entity/EntityHelper.ts:256](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`KillHierarchy`](#killhierarchy-2)

##### Move()

> **Move**(`newValues`): `void`

Defined in: [src/entity/EntityHelper.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L168)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValues` | \{ `angles?`: [`QAngle`](Namespace.Math.md#qangle); `angularVelocity?`: [`Vector3`](Namespace.Math.md#vector3); `position?`: [`Vector3`](Namespace.Math.md#vector3); `velocity?`: [`Vector3`](Namespace.Math.md#vector3); \} |
| `newValues.angles?` | [`QAngle`](Namespace.Math.md#qangle) |
| `newValues.angularVelocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `newValues.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Move`](#move-2)

##### On()

> **On**(`event_name`, `callback`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`On`](#on-2)

##### OnEndTouch()

> **OnEndTouch**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/entity/TriggerTeleport.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### OnEndTouchAll()

> **OnEndTouchAll**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/entity/TriggerTeleport.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### OnKilled()

> **OnKilled**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/entity/TriggerTeleport.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### OnStartTouch()

> **OnStartTouch**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/entity/TriggerTeleport.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### OnStartTouchAll()

> **OnStartTouchAll**(`callback`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/entity/TriggerTeleport.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L59)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `ConnectOutputCallback` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

##### Remove()

> **Remove**(): `void`

Defined in: [src/entity/EntityHelper.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L264)

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Remove`](#remove-2)

##### SetEntityName()

> **SetEntityName**(`s`): `void`

Defined in: [src/entity/EntityHelper.ts:188](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetEntityName`](#setentityname-2)

##### SetHealth()

> **SetHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetHealth`](#sethealth-2)

##### SetMaxHealth()

> **SetMaxHealth**(`hp`): `void`

Defined in: [src/entity/EntityHelper.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hp` | `number` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMaxHealth`](#setmaxhealth-2)

##### SetMoveType()

> **SetMoveType**(`moveType`): `void`

Defined in: [src/entity/EntityHelper.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `moveType` | `CSMoveType` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetMoveType`](#setmovetype-2)

##### SetOwner()

> **SetOwner**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L196)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetOwner`](#setowner-2)

##### SetParent()

> **SetParent**(`e`): `void`

Defined in: [src/entity/EntityHelper.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `Entity` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`SetParent`](#setparent-2)

##### TakeDamage()

> **TakeDamage**(`__namedParameters`): `number`

Defined in: [src/entity/EntityHelper.ts:248](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L248)

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

[`EntityHelper`](#abstract-entityhelper).[`TakeDamage`](#takedamage-2)

##### Teleport()

> **Teleport**(`__namedParameters`): `void`

Defined in: [src/entity/EntityHelper.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L164)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `angularVelocity`: `any`; `position`: `any`; `rotation`: `any`; `velocity`: `any`; \} |
| `__namedParameters.angularVelocity` | `any` |
| `__namedParameters.position` | `any` |
| `__namedParameters.rotation` | `any` |
| `__namedParameters.velocity` | `any` |

###### Returns

`void`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`Teleport`](#teleport-2)

##### Toggle()

> **Toggle**(`opts?`): `void`

Defined in: [src/entity/TriggerTeleport.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`void`

##### Find()

> `static` **Find**(`r`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/entity/TriggerTeleport.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`Find`](#find-2)

##### FindAll()

> `static` **FindAll**(`r`): [`TriggerTeleport`](#triggerteleport)[]

Defined in: [src/entity/TriggerTeleport.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

###### Returns

[`TriggerTeleport`](#triggerteleport)[]

###### Overrides

[`EntityHelper`](#abstract-entityhelper).[`FindAll`](#findall-2)

##### FindAllByClass()

> `static` **FindAllByClass**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)[]

Defined in: [src/entity/EntityHelper.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)[]

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindAllByClass`](#findallbyclass-2)

##### FindByClass()

> `static` **FindByClass**(`classname`, `r`, `error?`): [`EntityHelper`](#abstract-entityhelper) \| `null`

Defined in: [src/entity/EntityHelper.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `classname` | `string` | `undefined` |
| `r` | `string` \| `RegExp` | `undefined` |
| `error` | `boolean` | `false` |

###### Returns

[`EntityHelper`](#abstract-entityhelper) \| `null`

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClass`](#findbyclass-2)

##### FindByClassStrict()

> `static` **FindByClassStrict**(`classname`, `r`): [`EntityHelper`](#abstract-entityhelper)

Defined in: [src/entity/EntityHelper.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/EntityHelper.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

###### Returns

[`EntityHelper`](#abstract-entityhelper)

###### Inherited from

[`EntityHelper`](#abstract-entityhelper).[`FindByClassStrict`](#findbyclassstrict-2)

##### From()

> `static` **From**(`entity`): [`TriggerTeleport`](#triggerteleport)

Defined in: [src/entity/TriggerTeleport.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/entity/TriggerTeleport.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `Entity` |

###### Returns

[`TriggerTeleport`](#triggerteleport)

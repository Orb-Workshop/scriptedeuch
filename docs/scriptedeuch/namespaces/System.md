[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / System

# System

Mountable Systems that extend `Base.System`

## Classes

### DeathmatchSpawnerSystem

Defined in: [src/system/DeathmatchSpawnerSystem.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L10)

Implementations which extend the abstract `Base.System` class.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new DeathmatchSpawnerSystem**(): [`DeathmatchSpawnerSystem`](#deathmatchspawnersystem)

Defined in: [src/system/DeathmatchSpawnerSystem.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L13)

###### Returns

[`DeathmatchSpawnerSystem`](#deathmatchspawnersystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### \_disableAllSpawners()

> **\_disableAllSpawners**(): `void`

Defined in: [src/system/DeathmatchSpawnerSystem.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L64)

###### Returns

`void`

##### \_enableSpawner()

> **\_enableSpawner**(`spawner`): `void`

Defined in: [src/system/DeathmatchSpawnerSystem.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L71)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `spawner` | `any` |

###### Returns

`void`

##### \_getDisabledSpawners()

> **\_getDisabledSpawners**(): `any`

Defined in: [src/system/DeathmatchSpawnerSystem.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L76)

###### Returns

`any`

##### \_scoreSpawner()

> **\_scoreSpawner**(`spawner`): `any`[]

Defined in: [src/system/DeathmatchSpawnerSystem.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `spawner` | `any` |

###### Returns

`any`[]

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(): `void`

Defined in: [src/system/DeathmatchSpawnerSystem.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L131)

Instance.OnPlayerActivate

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(): `void`

Defined in: [src/system/DeathmatchSpawnerSystem.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L127)

Instance.OnPlayerKill

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/DeathmatchSpawnerSystem.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L101)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

##### GetActivePlayers()

> `static` **GetActivePlayers**(): `any`[]

Defined in: [src/system/DeathmatchSpawnerSystem.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L37)

###### Returns

`any`[]

##### GetAlivePlayers()

> `static` **GetAlivePlayers**(): `any`[]

Defined in: [src/system/DeathmatchSpawnerSystem.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L46)

###### Returns

`any`[]

##### GetDeadPlayers()

> `static` **GetDeadPlayers**(): `any`[]

Defined in: [src/system/DeathmatchSpawnerSystem.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L55)

###### Returns

`any`[]

##### GetPlayerControllers()

> `static` **GetPlayerControllers**(): `any`[]

Defined in: [src/system/DeathmatchSpawnerSystem.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L25)

###### Returns

`any`[]

##### RetrievePlayerSpawns()

> `static` **RetrievePlayerSpawns**(): `any`

Defined in: [src/system/DeathmatchSpawnerSystem.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L20)

###### Returns

`any`

***

### DialogSystem

Defined in: [src/system/DialogSystem.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L10)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new DialogSystem**(`opts?`): [`DialogSystem`](#dialogsystem)

Defined in: [src/system/DialogSystem.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

[`DialogSystem`](#dialogsystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### CreateDialog()

> **CreateDialog**(`opts?`): `Dialog`

Defined in: [src/system/DialogSystem.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`Dialog`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/DialogSystem.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L17)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/DialogSystem.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L27)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### DoubleJumpSystem

Defined in: [src/system/DoubleJumpSystem.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DoubleJumpSystem.ts#L10)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new DoubleJumpSystem**(`jump_velocity?`): [`DoubleJumpSystem`](#doublejumpsystem)

Defined in: [src/system/DoubleJumpSystem.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DoubleJumpSystem.ts#L12)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `jump_velocity` | `number` | `DEFAULT_JUMP_VELOCITY` |

###### Returns

[`DoubleJumpSystem`](#doublejumpsystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/DoubleJumpSystem.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DoubleJumpSystem.ts#L17)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### FreezeTimeSystem

Defined in: [src/system/FreezeTimeSystem.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L14)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new FreezeTimeSystem**(): [`FreezeTimeSystem`](#freezetimesystem)

Defined in: [src/system/FreezeTimeSystem.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L21)

###### Returns

[`FreezeTimeSystem`](#freezetimesystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### GetElapsedFreezeTime()

> **GetElapsedFreezeTime**(): `number`

Defined in: [src/system/FreezeTimeSystem.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L28)

The elapsed amount of time since the round began, and the match has been frozen.

###### Returns

`number`

##### GetElapsedRoundTime()

> **GetElapsedRoundTime**(): `number`

Defined in: [src/system/FreezeTimeSystem.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L40)

Returns the elapsed time since the round started, taking into
account the freeze time.

Note:

- During the frozen period, this should be zero.

###### Returns

`number`

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(): `void`

Defined in: [src/system/FreezeTimeSystem.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L50)

Instance.OnRoundEnd

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/system/FreezeTimeSystem.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L45)

Instance.OnRoundStart

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/FreezeTimeSystem.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L54)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### GameAnnouncerSystem

Defined in: [src/system/GameAnnouncerSystem.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L18)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new GameAnnouncerSystem**(`__namedParameters?`): [`GameAnnouncerSystem`](#gameannouncersystem)

Defined in: [src/system/GameAnnouncerSystem.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `kill_award_interval?`: `number`; \} |
| `__namedParameters.kill_award_interval?` | `number` |

###### Returns

[`GameAnnouncerSystem`](#gameannouncersystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### \_areTeammates()

> **\_areTeammates**(`player_pawn_a`, `player_pawn_b`): `boolean`

Defined in: [src/system/GameAnnouncerSystem.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn_a` | `any` |
| `player_pawn_b` | `any` |

###### Returns

`boolean`

##### \_checkPlayer()

> **\_checkPlayer**(`player_pawn`): `string` \| `null`

Defined in: [src/system/GameAnnouncerSystem.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`string` \| `null`

##### \_getPlayer()

> **\_getPlayer**(`player_pawn`): `any`

Defined in: [src/system/GameAnnouncerSystem.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`any`

##### \_hasKillingSpree()

> **\_hasKillingSpree**(`player_pawn`): `boolean`

Defined in: [src/system/GameAnnouncerSystem.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`boolean`

##### \_recordDeath()

> **\_recordDeath**(`player_pawn`): `void`

Defined in: [src/system/GameAnnouncerSystem.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L127)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`void`

##### \_recordKill()

> **\_recordKill**(`player_pawn_attacker`, `player_pawn_death`, `weapon_name`): `void`

Defined in: [src/system/GameAnnouncerSystem.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn_attacker` | `any` |
| `player_pawn_death` | `any` |
| `weapon_name` | `any` |

###### Returns

`void`

##### \_resetPlayer()

> **\_resetPlayer**(`player_pawn`): `void`

Defined in: [src/system/GameAnnouncerSystem.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`void`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/GameAnnouncerSystem.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L34)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/system/GameAnnouncerSystem.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L131)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/base/System.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L50)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### KnifeDashSystem

Defined in: [src/system/KnifeDashSystem.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/KnifeDashSystem.ts#L13)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new KnifeDashSystem**(`dash_speed?`): [`KnifeDashSystem`](#knifedashsystem)

Defined in: [src/system/KnifeDashSystem.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/KnifeDashSystem.ts#L15)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `dash_speed` | `number` | `DefaultDashSpeed` |

###### Returns

[`KnifeDashSystem`](#knifedashsystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="dash_speed"></a> `dash_speed` | `number` | [src/system/KnifeDashSystem.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/KnifeDashSystem.ts#L14) |

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`__namedParameters`): `void`

Defined in: [src/system/KnifeDashSystem.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/KnifeDashSystem.ts#L20)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `attackType`: `any`; `weapon`: `any`; \} |
| `__namedParameters.attackType` | `any` |
| `__namedParameters.weapon` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/base/System.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L50)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### PlayerHealthRegenerationSystem

Defined in: [src/system/PlayerHealthRegenerationSystem.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L9)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new PlayerHealthRegenerationSystem**(`__namedParameters?`): [`PlayerHealthRegenerationSystem`](#playerhealthregenerationsystem)

Defined in: [src/system/PlayerHealthRegenerationSystem.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `max_health_recovery?`: `number`; `regeneration_delay?`: `number`; `regeneration_rate?`: `number`; `tick_rate?`: `number`; \} |
| `__namedParameters.max_health_recovery?` | `number` |
| `__namedParameters.regeneration_delay?` | `number` |
| `__namedParameters.regeneration_rate?` | `number` |
| `__namedParameters.tick_rate?` | `number` |

###### Returns

[`PlayerHealthRegenerationSystem`](#playerhealthregenerationsystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### \_checkPlayer()

> **\_checkPlayer**(`player_pawn`): `any`

Defined in: [src/system/PlayerHealthRegenerationSystem.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`any`

##### \_getPlayer()

> **\_getPlayer**(`player_pawn`): `any`

Defined in: [src/system/PlayerHealthRegenerationSystem.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`any`

##### \_resetPlayer()

> **\_resetPlayer**(`player_pawn`, `afflicted_damage?`): `void`

Defined in: [src/system/PlayerHealthRegenerationSystem.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L60)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `player_pawn` | `any` | `undefined` |
| `afflicted_damage` | `number` | `0` |

###### Returns

`void`

##### cleanup()

> **cleanup**(): `void`

Defined in: [src/system/PlayerHealthRegenerationSystem.ts:100](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L100)

###### Returns

`void`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/PlayerHealthRegenerationSystem.ts:96](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L96)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `object`

Defined in: [src/system/PlayerHealthRegenerationSystem.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L89)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`object`

###### Deprecated

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/PlayerHealthRegenerationSystem.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L31)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### PlayerModelChangerSystem

Defined in: [src/system/PlayerModelChangerSystem.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerModelChangerSystem.ts#L13)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new PlayerModelChangerSystem**(`__namedParameters?`): [`PlayerModelChangerSystem`](#playermodelchangersystem)

Defined in: [src/system/PlayerModelChangerSystem.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerModelChangerSystem.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `ct_colors?`: `object`[]; `ct_models?`: `string`[]; `script_input_name?`: `string`; `t_colors?`: `object`[]; `t_models?`: `string`[]; \} |
| `__namedParameters.ct_colors?` | `object`[] |
| `__namedParameters.ct_models?` | `string`[] |
| `__namedParameters.script_input_name?` | `string` |
| `__namedParameters.t_colors?` | `object`[] |
| `__namedParameters.t_models?` | `string`[] |

###### Returns

[`PlayerModelChangerSystem`](#playermodelchangersystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/system/PlayerModelChangerSystem.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerModelChangerSystem.ts#L121)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/base/System.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L50)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### PlayerSlidingSystem

Defined in: [src/system/PlayerSlidingSystem.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerSlidingSystem.ts#L46)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new PlayerSlidingSystem**(): [`PlayerSlidingSystem`](#playerslidingsystem)

Defined in: [src/system/PlayerSlidingSystem.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerSlidingSystem.ts#L48)

###### Returns

[`PlayerSlidingSystem`](#playerslidingsystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="player_data"></a> `player_data` | `Map`\<`CSPlayerPawn`, `PlayerSlidingData`\> | [src/system/PlayerSlidingSystem.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerSlidingSystem.ts#L47) |

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/PlayerSlidingSystem.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerSlidingSystem.ts#L70)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### SchedulingSystem

Defined in: [src/system/SchedulingSystem.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L17)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new SchedulingSystem**(): [`SchedulingSystem`](#schedulingsystem)

Defined in: [src/system/SchedulingSystem.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L21)

###### Returns

[`SchedulingSystem`](#schedulingsystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### clearInterval()

> **clearInterval**(`id`): `void`

Defined in: [src/system/SchedulingSystem.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `any` |

###### Returns

`void`

##### clearTimeout()

> **clearTimeout**(`id`): `void`

Defined in: [src/system/SchedulingSystem.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `any` |

###### Returns

`void`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### setInterval()

> **setInterval**(`callback`, `ms`): `number`

Defined in: [src/system/SchedulingSystem.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |
| `ms` | `number` |

###### Returns

`number`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### setTimeout()

> **setTimeout**(`callback`, `ms`): `number`

Defined in: [src/system/SchedulingSystem.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |
| `ms` | `number` |

###### Returns

`number`

##### Think()

> **Think**(): `void`

Defined in: [src/system/SchedulingSystem.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L52)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### SoundEventSystem

Defined in: [src/system/SoundEventSystem.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L132)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new SoundEventSystem**(`__namedParameters?`): [`SoundEventSystem`](#soundeventsystem)

Defined in: [src/system/SoundEventSystem.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L137)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `debug?`: `boolean`; `soundevent_timeout?`: `number`; `tick_rate?`: `number`; \} |
| `__namedParameters.debug?` | `boolean` |
| `__namedParameters.soundevent_timeout?` | `number` |
| `__namedParameters.tick_rate?` | `number` |

###### Returns

[`SoundEventSystem`](#soundeventsystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/SoundEventSystem.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L148)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L181)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### PlaySoundToPlayer()

> **PlaySoundToPlayer**(`player_pawn`, `soundevent_name`, `immediate?`): `void`

Defined in: [src/system/SoundEventSystem.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L152)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `player_pawn` | `any` | `undefined` |
| `soundevent_name` | `any` | `undefined` |
| `immediate` | `boolean` | `false` |

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/SoundEventSystem.ts:201](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L201)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

***

### WeaponReplacementSystem

Defined in: [src/system/WeaponReplacementSystem.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L17)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#abstract-system)

#### Constructors

##### Constructor

> **new WeaponReplacementSystem**(`__namedParameters`): [`WeaponReplacementSystem`](#weaponreplacementsystem)

Defined in: [src/system/WeaponReplacementSystem.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `melee?`: \{ \}; `primary?`: \{ \}; `secondary?`: \{ \}; `tick_rate?`: `number`; \} |
| `__namedParameters.melee?` | \{ \} |
| `__namedParameters.primary?` | \{ \} |
| `__namedParameters.secondary?` | \{ \} |
| `__namedParameters.tick_rate?` | `number` |

###### Returns

[`WeaponReplacementSystem`](#weaponreplacementsystem)

###### Overrides

[`System`](Base/README.md#abstract-system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`GetDelta`](Base/README.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`MaybeThink`](Base/README.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/WeaponReplacementSystem.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L35)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnActivate`](Base/README.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L67)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L79)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L85)

Instance.OnBombPlant()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; `planter`: `CSPlayerPawn`; \} |
| `event.plantedC4` | `Entity` |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L91)

Instance.OnBulletImpact()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `position`: `VectorType`; `weapon`: `CSWeaponBase`; \} |
| `event.position` | `VectorType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L97)

Instance.OnGrenadeBounce()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `bounces`: `number`; `projectile`: `Entity`; \} |
| `event.bounces` | `number` |
| `event.projectile` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L103)

Instance.OnGrenadeThrow()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `projectile`: `Entity`; `weapon`: `CSWeaponBase`; \} |
| `event.projectile` | `Entity` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L109)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:115](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L115)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L121)

Instance.OnKnifeAttack

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attackType`: `CSWeaponAttackType`; `weapon`: `CSWeaponBase`; \} |
| `event.attackType` | `CSWeaponAttackType` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L73)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnModifyPlayerDamage`](Base/README.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L127)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L133)

Instance.OnPlayerChat

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `any`; `team`: `number`; `text`: `string`; \} |
| `event.player` | `any` |
| `event.team` | `number` |
| `event.text` | `string` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L139)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:145](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L145)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:151](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L151)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:157](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L157)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L163)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `inflictor?`: `any`; `player`: `CSPlayerPawn`; `weapon?`: `any`; \} |
| `event.attacker?` | `any` |
| `event.inflictor?` | `any` |
| `event.player` | `CSPlayerPawn` |
| `event.weapon?` | `any` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L169)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L175)

Instance.OnPlayerPing

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; `position`: `VectorType`; \} |
| `event.player` | `CSPlayerController` |
| `event.position` | `VectorType` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/system/WeaponReplacementSystem.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L83)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:187](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L187)

Instance.OnRoundEnd

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `reason`: `CSRoundEndReason`; `winningTeam`: `number`; \} |
| `event.reason` | `CSRoundEndReason` |
| `event.winningTeam` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReload`](Base/README.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L205)

Instance.OnReload({after})

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `T` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L199)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### ReplaceWeapons()

> **ReplaceWeapons**(`player_pawn`): `void`

Defined in: [src/system/WeaponReplacementSystem.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTick`](Base/README.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#abstract-system).[`SetTickInterval`](Base/README.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/WeaponReplacementSystem.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L78)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#abstract-system).[`Think`](Base/README.md#think-2)

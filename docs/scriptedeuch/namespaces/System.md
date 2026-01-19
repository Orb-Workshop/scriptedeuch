[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / System

# System

Mountable Systems that extend `Base.System`

## Classes

### DeathmatchSpawnerSystem

Defined in: [system/DeathmatchSpawnerSystem.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L10)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#system)

#### Constructors

##### Constructor

> **new DeathmatchSpawnerSystem**(): [`DeathmatchSpawnerSystem`](#deathmatchspawnersystem)

Defined in: [system/DeathmatchSpawnerSystem.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L13)

###### Returns

[`DeathmatchSpawnerSystem`](#deathmatchspawnersystem)

###### Overrides

[`System`](Base/README.md#system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### \_disableAllSpawners()

> **\_disableAllSpawners**(): `void`

Defined in: [system/DeathmatchSpawnerSystem.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L64)

###### Returns

`void`

##### \_enableSpawner()

> **\_enableSpawner**(`spawner`): `void`

Defined in: [system/DeathmatchSpawnerSystem.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L71)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `spawner` | `any` |

###### Returns

`void`

##### \_getDisabledSpawners()

> **\_getDisabledSpawners**(): `any`

Defined in: [system/DeathmatchSpawnerSystem.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L76)

###### Returns

`any`

##### \_scoreSpawner()

> **\_scoreSpawner**(`spawner`): `any`[]

Defined in: [system/DeathmatchSpawnerSystem.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `spawner` | `any` |

###### Returns

`any`[]

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`EnableSystem`](Base/README.md#enablesystem)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`MaybeThink`](Base/README.md#maybethink-4)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [base/System.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L57)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnActivate`](Base/README.md#onactivate)

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [base/System.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L63)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L69)

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

[`System`](Base/README.md#system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L75)

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

[`System`](Base/README.md#system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L81)

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

[`System`](Base/README.md#system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L87)

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

[`System`](Base/README.md#system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L93)

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

[`System`](Base/README.md#system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L99)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L105)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L111)

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

[`System`](Base/README.md#system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnPlayerActivate()

> **OnPlayerActivate**(): `void`

Defined in: [system/DeathmatchSpawnerSystem.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L131)

Instance.OnPlayerActivate

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L123)

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

[`System`](Base/README.md#system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L129)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L135)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L141)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L147)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(): `void`

Defined in: [system/DeathmatchSpawnerSystem.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L127)

Instance.OnPlayerKill

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L159)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L165)

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

[`System`](Base/README.md#system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [base/System.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L171)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:177](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L177)

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

[`System`](Base/README.md#system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [base/System.ts:183](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L183)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L195)

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

[`System`](Base/README.md#system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [base/System.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L189)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTick`](Base/README.md#settick-4)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTickInterval`](Base/README.md#settickinterval-4)

##### Think()

> **Think**(): `void`

Defined in: [system/DeathmatchSpawnerSystem.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L101)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`Think`](Base/README.md#think-4)

##### GetActivePlayers()

> `static` **GetActivePlayers**(): `any`[]

Defined in: [system/DeathmatchSpawnerSystem.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L37)

###### Returns

`any`[]

##### GetAlivePlayers()

> `static` **GetAlivePlayers**(): `any`[]

Defined in: [system/DeathmatchSpawnerSystem.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L46)

###### Returns

`any`[]

##### GetDeadPlayers()

> `static` **GetDeadPlayers**(): `any`[]

Defined in: [system/DeathmatchSpawnerSystem.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L55)

###### Returns

`any`[]

##### GetPlayerControllers()

> `static` **GetPlayerControllers**(): `any`[]

Defined in: [system/DeathmatchSpawnerSystem.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L25)

###### Returns

`any`[]

##### RetrievePlayerSpawns()

> `static` **RetrievePlayerSpawns**(): `any`

Defined in: [system/DeathmatchSpawnerSystem.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawnerSystem.ts#L20)

###### Returns

`any`

***

### DialogSystem

Defined in: [system/DialogSystem.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L10)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#system)

#### Constructors

##### Constructor

> **new DialogSystem**(`opts`): [`DialogSystem`](#dialogsystem)

Defined in: [system/DialogSystem.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

[`DialogSystem`](#dialogsystem)

###### Overrides

[`System`](Base/README.md#system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### CreateDialog()

> **CreateDialog**(`opts`): `Dialog`

Defined in: [system/DialogSystem.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`Dialog`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`EnableSystem`](Base/README.md#enablesystem)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`MaybeThink`](Base/README.md#maybethink-4)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [system/DialogSystem.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L17)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnActivate`](Base/README.md#onactivate)

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [base/System.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L63)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L69)

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

[`System`](Base/README.md#system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L75)

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

[`System`](Base/README.md#system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L81)

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

[`System`](Base/README.md#system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L87)

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

[`System`](Base/README.md#system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L93)

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

[`System`](Base/README.md#system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L99)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L105)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L111)

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

[`System`](Base/README.md#system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L117)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L123)

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

[`System`](Base/README.md#system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L129)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L135)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L141)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L147)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [base/System.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L153)

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

[`System`](Base/README.md#system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L159)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L165)

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

[`System`](Base/README.md#system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [base/System.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L171)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:177](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L177)

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

[`System`](Base/README.md#system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [base/System.ts:183](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L183)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L195)

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

[`System`](Base/README.md#system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [base/System.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L189)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTick`](Base/README.md#settick-4)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTickInterval`](Base/README.md#settickinterval-4)

##### Think()

> **Think**(): `void`

Defined in: [system/DialogSystem.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DialogSystem.ts#L27)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`Think`](Base/README.md#think-4)

***

### FreezeTimeSystem

Defined in: [system/FreezeTimeSystem.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L14)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#system)

#### Constructors

##### Constructor

> **new FreezeTimeSystem**(): [`FreezeTimeSystem`](#freezetimesystem)

Defined in: [system/FreezeTimeSystem.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L21)

###### Returns

[`FreezeTimeSystem`](#freezetimesystem)

###### Overrides

[`System`](Base/README.md#system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`EnableSystem`](Base/README.md#enablesystem)

##### GetElapsedFreezeTime()

> **GetElapsedFreezeTime**(): `number`

Defined in: [system/FreezeTimeSystem.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L28)

The elapsed amount of time since the round began, and the match has been frozen.

###### Returns

`number`

##### GetElapsedRoundTime()

> **GetElapsedRoundTime**(): `number`

Defined in: [system/FreezeTimeSystem.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L40)

Returns the elapsed time since the round started, taking into
account the freeze time.

Note:

- During the frozen period, this should be zero.

###### Returns

`number`

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`MaybeThink`](Base/README.md#maybethink-4)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [base/System.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L57)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnActivate`](Base/README.md#onactivate)

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [base/System.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L63)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L69)

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

[`System`](Base/README.md#system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L75)

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

[`System`](Base/README.md#system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L81)

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

[`System`](Base/README.md#system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L87)

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

[`System`](Base/README.md#system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L93)

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

[`System`](Base/README.md#system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L99)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L105)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L111)

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

[`System`](Base/README.md#system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L117)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L123)

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

[`System`](Base/README.md#system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L129)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L135)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L141)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L147)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [base/System.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L153)

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

[`System`](Base/README.md#system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L159)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L165)

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

[`System`](Base/README.md#system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [base/System.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L171)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(): `void`

Defined in: [system/FreezeTimeSystem.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L50)

Instance.OnRoundEnd

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [system/FreezeTimeSystem.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L45)

Instance.OnRoundStart

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L195)

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

[`System`](Base/README.md#system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [base/System.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L189)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTick`](Base/README.md#settick-4)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTickInterval`](Base/README.md#settickinterval-4)

##### Think()

> **Think**(): `void`

Defined in: [system/FreezeTimeSystem.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTimeSystem.ts#L54)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`Think`](Base/README.md#think-4)

***

### GameAnnouncerSystem

Defined in: [system/GameAnnouncerSystem.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L18)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#system)

#### Constructors

##### Constructor

> **new GameAnnouncerSystem**(`__namedParameters`): [`GameAnnouncerSystem`](#gameannouncersystem)

Defined in: [system/GameAnnouncerSystem.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `kill_award_interval?`: `number`; \} |
| `__namedParameters.kill_award_interval?` | `number` |

###### Returns

[`GameAnnouncerSystem`](#gameannouncersystem)

###### Overrides

[`System`](Base/README.md#system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### \_areTeammates()

> **\_areTeammates**(`player_pawn_a`, `player_pawn_b`): `boolean`

Defined in: [system/GameAnnouncerSystem.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn_a` | `any` |
| `player_pawn_b` | `any` |

###### Returns

`boolean`

##### \_checkPlayer()

> **\_checkPlayer**(`player_pawn`): `string` \| `null`

Defined in: [system/GameAnnouncerSystem.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`string` \| `null`

##### \_getPlayer()

> **\_getPlayer**(`player_pawn`): `any`

Defined in: [system/GameAnnouncerSystem.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`any`

##### \_hasKillingSpree()

> **\_hasKillingSpree**(`player_pawn`): `boolean`

Defined in: [system/GameAnnouncerSystem.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`boolean`

##### \_recordDeath()

> **\_recordDeath**(`player_pawn`): `void`

Defined in: [system/GameAnnouncerSystem.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L127)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`void`

##### \_recordKill()

> **\_recordKill**(`player_pawn_attacker`, `player_pawn_death`, `weapon_name`): `void`

Defined in: [system/GameAnnouncerSystem.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L79)

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

Defined in: [system/GameAnnouncerSystem.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`void`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`EnableSystem`](Base/README.md#enablesystem)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`MaybeThink`](Base/README.md#maybethink-4)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [system/GameAnnouncerSystem.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L34)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnActivate`](Base/README.md#onactivate)

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [base/System.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L63)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L69)

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

[`System`](Base/README.md#system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L75)

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

[`System`](Base/README.md#system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L81)

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

[`System`](Base/README.md#system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L87)

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

[`System`](Base/README.md#system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L93)

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

[`System`](Base/README.md#system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L99)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L105)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L111)

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

[`System`](Base/README.md#system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L117)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L123)

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

[`System`](Base/README.md#system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L129)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L135)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L141)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L147)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [system/GameAnnouncerSystem.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncerSystem.ts#L131)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L159)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L165)

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

[`System`](Base/README.md#system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [base/System.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L171)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:177](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L177)

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

[`System`](Base/README.md#system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [base/System.ts:183](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L183)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L195)

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

[`System`](Base/README.md#system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [base/System.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L189)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTick`](Base/README.md#settick-4)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTickInterval`](Base/README.md#settickinterval-4)

##### Think()

> **Think**(): `void`

Defined in: [base/System.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L47)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`Think`](Base/README.md#think-4)

***

### PlayerHealthRegenerationSystem

Defined in: [system/PlayerHealthRegenerationSystem.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L9)

Implementations which extend the abstract `Base.System` class.

#### Extends

- [`System`](Base/README.md#system)

#### Constructors

##### Constructor

> **new PlayerHealthRegenerationSystem**(`__namedParameters`): [`PlayerHealthRegenerationSystem`](#playerhealthregenerationsystem)

Defined in: [system/PlayerHealthRegenerationSystem.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L16)

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

[`System`](Base/README.md#system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### \_checkPlayer()

> **\_checkPlayer**(`player_pawn`): `any`

Defined in: [system/PlayerHealthRegenerationSystem.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`any`

##### \_getPlayer()

> **\_getPlayer**(`player_pawn`): `any`

Defined in: [system/PlayerHealthRegenerationSystem.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |

###### Returns

`any`

##### \_resetPlayer()

> **\_resetPlayer**(`player_pawn`, `afflicted_damage`): `void`

Defined in: [system/PlayerHealthRegenerationSystem.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L60)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `player_pawn` | `any` | `undefined` |
| `afflicted_damage` | `number` | `0` |

###### Returns

`void`

##### cleanup()

> **cleanup**(): `void`

Defined in: [system/PlayerHealthRegenerationSystem.ts:100](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L100)

###### Returns

`void`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`EnableSystem`](Base/README.md#enablesystem)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`MaybeThink`](Base/README.md#maybethink-4)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [system/PlayerHealthRegenerationSystem.ts:96](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L96)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnActivate`](Base/README.md#onactivate)

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `object`

Defined in: [system/PlayerHealthRegenerationSystem.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L89)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`object`

###### Overrides

[`System`](Base/README.md#system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L69)

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

[`System`](Base/README.md#system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L75)

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

[`System`](Base/README.md#system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L81)

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

[`System`](Base/README.md#system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L87)

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

[`System`](Base/README.md#system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L93)

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

[`System`](Base/README.md#system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L99)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L105)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L111)

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

[`System`](Base/README.md#system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L117)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L123)

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

[`System`](Base/README.md#system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L129)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L135)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L141)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L147)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [base/System.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L153)

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

[`System`](Base/README.md#system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L159)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L165)

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

[`System`](Base/README.md#system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [base/System.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L171)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:177](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L177)

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

[`System`](Base/README.md#system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [base/System.ts:183](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L183)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L195)

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

[`System`](Base/README.md#system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [base/System.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L189)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTick`](Base/README.md#settick-4)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTickInterval`](Base/README.md#settickinterval-4)

##### Think()

> **Think**(): `void`

Defined in: [system/PlayerHealthRegenerationSystem.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegenerationSystem.ts#L31)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`Think`](Base/README.md#think-4)

***

### PlayerModelChangerSystem

Defined in: [system/PlayerModelChangerSystem.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerModelChangerSystem.ts#L13)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#system)

#### Constructors

##### Constructor

> **new PlayerModelChangerSystem**(`__namedParameters`): [`PlayerModelChangerSystem`](#playermodelchangersystem)

Defined in: [system/PlayerModelChangerSystem.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerModelChangerSystem.ts#L23)

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

[`System`](Base/README.md#system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`EnableSystem`](Base/README.md#enablesystem)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`MaybeThink`](Base/README.md#maybethink-4)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [base/System.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L57)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnActivate`](Base/README.md#onactivate)

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [base/System.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L63)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L69)

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

[`System`](Base/README.md#system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L75)

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

[`System`](Base/README.md#system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L81)

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

[`System`](Base/README.md#system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L87)

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

[`System`](Base/README.md#system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L93)

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

[`System`](Base/README.md#system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L99)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L105)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L111)

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

[`System`](Base/README.md#system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L117)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L123)

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

[`System`](Base/README.md#system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L129)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L135)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L141)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L147)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [base/System.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L153)

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

[`System`](Base/README.md#system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L159)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L165)

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

[`System`](Base/README.md#system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [system/PlayerModelChangerSystem.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerModelChangerSystem.ts#L121)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:177](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L177)

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

[`System`](Base/README.md#system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [base/System.ts:183](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L183)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L195)

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

[`System`](Base/README.md#system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [base/System.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L189)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTick`](Base/README.md#settick-4)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTickInterval`](Base/README.md#settickinterval-4)

##### Think()

> **Think**(): `void`

Defined in: [base/System.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L47)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`Think`](Base/README.md#think-4)

***

### SchedulingSystem

Defined in: [system/SchedulingSystem.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L17)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#system)

#### Constructors

##### Constructor

> **new SchedulingSystem**(): [`SchedulingSystem`](#schedulingsystem)

Defined in: [system/SchedulingSystem.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L21)

###### Returns

[`SchedulingSystem`](#schedulingsystem)

###### Overrides

[`System`](Base/README.md#system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### clearInterval()

> **clearInterval**(`id`): `void`

Defined in: [system/SchedulingSystem.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `any` |

###### Returns

`void`

##### clearTimeout()

> **clearTimeout**(`id`): `void`

Defined in: [system/SchedulingSystem.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `any` |

###### Returns

`void`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`EnableSystem`](Base/README.md#enablesystem)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`MaybeThink`](Base/README.md#maybethink-4)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [base/System.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L57)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnActivate`](Base/README.md#onactivate)

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [base/System.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L63)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L69)

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

[`System`](Base/README.md#system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L75)

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

[`System`](Base/README.md#system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L81)

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

[`System`](Base/README.md#system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L87)

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

[`System`](Base/README.md#system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L93)

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

[`System`](Base/README.md#system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L99)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L105)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L111)

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

[`System`](Base/README.md#system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L117)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L123)

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

[`System`](Base/README.md#system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L129)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L135)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L141)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L147)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [base/System.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L153)

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

[`System`](Base/README.md#system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L159)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L165)

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

[`System`](Base/README.md#system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [base/System.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L171)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:177](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L177)

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

[`System`](Base/README.md#system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [base/System.ts:183](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L183)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L195)

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

[`System`](Base/README.md#system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [base/System.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L189)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### setInterval()

> **setInterval**(`callback`, `ms`): `number`

Defined in: [system/SchedulingSystem.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |
| `ms` | `number` |

###### Returns

`number`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTick`](Base/README.md#settick-4)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTickInterval`](Base/README.md#settickinterval-4)

##### setTimeout()

> **setTimeout**(`callback`, `ms`): `number`

Defined in: [system/SchedulingSystem.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |
| `ms` | `number` |

###### Returns

`number`

##### Think()

> **Think**(): `void`

Defined in: [system/SchedulingSystem.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SchedulingSystem.ts#L52)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`Think`](Base/README.md#think-4)

***

### SoundEventSystem

Defined in: [system/SoundEventSystem.ts:132](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L132)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#system)

#### Constructors

##### Constructor

> **new SoundEventSystem**(`__namedParameters`): [`SoundEventSystem`](#soundeventsystem)

Defined in: [system/SoundEventSystem.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L137)

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

[`System`](Base/README.md#system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`EnableSystem`](Base/README.md#enablesystem)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`MaybeThink`](Base/README.md#maybethink-4)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [system/SoundEventSystem.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L148)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnActivate`](Base/README.md#onactivate)

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [base/System.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L63)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L69)

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

[`System`](Base/README.md#system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L75)

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

[`System`](Base/README.md#system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L81)

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

[`System`](Base/README.md#system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L87)

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

[`System`](Base/README.md#system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L93)

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

[`System`](Base/README.md#system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L99)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L105)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L111)

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

[`System`](Base/README.md#system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L117)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L123)

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

[`System`](Base/README.md#system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L129)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L135)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L141)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L147)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [base/System.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L153)

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

[`System`](Base/README.md#system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L159)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L165)

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

[`System`](Base/README.md#system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [base/System.ts:171](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L171)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:177](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L177)

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

[`System`](Base/README.md#system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [base/System.ts:183](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L183)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L195)

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

[`System`](Base/README.md#system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [base/System.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L189)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### PlaySoundToPlayer()

> **PlaySoundToPlayer**(`player_pawn`, `soundevent_name`, `immediate`): `void`

Defined in: [system/SoundEventSystem.ts:152](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L152)

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

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTick`](Base/README.md#settick-4)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTickInterval`](Base/README.md#settickinterval-4)

##### Think()

> **Think**(): `void`

Defined in: [system/SoundEventSystem.ts:201](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEventSystem.ts#L201)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`Think`](Base/README.md#think-4)

***

### WeaponReplacementSystem

Defined in: [system/WeaponReplacementSystem.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L17)

Mountable System Abstraction.

#### Extends

- [`System`](Base/README.md#system)

#### Constructors

##### Constructor

> **new WeaponReplacementSystem**(`__namedParameters`): [`WeaponReplacementSystem`](#weaponreplacementsystem)

Defined in: [system/WeaponReplacementSystem.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L22)

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

[`System`](Base/README.md#system).[`constructor`](Base/README.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`DisableSystem`](Base/README.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`EnableSystem`](Base/README.md#enablesystem)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

###### Inherited from

[`System`](Base/README.md#system).[`IsSystemEnabled`](Base/README.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`MaybeThink`](Base/README.md#maybethink-4)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [system/WeaponReplacementSystem.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L35)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnActivate`](Base/README.md#onactivate)

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [base/System.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L63)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Base/README.md#system).[`OnBeforePlayerDamage`](Base/README.md#onbeforeplayerdamage)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L69)

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

[`System`](Base/README.md#system).[`OnBombDefuse`](Base/README.md#onbombdefuse)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L75)

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

[`System`](Base/README.md#system).[`OnBombPlant`](Base/README.md#onbombplant)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L81)

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

[`System`](Base/README.md#system).[`OnBulletImpact`](Base/README.md#onbulletimpact)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:87](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L87)

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

[`System`](Base/README.md#system).[`OnGrenadeBounce`](Base/README.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L93)

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

[`System`](Base/README.md#system).[`OnGrenadeThrow`](Base/README.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L99)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunFire`](Base/README.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L105)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnGunReload`](Base/README.md#ongunreload)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:111](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L111)

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

[`System`](Base/README.md#system).[`OnKnifeAttack`](Base/README.md#onknifeattack)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:117](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L117)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerActivate`](Base/README.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:123](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L123)

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

[`System`](Base/README.md#system).[`OnPlayerChat`](Base/README.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L129)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerConnect`](Base/README.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L135)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDamage`](Base/README.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:141](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L141)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerDisconnect`](Base/README.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:147](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L147)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerJump`](Base/README.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [base/System.ts:153](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L153)

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

[`System`](Base/README.md#system).[`OnPlayerKill`](Base/README.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L159)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnPlayerLand`](Base/README.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:165](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L165)

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

[`System`](Base/README.md#system).[`OnPlayerPing`](Base/README.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [system/WeaponReplacementSystem.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L83)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`OnPlayerReset`](Base/README.md#onplayerreset)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:177](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L177)

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

[`System`](Base/README.md#system).[`OnRoundEnd`](Base/README.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [base/System.ts:183](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L183)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`OnRoundStart`](Base/README.md#onroundstart)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L195)

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

[`System`](Base/README.md#system).[`OnScriptReloadAfter`](Base/README.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [base/System.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L189)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Base/README.md#system).[`OnScriptReloadBefore`](Base/README.md#onscriptreloadbefore)

##### ReplaceWeapons()

> **ReplaceWeapons**(`player_pawn`): `void`

Defined in: [system/WeaponReplacementSystem.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTick`](Base/README.md#settick-4)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Base/README.md#system).[`SetTickInterval`](Base/README.md#settickinterval-4)

##### Think()

> **Think**(): `void`

Defined in: [system/WeaponReplacementSystem.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacementSystem.ts#L78)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Base/README.md#system).[`Think`](Base/README.md#think-4)

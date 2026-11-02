# System

Mountable Systems that extend `Base.System`

## Classes

### DeathmatchSpawner

Defined in: [src/system/DeathmatchSpawner.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L10)

Implementations which extend the abstract `Base.System` class.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new DeathmatchSpawner**(): [`DeathmatchSpawner`](#deathmatchspawner)

Defined in: [src/system/DeathmatchSpawner.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L13)

###### Returns

[`DeathmatchSpawner`](#deathmatchspawner)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### \_disableAllSpawners()

> **\_disableAllSpawners**(): `void`

Defined in: [src/system/DeathmatchSpawner.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L64)

###### Returns

`void`

##### \_enableSpawner()

> **\_enableSpawner**(`spawner`): `void`

Defined in: [src/system/DeathmatchSpawner.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L71)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `spawner` | `any` |

###### Returns

`void`

##### \_getDisabledSpawners()

> **\_getDisabledSpawners**(): `any`

Defined in: [src/system/DeathmatchSpawner.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L76)

###### Returns

`any`

##### \_scoreSpawner()

> **\_scoreSpawner**(`spawner`): `any`[]

Defined in: [src/system/DeathmatchSpawner.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `spawner` | `any` |

###### Returns

`any`[]

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L65)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(): `void`

Defined in: [src/system/DeathmatchSpawner.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L131)

Instance.OnPlayerActivate

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(): `void`

Defined in: [src/system/DeathmatchSpawner.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L127)

Instance.OnPlayerKill

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/DeathmatchSpawner.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L101)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

##### GetActivePlayers()

> `static` **GetActivePlayers**(): `any`[]

Defined in: [src/system/DeathmatchSpawner.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L37)

###### Returns

`any`[]

##### GetAlivePlayers()

> `static` **GetAlivePlayers**(): `any`[]

Defined in: [src/system/DeathmatchSpawner.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L46)

###### Returns

`any`[]

##### GetDeadPlayers()

> `static` **GetDeadPlayers**(): `any`[]

Defined in: [src/system/DeathmatchSpawner.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L55)

###### Returns

`any`[]

##### GetPlayerControllers()

> `static` **GetPlayerControllers**(): `any`[]

Defined in: [src/system/DeathmatchSpawner.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L25)

###### Returns

`any`[]

##### RetrievePlayerSpawns()

> `static` **RetrievePlayerSpawns**(): `any`

Defined in: [src/system/DeathmatchSpawner.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DeathmatchSpawner.ts#L20)

###### Returns

`any`

***

### Dialog

Defined in: [src/system/Dialog.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Dialog.ts#L10)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new Dialog**(`opts?`): [`Dialog`](#dialog)

Defined in: [src/system/Dialog.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Dialog.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

[`Dialog`](#dialog)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### CreateDialog()

> **CreateDialog**(`opts?`): `Dialog`

Defined in: [src/system/Dialog.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Dialog.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ \} |

###### Returns

`Dialog`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/Dialog.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Dialog.ts#L17)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/Dialog.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Dialog.ts#L27)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### DoubleJump

Defined in: [src/system/DoubleJump.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DoubleJump.ts#L10)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new DoubleJump**(`jump_velocity?`): [`DoubleJump`](#doublejump)

Defined in: [src/system/DoubleJump.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DoubleJump.ts#L12)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `jump_velocity` | `number` | `DEFAULT_JUMP_VELOCITY` |

###### Returns

[`DoubleJump`](#doublejump)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L65)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/DoubleJump.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/DoubleJump.ts#L17)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### FreezeTime

Defined in: [src/system/FreezeTime.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTime.ts#L14)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new FreezeTime**(): [`FreezeTime`](#freezetime)

Defined in: [src/system/FreezeTime.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTime.ts#L21)

###### Returns

[`FreezeTime`](#freezetime)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### GetElapsedFreezeTime()

> **GetElapsedFreezeTime**(): `number`

Defined in: [src/system/FreezeTime.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTime.ts#L28)

The elapsed amount of time since the round began, and the match has been frozen.

###### Returns

`number`

##### GetElapsedRoundTime()

> **GetElapsedRoundTime**(): `number`

Defined in: [src/system/FreezeTime.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTime.ts#L40)

Returns the elapsed time since the round started, taking into
account the freeze time.

Note:

- During the frozen period, this should be zero.

###### Returns

`number`

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L65)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(): `void`

Defined in: [src/system/FreezeTime.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTime.ts#L50)

Instance.OnRoundEnd

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/system/FreezeTime.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTime.ts#L45)

Instance.OnRoundStart

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/FreezeTime.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/FreezeTime.ts#L54)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### GameAnnouncer

Defined in: [src/system/GameAnnouncer.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L18)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new GameAnnouncer**(`__namedParameters?`): [`GameAnnouncer`](#gameannouncer)

Defined in: [src/system/GameAnnouncer.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `kill_award_interval?`: `number`; \} |
| `__namedParameters.kill_award_interval?` | `number` |

###### Returns

[`GameAnnouncer`](#gameannouncer)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### \_areTeammates()

> **\_areTeammates**(`player_pawn_a`, `player_pawn_b`): `boolean`

Defined in: [src/system/GameAnnouncer.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn_a` | `CSPlayerPawn` |
| `player_pawn_b` | `CSPlayerPawn` |

###### Returns

`boolean`

##### \_checkPlayer()

> **\_checkPlayer**(`player_pawn`): `string` \| `null`

Defined in: [src/system/GameAnnouncer.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`string` \| `null`

##### \_getPlayer()

> **\_getPlayer**(`player_pawn`): `any`

Defined in: [src/system/GameAnnouncer.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`any`

##### \_hasKillingSpree()

> **\_hasKillingSpree**(`player_pawn`): `boolean`

Defined in: [src/system/GameAnnouncer.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`boolean`

##### \_recordDeath()

> **\_recordDeath**(`player_pawn`): `void`

Defined in: [src/system/GameAnnouncer.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L127)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`void`

##### \_recordKill()

> **\_recordKill**(`player_pawn_attacker`, `player_pawn_death`, `weapon_name`): `void`

Defined in: [src/system/GameAnnouncer.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn_attacker` | `CSPlayerPawn` |
| `player_pawn_death` | `CSPlayerPawn` |
| `weapon_name` | `string` |

###### Returns

`void`

##### \_resetPlayer()

> **\_resetPlayer**(`player_pawn`): `void`

Defined in: [src/system/GameAnnouncer.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`void`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/GameAnnouncer.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L34)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/system/GameAnnouncer.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/GameAnnouncer.ts#L131)

Instance.OnPlayerKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/base/System.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L55)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### KnifeDash

Defined in: [src/system/KnifeDash.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/KnifeDash.ts#L13)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new KnifeDash**(`dash_speed?`): [`KnifeDash`](#knifedash)

Defined in: [src/system/KnifeDash.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/KnifeDash.ts#L15)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `dash_speed` | `number` | `DefaultDashSpeed` |

###### Returns

[`KnifeDash`](#knifedash)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="dash_speed"></a> `dash_speed` | `number` | [src/system/KnifeDash.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/KnifeDash.ts#L14) |

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L65)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`__namedParameters`): `void`

Defined in: [src/system/KnifeDash.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/KnifeDash.ts#L20)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/base/System.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L55)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### PlayerHealthRegeneration

Defined in: [src/system/PlayerHealthRegeneration.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegeneration.ts#L8)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new PlayerHealthRegeneration**(`__namedParameters?`): [`PlayerHealthRegeneration`](#playerhealthregeneration)

Defined in: [src/system/PlayerHealthRegeneration.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegeneration.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `max_health_recovery?`: `number`; `regeneration_delay?`: `number`; `regeneration_rate?`: `number`; `tick_rate?`: `number`; \} |
| `__namedParameters.max_health_recovery?` | `number` |
| `__namedParameters.regeneration_delay?` | `number` |
| `__namedParameters.regeneration_rate?` | `number` |
| `__namedParameters.tick_rate?` | `number` |

###### Returns

[`PlayerHealthRegeneration`](#playerhealthregeneration)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### \_checkPlayer()

> **\_checkPlayer**(`player_pawn`): `any`

Defined in: [src/system/PlayerHealthRegeneration.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegeneration.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`any`

##### \_getPlayer()

> **\_getPlayer**(`player_pawn`): `any`

Defined in: [src/system/PlayerHealthRegeneration.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegeneration.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`any`

##### \_resetPlayer()

> **\_resetPlayer**(`player_pawn`, `afflicted_damage?`): `void`

Defined in: [src/system/PlayerHealthRegeneration.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegeneration.ts#L59)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `player_pawn` | `CSPlayerPawn` | `undefined` |
| `afflicted_damage` | `number` | `0` |

###### Returns

`void`

##### cleanup()

> **cleanup**(): `void`

Defined in: [src/system/PlayerHealthRegeneration.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegeneration.ts#L99)

###### Returns

`void`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/PlayerHealthRegeneration.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegeneration.ts#L95)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `object`

Defined in: [src/system/PlayerHealthRegeneration.ts:88](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegeneration.ts#L88)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`object`

###### Deprecated

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/PlayerHealthRegeneration.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerHealthRegeneration.ts#L30)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### PlayerModelChanger

Defined in: [src/system/PlayerModelChanger.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerModelChanger.ts#L13)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new PlayerModelChanger**(`__namedParameters?`): [`PlayerModelChanger`](#playermodelchanger)

Defined in: [src/system/PlayerModelChanger.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerModelChanger.ts#L23)

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

[`PlayerModelChanger`](#playermodelchanger)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L65)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/system/PlayerModelChanger.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerModelChanger.ts#L121)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/base/System.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L55)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### PlayerSliding

Defined in: [src/system/PlayerSliding.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerSliding.ts#L46)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new PlayerSliding**(): [`PlayerSliding`](#playersliding)

Defined in: [src/system/PlayerSliding.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerSliding.ts#L48)

###### Returns

[`PlayerSliding`](#playersliding)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="player_data"></a> `player_data` | `Map`\<`CSPlayerPawn`, `PlayerSlidingData`\> | [src/system/PlayerSliding.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerSliding.ts#L47) |

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L65)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/PlayerSliding.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/PlayerSliding.ts#L70)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### Scheduling

Defined in: [src/system/Scheduling.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Scheduling.ts#L17)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new Scheduling**(): [`Scheduling`](#scheduling)

Defined in: [src/system/Scheduling.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Scheduling.ts#L21)

###### Returns

[`Scheduling`](#scheduling)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### clearInterval()

> **clearInterval**(`id`): `void`

Defined in: [src/system/Scheduling.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Scheduling.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `any` |

###### Returns

`void`

##### clearTimeout()

> **clearTimeout**(`id`): `void`

Defined in: [src/system/Scheduling.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Scheduling.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `any` |

###### Returns

`void`

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L65)

Instance.OnActivate()

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### setInterval()

> **setInterval**(`callback`, `ms`): `number`

Defined in: [src/system/Scheduling.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Scheduling.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |
| `ms` | `number` |

###### Returns

`number`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### setTimeout()

> **setTimeout**(`callback`, `ms`): `number`

Defined in: [src/system/Scheduling.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Scheduling.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |
| `ms` | `number` |

###### Returns

`number`

##### Think()

> **Think**(): `void`

Defined in: [src/system/Scheduling.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/Scheduling.ts#L52)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### SoundEvent

Defined in: [src/system/SoundEvent.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEvent.ts#L130)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new SoundEvent**(`__namedParameters?`): [`SoundEvent`](#soundevent)

Defined in: [src/system/SoundEvent.ts:135](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEvent.ts#L135)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `debug?`: `boolean`; `soundevent_timeout?`: `number`; `tick_rate?`: `number`; \} |
| `__namedParameters.debug?` | `boolean` |
| `__namedParameters.soundevent_timeout?` | `number` |
| `__namedParameters.tick_rate?` | `number` |

###### Returns

[`SoundEvent`](#soundevent)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/SoundEvent.ts:146](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEvent.ts#L146)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/base/System.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L89)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### PlaySoundToPlayer()

> **PlaySoundToPlayer**(`player_pawn`, `soundevent_name`, `immediate?`): `void`

Defined in: [src/system/SoundEvent.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEvent.ts#L150)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `player_pawn` | `CSPlayerPawn` | `undefined` |
| `soundevent_name` | `string` | `undefined` |
| `immediate` | `boolean` | `false` |

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/SoundEvent.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/SoundEvent.ts#L199)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

***

### WeaponReplacement

Defined in: [src/system/WeaponReplacement.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacement.ts#L17)

Mountable System Abstraction.

#### Extends

- [`System`](Namespace.Base.md#abstract-system)

#### Constructors

##### Constructor

> **new WeaponReplacement**(`__namedParameters`): [`WeaponReplacement`](#weaponreplacement)

Defined in: [src/system/WeaponReplacement.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacement.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `melee?`: \{ \}; `primary?`: \{ \}; `secondary?`: \{ \}; `tick_rate?`: `number`; \} |
| `__namedParameters.melee?` | \{ \} |
| `__namedParameters.primary?` | \{ \} |
| `__namedParameters.secondary?` | \{ \} |
| `__namedParameters.tick_rate?` | `number` |

###### Returns

[`WeaponReplacement`](#weaponreplacement)

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`constructor`](Namespace.Base.md#constructor-2)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`DisableSystem`](Namespace.Base.md#disablesystem)

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`EnableSystem`](Namespace.Base.md#enablesystem)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`GetDelta`](Namespace.Base.md#getdelta-2)

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`IsSystemEnabled`](Namespace.Base.md#issystemenabled)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`MaybeThink`](Namespace.Base.md#maybethink-2)

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/system/WeaponReplacement.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacement.ts#L35)

Instance.OnActivate()

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnActivate`](Namespace.Base.md#onactivate)

##### ~~OnBeforePlayerDamage()~~

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L198)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

###### Deprecated

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeforePlayerDamage`](Namespace.Base.md#onbeforeplayerdamage)

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBeginRoundRestart`](Namespace.Base.md#onbeginroundrestart)

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [src/base/System.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L149)

Instance.OnBombDefuse()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BombDefuseEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuse`](Namespace.Base.md#onbombdefuse)

##### OnBombDefuseAbort()

> **OnBombDefuseAbort**(`event`): `void`

Defined in: [src/base/System.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L143)

Instance.OnBombDefuseAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseAbort`](Namespace.Base.md#onbombdefuseabort)

##### OnBombDefuseStart()

> **OnBombDefuseStart**(`event`): `void`

Defined in: [src/base/System.ts:137](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L137)

Instance.OnBombDefuseStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombDefuseStart`](Namespace.Base.md#onbombdefusestart)

##### OnBombExplode()

> **OnBombExplode**(`event`): `void`

Defined in: [src/base/System.ts:155](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L155)

Instance.OnBombExplode()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `plantedC4`: `Entity`; \} |
| `event.plantedC4` | `Entity` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombExplode`](Namespace.Base.md#onbombexplode)

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [src/base/System.ts:131](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L131)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlant`](Namespace.Base.md#onbombplant)

##### OnBombPlantAbort()

> **OnBombPlantAbort**(`event`): `void`

Defined in: [src/base/System.ts:125](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L125)

Instance.OnBombPlantAbort()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantAbort`](Namespace.Base.md#onbombplantabort)

##### OnBombPlantStart()

> **OnBombPlantStart**(`event`): `void`

Defined in: [src/base/System.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L119)

Instance.OnBombPlantStart()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `planter`: `CSPlayerPawn`; \} |
| `event.planter` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnBombPlantStart`](Namespace.Base.md#onbombplantstart)

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [src/base/System.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L258)

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

[`System`](Namespace.Base.md#abstract-system).[`OnBulletImpact`](Namespace.Base.md#onbulletimpact)

##### OnCustomHudClicked()

> **OnCustomHudClicked**(`event`): `void`

Defined in: [src/base/System.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L294)

Instance.OnCustomHudClicked()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `buttonId`: `string`; `layout`: `CustomHudLayout`; `player`: `CSPlayerController`; \} |
| `event.buttonId` | `string` |
| `event.layout` | `CustomHudLayout` |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnCustomHudClicked`](Namespace.Base.md#oncustomhudclicked)

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [src/base/System.ts:282](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L282)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeBounce`](Namespace.Base.md#ongrenadebounce)

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [src/base/System.ts:276](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L276)

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

[`System`](Namespace.Base.md#abstract-system).[`OnGrenadeThrow`](Namespace.Base.md#ongrenadethrow)

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [src/base/System.ts:252](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L252)

Instance.OnGunFire()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunFire`](Namespace.Base.md#ongunfire)

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [src/base/System.ts:246](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L246)

Instance.OnGunReload

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnGunReload`](Namespace.Base.md#ongunreload)

##### OnHostageDrop()

> **OnHostageDrop**(`event`): `void`

Defined in: [src/base/System.ts:179](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L179)

Instance.OnHostageDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `hostage`: `CSHostage`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageDrop`](Namespace.Base.md#onhostagedrop)

##### OnHostageKill()

> **OnHostageKill**(`event`): `void`

Defined in: [src/base/System.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L191)

Instance.OnHostageKill

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `attacker?`: `any`; `hostage`: `CSHostage`; \} |
| `event.attacker?` | `any` |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageKill`](Namespace.Base.md#onhostagekill)

##### OnHostagePickUp()

> **OnHostagePickUp**(`event`): `void`

Defined in: [src/base/System.ts:173](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L173)

Instance.OnHostagePickUp

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUp`](Namespace.Base.md#onhostagepickup)

##### OnHostagePickUpAbort()

> **OnHostagePickUpAbort**(`event`): `void`

Defined in: [src/base/System.ts:167](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L167)

Instance.OnHostagePickUpAbort

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; `player`: `CSPlayerPawn`; \} |
| `event.hostage` | `CSHostage` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpAbort`](Namespace.Base.md#onhostagepickupabort)

##### OnHostagePickUpStart()

> **OnHostagePickUpStart**(`event`): `void`

Defined in: [src/base/System.ts:161](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L161)

Instance.OnHostagePickUpStart

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostagePickUpStart`](Namespace.Base.md#onhostagepickupstart)

##### OnHostageRescue()

> **OnHostageRescue**(`event`): `void`

Defined in: [src/base/System.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L185)

Instance.OnHostageRescue

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `hostage`: `CSHostage`; \} |
| `event.hostage` | `CSHostage` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnHostageRescue`](Namespace.Base.md#onhostagerescue)

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [src/base/System.ts:288](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L288)

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

[`System`](Namespace.Base.md#abstract-system).[`OnKnifeAttack`](Namespace.Base.md#onknifeattack)

##### OnModifyPlayerDamage()

> **OnModifyPlayerDamage**(`event`): `any`

Defined in: [src/base/System.ts:204](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L204)

Instance.OnModifyPlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `ModifyPlayerDamageEvent` |

###### Returns

`any`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnModifyPlayerDamage`](Namespace.Base.md#onmodifyplayerdamage)

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [src/base/System.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L77)

Instance.OnPlayerActivate

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerActivate`](Namespace.Base.md#onplayeractivate)

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [src/base/System.ts:234](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L234)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerChat`](Namespace.Base.md#onplayerchat)

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [src/base/System.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L71)

Instance.OnPlayerConnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerController`; \} |
| `event.player` | `CSPlayerController` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerConnect`](Namespace.Base.md#onplayerconnect)

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDamage`](Namespace.Base.md#onplayerdamage)

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [src/base/System.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L83)

Instance.OnPlayerDisconnect

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `playerSlot`: `number`; \} |
| `event.playerSlot` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerDisconnect`](Namespace.Base.md#onplayerdisconnect)

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [src/base/System.ts:222](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L222)

Instance.OnPlayerJump

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerJump`](Namespace.Base.md#onplayerjump)

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [src/base/System.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L216)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerKill`](Namespace.Base.md#onplayerkill)

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [src/base/System.ts:228](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L228)

Instance.OnPlayerLand

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `player`: `CSPlayerPawn`; \} |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerLand`](Namespace.Base.md#onplayerland)

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [src/base/System.ts:240](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L240)

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

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerPing`](Namespace.Base.md#onplayerping)

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [src/system/WeaponReplacement.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacement.ts#L83)

Instance.OnPlayerReset

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerReset`](Namespace.Base.md#onplayerreset)

##### OnPlayerTeamChanged()

> **OnPlayerTeamChanged**(`event`): `void`

Defined in: [src/base/System.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L95)

Instance.OnPlayerTeamChanged

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `oldTeam`: `number`; `player`: `CSPlayerPawn`; \} |
| `event.oldTeam` | `number` |
| `event.player` | `CSPlayerPawn` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnPlayerTeamChanged`](Namespace.Base.md#onplayerteamchanged)

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [src/base/System.ts:107](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L107)

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

[`System`](Namespace.Base.md#abstract-system).[`OnRoundEnd`](Namespace.Base.md#onroundend)

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnRoundStart`](Namespace.Base.md#onroundstart)

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReload`](Namespace.Base.md#onscriptreload)

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [src/base/System.ts:306](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L306)

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

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadAfter`](Namespace.Base.md#onscriptreloadafter)

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**\<`T`\>(): `T`

Defined in: [src/base/System.ts:300](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L300)

Instance.OnReload({before})

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

###### Returns

`T`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnScriptReloadBefore`](Namespace.Base.md#onscriptreloadbefore)

##### OnWeaponDrop()

> **OnWeaponDrop**(`event`): `void`

Defined in: [src/base/System.ts:264](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L264)

Instance.OnWeaponDrop

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `dropper`: `CSPlayerPawn`; `weapon`: `CSWeaponBase`; \} |
| `event.dropper` | `CSPlayerPawn` |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponDrop`](Namespace.Base.md#onweapondrop)

##### OnWeaponPickup()

> **OnWeaponPickup**(`event`): `void`

Defined in: [src/base/System.ts:270](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L270)

Instance.OnWeaponPickup

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `weapon`: `CSWeaponBase`; \} |
| `event.weapon` | `CSWeaponBase` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`OnWeaponPickup`](Namespace.Base.md#onweaponpickup)

##### ReplaceWeapons()

> **ReplaceWeapons**(`player_pawn`): `void`

Defined in: [src/system/WeaponReplacement.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacement.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `CSPlayerPawn` |

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTick`](Namespace.Base.md#settick-2)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`System`](Namespace.Base.md#abstract-system).[`SetTickInterval`](Namespace.Base.md#settickinterval-2)

##### Think()

> **Think**(): `void`

Defined in: [src/system/WeaponReplacement.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/system/WeaponReplacement.ts#L78)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

###### Overrides

[`System`](Namespace.Base.md#abstract-system).[`Think`](Namespace.Base.md#think-2)

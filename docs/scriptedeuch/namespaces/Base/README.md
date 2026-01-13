[**scriptedeuch**](../../../README.md)

***

[scriptedeuch](../../../README.md) / Base

# Base

Base Library Framework Components

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Asset](namespaces/Asset.md) | - |
| [Default](namespaces/Default.md) | - |

## Classes

### `abstract` Actor

Defined in: [base/Actor.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L14)

#### Extended by

- [`ThinkTask`](#thinktask)
- [`MessageTask`](#messagetask)
- [`Projectile`](../Actor.md#projectile)

#### Implements

- `ActorInterface`

#### Constructors

##### Constructor

> **new Actor**(`actor_pool_name`): [`Actor`](#actor)

Defined in: [base/Actor.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L22)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `actor_pool_name` | `string` | `DEFAULT_ACTOR_POOL_NAME` |

###### Returns

[`Actor`](#actor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [base/Actor.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L94)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Implementation of

`ActorInterface.Dispose`

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L69)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Implementation of

`ActorInterface.IsDirty`

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L61)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L72)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Implementation of

`ActorInterface.MaybeThink`

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/Actor.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L99)

Override Interface Method. React to messages sent by other actors in the actor pool.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `string` |
| `data` | `any` |

###### Returns

`void`

###### Implementation of

`ActorInterface.ReceiveMessage`

##### Remove()

> **Remove**(): `void`

Defined in: [base/Actor.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L63)

Same as `this.MakeDirty()`.

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/Actor.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L56)

Set the Tick Interval of the system in terms of *tick rate*.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

Set the Tick Interval of the system. Expressed in Seconds.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### Think()

> **Think**(): `void`

Defined in: [base/Actor.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L104)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

##### SendMessage()

> `static` **SendMessage**(`tag`, `data`, `actor_pool_name`): `void`

Defined in: [base/Actor.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L41)

Send messages to other actors in the actor pool.

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `tag` | `string` | `undefined` |
| `data` | `any` | `null` |
| `actor_pool_name` | `string` | `DEFAULT_ACTOR_POOL_NAME` |

###### Returns

`void`

***

### MessageTask

Defined in: [base/MessageTask.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/MessageTask.ts#L9)

Implementation of Actor as a message passage task, for sending and
receiving messages with actors.

#### Extends

- [`Actor`](#actor)

#### Constructors

##### Constructor

> **new MessageTask**(`message_callback`, `tick_rate`): [`MessageTask`](#messagetask)

Defined in: [base/MessageTask.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/MessageTask.ts#L12)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message_callback` | `MessageCallback` | `undefined` |
| `tick_rate` | `number` | `128.0` |

###### Returns

[`MessageTask`](#messagetask)

###### Overrides

[`Actor`](#actor).[`constructor`](#constructor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [base/Actor.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L94)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Dispose`](#dispose)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](#actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L69)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](#actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L61)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L72)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MaybeThink`](#maybethink)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/MessageTask.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/MessageTask.ts#L18)

Override Interface Method. React to messages sent by other actors in the actor pool.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `string` |
| `data` | `any` |

###### Returns

`void`

###### Overrides

[`Actor`](#actor).[`ReceiveMessage`](#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [base/Actor.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L63)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Remove`](#remove)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/Actor.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L56)

Set the Tick Interval of the system in terms of *tick rate*.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`SetTick`](#settick)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

Set the Tick Interval of the system. Expressed in Seconds.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`SetTickInterval`](#settickinterval)

##### Think()

> **Think**(): `void`

Defined in: [base/Actor.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L104)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Think`](#think)

##### SendMessage()

> `static` **SendMessage**(`tag`, `data`, `actor_pool_name`): `void`

Defined in: [base/Actor.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L41)

Send messages to other actors in the actor pool.

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `tag` | `string` | `undefined` |
| `data` | `any` | `null` |
| `actor_pool_name` | `string` | `DEFAULT_ACTOR_POOL_NAME` |

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`SendMessage`](#sendmessage)

***

### Mount

Defined in: [base/Mount.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L36)

The Fundamental Library Framework. Systems and Actors are extended
from `Base.System` and `Base.Actor`, while `Base.Mount` mounts
them with the point_script `Instance.On*` events.

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_instance"></a> `_instance` | `static` | [`Mount`](#mount) | Singleton Instance | [base/Mount.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L38) |

#### Accessors

##### instance

###### Get Signature

> **get** `static` **instance**(): [`Mount`](#mount)

Defined in: [base/Mount.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L47)

Singleton Getter

###### Returns

[`Mount`](#mount)

#### Methods

##### \_startSystems()

> **\_startSystems**(): `void`

Defined in: [base/Mount.ts:200](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L200)

Enable All Registered Systems

###### Returns

`void`

##### \_stopSystems()

> **\_stopSystems**(): `void`

Defined in: [base/Mount.ts:205](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L205)

Disable All Registered Systems

###### Returns

`void`

##### Disable()

> `static` **Disable**(`name`): `boolean`

Defined in: [base/Mount.ts:232](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L232)

Disable Registered System with `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### Enable()

> `static` **Enable**(`name`): `boolean`

Defined in: [base/Mount.ts:223](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L223)

Enable Registered System with `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### GetSystem()

> `static` **GetSystem**(`name`): [`System`](#system) \| `null`

Defined in: [base/Mount.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

[`System`](#system) \| `null`

`Base.System` registered as `name`, or `null`

##### HasSystem()

> `static` **HasSystem**(`name`): `boolean`

Defined in: [base/Mount.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

`true`, if system registered as `name` exists.

##### List()

> `static` **List**(): `string`[]

Defined in: [base/Mount.ts:243](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L243)

List all Systems

###### Returns

`string`[]

A list of registered system names.

##### Register()

> `static` **Register**(`name`, `system`): [`System`](#system)

Defined in: [base/Mount.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L56)

Register a `Base.System`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `system` | [`System`](#system) |

###### Returns

[`System`](#system)

##### Start()

> `static` **Start**(): `void`

Defined in: [base/Mount.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L210)

Start Enabled Systems

###### Returns

`void`

##### Stop()

> `static` **Stop**(): `void`

Defined in: [base/Mount.ts:217](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L217)

Stop and Disable all Systems

###### Returns

`void`

##### Unregister()

> `static` **Unregister**(`name`): `void`

Defined in: [base/Mount.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L63)

Unregister a `Base.System`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`void`

***

### `abstract` System

Defined in: [base/System.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L20)

Mountable System Abstraction.

#### Extended by

- [`PlayerHealthRegenerationSystem`](../System.md#playerhealthregenerationsystem)
- [`PlayerModelChangerSystem`](../System.md#playermodelchangersystem)
- [`SoundEventSystem`](../System.md#soundeventsystem)
- [`GameAnnouncerSystem`](../System.md#gameannouncersystem)
- [`DeathmatchSpawnerSystem`](../System.md#deathmatchspawnersystem)
- [`DialogSystem`](../System.md#dialogsystem)
- [`WeaponReplacementSystem`](../System.md#weaponreplacementsystem)
- [`SchedulingSystem`](../System.md#schedulingsystem)

#### Constructors

##### Constructor

> **new System**(): [`System`](#system)

###### Returns

[`System`](#system)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

###### Returns

`void`

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L26)

###### Returns

`void`

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Returns

`void`

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [base/System.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L57)

Instance.OnActivate()

###### Returns

`void`

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

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [base/System.ts:183](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L183)

Instance.OnRoundStart

###### Returns

`void`

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

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### Think()

> **Think**(): `void`

Defined in: [base/System.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L47)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

***

### ThinkTask

Defined in: [base/ThinkTask.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/ThinkTask.ts#L8)

Implementation of Actor as a repeatable think function task.

#### Extends

- [`Actor`](#actor)

#### Constructors

##### Constructor

> **new ThinkTask**(`callback`, `interval`): [`ThinkTask`](#thinktask)

Defined in: [base/ThinkTask.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/ThinkTask.ts#L11)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `callback` | `ThinkCallback` | `undefined` |
| `interval` | `number` | `1.0` |

###### Returns

[`ThinkTask`](#thinktask)

###### Overrides

[`Actor`](#actor).[`constructor`](#constructor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [base/Actor.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L94)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Dispose`](#dispose)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](#actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L69)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](#actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L61)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L72)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MaybeThink`](#maybethink)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/Actor.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L99)

Override Interface Method. React to messages sent by other actors in the actor pool.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `string` |
| `data` | `any` |

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`ReceiveMessage`](#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [base/Actor.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L63)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Remove`](#remove)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/Actor.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L56)

Set the Tick Interval of the system in terms of *tick rate*.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`SetTick`](#settick)

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

Set the Tick Interval of the system. Expressed in Seconds.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`SetTickInterval`](#settickinterval)

##### Think()

> **Think**(): `void`

Defined in: [base/ThinkTask.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/ThinkTask.ts#L17)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Overrides

[`Actor`](#actor).[`Think`](#think)

##### SendMessage()

> `static` **SendMessage**(`tag`, `data`, `actor_pool_name`): `void`

Defined in: [base/Actor.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L41)

Send messages to other actors in the actor pool.

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `tag` | `string` | `undefined` |
| `data` | `any` | `null` |
| `actor_pool_name` | `string` | `DEFAULT_ACTOR_POOL_NAME` |

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`SendMessage`](#sendmessage)

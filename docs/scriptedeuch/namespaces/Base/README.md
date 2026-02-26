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
- [`Explosion`](../Actor.md#explosion)
- [`PlayerInvincibility`](../Actor.md#playerinvincibility)
- [`PlayerMount`](../Actor.md#playermount)
- [`Projectile`](../Actor.md#projectile)
- [`Listener`](../Event.md#listener)

#### Implements

- `ActorInterface`

#### Constructors

##### Constructor

> **new Actor**(`actor_pool_name?`): [`Actor`](#abstract-actor)

Defined in: [base/Actor.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L22)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `actor_pool_name` | `string` | `DEFAULT_ACTOR_POOL_NAME` |

###### Returns

[`Actor`](#abstract-actor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [base/Actor.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L95)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Implementation of

`ActorInterface.Dispose`

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Delta Since last think time.

###### Returns

`number`

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L70)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Implementation of

`ActorInterface.IsDirty`

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L73)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Implementation of

`ActorInterface.MaybeThink`

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/Actor.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L105)

Override Interface Method. React to messages sent by other
actors in the actor pool.

Note: `Event.Listener` and `Event.Sender` with tags are
preferred over this method.

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

Defined in: [base/Actor.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L64)

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

Defined in: [base/Actor.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L110)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

##### SendMessage()

> `static` **SendMessage**(`tag`, `data?`, `actor_pool_name?`): `void`

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

- [`Actor`](#abstract-actor)

#### Constructors

##### Constructor

> **new MessageTask**(`message_callback`, `tick_rate?`): [`MessageTask`](#messagetask)

Defined in: [base/MessageTask.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/MessageTask.ts#L12)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message_callback` | `MessageCallback` | `undefined` |
| `tick_rate` | `number` | `128.0` |

###### Returns

[`MessageTask`](#messagetask)

###### Overrides

[`Actor`](#abstract-actor).[`constructor`](#constructor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [base/Actor.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L95)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Dispose`](#dispose)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Delta Since last think time.

###### Returns

`number`

###### Inherited from

[`Actor`](#abstract-actor).[`GetDelta`](#getdelta)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](#abstract-actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L70)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](#abstract-actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L73)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`MaybeThink`](#maybethink)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/MessageTask.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/MessageTask.ts#L18)

Override Interface Method. React to messages sent by other
actors in the actor pool.

Note: `Event.Listener` and `Event.Sender` with tags are
preferred over this method.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `string` |
| `data` | `any` |

###### Returns

`void`

###### Overrides

[`Actor`](#abstract-actor).[`ReceiveMessage`](#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [base/Actor.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L64)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Remove`](#remove)

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

[`Actor`](#abstract-actor).[`SetTick`](#settick)

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

[`Actor`](#abstract-actor).[`SetTickInterval`](#settickinterval)

##### Think()

> **Think**(): `void`

Defined in: [base/Actor.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L110)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Think`](#think)

##### SendMessage()

> `static` **SendMessage**(`tag`, `data?`, `actor_pool_name?`): `void`

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

[`Actor`](#abstract-actor).[`SendMessage`](#sendmessage)

***

### Mount

Defined in: [base/Mount.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L40)

The Fundamental Library Framework. Systems and Actors are extended
from `Base.System` and `Base.Actor`, while `Base.Mount` mounts
them with the point_script `Instance.On*` events.

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_instance"></a> `_instance` | `static` | [`Mount`](#mount) | Singleton Instance | [base/Mount.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L42) |

#### Accessors

##### instance

###### Get Signature

> **get** `static` **instance**(): [`Mount`](#mount)

Defined in: [base/Mount.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L51)

Singleton Getter

###### Returns

[`Mount`](#mount)

#### Methods

##### \_startSystems()

> **\_startSystems**(): `void`

Defined in: [base/Mount.ts:226](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L226)

Enable All Registered Systems

###### Returns

`void`

##### \_stopSystems()

> **\_stopSystems**(): `void`

Defined in: [base/Mount.ts:231](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L231)

Disable All Registered Systems

###### Returns

`void`

##### Disable()

> `static` **Disable**(`name`): `boolean`

Defined in: [base/Mount.ts:258](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L258)

Disable Registered System with `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### Enable()

> `static` **Enable**(`name`): `boolean`

Defined in: [base/Mount.ts:249](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L249)

Enable Registered System with `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### GetSystem()

> `static` **GetSystem**(`name`): [`System`](#abstract-system) \| `null`

Defined in: [base/Mount.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

[`System`](#abstract-system) \| `null`

`Base.System` registered as `name`, or `null`

##### HasSystem()

> `static` **HasSystem**(`name`): `boolean`

Defined in: [base/Mount.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

`true`, if system registered as `name` exists.

##### List()

> `static` **List**(): `string`[]

Defined in: [base/Mount.ts:269](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L269)

List all Systems

###### Returns

`string`[]

A list of registered system names.

##### Register()

> `static` **Register**(`name`, `system`): [`System`](#abstract-system)

Defined in: [base/Mount.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L60)

Register a `Base.System`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `system` | [`System`](#abstract-system) |

###### Returns

[`System`](#abstract-system)

##### Start()

> `static` **Start**(): `void`

Defined in: [base/Mount.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L236)

Start Enabled Systems

###### Returns

`void`

##### Stop()

> `static` **Stop**(): `void`

Defined in: [base/Mount.ts:243](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L243)

Stop and Disable all Systems

###### Returns

`void`

##### Unregister()

> `static` **Unregister**(`name`): `void`

Defined in: [base/Mount.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L67)

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

- [`DeathmatchSpawnerSystem`](../System.md#deathmatchspawnersystem)
- [`DialogSystem`](../System.md#dialogsystem)
- [`FreezeTimeSystem`](../System.md#freezetimesystem)
- [`GameAnnouncerSystem`](../System.md#gameannouncersystem)
- [`KnifeDashSystem`](../System.md#knifedashsystem)
- [`PlayerHealthRegenerationSystem`](../System.md#playerhealthregenerationsystem)
- [`PlayerModelChangerSystem`](../System.md#playermodelchangersystem)
- [`PlayerSlidingSystem`](../System.md#playerslidingsystem)
- [`SchedulingSystem`](../System.md#schedulingsystem)
- [`SoundEventSystem`](../System.md#soundeventsystem)
- [`WeaponReplacementSystem`](../System.md#weaponreplacementsystem)

#### Constructors

##### Constructor

> **new System**(): [`System`](#abstract-system)

###### Returns

[`System`](#abstract-system)

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

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Returns

`number`

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`boolean`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [base/System.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L58)

Instance.OnActivate()

###### Returns

`void`

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `any`

Defined in: [base/System.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L64)

Instance.OnBeforePlayerDamage()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `BeforePlayerDamageEvent` |

###### Returns

`any`

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L70)

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

Defined in: [base/System.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L76)

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

Defined in: [base/System.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L82)

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

Defined in: [base/System.ts:88](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L88)

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

Defined in: [base/System.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L94)

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

Defined in: [base/System.ts:100](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L100)

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

Defined in: [base/System.ts:106](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L106)

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

Defined in: [base/System.ts:112](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L112)

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

Defined in: [base/System.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L118)

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

Defined in: [base/System.ts:124](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L124)

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

Defined in: [base/System.ts:130](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L130)

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

Defined in: [base/System.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L136)

Instance.OnPlayerDamage

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `PlayerDamageEvent` |

###### Returns

`void`

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:142](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L142)

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

Defined in: [base/System.ts:148](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L148)

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

Defined in: [base/System.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L154)

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

Defined in: [base/System.ts:160](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L160)

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

Defined in: [base/System.ts:166](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L166)

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

Defined in: [base/System.ts:172](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L172)

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

Defined in: [base/System.ts:178](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L178)

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

Defined in: [base/System.ts:184](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L184)

Instance.OnRoundStart

###### Returns

`void`

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**\<`T`\>(`memory`): `void`

Defined in: [base/System.ts:196](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L196)

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

Defined in: [base/System.ts:190](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L190)

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

Defined in: [base/System.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L48)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

***

### ThinkTask

Defined in: [base/ThinkTask.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/ThinkTask.ts#L8)

Implementation of Actor as a repeatable think function task.

#### Extends

- [`Actor`](#abstract-actor)

#### Constructors

##### Constructor

> **new ThinkTask**(`callback`, `interval?`): [`ThinkTask`](#thinktask)

Defined in: [base/ThinkTask.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/ThinkTask.ts#L11)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `callback` | `ThinkCallback` | `undefined` |
| `interval` | `number` | `1.0` |

###### Returns

[`ThinkTask`](#thinktask)

###### Overrides

[`Actor`](#abstract-actor).[`constructor`](#constructor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [base/Actor.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L95)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Dispose`](#dispose)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Delta Since last think time.

###### Returns

`number`

###### Inherited from

[`Actor`](#abstract-actor).[`GetDelta`](#getdelta)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](#abstract-actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L70)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](#abstract-actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L73)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`MaybeThink`](#maybethink)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/Actor.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L105)

Override Interface Method. React to messages sent by other
actors in the actor pool.

Note: `Event.Listener` and `Event.Sender` with tags are
preferred over this method.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `string` |
| `data` | `any` |

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`ReceiveMessage`](#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [base/Actor.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L64)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Remove`](#remove)

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

[`Actor`](#abstract-actor).[`SetTick`](#settick)

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

[`Actor`](#abstract-actor).[`SetTickInterval`](#settickinterval)

##### Think()

> **Think**(): `void`

Defined in: [base/ThinkTask.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/ThinkTask.ts#L17)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Overrides

[`Actor`](#abstract-actor).[`Think`](#think)

##### SendMessage()

> `static` **SendMessage**(`tag`, `data?`, `actor_pool_name?`): `void`

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

[`Actor`](#abstract-actor).[`SendMessage`](#sendmessage)

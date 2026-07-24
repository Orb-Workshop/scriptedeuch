# Base

Base Library Framework Components

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Asset](Base.Namespace.Asset.md) | - |
| [Default](Base.Namespace.Default.md) | - |

## Classes

### `abstract` Actor

Defined in: [src/base/Actor.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L14)

#### Extended by

- [`ThinkTask`](#thinktask)
- [`MessageTask`](#messagetask)
- [`Explosion`](Namespace.Actor.md#explosion)
- [`PlayerInvincibility`](Namespace.Actor.md#playerinvincibility)
- [`PlayerMount`](Namespace.Actor.md#playermount)
- [`Projectile`](Namespace.Actor.md#projectile)
- [`Listener`](Namespace.Event.md#listener)

#### Implements

- `ActorInterface`

#### Constructors

##### Constructor

> **new Actor**(`actor_pool_name?`): [`Actor`](#abstract-actor)

Defined in: [src/base/Actor.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L22)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `actor_pool_name` | `string` | `DEFAULT_ACTOR_POOL_NAME` |

###### Returns

[`Actor`](#abstract-actor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [src/base/Actor.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L95)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Implementation of

`ActorInterface.Dispose`

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Delta Since last think time.

###### Returns

`number`

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [src/base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [src/base/Actor.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L70)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Implementation of

`ActorInterface.IsDirty`

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [src/base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/Actor.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L73)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Implementation of

`ActorInterface.MaybeThink`

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [src/base/Actor.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L105)

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

Defined in: [src/base/Actor.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L64)

Same as `this.MakeDirty()`.

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/Actor.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L56)

Set the Tick Interval of the system in terms of *tick rate*.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

Set the Tick Interval of the system. Expressed in Seconds.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### Think()

> **Think**(): `void`

Defined in: [src/base/Actor.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L110)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

##### SendMessage()

> `static` **SendMessage**(`tag`, `data?`, `actor_pool_name?`): `void`

Defined in: [src/base/Actor.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L41)

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

Defined in: [src/base/MessageTask.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/MessageTask.ts#L9)

Implementation of Actor as a message passage task, for sending and
receiving messages with actors.

#### Extends

- [`Actor`](#abstract-actor)

#### Constructors

##### Constructor

> **new MessageTask**(`message_callback`, `tick_rate?`): [`MessageTask`](#messagetask)

Defined in: [src/base/MessageTask.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/MessageTask.ts#L12)

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

Defined in: [src/base/Actor.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L95)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Dispose`](#dispose)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Delta Since last think time.

###### Returns

`number`

###### Inherited from

[`Actor`](#abstract-actor).[`GetDelta`](#getdelta)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [src/base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](#abstract-actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [src/base/Actor.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L70)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](#abstract-actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [src/base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/Actor.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L73)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`MaybeThink`](#maybethink)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [src/base/MessageTask.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/MessageTask.ts#L18)

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

Defined in: [src/base/Actor.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L64)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Remove`](#remove)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/Actor.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L56)

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

Defined in: [src/base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

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

Defined in: [src/base/Actor.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L110)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Think`](#think)

##### SendMessage()

> `static` **SendMessage**(`tag`, `data?`, `actor_pool_name?`): `void`

Defined in: [src/base/Actor.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L41)

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

Defined in: [src/base/Mount.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L40)

The Fundamental Library Framework. Systems and Actors are extended
from `Base.System` and `Base.Actor`, while `Base.Mount` mounts
them with the point_script `Instance.On*` events.

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_instance"></a> `_instance` | `static` | [`Mount`](#mount) | Singleton Instance | [src/base/Mount.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L42) |

#### Accessors

##### instance

###### Get Signature

> **get** `static` **instance**(): [`Mount`](#mount)

Defined in: [src/base/Mount.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L51)

Singleton Getter

###### Returns

[`Mount`](#mount)

#### Methods

##### \_startSystems()

> **\_startSystems**(): `void`

Defined in: [src/base/Mount.ts:219](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L219)

Enable All Registered Systems

###### Returns

`void`

##### \_stopSystems()

> **\_stopSystems**(): `void`

Defined in: [src/base/Mount.ts:224](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L224)

Disable All Registered Systems

###### Returns

`void`

##### Disable()

> `static` **Disable**(`name`): `boolean`

Defined in: [src/base/Mount.ts:251](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L251)

Disable Registered System with `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### Enable()

> `static` **Enable**(`name`): `boolean`

Defined in: [src/base/Mount.ts:242](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L242)

Enable Registered System with `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### GetSystem()

> `static` **GetSystem**(`name`): [`System`](#abstract-system) \| `null`

Defined in: [src/base/Mount.ts:79](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

[`System`](#abstract-system) \| `null`

`Base.System` registered as `name`, or `null`

##### HasSystem()

> `static` **HasSystem**(`name`): `boolean`

Defined in: [src/base/Mount.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

`true`, if system registered as `name` exists.

##### List()

> `static` **List**(): `string`[]

Defined in: [src/base/Mount.ts:262](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L262)

List all Systems

###### Returns

`string`[]

A list of registered system names.

##### Register()

> `static` **Register**(`name`, `system`): [`System`](#abstract-system)

Defined in: [src/base/Mount.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L60)

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

Defined in: [src/base/Mount.ts:229](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L229)

Start Enabled Systems

###### Returns

`void`

##### Stop()

> `static` **Stop**(): `void`

Defined in: [src/base/Mount.ts:236](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L236)

Stop and Disable all Systems

###### Returns

`void`

##### Unregister()

> `static` **Unregister**(`name`): `void`

Defined in: [src/base/Mount.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L67)

Unregister a `Base.System`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`void`

***

### `abstract` System

Defined in: [src/base/System.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L22)

Mountable System Abstraction.

#### Extended by

- [`DeathmatchSpawnerSystem`](Namespace.System.md#deathmatchspawnersystem)
- [`DialogSystem`](Namespace.System.md#dialogsystem)
- [`DoubleJumpSystem`](Namespace.System.md#doublejumpsystem)
- [`FreezeTimeSystem`](Namespace.System.md#freezetimesystem)
- [`GameAnnouncerSystem`](Namespace.System.md#gameannouncersystem)
- [`KnifeDashSystem`](Namespace.System.md#knifedashsystem)
- [`PlayerHealthRegenerationSystem`](Namespace.System.md#playerhealthregenerationsystem)
- [`PlayerModelChangerSystem`](Namespace.System.md#playermodelchangersystem)
- [`PlayerSlidingSystem`](Namespace.System.md#playerslidingsystem)
- [`SchedulingSystem`](Namespace.System.md#schedulingsystem)
- [`SoundEventSystem`](Namespace.System.md#soundeventsystem)
- [`WeaponReplacementSystem`](Namespace.System.md#weaponreplacementsystem)

#### Constructors

##### Constructor

> **new System**(): [`System`](#abstract-system)

###### Returns

[`System`](#abstract-system)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L29)

###### Returns

`void`

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L28)

###### Returns

`void`

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`number`

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

###### Returns

`boolean`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`void`

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

Instance.OnActivate()

###### Returns

`void`

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

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:193](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L193)

Instance.OnRoundStart

###### Returns

`void`

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L210)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

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

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### Think()

> **Think**(): `void`

Defined in: [src/base/System.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L50)

Replacement for `Instance.SetThink()` when used with `Base.Mount`.

###### Returns

`void`

***

### ThinkTask

Defined in: [src/base/ThinkTask.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/ThinkTask.ts#L8)

Implementation of Actor as a repeatable think function task.

#### Extends

- [`Actor`](#abstract-actor)

#### Constructors

##### Constructor

> **new ThinkTask**(`callback`, `interval?`): [`ThinkTask`](#thinktask)

Defined in: [src/base/ThinkTask.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/ThinkTask.ts#L11)

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

Defined in: [src/base/Actor.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L95)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Dispose`](#dispose)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Delta Since last think time.

###### Returns

`number`

###### Inherited from

[`Actor`](#abstract-actor).[`GetDelta`](#getdelta)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [src/base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](#abstract-actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [src/base/Actor.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L70)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](#abstract-actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [src/base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/Actor.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L73)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`MaybeThink`](#maybethink)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [src/base/Actor.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L105)

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

Defined in: [src/base/Actor.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L64)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](#abstract-actor).[`Remove`](#remove)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/Actor.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L56)

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

Defined in: [src/base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

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

Defined in: [src/base/ThinkTask.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/ThinkTask.ts#L17)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Overrides

[`Actor`](#abstract-actor).[`Think`](#think)

##### SendMessage()

> `static` **SendMessage**(`tag`, `data?`, `actor_pool_name?`): `void`

Defined in: [src/base/Actor.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L41)

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

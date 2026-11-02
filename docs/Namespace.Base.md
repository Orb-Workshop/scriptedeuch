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

Performs `this.Think()` if it is past a certain interval

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

Performs `this.Think()` if it is past a certain interval

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

Defined in: [src/base/Mount.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L57)

The Fundamental Library Framework. Systems and Actors are extended
from `Base.System` and `Base.Actor`, while `Base.Mount` mounts
them with the point_script `Instance.On*` events.

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="_instance"></a> `_instance` | `static` | [`Mount`](#mount) | Singleton Instance | [src/base/Mount.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L59) |

#### Accessors

##### instance

###### Get Signature

> **get** `static` **instance**(): [`Mount`](#mount)

Defined in: [src/base/Mount.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L68)

Singleton Getter

###### Returns

[`Mount`](#mount)

#### Methods

##### \_startSystems()

> **\_startSystems**(): `void`

Defined in: [src/base/Mount.ts:284](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L284)

Enable All Registered Systems

###### Returns

`void`

##### \_stopSystems()

> **\_stopSystems**(): `void`

Defined in: [src/base/Mount.ts:289](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L289)

Disable All Registered Systems

###### Returns

`void`

##### Disable()

> `static` **Disable**(`name`): `boolean`

Defined in: [src/base/Mount.ts:316](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L316)

Disable Registered System with `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### Enable()

> `static` **Enable**(`name`): `boolean`

Defined in: [src/base/Mount.ts:307](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L307)

Enable Registered System with `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### GetSystem()

> `static` **GetSystem**(`name`): [`System`](#abstract-system) \| `null`

Defined in: [src/base/Mount.ts:96](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L96)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

[`System`](#abstract-system) \| `null`

`Base.System` registered as `name`, or `null`

##### HasSystem()

> `static` **HasSystem**(`name`): `boolean`

Defined in: [src/base/Mount.ts:90](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L90)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

`true`, if system registered as `name` exists.

##### List()

> `static` **List**(): `string`[]

Defined in: [src/base/Mount.ts:327](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L327)

List all Systems

###### Returns

`string`[]

A list of registered system names.

##### Register()

> `static` **Register**(`name`, `system`): [`System`](#abstract-system)

Defined in: [src/base/Mount.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L77)

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

Defined in: [src/base/Mount.ts:294](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L294)

Start Enabled Systems

###### Returns

`void`

##### Stop()

> `static` **Stop**(): `void`

Defined in: [src/base/Mount.ts:301](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L301)

Stop and Disable all Systems

###### Returns

`void`

##### Unregister()

> `static` **Unregister**(`name`): `void`

Defined in: [src/base/Mount.ts:84](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L84)

Unregister a `Base.System`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`void`

***

### `abstract` System

Defined in: [src/base/System.ts:27](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L27)

Mountable System Abstraction.

#### Extended by

- [`DeathmatchSpawner`](Namespace.System.md#deathmatchspawner)
- [`Dialog`](Namespace.System.md#dialog)
- [`DoubleJump`](Namespace.System.md#doublejump)
- [`FreezeTime`](Namespace.System.md#freezetime)
- [`GameAnnouncer`](Namespace.System.md#gameannouncer)
- [`KnifeDash`](Namespace.System.md#knifedash)
- [`PlayerHealthRegeneration`](Namespace.System.md#playerhealthregeneration)
- [`PlayerModelChanger`](Namespace.System.md#playermodelchanger)
- [`PlayerSliding`](Namespace.System.md#playersliding)
- [`Scheduling`](Namespace.System.md#scheduling)
- [`SoundEvent`](Namespace.System.md#soundevent)
- [`WeaponReplacement`](Namespace.System.md#weaponreplacement)

#### Constructors

##### Constructor

> **new System**(): [`System`](#abstract-system)

###### Returns

[`System`](#abstract-system)

#### Methods

##### DisableSystem()

> **DisableSystem**(): `void`

Defined in: [src/base/System.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L34)

###### Returns

`void`

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [src/base/System.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L33)

###### Returns

`void`

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Returns

`number`

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [src/base/System.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L35)

###### Returns

`boolean`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Returns

`void`

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [src/base/System.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L65)

Instance.OnActivate()

###### Returns

`void`

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

##### OnBeginRoundRestart()

> **OnBeginRoundRestart**(): `void`

Defined in: [src/base/System.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L113)

Instance.OnBeginRoundRestart

###### Returns

`void`

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

##### OnRoundStart()

> **OnRoundStart**(): `void`

Defined in: [src/base/System.ts:101](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L101)

Instance.OnRoundStart

###### Returns

`void`

##### OnScriptReload()

> **OnScriptReload**(): `void`

Defined in: [src/base/System.ts:311](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L311)

Simpler Version of OnScriptReloadAfter

###### Returns

`void`

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

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [src/base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [src/base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### Think()

> **Think**(): `void`

Defined in: [src/base/System.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L55)

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

Performs `this.Think()` if it is past a certain interval

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

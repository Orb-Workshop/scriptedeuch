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

Defined in: [base/Actor.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L13)

#### Extended by

- [`ThinkTask`](#thinktask)
- [`MessageTask`](#messagetask)
- [`Projectile`](../Actor.md#projectile)

#### Implements

- `ActorInterface`

#### Constructors

##### Constructor

> **new Actor**(`actor_pool_name`): [`Actor`](#actor)

Defined in: [base/Actor.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L21)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `actor_pool_name` | `string` | `DEFAULT_ACTOR_POOL_NAME` |

###### Returns

[`Actor`](#actor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [base/Actor.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L93)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Implementation of

`ActorInterface.Dispose`

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L57)

How long the actor has been alive in seconds.

###### Returns

`number`

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L68)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Implementation of

`ActorInterface.IsDirty`

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L71)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Implementation of

`ActorInterface.MaybeThink`

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/Actor.ts:98](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L98)

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

Defined in: [base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Same as `this.MakeDirty()`.

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/Actor.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L55)

Set the Tick Interval of the system in terms of *tick rate*.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/Actor.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L53)

Set the Tick Interval of the system. Expressed in Seconds.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### Think()

> **Think**(): `void`

Defined in: [base/Actor.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L103)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

##### SendMessage()

> `static` **SendMessage**(`tag`, `data`, `actor_pool_name`): `void`

Defined in: [base/Actor.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L40)

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

Defined in: [base/Actor.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L93)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Dispose`](#dispose)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L57)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](#actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L68)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](#actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L71)

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

Defined in: [base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Remove`](#remove)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/Actor.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L55)

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

Defined in: [base/Actor.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L53)

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

Defined in: [base/Actor.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L103)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Think`](#think)

##### SendMessage()

> `static` **SendMessage**(`tag`, `data`, `actor_pool_name`): `void`

Defined in: [base/Actor.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L40)

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

Defined in: [base/Mount.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L189)

Enable All Registered Systems

###### Returns

`void`

##### \_stopSystems()

> **\_stopSystems**(): `void`

Defined in: [base/Mount.ts:194](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L194)

Disable All Registered Systems

###### Returns

`void`

##### Disable()

> `static` **Disable**(`name`): `boolean`

Defined in: [base/Mount.ts:221](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L221)

Disable Registered System with `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### Enable()

> `static` **Enable**(`name`): `boolean`

Defined in: [base/Mount.ts:212](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L212)

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

Defined in: [base/Mount.ts:232](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L232)

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

Defined in: [base/Mount.ts:199](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L199)

Start Enabled Systems

###### Returns

`void`

##### Stop()

> `static` **Stop**(): `void`

Defined in: [base/Mount.ts:206](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L206)

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

Defined in: [base/System.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L10)

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

Defined in: [base/System.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L17)

###### Returns

`void`

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L16)

###### Returns

`void`

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L18)

###### Returns

`boolean`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L22)

###### Returns

`void`

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [base/System.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L44)

###### Returns

`void`

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `void`

Defined in: [base/System.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L58)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L64)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:74](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [base/System.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:78](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L78)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [base/System.ts:82](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L82)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:84](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L84)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnRoundStart()

> **OnRoundStart**(`event`): `void`

Defined in: [base/System.ts:86](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L86)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**(`memory`): `void`

Defined in: [base/System.ts:90](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L90)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `any` |

###### Returns

`void`

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**(): `void`

Defined in: [base/System.ts:88](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L88)

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### Think()

> **Think**(): `void`

Defined in: [base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

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

Defined in: [base/Actor.ts:93](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L93)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Dispose`](#dispose)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L57)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](#actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L68)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](#actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L71)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MaybeThink`](#maybethink)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/Actor.ts:98](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L98)

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

Defined in: [base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Remove`](#remove)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/Actor.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L55)

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

Defined in: [base/Actor.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L53)

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

Defined in: [base/Actor.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L40)

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

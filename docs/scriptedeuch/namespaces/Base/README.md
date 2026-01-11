[**scriptedeuch**](../../../README.md)

***

[scriptedeuch](../../../README.md) / Base

# Base

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

Defined in: [base/Actor.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L89)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Implementation of

`ActorInterface.Dispose`

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

###### Returns

`number`

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L65)

###### Returns

`boolean`

###### Implementation of

`ActorInterface.IsDirty`

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L59)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L67)

###### Returns

`void`

###### Implementation of

`ActorInterface.MaybeThink`

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/Actor.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L94)

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

Defined in: [base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/Actor.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/Actor.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### Think()

> **Think**(): `void`

Defined in: [base/Actor.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L99)

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

Defined in: [base/Actor.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L89)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Dispose`](#dispose)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

###### Returns

`number`

###### Inherited from

[`Actor`](#actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L65)

###### Returns

`boolean`

###### Inherited from

[`Actor`](#actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L59)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L67)

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

Defined in: [base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Remove`](#remove)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/Actor.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L53)

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

Defined in: [base/Actor.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L52)

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

Defined in: [base/Actor.ts:99](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L99)

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

Defined in: [base/Mount.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L8)

The Fundamental Library Framework. Systems and Actors are extended
from `Base.System` and `Base.Actor`, while `Base.Mount` mounts
them with the point_script `Instance.On*` events.

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_instance"></a> `_instance` | `static` | [`Mount`](#mount) | [base/Mount.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L9) |

#### Accessors

##### instance

###### Get Signature

> **get** `static` **instance**(): [`Mount`](#mount)

Defined in: [base/Mount.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L15)

###### Returns

[`Mount`](#mount)

#### Methods

##### \_startSystems()

> **\_startSystems**(): `void`

Defined in: [base/Mount.ts:150](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L150)

###### Returns

`void`

##### \_stopSystems()

> **\_stopSystems**(): `void`

Defined in: [base/Mount.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L154)

###### Returns

`void`

##### Disable()

> `static` **Disable**(`name`): `boolean`

Defined in: [base/Mount.ts:177](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L177)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### Enable()

> `static` **Enable**(`name`): `boolean`

Defined in: [base/Mount.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L169)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### GetSystem()

> `static` **GetSystem**(`name`): [`System`](#system) \| `null`

Defined in: [base/Mount.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

[`System`](#system) \| `null`

##### HasSystem()

> `static` **HasSystem**(`name`): `boolean`

Defined in: [base/Mount.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### List()

> `static` **List**(): `string`[]

Defined in: [base/Mount.ts:185](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L185)

###### Returns

`string`[]

##### Register()

> `static` **Register**(`name`, `system`): [`System`](#system)

Defined in: [base/Mount.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `system` | [`System`](#system) |

###### Returns

[`System`](#system)

##### Start()

> `static` **Start**(): `void`

Defined in: [base/Mount.ts:158](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L158)

###### Returns

`void`

##### Stop()

> `static` **Stop**(): `void`

Defined in: [base/Mount.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L164)

###### Returns

`void`

##### Unregister()

> `static` **Unregister**(`name`): `void`

Defined in: [base/Mount.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Mount.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`void`

***

### `abstract` System

Defined in: [base/System.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L6)

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

Defined in: [base/System.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L13)

###### Returns

`void`

##### EnableSystem()

> **EnableSystem**(): `void`

Defined in: [base/System.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L12)

###### Returns

`void`

##### IsSystemEnabled()

> **IsSystemEnabled**(): `boolean`

Defined in: [base/System.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L14)

###### Returns

`boolean`

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/System.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L18)

###### Returns

`void`

##### OnActivate()

> **OnActivate**(): `void`

Defined in: [base/System.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L36)

###### Returns

`void`

##### OnBeforePlayerDamage()

> **OnBeforePlayerDamage**(`event`): `void`

Defined in: [base/System.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L37)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnBombDefuse()

> **OnBombDefuse**(`event`): `void`

Defined in: [base/System.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnBombPlant()

> **OnBombPlant**(`event`): `void`

Defined in: [base/System.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnBulletImpact()

> **OnBulletImpact**(`event`): `void`

Defined in: [base/System.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnGrenadeBounce()

> **OnGrenadeBounce**(`event`): `void`

Defined in: [base/System.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnGrenadeThrow()

> **OnGrenadeThrow**(`event`): `void`

Defined in: [base/System.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnGunFire()

> **OnGunFire**(`event`): `void`

Defined in: [base/System.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnGunReload()

> **OnGunReload**(`event`): `void`

Defined in: [base/System.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnKnifeAttack()

> **OnKnifeAttack**(`event`): `void`

Defined in: [base/System.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerActivate()

> **OnPlayerActivate**(`event`): `void`

Defined in: [base/System.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerChat()

> **OnPlayerChat**(`event`): `void`

Defined in: [base/System.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerConnect()

> **OnPlayerConnect**(`event`): `void`

Defined in: [base/System.ts:48](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerDamage()

> **OnPlayerDamage**(`event`): `void`

Defined in: [base/System.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerDisconnect()

> **OnPlayerDisconnect**(`event`): `void`

Defined in: [base/System.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerJump()

> **OnPlayerJump**(`event`): `void`

Defined in: [base/System.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerKill()

> **OnPlayerKill**(`event`): `void`

Defined in: [base/System.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L52)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerLand()

> **OnPlayerLand**(`event`): `void`

Defined in: [base/System.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L53)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerPing()

> **OnPlayerPing**(`event`): `void`

Defined in: [base/System.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnPlayerReset()

> **OnPlayerReset**(`event`): `void`

Defined in: [base/System.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnRoundEnd()

> **OnRoundEnd**(`event`): `void`

Defined in: [base/System.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnRoundStart()

> **OnRoundStart**(`event`): `void`

Defined in: [base/System.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `any` |

###### Returns

`void`

##### OnScriptReloadAfter()

> **OnScriptReloadAfter**(`memory`): `void`

Defined in: [base/System.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `memory` | `any` |

###### Returns

`void`

##### OnScriptReloadBefore()

> **OnScriptReloadBefore**(): `void`

Defined in: [base/System.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L59)

###### Returns

`void`

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/System.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### SetTickInterval()

> **SetTickInterval**(`i`): `void`

Defined in: [base/System.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

###### Returns

`void`

##### Think()

> **Think**(): `void`

Defined in: [base/System.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/System.ts#L30)

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

Defined in: [base/Actor.ts:89](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L89)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Dispose`](#dispose)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

###### Returns

`number`

###### Inherited from

[`Actor`](#actor).[`GetLifetime`](#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L65)

###### Returns

`boolean`

###### Inherited from

[`Actor`](#actor).[`IsDirty`](#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L59)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MakeDirty`](#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L67)

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`MaybeThink`](#maybethink)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [base/Actor.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L94)

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

Defined in: [base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

###### Returns

`void`

###### Inherited from

[`Actor`](#actor).[`Remove`](#remove)

##### SetTick()

> **SetTick**(`i`): `void`

Defined in: [base/Actor.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L53)

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

Defined in: [base/Actor.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L52)

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

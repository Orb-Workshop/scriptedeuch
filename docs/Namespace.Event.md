# Event

Event Listener and Sender

## Classes

### Listener

Defined in: [src/event/Listener.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Listener.ts#L21)

Similar to Base.MessageTask, except it processes an event structure.

Notes:

- listeners used within actors or systems should call
  `Listener.Remove()` when they themselves are being removed.
  The best place to do this is within `Base.Actor.Dispose()` for actors,
  or for non-preserved entities within systems, within `Base.System.OnRoundEnd`.

#### Extends

- [`Actor`](Namespace.Base.md#abstract-actor)

#### Constructors

##### Constructor

> **new Listener**(`tag`): [`Listener`](#listener)

Defined in: [src/event/Listener.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Listener.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `any` |

###### Returns

[`Listener`](#listener)

###### Overrides

[`Actor`](Namespace.Base.md#abstract-actor).[`constructor`](Namespace.Base.md#constructor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [src/base/Actor.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L95)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](Namespace.Base.md#abstract-actor).[`Dispose`](Namespace.Base.md#dispose)

##### GetDelta()

> **GetDelta**(): `number`

Defined in: [src/base/Actor.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L60)

Delta Since last think time.

###### Returns

`number`

###### Inherited from

[`Actor`](Namespace.Base.md#abstract-actor).[`GetDelta`](Namespace.Base.md#getdelta)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [src/base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](Namespace.Base.md#abstract-actor).[`GetLifetime`](Namespace.Base.md#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [src/base/Actor.ts:70](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L70)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](Namespace.Base.md#abstract-actor).[`IsDirty`](Namespace.Base.md#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [src/base/Actor.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L62)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](Namespace.Base.md#abstract-actor).[`MakeDirty`](Namespace.Base.md#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [src/base/Actor.ts:73](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L73)

Performs `this.Think()` if it is past a certain interval

###### Returns

`void`

###### Inherited from

[`Actor`](Namespace.Base.md#abstract-actor).[`MaybeThink`](Namespace.Base.md#maybethink)

##### On()

> **On**(`event_name`, `event_callback`): [`Listener`](#listener)

Defined in: [src/event/Listener.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Listener.ts#L38)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `event_callback` | `Callback` |

###### Returns

[`Listener`](#listener)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [src/event/Listener.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Listener.ts#L30)

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

[`Actor`](Namespace.Base.md#abstract-actor).[`ReceiveMessage`](Namespace.Base.md#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [src/base/Actor.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L64)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](Namespace.Base.md#abstract-actor).[`Remove`](Namespace.Base.md#remove)

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

[`Actor`](Namespace.Base.md#abstract-actor).[`SetTick`](Namespace.Base.md#settick)

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

[`Actor`](Namespace.Base.md#abstract-actor).[`SetTickInterval`](Namespace.Base.md#settickinterval)

##### Think()

> **Think**(): `void`

Defined in: [src/base/Actor.ts:110](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L110)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Inherited from

[`Actor`](Namespace.Base.md#abstract-actor).[`Think`](Namespace.Base.md#think)

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

[`Actor`](Namespace.Base.md#abstract-actor).[`SendMessage`](Namespace.Base.md#sendmessage)

***

### Sender

Defined in: [src/event/Sender.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Sender.ts#L8)

#### Constructors

##### Constructor

> **new Sender**(`tag`): [`Sender`](#sender)

Defined in: [src/event/Sender.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Sender.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `any` |

###### Returns

[`Sender`](#sender)

#### Methods

##### Send()

> **Send**(`event_name`, `event_data`): `void`

Defined in: [src/event/Sender.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Sender.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `event_data` | `any` |

###### Returns

`void`

## Functions

### GetGlobalListener()

> **GetGlobalListener**(): [`Listener`](#listener)

Defined in: [src/event/Global.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Global.ts#L52)

Returns an `Event.Listener` using the global `Tag`.

#### Returns

[`Listener`](#listener)

***

### OnActivate()

> **OnActivate**(`callback`): [`Listener`](#listener)

Defined in: [src/event/Global.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Global.ts#L62)

Instance.OnActivate()

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `Callback` |

#### Returns

[`Listener`](#listener)

***

### OnPlayerJump()

> **OnPlayerJump**(`callback`): [`Listener`](#listener)

Defined in: [src/event/Global.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Global.ts#L77)

Instance.OnPlayerJump()

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `Callback` |

#### Returns

[`Listener`](#listener)

***

### OnRoundEnd()

> **OnRoundEnd**(`callback`): [`Listener`](#listener)

Defined in: [src/event/Global.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Global.ts#L72)

Instance.OnRoundEnd()

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `Callback` |

#### Returns

[`Listener`](#listener)

***

### OnRoundStart()

> **OnRoundStart**(`callback`): [`Listener`](#listener)

Defined in: [src/event/Global.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Global.ts#L67)

Instance.OnRoundStart()

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `Callback` |

#### Returns

[`Listener`](#listener)

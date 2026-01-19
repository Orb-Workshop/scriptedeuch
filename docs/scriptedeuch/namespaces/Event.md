[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Event

# Event

Event Listener and Sender

## Classes

### Listener

Defined in: [event/Listener.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Listener.ts#L12)

Similar to Base.MessageTask, except it processes an event structure.

#### Extends

- [`Actor`](Base/README.md#actor)

#### Constructors

##### Constructor

> **new Listener**(`tag`): [`Listener`](#listener)

Defined in: [event/Listener.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Listener.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `any` |

###### Returns

[`Listener`](#listener)

###### Overrides

[`Actor`](Base/README.md#actor).[`constructor`](Base/README.md#constructor)

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [base/Actor.ts:94](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L94)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Inherited from

[`Actor`](Base/README.md#actor).[`Dispose`](Base/README.md#dispose)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](Base/README.md#actor).[`GetLifetime`](Base/README.md#getlifetime)

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:69](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L69)

Determine if the Actor is marked for removal.

###### Returns

`boolean`

###### Inherited from

[`Actor`](Base/README.md#actor).[`IsDirty`](Base/README.md#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L61)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](Base/README.md#actor).[`MakeDirty`](Base/README.md#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L72)

Performs `this.Think()` if it past a certain interval

###### Returns

`void`

###### Inherited from

[`Actor`](Base/README.md#actor).[`MaybeThink`](Base/README.md#maybethink)

##### On()

> **On**(`event_name`, `event_callback`): [`Listener`](#listener)

Defined in: [event/Listener.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Listener.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `event_callback` | `Callback` |

###### Returns

[`Listener`](#listener)

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [event/Listener.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Listener.ts#L21)

Override Interface Method. React to messages sent by other actors in the actor pool.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `string` |
| `data` | `any` |

###### Returns

`void`

###### Overrides

[`Actor`](Base/README.md#actor).[`ReceiveMessage`](Base/README.md#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [base/Actor.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L63)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](Base/README.md#actor).[`Remove`](Base/README.md#remove)

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

[`Actor`](Base/README.md#actor).[`SetTick`](Base/README.md#settick)

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

[`Actor`](Base/README.md#actor).[`SetTickInterval`](Base/README.md#settickinterval)

##### Think()

> **Think**(): `void`

Defined in: [base/Actor.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L104)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Inherited from

[`Actor`](Base/README.md#actor).[`Think`](Base/README.md#think)

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

[`Actor`](Base/README.md#actor).[`SendMessage`](Base/README.md#sendmessage)

***

### Sender

Defined in: [event/Sender.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Sender.ts#L8)

#### Constructors

##### Constructor

> **new Sender**(`tag`): [`Sender`](#sender)

Defined in: [event/Sender.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Sender.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `any` |

###### Returns

[`Sender`](#sender)

#### Methods

##### Send()

> **Send**(`event_name`, `event_data`): `void`

Defined in: [event/Sender.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/event/Sender.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `event_data` | `any` |

###### Returns

`void`

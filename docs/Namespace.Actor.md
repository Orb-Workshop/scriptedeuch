# Actor

Spawnable Actors (Auto-Mounting) that extend `Base.Actor`

## Classes

### Explosion

Defined in: [src/actor/Explosion.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Explosion.ts#L17)

Allows you to perform an 'explosion effect' at the given
`position`, which damages players and applies a force. The damage can be attributed to a player.

#### Extends

- [`Actor`](Namespace.Base.md#abstract-actor)

#### Constructors

##### Constructor

> **new Explosion**(`__namedParameters`): [`Explosion`](#explosion)

Defined in: [src/actor/Explosion.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Explosion.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `damage?`: `number`; `damage_falloff?`: `number`; `debug?`: `boolean`; `force?`: `number`; `force_falloff?`: `number`; `position?`: [`Vector3`](Namespace.Math.md#vector3); `radius?`: `number`; \} |
| `__namedParameters.damage?` | `number` |
| `__namedParameters.damage_falloff?` | `number` |
| `__namedParameters.debug?` | `boolean` |
| `__namedParameters.force?` | `number` |
| `__namedParameters.force_falloff?` | `number` |
| `__namedParameters.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `__namedParameters.radius?` | `number` |

###### Returns

[`Explosion`](#explosion)

###### Overrides

[`Actor`](Namespace.Base.md#abstract-actor).[`constructor`](Namespace.Base.md#constructor)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="tag"></a> `Tag` | `static` | `string` | `"ExplosionTag"` | [src/actor/Explosion.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Explosion.ts#L18) |

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

##### Explode()

> **Explode**(`inflictor?`): `void` \| [`Explosion`](#explosion)

Defined in: [src/actor/Explosion.ts:119](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Explosion.ts#L119)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `inflictor` | `CSPlayerPawn` | `null` |

###### Returns

`void` \| [`Explosion`](#explosion)

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

##### GetAlivePlayers()

> `static` **GetAlivePlayers**(): `CSPlayerPawn`[]

Defined in: [src/actor/Explosion.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Explosion.ts#L56)

###### Returns

`CSPlayerPawn`[]

##### GetPlayers()

> `static` **GetPlayers**(): `CSPlayerPawn`[]

Defined in: [src/actor/Explosion.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Explosion.ts#L52)

###### Returns

`CSPlayerPawn`[]

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

### PlayerInvincibility

Defined in: [src/actor/PlayerInvincibility.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerInvincibility.ts#L17)

The `player_pawn` receives `duration` seconds of invincibility

#### Example

```typescript
new PlayerInvincibility(player_pawn, {duration: 5.0}); // 5 Seconds
```

#### Extends

- [`Actor`](Namespace.Base.md#abstract-actor)

#### Constructors

##### Constructor

> **new PlayerInvincibility**(`player_pawn`, `__namedParameters`): [`PlayerInvincibility`](#playerinvincibility)

Defined in: [src/actor/PlayerInvincibility.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerInvincibility.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |
| `__namedParameters` | \{ `duration?`: `number`; \} |
| `__namedParameters.duration?` | `number` |

###### Returns

[`PlayerInvincibility`](#playerinvincibility)

###### Overrides

[`Actor`](Namespace.Base.md#abstract-actor).[`constructor`](Namespace.Base.md#constructor)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="tag-1"></a> `Tag` | `static` | `string` | `"PlayerInvincibilityTag"` | [src/actor/PlayerInvincibility.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerInvincibility.ts#L18) |

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [src/actor/PlayerInvincibility.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerInvincibility.ts#L54)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Overrides

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

[`Actor`](Namespace.Base.md#abstract-actor).[`ReceiveMessage`](Namespace.Base.md#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [src/base/Actor.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L64)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Inherited from

[`Actor`](Namespace.Base.md#abstract-actor).[`Remove`](Namespace.Base.md#remove)

##### SendMessage()

> **SendMessage**(`event_name`, `event_data`): `void`

Defined in: [src/actor/PlayerInvincibility.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerInvincibility.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event_name` | `string` |
| `event_data` | `any` |

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

Defined in: [src/actor/PlayerInvincibility.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerInvincibility.ts#L47)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Overrides

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

### PlayerMount

Defined in: [src/actor/PlayerMount.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L16)

Actor Component to mount a player to a prop_dynamic, or similar moveable entity.

#### Extends

- [`Actor`](Namespace.Base.md#abstract-actor)

#### Constructors

##### Constructor

> **new PlayerMount**(`player_pawn`, `__namedParameters`): [`PlayerMount`](#playermount)

Defined in: [src/actor/PlayerMount.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player_pawn` | `any` |
| `__namedParameters` | \{ `mount_entity`: `any`; `mount_offset`: `any`; \} |
| `__namedParameters.mount_entity` | `any` |
| `__namedParameters.mount_offset` | `any` |

###### Returns

[`PlayerMount`](#playermount)

###### Overrides

[`Actor`](Namespace.Base.md#abstract-actor).[`constructor`](Namespace.Base.md#constructor)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="global_listener"></a> `global_listener` | `public` | [`Listener`](Namespace.Event.md#listener) | `undefined` | [src/actor/PlayerMount.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L22) |
| <a id="listener"></a> `listener` | `public` | [`Listener`](Namespace.Event.md#listener) | `undefined` | [src/actor/PlayerMount.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L21) |
| <a id="mount_entity"></a> `mount_entity` | `public` | `Entity` | `undefined` | [src/actor/PlayerMount.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L19) |
| <a id="mount_offset"></a> `mount_offset` | `public` | [`Vector3`](Namespace.Math.md#vector3) | `undefined` | [src/actor/PlayerMount.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L20) |
| <a id="player_pawn"></a> `player_pawn` | `public` | `CSPlayerPawn` | `undefined` | [src/actor/PlayerMount.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L18) |
| <a id="tag-2"></a> `Tag` | `static` | `string` | `"PlayerMountTag"` | [src/actor/PlayerMount.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L17) |

#### Methods

##### Dispose()

> **Dispose**(): `void`

Defined in: [src/actor/PlayerMount.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L76)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Overrides

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

##### InitEventListeners()

> **InitEventListeners**(): `void`

Defined in: [src/actor/PlayerMount.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L32)

###### Returns

`void`

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

Defined in: [src/actor/PlayerMount.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L81)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Overrides

[`Actor`](Namespace.Base.md#abstract-actor).[`Think`](Namespace.Base.md#think)

##### UnMountPlayer()

> **UnMountPlayer**(): `void`

Defined in: [src/actor/PlayerMount.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L62)

###### Returns

`void`

##### IsMounted()

> `static` **IsMounted**(`player`): `boolean`

Defined in: [src/actor/PlayerMount.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/PlayerMount.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | `CSPlayerPawn` |

###### Returns

`boolean`

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

### Projectile

Defined in: [src/actor/Projectile.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L49)

An Actor that controls the spawning and collision of a `prop_physics_multiplayer`.

#### Example

```ts
import { Base } from "scriptedeuch";
class GlockShot extends Base.System {
    constructor() {
        super();
    }

    override OnGunFire(event) {
        const weapon_base = event.weapon;
        const class_name = weapon_base?.GetClassName();
        if (class_name !== "weapon_glock") return;
        let projectile = Actor.Projectile.FromWeapon(weapon_base, {
            damage: 150,
            speed: 10_000,
            disable_gravity: true,
            collision_radius: 10.0,
            remove_on_collision: true,
        }).Fire();
    }
}
Base.Mount.Register("GlockShot", new GlockShot());
```

#### Extends

- [`Actor`](Namespace.Base.md#abstract-actor)

#### Constructors

##### Constructor

> **new Projectile**(`__namedParameters?`): [`Projectile`](#projectile)

Defined in: [src/actor/Projectile.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L103)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `collision_radius?`: `number`; `damage?`: `number`; `damage_type?`: `number`; `disable_gravity?`: `boolean`; `fizzle_delay?`: `number`; `ignore_players?`: `boolean`; `owner?`: `null`; `position?`: [`Vector3`](Namespace.Math.md#vector3); `remove_on_collision?`: `boolean`; `rotation?`: [`QAngle`](Namespace.Math.md#qangle); `template?`: `any`; `velocity?`: [`Vector3`](Namespace.Math.md#vector3); `weapon?`: `null`; \} |
| `__namedParameters.collision_radius?` | `number` |
| `__namedParameters.damage?` | `number` |
| `__namedParameters.damage_type?` | `number` |
| `__namedParameters.disable_gravity?` | `boolean` |
| `__namedParameters.fizzle_delay?` | `number` |
| `__namedParameters.ignore_players?` | `boolean` |
| `__namedParameters.owner?` | `null` |
| `__namedParameters.position?` | [`Vector3`](Namespace.Math.md#vector3) |
| `__namedParameters.remove_on_collision?` | `boolean` |
| `__namedParameters.rotation?` | [`QAngle`](Namespace.Math.md#qangle) |
| `__namedParameters.template?` | `any` |
| `__namedParameters.velocity?` | [`Vector3`](Namespace.Math.md#vector3) |
| `__namedParameters.weapon?` | `null` |

###### Returns

[`Projectile`](#projectile)

###### Overrides

[`Actor`](Namespace.Base.md#abstract-actor).[`constructor`](Namespace.Base.md#constructor)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="collision_radius"></a> `collision_radius` | `public` | `number` | `undefined` | [src/actor/Projectile.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L60) |
| <a id="damage"></a> `damage` | `public` | `number` | `undefined` | [src/actor/Projectile.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L64) |
| <a id="damage_type"></a> `damage_type` | `public` | `number` | `undefined` | [src/actor/Projectile.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L65) |
| <a id="disable_gravity"></a> `disable_gravity` | `public` | `boolean` | `undefined` | [src/actor/Projectile.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L68) |
| <a id="entity"></a> `entity` | `public` | `Entity` | `undefined` | [src/actor/Projectile.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L58) |
| <a id="entity_children"></a> `entity_children` | `public` | `Entity`[] | `undefined` | [src/actor/Projectile.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L59) |
| <a id="fizzle_delay"></a> `fizzle_delay` | `public` | `number` | `undefined` | [src/actor/Projectile.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L63) |
| <a id="ignore_players"></a> `ignore_players` | `public` | `boolean` | `undefined` | [src/actor/Projectile.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L66) |
| <a id="initial_position"></a> `initial_position` | `public` | [`Vector3`](Namespace.Math.md#vector3) | `undefined` | [src/actor/Projectile.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L53) |
| <a id="initial_rotation"></a> `initial_rotation` | `public` | [`QAngle`](Namespace.Math.md#qangle) | `undefined` | [src/actor/Projectile.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L55) |
| <a id="initial_velocity"></a> `initial_velocity` | `public` | [`Vector3`](Namespace.Math.md#vector3) | `undefined` | [src/actor/Projectile.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L56) |
| <a id="last_position"></a> `last_position` | `public` | [`Vector3`](Namespace.Math.md#vector3) | `undefined` | [src/actor/Projectile.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L54) |
| <a id="name"></a> `name` | `public` | `string` | `undefined` | [src/actor/Projectile.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L50) |
| <a id="owner"></a> `owner` | `public` | `CSPlayerPawn` | `undefined` | [src/actor/Projectile.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L62) |
| <a id="remove_on_collision"></a> `remove_on_collision` | `public` | `boolean` | `undefined` | [src/actor/Projectile.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L67) |
| <a id="state"></a> `state` | `public` | `ProjectileState` | `ProjectileState.IDLE` | [src/actor/Projectile.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L51) |
| <a id="template"></a> `template` | `public` | `PointTemplate` | `undefined` | [src/actor/Projectile.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L57) |
| <a id="weapon"></a> `weapon` | `public` | `CSWeaponBase` | `undefined` | [src/actor/Projectile.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L61) |

#### Methods

##### CheckCollision()

> **CheckCollision**(): `void`

Defined in: [src/actor/Projectile.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L176)

Check the collision per tick.

###### Returns

`void`

##### Dispose()

> **Dispose**(): `void`

Defined in: [src/actor/Projectile.ts:232](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L232)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Overrides

[`Actor`](Namespace.Base.md#abstract-actor).[`Dispose`](Namespace.Base.md#dispose)

##### Fire()

> **Fire**(): [`Projectile`](#projectile)

Defined in: [src/actor/Projectile.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L143)

Fire the Projectile, changing it to the 'fired' state.

###### Returns

[`Projectile`](#projectile)

itself.

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

##### HandleCollision()

> **HandleCollision**(`trace`): `void`

Defined in: [src/actor/Projectile.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L195)

Handles the collision itself, where `trace` is the collision.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `trace` | `TraceResult` |

###### Returns

`void`

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

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [src/actor/Projectile.ts:227](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L227)

Override Interface Method. React to messages sent by other
actors in the actor pool.

Note: `Event.Listener` and `Event.Sender` with tags are
preferred over this method.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `any` |
| `data` | `any` |

###### Returns

`void`

###### Overrides

[`Actor`](Namespace.Base.md#abstract-actor).[`ReceiveMessage`](Namespace.Base.md#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [src/actor/Projectile.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L210)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Overrides

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

Defined in: [src/actor/Projectile.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L216)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Overrides

[`Actor`](Namespace.Base.md#abstract-actor).[`Think`](Namespace.Base.md#think)

##### FromWeapon()

> `static` **FromWeapon**(`weapon_base`, `__namedParameters`): [`Projectile`](#projectile)

Defined in: [src/actor/Projectile.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L77)

Create an instance of Projectile based on a firing `weapon_base` entity in-game.

Note:

- This is useful for connecting to `Base.System.OnGunFire({ weapon })`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon_base` | `CSWeaponBase` |
| `__namedParameters` | \{ `forward_distance?`: `number`; `offset?`: [`Vector3`](Namespace.Math.md#vector3); `speed?`: `number`; `template?`: `any`; \} |
| `__namedParameters.forward_distance?` | `number` |
| `__namedParameters.offset?` | [`Vector3`](Namespace.Math.md#vector3) |
| `__namedParameters.speed?` | `number` |
| `__namedParameters.template?` | `any` |

###### Returns

[`Projectile`](#projectile)

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

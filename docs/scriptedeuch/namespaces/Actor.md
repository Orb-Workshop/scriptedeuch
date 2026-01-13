[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Actor

# Actor

Spawnable Actors (Auto-Mounting) that extend `Base.Actor`

## Classes

### Projectile

Defined in: [actor/Projectile.ts:49](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L49)

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

- [`Actor`](Base/README.md#actor)

#### Constructors

##### Constructor

> **new Projectile**(`__namedParameters`): [`Projectile`](#projectile)

Defined in: [actor/Projectile.ts:103](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L103)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `collision_radius?`: `number`; `damage?`: `number`; `damage_type?`: `number`; `disable_gravity?`: `boolean`; `fizzle_delay?`: `number`; `ignore_players?`: `boolean`; `owner?`: `null`; `position?`: [`Vector3`](Math.md#vector3); `remove_on_collision?`: `boolean`; `rotation?`: [`QAngle`](Math.md#qangle); `template?`: `any`; `velocity?`: [`Vector3`](Math.md#vector3); `weapon?`: `null`; \} |
| `__namedParameters.collision_radius?` | `number` |
| `__namedParameters.damage?` | `number` |
| `__namedParameters.damage_type?` | `number` |
| `__namedParameters.disable_gravity?` | `boolean` |
| `__namedParameters.fizzle_delay?` | `number` |
| `__namedParameters.ignore_players?` | `boolean` |
| `__namedParameters.owner?` | `null` |
| `__namedParameters.position?` | [`Vector3`](Math.md#vector3) |
| `__namedParameters.remove_on_collision?` | `boolean` |
| `__namedParameters.rotation?` | [`QAngle`](Math.md#qangle) |
| `__namedParameters.template?` | `any` |
| `__namedParameters.velocity?` | [`Vector3`](Math.md#vector3) |
| `__namedParameters.weapon?` | `null` |

###### Returns

[`Projectile`](#projectile)

###### Overrides

[`Actor`](Base/README.md#actor).[`constructor`](Base/README.md#constructor)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="collision_radius"></a> `collision_radius` | `public` | `number` | `undefined` | [actor/Projectile.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L60) |
| <a id="damage"></a> `damage` | `public` | `number` | `undefined` | [actor/Projectile.ts:64](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L64) |
| <a id="damage_type"></a> `damage_type` | `public` | `number` | `undefined` | [actor/Projectile.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L65) |
| <a id="disable_gravity"></a> `disable_gravity` | `public` | `boolean` | `undefined` | [actor/Projectile.ts:68](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L68) |
| <a id="entity"></a> `entity` | `public` | `Entity` | `undefined` | [actor/Projectile.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L58) |
| <a id="entity_children"></a> `entity_children` | `public` | `Entity`[] | `undefined` | [actor/Projectile.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L59) |
| <a id="fizzle_delay"></a> `fizzle_delay` | `public` | `number` | `undefined` | [actor/Projectile.ts:63](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L63) |
| <a id="ignore_players"></a> `ignore_players` | `public` | `boolean` | `undefined` | [actor/Projectile.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L66) |
| <a id="initial_position"></a> `initial_position` | `public` | [`Vector3`](Math.md#vector3) | `undefined` | [actor/Projectile.ts:53](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L53) |
| <a id="initial_rotation"></a> `initial_rotation` | `public` | [`QAngle`](Math.md#qangle) | `undefined` | [actor/Projectile.ts:55](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L55) |
| <a id="initial_velocity"></a> `initial_velocity` | `public` | [`Vector3`](Math.md#vector3) | `undefined` | [actor/Projectile.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L56) |
| <a id="last_position"></a> `last_position` | `public` | [`Vector3`](Math.md#vector3) | `undefined` | [actor/Projectile.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L54) |
| <a id="name"></a> `name` | `public` | `string` | `undefined` | [actor/Projectile.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L50) |
| <a id="owner"></a> `owner` | `public` | `CSPlayerPawn` | `undefined` | [actor/Projectile.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L62) |
| <a id="remove_on_collision"></a> `remove_on_collision` | `public` | `boolean` | `undefined` | [actor/Projectile.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L67) |
| <a id="state"></a> `state` | `public` | `ProjectileState` | `ProjectileState.IDLE` | [actor/Projectile.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L51) |
| <a id="template"></a> `template` | `public` | `PointTemplate` | `undefined` | [actor/Projectile.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L57) |
| <a id="weapon"></a> `weapon` | `public` | `CSWeaponBase` | `undefined` | [actor/Projectile.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L61) |

#### Methods

##### CheckCollision()

> **CheckCollision**(): `void`

Defined in: [actor/Projectile.ts:176](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L176)

Check the collision per tick.

###### Returns

`void`

##### Dispose()

> **Dispose**(): `void`

Defined in: [actor/Projectile.ts:232](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L232)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Overrides

[`Actor`](Base/README.md#actor).[`Dispose`](Base/README.md#dispose)

##### Fire()

> **Fire**(): [`Projectile`](#projectile)

Defined in: [actor/Projectile.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L143)

Fire the Projectile, changing it to the 'fired' state.

###### Returns

[`Projectile`](#projectile)

itself.

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L58)

How long the actor has been alive in seconds.

###### Returns

`number`

###### Inherited from

[`Actor`](Base/README.md#actor).[`GetLifetime`](Base/README.md#getlifetime)

##### HandleCollision()

> **HandleCollision**(`trace`): `void`

Defined in: [actor/Projectile.ts:195](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L195)

Handles the collision itself, where `trace` is the collision.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `trace` | `TraceResult` |

###### Returns

`void`

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

##### ReceiveMessage()

> **ReceiveMessage**(`tag`, `data`): `void`

Defined in: [actor/Projectile.ts:227](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L227)

Override Interface Method. React to messages sent by other actors in the actor pool.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tag` | `any` |
| `data` | `any` |

###### Returns

`void`

###### Overrides

[`Actor`](Base/README.md#actor).[`ReceiveMessage`](Base/README.md#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [actor/Projectile.ts:210](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L210)

Same as `this.MakeDirty()`.

###### Returns

`void`

###### Overrides

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

Defined in: [actor/Projectile.ts:216](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L216)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Overrides

[`Actor`](Base/README.md#actor).[`Think`](Base/README.md#think)

##### FromWeapon()

> `static` **FromWeapon**(`weapon_base`, `__namedParameters`): [`Projectile`](#projectile)

Defined in: [actor/Projectile.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L77)

Create an instance of Projectile based on a firing `weapon_base` entity in-game.

Note:

- This is useful for connecting to `Base.System.OnGunFire({ weapon })`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon_base` | `CSWeaponBase` |
| `__namedParameters` | \{ `forward_distance?`: `number`; `offset?`: [`Vector3`](Math.md#vector3); `speed?`: `number`; `template?`: `any`; \} |
| `__namedParameters.forward_distance?` | `number` |
| `__namedParameters.offset?` | [`Vector3`](Math.md#vector3) |
| `__namedParameters.speed?` | `number` |
| `__namedParameters.template?` | `any` |

###### Returns

[`Projectile`](#projectile)

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

[**scriptedeuch**](../../README.md)

***

[scriptedeuch](../../README.md) / Actor

# Actor

Spawnable Actors (Auto-Mounting)

## Classes

### Projectile

Defined in: [actor/Projectile.ts:24](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L24)

#### Extends

- [`Actor`](Base/README.md#actor)

#### Constructors

##### Constructor

> **new Projectile**(`__namedParameters`): [`Projectile`](#projectile)

Defined in: [actor/Projectile.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L71)

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
| <a id="collision_radius"></a> `collision_radius` | `public` | `number` | `undefined` | [actor/Projectile.ts:35](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L35) |
| <a id="damage"></a> `damage` | `public` | `number` | `undefined` | [actor/Projectile.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L39) |
| <a id="damage_type"></a> `damage_type` | `public` | `number` | `undefined` | [actor/Projectile.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L40) |
| <a id="disable_gravity"></a> `disable_gravity` | `public` | `boolean` | `undefined` | [actor/Projectile.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L43) |
| <a id="entity"></a> `entity` | `public` | `Entity` | `undefined` | [actor/Projectile.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L33) |
| <a id="entity_children"></a> `entity_children` | `public` | `Entity`[] | `undefined` | [actor/Projectile.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L34) |
| <a id="fizzle_delay"></a> `fizzle_delay` | `public` | `number` | `undefined` | [actor/Projectile.ts:38](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L38) |
| <a id="ignore_players"></a> `ignore_players` | `public` | `boolean` | `undefined` | [actor/Projectile.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L41) |
| <a id="initial_position"></a> `initial_position` | `public` | [`Vector3`](Math.md#vector3) | `undefined` | [actor/Projectile.ts:28](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L28) |
| <a id="initial_rotation"></a> `initial_rotation` | `public` | [`QAngle`](Math.md#qangle) | `undefined` | [actor/Projectile.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L30) |
| <a id="initial_velocity"></a> `initial_velocity` | `public` | [`Vector3`](Math.md#vector3) | `undefined` | [actor/Projectile.ts:31](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L31) |
| <a id="last_position"></a> `last_position` | `public` | [`Vector3`](Math.md#vector3) | `undefined` | [actor/Projectile.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L29) |
| <a id="name"></a> `name` | `public` | `string` | `undefined` | [actor/Projectile.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L25) |
| <a id="owner"></a> `owner` | `public` | `CSPlayerPawn` | `undefined` | [actor/Projectile.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L37) |
| <a id="remove_on_collision"></a> `remove_on_collision` | `public` | `boolean` | `undefined` | [actor/Projectile.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L42) |
| <a id="state"></a> `state` | `public` | `ProjectileState` | `ProjectileState.IDLE` | [actor/Projectile.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L26) |
| <a id="template"></a> `template` | `public` | `PointTemplate` | `undefined` | [actor/Projectile.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L32) |
| <a id="weapon"></a> `weapon` | `public` | `CSWeaponBase` | `undefined` | [actor/Projectile.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L36) |

#### Methods

##### CheckCollision()

> **CheckCollision**(): `void`

Defined in: [actor/Projectile.ts:136](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L136)

###### Returns

`void`

##### Dispose()

> **Dispose**(): `void`

Defined in: [actor/Projectile.ts:191](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L191)

Override Interface Method. Called after an actor has been made dirty,
and has been removed from the actor pool

###### Returns

`void`

###### Overrides

[`Actor`](Base/README.md#actor).[`Dispose`](Base/README.md#dispose)

##### Fire()

> **Fire**(): [`Projectile`](#projectile)

Defined in: [actor/Projectile.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L104)

###### Returns

[`Projectile`](#projectile)

##### GetLifetime()

> **GetLifetime**(): `number`

Defined in: [base/Actor.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L54)

###### Returns

`number`

###### Inherited from

[`Actor`](Base/README.md#actor).[`GetLifetime`](Base/README.md#getlifetime)

##### HandleCollision()

> **HandleCollision**(`trace`): `void`

Defined in: [actor/Projectile.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L154)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `trace` | `any` |

###### Returns

`void`

##### IsDirty()

> **IsDirty**(): `boolean`

Defined in: [base/Actor.ts:65](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L65)

###### Returns

`boolean`

###### Inherited from

[`Actor`](Base/README.md#actor).[`IsDirty`](Base/README.md#isdirty)

##### MakeDirty()

> **MakeDirty**(): `void`

Defined in: [base/Actor.ts:59](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L59)

Mark the Actor for removal from the actor pool.

###### Returns

`void`

###### Inherited from

[`Actor`](Base/README.md#actor).[`MakeDirty`](Base/README.md#makedirty)

##### MaybeThink()

> **MaybeThink**(): `void`

Defined in: [base/Actor.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Actor.ts#L67)

###### Returns

`void`

###### Inherited from

[`Actor`](Base/README.md#actor).[`MaybeThink`](Base/README.md#maybethink)

##### ReceiveMessage()

> **ReceiveMessage**(`name`, `data`): `void`

Defined in: [actor/Projectile.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L186)

Override Interface Method. React to messages sent by other actors in the actor pool.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `any` |
| `data` | `any` |

###### Returns

`void`

###### Overrides

[`Actor`](Base/README.md#actor).[`ReceiveMessage`](Base/README.md#receivemessage)

##### Remove()

> **Remove**(): `void`

Defined in: [actor/Projectile.ts:169](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L169)

###### Returns

`void`

###### Overrides

[`Actor`](Base/README.md#actor).[`Remove`](Base/README.md#remove)

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

[`Actor`](Base/README.md#actor).[`SetTick`](Base/README.md#settick)

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

[`Actor`](Base/README.md#actor).[`SetTickInterval`](Base/README.md#settickinterval)

##### Think()

> **Think**(): `void`

Defined in: [actor/Projectile.ts:175](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L175)

Override Method. Is called at the `think_interval`.

###### Returns

`void`

###### Overrides

[`Actor`](Base/README.md#actor).[`Think`](Base/README.md#think)

##### FromWeapon()

> `static` **FromWeapon**(`weapon_base`, `__namedParameters`): [`Projectile`](#projectile)

Defined in: [actor/Projectile.ts:45](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/actor/Projectile.ts#L45)

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

[`Actor`](Base/README.md#actor).[`SendMessage`](Base/README.md#sendmessage)

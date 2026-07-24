# Grid

Grid Library

## Classes

### Grid3D

Defined in: [src/grid/Grid3D.ts:36](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L36)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `number` |

#### Implements

- `unknown`

#### Constructors

##### Constructor

> **new Grid3D**\<`T`\>(`obj?`): [`Grid3D`](#grid3d)\<`T`\>

Defined in: [src/grid/Grid3D.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | \{ \} |

###### Returns

[`Grid3D`](#grid3d)\<`T`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="depth"></a> `depth` | `number` | [src/grid/Grid3D.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L41) |
| <a id="height"></a> `height` | `number` | [src/grid/Grid3D.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L40) |
| <a id="width"></a> `width` | `number` | [src/grid/Grid3D.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L39) |

#### Methods

##### clone()

> **clone**(): [`Grid3D`](#grid3d)\<`T`\>

Defined in: [src/grid/Grid3D.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L57)

###### Returns

[`Grid3D`](#grid3d)\<`T`\>

##### forEachIndex()

> **forEachIndex**(`f`): `void`

Defined in: [src/grid/Grid3D.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | (`i`, `j`, `k`) => `void` |

###### Returns

`void`

##### getAt()

> **getAt**(`i`, `j`, `k?`): `T`

Defined in: [src/grid/Grid3D.ts:90](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L90)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `i` | `number` | `undefined` |
| `j` | `number` | `undefined` |
| `k` | `number` | `0` |

###### Returns

`T`

##### getAtIndex()

> **getAtIndex**(`idx`): `T`

Defined in: [src/grid/Grid3D.ts:100](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L100)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T`

##### hasAt()

> **hasAt**(`i`, `j`, `k`): `bool`

Defined in: [src/grid/Grid3D.ts:108](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L108)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |
| `j` | `number` |
| `k` | `number` |

###### Returns

`bool`

##### index()

> **index**(`x`, `y`, `z?`): `number`

Defined in: [src/grid/Grid3D.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L75)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `0` |

###### Returns

`number`

##### lens()

> **lens**(`x`, `y`, `z?`): [`GridLens`](#gridlens)\<`T`\>

Defined in: [src/grid/Grid3D.ts:206](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L206)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `0` |

###### Returns

[`GridLens`](#gridlens)\<`T`\>

##### locateElement()

> **locateElement**(`x`, `y`, `z?`): `T`

Defined in: [src/grid/Grid3D.ts:129](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L129)

Will return an element of the Grid approximately within bounds
of the provided `x`, `y`, and/or `z`.

Note:

- Sanitizes the input for out-of-bounds number values to the
  closest coordinates.

- Errors for non-number values

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `0` |

###### Returns

`T`

##### setAt()

> **setAt**(`i`, `j`, `k`, `value`): `void`

Defined in: [src/grid/Grid3D.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |
| `j` | `number` |
| `k` | `number` |
| `value` | `T` |

###### Returns

`void`

##### size()

> **size**(): `number`

Defined in: [src/grid/Grid3D.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L71)

###### Returns

`number`

##### subGrid()

> **subGrid**(`opts`): [`SubGrid`](#subgrid-1)\<`T`\>

Defined in: [src/grid/Grid3D.ts:163](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L163)

Returns a 'SubGrid' of the current Grid3D. Representing a
fraction of the original Grid3D.

Notes:

- Can be used with PathFinding and Procgen as a traditional
Grid3D.

- SubGrids can also be converted into a BBox3, to check
  intersections, between grids.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

[`SubGrid`](#subgrid-1)\<`T`\>

##### toBBox3()

> **toBBox3**(): [`BBox3`](Namespace.Math.md#bbox3)

Defined in: [src/grid/Grid3D.ts:198](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L198)

###### Returns

[`BBox3`](Namespace.Math.md#bbox3)

***

### GridError

Defined in: [src/grid/GridError.ts:5](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridError.ts#L5)

Errors for the Grid.

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new GridError**(`message`): [`GridError`](#griderror)

Defined in: [src/grid/GridError.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridError.ts#L6)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

[`GridError`](#griderror)

###### Overrides

`Error.constructor`

#### Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="cause"></a> `cause?` | `public` | `unknown` | The cause of the error. | `Error.cause` | node\_modules/typescript/lib/lib.es2022.error.d.ts:26 |
| <a id="message"></a> `message` | `public` | `string` | - | `Error.message` | node\_modules/typescript/lib/lib.es5.d.ts:1077 |
| <a id="name"></a> `name` | `public` | `string` | - | `Error.name` | node\_modules/typescript/lib/lib.es5.d.ts:1076 |
| <a id="stack"></a> `stack?` | `public` | `string` | - | `Error.stack` | node\_modules/typescript/lib/lib.es5.d.ts:1078 |
| <a id="stacktracelimit"></a> `stackTraceLimit` | `static` | `number` | The `Error.stackTraceLimit` property specifies the number of stack frames collected by a stack trace (whether generated by `new Error().stack` or `Error.captureStackTrace(obj)`). The default value is `10` but may be set to any valid JavaScript number. Changes will affect any stack trace captured _after_ the value has been changed. If set to a non-number value, or set to a negative number, stack traces will not capture any frames. | `Error.stackTraceLimit` | node\_modules/@types/node/globals.d.ts:68 |

#### Methods

##### captureStackTrace()

###### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:52

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

###### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/bun-types/globals.d.ts:1042

Create .stack property on a target object

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

###### Returns

`void`

###### Inherited from

`Error.captureStackTrace`

##### isError()

###### Call Signature

> `static` **isError**(`error`): `error is Error`

Defined in: node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

###### Returns

`error is Error`

###### Inherited from

`Error.isError`

###### Call Signature

> `static` **isError**(`value`): `value is Error`

Defined in: node\_modules/bun-types/globals.d.ts:1037

Check if a value is an instance of Error

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |

###### Returns

`value is Error`

True if the value is an instance of Error, false otherwise

###### Inherited from

`Error.isError`

##### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

Defined in: node\_modules/@types/node/globals.d.ts:56

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`Error.prepareStackTrace`

***

### GridLens

Defined in: [src/grid/GridLens.ts:6](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L6)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Constructors

##### Constructor

> **new GridLens**\<`T`\>(`parent`, `x`, `y`, `z`): [`GridLens`](#gridlens)\<`T`\>

Defined in: [src/grid/GridLens.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent` | `any` |
| `x` | `any` |
| `y` | `any` |
| `z` | `any` |

###### Returns

[`GridLens`](#gridlens)\<`T`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="parent"></a> `parent` | `GridType` | [src/grid/GridLens.ts:7](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L7) |
| <a id="x"></a> `x` | `number` | [src/grid/GridLens.ts:9](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L9) |
| <a id="y"></a> `y` | `number` | [src/grid/GridLens.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L10) |
| <a id="z"></a> `z` | `number` | [src/grid/GridLens.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L11) |

#### Methods

##### bottom()

> **bottom**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L46)

###### Returns

`T` \| `null`

##### clone()

> **clone**(): [`GridLens`](#gridlens)\<`T`\>

Defined in: [src/grid/GridLens.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L21)

###### Returns

[`GridLens`](#gridlens)\<`T`\>

##### down()

> **down**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:61](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L61)

###### Returns

`T` \| `null`

##### get()

> **get**(): `T`

Defined in: [src/grid/GridLens.ts:25](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L25)

###### Returns

`T`

##### isEqual()

> **isEqual**(`o`): `bool`

Defined in: [src/grid/GridLens.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | [`GridLens`](#gridlens)\<`T`\> |

###### Returns

`bool`

##### left()

> **left**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L66)

###### Returns

`T` \| `null`

##### right()

> **right**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L56)

###### Returns

`T` \| `null`

##### set()

> **set**(`v`): `void`

Defined in: [src/grid/GridLens.ts:29](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `T` |

###### Returns

`void`

##### top()

> **top**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L41)

###### Returns

`T` \| `null`

##### up()

> **up**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:51](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L51)

###### Returns

`T` \| `null`

***

### PathFinding

Defined in: [src/grid/PathFinding.ts:7](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/PathFinding.ts#L7)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Constructors

##### Constructor

> **new PathFinding**\<`T`\>(`base_grid`): [`PathFinding`](#pathfinding)\<`T`\>

Defined in: [src/grid/PathFinding.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/PathFinding.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `base_grid` | `any` |

###### Returns

[`PathFinding`](#pathfinding)\<`T`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="base_grid"></a> `base_grid` | `GridType` | [src/grid/PathFinding.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/PathFinding.ts#L8) |

#### Methods

##### getShortestPaths()

> **getShortestPaths**(`opts`): [`Grid3D`](#grid3d)\<`PathElement`\>

Defined in: [src/grid/PathFinding.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/PathFinding.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

[`Grid3D`](#grid3d)\<`PathElement`\>

***

### SubGrid

Defined in: [src/grid/SubGrid.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L11)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `number` |

#### Implements

- `unknown`

#### Constructors

##### Constructor

> **new SubGrid**\<`T`\>(`obj?`): [`SubGrid`](#subgrid-1)\<`T`\>

Defined in: [src/grid/SubGrid.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | \{ \} |

###### Returns

[`SubGrid`](#subgrid-1)\<`T`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="depth-1"></a> `depth` | `number` | [src/grid/SubGrid.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L20) |
| <a id="height-1"></a> `height` | `number` | [src/grid/SubGrid.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L19) |
| <a id="parent-1"></a> `parent` | [`Grid3D`](#grid3d) | [src/grid/SubGrid.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L12) |
| <a id="width-1"></a> `width` | `number` | [src/grid/SubGrid.ts:18](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L18) |
| <a id="x-1"></a> `x` | `number` | [src/grid/SubGrid.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L14) |
| <a id="y-1"></a> `y` | `number` | [src/grid/SubGrid.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L15) |
| <a id="z-1"></a> `z` | `number` | [src/grid/SubGrid.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L16) |

#### Methods

##### forEachGlobalIndex()

> **forEachGlobalIndex**(`f`): `void`

Defined in: [src/grid/SubGrid.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | `any` |

###### Returns

`void`

##### forEachIndex()

> **forEachIndex**(`f`): `void`

Defined in: [src/grid/SubGrid.ts:75](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | `any` |

###### Returns

`void`

##### getAt()

> **getAt**(`i`, `j`, `k?`): `T`

Defined in: [src/grid/SubGrid.ts:32](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L32)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `i` | `number` | `undefined` |
| `j` | `number` | `undefined` |
| `k` | `number` | `0` |

###### Returns

`T`

##### getAtIndex()

> **getAtIndex**(`idx`): `T`

Defined in: [src/grid/SubGrid.ts:39](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T`

##### hasAt()

> **hasAt**(`i`, `j`, `k`): `bool`

Defined in: [src/grid/SubGrid.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `any` |
| `j` | `any` |
| `k` | `any` |

###### Returns

`bool`

##### index()

> **index**(`i`, `j`, `k`): `number`

Defined in: [src/grid/SubGrid.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `any` |
| `j` | `any` |
| `k` | `any` |

###### Returns

`number`

##### lens()

> **lens**(`x`, `y`, `z?`): [`GridLens`](#gridlens)\<`T`\>

Defined in: [src/grid/SubGrid.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L121)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `0` |

###### Returns

[`GridLens`](#gridlens)\<`T`\>

##### locateElement()

> **locateElement**(`i`, `j`, `k`): `T`

Defined in: [src/grid/SubGrid.ts:56](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `any` |
| `j` | `any` |
| `k` | `any` |

###### Returns

`T`

##### setAt()

> **setAt**(`i`, `j`, `k`, `value`): `void`

Defined in: [src/grid/SubGrid.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L43)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `any` |
| `j` | `any` |
| `k` | `any` |
| `value` | `any` |

###### Returns

`void`

##### size()

> **size**(): `number`

Defined in: [src/grid/SubGrid.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L62)

###### Returns

`number`

##### subGrid()

> **subGrid**(`opts`): [`SubGrid`](#subgrid-1)\<`T`\>

Defined in: [src/grid/SubGrid.ts:85](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

[`SubGrid`](#subgrid-1)\<`T`\>

##### toBBox3()

> **toBBox3**(): [`BBox3`](Namespace.Math.md#bbox3)

Defined in: [src/grid/SubGrid.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L113)

###### Returns

[`BBox3`](Namespace.Math.md#bbox3)

## Functions

### Display2D()

> **Display2D**(`g`, `z?`): `void`

Defined in: [src/grid/utils.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/utils.ts#L8)

Displays given Z-depth of a 3D Grid as a slice. Default z=0.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `g` | `Grid3D` | `undefined` |
| `z` | `number` | `0` |

#### Returns

`void`

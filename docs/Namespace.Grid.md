# Grid

Grid Library

## Classes

### Grid3D

Defined in: [src/grid/Grid3D.ts:37](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L37)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `number` |

#### Implements

- `unknown`

#### Constructors

##### Constructor

> **new Grid3D**\<`T`\>(`obj?`): [`Grid3D`](#grid3d)\<`T`\>

Defined in: [src/grid/Grid3D.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | \{ \} |

###### Returns

[`Grid3D`](#grid3d)\<`T`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="depth"></a> `depth` | `number` | [src/grid/Grid3D.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L42) |
| <a id="height"></a> `height` | `number` | [src/grid/Grid3D.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L41) |
| <a id="width"></a> `width` | `number` | [src/grid/Grid3D.ts:40](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L40) |

#### Methods

##### clone()

> **clone**(): [`Grid3D`](#grid3d)\<`T`\>

Defined in: [src/grid/Grid3D.ts:58](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L58)

###### Returns

[`Grid3D`](#grid3d)\<`T`\>

##### forEachGlobalIndex()

> **forEachGlobalIndex**(`f`): `void`

Defined in: [src/grid/Grid3D.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L91)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | (`i`, `j`, `k`) => `void` |

###### Returns

`void`

##### forEachIndex()

> **forEachIndex**(`f`): `void`

Defined in: [src/grid/Grid3D.ts:81](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L81)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | (`i`, `j`, `k`) => `void` |

###### Returns

`void`

##### getAt()

> **getAt**(`i`, `j`, `k?`): `T`

Defined in: [src/grid/Grid3D.ts:95](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L95)

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

Defined in: [src/grid/Grid3D.ts:105](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L105)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T`

##### hasAt()

> **hasAt**(`i`, `j`, `k`): `bool`

Defined in: [src/grid/Grid3D.ts:113](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L113)

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

Defined in: [src/grid/Grid3D.ts:76](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L76)

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

Defined in: [src/grid/Grid3D.ts:211](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L211)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `0` |

###### Returns

[`GridLens`](#gridlens)\<`T`\>

##### lensFromIndex()

> **lensFromIndex**(`idx`): [`GridLens`](#gridlens)\<`T`\>

Defined in: [src/grid/Grid3D.ts:227](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L227)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

[`GridLens`](#gridlens)\<`T`\>

##### locateElement()

> **locateElement**(`x`, `y`, `z?`): `T`

Defined in: [src/grid/Grid3D.ts:134](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L134)

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

Defined in: [src/grid/Grid3D.ts:109](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L109)

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

Defined in: [src/grid/Grid3D.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L72)

###### Returns

`number`

##### subGrid()

> **subGrid**(`opts`): [`SubGrid`](#subgrid-1)\<`T`\>

Defined in: [src/grid/Grid3D.ts:168](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L168)

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

##### subView()

> **subView**(): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/Grid3D.ts:244](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L244)

###### Returns

[`SubView`](#subview-2)\<`T`\>

##### toBBox3()

> **toBBox3**(): [`BBox3`](Namespace.Math.md#bbox3)

Defined in: [src/grid/Grid3D.ts:203](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/Grid3D.ts#L203)

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

Defined in: [src/grid/GridLens.ts:7](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L7)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Constructors

##### Constructor

> **new GridLens**\<`T`\>(`parent`, `x`, `y`, `z`): [`GridLens`](#gridlens)\<`T`\>

Defined in: [src/grid/GridLens.ts:14](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L14)

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
| <a id="parent"></a> `parent` | `GridType` | [src/grid/GridLens.ts:8](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L8) |
| <a id="x"></a> `x` | `number` | [src/grid/GridLens.ts:10](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L10) |
| <a id="y"></a> `y` | `number` | [src/grid/GridLens.ts:11](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L11) |
| <a id="z"></a> `z` | `number` | [src/grid/GridLens.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L12) |

#### Methods

##### bottom()

> **bottom**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:47](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L47)

###### Returns

`T` \| `null`

##### clone()

> **clone**(): [`GridLens`](#gridlens)\<`T`\>

Defined in: [src/grid/GridLens.ts:22](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L22)

###### Returns

[`GridLens`](#gridlens)\<`T`\>

##### down()

> **down**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L62)

###### Returns

`T` \| `null`

##### get()

> **get**(): `T`

Defined in: [src/grid/GridLens.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L26)

###### Returns

`T`

##### isEqual()

> **isEqual**(`o`): `bool`

Defined in: [src/grid/GridLens.ts:34](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | [`GridLens`](#gridlens)\<`T`\> |

###### Returns

`bool`

##### left()

> **left**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:67](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L67)

###### Returns

`T` \| `null`

##### right()

> **right**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:57](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L57)

###### Returns

`T` \| `null`

##### set()

> **set**(`v`): `void`

Defined in: [src/grid/GridLens.ts:30](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `T` |

###### Returns

`void`

##### top()

> **top**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L42)

###### Returns

`T` \| `null`

##### up()

> **up**(): `T` \| `null`

Defined in: [src/grid/GridLens.ts:52](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L52)

###### Returns

`T` \| `null`

##### withOwner()

> **withOwner**(`g`): [`GridLens`](#gridlens)\<`T`\>

Defined in: [src/grid/GridLens.ts:72](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/GridLens.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `g` | `GridType` |

###### Returns

[`GridLens`](#gridlens)\<`T`\>

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

Defined in: [src/grid/SubGrid.ts:12](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L12)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `number` |

#### Implements

- `unknown`

#### Constructors

##### Constructor

> **new SubGrid**\<`T`\>(`obj?`): [`SubGrid`](#subgrid-1)\<`T`\>

Defined in: [src/grid/SubGrid.ts:23](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | \{ \} |

###### Returns

[`SubGrid`](#subgrid-1)\<`T`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="depth-1"></a> `depth` | `number` | [src/grid/SubGrid.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L21) |
| <a id="height-1"></a> `height` | `number` | [src/grid/SubGrid.ts:20](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L20) |
| <a id="parent-1"></a> `parent` | [`Grid3D`](#grid3d) | [src/grid/SubGrid.ts:13](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L13) |
| <a id="width-1"></a> `width` | `number` | [src/grid/SubGrid.ts:19](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L19) |
| <a id="x-1"></a> `x` | `number` | [src/grid/SubGrid.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L15) |
| <a id="y-1"></a> `y` | `number` | [src/grid/SubGrid.ts:16](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L16) |
| <a id="z-1"></a> `z` | `number` | [src/grid/SubGrid.ts:17](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L17) |

#### Methods

##### forEachGlobalIndex()

> **forEachGlobalIndex**(`f`): `void`

Defined in: [src/grid/SubGrid.ts:91](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L91)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | `any` |

###### Returns

`void`

##### forEachIndex()

> **forEachIndex**(`f`): `void`

Defined in: [src/grid/SubGrid.ts:80](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L80)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | `any` |

###### Returns

`void`

##### getAt()

> **getAt**(`i`, `j`, `k?`): `T`

Defined in: [src/grid/SubGrid.ts:33](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L33)

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

Defined in: [src/grid/SubGrid.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L71)

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

Defined in: [src/grid/SubGrid.ts:143](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L143)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `0` |

###### Returns

[`GridLens`](#gridlens)\<`T`\>

##### lensFromIndex()

> **lensFromIndex**(`idx`): [`GridLens`](#gridlens)\<`T`\>

Defined in: [src/grid/SubGrid.ts:159](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L159)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

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

##### setOwner()

> **setOwner**(`owner`): [`SubGrid`](#subgrid-1)\<`T`\>

Defined in: [src/grid/SubGrid.ts:128](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L128)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | `GridType`\<`T`\> |

###### Returns

[`SubGrid`](#subgrid-1)\<`T`\>

##### size()

> **size**(): `number`

Defined in: [src/grid/SubGrid.ts:62](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L62)

###### Returns

`number`

##### subGrid()

> **subGrid**(`opts`): [`SubGrid`](#subgrid-1)\<`T`\>

Defined in: [src/grid/SubGrid.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L97)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `any` |

###### Returns

[`SubGrid`](#subgrid-1)\<`T`\>

##### subView()

> **subView**(): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubGrid.ts:181](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L181)

###### Returns

[`SubView`](#subview-2)\<`T`\>

##### toBBox3()

> **toBBox3**(): [`BBox3`](Namespace.Math.md#bbox3)

Defined in: [src/grid/SubGrid.ts:118](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L118)

###### Returns

[`BBox3`](Namespace.Math.md#bbox3)

##### toPopulatedSubView()

> **toPopulatedSubView**(): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubGrid.ts:189](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubGrid.ts#L189)

###### Returns

[`SubView`](#subview-2)\<`T`\>

***

### SubView

Defined in: [src/grid/SubView.ts:42](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L42)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Constructors

##### Constructor

> **new SubView**\<`T`\>(`grid`): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubView.ts:46](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `grid` | [`Grid3D`](#grid3d)\<`T`\> |

###### Returns

[`SubView`](#subview-2)\<`T`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="element_set"></a> `element_set` | `Set`\<`number`\> | [src/grid/SubView.ts:44](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L44) |
| <a id="grid"></a> `grid` | [`Grid3D`](#grid3d)\<`T`\> | [src/grid/SubView.ts:43](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L43) |

#### Methods

##### add()

> **add**(`idx`): `void`

Defined in: [src/grid/SubView.ts:50](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L50)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`void`

##### centerPoint()

> **centerPoint**(): [`Point3`](Namespace.Math.md#point3)

Defined in: [src/grid/SubView.ts:164](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L164)

Represents the center point of the subview indexes. It is based
on the mean average of each coordinate axis.

###### Returns

[`Point3`](Namespace.Math.md#point3)

##### chunks()

> **chunks**(`opts?`): [`SubGrid`](#subgrid-1)\<`number`\>[]

Defined in: [src/grid/SubView.ts:269](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L269)

Will return an array of SubGrids that fit within the SubView of elements.

Defining the width, height or depth determines the constraints
for how wide, long and tall the SubGrids can be. Unconstrained
dimensions will attempt to fit the biggest possible SubGrids to
populate the SubView.

Notes:

- For example, `sv.chunks({ width: 1 })` would return strips of
  SubGrids that have a width of 1, and varying unconstrained
  maxima heights and maxima depths. It will attempt to create
  the fewest number of subgrids to fill the subview within the
  given constraints.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | \{ `depth?`: `number`; `height?`: `number`; `width?`: `number`; \} |
| `opts.depth?` | `number` |
| `opts.height?` | `number` |
| `opts.width?` | `number` |

###### Returns

[`SubGrid`](#subgrid-1)\<`number`\>[]

##### clone()

> **clone**(): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubView.ts:77](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L77)

###### Returns

[`SubView`](#subview-2)\<`T`\>

##### delete()

> **delete**(`gl`): `void`

Defined in: [src/grid/SubView.ts:60](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `gl` | [`GridLens`](#gridlens)\<`T`\> |

###### Returns

`void`

##### difference()

> **difference**(`inn`): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubView.ts:133](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L133)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `inn` | [`SubView`](#subview-2)\<`T`\> |

###### Returns

[`SubView`](#subview-2)\<`T`\>

##### forEachElement()

> **forEachElement**(`f`): `void`

Defined in: [src/grid/SubView.ts:97](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L97)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | (`e`) => `void` |

###### Returns

`void`

##### get()

> **get**(`x`, `y`, `z?`): [`GridLens`](#gridlens)\<`T`\> \| `null`

Defined in: [src/grid/SubView.ts:71](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L71)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `0` |

###### Returns

[`GridLens`](#gridlens)\<`T`\> \| `null`

##### has()

> **has**(`x`, `y`, `z?`): `bool`

Defined in: [src/grid/SubView.ts:66](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L66)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `0` |

###### Returns

`bool`

##### insertGrid()

> **insertGrid**(`g`): `void`

Defined in: [src/grid/SubView.ts:83](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `g` | [`SubGrid`](#subgrid-1)\<`T`\> |

###### Returns

`void`

##### intersection()

> **intersection**(`inn`): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubView.ts:127](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L127)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `inn` | [`SubView`](#subview-2)\<`T`\> |

###### Returns

[`SubView`](#subview-2)\<`T`\>

##### isDisjointFrom()

> **isDisjointFrom**(`inn`): `bool`

Defined in: [src/grid/SubView.ts:139](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L139)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `inn` | [`SubView`](#subview-2)\<`T`\> |

###### Returns

`bool`

##### isSubsetOf()

> **isSubsetOf**(`inn`): `bool`

Defined in: [src/grid/SubView.ts:144](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L144)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `inn` | [`SubView`](#subview-2)\<`T`\> |

###### Returns

`bool`

##### isSupersetOf()

> **isSupersetOf**(`inn`): `bool`

Defined in: [src/grid/SubView.ts:149](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L149)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `inn` | [`SubView`](#subview-2)\<`T`\> |

###### Returns

`bool`

##### removeGrid()

> **removeGrid**(`g`): `void`

Defined in: [src/grid/SubView.ts:90](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L90)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `g` | [`SubGrid`](#subgrid-1)\<`T`\> |

###### Returns

`void`

##### set()

> **set**(`gl`): `void`

Defined in: [src/grid/SubView.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L54)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `gl` | [`GridLens`](#gridlens)\<`T`\> |

###### Returns

`void`

##### symmetricDifference()

> **symmetricDifference**(`inn`): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubView.ts:154](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L154)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `inn` | [`SubView`](#subview-2)\<`T`\> |

###### Returns

[`SubView`](#subview-2)\<`T`\>

##### toBBox3()

> **toBBox3**(): [`BBox3`](Namespace.Math.md#bbox3)

Defined in: [src/grid/SubView.ts:186](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L186)

###### Returns

[`BBox3`](Namespace.Math.md#bbox3)

##### translate()

> **translate**(`x`, `y`, `z?`): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubView.ts:112](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L112)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `0` |

###### Returns

[`SubView`](#subview-2)\<`T`\>

##### union()

> **union**(`inn`): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubView.ts:121](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L121)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `inn` | [`SubView`](#subview-2)\<`T`\> |

###### Returns

[`SubView`](#subview-2)\<`T`\>

##### withOwner()

> **withOwner**(`g`): [`SubView`](#subview-2)\<`T`\>

Defined in: [src/grid/SubView.ts:104](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/grid/SubView.ts#L104)

Returns the GridView with the given GridType as it's parent.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `g` | `GridType`\<`T`\> |

###### Returns

[`SubView`](#subview-2)\<`T`\>

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

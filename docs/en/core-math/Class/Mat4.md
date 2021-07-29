
## Class: Mat4


`extend:`
[ValueType](docs/en/core-value-types/Class/ValueType.md)












**`en`** Mathematical 4x4 matrix.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  IDENTITY](#IDENTITY)
- [ m00](#m00)
- [ m01](#m01)
- [ m02](#m02)
- [ m03](#m03)
- [ m04](#m04)
- [ m05](#m05)
- [ m06](#m06)
- [ m07](#m07)
- [ m08](#m08)
- [ m09](#m09)
- [ m10](#m10)
- [ m11](#m11)
- [ m12](#m12)
- [ m13](#m13)
- [ m14](#m14)
- [ m15](#m15)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  transpose](#transpose)
- [ **`static`**  translate](#translate)
- [ **`static`**  transform](#transform)
- [ **`static`**  toRTS](#toRTS)
- [ **`static`**  toArray](#toArray)
- [ **`static`**  subtract](#subtract)
- [ **`static`**  strictEquals](#strictEquals)
- [ **`static`**  set](#set)
- [ **`static`**  scale](#scale)
- [ **`static`**  rotateZ](#rotateZ)
- [ **`static`**  rotateY](#rotateY)
- [ **`static`**  rotateX](#rotateX)
- [ **`static`**  rotate](#rotate)
- [ **`static`**  perspective](#perspective)
- [ **`static`**  ortho](#ortho)
- [ **`static`**  multiplyScalarAndAdd](#multiplyScalarAndAdd)
- [ **`static`**  multiplyScalar](#multiplyScalar)
- [ **`static`**  multiply](#multiply)
- [ **`static`**  lookAt](#lookAt)
- [ **`static`**  invert](#invert)
- [ **`static`**  inverseTranspose](#inverseTranspose)
- [ **`static`**  identity](#identity)
- [ **`static`**  getTranslation](#getTranslation)
- [ **`static`**  getScaling](#getScaling)
- [ **`static`**  getRotation](#getRotation)
- [ **`static`**  frustum](#frustum)
- [ **`static`**  fromZRotation](#fromZRotation)
- [ **`static`**  fromYRotation](#fromYRotation)
- [ **`static`**  fromXRotation](#fromXRotation)
- [ **`static`**  fromTranslation](#fromTranslation)
- [ **`static`**  fromScaling](#fromScaling)
- [ **`static`**  fromRotation](#fromRotation)
- [ **`static`**  fromRTSOrigin](#fromRTSOrigin)
- [ **`static`**  fromRTS](#fromRTS)
- [ **`static`**  fromRT](#fromRT)
- [ **`static`**  fromQuat](#fromQuat)
- [ **`static`**  fromArray](#fromArray)
- [ **`static`**  equals](#equals)
- [ **`static`**  determinant](#determinant)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ **`static`**  add](#add)
- [ add](#add)
- [ clone](#clone)
- [ determinant](#determinant)
- [ equals](#equals)
- [ fromQuat](#fromQuat)
- [ fromRTS](#fromRTS)
- [ getRotation](#getRotation)
- [ getScale](#getScale)
- [ getTranslation](#getTranslation)
- [ identity](#identity)
- [ invert](#invert)
- [ multiply](#multiply)
- [ multiplyScalar](#multiplyScalar)
- [ rotate](#rotate)
- [ scale](#scale)
- [ set](#set)
- [ strictEquals](#strictEquals)
- [ subtract](#subtract)
- [ toString](#toString)
- [ translate](#translate)
- [ transpose](#transpose)
- [ zero](#zero)
</div>

## Properties


### IDENTITY
<div style="margin-left: 10px;">




• `static` **IDENTITY**:
  = `Object.freeze(new Mat4())`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:53](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L53)&nbsp;


___


### m00
<div style="margin-left: 10px;">




**`en`** Value at column 0 row 0 of the matrix.




•  **m00**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1413)&nbsp;


___


### m01
<div style="margin-left: 10px;">




**`en`** Value at column 0 row 1 of the matrix.




•  **m01**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1419)&nbsp;


___


### m02
<div style="margin-left: 10px;">




**`en`** Value at column 0 row 2 of the matrix.




•  **m02**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1425](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1425)&nbsp;


___


### m03
<div style="margin-left: 10px;">




**`en`** Value at column 0 row 3 of the matrix.




•  **m03**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1431](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1431)&nbsp;


___


### m04
<div style="margin-left: 10px;">




**`en`** Value at column 1 row 0 of the matrix.




•  **m04**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1437](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1437)&nbsp;


___


### m05
<div style="margin-left: 10px;">




**`en`** Value at column 1 row 1 of the matrix.




•  **m05**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1443)&nbsp;


___


### m06
<div style="margin-left: 10px;">




**`en`** Value at column 1 row 2 of the matrix.




•  **m06**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1449](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1449)&nbsp;


___


### m07
<div style="margin-left: 10px;">




**`en`** Value at column 1 row 3 of the matrix.




•  **m07**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1455)&nbsp;


___


### m08
<div style="margin-left: 10px;">




**`en`** Value at column 2 row 0 of the matrix.




•  **m08**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1461](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1461)&nbsp;


___


### m09
<div style="margin-left: 10px;">




**`en`** Value at column 2 row 1 of the matrix.




•  **m09**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1467](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1467)&nbsp;


___


### m10
<div style="margin-left: 10px;">




**`en`** Value at column 2 row 2 of the matrix.




•  **m10**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1473)&nbsp;


___


### m11
<div style="margin-left: 10px;">




**`en`** Value at column 2 row 3 of the matrix.




•  **m11**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1479](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1479)&nbsp;


___


### m12
<div style="margin-left: 10px;">




**`en`** Value at column 3 row 0 of the matrix.




•  **m12**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1485)&nbsp;


___


### m13
<div style="margin-left: 10px;">




**`en`** Value at column 3 row 1 of the matrix.




•  **m13**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1491)&nbsp;


___


### m14
<div style="margin-left: 10px;">




**`en`** Value at column 3 row 2 of the matrix.




•  **m14**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1497](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1497)&nbsp;


___


### m15
<div style="margin-left: 10px;">




**`en`** Value at column 3 row 3 of the matrix.




•  **m15**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1503](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1503)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Mat4**(`other: Mat4`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `other` | `Mat4` |





• **new Mat4**(`m00: undefined | number, m01: undefined | number, m02: undefined | number, m03: undefined | number, m04: undefined | number, m05: undefined | number, m06: undefined | number, m07: undefined | number, m08: undefined | number, m09: undefined | number, m10: undefined | number, m11: undefined | number, m12: undefined | number, m13: undefined | number, m14: undefined | number, m15: undefined | number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `m00` | `` |





| Name | Type |
| :------ | :------ |
| `m01` | `` |





| Name | Type |
| :------ | :------ |
| `m02` | `` |





| Name | Type |
| :------ | :------ |
| `m03` | `` |





| Name | Type |
| :------ | :------ |
| `m04` | `` |





| Name | Type |
| :------ | :------ |
| `m05` | `` |





| Name | Type |
| :------ | :------ |
| `m06` | `` |





| Name | Type |
| :------ | :------ |
| `m07` | `` |





| Name | Type |
| :------ | :------ |
| `m08` | `` |





| Name | Type |
| :------ | :------ |
| `m09` | `` |





| Name | Type |
| :------ | :------ |
| `m10` | `` |





| Name | Type |
| :------ | :------ |
| `m11` | `` |





| Name | Type |
| :------ | :------ |
| `m12` | `` |





| Name | Type |
| :------ | :------ |
| `m13` | `` |





| Name | Type |
| :------ | :------ |
| `m14` | `` |





| Name | Type |
| :------ | :------ |
| `m15` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1503](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1503)&nbsp;   [cocos/core/math/mat4.ts:1505](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1505)&nbsp;   [cocos/core/math/mat4.ts:1511](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1511)&nbsp;


---

<!---->
## Methods

### transpose
<div style="margin-left: 10px;">

▸ `static`  **transpose**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Transposes a matrix and save the results to out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L138)&nbsp;
___
### translate
<div style="margin-left: 10px;">

▸ `static`  **translate**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`




**`en`** Transform a matrix with the given translation vector and save results to the out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `VecLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L327)&nbsp;
___
### transform
<div style="margin-left: 10px;">

▸ `static`  **transform**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`




**`en`** Transform a matrix with the given vector and save results to the out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `VecLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L298)&nbsp;
___
### toRTS
<div style="margin-left: 10px;">

▸ `static`  **toRTS**<`void`\>(`m: Out, q: Quat, v: VecLike, s: VecLike`) : `void`




**`en`** Extracts the scale, rotation and translation from the matrix, assuming it's composed in order of scale, rotation, translation




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `Quat` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `VecLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `s` | `VecLike` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:837](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L837)&nbsp;
___
### toArray
<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, m: IMat4Like, ofs: number`) : `Out`




**`en`** Transform a matrix object to a flat array




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `IMat4Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ofs` | `number` | Array Start Offset  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1230)&nbsp;
___
### subtract
<div style="margin-left: 10px;">

▸ `static`  **subtract**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Subtracts matrix b from matrix a and save the results to out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1303)&nbsp;
___
### strictEquals
<div style="margin-left: 10px;">

▸ `static`  **strictEquals**<`boolean`\>(`a: Out, b: Out`) : `boolean`




**`en`** Returns whether the specified matrices are equal.




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1375](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1375)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number`) : `Out`




**`en`** Sets a matrix with the given values and save the results to out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m00` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m01` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m02` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m03` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m10` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m11` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m12` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m13` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m20` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m21` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m22` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m23` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m30` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m31` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m32` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m33` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L96)&nbsp;
___
### scale
<div style="margin-left: 10px;">

▸ `static`  **scale**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`




**`en`** Multiply a matrix with a scale matrix given by a scale vector and save the results into the out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `VecLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:349](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L349)&nbsp;
___
### rotateZ
<div style="margin-left: 10px;">

▸ `static`  **rotateZ**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`




**`en`** Transform a matrix with a given angle around Z axis and save the results to the out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | Angle of rotation (in radians)  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:515](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L515)&nbsp;
___
### rotateY
<div style="margin-left: 10px;">

▸ `static`  **rotateY**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`




**`en`** Transform a matrix with a given angle around Y axis and save the results to the out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | Angle of rotation (in radians)  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:474](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L474)&nbsp;
___
### rotateX
<div style="margin-left: 10px;">

▸ `static`  **rotateX**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`




**`en`** Transform a matrix with a given angle around X axis and save the results to the out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | Angle of rotation (in radians)  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:433](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L433)&nbsp;
___
### rotate
<div style="margin-left: 10px;">

▸ `static`  **rotate**(`out: Out, a: Out, rad: number, axis: VecLike`)




**`en`** Rotates the transform by the given angle and save the results into the out matrix




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | Angle of rotation (in radians)  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `axis` | `VecLike` | axis of rotation  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:376](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L376)&nbsp;
___
### perspective
<div style="margin-left: 10px;">

▸ `static`  **perspective**<`Out`\>(`out: Out, fov: number, aspect: number, near: number, far: number, isFOVY: boolean, minClipZ: number, projectionSignY: number, orientation: number`) : `Out`




**`en`** Calculates perspective projection matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `fov` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `aspect` | `number` | Aspect ratio  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `near` | `number` | Near depth clipping plane value.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `far` | `number` | Far depth clipping plane value.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `isFOVY` | `boolean` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `minClipZ` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `projectionSignY` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `orientation` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1036](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1036)&nbsp;
___
### ortho
<div style="margin-left: 10px;">

▸ `static`  **ortho**<`Out`\>(`out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number, minClipZ: number, projectionSignY: number, orientation: number`) : `Out`




**`en`** Calculates orthogonal projection matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `left` | `number` | Left-side x-coordinate.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `right` | `number` | Right-side x-coordinate.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bottom` | `number` | Bottom y-coordinate.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `top` | `number` | Top y-coordinate.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `near` | `number` | Near depth clipping plane value.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `far` | `number` | Far depth clipping plane value.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `minClipZ` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `projectionSignY` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `orientation` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1076](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1076)&nbsp;
___
### multiplyScalarAndAdd
<div style="margin-left: 10px;">

▸ `static`  **multiplyScalarAndAdd**<`Out`\>(`out: Out, a: Out, b: Out, scale: number`) : `Out`




**`en`** Adds two matrices after multiplying each element of the second operand by a scalar number. And save the results to out matrix.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1351)&nbsp;
___
### multiplyScalar
<div style="margin-left: 10px;">

▸ `static`  **multiplyScalar**<`Out`\>(`out: Out, a: Out, b: number`) : `Out`




**`en`** Multiply each element of a matrix by a scalar number and save the results to out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1327)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸ `static`  **multiply**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Multiply two matrices and save the results to out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:261](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L261)&nbsp;
___
### lookAt
<div style="margin-left: 10px;">

▸ `static`  **lookAt**<`Out`\>(`out: Out, eye: VecLike, center: VecLike, up: VecLike`) : `Out`




**`en`** 
Calculates the matrix with the view point information, given by eye position, target center and the up vector.
Note that center to eye vector can't be zero or parallel to the up vector




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `eye` | `VecLike` | The source point.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `center` | `VecLike` | The target point.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `up` | `VecLike` | The vector describing the up direction.  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1119)&nbsp;
___
### invert
<div style="margin-left: 10px;">

▸ `static`  **invert**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Inverts a matrix. When matrix is not invertible the matrix will be set to zeros.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L179)&nbsp;
___
### inverseTranspose
<div style="margin-left: 10px;">

▸ `static`  **inverseTranspose**(`out: Out, a: Out`)




**`en`** Calculates the inverse transpose of a matrix and save the results to out matrix




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1175)&nbsp;
___
### identity
<div style="margin-left: 10px;">

▸ `static`  **identity**<`Out`\>(`out: Out`) : `Out`




**`en`** return an identity matrix.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L114)&nbsp;
___
### getTranslation
<div style="margin-left: 10px;">

▸ `static`  **getTranslation**<`VecLike`\>(`out: VecLike, mat: Out`) : `VecLike`




**`en`** Extracts the translation from the matrix, assuming it's composed in order of scale, rotation, translation




<!---->
<!--    #### Returns `VecLike` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `VecLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Out` | - |



##### Returns `VecLike`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:766](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L766)&nbsp;
___
### getScaling
<div style="margin-left: 10px;">

▸ `static`  **getScaling**<`VecLike`\>(`out: VecLike, mat: Out`) : `VecLike`




**`en`** Extracts the scale vector from the matrix, assuming it's composed in order of scale, rotation, translation




<!---->
<!--    #### Returns `VecLike` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `VecLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Out` | - |



##### Returns `VecLike`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:778](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L778)&nbsp;
___
### getRotation
<div style="margin-left: 10px;">

▸ `static`  **getRotation**<`Quat`\>(`out: Quat, mat: Out`) : `Quat`




**`en`** Extracts the rotation from the matrix, assuming it's composed in order of scale, rotation, translation




<!---->
<!--    #### Returns `Quat` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Quat` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Out` | - |



##### Returns `Quat`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:800](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L800)&nbsp;
___
### frustum
<div style="margin-left: 10px;">

▸ `static`  **frustum**<`Out`\>(`out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number`) : `Out`




**`en`** Calculates the matrix representing the given frustum




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `left` | `number` | The X coordinate of the left side of the near projection plane in view space.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `right` | `number` | The X coordinate of the right side of the near projection plane in view space.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bottom` | `number` | The Y coordinate of the bottom side of the near projection plane in view space.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `top` | `number` | The Y coordinate of the top side of the near projection plane in view space.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `near` | `number` | Z distance to the near plane from the origin in view space.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `far` | `number` | Z distance to the far plane from the origin in view space.  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1004](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1004)&nbsp;
___
### fromZRotation
<div style="margin-left: 10px;">

▸ `static`  **fromZRotation**<`Out`\>(`out: Out, rad: number`) : `Out`




**`en`** Calculates the matrix representing a rotation around the Z axis




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:699](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L699)&nbsp;
___
### fromYRotation
<div style="margin-left: 10px;">

▸ `static`  **fromYRotation**<`Out`\>(`out: Out, rad: number`) : `Out`




**`en`** Calculates the matrix representing a rotation around the Y axis




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:672](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L672)&nbsp;
___
### fromXRotation
<div style="margin-left: 10px;">

▸ `static`  **fromXRotation**<`Out`\>(`out: Out, rad: number`) : `Out`




**`en`** Calculates the matrix representing a rotation around the X axis




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:645](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L645)&nbsp;
___
### fromTranslation
<div style="margin-left: 10px;">

▸ `static`  **fromTranslation**<`Out`\>(`out: Out, v: VecLike`) : `Out`




**`en`** Sets the out matrix with a translation vector




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `VecLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:556](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L556)&nbsp;
___
### fromScaling
<div style="margin-left: 10px;">

▸ `static`  **fromScaling**<`Out`\>(`out: Out, v: VecLike`) : `Out`




**`en`** Sets the out matrix with a scale vector




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `VecLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:580](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L580)&nbsp;
___
### fromRotation
<div style="margin-left: 10px;">

▸ `static`  **fromRotation**(`out: Out, rad: number, axis: VecLike`)




**`en`** Sets the out matrix with rotation angle




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `axis` | `VecLike` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L604)&nbsp;
___
### fromRTSOrigin
<div style="margin-left: 10px;">

▸ `static`  **fromRTSOrigin**<`Out`\>(`out: Out, q: Quat, v: VecLike, s: VecLike, o: VecLike`) : `Out`




**`en`** Compose a matrix from scale, rotation and translation, applied in order, from a given origin




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `Quat` | Rotation quaternion  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `VecLike` | Translation vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `s` | `VecLike` | Scaling vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `o` | `VecLike` | transformation Center  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:907](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L907)&nbsp;
___
### fromRTS
<div style="margin-left: 10px;">

▸ `static`  **fromRTS**<`Out`\>(`out: Out, q: Quat, v: VecLike, s: VecLike`) : `Out`




**`en`** Compose a matrix from scale, rotation and translation, applied in order.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `Quat` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `VecLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `s` | `VecLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:860](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L860)&nbsp;
___
### fromRT
<div style="margin-left: 10px;">

▸ `static`  **fromRT**<`Out`\>(`out: Out, q: Quat, v: VecLike`) : `Out`




**`en`** Calculates the transform representing the combination of a rotation and a translation




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `Quat` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `VecLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:726](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L726)&nbsp;
___
### fromQuat
<div style="margin-left: 10px;">

▸ `static`  **fromQuat**<`Out`\>(`out: Out, q: Quat`) : `Out`




**`en`** Sets the out matrix with the given quaternion




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `Quat` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:955](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L955)&nbsp;
___
### fromArray
<div style="margin-left: 10px;">

▸ `static`  **fromArray**<`Out`\>(`out: Out, arr: IWritableArrayLike, ofs: number`) : `Out`




**`en`** Generates or sets a matrix with a flat array




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arr` | `IWritableArrayLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ofs` | `number` | Array Start Offset  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1255)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸ `static`  **equals**<`boolean`\>(`a: Out, b: Out, epsilon: number`) : `boolean`




**`en`** Returns whether the specified matrices are approximately equal.




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `epsilon` | `number` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1386](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1386)&nbsp;
___
### determinant
<div style="margin-left: 10px;">

▸ `static`  **determinant**<`number`\>(`a: Out`) : `number`




**`en`** Calculates the determinant of a matrix




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L234)&nbsp;
___
### copy
<div style="margin-left: 10px;">

▸ `static`  **copy**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Copy a matrix into the out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L72)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Mat4`\>(`a: Out`) : `Mat4`




**`en`** Clone a matrix and save the results to out matrix




<!---->
<!--    #### Returns `Mat4` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |



##### Returns `Mat4`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:59](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L59)&nbsp;
___
### add
<div style="margin-left: 10px;">

▸ `static`  **add**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Adds two matrices and save the results to out matrix




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1279)&nbsp;
___
### add
<div style="margin-left: 10px;">

▸   **add**<`this`\>(`mat: Mat4`) : `this`




**`en`** Adds the current matrix and another matrix to the current matrix.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat4` | the second operand  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1794](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1794)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸   **clone**<`Mat4`\> : `Mat4`




**`en`** Clone a new matrix from the current matrix.




<!---->
<!--    #### Returns `Mat4` -->
<!---->


##### Returns `Mat4`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1537](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1537)&nbsp;
___
### determinant
<div style="margin-left: 10px;">

▸   **determinant**<`number`\> : `number`




**`en`** Calculates the determinant of the current matrix.




<!---->
<!--    #### Returns `number` 当前矩阵的行列式。
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1766](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1766)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Mat4, epsilon: number`) : `boolean`




**`en`** Returns whether the specified matrices are approximately equal.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x27; when the elements of both matrices are equal; otherwise returns &#x60;false&#x27;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat4` | Comparative matrix  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1590](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1590)&nbsp;
___
### fromQuat
<div style="margin-left: 10px;">

▸   **fromQuat**<`this`\>(`q: Quat`) : `this`




**`en`** Resets the current matrix from the given quaternion.




<!---->
<!--    #### Returns `this` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `Quat` | Rotation quaternion  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:2114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L2114)&nbsp;
___
### fromRTS
<div style="margin-left: 10px;">

▸   **fromRTS**<`this`\>(`q: Quat, v: Vec3, s: Vec3`) : `this`




**`en`** Resets the matrix values by the given rotation quaternion, translation vector and scale vector




<!---->
<!--    #### Returns `this` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `Quat` | Rotation quaternion  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `Vec3` | Translation vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `s` | `Vec3` | Scaling vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:2069](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L2069)&nbsp;
___
### getRotation
<div style="margin-left: 10px;">

▸   **getRotation**<`Quat`\>(`out: Quat`) : `Quat`




**`en`** Returns the rotation factor component of a transformation matrix




<!---->
<!--    #### Returns `Quat` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Quat` | Vector to receive rotation component  |



##### Returns `Quat`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:2028](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L2028)&nbsp;
___
### getScale
<div style="margin-left: 10px;">

▸   **getScale**<`Vec3`\>(`out: Vec3`) : `Vec3`




**`en`** Returns the scale factor component of a transformation matrix




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | Vector to receive scale component  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:2005](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L2005)&nbsp;
___
### getTranslation
<div style="margin-left: 10px;">

▸   **getTranslation**<`Vec3`\>(`out: Vec3`) : `Vec3`




**`en`** Returns the translation vector component of a transformation matrix.




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | Vector to receive translation component.  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1992](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1992)&nbsp;
___
### identity
<div style="margin-left: 10px;">

▸   **identity**<`this`\> : `this`




**`en`** set the current matrix to an identity matrix.




<!---->
<!--    #### Returns `this` &#x60;this&#x60;
-->
<!---->


##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1643](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1643)&nbsp;
___
### invert
<div style="margin-left: 10px;">

▸   **invert**<`this`\> : `this`




**`en`** Inverts the current matrix. When matrix is not invertible the matrix will be set to zeros.




<!---->
<!--    #### Returns `this` -->
<!---->


##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1713](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1713)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`mat: Mat4`) : `this`




**`en`** Multiply the current matrix with another matrix.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat4` | the second operand  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1844](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1844)&nbsp;
___
### multiplyScalar
<div style="margin-left: 10px;">

▸   **multiplyScalar**<`this`\>(`scalar: number`) : `this`




**`en`** Multiply each element of the current matrix by a scalar number.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scalar` | `number` | amount to scale the matrix's elements by  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1882](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1882)&nbsp;
___
### rotate
<div style="margin-left: 10px;">

▸   **rotate**(`rad: number, axis: Vec3`)




**`en`** Rotates the current matrix by the given angle around the given axis




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | Angle of rotation (in radians)  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `axis` | `Vec3` | Axis of rotation  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1943](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1943)&nbsp;
___
### scale
<div style="margin-left: 10px;">

▸   **scale**<`this`\>(`vec: Vec3`) : `this`




**`en`** Multiply the current matrix with a scale vector.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `vec` | `Vec3` | vector to scale by  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1920](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1920)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸   **set**<`any`\>(`other: Mat4`) : `any`




**`en`** Sets the matrix with another one's value.




<!---->
<!--    #### Returns `any` this
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat4` | Specified matrix.  |



##### Returns `any`


▸   **set**<`any`\>(`m00: undefined | number, m01: undefined | number, m02: undefined | number, m03: undefined | number, m04: undefined | number, m05: undefined | number, m06: undefined | number, m07: undefined | number, m08: undefined | number, m09: undefined | number, m10: undefined | number, m11: undefined | number, m12: undefined | number, m13: undefined | number, m14: undefined | number, m15: undefined | number`) : `any`




**`en`** Set the matrix with values of all elements




<!---->
<!--    #### Returns `any` this
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m00` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m01` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m02` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m03` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m04` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m05` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m06` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m07` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m08` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m09` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m10` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m11` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m12` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m13` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m14` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m15` | `undefined \| number` | - |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1552](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1552)&nbsp;   [cocos/core/math/mat4.ts:1559](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1559)&nbsp;   [cocos/core/math/mat4.ts:1565](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1565)&nbsp;
___
### strictEquals
<div style="margin-left: 10px;">

▸   **strictEquals**<`boolean`\>(`other: Mat4`) : `boolean`




**`en`** Returns whether the specified matrices are equal.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x27; when the elements of both matrices are equal; otherwise returns &#x60;false&#x27;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat4` | Comparative matrix  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1617](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1617)&nbsp;
___
### subtract
<div style="margin-left: 10px;">

▸   **subtract**<`this`\>(`mat: Mat4`) : `this`




**`en`** Subtracts another matrix from the current matrix.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat4` | the second operand  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1819](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1819)&nbsp;
___
### toString
<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`




**`en`** Returns a string representation of a matrix.




<!---->
<!--    #### Returns `string` 当前矩阵的字符串表示。
-->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1629](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1629)&nbsp;
___
### translate
<div style="margin-left: 10px;">

▸   **translate**<`this`\>(`vec: Vec3`) : `this`




**`en`** Translate the current matrix by the given vector




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `vec` | `Vec3` | vector to translate by  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1907](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1907)&nbsp;
___
### transpose
<div style="margin-left: 10px;">

▸   **transpose**<`this`\> : `this`




**`en`** Transposes the current matrix.




<!---->
<!--    #### Returns `this` -->
<!---->


##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1692](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1692)&nbsp;
___
### zero
<div style="margin-left: 10px;">

▸   **zero**<`this`\> : `this`




**`en`** set the current matrix to an zero matrix.




<!---->
<!--    #### Returns `this` &#x60;this&#x60;
-->
<!---->


##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1668](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1668)&nbsp;
___
<!---->





## Class: Mat3


`extend:`
[ValueType](docs/en/core-value-types/Class/ValueType.md)










**`en`** Mathematical 3x3 matrix.


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

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  transpose](#transpose)
- [ **`static`**  transform](#transform)
- [ **`static`**  toArray](#toArray)
- [ **`static`**  subtract](#subtract)
- [ **`static`**  strictEquals](#strictEquals)
- [ **`static`**  set](#set)
- [ **`static`**  scale](#scale)
- [ **`static`**  rotate](#rotate)
- [ **`static`**  multiplyScalarAndAdd](#multiplyScalarAndAdd)
- [ **`static`**  multiplyScalar](#multiplyScalar)
- [ **`static`**  multiplyMat4](#multiplyMat4)
- [ **`static`**  multiply](#multiply)
- [ **`static`**  invert](#invert)
- [ **`static`**  inverseTransposeMat4](#inverseTransposeMat4)
- [ **`static`**  identity](#identity)
- [ **`static`**  fromViewUp](#fromViewUp)
- [ **`static`**  fromTranslation](#fromTranslation)
- [ **`static`**  fromScaling](#fromScaling)
- [ **`static`**  fromRotation](#fromRotation)
- [ **`static`**  fromQuat](#fromQuat)
- [ **`static`**  fromMat4](#fromMat4)
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
- [ transpose](#transpose)
</div>

## Properties


### IDENTITY
<div style="margin-left: 10px;">




• `static` **IDENTITY**:
  = `Object.freeze(new Mat3())`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L45)&nbsp;


___


### m00
<div style="margin-left: 10px;">



**`en`** Value at column 0 row 0 of the matrix.




•  **m00**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:636](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L636)&nbsp;


___


### m01
<div style="margin-left: 10px;">



**`en`** Value at column 0 row 1 of the matrix.




•  **m01**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:642](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L642)&nbsp;


___


### m02
<div style="margin-left: 10px;">



**`en`** Value at column 0 row 2 of the matrix.




•  **m02**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:648](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L648)&nbsp;


___


### m03
<div style="margin-left: 10px;">



**`en`** Value at column 1 row 0 of the matrix.




•  **m03**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:654](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L654)&nbsp;


___


### m04
<div style="margin-left: 10px;">



**`en`** Value at column 1 row 1 of the matrix.




•  **m04**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:660](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L660)&nbsp;


___


### m05
<div style="margin-left: 10px;">



**`en`** Value at column 1 row 2 of the matrix.




•  **m05**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:666](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L666)&nbsp;


___


### m06
<div style="margin-left: 10px;">



**`en`** Value at column 2 row 0 of the matrix.




•  **m06**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:672](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L672)&nbsp;


___


### m07
<div style="margin-left: 10px;">



**`en`** Value at column 2 row 1 of the matrix.




•  **m07**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:678](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L678)&nbsp;


___


### m08
<div style="margin-left: 10px;">



**`en`** Value at column 2 row 2 of the matrix.




•  **m08**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:684](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L684)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Mat3**(`other: Mat3`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Mat3` |
• **new Mat3**(`m00: undefined | number, m01: undefined | number, m02: undefined | number, m03: undefined | number, m04: undefined | number, m05: undefined | number, m06: undefined | number, m07: undefined | number, m08: undefined | number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m00` | `` |
| `m01` | `` |
| `m02` | `` |
| `m03` | `` |
| `m04` | `` |
| `m05` | `` |
| `m06` | `` |
| `m07` | `` |
| `m08` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:684](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L684)&nbsp;   [cocos/core/math/mat3.ts:686](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L686)&nbsp;   [cocos/core/math/mat3.ts:691](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L691)&nbsp;


---

<!---->
## Methods

### transpose

<div style="margin-left: 10px;">

▸ `static`  **transpose**<`Out`\>(`out: Out, a: Out`) : `Out`



**`en`** Transposes a matrix and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L113)&nbsp;
___
### transform

<div style="margin-left: 10px;">

▸ `static`  **transform**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`



**`en`** Multiply a matrix with a translation vector given by a translation offset.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:246](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L246)&nbsp;
___
### toArray

<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, m: IMat3Like, ofs: number`) : `Out`



**`en`** Transform a matrix object to a flat array



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `m` | `IMat3Like` | - |
| `ofs` | `number` | Array Start Offset  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:505](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L505)&nbsp;
___
### subtract

<div style="margin-left: 10px;">

▸ `static`  **subtract**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`en`** Subtracts matrix b from matrix a and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:557](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L557)&nbsp;
___
### strictEquals

<div style="margin-left: 10px;">

▸ `static`  **strictEquals**<`boolean`\>(`a: Out, b: Out`) : `boolean`



**`en`** Returns whether the specified matrices are equal.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:608](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L608)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number`) : `Out`



**`en`** Sets the elements of a matrix with the given values and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `m00` | `number` | - |
| `m01` | `number` | - |
| `m02` | `number` | - |
| `m10` | `number` | - |
| `m11` | `number` | - |
| `m12` | `number` | - |
| `m20` | `number` | - |
| `m21` | `number` | - |
| `m22` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L80)&nbsp;
___
### scale

<div style="margin-left: 10px;">

▸ `static`  **scale**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`



**`en`** Multiply a matrix with a scale matrix given by a scale vector and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L270)&nbsp;
___
### rotate

<div style="margin-left: 10px;">

▸ `static`  **rotate**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`



**`en`** Rotates the transform by the given angle and save the results into the out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `rad` | `number` | radius of rotation  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L292)&nbsp;
___
### multiplyScalarAndAdd

<div style="margin-left: 10px;">

▸ `static`  **multiplyScalarAndAdd**<`Out`\>(`out: Out, a: Out, b: Out, scale: number`) : `Out`



**`en`** Adds two matrices after multiplying each element of the second operand by a scalar number. And save the results to out matrix.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `scale` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:591](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L591)&nbsp;
___
### multiplyScalar

<div style="margin-left: 10px;">

▸ `static`  **multiplyScalar**<`Out`\>(`out: Out, a: Out, b: number`) : `Out`



**`en`** Multiply each element of a matrix by a scalar number and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L574)&nbsp;
___
### multiplyMat4

<div style="margin-left: 10px;">

▸ `static`  **multiplyMat4**<`Out`\>(`out: Out, a: Out, b: IMat4Like`) : `Out`



**`en`** Take the first third order of the fourth order matrix and multiply by the third order matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `IMat4Like` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L219)&nbsp;
___
### multiply

<div style="margin-left: 10px;">

▸ `static`  **multiply**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`en`** Multiply two matrices explicitly and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L192)&nbsp;
___
### invert

<div style="margin-left: 10px;">

▸ `static`  **invert**<`Out`\>(`out: Out, a: Out`) : `Out`



**`en`** Inverts a matrix. When matrix is not invertible the matrix will be set to zeros.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L144)&nbsp;
___
### inverseTransposeMat4

<div style="margin-left: 10px;">

▸ `static`  **inverseTransposeMat4**(`out: Out, a: IMat4Like`)



**`en`** Calculates the upper-left 3x3 matrix of a 4x4 matrix's inverse transpose



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `IMat4Like` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:458](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L458)&nbsp;
___
### identity

<div style="margin-left: 10px;">

▸ `static`  **identity**<`Out`\>(`out: Out`) : `Out`



**`en`** Reset the out matrix to an identity matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L96)&nbsp;
___
### fromViewUp

<div style="margin-left: 10px;">

▸ `static`  **fromViewUp**<`Out`\>(`out: Out, view: VecLike, up: Vec3`) : `Out`



**`en`** Sets a third order matrix with view direction and up direction. Then save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `view` | `VecLike` | The view direction, it`s must be normalized.  |
| `up` | `Vec3` | The view up direction, it`s must be normalized, default value is (0, 1, 0).  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:337](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L337)&nbsp;
___
### fromTranslation

<div style="margin-left: 10px;">

▸ `static`  **fromTranslation**<`Out`\>(`out: Out, v: VecLike`) : `Out`



**`en`** Sets the given matrix with a translation vector and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L366)&nbsp;
___
### fromScaling

<div style="margin-left: 10px;">

▸ `static`  **fromScaling**<`Out`\>(`out: Out, v: VecLike`) : `Out`



**`en`** Sets the given matrix with a scale vector and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:383](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L383)&nbsp;
___
### fromRotation

<div style="margin-left: 10px;">

▸ `static`  **fromRotation**<`Out`\>(`out: Out, rad: number`) : `Out`



**`en`** Sets the given matrix with a given angle and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `rad` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:402](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L402)&nbsp;
___
### fromQuat

<div style="margin-left: 10px;">

▸ `static`  **fromQuat**<`Out`\>(`out: Out, q: IQuatLike`) : `Out`



**`en`** Sets the given matrix with the given quaternion and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `q` | `IQuatLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:423](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L423)&nbsp;
___
### fromMat4

<div style="margin-left: 10px;">

▸ `static`  **fromMat4**<`Out`\>(`out: Out, a: IMat4Like`) : `Out`



**`en`** Copies the first third order matrix of a fourth order matrix to the out third order matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `IMat4Like` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L318)&nbsp;
___
### fromArray

<div style="margin-left: 10px;">

▸ `static`  **fromArray**<`Out`\>(`out: Out, arr: IWritableArrayLike, ofs: number`) : `Out`



**`en`** Generates or sets a matrix with a flat array



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `arr` | `IWritableArrayLike` | - |
| `ofs` | `number` | Array Start Offset  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:523](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L523)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸ `static`  **equals**<`boolean`\>(`a: Out, b: Out, epsilon: number`) : `boolean`



**`en`** Returns whether the specified matrices are approximately equal.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `epsilon` | `number` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L618)&nbsp;
___
### determinant

<div style="margin-left: 10px;">

▸ `static`  **determinant**<`number`\>(`a: Out`) : `number`



**`en`** Calculates the determinant of a matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L180)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸ `static`  **copy**<`Out`\>(`out: Out, a: Out`) : `Out`



**`en`** Copy content of a matrix into another and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L63)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`Mat3`\>(`a: Out`) : `Mat3`



**`en`** Clone a matrix and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `Mat3`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L51)&nbsp;
___
### add

<div style="margin-left: 10px;">

▸ `static`  **add**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`en`** Adds two matrices and save the results to out matrix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:540](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L540)&nbsp;
___
### add

<div style="margin-left: 10px;">

▸   **add**<`this`\>(`mat: Mat3`) : `this`



**`en`** Adds the current matrix and another matrix to the current matrix.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat3` | the second operand  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:887](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L887)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸   **clone**<`Mat3`\> : `Mat3`



**`en`** Clone a new matrix from the current matrix.




##### Returns `Mat3`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:714](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L714)&nbsp;
___
### determinant

<div style="margin-left: 10px;">

▸   **determinant**<`number`\> : `number`



**`en`** Calculates the determinant of the current matrix.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:874](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L874)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Mat3, epsilon: number`) : `boolean`



**`en`** Returns whether the specified matrices are approximately equal.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat3` | Comparative matrix  |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:762](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L762)&nbsp;
___
### fromQuat

<div style="margin-left: 10px;">

▸   **fromQuat**<`this`\>(`q: Quat`) : `this`



**`en`** Resets the current matrix from the given quaternion.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `Quat` | The quaternion.  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:1019](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L1019)&nbsp;
___
### identity

<div style="margin-left: 10px;">

▸   **identity**<`this`\> : `this`



**`en`** set the current matrix to an identity matrix.




##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:807](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L807)&nbsp;
___
### invert

<div style="margin-left: 10px;">

▸   **invert**<`this`\> : `this`



**`en`** Inverts the current matrix. When matrix is not invertible the matrix will be set to zeros.




##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:839](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L839)&nbsp;
___
### multiply

<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`mat: Mat3`) : `this`



**`en`** Multiply the current matrix with another matrix.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat3` | the second operand  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:923](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L923)&nbsp;
___
### multiplyScalar

<div style="margin-left: 10px;">

▸   **multiplyScalar**<`this`\>(`scalar: number`) : `this`



**`en`** Multiply each element of the current matrix by a scalar number.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scalar` | `number` | amount to scale the matrix's elements by  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:951](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L951)&nbsp;
___
### rotate

<div style="margin-left: 10px;">

▸   **rotate**<`this`\>(`rad: number`) : `this`



**`en`** Rotates the current matrix by the given angle.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | radius of rotation  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:991](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L991)&nbsp;
___
### scale

<div style="margin-left: 10px;">

▸   **scale**<`this`\>(`vec: Vec3`) : `this`



**`en`** Multiply the current matrix with a scale matrix given by a scale vector.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `vec` | `Vec3` | vector to scale by  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:969](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L969)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸   **set**<`any`\>(`other: Mat3`) : `any`



**`en`** Sets the matrix with another one's value.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat3` | Specified matrix  |


##### Returns `any`

▸   **set**<`any`\>(`m00: undefined | number, m01: undefined | number, m02: undefined | number, m03: undefined | number, m04: undefined | number, m05: undefined | number, m06: undefined | number, m07: undefined | number, m08: undefined | number`) : `any`



**`en`** Set the matrix with values of all elements



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m00` | `undefined \| number` | - |
| `m01` | `undefined \| number` | - |
| `m02` | `undefined \| number` | - |
| `m03` | `undefined \| number` | - |
| `m04` | `undefined \| number` | - |
| `m05` | `undefined \| number` | - |
| `m06` | `undefined \| number` | - |
| `m07` | `undefined \| number` | - |
| `m08` | `undefined \| number` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:729](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L729)&nbsp;   [cocos/core/math/mat3.ts:736](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L736)&nbsp;   [cocos/core/math/mat3.ts:740](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L740)&nbsp;
___
### strictEquals

<div style="margin-left: 10px;">

▸   **strictEquals**<`boolean`\>(`other: Mat3`) : `boolean`



**`en`** Returns whether the specified matrices are equal.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat3` | Comparative matrix  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:782](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L782)&nbsp;
___
### subtract

<div style="margin-left: 10px;">

▸   **subtract**<`this`\>(`mat: Mat3`) : `this`



**`en`** Subtracts another matrix from the current matrix.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat3` | the second operand  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:905](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L905)&nbsp;
___
### toString

<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`



**`en`** Returns a string representation of a matrix.




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:793](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L793)&nbsp;
___
### transpose

<div style="margin-left: 10px;">

▸   **transpose**<`this`\> : `this`



**`en`** Transposes the current matrix.




##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:824](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L824)&nbsp;
___
<!---->




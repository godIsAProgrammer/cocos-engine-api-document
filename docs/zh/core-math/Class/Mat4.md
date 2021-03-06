
## Class: Mat4


`extend:`
[ValueType](docs/zh/core-value-types/Class/ValueType.md)










**`zh`** 表示四维（4x4）矩阵。



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



**`zh`** 矩阵第 0 列第 0 行的元素。





•  **m00**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1413)&nbsp;


___


### m01
<div style="margin-left: 10px;">



**`zh`** 矩阵第 0 列第 1 行的元素。





•  **m01**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1419)&nbsp;


___


### m02
<div style="margin-left: 10px;">



**`zh`** 矩阵第 0 列第 2 行的元素。





•  **m02**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1425](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1425)&nbsp;


___


### m03
<div style="margin-left: 10px;">



**`zh`** 矩阵第 0 列第 3 行的元素。





•  **m03**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1431](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1431)&nbsp;


___


### m04
<div style="margin-left: 10px;">



**`zh`** 矩阵第 1 列第 0 行的元素。





•  **m04**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1437](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1437)&nbsp;


___


### m05
<div style="margin-left: 10px;">



**`zh`** 矩阵第 1 列第 1 行的元素。





•  **m05**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1443)&nbsp;


___


### m06
<div style="margin-left: 10px;">



**`zh`** 矩阵第 1 列第 2 行的元素。





•  **m06**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1449](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1449)&nbsp;


___


### m07
<div style="margin-left: 10px;">



**`zh`** 矩阵第 1 列第 3 行的元素。





•  **m07**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1455)&nbsp;


___


### m08
<div style="margin-left: 10px;">



**`zh`** 矩阵第 2 列第 0 行的元素。





•  **m08**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1461](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1461)&nbsp;


___


### m09
<div style="margin-left: 10px;">



**`zh`** 矩阵第 2 列第 1 行的元素。





•  **m09**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1467](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1467)&nbsp;


___


### m10
<div style="margin-left: 10px;">



**`zh`** 矩阵第 2 列第 2 行的元素。





•  **m10**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1473)&nbsp;


___


### m11
<div style="margin-left: 10px;">



**`zh`** 矩阵第 2 列第 3 行的元素。





•  **m11**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1479](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1479)&nbsp;


___


### m12
<div style="margin-left: 10px;">



**`zh`** 矩阵第 3 列第 0 行的元素。





•  **m12**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1485)&nbsp;


___


### m13
<div style="margin-left: 10px;">



**`zh`** 矩阵第 3 列第 1 行的元素。





•  **m13**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1491)&nbsp;


___


### m14
<div style="margin-left: 10px;">



**`zh`** 矩阵第 3 列第 2 行的元素。





•  **m14**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1497](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1497)&nbsp;


___


### m15
<div style="margin-left: 10px;">



**`zh`** 矩阵第 3 列第 3 行的元素。





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
| `m01` | `` |
| `m02` | `` |
| `m03` | `` |
| `m04` | `` |
| `m05` | `` |
| `m06` | `` |
| `m07` | `` |
| `m08` | `` |
| `m09` | `` |
| `m10` | `` |
| `m11` | `` |
| `m12` | `` |
| `m13` | `` |
| `m14` | `` |
| `m15` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1503](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1503)&nbsp;   [cocos/core/math/mat4.ts:1505](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1505)&nbsp;   [cocos/core/math/mat4.ts:1511](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1511)&nbsp;


---

<!---->
## Methods

### transpose

<div style="margin-left: 10px;">

▸ `static`  **transpose**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 转置矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L138)&nbsp;
___
### translate

<div style="margin-left: 10px;">

▸ `static`  **translate**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`



**`zh`** 在给定矩阵变换基础上加入新位移变换




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L327)&nbsp;
___
### transform

<div style="margin-left: 10px;">

▸ `static`  **transform**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`



**`zh`** 在给定矩阵变换基础上加入变换




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L298)&nbsp;
___
### toRTS

<div style="margin-left: 10px;">

▸ `static`  **toRTS**<`void`\>(`m: Out, q: Quat, v: VecLike, s: VecLike`) : `void`



**`zh`** 提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Out` | - |
| `q` | `Quat` | - |
| `v` | `VecLike` | - |
| `s` | `VecLike` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:837](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L837)&nbsp;
___
### toArray

<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, m: IMat4Like, ofs: number`) : `Out`



**`zh`** 矩阵转数组



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `m` | `IMat4Like` | - |
| `ofs` | `number` | Array Start Offset  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1230)&nbsp;
___
### subtract

<div style="margin-left: 10px;">

▸ `static`  **subtract**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`zh`** 逐元素矩阵减法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1303)&nbsp;
___
### strictEquals

<div style="margin-left: 10px;">

▸ `static`  **strictEquals**<`boolean`\>(`a: Out, b: Out`) : `boolean`



**`zh`** 矩阵等价判断




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1375](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1375)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number`) : `Out`



**`zh`** 设置矩阵值




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `m00` | `number` | - |
| `m01` | `number` | - |
| `m02` | `number` | - |
| `m03` | `number` | - |
| `m10` | `number` | - |
| `m11` | `number` | - |
| `m12` | `number` | - |
| `m13` | `number` | - |
| `m20` | `number` | - |
| `m21` | `number` | - |
| `m22` | `number` | - |
| `m23` | `number` | - |
| `m30` | `number` | - |
| `m31` | `number` | - |
| `m32` | `number` | - |
| `m33` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L96)&nbsp;
___
### scale

<div style="margin-left: 10px;">

▸ `static`  **scale**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`



**`zh`** 在给定矩阵变换基础上加入新缩放变换




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:349](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L349)&nbsp;
___
### rotateZ

<div style="margin-left: 10px;">

▸ `static`  **rotateZ**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`



**`zh`** 在给定矩阵变换基础上加入绕 Z 轴的旋转变换



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `rad` | `number` | Angle of rotation (in radians)  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:515](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L515)&nbsp;
___
### rotateY

<div style="margin-left: 10px;">

▸ `static`  **rotateY**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`



**`zh`** 在给定矩阵变换基础上加入绕 Y 轴的旋转变换



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `rad` | `number` | Angle of rotation (in radians)  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:474](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L474)&nbsp;
___
### rotateX

<div style="margin-left: 10px;">

▸ `static`  **rotateX**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`



**`zh`** 在给定矩阵变换基础上加入绕 X 轴的旋转变换



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `rad` | `number` | Angle of rotation (in radians)  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:433](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L433)&nbsp;
___
### rotate

<div style="margin-left: 10px;">

▸ `static`  **rotate**(`out: Out, a: Out, rad: number, axis: VecLike`)



**`zh`** 在给定矩阵变换基础上加入新旋转变换



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `rad` | `number` | Angle of rotation (in radians)  |
| `axis` | `VecLike` | axis of rotation  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:376](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L376)&nbsp;
___
### perspective

<div style="margin-left: 10px;">

▸ `static`  **perspective**<`Out`\>(`out: Out, fov: number, aspect: number, near: number, far: number, isFOVY: boolean, minClipZ: number, projectionSignY: number, orientation: number`) : `Out`



**`zh`** 计算透视投影矩阵



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `fov` | `number` | - |
| `aspect` | `number` | Aspect ratio  |
| `near` | `number` | Near depth clipping plane value.  |
| `far` | `number` | Far depth clipping plane value.  |
| `isFOVY` | `boolean` | - |
| `minClipZ` | `number` | - |
| `projectionSignY` | `number` | - |
| `orientation` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1036](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1036)&nbsp;
___
### ortho

<div style="margin-left: 10px;">

▸ `static`  **ortho**<`Out`\>(`out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number, minClipZ: number, projectionSignY: number, orientation: number`) : `Out`



**`zh`** 计算正交投影矩阵



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `left` | `number` | Left-side x-coordinate.  |
| `right` | `number` | Right-side x-coordinate.  |
| `bottom` | `number` | Bottom y-coordinate.  |
| `top` | `number` | Top y-coordinate.  |
| `near` | `number` | Near depth clipping plane value.  |
| `far` | `number` | Far depth clipping plane value.  |
| `minClipZ` | `number` | - |
| `projectionSignY` | `number` | - |
| `orientation` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1076](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1076)&nbsp;
___
### multiplyScalarAndAdd

<div style="margin-left: 10px;">

▸ `static`  **multiplyScalarAndAdd**<`Out`\>(`out: Out, a: Out, b: Out, scale: number`) : `Out`



**`zh`** 逐元素矩阵标量乘加: A + B * scale




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `scale` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1351)&nbsp;
___
### multiplyScalar

<div style="margin-left: 10px;">

▸ `static`  **multiplyScalar**<`Out`\>(`out: Out, a: Out, b: number`) : `Out`



**`zh`** 矩阵标量乘法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1327)&nbsp;
___
### multiply

<div style="margin-left: 10px;">

▸ `static`  **multiply**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`zh`** 矩阵乘法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:261](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L261)&nbsp;
___
### lookAt

<div style="margin-left: 10px;">

▸ `static`  **lookAt**<`Out`\>(`out: Out, eye: VecLike, center: VecLike, up: VecLike`) : `Out`



**`zh`** 
根据视点计算矩阵，注意 `eye - center` 不能为零向量或与 `up` 向量平行



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `eye` | `VecLike` | The source point.  |
| `center` | `VecLike` | The target point.  |
| `up` | `VecLike` | The vector describing the up direction.  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1119)&nbsp;
___
### invert

<div style="margin-left: 10px;">

▸ `static`  **invert**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L179)&nbsp;
___
### inverseTranspose

<div style="margin-left: 10px;">

▸ `static`  **inverseTranspose**(`out: Out, a: Out`)



**`zh`** 计算逆转置矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1175)&nbsp;
___
### identity

<div style="margin-left: 10px;">

▸ `static`  **identity**<`Out`\>(`out: Out`) : `Out`



**`zh`** 将目标赋值为单位矩阵




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



**`zh`** 提取矩阵的位移信息, 默认矩阵中的变换以 S->R->T 的顺序应用




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `VecLike` | - |
| `mat` | `Out` | - |


##### Returns `VecLike`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:766](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L766)&nbsp;
___
### getScaling

<div style="margin-left: 10px;">

▸ `static`  **getScaling**<`VecLike`\>(`out: VecLike, mat: Out`) : `VecLike`



**`zh`** 提取矩阵的缩放信息, 默认矩阵中的变换以 S->R->T 的顺序应用




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `VecLike` | - |
| `mat` | `Out` | - |


##### Returns `VecLike`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:778](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L778)&nbsp;
___
### getRotation

<div style="margin-left: 10px;">

▸ `static`  **getRotation**<`Quat`\>(`out: Quat, mat: Out`) : `Quat`



**`zh`** 提取矩阵的旋转信息, 默认输入矩阵不含有缩放信息，如考虑缩放应使用 `toRTS` 函数。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Quat` | - |
| `mat` | `Out` | - |


##### Returns `Quat`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:800](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L800)&nbsp;
___
### frustum

<div style="margin-left: 10px;">

▸ `static`  **frustum**<`Out`\>(`out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number`) : `Out`



**`zh`** 根据指定的视锥体信息计算矩阵



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `left` | `number` | The X coordinate of the left side of the near projection plane in view space.  |
| `right` | `number` | The X coordinate of the right side of the near projection plane in view space.  |
| `bottom` | `number` | The Y coordinate of the bottom side of the near projection plane in view space.  |
| `top` | `number` | The Y coordinate of the top side of the near projection plane in view space.  |
| `near` | `number` | Z distance to the near plane from the origin in view space.  |
| `far` | `number` | Z distance to the far plane from the origin in view space.  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1004](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1004)&nbsp;
___
### fromZRotation

<div style="margin-left: 10px;">

▸ `static`  **fromZRotation**<`Out`\>(`out: Out, rad: number`) : `Out`



**`zh`** 计算绕 Z 轴的旋转矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `rad` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:699](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L699)&nbsp;
___
### fromYRotation

<div style="margin-left: 10px;">

▸ `static`  **fromYRotation**<`Out`\>(`out: Out, rad: number`) : `Out`



**`zh`** 计算绕 Y 轴的旋转矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `rad` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:672](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L672)&nbsp;
___
### fromXRotation

<div style="margin-left: 10px;">

▸ `static`  **fromXRotation**<`Out`\>(`out: Out, rad: number`) : `Out`



**`zh`** 计算绕 X 轴的旋转矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `rad` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:645](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L645)&nbsp;
___
### fromTranslation

<div style="margin-left: 10px;">

▸ `static`  **fromTranslation**<`Out`\>(`out: Out, v: VecLike`) : `Out`



**`zh`** 计算位移矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:556](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L556)&nbsp;
___
### fromScaling

<div style="margin-left: 10px;">

▸ `static`  **fromScaling**<`Out`\>(`out: Out, v: VecLike`) : `Out`



**`zh`** 计算缩放矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:580](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L580)&nbsp;
___
### fromRotation

<div style="margin-left: 10px;">

▸ `static`  **fromRotation**(`out: Out, rad: number, axis: VecLike`)



**`zh`** 计算旋转矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `rad` | `number` | - |
| `axis` | `VecLike` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L604)&nbsp;
___
### fromRTSOrigin

<div style="margin-left: 10px;">

▸ `static`  **fromRTSOrigin**<`Out`\>(`out: Out, q: Quat, v: VecLike, s: VecLike, o: VecLike`) : `Out`



**`zh`** 根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 S->R->T 的顺序应用



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `q` | `Quat` | Rotation quaternion  |
| `v` | `VecLike` | Translation vector  |
| `s` | `VecLike` | Scaling vector  |
| `o` | `VecLike` | transformation Center  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:907](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L907)&nbsp;
___
### fromRTS

<div style="margin-left: 10px;">

▸ `static`  **fromRTS**<`Out`\>(`out: Out, q: Quat, v: VecLike, s: VecLike`) : `Out`



**`zh`** 根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `q` | `Quat` | - |
| `v` | `VecLike` | - |
| `s` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:860](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L860)&nbsp;
___
### fromRT

<div style="margin-left: 10px;">

▸ `static`  **fromRT**<`Out`\>(`out: Out, q: Quat, v: VecLike`) : `Out`



**`zh`** 根据旋转和位移信息计算矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `q` | `Quat` | - |
| `v` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:726](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L726)&nbsp;
___
### fromQuat

<div style="margin-left: 10px;">

▸ `static`  **fromQuat**<`Out`\>(`out: Out, q: Quat`) : `Out`



**`zh`** 根据指定的旋转信息计算矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `q` | `Quat` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:955](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L955)&nbsp;
___
### fromArray

<div style="margin-left: 10px;">

▸ `static`  **fromArray**<`Out`\>(`out: Out, arr: IWritableArrayLike, ofs: number`) : `Out`



**`zh`** 数组转矩阵



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `arr` | `IWritableArrayLike` | - |
| `ofs` | `number` | Array Start Offset  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1255)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸ `static`  **equals**<`boolean`\>(`a: Out, b: Out, epsilon: number`) : `boolean`



**`zh`** 排除浮点数误差的矩阵近似等价判断




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `epsilon` | `number` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1386](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1386)&nbsp;
___
### determinant

<div style="margin-left: 10px;">

▸ `static`  **determinant**<`number`\>(`a: Out`) : `number`



**`zh`** 矩阵行列式




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



**`zh`** 复制目标矩阵




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L72)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`Mat4`\>(`a: Out`) : `Mat4`



**`zh`** 获得指定矩阵的拷贝




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



**`zh`** 逐元素矩阵加法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1279)&nbsp;
___
### add

<div style="margin-left: 10px;">

▸   **add**<`this`\>(`mat: Mat4`) : `this`



**`zh`** 矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。



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



**`zh`** 克隆当前矩阵。





##### Returns `Mat4`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1537](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1537)&nbsp;
___
### determinant

<div style="margin-left: 10px;">

▸   **determinant**<`number`\> : `number`



**`zh`** 计算当前矩阵的行列式。




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1766](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1766)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Mat4, epsilon: number`) : `boolean`



**`zh`** 判断当前矩阵是否在误差范围内与指定矩阵相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat4` | Comparative matrix  |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1590](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1590)&nbsp;
___
### fromQuat

<div style="margin-left: 10px;">

▸   **fromQuat**<`this`\>(`q: Quat`) : `this`



**`zh`** 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。



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



**`zh`** 重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `Quat` | Rotation quaternion  |
| `v` | `Vec3` | Translation vector  |
| `s` | `Vec3` | Scaling vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:2069](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L2069)&nbsp;
___
### getRotation

<div style="margin-left: 10px;">

▸   **getRotation**<`Quat`\>(`out: Quat`) : `Quat`



**`zh`** 从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给出口四元数。



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



**`zh`** 从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给出口向量。



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



**`zh`** 从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给出口向量。



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



**`zh`** 将当前矩阵设为单位矩阵。




##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1643](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1643)&nbsp;
___
### invert

<div style="margin-left: 10px;">

▸   **invert**<`this`\> : `this`



**`zh`** 计算当前矩阵的逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。





##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1713](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1713)&nbsp;
___
### multiply

<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`mat: Mat4`) : `this`



**`zh`** 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。



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



**`zh`** 矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。



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



**`zh`** 将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rad` | `number` | Angle of rotation (in radians)  |
| `axis` | `Vec3` | Axis of rotation  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1943](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1943)&nbsp;
___
### scale

<div style="margin-left: 10px;">

▸   **scale**<`this`\>(`vec: Vec3`) : `this`



**`zh`** 将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。



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



**`zh`** 设置当前矩阵使其与指定矩阵相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat4` | Specified matrix.  |


##### Returns `any`

▸   **set**<`any`\>(`m00: undefined | number, m01: undefined | number, m02: undefined | number, m03: undefined | number, m04: undefined | number, m05: undefined | number, m06: undefined | number, m07: undefined | number, m08: undefined | number, m09: undefined | number, m10: undefined | number, m11: undefined | number, m12: undefined | number, m13: undefined | number, m14: undefined | number, m15: undefined | number`) : `any`



**`zh`** 设置当前矩阵指定元素值。



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
| `m09` | `undefined \| number` | - |
| `m10` | `undefined \| number` | - |
| `m11` | `undefined \| number` | - |
| `m12` | `undefined \| number` | - |
| `m13` | `undefined \| number` | - |
| `m14` | `undefined \| number` | - |
| `m15` | `undefined \| number` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1552](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1552)&nbsp;   [cocos/core/math/mat4.ts:1559](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1559)&nbsp;   [cocos/core/math/mat4.ts:1565](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1565)&nbsp;
___
### strictEquals

<div style="margin-left: 10px;">

▸   **strictEquals**<`boolean`\>(`other: Mat4`) : `boolean`



**`zh`** 判断当前矩阵是否与指定矩阵相等。



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



**`zh`** 计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。



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



**`zh`** 返回当前矩阵的字符串表示。




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1629](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1629)&nbsp;
___
### translate

<div style="margin-left: 10px;">

▸   **translate**<`this`\>(`vec: Vec3`) : `this`



**`zh`** 将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。



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



**`zh`** 计算当前矩阵的转置矩阵。





##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1692](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1692)&nbsp;
___
### zero

<div style="margin-left: 10px;">

▸   **zero**<`this`\> : `this`



**`zh`** 将当前矩阵设为 0矩阵。




##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/mat4.ts:1668](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat4.ts#L1668)&nbsp;
___
<!---->




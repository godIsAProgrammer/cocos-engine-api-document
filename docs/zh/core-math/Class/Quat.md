
## Class: Quat


`extend:`
[ValueType](docs/zh/core-value-types/Class/ValueType.md)










**`zh`** 四元数



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  IDENTITY](#IDENTITY)
- [ w](#w)
- [ x](#x)
- [ y](#y)
- [ z](#z)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  toEuler](#toEuler)
- [ **`static`**  toAxisZ](#toAxisZ)
- [ **`static`**  toAxisY](#toAxisY)
- [ **`static`**  toAxisX](#toAxisX)
- [ **`static`**  toArray](#toArray)
- [ **`static`**  strictEquals](#strictEquals)
- [ **`static`**  sqlerp](#sqlerp)
- [ **`static`**  slerp](#slerp)
- [ **`static`**  set](#set)
- [ **`static`**  scaleAndAdd](#scaleAndAdd)
- [ **`static`**  rotationTo](#rotationTo)
- [ **`static`**  rotateZ](#rotateZ)
- [ **`static`**  rotateY](#rotateY)
- [ **`static`**  rotateX](#rotateX)
- [ **`static`**  rotateAroundLocal](#rotateAroundLocal)
- [ **`static`**  rotateAround](#rotateAround)
- [ **`static`**  normalize](#normalize)
- [ **`static`**  multiplyScalar](#multiplyScalar)
- [ **`static`**  multiply](#multiply)
- [ **`static`**  lerp](#lerp)
- [ **`static`**  lengthSqr](#lengthSqr)
- [ **`static`**  len](#len)
- [ **`static`**  invert](#invert)
- [ **`static`**  identity](#identity)
- [ **`static`**  getAxisAngle](#getAxisAngle)
- [ **`static`**  fromViewUp](#fromViewUp)
- [ **`static`**  fromMat3](#fromMat3)
- [ **`static`**  fromEuler](#fromEuler)
- [ **`static`**  fromAxisAngle](#fromAxisAngle)
- [ **`static`**  fromAxes](#fromAxes)
- [ **`static`**  fromArray](#fromArray)
- [ **`static`**  fromAngleZ](#fromAngleZ)
- [ **`static`**  equals](#equals)
- [ **`static`**  dot](#dot)
- [ **`static`**  copy](#copy)
- [ **`static`**  conjugate](#conjugate)
- [ **`static`**  clone](#clone)
- [ **`static`**  calculateW](#calculateW)
- [ clone](#clone)
- [ equals](#equals)
- [ getEulerAngles](#getEulerAngles)
- [ length](#length)
- [ lengthSqr](#lengthSqr)
- [ lerp](#lerp)
- [ set](#set)
- [ slerp](#slerp)
- [ strictEquals](#strictEquals)
- [ toString](#toString)
</div>

## Properties


### IDENTITY
<div style="margin-left: 10px;">




• `static` **IDENTITY**:
  = `Object.freeze(new Quat())`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L44)&nbsp;


___


### w
<div style="margin-left: 10px;">



**`zh`** w 分量。





•  **w**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:689](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L689)&nbsp;


___


### x
<div style="margin-left: 10px;">



**`zh`** x 分量。





•  **x**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:671](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L671)&nbsp;


___


### y
<div style="margin-left: 10px;">



**`zh`** y 分量。





•  **y**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:677](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L677)&nbsp;


___


### z
<div style="margin-left: 10px;">



**`zh`** z 分量。





•  **z**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:683](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L683)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Quat**(`other: Quat`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Quat` |
• **new Quat**(`x: undefined | number, y: undefined | number, z: undefined | number, w: undefined | number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `` |
| `y` | `` |
| `z` | `` |
| `w` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:689](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L689)&nbsp;   [cocos/core/math/quat.ts:691](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L691)&nbsp;   [cocos/core/math/quat.ts:693](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L693)&nbsp;


---

<!---->
## Methods

### toEuler

<div style="margin-left: 10px;">

▸ `static`  **toEuler**<`IVec3Like`\>(`out: IVec3Like, q: IQuatLike, outerZ: undefined | false | true`) : `IVec3Like`



**`zh`** 根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `IVec3Like` | - |
| `q` | `IQuatLike` | - |
| `outerZ` | `undefined \| false \| true` | change z value range to [-180, -90] U [90, 180]  |


##### Returns `IVec3Like`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:591](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L591)&nbsp;
___
### toAxisZ

<div style="margin-left: 10px;">

▸ `static`  **toAxisZ**<`IVec3Like`\>(`out: IVec3Like, q: IQuatLike`) : `IVec3Like`



**`zh`** 返回定义此四元数的坐标系 Z 轴向量




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `IVec3Like` | - |
| `q` | `IQuatLike` | - |


##### Returns `IVec3Like`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:575](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L575)&nbsp;
___
### toAxisY

<div style="margin-left: 10px;">

▸ `static`  **toAxisY**<`IVec3Like`\>(`out: IVec3Like, q: IQuatLike`) : `IVec3Like`



**`zh`** 返回定义此四元数的坐标系 Y 轴向量




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `IVec3Like` | - |
| `q` | `IQuatLike` | - |


##### Returns `IVec3Like`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:560](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L560)&nbsp;
___
### toAxisX

<div style="margin-left: 10px;">

▸ `static`  **toAxisX**<`IVec3Like`\>(`out: IVec3Like, q: IQuatLike`) : `IVec3Like`



**`zh`** 返回定义此四元数的坐标系 X 轴向量




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `IVec3Like` | - |
| `q` | `IQuatLike` | - |


##### Returns `IVec3Like`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:546](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L546)&nbsp;
___
### toArray

<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, q: IQuatLike, ofs: number`) : `Out`



**`zh`** 四元数转数组



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `q` | `IQuatLike` | - |
| `ofs` | `number` | Array Start Offset  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:627](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L627)&nbsp;
___
### strictEquals

<div style="margin-left: 10px;">

▸ `static`  **strictEquals**<`boolean`\>(`a: IQuatLike, b: IQuatLike`) : `boolean`



**`zh`** 四元数等价判断




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IQuatLike` | - |
| `b` | `IQuatLike` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:652](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L652)&nbsp;
___
### sqlerp

<div style="margin-left: 10px;">

▸ `static`  **sqlerp**<`Out`\>(`out: Out, a: Out, b: Out, c: Out, d: Out, t: number`) : `Out`



**`zh`** 带两个控制点的四元数球面插值




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `c` | `Out` | - |
| `d` | `Out` | - |
| `t` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L352)&nbsp;
___
### slerp

<div style="margin-left: 10px;">

▸ `static`  **slerp**<`Out`\>(`out: Out, a: QuatLike_1, b: QuatLike_2, t: number`) : `Out`



**`zh`** 四元数球面插值




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `QuatLike_1` | - |
| `b` | `QuatLike_2` | - |
| `t` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L304)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, x: number, y: number, z: number, w: number`) : `Out`



**`zh`** 设置四元数值




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `x` | `number` | - |
| `y` | `number` | - |
| `z` | `number` | - |
| `w` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L70)&nbsp;
___
### scaleAndAdd

<div style="margin-left: 10px;">

▸ `static`  **scaleAndAdd**<`Out`\>(`out: Out, a: Out, b: Out, scale: number`) : `Out`



**`zh`** 四元数乘加：A + B * scale




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `scale` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L175)&nbsp;
___
### rotationTo

<div style="margin-left: 10px;">

▸ `static`  **rotationTo**<`Out`\>(`out: Out, a: VecLike, b: VecLike`) : `Out`



**`zh`** 设置四元数为两向量间的最短路径旋转，默认两向量都已归一化




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `VecLike` | - |
| `b` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L94)&nbsp;
___
### rotateZ

<div style="margin-left: 10px;">

▸ `static`  **rotateZ**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`



**`zh`** 绕 Z 轴旋转指定四元数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `rad` | `number` | radius of rotation  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L226)&nbsp;
___
### rotateY

<div style="margin-left: 10px;">

▸ `static`  **rotateY**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`



**`zh`** 绕 Y 轴旋转指定四元数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `rad` | `number` | radius of rotation  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L207)&nbsp;
___
### rotateX

<div style="margin-left: 10px;">

▸ `static`  **rotateX**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`



**`zh`** 绕 X 轴旋转指定四元数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `rad` | `number` | radius of rotation  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:188](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L188)&nbsp;
___
### rotateAroundLocal

<div style="margin-left: 10px;">

▸ `static`  **rotateAroundLocal**<`Out`\>(`out: Out, rot: Out, axis: VecLike, rad: number`) : `Out`



**`zh`** 绕本地空间下指定轴旋转四元数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `rot` | `Out` | - |
| `axis` | `VecLike` | axis of rotation  |
| `rad` | `number` | radius of rotation  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:262](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L262)&nbsp;
___
### rotateAround

<div style="margin-left: 10px;">

▸ `static`  **rotateAround**<`Out`\>(`out: Out, rot: Out, axis: VecLike, rad: number`) : `Out`



**`zh`** 绕世界空间下指定轴旋转四元数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `rot` | `Out` | - |
| `axis` | `VecLike` | axis of rotation, normalized by default  |
| `rad` | `number` | radius of rotation  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:246](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L246)&nbsp;
___
### normalize

<div style="margin-left: 10px;">

▸ `static`  **normalize**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 归一化四元数




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:408](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L408)&nbsp;
___
### multiplyScalar

<div style="margin-left: 10px;">

▸ `static`  **multiplyScalar**<`Out`\>(`out: Out, a: Out, b: number`) : `Out`



**`zh`** 四元数标量乘法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L163)&nbsp;
___
### multiply

<div style="margin-left: 10px;">

▸ `static`  **multiply**<`Out`\>(`out: Out, a: QuatLike_1, b: QuatLike_2`) : `Out`



**`zh`** 四元数乘法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `QuatLike_1` | - |
| `b` | `QuatLike_2` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:147](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L147)&nbsp;
___
### lerp

<div style="margin-left: 10px;">

▸ `static`  **lerp**<`Out`\>(`out: Out, a: Out, b: Out, t: number`) : `Out`



**`zh`** 逐元素线性插值： A + t * (B - A)




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `t` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L292)&nbsp;
___
### lengthSqr

<div style="margin-left: 10px;">

▸ `static`  **lengthSqr**<`number`\>(`a: Out`) : `number`



**`zh`** 求四元数长度平方




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:400](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L400)&nbsp;
___
### len

<div style="margin-left: 10px;">

▸ `static`  **len**<`number`\>(`a: Out`) : `number`



**`zh`** 求四元数长度




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:392](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L392)&nbsp;
___
### invert

<div style="margin-left: 10px;">

▸ `static`  **invert**<`Out`\>(`out: Out, a: QuatLike`) : `Out`



**`zh`** 四元数求逆




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `QuatLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:363](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L363)&nbsp;
___
### identity

<div style="margin-left: 10px;">

▸ `static`  **identity**<`Out`\>(`out: Out`) : `Out`



**`zh`** 将目标赋值为单位四元数




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L82)&nbsp;
___
### getAxisAngle

<div style="margin-left: 10px;">

▸ `static`  **getAxisAngle**<`number`\>(`outAxis: VecLike, q: Out`) : `number`



**`zh`** 获取四元数的旋转轴和旋转弧度



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `outAxis` | `VecLike` | output axis  |
| `q` | `Out` | input quaternion  |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L127)&nbsp;
___
### fromViewUp

<div style="margin-left: 10px;">

▸ `static`  **fromViewUp**<`Out`\>(`out: Out, view: VecLike, up: Vec3`) : `Out`



**`zh`** 根据视口的前方向和上方向计算四元数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `view` | `VecLike` | The view direction, it`s must be normalized.  |
| `up` | `Vec3` | The view up direction, it`s must be normalized, default value is (0, 1, 0).  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:438](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L438)&nbsp;
___
### fromMat3

<div style="margin-left: 10px;">

▸ `static`  **fromMat3**<`Out`\>(`out: Out, m: Mat3`) : `Out`



**`zh`** 根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `m` | `Mat3` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:461](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L461)&nbsp;
___
### fromEuler

<div style="margin-left: 10px;">

▸ `static`  **fromEuler**<`Out`\>(`out: Out, x: number, y: number, z: number`) : `Out`



**`zh`** 根据欧拉角信息计算四元数，旋转顺序为 YZX




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `x` | `number` | - |
| `y` | `number` | - |
| `z` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:507](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L507)&nbsp;
___
### fromAxisAngle

<div style="margin-left: 10px;">

▸ `static`  **fromAxisAngle**<`Out`\>(`out: Out, axis: VecLike, rad: number`) : `Out`



**`zh`** 根据旋转轴和旋转弧度计算四元数




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `axis` | `VecLike` | - |
| `rad` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L447)&nbsp;
___
### fromAxes

<div style="margin-left: 10px;">

▸ `static`  **fromAxes**<`Out`\>(`out: Out, xAxis: VecLike, yAxis: VecLike, zAxis: VecLike`) : `Out`



**`zh`** 根据本地坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `xAxis` | `VecLike` | - |
| `yAxis` | `VecLike` | - |
| `zAxis` | `VecLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:424](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L424)&nbsp;
___
### fromArray

<div style="margin-left: 10px;">

▸ `static`  **fromArray**<`IQuatLike`\>(`out: IQuatLike, arr: IWritableArrayLike, ofs: number`) : `IQuatLike`



**`zh`** 数组转四元数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `IQuatLike` | - |
| `arr` | `IWritableArrayLike` | - |
| `ofs` | `number` | Array Start Offset  |


##### Returns `IQuatLike`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:640](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L640)&nbsp;
___
### fromAngleZ

<div style="margin-left: 10px;">

▸ `static`  **fromAngleZ**<`Out`\>(`out: Out, z: number`) : `Out`



**`zh`** 根据 2D 角度（0, 0, z）计算四元数




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | Output quaternion  |
| `z` | `number` | Angle to rotate around Z axis in degrees.  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:534](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L534)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸ `static`  **equals**<`boolean`\>(`a: IQuatLike, b: IQuatLike, epsilon: number`) : `boolean`



**`zh`** 排除浮点数误差的四元数近似等价判断




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IQuatLike` | - |
| `b` | `IQuatLike` | - |
| `epsilon` | `number` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:660](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L660)&nbsp;
___
### dot

<div style="margin-left: 10px;">

▸ `static`  **dot**<`number`\>(`a: Out, b: Out`) : `number`



**`zh`** 四元数点积（数量积）




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L284)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸ `static`  **copy**<`Out`\>(`out: Out, a: QuatLike`) : `Out`



**`zh`** 复制目标四元数




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `QuatLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L58)&nbsp;
___
### conjugate

<div style="margin-left: 10px;">

▸ `static`  **conjugate**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 求共轭四元数，对单位四元数与求逆等价，但更高效




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:380](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L380)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`Quat`\>(`a: Out`) : `Quat`



**`zh`** 获得指定四元数的拷贝




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `Quat`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L50)&nbsp;
___
### calculateW

<div style="margin-left: 10px;">

▸ `static`  **calculateW**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 根据 xyz 分量计算 w 分量，默认已归一化




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L272)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸   **clone**<`Quat`\> : `Quat`



**`zh`** 克隆当前四元数。





##### Returns `Quat`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:714](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L714)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Quat, epsilon: number`) : `boolean`



**`zh`** 判断当前四元数是否在误差范围内与指定向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Quat` | Comparative quaternion  |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:755](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L755)&nbsp;
___
### getEulerAngles

<div style="margin-left: 10px;">

▸   **getEulerAngles**<`IVec3Like`\>(`out: Vec3`) : `IVec3Like`



**`zh`** 将当前四元数转化为欧拉角（x-y-z）并赋值给出口向量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | the output vector  |


##### Returns `IVec3Like`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:777](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L777)&nbsp;
___
### length

<div style="margin-left: 10px;">

▸   **length**<`number`\> : `number`



**`zh`** 求四元数长度





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:809](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L809)&nbsp;
___
### lengthSqr

<div style="margin-left: 10px;">

▸   **lengthSqr**<`number`\> : `number`



**`zh`** 求四元数长度平方





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:817](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L817)&nbsp;
___
### lerp

<div style="margin-left: 10px;">

▸   **lerp**<`this`\>(`to: Quat, ratio: number`) : `this`



**`zh`** 根据指定的插值比率，从当前四元数到目标四元数之间做线性插值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Quat` | The target quaternion  |
| `ratio` | `number` | The interpolation coefficient. The range is [0,1].  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:787](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L787)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸   **set**<`Quat`\>(`other: Quat`) : `Quat`



**`zh`** 设置当前四元数使其与指定四元数相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Quat` | Specified quaternion  |


##### Returns `Quat`

▸   **set**<`Quat`\>(`x: undefined | number, y: undefined | number, z: undefined | number, w: undefined | number`) : `Quat`



**`zh`** 设置当前四元数指定元素值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `undefined \| number` | - |
| `y` | `undefined \| number` | - |
| `z` | `undefined \| number` | - |
| `w` | `undefined \| number` | - |


##### Returns `Quat`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:724](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L724)&nbsp;   [cocos/core/math/quat.ts:731](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L731)&nbsp;   [cocos/core/math/quat.ts:733](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L733)&nbsp;
___
### slerp

<div style="margin-left: 10px;">

▸   **slerp**<`this`\>(`to: Quat, ratio: number`) : `this`



**`zh`** 根据指定的插值比率，从当前四元数到目标四元数之间做球面插值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Quat` | The target quaternion  |
| `ratio` | `number` | The interpolation coefficient. The range is [0,1].  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:801](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L801)&nbsp;
___
### strictEquals

<div style="margin-left: 10px;">

▸   **strictEquals**<`boolean`\>(`other: Quat`) : `boolean`



**`zh`** 判断当前四元数是否与指定四元数相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Quat` | Comparative quaternion  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/quat.ts:768](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/quat.ts#L768)&nbsp;
___
### toString

<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`



**`zh`** 
返回当前值的字符串表示。
本方法的基类版本返回空字符串。




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/value-types/value-type.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/value-types/value-type.ts#L95)&nbsp;
___
<!---->




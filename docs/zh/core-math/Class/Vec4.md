
## Class: Vec4


`extend:`
[ValueType](docs/zh/core-value-types/Class/ValueType.md)










**`zh`** 四维向量。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ONE](#ONE)
- [ **`static`**  ZERO](#ZERO)
- [ w](#w)
- [ x](#x)
- [ y](#y)
- [ z](#z)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  transformQuat](#transformQuat)
- [ **`static`**  transformMat4](#transformMat4)
- [ **`static`**  transformAffine](#transformAffine)
- [ **`static`**  toArray](#toArray)
- [ **`static`**  subtract](#subtract)
- [ **`static`**  strictEquals](#strictEquals)
- [ **`static`**  squaredDistance](#squaredDistance)
- [ **`static`**  set](#set)
- [ **`static`**  scaleAndAdd](#scaleAndAdd)
- [ **`static`**  round](#round)
- [ **`static`**  random](#random)
- [ **`static`**  normalize](#normalize)
- [ **`static`**  negate](#negate)
- [ **`static`**  multiplyScalar](#multiplyScalar)
- [ **`static`**  multiply](#multiply)
- [ **`static`**  min](#min)
- [ **`static`**  max](#max)
- [ **`static`**  lerp](#lerp)
- [ **`static`**  lengthSqr](#lengthSqr)
- [ **`static`**  len](#len)
- [ **`static`**  inverseSafe](#inverseSafe)
- [ **`static`**  inverse](#inverse)
- [ **`static`**  fromArray](#fromArray)
- [ **`static`**  floor](#floor)
- [ **`static`**  equals](#equals)
- [ **`static`**  dot](#dot)
- [ **`static`**  divide](#divide)
- [ **`static`**  distance](#distance)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ **`static`**  ceil](#ceil)
- [ **`static`**  add](#add)
- [ add](#add)
- [ add4f](#add4f)
- [ clampf](#clampf)
- [ clone](#clone)
- [ cross](#cross)
- [ divide](#divide)
- [ divide4f](#divide4f)
- [ dot](#dot)
- [ equals](#equals)
- [ equals4f](#equals4f)
- [ length](#length)
- [ lengthSqr](#lengthSqr)
- [ lerp](#lerp)
- [ multiply](#multiply)
- [ multiply4f](#multiply4f)
- [ multiplyScalar](#multiplyScalar)
- [ negative](#negative)
- [ normalize](#normalize)
- [ set](#set)
- [ strictEquals](#strictEquals)
- [ strictEquals4f](#strictEquals4f)
- [ subtract](#subtract)
- [ subtract4f](#subtract4f)
- [ toString](#toString)
- [ transformMat4](#transformMat4)
</div>

## Properties


### ONE
<div style="margin-left: 10px;">




• `static` **ONE**:
  = `Object.freeze(new Vec4(1, 1, 1, 1))`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L45)&nbsp;


___


### ZERO
<div style="margin-left: 10px;">




• `static` **ZERO**:
  = `Object.freeze(new Vec4(0, 0, 0, 0))`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L44)&nbsp;


___


### w
<div style="margin-left: 10px;">



**`zh`** w 分量。





•  **w**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L506)&nbsp;


___


### x
<div style="margin-left: 10px;">



**`zh`** x 分量。





•  **x**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:488](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L488)&nbsp;


___


### y
<div style="margin-left: 10px;">



**`zh`** y 分量。





•  **y**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:494](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L494)&nbsp;


___


### z
<div style="margin-left: 10px;">



**`zh`** z 分量。





•  **z**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:500](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L500)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Vec4**(`other: Vec4`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Vec4` |
• **new Vec4**(`x: undefined | number, y: undefined | number, z: undefined | number, w: undefined | number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `` |
| `y` | `` |
| `z` | `` |
| `w` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L506)&nbsp;   [cocos/core/math/vec4.ts:508](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L508)&nbsp;   [cocos/core/math/vec4.ts:510](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L510)&nbsp;


---

<!---->
## Methods

### transformQuat

<div style="margin-left: 10px;">

▸ `static`  **transformQuat**<`Out`\>(`out: Out, a: Out, q: QuatLike`) : `Out`



**`zh`** 向量四元数乘法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `q` | `QuatLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:417](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L417)&nbsp;
___
### transformMat4

<div style="margin-left: 10px;">

▸ `static`  **transformMat4**<`Out`\>(`out: Out, a: Out, m: MatLike`) : `Out`



**`zh`** 向量与四维矩阵乘法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `m` | `MatLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L384)&nbsp;
___
### transformAffine

<div style="margin-left: 10px;">

▸ `static`  **transformAffine**<`Out`\>(`out: Out, v: VecLike, m: MatLike`) : `Out`



**`zh`** 向量仿射变换




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `v` | `VecLike` | - |
| `m` | `MatLike` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:400](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L400)&nbsp;
___
### toArray

<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, v: IVec4Like, ofs: number`) : `Out`



**`zh`** 向量转数组



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `v` | `IVec4Like` | - |
| `ofs` | `number` | Array Start Offset  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:444](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L444)&nbsp;
___
### subtract

<div style="margin-left: 10px;">

▸ `static`  **subtract**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`zh`** 逐元素向量减法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L96)&nbsp;
___
### strictEquals

<div style="margin-left: 10px;">

▸ `static`  **strictEquals**<`boolean`\>(`a: Out, b: Out`) : `boolean`



**`zh`** 向量等价判断




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:469](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L469)&nbsp;
___
### squaredDistance

<div style="margin-left: 10px;">

▸ `static`  **squaredDistance**<`number`\>(`a: Out, b: Out`) : `number`



**`zh`** 求两向量的欧氏距离平方




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L228)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, x: number, y: number, z: number, w: number`) : `Out`



**`zh`** 设置向量值




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L72)&nbsp;
___
### scaleAndAdd

<div style="margin-left: 10px;">

▸ `static`  **scaleAndAdd**<`Out`\>(`out: Out, a: Out, b: Out, scale: number`) : `Out`



**`zh`** 逐元素向量乘加: A + B * scale




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `scale` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L204)&nbsp;
___
### round

<div style="margin-left: 10px;">

▸ `static`  **round**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 逐元素向量四舍五入取整




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L180)&nbsp;
___
### random

<div style="margin-left: 10px;">

▸ `static`  **random**<`Out`\>(`out: Out, scale: undefined | number`) : `Out`



**`zh`** 生成一个在单位球体上均匀分布的随机向量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `scale` | `undefined \| number` | vector length  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L366)&nbsp;
___
### normalize

<div style="margin-left: 10px;">

▸ `static`  **normalize**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 归一化向量




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L325)&nbsp;
___
### negate

<div style="margin-left: 10px;">

▸ `static`  **negate**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 逐元素向量取负




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:264](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L264)&nbsp;
___
### multiplyScalar

<div style="margin-left: 10px;">

▸ `static`  **multiplyScalar**<`Out`\>(`out: Out, a: Out, b: number`) : `Out`



**`zh`** 向量标量乘法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L192)&nbsp;
___
### multiply

<div style="margin-left: 10px;">

▸ `static`  **multiply**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`zh`** 逐元素向量乘法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L108)&nbsp;
___
### min

<div style="margin-left: 10px;">

▸ `static`  **min**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`zh`** 逐元素向量最小值




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L156)&nbsp;
___
### max

<div style="margin-left: 10px;">

▸ `static`  **max**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`zh`** 逐元素向量最大值




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L168)&nbsp;
___
### lerp

<div style="margin-left: 10px;">

▸ `static`  **lerp**<`Out`\>(`out: Out, a: Out, b: Out, t: number`) : `Out`



**`zh`** 逐元素向量线性插值： A + t * (B - A)




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `t` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:353](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L353)&nbsp;
___
### lengthSqr

<div style="margin-left: 10px;">

▸ `static`  **lengthSqr**<`number`\>(`a: Out`) : `number`



**`zh`** 求向量长度平方




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:252](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L252)&nbsp;
___
### len

<div style="margin-left: 10px;">

▸ `static`  **len**<`number`\>(`a: Out`) : `number`



**`zh`** 求向量长度




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:240](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L240)&nbsp;
___
### inverseSafe

<div style="margin-left: 10px;">

▸ `static`  **inverseSafe**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 逐元素向量取倒数，接近 0 时返回 0




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L288)&nbsp;
___
### inverse

<div style="margin-left: 10px;">

▸ `static`  **inverse**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 逐元素向量取倒数，接近 0 时返回 Infinity




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L276)&nbsp;
___
### fromArray

<div style="margin-left: 10px;">

▸ `static`  **fromArray**<`Out`\>(`out: Out, arr: IWritableArrayLike, ofs: number`) : `Out`



**`zh`** 数组转向量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `arr` | `IWritableArrayLike` | - |
| `ofs` | `number` | Array Start Offset  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:457](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L457)&nbsp;
___
### floor

<div style="margin-left: 10px;">

▸ `static`  **floor**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 逐元素向量向下取整




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L144)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸ `static`  **equals**<`boolean`\>(`a: Out, b: Out, epsilon: number`) : `boolean`



**`zh`** 排除浮点数误差的向量近似等价判断




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |
| `epsilon` | `number` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L477)&nbsp;
___
### dot

<div style="margin-left: 10px;">

▸ `static`  **dot**<`number`\>(`a: Out, b: Out`) : `number`



**`zh`** 向量点积（数量积）




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:345](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L345)&nbsp;
___
### divide

<div style="margin-left: 10px;">

▸ `static`  **divide**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`zh`** 逐元素向量除法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L120)&nbsp;
___
### distance

<div style="margin-left: 10px;">

▸ `static`  **distance**<`number`\>(`a: Out, b: Out`) : `number`



**`zh`** 求两向量的欧氏距离




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:216](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L216)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸ `static`  **copy**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 复制目标向量




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L60)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`Vec4`\>(`a: Out`) : `Vec4`



**`zh`** 获得指定向量的拷贝




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `Vec4`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L52)&nbsp;
___
### ceil

<div style="margin-left: 10px;">

▸ `static`  **ceil**<`Out`\>(`out: Out, a: Out`) : `Out`



**`zh`** 逐元素向量向上取整




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L132)&nbsp;
___
### add

<div style="margin-left: 10px;">

▸ `static`  **add**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`



**`zh`** 逐元素向量加法




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L84)&nbsp;
___
### add

<div style="margin-left: 10px;">

▸   **add**<`this`\>(`other: Vec4`) : `this`



**`zh`** 向量加法。将当前向量与指定向量的相加



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec4` | specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:670](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L670)&nbsp;
___
### add4f

<div style="margin-left: 10px;">

▸   **add4f**<`this`\>(`x: number, y: number, z: number, w: number`) : `this`



**`zh`** 向量加法。将当前向量与指定分量的向量相加



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |
| `z` | `number` | The z value of specified vector  |
| `w` | `number` | The w value of specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:686](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L686)&nbsp;
___
### clampf

<div style="margin-left: 10px;">

▸   **clampf**<`this`\>(`minInclusive: Vec4, maxInclusive: Vec4`) : `this`



**`zh`** 设置当前向量的值，使其各个分量都处于指定的范围内。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minInclusive` | `Vec4` | Minimum value allowed  |
| `maxInclusive` | `Vec4` | Maximum value allowed  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:657](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L657)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸   **clone**<`Vec4`\> : `Vec4`



**`zh`** 克隆当前向量。





##### Returns `Vec4`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:531](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L531)&nbsp;
___
### cross

<div style="margin-left: 10px;">

▸   **cross**<`this`\>(`vector: Vec4`) : `this`



**`zh`** 向量叉乘。视当前向量和指定向量为三维向量（舍弃 w 分量），将当前向量左叉乘指定向量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `vector` | `Vec4` | - |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:823](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L823)&nbsp;
___
### divide

<div style="margin-left: 10px;">

▸   **divide**<`this`\>(`other: Vec4`) : `this`



**`zh`** 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec4` | specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:772](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L772)&nbsp;
___
### divide4f

<div style="margin-left: 10px;">

▸   **divide4f**<`this`\>(`x: number, y: number, z: number, w: number`) : `this`



**`zh`** 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |
| `z` | `number` | The z value of specified vector  |
| `w` | `number` | The w value of specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:788](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L788)&nbsp;
___
### dot

<div style="margin-left: 10px;">

▸   **dot**<`number`\>(`vector: Vec4`) : `number`



**`zh`** 向量点乘。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `vector` | `Vec4` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:814](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L814)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Vec4, epsilon: number`) : `boolean`



**`zh`** 判断当前向量是否在误差范围内与指定向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec4` | Specified vector  |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L576)&nbsp;
___
### equals4f

<div style="margin-left: 10px;">

▸   **equals4f**<`boolean`\>(`x: number, y: number, z: number, w: number, epsilon: number`) : `boolean`



**`zh`** 判断当前向量是否在误差范围内与指定分量的向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |
| `z` | `number` | The z value of specified vector  |
| `w` | `number` | The w value of specified vector  |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:593](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L593)&nbsp;
___
### length

<div style="margin-left: 10px;">

▸   **length**<`number`\> : `number`



**`zh`** 计算向量的长度（模）。




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:838](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L838)&nbsp;
___
### lengthSqr

<div style="margin-left: 10px;">

▸   **lengthSqr**<`number`\> : `number`



**`zh`** 计算向量长度（模）的平方。




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:851](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L851)&nbsp;
___
### lerp

<div style="margin-left: 10px;">

▸   **lerp**<`this`\>(`to: Vec4, ratio: number`) : `this`



**`zh`** 根据指定的插值比率，从当前向量到目标向量之间做插值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Vec4` | Target vector  |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:629](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L629)&nbsp;
___
### multiply

<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`other: Vec4`) : `this`



**`zh`** 向量乘法。将当前向量乘以指定向量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec4` | specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:742](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L742)&nbsp;
___
### multiply4f

<div style="margin-left: 10px;">

▸   **multiply4f**<`this`\>(`x: number, y: number, z: number, w: number`) : `this`



**`zh`** 向量乘法。将当前向量与指定分量的向量相乘的结果赋值给当前向量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |
| `z` | `number` | The z value of specified vector  |
| `w` | `number` | The w value of specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:759](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L759)&nbsp;
___
### multiplyScalar

<div style="margin-left: 10px;">

▸   **multiplyScalar**<`this`\>(`scalar: number`) : `this`



**`zh`** 向量数乘。将当前向量数乘指定标量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scalar` | `number` | scalar number  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:728](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L728)&nbsp;
___
### negative

<div style="margin-left: 10px;">

▸   **negative**<`this`\> : `this`



**`zh`** 将当前向量的各个分量取反





##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:800](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L800)&nbsp;
___
### normalize

<div style="margin-left: 10px;">

▸   **normalize**<`this`\> : `this`



**`zh`** 将当前向量归一化





##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:863](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L863)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸   **set**<`any`\>(`other: Vec4`) : `any`



**`zh`** 设置当前向量使其与指定向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec4` | Specified vector  |


##### Returns `any`

▸   **set**<`any`\>(`x: undefined | number, y: undefined | number, z: undefined | number, w: undefined | number`) : `any`



**`zh`** 设置当前向量的具体分量值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `undefined \| number` | x value  |
| `y` | `undefined \| number` | y value  |
| `z` | `undefined \| number` | z value  |
| `w` | `undefined \| number` | w value  |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:541](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L541)&nbsp;   [cocos/core/math/vec4.ts:552](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L552)&nbsp;   [cocos/core/math/vec4.ts:554](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L554)&nbsp;
___
### strictEquals

<div style="margin-left: 10px;">

▸   **strictEquals**<`boolean`\>(`other: Vec4`) : `boolean`



**`zh`** 判断当前向量是否与指定向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec4` | specified vector  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:606](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L606)&nbsp;
___
### strictEquals4f

<div style="margin-left: 10px;">

▸   **strictEquals4f**<`boolean`\>(`x: number, y: number, z: number, w: number`) : `boolean`



**`zh`** 判断当前向量是否与指定分量的向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |
| `z` | `number` | The z value of specified vector  |
| `w` | `number` | The w value of specified vector  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:619](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L619)&nbsp;
___
### subtract

<div style="margin-left: 10px;">

▸   **subtract**<`this`\>(`other: Vec4`) : `this`



**`zh`** 向量减法。将当前向量减去指定向量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec4` | specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:699](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L699)&nbsp;
___
### subtract4f

<div style="margin-left: 10px;">

▸   **subtract4f**<`this`\>(`x: number, y: number, z: number, w: number`) : `this`



**`zh`** 向量减法。将当前向量减去指定分量的向量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |
| `z` | `number` | The z value of specified vector  |
| `w` | `number` | The w value of specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:715](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L715)&nbsp;
___
### toString

<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`



**`zh`** 返回当前向量的字符串表示。




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:646](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L646)&nbsp;
___
### transformMat4

<div style="margin-left: 10px;">

▸   **transformMat4**<`this`\>(`matrix: Mat4`) : `this`



**`zh`** 应用四维矩阵变换到当前矩阵



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `matrix` | `Mat4` | matrix to transform with  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:884](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L884)&nbsp;
___
<!---->




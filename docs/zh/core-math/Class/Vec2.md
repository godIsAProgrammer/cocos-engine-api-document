
## Class: Vec2


`extend:`
[ValueType](docs/zh/core-value-types/Class/ValueType.md)










**`zh`** 二维向量。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ONE](#ONE)
- [ **`static`**  ZERO](#ZERO)
- [ x](#x)
- [ y](#y)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  transformMat4](#transformMat4)
- [ **`static`**  transformMat3](#transformMat3)
- [ **`static`**  toArray](#toArray)
- [ **`static`**  subtract](#subtract)
- [ **`static`**  strictEquals](#strictEquals)
- [ **`static`**  str](#str)
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
- [ **`static`**  cross](#cross)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ **`static`**  ceil](#ceil)
- [ **`static`**  angle](#angle)
- [ **`static`**  add](#add)
- [ add](#add)
- [ add2f](#add2f)
- [ angle](#angle)
- [ clampf](#clampf)
- [ clone](#clone)
- [ cross](#cross)
- [ divide](#divide)
- [ divide2f](#divide2f)
- [ dot](#dot)
- [ equals](#equals)
- [ equals2f](#equals2f)
- [ length](#length)
- [ lengthSqr](#lengthSqr)
- [ lerp](#lerp)
- [ multiply](#multiply)
- [ multiply2f](#multiply2f)
- [ multiplyScalar](#multiplyScalar)
- [ negative](#negative)
- [ normalize](#normalize)
- [ project](#project)
- [ rotate](#rotate)
- [ set](#set)
- [ signAngle](#signAngle)
- [ strictEquals](#strictEquals)
- [ strictEquals2f](#strictEquals2f)
- [ subtract](#subtract)
- [ subtract2f](#subtract2f)
- [ toString](#toString)
- [ transformMat4](#transformMat4)
</div>

## Properties


### ONE
<div style="margin-left: 10px;">




• `static` **ONE**:
  = `Object.freeze(new Vec2(1, 1))`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L47)&nbsp;


___


### ZERO
<div style="margin-left: 10px;">




• `static` **ZERO**:
  = `Object.freeze(new Vec2(0, 0))`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L46)&nbsp;


___


### x
<div style="margin-left: 10px;">



**`zh`** x 分量。





•  **x**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:428](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L428)&nbsp;


___


### y
<div style="margin-left: 10px;">



**`zh`** y 分量。





•  **y**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L434)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Vec2**(`other: Vec2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Vec2` |
• **new Vec2**(`x: undefined | number, y: undefined | number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `` |
| `y` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L434)&nbsp;   [cocos/core/math/vec2.ts:436](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L436)&nbsp;   [cocos/core/math/vec2.ts:438](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L438)&nbsp;


---

<!---->
## Methods

### transformMat4

<div style="margin-left: 10px;">

▸ `static`  **transformMat4**<`Out`\>(`out: Out, a: Out, m: IMat4Like`) : `Out`



**`zh`** 向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `m` | `IMat4Like` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L348)&nbsp;
___
### transformMat3

<div style="margin-left: 10px;">

▸ `static`  **transformMat3**<`Out`\>(`out: Out, a: Out, m: IMat3Like`) : `Out`



**`zh`** 向量与三维矩阵乘法，默认向量第三位为 1。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Out` | - |
| `m` | `IMat3Like` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:336](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L336)&nbsp;
___
### toArray

<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, v: IVec2Like, ofs: number`) : `Out`



**`zh`** 向量转数组



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `v` | `IVec2Like` | - |
| `ofs` | `number` | Array Start Offset  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:369](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L369)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L94)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:390](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L390)&nbsp;
___
### str

<div style="margin-left: 10px;">

▸ `static`  **str**<`string`\>(`a: Out`) : `string`



**`zh`** 返回向量的字符串表示




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:360](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L360)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L204)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, x: number, y: number`) : `Out`



**`zh`** 设置向量值




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `x` | `number` | - |
| `y` | `number` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L74)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L184)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L164)&nbsp;
___
### random

<div style="margin-left: 10px;">

▸ `static`  **random**<`Out`\>(`out: Out, scale: undefined | number`) : `Out`



**`zh`** 生成一个在单位圆上均匀分布的随机向量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `scale` | `undefined \| number` | vector length  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L324)&nbsp;
___
### normalize

<div style="margin-left: 10px;">

▸ `static`  **normalize**<`Out`\>(`out: Out, a: Vec2Like`) : `Out`



**`zh`** 归一化向量




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `a` | `Vec2Like` | - |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:277](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L277)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L234)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L174)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L104)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L144)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L154)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L311)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L224)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L214)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L254)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L244)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:380](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L380)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L134)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:398](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L398)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:293](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L293)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L114)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L194)&nbsp;
___
### cross

<div style="margin-left: 10px;">

▸ `static`  **cross**<`Vec3`\>(`out: Vec3, a: Out, b: Out`) : `Vec3`



**`zh`** 向量叉积（向量积），注意二维向量的叉积为与 Z 轴平行的三维向量




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | - |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L301)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L64)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`Vec2`\>(`a: Out`) : `Vec2`



**`zh`** 获得指定向量的拷贝




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L56)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L124)&nbsp;
___
### angle

<div style="margin-left: 10px;">

▸ `static`  **angle**<`number`\>(`a: Out, b: Out`) : `number`



**`zh`** 求两向量夹角弧度




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |
| `b` | `Out` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:411](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L411)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L84)&nbsp;
___
### add

<div style="margin-left: 10px;">

▸   **add**<`this`\>(`other: Vec2`) : `this`



**`zh`** 向量加法。将当前向量与指定向量的相加



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:582](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L582)&nbsp;
___
### add2f

<div style="margin-left: 10px;">

▸   **add2f**<`this`\>(`x: number, y: number`) : `this`



**`zh`** 向量加法。将当前向量与指定分量的向量相加



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:594](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L594)&nbsp;
___
### angle

<div style="margin-left: 10px;">

▸   **angle**<`number`\>(`other: Vec2`) : `number`



**`zh`** 获取当前向量和指定向量之间的角度。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:752](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L752)&nbsp;
___
### clampf

<div style="margin-left: 10px;">

▸   **clampf**<`this`\>(`minInclusive: Vec2, maxInclusive: Vec2`) : `this`



**`zh`** 设置当前向量的值，使其各个分量都处于指定的范围内。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minInclusive` | `Vec2` | Minimum value allowed  |
| `maxInclusive` | `Vec2` | Maximum value allowed  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:571](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L571)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸   **clone**<`Vec2`\> : `Vec2`



**`zh`** 克隆当前向量。





##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L455)&nbsp;
___
### cross

<div style="margin-left: 10px;">

▸   **cross**<`number`\>(`other: Vec2`) : `number`



**`zh`** 向量叉乘。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:708](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L708)&nbsp;
___
### divide

<div style="margin-left: 10px;">

▸   **divide**<`this`\>(`other: Vec2`) : `this`



**`zh`** 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:664](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L664)&nbsp;
___
### divide2f

<div style="margin-left: 10px;">

▸   **divide2f**<`this`\>(`x: number, y: number`) : `this`



**`zh`** 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:676](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L676)&nbsp;
___
### dot

<div style="margin-left: 10px;">

▸   **dot**<`number`\>(`other: Vec2`) : `number`



**`zh`** 向量点乘。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:698](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L698)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Vec2, epsilon: number`) : `boolean`



**`zh`** 判断当前向量是否在误差范围内与指定向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | Specified vector  |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:494](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L494)&nbsp;
___
### equals2f

<div style="margin-left: 10px;">

▸   **equals2f**<`boolean`\>(`x: number, y: number, epsilon: number`) : `boolean`



**`zh`** 判断当前向量是否在误差范围内与指定分量的向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:511](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L511)&nbsp;
___
### length

<div style="margin-left: 10px;">

▸   **length**<`number`\> : `number`



**`zh`** 计算向量的长度（模）。




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:717](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L717)&nbsp;
___
### lengthSqr

<div style="margin-left: 10px;">

▸   **lengthSqr**<`number`\> : `number`



**`zh`** 计算向量长度（模）的平方。




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:726](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L726)&nbsp;
___
### lerp

<div style="margin-left: 10px;">

▸   **lerp**<`this`\>(`to: Vec2, ratio: number`) : `this`



**`zh`** 根据指定的插值比率，从当前向量到目标向量之间做插值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Vec2` | Target vector  |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:556](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L556)&nbsp;
___
### multiply

<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`other: Vec2`) : `this`



**`zh`** 向量乘法。将当前向量乘以与指定向量的结果赋值给当前向量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:640](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L640)&nbsp;
___
### multiply2f

<div style="margin-left: 10px;">

▸   **multiply2f**<`this`\>(`x: number, y: number`) : `this`



**`zh`** 向量乘法。将当前向量与指定分量的向量相乘的结果赋值给当前向量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:653](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L653)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:628](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L628)&nbsp;
___
### negative

<div style="margin-left: 10px;">

▸   **negative**<`this`\> : `this`



**`zh`** 将当前向量的各个分量取反





##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:686](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L686)&nbsp;
___
### normalize

<div style="margin-left: 10px;">

▸   **normalize**<`this`\> : `this`



**`zh`** 将当前向量归一化。





##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:734](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L734)&nbsp;
___
### project

<div style="margin-left: 10px;">

▸   **project**<`this`\>(`other: Vec2`) : `this`



**`zh`** 计算当前向量在指定向量上的投影向量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:800](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L800)&nbsp;
___
### rotate

<div style="margin-left: 10px;">

▸   **rotate**<`this`\>(`radians: number`) : `this`



**`zh`** 将当前向量的旋转



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `radians` | `number` | radius of rotation  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:784](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L784)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸   **set**<`any`\>(`other: Vec2`) : `any`



**`zh`** 设置当前向量使其与指定向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | Specified vector  |


##### Returns `any`

▸   **set**<`any`\>(`x: undefined | number, y: undefined | number`) : `any`



**`zh`** 设置当前向量的具体分量值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `undefined \| number` | x value  |
| `y` | `undefined \| number` | y value  |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L465)&nbsp;   [cocos/core/math/vec2.ts:474](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L474)&nbsp;   [cocos/core/math/vec2.ts:476](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L476)&nbsp;
___
### signAngle

<div style="margin-left: 10px;">

▸   **signAngle**<`number`\>(`other: Vec2`) : `number`



**`zh`** 获取当前向量和指定向量之间的有符号角度。<br/>
有符号角度的取值范围为 (-180, 180]，当前向量可以通过逆时针旋转有符号角度与指定向量同向。<br/>



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:774](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L774)&nbsp;
___
### strictEquals

<div style="margin-left: 10px;">

▸   **strictEquals**<`boolean`\>(`other: Vec2`) : `boolean`



**`zh`** 判断当前向量是否与指定向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:526](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L526)&nbsp;
___
### strictEquals2f

<div style="margin-left: 10px;">

▸   **strictEquals2f**<`boolean`\>(`x: number, y: number`) : `boolean`



**`zh`** 判断当前向量是否与指定分量的向量相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:537](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L537)&nbsp;
___
### subtract

<div style="margin-left: 10px;">

▸   **subtract**<`this`\>(`other: Vec2`) : `this`



**`zh`** 向量减法。将当前向量减去指定向量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:605](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L605)&nbsp;
___
### subtract2f

<div style="margin-left: 10px;">

▸   **subtract2f**<`this`\>(`x: number, y: number`) : `this`



**`zh`** 向量减法。将当前向量减去指定分量的向量



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |
| `y` | `number` | The y value of specified vector  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:617](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L617)&nbsp;
___
### toString

<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`



**`zh`** 返回当前向量的字符串表示。




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:546](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L546)&nbsp;
___
### transformMat4

<div style="margin-left: 10px;">

▸   **transformMat4**<`this`\>(`matrix: Mat4`) : `this`



**`zh`** 将当前向量视为 z 分量为 0、w 分量为 1 的四维向量，<br/>
应用四维矩阵变换到当前矩阵<br/>



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `matrix` | `Mat4` | matrix to transform with  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:813](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L813)&nbsp;
___
<!---->




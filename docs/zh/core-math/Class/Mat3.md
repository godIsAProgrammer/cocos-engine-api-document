
## Class: Mat3


`extend:`
[ValueType](docs/zh/core-value-types/Class/ValueType.md)












**`zh`** 表示三维（3x3）矩阵。



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




**`zh`** 矩阵第 0 列第 0 行的元素。





•  **m00**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:636](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L636)&nbsp;


___


### m01
<div style="margin-left: 10px;">




**`zh`** 矩阵第 0 列第 1 行的元素。





•  **m01**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:642](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L642)&nbsp;


___


### m02
<div style="margin-left: 10px;">




**`zh`** 矩阵第 0 列第 2 行的元素。





•  **m02**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:648](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L648)&nbsp;


___


### m03
<div style="margin-left: 10px;">




**`zh`** 矩阵第 1 列第 0 行的元素。





•  **m03**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:654](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L654)&nbsp;


___


### m04
<div style="margin-left: 10px;">




**`zh`** 矩阵第 1 列第 1 行的元素。





•  **m04**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:660](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L660)&nbsp;


___


### m05
<div style="margin-left: 10px;">




**`zh`** 矩阵第 1 列第 2 行的元素。





•  **m05**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:666](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L666)&nbsp;


___


### m06
<div style="margin-left: 10px;">




**`zh`** 矩阵第 2 列第 0 行的元素。





•  **m06**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:672](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L672)&nbsp;


___


### m07
<div style="margin-left: 10px;">




**`zh`** 矩阵第 2 列第 1 行的元素。





•  **m07**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:678](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L678)&nbsp;


___


### m08
<div style="margin-left: 10px;">




**`zh`** 矩阵第 2 列第 2 行的元素。





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





</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:684](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L684)&nbsp;   [cocos/core/math/mat3.ts:686](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L686)&nbsp;   [cocos/core/math/mat3.ts:691](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L691)&nbsp;


---

<!---->
## Methods

### transpose
<div style="margin-left: 10px;">

▸ `static`  **transpose**<`Out`\>(`out: Out, a: Out`) : `Out`




**`zh`** 转置矩阵





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L113)&nbsp;
___
### transform
<div style="margin-left: 10px;">

▸ `static`  **transform**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`




**`zh`** 在给定矩阵变换基础上加入变换





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:246](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L246)&nbsp;
___
### toArray
<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, m: IMat3Like, ofs: number`) : `Out`




**`zh`** 矩阵转数组




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `IMat3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ofs` | `number` | Array Start Offset  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:505](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L505)&nbsp;
___
### subtract
<div style="margin-left: 10px;">

▸ `static`  **subtract**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`zh`** 逐元素矩阵减法





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:557](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L557)&nbsp;
___
### strictEquals
<div style="margin-left: 10px;">

▸ `static`  **strictEquals**<`boolean`\>(`a: Out, b: Out`) : `boolean`




**`zh`** 矩阵等价判断





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:608](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L608)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number`) : `Out`




**`zh`** 设置矩阵值





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
| `m10` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m11` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m12` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m20` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m21` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m22` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L80)&nbsp;
___
### scale
<div style="margin-left: 10px;">

▸ `static`  **scale**<`Out`\>(`out: Out, a: Out, v: VecLike`) : `Out`




**`zh`** 在给定矩阵变换基础上加入新缩放变换





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L270)&nbsp;
___
### rotate
<div style="margin-left: 10px;">

▸ `static`  **rotate**<`Out`\>(`out: Out, a: Out, rad: number`) : `Out`




**`zh`** 在给定矩阵变换基础上加入新旋转变换




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
| `rad` | `number` | radius of rotation  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L292)&nbsp;
___
### multiplyScalarAndAdd
<div style="margin-left: 10px;">

▸ `static`  **multiplyScalarAndAdd**<`Out`\>(`out: Out, a: Out, b: Out, scale: number`) : `Out`




**`zh`** 逐元素矩阵标量乘加: A + B * scale





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:591](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L591)&nbsp;
___
### multiplyScalar
<div style="margin-left: 10px;">

▸ `static`  **multiplyScalar**<`Out`\>(`out: Out, a: Out, b: number`) : `Out`




**`zh`** 矩阵标量乘法





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L574)&nbsp;
___
### multiplyMat4
<div style="margin-left: 10px;">

▸ `static`  **multiplyMat4**<`Out`\>(`out: Out, a: Out, b: IMat4Like`) : `Out`




**`zh`** 取四阶矩阵的前三阶，与三阶矩阵相乘





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
| `b` | `IMat4Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L219)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸ `static`  **multiply**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`zh`** 矩阵乘法





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L192)&nbsp;
___
### invert
<div style="margin-left: 10px;">

▸ `static`  **invert**<`Out`\>(`out: Out, a: Out`) : `Out`




**`zh`** 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L144)&nbsp;
___
### inverseTransposeMat4
<div style="margin-left: 10px;">

▸ `static`  **inverseTransposeMat4**(`out: Out, a: IMat4Like`)




**`zh`** 计算指定四维矩阵的逆转置三维矩阵





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IMat4Like` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:458](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L458)&nbsp;
___
### identity
<div style="margin-left: 10px;">

▸ `static`  **identity**<`Out`\>(`out: Out`) : `Out`




**`zh`** 将目标赋值为单位矩阵





<!---->
<!--    #### Returns `Out` -->
<!---->

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




**`zh`** 根据视口前方向和上方向计算矩阵




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `view` | `VecLike` | The view direction, it`s must be normalized.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `up` | `Vec3` | The view up direction, it`s must be normalized, default value is (0, 1, 0).  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:337](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L337)&nbsp;
___
### fromTranslation
<div style="margin-left: 10px;">

▸ `static`  **fromTranslation**<`Out`\>(`out: Out, v: VecLike`) : `Out`




**`zh`** 计算位移矩阵





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L366)&nbsp;
___
### fromScaling
<div style="margin-left: 10px;">

▸ `static`  **fromScaling**<`Out`\>(`out: Out, v: VecLike`) : `Out`




**`zh`** 计算缩放矩阵





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:383](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L383)&nbsp;
___
### fromRotation
<div style="margin-left: 10px;">

▸ `static`  **fromRotation**<`Out`\>(`out: Out, rad: number`) : `Out`




**`zh`** 计算旋转矩阵





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:402](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L402)&nbsp;
___
### fromQuat
<div style="margin-left: 10px;">

▸ `static`  **fromQuat**<`Out`\>(`out: Out, q: IQuatLike`) : `Out`




**`zh`** 根据四元数旋转信息计算矩阵





<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `IQuatLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:423](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L423)&nbsp;
___
### fromMat4
<div style="margin-left: 10px;">

▸ `static`  **fromMat4**<`Out`\>(`out: Out, a: IMat4Like`) : `Out`




**`zh`** 取四阶矩阵的前三阶





<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IMat4Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L318)&nbsp;
___
### fromArray
<div style="margin-left: 10px;">

▸ `static`  **fromArray**<`Out`\>(`out: Out, arr: IWritableArrayLike, ofs: number`) : `Out`




**`zh`** 数组转矩阵




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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:523](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L523)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸ `static`  **equals**<`boolean`\>(`a: Out, b: Out, epsilon: number`) : `boolean`




**`zh`** 排除浮点数误差的矩阵近似等价判断





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L618)&nbsp;
___
### determinant
<div style="margin-left: 10px;">

▸ `static`  **determinant**<`number`\>(`a: Out`) : `number`




**`zh`** 矩阵行列式





<!---->
<!--    #### Returns `number` -->
<!---->

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




**`zh`** 复制目标矩阵





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L63)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Mat3`\>(`a: Out`) : `Mat3`




**`zh`** 获得指定矩阵的拷贝





<!---->
<!--    #### Returns `Mat3` -->
<!---->

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




**`zh`** 逐元素矩阵加法





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

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:540](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L540)&nbsp;
___
### add
<div style="margin-left: 10px;">

▸   **add**<`this`\>(`mat: Mat3`) : `this`




**`zh`** 矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`zh`** 克隆当前矩阵。





<!---->
<!--    #### Returns `Mat3` -->
<!---->


##### Returns `Mat3`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:714](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L714)&nbsp;
___
### determinant
<div style="margin-left: 10px;">

▸   **determinant**<`number`\> : `number`




**`zh`** 计算当前矩阵的行列式。




<!---->
<!--    #### Returns `number` 当前矩阵的行列式。
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:874](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L874)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Mat3, epsilon: number`) : `boolean`




**`zh`** 判断当前矩阵是否在误差范围内与指定矩阵相等。




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x27; when the elements of both matrices are equal; otherwise returns &#x60;false&#x27;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat3` | Comparative matrix  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:762](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L762)&nbsp;
___
### fromQuat
<div style="margin-left: 10px;">

▸   **fromQuat**<`this`\>(`q: Quat`) : `this`




**`zh`** 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。




<!---->
<!--    #### Returns `this` this
-->
<!---->

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




**`zh`** 将当前矩阵设为单位矩阵。




<!---->
<!--    #### Returns `this` &#x60;this&#x60;
-->
<!---->


##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:807](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L807)&nbsp;
___
### invert
<div style="margin-left: 10px;">

▸   **invert**<`this`\> : `this`




**`zh`** 计算当前矩阵的逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。





<!---->
<!--    #### Returns `this` -->
<!---->


##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:839](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L839)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`mat: Mat3`) : `this`




**`zh`** 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`zh`** 矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`zh`** 将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`zh`** 将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`zh`** 设置当前矩阵使其与指定矩阵相等。




<!---->
<!--    #### Returns `any` this
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Mat3` | Specified matrix  |



##### Returns `any`


▸   **set**<`any`\>(`m00: undefined | number, m01: undefined | number, m02: undefined | number, m03: undefined | number, m04: undefined | number, m05: undefined | number, m06: undefined | number, m07: undefined | number, m08: undefined | number`) : `any`




**`zh`** 设置当前矩阵指定元素值。




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



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:729](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L729)&nbsp;   [cocos/core/math/mat3.ts:736](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L736)&nbsp;   [cocos/core/math/mat3.ts:740](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L740)&nbsp;
___
### strictEquals
<div style="margin-left: 10px;">

▸   **strictEquals**<`boolean`\>(`other: Mat3`) : `boolean`




**`zh`** 判断当前矩阵是否与指定矩阵相等。




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x27; when the elements of both matrices are equal; otherwise returns &#x60;false&#x27;.
-->
<!---->

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




**`zh`** 计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`zh`** 返回当前矩阵的字符串表示。




<!---->
<!--    #### Returns `string` The string representation of this matrix
-->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:793](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L793)&nbsp;
___
### transpose
<div style="margin-left: 10px;">

▸   **transpose**<`this`\> : `this`




**`zh`** 计算当前矩阵的转置矩阵。





<!---->
<!--    #### Returns `this` -->
<!---->


##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/mat3.ts:824](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/mat3.ts#L824)&nbsp;
___
<!---->




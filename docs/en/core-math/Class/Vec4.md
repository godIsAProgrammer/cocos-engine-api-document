
## Class: Vec4


`extend:`
[ValueType](docs/en/core-value-types/Class/ValueType.md)












**`en`** Representation of four-dimensional vectors.


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




**`en`** w component.




•  **w**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L506)&nbsp;


___


### x
<div style="margin-left: 10px;">




**`en`** x component.




•  **x**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:488](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L488)&nbsp;


___


### y
<div style="margin-left: 10px;">




**`en`** y component.




•  **y**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:494](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L494)&nbsp;


___


### z
<div style="margin-left: 10px;">




**`en`** z component.




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





| Name | Type |
| :------ | :------ |
| `y` | `` |





| Name | Type |
| :------ | :------ |
| `z` | `` |





| Name | Type |
| :------ | :------ |
| `w` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L506)&nbsp;   [cocos/core/math/vec4.ts:508](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L508)&nbsp;   [cocos/core/math/vec4.ts:510](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L510)&nbsp;


---

<!---->
## Methods

### transformQuat
<div style="margin-left: 10px;">

▸ `static`  **transformQuat**<`Out`\>(`out: Out, a: Out, q: QuatLike`) : `Out`




**`en`** Vector quaternion multiplication




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
| `q` | `QuatLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:417](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L417)&nbsp;
___
### transformMat4
<div style="margin-left: 10px;">

▸ `static`  **transformMat4**<`Out`\>(`out: Out, a: Out, m: MatLike`) : `Out`




**`en`** Vector and fourth order matrix multiplication




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
| `m` | `MatLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L384)&nbsp;
___
### transformAffine
<div style="margin-left: 10px;">

▸ `static`  **transformAffine**<`Out`\>(`out: Out, v: VecLike, m: MatLike`) : `Out`




**`en`** Transform the vector with the given affine transformation




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

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `MatLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:400](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L400)&nbsp;
___
### toArray
<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, v: IVec4Like, ofs: number`) : `Out`




**`en`** Converts the given vector to an array




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `IVec4Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ofs` | `number` | Array Start Offset  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:444](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L444)&nbsp;
___
### subtract
<div style="margin-left: 10px;">

▸ `static`  **subtract**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Element-wise vector subtraction and save the results to out vector object




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L96)&nbsp;
___
### strictEquals
<div style="margin-left: 10px;">

▸ `static`  **strictEquals**<`boolean`\>(`a: Out, b: Out`) : `boolean`




**`en`** Check the equality of the two given vectors




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:469](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L469)&nbsp;
___
### squaredDistance
<div style="margin-left: 10px;">

▸ `static`  **squaredDistance**<`number`\>(`a: Out, b: Out`) : `number`




**`en`** Calculates the squared euclidean distance of two vectors




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L228)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, x: number, y: number, z: number, w: number`) : `Out`




**`en`** Sets the out vector with the given x, y, z and w values




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L72)&nbsp;
___
### scaleAndAdd
<div style="margin-left: 10px;">

▸ `static`  **scaleAndAdd**<`Out`\>(`out: Out, a: Out, b: Out, scale: number`) : `Out`




**`en`** Element-wise multiplication and addition with the equation: a + b * scale




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L204)&nbsp;
___
### round
<div style="margin-left: 10px;">

▸ `static`  **round**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Calculates element-wise round results and save to the out vector




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L180)&nbsp;
___
### random
<div style="margin-left: 10px;">

▸ `static`  **random**<`Out`\>(`out: Out, scale: undefined | number`) : `Out`




**`en`** Generates a uniformly distributed random vector points from center to the surface of the unit sphere




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `undefined \| number` | vector length  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L366)&nbsp;
___
### normalize
<div style="margin-left: 10px;">

▸ `static`  **normalize**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Sets the normalized vector to the out vector




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L325)&nbsp;
___
### negate
<div style="margin-left: 10px;">

▸ `static`  **negate**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Sets each element to its negative value




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:264](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L264)&nbsp;
___
### multiplyScalar
<div style="margin-left: 10px;">

▸ `static`  **multiplyScalar**<`Out`\>(`out: Out, a: Out, b: number`) : `Out`




**`en`** Vector scalar multiplication and save the results to out vector object




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L192)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸ `static`  **multiply**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Element-wise vector multiplication and save the results to out vector object




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L108)&nbsp;
___
### min
<div style="margin-left: 10px;">

▸ `static`  **min**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Calculates the minimum values by elements of the vector and save the results to the out vector




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L156)&nbsp;
___
### max
<div style="margin-left: 10px;">

▸ `static`  **max**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Calculates the maximum values by elements of the vector and save the results to the out vector




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L168)&nbsp;
___
### lerp
<div style="margin-left: 10px;">

▸ `static`  **lerp**<`Out`\>(`out: Out, a: Out, b: Out, t: number`) : `Out`




**`en`** Calculates the linear interpolation between two vectors with a given ratio




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
| `t` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:353](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L353)&nbsp;
___
### lengthSqr
<div style="margin-left: 10px;">

▸ `static`  **lengthSqr**<`number`\>(`a: Out`) : `number`




**`en`** Calculates the squared length of the vector




<!---->
<!--    #### Returns `number` -->
<!---->

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




**`en`** Calculates the length of the vector




<!---->
<!--    #### Returns `number` -->
<!---->

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




**`en`** Sets each element to its inverse value, zero value will remain zero




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L288)&nbsp;
___
### inverse
<div style="margin-left: 10px;">

▸ `static`  **inverse**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Sets each element to its inverse value, zero value will become Infinity




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L276)&nbsp;
___
### fromArray
<div style="margin-left: 10px;">

▸ `static`  **fromArray**<`Out`\>(`out: Out, arr: IWritableArrayLike, ofs: number`) : `Out`




**`en`** Converts the given array to a vector




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:457](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L457)&nbsp;
___
### floor
<div style="margin-left: 10px;">

▸ `static`  **floor**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Element-wise rounds down of the current vector and save the results to the out vector




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L144)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸ `static`  **equals**<`boolean`\>(`a: Out, b: Out, epsilon: number`) : `boolean`




**`en`** Check whether the two given vectors are approximately equivalent




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L477)&nbsp;
___
### dot
<div style="margin-left: 10px;">

▸ `static`  **dot**<`number`\>(`a: Out, b: Out`) : `number`




**`en`** Calculates the dot product of the vector




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:345](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L345)&nbsp;
___
### divide
<div style="margin-left: 10px;">

▸ `static`  **divide**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Element-wise vector division and save the results to out vector object




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L120)&nbsp;
___
### distance
<div style="margin-left: 10px;">

▸ `static`  **distance**<`number`\>(`a: Out, b: Out`) : `number`




**`en`** Calculates the euclidean distance of two vectors




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:216](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L216)&nbsp;
___
### copy
<div style="margin-left: 10px;">

▸ `static`  **copy**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Copy the target vector and save the results to out vector object




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L60)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Vec4`\>(`a: Out`) : `Vec4`




**`en`** Obtains a clone of the given vector object




<!---->
<!--    #### Returns `Vec4` -->
<!---->

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




**`en`** Rounds up by elements of the vector and save the results to out vector object




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L132)&nbsp;
___
### add
<div style="margin-left: 10px;">

▸ `static`  **add**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Element-wise vector addition and save the results to out vector object




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

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L84)&nbsp;
___
### add
<div style="margin-left: 10px;">

▸   **add**<`this`\>(`other: Vec4`) : `this`




**`en`** Adds the current vector with another one and return this




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`en`** Adds the current vector with another one and return this




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | The y value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | The z value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | The w value of specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:686](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L686)&nbsp;
___
### clampf
<div style="margin-left: 10px;">

▸   **clampf**<`this`\>(`minInclusive: Vec4, maxInclusive: Vec4`) : `this`




**`en`** Clamp the vector between minInclusive and maxInclusive.




<!---->
<!--    #### Returns `this` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minInclusive` | `Vec4` | Minimum value allowed  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `maxInclusive` | `Vec4` | Maximum value allowed  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:657](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L657)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸   **clone**<`Vec4`\> : `Vec4`




**`en`** clone the current Vec4 value.




<!---->
<!--    #### Returns `Vec4` -->
<!---->


##### Returns `Vec4`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:531](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L531)&nbsp;
___
### cross
<div style="margin-left: 10px;">

▸   **cross**<`this`\>(`vector: Vec4`) : `this`




**`en`** Calculates the cross product with another vector.




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`en`** Element-wisely divides this vector with another one, and return this.




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`en`** Element-wisely divides this vector with another one, and return this.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | The y value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | The z value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | The w value of specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:788](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L788)&nbsp;
___
### dot
<div style="margin-left: 10px;">

▸   **dot**<`number`\>(`vector: Vec4`) : `number`




**`en`** Calculates the dot product with another vector




<!---->
<!--    #### Returns `number` 当前向量与指定向量点乘的结果。
-->
<!---->

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




**`en`** Check whether the vector approximately equals another one.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x60; when the components of both vectors are equal within the specified range of error; otherwise it returns &#x60;false&#x60;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec4` | Specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L576)&nbsp;
___
### equals4f
<div style="margin-left: 10px;">

▸   **equals4f**<`boolean`\>(`x: number, y: number, z: number, w: number, epsilon: number`) : `boolean`




**`en`** Check whether the vector approximately equals another one.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x60; when the components of both vectors are equal within the specified range of error; otherwise it returns &#x60;false&#x60;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | The y value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | The z value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | The w value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:593](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L593)&nbsp;
___
### length
<div style="margin-left: 10px;">

▸   **length**<`number`\> : `number`




**`en`** Returns the length of this vector.




<!---->
<!--    #### Returns `number` Length of vector
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:838](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L838)&nbsp;
___
### lengthSqr
<div style="margin-left: 10px;">

▸   **lengthSqr**<`number`\> : `number`




**`en`** Returns the squared length of this vector.




<!---->
<!--    #### Returns `number` the squared length of this vector
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:851](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L851)&nbsp;
___
### lerp
<div style="margin-left: 10px;">

▸   **lerp**<`this`\>(`to: Vec4, ratio: number`) : `this`




**`en`** Calculate linear interpolation result between this vector and another one with given ratio.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Vec4` | Target vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:629](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L629)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`other: Vec4`) : `this`




**`en`** Multiplies the current vector with another one and return this




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`en`** Multiplies the current vector with another one and return this




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | The y value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | The z value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | The w value of specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:759](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L759)&nbsp;
___
### multiplyScalar
<div style="margin-left: 10px;">

▸   **multiplyScalar**<`this`\>(`scalar: number`) : `this`




**`en`** Multiplies the current vector with a number, and returns this.




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`en`** Sets each component of this vector with its negative value




<!---->
<!--    #### Returns `this` -->
<!---->


##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:800](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L800)&nbsp;
___
### normalize
<div style="margin-left: 10px;">

▸   **normalize**<`this`\> : `this`




**`en`** Normalize the current vector.




<!---->
<!--    #### Returns `this` -->
<!---->


##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:863](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L863)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸   **set**<`any`\>(`other: Vec4`) : `any`




**`en`** Set the current vector value with the given vector.




<!---->
<!--    #### Returns `any` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec4` | Specified vector  |



##### Returns `any`


▸   **set**<`any`\>(`x: undefined | number, y: undefined | number, z: undefined | number, w: undefined | number`) : `any`




**`en`** Set the value of each component of the current vector.




<!---->
<!--    #### Returns `any` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `undefined \| number` | x value  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `undefined \| number` | y value  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `undefined \| number` | z value  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `undefined \| number` | w value  |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:541](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L541)&nbsp;   [cocos/core/math/vec4.ts:552](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L552)&nbsp;   [cocos/core/math/vec4.ts:554](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L554)&nbsp;
___
### strictEquals
<div style="margin-left: 10px;">

▸   **strictEquals**<`boolean`\>(`other: Vec4`) : `boolean`




**`en`** Check whether the current vector strictly equals another Vec4.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x60; when the components of both vectors are equal within the specified range of error; otherwise it returns &#x60;false&#x60;.
-->
<!---->

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




**`en`** Check whether the current vector strictly equals another Vec4.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x60; when the components of both vectors are equal within the specified range of error; otherwise it returns &#x60;false&#x60;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | The y value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | The z value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | The w value of specified vector  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:619](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L619)&nbsp;
___
### subtract
<div style="margin-left: 10px;">

▸   **subtract**<`this`\>(`other: Vec4`) : `this`




**`en`** Subtracts one vector from this, and returns this.




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`en`** Subtracts one vector from this, and returns this.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The x value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | The y value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | The z value of specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | The w value of specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:715](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L715)&nbsp;
___
### toString
<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`




**`en`** Return the information of the vector in string




<!---->
<!--    #### Returns `string` The string with vector information
-->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:646](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L646)&nbsp;
___
### transformMat4
<div style="margin-left: 10px;">

▸   **transformMat4**<`this`\>(`matrix: Mat4`) : `this`




**`en`** Transforms the vec4 with a mat4




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `matrix` | `Mat4` | matrix to transform with  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec4.ts:884](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec4.ts#L884)&nbsp;
___
<!---->




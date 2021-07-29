
## Class: Vec3


`extend:`
[ValueType](docs/en/core-value-types/Class/ValueType.md)












**`en`** Representation of 3D vectors and points.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  FORWARD](#FORWARD)
- [ **`static`**  ONE](#ONE)
- [ **`static`**  RIGHT](#RIGHT)
- [ **`static`**  UP](#UP)
- [ **`static`**  ZERO](#ZERO)
- [ x](#x)
- [ y](#y)
- [ z](#z)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  zero](#zero)
- [ **`static`**  transformRTS](#transformRTS)
- [ **`static`**  transformQuat](#transformQuat)
- [ **`static`**  transformMat4Normal](#transformMat4Normal)
- [ **`static`**  transformMat4](#transformMat4)
- [ **`static`**  transformMat3](#transformMat3)
- [ **`static`**  transformInverseRTS](#transformInverseRTS)
- [ **`static`**  transformAffine](#transformAffine)
- [ **`static`**  toArray](#toArray)
- [ **`static`**  subtract](#subtract)
- [ **`static`**  strictEquals](#strictEquals)
- [ **`static`**  squaredDistance](#squaredDistance)
- [ **`static`**  set](#set)
- [ **`static`**  scaleAndAdd](#scaleAndAdd)
- [ **`static`**  round](#round)
- [ **`static`**  rotateZ](#rotateZ)
- [ **`static`**  rotateY](#rotateY)
- [ **`static`**  rotateX](#rotateX)
- [ **`static`**  random](#random)
- [ **`static`**  projectOnPlane](#projectOnPlane)
- [ **`static`**  project](#project)
- [ **`static`**  normalize](#normalize)
- [ **`static`**  negate](#negate)
- [ **`static`**  multiplyScalar](#multiplyScalar)
- [ **`static`**  multiply](#multiply)
- [ **`static`**  min](#min)
- [ **`static`**  max](#max)
- [ **`static`**  lerp](#lerp)
- [ **`static`**  lengthSqr](#lengthSqr)
- [ **`static`**  len](#len)
- [ **`static`**  invertSafe](#invertSafe)
- [ **`static`**  invert](#invert)
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
- [ add3f](#add3f)
- [ clampf](#clampf)
- [ clone](#clone)
- [ cross](#cross)
- [ divide](#divide)
- [ divide3f](#divide3f)
- [ dot](#dot)
- [ equals](#equals)
- [ equals3f](#equals3f)
- [ length](#length)
- [ lengthSqr](#lengthSqr)
- [ lerp](#lerp)
- [ multiply](#multiply)
- [ multiply3f](#multiply3f)
- [ multiplyScalar](#multiplyScalar)
- [ negative](#negative)
- [ normalize](#normalize)
- [ set](#set)
- [ strictEquals](#strictEquals)
- [ strictEquals3f](#strictEquals3f)
- [ subtract](#subtract)
- [ subtract3f](#subtract3f)
- [ toString](#toString)
- [ transformMat4](#transformMat4)
</div>

## Properties


### FORWARD
<div style="margin-left: 10px;">




• `static` **FORWARD**:
  = `Object.freeze(new Vec3(0, 0, -1))`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L49)&nbsp;


___


### ONE
<div style="margin-left: 10px;">




• `static` **ONE**:
  = `Object.freeze(new Vec3(1, 1, 1))`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L51)&nbsp;


___


### RIGHT
<div style="margin-left: 10px;">




• `static` **RIGHT**:
  = `Object.freeze(new Vec3(1, 0, 0))`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L47)&nbsp;


___


### UP
<div style="margin-left: 10px;">




• `static` **UP**:
  = `Object.freeze(new Vec3(0, 1, 0))`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L48)&nbsp;


___


### ZERO
<div style="margin-left: 10px;">




• `static` **ZERO**:
  = `Object.freeze(new Vec3(0, 0, 0))`
</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L50)&nbsp;


___


### x
<div style="margin-left: 10px;">




**`en`** x component.




•  **x**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:677](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L677)&nbsp;


___


### y
<div style="margin-left: 10px;">




**`en`** y component.




•  **y**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:683](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L683)&nbsp;


___


### z
<div style="margin-left: 10px;">




**`en`** z component.




•  **z**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:689](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L689)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Vec3**(`v: Vec3`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `v` | `Vec3` |





• **new Vec3**(`x: undefined | number, y: undefined | number, z: undefined | number`)

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





</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:689](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L689)&nbsp;   [cocos/core/math/vec3.ts:691](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L691)&nbsp;   [cocos/core/math/vec3.ts:693](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L693)&nbsp;


---

<!---->
## Methods

### zero
<div style="margin-left: 10px;">

▸ `static`  **zero**<`Out`\>(`out: Out`) : `Out`




**`en`** return a Vec3 object with x = 0, y = 0, z = 0.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L58)&nbsp;
___
### transformRTS
<div style="margin-left: 10px;">

▸ `static`  **transformRTS**<`Out`\>(`out: Out, a: IVec3Like, r: IQuatLike, t: IVec3Like, s: IVec3Like`) : `Out`




**`en`** Transforms the current vector with given scale, rotation and translation in order




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `r` | `IQuatLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `s` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L465)&nbsp;
___
### transformQuat
<div style="margin-left: 10px;">

▸ `static`  **transformQuat**<`Out`\>(`out: Out, a: IVec3Like, q: IQuatLike`) : `Out`




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
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `q` | `IQuatLike` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:445](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L445)&nbsp;
___
### transformMat4Normal
<div style="margin-left: 10px;">

▸ `static`  **transformMat4Normal**<`Out`\>(`out: Out, a: IVec3Like, m: IMat4Like`) : `Out`




**`en`** Vector and fourth order matrix multiplication, will complete the vector with a fourth element as one




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `IMat4Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L401)&nbsp;
___
### transformMat4
<div style="margin-left: 10px;">

▸ `static`  **transformMat4**<`Out`\>(`out: Out, a: IVec3Like, m: IMat4Like`) : `Out`




**`en`** Vector and fourth order matrix multiplication, will complete the vector with a fourth value as one




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `IMat4Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L385)&nbsp;
___
### transformMat3
<div style="margin-left: 10px;">

▸ `static`  **transformMat3**<`Out`\>(`out: Out, a: IVec3Like, m: IMat3Like`) : `Out`




**`en`** Vector and third order matrix multiplication




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `IMat3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:417](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L417)&nbsp;
___
### transformInverseRTS
<div style="margin-left: 10px;">

▸ `static`  **transformInverseRTS**<`Out`\>(`out: Out, a: IVec3Like, r: IQuatLike, t: IVec3Like, s: IVec3Like`) : `Out`




**`en`** Transforms the current vector with given scale, rotation and translation in reverse order




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `r` | `IQuatLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `s` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:483](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L483)&nbsp;
___
### transformAffine
<div style="margin-left: 10px;">

▸ `static`  **transformAffine**<`Out`\>(`out: Out, v: IVec3Like, m: IMat4Like`) : `Out`




**`en`** Affine transformation vector




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `IMat4Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:431](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L431)&nbsp;
___
### toArray
<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, v: IVec3Like, ofs: number`) : `Out`




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
| `v` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ofs` | `number` | Array Start Offset  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:586](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L586)&nbsp;
___
### subtract
<div style="margin-left: 10px;">

▸ `static`  **subtract**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L110)&nbsp;
___
### strictEquals
<div style="margin-left: 10px;">

▸ `static`  **strictEquals**<`boolean`\>(`a: IVec3Like, b: IVec3Like`) : `boolean`




**`en`** Check the equality of the two given vectors




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:610](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L610)&nbsp;
___
### squaredDistance
<div style="margin-left: 10px;">

▸ `static`  **squaredDistance**<`number`\>(`a: IVec3Like, b: IVec3Like`) : `number`




**`en`** Calculates the squared euclidean distance of two vectors




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L231)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, x: number, y: number, z: number`) : `Out`




**`en`** Sets the out vector with the given x, y and z values




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



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L88)&nbsp;
___
### scaleAndAdd
<div style="margin-left: 10px;">

▸ `static`  **scaleAndAdd**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like, scale: number`) : `Out`




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
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:209](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L209)&nbsp;
___
### round
<div style="margin-left: 10px;">

▸ `static`  **round**<`Out`\>(`out: Out, a: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L187)&nbsp;
___
### rotateZ
<div style="margin-left: 10px;">

▸ `static`  **rotateZ**<`Out`\>(`out: Out, v: IVec3Like, o: IVec3Like, a: number`) : `Out`




**`en`** Rotates the vector with specified angle around Z axis




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `IVec3Like` | rotation vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `o` | `IVec3Like` | center of rotation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `number` | radius of rotation  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:560](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L560)&nbsp;
___
### rotateY
<div style="margin-left: 10px;">

▸ `static`  **rotateY**<`Out`\>(`out: Out, v: IVec3Like, o: IVec3Like, a: number`) : `Out`




**`en`** Rotates the vector with specified angle around Y axis




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `IVec3Like` | rotation vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `o` | `IVec3Like` | center of rotation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `number` | radius of rotation  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:532](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L532)&nbsp;
___
### rotateX
<div style="margin-left: 10px;">

▸ `static`  **rotateX**<`Out`\>(`out: Out, v: IVec3Like, o: IVec3Like, a: number`) : `Out`




**`en`** Rotates the vector with specified angle around X axis




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `IVec3Like` | rotation vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `o` | `IVec3Like` | center of rotation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `number` | radius of rotation  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:504](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L504)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:368](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L368)&nbsp;
___
### projectOnPlane
<div style="margin-left: 10px;">

▸ `static`  **projectOnPlane**<`Out`\>(`out: Out, a: IVec3Like, n: IVec3Like`) : `Out`




**`en`** Calculates the projection vector on the specified plane




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | projection vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `n` | `IVec3Like` | the normal line of specified plane  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:654](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L654)&nbsp;
___
### project
<div style="margin-left: 10px;">

▸ `static`  **project**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like`) : `Out`




**`en`** Calculates the projection on the specified vector




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | projection vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:664](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L664)&nbsp;
___
### normalize
<div style="margin-left: 10px;">

▸ `static`  **normalize**<`Out`\>(`out: Out, a: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:316](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L316)&nbsp;
___
### negate
<div style="margin-left: 10px;">

▸ `static`  **negate**<`Out`\>(`out: Out, a: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:264](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L264)&nbsp;
___
### multiplyScalar
<div style="margin-left: 10px;">

▸ `static`  **multiplyScalar**<`Out`\>(`out: Out, a: Vec3Like, b: number`) : `Out`




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
| `a` | `Vec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L198)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸ `static`  **multiply**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L121)&nbsp;
___
### min
<div style="margin-left: 10px;">

▸ `static`  **min**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like`) : `Out`




**`en`** Calculates element-wise minimum values and save to the out vector




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:165](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L165)&nbsp;
___
### max
<div style="margin-left: 10px;">

▸ `static`  **max**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like`) : `Out`




**`en`** Calculates element-wise maximum values and save to the out vector




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L176)&nbsp;
___
### lerp
<div style="margin-left: 10px;">

▸ `static`  **lerp**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like, t: number`) : `Out`




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
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:356](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L356)&nbsp;
___
### lengthSqr
<div style="margin-left: 10px;">

▸ `static`  **lengthSqr**<`number`\>(`a: IVec3Like`) : `number`




**`en`** Calculates the squared length of the vector




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:253](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L253)&nbsp;
___
### len
<div style="margin-left: 10px;">

▸ `static`  **len**<`number`\>(`a: IVec3Like`) : `number`




**`en`** Calculates the length of the vector




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L242)&nbsp;
___
### invertSafe
<div style="margin-left: 10px;">

▸ `static`  **invertSafe**<`Out`\>(`out: Out, a: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L286)&nbsp;
___
### invert
<div style="margin-left: 10px;">

▸ `static`  **invert**<`Out`\>(`out: Out, a: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L275)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:599](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L599)&nbsp;
___
### floor
<div style="margin-left: 10px;">

▸ `static`  **floor**<`Out`\>(`out: Out, a: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L154)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸ `static`  **equals**<`boolean`\>(`a: IVec3Like, b: IVec3Like, epsilon: number`) : `boolean`




**`en`** Check whether the two given vectors are approximately equivalent




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `epsilon` | `number` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L618)&nbsp;
___
### dot
<div style="margin-left: 10px;">

▸ `static`  **dot**<`number`\>(`a: Out, b: IVec3Like`) : `number`




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
| `b` | `IVec3Like` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:335](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L335)&nbsp;
___
### divide
<div style="margin-left: 10px;">

▸ `static`  **divide**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L132)&nbsp;
___
### distance
<div style="margin-left: 10px;">

▸ `static`  **distance**<`number`\>(`a: IVec3Like, b: IVec3Like`) : `number`




**`en`** Calculates the euclidean distance of two vectors




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:220](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L220)&nbsp;
___
### cross
<div style="margin-left: 10px;">

▸ `static`  **cross**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like`) : `Out`




**`en`** Calculates the cross product of the vector




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L343)&nbsp;
___
### copy
<div style="margin-left: 10px;">

▸ `static`  **copy**<`Out`\>(`out: Out, a: Vec3Like`) : `Out`




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
| `a` | `Vec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L77)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Vec3`\>(`a: Out`) : `Vec3`




**`en`** Obtains a clone of the given vector object




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L69)&nbsp;
___
### ceil
<div style="margin-left: 10px;">

▸ `static`  **ceil**<`Out`\>(`out: Out, a: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L143)&nbsp;
___
### angle
<div style="margin-left: 10px;">

▸ `static`  **angle**<`number`\>(`a: IVec3Like, b: IVec3Like`) : `number`




**`en`** Calculates the radian angle between two vectors




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:635](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L635)&nbsp;
___
### add
<div style="margin-left: 10px;">

▸ `static`  **add**<`Out`\>(`out: Out, a: IVec3Like, b: IVec3Like`) : `Out`




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
| `a` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IVec3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L99)&nbsp;
___
### add
<div style="margin-left: 10px;">

▸   **add**<`this`\>(`other: Vec3`) : `this`




**`en`** Adds the current vector with another one and return this




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec3` | specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:834](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L834)&nbsp;
___
### add3f
<div style="margin-left: 10px;">

▸   **add3f**<`this`\>(`x: number, y: number, z: number`) : `this`




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



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:848](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L848)&nbsp;
___
### clampf
<div style="margin-left: 10px;">

▸   **clampf**<`this`\>(`minInclusive: Vec3, maxInclusive: Vec3`) : `this`




**`en`** Clamp the vector between minInclusive and maxInclusive.




<!---->
<!--    #### Returns `this` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minInclusive` | `Vec3` | Minimum value allowed  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `maxInclusive` | `Vec3` | Maximum value allowed  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:965](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L965)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸   **clone**<`Vec3`\> : `Vec3`




**`en`** clone a Vec3 value




<!---->
<!--    #### Returns `Vec3` -->
<!---->


##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:712](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L712)&nbsp;
___
### cross
<div style="margin-left: 10px;">

▸   **cross**<`this`\>(`other: Vec3`) : `this`




**`en`** Calculates the cross product with another vector.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec3` | specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:987](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L987)&nbsp;
___
### divide
<div style="margin-left: 10px;">

▸   **divide**<`this`\>(`other: Vec3`) : `this`




**`en`** Element-wisely divides this vector with another one, and return this.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec3` | specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:926](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L926)&nbsp;
___
### divide3f
<div style="margin-left: 10px;">

▸   **divide3f**<`this`\>(`x: number, y: number, z: number`) : `this`




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



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:940](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L940)&nbsp;
___
### dot
<div style="margin-left: 10px;">

▸   **dot**<`number`\>(`other: Vec3`) : `number`




**`en`** Calculates the dot product with another vector




<!---->
<!--    #### Returns `number` The result of calculates the dot product with another vector
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec3` | specified vector  |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:978](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L978)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Vec3, epsilon: number`) : `boolean`




**`en`** Check whether the vector approximately equals another one.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x60; when the components of both vectors are equal within the specified range of error; otherwise it returns &#x60;false&#x60;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec3` | Specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:754](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L754)&nbsp;
___
### equals3f
<div style="margin-left: 10px;">

▸   **equals3f**<`boolean`\>(`x: number, y: number, z: number, epsilon: number`) : `boolean`




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
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:774](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L774)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:1002](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L1002)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:1011](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L1011)&nbsp;
___
### lerp
<div style="margin-left: 10px;">

▸   **lerp**<`this`\>(`to: Vec3, ratio: number`) : `this`




**`en`** Calculate linear interpolation result between this vector and another one with given ratio.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Vec3` | Target vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:822](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L822)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`other: Vec3`) : `this`




**`en`** Multiplies the current vector with another one and return this




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec3` | specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:899](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L899)&nbsp;
___
### multiply3f
<div style="margin-left: 10px;">

▸   **multiply3f**<`this`\>(`x: number, y: number, z: number`) : `this`




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



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:914](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L914)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:886](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L886)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:951](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L951)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:1019](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L1019)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸   **set**<`any`\>(`other: Vec3`) : `any`




**`en`** Set the current vector value with the given vector.




<!---->
<!--    #### Returns `any` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec3` | Specified vector  |



##### Returns `any`


▸   **set**<`any`\>(`x: undefined | number, y: undefined | number, z: undefined | number`) : `any`




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



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:722](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L722)&nbsp;   [cocos/core/math/vec3.ts:732](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L732)&nbsp;   [cocos/core/math/vec3.ts:734](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L734)&nbsp;
___
### strictEquals
<div style="margin-left: 10px;">

▸   **strictEquals**<`boolean`\>(`other: Vec3`) : `boolean`




**`en`** Check whether the current vector strictly equals another Vec3.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x60; when the components of both vectors are equal within the specified range of error; otherwise it returns &#x60;false&#x60;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec3` | specified vector  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:791](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L791)&nbsp;
___
### strictEquals3f
<div style="margin-left: 10px;">

▸   **strictEquals3f**<`boolean`\>(`x: number, y: number, z: number`) : `boolean`




**`en`** Check whether the current vector strictly equals another Vec3.




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



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:803](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L803)&nbsp;
___
### subtract
<div style="margin-left: 10px;">

▸   **subtract**<`this`\>(`other: Vec3`) : `this`




**`en`** Subtracts one vector from this, and returns this.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec3` | specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:860](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L860)&nbsp;
___
### subtract3f
<div style="margin-left: 10px;">

▸   **subtract3f**<`this`\>(`x: number, y: number, z: number`) : `this`




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



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:874](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L874)&nbsp;
___
### toString
<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`




**`en`** Transform to string with vector information.




<!---->
<!--    #### Returns `string` The string with vector information
-->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:812](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L812)&nbsp;
___
### transformMat4
<div style="margin-left: 10px;">

▸   **transformMat4**<`this`\>(`matrix: Mat4`) : `this`




**`en`** Transforms the vec3 with a mat4. 4th vector component is implicitly '1'




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `matrix` | `Mat4` | matrix to transform with  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec3.ts:1039](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec3.ts#L1039)&nbsp;
___
<!---->




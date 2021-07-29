
## Class: Point


`extend:`
[Vec2](docs/en/core-math/Class/Vec2.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ONE](#ONE)
- [ **`static`**  ZERO](#ZERO)
- [ dmx](#dmx)
- [ dmy](#dmy)
- [ dx](#dx)
- [ dy](#dy)
- [ flags](#flags)
- [ len](#len)
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
- [ reset](#reset)
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


### dmx
<div style="margin-left: 10px;">




•  **dmx**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:34](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L34)&nbsp;


___


### dmy
<div style="margin-left: 10px;">




•  **dmy**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:35](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L35)&nbsp;


___


### dx
<div style="margin-left: 10px;">




•  **dx**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:32](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L32)&nbsp;


___


### dy
<div style="margin-left: 10px;">




•  **dy**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:33](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L33)&nbsp;


___


### flags
<div style="margin-left: 10px;">




•  **flags**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:36](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L36)&nbsp;


___


### len
<div style="margin-left: 10px;">




•  **len**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:37](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L37)&nbsp;


___


### x
<div style="margin-left: 10px;">




**`en`** x component.




•  **x**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:428](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L428)&nbsp;


___


### y
<div style="margin-left: 10px;">




**`en`** y component.




•  **y**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L434)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Point**(`x: number, y: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `x` | `number` |





| Name | Type |
| :------ | :------ |
| `y` | `number` |





</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:37](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L37)&nbsp;


---

<!---->
## Methods

### transformMat4
<div style="margin-left: 10px;">

▸ `static`  **transformMat4**<`Out`\>(`out: Out, a: Out, m: IMat4Like`) : `Out`




**`en`** Vector and third order matrix multiplication, will complete the vector with a third and a fourth element as one




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
| `m` | `IMat4Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L348)&nbsp;
___
### transformMat3
<div style="margin-left: 10px;">

▸ `static`  **transformMat3**<`Out`\>(`out: Out, a: Out, m: IMat3Like`) : `Out`




**`en`** Vector and third order matrix multiplication, will complete the vector with a third value as one




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
| `m` | `IMat3Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:336](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L336)&nbsp;
___
### toArray
<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, v: IVec2Like, ofs: number`) : `Out`




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
| `v` | `IVec2Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ofs` | `number` | Array Start Offset  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:369](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L369)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L94)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:390](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L390)&nbsp;
___
### str
<div style="margin-left: 10px;">

▸ `static`  **str**<`string`\>(`a: Out`) : `string`




**`en`** Gets the string representation of the given vector




<!---->
<!--    #### Returns `string` -->
<!---->

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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L204)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, x: number, y: number`) : `Out`




**`en`** Sets the out vector with the given x and y values




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



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L74)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L184)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L164)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L324)&nbsp;
___
### normalize
<div style="margin-left: 10px;">

▸ `static`  **normalize**<`Out`\>(`out: Out, a: Vec2Like`) : `Out`




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
| `a` | `Vec2Like` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:277](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L277)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L234)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L174)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L104)&nbsp;
___
### min
<div style="margin-left: 10px;">

▸ `static`  **min**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




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
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L144)&nbsp;
___
### max
<div style="margin-left: 10px;">

▸ `static`  **max**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




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
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L154)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L311)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L224)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L214)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L254)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L244)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:380](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L380)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L134)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:398](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L398)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:293](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L293)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L114)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L194)&nbsp;
___
### cross
<div style="margin-left: 10px;">

▸ `static`  **cross**<`Vec3`\>(`out: Vec3, a: Out, b: Out`) : `Vec3`




**`en`** Calculates the cross product of the vector




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Out` | - |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L301)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L64)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Vec2`\>(`a: Out`) : `Vec2`




**`en`** Obtains a clone of the given vector object




<!---->
<!--    #### Returns `Vec2` -->
<!---->

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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L124)&nbsp;
___
### angle
<div style="margin-left: 10px;">

▸ `static`  **angle**<`number`\>(`a: Out, b: Out`) : `number`




**`en`** Calculates the radian angle between two vectors




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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:411](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L411)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L84)&nbsp;
___
### add
<div style="margin-left: 10px;">

▸   **add**<`this`\>(`other: Vec2`) : `this`




**`en`** Adds the current vector with another one and return this




<!---->
<!--    #### Returns `this` -->
<!---->

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



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:594](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L594)&nbsp;
___
### angle
<div style="margin-left: 10px;">

▸   **angle**<`number`\>(`other: Vec2`) : `number`




**`en`** Calculates radian angle between two vectors




<!---->
<!--    #### Returns `number` The angle between the current vector and the specified vector (in radians); if there are zero vectors in the current vector and the specified vector, 0 is returned.
-->
<!---->

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




**`en`** Clamp the vector between minInclusive and maxInclusive.




<!---->
<!--    #### Returns `this` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minInclusive` | `Vec2` | Minimum value allowed  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `maxInclusive` | `Vec2` | Maximum value allowed  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:571](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L571)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸   **clone**<`Vec2`\> : `Vec2`




**`en`** clone a Vec2 value




<!---->
<!--    #### Returns `Vec2` -->
<!---->


##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L455)&nbsp;
___
### cross
<div style="margin-left: 10px;">

▸   **cross**<`number`\>(`other: Vec2`) : `number`




**`en`** Calculates the cross product with another vector.




<!---->
<!--    #### Returns `number` &#x60;out&#x60;
-->
<!---->

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




**`en`** Element-wisely divides this vector with another one, and return this.




<!---->
<!--    #### Returns `this` -->
<!---->

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



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:676](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L676)&nbsp;
___
### dot
<div style="margin-left: 10px;">

▸   **dot**<`number`\>(`other: Vec2`) : `number`




**`en`** Calculates the dot product with another vector




<!---->
<!--    #### Returns `number` The result of calculates the dot product with another vector
-->
<!---->

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




**`en`** Check whether the vector approximately equals another one.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x60; when the components of both vectors are equal within the specified range of error; otherwise it returns &#x60;false&#x60;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | Specified vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:494](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L494)&nbsp;
___
### equals2f
<div style="margin-left: 10px;">

▸   **equals2f**<`boolean`\>(`x: number, y: number, epsilon: number`) : `boolean`




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
| `epsilon` | `number` | The error allowed. It`s should be a non-negative number.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:511](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L511)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:717](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L717)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:726](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L726)&nbsp;
___
### lerp
<div style="margin-left: 10px;">

▸   **lerp**<`this`\>(`to: Vec2, ratio: number`) : `this`




**`en`** Calculate linear interpolation result between this vector and another one with given ratio.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Vec2` | Target vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:556](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L556)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`other: Vec2`) : `this`




**`en`** Multiplies the current vector with another one and return this




<!---->
<!--    #### Returns `this` -->
<!---->

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



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:653](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L653)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:628](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L628)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:686](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L686)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:734](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L734)&nbsp;
___
### project
<div style="margin-left: 10px;">

▸   **project**<`this`\>(`other: Vec2`) : `this`




**`en`** Projects the current vector on another one




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | specified vector  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:800](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L800)&nbsp;
___
### reset
<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:43](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L43)&nbsp;
___
### rotate
<div style="margin-left: 10px;">

▸   **rotate**<`this`\>(`radians: number`) : `this`




**`en`** Rotates the current vector by an angle in radian value




<!---->
<!--    #### Returns `this` -->
<!---->

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




**`en`** Set the current vector value with the given vector.




<!---->
<!--    #### Returns `any` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Vec2` | Specified vector  |



##### Returns `any`


▸   **set**<`any`\>(`x: undefined | number, y: undefined | number`) : `any`




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



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L465)&nbsp;   [cocos/core/math/vec2.ts:474](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L474)&nbsp;   [cocos/core/math/vec2.ts:476](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L476)&nbsp;
___
### signAngle
<div style="margin-left: 10px;">

▸   **signAngle**<`number`\>(`other: Vec2`) : `number`




**`en`** Get angle in radian between this and vector with direction.




<!---->
<!--    #### Returns `number` The signed angle between the current vector and the specified vector (in radians); if there is a zero vector in the current vector and the specified vector, 0 is returned.
-->
<!---->

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




**`en`** Check whether the current vector strictly equals another Vec2.




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x60; when the components of both vectors are equal within the specified range of error; otherwise it returns &#x60;false&#x60;.
-->
<!---->

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




**`en`** Check whether the current vector strictly equals another Vec2.




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



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:537](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L537)&nbsp;
___
### subtract
<div style="margin-left: 10px;">

▸   **subtract**<`this`\>(`other: Vec2`) : `this`




**`en`** Subtracts one vector from this, and returns this.




<!---->
<!--    #### Returns `this` -->
<!---->

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



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:617](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L617)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:546](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L546)&nbsp;
___
### transformMat4
<div style="margin-left: 10px;">

▸   **transformMat4**<`this`\>(`matrix: Mat4`) : `this`




**`en`** Transforms the vec2 with a mat4. 3rd vector component is implicitly '0', 4th vector component is implicitly '1'




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `matrix` | `Mat4` | matrix to transform with  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/vec2.ts:813](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/vec2.ts#L813)&nbsp;
___
<!---->




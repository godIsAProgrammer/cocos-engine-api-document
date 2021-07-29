
## Class: Color


`extend:`
[ValueType](docs/en/core-value-types/Class/ValueType.md)












**`en`** Representation of RGBA colors.<br/>
Each color component is an integer value with a range from 0 to 255.<br/>


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  BLACK](#BLACK)
- [ **`static`**  BLUE](#BLUE)
- [ **`static`**  CYAN](#CYAN)
- [ **`static`**  GRAY](#GRAY)
- [ **`static`**  GREEN](#GREEN)
- [ **`static`**  MAGENTA](#MAGENTA)
- [ **`static`**  RED](#RED)
- [ **`static`**  TRANSPARENT](#TRANSPARENT)
- [ **`static`**  WHITE](#WHITE)
- [ **`static`**  YELLOW](#YELLOW)
- [ a](#a)
- [ b](#b)
- [ g](#g)
- [ r](#r)
- [ w](#w)
- [ x](#x)
- [ y](#y)
- [ z](#z)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  toArray](#toArray)
- [ **`static`**  subtract](#subtract)
- [ **`static`**  strictEquals](#strictEquals)
- [ **`static`**  set](#set)
- [ **`static`**  scale](#scale)
- [ **`static`**  multiply](#multiply)
- [ **`static`**  lerp](#lerp)
- [ **`static`**  hex](#hex)
- [ **`static`**  fromHEX](#fromHEX)
- [ **`static`**  fromArray](#fromArray)
- [ **`static`**  equals](#equals)
- [ **`static`**  divide](#divide)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ **`static`**  add](#add)
- [ clone](#clone)
- [ equals](#equals)
- [ fromHEX](#fromHEX)
- [ fromHSV](#fromHSV)
- [ lerp](#lerp)
- [ multiply](#multiply)
- [ set](#set)
- [ toCSS](#toCSS)
- [ toHEX](#toHEX)
- [ toHSV](#toHSV)
- [ toRGBValue](#toRGBValue)
- [ toString](#toString)
</div>

## Properties


### BLACK
<div style="margin-left: 10px;">




• `static` **BLACK**:
  = `Object.freeze(new Color(0, 0, 0, 255))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L49)&nbsp;


___


### BLUE
<div style="margin-left: 10px;">




• `static` **BLUE**:
  = `Object.freeze(new Color(0, 0, 255, 255))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:53](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L53)&nbsp;


___


### CYAN
<div style="margin-left: 10px;">




• `static` **CYAN**:
  = `Object.freeze(new Color(0, 255, 255, 255))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L54)&nbsp;


___


### GRAY
<div style="margin-left: 10px;">




• `static` **GRAY**:
  = `Object.freeze(new Color(127, 127, 127, 255))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L48)&nbsp;


___


### GREEN
<div style="margin-left: 10px;">




• `static` **GREEN**:
  = `Object.freeze(new Color(0, 255, 0, 255))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L52)&nbsp;


___


### MAGENTA
<div style="margin-left: 10px;">




• `static` **MAGENTA**:
  = `Object.freeze(new Color(255, 0, 255, 255))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L55)&nbsp;


___


### RED
<div style="margin-left: 10px;">




• `static` **RED**:
  = `Object.freeze(new Color(255, 0, 0, 255))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L51)&nbsp;


___


### TRANSPARENT
<div style="margin-left: 10px;">




• `static` **TRANSPARENT**:
  = `Object.freeze(new Color(0, 0, 0, 0))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L50)&nbsp;


___


### WHITE
<div style="margin-left: 10px;">




• `static` **WHITE**:
  = `Object.freeze(new Color(255, 255, 255, 255))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L47)&nbsp;


___


### YELLOW
<div style="margin-left: 10px;">




• `static` **YELLOW**:
  = `Object.freeze(new Color(255, 255, 0, 255))`
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L56)&nbsp;


___


### a
<div style="margin-left: 10px;">




**`en`** Get or set alpha channel value.




•  **a**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L283)&nbsp;   [cocos/core/math/color.ts:287](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L287)&nbsp;


___


### b
<div style="margin-left: 10px;">




**`en`** Get or set blue channel value.




•  **b**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:271](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L271)&nbsp;   [cocos/core/math/color.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L275)&nbsp;


___


### g
<div style="margin-left: 10px;">




**`en`** Get or set green channel value.




•  **g**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:258](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L258)&nbsp;   [cocos/core/math/color.ts:262](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L262)&nbsp;


___


### r
<div style="margin-left: 10px;">




**`en`** Get or set red channel value.




•  **r**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:245](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L245)&nbsp;   [cocos/core/math/color.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L249)&nbsp;


___


### w
<div style="margin-left: 10px;">




•  **w**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:299](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L299)&nbsp;   [cocos/core/math/color.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L300)&nbsp;


___


### x
<div style="margin-left: 10px;">




•  **x**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:293](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L293)&nbsp;   [cocos/core/math/color.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L294)&nbsp;


___


### y
<div style="margin-left: 10px;">




•  **y**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L295)&nbsp;   [cocos/core/math/color.ts:296](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L296)&nbsp;


___


### z
<div style="margin-left: 10px;">




•  **z**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:297](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L297)&nbsp;   [cocos/core/math/color.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L298)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Color**(`other: Color`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `other` | `Color` |





• **new Color**(`hexString: string`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `hexString` | `string` |





• **new Color**(`r: undefined | number, g: undefined | number, b: undefined | number, a: undefined | number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `r` | `` |





| Name | Type |
| :------ | :------ |
| `g` | `` |





| Name | Type |
| :------ | :------ |
| `b` | `` |





| Name | Type |
| :------ | :------ |
| `a` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L302)&nbsp;   [cocos/core/math/color.ts:309](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L309)&nbsp;   [cocos/core/math/color.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L317)&nbsp;   [cocos/core/math/color.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L327)&nbsp;


---

<!---->
## Methods

### toArray
<div style="margin-left: 10px;">

▸ `static`  **toArray**<`Out`\>(`out: Out, a: IColorLike, ofs: number`) : `Out`




**`en`** Convert a color object to a RGBA array, and save the results to out color.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IColorLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ofs` | `number` | Array Start Offset  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L192)&nbsp;
___
### subtract
<div style="margin-left: 10px;">

▸ `static`  **subtract**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Subtract each components of color b from each components of color a. And save the results to out color.




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

##### Defined in &nbsp;   [cocos/core/math/color.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L126)&nbsp;
___
### strictEquals
<div style="margin-left: 10px;">

▸ `static`  **strictEquals**<`boolean`\>(`a: Out, b: Out`) : `boolean`




**`en`** Check whether the two given colors are identical




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

##### Defined in &nbsp;   [cocos/core/math/color.ts:218](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L218)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸ `static`  **set**<`Out`\>(`out: Out, r: number, g: number, b: number, a: number`) : `Out`




**`en`** Set the components of a color to the given values and save the results to out color.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `r` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `g` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L88)&nbsp;
___
### scale
<div style="margin-left: 10px;">

▸ `static`  **scale**<`Out`\>(`out: Out, a: Out, b: number`) : `Out`




**`en`** Multiply all channels in a color with the given scale factor, and save the results to out color.




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

##### Defined in &nbsp;   [cocos/core/math/color.ts:162](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L162)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸ `static`  **multiply**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Multiply each components of two colors. And save the results to out color.




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

##### Defined in &nbsp;   [cocos/core/math/color.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L138)&nbsp;
___
### lerp
<div style="margin-left: 10px;">

▸ `static`  **lerp**<`Out`\>(`out: Out, from: Out, to: Out, ratio: number`) : `Out`




**`en`** Performs a linear interpolation between two colors.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `from` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L174)&nbsp;
___
### hex
<div style="margin-left: 10px;">

▸ `static`  **hex**<`number`\>(`a: Out`) : `number`




**`en`** Convert the given color to a hex color value. And save the results to out color.




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L237)&nbsp;
___
### fromHEX
<div style="margin-left: 10px;">

▸ `static`  **fromHEX**<`Out`\>(`out: Out, hexString: string`) : `Out`




**`en`** Converts the hexadecimal formal color into rgb formal and save the results to out color.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `hexString` | `string` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L100)&nbsp;
___
### fromArray
<div style="margin-left: 10px;">

▸ `static`  **fromArray**<`Out`\>(`arr: IWritableArrayLike, out: Out, ofs: number`) : `Out`




**`en`** Sets the given color with RGBA values in an array, and save the results to out color.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `arr` | `IWritableArrayLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ofs` | `number` | Array Start Offset  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L206)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸ `static`  **equals**<`boolean`\>(`a: Out, b: Out, epsilon: number`) : `boolean`




**`en`** Check whether the two given colors are approximately equivalent. Difference of each channel is smaller that the epsilon.




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

##### Defined in &nbsp;   [cocos/core/math/color.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L226)&nbsp;
___
### divide
<div style="margin-left: 10px;">

▸ `static`  **divide**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Divide each components of color a by each components of color b. And save the results to out color.




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

##### Defined in &nbsp;   [cocos/core/math/color.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L150)&nbsp;
___
### copy
<div style="margin-left: 10px;">

▸ `static`  **copy**<`Out`\>(`out: Out, a: Out`) : `Out`




**`en`** Clone a color and save the results to out color.




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

##### Defined in &nbsp;   [cocos/core/math/color.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L76)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Color`\>(`a: Out`) : `Color`




**`en`** Copy content of a color into another and save the results to out color.




<!---->
<!--    #### Returns `Color` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Out` | - |



##### Returns `Color`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L62)&nbsp;
___
### add
<div style="margin-left: 10px;">

▸ `static`  **add**<`Out`\>(`out: Out, a: Out, b: Out`) : `Out`




**`en`** Add two colors by components. And save the results to out color.




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

##### Defined in &nbsp;   [cocos/core/math/color.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L114)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸   **clone**<`Color`\> : `Color`




**`en`** Clone a new color from the current color.




<!---->
<!--    #### Returns `Color` -->
<!---->


##### Returns `Color`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L344)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Color`) : `boolean`




**`en`** Check whether the current color is identical with the given color




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x60; when all channels of both colours are equal; otherwise returns &#x60;false&#x60;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Color` | Specified color  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:356](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L356)&nbsp;
___
### fromHEX
<div style="margin-left: 10px;">

▸   **fromHEX**<`this`\>(`hexString: string`) : `this`




**`en`** Read hex string and store color data into the current color object, the hex string must be formatted as rgba or rgb.




<!---->
<!--    #### Returns `this` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `hexString` | `string` | the hex string  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:433](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L433)&nbsp;
___
### fromHSV
<div style="margin-left: 10px;">

▸   **fromHSV**<`this`\>(`h: number, s: number, v: number`) : `this`




**`en`** Read HSV model color and convert to RGB color.




**`example`**

```ts


const color = Color.YELLOW;
color.fromHSV(0, 0, 1); // Color {r: 255, g: 255, b: 255, a: 255};


```




<!---->
<!--    #### Returns `this` &#x60;this&#x60;-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `h` | `number` | H value。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `s` | `number` | S value。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | V value。  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:504](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L504)&nbsp;
___
### lerp
<div style="margin-left: 10px;">

▸   **lerp**<`this`\>(`to: Color, ratio: number`) : `this`




**`en`** Calculate linear interpolation result between this color and another one with given ratio。




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Color` | Target color  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L366)&nbsp;
___
### multiply
<div style="margin-left: 10px;">

▸   **multiply**<`this`\>(`other: Color`) : `this`




**`en`** Multiplies the current color by the specified color.




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Color` | The specified color.  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:640](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L640)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸   **set**<`Color`\>(`other: Color`) : `Color`




**`en`** Set the color.





<!---->
<!--    #### Returns `Color` Current color.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Color` | The specified color.  |



##### Returns `Color`


▸   **set**<`Color`\>(`r: undefined | number, g: undefined | number, b: undefined | number, a: undefined | number`) : `Color`




<!---->
<!--    #### Returns `Color` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `r` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `g` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `undefined \| number` | - |



##### Returns `Color`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:612](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L612)&nbsp;   [cocos/core/math/color.ts:613](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L613)&nbsp;   [cocos/core/math/color.ts:614](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L614)&nbsp;
___
### toCSS
<div style="margin-left: 10px;">

▸   **toCSS**<`string`\>(`opt:  |  |  | `) : `string`




**`en`** Convert color to css format.




**`example`**

```ts


let color = cc.Color.BLACK;
color.toCSS();          // "rgba(0,0,0,1.00)";
color.toCSS("rgba");    // "rgba(0,0,0,1.00)";
color.toCSS("rgb");     // "rgba(0,0,0)";
color.toCSS("#rgb");    // "#000";
color.toCSS("#rrggbb"); // "#000000";


```




<!---->
<!--    #### Returns `string` CSS format for the current color.-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `opt` | ` \|  \|  \| ` | "rgba", "rgb", "#rgb" or "#rrggbb".  |



##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:407](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L407)&nbsp;
___
### toHEX
<div style="margin-left: 10px;">

▸   **toHEX**<`string`\>(`fmt:  |  | `) : `string`




**`en`** convert Color to HEX color string.




**`example`**

```ts


const color = new Color(255, 14, 0, 255);
color.toHEX("#rgb");      // "f00";
color.toHEX("#rrggbbaa"); // "ff0e00"
color.toHEX("#rrggbb");   // "ff0e00ff"


```




<!---->
<!--    #### Returns `string` the Hex color string-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fmt` | ` \|  \| ` | "#rrggbb" or "#rrggbbaa".- `'#rrggbbaa'` obtains the hexadecimal value of the Red, Green, Blue, Alpha channels (**two**, high complement 0) and connects them sequentially.- `'#rrggbb'` is similar to `'#rrggbbaa'` but does not include the Alpha channel.  |



##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:458](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L458)&nbsp;
___
### toHSV
<div style="margin-left: 10px;">

▸   **toHSV**




**`en`** Transform to HSV model color.




**`example`**

```ts


import { Color } from 'cc';
const color = Color.YELLOW;
color.toHSV(); // {h: 0.1533864541832669, s: 0.9843137254901961, v: 1}


```




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L576)&nbsp;
___
### toRGBValue
<div style="margin-left: 10px;">

▸   **toRGBValue**<`number`\> : `number`




**`en`** Convert to rgb value.




**`example`**

```ts


const color = Color.YELLOW;
color.toRGBValue();


```




<!---->
<!--    #### Returns `number` RGB integer value. Starting from the lowest valid bit, each 8 bits is the value of the Red, Green, and Blue channels respectively.-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:487](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L487)&nbsp;
___
### toString
<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`




**`en`** Convert to string with color informations




<!---->
<!--    #### Returns `string` A string representation of the current color.
-->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/math/color.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/color.ts#L384)&nbsp;
___
<!---->




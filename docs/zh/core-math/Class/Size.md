
## Class: Size


`extend:`
[ValueType](docs/zh/core-value-types/Class/ValueType.md)












**`zh`** 二维尺寸。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ONE](#ONE)
- [ **`static`**  ZERO](#ZERO)
- [ height](#height)
- [ width](#width)
- [ x](#x)
- [ y](#y)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  lerp](#lerp)
- [ clone](#clone)
- [ equals](#equals)
- [ lerp](#lerp)
- [ set](#set)
- [ toString](#toString)
</div>

## Properties


### ONE
<div style="margin-left: 10px;">




• `static` **ONE**:
  = `Object.freeze(new Size(1, 1))`
</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:43](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L43)&nbsp;


___


### ZERO
<div style="margin-left: 10px;">




• `static` **ZERO**:
  = `Object.freeze(new Size(0, 0))`
</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L42)&nbsp;


___


### height
<div style="margin-left: 10px;">




•  **height**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L68)&nbsp;


___


### width
<div style="margin-left: 10px;">




•  **width**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L66)&nbsp;


___


### x
<div style="margin-left: 10px;">




•  **x**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L61)&nbsp;   [cocos/core/math/size.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L62)&nbsp;


___


### y
<div style="margin-left: 10px;">




•  **y**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L63)&nbsp;   [cocos/core/math/size.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L64)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Size**(`other: Size`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `other` | `Size` |





• **new Size**(`width: undefined | number, height: undefined | number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `width` | `` |





| Name | Type |
| :------ | :------ |
| `height` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L68)&nbsp;   [cocos/core/math/size.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L75)&nbsp;   [cocos/core/math/size.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L83)&nbsp;


---

<!---->
## Methods

### lerp
<div style="margin-left: 10px;">

▸ `static`  **lerp**<`Out`\>(`out: Out, from: Out, to: Out, ratio: number`) : `Out`




**`zh`** 根据指定的插值比率，从当前尺寸到目标尺寸之间做插值。




<!---->
<!--    #### Returns `Out` A vector consisting of linear interpolation of the width and height of the current size to the width and height of the target size at a specified interpolation ratio, respectively.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | Output Size.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `from` | `Out` | Original Size.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Out` | Target Size.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L54)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸   **clone**<`Size`\> : `Size`




**`zh`** 克隆当前尺寸。





<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L100)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Size`) : `boolean`




**`zh`** 判断当前尺寸是否与指定尺寸的相等。




<!---->
<!--    #### Returns `boolean` Returns &#x60;true&#x27; when both dimensions are equal in width and height; otherwise returns &#x60;false&#x27;.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Size` | Specified Size  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L138)&nbsp;
___
### lerp
<div style="margin-left: 10px;">

▸   **lerp**<`this`\>(`to: Size, ratio: number`) : `this`




**`zh`** 根据指定的插值比率，从当前尺寸到目标尺寸之间做插值。




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Size` | Target Size.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:149](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L149)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸   **set**<`any`\>(`other: Size`) : `any`




**`zh`** 设置当前尺寸使其与指定的尺寸相等。




<!---->
<!--    #### Returns `any` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Size` | Specified Size.  |



##### Returns `any`


▸   **set**<`any`\>(`width: undefined | number, height: undefined | number`) : `any`




**`zh`** 设置当前尺寸的具体参数。




<!---->
<!--    #### Returns `any` &#x60;this&#x60;
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `undefined \| number` | Specified width  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `undefined \| number` | Specified height  |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L110)&nbsp;   [cocos/core/math/size.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L119)&nbsp;   [cocos/core/math/size.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L121)&nbsp;
___
### toString
<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`




**`zh`** 返回当前尺寸的字符串表示。




<!---->
<!--    #### Returns `string` The information of the current size in string
-->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/math/size.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/size.ts#L160)&nbsp;
___
<!---->




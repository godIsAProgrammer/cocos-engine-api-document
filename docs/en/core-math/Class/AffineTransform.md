
## Class: AffineTransform






**`en`** `AffineTransform` class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ a](#a)
- [ b](#b)
- [ c](#c)
- [ d](#d)
- [ tx](#tx)
- [ ty](#ty)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  transformVec2](#transformVec2)
- [ **`static`**  transformSize](#transformSize)
- [ **`static`**  transformRect](#transformRect)
- [ **`static`**  transformObb](#transformObb)
- [ **`static`**  invert](#invert)
- [ **`static`**  identity](#identity)
- [ **`static`**  fromMat4](#fromMat4)
- [ **`static`**  concat](#concat)
- [ **`static`**  clone](#clone)
</div>

## Properties


### a
<div style="margin-left: 10px;">




•  **a**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L224)&nbsp;


___


### b
<div style="margin-left: 10px;">




•  **b**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:225](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L225)&nbsp;


___


### c
<div style="margin-left: 10px;">




•  **c**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L226)&nbsp;


___


### d
<div style="margin-left: 10px;">




•  **d**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L227)&nbsp;


___


### tx
<div style="margin-left: 10px;">




•  **tx**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L228)&nbsp;


___


### ty
<div style="margin-left: 10px;">




•  **ty**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L229)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new AffineTransform**(`a: number, b: number, c: number, d: number, tx: number, ty: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `tx` | `number` |
| `ty` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L229)&nbsp;


---

<!---->
## Methods

### transformVec2

<div style="margin-left: 10px;">

▸ `static`  **transformVec2**<`any`\>(`out: Vec2, point: Vec2, t: AffineTransform`) : `any`



**`en`** Apply the `AffineTransform` on a 2D vector.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | The output vector to store the result  |
| `point` | `Vec2` | Vector to apply transform.  |
| `t` | `AffineTransform` | transform matrix.  |


##### Returns `any`

▸ `static`  **transformVec2**<`any`\>(`out: Vec2, x: number, y: number, t: AffineTransform`) : `any`



**`en`** Apply the `AffineTransform` on a 2D vector.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | The output vector to store the result  |
| `x` | `number` | x to apply transform.  |
| `y` | `number` | y to apply transform.  |
| `t` | `AffineTransform` | transform matrix.  |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L125)&nbsp;   [cocos/core/math/affine-transform.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L135)&nbsp;   [cocos/core/math/affine-transform.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L137)&nbsp;
___
### transformSize

<div style="margin-left: 10px;">

▸ `static`  **transformSize**<`void`\>(`out: Size, size: Size, t: AffineTransform`) : `void`



**`en`** Apply the `AffineTransform` on a size.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Size` | The output size to store the result  |
| `size` | `Size` | The size to apply transform.  |
| `t` | `AffineTransform` | transform matrix.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L159)&nbsp;
___
### transformRect

<div style="margin-left: 10px;">

▸ `static`  **transformRect**<`void`\>(`out: Rect, rect: Rect, t: AffineTransform`) : `void`



**`en`** Apply the `AffineTransform` on a rect.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Rect` | The output rect object to store the result  |
| `rect` | `Rect` | The rect object to apply transform.  |
| `t` | `AffineTransform` | transform matrix.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L171)&nbsp;
___
### transformObb

<div style="margin-left: 10px;">

▸ `static`  **transformObb**<`void`\>(`out_bl: Vec2, out_tl: Vec2, out_tr: Vec2, out_br: Vec2, rect: Rect, anAffineTransform: AffineTransform`) : `void`



**`en`** Apply the `AffineTransform` on a rect, and turns to an Oriented Bounding Box.
This function does not allocate any memory, you should create the output vectors by yourself and manage their memory.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out_bl` | `Vec2` | Output vector for storing the bottom left corner coordinates of the Obb object  |
| `out_tl` | `Vec2` | Output vector for storing the top left corner coordinates of the Obb object  |
| `out_tr` | `Vec2` | Output vector for storing the top right corner coordinates of the Obb object  |
| `out_br` | `Vec2` | Output vector for storing the bottom right corner coordinates of the Obb object  |
| `rect` | `Rect` | The rect object to apply transform.  |
| `anAffineTransform` | `AffineTransform` | transform matrix.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L206)&nbsp;
___
### invert

<div style="margin-left: 10px;">

▸ `static`  **invert**<`void`\>(`out: AffineTransform, t: AffineTransform`) : `void`



**`en`** Get the invert transform of an `AffineTransform` object.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AffineTransform` | Out object to store the invert result  |
| `t` | `AffineTransform` | the input `AffineTransform` object  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L93)&nbsp;
___
### identity

<div style="margin-left: 10px;">

▸ `static`  **identity**<`AffineTransform`\> : `AffineTransform`



**`en`** Create an identity transformation matrix.




##### Returns `AffineTransform`
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L48)&nbsp;
___
### fromMat4

<div style="margin-left: 10px;">

▸ `static`  **fromMat4**<`void`\>(`out: AffineTransform, mat: Mat4`) : `void`



**`en`** Get an `AffineTransform` object from a given matrix 4x4.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AffineTransform` | The output matrix to store the result  |
| `mat` | `Mat4` | transform matrix.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L109)&nbsp;
___
### concat

<div style="margin-left: 10px;">

▸ `static`  **concat**<`void`\>(`out: AffineTransform, t1: AffineTransform, t2: AffineTransform`) : `void`



**`en`** Concatenate a transform matrix to another. The results are reflected in the out `AffineTransform`.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AffineTransform` | Out object to store the concat result  |
| `t1` | `AffineTransform` | The first transform object.  |
| `t2` | `AffineTransform` | The transform object to concatenate.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L72)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`AffineTransform`\>(`affineTransform: AffineTransform`) : `AffineTransform`



**`en`** Clone an `AffineTransform` object from the specified transform.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `affineTransform` | `AffineTransform` | Specified `AffineTransform` objects  |


##### Returns `AffineTransform`
</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L57)&nbsp;
___
<!---->




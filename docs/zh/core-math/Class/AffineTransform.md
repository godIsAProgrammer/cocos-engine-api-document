
## Class: AffineTransform







**`zh`** 二维仿射变换矩阵，描述了平移、缩放和缩放。



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





| Name | Type |
| :------ | :------ |
| `b` | `number` |





| Name | Type |
| :------ | :------ |
| `c` | `number` |





| Name | Type |
| :------ | :------ |
| `d` | `number` |





| Name | Type |
| :------ | :------ |
| `tx` | `number` |





| Name | Type |
| :------ | :------ |
| `ty` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L229)&nbsp;


---

<!---->
## Methods

### transformVec2
<div style="margin-left: 10px;">

▸ `static`  **transformVec2**<`any`\>(`out: Vec2, point: Vec2, t: AffineTransform`) : `any`




**`zh`** 应用二维仿射变换矩阵到二维向量上，并将结果赋值给出口向量。




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | The output vector to store the result  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | Vector to apply transform.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `AffineTransform` | transform matrix.  |



##### Returns `any`


▸ `static`  **transformVec2**<`any`\>(`out: Vec2, x: number, y: number, t: AffineTransform`) : `any`




**`zh`** 应用二维仿射变换矩阵到二维向量上，并将结果赋值给出口向量。




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | The output vector to store the result  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | x to apply transform.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | y to apply transform.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `AffineTransform` | transform matrix.  |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L125)&nbsp;   [cocos/core/math/affine-transform.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L135)&nbsp;   [cocos/core/math/affine-transform.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L137)&nbsp;
___
### transformSize
<div style="margin-left: 10px;">

▸ `static`  **transformSize**<`void`\>(`out: Size, size: Size, t: AffineTransform`) : `void`




**`zh`** 应用二维仿射变换矩阵到二维尺寸上，并将结果赋值给出口尺寸。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Size` | The output size to store the result  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `size` | `Size` | The size to apply transform.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `AffineTransform` | transform matrix.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L159)&nbsp;
___
### transformRect
<div style="margin-left: 10px;">

▸ `static`  **transformRect**<`void`\>(`out: Rect, rect: Rect, t: AffineTransform`) : `void`




**`zh`** 应用二维仿射变换矩阵到矩形上，并将结果赋值给出口矩形。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Rect` | The output rect object to store the result  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rect` | `Rect` | The rect object to apply transform.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `AffineTransform` | transform matrix.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L171)&nbsp;
___
### transformObb
<div style="margin-left: 10px;">

▸ `static`  **transformObb**<`void`\>(`out_bl: Vec2, out_tl: Vec2, out_tr: Vec2, out_br: Vec2, rect: Rect, anAffineTransform: AffineTransform`) : `void`




**`zh`** 应用二维仿射变换矩阵到矩形上, 并转换为有向包围盒。
这个函数不创建任何内存，你需要先创建包围盒的四个 Vector 对象用来存储结果，并作为前四个参数传入函数。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out_bl` | `Vec2` | Output vector for storing the bottom left corner coordinates of the Obb object  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out_tl` | `Vec2` | Output vector for storing the top left corner coordinates of the Obb object  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out_tr` | `Vec2` | Output vector for storing the top right corner coordinates of the Obb object  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out_br` | `Vec2` | Output vector for storing the bottom right corner coordinates of the Obb object  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rect` | `Rect` | The rect object to apply transform.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `anAffineTransform` | `AffineTransform` | transform matrix.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L206)&nbsp;
___
### invert
<div style="margin-left: 10px;">

▸ `static`  **invert**<`void`\>(`out: AffineTransform, t: AffineTransform`) : `void`




**`zh`** 将矩阵求逆的结果赋值给出口矩阵。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AffineTransform` | Out object to store the invert result  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `AffineTransform` | the input `AffineTransform` object  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L93)&nbsp;
___
### identity
<div style="margin-left: 10px;">

▸ `static`  **identity**<`AffineTransform`\> : `AffineTransform`




**`zh`** 创建单位二维仿射变换矩阵，它不进行任何变换。





<!---->
<!--    #### Returns `AffineTransform` -->
<!---->


##### Returns `AffineTransform`




</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L48)&nbsp;
___
### fromMat4
<div style="margin-left: 10px;">

▸ `static`  **fromMat4**<`void`\>(`out: AffineTransform, mat: Mat4`) : `void`




**`zh`** 将四维矩阵转换为二维仿射变换矩阵并赋值给出口矩阵。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AffineTransform` | The output matrix to store the result  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat4` | transform matrix.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L109)&nbsp;
___
### concat
<div style="margin-left: 10px;">

▸ `static`  **concat**<`void`\>(`out: AffineTransform, t1: AffineTransform, t2: AffineTransform`) : `void`




**`zh`** 将两个矩阵相乘的结果赋值给出口矩阵。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AffineTransform` | Out object to store the concat result  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t1` | `AffineTransform` | The first transform object.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t2` | `AffineTransform` | The transform object to concatenate.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L72)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`AffineTransform`\>(`affineTransform: AffineTransform`) : `AffineTransform`




**`zh`** 克隆指定的二维仿射变换矩阵。




<!---->
<!--    #### Returns `AffineTransform` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `affineTransform` | `AffineTransform` | Specified `AffineTransform` objects  |



##### Returns `AffineTransform`




</div>

##### Defined in &nbsp;   [cocos/core/math/affine-transform.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/affine-transform.ts#L57)&nbsp;
___
<!---->




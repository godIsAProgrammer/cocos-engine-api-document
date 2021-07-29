
## Class: Triangle







**`en`** 
Basic Geometry: Triangle.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ a](#a)
- [ b](#b)
- [ c](#c)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  set](#set)
- [ **`static`**  fromPoints](#fromPoints)
- [ **`static`**  create](#create)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
</div>

## Properties


### a
<div style="margin-left: 10px;">




**`en`** 
Point a.




•  **a**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L158)&nbsp;


___


### b
<div style="margin-left: 10px;">




**`en`** 
Point b.




•  **b**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L166)&nbsp;


___


### c
<div style="margin-left: 10px;">




**`en`** 
Point c.




•  **c**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L174)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`en`** 
Gets the type of the shape.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L182)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Triangle**(`ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `ax` | `number` |





| Name | Type |
| :------ | :------ |
| `ay` | `number` |





| Name | Type |
| :------ | :------ |
| `az` | `number` |





| Name | Type |
| :------ | :------ |
| `bx` | `number` |





| Name | Type |
| :------ | :------ |
| `by` | `number` |





| Name | Type |
| :------ | :------ |
| `bz` | `number` |





| Name | Type |
| :------ | :------ |
| `cx` | `number` |





| Name | Type |
| :------ | :------ |
| `cy` | `number` |





| Name | Type |
| :------ | :------ |
| `cz` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L186)&nbsp;


---

<!---->
## Methods

### set
<div style="margin-left: 10px;">

▸ `static`  **set**<`Triangle`\>(`out: Triangle, ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number`) : `Triangle`




**`en`** 
Set the components of a triangle to the given values




**`function`** 





<!---->
<!--    #### Returns `Triangle` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Triangle` | 给定的三角形。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ax` | `number` | a 点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ay` | `number` | a 点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `az` | `number` | a 点的 z 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bx` | `number` | b 点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `by` | `number` | b 点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bz` | `number` | b 点的 z 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | c 点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cy` | `number` | c 点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cz` | `number` | c 点的 z 部分。  |



##### Returns `Triangle`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L133)&nbsp;
___
### fromPoints
<div style="margin-left: 10px;">

▸ `static`  **fromPoints**<`Triangle`\>(`out: Triangle, a: Vec3, b: Vec3, c: Vec3`) : `Triangle`




**`en`** 
Create a triangle from three points




<!---->
<!--    #### Returns `Triangle` out 接受操作的 triangle。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Triangle` | 接受操作的 triangle。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Vec3` | a 点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `Vec3` | b 点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `c` | `Vec3` | c 点。  |



##### Returns `Triangle`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L108)&nbsp;
___
### create
<div style="margin-left: 10px;">

▸ `static`  **create**<`Triangle`\>(`ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number`) : `Triangle`




**`en`** 
create a new triangle




<!---->
<!--    #### Returns `Triangle` 一个新的 triangle。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ax` | `number` | a 点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ay` | `number` | a 点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `az` | `number` | a 点的 z 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bx` | `number` | b 点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `by` | `number` | b 点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bz` | `number` | b 点的 z 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | c 点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cy` | `number` | c 点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cz` | `number` | c 点的 z 部分。  |



##### Returns `Triangle`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L58)&nbsp;
___
### copy
<div style="margin-left: 10px;">

▸ `static`  **copy**<`Triangle`\>(`out: Triangle, t: Triangle`) : `Triangle`




**`en`** 
copy the values from one triangle to another




<!---->
<!--    #### Returns `Triangle` out 接受操作的 triangle。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Triangle` | 接受操作的 triangle。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `Triangle` | 被复制的 triangle。  |



##### Returns `Triangle`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L89)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Triangle`\>(`t: Triangle`) : `Triangle`




**`en`** 
clone a new triangle




<!---->
<!--    #### Returns `Triangle` 克隆出的新对象。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `Triangle` | 克隆的目标。  |



##### Returns `Triangle`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L72)&nbsp;
___
<!---->



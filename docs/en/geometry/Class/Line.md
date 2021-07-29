
## Class: Line







**`en`** 
Basic Geometry: Line.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ e](#e)
- [ s](#s)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  set](#set)
- [ **`static`**  len](#len)
- [ **`static`**  fromPoints](#fromPoints)
- [ **`static`**  create](#create)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ length](#length)
</div>

## Properties


### e
<div style="margin-left: 10px;">




•  **e**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L151)&nbsp;


___


### s
<div style="margin-left: 10px;">




•  **s**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L145)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`en`** 
Gets the type of the shape.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L159)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Line**(`sx: number, sy: number, sz: number, ex: number, ey: number, ez: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `sx` | `number` |





| Name | Type |
| :------ | :------ |
| `sy` | `number` |





| Name | Type |
| :------ | :------ |
| `sz` | `number` |





| Name | Type |
| :------ | :------ |
| `ex` | `number` |





| Name | Type |
| :------ | :------ |
| `ey` | `number` |





| Name | Type |
| :------ | :------ |
| `ez` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L163)&nbsp;


---

<!---->
## Methods

### set
<div style="margin-left: 10px;">

▸ `static`  **set**<`Line`\>(`out: Line, sx: number, sy: number, sz: number, ex: number, ey: number, ez: number`) : `Line`




**`en`** 
Set the components of a Vec3 to the given values




<!---->
<!--    #### Returns `Line` out 接受操作的对象。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Line` | 接受操作的对象。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `sx` | `number` | 起点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `sy` | `number` | 起点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `sz` | `number` | 起点的 z 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ex` | `number` | 终点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ey` | `number` | 终点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ez` | `number` | 终点的 z 部分。  |



##### Returns `Line`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L120)&nbsp;
___
### len
<div style="margin-left: 10px;">

▸ `static`  **len**<`number`\>(`a: Line`) : `number`




<!---->
<!--    #### Returns `number` 长度。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Line` | 要计算的线。  |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L137)&nbsp;
___
### fromPoints
<div style="margin-left: 10px;">

▸ `static`  **fromPoints**<`Line`\>(`out: Line, start: Vec3, end: Vec3`) : `Line`




**`en`** 
create a line from two points




<!---->
<!--    #### Returns `Line` out 接受操作的对象。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Line` | 接受操作的对象。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `start` | `Vec3` | 起点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `end` | `Vec3` | 终点。  |



##### Returns `Line`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L100)&nbsp;
___
### create
<div style="margin-left: 10px;">

▸ `static`  **create**<`Line`\>(`sx: number, sy: number, sz: number, ex: number, ey: number, ez: number`) : `Line`




**`en`** 
create a new line




<!---->
<!--    #### Returns `Line` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sx` | `number` | 起点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `sy` | `number` | 起点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `sz` | `number` | 起点的 z 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ex` | `number` | 终点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ey` | `number` | 终点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ez` | `number` | 终点的 z 部分。  |



##### Returns `Line`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L55)&nbsp;
___
### copy
<div style="margin-left: 10px;">

▸ `static`  **copy**<`Line`\>(`out: Line, a: Line`) : `Line`




**`en`** 
Copy the values from one Line to another




<!---->
<!--    #### Returns `Line` 接受操作的对象。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Line` | 接受操作的对象。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Line` | 复制的来源。  |



##### Returns `Line`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L83)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Line`\>(`a: Line`) : `Line`




**`en`** 
Creates a new Line initialized with values from an existing Line




<!---->
<!--    #### Returns `Line` 克隆出的对象。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Line` | 克隆的来源。  |



##### Returns `Line`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L67)&nbsp;
___
### length
<div style="margin-left: 10px;">

▸   **length**<`number`\> : `number`




<!---->
<!--    #### Returns `number` 长度。
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/line.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/line.ts#L186)&nbsp;
___
<!---->




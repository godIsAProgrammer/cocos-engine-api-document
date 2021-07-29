
## Class: Ray







**`en`** 
Basic Geometry: ray.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ d](#d)
- [ o](#o)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  set](#set)
- [ **`static`**  fromPoints](#fromPoints)
- [ **`static`**  create](#create)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ computeHit](#computeHit)
</div>

## Properties


### d
<div style="margin-left: 10px;">




**`en`** 
The direction of the ray.




•  **d**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L146)&nbsp;


___


### o
<div style="margin-left: 10px;">




**`en`** 
The origin of the ray.




•  **o**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L138)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`en`** 
Gets the type of the shape.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L154)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Ray**(`ox: number, oy: number, oz: number, dx: number, dy: number, dz: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `ox` | `number` |





| Name | Type |
| :------ | :------ |
| `oy` | `number` |





| Name | Type |
| :------ | :------ |
| `oz` | `number` |





| Name | Type |
| :------ | :------ |
| `dx` | `number` |





| Name | Type |
| :------ | :------ |
| `dy` | `number` |





| Name | Type |
| :------ | :------ |
| `dz` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L158)&nbsp;


---

<!---->
## Methods

### set
<div style="margin-left: 10px;">

▸ `static`  **set**<`Ray`\>(`out: Ray, ox: number, oy: number, oz: number, dx: number, dy: number, dz: number`) : `Ray`




**`en`** 
Set the components of a ray to the given values




<!---->
<!--    #### Returns `Ray` out 接受操作的射线。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Ray` | 接受操作的射线。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ox` | `number` | 起点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `oy` | `number` | 起点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `oz` | `number` | 起点的 z 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dx` | `number` | 方向的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dy` | `number` | 方向的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dz` | `number` | 方向的 z 部分。  |



##### Returns `Ray`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L121)&nbsp;
___
### fromPoints
<div style="margin-left: 10px;">

▸ `static`  **fromPoints**<`Ray`\>(`out: Ray, origin: Vec3, target: Vec3`) : `Ray`




**`en`** 
create a ray from two points




<!---->
<!--    #### Returns `Ray` out 接受操作的射线。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Ray` | 接受操作的射线。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `origin` | `Vec3` | 射线的起点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `Vec3` | 射线上的一点。  |



##### Returns `Ray`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L101)&nbsp;
___
### create
<div style="margin-left: 10px;">

▸ `static`  **create**<`Ray`\>(`ox: number, oy: number, oz: number, dx: number, dy: number, dz: number`) : `Ray`




**`en`** 
create a new ray




<!---->
<!--    #### Returns `Ray` 射线。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ox` | `number` | 起点的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `oy` | `number` | 起点的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `oz` | `number` | 起点的 z 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dx` | `number` | 方向的 x 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dy` | `number` | 方向的 y 部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dz` | `number` | 方向的 z 部分。  |



##### Returns `Ray`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L56)&nbsp;
___
### copy
<div style="margin-left: 10px;">

▸ `static`  **copy**<`Ray`\>(`out: Ray, a: Ray`) : `Ray`




**`en`** 
Copy the values from one ray to another




<!---->
<!--    #### Returns `Ray` out 接受操作的 ray。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Ray` | 接受操作的 ray。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Ray` | 被复制的 ray。  |



##### Returns `Ray`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L84)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Ray`\>(`a: Ray`) : `Ray`




**`en`** 
Creates a new ray initialized with values from an existing ray




<!---->
<!--    #### Returns `Ray` 克隆出的新对象。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Ray` | 克隆的目标。  |



##### Returns `Ray`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L68)&nbsp;
___
### computeHit
<div style="margin-left: 10px;">

▸   **computeHit**<`void`\>(`out: IVec3Like, distance: number`) : `void`




**`en`** 
Compute a point with the distance between the origin.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `IVec3Like` | 射线上的另一点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `distance` | `number` | 给定距离。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/ray.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/ray.ts#L187)&nbsp;
___
<!---->




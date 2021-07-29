
## Class: Sphere






**`en`** 
Basic Geometry: Sphere.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ center](#center)
- [ handle](#handle)
- [ radius](#radius)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  set](#set)
- [ **`static`**  mergePoint](#mergePoint)
- [ **`static`**  mergeAABB](#mergeAABB)
- [ **`static`**  fromPoints](#fromPoints)
- [ **`static`**  create](#create)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ clone](#clone)
- [ copy](#copy)
- [ destroy](#destroy)
- [ getBoundary](#getBoundary)
- [ setScale](#setScale)
- [ transform](#transform)
- [ translateAndRotate](#translateAndRotate)
</div>

## Properties


### center
<div style="margin-left: 10px;">




•  **center**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L178)&nbsp;   [cocos/core/geometry/sphere.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L182)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``IHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:202](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L202)&nbsp;


___


### radius
<div style="margin-left: 10px;">



**`en`** 
The radius of this sphere.




•  **radius**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L193)&nbsp;   [cocos/core/geometry/sphere.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L197)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`en`** 
Gets the type of the shape.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L212)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Sphere**(`cx: number, cy: number, cz: number, r: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cx` | `number` |
| `cy` | `number` |
| `cz` | `number` |
| `r` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:216](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L216)&nbsp;


---

<!---->
## Methods

### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`Sphere`\>(`out: Sphere, cx: number, cy: number, cz: number, r: number`) : `Sphere`



**`en`** 
Set the components of a sphere to the given values



**`function`** 




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Sphere` | 接受操作的 sphere。  |
| `cx` | `number` | 形状的相对于原点的 X 坐标。  |
| `cy` | `number` | 形状的相对于原点的 Y 坐标。  |
| `cz` | `number` | 形状的相对于原点的 Z 坐标。  |
| `r` | `number` | 半径。  |


##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L122)&nbsp;
___
### mergePoint

<div style="margin-left: 10px;">

▸ `static`  **mergePoint**<`Sphere`\>(`out: Sphere, s: Sphere, point: Vec3`) : `Sphere`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Sphere` | - |
| `s` | `Sphere` | - |
| `point` | `Vec3` | - |


##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L135)&nbsp;
___
### mergeAABB

<div style="margin-left: 10px;">

▸ `static`  **mergeAABB**<`Sphere`\>(`out: Sphere, s: Sphere, a: AABB`) : `Sphere`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Sphere` | - |
| `s` | `Sphere` | - |
| `a` | `AABB` | - |


##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:162](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L162)&nbsp;
___
### fromPoints

<div style="margin-left: 10px;">

▸ `static`  **fromPoints**<`Sphere`\>(`out: Sphere, minPos: Vec3, maxPos: Vec3`) : `Sphere`



**`en`** 
create a new bounding sphere from two corner points



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Sphere` | 接受操作的 sphere。  |
| `minPos` | `Vec3` | sphere 的最小点。  |
| `maxPos` | `Vec3` | sphere 的最大点。  |


##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L103)&nbsp;
___
### create

<div style="margin-left: 10px;">

▸ `static`  **create**<`Sphere`\>(`cx: number, cy: number, cz: number, r: number`) : `Sphere`



**`en`** 
create a new sphere



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | 形状的相对于原点的 X 坐标。  |
| `cy` | `number` | 形状的相对于原点的 Y 坐标。  |
| `cz` | `number` | 形状的相对于原点的 Z 坐标。  |
| `r` | `number` | 球体的半径  |


##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L61)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸ `static`  **copy**<`Sphere`\>(`out: Sphere, p: Sphere`) : `Sphere`



**`en`** 
copy the values from one sphere to another



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Sphere` | 接受操作的 sphere。  |
| `p` | `Sphere` | - |


##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L86)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`Sphere`\>(`p: Sphere`) : `Sphere`



**`en`** 
clone a new sphere



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Sphere` | 克隆的目标。  |


##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L73)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸   **clone**<`Sphere`\> : `Sphere`



**`en`** 
Get a clone.




##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L249)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸   **copy**<`Sphere`\>(`a: Sphere`) : `Sphere`



**`en`** 
Copy a sphere.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `Sphere` | 拷贝的目标。  |


##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L260)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L236)&nbsp;
___
### getBoundary

<div style="margin-left: 10px;">

▸   **getBoundary**<`void`\>(`minPos: Vec3, maxPos: Vec3`) : `void`



**`en`** 
Get the bounding points of this shape



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minPos` | `Vec3` | 最小点。  |
| `maxPos` | `Vec3` | 最大点。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L272)&nbsp;
___
### setScale

<div style="margin-left: 10px;">

▸   **setScale**<`void`\>(`scale: Vec3, out: Sphere`) : `void`



**`en`** 
Scaling this sphere.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `Vec3` | 缩放值。  |
| `out` | `Sphere` | 缩放的目标。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:314](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L314)&nbsp;
___
### transform

<div style="margin-left: 10px;">

▸   **transform**<`void`\>(`m: Mat4, pos: Vec3, rot: Quat, scale: Vec3, out: Sphere`) : `void`



**`en`** 
Transform this shape



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Mat4` | 变换的矩阵。  |
| `pos` | `Vec3` | 变换的位置部分。  |
| `rot` | `Quat` | 变换的旋转部分。  |
| `scale` | `Vec3` | 变换的缩放部分。  |
| `out` | `Sphere` | 变换的目标。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L288)&nbsp;
___
### translateAndRotate

<div style="margin-left: 10px;">

▸   **translateAndRotate**<`void`\>(`m: Mat4, rot: Quat, out: Sphere`) : `void`



**`en`** 
Translate and rotate this sphere.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Mat4` | 变换的矩阵。  |
| `rot` | `Quat` | 变换的旋转部分。  |
| `out` | `Sphere` | 变换的目标。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/sphere.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/sphere.ts#L302)&nbsp;
___
<!---->




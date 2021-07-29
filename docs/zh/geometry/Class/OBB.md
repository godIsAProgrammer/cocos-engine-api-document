
## Class: OBB






**`zh`** 
基础几何  方向包围盒。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ center](#center)
- [ halfExtents](#halfExtents)
- [ orientation](#orientation)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  set](#set)
- [ **`static`**  fromPoints](#fromPoints)
- [ **`static`**  create](#create)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ getBoundary](#getBoundary)
- [ setScale](#setScale)
- [ transform](#transform)
- [ translateAndRotate](#translateAndRotate)
</div>

## Properties


### center
<div style="margin-left: 10px;">



**`zh`** 
本地坐标的中心点。





•  **center**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L176)&nbsp;


___


### halfExtents
<div style="margin-left: 10px;">



**`zh`** 
长宽高的一半。





•  **halfExtents**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L182)&nbsp;


___


### orientation
<div style="margin-left: 10px;">



**`zh`** 
方向矩阵。





•  **orientation**:
`Mat3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:188](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L188)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`zh`** 
获取形状的类型。





•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L196)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new OBB**(`cx: number, cy: number, cz: number, hw: number, hh: number, hl: number, ox_1: number, ox_2: number, ox_3: number, oy_1: number, oy_2: number, oy_3: number, oz_1: number, oz_2: number, oz_3: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cx` | `number` |
| `cy` | `number` |
| `cz` | `number` |
| `hw` | `number` |
| `hh` | `number` |
| `hl` | `number` |
| `ox_1` | `number` |
| `ox_2` | `number` |
| `ox_3` | `number` |
| `oy_1` | `number` |
| `oy_2` | `number` |
| `oy_3` | `number` |
| `oz_1` | `number` |
| `oz_2` | `number` |
| `oz_3` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:200](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L200)&nbsp;


---

<!---->
## Methods

### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`OBB`\>(`out: OBB, cx: number, cy: number, cz: number, hw: number, hh: number, hl: number, ox_1: number, ox_2: number, ox_3: number, oy_1: number, oy_2: number, oy_3: number, oz_1: number, oz_2: number, oz_3: number`) : `OBB`



**`zh`** 
将给定 obb 的属性设置为给定的值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `OBB` | - |
| `cx` | `number` | obb 的原点的 X 坐标。  |
| `cy` | `number` | obb 的原点的 Y 坐标。  |
| `cz` | `number` | obb 的原点的 Z 坐标。  |
| `hw` | `number` | obb 宽度的一半。  |
| `hh` | `number` | obb 高度的一半。  |
| `hl` | `number` | obb 长度的一半。  |
| `ox_1` | `number` | 方向矩阵参数。  |
| `ox_2` | `number` | 方向矩阵参数。  |
| `ox_3` | `number` | 方向矩阵参数。  |
| `oy_1` | `number` | 方向矩阵参数。  |
| `oy_2` | `number` | 方向矩阵参数。  |
| `oy_3` | `number` | 方向矩阵参数。  |
| `oz_1` | `number` | 方向矩阵参数。  |
| `oz_2` | `number` | 方向矩阵参数。  |
| `oz_3` | `number` | 方向矩阵参数。  |


##### Returns `OBB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L158)&nbsp;
___
### fromPoints

<div style="margin-left: 10px;">

▸ `static`  **fromPoints**<`OBB`\>(`out: OBB, minPos: Vec3, maxPos: Vec3`) : `OBB`



**`zh`** 
用两个点创建一个新的 obb。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `OBB` | 接受操作的 obb。  |
| `minPos` | `Vec3` | obb 的最小点。  |
| `maxPos` | `Vec3` | obb 的最大点。  |


##### Returns `OBB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L129)&nbsp;
___
### create

<div style="margin-left: 10px;">

▸ `static`  **create**<`OBB`\>(`cx: number, cy: number, cz: number, hw: number, hh: number, hl: number, ox_1: number, ox_2: number, ox_3: number, oy_1: number, oy_2: number, oy_3: number, oz_1: number, oz_2: number, oz_3: number`) : `OBB`



**`zh`** 
创建一个新的 obb 实例。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | 形状的相对于原点的 X 坐标。  |
| `cy` | `number` | 形状的相对于原点的 Y 坐标。  |
| `cz` | `number` | 形状的相对于原点的 Z 坐标。  |
| `hw` | `number` | obb 宽度的一半。  |
| `hh` | `number` | obb 高度的一半。  |
| `hl` | `number` | obb 长度的一半。  |
| `ox_1` | `number` | 方向矩阵参数。  |
| `ox_2` | `number` | 方向矩阵参数。  |
| `ox_3` | `number` | 方向矩阵参数。  |
| `oy_1` | `number` | 方向矩阵参数。  |
| `oy_2` | `number` | 方向矩阵参数。  |
| `oy_3` | `number` | 方向矩阵参数。  |
| `oz_1` | `number` | 方向矩阵参数。  |
| `oz_2` | `number` | 方向矩阵参数。  |
| `oz_3` | `number` | 方向矩阵参数。  |


##### Returns `OBB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L76)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸ `static`  **copy**<`OBB`\>(`out: OBB, a: OBB`) : `OBB`



**`zh`** 
将从一个 obb 的值复制到另一个 obb。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `OBB` | 接受操作的 obb。  |
| `a` | `OBB` | 被复制的 obb。  |


##### Returns `OBB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L111)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`OBB`\>(`a: OBB`) : `OBB`



**`zh`** 
克隆一个 obb。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `OBB` | 克隆的目标。  |


##### Returns `OBB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L94)&nbsp;
___
### getBoundary

<div style="margin-left: 10px;">

▸   **getBoundary**<`void`\>(`minPos: Vec3, maxPos: Vec3`) : `void`



**`zh`** 
获取 obb 的最小点和最大点。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minPos` | `Vec3` | 最小点。  |
| `maxPos` | `Vec3` | 最大点。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L221)&nbsp;
___
### setScale

<div style="margin-left: 10px;">

▸   **setScale**<`void`\>(`scale: Vec3, out: OBB`) : `void`



**`zh`** 
 将 out 根据这个 obb 的数据进行缩放。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `Vec3` | 缩放值。  |
| `out` | `OBB` | 缩放的目标。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L263)&nbsp;
___
### transform

<div style="margin-left: 10px;">

▸   **transform**<`void`\>(`m: Mat4, pos: Vec3, rot: Quat, scale: Vec3, out: OBB`) : `void`



**`zh`** 
将 out 根据这个 obb 的数据进行变换。


Transform this shape

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Mat4` | 变换的矩阵。  |
| `pos` | `Vec3` | 变换的位置部分。  |
| `rot` | `Quat` | 变换的旋转部分。  |
| `scale` | `Vec3` | 变换的缩放部分。  |
| `out` | `OBB` | 变换的目标。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L237)&nbsp;
___
### translateAndRotate

<div style="margin-left: 10px;">

▸   **translateAndRotate**<`void`\>(`m: Mat4, rot: Quat, out: OBB`) : `void`



**`zh`** 
将 out 根据这个 obb 的数据进行变换。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Mat4` | 变换的矩阵。  |
| `rot` | `Quat` | 变换的旋转部分。  |
| `out` | `OBB` | 变换的目标。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/obb.ts:251](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/obb.ts#L251)&nbsp;
___
<!---->




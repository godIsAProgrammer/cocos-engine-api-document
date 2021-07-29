
## Class: AABB






**`zh`** 
基础几何  轴对齐包围盒，使用中心点和半长宽高的结构。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ center](#center)
- [ halfExtents](#halfExtents)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  transform](#transform)
- [ **`static`**  toBoundingSphere](#toBoundingSphere)
- [ **`static`**  set](#set)
- [ **`static`**  merge](#merge)
- [ **`static`**  fromPoints](#fromPoints)
- [ **`static`**  create](#create)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ clone](#clone)
- [ copy](#copy)
- [ getBoundary](#getBoundary)
- [ transform](#transform)
</div>

## Properties


### center
<div style="margin-left: 10px;">



**`zh`** 
本地坐标的中心点。





•  **center**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:209](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L209)&nbsp;


___


### halfExtents
<div style="margin-left: 10px;">



**`zh`** 
长宽高的一半。





•  **halfExtents**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L215)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`zh`** 
获取形状的类型。





•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L223)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new AABB**(`px: number, py: number, pz: number, hw: number, hh: number, hl: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `px` | `number` |
| `py` | `number` |
| `pz` | `number` |
| `hw` | `number` |
| `hh` | `number` |
| `hl` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L227)&nbsp;


---

<!---->
## Methods

### transform

<div style="margin-left: 10px;">

▸ `static`  **transform**<`AABB`\>(`out: AABB, a: AABB, matrix: Mat4`) : `AABB`



**`zh`** 
变换一个 AABB 到 out 中。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |
| `a` | `AABB` | 输入的源 AABB。  |
| `matrix` | `Mat4` | 矩阵。  |


##### Returns `AABB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L199)&nbsp;
___
### toBoundingSphere

<div style="margin-left: 10px;">

▸ `static`  **toBoundingSphere**<`Sphere`\>(`out: Sphere, a: AABB`) : `Sphere`



**`zh`** 
包围盒转包围球



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Sphere` | 接受操作的 sphere。  |
| `a` | `AABB` | 输入的 AABB。  |


##### Returns `Sphere`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L170)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`AABB`\>(`out: AABB, px: number, py: number, pz: number, hw: number, hh: number, hl: number`) : `AABB`



**`zh`** 
将 AABB 的属性设置为给定的值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |
| `px` | `number` | AABB 的原点的 X 坐标。  |
| `py` | `number` | AABB 的原点的 Y 坐标。  |
| `pz` | `number` | AABB 的原点的 Z 坐标。  |
| `hw` | `number` | AABB 宽度的一半。  |
| `hh` | `number` | AABB 高度的一半。  |
| `hl` | `number` | AABB 长度度的一半。  |


##### Returns `AABB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L136)&nbsp;
___
### merge

<div style="margin-left: 10px;">

▸ `static`  **merge**<`AABB`\>(`out: AABB, a: AABB, b: AABB`) : `AABB`



**`zh`** 
合并两个 AABB 到 out。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |
| `a` | `AABB` | 输入的 AABB。  |
| `b` | `AABB` | 输入的 AABB。  |


##### Returns `AABB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L152)&nbsp;
___
### fromPoints

<div style="margin-left: 10px;">

▸ `static`  **fromPoints**<`AABB`\>(`out: AABB, minPos: IVec3Like, maxPos: IVec3Like`) : `AABB`



**`zh`** 
从两个点创建一个新的 AABB。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |
| `minPos` | `IVec3Like` | AABB 的最小点。  |
| `maxPos` | `IVec3Like` | AABB 的最大点。  |


##### Returns `AABB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L114)&nbsp;
___
### create

<div style="margin-left: 10px;">

▸ `static`  **create**<`AABB`\>(`px: undefined | number, py: undefined | number, pz: undefined | number, hw: undefined | number, hh: undefined | number, hl: undefined | number`) : `AABB`



**`zh`** 
创建一个新的 AABB 实例。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `px` | `undefined \| number` | AABB 的原点的 X 坐标。  |
| `py` | `undefined \| number` | AABB 的原点的 Y 坐标。  |
| `pz` | `undefined \| number` | AABB 的原点的 Z 坐标。  |
| `hw` | `undefined \| number` | AABB 宽度的一半。  |
| `hh` | `undefined \| number` | AABB 高度的一半。  |
| `hl` | `undefined \| number` | AABB 长度的一半。  |


##### Returns `AABB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L71)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸ `static`  **copy**<`AABB`\>(`out: AABB, a: AABB`) : `AABB`



**`zh`** 
将从一个 AABB 的值复制到另一个 AABB。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |
| `a` | `AABB` | 被复制的 AABB。  |


##### Returns `AABB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L97)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`AABB`\>(`a: AABB`) : `AABB`



**`zh`** 
克隆一个 AABB。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `AABB` | 克隆的目标。  |


##### Returns `AABB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L83)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸   **clone**<`AABB`\> : `AABB`



**`zh`** 
获得克隆。




##### Returns `AABB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:269](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L269)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸   **copy**<`AABB`\>(`a: AABB`) : `AABB`



**`zh`** 
拷贝对象。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `AABB` | 拷贝的目标。  |


##### Returns `AABB`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L279)&nbsp;
___
### getBoundary

<div style="margin-left: 10px;">

▸   **getBoundary**<`void`\>(`minPos: IVec3Like, maxPos: IVec3Like`) : `void`



**`zh`** 
获取 AABB 的最小点和最大点。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minPos` | `IVec3Like` | 最小点。  |
| `maxPos` | `IVec3Like` | 最大点。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:243](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L243)&nbsp;
___
### transform

<div style="margin-left: 10px;">

▸   **transform**<`void`\>(`m: Mat4, pos: Vec3 | null, rot: Quat | null, scale: Vec3 | null, out: AABB`) : `void`



**`zh`** 
将 out 根据这个 AABB 的数据进行变换。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Mat4` | 变换的矩阵。  |
| `pos` | `Vec3 \| null` | 变换的位置部分。  |
| `rot` | `Quat \| null` | 变换的旋转部分。  |
| `scale` | `Vec3 \| null` | 变换的缩放部分。  |
| `out` | `AABB` | 变换的目标。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L259)&nbsp;
___
<!---->




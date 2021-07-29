
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





| Name | Type |
| :------ | :------ |
| `py` | `number` |





| Name | Type |
| :------ | :------ |
| `pz` | `number` |





| Name | Type |
| :------ | :------ |
| `hw` | `number` |





| Name | Type |
| :------ | :------ |
| `hh` | `number` |





| Name | Type |
| :------ | :------ |
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




<!---->
<!--    #### Returns `AABB` out 接受操作的 AABB。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `AABB` | 输入的源 AABB。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `Sphere` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Sphere` | 接受操作的 sphere。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `AABB` out 接受操作的 AABB。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `px` | `number` | AABB 的原点的 X 坐标。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `py` | `number` | AABB 的原点的 Y 坐标。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `pz` | `number` | AABB 的原点的 Z 坐标。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `hw` | `number` | AABB 宽度的一半。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `hh` | `number` | AABB 高度的一半。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `AABB` out 接受操作的 AABB。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `AABB` | 输入的 AABB。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `AABB` out 接受操作的 AABB。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `minPos` | `IVec3Like` | AABB 的最小点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `AABB` 返回新创建的 AABB 实例。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `px` | `undefined \| number` | AABB 的原点的 X 坐标。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `py` | `undefined \| number` | AABB 的原点的 Y 坐标。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `pz` | `undefined \| number` | AABB 的原点的 Z 坐标。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `hw` | `undefined \| number` | AABB 宽度的一半。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `hh` | `undefined \| number` | AABB 高度的一半。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `AABB` out 接受操作的 AABB。
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 接受操作的 AABB。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `AABB` 克隆出的 AABB。
-->
<!---->

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




<!---->
<!--    #### Returns `AABB` 
-->
<!---->


##### Returns `AABB`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:269](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L269)&nbsp;
___
### copy
<div style="margin-left: 10px;">

▸   **copy**<`AABB`\>(`a: AABB`) : `AABB`




**`zh`** 
拷贝对象。




<!---->
<!--    #### Returns `AABB` 
-->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minPos` | `IVec3Like` | 最小点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Mat4` | 变换的矩阵。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `pos` | `Vec3 \| null` | 变换的位置部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rot` | `Quat \| null` | 变换的旋转部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `Vec3 \| null` | 变换的缩放部分。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | 变换的目标。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/aabb.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/aabb.ts#L259)&nbsp;
___
<!---->




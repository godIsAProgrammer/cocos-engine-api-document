
## Class: Frustum







**`en`** 
Basic Geometry: frustum.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  createOrtho](#createOrtho)
- [ planes](#planes)
- [ vertices](#vertices)
- [ accurate](#accurate)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  create](#create)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ transform](#transform)
- [ update](#update)
</div>

## Properties


### createOrtho
<div style="margin-left: 10px;">




**`en`** 
Create a ortho frustum.




**`param`** 正交视锥体。




**`param`** 正交视锥体的宽度。




**`param`** 正交视锥体的高度。




**`param`** 正交视锥体的近平面值。




**`param`** 正交视锥体的远平面值。




**`param`** 正交视锥体的变换矩阵。




**`returns`** frustum.





• `static` **createOrtho**:
`(Anonymous function)`  = `(() => {
        const _temp_v3 = new Vec3();
        return (out: Frustum, width: number, height: number, near: number, far: number, transform: Mat4) => {
            const halfWidth = width / 2;
            const halfHeight = height / 2;
            Vec3.set(_temp_v3, halfWidth, halfHeight, near);
            Vec3.transformMat4(out.vertices[0], _temp_v3, transform);
            Vec3.set(_temp_v3, -halfWidth, halfHeight, near);
            Vec3.transformMat4(out.vertices[1], _temp_v3, transform);
            Vec3.set(_temp_v3, -halfWidth, -halfHeight, near);
            Vec3.transformMat4(out.vertices[2], _temp_v3, transform);
            Vec3.set(_temp_v3, halfWidth, -halfHeight, near);
            Vec3.transformMat4(out.vertices[3], _temp_v3, transform);
            Vec3.set(_temp_v3, halfWidth, halfHeight, far);
            Vec3.transformMat4(out.vertices[4], _temp_v3, transform);
            Vec3.set(_temp_v3, -halfWidth, halfHeight, far);
            Vec3.transformMat4(out.vertices[5], _temp_v3, transform);
            Vec3.set(_temp_v3, -halfWidth, -halfHeight, far);
            Vec3.transformMat4(out.vertices[6], _temp_v3, transform);
            Vec3.set(_temp_v3, halfWidth, -halfHeight, far);
            Vec3.transformMat4(out.vertices[7], _temp_v3, transform);

            Plane.fromPoints(out.planes[0], out.vertices[1], out.vertices[6], out.vertices[5]);
            Plane.fromPoints(out.planes[1], out.vertices[3], out.vertices[4], out.vertices[7]);
            Plane.fromPoints(out.planes[2], out.vertices[6], out.vertices[3], out.vertices[7]);
            Plane.fromPoints(out.planes[3], out.vertices[0], out.vertices[5], out.vertices[4]);
            Plane.fromPoints(out.planes[4], out.vertices[2], out.vertices[0], out.vertices[3]);
            Plane.fromPoints(out.planes[0], out.vertices[7], out.vertices[5], out.vertices[6]);
        };
    })()`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L77)&nbsp;


___


### planes
<div style="margin-left: 10px;">




•  **planes**:
`array` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L158)&nbsp;


___


### vertices
<div style="margin-left: 10px;">




•  **vertices**:
`array` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L159)&nbsp;


___


### accurate
<div style="margin-left: 10px;">




**`en`** 
Set whether to use accurate intersection testing function on this frustum.




•  **accurate**:
 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L60)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`en`** 
Gets the type of the shape.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L152)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Frustum**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L159)&nbsp;


---

<!---->
## Methods

### create
<div style="margin-left: 10px;">

▸ `static`  **create**<`Frustum`\> : `Frustum`




**`en`** 
create a new frustum.




<!---->
<!--    #### Returns `Frustum` frustum.
-->
<!---->


##### Returns `Frustum`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L115)&nbsp;
___
### copy
<div style="margin-left: 10px;">

▸ `static`  **copy**<`Frustum`\>(`out: Frustum, f: Frustum`) : `Frustum`




**`en`** 
Copy the values from one frustum to another.




<!---->
<!--    #### Returns `Frustum` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Frustum` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `f` | `Frustum` | - |



##### Returns `Frustum`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L135)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸ `static`  **clone**<`Frustum`\>(`f: Frustum`) : `Frustum`




**`en`** 
Clone a frustum.




<!---->
<!--    #### Returns `Frustum` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `f` | `Frustum` | - |



##### Returns `Frustum`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L125)&nbsp;
___
### transform
<div style="margin-left: 10px;">

▸   **transform**<`void`\>(`mat: Mat4`) : `void`




**`en`** 
Transform this frustum.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat4` | 变换矩阵。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L228)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`m: Mat4, inv: Mat4`) : `void`




**`en`** 
Update the frustum information according to the given transform matrix.
Note that the resulting planes are not normalized under normal mode.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Mat4` | the view-projection matrix  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `inv` | `Mat4` | the inverse view-projection matrix  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L182)&nbsp;
___
<!---->




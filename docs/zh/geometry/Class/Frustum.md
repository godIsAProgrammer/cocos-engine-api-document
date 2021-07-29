
## Class: Frustum






**`zh`** 
基础几何 截头锥体。



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



**`zh`** 
创建一个正交视锥体。



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



**`zh`** 
设置是否在此截锥体上使用精确的相交测试函数。





•  **accurate**:
 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L60)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`zh`** 
获取形状的类型。





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

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L159)&nbsp;


---

<!---->
## Methods

### create

<div style="margin-left: 10px;">

▸ `static`  **create**<`Frustum`\> : `Frustum`



**`zh`** 
创建一个新的截锥体。




##### Returns `Frustum`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L115)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸ `static`  **copy**<`Frustum`\>(`out: Frustum, f: Frustum`) : `Frustum`



**`zh`** 
从一个截锥体拷贝到另一个截锥体。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Frustum` | - |
| `f` | `Frustum` | - |


##### Returns `Frustum`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L135)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`Frustum`\>(`f: Frustum`) : `Frustum`



**`zh`** 
克隆一个截锥体。




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



**`zh`** 
变换此截锥体。



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



**`zh`** 
根据给定的变换矩阵更新截锥体信息，注意得到的平面不是在标准模式下归一化的。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Mat4` | the view-projection matrix  |
| `inv` | `Mat4` | the inverse view-projection matrix  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/frustum.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/frustum.ts#L182)&nbsp;
___
<!---->




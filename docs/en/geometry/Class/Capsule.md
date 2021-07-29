
## Class: Capsule







**`en`** 
Basic Geometry: capsule.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ axis](#axis)
- [ center](#center)
- [ ellipseCenter0](#ellipseCenter0)
- [ ellipseCenter1](#ellipseCenter1)
- [ halfHeight](#halfHeight)
- [ radius](#radius)
- [ rotation](#rotation)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ transform](#transform)
- [ updateCache](#updateCache)
- [ updateLocalCenter](#updateLocalCenter)
</div>

## Properties


### axis
<div style="margin-left: 10px;">




**`en`** 
Local orientation of capsule [0,1,2] => [x,y,z].




•  **axis**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L76)&nbsp;


___


### center
<div style="margin-left: 10px;">




**`en`** 
The origin of the capsule.




•  **center**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L84)&nbsp;


___


### ellipseCenter0
<div style="margin-left: 10px;">
cache, local center of ellipse



cache, local center of ellipse

•  **ellipseCenter0**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L95)&nbsp;


___


### ellipseCenter1
<div style="margin-left: 10px;">




•  **ellipseCenter1**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L96)&nbsp;


___


### halfHeight
<div style="margin-left: 10px;">




**`en`** 
The distance between the center point of the capsule and the center of the sphere.




•  **halfHeight**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L68)&nbsp;


___


### radius
<div style="margin-left: 10px;">




**`en`** 
Capsule sphere radius.




•  **radius**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L60)&nbsp;


___


### rotation
<div style="margin-left: 10px;">




**`en`** 
The rotation of the capsule.




•  **rotation**:
`Quat` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L92)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`en`** 
Gets the type of the shape.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L48)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Capsule**(`radius: number, halfHeight: number, axis: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `radius` | `number` |





| Name | Type |
| :------ | :------ |
| `halfHeight` | `number` |





| Name | Type |
| :------ | :------ |
| `axis` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L96)&nbsp;


---

<!---->
## Methods

### transform
<div style="margin-left: 10px;">

▸   **transform**<`void`\>(`m: Mat4, pos: IVec3Like, rot: IQuatLike, scale: IVec3Like, out: Capsule`) : `void`




**`en`** 
Transform this capsule.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Mat4` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `pos` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rot` | `IQuatLike` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `IVec3Like` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Capsule` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L118)&nbsp;
___
### updateCache
<div style="margin-left: 10px;">

▸   **updateCache**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L133)&nbsp;
___
### updateLocalCenter
<div style="margin-left: 10px;">

▸   **updateLocalCenter**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/capsule.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/capsule.ts#L141)&nbsp;
___
<!---->




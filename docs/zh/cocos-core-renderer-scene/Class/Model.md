
## Class: Model


A representation of a model


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isDynamicBatching](#isDynamicBatching)
- [ scene](#scene)
- [ type](#type)
- [ castShadow](#castShadow)
- [ enabled](#enabled)
- [ handle](#handle)
- [ inited](#inited)
- [ isInstancingEnabled](#isInstancingEnabled)
- [ localBuffer](#localBuffer)
- [ modelBounds](#modelBounds)
- [ node](#node)
- [ receiveShadow](#receiveShadow)
- [ subModels](#subModels)
- [ transform](#transform)
- [ updateStamp](#updateStamp)
- [ visFlags](#visFlags)
- [ worldBounds](#worldBounds)

### Constructors

- [ constructor](#constructor)

### Methods

- [ attachToScene](#attachToScene)
- [ createBoundingShape](#createBoundingShape)
- [ destroy](#destroy)
- [ detachFromScene](#detachFromScene)
- [ getMacroPatches](#getMacroPatches)
- [ initSubModel](#initSubModel)
- [ initialize](#initialize)
- [ onGlobalPipelineStateChanged](#onGlobalPipelineStateChanged)
- [ onMacroPatchesStateChanged](#onMacroPatchesStateChanged)
- [ setSubModelMaterial](#setSubModelMaterial)
- [ setSubModelMesh](#setSubModelMesh)
- [ updateLightingmap](#updateLightingmap)
- [ updateTransform](#updateTransform)
- [ updateUBOs](#updateUBOs)
- [ updateWorldBound](#updateWorldBound)

### Object literals

- [ instancedAttributes](#instancedAttributes)
</div>

## Properties


### isDynamicBatching
<div style="margin-left: 10px;">




•  **isDynamicBatching**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:191](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L191)&nbsp;


___


### scene
<div style="margin-left: 10px;">




•  **scene**:
`RenderScene | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L190)&nbsp;


___


### type
<div style="margin-left: 10px;">




•  **type**:
`ModelType`  = `ModelType.DEFAULT`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L189)&nbsp;


___


### castShadow
<div style="margin-left: 10px;">




•  **castShadow**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L141)&nbsp;   [cocos/core/renderer/scene/model.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L146)&nbsp;


___


### enabled
<div style="margin-left: 10px;">




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L180)&nbsp;   [cocos/core/renderer/scene/model.ts:185](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L185)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``IHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L150)&nbsp;


___


### inited
<div style="margin-left: 10px;">




•  **inited**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:107](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L107)&nbsp;


___


### isInstancingEnabled
<div style="margin-left: 10px;">




•  **isInstancingEnabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L127)&nbsp;


___


### localBuffer
<div style="margin-left: 10px;">




•  **localBuffer**:
 ``null | Buffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L119)&nbsp;


___


### modelBounds
<div style="margin-left: 10px;">




•  **modelBounds**:
 ``null | AABB`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L115)&nbsp;


___


### node
<div style="margin-left: 10px;">




•  **node**:
 ``Node`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L154)&nbsp;   [cocos/core/renderer/scene/model.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L158)&nbsp;


___


### receiveShadow
<div style="margin-left: 10px;">




•  **receiveShadow**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L131)&nbsp;   [cocos/core/renderer/scene/model.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L136)&nbsp;


___


### subModels
<div style="margin-left: 10px;">




•  **subModels**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L103)&nbsp;


___


### transform
<div style="margin-left: 10px;">




•  **transform**:
 ``Node`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L163)&nbsp;   [cocos/core/renderer/scene/model.ts:167](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L167)&nbsp;


___


### updateStamp
<div style="margin-left: 10px;">




•  **updateStamp**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L123)&nbsp;


___


### visFlags
<div style="margin-left: 10px;">




•  **visFlags**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L172)&nbsp;   [cocos/core/renderer/scene/model.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L176)&nbsp;


___


### worldBounds
<div style="margin-left: 10px;">




•  **worldBounds**:
 ``null | AABB`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L111)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Model**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L212)&nbsp;


---

<!---->
## Methods

### attachToScene

<div style="margin-left: 10px;">

▸   **attachToScene**<`void`\>(`scene: RenderScene`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scene` | `RenderScene` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L276)&nbsp;
___
### createBoundingShape

<div style="margin-left: 10px;">

▸   **createBoundingShape**<`void`\>(`minPos: Vec3, maxPos: Vec3`) : `void`


Create the bounding shape of this model

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minPos` | `Vec3` | the min position of the model  |
| `maxPos` | `Vec3` | the max position of the model  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L344)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L236)&nbsp;
___
### detachFromScene

<div style="margin-left: 10px;">

▸   **detachFromScene**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:280](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L280)&nbsp;
___
### getMacroPatches

<div style="margin-left: 10px;">

▸   **getMacroPatches**(`subModelIndex: number`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `subModelIndex` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L430)&nbsp;
___
### initSubModel

<div style="margin-left: 10px;">

▸   **initSubModel**<`void`\>(`idx: number, subMeshData: RenderingSubMesh, mat: Material`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | - |
| `subMeshData` | `RenderingSubMesh` | - |
| `mat` | `Material` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:356](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L356)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L221)&nbsp;
___
### onGlobalPipelineStateChanged

<div style="margin-left: 10px;">

▸   **onGlobalPipelineStateChanged**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L391)&nbsp;
___
### onMacroPatchesStateChanged

<div style="margin-left: 10px;">

▸   **onMacroPatchesStateChanged**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:398](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L398)&nbsp;
___
### setSubModelMaterial

<div style="margin-left: 10px;">

▸   **setSubModelMaterial**<`void`\>(`idx: number, mat: Material`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | - |
| `mat` | `Material` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L385)&nbsp;
___
### setSubModelMesh

<div style="margin-left: 10px;">

▸   **setSubModelMesh**<`void`\>(`idx: number, subMesh: RenderingSubMesh`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | - |
| `subMesh` | `RenderingSubMesh` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:380](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L380)&nbsp;
___
### updateLightingmap

<div style="margin-left: 10px;">

▸   **updateLightingmap**<`void`\>(`texture: Texture2D | null, uvParam: Vec4`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `texture` | `Texture2D \| null` | - |
| `uvParam` | `Vec4` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:405](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L405)&nbsp;
___
### updateTransform

<div style="margin-left: 10px;">

▸   **updateTransform**<`void`\>(`stamp: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `stamp` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L284)&nbsp;
___
### updateUBOs

<div style="margin-left: 10px;">

▸   **updateUBOs**<`void`\>(`stamp: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `stamp` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L315)&nbsp;
___
### updateWorldBound

<div style="margin-left: 10px;">

▸   **updateWorldBound**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/model.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/model.ts#L300)&nbsp;
___
<!---->
<!---->




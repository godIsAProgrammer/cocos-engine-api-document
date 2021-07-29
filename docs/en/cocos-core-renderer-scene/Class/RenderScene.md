
## Class: RenderScene





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ batches](#batches)
- [ cameras](#cameras)
- [ handle](#handle)
- [ mainLight](#mainLight)
- [ models](#models)
- [ name](#name)
- [ root](#root)
- [ sphereLights](#sphereLights)
- [ spotLights](#spotLights)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  registerCreateFunc](#registerCreateFunc)
- [ addBatch](#addBatch)
- [ addCamera](#addCamera)
- [ addDirectionalLight](#addDirectionalLight)
- [ addModel](#addModel)
- [ addSphereLight](#addSphereLight)
- [ addSpotLight](#addSpotLight)
- [ destroy](#destroy)
- [ generateModelId](#generateModelId)
- [ initialize](#initialize)
- [ onGlobalPipelineStateChanged](#onGlobalPipelineStateChanged)
- [ removeBatch](#removeBatch)
- [ removeBatches](#removeBatches)
- [ removeCamera](#removeCamera)
- [ removeCameras](#removeCameras)
- [ removeDirectionalLight](#removeDirectionalLight)
- [ removeModel](#removeModel)
- [ removeModels](#removeModels)
- [ removeSphereLight](#removeSphereLight)
- [ removeSphereLights](#removeSphereLights)
- [ removeSpotLight](#removeSpotLight)
- [ removeSpotLights](#removeSpotLights)
- [ setMainLight](#setMainLight)
- [ unsetMainLight](#unsetMainLight)
- [ update](#update)
</div>

## Properties


### batches
<div style="margin-left: 10px;">




•  **batches**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L86)&nbsp;


___


### cameras
<div style="margin-left: 10px;">




•  **cameras**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L62)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``SceneHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L82)&nbsp;


___


### mainLight
<div style="margin-left: 10px;">




•  **mainLight**:
 ``DirectionalLight | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L66)&nbsp;


___


### models
<div style="margin-left: 10px;">




•  **models**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L78)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L58)&nbsp;


___


### root
<div style="margin-left: 10px;">




•  **root**:
 ``Root`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L54)&nbsp;


___


### sphereLights
<div style="margin-left: 10px;">




•  **sphereLights**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L70)&nbsp;


___


### spotLights
<div style="margin-left: 10px;">




•  **spotLights**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L74)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new RenderScene**(`root: Root`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `root` | `Root` |





</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L108)&nbsp;


---

<!---->
## Methods

### registerCreateFunc
<div style="margin-left: 10px;">

▸ `static`  **registerCreateFunc**<`void`\>(`root: Root`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `root` | `Root` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L90)&nbsp;
___
### addBatch
<div style="margin-left: 10px;">

▸   **addBatch**<`void`\>(`batch: DrawBatch2D`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `batch` | `DrawBatch2D` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:309](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L309)&nbsp;
___
### addCamera
<div style="margin-left: 10px;">

▸   **addCamera**<`void`\>(`cam: Camera`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cam` | `Camera` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L177)&nbsp;
___
### addDirectionalLight
<div style="margin-left: 10px;">

▸   **addDirectionalLight**<`void`\>(`dl: DirectionalLight`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dl` | `DirectionalLight` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:218](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L218)&nbsp;
___
### addModel
<div style="margin-left: 10px;">

▸   **addModel**<`void`\>(`m: Model`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Model` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L283)&nbsp;
___
### addSphereLight
<div style="margin-left: 10px;">

▸   **addSphereLight**<`void`\>(`pl: SphereLight`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pl` | `SphereLight` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L233)&nbsp;
___
### addSpotLight
<div style="margin-left: 10px;">

▸   **addSpotLight**<`void`\>(`sl: SpotLight`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sl` | `SpotLight` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L250)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L150)&nbsp;
___
### generateModelId
<div style="margin-left: 10px;">

▸   **generateModelId**<`number`\> : `number`




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:335](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L335)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: IRenderSceneInfo`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IRenderSceneInfo` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L115)&nbsp;
___
### onGlobalPipelineStateChanged
<div style="margin-left: 10px;">

▸   **onGlobalPipelineStateChanged**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:329](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L329)&nbsp;
___
### removeBatch
<div style="margin-left: 10px;">

▸   **removeBatch**<`void`\>(`batch: DrawBatch2D`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `batch` | `DrawBatch2D` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:314](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L314)&nbsp;
___
### removeBatches
<div style="margin-left: 10px;">

▸   **removeBatches**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L324)&nbsp;
___
### removeCamera
<div style="margin-left: 10px;">

▸   **removeCamera**<`void`\>(`camera: Camera`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `camera` | `Camera` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L182)&nbsp;
___
### removeCameras
<div style="margin-left: 10px;">

▸   **removeCameras**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L192)&nbsp;
___
### removeDirectionalLight
<div style="margin-left: 10px;">

▸   **removeDirectionalLight**<`void`\>(`dl: DirectionalLight`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dl` | `DirectionalLight` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L223)&nbsp;
___
### removeModel
<div style="margin-left: 10px;">

▸   **removeModel**<`void`\>(`model: Model`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `model` | `Model` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L289)&nbsp;
___
### removeModels
<div style="margin-left: 10px;">

▸   **removeModels**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L300)&nbsp;
___
### removeSphereLight
<div style="margin-left: 10px;">

▸   **removeSphereLight**<`void`\>(`pl: SphereLight`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pl` | `SphereLight` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:239](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L239)&nbsp;
___
### removeSphereLights
<div style="margin-left: 10px;">

▸   **removeSphereLights**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L267)&nbsp;
___
### removeSpotLight
<div style="margin-left: 10px;">

▸   **removeSpotLight**<`void`\>(`sl: SpotLight`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sl` | `SpotLight` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:256](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L256)&nbsp;
___
### removeSpotLights
<div style="margin-left: 10px;">

▸   **removeSpotLights**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L275)&nbsp;
___
### setMainLight
<div style="margin-left: 10px;">

▸   **setMainLight**<`void`\>(`dl: DirectionalLight`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dl` | `DirectionalLight` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L199)&nbsp;
___
### unsetMainLight
<div style="margin-left: 10px;">

▸   **unsetMainLight**<`void`\>(`dl: DirectionalLight`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dl` | `DirectionalLight` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L204)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`stamp: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `stamp` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/render-scene.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/render-scene.ts#L121)&nbsp;
___
<!---->




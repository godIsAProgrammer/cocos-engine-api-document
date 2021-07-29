
## Class: SubModel





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ descriptorSet](#descriptorSet)
- [ handle](#handle)
- [ inputAssembler](#inputAssembler)
- [ passes](#passes)
- [ patches](#patches)
- [ planarInstanceShaderHandle](#planarInstanceShaderHandle)
- [ planarShaderHandle](#planarShaderHandle)
- [ priority](#priority)
- [ subMesh](#subMesh)

### Methods

- [ destroy](#destroy)
- [ initPlanarShadowInstanceShader](#initPlanarShadowInstanceShader)
- [ initPlanarShadowShader](#initPlanarShadowShader)
- [ initialize](#initialize)
- [ onMacroPatchesStateChanged](#onMacroPatchesStateChanged)
- [ onPipelineStateChanged](#onPipelineStateChanged)
- [ update](#update)
</div>

## Properties


### descriptorSet
<div style="margin-left: 10px;">




•  **descriptorSet**:
 ``DescriptorSet`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L99)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``SubModelHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L91)&nbsp;


___


### inputAssembler
<div style="margin-left: 10px;">




•  **inputAssembler**:
 ``InputAssembler`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L95)&nbsp;


___


### passes
<div style="margin-left: 10px;">




•  **passes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L47)&nbsp;   [cocos/core/renderer/scene/submodel.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L66)&nbsp;


___


### patches
<div style="margin-left: 10px;">




•  **patches**:
 `` | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L103)&nbsp;


___


### planarInstanceShaderHandle
<div style="margin-left: 10px;">




•  **planarInstanceShaderHandle**:
 ``ShaderHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L115)&nbsp;


___


### planarShaderHandle
<div style="margin-left: 10px;">




•  **planarShaderHandle**:
 ``ShaderHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L109)&nbsp;


___


### priority
<div style="margin-left: 10px;">




•  **priority**:
 ``RenderPriority`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L82)&nbsp;   [cocos/core/renderer/scene/submodel.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L87)&nbsp;


___


### subMesh
<div style="margin-left: 10px;">




•  **subMesh**:
 ``RenderingSubMesh`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L70)&nbsp;   [cocos/core/renderer/scene/submodel.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L78)&nbsp;


___

<!---->
## Methods

### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L160)&nbsp;
___
### initPlanarShadowInstanceShader
<div style="margin-left: 10px;">

▸   **initPlanarShadowInstanceShader**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L153)&nbsp;
___
### initPlanarShadowShader
<div style="margin-left: 10px;">

▸   **initPlanarShadowShader**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L144)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`subMesh: RenderingSubMesh, passes: undefined, patches: array<IMacroPatch> | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `subMesh` | `RenderingSubMesh` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passes` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `patches` | `array<IMacroPatch> \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L119)&nbsp;
___
### onMacroPatchesStateChanged
<div style="margin-left: 10px;">

▸   **onMacroPatchesStateChanged**<`void`\>(`patches: array<IMacroPatch> | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `patches` | `array<IMacroPatch> \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L197)&nbsp;
___
### onPipelineStateChanged
<div style="margin-left: 10px;">

▸   **onPipelineStateChanged**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L183)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/submodel.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/submodel.ts#L175)&nbsp;
___
<!---->




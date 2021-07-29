
## Class: PipelineState


`extend:`
[Obj](docs/en/gfx/Class/Obj.md)












**`en`** GFX pipeline state.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ blendState](#blendState)
- [ depthStencilState](#depthStencilState)
- [ dynamicStates](#dynamicStates)
- [ gfxType](#gfxType)
- [ inputState](#inputState)
- [ pipelineLayout](#pipelineLayout)
- [ primitive](#primitive)
- [ rasterizerState](#rasterizerState)
- [ renderPass](#renderPass)
- [ shader](#shader)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
</div>

## Properties


### blendState
<div style="margin-left: 10px;">




**`en`** Get current blend state.




•  **blendState**:
 ``BlendState`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L311)&nbsp;


___


### depthStencilState
<div style="margin-left: 10px;">




**`en`** Get current depth stencil state.




•  **depthStencilState**:
 ``DepthStencilState`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L303)&nbsp;


___


### dynamicStates
<div style="margin-left: 10px;">




**`en`** Get current dynamic states.




•  **dynamicStates**:
 ``DynamicStateFlags`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L327)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### inputState
<div style="margin-left: 10px;">




**`en`** Get current input state.




•  **inputState**:
 ``InputState`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L319)&nbsp;


___


### pipelineLayout
<div style="margin-left: 10px;">




**`en`** Get current pipeline layout.




•  **pipelineLayout**:
 ``PipelineLayout`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L279)&nbsp;


___


### primitive
<div style="margin-left: 10px;">




**`en`** Get current primitve mode.




•  **primitive**:
 ``PrimitiveMode`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:287](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L287)&nbsp;


___


### rasterizerState
<div style="margin-left: 10px;">




**`en`** Get current rasterizer state.




•  **rasterizerState**:
 ``RasterizerState`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L295)&nbsp;


___


### renderPass
<div style="margin-left: 10px;">




**`en`** Get current render pass.




•  **renderPass**:
 ``RenderPass`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:335](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L335)&nbsp;


___


### shader
<div style="margin-left: 10px;">




**`en`** Get current shader.




•  **shader**:
 ``Shader`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:271](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L271)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new PipelineState**(`device: Device`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `device` | `Device` |





</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L357)&nbsp;


---

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

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L366)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: PipelineStateInfo`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `PipelineStateInfo` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:364](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L364)&nbsp;
___
<!---->




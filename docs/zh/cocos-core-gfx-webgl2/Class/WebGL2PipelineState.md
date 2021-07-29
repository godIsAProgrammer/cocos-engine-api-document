
## Class: WebGL2PipelineState


`extend:`
[PipelineState](docs/zh/gfx/Class/PipelineState.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ blendState](#blendState)
- [ depthStencilState](#depthStencilState)
- [ dynamicStates](#dynamicStates)
- [ gfxType](#gfxType)
- [ gpuPipelineState](#gpuPipelineState)
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




**`zh`** GFX 混合状态。





•  **blendState**:
 ``BlendState`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L311)&nbsp;


___


### depthStencilState
<div style="margin-left: 10px;">




**`zh`** GFX 深度模板状态。





•  **depthStencilState**:
 ``DepthStencilState`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L303)&nbsp;


___


### dynamicStates
<div style="margin-left: 10px;">




**`zh`** GFX 动态状态数组。





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


### gpuPipelineState
<div style="margin-left: 10px;">




•  **gpuPipelineState**:
 ``IWebGL2GPUPipelineState`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-pipeline-state.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-pipeline-state.ts#L51)&nbsp;


___


### inputState
<div style="margin-left: 10px;">




**`zh`** GFX 输入状态。





•  **inputState**:
 ``InputState`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L319)&nbsp;


___


### pipelineLayout
<div style="margin-left: 10px;">




**`zh`** GFX 管线布局。





•  **pipelineLayout**:
 ``PipelineLayout`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L279)&nbsp;


___


### primitive
<div style="margin-left: 10px;">




**`zh`** GFX 图元模式。





•  **primitive**:
 ``PrimitiveMode`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:287](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L287)&nbsp;


___


### rasterizerState
<div style="margin-left: 10px;">




**`zh`** GFX 光栅化状态。





•  **rasterizerState**:
 ``RasterizerState`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L295)&nbsp;


___


### renderPass
<div style="margin-left: 10px;">




**`zh`** GFX 渲染过程。





•  **renderPass**:
 ``RenderPass`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:335](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L335)&nbsp;


___


### shader
<div style="margin-left: 10px;">




**`zh`** GFX 着色器。





•  **shader**:
 ``Shader`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:271](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L271)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGL2PipelineState**(`device: Device`)

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

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-pipeline-state.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-pipeline-state.ts#L102)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-pipeline-state.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-pipeline-state.ts#L57)&nbsp;
___
<!---->




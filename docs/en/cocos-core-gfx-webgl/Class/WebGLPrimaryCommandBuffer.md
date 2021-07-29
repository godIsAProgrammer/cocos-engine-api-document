
## Class: WebGLPrimaryCommandBuffer


`extend:`
[WebGLCommandBuffer](docs/en/cocos-core-gfx-webgl/Class/WebGLCommandBuffer.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ cmdPackage](#cmdPackage)
- [ gfxType](#gfxType)
- [ numDrawCalls](#numDrawCalls)
- [ numInstances](#numInstances)
- [ numTris](#numTris)
- [ queue](#queue)
- [ type](#type)
- [ webGLDevice](#webGLDevice)

### Constructors

- [ constructor](#constructor)

### Methods

- [ begin](#begin)
- [ beginRenderPass](#beginRenderPass)
- [ bindDescriptorSet](#bindDescriptorSet)
- [ bindInputAssembler](#bindInputAssembler)
- [ bindPipelineState](#bindPipelineState)
- [ copyBuffersToTexture](#copyBuffersToTexture)
- [ destroy](#destroy)
- [ draw](#draw)
- [ end](#end)
- [ endRenderPass](#endRenderPass)
- [ execute](#execute)
- [ initialize](#initialize)
- [ pipelineBarrier](#pipelineBarrier)
- [ setBlendConstants](#setBlendConstants)
- [ setDepthBias](#setDepthBias)
- [ setDepthBound](#setDepthBound)
- [ setLineWidth](#setLineWidth)
- [ setScissor](#setScissor)
- [ setStencilCompareMask](#setStencilCompareMask)
- [ setStencilWriteMask](#setStencilWriteMask)
- [ setViewport](#setViewport)
- [ updateBuffer](#updateBuffer)
</div>

## Properties


### cmdPackage
<div style="margin-left: 10px;">




•  **cmdPackage**:
`WebGLCmdPackage`  = `new WebGLCmdPackage()`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L74)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### numDrawCalls
<div style="margin-left: 10px;">



**`en`** Number of draw calls currently recorded.




•  **numDrawCalls**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L77)&nbsp;


___


### numInstances
<div style="margin-left: 10px;">



**`en`** Number of instances currently recorded.




•  **numInstances**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L85)&nbsp;


___


### numTris
<div style="margin-left: 10px;">



**`en`** Number of triangles currently recorded.




•  **numTris**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L93)&nbsp;


___


### queue
<div style="margin-left: 10px;">



**`en`** Type of the command buffer.




•  **queue**:
 ``Queue`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L69)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`en`** Type of the command buffer.




•  **type**:
 ``CommandBufferType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L61)&nbsp;


___


### webGLDevice
<div style="margin-left: 10px;">




•  **webGLDevice**:
 ``WebGLDevice`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:466](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L466)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLPrimaryCommandBuffer**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:107](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L107)&nbsp;


---

<!---->
## Methods

### begin

<div style="margin-left: 10px;">

▸   **begin**<`void`\>(`renderPass: RenderPass, subpass: number, frameBuffer: Framebuffer`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `renderPass` | `RenderPass` | - |
| `subpass` | `number` | - |
| `frameBuffer` | `Framebuffer` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L113)&nbsp;
___
### beginRenderPass

<div style="margin-left: 10px;">

▸   **beginRenderPass**<`void`\>(`renderPass: RenderPass, framebuffer: Framebuffer, renderArea: Rect, clearColors: undefined, clearDepth: number, clearStencil: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `renderPass` | `RenderPass` | - |
| `framebuffer` | `Framebuffer` | - |
| `renderArea` | `Rect` | - |
| `clearColors` |  | - |
| `clearDepth` | `number` | - |
| `clearStencil` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-primary-command-buffer.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-primary-command-buffer.ts#L46)&nbsp;
___
### bindDescriptorSet

<div style="margin-left: 10px;">

▸   **bindDescriptorSet**<`void`\>(`set: number, descriptorSet: DescriptorSet, dynamicOffsets: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `set` | `number` | - |
| `descriptorSet` | `DescriptorSet` | - |
| `dynamicOffsets` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L179)&nbsp;
___
### bindInputAssembler

<div style="margin-left: 10px;">

▸   **bindInputAssembler**<`void`\>(`inputAssembler: InputAssembler`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `inputAssembler` | `InputAssembler` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L193)&nbsp;
___
### bindPipelineState

<div style="margin-left: 10px;">

▸   **bindPipelineState**<`void`\>(`pipelineState: PipelineState`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipelineState` | `PipelineState` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L171)&nbsp;
___
### copyBuffersToTexture

<div style="margin-left: 10px;">

▸   **copyBuffersToTexture**<`void`\>(`buffers: undefined, texture: Texture, regions: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffers` |  | - |
| `texture` | `Texture` | - |
| `regions` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-primary-command-buffer.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-primary-command-buffer.ts#L114)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L106)&nbsp;
___
### draw

<div style="margin-left: 10px;">

▸   **draw**<`void`\>(`info: DrawInfo | InputAssembler`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DrawInfo \| InputAssembler` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-primary-command-buffer.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-primary-command-buffer.ts#L63)&nbsp;
___
### end

<div style="margin-left: 10px;">

▸   **end**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L134)&nbsp;
___
### endRenderPass

<div style="margin-left: 10px;">

▸   **endRenderPass**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:167](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L167)&nbsp;
___
### execute

<div style="margin-left: 10px;">

▸   **execute**<`void`\>(`cmdBuffs: undefined, count: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuffs` |  | - |
| `count` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-primary-command-buffer.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-primary-command-buffer.ts#L125)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: CommandBufferInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `CommandBufferInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L91)&nbsp;
___
### pipelineBarrier

<div style="margin-left: 10px;">

▸   **pipelineBarrier**<`void`\>(`globalBarrier: GlobalBarrier, textureBarriers: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `globalBarrier` | `GlobalBarrier` | - |
| `textureBarriers` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:463](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L463)&nbsp;
___
### setBlendConstants

<div style="margin-left: 10px;">

▸   **setBlendConstants**<`void`\>(`blendConstants: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `blendConstants` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:258](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L258)&nbsp;
___
### setDepthBias

<div style="margin-left: 10px;">

▸   **setDepthBias**<`void`\>(`depthBiasConstantFactor: number, depthBiasClamp: number, depthBiasSlopeFactor: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `depthBiasConstantFactor` | `number` | - |
| `depthBiasClamp` | `number` | - |
| `depthBiasSlopeFactor` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:240](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L240)&nbsp;
___
### setDepthBound

<div style="margin-left: 10px;">

▸   **setDepthBound**<`void`\>(`minDepthBounds: number, maxDepthBounds: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minDepthBounds` | `number` | - |
| `maxDepthBounds` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L270)&nbsp;
___
### setLineWidth

<div style="margin-left: 10px;">

▸   **setLineWidth**<`void`\>(`lineWidth: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `lineWidth` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L233)&nbsp;
___
### setScissor

<div style="margin-left: 10px;">

▸   **setScissor**<`void`\>(`scissor: Rect`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scissor` | `Rect` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:218](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L218)&nbsp;
___
### setStencilCompareMask

<div style="margin-left: 10px;">

▸   **setStencilCompareMask**<`void`\>(`face: StencilFace, reference: number, compareMask: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `face` | `StencilFace` | - |
| `reference` | `number` | - |
| `compareMask` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L302)&nbsp;
___
### setStencilWriteMask

<div style="margin-left: 10px;">

▸   **setStencilWriteMask**<`void`\>(`face: StencilFace, writeMask: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `face` | `StencilFace` | - |
| `writeMask` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:287](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L287)&nbsp;
___
### setViewport

<div style="margin-left: 10px;">

▸   **setViewport**<`void`\>(`viewport: Viewport`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `viewport` | `Viewport` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-buffer.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-buffer.ts#L199)&nbsp;
___
### updateBuffer

<div style="margin-left: 10px;">

▸   **updateBuffer**<`void`\>(`buffer: Buffer, data: BufferSource, size: undefined | number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffer` | `Buffer` | - |
| `data` | `BufferSource` | - |
| `size` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-primary-command-buffer.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-primary-command-buffer.ts#L94)&nbsp;
___
<!---->




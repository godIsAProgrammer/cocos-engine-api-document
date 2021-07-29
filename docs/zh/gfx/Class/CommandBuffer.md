
## Class: CommandBuffer


`extend:`
[Obj](docs/zh/gfx/Class/Obj.md)










**`zh`** GFX 命令缓冲。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ gfxType](#gfxType)
- [ numDrawCalls](#numDrawCalls)
- [ numInstances](#numInstances)
- [ numTris](#numTris)
- [ queue](#queue)
- [ type](#type)

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


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### numDrawCalls
<div style="margin-left: 10px;">



**`zh`** 绘制调用次数。





•  **numDrawCalls**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L77)&nbsp;


___


### numInstances
<div style="margin-left: 10px;">



**`zh`** 绘制 Instance 数量。





•  **numInstances**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L85)&nbsp;


___


### numTris
<div style="margin-left: 10px;">



**`zh`** 绘制三角形数量。





•  **numTris**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L93)&nbsp;


___


### queue
<div style="margin-left: 10px;">



**`zh`** 命令缓冲类型。





•  **queue**:
 ``Queue`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L69)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`zh`** 命令缓冲类型。





•  **type**:
 ``CommandBufferType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L61)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new CommandBuffer**(`device: Device`)

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

▸   **begin**<`void`\>(`renderPass: RenderPass, subpass: undefined | number, frameBuffer: Framebuffer`) : `void`



**`zh`** 开始记录命令。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `renderPass` | `RenderPass` | The render pass the subsequent commands will be executed in  |
| `subpass` | `undefined \| number` | The subpass the subsequent commands will be executed in  |
| `frameBuffer` | `Framebuffer` | The framebuffer to be used in the subpass  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L125)&nbsp;
___
### beginRenderPass

<div style="margin-left: 10px;">

▸   **beginRenderPass**<`void`\>(`renderPass: RenderPass, framebuffer: Framebuffer, renderArea: Rect, clearColors: undefined, clearDepth: number, clearStencil: number`) : `void`



**`zh`** 开始 RenderPass。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `renderPass` | `RenderPass` | - |
| `framebuffer` | `Framebuffer` | The frame buffer used.  |
| `renderArea` | `Rect` | The target render area.  |
| `clearColors` |  | The clearing colors.  |
| `clearDepth` | `number` | The clearing depth.  |
| `clearStencil` | `number` | The clearing stencil.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L143)&nbsp;
___
### bindDescriptorSet

<div style="margin-left: 10px;">

▸   **bindDescriptorSet**<`void`\>(`set: number, descriptorSets: DescriptorSet, dynamicOffsets: undefined`) : `void`



**`zh`** 绑定 GFX 描述符集。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `set` | `number` | - |
| `descriptorSets` | `DescriptorSet` | - |
| `dynamicOffsets` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L164)&nbsp;
___
### bindInputAssembler

<div style="margin-left: 10px;">

▸   **bindInputAssembler**<`void`\>(`inputAssembler: InputAssembler`) : `void`



**`zh`** 绑定 GFX 输入汇集器。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `inputAssembler` | `InputAssembler` | The input assembler to be bound.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L171)&nbsp;
___
### bindPipelineState

<div style="margin-left: 10px;">

▸   **bindPipelineState**<`void`\>(`pipelineState: PipelineState`) : `void`



**`zh`** 绑定 GFX 管线状态。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipelineState` | `PipelineState` | The pipeline state to be bound.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L157)&nbsp;
___
### copyBuffersToTexture

<div style="margin-left: 10px;">

▸   **copyBuffersToTexture**<`void`\>(`buffers: undefined, texture: Texture, regions: undefined`) : `void`



**`zh`** 拷贝缓冲到纹理。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffers` |  | - |
| `texture` | `Texture` | - |
| `regions` |  | The region descriptions.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L259)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L116)&nbsp;
___
### draw

<div style="margin-left: 10px;">

▸   **draw**<`void`\>(`info: DrawInfo | InputAssembler`) : `void`



**`zh`** 绘制。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DrawInfo \| InputAssembler` | The draw call information.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:240](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L240)&nbsp;
___
### end

<div style="margin-left: 10px;">

▸   **end**<`void`\> : `void`



**`zh`** 结束记录命令。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L131)&nbsp;
___
### endRenderPass

<div style="margin-left: 10px;">

▸   **endRenderPass**<`void`\> : `void`



**`zh`** 结束 RenderPass。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L150)&nbsp;
___
### execute

<div style="margin-left: 10px;">

▸   **execute**<`void`\>(`cmdBuffs: undefined, count: number`) : `void`



**`zh`** 执行一组命令缓冲。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuffs` |  | The command buffers to be executed.  |
| `count` | `number` | The number of command buffers to be executed.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L267)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L114)&nbsp;
___
### pipelineBarrier

<div style="margin-left: 10px;">

▸   **pipelineBarrier**<`void`\>(`globalBarrier: GlobalBarrier, textureBarriers: array<TextureBarrier> | null`) : `void`



**`zh`** 插入管线内存屏障。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `globalBarrier` | `GlobalBarrier` | The global memory barrier to apply.  |
| `textureBarriers` | `array<TextureBarrier> \| null` | The texture memory barriers to apply.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L275)&nbsp;
___
### setBlendConstants

<div style="margin-left: 10px;">

▸   **setBlendConstants**<`void`\>(`blendConstants: undefined`) : `void`



**`zh`** 设置混合因子。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `blendConstants` |  | The new blend constants.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L208)&nbsp;
___
### setDepthBias

<div style="margin-left: 10px;">

▸   **setDepthBias**<`void`\>(`depthBiasConstantFactor: number, depthBiasClamp: number, depthBiasSlopeFactor: number`) : `void`



**`zh`** 设置深度偏移。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `depthBiasConstantFactor` | `number` | The new depth bias factor.  |
| `depthBiasClamp` | `number` | The new depth bias clamp threshold.  |
| `depthBiasSlopeFactor` | `number` | The new depth bias slope factor.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L201)&nbsp;
___
### setDepthBound

<div style="margin-left: 10px;">

▸   **setDepthBound**<`void`\>(`minDepthBounds: number, maxDepthBounds: number`) : `void`



**`zh`** 设置深度边界。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minDepthBounds` | `number` | The new minimum depth bound.  |
| `maxDepthBounds` | `number` | The new maximum depth bound.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:216](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L216)&nbsp;
___
### setLineWidth

<div style="margin-left: 10px;">

▸   **setLineWidth**<`void`\>(`lineWidth: number`) : `void`



**`zh`** 设置线宽。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `lineWidth` | `number` | The new line width.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L192)&nbsp;
___
### setScissor

<div style="margin-left: 10px;">

▸   **setScissor**<`void`\>(`scissor: Rect`) : `void`



**`zh`** 设置剪裁区域。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scissor` | `Rect` | The new scissor range.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:185](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L185)&nbsp;
___
### setStencilCompareMask

<div style="margin-left: 10px;">

▸   **setStencilCompareMask**<`void`\>(`face: StencilFace, reference: number, compareMask: number`) : `void`



**`zh`** 设置模板比较掩码。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `face` | `StencilFace` | The effective triangle face.  |
| `reference` | `number` | The new stencil reference constant.  |
| `compareMask` | `number` | The new stencil read mask.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L233)&nbsp;
___
### setStencilWriteMask

<div style="margin-left: 10px;">

▸   **setStencilWriteMask**<`void`\>(`face: StencilFace, writeMask: number`) : `void`



**`zh`** 设置模板写掩码。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `face` | `StencilFace` | The effective triangle face.  |
| `writeMask` | `number` | The new stencil write mask.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L224)&nbsp;
___
### setViewport

<div style="margin-left: 10px;">

▸   **setViewport**<`void`\>(`viewport: Viewport`) : `void`



**`zh`** 设置视口。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `viewport` | `Viewport` | The new viewport.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L178)&nbsp;
___
### updateBuffer

<div style="margin-left: 10px;">

▸   **updateBuffer**<`void`\>(`buffer: Buffer, data: ArrayBuffer, size: undefined | number`) : `void`



**`zh`** 更新缓冲。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffer` | `Buffer` | The buffer to be updated.  |
| `data` | `ArrayBuffer` | The source data.  |
| `size` | `undefined \| number` | Size in bytes to be updated.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/command-buffer.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/command-buffer.ts#L249)&nbsp;
___
<!---->




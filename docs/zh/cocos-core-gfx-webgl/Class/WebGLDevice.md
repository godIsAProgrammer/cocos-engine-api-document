
## Class: WebGLDevice


`extend:`
[Device](docs/zh/gfx/Class/Device.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ cmdAllocator](#cmdAllocator)
- [ nullTex2D](#nullTex2D)
- [ nullTexCube](#nullTexCube)
- [ stateCache](#stateCache)
- [ bindingMappingInfo](#bindingMappingInfo)
- [ canvas](#canvas)
- [ canvas2D](#canvas2D)
- [ capabilities](#capabilities)
- [ colorFormat](#colorFormat)
- [ commandBuffer](#commandBuffer)
- [ depthStencilFormat](#depthStencilFormat)
- [ destroyShadersImmediately](#destroyShadersImmediately)
- [ devicePixelRatio](#devicePixelRatio)
- [ gfxAPI](#gfxAPI)
- [ gl](#gl)
- [ height](#height)
- [ isAntialias](#isAntialias)
- [ isPremultipliedAlpha](#isPremultipliedAlpha)
- [ memoryStatus](#memoryStatus)
- [ nativeHeight](#nativeHeight)
- [ nativeWidth](#nativeWidth)
- [ noCompressedTexSubImage2D](#noCompressedTexSubImage2D)
- [ numDrawCalls](#numDrawCalls)
- [ numInstances](#numInstances)
- [ numTris](#numTris)
- [ queue](#queue)
- [ renderer](#renderer)
- [ surfaceTransform](#surfaceTransform)
- [ useVAO](#useVAO)
- [ vendor](#vendor)
- [ webGLQueue](#webGLQueue)
- [ width](#width)

### Methods

- [ acquire](#acquire)
- [ blitFramebuffer](#blitFramebuffer)
- [ copyBuffersToTexture](#copyBuffersToTexture)
- [ copyFramebufferToBuffer](#copyFramebufferToBuffer)
- [ copyTexImagesToTexture](#copyTexImagesToTexture)
- [ createBuffer](#createBuffer)
- [ createCommandBuffer](#createCommandBuffer)
- [ createDescriptorSet](#createDescriptorSet)
- [ createDescriptorSetLayout](#createDescriptorSetLayout)
- [ createFramebuffer](#createFramebuffer)
- [ createGlobalBarrier](#createGlobalBarrier)
- [ createInputAssembler](#createInputAssembler)
- [ createPipelineLayout](#createPipelineLayout)
- [ createPipelineState](#createPipelineState)
- [ createQueue](#createQueue)
- [ createRenderPass](#createRenderPass)
- [ createSampler](#createSampler)
- [ createShader](#createShader)
- [ createTexture](#createTexture)
- [ createTextureBarrier](#createTextureBarrier)
- [ destroy](#destroy)
- [ flushCommands](#flushCommands)
- [ hasFeature](#hasFeature)
- [ initialize](#initialize)
- [ present](#present)
- [ resize](#resize)
</div>

## Properties


### cmdAllocator
<div style="margin-left: 10px;">




•  **cmdAllocator**:
`WebGLCommandAllocator`  = `new WebGLCommandAllocator()`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L198)&nbsp;


___


### nullTex2D
<div style="margin-left: 10px;">




•  **nullTex2D**:
`WebGLTexture | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L199)&nbsp;


___


### nullTexCube
<div style="margin-left: 10px;">




•  **nullTexCube**:
`WebGLTexture | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:200](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L200)&nbsp;


___


### stateCache
<div style="margin-left: 10px;">




•  **stateCache**:
`WebGLStateCache`  = `new WebGLStateCache()`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L197)&nbsp;


___


### bindingMappingInfo
<div style="margin-left: 10px;">




•  **bindingMappingInfo**:
 ``BindingMappingInfo`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L101)&nbsp;


___


### canvas
<div style="margin-left: 10px;">



**`zh`** HTML 画布。





•  **canvas**:
 ``HTMLCanvasElement`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L65)&nbsp;


___


### canvas2D
<div style="margin-left: 10px;">



**`zh`** 用于 2D 绘制的 HTML 画布。





•  **canvas2D**:
 ``HTMLCanvasElement`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L73)&nbsp;


___


### capabilities
<div style="margin-left: 10px;">



**`zh`** 当前设备能立数据。





•  **capabilities**:
 ``DeviceCaps`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:209](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L209)&nbsp;


___


### colorFormat
<div style="margin-left: 10px;">



**`zh`** 颜色格式。





•  **colorFormat**:
 ``Format`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L161)&nbsp;


___


### commandBuffer
<div style="margin-left: 10px;">



**`zh`** GFX 默认命令缓冲。





•  **commandBuffer**:
 ``CommandBuffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L97)&nbsp;


___


### depthStencilFormat
<div style="margin-left: 10px;">



**`zh`** 深度模板格式。





•  **depthStencilFormat**:
 ``Format`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L169)&nbsp;


___


### destroyShadersImmediately
<div style="margin-left: 10px;">




•  **destroyShadersImmediately**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L93)&nbsp;


___


### devicePixelRatio
<div style="margin-left: 10px;">



**`zh`** DPR 设备像素比。





•  **devicePixelRatio**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L105)&nbsp;


___


### gfxAPI
<div style="margin-left: 10px;">



**`zh`** 当前 GFX 使用的渲染 API。





•  **gfxAPI**:
 ``API`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L81)&nbsp;


___


### gl
<div style="margin-left: 10px;">




•  **gl**:
 ``WebGLRenderingContext`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L73)&nbsp;


___


### height
<div style="margin-left: 10px;">



**`zh`** 设备像素高度。





•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L121)&nbsp;


___


### isAntialias
<div style="margin-left: 10px;">




•  **isAntialias**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L81)&nbsp;


___


### isPremultipliedAlpha
<div style="margin-left: 10px;">




•  **isPremultipliedAlpha**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L85)&nbsp;


___


### memoryStatus
<div style="margin-left: 10px;">



**`zh`** 内存状态。





•  **memoryStatus**:
 ``MemoryStatus`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L201)&nbsp;


___


### nativeHeight
<div style="margin-left: 10px;">



**`zh`** 设备原生的像素高度。





•  **nativeHeight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L137)&nbsp;


___


### nativeWidth
<div style="margin-left: 10px;">



**`zh`** 设备原生的像素宽度。





•  **nativeWidth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L129)&nbsp;


___


### noCompressedTexSubImage2D
<div style="margin-left: 10px;">




•  **noCompressedTexSubImage2D**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L97)&nbsp;


___


### numDrawCalls
<div style="margin-left: 10px;">



**`zh`** 绘制调用次数。





•  **numDrawCalls**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L177)&nbsp;


___


### numInstances
<div style="margin-left: 10px;">



**`zh`** 绘制 Instance 数量。





•  **numInstances**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:185](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L185)&nbsp;


___


### numTris
<div style="margin-left: 10px;">



**`zh`** 渲染三角形数量。





•  **numTris**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L193)&nbsp;


___


### queue
<div style="margin-left: 10px;">



**`zh`** GFX 默认队列。





•  **queue**:
 ``Queue`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L89)&nbsp;


___


### renderer
<div style="margin-left: 10px;">



**`zh`** 渲染器描述。





•  **renderer**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L145)&nbsp;


___


### surfaceTransform
<div style="margin-left: 10px;">



**`zh`** 需要在投影矩阵中应用的表面变换。





•  **surfaceTransform**:
 ``SurfaceTransform`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L217)&nbsp;


___


### useVAO
<div style="margin-left: 10px;">




•  **useVAO**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L89)&nbsp;


___


### vendor
<div style="margin-left: 10px;">



**`zh`** 厂商描述。





•  **vendor**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L153)&nbsp;


___


### webGLQueue
<div style="margin-left: 10px;">




•  **webGLQueue**:
 ``WebGLQueue`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L77)&nbsp;


___


### width
<div style="margin-left: 10px;">



**`zh`** 设备像素宽度。





•  **width**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L113)&nbsp;


___

<!---->
## Methods

### acquire

<div style="margin-left: 10px;">

▸   **acquire**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:593](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L593)&nbsp;
___
### blitFramebuffer

<div style="margin-left: 10px;">

▸   **blitFramebuffer**<`void`\>(`src: Framebuffer, dst: Framebuffer, srcRect: Rect, dstRect: Rect, filter: Filter`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `src` | `Framebuffer` | - |
| `dst` | `Framebuffer` | - |
| `srcRect` | `Rect` | - |
| `dstRect` | `Rect` | - |
| `filter` | `Filter` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:781](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L781)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:725](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L725)&nbsp;
___
### copyFramebufferToBuffer

<div style="margin-left: 10px;">

▸   **copyFramebufferToBuffer**<`void`\>(`srcFramebuffer: Framebuffer, dstBuffer: ArrayBuffer, regions: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `srcFramebuffer` | `Framebuffer` | - |
| `dstBuffer` | `ArrayBuffer` | - |
| `regions` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:747](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L747)&nbsp;
___
### copyTexImagesToTexture

<div style="margin-left: 10px;">

▸   **copyTexImagesToTexture**<`void`\>(`texImages: undefined, texture: Texture, regions: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `texImages` |  | - |
| `texture` | `Texture` | - |
| `regions` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:734](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L734)&nbsp;
___
### createBuffer

<div style="margin-left: 10px;">

▸   **createBuffer**<`Buffer`\>(`info: BufferInfo | BufferViewInfo`) : `Buffer`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `BufferInfo \| BufferViewInfo` | - |


##### Returns `Buffer`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:613](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L613)&nbsp;
___
### createCommandBuffer

<div style="margin-left: 10px;">

▸   **createCommandBuffer**<`CommandBuffer`\>(`info: CommandBufferInfo`) : `CommandBuffer`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `CommandBufferInfo` | - |


##### Returns `CommandBuffer`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:605](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L605)&nbsp;
___
### createDescriptorSet

<div style="margin-left: 10px;">

▸   **createDescriptorSet**<`DescriptorSet`\>(`info: DescriptorSetInfo`) : `DescriptorSet`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DescriptorSetInfo` | - |


##### Returns `DescriptorSet`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:637](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L637)&nbsp;
___
### createDescriptorSetLayout

<div style="margin-left: 10px;">

▸   **createDescriptorSetLayout**<`DescriptorSetLayout`\>(`info: DescriptorSetLayoutInfo`) : `DescriptorSetLayout`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DescriptorSetLayoutInfo` | - |


##### Returns `DescriptorSetLayout`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:677](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L677)&nbsp;
___
### createFramebuffer

<div style="margin-left: 10px;">

▸   **createFramebuffer**<`Framebuffer`\>(`info: FramebufferInfo`) : `Framebuffer`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `FramebufferInfo` | - |


##### Returns `Framebuffer`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:669](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L669)&nbsp;
___
### createGlobalBarrier

<div style="margin-left: 10px;">

▸   **createGlobalBarrier**<`any`\>(`info: GlobalBarrierInfo`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `GlobalBarrierInfo` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:709](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L709)&nbsp;
___
### createInputAssembler

<div style="margin-left: 10px;">

▸   **createInputAssembler**<`InputAssembler`\>(`info: InputAssemblerInfo`) : `InputAssembler`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `InputAssemblerInfo` | - |


##### Returns `InputAssembler`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:653](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L653)&nbsp;
___
### createPipelineLayout

<div style="margin-left: 10px;">

▸   **createPipelineLayout**<`PipelineLayout`\>(`info: PipelineLayoutInfo`) : `PipelineLayout`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `PipelineLayoutInfo` | - |


##### Returns `PipelineLayout`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:685](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L685)&nbsp;
___
### createPipelineState

<div style="margin-left: 10px;">

▸   **createPipelineState**<`PipelineState`\>(`info: PipelineStateInfo`) : `PipelineState`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `PipelineStateInfo` | - |


##### Returns `PipelineState`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:693](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L693)&nbsp;
___
### createQueue

<div style="margin-left: 10px;">

▸   **createQueue**<`Queue`\>(`info: QueueInfo`) : `Queue`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `QueueInfo` | - |


##### Returns `Queue`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:701](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L701)&nbsp;
___
### createRenderPass

<div style="margin-left: 10px;">

▸   **createRenderPass**<`RenderPass`\>(`info: RenderPassInfo`) : `RenderPass`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `RenderPassInfo` | - |


##### Returns `RenderPass`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:661](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L661)&nbsp;
___
### createSampler

<div style="margin-left: 10px;">

▸   **createSampler**<`Sampler`\>(`info: SamplerInfo`) : `Sampler`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `SamplerInfo` | - |


##### Returns `Sampler`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:629](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L629)&nbsp;
___
### createShader

<div style="margin-left: 10px;">

▸   **createShader**<`Shader`\>(`info: ShaderInfo`) : `Shader`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `ShaderInfo` | - |


##### Returns `Shader`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:645](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L645)&nbsp;
___
### createTexture

<div style="margin-left: 10px;">

▸   **createTexture**<`Texture`\>(`info: TextureInfo | TextureViewInfo`) : `Texture`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TextureInfo \| TextureViewInfo` | - |


##### Returns `Texture`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:621](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L621)&nbsp;
___
### createTextureBarrier

<div style="margin-left: 10px;">

▸   **createTextureBarrier**<`TextureBarrier`\>(`info: TextureBarrierInfo`) : `TextureBarrier`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TextureBarrierInfo` | - |


##### Returns `TextureBarrier`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:717](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L717)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:550](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L550)&nbsp;
___
### flushCommands

<div style="margin-left: 10px;">

▸   **flushCommands**<`void`\>(`cmdBuffs: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuffs` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:591](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L591)&nbsp;
___
### hasFeature

<div style="margin-left: 10px;">

▸   **hasFeature**<`boolean`\>(`feature: Feature`) : `boolean`



**`zh`** 是否具备特性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `feature` | `Feature` | The GFX feature to be queried.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:412](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L412)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: DeviceInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DeviceInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:239](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L239)&nbsp;
___
### present

<div style="margin-left: 10px;">

▸   **present**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:597](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L597)&nbsp;
___
### resize

<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`width: number, height: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |
| `height` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-device.ts:581](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-device.ts#L581)&nbsp;
___
<!---->




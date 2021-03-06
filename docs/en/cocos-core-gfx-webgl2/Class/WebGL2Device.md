
## Class: WebGL2Device


`extend:`
[Device](docs/en/gfx/Class/Device.md)









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
- [ devicePixelRatio](#devicePixelRatio)
- [ gfxAPI](#gfxAPI)
- [ gl](#gl)
- [ height](#height)
- [ isAntialias](#isAntialias)
- [ isPremultipliedAlpha](#isPremultipliedAlpha)
- [ memoryStatus](#memoryStatus)
- [ nativeHeight](#nativeHeight)
- [ nativeWidth](#nativeWidth)
- [ numDrawCalls](#numDrawCalls)
- [ numInstances](#numInstances)
- [ numTris](#numTris)
- [ queue](#queue)
- [ renderer](#renderer)
- [ surfaceTransform](#surfaceTransform)
- [ useVAO](#useVAO)
- [ vendor](#vendor)
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




???  **cmdAllocator**:
`WebGL2CommandAllocator`  = `new WebGL2CommandAllocator()`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L138)&nbsp;


___


### nullTex2D
<div style="margin-left: 10px;">




???  **nullTex2D**:
`WebGL2Texture | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L139)&nbsp;


___


### nullTexCube
<div style="margin-left: 10px;">




???  **nullTexCube**:
`WebGL2Texture | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L140)&nbsp;


___


### stateCache
<div style="margin-left: 10px;">




???  **stateCache**:
`WebGL2StateCache`  = `new WebGL2StateCache()`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L137)&nbsp;


___


### bindingMappingInfo
<div style="margin-left: 10px;">




???  **bindingMappingInfo**:
 ``BindingMappingInfo`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L85)&nbsp;


___


### canvas
<div style="margin-left: 10px;">



**`en`** The HTML canvas element.




???  **canvas**:
 ``HTMLCanvasElement`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L65)&nbsp;


___


### canvas2D
<div style="margin-left: 10px;">



**`en`** The HTML canvas element for 2D rendering.




???  **canvas2D**:
 ``HTMLCanvasElement`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L73)&nbsp;


___


### capabilities
<div style="margin-left: 10px;">



**`en`** Current device capabilities.




???  **capabilities**:
 ``DeviceCaps`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:209](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L209)&nbsp;


___


### colorFormat
<div style="margin-left: 10px;">



**`en`** Device color format.




???  **colorFormat**:
 ``Format`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L161)&nbsp;


___


### commandBuffer
<div style="margin-left: 10px;">



**`en`** GFX default command buffer.




???  **commandBuffer**:
 ``CommandBuffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L97)&nbsp;


___


### depthStencilFormat
<div style="margin-left: 10px;">



**`en`** Device depth stencil format.




???  **depthStencilFormat**:
 ``Format`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L169)&nbsp;


___


### devicePixelRatio
<div style="margin-left: 10px;">



**`en`** Device pixel ratio.




???  **devicePixelRatio**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L105)&nbsp;


___


### gfxAPI
<div style="margin-left: 10px;">



**`en`** Current rendering API.




???  **gfxAPI**:
 ``API`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L81)&nbsp;


___


### gl
<div style="margin-left: 10px;">




???  **gl**:
 ``WebGL2RenderingContext`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L69)&nbsp;


___


### height
<div style="margin-left: 10px;">



**`en`** Device pixel height.




???  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L121)&nbsp;


___


### isAntialias
<div style="margin-left: 10px;">




???  **isAntialias**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L73)&nbsp;


___


### isPremultipliedAlpha
<div style="margin-left: 10px;">




???  **isPremultipliedAlpha**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L77)&nbsp;


___


### memoryStatus
<div style="margin-left: 10px;">



**`en`** Total memory size currently allocated.




???  **memoryStatus**:
 ``MemoryStatus`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L201)&nbsp;


___


### nativeHeight
<div style="margin-left: 10px;">



**`en`** Device native height.




???  **nativeHeight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L137)&nbsp;


___


### nativeWidth
<div style="margin-left: 10px;">



**`en`** Device native width.




???  **nativeWidth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L129)&nbsp;


___


### numDrawCalls
<div style="margin-left: 10px;">



**`en`** Number of draw calls currently recorded.




???  **numDrawCalls**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L177)&nbsp;


___


### numInstances
<div style="margin-left: 10px;">



**`en`** Number of instances currently recorded.




???  **numInstances**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:185](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L185)&nbsp;


___


### numTris
<div style="margin-left: 10px;">



**`en`** Number of triangles currently recorded.




???  **numTris**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L193)&nbsp;


___


### queue
<div style="margin-left: 10px;">



**`en`** GFX default queue.




???  **queue**:
 ``Queue`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L89)&nbsp;


___


### renderer
<div style="margin-left: 10px;">



**`en`** Renderer description.




???  **renderer**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L145)&nbsp;


___


### surfaceTransform
<div style="margin-left: 10px;">



**`en`** The surface transform to be applied in projection matrices.




???  **surfaceTransform**:
 ``SurfaceTransform`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L217)&nbsp;


___


### useVAO
<div style="margin-left: 10px;">




???  **useVAO**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L81)&nbsp;


___


### vendor
<div style="margin-left: 10px;">



**`en`** Vendor description.




???  **vendor**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L153)&nbsp;


___


### width
<div style="margin-left: 10px;">



**`en`** Device pixel width.




???  **width**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L113)&nbsp;


___

<!---->
## Methods

### acquire

<div style="margin-left: 10px;">

???   **acquire**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:462](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L462)&nbsp;
___
### blitFramebuffer

<div style="margin-left: 10px;">

???   **blitFramebuffer**<`void`\>(`src: Framebuffer, dst: Framebuffer, srcRect: Rect, dstRect: Rect, filter: Filter`) : `void`



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

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:652](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L652)&nbsp;
___
### copyBuffersToTexture

<div style="margin-left: 10px;">

???   **copyBuffersToTexture**<`void`\>(`buffers: undefined, texture: Texture, regions: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffers` |  | - |
| `texture` | `Texture` | - |
| `regions` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:596](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L596)&nbsp;
___
### copyFramebufferToBuffer

<div style="margin-left: 10px;">

???   **copyFramebufferToBuffer**<`void`\>(`srcFramebuffer: Framebuffer, dstBuffer: ArrayBuffer, regions: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `srcFramebuffer` | `Framebuffer` | - |
| `dstBuffer` | `ArrayBuffer` | - |
| `regions` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L618)&nbsp;
___
### copyTexImagesToTexture

<div style="margin-left: 10px;">

???   **copyTexImagesToTexture**<`void`\>(`texImages: undefined, texture: Texture, regions: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `texImages` |  | - |
| `texture` | `Texture` | - |
| `regions` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:605](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L605)&nbsp;
___
### createBuffer

<div style="margin-left: 10px;">

???   **createBuffer**<`Buffer`\>(`info: BufferInfo | BufferViewInfo`) : `Buffer`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `BufferInfo \| BufferViewInfo` | - |


##### Returns `Buffer`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:484](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L484)&nbsp;
___
### createCommandBuffer

<div style="margin-left: 10px;">

???   **createCommandBuffer**<`CommandBuffer`\>(`info: CommandBufferInfo`) : `CommandBuffer`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `CommandBufferInfo` | - |


##### Returns `CommandBuffer`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:474](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L474)&nbsp;
___
### createDescriptorSet

<div style="margin-left: 10px;">

???   **createDescriptorSet**<`DescriptorSet`\>(`info: DescriptorSetInfo`) : `DescriptorSet`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DescriptorSetInfo` | - |


##### Returns `DescriptorSet`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:508](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L508)&nbsp;
___
### createDescriptorSetLayout

<div style="margin-left: 10px;">

???   **createDescriptorSetLayout**<`DescriptorSetLayout`\>(`info: DescriptorSetLayoutInfo`) : `DescriptorSetLayout`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DescriptorSetLayoutInfo` | - |


##### Returns `DescriptorSetLayout`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:548](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L548)&nbsp;
___
### createFramebuffer

<div style="margin-left: 10px;">

???   **createFramebuffer**<`Framebuffer`\>(`info: FramebufferInfo`) : `Framebuffer`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `FramebufferInfo` | - |


##### Returns `Framebuffer`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:540](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L540)&nbsp;
___
### createGlobalBarrier

<div style="margin-left: 10px;">

???   **createGlobalBarrier**<`any`\>(`info: GlobalBarrierInfo`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `GlobalBarrierInfo` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:580](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L580)&nbsp;
___
### createInputAssembler

<div style="margin-left: 10px;">

???   **createInputAssembler**<`InputAssembler`\>(`info: InputAssemblerInfo`) : `InputAssembler`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `InputAssemblerInfo` | - |


##### Returns `InputAssembler`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:524](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L524)&nbsp;
___
### createPipelineLayout

<div style="margin-left: 10px;">

???   **createPipelineLayout**<`PipelineLayout`\>(`info: PipelineLayoutInfo`) : `PipelineLayout`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `PipelineLayoutInfo` | - |


##### Returns `PipelineLayout`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:556](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L556)&nbsp;
___
### createPipelineState

<div style="margin-left: 10px;">

???   **createPipelineState**<`PipelineState`\>(`info: PipelineStateInfo`) : `PipelineState`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `PipelineStateInfo` | - |


##### Returns `PipelineState`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:564](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L564)&nbsp;
___
### createQueue

<div style="margin-left: 10px;">

???   **createQueue**<`Queue`\>(`info: QueueInfo`) : `Queue`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `QueueInfo` | - |


##### Returns `Queue`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:572](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L572)&nbsp;
___
### createRenderPass

<div style="margin-left: 10px;">

???   **createRenderPass**<`RenderPass`\>(`info: RenderPassInfo`) : `RenderPass`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `RenderPassInfo` | - |


##### Returns `RenderPass`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:532](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L532)&nbsp;
___
### createSampler

<div style="margin-left: 10px;">

???   **createSampler**<`Sampler`\>(`info: SamplerInfo`) : `Sampler`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `SamplerInfo` | - |


##### Returns `Sampler`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:500](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L500)&nbsp;
___
### createShader

<div style="margin-left: 10px;">

???   **createShader**<`Shader`\>(`info: ShaderInfo`) : `Shader`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `ShaderInfo` | - |


##### Returns `Shader`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:516](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L516)&nbsp;
___
### createTexture

<div style="margin-left: 10px;">

???   **createTexture**<`Texture`\>(`info: TextureInfo | TextureViewInfo`) : `Texture`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TextureInfo \| TextureViewInfo` | - |


##### Returns `Texture`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:492](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L492)&nbsp;
___
### createTextureBarrier

<div style="margin-left: 10px;">

???   **createTextureBarrier**<`TextureBarrier`\>(`info: TextureBarrierInfo`) : `TextureBarrier`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TextureBarrierInfo` | - |


##### Returns `TextureBarrier`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:588](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L588)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

???   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:409](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L409)&nbsp;
___
### flushCommands

<div style="margin-left: 10px;">

???   **flushCommands**<`void`\>(`cmdBuffs: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuffs` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:460](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L460)&nbsp;
___
### hasFeature

<div style="margin-left: 10px;">

???   **hasFeature**<`boolean`\>(`feature: Feature`) : `boolean`



**`en`** Whether the device has specific feature.



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

???   **initialize**<`boolean`\>(`info: DeviceInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DeviceInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L166)&nbsp;
___
### present

<div style="margin-left: 10px;">

???   **present**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:466](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L466)&nbsp;
___
### resize

<div style="margin-left: 10px;">

???   **resize**<`void`\>(`width: number, height: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |
| `height` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-device.ts:450](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-device.ts#L450)&nbsp;
___
<!---->




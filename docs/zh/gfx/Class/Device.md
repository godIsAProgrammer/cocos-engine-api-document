
## Class: Device






**`zh`** GFX 设备。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ canvas](#canvas)
- [ canvas2D](#canvas2D)
- [ capabilities](#capabilities)
- [ colorFormat](#colorFormat)
- [ commandBuffer](#commandBuffer)
- [ depthStencilFormat](#depthStencilFormat)
- [ devicePixelRatio](#devicePixelRatio)
- [ gfxAPI](#gfxAPI)
- [ height](#height)
- [ memoryStatus](#memoryStatus)
- [ nativeHeight](#nativeHeight)
- [ nativeWidth](#nativeWidth)
- [ numDrawCalls](#numDrawCalls)
- [ numInstances](#numInstances)
- [ numTris](#numTris)
- [ queue](#queue)
- [ renderer](#renderer)
- [ surfaceTransform](#surfaceTransform)
- [ vendor](#vendor)
- [ width](#width)

### Methods

- [ acquire](#acquire)
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


### height
<div style="margin-left: 10px;">



**`zh`** 设备像素高度。





•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L121)&nbsp;


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


### vendor
<div style="margin-left: 10px;">



**`zh`** 厂商描述。





•  **vendor**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L153)&nbsp;


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



**`zh`** 获取下一个交换链缓冲。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:261](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L261)&nbsp;
___
### copyBuffersToTexture

<div style="margin-left: 10px;">

▸   **copyBuffersToTexture**<`void`\>(`buffers: undefined, texture: Texture, regions: undefined`) : `void`



**`zh`** 拷贝缓冲到纹理。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffers` |  | The buffers to be copied.  |
| `texture` | `Texture` | The texture to copy to.  |
| `regions` |  | The region descriptions.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L387)&nbsp;
___
### copyFramebufferToBuffer

<div style="margin-left: 10px;">

▸   **copyFramebufferToBuffer**<`void`\>(`srcFramebuffer: Framebuffer, dstBuffer: ArrayBuffer, regions: undefined`) : `void`



**`zh`** 拷贝帧缓冲到缓冲。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `srcFramebuffer` | `Framebuffer` | The frame buffer to be copied.  |
| `dstBuffer` | `ArrayBuffer` | The buffer to copy to.  |
| `regions` |  | The region descriptions.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:405](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L405)&nbsp;
___
### copyTexImagesToTexture

<div style="margin-left: 10px;">

▸   **copyTexImagesToTexture**<`void`\>(`texImages: undefined, texture: Texture, regions: undefined`) : `void`



**`zh`** 拷贝图像到纹理。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `texImages` |  | The texture to be copied.  |
| `texture` | `Texture` | The texture to copy to.  |
| `regions` |  | The region descriptions.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:396](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L396)&nbsp;
___
### createBuffer

<div style="margin-left: 10px;">

▸   **createBuffer**<`Buffer`\>(`info: BufferInfo | BufferViewInfo`) : `Buffer`



**`zh`** 创建缓冲。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `BufferInfo \| BufferViewInfo` | GFX buffer description info.  |


##### Returns `Buffer`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:287](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L287)&nbsp;
___
### createCommandBuffer

<div style="margin-left: 10px;">

▸   **createCommandBuffer**<`CommandBuffer`\>(`info: CommandBufferInfo`) : `CommandBuffer`



**`zh`** 创建命令缓冲。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `CommandBufferInfo` | GFX command buffer description info.  |


##### Returns `CommandBuffer`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:280](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L280)&nbsp;
___
### createDescriptorSet

<div style="margin-left: 10px;">

▸   **createDescriptorSet**<`DescriptorSet`\>(`info: DescriptorSetInfo`) : `DescriptorSet`



**`zh`** 创建描述符集组。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DescriptorSetInfo` | GFX descriptor sets description info.  |


##### Returns `DescriptorSet`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L308)&nbsp;
___
### createDescriptorSetLayout

<div style="margin-left: 10px;">

▸   **createDescriptorSetLayout**<`DescriptorSetLayout`\>(`info: DescriptorSetLayoutInfo`) : `DescriptorSetLayout`



**`zh`** 创建描述符集布局。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DescriptorSetLayoutInfo` | GFX descriptor set layout description info.  |


##### Returns `DescriptorSetLayout`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L343)&nbsp;
___
### createFramebuffer

<div style="margin-left: 10px;">

▸   **createFramebuffer**<`Framebuffer`\>(`info: FramebufferInfo`) : `Framebuffer`



**`zh`** 创建帧缓冲。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `FramebufferInfo` | GFX frame buffer description info.  |


##### Returns `Framebuffer`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:336](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L336)&nbsp;
___
### createGlobalBarrier

<div style="margin-left: 10px;">

▸   **createGlobalBarrier**<`GlobalBarrier`\>(`info: GlobalBarrierInfo`) : `GlobalBarrier`



**`zh`** 创建全局内存屏障。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `GlobalBarrierInfo` | GFX global barrier description info.  |


##### Returns `GlobalBarrier`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:371](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L371)&nbsp;
___
### createInputAssembler

<div style="margin-left: 10px;">

▸   **createInputAssembler**<`InputAssembler`\>(`info: InputAssemblerInfo`) : `InputAssembler`



**`zh`** 创建纹理。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `InputAssemblerInfo` | GFX input assembler description info.  |


##### Returns `InputAssembler`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:322](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L322)&nbsp;
___
### createPipelineLayout

<div style="margin-left: 10px;">

▸   **createPipelineLayout**<`PipelineLayout`\>(`info: PipelineLayoutInfo`) : `PipelineLayout`



**`zh`** 创建管线布局。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `PipelineLayoutInfo` | GFX pipeline layout description info.  |


##### Returns `PipelineLayout`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:350](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L350)&nbsp;
___
### createPipelineState

<div style="margin-left: 10px;">

▸   **createPipelineState**<`PipelineState`\>(`info: PipelineStateInfo`) : `PipelineState`



**`zh`** 创建管线状态。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `PipelineStateInfo` | GFX pipeline state description info.  |


##### Returns `PipelineState`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L357)&nbsp;
___
### createQueue

<div style="margin-left: 10px;">

▸   **createQueue**<`Queue`\>(`info: QueueInfo`) : `Queue`



**`zh`** 创建队列。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `QueueInfo` | GFX queue description info.  |


##### Returns `Queue`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:364](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L364)&nbsp;
___
### createRenderPass

<div style="margin-left: 10px;">

▸   **createRenderPass**<`RenderPass`\>(`info: RenderPassInfo`) : `RenderPass`



**`zh`** 创建渲染过程。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `RenderPassInfo` | GFX render pass description info.  |


##### Returns `RenderPass`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:329](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L329)&nbsp;
___
### createSampler

<div style="margin-left: 10px;">

▸   **createSampler**<`Sampler`\>(`info: SamplerInfo`) : `Sampler`



**`zh`** 创建采样器。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `SamplerInfo` | GFX sampler description info.  |


##### Returns `Sampler`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L301)&nbsp;
___
### createShader

<div style="margin-left: 10px;">

▸   **createShader**<`Shader`\>(`info: ShaderInfo`) : `Shader`



**`zh`** 创建着色器。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `ShaderInfo` | GFX shader description info.  |


##### Returns `Shader`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L315)&nbsp;
___
### createTexture

<div style="margin-left: 10px;">

▸   **createTexture**<`Texture`\>(`info: TextureInfo | TextureViewInfo`) : `Texture`



**`zh`** 创建纹理。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TextureInfo \| TextureViewInfo` | GFX texture description info.  |


##### Returns `Texture`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L294)&nbsp;
___
### createTextureBarrier

<div style="margin-left: 10px;">

▸   **createTextureBarrier**<`TextureBarrier`\>(`info: TextureBarrierInfo`) : `TextureBarrier`



**`zh`** 创建贴图内存屏障。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TextureBarrierInfo` | GFX texture barrier description info.  |


##### Returns `TextureBarrier`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:378](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L378)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L247)&nbsp;
___
### flushCommands

<div style="margin-left: 10px;">

▸   **flushCommands**<`void`\>(`cmdBuffs: undefined`) : `void`



**`zh`** 实际录制指定的命令缓冲。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuffs` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L273)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:245](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L245)&nbsp;
___
### present

<div style="margin-left: 10px;">

▸   **present**<`void`\> : `void`



**`zh`** 上屏当前交换链缓冲。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L267)&nbsp;
___
### resize

<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`width: number, height: number`) : `void`



**`zh`** 重置设备大小。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | The device width.  |
| `height` | `number` | The device height.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/device.ts:255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/device.ts#L255)&nbsp;
___
<!---->





## Class: RenderShadowMapBatchedQueue





<div class="table-of-content">
<h2>Table of contents</h2>


### Constructors

- [ constructor](#constructor)

### Methods

- [ add](#add)
- [ clear](#clear)
- [ gatherLightPasses](#gatherLightPasses)
- [ recordCommandBuffer](#recordCommandBuffer)
</div>

## Constructors


### constructor
<div style="margin-left: 10px;">

• **new RenderShadowMapBatchedQueue**(`pipeline: ForwardPipeline`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `pipeline` | `ForwardPipeline` |





</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-shadow-map-batched-queue.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-shadow-map-batched-queue.ts#L79)&nbsp;


---

<!---->
## Methods

### add
<div style="margin-left: 10px;">

▸   **add**<`void`\>(`model: Model, cmdBuff: CommandBuffer, _shadowPassIndices: undefined`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `model` | `Model` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuff` | `CommandBuffer` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `_shadowPassIndices` |  | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-shadow-map-batched-queue.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-shadow-map-batched-queue.ts#L127)&nbsp;
___
### clear
<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-shadow-map-batched-queue.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-shadow-map-batched-queue.ts#L119)&nbsp;
___
### gatherLightPasses
<div style="margin-left: 10px;">

▸   **gatherLightPasses**<`void`\>(`light: Light, cmdBuff: CommandBuffer`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `light` | `Light` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuff` | `CommandBuffer` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-shadow-map-batched-queue.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-shadow-map-batched-queue.ts#L87)&nbsp;
___
### recordCommandBuffer
<div style="margin-left: 10px;">

▸   **recordCommandBuffer**<`void`\>(`device: Device, renderPass: RenderPass, cmdBuff: CommandBuffer`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `device` | `Device` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `renderPass` | `RenderPass` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuff` | `CommandBuffer` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-shadow-map-batched-queue.ts:162](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-shadow-map-batched-queue.ts#L162)&nbsp;
___
<!---->




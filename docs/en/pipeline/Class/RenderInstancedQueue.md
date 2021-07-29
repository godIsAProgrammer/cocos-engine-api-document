
## Class: RenderInstancedQueue







**`en`** Render queue for instanced batching


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ queue](#queue)

### Methods

- [ clear](#clear)
- [ recordCommandBuffer](#recordCommandBuffer)
- [ uploadBuffers](#uploadBuffers)
</div>

## Properties


### queue
<div style="margin-left: 10px;">




**`en`** A set of instanced buffer




•  **queue**:
`Set`  = `new Set<InstancedBuffer>()`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-instanced-queue.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-instanced-queue.ts#L46)&nbsp;


___

<!---->
## Methods

### clear
<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




**`en`** Clear the render queue




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-instanced-queue.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-instanced-queue.ts#L52)&nbsp;
___
### recordCommandBuffer
<div style="margin-left: 10px;">

▸   **recordCommandBuffer**<`void`\>(`device: Device, renderPass: RenderPass, cmdBuff: CommandBuffer`) : `void`




**`en`** Record command buffer for the current queue




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
| `cmdBuff` | `CommandBuffer` | The command buffer to store the result  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-instanced-queue.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-instanced-queue.ts#L74)&nbsp;
___
### uploadBuffers
<div style="margin-left: 10px;">

▸   **uploadBuffers**<`void`\>(`cmdBuff: CommandBuffer`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuff` | `CommandBuffer` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-instanced-queue.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-instanced-queue.ts#L61)&nbsp;
___
<!---->




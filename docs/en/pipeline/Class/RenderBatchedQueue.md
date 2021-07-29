
## Class: RenderBatchedQueue






**`en`** The render queue for dynamic batching


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



**`en`** A set of dynamic batched buffer




•  **queue**:
`Set`  = `new Set<BatchedBuffer>()`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-batched-queue.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-batched-queue.ts#L46)&nbsp;


___

<!---->
## Methods

### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`



**`en`** Clear the render queue




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-batched-queue.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-batched-queue.ts#L52)&nbsp;
___
### recordCommandBuffer

<div style="margin-left: 10px;">

▸   **recordCommandBuffer**<`void`\>(`device: Device, renderPass: RenderPass, cmdBuff: CommandBuffer`) : `void`



**`en`** Record command buffer for the current queue



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `device` | `Device` | - |
| `renderPass` | `RenderPass` | - |
| `cmdBuff` | `CommandBuffer` | The command buffer to store the result  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-batched-queue.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-batched-queue.ts#L82)&nbsp;
___
### uploadBuffers

<div style="margin-left: 10px;">

▸   **uploadBuffers**<`void`\>(`cmdBuff: CommandBuffer`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuff` | `CommandBuffer` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-batched-queue.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-batched-queue.ts#L61)&nbsp;
___
<!---->





## Class: RenderBatchedQueue






**`zh`** 渲染合批队列。



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



**`zh`** 动态合批缓存集合。





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



**`zh`** 清空渲染队列。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-batched-queue.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-batched-queue.ts#L52)&nbsp;
___
### recordCommandBuffer

<div style="margin-left: 10px;">

▸   **recordCommandBuffer**<`void`\>(`device: Device, renderPass: RenderPass, cmdBuff: CommandBuffer`) : `void`



**`zh`** 记录命令缓冲。



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




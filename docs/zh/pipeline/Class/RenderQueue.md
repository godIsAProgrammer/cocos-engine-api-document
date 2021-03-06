
## Class: RenderQueue






**`zh`** 渲染队列。它管理一个 GFX [[RenderPass]] 队列，队列中的渲染过程会被 [[RenderStage]] 所执行。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ queue](#queue)

### Constructors

- [ constructor](#constructor)

### Methods

- [ clear](#clear)
- [ insertRenderPass](#insertRenderPass)
- [ recordCommandBuffer](#recordCommandBuffer)
- [ sort](#sort)
</div>

## Properties


### queue
<div style="margin-left: 10px;">



**`zh`** 基于缓存数组的渲染过程队列。





•  **queue**:
`CachedArray` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L63)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new RenderQueue**(`desc: IRenderQueueDesc`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `desc` | `IRenderQueueDesc` |
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L66)&nbsp;


---

<!---->
## Methods

### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`



**`zh`** 清空渲染队列。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L89)&nbsp;
___
### insertRenderPass

<div style="margin-left: 10px;">

▸   **insertRenderPass**<`boolean`\>(`renderObj: IRenderObject, subModelIdx: number, passIdx: number`) : `boolean`



**`zh`** 插入渲染过程。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `renderObj` | `IRenderObject` | The render object of the pass  |
| `subModelIdx` | `number` | - |
| `passIdx` | `number` | The pass id  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L102)&nbsp;
___
### recordCommandBuffer

<div style="margin-left: 10px;">

▸   **recordCommandBuffer**<`void`\>(`device: Device, renderPass: RenderPass, cmdBuff: CommandBuffer`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `device` | `Device` | - |
| `renderPass` | `RenderPass` | - |
| `cmdBuff` | `CommandBuffer` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L128)&nbsp;
___
### sort

<div style="margin-left: 10px;">

▸   **sort**<`void`\> : `void`



**`zh`** 排序渲染队列。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L124)&nbsp;
___
<!---->




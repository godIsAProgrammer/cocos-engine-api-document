
## Class: RenderQueue







**`en`** The render queue. It manages a GFX [[RenderPass]] queue which will be executed by the [[RenderStage]].


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




**`en`** A cached array of render passes




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




**`en`** Clear the render queue




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L89)&nbsp;
___
### insertRenderPass
<div style="margin-left: 10px;">

▸   **insertRenderPass**<`boolean`\>(`renderObj: IRenderObject, subModelIdx: number, passIdx: number`) : `boolean`




**`en`** Insert a render pass into the queue




<!---->
<!--    #### Returns `boolean` Whether the new render pass is successfully added
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `renderObj` | `IRenderObject` | The render object of the pass  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `subModelIdx` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passIdx` | `number` | The pass id  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L102)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L128)&nbsp;
___
### sort
<div style="margin-left: 10px;">

▸   **sort**<`void`\> : `void`




**`en`** Sort the current queue




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L124)&nbsp;
___
<!---->




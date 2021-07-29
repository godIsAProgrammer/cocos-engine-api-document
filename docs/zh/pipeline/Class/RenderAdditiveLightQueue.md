
## Class: RenderAdditiveLightQueue






**`zh`** 叠加光照队列。



<div class="table-of-content">
<h2>Table of contents</h2>


### Constructors

- [ constructor](#constructor)

### Methods

- [ clear](#clear)
- [ destroy](#destroy)
- [ gatherLightPasses](#gatherLightPasses)
- [ recordCommandBuffer](#recordCommandBuffer)
</div>

## Constructors


### constructor
<div style="margin-left: 10px;">

• **new RenderAdditiveLightQueue**(`pipeline: RenderPipeline`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pipeline` | `RenderPipeline` |
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-additive-light-queue.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-additive-light-queue.ts#L132)&nbsp;


---

<!---->
## Methods

### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-additive-light-queue.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-additive-light-queue.ts#L159)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-additive-light-queue.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-additive-light-queue.ts#L174)&nbsp;
___
### gatherLightPasses

<div style="margin-left: 10px;">

▸   **gatherLightPasses**<`void`\>(`camera: Camera, cmdBuff: CommandBuffer`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `camera` | `Camera` | - |
| `cmdBuff` | `CommandBuffer` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-additive-light-queue.ts:191](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-additive-light-queue.ts#L191)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/pipeline/render-additive-light-queue.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-additive-light-queue.ts#L230)&nbsp;
___
<!---->




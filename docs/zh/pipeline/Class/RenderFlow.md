
## Class: RenderFlow







**`zh`** 渲染流程是渲染管线（[[RenderPipeline]]）的一个子过程，它将渲染任务派发到它的所有渲染阶段（[[RenderStage]]）中执行。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ name](#name)
- [ pipeline](#pipeline)
- [ priority](#priority)
- [ stages](#stages)
- [ tag](#tag)

### Methods

- [ activate](#activate)
- [ destroy](#destroy)
- [ initialize](#initialize)
- [ render](#render)
</div>

## Properties


### name
<div style="margin-left: 10px;">




**`zh`** 渲染流程的名字





•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L57)&nbsp;


___


### pipeline
<div style="margin-left: 10px;">




**`zh`** 获取pipeline





•  **pipeline**:
 ``RenderPipeline`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L108)&nbsp;


___


### priority
<div style="margin-left: 10px;">




**`zh`** 当前渲染流程的优先级。





•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L65)&nbsp;


___


### stages
<div style="margin-left: 10px;">




**`zh`** 渲染流程 stage 列表。




**`readonly`** 





•  **stages**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L82)&nbsp;


___


### tag
<div style="margin-left: 10px;">




**`zh`** 当前渲染流程的标签。





•  **tag**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L73)&nbsp;


___

<!---->
## Methods

### activate
<div style="margin-left: 10px;">

▸   **activate**<`void`\>(`pipeline: RenderPipeline`) : `void`




**`zh`** 为指定的渲染管线开启当前渲染流程




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipeline` | `RenderPipeline` | The render pipeline to activate this render flow  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L130)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




**`zh`** 销毁函数。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L154)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: IRenderFlowInfo`) : `boolean`




**`zh`** 初始化函数，正常情况下不会用到，仅用于程序化生成渲染管线的情况。




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IRenderFlowInfo` | The render flow information  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:117](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L117)&nbsp;
___
### render
<div style="margin-left: 10px;">

▸   **render**<`void`\>(`camera: Camera`) : `void`




**`zh`** 渲染函数，对指定的渲染视图按顺序执行所有渲染阶段。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `camera` | `Camera` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L144)&nbsp;
___
<!---->




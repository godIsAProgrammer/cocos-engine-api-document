
## Class: RenderStage






**`zh`** 渲染阶段是实质上的渲染执行者，它负责收集渲染数据并执行渲染将渲染结果输出到屏幕或其他 GFX [[FrameBuffer]] 中。
典型的渲染阶段会收集它所管理的渲染对象，按照 [[Camera]] 的清除标记进行清屏，记录并执行渲染指令缓存，并最终呈现渲染结果。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ name](#name)
- [ priority](#priority)
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



**`zh`** 当前渲染阶段的名字。





•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L62)&nbsp;


___


### priority
<div style="margin-left: 10px;">



**`zh`** 当前渲染阶段的优先级。





•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L70)&nbsp;


___


### tag
<div style="margin-left: 10px;">



**`zh`** 当前渲染阶段的标签。





•  **tag**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L78)&nbsp;


___

<!---->
## Methods

### activate

<div style="margin-left: 10px;">

▸   **activate**<`void`\>(`pipeline: RenderPipeline, flow: RenderFlow`) : `void`



**`zh`** 为指定的渲染流程开启当前渲染阶段



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipeline` | `RenderPipeline` | - |
| `flow` | `RenderFlow` | The render flow to activate this render stage  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L125)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`any`\> : `any`



**`zh`** 销毁函数。





##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L134)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: IRenderStageInfo`) : `boolean`



**`zh`** 初始化函数，正常情况下不会用到，仅用于程序化生成渲染管线的情况。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IRenderStageInfo` | The render stage information  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L113)&nbsp;
___
### render

<div style="margin-left: 10px;">

▸   **render**<`any`\>(`camera: Camera`) : `any`



**`zh`** 渲染函数。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `camera` | `Camera` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L141)&nbsp;
___
<!---->




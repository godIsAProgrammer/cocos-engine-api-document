
## Class: ForwardStage


`extend:`
[RenderStage](docs/zh/pipeline/Class/RenderStage.md)










**`zh`** 前向渲染阶段。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ name](#name)
- [ priority](#priority)
- [ tag](#tag)

### Constructors

- [ constructor](#constructor)

### Methods

- [ activate](#activate)
- [ destroy](#destroy)
- [ initialize](#initialize)
- [ render](#render)

### Object literals

- [ **`static`**  initInfo](#initInfo)
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
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ForwardStage**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/forward/forward-stage.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/forward/forward-stage.ts#L91)&nbsp;


---

<!---->
## Methods

### activate

<div style="margin-left: 10px;">

▸   **activate**<`void`\>(`pipeline: ForwardPipeline, flow: ForwardFlow`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipeline` | `ForwardPipeline` | - |
| `flow` | `ForwardFlow` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/forward/forward-stage.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/forward/forward-stage.ts#L108)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/forward/forward-stage.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/forward/forward-stage.ts#L139)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: IRenderStageInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IRenderStageInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/forward/forward-stage.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/forward/forward-stage.ts#L100)&nbsp;
___
### render

<div style="margin-left: 10px;">

▸   **render**<`void`\>(`camera: Camera`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `camera` | `Camera` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/forward/forward-stage.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/forward/forward-stage.ts#L142)&nbsp;
___
<!---->
<!---->




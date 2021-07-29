
## Class: GbufferStage


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

• **new GbufferStage**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/gbuffer-stage.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/gbuffer-stage.ts#L83)&nbsp;


---

<!---->
## Methods

### activate

<div style="margin-left: 10px;">

▸   **activate**<`void`\>(`pipeline: DeferredPipeline, flow: GbufferFlow`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipeline` | `DeferredPipeline` | - |
| `flow` | `GbufferFlow` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/gbuffer-stage.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/gbuffer-stage.ts#L99)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/gbuffer-stage.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/gbuffer-stage.ts#L126)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/gbuffer-stage.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/gbuffer-stage.ts#L91)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/gbuffer-stage.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/gbuffer-stage.ts#L129)&nbsp;
___
<!---->
<!---->




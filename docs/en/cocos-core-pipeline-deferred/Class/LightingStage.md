
## Class: LightingStage


`extend:`
[RenderStage](docs/en/pipeline/Class/RenderStage.md)










**`en`** The lighting render stage


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ material](#material)
- [ name](#name)
- [ priority](#priority)
- [ tag](#tag)

### Methods

- [ activate](#activate)
- [ destroy](#destroy)
- [ gatherLights](#gatherLights)
- [ initialize](#initialize)
- [ render](#render)

### Object literals

- [ **`static`**  initInfo](#initInfo)
</div>

## Properties


### material
<div style="margin-left: 10px;">




•  **material**:
 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/lighting-stage.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/lighting-stage.ts#L79)&nbsp;


___


### name
<div style="margin-left: 10px;">



**`en`** Name of the current stage




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L62)&nbsp;


___


### priority
<div style="margin-left: 10px;">



**`en`** Priority of the current stage




•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L70)&nbsp;


___


### tag
<div style="margin-left: 10px;">



**`en`** Tag of the current stage




•  **tag**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L78)&nbsp;


___

<!---->
## Methods

### activate

<div style="margin-left: 10px;">

▸   **activate**<`void`\>(`pipeline: DeferredPipeline, flow: LightingFlow`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipeline` | `DeferredPipeline` | - |
| `flow` | `LightingFlow` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/lighting-stage.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/lighting-stage.ts#L183)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/lighting-stage.ts:209](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/lighting-stage.ts#L209)&nbsp;
___
### gatherLights

<div style="margin-left: 10px;">

▸   **gatherLights**<`void`\>(`camera: Camera`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `camera` | `Camera` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/lighting-stage.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/lighting-stage.ts#L92)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/lighting-stage.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/lighting-stage.ts#L87)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/lighting-stage.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/lighting-stage.ts#L215)&nbsp;
___
<!---->
<!---->




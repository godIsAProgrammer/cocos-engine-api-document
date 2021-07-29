
## Class: GbufferFlow


`extend:`
[RenderFlow](docs/en/pipeline/Class/RenderFlow.md)












**`en`** The gbuffer flow in deferred render pipeline


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

### Object literals

- [ **`static`**  initInfo](#initInfo)
</div>

## Properties


### name
<div style="margin-left: 10px;">




**`en`** The name of the render flow




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L57)&nbsp;


___


### pipeline
<div style="margin-left: 10px;">




**`en`** Get pipeline




•  **pipeline**:
 ``RenderPipeline`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L108)&nbsp;


___


### priority
<div style="margin-left: 10px;">




**`en`** Priority of the current flow




•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L65)&nbsp;


___


### stages
<div style="margin-left: 10px;">




**`en`** The stages of flow.




**`readonly`** 





•  **stages**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L82)&nbsp;


___


### tag
<div style="margin-left: 10px;">




**`en`** Tag of the current flow




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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipeline` | `RenderPipeline` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/gbuffer-flow.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/gbuffer-flow.ts#L66)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/gbuffer-flow.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/gbuffer-flow.ts#L74)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: IRenderFlowInfo`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IRenderFlowInfo` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/gbuffer-flow.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/gbuffer-flow.ts#L56)&nbsp;
___
### render
<div style="margin-left: 10px;">

▸   **render**<`void`\>(`camera: Camera`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `camera` | `Camera` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/deferred/gbuffer-flow.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/deferred/gbuffer-flow.ts#L70)&nbsp;
___
<!---->
<!---->





## Class: RenderFlow






**`en`** Render flow is a sub process of the [[RenderPipeline]], it dispatch the render task to all the [[RenderStage]]s.


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



**`en`** Activate the current render flow in the given pipeline



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



**`en`** Destroy function.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L154)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: IRenderFlowInfo`) : `boolean`



**`en`** The initialization process, user shouldn't use it in most case, only useful when need to generate render pipeline programmatically.



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



**`en`** Render function, it basically run all render stages in sequence for the given view.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `camera` | `Camera` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-flow.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-flow.ts#L144)&nbsp;
___
<!---->




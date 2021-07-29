
## Class: RenderStage







**`en`** The render stage actually renders render objects to the output window or other GFX [[FrameBuffer]].
Typically, a render stage collects render objects it's responsible for, clear the camera,
record and execute command buffer, and at last present the render result.


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

▸   **activate**<`void`\>(`pipeline: RenderPipeline, flow: RenderFlow`) : `void`




**`en`** Activate the current render stage in the given render flow




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipeline` | `RenderPipeline` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `flow` | `RenderFlow` | The render flow to activate this render stage  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L125)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`any`\> : `any`




**`en`** Destroy function




<!---->
<!--    #### Returns `any` -->
<!---->


##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L134)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: IRenderStageInfo`) : `boolean`




**`en`** The initialization process, user shouldn't use it in most case, only useful when need to generate render pipeline programmatically.




<!---->
<!--    #### Returns `boolean` -->
<!---->

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




**`en`** Render function




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `camera` | `Camera` | - |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/pipeline/render-stage.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-stage.ts#L141)&nbsp;
___
<!---->




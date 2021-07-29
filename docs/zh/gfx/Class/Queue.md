
## Class: Queue


`extend:`
[Obj](docs/zh/gfx/Class/Obj.md)












**`zh`** GFX 队列。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ gfxType](#gfxType)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
- [ isAsync](#isAsync)
- [ submit](#submit)
</div>

## Properties


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`zh`** 队列类型。





•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/queue.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/queue.ts#L44)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Queue**(`device: Device`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `device` | `Device` |





</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/queue.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/queue.ts#L52)&nbsp;


---

<!---->
## Methods

### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/queue.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/queue.ts#L63)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: QueueInfo`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `QueueInfo` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/queue.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/queue.ts#L61)&nbsp;
___
### isAsync
<div style="margin-left: 10px;">

▸   **isAsync**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/queue.ts:59](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/queue.ts#L59)&nbsp;
___
### submit
<div style="margin-left: 10px;">

▸   **submit**<`void`\>(`cmdBuffs: undefined`) : `void`




**`zh`** 提交命令缓冲数组。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuffs` |  | The command buffers to be submitted.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/queue.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/queue.ts#L71)&nbsp;
___
<!---->




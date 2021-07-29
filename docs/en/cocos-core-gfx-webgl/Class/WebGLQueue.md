
## Class: WebGLQueue


`extend:`
[Queue](docs/en/gfx/Class/Queue.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ numDrawCalls](#numDrawCalls)
- [ numInstances](#numInstances)
- [ numTris](#numTris)
- [ gfxType](#gfxType)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ clear](#clear)
- [ destroy](#destroy)
- [ initialize](#initialize)
- [ isAsync](#isAsync)
- [ submit](#submit)
</div>

## Properties


### numDrawCalls
<div style="margin-left: 10px;">




•  **numDrawCalls**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-queue.ts:31](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-queue.ts#L31)&nbsp;


___


### numInstances
<div style="margin-left: 10px;">




•  **numInstances**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-queue.ts:32](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-queue.ts#L32)&nbsp;


___


### numTris
<div style="margin-left: 10px;">




•  **numTris**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-queue.ts:33](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-queue.ts#L33)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`en`** Get current type.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/queue.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/queue.ts#L44)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLQueue**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/queue.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/queue.ts#L52)&nbsp;


---

<!---->
## Methods

### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-queue.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-queue.ts#L57)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-queue.ts:41](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-queue.ts#L41)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: QueueInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `QueueInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-queue.ts:35](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-queue.ts#L35)&nbsp;
___
### isAsync

<div style="margin-left: 10px;">

▸   **isAsync**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/queue.ts:59](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/queue.ts#L59)&nbsp;
___
### submit

<div style="margin-left: 10px;">

▸   **submit**<`void`\>(`cmdBuffs: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmdBuffs` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-queue.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-queue.ts#L44)&nbsp;
___
<!---->




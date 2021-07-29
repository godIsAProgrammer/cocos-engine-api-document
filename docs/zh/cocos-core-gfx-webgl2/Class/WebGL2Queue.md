
## Class: WebGL2Queue


`extend:`
[Queue](docs/zh/gfx/Class/Queue.md)









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

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-queue.ts:32](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-queue.ts#L32)&nbsp;


___


### numInstances
<div style="margin-left: 10px;">




•  **numInstances**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-queue.ts:33](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-queue.ts#L33)&nbsp;


___


### numTris
<div style="margin-left: 10px;">




•  **numTris**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-queue.ts:34](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-queue.ts#L34)&nbsp;


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

• **new WebGL2Queue**(`device: Device`)

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

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-queue.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-queue.ts#L58)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-queue.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-queue.ts#L42)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-queue.ts:36](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-queue.ts#L36)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-queue.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-queue.ts#L45)&nbsp;
___
<!---->




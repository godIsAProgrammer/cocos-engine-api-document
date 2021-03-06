
## Class: AnimationManager











<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ID](#ID)
- [ blendState](#blendState)
- [ id](#id)
- [ priority](#priority)

### Methods

- [ **`static`**  sortByPriority](#sortByPriority)
- [ addAnimation](#addAnimation)
- [ addCrossFade](#addCrossFade)
- [ addSockets](#addSockets)
- [ destruct](#destruct)
- [ init](#init)
- [ postUpdate](#postUpdate)
- [ pushDelayEvent](#pushDelayEvent)
- [ removeAnimation](#removeAnimation)
- [ removeCrossFade](#removeCrossFade)
- [ removeSockets](#removeSockets)
- [ update](#update)
</div>

## Properties


### ID
<div style="margin-left: 10px;">




• `static` **ID**:
`string`  = `"animation"`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L56)&nbsp;


___


### blendState
<div style="margin-left: 10px;">




•  **blendState**:
 ``BlendStateBuffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L52)&nbsp;


___


### id
<div style="margin-left: 10px;">




•  **id**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L49)&nbsp;   [cocos/core/components/system.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L52)&nbsp;


___


### priority
<div style="margin-left: 10px;">




•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L42)&nbsp;   [cocos/core/components/system.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L45)&nbsp;


___

<!---->
## Methods

### sortByPriority

<div style="margin-left: 10px;">

▸ `static`  **sortByPriority**(`a: System, b: System`)



**`zh`** 不同系统间排序。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `System` | System a  |
| `b` | `System` | System b  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L62)&nbsp;
___
### addAnimation

<div style="margin-left: 10px;">

▸   **addAnimation**<`void`\>(`anim: AnimationState`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `anim` | `AnimationState` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L108)&nbsp;
___
### addCrossFade

<div style="margin-left: 10px;">

▸   **addCrossFade**<`void`\>(`crossFade: CrossFade`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `crossFade` | `CrossFade` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L67)&nbsp;
___
### addSockets

<div style="margin-left: 10px;">

▸   **addSockets**<`void`\>(`root: Node, sockets: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `root` | `Node` | - |
| `sockets` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L132)&nbsp;
___
### destruct

<div style="margin-left: 10px;">

▸   **destruct**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L104)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`



**`zh`** 系统初始化函数，会在注册时被 [[Director]] 调用，如果需要的话应该由子类实现





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L76)&nbsp;
___
### postUpdate

<div style="margin-left: 10px;">

▸   **postUpdate**<`void`\>(`dt: number`) : `void`



**`zh`** 系统的帧后处理函数，它会在所有组件的 lateUpdate 之后以及渲染之前被调用



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | Delta time after the last frame  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L88)&nbsp;
___
### pushDelayEvent

<div style="margin-left: 10px;">

▸   **pushDelayEvent**<`void`\>(`fn: Function, thisArg: any, args: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fn` | `Function` | - |
| `thisArg` | `any` | - |
| `args` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L124)&nbsp;
___
### removeAnimation

<div style="margin-left: 10px;">

▸   **removeAnimation**<`void`\>(`anim: AnimationState`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `anim` | `AnimationState` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L115)&nbsp;
___
### removeCrossFade

<div style="margin-left: 10px;">

▸   **removeCrossFade**<`void`\>(`crossFade: CrossFade`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `crossFade` | `CrossFade` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L71)&nbsp;
___
### removeSockets

<div style="margin-left: 10px;">

▸   **removeSockets**<`void`\>(`root: Node, sockets: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `root` | `Node` | - |
| `sockets` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L144)&nbsp;
___
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-manager.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-manager.ts#L75)&nbsp;
___
<!---->





## Class: Game




`extend: `
[Empty](docs/zh/event/Class/Empty.md)&nbsp;
[IEventified](docs/zh/event/Interface/IEventified.md)&nbsp;








**`zh`** 包含游戏主体信息并负责驱动游戏的游戏对象。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ canvas](#canvas)
- [ collisionMatrix](#collisionMatrix)
- [ config](#config)
- [ container](#container)
- [ eventTargetOn](#eventTargetOn)
- [ eventTargetOnce](#eventTargetOnce)
- [ frame](#frame)
- [ groupList](#groupList)
- [ onStart](#onStart)
- [ renderType](#renderType)
- [ frameTime](#frameTime)
- [ inited](#inited)

### Methods

- [ addPersistRootNode](#addPersistRootNode)
- [ emit](#emit)
- [ end](#end)
- [ getFrameRate](#getFrameRate)
- [ hasEventListener](#hasEventListener)
- [ init](#init)
- [ isPaused](#isPaused)
- [ isPersistRootNode](#isPersistRootNode)
- [ off](#off)
- [ on](#on)
- [ once](#once)
- [ pause](#pause)
- [ removeAll](#removeAll)
- [ removePersistRootNode](#removePersistRootNode)
- [ restart](#restart)
- [ resume](#resume)
- [ run](#run)
- [ setFrameRate](#setFrameRate)
- [ step](#step)
- [ targetOff](#targetOff)
</div>

## Properties


### canvas
<div style="margin-left: 10px;">



**`zh`** 游戏的画布。





•  **canvas**:
`HTMLCanvasElement | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:264](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L264)&nbsp;


___


### collisionMatrix
<div style="margin-left: 10px;">




•  **collisionMatrix**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L304)&nbsp;


___


### config
<div style="margin-left: 10px;">



**`zh`** 
当前的游戏配置
注意：请不要直接修改这个对象，它不会有任何效果。





•  **config**:
`NormalizedGameConfig`  = `{} as NormalizedGameConfig`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L283)&nbsp;


___


### container
<div style="margin-left: 10px;">



**`zh`** 游戏画布的容器。





•  **container**:
`HTMLDivElement | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L259)&nbsp;


___


### eventTargetOn
<div style="margin-left: 10px;">




•  **eventTargetOn**:
`on`  = `super.on`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L272)&nbsp;


___


### eventTargetOnce
<div style="margin-left: 10px;">




•  **eventTargetOnce**:
`once`  = `super.once`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L273)&nbsp;


___


### frame
<div style="margin-left: 10px;">



**`zh`** 游戏画布的外框，container 的父容器。





•  **frame**:
`Record | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L254)&nbsp;


___


### groupList
<div style="margin-left: 10px;">




•  **groupList**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:305](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L305)&nbsp;


___


### onStart
<div style="margin-left: 10px;">



**`zh`** 当引擎完成启动后的回调函数。



**`method`** onStart





•  **onStart**:
`Game.OnStart | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L290)&nbsp;


___


### renderType
<div style="margin-left: 10px;">



**`zh`** 游戏的渲染器类型。





•  **renderType**:
`number`  = `-1`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L270)&nbsp;


___


### frameTime
<div style="margin-left: 10px;">




•  **frameTime**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L300)&nbsp;


___


### inited
<div style="margin-left: 10px;">



**`zh`** 引擎和渲染器是否以完成初始化





•  **inited**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:296](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L296)&nbsp;


___

<!---->
## Methods

### addPersistRootNode

<div style="margin-left: 10px;">

▸   **addPersistRootNode**<`void`\>(`node: Node`) : `void`



**`zh`** 
声明常驻根节点，该节点不会在场景切换中被销毁。<br>
目标节点必须位于为层级的根节点，否则无效。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `Node` | The node to be made persistent  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:538](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L538)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`



**`zh`** 派发一个指定事件，并传递需要的参数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | event type  |
| `arg0` | `any` | - |
| `arg1` | `any` | - |
| `arg2` | `any` | - |
| `arg3` | `any` | - |
| `arg4` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L141)&nbsp;
___
### end

<div style="margin-left: 10px;">

▸   **end**<`void`\> : `void`



**`zh`** 退出游戏





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:426](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L426)&nbsp;
___
### getFrameRate

<div style="margin-left: 10px;">

▸   **getFrameRate**<`number`\> : `number`



**`zh`** 获取设置的游戏帧率（不等同于实际帧率）。




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L351)&nbsp;
___
### hasEventListener

<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`



**`zh`** 检查指定事件是否已注册回调。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Event type.  |
| `callback` | `undefined \| ` | Callback function when event triggered.  |
| `target` | `any` | Callback callee.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L52)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`Promise`\>(`config: IGameConfig`) : `Promise`



**`zh`** 使用指定的配置初始化引擎。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `config` | `IGameConfig` | Pass configuration object  |


##### Returns `Promise`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L481)&nbsp;
___
### isPaused

<div style="margin-left: 10px;">

▸   **isPaused**<`boolean`\> : `boolean`



**`zh`** 判断游戏是否暂停。





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L394)&nbsp;
___
### isPersistRootNode

<div style="margin-left: 10px;">

▸   **isPersistRootNode**<`boolean`\>(`node: undefined`) : `boolean`



**`zh`** 检查节点是否是常驻根节点。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` |  | The node to be checked  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:585](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L585)&nbsp;
___
### off

<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: EventType, callback: TFunction, thisArg: any`) : `void`



**`zh`** 
删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。




**`example`**

```ts

import { log } from 'cc';
// register fire eventListener
var callback = eventTarget.on('fire', function () {
    log("fire in the hole");
}, target);
// remove fire event listener
eventTarget.off('fire', callback, target);
// remove all fire event listeners
eventTarget.off('fire');

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type being removed.  |
| `callback` | `TFunction` | The callback to remove.  |
| `thisArg` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L114)&nbsp;
___
### on

<div style="margin-left: 10px;">

▸   **on**<`any`\>(`type: string, callback: undefined, target: any, once: undefined | false | true`) : `any`



**`zh`** 
注册 game 的特定事件类型回调。这种类型的事件应该被 `emit` 触发。<br>




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type to listen for.  |
| `callback` |  | The callback that will be invoked when the event is dispatched.<br>                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `target` | `any` | The target (this object) to invoke the callback, can be null  |
| `once` | `undefined \| false \| true` | After the first invocation, whether the callback should be unregistered.  |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:448](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L448)&nbsp;
___
### once

<div style="margin-left: 10px;">

▸   **once**<`any`\>(`type: string, callback: undefined, target: any`) : `any`



**`zh`** 
注册 game 的特定事件类型回调，回调会在第一时间被触发后删除自身。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type to listen for.  |
| `callback` |  | The callback that will be invoked when the event is dispatched.<br>                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `target` | `any` | The target (this object) to invoke the callback, can be null  |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L468)&nbsp;
___
### pause

<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`



**`zh`** 暂停游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效。这点和只暂停游戏逻辑的 `director.pause` 不同。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:369](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L369)&nbsp;
___
### removeAll

<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`



**`zh`** 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The event type or target with which the listeners will be removed  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L133)&nbsp;
___
### removePersistRootNode

<div style="margin-left: 10px;">

▸   **removePersistRootNode**<`void`\>(`node: Node`) : `void`



**`zh`** 取消常驻根节点。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `Node` | The node to be removed from persistent node list  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:570](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L570)&nbsp;
___
### restart

<div style="margin-left: 10px;">

▸   **restart**<`Promise`\> : `Promise`



**`zh`** 重新开始游戏





##### Returns `Promise`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:402](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L402)&nbsp;
___
### resume

<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`



**`zh`** 恢复游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L384)&nbsp;
___
### run

<div style="margin-left: 10px;">

▸   **run**<`Promise`\>(`onStart: Game.OnStart`) : `Promise`



**`zh`** 运行游戏，并且指定引擎配置和 onStart 的回调。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `onStart` | `Game.OnStart` | function to be executed after game initialized  |


##### Returns `Promise`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:505](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L505)&nbsp;   [cocos/core/game.ts:507](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L507)&nbsp;
___
### setFrameRate

<div style="margin-left: 10px;">

▸   **setFrameRate**<`void`\>(`frameRate: number | string`) : `void`



**`zh`** 设置游戏帧率。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `frameRate` | `number \| string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:332](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L332)&nbsp;
___
### step

<div style="margin-left: 10px;">

▸   **step**<`void`\> : `void`



**`zh`** 执行一帧游戏循环。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:359](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L359)&nbsp;
___
### targetOff

<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`typeOrTarget: any`) : `void`



**`zh`** 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The target to be searched for all related listeners  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L126)&nbsp;
___
<!---->




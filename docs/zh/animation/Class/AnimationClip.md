
## Class: AnimationClip


`extend:`
[Asset](docs/zh/asset/Class/Asset.md)










**`zh`** 动画剪辑表示一段使用动画编辑器编辑的关键帧动画或是外部美术工具生产的骨骼动画。
它的数据主要被分为几层：轨道、关键帧和曲线。


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  WrapMode](#WrapMode)
- [ enableTrsBlending](#enableTrsBlending)
- [ events](#events)
- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ sample](#sample)
- [ speed](#speed)
- [ wrapMode](#wrapMode)
- [ commonTargets](#commonTargets)
- [ curves](#curves)
- [ data](#data)
- [ duration](#duration)
- [ hash](#hash)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ keys](#keys)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ refCount](#refCount)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  deserialize](#deserialize)
- [ **`static`**  createWithSpriteFrames](#createWithSpriteFrames)
- [ addRef](#addRef)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getEventGroupIndexAtRatio](#getEventGroupIndexAtRatio)
- [ getPropertyCurves](#getPropertyCurves)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ removeAll](#removeAll)
- [ targetOff](#targetOff)
- [ toString](#toString)
- [ updateEventDatas](#updateEventDatas)
- [ validate](#validate)
</div>

## Properties


### WrapMode
<div style="margin-left: 10px;">




• `static` **WrapMode**:
`WrapMode`  = `AnimationWrapMode`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L121)&nbsp;


___


### enableTrsBlending
<div style="margin-left: 10px;">
Sets if node TRS curves in this animation can be blended.
Normally this flag is enabled for model animation and disabled for other case.



Sets if node TRS curves in this animation can be blended.
Normally this flag is enabled for model animation and disabled for other case.

•  **enableTrsBlending**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L199)&nbsp;


___


### events
<div style="margin-left: 10px;">



**`zh`** 动画包含的事件数据。




•  **events**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:191](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L191)&nbsp;


___


### isDefault
<div style="margin-left: 10px;">




•  **isDefault**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L86)&nbsp;


___


### loaded
<div style="margin-left: 10px;">



**`zh`** 
该资源是否已经成功加载。





•  **loaded**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L82)&nbsp;


___


### sample
<div style="margin-left: 10px;">



**`zh`** 动画帧率，单位为帧/秒。注意此属性仅用于编辑器动画编辑。




•  **sample**:
`number`  = `60`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L170)&nbsp;


___


### speed
<div style="margin-left: 10px;">



**`zh`** 动画的播放速度。




•  **speed**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L177)&nbsp;


___


### wrapMode
<div style="margin-left: 10px;">



**`zh`** 动画的循环模式。




•  **wrapMode**:
`WrapMode`  = `AnimationWrapMode.Normal`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L184)&nbsp;


___


### commonTargets
<div style="margin-left: 10px;">




•  **commonTargets**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L302)&nbsp;   [cocos/core/animation/animation-clip.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L306)&nbsp;


___


### curves
<div style="margin-left: 10px;">




•  **curves**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L286)&nbsp;   [cocos/core/animation/animation-clip.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L290)&nbsp;


___


### data
<div style="margin-left: 10px;">
此动画的数据。



此动画的数据。

•  **data**:
 ``null | Uint8Array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L298)&nbsp;


___


### duration
<div style="margin-left: 10px;">



**`zh`** 动画的周期。




•  **duration**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L233)&nbsp;   [cocos/core/animation/animation-clip.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L237)&nbsp;


___


### hash
<div style="margin-left: 10px;">




•  **hash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:278](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L278)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isValid
<div style="margin-left: 10px;">



**`zh`** 
表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。



**`default`** true




**`example`**

```ts


import { Node, log } from 'cc';
const node = new Node();
log(node.isValid);    // true
node.destroy();
log(node.isValid);    // true, still valid in this frame
// after a frame...
log(node.isValid);    // false, destroyed in the end of last frame


```




•  **isValid**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L266)&nbsp;


___


### keys
<div style="margin-left: 10px;">



**`zh`** 曲线可引用的所有时间轴。




•  **keys**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:245](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L245)&nbsp;   [cocos/core/animation/animation-clip.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L249)&nbsp;


___


### name
<div style="margin-left: 10px;">



**`zh`** 该对象的名称。



**`default`** ""



**`example`**

```ts


obj.name = "New Obj";


```




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L221)&nbsp;   [cocos/core/data/object.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L224)&nbsp;


___


### nativeUrl
<div style="margin-left: 10px;">



**`zh`** 
返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。



**`readonly`** 





•  **nativeUrl**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L113)&nbsp;


___


### refCount
<div style="margin-left: 10px;">



**`zh`** 
引用的数量





•  **refCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L249)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new AnimationClip**(`args: ConstructorParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `ConstructorParameters` |
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L151)&nbsp;


---

<!---->
## Methods

### deserialize

<div style="margin-left: 10px;">

▸ `static`  **deserialize**<`any`\>(`data: any`) : `any`



**`method`** deserialize


应 AssetDB 要求提供这个方法。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `data` | `any` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L71)&nbsp;
___
### createWithSpriteFrames

<div style="margin-left: 10px;">

▸ `static`  **createWithSpriteFrames**(`spriteFrames: undefined, sample: number`)



**`zh`** 使用一组序列帧图片来创建动画剪辑



**`example`**

```ts


import { AnimationClip } from 'cc';
const clip = AnimationClip.createWithSpriteFrames(spriteFrames, 10);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `spriteFrames` |  | - |
| `sample` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L132)&nbsp;
___
### addRef

<div style="margin-left: 10px;">

▸   **addRef**<`Asset`\> : `Asset`



**`zh`** 
增加资源的引用





##### Returns `Asset`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L263)&nbsp;
___
### createNode

<div style="margin-left: 10px;">

▸   **createNode**<`void`\>(`callback: CreateNodeCallback`) : `void`



**`zh`** 
使用该资源在场景中创建一个新节点。<br/>
如果这类资源没有相应的节点类型，该方法应该是空的。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `CreateNodeCallback` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L233)&nbsp;
___
### decRef

<div style="margin-left: 10px;">

▸   **decRef**<`Asset`\>(`autoRelease: boolean`) : `Asset`



**`zh`** 
减少资源的引用并尝试进行自动释放。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `autoRelease` | `boolean` | - |


##### Returns `Asset`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:278](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L278)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L357)&nbsp;
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
### getEventGroupIndexAtRatio

<div style="margin-left: 10px;">

▸   **getEventGroupIndexAtRatio**<`number`\>(`ratio: number`) : `number`



**`zh`** 获取事件组应按指定比例处理。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | The ratio.  |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:340](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L340)&nbsp;
___
### getPropertyCurves

<div style="margin-left: 10px;">

▸   **getPropertyCurves**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L315)&nbsp;
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
### initDefault

<div style="margin-left: 10px;">

▸   **initDefault**<`void`\>(`uuid: undefined | string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `undefined \| string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L290)&nbsp;
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

▸   **on**(`type: EventType, callback: TFunction, thisArg: any, once: undefined | false | true`)



**`zh`** 
注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。




**`example`**

```ts

import { log } from 'cc';
eventTarget.on('fire', function () {
    log("fire in the hole");
}, node);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `thisArg` | `any` | The target (this object) to invoke the callback, can be null  |
| `once` | `undefined \| false \| true` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L72)&nbsp;
___
### onLoaded

<div style="margin-left: 10px;">

▸   **onLoaded**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L310)&nbsp;
___
### once

<div style="margin-left: 10px;">

▸   **once**(`type: EventType, callback: TFunction, thisArg: any`)



**`zh`** 
注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。




**`example`**

```ts

import { log } from 'cc';
eventTarget.once('fire', function () {
    log("this is the callback and will be invoked only once");
}, node);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `thisArg` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L91)&nbsp;
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
### toString

<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`



**`zh`** 
返回对象的字符串表示形式。<br>
`Asset` 对象将会重写 `Object` 对象的 `toString()` 方法。<br>
当资源要表示为文本值时或在字符串连接时引用时，<br>
JavaScript 会自动调用 toString() 方法。<br>
<br>
对于原始类型的资源，它将返回`this.nativeUrl`。<br>
否则，返回空字符串。<br>
子类可能会覆盖此方法。



**`method`** toString




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L192)&nbsp;
___
### updateEventDatas

<div style="margin-left: 10px;">

▸   **updateEventDatas**<`void`\> : `void`



**`zh`** 提交事件数据的修改。
当你修改了 `this.events` 时，必须调用 `this.updateEventDatas()` 使修改生效。




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:330](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L330)&nbsp;
___
### validate

<div style="margin-left: 10px;">

▸   **validate**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L443)&nbsp;
___
<!---->




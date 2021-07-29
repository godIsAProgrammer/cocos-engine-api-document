
## Class: SkeletonData


`extend:`
[Asset](docs/zh/asset/Class/Asset.md)










**`zh`** Spine 的 骨骼数据。


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ scale](#scale)
- [ textures](#textures)
- [ atlasText](#atlasText)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ refCount](#refCount)
- [ skeletonJson](#skeletonJson)
- [ skeletonJsonStr](#skeletonJsonStr)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  deserialize](#deserialize)
- [ addRef](#addRef)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ ensureTexturesLoaded](#ensureTexturesLoaded)
- [ getAnimsEnum](#getAnimsEnum)
- [ getRuntimeData](#getRuntimeData)
- [ getSkinsEnum](#getSkinsEnum)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ isTexturesLoaded](#isTexturesLoaded)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ removeAll](#removeAll)
- [ reset](#reset)
- [ resetEnums](#resetEnums)
- [ targetOff](#targetOff)
- [ toString](#toString)
- [ validate](#validate)
</div>

## Properties


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


### scale
<div style="margin-left: 10px;">



**`zh`** 可查看 Spine 官方文档： http://zh.esotericsoftware.com/spine-using-runtimes#Scaling



**`property`** {Number} scale





•  **scale**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L95)&nbsp;


___


### textures
<div style="margin-left: 10px;">



**`property`** {Texture2D[]} textures





•  **textures**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L72)&nbsp;


___


### atlasText
<div style="margin-left: 10px;">



**`property`** {String} atlasText





•  **atlasText**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L58)&nbsp;   [cocos/spine/skeleton-data.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L61)&nbsp;


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


### skeletonJson
<div style="margin-left: 10px;">



**`zh`** 可查看 Spine 官方文档 http://zh.esotericsoftware.com/spine-json-format



**`property`** {Object} skeletonJson





•  **skeletonJson**:
 ``SkeletonJson`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L39)&nbsp;   [cocos/spine/skeleton-data.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L42)&nbsp;


___


### skeletonJsonStr
<div style="margin-left: 10px;">




•  **skeletonJsonStr**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:27](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L27)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new SkeletonData**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L118)&nbsp;


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

▸   **createNode**<`void`\>(`callback: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L127)&nbsp;
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

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:268](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L268)&nbsp;
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
### ensureTexturesLoaded

<div style="margin-left: 10px;">

▸   **ensureTexturesLoaded**<`void`\>(`loaded: null | , caller: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `loaded` | `null \| ` | - |
| `caller` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L151)&nbsp;
___
### getAnimsEnum

<div style="margin-left: 10px;">

▸   **getAnimsEnum**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:251](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L251)&nbsp;
___
### getRuntimeData

<div style="margin-left: 10px;">

▸   **getRuntimeData**(`quiet: undefined | false | true`)



**`zh`** 获取 Spine Runtime 使用的 SkeletonData。<br>
返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.SkeletonData 对象。



**`method`** getRuntimeData



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `quiet` | `undefined \| false \| true` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L197)&nbsp;
___
### getSkinsEnum

<div style="margin-left: 10px;">

▸   **getSkinsEnum**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L234)&nbsp;
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
### isTexturesLoaded

<div style="margin-left: 10px;">

▸   **isTexturesLoaded**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L176)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L288)&nbsp;
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
### reset

<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L135)&nbsp;
___
### resetEnums

<div style="margin-left: 10px;">

▸   **resetEnums**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L144)&nbsp;
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
### validate

<div style="margin-left: 10px;">

▸   **validate**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L295)&nbsp;
___
<!---->




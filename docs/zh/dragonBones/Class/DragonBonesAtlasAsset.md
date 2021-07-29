
## Class: DragonBonesAtlasAsset


`extend:`
[Asset](docs/zh/asset/Class/Asset.md)












**`zh`** dragonBones 的骨骼纹理数据。


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ atlasJson](#atlasJson)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ refCount](#refCount)
- [ texture](#texture)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  deserialize](#deserialize)
- [ addRef](#addRef)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ hasEventListener](#hasEventListener)
- [ init](#init)
- [ initDefault](#initDefault)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ removeAll](#removeAll)
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


### atlasJson
<div style="margin-left: 10px;">




•  **atlasJson**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/DragonBonesAtlasAsset.ts:30](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/DragonBonesAtlasAsset.ts#L30)&nbsp;   [cocos/dragon-bones/DragonBonesAtlasAsset.ts:33](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/DragonBonesAtlasAsset.ts#L33)&nbsp;


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


### texture
<div style="margin-left: 10px;">




**`property`** {Texture2D} texture





•  **texture**:
 ``null | Texture2D`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/DragonBonesAtlasAsset.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/DragonBonesAtlasAsset.ts#L49)&nbsp;   [cocos/dragon-bones/DragonBonesAtlasAsset.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/DragonBonesAtlasAsset.ts#L52)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new DragonBonesAtlasAsset**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/DragonBonesAtlasAsset.ts:21](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/DragonBonesAtlasAsset.ts#L21)&nbsp;


---

<!---->
## Methods

### deserialize
<div style="margin-left: 10px;">

▸ `static`  **deserialize**<`any`\>(`data: any`) : `any`




**`method`** deserialize


应 AssetDB 要求提供这个方法。


<!---->
<!--    #### Returns `any` 
-->
<!---->

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





<!---->
<!--    #### Returns `Asset` itself

-->
<!---->


##### Returns `Asset`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L263)&nbsp;
___
### createNode
<div style="margin-left: 10px;">

▸   **createNode**<`void`\>(`callback: undefined`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/DragonBonesAtlasAsset.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/DragonBonesAtlasAsset.ts#L60)&nbsp;
___
### decRef
<div style="margin-left: 10px;">

▸   **decRef**<`Asset`\>(`autoRelease: boolean`) : `Asset`




**`zh`** 
减少资源的引用并尝试进行自动释放。





<!---->
<!--    #### Returns `Asset` itself

-->
<!---->

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




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/DragonBonesAtlasAsset.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/DragonBonesAtlasAsset.ts#L86)&nbsp;
___
### emit
<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`




**`zh`** 派发一个指定事件，并传递需要的参数




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | event type  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg0` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg1` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg2` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg3` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg4` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L141)&nbsp;
___
### hasEventListener
<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`




**`zh`** 检查指定事件是否已注册回调。




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Event type.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `undefined \| ` | Callback function when event triggered.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | Callback callee.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L52)&nbsp;
___
### init
<div style="margin-left: 10px;">

▸   **init**<`void`\>(`factory: CCFactory`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `factory` | `CCFactory` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/DragonBonesAtlasAsset.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/DragonBonesAtlasAsset.ts#L68)&nbsp;
___
### initDefault
<div style="margin-left: 10px;">

▸   **initDefault**<`void`\>(`uuid: undefined | string`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type being removed.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback to remove.  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | The target (this object) to invoke the callback, can be null  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `once` | `undefined \| false \| true` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L72)&nbsp;
___
### onLoaded
<div style="margin-left: 10px;">

▸   **onLoaded**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


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




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L91)&nbsp;
___
### removeAll
<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`




**`zh`** 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `string` 
-->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L192)&nbsp;
___
### validate
<div style="margin-left: 10px;">

▸   **validate**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L295)&nbsp;
___
<!---->




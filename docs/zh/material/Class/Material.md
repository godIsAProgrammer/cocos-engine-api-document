
## Class: Material


`extend:`
[Asset](docs/zh/asset/Class/Asset.md)












**`zh`** 材质资源类，包含模型绘制方式的全部细节描述。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ effectAsset](#effectAsset)
- [ effectName](#effectName)
- [ hash](#hash)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ owner](#owner)
- [ parent](#parent)
- [ passes](#passes)
- [ refCount](#refCount)
- [ technique](#technique)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  getHash](#getHash)
- [ **`static`**  deserialize](#deserialize)
- [ addRef](#addRef)
- [ copy](#copy)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getProperty](#getProperty)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ initialize](#initialize)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ overridePipelineStates](#overridePipelineStates)
- [ recompileShaders](#recompileShaders)
- [ removeAll](#removeAll)
- [ reset](#reset)
- [ resetUniforms](#resetUniforms)
- [ setProperty](#setProperty)
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


### effectAsset
<div style="margin-left: 10px;">




**`zh`** 当前使用的 [[EffectAsset]] 资源。





•  **effectAsset**:
 ``null | EffectAsset`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L135)&nbsp;


___


### effectName
<div style="margin-left: 10px;">




**`zh`** 当前使用的 [[EffectAsset]] 资源名。





•  **effectName**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L143)&nbsp;


___


### hash
<div style="margin-left: 10px;">




**`zh`** 材质的 hash。





•  **hash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:167](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L167)&nbsp;


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


### owner
<div style="margin-left: 10px;">




**`zh`** 该材质所归属的渲染组件





•  **owner**:
 ``RenderableComponent | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L183)&nbsp;


___


### parent
<div style="margin-left: 10px;">




**`zh`** 父材质





•  **parent**:
 ``Material | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L175)&nbsp;


___


### passes
<div style="margin-left: 10px;">




**`zh`** 当前正在使用的 pass 数组。





•  **passes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L159)&nbsp;


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


### technique
<div style="margin-left: 10px;">




**`zh`** 当前的 technique 索引。





•  **technique**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L151)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Material**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L124)&nbsp;


---

<!---->
## Methods

### getHash
<div style="margin-left: 10px;">

▸ `static`  **getHash**<`number`\>(`material: Material`) : `number`




**`zh`** 获取一个材质的哈希值




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `material` | `Material` |   |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L99)&nbsp;
___
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
### copy
<div style="margin-left: 10px;">

▸   **copy**<`void`\>(`mat: Material`) : `void`




**`zh`** 复制目标材质到当前实例。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Material` | The material to be copied.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:339](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L339)&nbsp;
___
### createNode
<div style="margin-left: 10px;">

▸   **createNode**<`void`\>(`callback: CreateNodeCallback`) : `void`




**`zh`** 
使用该资源在场景中创建一个新节点。<br/>
如果这类资源没有相应的节点类型，该方法应该是空的。





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 
彻底销毁材质，注意销毁后无法重新初始化。<br>
如需重新初始化材质，不必先调用 destroy。





<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:220](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L220)&nbsp;
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
### getProperty
<div style="margin-left: 10px;">

▸   **getProperty**(`name: string, passIdx: undefined | number`)




**`zh`** 
获取当前材质的指定 uniform 参数的值。<br>
注意只有通过 [[Material.setProperty]] 函数设置的参数才能从此函数取出，<br>
如需取出完整的渲染数据，请使用 [[Pass.getUniform]]。




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The property or uniform name.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passIdx` | `undefined \| number` | The target pass index. If not specified, return the first found value in all passes.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L318)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/assets/material.ts:476](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L476)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`info: IMaterialInfo`) : `void`




**`zh`** 根据所给信息初始化这个材质，初始化正常结束后材质即可立即用于渲染。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IMaterialInfo` | Material description info.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L192)&nbsp;
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




**`zh`** 通过 [[Loader]] 加载完成时的回调，将自动初始化材质资源。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L249)&nbsp;
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
### overridePipelineStates
<div style="margin-left: 10px;">

▸   **overridePipelineStates**<`void`\>(`overrides: PassOverrides, passIdx: undefined | number`) : `void`




**`zh`** 使用指定管线状态重载当前的 pass（数组）。只允许对材质实例执行。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `overrides` | `PassOverrides` | The pipeline state override values.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passIdx` | `undefined \| number` | The pass to apply to. Will apply to all passes if not specified.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:241](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L241)&nbsp;
___
### recompileShaders
<div style="margin-left: 10px;">

▸   **recompileShaders**<`void`\>(`overrides: MacroRecord, passIdx: undefined | number`) : `void`




**`zh`** 使用指定预处理宏重新编译当前 pass（数组）中的 shader。只允许对材质实例执行。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `overrides` | `MacroRecord` | The shader macro override values.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passIdx` | `undefined \| number` | The pass to apply to. Will apply to all passes if not specified.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L231)&nbsp;
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
### reset
<div style="margin-left: 10px;">

▸   **reset**<`void`\>(`info: IMaterialInfo`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IMaterialInfo` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L207)&nbsp;
___
### resetUniforms
<div style="margin-left: 10px;">

▸   **resetUniforms**<`void`\>(`clearPasses: boolean`) : `void`




**`zh`** 重置材质的所有 uniform 参数数据为 [[EffectAsset]] 中的默认初始值。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clearPasses` | `boolean` | Will the rendering data be cleared too?  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L260)&nbsp;
___
### setProperty
<div style="margin-left: 10px;">

▸   **setProperty**<`void`\>(`name: string, val: MaterialPropertyFull | array<MaterialPropertyFull>, passIdx: undefined | number`) : `void`




**`zh`** 
设置材质 uniform 参数的统一入口。<br>
注意如果需要每帧更新 uniform，建议使用 [[Pass.setUniform]] 以获得更好的性能。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The target uniform name.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `val` | `MaterialPropertyFull \| array<MaterialPropertyFull>` | The target value.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passIdx` | `undefined \| number` | The pass to apply to. Will apply to all passes if not specified.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L281)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/assets/material.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L485)&nbsp;
___
<!---->





## Class: BaseNode


`extend:`
[CCObject](docs/zh/core-data/Class/CCObject.md)












**`zh`** [[Node]] 的基类，他会负责：
- 维护场景树以及节点生命周期管理
- 提供 EventTarget 的事件管理和注册能力
- 派发节点状态相关的事件，参考：[[SystemEventType]]
- 管理组件



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ active](#active)
- [ activeInHierarchy](#activeInHierarchy)
- [ children](#children)
- [ components](#components)
- [ eventProcessor](#eventProcessor)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ parent](#parent)
- [ scene](#scene)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addChild](#addChild)
- [ addComponent](#addComponent)
- [ attr](#attr)
- [ destroy](#destroy)
- [ destroyAllChildren](#destroyAllChildren)
- [ dispatchEvent](#dispatchEvent)
- [ emit](#emit)
- [ getChildByName](#getChildByName)
- [ getChildByPath](#getChildByPath)
- [ getChildByUuid](#getChildByUuid)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getParent](#getParent)
- [ getSiblingIndex](#getSiblingIndex)
- [ hasEventListener](#hasEventListener)
- [ insertChild](#insertChild)
- [ isChildOf](#isChildOf)
- [ off](#off)
- [ on](#on)
- [ once](#once)
- [ removeAllChildren](#removeAllChildren)
- [ removeChild](#removeChild)
- [ removeComponent](#removeComponent)
- [ removeFromParent](#removeFromParent)
- [ setParent](#setParent)
- [ setSiblingIndex](#setSiblingIndex)
- [ targetOff](#targetOff)
- [ walk](#walk)
</div>

## Properties


### active
<div style="margin-left: 10px;">




**`zh`** 
当前节点的自身激活状态。
值得注意的是，一个节点的父节点如果不被激活，那么即使它自身设为激活，它仍然无法激活。
如果你想检查节点在场景中实际的激活状态可以使用 [[activeInHierarchy]]




**`default`** true





•  **active**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L163)&nbsp;   [cocos/core/scene-graph/base-node.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L166)&nbsp;


___


### activeInHierarchy
<div style="margin-left: 10px;">




**`zh`** 表示此节点是否在场景中激活。





•  **activeInHierarchy**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L184)&nbsp;


___


### children
<div style="margin-left: 10px;">




**`zh`** 节点的所有子节点。




**`readonly`** 





•  **children**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L146)&nbsp;


___


### components
<div style="margin-left: 10px;">




**`zh`** 获取附加到此节点的所有组件。





•  **components**:
 ``ReadonlyArray`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L89)&nbsp;


___


### eventProcessor
<div style="margin-left: 10px;">




**`zh`** 当前节点的事件处理器，提供 EventTarget 能力。




**`readonly`** 





•  **eventProcessor**:
 ``any`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L214)&nbsp;


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




**`zh`** 该节点名称。





•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L120)&nbsp;   [cocos/core/scene-graph/base-node.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L123)&nbsp;


___


### parent
<div style="margin-left: 10px;">




**`zh`** 父节点





•  **parent**:
 ``null | this`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L193)&nbsp;   [cocos/core/scene-graph/base-node.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L196)&nbsp;


___


### scene
<div style="margin-left: 10px;">




**`zh`** 此节点属于哪个场景。




**`readonly`** 





•  **scene**:
 ``Scene`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:205](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L205)&nbsp;


___


### uuid
<div style="margin-left: 10px;">




**`zh`** 主要用于编辑器的 uuid，在编辑器下可用于持久化存储，在项目构建之后将变成自增的 id。




**`readonly`** 





•  **uuid**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L136)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new BaseNode**(`name: undefined | string`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `name` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L370)&nbsp;


---

<!---->
## Methods

### addChild
<div style="margin-left: 10px;">

▸   **addChild**<`void`\>(`child: this | Node`) : `void`




**`zh`** 添加一个子节点。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `child` | `this \| Node` | the child node to be added  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:539](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L539)&nbsp;
___
### addComponent
<div style="margin-left: 10px;">

▸   **addComponent**<`T`\>(`classConstructor: Constructor`) : `T`




**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。




**`throws`** `TypeError` if the `classConstructor` does not specify a cc-class constructor extending the `Component`.




**`example`**

```ts


var sprite = node.addComponent(Sprite);


```




<!---->
<!--    #### Returns `T` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the component to add  |



##### Returns `T`


▸   **addComponent**<`Component`\>(`className: string`) : `Component`




**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。




**`throws`** `TypeError` if the `className` does not specify a cc-class constructor extending the `Component`.




**`example`**

```ts


var test = node.addComponent("Test");


```




<!---->
<!--    #### Returns `Component` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the component to add  |



##### Returns `Component`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:898](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L898)&nbsp;   [cocos/core/scene-graph/base-node.ts:910](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L910)&nbsp;   [cocos/core/scene-graph/base-node.ts:912](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L912)&nbsp;
___
### attr
<div style="margin-left: 10px;">

▸   **attr**<`void`\>(`attrs: unknown`) : `void`




**`zh`** 属性配置函数。在 attrs 的所有属性将被设置为节点属性。




**`example`**

```ts


var attrs = { name: 'New Name', active: false };
node.attr(attrs);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `attrs` | `unknown` | Properties to be set to node  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L391)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1187)&nbsp;
___
### destroyAllChildren
<div style="margin-left: 10px;">

▸   **destroyAllChildren**<`void`\> : `void`




**`zh`** 
销毁所有子节点，并释放所有它们对其它对象的引用。
实际销毁操作会延迟到当前帧渲染前执行。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1204)&nbsp;
___
### dispatchEvent
<div style="margin-left: 10px;">

▸   **dispatchEvent**<`void`\>(`event: Event`) : `void`




**`zh`** 分发事件到事件流中。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `event` | `Event` | The Event object that is dispatched into the event flow  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1157)&nbsp;
___
### emit
<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: string, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`




**`zh`** 
通过事件名发送自定义事件




**`example`**

```ts


eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | event type  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg0` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg1` | `any` | First argument in callback  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg2` | `any` | Second argument in callback  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg3` | `any` | Third argument in callback  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg4` | `any` | Fourth argument in callback  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1146)&nbsp;
___
### getChildByName
<div style="margin-left: 10px;">

▸   **getChildByName**(`name: string`)




**`zh`** 通过名称获取节点的子节点。




**`example`**

```ts


var child = node.getChildByName("Test Node");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | A name to find the child node.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L491)&nbsp;
___
### getChildByPath
<div style="margin-left: 10px;">

▸   **getChildByPath**(`path: string`)




**`zh`** 通过路径获取节点的子节点。




**`example`**

```ts


var child = node.getChildByPath("subNode/Test Node");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `path` | `string` | A path to find the child node.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:516](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L516)&nbsp;
___
### getChildByUuid
<div style="margin-left: 10px;">

▸   **getChildByUuid**(`uuid: string`)




**`zh`** 通过 uuid 获取节点的子节点。




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | The uuid to find the child node.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:466](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L466)&nbsp;
___
### getComponent
<div style="margin-left: 10px;">

▸   **getComponent**(`classConstructor: Constructor`)




**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。
传入参数也可以是脚本的名称。




**`example`**

```ts


// get sprite component.
var sprite = node.getComponent(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the target component  |



##### Returns `void`


▸   **getComponent**(`className: string`)




**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。
传入参数也可以是脚本的名称。




**`example`**

```ts


// get custom test class.
var test = node.getComponent("Test");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the target component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:777](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L777)&nbsp;   [cocos/core/scene-graph/base-node.ts:793](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L793)&nbsp;   [cocos/core/scene-graph/base-node.ts:795](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L795)&nbsp;
___
### getComponentInChildren
<div style="margin-left: 10px;">

▸   **getComponentInChildren**(`classConstructor: Constructor`)




**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。




**`example`**

```ts


var sprite = node.getComponentInChildren(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the target component  |



##### Returns `void`


▸   **getComponentInChildren**(`className: string`)




**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。




**`example`**

```ts


var Test = node.getComponentInChildren("Test");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the target component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:835](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L835)&nbsp;   [cocos/core/scene-graph/base-node.ts:846](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L846)&nbsp;   [cocos/core/scene-graph/base-node.ts:848](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L848)&nbsp;
___
### getComponents
<div style="margin-left: 10px;">

▸   **getComponents**(`classConstructor: Constructor`)




**`zh`** 返回节点上指定类型的所有组件。




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the target component  |



##### Returns `void`


▸   **getComponents**(`className: string`)




**`zh`** 返回节点上指定类型的所有组件。




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the target component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:808](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L808)&nbsp;   [cocos/core/scene-graph/base-node.ts:815](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L815)&nbsp;   [cocos/core/scene-graph/base-node.ts:817](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L817)&nbsp;
___
### getComponentsInChildren
<div style="margin-left: 10px;">

▸   **getComponentsInChildren**(`classConstructor: Constructor`)




**`zh`** 递归查找自身或所有子节点中指定类型的组件




**`example`**

```ts


var sprites = node.getComponentsInChildren(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the target component  |



##### Returns `void`


▸   **getComponentsInChildren**(`className: string`)




**`zh`** 递归查找自身或所有子节点中指定类型的组件




**`example`**

```ts


var tests = node.getComponentsInChildren("Test");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the target component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:865](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L865)&nbsp;   [cocos/core/scene-graph/base-node.ts:876](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L876)&nbsp;   [cocos/core/scene-graph/base-node.ts:878](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L878)&nbsp;
___
### getParent
<div style="margin-left: 10px;">

▸   **getParent**




**`zh`** 获取该节点的父节点。





<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L401)&nbsp;
___
### getSiblingIndex
<div style="margin-left: 10px;">

▸   **getSiblingIndex**<`number`\> : `number`




**`zh`** 获取当前节点在父节点的 children 数组中的位置。





<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:562](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L562)&nbsp;
___
### hasEventListener
<div style="margin-left: 10px;">

▸   **hasEventListener**<`any`\>(`type: string, callback: AnyFunction, target: unknown`) : `any`




**`zh`** 检查事件目标对象是否有为特定类型的事件注册的回调。




<!---->
<!--    #### Returns `any` True if a callback of the specified type is registered; false otherwise.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | The type of event.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `AnyFunction` | The callback function of the event listener, if absent all event listeners for the given type will be removed  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | The callback callee of the event listener  |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1169)&nbsp;
___
### insertChild
<div style="margin-left: 10px;">

▸   **insertChild**<`void`\>(`child: this | Node, siblingIndex: number`) : `void`




**`zh`** 插入子节点到指定位置




**`example`**

```ts


node.insertChild(child, 2);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `child` | `this \| Node` | the child node to be inserted  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `siblingIndex` | `number` | the sibling index to place the child in  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:553](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L553)&nbsp;
___
### isChildOf
<div style="margin-left: 10px;">

▸   **isChildOf**<`boolean`\>(`parent: this | Scene | null`) : `boolean`




**`zh`** 是否是指定节点的子节点？




<!---->
<!--    #### Returns `boolean` True if this node is a child, deep child or identical to the given node.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `parent` | `this \| Scene \| null` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:748](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L748)&nbsp;
___
### off
<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: string, callback: AnyFunction, target: unknown, useCapture: any`) : `void`




**`zh`** 删除之前与同类型，回调，目标或 useCapture 注册的回调。




**`example`**

```ts


this.node.off(SystemEventType.TOUCH_START, this.memberFunction, this);
node.off(SystemEventType.TOUCH_START, callback, this.node);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type being removed.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `AnyFunction` | The callback to remove.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | The target (this object) to invoke the callback, if it's not given, only callback without target will be removed  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `useCapture` | `any` | When set to true, the listener will be triggered at capturing phase which is ahead of the final target emit, otherwise it will be triggered during bubbling phase.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1097](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1097)&nbsp;
___
### on
<div style="margin-left: 10px;">

▸   **on**<`void`\>(`type: string | SystemEventType, callback: AnyFunction, target: unknown, useCapture: any`) : `void`




**`zh`** 
在节点上注册指定类型的回调函数，也可以设置 target 用于绑定响应函数的 this 对象。
鼠标或触摸事件会被系统调用 dispatchEvent 方法触发，触发的过程包含三个阶段：
1. 捕获阶段：派发事件给捕获目标（通过 `_getCapturingTargets` 获取），比如，节点树中注册了捕获阶段的父节点，从根节点开始派发直到目标节点。
2. 目标阶段：派发给目标节点的监听器。
3. 冒泡阶段：派发事件给冒泡目标（通过 `_getBubblingTargets` 获取），比如，节点树中注册了冒泡阶段的父节点，从目标节点开始派发直到根节点。
同时您可以将事件派发到父节点或者通过调用 stopPropagation 拦截它。
推荐使用这种方式来监听节点上的触摸或鼠标事件，请不要在节点上直接使用 `eventManager`。
你也可以注册自定义事件到节点上，并通过 emit 方法触发此类事件，对于这类事件，不会发生捕获冒泡阶段，只会直接派发给注册在该节点上的监听器
你可以通过在 emit 方法调用时在 type 之后传递额外的参数作为事件回调的参数列表




**`example`**

```ts


this.node.on(SystemEventType.TOUCH_START, this.memberFunction, this);  // if "this" is component and the "memberFunction" declared in CCClass.
node.on(SystemEventType.TOUCH_START, callback, this);
node.on(SystemEventType.TOUCH_MOVE, callback, this);
node.on(SystemEventType.TOUCH_END, callback, this);


```




<!---->
<!--    #### Returns `void` - Just returns the incoming callback so you can save the anonymous function easier.-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string \| SystemEventType` | A string representing the event type to listen for.<br>See {{#crossLink "Node/EventType/POSITION_CHANGED"}}Node Events{{/crossLink}} for all builtin events.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `AnyFunction` | The callback that will be invoked when the event is dispatched. The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | The target (this object) to invoke the callback, can be null  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `useCapture` | `any` | When set to true, the listener will be triggered at capturing phase which is ahead of the final target emit, otherwise it will be triggered during bubbling phase.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1071](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1071)&nbsp;
___
### once
<div style="margin-left: 10px;">

▸   **once**<`void`\>(`type: string, callback: AnyFunction, target: unknown, useCapture: any`) : `void`




**`zh`** 
注册节点的特定事件类型回调，回调会在第一时间被触发后删除自身。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `AnyFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | The target (this object) to invoke the callback, can be null  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `useCapture` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1125)&nbsp;
___
### removeAllChildren
<div style="margin-left: 10px;">

▸   **removeAllChildren**<`void`\> : `void`




**`zh`** 移除节点所有的子节点。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:731](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L731)&nbsp;
___
### removeChild
<div style="margin-left: 10px;">

▸   **removeChild**<`void`\>(`child: this | Node`) : `void`




**`zh`** 移除节点中指定的子节点。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `child` | `this \| Node` | The child node which will be removed.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:720](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L720)&nbsp;
___
### removeComponent
<div style="margin-left: 10px;">

▸   **removeComponent**<`void`\>(`classConstructor: Constructor`) : `void`




**`zh`** 
删除节点上的指定组件，传入参数可以是一个组件构造函数或组件名，也可以是已经获得的组件引用。
如果你已经获得组件引用，你也可以直接调用 component.destroy()




**`deprecated`** please destroy the component to remove it.




**`example`**

```ts


node.removeComponent(Sprite);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the component to remove  |



##### Returns `void`


▸   **removeComponent**<`void`\>(`classNameOrInstance: string | Component`) : `void`




**`zh`** 
删除节点上的指定组件，传入参数可以是一个组件构造函数或组件名，也可以是已经获得的组件引用。
如果你已经获得组件引用，你也可以直接调用 component.destroy()




**`deprecated`** please destroy the component to remove it.




**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.getComponent(Sprite);
if (sprite) {
    node.removeComponent(sprite);
}
node.removeComponent('Sprite');


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classNameOrInstance` | `string \| Component` | The class name of the component to remove or the component instance to be removed  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:993](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L993)&nbsp;   [cocos/core/scene-graph/base-node.ts:1014](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1014)&nbsp;   [cocos/core/scene-graph/base-node.ts:1016](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1016)&nbsp;
___
### removeFromParent
<div style="margin-left: 10px;">

▸   **removeFromParent**<`void`\> : `void`




**`zh`** 
从父节点中删除该节点。
如果这个节点是一个孤立节点，那么什么都不会发生。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:709](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L709)&nbsp;
___
### setParent
<div style="margin-left: 10px;">

▸   **setParent**<`void`\>(`value: this | Scene | null, keepWorldTransform: boolean`) : `void`




**`zh`** 设置该节点的父节点。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `this \| Scene \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `keepWorldTransform` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:409](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L409)&nbsp;
___
### setSiblingIndex
<div style="margin-left: 10px;">

▸   **setSiblingIndex**<`void`\>(`index: number`) : `void`




**`zh`** 设置当前节点在父节点的 children 数组中的位置。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:570](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L570)&nbsp;
___
### targetOff
<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`target: string | unknown`) : `void`




**`zh`** 移除目标上的所有注册事件。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `string \| unknown` | The target to be searched for all related callbacks  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1179)&nbsp;
___
### walk
<div style="margin-left: 10px;">

▸   **walk**<`void`\>(`preFunc: undefined, postFunc: undefined | `) : `void`




**`zh`** 遍历该节点的子树里的所有节点并按规则执行回调函数。
对子树中的所有节点，包含当前节点，会执行两次回调，preFunc 会在访问它的子节点之前调用，postFunc 会在访问所有子节点之后调用。
这个函数的实现不是基于递归的，而是基于栈展开递归的方式。
请不要在 walk 过程中对任何其他的节点嵌套执行 walk。




**`example`**

```ts


node.walk(function (target) {
    console.log('Walked through node ' + target.name + ' for the first time');
}, function (target) {
    console.log('Walked through node ' + target.name + ' after walked all children in its sub tree');
});


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `preFunc` |  | The callback to process node when reach the node for the first time  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `postFunc` | `undefined \| ` | The callback to process node when re-visit the node after walked all children in its sub tree  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:616](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L616)&nbsp;
___
<!---->




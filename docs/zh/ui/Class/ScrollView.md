
## Class: ScrollView


`extend:`
[ViewGroup](docs/zh/ui/Class/ViewGroup.md)










**`zh`** 
滚动视图组件。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  EventType](#EventType)
- [ **`static`**  system](#system)
- [ bounceDuration](#bounceDuration)
- [ brake](#brake)
- [ cancelInnerEvents](#cancelInnerEvents)
- [ elastic](#elastic)
- [ horizontal](#horizontal)
- [ inertia](#inertia)
- [ node](#node)
- [ scrollEvents](#scrollEvents)
- [ vertical](#vertical)
- [ content](#content)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ horizontalScrollBar](#horizontalScrollBar)
- [ isValid](#isValid)
- [ name](#name)
- [ uuid](#uuid)
- [ verticalScrollBar](#verticalScrollBar)
- [ view](#view)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getContentPosition](#getContentPosition)
- [ getMaxScrollOffset](#getMaxScrollOffset)
- [ getScrollEndedEventTiming](#getScrollEndedEventTiming)
- [ getScrollOffset](#getScrollOffset)
- [ isAutoScrolling](#isAutoScrolling)
- [ isScrolling](#isScrolling)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ scrollTo](#scrollTo)
- [ scrollToBottom](#scrollToBottom)
- [ scrollToBottomLeft](#scrollToBottomLeft)
- [ scrollToBottomRight](#scrollToBottomRight)
- [ scrollToLeft](#scrollToLeft)
- [ scrollToOffset](#scrollToOffset)
- [ scrollToPercentHorizontal](#scrollToPercentHorizontal)
- [ scrollToPercentVertical](#scrollToPercentVertical)
- [ scrollToRight](#scrollToRight)
- [ scrollToTop](#scrollToTop)
- [ scrollToTopLeft](#scrollToTopLeft)
- [ scrollToTopRight](#scrollToTopRight)
- [ setContentPosition](#setContentPosition)
- [ start](#start)
- [ stopAutoScroll](#stopAutoScroll)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ update](#update)
</div>

## Properties


### EventType
<div style="margin-left: 10px;">




• `static` **EventType**:
`EventType`  = `EventType`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L212)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### bounceDuration
<div style="margin-left: 10px;">



**`zh`** 
回弹持续的时间，0 表示将立即反弹。





•  **bounceDuration**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:225](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L225)&nbsp;


___


### brake
<div style="margin-left: 10px;">



**`zh`** 
开启惯性后，在用户停止触摸后滚动多快停止，0表示永不停止，1表示立刻停止。





•  **brake**:
`number`  = `0.5`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:239](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L239)&nbsp;


___


### cancelInnerEvents
<div style="margin-left: 10px;">



**`zh`** 
如果这个属性被设置为 true，那么滚动行为会取消子节点上注册的触摸事件，默认被设置为 true。<br/>
注意，子节点上的 touchstart 事件仍然会触发，触点移动距离非常短的情况下 touchmove 和 touchend 也不会受影响。





•  **cancelInnerEvents**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:381](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L381)&nbsp;


___


### elastic
<div style="margin-left: 10px;">



**`zh`** 
是否允许滚动内容超过边界，并在停止触摸后回弹。





•  **elastic**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:251](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L251)&nbsp;


___


### horizontal
<div style="margin-left: 10px;">



**`zh`** 
是否开启水平滚动。





•  **horizontal**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L302)&nbsp;


___


### inertia
<div style="margin-left: 10px;">



**`zh`** 
是否开启滚动惯性。





•  **inertia**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L263)&nbsp;


___


### node
<div style="margin-left: 10px;">



**`zh`** 该组件被附加到的节点。组件总会附加到一个节点。



**`example`**

```ts


import { log } from 'cc';
log(comp.node);


```




•  **node**:
`Node`  = `NullNode`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L166)&nbsp;


___


### scrollEvents
<div style="margin-left: 10px;">



**`zh`** 
滚动视图的事件回调函数。





•  **scrollEvents**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L394)&nbsp;


___


### vertical
<div style="margin-left: 10px;">



**`zh`** 
是否开启垂直滚动。





•  **vertical**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:340](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L340)&nbsp;


___


### content
<div style="margin-left: 10px;">



**`zh`** 
可滚动展示内容的节点。





•  **content**:
 ``null | Node`` 
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L275)&nbsp;   [cocos/ui/scroll-view.ts:278](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L278)&nbsp;


___


### enabled
<div style="margin-left: 10px;">



**`zh`** 表示该组件自身是否启用。



**`default`** true



**`example`**

```ts


import { log } from 'cc';
comp.enabled = true;
log(comp.enabled);


```




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L110)&nbsp;   [cocos/core/components/component.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L113)&nbsp;


___


### enabledInHierarchy
<div style="margin-left: 10px;">



**`zh`** 表示该组件是否被启用并且所在的节点也处于激活状态。




**`example`**

```ts


import { log } from 'cc';
log(comp.enabledInHierarchy);


```




•  **enabledInHierarchy**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L137)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### horizontalScrollBar
<div style="margin-left: 10px;">



**`zh`** 
水平滚动的 ScrollBar。





•  **horizontalScrollBar**:
 ``null | ScrollBar`` 
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:313](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L313)&nbsp;   [cocos/ui/scroll-view.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L317)&nbsp;


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




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### uuid
<div style="margin-left: 10px;">



**`zh`** 组件的 uuid，用于编辑器。




**`example`**

```ts


import { log } from 'cc';
log(comp.uuid);


```




•  **uuid**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L89)&nbsp;


___


### verticalScrollBar
<div style="margin-left: 10px;">



**`zh`** 
垂直滚动的 ScrollBar。





•  **verticalScrollBar**:
 ``null | ScrollBar`` 
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L352)&nbsp;   [cocos/ui/scroll-view.ts:356](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L356)&nbsp;


___


### view
<div style="margin-left: 10px;">




•  **view**:
 ``null | UITransform`` 
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:396](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L396)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ScrollView**(`name: string`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L194)&nbsp;


---

<!---->
## Methods

### addComponent

<div style="margin-left: 10px;">

▸   **addComponent**(`classConstructor: Constructor`)



**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.addComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |


##### Returns `void`

▸   **addComponent**(`className: string`)



**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。



**`example`**

```ts


const test = node.addComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L215)&nbsp;   [cocos/core/components/component.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L226)&nbsp;   [cocos/core/components/component.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L228)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### getComponent

<div style="margin-left: 10px;">

▸   **getComponent**(`classConstructor: Constructor`)



**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。



**`example`**

```ts


import { Sprite } from 'cc';
// get sprite component.
var sprite = node.getComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |


##### Returns `void`

▸   **getComponent**(`className: string`)



**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。



**`example`**

```ts


// get custom test calss.
var test = node.getComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L247)&nbsp;   [cocos/core/components/component.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L263)&nbsp;   [cocos/core/components/component.ts:265](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L265)&nbsp;
___
### getComponentInChildren

<div style="margin-left: 10px;">

▸   **getComponentInChildren**(`classConstructor: Constructor`)



**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.getComponentInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved  |


##### Returns `void`

▸   **getComponentInChildren**(`className: string`)



**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。



**`example`**

```ts


var Test = node.getComponentInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L306)&nbsp;   [cocos/core/components/component.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L317)&nbsp;   [cocos/core/components/component.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L319)&nbsp;
___
### getComponents

<div style="margin-left: 10px;">

▸   **getComponents**(`classConstructor: Constructor`)



**`zh`** 返回节点上指定类型的所有组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponents(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |


##### Returns `void`

▸   **getComponents**(`className: string`)



**`zh`** 返回节点上指定类型的所有组件。



**`example`**

```ts


const tests = node.getComponents("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L279)&nbsp;   [cocos/core/components/component.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L290)&nbsp;   [cocos/core/components/component.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L292)&nbsp;
___
### getComponentsInChildren

<div style="margin-left: 10px;">

▸   **getComponentsInChildren**(`classConstructor: Constructor`)



**`zh`** 递归查找自身或所有子节点中指定类型的组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponentsInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |


##### Returns `void`

▸   **getComponentsInChildren**(`className: string`)



**`zh`** 递归查找自身或所有子节点中指定类型的组件。



**`example`**

```ts


const tests = node.getComponentsInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L333)&nbsp;   [cocos/core/components/component.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L344)&nbsp;   [cocos/core/components/component.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L346)&nbsp;
___
### getContentPosition

<div style="margin-left: 10px;">

▸   **getContentPosition**<`Vec3`\> : `Vec3`



**`zh`** 
获取当前视图内容的坐标点。




**`deprecated`** Since 3.1.0, getContentPosition is deprecated.





##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:890](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L890)&nbsp;
___
### getMaxScrollOffset

<div style="margin-left: 10px;">

▸   **getMaxScrollOffset**<`Vec2`\> : `Vec2`



**`zh`** 
获取滚动视图最大可以滚动的偏移量。





##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:736](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L736)&nbsp;
___
### getScrollEndedEventTiming

<div style="margin-left: 10px;">

▸   **getScrollEndedEventTiming**<`number`\> : `number`




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:929](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L929)&nbsp;
___
### getScrollOffset

<div style="margin-left: 10px;">

▸   **getScrollOffset**<`Vec2`\> : `Vec2`



**`zh`** 
获取滚动视图相对于左上角原点的当前滚动偏移。





##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:720](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L720)&nbsp;
___
### isAutoScrolling

<div style="margin-left: 10px;">

▸   **isAutoScrolling**<`boolean`\> : `boolean`



**`zh`** 
当前滚动视图是否在惯性滚动。





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:925](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L925)&nbsp;
___
### isScrolling

<div style="margin-left: 10px;">

▸   **isScrolling**<`boolean`\> : `boolean`



**`zh`** 
用户是否在拖拽当前滚动视图。





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:912](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L912)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:965](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L965)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:942](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L942)&nbsp;
___
### onFocusInEditor

<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLostFocusInEditor

<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### resetInEditor

<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`



**`zh`** 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### schedule

<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: any, interval: number, repeat: number, delay: number`) : `void`



**`zh`** 
调度一个自定义的回调任务。<br/>
如果回调任务已调度，那么将不会重复调度它，只会更新时间间隔参数。



**`example`**

```ts


import { log } from 'cc';
this.schedule((dt) => void log(`time: ${dt}`), 1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |
| `interval` | `number` | The time interval between each invocation  |
| `repeat` | `number` | The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever  |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L419)&nbsp;
___
### scheduleOnce

<div style="margin-left: 10px;">

▸   **scheduleOnce**<`void`\>(`callback: any, delay: number`) : `void`



**`zh`** 调度一个只运行一次的回调任务，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。



**`method`** scheduleOnce



**`see`** [[schedule]]



**`example`**

```ts


import { log } from 'cc';
this.scheduleOnce((dt) => void log(`time: ${dt}`), 2);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L452)&nbsp;
___
### scrollTo

<div style="margin-left: 10px;">

▸   **scrollTo**<`void`\>(`anchor: Vec2, timeInSecond: undefined | number, attenuated: undefined | false | true`) : `void`



**`zh`** 
视图内容在规定时间内进行垂直方向和水平方向的滚动，并且滚动到指定百分比位置上。




**`example`**

```ts


// Vertical scroll to the bottom of the view.
scrollView.scrollTo(new Vec2(0, 1), 0.1);

// Horizontal scroll to view right.
scrollView.scrollTo(new Vec2(1, 0), 0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `anchor` | `Vec2` | 在 new Vec2(0,0) and new Vec2(1,1) 上取差值的一个点。  |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到指定水平或垂直百分比位置。  |
| `attenuated` | `undefined \| false \| true` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:798](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L798)&nbsp;
___
### scrollToBottom

<div style="margin-left: 10px;">

▸   **scrollToBottom**<`void`\>(`timeInSecond: undefined | number, attenuated: boolean`) : `void`



**`zh`** 
视图内容将在规定时间内滚动到视图底部。




**`example`**

```ts


// Scroll to the bottom of the view.
scrollView.scrollToBottom(0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到底部边界。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:457](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L457)&nbsp;
___
### scrollToBottomLeft

<div style="margin-left: 10px;">

▸   **scrollToBottomLeft**<`void`\>(`timeInSecond: undefined | number, attenuated: boolean`) : `void`



**`zh`** 
视图内容将在规定时间内滚动到视图左下角。




**`example`**

```ts


// Scroll to the lower left corner of the view.
scrollView.scrollToBottomLeft(0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到左下边界。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:631](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L631)&nbsp;
___
### scrollToBottomRight

<div style="margin-left: 10px;">

▸   **scrollToBottomRight**<`void`\>(`timeInSecond: undefined | number, attenuated: boolean`) : `void`



**`zh`** 
视图内容将在规定时间内滚动到视图右下角。




**`example`**

```ts


// Scroll to the lower right corner of the view.
scrollView.scrollToBottomRight(0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到右边下边界。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:660](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L660)&nbsp;
___
### scrollToLeft

<div style="margin-left: 10px;">

▸   **scrollToLeft**<`void`\>(`timeInSecond: undefined | number, attenuated: boolean`) : `void`



**`zh`** 
视图内容将在规定时间内滚动到视图左边。




**`example`**

```ts


// Scroll to the left of the view.
scrollView.scrollToLeft(0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到左边边界。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:515](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L515)&nbsp;
___
### scrollToOffset

<div style="margin-left: 10px;">

▸   **scrollToOffset**<`void`\>(`offset: Vec2, timeInSecond: undefined | number, attenuated: boolean`) : `void`



**`zh`** 
视图内容在规定时间内将滚动到 ScrollView 相对左上角原点的偏移位置, 如果 timeInSecond 参数不传，则立即滚动到指定偏移位置。




**`example`**

```ts


// Scroll to middle position in 0.1 second in x-axis
let maxScrollOffset = this.getMaxScrollOffset();
scrollView.scrollToOffset(new Vec2(maxScrollOffset.x / 2, 0), 0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `offset` | `Vec2` | 指定移动偏移量。  |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到指定偏移量处。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:691](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L691)&nbsp;
___
### scrollToPercentHorizontal

<div style="margin-left: 10px;">

▸   **scrollToPercentHorizontal**<`void`\>(`percent: number, timeInSecond: number, attenuated: boolean`) : `void`



**`zh`** 
视图内容在规定时间内将滚动到 ScrollView 水平方向的百分比位置上。




**`example`**

```ts


// Scroll to middle position.
scrollView.scrollToBottomRight(0.5, 0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `percent` | `number` | 0 - 之间的百分比。  |
| `timeInSecond` | `number` | 滚动时间（s）。 如果超时，内容将立即跳到指定水平百分比位置。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:765](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L765)&nbsp;
___
### scrollToPercentVertical

<div style="margin-left: 10px;">

▸   **scrollToPercentVertical**<`void`\>(`percent: number, timeInSecond: undefined | number, attenuated: undefined | false | true`) : `void`



**`zh`** 
视图内容在规定时间内滚动到 ScrollView 垂直方向的百分比位置上。




**`example`**

```ts


scrollView.scrollToPercentVertical(0.5, 0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `percent` | `number` | 0 - 1 之间的百分比。  |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到指定垂直百分比位置。  |
| `attenuated` | `undefined \| false \| true` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:827](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L827)&nbsp;
___
### scrollToRight

<div style="margin-left: 10px;">

▸   **scrollToRight**<`void`\>(`timeInSecond: undefined | number, attenuated: boolean`) : `void`



**`zh`** 
视图内容将在规定时间内滚动到视图右边。




**`example`**

```ts


// Scroll to the right of the view.
scrollView.scrollToRight(0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到右边边界。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:544](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L544)&nbsp;
___
### scrollToTop

<div style="margin-left: 10px;">

▸   **scrollToTop**<`void`\>(`timeInSecond: undefined | number, attenuated: boolean`) : `void`



**`zh`** 
视图内容将在规定时间内滚动到视图顶部。




**`example`**

```ts


// Scroll to the top of the view.
scrollView.scrollToTop(0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到顶部边界。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:486](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L486)&nbsp;
___
### scrollToTopLeft

<div style="margin-left: 10px;">

▸   **scrollToTopLeft**<`void`\>(`timeInSecond: undefined | number, attenuated: boolean`) : `void`



**`zh`** 
视图内容将在规定时间内滚动到视图左上角。




**`example`**

```ts


// Scroll to the upper left corner of the view.
scrollView.scrollToTopLeft(0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到左上边边界。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:573](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L573)&nbsp;
___
### scrollToTopRight

<div style="margin-left: 10px;">

▸   **scrollToTopRight**<`void`\>(`timeInSecond: undefined | number, attenuated: boolean`) : `void`



**`zh`** 
视图内容将在规定时间内滚动到视图右上角。




**`example`**

```ts


// Scroll to the top right corner of the view.
scrollView.scrollToTopRight(0.1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到右上边界。  |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:602](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L602)&nbsp;
___
### setContentPosition

<div style="margin-left: 10px;">

▸   **setContentPosition**<`void`\>(`position: Vec3`) : `void`



**`zh`** 
设置当前视图内容的坐标点。




**`deprecated`** Since 3.1.0, setContentPosition is deprecated, please use scrollToOffset instead.




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `position` | `Vec3` | current content position.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:863](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L863)&nbsp;
___
### start

<div style="margin-left: 10px;">

▸   **start**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:933](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L933)&nbsp;
___
### stopAutoScroll

<div style="margin-left: 10px;">

▸   **stopAutoScroll**<`void`\> : `void`



**`zh`** 
停止自动滚动, 调用此 API 可以让 ScrollView 立即停止滚动。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:848](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L848)&nbsp;
___
### unschedule

<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`



**`zh`** 取消调度一个自定义的回调任务。



**`example`**

```ts


this.unschedule(_callback);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback_fn` | `any` | The callback function of the task  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L465)&nbsp;
___
### unscheduleAllCallbacks

<div style="margin-left: 10px;">

▸   **unscheduleAllCallbacks**<`void`\> : `void`



**`zh`** 取消调度所有已调度的回调函数。



**`example`**

```ts


this.unscheduleAllCallbacks();


```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
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

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:959](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L959)&nbsp;
___
<!---->




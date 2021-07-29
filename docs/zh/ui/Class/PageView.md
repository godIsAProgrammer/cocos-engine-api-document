
## Class: PageView


`extend:`
[ScrollView](docs/zh/ui/Class/ScrollView.md)












**`zh`** 
页面视图组件



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Direction](#Direction)
- [ **`static`**  EventType](#EventType)
- [ **`static`**  SizeMode](#SizeMode)
- [ **`static`**  system](#system)
- [ autoPageTurningThreshold](#autoPageTurningThreshold)
- [ bounceDuration](#bounceDuration)
- [ brake](#brake)
- [ cancelInnerEvents](#cancelInnerEvents)
- [ elastic](#elastic)
- [ horizontal](#horizontal)
- [ inertia](#inertia)
- [ node](#node)
- [ pageEvents](#pageEvents)
- [ pageTurningSpeed](#pageTurningSpeed)
- [ scrollEvents](#scrollEvents)
- [ vertical](#vertical)
- [ content](#content)
- [ curPageIdx](#curPageIdx)
- [ direction](#direction)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ horizontalScrollBar](#horizontalScrollBar)
- [ indicator](#indicator)
- [ isValid](#isValid)
- [ name](#name)
- [ pageTurningEventTiming](#pageTurningEventTiming)
- [ scrollThreshold](#scrollThreshold)
- [ sizeMode](#sizeMode)
- [ uuid](#uuid)
- [ verticalScrollBar](#verticalScrollBar)
- [ view](#view)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ addPage](#addPage)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getContentPosition](#getContentPosition)
- [ getCurrentPageIndex](#getCurrentPageIndex)
- [ getMaxScrollOffset](#getMaxScrollOffset)
- [ getPages](#getPages)
- [ getScrollEndedEventTiming](#getScrollEndedEventTiming)
- [ getScrollOffset](#getScrollOffset)
- [ insertPage](#insertPage)
- [ isAutoScrolling](#isAutoScrolling)
- [ isScrolling](#isScrolling)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ removeAllPages](#removeAllPages)
- [ removePage](#removePage)
- [ removePageAtIndex](#removePageAtIndex)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ scrollTo](#scrollTo)
- [ scrollToBottom](#scrollToBottom)
- [ scrollToBottomLeft](#scrollToBottomLeft)
- [ scrollToBottomRight](#scrollToBottomRight)
- [ scrollToLeft](#scrollToLeft)
- [ scrollToOffset](#scrollToOffset)
- [ scrollToPage](#scrollToPage)
- [ scrollToPercentHorizontal](#scrollToPercentHorizontal)
- [ scrollToPercentVertical](#scrollToPercentVertical)
- [ scrollToRight](#scrollToRight)
- [ scrollToTop](#scrollToTop)
- [ scrollToTopLeft](#scrollToTopLeft)
- [ scrollToTopRight](#scrollToTopRight)
- [ setContentPosition](#setContentPosition)
- [ setCurrentPageIndex](#setCurrentPageIndex)
- [ start](#start)
- [ stopAutoScroll](#stopAutoScroll)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ update](#update)
</div>

## Properties


### Direction
<div style="margin-left: 10px;">




• `static` **Direction**:
`Direction`  = `Direction`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L227)&nbsp;


___


### EventType
<div style="margin-left: 10px;">




• `static` **EventType**:
`EventType | EventType`  = `extendsEnum(EventType, ScrollEventType)`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L228)&nbsp;


___


### SizeMode
<div style="margin-left: 10px;">




• `static` **SizeMode**:
`SizeMode`  = `SizeMode`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L226)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### autoPageTurningThreshold
<div style="margin-left: 10px;">




**`zh`** 
快速滑动翻页临界值。
当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值，
该值与此临界值相比较，如果大于临界值，则进行自动翻页。





•  **autoPageTurningThreshold**:
`number`  = `100`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:243](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L243)&nbsp;


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




•  **cancelInnerEvents**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:280](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L280)&nbsp;


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




•  **horizontal**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L270)&nbsp;


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


### pageEvents
<div style="margin-left: 10px;">




**`zh`** 滚动视图的事件回调函数





•  **pageEvents**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L303)&nbsp;


___


### pageTurningSpeed
<div style="margin-left: 10px;">




**`zh`** 每个页面翻页时所需时间。单位：秒





•  **pageTurningSpeed**:
`number`  = `0.3`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L294)&nbsp;


___


### scrollEvents
<div style="margin-left: 10px;">




•  **scrollEvents**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L286)&nbsp;


___


### vertical
<div style="margin-left: 10px;">




•  **vertical**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L275)&nbsp;


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


### curPageIdx
<div style="margin-left: 10px;">




•  **curPageIdx**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:222](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L222)&nbsp;


___


### direction
<div style="margin-left: 10px;">




**`zh`** 
页面视图滚动类型





•  **direction**:
 ``Direction`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L140)&nbsp;   [cocos/ui/page-view.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L144)&nbsp;


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




•  **horizontalScrollBar**:
 ``null | ScrollBar`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L259)&nbsp;   [cocos/ui/page-view.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L263)&nbsp;


___


### indicator
<div style="margin-left: 10px;">




**`zh`** 
页面视图指示器组件





•  **indicator**:
 ``null | PageViewIndicator`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L207)&nbsp;   [cocos/ui/page-view.ts:211](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L211)&nbsp;


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


### pageTurningEventTiming
<div style="margin-left: 10px;">




**`zh`** 
设置 PageView PageTurning 事件的发送时机。





•  **pageTurningEventTiming**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L186)&nbsp;   [cocos/ui/page-view.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L190)&nbsp;


___


### scrollThreshold
<div style="margin-left: 10px;">




**`zh`** 
滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原。





•  **scrollThreshold**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L164)&nbsp;   [cocos/ui/page-view.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L168)&nbsp;


___


### sizeMode
<div style="margin-left: 10px;">




**`zh`** 
页面视图中每个页面大小类型





•  **sizeMode**:
 ``SizeMode`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L118)&nbsp;   [cocos/ui/page-view.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L122)&nbsp;


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




•  **verticalScrollBar**:
 ``null | ScrollBar`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:248](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L248)&nbsp;   [cocos/ui/page-view.ts:252](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L252)&nbsp;


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

• **new PageView**(`name: string`)

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




<!---->

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




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L215)&nbsp;   [cocos/core/components/component.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L226)&nbsp;   [cocos/core/components/component.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L228)&nbsp;
___
### addPage
<div style="margin-left: 10px;">

▸   **addPage**<`void`\>(`page: Node`) : `void`




**`zh`** 
在当前页面视图的尾部插入一个新视图。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `page` | `Node` | 新视图。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:395](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L395)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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





<!---->
<!--    #### Returns `Vec3` - current content position.-->
<!---->


##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:890](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L890)&nbsp;
___
### getCurrentPageIndex
<div style="margin-left: 10px;">

▸   **getCurrentPageIndex**<`number`\> : `number`




**`zh`** 
返回当前页面索引。





<!---->
<!--    #### Returns `number` 当前页面索引。
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L357)&nbsp;
___
### getMaxScrollOffset
<div style="margin-left: 10px;">

▸   **getMaxScrollOffset**<`Vec2`\> : `Vec2`




**`zh`** 
获取滚动视图最大可以滚动的偏移量。





<!---->
<!--    #### Returns `Vec2` - 最大可滚动偏移量。
-->
<!---->


##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:736](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L736)&nbsp;
___
### getPages
<div style="margin-left: 10px;">

▸   **getPages**




**`zh`** 
返回视图中的所有页面。





<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:382](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L382)&nbsp;
___
### getScrollEndedEventTiming
<div style="margin-left: 10px;">

▸   **getScrollEndedEventTiming**<`number`\> : `number`




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:514](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L514)&nbsp;
___
### getScrollOffset
<div style="margin-left: 10px;">

▸   **getScrollOffset**<`Vec2`\> : `Vec2`




**`zh`** 
获取滚动视图相对于左上角原点的当前滚动偏移。





<!---->
<!--    #### Returns `Vec2` - 当前滚动偏移量。
-->
<!---->


##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:720](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L720)&nbsp;
___
### insertPage
<div style="margin-left: 10px;">

▸   **insertPage**<`void`\>(`page: Node, index: number`) : `void`




**`zh`** 
将页面插入指定位置中。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `page` | `Node` | 新视图。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | 指定位置。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L418)&nbsp;
___
### isAutoScrolling
<div style="margin-left: 10px;">

▸   **isAutoScrolling**<`boolean`\> : `boolean`




**`zh`** 
当前滚动视图是否在惯性滚动。





<!---->
<!--    #### Returns `boolean` - 滚动视图是否在惯性滚动。
-->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:925](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L925)&nbsp;
___
### isScrolling
<div style="margin-left: 10px;">

▸   **isScrolling**<`boolean`\> : `boolean`




**`zh`** 
用户是否在拖拽当前滚动视图。





<!---->
<!--    #### Returns `boolean` - 是否在拖拽当前滚动视图。
-->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:912](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L912)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L333)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L325)&nbsp;
___
### onFocusInEditor
<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLoad
<div style="margin-left: 10px;">

▸   **onLoad**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:341](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L341)&nbsp;
___
### onLostFocusInEditor
<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### removeAllPages
<div style="margin-left: 10px;">

▸   **removeAllPages**<`void`\> : `void`




**`zh`** 
移除所有页面。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L481)&nbsp;
___
### removePage
<div style="margin-left: 10px;">

▸   **removePage**<`void`\>(`page: Node`) : `void`




**`zh`** 
移除指定页面。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `page` | `Node` | 指定页面。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:445](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L445)&nbsp;
___
### removePageAtIndex
<div style="margin-left: 10px;">

▸   **removePageAtIndex**<`void`\>(`index: number`) : `void`




**`zh`** 
移除指定下标的页面。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | 页面下标。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:464](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L464)&nbsp;
___
### resetInEditor
<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`




**`zh`** 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。





<!---->
<!--    #### Returns `void` -->
<!---->


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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `interval` | `number` | The time interval between each invocation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `repeat` | `number` | The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `anchor` | `Vec2` | 在 new Vec2(0,0) and new Vec2(1,1) 上取差值的一个点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到指定水平或垂直百分比位置。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到底部边界。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到左下边界。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到右边下边界。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到左边边界。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `offset` | `Vec2` | 指定移动偏移量。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到指定偏移量处。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `attenuated` | `boolean` | 滚动加速是否衰减，默认为 true。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:691](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L691)&nbsp;
___
### scrollToPage
<div style="margin-left: 10px;">

▸   **scrollToPage**<`void`\>(`idx: number, timeInSecond: number`) : `void`




**`zh`** 
滚动到指定页面





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | index of page.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `number` | scrolling time.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:501](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L501)&nbsp;
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `percent` | `number` | 0 - 之间的百分比。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `number` | 滚动时间（s）。 如果超时，内容将立即跳到指定水平百分比位置。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `percent` | `number` | 0 - 1 之间的百分比。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到指定垂直百分比位置。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到右边边界。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到顶部边界。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到左上边边界。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeInSecond` | `undefined \| number` | 滚动时间（s）。 如果超时，内容将立即跳到右上边界。  |

| Name | Type | Description |
| :------: | :------: | :------: |
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





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `position` | `Vec3` | current content position.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:863](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L863)&nbsp;
___
### setCurrentPageIndex
<div style="margin-left: 10px;">

▸   **setCurrentPageIndex**<`void`\>(`index: number`) : `void`




**`zh`** 
设置当前页面索引。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | 索引。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:369](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L369)&nbsp;
___
### start
<div style="margin-left: 10px;">

▸   **start**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:933](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L933)&nbsp;
___
### stopAutoScroll
<div style="margin-left: 10px;">

▸   **stopAutoScroll**<`void`\> : `void`




**`zh`** 
停止自动滚动, 调用此 API 可以让 ScrollView 立即停止滚动。





<!---->
<!--    #### Returns `void` -->
<!---->


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




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:959](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L959)&nbsp;
___
<!---->




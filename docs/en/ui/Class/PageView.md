
## Class: PageView


`extend:`
[ScrollView](docs/en/ui/Class/ScrollView.md)










**`en`** 
The PageView control.



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



**`en`** 
Auto page turning velocity threshold. When users swipe the PageView quickly,
it will calculate a velocity based on the scroll distance and time,
if the calculated velocity is larger than the threshold, then it will trigger page turning.





•  **autoPageTurningThreshold**:
`number`  = `100`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:243](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L243)&nbsp;


___


### bounceDuration
<div style="margin-left: 10px;">



**`en`** 
The elapse time of bouncing back. A value of 0 will bounce back immediately.





•  **bounceDuration**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:225](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L225)&nbsp;


___


### brake
<div style="margin-left: 10px;">



**`en`** 
It determines how quickly the content stop moving. A value of 1 will stop the movement immediately.
A value of 0 will never stop the movement until it reaches to the boundary of scrollview.





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



**`en`** 
When elastic is set, the content will be bounce back when move out of boundary.





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



**`en`** 
When inertia is set, the content will continue to move when touch ended.





•  **inertia**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L263)&nbsp;


___


### node
<div style="margin-left: 10px;">



**`en`** The node this component is attached to. A component is always attached to a node.



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



**`en`** PageView events callback




•  **pageEvents**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L303)&nbsp;


___


### pageTurningSpeed
<div style="margin-left: 10px;">



**`en`** The time required to turn over a page. unit: second




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



**`en`** 
This is a reference to the UI element to be scrolled.





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



**`en`** 
The page view direction.





•  **direction**:
 ``Direction`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L140)&nbsp;   [cocos/ui/page-view.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L144)&nbsp;


___


### enabled
<div style="margin-left: 10px;">



**`en`** Indicates whether this component is enabled or not.



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



**`en`** Indicates whether this component is enabled and its node is also active in the hierarchy.




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



**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




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



**`en`** 
The Page View Indicator.





•  **indicator**:
 ``null | PageViewIndicator`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L207)&nbsp;   [cocos/ui/page-view.ts:211](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L211)&nbsp;


___


### isValid
<div style="margin-left: 10px;">



**`en`** 
Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.




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



**`en`** 
Change the PageTurning event timing of PageView.





•  **pageTurningEventTiming**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L186)&nbsp;   [cocos/ui/page-view.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L190)&nbsp;


___


### scrollThreshold
<div style="margin-left: 10px;">



**`en`** 
The scroll threshold value, when drag exceeds this value,
release the next page will automatically scroll, less than the restore.





•  **scrollThreshold**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L164)&nbsp;   [cocos/ui/page-view.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L168)&nbsp;


___


### sizeMode
<div style="margin-left: 10px;">



**`en`** 
Specify the size type of each page in PageView.





•  **sizeMode**:
 ``SizeMode`` 
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L118)&nbsp;   [cocos/ui/page-view.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L122)&nbsp;


___


### uuid
<div style="margin-left: 10px;">



**`en`** The uuid for editor.




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



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



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



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



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
### addPage

<div style="margin-left: 10px;">

▸   **addPage**<`void`\>(`page: Node`) : `void`



**`en`** 
At the end of the current page view to insert a new view.




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




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### getComponent

<div style="margin-left: 10px;">

▸   **getComponent**(`classConstructor: Constructor`)



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.



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



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.



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



**`en`** Returns the component of supplied type in any of its children using depth first search.



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



**`en`** Returns the component of supplied type in any of its children using depth first search.



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



**`en`** Returns all components of supplied type in the node.



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



**`en`** Returns all components of supplied type in the node.



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



**`en`** Returns all components of supplied type in self or any of its children.



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



**`en`** Returns all components of supplied type in self or any of its children.



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



**`en`** 
Query the content's position in its parent space.




**`deprecated`** Since 3.1.0, getContentPosition is deprecated.





##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:890](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L890)&nbsp;
___
### getCurrentPageIndex

<div style="margin-left: 10px;">

▸   **getCurrentPageIndex**<`number`\> : `number`



**`en`** 
Returns current page index.





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L357)&nbsp;
___
### getMaxScrollOffset

<div style="margin-left: 10px;">

▸   **getMaxScrollOffset**<`Vec2`\> : `Vec2`



**`en`** 
Get the maximize available  scroll offset.





##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:736](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L736)&nbsp;
___
### getPages

<div style="margin-left: 10px;">

▸   **getPages**



**`en`** 
Returns all pages of pageview.





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:382](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L382)&nbsp;
___
### getScrollEndedEventTiming

<div style="margin-left: 10px;">

▸   **getScrollEndedEventTiming**<`number`\> : `number`




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:514](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L514)&nbsp;
___
### getScrollOffset

<div style="margin-left: 10px;">

▸   **getScrollOffset**<`Vec2`\> : `Vec2`



**`en`** 
Get the positive offset value corresponds to the content's top left boundary.





##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:720](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L720)&nbsp;
___
### insertPage

<div style="margin-left: 10px;">

▸   **insertPage**<`void`\>(`page: Node, index: number`) : `void`



**`en`** 
Inserts a page in the specified location.




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `page` | `Node` | 新视图。  |
| `index` | `number` | 指定位置。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L418)&nbsp;
___
### isAutoScrolling

<div style="margin-left: 10px;">

▸   **isAutoScrolling**<`boolean`\> : `boolean`



**`en`** 
Query whether the ScrollView is currently scrolling because of a bounceback or inertia slowdown.





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:925](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L925)&nbsp;
___
### isScrolling

<div style="margin-left: 10px;">

▸   **isScrolling**<`boolean`\> : `boolean`



**`en`** 
Query whether the user is currently dragging the ScrollView to scroll it.





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:912](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L912)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L333)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L325)&nbsp;
___
### onFocusInEditor

<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLoad

<div style="margin-left: 10px;">

▸   **onLoad**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:341](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L341)&nbsp;
___
### onLostFocusInEditor

<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### removeAllPages

<div style="margin-left: 10px;">

▸   **removeAllPages**<`void`\> : `void`



**`en`** 
Removes all pages from PageView.





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L481)&nbsp;
___
### removePage

<div style="margin-left: 10px;">

▸   **removePage**<`void`\>(`page: Node`) : `void`



**`en`** 
Removes a page from PageView.




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



**`en`** 
Removes a page at index of PageView.




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



**`en`** Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
This function is only called in editor.<br/>




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### schedule

<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: any, interval: number, repeat: number, delay: number`) : `void`



**`en`** 
Schedules a custom task.<br/>
If the task is already scheduled, then the interval parameter will be updated without scheduling it again.



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



**`en`** Schedules a task that runs only once, with a delay of 0 or larger.



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



**`en`** 
Scroll the content to the percent position of ScrollView in any direction.




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



**`en`** 
Scroll the content to the bottom boundary of ScrollView.




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



**`en`** 
Scroll the content to the bottom left boundary of ScrollView.




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



**`en`** 
Scroll the content to the bottom right boundary of ScrollView.




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



**`en`** 
Scroll the content to the left boundary of ScrollView.




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



**`en`** 
Scroll with an offset related to the ScrollView's top left origin, if timeInSecond is omitted, then it will jump to the specific offset immediately.




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
### scrollToPage

<div style="margin-left: 10px;">

▸   **scrollToPage**<`void`\>(`idx: number, timeInSecond: number`) : `void`



**`en`** 
Scroll PageView to index.




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | index of page.  |
| `timeInSecond` | `number` | scrolling time.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/page-view.ts:501](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/page-view.ts#L501)&nbsp;
___
### scrollToPercentHorizontal

<div style="margin-left: 10px;">

▸   **scrollToPercentHorizontal**<`void`\>(`percent: number, timeInSecond: number, attenuated: boolean`) : `void`



**`en`** 
Scroll the content to the horizontal percent position of ScrollView.




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



**`en`** 
Scroll the content to the vertical percent position of ScrollView.




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



**`en`** 
Scroll the content to the right boundary of ScrollView.




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



**`en`** 
Scroll the content to the top boundary of ScrollView.




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



**`en`** 
Scroll the content to the top left boundary of ScrollView.




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



**`en`** 
Scroll the content to the top right boundary of ScrollView.




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



**`en`** 
Modify the content position.




**`deprecated`** Since 3.1.0, setContentPosition is deprecated, please use scrollToOffset instead.




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



**`en`** 
Set current page index.




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




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:933](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L933)&nbsp;
___
### stopAutoScroll

<div style="margin-left: 10px;">

▸   **stopAutoScroll**<`void`\> : `void`



**`en`** 
Stop auto scroll immediately.





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/scroll-view.ts:848](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/scroll-view.ts#L848)&nbsp;
___
### unschedule

<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`



**`en`** Un-schedules a custom task.



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



**`en`** unschedule all scheduled tasks.



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





## Class: Widget


`extend:`
[Component](docs/en/component/Class/Component.md)










**`en`** 
Stores and manipulate the anchoring based on its parent.
Widget are used for GUI but can also be used for other things.
Widget will adjust current node's position and size automatically,
but the results after adjustment can not be obtained until the next frame unless you call [[updateAlignment]] manually.



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  AlignMode](#AlignMode)
- [ **`static`**  system](#system)
- [ node](#node)
- [ alignFlags](#alignFlags)
- [ alignMode](#alignMode)
- [ bottom](#bottom)
- [ editorBottom](#editorBottom)
- [ editorHorizontalCenter](#editorHorizontalCenter)
- [ editorLeft](#editorLeft)
- [ editorRight](#editorRight)
- [ editorTop](#editorTop)
- [ editorVerticalCenter](#editorVerticalCenter)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ horizontalCenter](#horizontalCenter)
- [ isAbsoluteBottom](#isAbsoluteBottom)
- [ isAbsoluteHorizontalCenter](#isAbsoluteHorizontalCenter)
- [ isAbsoluteLeft](#isAbsoluteLeft)
- [ isAbsoluteRight](#isAbsoluteRight)
- [ isAbsoluteTop](#isAbsoluteTop)
- [ isAbsoluteVerticalCenter](#isAbsoluteVerticalCenter)
- [ isAlignBottom](#isAlignBottom)
- [ isAlignHorizontalCenter](#isAlignHorizontalCenter)
- [ isAlignLeft](#isAlignLeft)
- [ isAlignRight](#isAlignRight)
- [ isAlignTop](#isAlignTop)
- [ isAlignVerticalCenter](#isAlignVerticalCenter)
- [ isStretchHeight](#isStretchHeight)
- [ isStretchWidth](#isStretchWidth)
- [ isValid](#isValid)
- [ left](#left)
- [ name](#name)
- [ right](#right)
- [ target](#target)
- [ top](#top)
- [ uuid](#uuid)
- [ verticalCenter](#verticalCenter)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setDirty](#setDirty)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ updateAlignment](#updateAlignment)
</div>

## Properties


### AlignMode
<div style="margin-left: 10px;">




• `static` **AlignMode**:
`EnumAlias`  = `AlignMode`
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:723](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L723)&nbsp;   [cocos/ui/widget.ts:994](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L994)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


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


### alignFlags
<div style="margin-left: 10px;">




•  **alignFlags**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:711](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L711)&nbsp;   [cocos/ui/widget.ts:714](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L714)&nbsp;


___


### alignMode
<div style="margin-left: 10px;">



**`en`** 
Specifies the alignment mode of the Widget, which determines when the widget should refresh.




**`example`**

```ts


import { Widget } from 'cc';
widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;


```




•  **alignMode**:
 ``AlignMode`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:698](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L698)&nbsp;   [cocos/ui/widget.ts:701](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L701)&nbsp;


___


### bottom
<div style="margin-left: 10px;">



**`en`** 
The margins between the bottom of this node and the bottom of parent node,
the value can be negative, Only available in 'isAlignBottom' open.





•  **bottom**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:427](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L427)&nbsp;   [cocos/ui/widget.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L430)&nbsp;


___


### editorBottom
<div style="margin-left: 10px;">



**`editoronly`** Not for user





•  **editorBottom**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:439](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L439)&nbsp;   [cocos/ui/widget.ts:442](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L442)&nbsp;


___


### editorHorizontalCenter
<div style="margin-left: 10px;">



**`editoronly`** Not for user





•  **editorHorizontalCenter**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:526](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L526)&nbsp;   [cocos/ui/widget.ts:529](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L529)&nbsp;


___


### editorLeft
<div style="margin-left: 10px;">



**`editoronly`** Not for user





•  **editorLeft**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L468)&nbsp;   [cocos/ui/widget.ts:471](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L471)&nbsp;


___


### editorRight
<div style="margin-left: 10px;">



**`editoronly`** Not for user





•  **editorRight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:497](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L497)&nbsp;   [cocos/ui/widget.ts:500](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L500)&nbsp;


___


### editorTop
<div style="margin-left: 10px;">



**`editoronly`** Not for user





•  **editorTop**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:410](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L410)&nbsp;   [cocos/ui/widget.ts:413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L413)&nbsp;


___


### editorVerticalCenter
<div style="margin-left: 10px;">



**`editoronly`** Not for user





•  **editorVerticalCenter**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:555](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L555)&nbsp;   [cocos/ui/widget.ts:558](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L558)&nbsp;


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


### horizontalCenter
<div style="margin-left: 10px;">



**`en`** 
Horizontally aligns the midpoint offset value,
the value can be negative, Only available in 'isAlignHorizontalCenter' open.





•  **horizontalCenter**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:514](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L514)&nbsp;   [cocos/ui/widget.ts:517](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L517)&nbsp;


___


### isAbsoluteBottom
<div style="margin-left: 10px;">



**`en`** 
If true, bottom is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.





•  **isAbsoluteBottom**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:591](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L591)&nbsp;   [cocos/ui/widget.ts:594](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L594)&nbsp;


___


### isAbsoluteHorizontalCenter
<div style="margin-left: 10px;">



**`en`** 
If true, horizontalCenter is pixel margin, otherwise is percentage (0 - 1) margin.





•  **isAbsoluteHorizontalCenter**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:651](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L651)&nbsp;   [cocos/ui/widget.ts:654](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L654)&nbsp;


___


### isAbsoluteLeft
<div style="margin-left: 10px;">



**`en`** 
If true, left is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.





•  **isAbsoluteLeft**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:611](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L611)&nbsp;   [cocos/ui/widget.ts:614](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L614)&nbsp;


___


### isAbsoluteRight
<div style="margin-left: 10px;">



**`en`** 
If true, right is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.





•  **isAbsoluteRight**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:631](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L631)&nbsp;   [cocos/ui/widget.ts:634](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L634)&nbsp;


___


### isAbsoluteTop
<div style="margin-left: 10px;">



**`en`** 
If true, top is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.





•  **isAbsoluteTop**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:571](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L571)&nbsp;   [cocos/ui/widget.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L574)&nbsp;


___


### isAbsoluteVerticalCenter
<div style="margin-left: 10px;">



**`en`** 
If true, verticalCenter is pixel margin, otherwise is percentage (0 - 1) margin.





•  **isAbsoluteVerticalCenter**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:671](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L671)&nbsp;   [cocos/ui/widget.ts:674](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L674)&nbsp;


___


### isAlignBottom
<div style="margin-left: 10px;">



**`en`** 
Whether to align to the bottom.





•  **isAlignBottom**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L276)&nbsp;   [cocos/ui/widget.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L279)&nbsp;


___


### isAlignHorizontalCenter
<div style="margin-left: 10px;">



**`en`** 
Whether to align horizontally.





•  **isAlignHorizontalCenter**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:347](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L347)&nbsp;   [cocos/ui/widget.ts:350](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L350)&nbsp;


___


### isAlignLeft
<div style="margin-left: 10px;">



**`en`** 
Whether to align to the left.





•  **isAlignLeft**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L292)&nbsp;   [cocos/ui/widget.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L295)&nbsp;


___


### isAlignRight
<div style="margin-left: 10px;">



**`en`** 
Whether to align to the right.





•  **isAlignRight**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L308)&nbsp;   [cocos/ui/widget.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L311)&nbsp;


___


### isAlignTop
<div style="margin-left: 10px;">



**`en`** 
Whether to align to the top.





•  **isAlignTop**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L260)&nbsp;   [cocos/ui/widget.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L263)&nbsp;


___


### isAlignVerticalCenter
<div style="margin-left: 10px;">



**`en`** 
Whether to align vertically.





•  **isAlignVerticalCenter**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L324)&nbsp;   [cocos/ui/widget.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L327)&nbsp;


___


### isStretchHeight
<div style="margin-left: 10px;">



**`en`** 
Whether to stretch vertically, when enable the left and right alignment will be stretched vertically,
then height setting is invalid (read only).





•  **isStretchHeight**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:383](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L383)&nbsp;


___


### isStretchWidth
<div style="margin-left: 10px;">



**`en`** 
Whether to stretch horizontally, when enable the left and right alignment will be stretched horizontally,
the width setting is invalid (read only).





•  **isStretchWidth**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L370)&nbsp;


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


### left
<div style="margin-left: 10px;">



**`en`** 
The margins between the left of this node and the left of parent node,
the value can be negative, Only available in 'isAlignLeft' open.





•  **left**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:456](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L456)&nbsp;   [cocos/ui/widget.ts:459](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L459)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### right
<div style="margin-left: 10px;">



**`en`** 
The margins between the right of this node and the right of parent node,
the value can be negative, Only available in 'isAlignRight' open.





•  **right**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L485)&nbsp;   [cocos/ui/widget.ts:488](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L488)&nbsp;


___


### target
<div style="margin-left: 10px;">



**`en`** 
Specifies an alignment target that can only be one of the parent nodes of the current node.
The default value is null, and when null, indicates the current parent.





•  **target**:
 ``null | Node`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L230)&nbsp;   [cocos/ui/widget.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L234)&nbsp;


___


### top
<div style="margin-left: 10px;">



**`en`** 
The margins between the top of this node and the top of parent node,
the value can be negative, Only available in 'isAlignTop' open.





•  **top**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:398](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L398)&nbsp;   [cocos/ui/widget.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L401)&nbsp;


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


### verticalCenter
<div style="margin-left: 10px;">



**`en`** 
Vertically aligns the midpoint offset value,
the value can be negative, Only available in 'isAlignVerticalCenter' open.





•  **verticalCenter**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:543](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L543)&nbsp;   [cocos/ui/widget.ts:546](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L546)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Widget**(`name: string`)

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
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:825](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L825)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:819](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L819)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:810](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L810)&nbsp;
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
### setDirty

<div style="margin-left: 10px;">

▸   **setDirty**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:806](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L806)&nbsp;
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
### updateAlignment

<div style="margin-left: 10px;">

▸   **updateAlignment**<`void`\> : `void`



**`en`** 
Immediately perform the widget alignment. You need to manually call this method only if
you need to get the latest results after the alignment before the end of current frame.




**`example`**

```ts


import { log } from 'cc';
widget.top = 10;       // change top margin
log(widget.node.y); // not yet changed
widget.updateAlignment();
log(widget.node.y); // changed


```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:787](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L787)&nbsp;
___
<!---->




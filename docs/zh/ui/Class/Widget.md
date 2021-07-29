
## Class: Widget


`extend:`
[Component](docs/zh/component/Class/Component.md)










**`zh`** Widget 组件，用于设置和适配其相对于父节点的边距，Widget 通常被用于 UI 界面，也可以用于其他地方。<br/>
Widget 会自动调整当前节点的坐标和宽高，不过目前调整后的结果要到下一帧才能在脚本里获取到，除非你先手动调用 [[updateAlignment]]。



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


### alignFlags
<div style="margin-left: 10px;">



**`zh`** 
对齐开关，由 AlignFlags 组成





•  **alignFlags**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:711](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L711)&nbsp;   [cocos/ui/widget.ts:714](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L714)&nbsp;


___


### alignMode
<div style="margin-left: 10px;">



**`zh`** 
指定 Widget 的对齐模式，用于决定 Widget 应该何时刷新。




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



**`zh`** 
本节点底边和父节点底边的距离，可填写负值，只有在 isAlignBottom 开启时才有作用。





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


### horizontalCenter
<div style="margin-left: 10px;">



**`zh`** 
水平居中的偏移值，可填写负值，只有在 isAlignHorizontalCenter 开启时才有作用。





•  **horizontalCenter**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:514](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L514)&nbsp;   [cocos/ui/widget.ts:517](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L517)&nbsp;


___


### isAbsoluteBottom
<div style="margin-left: 10px;">



**`zh`** 
如果为 true，"bottom" 将会以像素作为边距，否则将会以相对父物体高度的比例（0 到 1）作为边距。





•  **isAbsoluteBottom**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:591](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L591)&nbsp;   [cocos/ui/widget.ts:594](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L594)&nbsp;


___


### isAbsoluteHorizontalCenter
<div style="margin-left: 10px;">



**`zh`** 
如果为 true，"horizontalCenter" 将会以像素作为偏移值，反之为比例（0 到 1）。





•  **isAbsoluteHorizontalCenter**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:651](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L651)&nbsp;   [cocos/ui/widget.ts:654](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L654)&nbsp;


___


### isAbsoluteLeft
<div style="margin-left: 10px;">



**`zh`** 
如果为 true，"left" 将会以像素作为边距，否则将会以相对父物体宽度的比例（0 到 1）作为边距。





•  **isAbsoluteLeft**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:611](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L611)&nbsp;   [cocos/ui/widget.ts:614](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L614)&nbsp;


___


### isAbsoluteRight
<div style="margin-left: 10px;">



**`zh`** 
如果为 true，"right" 将会以像素作为边距，否则将会以相对父物体宽度的比例（0 到 1）作为边距。





•  **isAbsoluteRight**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:631](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L631)&nbsp;   [cocos/ui/widget.ts:634](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L634)&nbsp;


___


### isAbsoluteTop
<div style="margin-left: 10px;">



**`zh`** 
如果为 true，"top" 将会以像素作为边距，否则将会以相对父物体高度的比例（0 到 1）作为边距。





•  **isAbsoluteTop**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:571](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L571)&nbsp;   [cocos/ui/widget.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L574)&nbsp;


___


### isAbsoluteVerticalCenter
<div style="margin-left: 10px;">



**`zh`** 
如果为 true，"verticalCenter" 将会以像素作为偏移值，反之为比例（0 到 1）。





•  **isAbsoluteVerticalCenter**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:671](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L671)&nbsp;   [cocos/ui/widget.ts:674](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L674)&nbsp;


___


### isAlignBottom
<div style="margin-left: 10px;">



**`zh`** 
是否对齐下边。





•  **isAlignBottom**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L276)&nbsp;   [cocos/ui/widget.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L279)&nbsp;


___


### isAlignHorizontalCenter
<div style="margin-left: 10px;">



**`zh`** 
是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消。





•  **isAlignHorizontalCenter**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:347](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L347)&nbsp;   [cocos/ui/widget.ts:350](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L350)&nbsp;


___


### isAlignLeft
<div style="margin-left: 10px;">



**`zh`** 
是否对齐左边。





•  **isAlignLeft**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L292)&nbsp;   [cocos/ui/widget.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L295)&nbsp;


___


### isAlignRight
<div style="margin-left: 10px;">



**`zh`** 
是否对齐右边。





•  **isAlignRight**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L308)&nbsp;   [cocos/ui/widget.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L311)&nbsp;


___


### isAlignTop
<div style="margin-left: 10px;">



**`zh`** 
是否对齐上边。





•  **isAlignTop**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L260)&nbsp;   [cocos/ui/widget.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L263)&nbsp;


___


### isAlignVerticalCenter
<div style="margin-left: 10px;">



**`zh`** 
是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消。





•  **isAlignVerticalCenter**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L324)&nbsp;   [cocos/ui/widget.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L327)&nbsp;


___


### isStretchHeight
<div style="margin-left: 10px;">



**`zh`** 
当前是否垂直拉伸。当同时启用上下对齐时，节点将会被垂直拉伸，此时节点的高度（只读）。





•  **isStretchHeight**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:383](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L383)&nbsp;


___


### isStretchWidth
<div style="margin-left: 10px;">



**`zh`** 
当前是否水平拉伸。当同时启用左右对齐时，节点将会被水平拉伸。此时节点的宽度（只读）。





•  **isStretchWidth**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L370)&nbsp;


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


### left
<div style="margin-left: 10px;">



**`zh`** 
本节点左边和父节点左边的距离，可填写负值，只有在 isAlignLeft 开启时才有作用。





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



**`zh`** 
本节点右边和父节点右边的距离，可填写负值，只有在 isAlignRight 开启时才有作用。





•  **right**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L485)&nbsp;   [cocos/ui/widget.ts:488](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L488)&nbsp;


___


### target
<div style="margin-left: 10px;">



**`zh`** 
指定一个对齐目标，只能是当前节点的其中一个父节点，默认为空，为空时表示当前父节点。





•  **target**:
 ``null | Node`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L230)&nbsp;   [cocos/ui/widget.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L234)&nbsp;


___


### top
<div style="margin-left: 10px;">



**`zh`** 
本节点顶边和父节点顶边的距离，可填写负值，只有在 isAlignTop 开启时才有作用。





•  **top**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/widget.ts:398](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L398)&nbsp;   [cocos/ui/widget.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/widget.ts#L401)&nbsp;


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


### verticalCenter
<div style="margin-left: 10px;">



**`zh`** 
垂直居中的偏移值，可填写负值，只有在 isAlignVerticalCenter 开启时才有作用。





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
### updateAlignment

<div style="margin-left: 10px;">

▸   **updateAlignment**<`void`\> : `void`



**`zh`** 
立刻执行 widget 对齐操作。这个接口一般不需要手工调用。
只有当你需要在当前帧结束前获得 widget 对齐后的最新结果时才需要手动调用这个方法。




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





## Class: Toggle


`extend:`
[Button](docs/zh/ui/Class/Button.md)










**`zh`** 
Toggle 是一个 CheckBox，当它和 ToggleGroup 一起使用的时候，可以变成 RadioButton。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  EventType](#EventType)
- [ **`static`**  Transition](#Transition)
- [ **`static`**  system](#system)
- [ checkEvents](#checkEvents)
- [ clickEvents](#clickEvents)
- [ node](#node)
- [ checkMark](#checkMark)
- [ disabledColor](#disabledColor)
- [ disabledSprite](#disabledSprite)
- [ duration](#duration)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ hoverColor](#hoverColor)
- [ hoverSprite](#hoverSprite)
- [ interactable](#interactable)
- [ isChecked](#isChecked)
- [ isValid](#isValid)
- [ name](#name)
- [ normalColor](#normalColor)
- [ normalSprite](#normalSprite)
- [ pressedColor](#pressedColor)
- [ pressedSprite](#pressedSprite)
- [ target](#target)
- [ transition](#transition)
- [ uuid](#uuid)
- [ zoomScale](#zoomScale)

### Constructors

- [ constructor](#constructor)

### Methods

- [ OnDestroy](#OnDestroy)
- [ addComponent](#addComponent)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ playEffect](#playEffect)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setIsCheckedWithoutNotify](#setIsCheckedWithoutNotify)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ update](#update)
</div>

## Properties


### EventType
<div style="margin-left: 10px;">




• `static` **EventType**:
`EventType | EventType`  = `extendsEnum(EventType, ButtonEventType)`
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L114)&nbsp;


___


### Transition
<div style="margin-left: 10px;">




• `static` **Transition**:
`Transition`  = `Transition`
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:508](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L508)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### checkEvents
<div style="margin-left: 10px;">



**`zh`** 
Toggle 按钮的点击事件列表。





•  **checkEvents**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L126)&nbsp;


___


### clickEvents
<div style="margin-left: 10px;">



**`zh`** 
按钮的点击事件列表。





•  **clickEvents**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:521](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L521)&nbsp;


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


### checkMark
<div style="margin-left: 10px;">



**`zh`** 
Toggle 处于选中状态时显示的图片。





•  **checkMark**:
 ``null | Sprite`` 
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L88)&nbsp;   [cocos/ui/toggle.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L92)&nbsp;


___


### disabledColor
<div style="margin-left: 10px;">



**`zh`** 
禁用状态下按钮所显示的颜色。





•  **disabledColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:354](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L354)&nbsp;   [cocos/ui/button.ts:358](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L358)&nbsp;


___


### disabledSprite
<div style="margin-left: 10px;">



**`zh`** 
禁用状态下按钮所显示的 Sprite。





•  **disabledSprite**:
 ``null | SpriteFrame`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:495](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L495)&nbsp;   [cocos/ui/button.ts:499](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L499)&nbsp;


___


### duration
<div style="margin-left: 10px;">



**`zh`** 
颜色过渡和缩放过渡时所需时间。





•  **duration**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:377](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L377)&nbsp;   [cocos/ui/button.ts:381](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L381)&nbsp;


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


### hoverColor
<div style="margin-left: 10px;">



**`zh`** 
悬停状态下按钮所显示的颜色。





•  **hoverColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:334](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L334)&nbsp;   [cocos/ui/button.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L338)&nbsp;


___


### hoverSprite
<div style="margin-left: 10px;">



**`zh`** 
悬停状态下按钮所显示的 Sprite。





•  **hoverSprite**:
 ``null | SpriteFrame`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L473)&nbsp;   [cocos/ui/button.ts:477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L477)&nbsp;


___


### interactable
<div style="margin-left: 10px;">



**`zh`** 
按钮事件是否被响应，如果为 false，则按钮将被禁用。





•  **interactable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:225](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L225)&nbsp;   [cocos/ui/button.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L229)&nbsp;


___


### isChecked
<div style="margin-left: 10px;">



**`zh`** 
如果这个设置为 true，则 check mark 组件会处于 enabled 状态，否则处于 disabled 状态。





•  **isChecked**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L70)&nbsp;   [cocos/ui/toggle.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L74)&nbsp;


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


### normalColor
<div style="margin-left: 10px;">



**`zh`** 
普通状态下按钮所显示的颜色。





•  **normalColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:291](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L291)&nbsp;   [cocos/ui/button.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L295)&nbsp;


___


### normalSprite
<div style="margin-left: 10px;">



**`zh`** 
普通状态下按钮所显示的 Sprite。





•  **normalSprite**:
 ``null | SpriteFrame`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:424](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L424)&nbsp;   [cocos/ui/button.ts:428](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L428)&nbsp;


___


### pressedColor
<div style="margin-left: 10px;">



**`zh`** 
按下状态时按钮所显示的颜色。





•  **pressedColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:313](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L313)&nbsp;   [cocos/ui/button.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L317)&nbsp;


___


### pressedSprite
<div style="margin-left: 10px;">



**`zh`** 
按下状态时按钮所显示的 Sprite。





•  **pressedSprite**:
 ``null | SpriteFrame`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L451)&nbsp;   [cocos/ui/button.ts:455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L455)&nbsp;


___


### target
<div style="margin-left: 10px;">



**`zh`** 
需要过渡的目标。<br/>
按钮可以通过修改 Transition 来设置按钮状态过渡的方式：
- Button.Transition.NONE   // 不做任何过渡
- Button.Transition.COLOR  // 进行颜色之间过渡
- Button.Transition.SPRITE // 进行 Sprite 之间的过渡
- Button.Transition.SCALE // 进行缩放过渡





•  **target**:
 ``Node`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L199)&nbsp;   [cocos/ui/button.ts:203](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L203)&nbsp;


___


### transition
<div style="margin-left: 10px;">



**`zh`** 
按钮状态改变时过渡方式。





•  **transition**:
 ``Transition`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:261](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L261)&nbsp;   [cocos/ui/button.ts:265](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L265)&nbsp;


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


### zoomScale
<div style="margin-left: 10px;">



**`zh`** 
当用户点击按钮后，按钮会缩放到一个值，这个值等于 Button 原始 scale * zoomScale。
注意：不建议 zoomScale 的值小于 1, 否则缩放后如果触摸点在触摸区域外, 则会触发 touchCancel 事件。
如果你需要这么做，你应该把 target 设置为另一个背景节点，而不是按钮节点。





•  **zoomScale**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:402](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L402)&nbsp;   [cocos/ui/button.ts:406](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L406)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Toggle**(`name: string`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L194)&nbsp;


---

<!---->
## Methods

### OnDestroy

<div style="margin-left: 10px;">

▸   **OnDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L190)&nbsp;
___
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
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L183)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L175)&nbsp;
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
### playEffect

<div style="margin-left: 10px;">

▸   **playEffect**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L156)&nbsp;
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
### setIsCheckedWithoutNotify

<div style="margin-left: 10px;">

▸   **setIsCheckedWithoutNotify**<`void`\>(`value: boolean`) : `void`



**`zh`** 
设置 isChecked 而不调用 checkEvents 回调。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `boolean` | 是否被按下  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L171)&nbsp;
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

##### Defined in &nbsp;   [cocos/ui/button.ts:604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L604)&nbsp;
___
<!---->




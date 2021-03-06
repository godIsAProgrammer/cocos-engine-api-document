
## Class: EditBox


`extend:`
[Component](docs/zh/component/Class/Component.md)










**`zh`** 
`EditBox` 组件，用于获取用户的输入文本。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  EventType](#EventType)
- [ **`static`**  InputFlag](#InputFlag)
- [ **`static`**  InputMode](#InputMode)
- [ **`static`**  KeyboardReturnType](#KeyboardReturnType)
- [ **`static`**  system](#system)
- [ editingDidBegan](#editingDidBegan)
- [ editingDidEnded](#editingDidEnded)
- [ editingReturn](#editingReturn)
- [ node](#node)
- [ textChanged](#textChanged)
- [ backgroundImage](#backgroundImage)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ inputFlag](#inputFlag)
- [ inputMode](#inputMode)
- [ isValid](#isValid)
- [ maxLength](#maxLength)
- [ name](#name)
- [ placeholder](#placeholder)
- [ placeholderLabel](#placeholderLabel)
- [ returnType](#returnType)
- [ string](#string)
- [ tabIndex](#tabIndex)
- [ textLabel](#textLabel)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ blur](#blur)
- [ destroy](#destroy)
- [ focus](#focus)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ isFocused](#isFocused)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setFocus](#setFocus)
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

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L304)&nbsp;


___


### InputFlag
<div style="margin-left: 10px;">




• `static` **InputFlag**:
`InputFlag`  = `InputFlag`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L302)&nbsp;


___


### InputMode
<div style="margin-left: 10px;">




• `static` **InputMode**:
`InputMode`  = `InputMode`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L303)&nbsp;


___


### KeyboardReturnType
<div style="margin-left: 10px;">




• `static` **KeyboardReturnType**:
`KeyboardReturnType`  = `KeyboardReturnType`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L301)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### editingDidBegan
<div style="margin-left: 10px;">



**`zh`** 
开始编辑文本输入框触发的事件回调。





•  **editingDidBegan**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:316](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L316)&nbsp;


___


### editingDidEnded
<div style="margin-left: 10px;">



**`zh`** 
结束编辑文本输入框时触发的事件回调。





•  **editingDidEnded**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:342](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L342)&nbsp;


___


### editingReturn
<div style="margin-left: 10px;">



**`zh`** 
当用户按下回车按键时的事件回调，目前不支持 windows 平台





•  **editingReturn**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:355](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L355)&nbsp;


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


### textChanged
<div style="margin-left: 10px;">



**`zh`** 
编辑文本输入框时触发的事件回调。





•  **textChanged**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:329](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L329)&nbsp;


___


### backgroundImage
<div style="margin-left: 10px;">



**`zh`** 
输入框的背景图片。





•  **backgroundImage**:
 ``null | SpriteFrame`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L183)&nbsp;   [cocos/ui/editbox/edit-box.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L187)&nbsp;


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


### inputFlag
<div style="margin-left: 10px;">



**`zh`** 
指定输入标志位，可以指定输入方式为密码或者单词首字母大写。





•  **inputFlag**:
 ``InputFlag`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L206)&nbsp;   [cocos/ui/editbox/edit-box.ts:210](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L210)&nbsp;


___


### inputMode
<div style="margin-left: 10px;">



**`zh`** 
指定输入模式: ANY表示多行输入，其它都是单行输入，移动平台上还可以指定键盘样式。





•  **inputMode**:
 ``InputMode`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L226)&nbsp;   [cocos/ui/editbox/edit-box.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L230)&nbsp;


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


### maxLength
<div style="margin-left: 10px;">



**`zh`** 
输入框最大允许输入的字符个数。
- 如果值为小于 0 的值，则不会限制输入字符个数。
- 如果值为 0，则不允许用户进行任何输入。





•  **maxLength**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:271](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L271)&nbsp;   [cocos/ui/editbox/edit-box.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L274)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### placeholder
<div style="margin-left: 10px;">



**`zh`** 
输入框占位符的文本内容。





•  **placeholder**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L112)&nbsp;   [cocos/ui/editbox/edit-box.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L119)&nbsp;


___


### placeholderLabel
<div style="margin-left: 10px;">



**`zh`** 
输入框占位符节点上挂载的 Label 组件对象。





•  **placeholderLabel**:
 ``null | Label`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L159)&nbsp;   [cocos/ui/editbox/edit-box.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L163)&nbsp;


___


### returnType
<div style="margin-left: 10px;">



**`zh`** 
指定移动设备上面回车按钮的样式。
注意：这个选项对 web 平台与 desktop 平台无效。





•  **returnType**:
 ``KeyboardReturnType`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L250)&nbsp;   [cocos/ui/editbox/edit-box.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L254)&nbsp;


___


### string
<div style="margin-left: 10px;">



**`zh`** 
输入框的初始输入内容，如果为空则会显示占位符的文本。





•  **string**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L90)&nbsp;   [cocos/ui/editbox/edit-box.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L94)&nbsp;


___


### tabIndex
<div style="margin-left: 10px;">



**`zh`** 
修改 DOM 输入元素的 tabIndex（这个属性只有在 Web 上面修改有意义）。





•  **tabIndex**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:287](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L287)&nbsp;   [cocos/ui/editbox/edit-box.ts:291](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L291)&nbsp;


___


### textLabel
<div style="margin-left: 10px;">



**`zh`** 
输入框输入文本节点上挂载的 Label 组件对象





•  **textLabel**:
 ``null | Label`` 
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L135)&nbsp;   [cocos/ui/editbox/edit-box.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L139)&nbsp;


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

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new EditBox**(`name: string`)

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
### blur

<div style="margin-left: 10px;">

▸   **blur**<`void`\> : `void`



**`zh`** 让当前 EditBox 失去焦点





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:439](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L439)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### focus

<div style="margin-left: 10px;">

▸   **focus**<`void`\> : `void`



**`zh`** 让当前 EditBox 获得焦点





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:429](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L429)&nbsp;
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
### isFocused

<div style="margin-left: 10px;">

▸   **isFocused**<`boolean`\> : `boolean`



**`zh`** 判断 EditBox 是否获得了焦点。
Note: only available on Web at the moment.





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:450](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L450)&nbsp;
___
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:409](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L409)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:400](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L400)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L385)&nbsp;
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
### setFocus

<div style="margin-left: 10px;">

▸   **setFocus**<`void`\> : `void`



**`zh`** 让当前 EditBox 获得焦点。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L419)&nbsp;
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

▸   **update**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/editbox/edit-box.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/editbox/edit-box.ts#L394)&nbsp;
___
<!---->




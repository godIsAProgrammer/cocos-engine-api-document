
## Class: RichText


`extend:`
[UIComponent](docs/zh/ui/Class/UIComponent.md)












**`zh`** 
富文本组件。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  HorizontalAlign](#HorizontalAlign)
- [ **`static`**  VerticalAlign](#VerticalAlign)
- [ **`static`**  system](#system)
- [ node](#node)
- [ stencilStage](#stencilStage)
- [ cacheMode](#cacheMode)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ font](#font)
- [ fontFamily](#fontFamily)
- [ fontSize](#fontSize)
- [ handleTouchEvent](#handleTouchEvent)
- [ hideFlags](#hideFlags)
- [ horizontalAlign](#horizontalAlign)
- [ imageAtlas](#imageAtlas)
- [ isValid](#isValid)
- [ lineHeight](#lineHeight)
- [ maxWidth](#maxWidth)
- [ name](#name)
- [ string](#string)
- [ useSystemFont](#useSystemFont)
- [ uuid](#uuid)

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
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ onRestore](#onRestore)
- [ postUpdateAssembler](#postUpdateAssembler)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ start](#start)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ updateAssembler](#updateAssembler)
</div>

## Properties


### HorizontalAlign
<div style="margin-left: 10px;">




• `static` **HorizontalAlign**:
`HorizontalTextAlignment`  = `HorizontalTextAlignment`
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:412](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L412)&nbsp;


___


### VerticalAlign
<div style="margin-left: 10px;">




• `static` **VerticalAlign**:
`VerticalTextAlignment`  = `VerticalTextAlignment`
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L413)&nbsp;


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


### stencilStage
<div style="margin-left: 10px;">




•  **stencilStage**:
`Stage`  = `Stage.DISABLED`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-component.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-component.ts#L92)&nbsp;


___


### cacheMode
<div style="margin-left: 10px;">




**`zh`** 
文本缓存模式, 该模式只支持系统字体。





•  **cacheMode**:
 ``CacheMode`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:307](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L307)&nbsp;   [cocos/2d/components/rich-text.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L310)&nbsp;


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


### font
<div style="margin-left: 10px;">




**`zh`** 
富文本定制字体。





•  **font**:
 ``null | TTFFont`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L247)&nbsp;   [cocos/2d/components/rich-text.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L250)&nbsp;


___


### fontFamily
<div style="margin-left: 10px;">




**`zh`** 
富文本定制系统字体





•  **fontFamily**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L228)&nbsp;   [cocos/2d/components/rich-text.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L231)&nbsp;


___


### fontSize
<div style="margin-left: 10px;">




**`zh`** 
富文本字体大小。





•  **fontSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L206)&nbsp;   [cocos/2d/components/rich-text.ts:210](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L210)&nbsp;


___


### handleTouchEvent
<div style="margin-left: 10px;">




**`zh`** 
选中此选项后，RichText 将阻止节点边界框中的所有输入事件（鼠标和触摸），从而防止输入事件穿透到底层节点。





•  **handleTouchEvent**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L394)&nbsp;   [cocos/2d/components/rich-text.ts:398](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L398)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### horizontalAlign
<div style="margin-left: 10px;">




**`zh`** 
文本内容的水平对齐方式。





•  **horizontalAlign**:
 ``HorizontalTextAlignment`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L184)&nbsp;   [cocos/2d/components/rich-text.ts:188](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L188)&nbsp;


___


### imageAtlas
<div style="margin-left: 10px;">




**`zh`** 
对于 img 标签里面的 src 属性名称，都需要在 imageAtlas 里面找到一个有效的 spriteFrame，否则 img tag 会判定为无效。





•  **imageAtlas**:
 ``null | SpriteAtlas`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:371](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L371)&nbsp;   [cocos/2d/components/rich-text.ts:375](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L375)&nbsp;


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


### lineHeight
<div style="margin-left: 10px;">




**`zh`** 
富文本行高。





•  **lineHeight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L348)&nbsp;   [cocos/2d/components/rich-text.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L352)&nbsp;


___


### maxWidth
<div style="margin-left: 10px;">




**`zh`** 
富文本的最大宽度。





•  **maxWidth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:326](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L326)&nbsp;   [cocos/2d/components/rich-text.ts:330](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L330)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### string
<div style="margin-left: 10px;">




**`zh`** 
富文本显示的文本内容。





•  **string**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L163)&nbsp;   [cocos/2d/components/rich-text.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L166)&nbsp;


___


### useSystemFont
<div style="margin-left: 10px;">




**`zh`** 
是否使用系统字体。





•  **useSystemFont**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L276)&nbsp;   [cocos/2d/components/rich-text.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L279)&nbsp;


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

• **new RichText**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:450](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L450)&nbsp;


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
### onDestroy
<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:501](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L501)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L473)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:464](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L464)&nbsp;
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

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:460](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L460)&nbsp;
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
### onRestore
<div style="margin-left: 10px;">

▸   **onRestore**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:486](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L486)&nbsp;
___
### postUpdateAssembler
<div style="margin-left: 10px;">

▸   **postUpdateAssembler**<`void`\>(`render: Batcher2D`) : `void`




**`zh`** 后置渲染数据组装程序，它会在所有子节点的渲染数据组装完成后被调用。
它可能会组装额外的渲染数据到顶点数据缓冲区，也可能只是重置一些渲染状态。
注意：不要手动调用该函数，除非你理解整个流程。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `render` | `Batcher2D` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-component.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-component.ts#L89)&nbsp;
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
### start
<div style="margin-left: 10px;">

▸   **start**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L481)&nbsp;
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
### updateAssembler
<div style="margin-left: 10px;">

▸   **updateAssembler**<`void`\>(`render: Batcher2D`) : `void`




**`zh`** 渲染数据组装程序，这个方法会在所有子节点数据组装之前更新并组装当前组件的渲染数据到 UI 的顶点数据缓冲区中。
一般在 UI 渲染流程中调用，用于组装所有的渲染数据到顶点数据缓冲区。
注意：不要手动调用该函数，除非你理解整个流程。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `render` | `Batcher2D` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-component.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-component.ts#L78)&nbsp;
___
<!---->




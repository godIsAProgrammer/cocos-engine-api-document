
## Class: Layout


`extend:`
[Component](docs/zh/component/Class/Component.md)












**`zh`** 
Layout 组件相当于一个容器，能自动对它的所有子节点进行统一排版。<br>
注意：<br>
1.不会考虑子节点的缩放和旋转。<br>
2.对 Layout 设置后结果需要到下一帧才会更新，除非你设置完以后手动调用。[[updateLayout]]



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  AxisDirection](#AxisDirection)
- [ **`static`**  Constraint](#Constraint)
- [ **`static`**  HorizontalDirection](#HorizontalDirection)
- [ **`static`**  ResizeMode](#ResizeMode)
- [ **`static`**  Type](#Type)
- [ **`static`**  VerticalDirection](#VerticalDirection)
- [ **`static`**  system](#system)
- [ node](#node)
- [ affectedByScale](#affectedByScale)
- [ alignHorizontal](#alignHorizontal)
- [ alignVertical](#alignVertical)
- [ cellSize](#cellSize)
- [ constraint](#constraint)
- [ constraintNum](#constraintNum)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ horizontalDirection](#horizontalDirection)
- [ isValid](#isValid)
- [ name](#name)
- [ padding](#padding)
- [ paddingBottom](#paddingBottom)
- [ paddingLeft](#paddingLeft)
- [ paddingRight](#paddingRight)
- [ paddingTop](#paddingTop)
- [ resizeMode](#resizeMode)
- [ spacingX](#spacingX)
- [ spacingY](#spacingY)
- [ startAxis](#startAxis)
- [ type](#type)
- [ uuid](#uuid)
- [ verticalDirection](#verticalDirection)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ updateLayout](#updateLayout)
</div>

## Properties


### AxisDirection
<div style="margin-left: 10px;">




• `static` **AxisDirection**:
`AxisDirection`  = `AxisDirection`
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:619](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L619)&nbsp;


___


### Constraint
<div style="margin-left: 10px;">




• `static` **Constraint**:
`Constraint`  = `Constraint`
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:620](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L620)&nbsp;


___


### HorizontalDirection
<div style="margin-left: 10px;">




• `static` **HorizontalDirection**:
`HorizontalDirection`  = `HorizontalDirection`
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:617](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L617)&nbsp;


___


### ResizeMode
<div style="margin-left: 10px;">




• `static` **ResizeMode**:
`ResizeMode`  = `ResizeMode`
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L618)&nbsp;


___


### Type
<div style="margin-left: 10px;">




• `static` **Type**:
`Type`  = `Type`
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:615](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L615)&nbsp;


___


### VerticalDirection
<div style="margin-left: 10px;">




• `static` **VerticalDirection**:
`VerticalDirection`  = `VerticalDirection`
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:616](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L616)&nbsp;


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


### affectedByScale
<div style="margin-left: 10px;">




**`zh`** 
子节点缩放比例是否影响布局。





•  **affectedByScale**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:606](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L606)&nbsp;   [cocos/ui/layout.ts:610](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L610)&nbsp;


___


### alignHorizontal
<div style="margin-left: 10px;">




**`zh`** 
横向对齐。在 Type 为 Horizontal 时按同个方向固定起始位置排列。





•  **alignHorizontal**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L231)&nbsp;   [cocos/ui/layout.ts:235](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L235)&nbsp;


___


### alignVertical
<div style="margin-left: 10px;">




**`zh`** 
纵向对齐。在 Type 为 Horizontal 或 Vertical 时按同个方向固定起始位置排列。





•  **alignVertical**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L255)&nbsp;   [cocos/ui/layout.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L259)&nbsp;


___


### cellSize
<div style="margin-left: 10px;">




**`zh`** 
每个格子的大小，只有布局类型为 GRID 的时候才有效。





•  **cellSize**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L324)&nbsp;   [cocos/ui/layout.ts:328](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L328)&nbsp;


___


### constraint
<div style="margin-left: 10px;">




**`zh`** 
容器内布局约束。





•  **constraint**:
 ``Constraint`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:557](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L557)&nbsp;   [cocos/ui/layout.ts:561](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L561)&nbsp;


___


### constraintNum
<div style="margin-left: 10px;">




**`zh`** 
容器内布局约束使用的限定值。





•  **constraintNum**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:581](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L581)&nbsp;   [cocos/ui/layout.ts:585](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L585)&nbsp;


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


### horizontalDirection
<div style="margin-left: 10px;">




**`zh`** 
水平排列子节点的方向。





•  **horizontalDirection**:
 ``HorizontalDirection`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:514](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L514)&nbsp;   [cocos/ui/layout.ts:518](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L518)&nbsp;


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


### padding
<div style="margin-left: 10px;">




**`zh`** 
容器内边距，该属性会在四个布局方向上生效。





•  **padding**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:534](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L534)&nbsp;   [cocos/ui/layout.ts:538](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L538)&nbsp;


___


### paddingBottom
<div style="margin-left: 10px;">




**`zh`** 
容器内下边距，只会在一个布局方向上生效。





•  **paddingBottom**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:427](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L427)&nbsp;   [cocos/ui/layout.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L430)&nbsp;


___


### paddingLeft
<div style="margin-left: 10px;">




**`zh`** 
容器内左边距，只会在一个布局方向上生效。





•  **paddingLeft**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:367](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L367)&nbsp;   [cocos/ui/layout.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L370)&nbsp;


___


### paddingRight
<div style="margin-left: 10px;">




**`zh`** 
容器内右边距，只会在一个布局方向上生效。





•  **paddingRight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L387)&nbsp;   [cocos/ui/layout.ts:390](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L390)&nbsp;


___


### paddingTop
<div style="margin-left: 10px;">




**`zh`** 
容器内上边距，只会在一个布局方向上生效。





•  **paddingTop**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:407](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L407)&nbsp;   [cocos/ui/layout.ts:410](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L410)&nbsp;


___


### resizeMode
<div style="margin-left: 10px;">




**`zh`** 
缩放模式。





•  **resizeMode**:
 ``ResizeMode`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:297](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L297)&nbsp;   [cocos/ui/layout.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L300)&nbsp;


___


### spacingX
<div style="margin-left: 10px;">




**`zh`** 
子节点之间的水平间距。





•  **spacingX**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L447)&nbsp;   [cocos/ui/layout.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L451)&nbsp;


___


### spacingY
<div style="margin-left: 10px;">




**`zh`** 
子节点之间的垂直间距。





•  **spacingY**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L468)&nbsp;   [cocos/ui/layout.ts:472](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L472)&nbsp;


___


### startAxis
<div style="margin-left: 10px;">




**`zh`** 
起始轴方向类型，可进行水平和垂直布局排列，只有布局类型为 GRID 的时候才有效。





•  **startAxis**:
 ``AxisDirection`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:347](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L347)&nbsp;   [cocos/ui/layout.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L351)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`zh`** 
布局类型。





•  **type**:
 ``Type`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:277](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L277)&nbsp;   [cocos/ui/layout.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L281)&nbsp;


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


### verticalDirection
<div style="margin-left: 10px;">




**`zh`** 
垂直排列子节点的方向。





•  **verticalDirection**:
 ``VerticalDirection`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L491)&nbsp;   [cocos/ui/layout.ts:495](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L495)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Layout**(`name: string`)

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
### updateLayout
<div style="margin-left: 10px;">

▸   **updateLayout**<`void`\>(`force: boolean`) : `void`




**`zh`** 
立即执行更新布局。





**`example`**

```ts


import { Layout, log } from 'cc';
layout.type = Layout.Type.HORIZONTAL;
layout.node.addChild(childNode);
log(childNode.x); // not yet changed
layout.updateLayout();
log(childNode.x); // changed


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:678](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L678)&nbsp;
___
<!---->




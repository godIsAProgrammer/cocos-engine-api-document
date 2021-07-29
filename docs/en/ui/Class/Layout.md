
## Class: Layout


`extend:`
[Component](docs/en/component/Class/Component.md)










**`en`** 
The Layout is a container component, use it to arrange child elements easily.<br>
Note：<br>
1.Scaling and rotation of child nodes are not considered.<br>
2.After setting the Layout, the results need to be updated until the next frame,unless you manually call.[[updateLayout]]



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


### affectedByScale
<div style="margin-left: 10px;">



**`en`** 
Adjust the layout if the children scaled.





•  **affectedByScale**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:606](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L606)&nbsp;   [cocos/ui/layout.ts:610](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L610)&nbsp;


___


### alignHorizontal
<div style="margin-left: 10px;">



**`en`** 
Alignment horizontal. Fixed starting position in the same direction when Type is Horizontal.





•  **alignHorizontal**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L231)&nbsp;   [cocos/ui/layout.ts:235](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L235)&nbsp;


___


### alignVertical
<div style="margin-left: 10px;">



**`en`** 
Alignment vertical. Fixed starting position in the same direction when Type is Vertical.





•  **alignVertical**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L255)&nbsp;   [cocos/ui/layout.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L259)&nbsp;


___


### cellSize
<div style="margin-left: 10px;">



**`en`** 
The cell size for grid layout.





•  **cellSize**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L324)&nbsp;   [cocos/ui/layout.ts:328](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L328)&nbsp;


___


### constraint
<div style="margin-left: 10px;">



**`en`** 
The layout constraint inside the container.





•  **constraint**:
 ``Constraint`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:557](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L557)&nbsp;   [cocos/ui/layout.ts:561](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L561)&nbsp;


___


### constraintNum
<div style="margin-left: 10px;">



**`en`** 
The limit value used by the layout constraint inside the container.





•  **constraintNum**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:581](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L581)&nbsp;   [cocos/ui/layout.ts:585](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L585)&nbsp;


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


### horizontalDirection
<div style="margin-left: 10px;">



**`en`** 
Only take effect in horizontal layout mode.
This option changes the start element's positioning.





•  **horizontalDirection**:
 ``HorizontalDirection`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:514](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L514)&nbsp;   [cocos/ui/layout.ts:518](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L518)&nbsp;


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


### padding
<div style="margin-left: 10px;">



**`en`** 
The padding of layout, it will effect the layout in horizontal and vertical direction.





•  **padding**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:534](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L534)&nbsp;   [cocos/ui/layout.ts:538](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L538)&nbsp;


___


### paddingBottom
<div style="margin-left: 10px;">



**`en`** 
The bottom padding of layout, it only effect the layout in one direction.





•  **paddingBottom**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:427](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L427)&nbsp;   [cocos/ui/layout.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L430)&nbsp;


___


### paddingLeft
<div style="margin-left: 10px;">



**`en`** 
The left padding of layout, it only effect the layout in one direction.





•  **paddingLeft**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:367](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L367)&nbsp;   [cocos/ui/layout.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L370)&nbsp;


___


### paddingRight
<div style="margin-left: 10px;">



**`en`** 
The right padding of layout, it only effect the layout in one direction.





•  **paddingRight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L387)&nbsp;   [cocos/ui/layout.ts:390](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L390)&nbsp;


___


### paddingTop
<div style="margin-left: 10px;">



**`en`** 
The top padding of layout, it only effect the layout in one direction.





•  **paddingTop**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:407](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L407)&nbsp;   [cocos/ui/layout.ts:410](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L410)&nbsp;


___


### resizeMode
<div style="margin-left: 10px;">



**`en`** 
The are three resize modes for Layout. None, resize Container and resize children.





•  **resizeMode**:
 ``ResizeMode`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:297](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L297)&nbsp;   [cocos/ui/layout.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L300)&nbsp;


___


### spacingX
<div style="margin-left: 10px;">



**`en`** 
The distance in x-axis between each element in layout.





•  **spacingX**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L447)&nbsp;   [cocos/ui/layout.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L451)&nbsp;


___


### spacingY
<div style="margin-left: 10px;">



**`en`** 
The distance in y-axis between each element in layout.





•  **spacingY**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L468)&nbsp;   [cocos/ui/layout.ts:472](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L472)&nbsp;


___


### startAxis
<div style="margin-left: 10px;">



**`en`** 
The start axis for grid layout. If you choose horizontal, then children will layout horizontally at first,
and then break line on demand. Choose vertical if you want to layout vertically at first .





•  **startAxis**:
 ``AxisDirection`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:347](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L347)&nbsp;   [cocos/ui/layout.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L351)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`en`** 
The layout type.





•  **type**:
 ``Type`` 
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:277](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L277)&nbsp;   [cocos/ui/layout.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L281)&nbsp;


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


### verticalDirection
<div style="margin-left: 10px;">



**`en`** 
Only take effect in Vertical layout mode.
This option changes the start element's positioning.





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
### updateLayout

<div style="margin-left: 10px;">

▸   **updateLayout**<`void`\>(`force: boolean`) : `void`



**`en`** 
Perform the layout update.




**`example`**

```ts


import { Layout, log } from 'cc';
layout.type = Layout.Type.HORIZONTAL;
layout.node.addChild(childNode);
log(childNode.x); // not yet changed
layout.updateLayout();
log(childNode.x); // changed


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `boolean` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/ui/layout.ts:678](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/layout.ts#L678)&nbsp;
___
<!---->




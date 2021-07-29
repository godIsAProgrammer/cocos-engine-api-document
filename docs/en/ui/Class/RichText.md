
## Class: RichText


`extend:`
[UIComponent](docs/en/ui/Class/UIComponent.md)












**`en`** 
The RichText Component.



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


### stencilStage
<div style="margin-left: 10px;">




•  **stencilStage**:
`Stage`  = `Stage.DISABLED`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-component.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-component.ts#L92)&nbsp;


___


### cacheMode
<div style="margin-left: 10px;">




**`en`** 
The cache mode of label. This mode only supports system fonts.





•  **cacheMode**:
 ``CacheMode`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:307](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L307)&nbsp;   [cocos/2d/components/rich-text.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L310)&nbsp;


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


### font
<div style="margin-left: 10px;">




**`en`** 
Custom System font of RichText.





•  **font**:
 ``null | TTFFont`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L247)&nbsp;   [cocos/2d/components/rich-text.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L250)&nbsp;


___


### fontFamily
<div style="margin-left: 10px;">




**`en`** 
Custom System font of RichText





•  **fontFamily**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L228)&nbsp;   [cocos/2d/components/rich-text.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L231)&nbsp;


___


### fontSize
<div style="margin-left: 10px;">




**`en`** 
Font size of RichText.





•  **fontSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L206)&nbsp;   [cocos/2d/components/rich-text.ts:210](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L210)&nbsp;


___


### handleTouchEvent
<div style="margin-left: 10px;">




**`en`** 
Once checked, the RichText will block all input events (mouse and touch) within
the bounding box of the node, preventing the input from penetrating into the underlying node.





•  **handleTouchEvent**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L394)&nbsp;   [cocos/2d/components/rich-text.ts:398](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L398)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### horizontalAlign
<div style="margin-left: 10px;">




**`en`** 
Horizontal Alignment of each line in RichText.





•  **horizontalAlign**:
 ``HorizontalTextAlignment`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L184)&nbsp;   [cocos/2d/components/rich-text.ts:188](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L188)&nbsp;


___


### imageAtlas
<div style="margin-left: 10px;">




**`en`** 
The image atlas for the img tag. For each src value in the img tag, there should be a valid spriteFrame in the image atlas.





•  **imageAtlas**:
 ``null | SpriteAtlas`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:371](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L371)&nbsp;   [cocos/2d/components/rich-text.ts:375](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L375)&nbsp;


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


### lineHeight
<div style="margin-left: 10px;">




**`en`** 
Line Height of RichText.





•  **lineHeight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L348)&nbsp;   [cocos/2d/components/rich-text.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L352)&nbsp;


___


### maxWidth
<div style="margin-left: 10px;">




**`en`** 
The maximize width of the RichText.





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




**`en`** 
Content string of RichText.





•  **string**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L163)&nbsp;   [cocos/2d/components/rich-text.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L166)&nbsp;


___


### useSystemFont
<div style="margin-left: 10px;">




**`en`** 
Whether use system font name or not.





•  **useSystemFont**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/rich-text.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L276)&nbsp;   [cocos/2d/components/rich-text.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/rich-text.ts#L279)&nbsp;


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




**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.




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




**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.




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




**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.




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




**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.




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




**`en`** Returns the component of supplied type in any of its children using depth first search.




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




**`en`** Returns the component of supplied type in any of its children using depth first search.




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




**`en`** Returns all components of supplied type in the node.




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




**`en`** Returns all components of supplied type in the node.




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




**`en`** Returns all components of supplied type in self or any of its children.




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




**`en`** Returns all components of supplied type in self or any of its children.




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




**`en`** Post render data submission procedure, it's executed after assembler updated for all children.
It may assemble some extra render data to the geometry buffers, or it may only change some render states.
Don't call it unless you know what you are doing.




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




**`en`** Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
This function is only called in editor.<br/>




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




**`en`** 
Schedules a custom task.<br/>
If the task is already scheduled, then the interval parameter will be updated without scheduling it again.




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




**`en`** Schedules a task that runs only once, with a delay of 0 or larger.




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




**`en`** Un-schedules a custom task.




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




**`en`** unschedule all scheduled tasks.




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




**`en`** Render data submission procedure, it update and assemble the render data to 2D data buffers before all children submission process.
Usually called each frame when the ui flow assemble all render data to geometry buffers.
Don't call it unless you know what you are doing.




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




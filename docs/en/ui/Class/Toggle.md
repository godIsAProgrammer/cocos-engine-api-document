
## Class: Toggle


`extend:`
[Button](docs/en/ui/Class/Button.md)










**`en`** 
The toggle component is a CheckBox, when it used together with a ToggleGroup,
it could be treated as a RadioButton.



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



**`en`** 
If Toggle is clicked, it will trigger event's handler.





•  **checkEvents**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L126)&nbsp;


___


### clickEvents
<div style="margin-left: 10px;">



**`en`** 
If Button is clicked, it will trigger event's handler.





•  **clickEvents**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:521](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L521)&nbsp;


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


### checkMark
<div style="margin-left: 10px;">



**`en`** 
The image used for the checkmark.





•  **checkMark**:
 ``null | Sprite`` 
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L88)&nbsp;   [cocos/ui/toggle.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L92)&nbsp;


___


### disabledColor
<div style="margin-left: 10px;">



**`en`** 
Disabled state color.





•  **disabledColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:354](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L354)&nbsp;   [cocos/ui/button.ts:358](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L358)&nbsp;


___


### disabledSprite
<div style="margin-left: 10px;">



**`en`** 
Disabled state sprite.





•  **disabledSprite**:
 ``null | SpriteFrame`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:495](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L495)&nbsp;   [cocos/ui/button.ts:499](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L499)&nbsp;


___


### duration
<div style="margin-left: 10px;">



**`en`** 
Color and Scale transition duration.





•  **duration**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:377](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L377)&nbsp;   [cocos/ui/button.ts:381](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L381)&nbsp;


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


### hoverColor
<div style="margin-left: 10px;">



**`en`** 
Hover state color.





•  **hoverColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:334](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L334)&nbsp;   [cocos/ui/button.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L338)&nbsp;


___


### hoverSprite
<div style="margin-left: 10px;">



**`en`** 
Hover state sprite.





•  **hoverSprite**:
 ``null | SpriteFrame`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L473)&nbsp;   [cocos/ui/button.ts:477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L477)&nbsp;


___


### interactable
<div style="margin-left: 10px;">



**`en`** 
Whether the Button is disabled.
If true, the Button will trigger event and do transition.





•  **interactable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:225](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L225)&nbsp;   [cocos/ui/button.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L229)&nbsp;


___


### isChecked
<div style="margin-left: 10px;">



**`en`** 
When this value is true, the check mark component will be enabled,
otherwise the check mark component will be disabled.





•  **isChecked**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/ui/toggle.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L70)&nbsp;   [cocos/ui/toggle.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/toggle.ts#L74)&nbsp;


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


### normalColor
<div style="margin-left: 10px;">



**`en`** 
Normal state color.





•  **normalColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:291](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L291)&nbsp;   [cocos/ui/button.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L295)&nbsp;


___


### normalSprite
<div style="margin-left: 10px;">



**`en`** 
Normal state sprite.





•  **normalSprite**:
 ``null | SpriteFrame`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:424](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L424)&nbsp;   [cocos/ui/button.ts:428](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L428)&nbsp;


___


### pressedColor
<div style="margin-left: 10px;">



**`en`** 
Pressed state color.





•  **pressedColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:313](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L313)&nbsp;   [cocos/ui/button.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L317)&nbsp;


___


### pressedSprite
<div style="margin-left: 10px;">



**`en`** 
Pressed state sprite.





•  **pressedSprite**:
 ``null | SpriteFrame`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L451)&nbsp;   [cocos/ui/button.ts:455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L455)&nbsp;


___


### target
<div style="margin-left: 10px;">



**`en`** 
Transition target.<br/>
When Button state changed:
- Button.Transition.NONE   // Button will do nothing
- Button.Transition.COLOR  // Button will change target's color
- Button.Transition.SPRITE // Button will change target Sprite's sprite
- Button.Transition.SCALE  // Button will change target node's scale





•  **target**:
 ``Node`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L199)&nbsp;   [cocos/ui/button.ts:203](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L203)&nbsp;


___


### transition
<div style="margin-left: 10px;">



**`en`** 
Transition type.





•  **transition**:
 ``Transition`` 
</div>

##### Defined in &nbsp;   [cocos/ui/button.ts:261](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L261)&nbsp;   [cocos/ui/button.ts:265](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L265)&nbsp;


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


### zoomScale
<div style="margin-left: 10px;">



**`en`** 
When user press the button, the button will zoom to a scale.
The final scale of the button equals (button original scale * zoomScale)
NOTE: Setting zoomScale less than 1 is not adviced, which could fire the touchCancel event if the touch point is out of touch area after scaling.
if you need to do so, you should set target as another background node instead of the button node.





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
### setIsCheckedWithoutNotify

<div style="margin-left: 10px;">

▸   **setIsCheckedWithoutNotify**<`void`\>(`value: boolean`) : `void`



**`en`** 
Set isChecked without invoking checkEvents.




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

##### Defined in &nbsp;   [cocos/ui/button.ts:604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/ui/button.ts#L604)&nbsp;
___
<!---->




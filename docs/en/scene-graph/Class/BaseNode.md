
## Class: BaseNode


`extend:`
[CCObject](docs/en/core-data/Class/CCObject.md)










**`en`** The base class for [[Node]], it:
- maintains scene hierarchy and life cycle logic
- provides EventTarget ability
- emits events if some properties changed, ref: [[SystemEventType]]
- manages components


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ active](#active)
- [ activeInHierarchy](#activeInHierarchy)
- [ children](#children)
- [ components](#components)
- [ eventProcessor](#eventProcessor)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ parent](#parent)
- [ scene](#scene)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addChild](#addChild)
- [ addComponent](#addComponent)
- [ attr](#attr)
- [ destroy](#destroy)
- [ destroyAllChildren](#destroyAllChildren)
- [ dispatchEvent](#dispatchEvent)
- [ emit](#emit)
- [ getChildByName](#getChildByName)
- [ getChildByPath](#getChildByPath)
- [ getChildByUuid](#getChildByUuid)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getParent](#getParent)
- [ getSiblingIndex](#getSiblingIndex)
- [ hasEventListener](#hasEventListener)
- [ insertChild](#insertChild)
- [ isChildOf](#isChildOf)
- [ off](#off)
- [ on](#on)
- [ once](#once)
- [ removeAllChildren](#removeAllChildren)
- [ removeChild](#removeChild)
- [ removeComponent](#removeComponent)
- [ removeFromParent](#removeFromParent)
- [ setParent](#setParent)
- [ setSiblingIndex](#setSiblingIndex)
- [ targetOff](#targetOff)
- [ walk](#walk)
</div>

## Properties


### active
<div style="margin-left: 10px;">



**`en`** 
The local active state of this node.
Note that a Node may be inactive because a parent is not active, even if this returns true.
Use [[activeInHierarchy]]
if you want to check if the Node is actually treated as active in the scene.



**`default`** true





•  **active**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L163)&nbsp;   [cocos/core/scene-graph/base-node.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L166)&nbsp;


___


### activeInHierarchy
<div style="margin-left: 10px;">



**`en`** Indicates whether this node is active in the scene.




•  **activeInHierarchy**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L184)&nbsp;


___


### children
<div style="margin-left: 10px;">



**`en`** All children nodes.



**`readonly`** 





•  **children**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L146)&nbsp;


___


### components
<div style="margin-left: 10px;">



**`en`** Gets all components attached to this node.




•  **components**:
 ``ReadonlyArray`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L89)&nbsp;


___


### eventProcessor
<div style="margin-left: 10px;">



**`en`** The event processor of the current node, it provides EventTarget ability.



**`readonly`** 





•  **eventProcessor**:
 ``any`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L214)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


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



**`en`** Name of node.




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L120)&nbsp;   [cocos/core/scene-graph/base-node.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L123)&nbsp;


___


### parent
<div style="margin-left: 10px;">



**`en`** The parent node




•  **parent**:
 ``null | this`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L193)&nbsp;   [cocos/core/scene-graph/base-node.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L196)&nbsp;


___


### scene
<div style="margin-left: 10px;">



**`en`** Which scene this node belongs to.



**`readonly`** 





•  **scene**:
 ``Scene`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:205](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L205)&nbsp;


___


### uuid
<div style="margin-left: 10px;">



**`en`** The uuid for editor, will be stripped after building project.



**`readonly`** 





•  **uuid**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L136)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new BaseNode**(`name: undefined | string`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L370)&nbsp;


---

<!---->
## Methods

### addChild

<div style="margin-left: 10px;">

▸   **addChild**<`void`\>(`child: this | Node`) : `void`



**`en`** Add a child to the current node.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `child` | `this \| Node` | the child node to be added  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:539](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L539)&nbsp;
___
### addComponent

<div style="margin-left: 10px;">

▸   **addComponent**<`T`\>(`classConstructor: Constructor`) : `T`



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



**`throws`** `TypeError` if the `classConstructor` does not specify a cc-class constructor extending the `Component`.



**`example`**

```ts


var sprite = node.addComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the component to add  |


##### Returns `T`

▸   **addComponent**<`Component`\>(`className: string`) : `Component`



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



**`throws`** `TypeError` if the `className` does not specify a cc-class constructor extending the `Component`.



**`example`**

```ts


var test = node.addComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the component to add  |


##### Returns `Component`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:898](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L898)&nbsp;   [cocos/core/scene-graph/base-node.ts:910](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L910)&nbsp;   [cocos/core/scene-graph/base-node.ts:912](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L912)&nbsp;
___
### attr

<div style="margin-left: 10px;">

▸   **attr**<`void`\>(`attrs: unknown`) : `void`



**`en`** 
Properties configuration function.
All properties in attrs will be set to the node,
when the setter of the node is available,
the property will be set via setter function.



**`example`**

```ts


var attrs = { name: 'New Name', active: false };
node.attr(attrs);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `attrs` | `unknown` | Properties to be set to node  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L391)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1187)&nbsp;
___
### destroyAllChildren

<div style="margin-left: 10px;">

▸   **destroyAllChildren**<`void`\> : `void`



**`en`** 
Destroy all children from the node, and release all their own references to other objects.
Actual destruct operation will delayed until before rendering.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1204)&nbsp;
___
### dispatchEvent

<div style="margin-left: 10px;">

▸   **dispatchEvent**<`void`\>(`event: Event`) : `void`



**`en`** 
Dispatches an event into the event flow.
The event target is the EventTarget object upon which the dispatchEvent() method is called.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `event` | `Event` | The Event object that is dispatched into the event flow  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1157)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: string, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`



**`en`** 
Trigger an event directly with the event name and necessary arguments.



**`example`**

```ts


eventTarget.emit('fire', event);
eventTarget.emit('fire', message, emitter);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | event type  |
| `arg0` | `any` | - |
| `arg1` | `any` | First argument in callback  |
| `arg2` | `any` | Second argument in callback  |
| `arg3` | `any` | Third argument in callback  |
| `arg4` | `any` | Fourth argument in callback  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1146)&nbsp;
___
### getChildByName

<div style="margin-left: 10px;">

▸   **getChildByName**(`name: string`)



**`en`** Returns a child with the same name.



**`example`**

```ts


var child = node.getChildByName("Test Node");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | A name to find the child node.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L491)&nbsp;
___
### getChildByPath

<div style="margin-left: 10px;">

▸   **getChildByPath**(`path: string`)



**`en`** Returns a child with the given path.



**`example`**

```ts


var child = node.getChildByPath("subNode/Test Node");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `path` | `string` | A path to find the child node.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:516](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L516)&nbsp;
___
### getChildByUuid

<div style="margin-left: 10px;">

▸   **getChildByUuid**(`uuid: string`)



**`en`** Returns a child with the same uuid.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | The uuid to find the child node.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:466](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L466)&nbsp;
___
### getComponent

<div style="margin-left: 10px;">

▸   **getComponent**(`classConstructor: Constructor`)



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.
You can also get component in the node by passing in the name of the script.



**`example`**

```ts


// get sprite component.
var sprite = node.getComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the target component  |


##### Returns `void`

▸   **getComponent**(`className: string`)



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.
You can also get component in the node by passing in the name of the script.



**`example`**

```ts


// get custom test class.
var test = node.getComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the target component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:777](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L777)&nbsp;   [cocos/core/scene-graph/base-node.ts:793](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L793)&nbsp;   [cocos/core/scene-graph/base-node.ts:795](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L795)&nbsp;
___
### getComponentInChildren

<div style="margin-left: 10px;">

▸   **getComponentInChildren**(`classConstructor: Constructor`)



**`en`** Returns the component of given type in any of its children using depth first search.



**`example`**

```ts


var sprite = node.getComponentInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the target component  |


##### Returns `void`

▸   **getComponentInChildren**(`className: string`)



**`en`** Returns the component of given type in any of its children using depth first search.



**`example`**

```ts


var Test = node.getComponentInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the target component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:835](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L835)&nbsp;   [cocos/core/scene-graph/base-node.ts:846](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L846)&nbsp;   [cocos/core/scene-graph/base-node.ts:848](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L848)&nbsp;
___
### getComponents

<div style="margin-left: 10px;">

▸   **getComponents**(`classConstructor: Constructor`)



**`en`** Returns all components of given type in the node.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the target component  |


##### Returns `void`

▸   **getComponents**(`className: string`)



**`en`** Returns all components of given type in the node.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the target component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:808](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L808)&nbsp;   [cocos/core/scene-graph/base-node.ts:815](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L815)&nbsp;   [cocos/core/scene-graph/base-node.ts:817](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L817)&nbsp;
___
### getComponentsInChildren

<div style="margin-left: 10px;">

▸   **getComponentsInChildren**(`classConstructor: Constructor`)



**`en`** Returns all components of given type in self or any of its children.



**`example`**

```ts


var sprites = node.getComponentsInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the target component  |


##### Returns `void`

▸   **getComponentsInChildren**(`className: string`)



**`en`** Returns all components of given type in self or any of its children.



**`example`**

```ts


var tests = node.getComponentsInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | The class name of the target component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:865](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L865)&nbsp;   [cocos/core/scene-graph/base-node.ts:876](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L876)&nbsp;   [cocos/core/scene-graph/base-node.ts:878](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L878)&nbsp;
___
### getParent

<div style="margin-left: 10px;">

▸   **getParent**



**`en`** Get parent of the node.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L401)&nbsp;
___
### getSiblingIndex

<div style="margin-left: 10px;">

▸   **getSiblingIndex**<`number`\> : `number`



**`en`** Get the sibling index of the current node in its parent's children array.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:562](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L562)&nbsp;
___
### hasEventListener

<div style="margin-left: 10px;">

▸   **hasEventListener**<`any`\>(`type: string, callback: AnyFunction, target: unknown`) : `any`



**`en`** Checks whether the EventTarget object has any callback registered for a specific type of event.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | The type of event.  |
| `callback` | `AnyFunction` | The callback function of the event listener, if absent all event listeners for the given type will be removed  |
| `target` | `unknown` | The callback callee of the event listener  |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1169)&nbsp;
___
### insertChild

<div style="margin-left: 10px;">

▸   **insertChild**<`void`\>(`child: this | Node, siblingIndex: number`) : `void`



**`en`** Inserts a child to the node at a specified index.



**`example`**

```ts


node.insertChild(child, 2);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `child` | `this \| Node` | the child node to be inserted  |
| `siblingIndex` | `number` | the sibling index to place the child in  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:553](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L553)&nbsp;
___
### isChildOf

<div style="margin-left: 10px;">

▸   **isChildOf**<`boolean`\>(`parent: this | Scene | null`) : `boolean`



**`en`** Is this node a child of the given node?



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `parent` | `this \| Scene \| null` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:748](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L748)&nbsp;
___
### off

<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: string, callback: AnyFunction, target: unknown, useCapture: any`) : `void`



**`en`** 
Removes the callback previously registered with the same type, callback, target and or useCapture.
This method is merely an alias to removeEventListener.



**`example`**

```ts


this.node.off(SystemEventType.TOUCH_START, this.memberFunction, this);
node.off(SystemEventType.TOUCH_START, callback, this.node);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type being removed.  |
| `callback` | `AnyFunction` | The callback to remove.  |
| `target` | `unknown` | The target (this object) to invoke the callback, if it's not given, only callback without target will be removed  |
| `useCapture` | `any` | When set to true, the listener will be triggered at capturing phase which is ahead of the final target emit, otherwise it will be triggered during bubbling phase.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1097](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1097)&nbsp;
___
### on

<div style="margin-left: 10px;">

▸   **on**<`void`\>(`type: string | SystemEventType, callback: AnyFunction, target: unknown, useCapture: any`) : `void`



**`en`** 
Register a callback of a specific event type on Node.
Use this method to register touch or mouse event permit propagation based on scene graph,
These kinds of event are triggered with dispatchEvent, the dispatch process has three steps:
1. Capturing phase: dispatch in capture targets (`_getCapturingTargets`), e.g. parents in node tree, from root to the real target
2. At target phase: dispatch to the listeners of the real target
3. Bubbling phase: dispatch in bubble targets (`_getBubblingTargets`), e.g. parents in node tree, from the real target to root
In any moment of the dispatching process, it can be stopped via `event.stopPropagation()` or `event.stopPropagationImmediate()`.
It's the recommended way to register touch/mouse event for Node,
please do not use `eventManager` directly for Node.
You can also register custom event and use `emit` to trigger custom event on Node.
For such events, there won't be capturing and bubbling phase, your event will be dispatched directly to its listeners registered on the same node.
You can also pass event callback parameters with `emit` by passing parameters after `type`.



**`example`**

```ts


this.node.on(SystemEventType.TOUCH_START, this.memberFunction, this);  // if "this" is component and the "memberFunction" declared in CCClass.
node.on(SystemEventType.TOUCH_START, callback, this);
node.on(SystemEventType.TOUCH_MOVE, callback, this);
node.on(SystemEventType.TOUCH_END, callback, this);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string \| SystemEventType` | A string representing the event type to listen for.<br>See {{#crossLink "Node/EventType/POSITION_CHANGED"}}Node Events{{/crossLink}} for all builtin events.  |
| `callback` | `AnyFunction` | The callback that will be invoked when the event is dispatched. The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `target` | `unknown` | The target (this object) to invoke the callback, can be null  |
| `useCapture` | `any` | When set to true, the listener will be triggered at capturing phase which is ahead of the final target emit, otherwise it will be triggered during bubbling phase.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1071](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1071)&nbsp;
___
### once

<div style="margin-left: 10px;">

▸   **once**<`void`\>(`type: string, callback: AnyFunction, target: unknown, useCapture: any`) : `void`



**`en`** 
Register an callback of a specific event type on the Node,
the callback will remove itself after the first time it is triggered.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type to listen for.  |
| `callback` | `AnyFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `target` | `unknown` | The target (this object) to invoke the callback, can be null  |
| `useCapture` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1125)&nbsp;
___
### removeAllChildren

<div style="margin-left: 10px;">

▸   **removeAllChildren**<`void`\> : `void`



**`en`** Removes all children from the container.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:731](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L731)&nbsp;
___
### removeChild

<div style="margin-left: 10px;">

▸   **removeChild**<`void`\>(`child: this | Node`) : `void`



**`en`** Removes a child from the container.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `child` | `this \| Node` | The child node which will be removed.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:720](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L720)&nbsp;
___
### removeComponent

<div style="margin-left: 10px;">

▸   **removeComponent**<`void`\>(`classConstructor: Constructor`) : `void`



**`en`** 
Removes a component identified by the given name or removes the component object given.
You can also use component.destroy() if you already have the reference.



**`deprecated`** please destroy the component to remove it.



**`example`**

```ts


node.removeComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the component to remove  |


##### Returns `void`

▸   **removeComponent**<`void`\>(`classNameOrInstance: string | Component`) : `void`



**`en`** 
Removes a component identified by the given name or removes the component object given.
You can also use component.destroy() if you already have the reference.



**`deprecated`** please destroy the component to remove it.



**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.getComponent(Sprite);
if (sprite) {
    node.removeComponent(sprite);
}
node.removeComponent('Sprite');


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classNameOrInstance` | `string \| Component` | The class name of the component to remove or the component instance to be removed  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:993](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L993)&nbsp;   [cocos/core/scene-graph/base-node.ts:1014](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1014)&nbsp;   [cocos/core/scene-graph/base-node.ts:1016](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1016)&nbsp;
___
### removeFromParent

<div style="margin-left: 10px;">

▸   **removeFromParent**<`void`\> : `void`



**`en`** 
Remove itself from its parent node.
If the node have no parent, then nothing happens.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:709](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L709)&nbsp;
___
### setParent

<div style="margin-left: 10px;">

▸   **setParent**<`void`\>(`value: this | Scene | null, keepWorldTransform: boolean`) : `void`



**`en`** Set parent of the node.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `this \| Scene \| null` | - |
| `keepWorldTransform` | `boolean` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:409](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L409)&nbsp;
___
### setSiblingIndex

<div style="margin-left: 10px;">

▸   **setSiblingIndex**<`void`\>(`index: number`) : `void`



**`en`** Set the sibling index of the current node in its parent's children array.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:570](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L570)&nbsp;
___
### targetOff

<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`target: string | unknown`) : `void`



**`en`** Removes all callbacks previously registered with the same target.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `string \| unknown` | The target to be searched for all related callbacks  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1179)&nbsp;
___
### walk

<div style="margin-left: 10px;">

▸   **walk**<`void`\>(`preFunc: undefined, postFunc: undefined | `) : `void`



**`en`** Walk though the sub children tree of the current node.
Each node, including the current node, in the sub tree will be visited two times,
before all children and after all children.
This function call is not recursive, it's based on stack.
Please don't walk any other node inside the walk process.



**`example`**

```ts


node.walk(function (target) {
    console.log('Walked through node ' + target.name + ' for the first time');
}, function (target) {
    console.log('Walked through node ' + target.name + ' after walked all children in its sub tree');
});


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `preFunc` |  | The callback to process node when reach the node for the first time  |
| `postFunc` | `undefined \| ` | The callback to process node when re-visit the node after walked all children in its sub tree  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:616](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L616)&nbsp;
___
<!---->




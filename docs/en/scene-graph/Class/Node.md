
## Class: Node


`extend:`
[BaseNode](docs/en/scene-graph/Class/BaseNode.md)












**`en`** 
Class of all entities in Cocos Creator scenes.
Basic functionalities include:
* Hierarchy management with parent and children
* Components management
* Coordinate system with position, scale, rotation in 3d space


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  EventType](#EventType)
- [ **`static`**  NodeSpace](#NodeSpace)
- [ **`static`**  TransformBit](#TransformBit)
- [ **`static`**  TransformDirtyBit](#TransformDirtyBit)
- [ **`static`**  bookOfChange](#bookOfChange)
- [ active](#active)
- [ activeInHierarchy](#activeInHierarchy)
- [ angle](#angle)
- [ children](#children)
- [ components](#components)
- [ eulerAngles](#eulerAngles)
- [ eventProcessor](#eventProcessor)
- [ forward](#forward)
- [ handle](#handle)
- [ hasChangedFlags](#hasChangedFlags)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ layer](#layer)
- [ matrix](#matrix)
- [ name](#name)
- [ parent](#parent)
- [ position](#position)
- [ rotation](#rotation)
- [ scale](#scale)
- [ scene](#scene)
- [ uuid](#uuid)
- [ worldMatrix](#worldMatrix)
- [ worldPosition](#worldPosition)
- [ worldRotation](#worldRotation)
- [ worldScale](#worldScale)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  isNode](#isNode)
- [ **`static`**  clearBooks](#clearBooks)
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
- [ getPosition](#getPosition)
- [ getRotation](#getRotation)
- [ getScale](#getScale)
- [ getSiblingIndex](#getSiblingIndex)
- [ getWorldMatrix](#getWorldMatrix)
- [ getWorldPosition](#getWorldPosition)
- [ getWorldRS](#getWorldRS)
- [ getWorldRT](#getWorldRT)
- [ getWorldRotation](#getWorldRotation)
- [ getWorldScale](#getWorldScale)
- [ hasEventListener](#hasEventListener)
- [ insertChild](#insertChild)
- [ invalidateChildren](#invalidateChildren)
- [ inverseTransformPoint](#inverseTransformPoint)
- [ isChildOf](#isChildOf)
- [ lookAt](#lookAt)
- [ off](#off)
- [ on](#on)
- [ once](#once)
- [ pauseSystemEvents](#pauseSystemEvents)
- [ removeAllChildren](#removeAllChildren)
- [ removeChild](#removeChild)
- [ removeComponent](#removeComponent)
- [ removeFromParent](#removeFromParent)
- [ resumeSystemEvents](#resumeSystemEvents)
- [ rotate](#rotate)
- [ setParent](#setParent)
- [ setPosition](#setPosition)
- [ setRTS](#setRTS)
- [ setRotation](#setRotation)
- [ setRotationFromEuler](#setRotationFromEuler)
- [ setScale](#setScale)
- [ setSiblingIndex](#setSiblingIndex)
- [ setWorldPosition](#setWorldPosition)
- [ setWorldRotation](#setWorldRotation)
- [ setWorldRotationFromEuler](#setWorldRotationFromEuler)
- [ setWorldScale](#setWorldScale)
- [ syncFromNativeTransform](#syncFromNativeTransform)
- [ syncToNativeTransform](#syncToNativeTransform)
- [ targetOff](#targetOff)
- [ translate](#translate)
- [ updateWorldTransform](#updateWorldTransform)
- [ walk](#walk)
</div>

## Properties


### EventType
<div style="margin-left: 10px;">




**`en`** Event types emitted by Node




• `static` **EventType**:
`SystemEventType`  = `SystemEventType`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L92)&nbsp;


___


### NodeSpace
<div style="margin-left: 10px;">




**`en`** Coordinates space




• `static` **NodeSpace**:
`NodeSpace`  = `NodeSpace`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L98)&nbsp;


___


### TransformBit
<div style="margin-left: 10px;">




**`en`** Bit masks for Node transformation parts, can be used to determine which part changed in [[SystemEventType.TRANSFORM_CHANGED]] event




• `static` **TransformBit**:
`TransformBit`  = `TransformBit`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L111)&nbsp;


___


### TransformDirtyBit
<div style="margin-left: 10px;">




**`en`** Bit masks for Node transformation parts




**`deprecated`** please use [[Node.TransformBit]]





• `static` **TransformDirtyBit**:
`TransformBit`  = `TransformBit`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L105)&nbsp;


___


### bookOfChange
<div style="margin-left: 10px;">




• `static` **bookOfChange**:
`Map`  = `bookOfChange`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L86)&nbsp;


___


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


### angle
<div style="margin-left: 10px;">




**`en`** Rotation in local coordinate system, represented by euler angles, but limited on z axis




•  **angle**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:238](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L238)&nbsp;   [cocos/core/scene-graph/node.ts:242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L242)&nbsp;


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


### eulerAngles
<div style="margin-left: 10px;">




**`en`** Rotation in local coordinate system, represented by euler angles




•  **eulerAngles**:
 `` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L221)&nbsp;   [cocos/core/scene-graph/node.ts:225](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L225)&nbsp;


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


### forward
<div style="margin-left: 10px;">




**`en`** The vector representing forward direction in local coordinate system, it's the minus z direction by default




•  **forward**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:321](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L321)&nbsp;   [cocos/core/scene-graph/node.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L325)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``NodeHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L172)&nbsp;


___


### hasChangedFlags
<div style="margin-left: 10px;">




**`en`** Whether the node's transformation have changed during the current frame.




•  **hasChangedFlags**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L351)&nbsp;   [cocos/core/scene-graph/node.ts:355](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L355)&nbsp;


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


### layer
<div style="margin-left: 10px;">




**`en`** Layer of the current Node, it affects raycast, physics etc, refer to [[Layers]]




•  **layer**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:337](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L337)&nbsp;   [cocos/core/scene-graph/node.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L343)&nbsp;


___


### matrix
<div style="margin-left: 10px;">




**`en`** Local transformation matrix




•  **matrix**:
 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L298)&nbsp;


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


### position
<div style="margin-left: 10px;">




**`en`** Position in local coordinate system




•  **position**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L181)&nbsp;   [cocos/core/scene-graph/node.ts:185](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L185)&nbsp;


___


### rotation
<div style="margin-left: 10px;">




**`en`** Rotation in local coordinate system, represented by a quaternion




•  **rotation**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L208)&nbsp;   [cocos/core/scene-graph/node.ts:212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L212)&nbsp;


___


### scale
<div style="margin-left: 10px;">




**`en`** Scale in local coordinate system




•  **scale**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L272)&nbsp;   [cocos/core/scene-graph/node.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L276)&nbsp;


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


### worldMatrix
<div style="margin-left: 10px;">




**`en`** World transformation matrix




•  **worldMatrix**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:312](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L312)&nbsp;


___


### worldPosition
<div style="margin-left: 10px;">




**`en`** Position in world coordinate system




•  **worldPosition**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L194)&nbsp;   [cocos/core/scene-graph/node.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L199)&nbsp;


___


### worldRotation
<div style="margin-left: 10px;">




**`en`** Rotation in world coordinate system, represented by a quaternion




•  **worldRotation**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:258](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L258)&nbsp;   [cocos/core/scene-graph/node.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L263)&nbsp;


___


### worldScale
<div style="margin-left: 10px;">




**`en`** Scale in world coordinate system




•  **worldScale**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L285)&nbsp;   [cocos/core/scene-graph/node.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L290)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Node**(`name: undefined | string`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `name` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L148)&nbsp;


---

<!---->
## Methods

### isNode
<div style="margin-left: 10px;">

▸ `static`  **isNode**<`obj`\>(`obj: unknown`) : `obj`




**`en`** Determine whether the given object is a normal Node. Will return false if [[Scene]] given.




<!---->
<!--    #### Returns `obj` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `obj` | `unknown` | - |



##### Returns `obj`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L160)&nbsp;
___
### clearBooks
<div style="margin-left: 10px;">

▸ `static`  **clearBooks**<`void`\> : `void`




**`en`** 
clear all node dirty state.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1114)&nbsp;
___
### addChild
<div style="margin-left: 10px;">

▸   **addChild**<`void`\>(`child: this | Node`) : `void`




**`en`** Add a child to the current node.




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `T` -->
<!---->

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




<!---->
<!--    #### Returns `Component` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L164)&nbsp;
___
### destroyAllChildren
<div style="margin-left: 10px;">

▸   **destroyAllChildren**<`void`\> : `void`




**`en`** 
Destroy all children from the node, and release all their own references to other objects.
Actual destruct operation will delayed until before rendering.




<!---->
<!--    #### Returns `void` -->
<!---->


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




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | event type  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg0` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg1` | `any` | First argument in callback  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg2` | `any` | Second argument in callback  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg3` | `any` | Third argument in callback  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of the target component  |



##### Returns `void`


▸   **getComponents**(`className: string`)




**`en`** Returns all components of given type in the node.




<!---->

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




<!---->

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




<!---->

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




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L401)&nbsp;
___
### getPosition
<div style="margin-left: 10px;">

▸   **getPosition**<`Vec3`\>(`out: Vec3`) : `Vec3`




**`en`** Get position in local coordinate system, please try to pass `out` vector and reuse it to avoid garbage.




<!---->
<!--    #### Returns `Vec3` If &#x60;out&#x60; given, the return value equals to &#x60;out&#x60;, otherwise a new vector will be generated and return
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | Set the result to out vector  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:661](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L661)&nbsp;
___
### getRotation
<div style="margin-left: 10px;">

▸   **getRotation**<`Quat`\>(`out: Quat`) : `Quat`




**`en`** Get rotation as quaternion in local coordinate system, please try to pass `out` quaternion and reuse it to avoid garbage.




<!---->
<!--    #### Returns `Quat` If &#x60;out&#x60; given, the return value equals to &#x60;out&#x60;, otherwise a new quaternion will be generated and return
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Quat` | Set the result to out quaternion  |



##### Returns `Quat`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:740](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L740)&nbsp;
___
### getScale
<div style="margin-left: 10px;">

▸   **getScale**<`Vec3`\>(`out: Vec3`) : `Vec3`




**`en`** Get scale in local coordinate system, please try to pass `out` vector and reuse it to avoid garbage.




<!---->
<!--    #### Returns `Vec3` If &#x60;out&#x60; given, the return value equals to &#x60;out&#x60;, otherwise a new vector will be generated and return
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | Set the result to out vector  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:784](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L784)&nbsp;
___
### getSiblingIndex
<div style="margin-left: 10px;">

▸   **getSiblingIndex**<`number`\> : `number`




**`en`** Get the sibling index of the current node in its parent's children array.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:562](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L562)&nbsp;
___
### getWorldMatrix
<div style="margin-left: 10px;">

▸   **getWorldMatrix**<`Mat4`\>(`out: Mat4`) : `Mat4`




**`en`** Get a world transform matrix




<!---->
<!--    #### Returns `Mat4` If &#x60;out&#x60; given, the return value equals to &#x60;out&#x60;, otherwise a new matrix will be generated and return
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Mat4` | Set the result to out matrix  |



##### Returns `Mat4`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1011](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1011)&nbsp;
___
### getWorldPosition
<div style="margin-left: 10px;">

▸   **getWorldPosition**<`Vec3`\>(`out: Vec3`) : `Vec3`




**`en`** Get position in world coordinate system, please try to pass `out` vector and reuse it to avoid garbage.




<!---->
<!--    #### Returns `Vec3` If &#x60;out&#x60; given, the return value equals to &#x60;out&#x60;, otherwise a new vector will be generated and return
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | Set the result to out vector  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:863](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L863)&nbsp;
___
### getWorldRS
<div style="margin-left: 10px;">

▸   **getWorldRS**<`Mat4`\>(`out: Mat4`) : `Mat4`




**`en`** Get a world transform matrix with only rotation and scale




<!---->
<!--    #### Returns `Mat4` If &#x60;out&#x60; given, the return value equals to &#x60;out&#x60;, otherwise a new matrix will be generated and return
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Mat4` | Set the result to out matrix  |



##### Returns `Mat4`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1023](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1023)&nbsp;
___
### getWorldRT
<div style="margin-left: 10px;">

▸   **getWorldRT**<`Mat4`\>(`out: Mat4`) : `Mat4`




**`en`** Get a world transform matrix with only rotation and translation




<!---->
<!--    #### Returns `Mat4` If &#x60;out&#x60; given, the return value equals to &#x60;out&#x60;, otherwise a new matrix will be generated and return
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Mat4` | Set the result to out matrix  |



##### Returns `Mat4`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1037](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1037)&nbsp;
___
### getWorldRotation
<div style="margin-left: 10px;">

▸   **getWorldRotation**<`Quat`\>(`out: Quat`) : `Quat`




**`en`** Get rotation as quaternion in world coordinate system, please try to pass `out` quaternion and reuse it to avoid garbage.




<!---->
<!--    #### Returns `Quat` If &#x60;out&#x60; given, the return value equals to &#x60;out&#x60;, otherwise a new quaternion will be generated and return
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Quat` | Set the result to out quaternion  |



##### Returns `Quat`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:938](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L938)&nbsp;
___
### getWorldScale
<div style="margin-left: 10px;">

▸   **getWorldScale**<`Vec3`\>(`out: Vec3`) : `Vec3`




**`en`** Get scale in world coordinate system, please try to pass `out` vector and reuse it to avoid garbage.




<!---->
<!--    #### Returns `Vec3` If &#x60;out&#x60; given, the return value equals to &#x60;out&#x60;, otherwise a new vector will be generated and return
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | Set the result to out vector  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:997](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L997)&nbsp;
___
### hasEventListener
<div style="margin-left: 10px;">

▸   **hasEventListener**<`any`\>(`type: string, callback: AnyFunction, target: unknown`) : `any`




**`en`** Checks whether the EventTarget object has any callback registered for a specific type of event.




<!---->
<!--    #### Returns `any` True if a callback of the specified type is registered; false otherwise.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | The type of event.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `AnyFunction` | The callback function of the event listener, if absent all event listeners for the given type will be removed  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `child` | `this \| Node` | the child node to be inserted  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `siblingIndex` | `number` | the sibling index to place the child in  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:553](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L553)&nbsp;
___
### invalidateChildren
<div style="margin-left: 10px;">

▸   **invalidateChildren**<`void`\>(`dirtyBit: TransformBit`) : `void`




**`en`** Invalidate the world transform information
for this node and all its children recursively




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dirtyBit` | `TransformBit` | The dirty bits to setup to children, can be composed with multiple dirty bits  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:535](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L535)&nbsp;
___
### inverseTransformPoint
<div style="margin-left: 10px;">

▸   **inverseTransformPoint**<`Vec3`\>(`out: Vec3, p: Vec3`) : `Vec3`




**`en`** Inversely transform a point from world coordinate system to local coordinate system.




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | The result point in local coordinate system will be stored in this vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Vec3` | A position in world coordinate system  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:797](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L797)&nbsp;
___
### isChildOf
<div style="margin-left: 10px;">

▸   **isChildOf**<`boolean`\>(`parent: this | Scene | null`) : `boolean`




**`en`** Is this node a child of the given node?




<!---->
<!--    #### Returns `boolean` True if this node is a child, deep child or identical to the given node.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `parent` | `this \| Scene \| null` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:748](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L748)&nbsp;
___
### lookAt
<div style="margin-left: 10px;">

▸   **lookAt**<`void`\>(`pos: Vec3, up: Vec3`) : `void`




**`en`** Set the orientation of the node to face the target position, the node is facing minus z direction by default




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pos` | `Vec3` | Target position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `up` | `Vec3` | Up direction  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:517](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L517)&nbsp;
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type being removed.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `AnyFunction` | The callback to remove.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | The target (this object) to invoke the callback, if it's not given, only callback without target will be removed  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` - Just returns the incoming callback so you can save the anonymous function easier.-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string \| SystemEventType` | A string representing the event type to listen for.<br>See {{#crossLink "Node/EventType/POSITION_CHANGED"}}Node Events{{/crossLink}} for all builtin events.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `AnyFunction` | The callback that will be invoked when the event is dispatched. The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | The target (this object) to invoke the callback, can be null  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `AnyFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | The target (this object) to invoke the callback, can be null  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `useCapture` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1125)&nbsp;
___
### pauseSystemEvents
<div style="margin-left: 10px;">

▸   **pauseSystemEvents**<`void`\>(`recursive: boolean`) : `void`




**`en`** 
Pause all system events which is dispatched by [[SystemEvent]].
If recursive is set to true, then this API will pause the node system events for the node and all nodes in its sub node tree.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `recursive` | `boolean` | Whether pause system events recursively for the child node tree  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1089](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1089)&nbsp;
___
### removeAllChildren
<div style="margin-left: 10px;">

▸   **removeAllChildren**<`void`\> : `void`




**`en`** Removes all children from the container.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:731](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L731)&nbsp;
___
### removeChild
<div style="margin-left: 10px;">

▸   **removeChild**<`void`\>(`child: this | Node`) : `void`




**`en`** Removes a child from the container.




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:709](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L709)&nbsp;
___
### resumeSystemEvents
<div style="margin-left: 10px;">

▸   **resumeSystemEvents**<`void`\>(`recursive: boolean`) : `void`




**`en`** 
Resume all paused system events which is dispatched by [[SystemEvent]].
If recursive is set to true, then this API will resume the node system events for the node and all nodes in its sub node tree.





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `recursive` | `boolean` | Whether resume system events recursively for the child node tree  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1104)&nbsp;
___
### rotate
<div style="margin-left: 10px;">

▸   **rotate**<`void`\>(`rot: Quat, ns: NodeSpace`) : `void`




**`en`** Perform a rotation on the node




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rot` | `Quat` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ns` | `NodeSpace` | The operation coordinate space  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:490](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L490)&nbsp;
___
### setParent
<div style="margin-left: 10px;">

▸   **setParent**<`void`\>(`value: this | null, keepWorldTransform: boolean`) : `void`




**`en`** Set parent of the node.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `this \| null` | Parent node  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `keepWorldTransform` | `boolean` | Whether keep node's current world transform unchanged after this operation  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L370)&nbsp;
___
### setPosition
<div style="margin-left: 10px;">

▸   **setPosition**<`void`\>(`position: Vec3`) : `void`




**`en`** Set position in local coordinate system




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `position` | `Vec3` | Target position  |



##### Returns `void`


▸   **setPosition**<`void`\>(`x: number, y: number, z: undefined | number`) : `void`




**`en`** Set position in local coordinate system




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | X axis position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | Y axis position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `undefined \| number` | Z axis position  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:629](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L629)&nbsp;   [cocos/core/scene-graph/node.ts:638](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L638)&nbsp;   [cocos/core/scene-graph/node.ts:640](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L640)&nbsp;
___
### setRTS
<div style="margin-left: 10px;">

▸   **setRTS**<`void`\>(`rot: Quat | Vec3, pos: Vec3, scale: Vec3`) : `void`




**`en`** Set local transformation with rotation, position and scale separately.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rot` | `Quat \| Vec3` | The rotation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `pos` | `Vec3` | The position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `Vec3` | The scale  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1050](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1050)&nbsp;
___
### setRotation
<div style="margin-left: 10px;">

▸   **setRotation**<`void`\>(`rotation: Quat`) : `void`




**`en`** Set rotation in local coordinate system with a quaternion representing the rotation




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rotation` | `Quat` | Rotation in quaternion  |



##### Returns `void`


▸   **setRotation**<`void`\>(`x: number, y: number, z: number, w: number`) : `void`




**`en`** Set rotation in local coordinate system with a quaternion representing the rotation




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | X value in quaternion  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | Y value in quaternion  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | Z value in quaternion  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | W value in quaternion  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:673](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L673)&nbsp;   [cocos/core/scene-graph/node.ts:683](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L683)&nbsp;   [cocos/core/scene-graph/node.ts:685](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L685)&nbsp;
___
### setRotationFromEuler
<div style="margin-left: 10px;">

▸   **setRotationFromEuler**<`void`\>(`rotation: Vec3`) : `void`




**`en`** Set rotation in local coordinate system with a vector representing euler angles




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rotation` | `Vec3` | Rotation in vector  |



##### Returns `void`


▸   **setRotationFromEuler**<`void`\>(`x: number, y: number, zOpt: undefined | number`) : `void`




**`en`** Set rotation in local coordinate system with euler angles




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | X axis rotation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | Y axis rotation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `zOpt` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:704](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L704)&nbsp;   [cocos/core/scene-graph/node.ts:713](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L713)&nbsp;   [cocos/core/scene-graph/node.ts:715](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L715)&nbsp;
___
### setScale
<div style="margin-left: 10px;">

▸   **setScale**<`void`\>(`scale: Vec3`) : `void`




**`en`** Set scale in local coordinate system




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `Vec3` | Target scale  |



##### Returns `void`


▸   **setScale**<`void`\>(`x: number, y: number, z: undefined | number`) : `void`




**`en`** Set scale in local coordinate system




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | X axis scale  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | Y axis scale  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `undefined \| number` | Z axis scale  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:752](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L752)&nbsp;   [cocos/core/scene-graph/node.ts:761](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L761)&nbsp;   [cocos/core/scene-graph/node.ts:763](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L763)&nbsp;
___
### setSiblingIndex
<div style="margin-left: 10px;">

▸   **setSiblingIndex**<`void`\>(`index: number`) : `void`




**`en`** Set the sibling index of the current node in its parent's children array.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:570](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L570)&nbsp;
___
### setWorldPosition
<div style="margin-left: 10px;">

▸   **setWorldPosition**<`void`\>(`position: Vec3`) : `void`




**`en`** Set position in world coordinate system




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `position` | `Vec3` | Target position  |



##### Returns `void`


▸   **setWorldPosition**<`void`\>(`x: number, y: number, z: number`) : `void`




**`en`** Set position in world coordinate system




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | X axis position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | Y axis position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | Z axis position  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:819](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L819)&nbsp;   [cocos/core/scene-graph/node.ts:828](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L828)&nbsp;   [cocos/core/scene-graph/node.ts:830](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L830)&nbsp;
___
### setWorldRotation
<div style="margin-left: 10px;">

▸   **setWorldRotation**<`void`\>(`rotation: Quat`) : `void`




**`en`** Set rotation in world coordinate system with a quaternion representing the rotation




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rotation` | `Quat` | Rotation in quaternion  |



##### Returns `void`


▸   **setWorldRotation**<`void`\>(`x: number, y: number, z: number, w: number`) : `void`




**`en`** Set rotation in world coordinate system with a quaternion representing the rotation




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | X value in quaternion  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | Y value in quaternion  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | Z value in quaternion  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | W value in quaternion  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:876](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L876)&nbsp;   [cocos/core/scene-graph/node.ts:886](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L886)&nbsp;   [cocos/core/scene-graph/node.ts:888](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L888)&nbsp;
___
### setWorldRotationFromEuler
<div style="margin-left: 10px;">

▸   **setWorldRotationFromEuler**<`void`\>(`x: number, y: number, z: number`) : `void`




**`en`** Set rotation in world coordinate system with euler angles




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | X axis rotation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | Y axis rotation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | Z axis rotation  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:916](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L916)&nbsp;
___
### setWorldScale
<div style="margin-left: 10px;">

▸   **setWorldScale**<`void`\>(`scale: Vec3`) : `void`




**`en`** Set scale in world coordinate system




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scale` | `Vec3` | Target scale  |



##### Returns `void`


▸   **setWorldScale**<`void`\>(`x: number, y: number, z: number`) : `void`




**`en`** Set scale in world coordinate system




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | X axis scale  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | Y axis scale  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `z` | `number` | Z axis scale  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:951](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L951)&nbsp;   [cocos/core/scene-graph/node.ts:960](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L960)&nbsp;   [cocos/core/scene-graph/node.ts:962](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L962)&nbsp;
___
### syncFromNativeTransform
<div style="margin-left: 10px;">

▸   **syncFromNativeTransform**<`void`\> : `void`




**`en`** 
Synchronize the native transform to the js layer.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1140)&nbsp;
___
### syncToNativeTransform
<div style="margin-left: 10px;">

▸   **syncToNativeTransform**<`void`\> : `void`




**`en`** 
Synchronize the js transform to the native layer.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1125)&nbsp;
___
### targetOff
<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`target: string | unknown`) : `void`




**`en`** Removes all callbacks previously registered with the same target.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `string \| unknown` | The target to be searched for all related callbacks  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1179)&nbsp;
___
### translate
<div style="margin-left: 10px;">

▸   **translate**<`void`\>(`trans: Vec3, ns: NodeSpace`) : `void`




**`en`** Perform a translation on the node




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `trans` | `Vec3` | The increment on position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ns` | `NodeSpace` | The operation coordinate space  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:456](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L456)&nbsp;
___
### updateWorldTransform
<div style="margin-left: 10px;">

▸   **updateWorldTransform**<`void`\> : `void`




**`en`** Update the world transform information if outdated




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:552](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L552)&nbsp;
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `preFunc` |  | The callback to process node when reach the node for the first time  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `postFunc` | `undefined \| ` | The callback to process node when re-visit the node after walked all children in its sub tree  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:616](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L616)&nbsp;
___
<!---->




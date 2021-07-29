
## Class: CylinderCollider


`extend:`
[Collider](docs/en/physics/Class/Collider.md)












**`en`** 
Cylinder collider component.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Axis](#Axis)
- [ **`static`**  Type](#Type)
- [ **`static`**  system](#system)
- [ node](#node)
- [ type](#type)
- [ attachedRigidBody](#attachedRigidBody)
- [ boundingSphere](#boundingSphere)
- [ center](#center)
- [ direction](#direction)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ height](#height)
- [ hideFlags](#hideFlags)
- [ isTrigger](#isTrigger)
- [ isValid](#isValid)
- [ material](#material)
- [ name](#name)
- [ needCollisionEvent](#needCollisionEvent)
- [ needTriggerEvent](#needTriggerEvent)
- [ radius](#radius)
- [ shape](#shape)
- [ sharedMaterial](#sharedMaterial)
- [ uuid](#uuid)
- [ worldBounds](#worldBounds)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ addGroup](#addGroup)
- [ addMask](#addMask)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getGroup](#getGroup)
- [ getMask](#getMask)
- [ hasEventListener](#hasEventListener)
- [ off](#off)
- [ on](#on)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ once](#once)
- [ removeAll](#removeAll)
- [ removeGroup](#removeGroup)
- [ removeMask](#removeMask)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setGroup](#setGroup)
- [ setMask](#setMask)
- [ targetOff](#targetOff)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
</div>

## Properties


### Axis
<div style="margin-left: 10px;">




**`en`** 
Enumeration of axes.




• `static` **Axis**:
`EnumAlias`  = `EAxisDirection`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L68)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:483](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L483)&nbsp;


___


### Type
<div style="margin-left: 10px;">




**`en`** 
Enumeration of collider types.




• `static` **Type**:
`EnumAlias`  = `EColliderType`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L60)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:482](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L482)&nbsp;


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


### type
<div style="margin-left: 10px;">




•  **type**:
`EColliderType` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L217)&nbsp;


___


### attachedRigidBody
<div style="margin-left: 10px;">




**`en`** 
Get the rigid body component to which the collider is bound, possibly null.




•  **attachedRigidBody**:
 ``RigidBody | null`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L83)&nbsp;


___


### boundingSphere
<div style="margin-left: 10px;">




•  **boundingSphere**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:203](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L203)&nbsp;


___


### center
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the center of the collider, in local space.




•  **center**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L176)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L180)&nbsp;


___


### direction
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the cylinder direction, in local space.




•  **direction**:
 ``EAxisDirection`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/cylinder-collider.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/cylinder-collider.ts#L106)&nbsp;   [cocos/physics/framework/components/colliders/cylinder-collider.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/cylinder-collider.ts#L110)&nbsp;


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


### height
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the cylinder body is at the corresponding axial height, in local space.




•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/cylinder-collider.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/cylinder-collider.ts#L85)&nbsp;   [cocos/physics/framework/components/colliders/cylinder-collider.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/cylinder-collider.ts#L89)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isTrigger
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the collider is trigger, this will be always trigger if using builtin.




•  **isTrigger**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L156)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L160)&nbsp;


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


### material
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the physics material for this collider, which in Shared state will generate a new instance.




•  **material**:
 ``null | PhysicsMaterial`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L116)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L126)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### needCollisionEvent
<div style="margin-left: 10px;">




•  **needCollisionEvent**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L213)&nbsp;


___


### needTriggerEvent
<div style="margin-left: 10px;">




•  **needTriggerEvent**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:209](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L209)&nbsp;


___


### radius
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the radius of the circle on the cylinder body, in local space.




•  **radius**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/cylinder-collider.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/cylinder-collider.ts#L65)&nbsp;   [cocos/physics/framework/components/colliders/cylinder-collider.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/cylinder-collider.ts#L69)&nbsp;


___


### shape
<div style="margin-left: 10px;">




•  **shape**:
 ``ICylinderShape`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/cylinder-collider.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/cylinder-collider.ts#L119)&nbsp;


___


### sharedMaterial
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the physical material for this collider.




•  **sharedMaterial**:
 ``null | PhysicsMaterial`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L98)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L102)&nbsp;


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


### worldBounds
<div style="margin-left: 10px;">




•  **worldBounds**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L197)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new CylinderCollider**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/cylinder-collider.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/cylinder-collider.ts#L132)&nbsp;


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
### addGroup
<div style="margin-left: 10px;">

▸   **addGroup**<`void`\>(`v: number`) : `void`




**`en`** 
Add a grouping value to fill in the group you want to join.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L344)&nbsp;
___
### addMask
<div style="margin-left: 10px;">

▸   **addMask**<`void`\>(`v: number`) : `void`




**`en`** 
Add mask values to fill in groups that need to be checked.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:397](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L397)&nbsp;
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
### emit
<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`




**`en`** Trigger an event directly with the event name and necessary arguments.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | event type  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg0` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg1` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg2` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg3` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg4` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L141)&nbsp;
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
### getGroup
<div style="margin-left: 10px;">

▸   **getGroup**<`number`\> : `number`




**`en`** 
Gets the group value.




<!---->
<!--    #### Returns `number` 整数，范围为 2 的 0 次方 到 2 的 31 次方
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L317)&nbsp;
___
### getMask
<div style="margin-left: 10px;">

▸   **getMask**<`number`\> : `number`




**`en`** 
Gets the mask value.




<!---->
<!--    #### Returns `number` 整数，范围为 2 的 0 次方 到 2 的 31 次方
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L370)&nbsp;
___
### hasEventListener
<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`




**`en`** Checks whether there is correspond event listener registered on the given event.




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Event type.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `undefined \| ` | Callback function when event triggered.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | Callback callee.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L52)&nbsp;
___
### off
<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: TriggerEventType | CollisionEventType, callback: undefined | , target: any`) : `void`




**`en`** 
Unregisters callbacks associated with trigger or collision events that have been registered.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `TriggerEventType \| CollisionEventType` | The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `undefined \| ` | The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | The event callback target.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L275)&nbsp;
___
### on
<div style="margin-left: 10px;">

▸   **on**<`any`\>(`type: TriggerEventType | CollisionEventType, callback: TFunction, target: any, once: undefined | false | true`) : `any`




**`en`** 
Registers callbacks associated with triggered or collision events.




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `TriggerEventType \| CollisionEventType` | The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | The event callback target.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `once` | `undefined \| false \| true` | - |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L260)&nbsp;
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
### once
<div style="margin-left: 10px;">

▸   **once**<`any`\>(`type: TriggerEventType | CollisionEventType, callback: TFunction, target: any`) : `any`




**`en`** 
Registers a callback associated with a trigger or collision event, which is automatically unregistered once executed.




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `TriggerEventType \| CollisionEventType` | The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | The event callback target.  |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L289)&nbsp;
___
### removeAll
<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: TriggerEventType | CollisionEventType | Record`) : `void`




**`en`** 
Removes all registered events of the specified target or type.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `TriggerEventType \| CollisionEventType \| Record` | The event type or target.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L303)&nbsp;
___
### removeGroup
<div style="margin-left: 10px;">

▸   **removeGroup**<`void`\>(`v: number`) : `void`




**`en`** 
Subtract the grouping value to fill in the group to be removed.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L357)&nbsp;
___
### removeMask
<div style="margin-left: 10px;">

▸   **removeMask**<`void`\>(`v: number`) : `void`




**`en`** 
Subtract the mask value to fill in the group that does not need to be checked.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:410](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L410)&nbsp;
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
### setGroup
<div style="margin-left: 10px;">

▸   **setGroup**<`void`\>(`v: number`) : `void`




**`en`** 
Sets the group value.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:331](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L331)&nbsp;
___
### setMask
<div style="margin-left: 10px;">

▸   **setMask**<`void`\>(`v: number`) : `void`




**`en`** 
Sets the mask value.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L384)&nbsp;
___
### targetOff
<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`typeOrTarget: any`) : `void`




**`en`** Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The target to be searched for all related listeners  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L126)&nbsp;
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
<!---->




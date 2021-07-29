
## Class: RigidBody2D


`extend:`
[Component](docs/en/component/Class/Component.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  system](#system)
- [ awakeOnLoad](#awakeOnLoad)
- [ bullet](#bullet)
- [ enabledContactListener](#enabledContactListener)
- [ node](#node)
- [ allowSleep](#allowSleep)
- [ angularDamping](#angularDamping)
- [ angularVelocity](#angularVelocity)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ fixedRotation](#fixedRotation)
- [ gravityScale](#gravityScale)
- [ group](#group)
- [ hideFlags](#hideFlags)
- [ impl](#impl)
- [ isValid](#isValid)
- [ linearDamping](#linearDamping)
- [ linearVelocity](#linearVelocity)
- [ name](#name)
- [ type](#type)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ applyAngularImpulse](#applyAngularImpulse)
- [ applyForce](#applyForce)
- [ applyForceToCenter](#applyForceToCenter)
- [ applyLinearImpulse](#applyLinearImpulse)
- [ applyLinearImpulseToCenter](#applyLinearImpulseToCenter)
- [ applyTorque](#applyTorque)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getInertia](#getInertia)
- [ getLinearVelocityFromWorldPoint](#getLinearVelocityFromWorldPoint)
- [ getLocalCenter](#getLocalCenter)
- [ getLocalPoint](#getLocalPoint)
- [ getLocalVector](#getLocalVector)
- [ getMass](#getMass)
- [ getWorldCenter](#getWorldCenter)
- [ getWorldPoint](#getWorldPoint)
- [ getWorldVector](#getWorldVector)
- [ isAwake](#isAwake)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ sleep](#sleep)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ wakeUp](#wakeUp)
</div>

## Properties


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### awakeOnLoad
<div style="margin-left: 10px;">




**`en`** 
Whether to wake up this rigid body during initialization




•  **awakeOnLoad**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L212)&nbsp;


___


### bullet
<div style="margin-left: 10px;">




**`en`** 
Is this a fast moving body that should be prevented from tunneling through
other moving bodies?
Note :
- All bodies are prevented from tunneling through kinematic and static bodies. This setting is only considered on dynamic bodies.
- You should use this flag sparingly since it increases processing time.




•  **bullet**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L51)&nbsp;


___


### enabledContactListener
<div style="margin-left: 10px;">




•  **enabledContactListener**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:35](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L35)&nbsp;


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


### allowSleep
<div style="margin-left: 10px;">




**`en`** 
Set this flag to false if this body should never fall asleep.
Note that this increases CPU usage.




•  **allowSleep**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L83)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L86)&nbsp;


___


### angularDamping
<div style="margin-left: 10px;">




**`en`** 
Angular damping is use to reduce the angular velocity. The damping parameter
can be larger than 1 but the damping effect becomes sensitive to the
time step when the damping parameter is large.




•  **angularDamping**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L138)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L141)&nbsp;


___


### angularVelocity
<div style="margin-left: 10px;">




**`en`** 
The angular velocity of the body.




•  **angularVelocity**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L175)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L181)&nbsp;


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


### fixedRotation
<div style="margin-left: 10px;">




**`en`** 
Should this body be prevented from rotating?




•  **fixedRotation**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:195](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L195)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L198)&nbsp;


___


### gravityScale
<div style="margin-left: 10px;">




**`en`** 
Scale the gravity applied to this body.




•  **gravityScale**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L100)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L103)&nbsp;


___


### group
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the group of the rigid body.




•  **group**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:27](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L27)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:30](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L30)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### impl
<div style="margin-left: 10px;">




•  **impl**:
 ``null | IRigidBody2D`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:527](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L527)&nbsp;


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


### linearDamping
<div style="margin-left: 10px;">




**`en`** 
Linear damping is use to reduce the linear velocity.
The damping parameter can be larger than 1, but the damping effect becomes sensitive to the
time step when the damping parameter is large.




•  **linearDamping**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L119)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L122)&nbsp;


___


### linearVelocity
<div style="margin-left: 10px;">




**`en`** 
The linear velocity of the body's origin in world co-ordinates.




•  **linearVelocity**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L155)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L161)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`en`** 
Rigidbody type : Static, Kinematic, Dynamic or Animated.




•  **type**:
 ``ERigidBody2DType`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L60)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L63)&nbsp;


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

• **new RigidBody2D**(`name: string`)

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
### applyAngularImpulse
<div style="margin-left: 10px;">

▸   **applyAngularImpulse**<`void`\>(`impulse: number, wake: boolean`) : `void`




**`en`** 
Apply an angular impulse.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `impulse` | `number` | the angular impulse in units of kg*m*m/s  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | also wake up the body  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L385)&nbsp;
___
### applyForce
<div style="margin-left: 10px;">

▸   **applyForce**<`void`\>(`force: Vec2, point: Vec2, wake: boolean`) : `void`




**`en`** 
Apply a force at a world point. If the force is not
applied at the center of mass, it will generate a torque and
affect the angular velocity.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `Vec2` | the world force vector.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | the world position.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | also wake up the body.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L310)&nbsp;
___
### applyForceToCenter
<div style="margin-left: 10px;">

▸   **applyForceToCenter**<`void`\>(`force: Vec2, wake: boolean`) : `void`




**`en`** 
Apply a force to the center of mass.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `Vec2` | the world force vector.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | also wake up the body.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L324)&nbsp;
___
### applyLinearImpulse
<div style="margin-left: 10px;">

▸   **applyLinearImpulse**<`void`\>(`impulse: Vec2, point: Vec2, wake: boolean`) : `void`




**`en`** 
Apply a impulse at a world point, this immediately modifies the velocity.
If the impulse is not applied at the center of mass, it will generate a torque and
affect the angular velocity.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `impulse` | `Vec2` | the world impulse vector, usually in N-seconds or kg-m/s.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | the world position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | alse wake up the body  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:356](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L356)&nbsp;
___
### applyLinearImpulseToCenter
<div style="margin-left: 10px;">

▸   **applyLinearImpulseToCenter**<`void`\>(`impulse: Vec2, wake: boolean`) : `void`




**`en`** 
Apply a impulse at the center of mass, this immediately modifies the velocity.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `impulse` | `Vec2` | the world impulse vector, usually in N-seconds or kg-m/s.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | alse wake up the body  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:371](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L371)&nbsp;
___
### applyTorque
<div style="margin-left: 10px;">

▸   **applyTorque**<`void`\>(`torque: number, wake: boolean`) : `void`




**`en`** 
Apply a torque. This affects the angular velocity.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `torque` | `number` | about the z-axis (out of the screen), usually in N-m.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | also wake up the body  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L338)&nbsp;
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
### getInertia
<div style="margin-left: 10px;">

▸   **getInertia**<`number`\> : `number`




**`en`** 
Get the rotational inertia of the body about the local origin.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:493](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L493)&nbsp;
___
### getLinearVelocityFromWorldPoint
<div style="margin-left: 10px;">

▸   **getLinearVelocityFromWorldPoint**<`Out`\>(`worldPoint: IVec2Like, out: Out`) : `Out`




**`en`** 
Get the world linear velocity of a world point attached to this body.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldPoint` | `IVec2Like` | a point in world coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving point  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:399](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L399)&nbsp;
___
### getLocalCenter
<div style="margin-left: 10px;">

▸   **getLocalCenter**<`Out`\>(`out: Out`) : `Out`




**`en`** 
Get the local position of the center of mass.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L468)&nbsp;
___
### getLocalPoint
<div style="margin-left: 10px;">

▸   **getLocalPoint**<`Out`\>(`worldPoint: IVec2Like, out: Out`) : `Out`




**`en`** 
Converts a given point in the world coordinate system to this rigid body's local coordinate system




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldPoint` | `IVec2Like` | a point in world coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving point  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:442](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L442)&nbsp;
___
### getLocalVector
<div style="margin-left: 10px;">

▸   **getLocalVector**<`Out`\>(`worldVector: IVec2Like, out: Out`) : `Out`




**`en`** 
Converts a world coordinate point to the given rigid body coordinate.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldVector` | `IVec2Like` | a vector in world coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving vector  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L413)&nbsp;
___
### getMass
<div style="margin-left: 10px;">

▸   **getMass**<`number`\> : `number`




**`en`** 
Get total mass of the body.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L292)&nbsp;
___
### getWorldCenter
<div style="margin-left: 10px;">

▸   **getWorldCenter**<`Out`\>(`out: Out`) : `Out`




**`en`** 
Get the world position of the center of mass.




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:480](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L480)&nbsp;
___
### getWorldPoint
<div style="margin-left: 10px;">

▸   **getWorldPoint**<`Out`\>(`localPoint: IVec2Like, out: Out`) : `Out`




**`en`** 
Converts a given point in this rigid body's local coordinate system to the world coordinate system




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `localPoint` | `IVec2Like` | a point in local coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving point  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:456](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L456)&nbsp;
___
### getWorldVector
<div style="margin-left: 10px;">

▸   **getWorldVector**<`Out`\>(`localVector: IVec2Like, out: Out`) : `Out`




**`en`** 
Converts a given vector in this rigid body's local coordinate system to the world coordinate system




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `localVector` | `IVec2Like` | a vector in world coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving vector  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:427](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L427)&nbsp;
___
### isAwake
<div style="margin-left: 10px;">

▸   **isAwake**<`boolean`\> : `boolean`




**`en`** 
Whether the rigid body is awake.




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L254)&nbsp;
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
### sleep
<div style="margin-left: 10px;">

▸   **sleep**<`void`\> : `void`




**`en`** 
Dormancy of rigid body.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:280](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L280)&nbsp;
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
### wakeUp
<div style="margin-left: 10px;">

▸   **wakeUp**<`void`\> : `void`




**`en`** 
Wake up the rigid body.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:268](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L268)&nbsp;
___
<!---->




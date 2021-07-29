
## Class: PhysicsSystem2D




`extend: `
[IEventified](docs/en/event/Interface/IEventified.md)&nbsp;







<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  instance](#instance)
- [ **`static`**  ID](#ID)
- [ collisionMatrix](#collisionMatrix)
- [ physicsWorld](#physicsWorld)
- [ positionIterations](#positionIterations)
- [ velocityIterations](#velocityIterations)
- [ allowSleep](#allowSleep)
- [ autoSimulation](#autoSimulation)
- [ debugDrawFlags](#debugDrawFlags)
- [ enable](#enable)
- [ fixedTimeStep](#fixedTimeStep)
- [ gravity](#gravity)
- [ id](#id)
- [ maxSubSteps](#maxSubSteps)
- [ priority](#priority)
- [ stepping](#stepping)


### Methods

- [ **`static`**  sortByPriority](#sortByPriority)
- [ emit](#emit)
- [ hasEventListener](#hasEventListener)
- [ init](#init)
- [ off](#off)
- [ on](#on)
- [ once](#once)
- [ postUpdate](#postUpdate)
- [ raycast](#raycast)
- [ removeAll](#removeAll)
- [ resetAccumulator](#resetAccumulator)
- [ step](#step)
- [ targetOff](#targetOff)
- [ testAABB](#testAABB)
- [ testPoint](#testPoint)
- [ update](#update)
</div>

## Properties


### instance
<div style="margin-left: 10px;">



**`en`** 
Gets the physical system instance.




• `static` **instance**:
 ``PhysicsSystem2D`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L163)&nbsp;


___


### ID
<div style="margin-left: 10px;">



**`en`** 
Gets the ID of the system.




• `static` **ID**:
  = `"PHYSICS_2D"`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L143)&nbsp;


___


### collisionMatrix
<div style="margin-left: 10px;">



**`en`** 
Gets the collision matrix。




•  **collisionMatrix**:
`ICollisionMatrix`  = `new CollisionMatrix() as unknown as ICollisionMatrix`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L176)&nbsp;


___


### physicsWorld
<div style="margin-left: 10px;">



**`en`** 
Gets the wrappered object of the physical world through which you can access the actual underlying object.




•  **physicsWorld**:
`IPhysicsWorld` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L135)&nbsp;


___


### positionIterations
<div style="margin-left: 10px;">



**`en`** 
The position Iterations for the position constraint solver.




•  **positionIterations**:
`number`  = `10`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L127)&nbsp;


___


### velocityIterations
<div style="margin-left: 10px;">



**`en`** 
The velocity iterations for the velocity constraint solver.




•  **velocityIterations**:
`number`  = `10`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L120)&nbsp;


___


### allowSleep
<div style="margin-left: 10px;">




•  **allowSleep**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L39)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L42)&nbsp;


___


### autoSimulation
<div style="margin-left: 10px;">



**`en`** 
Turn on or off the automatic simulation.




•  **autoSimulation**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L99)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L103)&nbsp;


___


### debugDrawFlags
<div style="margin-left: 10px;">




•  **debugDrawFlags**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:107](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L107)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L110)&nbsp;


___


### enable
<div style="margin-left: 10px;">



**`en`** 
Gets or sets whether the physical system is enabled, which can be used to pause or continue running the physical system.




•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:26](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L26)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:29](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L29)&nbsp;


___


### fixedTimeStep
<div style="margin-left: 10px;">



**`en`** 
Gets or sets the fixed delta time consumed by each simulation step.




•  **fixedTimeStep**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L85)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L89)&nbsp;


___


### gravity
<div style="margin-left: 10px;">



**`en`** 
Gets or sets the value of gravity in the physical world, which defaults to (0, -10).




•  **gravity**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L55)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L58)&nbsp;


___


### id
<div style="margin-left: 10px;">




•  **id**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L49)&nbsp;   [cocos/core/components/system.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L52)&nbsp;


___


### maxSubSteps
<div style="margin-left: 10px;">



**`en`** 
Gets or sets the maximum number of simulated substeps per frame.




•  **maxSubSteps**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L71)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L75)&nbsp;


___


### priority
<div style="margin-left: 10px;">




•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L42)&nbsp;   [cocos/core/components/system.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L45)&nbsp;


___


### stepping
<div style="margin-left: 10px;">




•  **stepping**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L189)&nbsp;


___

<!---->
## Constructors


---

<!---->
## Methods

### sortByPriority

<div style="margin-left: 10px;">

▸ `static`  **sortByPriority**(`a: System, b: System`)



**`en`** Sorting between different systems.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `System` | System a  |
| `b` | `System` | System b  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L62)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`



**`en`** Trigger an event directly with the event name and necessary arguments.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | event type  |
| `arg0` | `any` | - |
| `arg1` | `any` | - |
| `arg2` | `any` | - |
| `arg3` | `any` | - |
| `arg4` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L141)&nbsp;
___
### hasEventListener

<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`



**`en`** Checks whether there is correspond event listener registered on the given event.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Event type.  |
| `callback` | `undefined \| ` | Callback function when event triggered.  |
| `target` | `any` | Callback callee.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L52)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`



**`en`** Init the system, will be invoked by [[Director]] when registered, should be implemented if needed.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L76)&nbsp;
___
### off

<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: EventType, callback: TFunction, thisArg: any`) : `void`



**`en`** 
Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.



**`example`**

```ts

import { log } from 'cc';
// register fire eventListener
var callback = eventTarget.on('fire', function () {
    log("fire in the hole");
}, target);
// remove fire event listener
eventTarget.off('fire', callback, target);
// remove all fire event listeners
eventTarget.off('fire');

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type being removed.  |
| `callback` | `TFunction` | The callback to remove.  |
| `thisArg` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L114)&nbsp;
___
### on

<div style="margin-left: 10px;">

▸   **on**(`type: EventType, callback: TFunction, thisArg: any, once: undefined | false | true`)



**`en`** 
Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.



**`example`**

```ts

import { log } from 'cc';
eventTarget.on('fire', function () {
    log("fire in the hole");
}, node);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `thisArg` | `any` | The target (this object) to invoke the callback, can be null  |
| `once` | `undefined \| false \| true` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L72)&nbsp;
___
### once

<div style="margin-left: 10px;">

▸   **once**(`type: EventType, callback: TFunction, thisArg: any`)



**`en`** 
Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.



**`example`**

```ts

import { log } from 'cc';
eventTarget.once('fire', function () {
    log("this is the callback and will be invoked only once");
}, node);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `thisArg` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L91)&nbsp;
___
### postUpdate

<div style="margin-left: 10px;">

▸   **postUpdate**<`void`\>(`deltaTime: number`) : `void`



**`en`** 
Perform a simulation of the physics system, which will now be performed automatically on each frame.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `deltaTime` | `number` | 与上一次执行相差的时间，目前为每帧消耗时间  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L227)&nbsp;
___
### raycast

<div style="margin-left: 10px;">

▸   **raycast**(`p1: IVec2Like, p2: IVec2Like, type: ERaycast2DType, mask: number`)



**`en`** 
Raycast the world for all colliders in the path of the ray.
The raycast ignores colliders that contain the starting point.



**`method`** rayCast



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p1` | `IVec2Like` | start point of the raycast  |
| `p2` | `IVec2Like` | end point of the raycast  |
| `type` | `ERaycast2DType` | optional, default is RayCastType.Closest  |
| `mask` | `number` | optional, default is 0xffffffff  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:312](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L312)&nbsp;
___
### removeAll

<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`



**`en`** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The event type or target with which the listeners will be removed  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L133)&nbsp;
___
### resetAccumulator

<div style="margin-left: 10px;">

▸   **resetAccumulator**<`void`\>(`time: number`) : `void`



**`en`** 
Reset the accumulator of time to given value.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `time` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L284)&nbsp;
___
### step

<div style="margin-left: 10px;">

▸   **step**<`void`\>(`fixedTimeStep: number`) : `void`



**`en`** 
Perform simulation steps for the physics world.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fixedTimeStep` | `number` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L295)&nbsp;
___
### targetOff

<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`typeOrTarget: any`) : `void`



**`en`** Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The target to be searched for all related listeners  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L126)&nbsp;
___
### testAABB

<div style="margin-left: 10px;">

▸   **testAABB**(`rect: Rect`)



**`en`** Test which colliders contain the point.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rect` | `Rect` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:328](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L328)&nbsp;
___
### testPoint

<div style="margin-left: 10px;">

▸   **testPoint**(`p: Vec2`)



**`en`** Test which colliders contain the point.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Vec2` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:320](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L320)&nbsp;
___
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: number`) : `void`



**`en`** Update function of the system, it will be invoked between all components update phase and late update phase.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | Delta time after the last frame  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L82)&nbsp;
___
<!---->




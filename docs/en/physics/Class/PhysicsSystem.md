
## Class: PhysicsSystem














**`en`** 
Physics system.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  PhysicsGroup](#PhysicsGroup)
- [ **`static`**  instance](#instance)
- [ **`static`**  ID](#ID)
- [ collisionMatrix](#collisionMatrix)
- [ physicsWorld](#physicsWorld)
- [ raycastClosestResult](#raycastClosestResult)
- [ raycastResults](#raycastResults)
- [ useNodeChains](#useNodeChains)
- [ allowSleep](#allowSleep)
- [ autoSimulation](#autoSimulation)
- [ defaultMaterial](#defaultMaterial)
- [ enable](#enable)
- [ fixedTimeStep](#fixedTimeStep)
- [ gravity](#gravity)
- [ id](#id)
- [ maxSubSteps](#maxSubSteps)
- [ priority](#priority)
- [ sleepThreshold](#sleepThreshold)


### Methods

- [ **`static`**  sortByPriority](#sortByPriority)
- [ emitEvents](#emitEvents)
- [ init](#init)
- [ postUpdate](#postUpdate)
- [ raycast](#raycast)
- [ raycastClosest](#raycastClosest)
- [ resetAccumulator](#resetAccumulator)
- [ step](#step)
- [ syncSceneToPhysics](#syncSceneToPhysics)
- [ update](#update)

</div>

## Properties


### PhysicsGroup
<div style="margin-left: 10px;">




**`en`** 
Gets the predefined physics groups.




• `static` **PhysicsGroup**:
 ``PhysicsGroup`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L90)&nbsp;


___


### instance
<div style="margin-left: 10px;">




**`en`** 
Gets the physical system instance.




• `static` **instance**:
 ``PhysicsSystem`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L100)&nbsp;


___


### ID
<div style="margin-left: 10px;">




**`en`** 
Gets the ID of the system.




• `static` **ID**:
  = `"PHYSICS"`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L82)&nbsp;


___


### collisionMatrix
<div style="margin-left: 10px;">




**`en`** 
Gets the collision matrix that used for initialization only.




•  **collisionMatrix**:
`ICollisionMatrix`  = `new CollisionMatrix(1) as ICollisionMatrix`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L250)&nbsp;


___


### physicsWorld
<div style="margin-left: 10px;">




**`en`** 
Gets the wrappered object of the physical world through which you can access the actual underlying object.




•  **physicsWorld**:
`IPhysicsWorld` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L226)&nbsp;


___


### raycastClosestResult
<div style="margin-left: 10px;">




**`en`** 
Gets the raycastClosest test result.




•  **raycastClosestResult**:
`PhysicsRayResult`  = `new PhysicsRayResult()`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L234)&nbsp;


___


### raycastResults
<div style="margin-left: 10px;">




**`en`** 
Gets the raycast test results.




•  **raycastResults**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L242)&nbsp;


___


### useNodeChains
<div style="margin-left: 10px;">




•  **useNodeChains**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:252](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L252)&nbsp;


___


### allowSleep
<div style="margin-left: 10px;">




•  **allowSleep**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L126)&nbsp;   [cocos/physics/framework/physics-system.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L130)&nbsp;


___


### autoSimulation
<div style="margin-left: 10px;">




**`en`** 
Turn on or off the automatic simulation.




•  **autoSimulation**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:202](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L202)&nbsp;   [cocos/physics/framework/physics-system.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L206)&nbsp;


___


### defaultMaterial
<div style="margin-left: 10px;">




**`en`** 
Gets the global default physical material.




•  **defaultMaterial**:
 ``PhysicsMaterial`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:216](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L216)&nbsp;


___


### enable
<div style="margin-left: 10px;">




**`en`** 
Gets or sets whether the physical system is enabled, which can be used to pause or continue running the physical system.




•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L112)&nbsp;   [cocos/physics/framework/physics-system.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L116)&nbsp;


___


### fixedTimeStep
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the fixed delta time consumed by each simulation step.




•  **fixedTimeStep**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L157)&nbsp;   [cocos/physics/framework/physics-system.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L161)&nbsp;


___


### gravity
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the value of gravity in the physical world, which defaults to (0, -10, 0).




•  **gravity**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L171)&nbsp;   [cocos/physics/framework/physics-system.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L175)&nbsp;


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

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L143)&nbsp;   [cocos/physics/framework/physics-system.ts:147](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L147)&nbsp;


___


### priority
<div style="margin-left: 10px;">




•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L42)&nbsp;   [cocos/core/components/system.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L45)&nbsp;


___


### sleepThreshold
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the default speed threshold for going to sleep.




•  **sleepThreshold**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:188](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L188)&nbsp;   [cocos/physics/framework/physics-system.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L192)&nbsp;


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




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `System` | System a  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `System` | System b  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L62)&nbsp;
___
### emitEvents
<div style="margin-left: 10px;">

▸   **emitEvents**<`void`\> : `void`




**`en`** 
Emit trigger and collision events.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:386](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L386)&nbsp;
___
### init
<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`




**`en`** Init the system, will be invoked by [[Director]] when registered, should be implemented if needed.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L76)&nbsp;
___
### postUpdate
<div style="margin-left: 10px;">

▸   **postUpdate**<`void`\>(`deltaTime: number`) : `void`




**`en`** 
The lifecycle function is automatically executed after all components `update` and `lateUpadte` are executed.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `deltaTime` | `number` | the time since last frame.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L317)&nbsp;
___
### raycast
<div style="margin-left: 10px;">

▸   **raycast**<`boolean`\>(`worldRay: Ray, mask: number, maxDistance: number, queryTrigger: boolean`) : `boolean`




**`en`** 
Collision detect all collider, and record all the detected results, through PhysicsSystem.Instance.RaycastResults access to the results.




<!---->
<!--    #### Returns `boolean` boolean 表示是否有检测到碰撞盒
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldRay` | `Ray` | 世界空间下的一条射线  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `mask` | `number` | 掩码，默认为 0xffffffff  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `maxDistance` | `number` | 最大检测距离，默认为 10000000，目前请勿传入 Infinity 或 Number.MAX_VALUE  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `queryTrigger` | `boolean` | 是否检测触发器  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L401)&nbsp;
___
### raycastClosest
<div style="margin-left: 10px;">

▸   **raycastClosest**<`boolean`\>(`worldRay: Ray, mask: number, maxDistance: number, queryTrigger: boolean`) : `boolean`




**`en`** 
Collision detect all collider, and record and ray test results with the shortest distance
by PhysicsSystem.Instance.RaycastClosestResult access to the results.




<!---->
<!--    #### Returns `boolean` boolean 表示是否有检测到碰撞盒
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldRay` | `Ray` | 世界空间下的一条射线  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `mask` | `number` | 掩码，默认为 0xffffffff  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `maxDistance` | `number` | 最大检测距离，默认为 10000000，目前请勿传入 Infinity 或 Number.MAX_VALUE  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `queryTrigger` | `boolean` | 是否检测触发器  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:422](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L422)&nbsp;
___
### resetAccumulator
<div style="margin-left: 10px;">

▸   **resetAccumulator**<`void`\>(`time: number`) : `void`




**`en`** 
Reset the accumulator of time to given value.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `time` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:355](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L355)&nbsp;
___
### step
<div style="margin-left: 10px;">

▸   **step**<`void`\>(`fixedTimeStep: number, deltaTime: undefined | number, maxSubSteps: undefined | number`) : `void`




**`en`** 
Perform simulation steps for the physics world.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fixedTimeStep` | `number` |   |

| Name | Type | Description |
| :------: | :------: | :------: |
| `deltaTime` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `maxSubSteps` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L366)&nbsp;
___
### syncSceneToPhysics
<div style="margin-left: 10px;">

▸   **syncSceneToPhysics**<`void`\> : `void`




**`en`** 
Sync the scene world transform changes to the physics world.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:376](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L376)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: number`) : `void`




**`en`** Update function of the system, it will be invoked between all components update phase and late update phase.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | Delta time after the last frame  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L82)&nbsp;
___
<!---->
<!---->



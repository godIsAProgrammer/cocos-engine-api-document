
## Class: PhysicsSystem












**`zh`** 
物理系统。



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



**`zh`** 
获取预定义的物理分组。





• `static` **PhysicsGroup**:
 ``PhysicsGroup`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L90)&nbsp;


___


### instance
<div style="margin-left: 10px;">



**`zh`** 
获取物理系统实例。





• `static` **instance**:
 ``PhysicsSystem`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L100)&nbsp;


___


### ID
<div style="margin-left: 10px;">



**`zh`** 
获取此系统的ID。





• `static` **ID**:
  = `"PHYSICS"`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L82)&nbsp;


___


### collisionMatrix
<div style="margin-left: 10px;">



**`zh`** 
获取碰撞矩阵，它仅用于初始化。





•  **collisionMatrix**:
`ICollisionMatrix`  = `new CollisionMatrix(1) as ICollisionMatrix`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L250)&nbsp;


___


### physicsWorld
<div style="margin-left: 10px;">



**`zh`** 
获取物理世界的封装对象，通过它你可以访问到实际的底层对象。





•  **physicsWorld**:
`IPhysicsWorld` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L226)&nbsp;


___


### raycastClosestResult
<div style="margin-left: 10px;">



**`zh`** 
获取 raycastClosest 的检测结果。





•  **raycastClosestResult**:
`PhysicsRayResult`  = `new PhysicsRayResult()`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L234)&nbsp;


___


### raycastResults
<div style="margin-left: 10px;">



**`zh`** 
获取 raycast 的检测结果。





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



**`zh`** 
Gets or sets whether the physical system allows automatic sleep, which defaults to true.



**`zh`** 
获取或设置物理系统是否允许自动休眠，默认为 true。





•  **allowSleep**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L126)&nbsp;   [cocos/physics/framework/physics-system.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L130)&nbsp;


___


### autoSimulation
<div style="margin-left: 10px;">



**`zh`** 
获取或设置是否自动模拟。





•  **autoSimulation**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:202](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L202)&nbsp;   [cocos/physics/framework/physics-system.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L206)&nbsp;


___


### defaultMaterial
<div style="margin-left: 10px;">



**`zh`** 
获取全局的默认物理材质。





•  **defaultMaterial**:
 ``PhysicsMaterial`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:216](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L216)&nbsp;


___


### enable
<div style="margin-left: 10px;">



**`zh`** 
获取或设置是否启用物理系统，可以用于暂停或继续运行物理系统。





•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L112)&nbsp;   [cocos/physics/framework/physics-system.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L116)&nbsp;


___


### fixedTimeStep
<div style="margin-left: 10px;">



**`zh`** 
获取或设置每步模拟消耗的固定时间。





•  **fixedTimeStep**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L157)&nbsp;   [cocos/physics/framework/physics-system.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L161)&nbsp;


___


### gravity
<div style="margin-left: 10px;">



**`zh`** 
获取或设置物理世界的重力数值，默认为 (0, -10, 0)。





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



**`zh`** 
获取或设置每帧模拟的最大子步数。





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



**`zh`** 
获取或设置进入休眠的默认速度临界值。





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



**`zh`** 不同系统间排序。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `System` | System a  |
| `b` | `System` | System b  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L62)&nbsp;
___
### emitEvents

<div style="margin-left: 10px;">

▸   **emitEvents**<`void`\> : `void`



**`zh`** 
触发`trigger`和`collision`事件。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:386](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L386)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`



**`zh`** 系统初始化函数，会在注册时被 [[Director]] 调用，如果需要的话应该由子类实现





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L76)&nbsp;
___
### postUpdate

<div style="margin-left: 10px;">

▸   **postUpdate**<`void`\>(`deltaTime: number`) : `void`



**`zh`** 
生命周期函数，在所有组件的`update`和`lateUpadte`执行完成后自动执行。



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



**`zh`** 
检测所有的碰撞盒，并记录所有被检测到的结果，通过 PhysicsSystem.instance.raycastResults 访问结果。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldRay` | `Ray` | 世界空间下的一条射线  |
| `mask` | `number` | 掩码，默认为 0xffffffff  |
| `maxDistance` | `number` | 最大检测距离，默认为 10000000，目前请勿传入 Infinity 或 Number.MAX_VALUE  |
| `queryTrigger` | `boolean` | 是否检测触发器  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L401)&nbsp;
___
### raycastClosest

<div style="margin-left: 10px;">

▸   **raycastClosest**<`boolean`\>(`worldRay: Ray, mask: number, maxDistance: number, queryTrigger: boolean`) : `boolean`



**`zh`** 
检测所有的碰撞盒，并记录与射线距离最短的检测结果，通过 PhysicsSystem.instance.raycastClosestResult 访问结果。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldRay` | `Ray` | 世界空间下的一条射线  |
| `mask` | `number` | 掩码，默认为 0xffffffff  |
| `maxDistance` | `number` | 最大检测距离，默认为 10000000，目前请勿传入 Infinity 或 Number.MAX_VALUE  |
| `queryTrigger` | `boolean` | 是否检测触发器  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:422](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L422)&nbsp;
___
### resetAccumulator

<div style="margin-left: 10px;">

▸   **resetAccumulator**<`void`\>(`time: number`) : `void`



**`zh`** 
重置时间累积总量为给定值。




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



**`zh`** 
执行物理世界的模拟步进。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fixedTimeStep` | `number` |   |
| `deltaTime` | `undefined \| number` | - |
| `maxSubSteps` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L366)&nbsp;
___
### syncSceneToPhysics

<div style="margin-left: 10px;">

▸   **syncSceneToPhysics**<`void`\> : `void`



**`zh`** 
同步场景世界的变化信息到物理世界中。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/physics-system.ts:376](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-system.ts#L376)&nbsp;
___
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: number`) : `void`



**`zh`** 系统的帧更新函数，它会在所有组件的 update 和 lateUpdate 之间被调用



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




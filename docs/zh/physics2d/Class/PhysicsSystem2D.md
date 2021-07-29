
## Class: PhysicsSystem2D




`extend: `
[IEventified](docs/zh/event/Interface/IEventified.md)&nbsp;








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




**`zh`** 
获取物理系统实例。





• `static` **instance**:
 ``PhysicsSystem2D`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L163)&nbsp;


___


### ID
<div style="margin-left: 10px;">




**`zh`** 
获取此系统的ID。





• `static` **ID**:
  = `"PHYSICS_2D"`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L143)&nbsp;


___


### collisionMatrix
<div style="margin-left: 10px;">




**`zh`** 
获取碰撞矩阵。





•  **collisionMatrix**:
`ICollisionMatrix`  = `new CollisionMatrix() as unknown as ICollisionMatrix`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L176)&nbsp;


___


### physicsWorld
<div style="margin-left: 10px;">




**`zh`** 
获取物理世界的封装对象，通过它你可以访问到实际的底层对象。





•  **physicsWorld**:
`IPhysicsWorld` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L135)&nbsp;


___


### positionIterations
<div style="margin-left: 10px;">




**`zh`** 
位置迭代更新数





•  **positionIterations**:
`number`  = `10`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L127)&nbsp;


___


### velocityIterations
<div style="margin-left: 10px;">




**`zh`** 
速度更新迭代数





•  **velocityIterations**:
`number`  = `10`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L120)&nbsp;


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

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L39)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L42)&nbsp;


___


### autoSimulation
<div style="margin-left: 10px;">




**`zh`** 
获取或设置是否自动模拟。





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




**`zh`** 
获取或设置是否启用物理系统，可以用于暂停或继续运行物理系统。





•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:26](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L26)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:29](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L29)&nbsp;


___


### fixedTimeStep
<div style="margin-left: 10px;">




**`zh`** 
获取或设置每步模拟消耗的固定时间。





•  **fixedTimeStep**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L85)&nbsp;   [cocos/physics-2d/framework/physics-system.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L89)&nbsp;


___


### gravity
<div style="margin-left: 10px;">




**`zh`** 
获取或设置物理世界的重力数值，默认为 (0, -10)。





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




**`zh`** 
获取或设置每帧模拟的最大子步数。





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




**`zh`** 不同系统间排序。




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
### emit
<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`




**`zh`** 派发一个指定事件，并传递需要的参数




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
### hasEventListener
<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`




**`zh`** 检查指定事件是否已注册回调。




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
### init
<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`




**`zh`** 系统初始化函数，会在注册时被 [[Director]] 调用，如果需要的话应该由子类实现





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L76)&nbsp;
___
### off
<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: EventType, callback: TFunction, thisArg: any`) : `void`




**`zh`** 
删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。





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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type being removed.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback to remove.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L114)&nbsp;
___
### on
<div style="margin-left: 10px;">

▸   **on**(`type: EventType, callback: TFunction, thisArg: any, once: undefined | false | true`)




**`zh`** 
注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。





**`example`**

```ts

import { log } from 'cc';
eventTarget.on('fire', function () {
    log("fire in the hole");
}, node);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | The target (this object) to invoke the callback, can be null  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `once` | `undefined \| false \| true` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L72)&nbsp;
___
### once
<div style="margin-left: 10px;">

▸   **once**(`type: EventType, callback: TFunction, thisArg: any`)




**`zh`** 
注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。





**`example`**

```ts

import { log } from 'cc';
eventTarget.once('fire', function () {
    log("this is the callback and will be invoked only once");
}, node);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L91)&nbsp;
___
### postUpdate
<div style="margin-left: 10px;">

▸   **postUpdate**<`void`\>(`deltaTime: number`) : `void`




**`zh`** 
执行一次物理系统的模拟，目前将在每帧自动执行一次。




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 
检测哪些碰撞体在给定射线的路径上，射线检测将忽略包含起始点的碰撞体。




**`method`** rayCast




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p1` | `IVec2Like` | start point of the raycast  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `p2` | `IVec2Like` | end point of the raycast  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `ERaycast2DType` | optional, default is RayCastType.Closest  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `mask` | `number` | optional, default is 0xffffffff  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/physics-system.ts:312](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/physics-system.ts#L312)&nbsp;
___
### removeAll
<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`




**`zh`** 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 
重置时间累积总量为给定值。





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 
执行物理世界的模拟步进。




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。




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
### testAABB
<div style="margin-left: 10px;">

▸   **testAABB**(`rect: Rect`)




**`zh`** 检测给定点在哪些碰撞体内。





<!---->

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




**`zh`** 检测给定点在哪些碰撞体内。





<!---->

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




**`zh`** 系统的帧更新函数，它会在所有组件的 update 和 lateUpdate 之间被调用




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




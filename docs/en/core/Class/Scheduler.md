
## Class: Scheduler














**`en`** 
Scheduler is responsible of triggering the scheduled callbacks.<br>
You should not use NSTimer. Instead use this class.<br>
<br>
There are 2 different types of callbacks (selectors):<br>
    - update callback: the 'update' callback will be called every frame. You can customize the priority.<br>
    - custom callback: A custom callback will be called every frame, or with a custom interval of time<br>
<br>
The 'custom selectors' should be avoided when possible. It is faster,<br>
and consumes less memory to use the 'update callback'. *


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ID](#ID)
- [ id](#id)
- [ priority](#priority)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  sortByPriority](#sortByPriority)
- [ **`static`**  enableForTarget](#enableForTarget)
- [ getTimeScale](#getTimeScale)
- [ init](#init)
- [ isScheduled](#isScheduled)
- [ isTargetPaused](#isTargetPaused)
- [ pauseAllTargets](#pauseAllTargets)
- [ pauseAllTargetsWithMinPriority](#pauseAllTargetsWithMinPriority)
- [ pauseTarget](#pauseTarget)
- [ postUpdate](#postUpdate)
- [ resumeTarget](#resumeTarget)
- [ resumeTargets](#resumeTargets)
- [ schedule](#schedule)
- [ scheduleUpdate](#scheduleUpdate)
- [ setTimeScale](#setTimeScale)
- [ unschedule](#unschedule)
- [ unscheduleAll](#unscheduleAll)
- [ unscheduleAllForTarget](#unscheduleAllForTarget)
- [ unscheduleAllWithMinPriority](#unscheduleAllWithMinPriority)
- [ unscheduleUpdate](#unscheduleUpdate)
- [ update](#update)
</div>

## Properties


### ID
<div style="margin-left: 10px;">




• `static` **ID**:
`string`  = `"scheduler"`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:350](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L350)&nbsp;


___


### id
<div style="margin-left: 10px;">




•  **id**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L49)&nbsp;   [cocos/core/components/system.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L52)&nbsp;


___


### priority
<div style="margin-left: 10px;">




•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L42)&nbsp;   [cocos/core/components/system.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L45)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Scheduler**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L385)&nbsp;


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
### enableForTarget
<div style="margin-left: 10px;">

▸ `static`  **enableForTarget**<`void`\>(`target: ISchedulable`) : `void`




**`en`** This method should be called for any target which needs to schedule tasks, and this method should be called before any scheduler API usage.<bg>
This method will add a `id` property if it doesn't exist.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L370)&nbsp;
___
### getTimeScale
<div style="margin-left: 10px;">

▸   **getTimeScale**<`number`\> : `number`




**`en`** Returns time scale of scheduler.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:428](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L428)&nbsp;
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
### isScheduled
<div style="margin-left: 10px;">

▸   **isScheduled**(`callback: any, target: ISchedulable`)




**`en`** Checks whether a callback for a given target is scheduled.




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback to check.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` | The target of the callback.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:866](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L866)&nbsp;
___
### isTargetPaused
<div style="margin-left: 10px;">

▸   **isTargetPaused**<`any`\>(`target: ISchedulable`) : `any`




**`en`** Returns whether or not the target is paused.




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` |   |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:1062](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L1062)&nbsp;
___
### pauseAllTargets
<div style="margin-left: 10px;">

▸   **pauseAllTargets**<`any`\> : `any`




**`en`** 
Pause all selectors from all targets.<br/>
You should NEVER call this method, unless you know what you are doing.




<!---->
<!--    #### Returns `any` -->
<!---->


##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:906](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L906)&nbsp;
___
### pauseAllTargetsWithMinPriority
<div style="margin-left: 10px;">

▸   **pauseAllTargetsWithMinPriority**<`any`\>(`minPriority: number`) : `any`




**`en`** 
Pause all selectors from all targets with a minimum priority. <br/>
You should only call this with kCCPriorityNonSystemMin or higher.




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minPriority` | `number` |   |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:919](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L919)&nbsp;
___
### pauseTarget
<div style="margin-left: 10px;">

▸   **pauseTarget**<`void`\>(`target: ISchedulable`) : `void`




**`en`** 
Pauses the target.<br/>
All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
If the target is not present, nothing happens.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:1002](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L1002)&nbsp;
___
### postUpdate
<div style="margin-left: 10px;">

▸   **postUpdate**<`void`\>(`dt: number`) : `void`




**`en`** Post update function of the system, it will be invoked after all components late update phase and before the rendering process.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | Delta time after the last frame  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L88)&nbsp;
___
### resumeTarget
<div style="margin-left: 10px;">

▸   **resumeTarget**<`void`\>(`target: ISchedulable`) : `void`




**`en`** 
Resumes the target.<br/>
The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
If the target is not present, nothing happens.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:1035](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L1035)&nbsp;
___
### resumeTargets
<div style="margin-left: 10px;">

▸   **resumeTargets**<`void`\>(`targetsToResume: any`) : `void`




**`en`** 
Resume selectors on a set of targets.<br/>
This can be useful for undoing a call to pauseAllCallbacks.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `targetsToResume` | `any` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:981](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L981)&nbsp;
___
### schedule
<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: Function, target: ISchedulable, interval: number, repeat: undefined | number, delay: undefined | number, paused: undefined | false | true`) : `void`




**`en`** 
<p>
  The scheduled method will be called every 'interval' seconds.<br/>
  If paused is YES, then it won't be called until it is resumed.<br/>
  If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
  If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
  repeat let the action be repeated repeat + 1 times, use `macro.REPEAT_FOREVER` to let the action run continuously<br/>
  delay is the amount of time the action will wait before it'll start<br/>
</p>




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `Function` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `interval` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `repeat` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `delay` | `undefined \| number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `paused` | `undefined \| false \| true` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:555](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L555)&nbsp;
___
### scheduleUpdate
<div style="margin-left: 10px;">

▸   **scheduleUpdate**<`void`\>(`target: ISchedulable, priority: number, paused: boolean`) : `void`




**`en`** 
Schedules the update callback for a given target,
During every frame after schedule started, the "update" function of target will be invoked.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `priority` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `paused` | `boolean` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:623](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L623)&nbsp;
___
### setTimeScale
<div style="margin-left: 10px;">

▸   **setTimeScale**<`void`\>(`timeScale: any`) : `void`




**`en`** 
Modifies the time of all scheduled callbacks.<br>
You can use this property to create a 'slow motion' or 'fast forward' effect.<br>
Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br>
To create a 'fast forward' effect, use values higher than 1.0.<br>
Note：It will affect EVERY scheduled selector / action.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timeScale` | `any` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:420](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L420)&nbsp;
___
### unschedule
<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback: any, target: ISchedulable`) : `void`




**`en`** 
Unschedules a callback for a callback and a given target.
If you want to unschedule the "update", use `unscheduleUpdate()`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback to be unscheduled  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` | The target bound to the callback.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:676](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L676)&nbsp;
___
### unscheduleAll
<div style="margin-left: 10px;">

▸   **unscheduleAll**<`void`\> : `void`




**`en`** 
Unschedules all scheduled callbacks from all targets including the system callbacks.<br/>
You should NEVER call this method, unless you know what you are doing.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:794](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L794)&nbsp;
___
### unscheduleAllForTarget
<div style="margin-left: 10px;">

▸   **unscheduleAllForTarget**<`void`\>(`target: any`) : `void`




**`en`** 
Unschedules all scheduled callbacks for a given target.
This also includes the "update" callback.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | The target to be unscheduled.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:751](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L751)&nbsp;
___
### unscheduleAllWithMinPriority
<div style="margin-left: 10px;">

▸   **unscheduleAllWithMinPriority**<`void`\>(`minPriority: number`) : `void`




**`en`** 
Unschedules all callbacks from all targets with a minimum priority.<br/>
You should only call this with `PRIORITY_NON_SYSTEM_MIN` or higher.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minPriority` | `number` | The minimum priority of selector to be unscheduled. Which means, all selectors which       priority is higher than minPriority will be unscheduled.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:808](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L808)&nbsp;
___
### unscheduleUpdate
<div style="margin-left: 10px;">

▸   **unscheduleUpdate**<`void`\>(`target: ISchedulable`) : `void`




**`en`** Unschedules the update callback for a given target.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` | The target to be unscheduled.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:724](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L724)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: any`) : `void`




**`en`** 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `any` | delta time  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:437](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L437)&nbsp;
___
<!---->




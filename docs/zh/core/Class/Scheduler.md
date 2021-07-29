
## Class: Scheduler












**`zh`** 
Scheduler 是负责触发回调函数的类。<br>
通常情况下，建议使用 `director.getScheduler()` 来获取系统定时器。<br>
有两种不同类型的定时器：<br>
    - update 定时器：每一帧都会触发。您可以自定义优先级。<br>
    - 自定义定时器：自定义定时器可以每一帧或者自定义的时间间隔触发。<br>
如果希望每帧都触发，应该使用 update 定时器，使用 update 定时器更快，而且消耗更少的内存。



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

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L385)&nbsp;


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
### enableForTarget

<div style="margin-left: 10px;">

▸ `static`  **enableForTarget**<`void`\>(`target: ISchedulable`) : `void`



**`zh`** 任何需要用 Scheduler 管理任务的对象主体都应该调用这个方法，并且应该在调用任何 Scheduler API 之前调用这个方法。<bg>
这个方法会给对象添加一个 `id` 属性，如果这个属性不存在的话。



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



**`zh`** 获取时间间隔的缩放比例。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:428](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L428)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`



**`zh`** 系统初始化函数，会在注册时被 [[Director]] 调用，如果需要的话应该由子类实现





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L76)&nbsp;
___
### isScheduled

<div style="margin-left: 10px;">

▸   **isScheduled**(`callback: any, target: ISchedulable`)



**`zh`** 检查指定的回调函数和回调对象组合是否存在定时器。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback to check.  |
| `target` | `ISchedulable` | The target of the callback.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:866](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L866)&nbsp;
___
### isTargetPaused

<div style="margin-left: 10px;">

▸   **isTargetPaused**<`any`\>(`target: ISchedulable`) : `any`



**`zh`** 返回指定对象的定时器是否处于暂停状态。



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



**`zh`** 
暂停所有对象的所有定时器。<br/>
不要调用这个方法，除非你知道你正在做什么。





##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:906](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L906)&nbsp;
___
### pauseAllTargetsWithMinPriority

<div style="margin-left: 10px;">

▸   **pauseAllTargetsWithMinPriority**<`any`\>(`minPriority: number`) : `any`



**`zh`** 
暂停所有优先级的值大于指定优先级的定时器。<br/>
你应该只暂停优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。



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



**`zh`** 
暂停指定对象的定时器。<br/>
指定对象的所有定时器都会被暂停。<br/>
如果指定的对象没有定时器，什么也不会发生。



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



**`zh`** 系统的帧后处理函数，它会在所有组件的 lateUpdate 之后以及渲染之前被调用



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



**`zh`** 
恢复指定对象的所有定时器。<br/>
指定对象的所有定时器将继续工作。<br/>
如果指定的对象没有定时器，什么也不会发生。



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



**`zh`** 
恢复指定数组中所有对象的定时器。<br/>
这个函数是 pauseAllCallbacks 的逆操作。



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



**`zh`** 
指定回调函数，调用对象等信息来添加一个新的定时器。<br/>
如果 paused 值为 true，那么直到 resume 被调用才开始计时。<br/>
当时间间隔达到指定值时，设置的回调函数将会被调用。<br/>
如果 interval 值为 0，那么回调函数每一帧都会被调用，但如果是这样，
建议使用 scheduleUpdateForTarget 代替。<br/>
如果回调函数已经被定时器使用，那么只会更新之前定时器的时间间隔参数，不会设置新的定时器。<br/>
repeat 值可以让定时器触发 repeat + 1 次，使用 `macro.REPEAT_FOREVER`
可以让定时器一直循环触发。<br/>
delay 值指定延迟时间，定时器会在延迟指定的时间之后开始计时。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `Function` | - |
| `target` | `ISchedulable` | - |
| `interval` | `number` | - |
| `repeat` | `undefined \| number` | - |
| `delay` | `undefined \| number` | - |
| `paused` | `undefined \| false \| true` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:555](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L555)&nbsp;
___
### scheduleUpdate

<div style="margin-left: 10px;">

▸   **scheduleUpdate**<`void`\>(`target: ISchedulable, priority: number, paused: boolean`) : `void`



**`zh`** 
使用指定的优先级为指定的对象设置 update 定时器。<br>
update 定时器每一帧都会被触发，触发时自动调用指定对象的 "update" 函数。<br>
优先级的值越低，定时器被触发的越早。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` | - |
| `priority` | `number` | - |
| `paused` | `boolean` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:623](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L623)&nbsp;
___
### setTimeScale

<div style="margin-left: 10px;">

▸   **setTimeScale**<`void`\>(`timeScale: any`) : `void`



**`zh`** 
设置时间间隔的缩放比例。<br>
您可以使用这个方法来创建一个 “slow motion（慢动作）” 或 “fast forward（快进）” 的效果。<br>
默认是 1.0。要创建一个 “slow motion（慢动作）” 效果,使用值低于 1.0。<br>
要使用 “fast forward（快进）” 效果，使用值大于 1.0。<br>
注意：它影响该 Scheduler 下管理的所有定时器。



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



**`zh`** 
取消指定对象定时器。
如果需要取消 update 定时器，请使用 unscheduleUpdate()。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback to be unscheduled  |
| `target` | `ISchedulable` | The target bound to the callback.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:676](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L676)&nbsp;
___
### unscheduleAll

<div style="margin-left: 10px;">

▸   **unscheduleAll**<`void`\> : `void`



**`zh`** 
取消所有对象的所有定时器，包括系统定时器。<br/>
不要调用此函数，除非你确定你在做什么。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:794](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L794)&nbsp;
___
### unscheduleAllForTarget

<div style="margin-left: 10px;">

▸   **unscheduleAllForTarget**<`void`\>(`target: any`) : `void`



**`zh`** 取消指定对象的所有定时器，包括 update 定时器。



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



**`zh`** 
取消所有优先级的值大于指定优先级的定时器。<br/>
你应该只取消优先级的值大于 PRIORITY_NON_SYSTEM_MIN 的定时器。



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



**`zh`** 取消指定对象的 update 定时器。



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



**`zh`** update 调度函数。(不应该直接调用这个方法，除非完全了解这么做的结果)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `any` | delta time  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:437](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L437)&nbsp;
___
<!---->




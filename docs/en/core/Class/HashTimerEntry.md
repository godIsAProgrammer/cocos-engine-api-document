
## Class: HashTimerEntry






**`en`** Hash Element used for "selectors with interval"




**`param`** hash key (retained)






**`param`** 



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ currentTimer](#currentTimer)
- [ currentTimerSalvaged](#currentTimerSalvaged)
- [ paused](#paused)
- [ target](#target)
- [ timerIndex](#timerIndex)
- [ timers](#timers)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  put](#put)
- [ **`static`**  get](#get)
</div>

## Properties


### currentTimer
<div style="margin-left: 10px;">




•  **currentTimer**:
`any` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L177)&nbsp;


___


### currentTimerSalvaged
<div style="margin-left: 10px;">




•  **currentTimerSalvaged**:
`any` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L178)&nbsp;


___


### paused
<div style="margin-left: 10px;">




•  **paused**:
`any` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L179)&nbsp;


___


### target
<div style="margin-left: 10px;">




•  **target**:
`ISchedulable` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L175)&nbsp;


___


### timerIndex
<div style="margin-left: 10px;">




•  **timerIndex**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L176)&nbsp;


___


### timers
<div style="margin-left: 10px;">




•  **timers**:
`any` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L174)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new HashTimerEntry**(`timers: any, target: ISchedulable, timerIndex: number, currentTimer: any, currentTimerSalvaged: any, paused: any`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timers` | `any` |
| `target` | `ISchedulable` |
| `timerIndex` | `number` |
| `currentTimer` | `any` |
| `currentTimerSalvaged` | `any` |
| `paused` | `any` |
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L179)&nbsp;


---

<!---->
## Methods

### put

<div style="margin-left: 10px;">

▸ `static`  **put**<`void`\>(`entry: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:165](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L165)&nbsp;
___
### get

<div style="margin-left: 10px;">

▸ `static`  **get**<`any`\>(`timers: any, target: ISchedulable, timerIndex: number, currentTimer: any, currentTimerSalvaged: any, paused: any`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timers` | `any` | - |
| `target` | `ISchedulable` | - |
| `timerIndex` | `number` | - |
| `currentTimer` | `any` | - |
| `currentTimerSalvaged` | `any` | - |
| `paused` | `any` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L150)&nbsp;
___
<!---->




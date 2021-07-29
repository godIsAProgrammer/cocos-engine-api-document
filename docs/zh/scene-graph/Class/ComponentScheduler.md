
## Class: ComponentScheduler






**`zh`** 组件生命周期函数的调度器。
它和 [[NodeActivator]] 一起调度并执行组件的生命周期函数。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ lateUpdateInvoker](#lateUpdateInvoker)
- [ startInvoker](#startInvoker)
- [ updateInvoker](#updateInvoker)

### Constructors

- [ constructor](#constructor)

### Methods

- [ disableComp](#disableComp)
- [ enableComp](#enableComp)
- [ lateUpdatePhase](#lateUpdatePhase)
- [ startPhase](#startPhase)
- [ unscheduleAll](#unscheduleAll)
- [ updatePhase](#updatePhase)
</div>

## Properties


### lateUpdateInvoker
<div style="margin-left: 10px;">



**`zh`** `lateUpdate` 回调的调度器





•  **lateUpdateInvoker**:
`ReusableInvoker` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L348)&nbsp;


___


### startInvoker
<div style="margin-left: 10px;">



**`zh`** `start` 回调的调度器





•  **startInvoker**:
`OneOffInvoker` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L338)&nbsp;


___


### updateInvoker
<div style="margin-left: 10px;">



**`zh`** `update` 回调的调度器





•  **updateInvoker**:
`ReusableInvoker` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L343)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ComponentScheduler**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L351)&nbsp;


---

<!---->
## Methods

### disableComp

<div style="margin-left: 10px;">

▸   **disableComp**<`void`\>(`comp: any`) : `void`



**`zh`** 禁用一个组件



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `comp` | `any` | The component to be disabled  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:436](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L436)&nbsp;
___
### enableComp

<div style="margin-left: 10px;">

▸   **enableComp**<`void`\>(`comp: any, invoker: any`) : `void`



**`zh`** 启用一个组件



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `comp` | `any` | The component to be enabled  |
| `invoker` | `any` | The invoker which is responsible to schedule the `onEnable` call  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:412](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L412)&nbsp;
___
### lateUpdatePhase

<div style="margin-left: 10px;">

▸   **lateUpdatePhase**<`void`\>(`dt: number`) : `void`



**`zh`** 为当前注册的组件执行 late update 阶段任务



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | 距离上一帧的时间  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:488](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L488)&nbsp;
___
### startPhase

<div style="margin-left: 10px;">

▸   **startPhase**<`void`\> : `void`



**`zh`** 为当前注册的组件执行 start 阶段任务





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:449](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L449)&nbsp;
___
### unscheduleAll

<div style="margin-left: 10px;">

▸   **unscheduleAll**<`void`\> : `void`



**`zh`** 取消所有未来的函数调度，包括 `start`，`update` 和 `lateUpdate`





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:361](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L361)&nbsp;
___
### updatePhase

<div style="margin-left: 10px;">

▸   **updatePhase**<`void`\>(`dt: number`) : `void`



**`zh`** 为当前注册的组件执行 update 阶段任务



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | 距离上一帧的时间  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:479](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L479)&nbsp;
___
<!---->




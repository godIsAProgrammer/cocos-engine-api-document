
## Class: ComponentScheduler







**`en`** The Manager for Component's life-cycle methods.
It collaborates with [[NodeActivator]] to schedule and invoke life cycle methods for components


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




**`en`** The invoker of `lateUpdate` callback




•  **lateUpdateInvoker**:
`ReusableInvoker` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L348)&nbsp;


___


### startInvoker
<div style="margin-left: 10px;">




**`en`** The invoker of `start` callback




•  **startInvoker**:
`OneOffInvoker` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L338)&nbsp;


___


### updateInvoker
<div style="margin-left: 10px;">




**`en`** The invoker of `update` callback




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
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L351)&nbsp;


---

<!---->
## Methods

### disableComp
<div style="margin-left: 10px;">

▸   **disableComp**<`void`\>(`comp: any`) : `void`




**`en`** Disable a component




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** Enable a component




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `comp` | `any` | The component to be enabled  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `invoker` | `any` | The invoker which is responsible to schedule the `onEnable` call  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:412](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L412)&nbsp;
___
### lateUpdatePhase
<div style="margin-left: 10px;">

▸   **lateUpdatePhase**<`void`\>(`dt: number`) : `void`




**`en`** Process late update phase for registered components




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** Process start phase for registered components




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:449](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L449)&nbsp;
___
### unscheduleAll
<div style="margin-left: 10px;">

▸   **unscheduleAll**<`void`\> : `void`




**`en`** Cancel all future callbacks, including `start`, `update` and `lateUpdate`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:361](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L361)&nbsp;
___
### updatePhase
<div style="margin-left: 10px;">

▸   **updatePhase**<`void`\>(`dt: number`) : `void`




**`en`** Process update phase for registered components




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | 距离上一帧的时间  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/component-scheduler.ts:479](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/component-scheduler.ts#L479)&nbsp;
___
<!---->




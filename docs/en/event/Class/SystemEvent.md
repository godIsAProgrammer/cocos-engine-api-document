
## Class: SystemEvent




`extend: `
[Empty](docs/en/event/Class/Empty.md)&nbsp;
[IEventified](docs/en/event/Interface/IEventified.md)&nbsp;








**`en`** 
The System event, it currently supports keyboard events and accelerometer events.<br/>
You can get the `SystemEvent` instance with `systemEvent`.<br/>



**`example`**

```ts


import { systemEvent, SystemEvent } from 'cc';
systemEvent.on(SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
systemEvent.off(SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);


```


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  EventType](#EventType)

### Constructors

- [ constructor](#constructor)

### Methods

- [ emit](#emit)
- [ hasEventListener](#hasEventListener)
- [ off](#off)
- [ on](#on)
- [ once](#once)
- [ removeAll](#removeAll)
- [ setAccelerometerEnabled](#setAccelerometerEnabled)
- [ setAccelerometerInterval](#setAccelerometerInterval)
- [ targetOff](#targetOff)
</div>

## Properties


### EventType
<div style="margin-left: 10px;">




• `static` **EventType**:
`SystemEventType`  = `SystemEventType`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/system-event.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L64)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new SystemEvent**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/system-event.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L64)&nbsp;


---

<!---->
## Methods

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
### off

<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: string, callback: undefined | , target: any`) : `void`



**`en`** 
Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type being removed.  |
| `callback` | `undefined \| ` | The callback to remove.  |
| `target` | `any` | The target (this object) to invoke the callback, if it's not given, only callback without target will be removed  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/system-event.ts:238](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L238)&nbsp;
___
### on

<div style="margin-left: 10px;">

▸   **on**(`type: KEY_DOWN | KEY_UP, callback: undefined, target: unknown`)



**`en`** 
Register an callback of a specific system event type.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `KEY_DOWN \| KEY_UP` | - |
| `callback` |  | - |
| `target` | `unknown` | - |


##### Returns `void`

▸   **on**(`type: MOUSE_DOWN | MOUSE_ENTER | MOUSE_LEAVE | MOUSE_MOVE | MOUSE_UP | MOUSE_WHEEL, callback: undefined, target: unknown`)



**`en`** 
Register an callback of a specific system event type.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `MOUSE_DOWN \| MOUSE_ENTER \| MOUSE_LEAVE \| MOUSE_MOVE \| MOUSE_UP \| MOUSE_WHEEL` | - |
| `callback` |  | - |
| `target` | `unknown` | - |


##### Returns `void`

▸   **on**(`type: TOUCH_START | TOUCH_MOVE | TOUCH_END | TOUCH_CANCEL, callback: undefined, target: unknown`)



**`en`** 
Register an callback of a specific system event type.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `TOUCH_START \| TOUCH_MOVE \| TOUCH_END \| TOUCH_CANCEL` | - |
| `callback` |  | - |
| `target` | `unknown` | - |


##### Returns `void`

▸   **on**(`type: DEVICEMOTION, callback: undefined, target: unknown`)



**`en`** 
Register an callback of a specific system event type.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `DEVICEMOTION` | - |
| `callback` |  | - |
| `target` | `unknown` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/system-event.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L108)&nbsp;   [cocos/core/platform/event-manager/system-event.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L109)&nbsp;   [cocos/core/platform/event-manager/system-event.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L112)&nbsp;   [cocos/core/platform/event-manager/system-event.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L114)&nbsp;   [cocos/core/platform/event-manager/system-event.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L125)&nbsp;
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
### setAccelerometerEnabled

<div style="margin-left: 10px;">

▸   **setAccelerometerEnabled**<`void`\>(`isEnabled: boolean`) : `void`



**`en`** 
Sets whether to enable the accelerometer event listener or not.




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `isEnabled` | `boolean` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/system-event.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L75)&nbsp;
___
### setAccelerometerInterval

<div style="margin-left: 10px;">

▸   **setAccelerometerInterval**<`void`\>(`interval: number`) : `void`



**`en`** 
Sets the accelerometer interval value.




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `interval` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/system-event.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L101)&nbsp;
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
<!---->




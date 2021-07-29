
## Class: SystemEvent




`extend: `
[Empty](docs/zh/event/Class/Empty.md)&nbsp;
[IEventified](docs/zh/event/Interface/IEventified.md)&nbsp;










**`zh`** 
系统事件，它目前支持按键事件和重力感应事件。<br/>
你可以通过 `systemEvent` 获取到 `SystemEvent` 的实例。<br/>




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
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/system-event.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L64)&nbsp;


---

<!---->
## Methods

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
### off
<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: string, callback: undefined | , target: any`) : `void`




**`zh`** 
删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type being removed.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `undefined \| ` | The callback to remove.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | The target (this object) to invoke the callback, if it's not given, only callback without target will be removed  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/system-event.ts:238](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L238)&nbsp;
___
### on
<div style="margin-left: 10px;">

▸   **on**(`type: KEY_DOWN | KEY_UP, callback: undefined, target: unknown`)




**`zh`** 
注册特定事件类型回调。





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `KEY_DOWN \| KEY_UP` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | - |



##### Returns `void`


▸   **on**(`type: MOUSE_DOWN | MOUSE_ENTER | MOUSE_LEAVE | MOUSE_MOVE | MOUSE_UP | MOUSE_WHEEL, callback: undefined, target: unknown`)




**`zh`** 
注册特定事件类型回调。





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `MOUSE_DOWN \| MOUSE_ENTER \| MOUSE_LEAVE \| MOUSE_MOVE \| MOUSE_UP \| MOUSE_WHEEL` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | - |



##### Returns `void`


▸   **on**(`type: TOUCH_START | TOUCH_MOVE | TOUCH_END | TOUCH_CANCEL, callback: undefined, target: unknown`)




**`zh`** 
注册特定事件类型回调。





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `TOUCH_START \| TOUCH_MOVE \| TOUCH_END \| TOUCH_CANCEL` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | - |



##### Returns `void`


▸   **on**(`type: DEVICEMOTION, callback: undefined, target: unknown`)




**`zh`** 
注册特定事件类型回调。





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `DEVICEMOTION` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `unknown` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/system-event.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L108)&nbsp;   [cocos/core/platform/event-manager/system-event.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L109)&nbsp;   [cocos/core/platform/event-manager/system-event.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L112)&nbsp;   [cocos/core/platform/event-manager/system-event.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L114)&nbsp;   [cocos/core/platform/event-manager/system-event.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/system-event.ts#L125)&nbsp;
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
### setAccelerometerEnabled
<div style="margin-left: 10px;">

▸   **setAccelerometerEnabled**<`void`\>(`isEnabled: boolean`) : `void`




**`zh`** 
是否启用加速度计事件。





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 
设置加速度计间隔值。





<!---->
<!--    #### Returns `void` -->
<!---->

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
<!---->




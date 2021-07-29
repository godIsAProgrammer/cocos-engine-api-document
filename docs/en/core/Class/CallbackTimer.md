
## Class: CallbackTimer





<div class="table-of-content">
<h2>Table of contents</h2>


### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  put](#put)
- [ **`static`**  get](#get)
- [ cancel](#cancel)
- [ getCallback](#getCallback)
- [ getInterval](#getInterval)
- [ initWithCallback](#initWithCallback)
- [ setInterval](#setInterval)
- [ trigger](#trigger)
- [ update](#update)
</div>

## Constructors


### constructor
<div style="margin-left: 10px;">

• **new CallbackTimer**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L214)&nbsp;


---

<!---->
## Methods

### put
<div style="margin-left: 10px;">

▸ `static`  **put**<`void`\>(`timer: any`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `timer` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L197)&nbsp;
___
### get
<div style="margin-left: 10px;">

▸ `static`  **get**<`any`\> : `any`




<!---->
<!--    #### Returns `any` -->
<!---->


##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L196)&nbsp;
___
### cancel
<div style="margin-left: 10px;">

▸   **cancel**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L310)&nbsp;
___
### getCallback
<div style="margin-left: 10px;">

▸   **getCallback**<`any`\> : `any`




<!---->
<!--    #### Returns `any` -->
<!---->


##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L298)&nbsp;
___
### getInterval
<div style="margin-left: 10px;">

▸   **getInterval**<`number`\> : `number`




<!---->
<!--    #### Returns `number` returns interval of timer
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:248](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L248)&nbsp;
___
### initWithCallback
<div style="margin-left: 10px;">

▸   **initWithCallback**<`boolean`\>(`scheduler: any, callback: any, target: ISchedulable, seconds: number, repeat: number, delay: number`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scheduler` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `seconds` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `repeat` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `delay` | `number` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L231)&nbsp;
___
### setInterval
<div style="margin-left: 10px;">

▸   **setInterval**<`void`\>(`interval: any`) : `void`




**`en`** Set interval in seconds




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `interval` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L255)&nbsp;
___
### trigger
<div style="margin-left: 10px;">

▸   **trigger**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L302)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: number`) : `void`




**`en`** Update function which triggers the timer




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | delta time  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:264](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L264)&nbsp;
___
<!---->




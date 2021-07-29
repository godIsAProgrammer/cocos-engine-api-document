
## Class: Touch







**`en`** The touch point class


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ lastModified](#lastModified)

### Constructors

- [ constructor](#constructor)

### Methods

- [ getDelta](#getDelta)
- [ getID](#getID)
- [ getLocation](#getLocation)
- [ getLocationInView](#getLocationInView)
- [ getLocationX](#getLocationX)
- [ getLocationY](#getLocationY)
- [ getPreviousLocation](#getPreviousLocation)
- [ getPreviousLocationInView](#getPreviousLocationInView)
- [ getStartLocation](#getStartLocation)
- [ getStartLocationInView](#getStartLocationInView)
- [ getUIDelta](#getUIDelta)
- [ getUILocation](#getUILocation)
- [ getUILocationX](#getUILocationX)
- [ getUILocationY](#getUILocationY)
- [ getUIPreviousLocation](#getUIPreviousLocation)
- [ getUIStartLocation](#getUIStartLocation)
- [ setPoint](#setPoint)
- [ setPrevPoint](#setPrevPoint)
- [ setTouchInfo](#setTouchInfo)
</div>

## Properties


### lastModified
<div style="margin-left: 10px;">




•  **lastModified**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L48)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Touch**(`x: number, y: number, id: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `x` | `number` |





| Name | Type |
| :------ | :------ |
| `y` | `number` |





| Name | Type |
| :------ | :------ |
| `id` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L50)&nbsp;


---

<!---->
## Methods

### getDelta
<div style="margin-left: 10px;">

▸   **getDelta**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the delta distance from the previous touche to the current one.




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L187)&nbsp;
___
### getID
<div style="margin-left: 10px;">

▸   **getID**<`number`\> : `number`




**`en`** Returns the id of the touch point.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L260)&nbsp;
___
### getLocation
<div style="margin-left: 10px;">

▸   **getLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the current touch location in OpenGL coordinates.、




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L66)&nbsp;
___
### getLocationInView
<div style="margin-left: 10px;">

▸   **getLocationInView**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the current touch location in screen coordinates.




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L219)&nbsp;
___
### getLocationX
<div style="margin-left: 10px;">

▸   **getLocationX**<`number`\> : `number`




**`en`** Returns X axis location value.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L79)&nbsp;
___
### getLocationY
<div style="margin-left: 10px;">

▸   **getLocationY**<`number`\> : `number`




**`en`** Returns Y axis location value.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L87)&nbsp;
___
### getPreviousLocation
<div style="margin-left: 10px;">

▸   **getPreviousLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the previous touch location.




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L129)&nbsp;
___
### getPreviousLocationInView
<div style="margin-left: 10px;">

▸   **getPreviousLocationInView**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the previous touch location in screen coordinates.




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L233)&nbsp;
___
### getStartLocation
<div style="margin-left: 10px;">

▸   **getStartLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the start touch location.




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L158)&nbsp;
___
### getStartLocationInView
<div style="margin-left: 10px;">

▸   **getStartLocationInView**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the start touch location in screen coordinates.




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L247)&nbsp;
___
### getUIDelta
<div style="margin-left: 10px;">

▸   **getUIDelta**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the delta distance from the previous touche to the current one in UI coordinates.




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:202](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L202)&nbsp;
___
### getUILocation
<div style="margin-left: 10px;">

▸   **getUILocation**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the current touch location in UI coordinates.、




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L96)&nbsp;
___
### getUILocationX
<div style="margin-left: 10px;">

▸   **getUILocationX**<`number`\> : `number`




**`en`** Returns X axis location value in UI coordinates.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L110)&nbsp;
___
### getUILocationY
<div style="margin-left: 10px;">

▸   **getUILocationY**<`number`\> : `number`




**`en`** Returns Y axis location value in UI coordinates.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L119)&nbsp;
___
### getUIPreviousLocation
<div style="margin-left: 10px;">

▸   **getUIPreviousLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the previous touch location in UI coordinates.




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L143)&nbsp;
___
### getUIStartLocation
<div style="margin-left: 10px;">

▸   **getUIStartLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the start touch location in UI coordinates.




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L172)&nbsp;
___
### setPoint
<div style="margin-left: 10px;">

▸   **setPoint**<`void`\>(`point: Vec2`) : `void`




**`en`** Sets touch point location.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | The location  |



##### Returns `void`


▸   **setPoint**<`void`\>(`x: number, y: number`) : `void`




**`en`** Sets touch point location.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | x position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | y position  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:287](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L287)&nbsp;   [cocos/core/platform/event-manager/touch.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L295)&nbsp;   [cocos/core/platform/event-manager/touch.ts:297](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L297)&nbsp;
___
### setPrevPoint
<div style="margin-left: 10px;">

▸   **setPrevPoint**<`void`\>(`point: Vec2`) : `void`




**`en`** Sets the location previously registered for the current touch.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | The location  |



##### Returns `void`


▸   **setPrevPoint**<`void`\>(`x: number, y: number`) : `void`




**`en`** Sets the location previously registered for the current touch.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | x position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | y position  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:313](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L313)&nbsp;   [cocos/core/platform/event-manager/touch.ts:321](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L321)&nbsp;   [cocos/core/platform/event-manager/touch.ts:323](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L323)&nbsp;
___
### setTouchInfo
<div style="margin-left: 10px;">

▸   **setTouchInfo**<`void`\>(`id: number, x: undefined | number, y: undefined | number`) : `void`




**`en`** Resets touch point information.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `id` | `number` | The id of the touch point  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `undefined \| number` | x position of the touch point  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `undefined \| number` | y position of the touch point  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/touch.ts:271](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/touch.ts#L271)&nbsp;
___
<!---->




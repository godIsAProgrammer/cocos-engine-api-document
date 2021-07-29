
## Class: EventMouse


`extend:`
[Event](docs/en/event/Class/Event.md)










**`en`** The mouse event


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ACCELERATION](#ACCELERATION)
- [ **`static`**  KEYBOARD](#KEYBOARD)
- [ **`static`**  MOUSE](#MOUSE)
- [ **`static`**  NONE](#NONE)
- [ **`static`**  TOUCH](#TOUCH)
- [ bubbles](#bubbles)
- [ currentTarget](#currentTarget)
- [ eventPhase](#eventPhase)
- [ eventType](#eventType)
- [ movementX](#movementX)
- [ movementY](#movementY)
- [ propagationImmediateStopped](#propagationImmediateStopped)
- [ propagationStopped](#propagationStopped)
- [ target](#target)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ getButton](#getButton)
- [ getCurrentTarget](#getCurrentTarget)
- [ getDelta](#getDelta)
- [ getDeltaX](#getDeltaX)
- [ getDeltaY](#getDeltaY)
- [ getLocation](#getLocation)
- [ getLocationInView](#getLocationInView)
- [ getLocationX](#getLocationX)
- [ getLocationY](#getLocationY)
- [ getPreviousLocation](#getPreviousLocation)
- [ getScrollX](#getScrollX)
- [ getScrollY](#getScrollY)
- [ getType](#getType)
- [ getUIDelta](#getUIDelta)
- [ getUIDeltaX](#getUIDeltaX)
- [ getUIDeltaY](#getUIDeltaY)
- [ getUILocation](#getUILocation)
- [ getUILocationX](#getUILocationX)
- [ getUILocationY](#getUILocationY)
- [ getUIPreviousLocation](#getUIPreviousLocation)
- [ isStopped](#isStopped)
- [ reuse](#reuse)
- [ setButton](#setButton)
- [ setLocation](#setLocation)
- [ setScrollData](#setScrollData)
- [ unuse](#unuse)
</div>

## Properties


### ACCELERATION
<div style="margin-left: 10px;">



**`en`** 
The type code of Acceleration event.





• `static` **ACCELERATION**:
`string`  = `"acceleration"`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L84)&nbsp;


___


### KEYBOARD
<div style="margin-left: 10px;">



**`en`** 
The type code of Keyboard event.





• `static` **KEYBOARD**:
`string`  = `"keyboard"`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L76)&nbsp;


___


### MOUSE
<div style="margin-left: 10px;">



**`en`** 
The type code of Mouse event.





• `static` **MOUSE**:
`string`  = `"mouse"`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L68)&nbsp;


___


### NONE
<div style="margin-left: 10px;">



**`en`** 
Events not currently dispatched are in this phase.





• `static` **NONE**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L95)&nbsp;


___


### TOUCH
<div style="margin-left: 10px;">



**`en`** 
The type code of Touch event.





• `static` **TOUCH**:
`string`  = `"touch"`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L60)&nbsp;


___


### bubbles
<div style="margin-left: 10px;">



**`en`** 
Indicate whether the event bubbles up through the hierarchy or not.





•  **bubbles**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L143)&nbsp;


___


### currentTarget
<div style="margin-left: 10px;">



**`en`** 
A reference to the currently registered target for the event.





•  **currentTarget**:
`Object | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L161)&nbsp;


___


### eventPhase
<div style="margin-left: 10px;">



**`en`** 
Indicates which phase of the event flow is currently being evaluated.
Returns an integer value represented by 4 constants:
 - Event.NONE = 0
 - Event.CAPTURING_PHASE = 1
 - Event.AT_TARGET = 2
 - Event.BUBBLING_PHASE = 3
The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
[markdown](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.





•  **eventPhase**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L177)&nbsp;


___


### eventType
<div style="margin-left: 10px;">



**`en`** The type of the event, possible values are UP, DOWN, MOVE, SCROLL




•  **eventType**:
`string` 
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L115)&nbsp;


___


### movementX
<div style="margin-left: 10px;">



**`en`** Mouse movement on x axis of the UI coordinate system.




•  **movementX**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L103)&nbsp;


___


### movementY
<div style="margin-left: 10px;">



**`en`** Mouse movement on y axis of the UI coordinate system.




•  **movementY**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L109)&nbsp;


___


### propagationImmediateStopped
<div style="margin-left: 10px;">



**`en`** 
Stops propagation for current event immediately,
the event won't even be dispatched to the listeners attached in the current target.





•  **propagationImmediateStopped**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L196)&nbsp;


___


### propagationStopped
<div style="margin-left: 10px;">



**`en`** 
Stops propagation for current event.





•  **propagationStopped**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L186)&nbsp;


___


### target
<div style="margin-left: 10px;">



**`en`** 
A reference to the target to which the event was originally dispatched.





•  **target**:
`Object | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L152)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`en`** 
The name of the event (case-sensitive), e.g. "click", "fire", or "submit".





•  **type**:
`string` 
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L134)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new EventMouse**(`eventType: string, bubbles: undefined | false | true, prevLoc: Vec2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `bubbles` | `` |
| `prevLoc` | `Vec2` |
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L129)&nbsp;


---

<!---->
## Methods

### getButton

<div style="margin-left: 10px;">

▸   **getButton**<`number`\> : `number`



**`en`** Returns mouse button code.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L327)&nbsp;
___
### getCurrentTarget

<div style="margin-left: 10px;">

▸   **getCurrentTarget**



**`en`** 
Gets current target of the event                                                            <br/>
note: It only be available when the event listener is associated with node.                <br/>
It returns 0 when the listener is associated with fixed priority.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L273)&nbsp;
___
### getDelta

<div style="margin-left: 10px;">

▸   **getDelta**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the delta distance from the previous location to current location.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L259)&nbsp;
___
### getDeltaX

<div style="margin-left: 10px;">

▸   **getDeltaX**<`number`\> : `number`



**`en`** Returns the X axis delta distance from the previous location to current location.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L272)&nbsp;
___
### getDeltaY

<div style="margin-left: 10px;">

▸   **getDeltaY**<`number`\> : `number`



**`en`** Returns the Y axis delta distance from the previous location to current location.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:280](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L280)&nbsp;
___
### getLocation

<div style="margin-left: 10px;">

▸   **getLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns cursor location.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L187)&nbsp;
___
### getLocationInView

<div style="margin-left: 10px;">

▸   **getLocationInView**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the current cursor location in game view coordinates.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L201)&nbsp;
___
### getLocationX

<div style="margin-left: 10px;">

▸   **getLocationX**<`number`\> : `number`



**`en`** Returns location data on X axis.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:335](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L335)&nbsp;
___
### getLocationY

<div style="margin-left: 10px;">

▸   **getLocationY**<`number`\> : `number`



**`en`** Returns location data on Y axis.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L343)&nbsp;
___
### getPreviousLocation

<div style="margin-left: 10px;">

▸   **getPreviousLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the previous touch location.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L230)&nbsp;
___
### getScrollX

<div style="margin-left: 10px;">

▸   **getScrollX**<`number`\> : `number`



**`en`** Returns the scroll value on x axis.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L159)&nbsp;
___
### getScrollY

<div style="margin-left: 10px;">

▸   **getScrollY**<`number`\> : `number`



**`en`** Returns the scroll value on y axis.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:167](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L167)&nbsp;
___
### getType

<div style="margin-left: 10px;">

▸   **getType**<`string`\> : `string`



**`en`** 
Gets the event type.




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L283)&nbsp;
___
### getUIDelta

<div style="margin-left: 10px;">

▸   **getUIDelta**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the delta distance from the previous location to current location in the UI coordinates.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L289)&nbsp;
___
### getUIDeltaX

<div style="margin-left: 10px;">

▸   **getUIDeltaX**<`number`\> : `number`



**`en`** Returns the X axis delta distance from the previous location to current location in the UI coordinates.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L302)&nbsp;
___
### getUIDeltaY

<div style="margin-left: 10px;">

▸   **getUIDeltaY**<`number`\> : `number`



**`en`** Returns the Y axis delta distance from the previous location to current location in the UI coordinates.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L310)&nbsp;
___
### getUILocation

<div style="margin-left: 10px;">

▸   **getUILocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the current cursor location in ui coordinates.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L215)&nbsp;
___
### getUILocationX

<div style="margin-left: 10px;">

▸   **getUILocationX**<`number`\> : `number`



**`en`** Returns location data on X axis.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L351)&nbsp;
___
### getUILocationY

<div style="margin-left: 10px;">

▸   **getUILocationY**<`number`\> : `number`



**`en`** Returns location data on Y axis.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:360](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L360)&nbsp;
___
### getUIPreviousLocation

<div style="margin-left: 10px;">

▸   **getUIPreviousLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the previous touch location.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L244)&nbsp;
___
### isStopped

<div style="margin-left: 10px;">

▸   **isStopped**<`boolean`\> : `boolean`



**`en`** 
Checks whether the event has been stopped.





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L260)&nbsp;
___
### reuse

<div style="margin-left: 10px;">

▸   **reuse**<`void`\>(`type: string, bubbles: undefined | false | true`) : `void`



**`en`** 
Reinitialize the event for being used again after retrieved from the object pool.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | The name of the event (case-sensitive), e.g. "click", "fire", or "submit"  |
| `bubbles` | `undefined \| false \| true` | A boolean indicating whether the event bubbles up through the tree or not  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L231)&nbsp;
___
### setButton

<div style="margin-left: 10px;">

▸   **setButton**<`void`\>(`button: number`) : `void`



**`en`** Sets mouse button code.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `button` | `number` | The button code  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L319)&nbsp;
___
### setLocation

<div style="margin-left: 10px;">

▸   **setLocation**<`void`\>(`x: number, y: number`) : `void`



**`en`** Sets cursor location.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The location on x axis  |
| `y` | `number` | The location on y axis  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L177)&nbsp;
___
### setScrollData

<div style="margin-left: 10px;">

▸   **setScrollData**<`void`\>(`scrollX: number, scrollY: number`) : `void`



**`en`** Sets scroll data of the mouse.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scrollX` | `number` | The scroll value on x axis  |
| `scrollY` | `number` | The scroll value on y axis  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L150)&nbsp;
___
### unuse

<div style="margin-left: 10px;">

▸   **unuse**<`void`\> : `void`



**`en`** 
Reset the event for being stored in the object pool.





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L214)&nbsp;
___
<!---->




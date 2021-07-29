
## Class: EventTouch


`extend:`
[Event](docs/en/event/Class/Event.md)










**`en`** 
The touch event.



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
- [ propagationImmediateStopped](#propagationImmediateStopped)
- [ propagationStopped](#propagationStopped)
- [ simulate](#simulate)
- [ target](#target)
- [ touch](#touch)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ getAllTouches](#getAllTouches)
- [ getCurrentTarget](#getCurrentTarget)
- [ getDelta](#getDelta)
- [ getDeltaX](#getDeltaX)
- [ getDeltaY](#getDeltaY)
- [ getEventCode](#getEventCode)
- [ getID](#getID)
- [ getLocation](#getLocation)
- [ getLocationInView](#getLocationInView)
- [ getLocationX](#getLocationX)
- [ getLocationY](#getLocationY)
- [ getPreviousLocation](#getPreviousLocation)
- [ getStartLocation](#getStartLocation)
- [ getTouches](#getTouches)
- [ getType](#getType)
- [ getUIDelta](#getUIDelta)
- [ getUILocation](#getUILocation)
- [ getUIStartLocation](#getUIStartLocation)
- [ isStopped](#isStopped)
- [ reuse](#reuse)
- [ setLocation](#setLocation)
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


### simulate
<div style="margin-left: 10px;">



**`en`** Indicate whether the touch event is simulated or real




•  **simulate**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:389](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L389)&nbsp;


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


### touch
<div style="margin-left: 10px;">



**`en`** The current touch object




•  **touch**:
`Touch | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L384)&nbsp;


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

• **new EventTouch**(`changedTouches: undefined, bubbles: undefined | false | true, eventCode: undefined | string, touches: undefined`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `changedTouches` | `` |
| `bubbles` | `` |
| `eventCode` | `` |
| `touches` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:395](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L395)&nbsp;


---

<!---->
## Methods

### getAllTouches

<div style="margin-left: 10px;">

▸   **getAllTouches**



**`en`** Returns touches of event.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:432](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L432)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:515](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L515)&nbsp;
___
### getDeltaX

<div style="margin-left: 10px;">

▸   **getDeltaX**<`number`\> : `number`



**`en`** Returns the X axis delta distance from the previous location to current location.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:532](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L532)&nbsp;
___
### getDeltaY

<div style="margin-left: 10px;">

▸   **getDeltaY**<`number`\> : `number`



**`en`** Returns the Y axis delta distance from the previous location to current location.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:540](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L540)&nbsp;
___
### getEventCode

<div style="margin-left: 10px;">

▸   **getEventCode**<`string`\> : `string`



**`en`** Returns event type code.




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L413)&nbsp;
___
### getID

<div style="margin-left: 10px;">

▸   **getID**



**`en`** Returns the id of the current touch point.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L506)&nbsp;
___
### getLocation

<div style="margin-left: 10px;">

▸   **getLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the current touch location.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:453](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L453)&nbsp;
___
### getLocationInView

<div style="margin-left: 10px;">

▸   **getLocationInView**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the current touch location in game screen coordinates.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:471](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L471)&nbsp;
___
### getLocationX

<div style="margin-left: 10px;">

▸   **getLocationX**<`number`\> : `number`



**`en`** Returns location X axis data.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:548](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L548)&nbsp;
___
### getLocationY

<div style="margin-left: 10px;">

▸   **getLocationY**<`number`\> : `number`



**`en`** Returns location Y axis data.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:556](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L556)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:480](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L480)&nbsp;
___
### getStartLocation

<div style="margin-left: 10px;">

▸   **getStartLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the start touch location.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:489](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L489)&nbsp;
___
### getTouches

<div style="margin-left: 10px;">

▸   **getTouches**



**`en`** Returns touches of event.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:423](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L423)&nbsp;
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



**`en`** Returns the delta distance from the previous location to current location.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:524](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L524)&nbsp;
___
### getUILocation

<div style="margin-left: 10px;">

▸   **getUILocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the current touch location in UI coordinates.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:462](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L462)&nbsp;
___
### getUIStartLocation

<div style="margin-left: 10px;">

▸   **getUIStartLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`en`** Returns the start touch location in UI coordinates.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:498](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L498)&nbsp;
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
### setLocation

<div style="margin-left: 10px;">

▸   **setLocation**<`void`\>(`x: number, y: number`) : `void`



**`en`** Sets touch location.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The current touch location on the x axis  |
| `y` | `number` | The current touch location on the y axis  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:442](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L442)&nbsp;
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




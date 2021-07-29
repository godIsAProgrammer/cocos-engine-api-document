
## Class: EventAcceleration


`extend:`
[Event](docs/en/event/Class/Event.md)












**`en`** 
The acceleration event.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ACCELERATION](#ACCELERATION)
- [ **`static`**  KEYBOARD](#KEYBOARD)
- [ **`static`**  MOUSE](#MOUSE)
- [ **`static`**  NONE](#NONE)
- [ **`static`**  TOUCH](#TOUCH)
- [ acc](#acc)
- [ bubbles](#bubbles)
- [ currentTarget](#currentTarget)
- [ eventPhase](#eventPhase)
- [ propagationImmediateStopped](#propagationImmediateStopped)
- [ propagationStopped](#propagationStopped)
- [ target](#target)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ getCurrentTarget](#getCurrentTarget)
- [ getType](#getType)
- [ isStopped](#isStopped)
- [ reuse](#reuse)
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


### acc
<div style="margin-left: 10px;">




**`en`** The acceleration object




•  **acc**:
`Acceleration` 
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:572](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L572)&nbsp;


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

• **new EventAcceleration**(`acc: Acceleration, bubbles: undefined | false | true`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `acc` | `Acceleration` |





| Name | Type |
| :------ | :------ |
| `bubbles` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:572](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L572)&nbsp;


---

<!---->
## Methods

### getCurrentTarget
<div style="margin-left: 10px;">

▸   **getCurrentTarget**




**`en`** 
Gets current target of the event                                                            <br/>
note: It only be available when the event listener is associated with node.                <br/>
It returns 0 when the listener is associated with fixed priority.




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L273)&nbsp;
___
### getType
<div style="margin-left: 10px;">

▸   **getType**<`string`\> : `string`




**`en`** 
Gets the event type.




<!---->
<!--    #### Returns `string` -->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L283)&nbsp;
___
### isStopped
<div style="margin-left: 10px;">

▸   **isStopped**<`boolean`\> : `boolean`




**`en`** 
Checks whether the event has been stopped.





<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L260)&nbsp;
___
### reuse
<div style="margin-left: 10px;">

▸   **reuse**<`void`\>(`type: string, bubbles: undefined | false | true`) : `void`




**`en`** 
Reinitialize the event for being used again after retrieved from the object pool.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | The name of the event (case-sensitive), e.g. "click", "fire", or "submit"  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bubbles` | `undefined \| false \| true` | A boolean indicating whether the event bubbles up through the tree or not  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L231)&nbsp;
___
### unuse
<div style="margin-left: 10px;">

▸   **unuse**<`void`\> : `void`




**`en`** 
Reset the event for being stored in the object pool.





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L214)&nbsp;
___
<!---->




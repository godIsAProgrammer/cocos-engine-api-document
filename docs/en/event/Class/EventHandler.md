
## Class: EventHandler






**`en`** 
The EventHandler class sets the event callback in the scene.
This class allows the user to set the callback target node, target component name, component method name, and call the target method through the `emit` method.



**`example`**

```ts


// Let's say we have a MainMenu component on newTarget
// file: MainMenu.ts
@ccclass('MainMenu')
export class MainMenu extends Component {
    // sender: the node MainMenu.ts belongs to
    // eventType: CustomEventData
    onClick (sender, eventType) {
        cc.log('click');
    }
}

import { Component } from 'cc';
const eventHandler = new Component.EventHandler();
eventHandler.target = newTarget;
eventHandler.component = "MainMenu";
eventHandler.handler = "OnClick";
eventHandler.customEventData = "my data";


```


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ component](#component)
- [ customEventData](#customEventData)
- [ handler](#handler)
- [ target](#target)

### Methods

- [ **`static`**  emitEvents](#emitEvents)
- [ emit](#emit)
</div>

## Properties


### component
<div style="margin-left: 10px;">



**`en`** 
The name of the component(script) that contains target callback, such as the name 'MainMenu' of the script in the example




•  **component**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L114)&nbsp;


___


### customEventData
<div style="margin-left: 10px;">



**`en`** 
Custom Event Data




•  **customEventData**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L139)&nbsp;


___


### handler
<div style="margin-left: 10px;">



**`en`** 
Event handler, such as the callback function name 'onClick' in the example




•  **handler**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L128)&nbsp;


___


### target
<div style="margin-left: 10px;">



**`en`** 
The node that contains target component




•  **target**:
`Node | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L103)&nbsp;


___

<!---->
## Methods

### emitEvents

<div style="margin-left: 10px;">

▸ `static`  **emitEvents**<`void`\>(`events: undefined, args: undefined`) : `void`



**`en`** 
Dispatching component events.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `events` |  | The event list to be emitted  |
| `args` |  | The callback arguments  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L84)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`params: undefined`) : `void`



**`en`** Trigger the target callback with given arguments



**`example`**

```ts


import { Component } from 'cc';
const eventHandler = new Component.EventHandler();
eventHandler.target = newTarget;
eventHandler.component = "MainMenu";
eventHandler.handler = "OnClick"
eventHandler.emit(["param1", "param2", ....]);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `params` |  | The arguments for invoking the callback  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L155)&nbsp;
___
<!---->




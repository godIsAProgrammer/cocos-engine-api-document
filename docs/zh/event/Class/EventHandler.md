
## Class: EventHandler







**`zh`** 
“EventHandler” 类用来设置场景中的事件回调，该类允许用户设置回调目标节点，目标组件名，组件方法名，并可通过 emit 方法调用目标函数。





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




**`zh`** 
事件响应函数所在组件名（脚本名）, 比如例子中的脚本名 'MainMenu'





•  **component**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L114)&nbsp;


___


### customEventData
<div style="margin-left: 10px;">




**`zh`** 
自定义事件数据





•  **customEventData**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L139)&nbsp;


___


### handler
<div style="margin-left: 10px;">




**`zh`** 
响应事件函数名，比如例子中的 'onClick' 方法名





•  **handler**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L128)&nbsp;


___


### target
<div style="margin-left: 10px;">




**`zh`** 
事件响应组件和函数所在节点





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




**`zh`** 
组件事件派发。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `events` |  | The event list to be emitted  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `args` |  | The callback arguments  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L84)&nbsp;
___
### emit
<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`params: undefined`) : `void`




**`zh`** 触发目标组件上的指定 handler 函数，可以选择传递参数。




**`example`**

```ts


import { Component } from 'cc';
const eventHandler = new Component.EventHandler();
eventHandler.target = newTarget;
eventHandler.component = "MainMenu";
eventHandler.handler = "OnClick"
eventHandler.emit(["param1", "param2", ....]);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `params` |  | The arguments for invoking the callback  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component-event-handler.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component-event-handler.ts#L155)&nbsp;
___
<!---->




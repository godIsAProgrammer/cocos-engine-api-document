
## Class: Game




`extend: `
[Empty](docs/en/event/Class/Empty.md)&nbsp;
[IEventified](docs/en/event/Interface/IEventified.md)&nbsp;










**`en`** An object to boot the game.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ canvas](#canvas)
- [ collisionMatrix](#collisionMatrix)
- [ config](#config)
- [ container](#container)
- [ eventTargetOn](#eventTargetOn)
- [ eventTargetOnce](#eventTargetOnce)
- [ frame](#frame)
- [ groupList](#groupList)
- [ onStart](#onStart)
- [ renderType](#renderType)
- [ frameTime](#frameTime)
- [ inited](#inited)

### Methods

- [ addPersistRootNode](#addPersistRootNode)
- [ emit](#emit)
- [ end](#end)
- [ getFrameRate](#getFrameRate)
- [ hasEventListener](#hasEventListener)
- [ init](#init)
- [ isPaused](#isPaused)
- [ isPersistRootNode](#isPersistRootNode)
- [ off](#off)
- [ on](#on)
- [ once](#once)
- [ pause](#pause)
- [ removeAll](#removeAll)
- [ removePersistRootNode](#removePersistRootNode)
- [ restart](#restart)
- [ resume](#resume)
- [ run](#run)
- [ setFrameRate](#setFrameRate)
- [ step](#step)
- [ targetOff](#targetOff)
</div>

## Properties


### canvas
<div style="margin-left: 10px;">




**`en`** The canvas of the game.




•  **canvas**:
`HTMLCanvasElement | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:264](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L264)&nbsp;


___


### collisionMatrix
<div style="margin-left: 10px;">




•  **collisionMatrix**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L304)&nbsp;


___


### config
<div style="margin-left: 10px;">




**`en`** 
The current game configuration,
please be noticed any modification directly on this object after the game initialization won't take effect.




•  **config**:
`NormalizedGameConfig`  = `{} as NormalizedGameConfig`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L283)&nbsp;


___


### container
<div style="margin-left: 10px;">




**`en`** The container of game canvas.




•  **container**:
`HTMLDivElement | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L259)&nbsp;


___


### eventTargetOn
<div style="margin-left: 10px;">




•  **eventTargetOn**:
`on`  = `super.on`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L272)&nbsp;


___


### eventTargetOnce
<div style="margin-left: 10px;">




•  **eventTargetOnce**:
`once`  = `super.once`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L273)&nbsp;


___


### frame
<div style="margin-left: 10px;">




**`en`** The outer frame of the game canvas; parent of game container.




•  **frame**:
`Record | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L254)&nbsp;


___


### groupList
<div style="margin-left: 10px;">




•  **groupList**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:305](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L305)&nbsp;


___


### onStart
<div style="margin-left: 10px;">




**`en`** Callback when the scripts of engine have been load.




**`method`** onStart





•  **onStart**:
`Game.OnStart | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L290)&nbsp;


___


### renderType
<div style="margin-left: 10px;">




**`en`** The renderer backend of the game.




•  **renderType**:
`number`  = `-1`
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L270)&nbsp;


___


### frameTime
<div style="margin-left: 10px;">




•  **frameTime**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L300)&nbsp;


___


### inited
<div style="margin-left: 10px;">




**`en`** Indicates whether the engine and the renderer has been initialized




•  **inited**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/game.ts:296](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L296)&nbsp;


___

<!---->
## Methods

### addPersistRootNode
<div style="margin-left: 10px;">

▸   **addPersistRootNode**<`void`\>(`node: Node`) : `void`




**`en`** 
Add a persistent root node to the game, the persistent node won't be destroyed during scene transition.<br>
The target node must be placed in the root level of hierarchy, otherwise this API won't have any effect.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `Node` | The node to be made persistent  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:538](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L538)&nbsp;
___
### emit
<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`




**`en`** Trigger an event directly with the event name and necessary arguments.




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
### end
<div style="margin-left: 10px;">

▸   **end**<`void`\> : `void`




**`en`** End game, it will close the game window




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:426](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L426)&nbsp;
___
### getFrameRate
<div style="margin-left: 10px;">

▸   **getFrameRate**<`number`\> : `number`




**`en`** Get frame rate set for the game, it doesn't represent the real frame rate.




<!---->
<!--    #### Returns `number` frame rate
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L351)&nbsp;
___
### hasEventListener
<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`




**`en`** Checks whether there is correspond event listener registered on the given event.




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
### init
<div style="margin-left: 10px;">

▸   **init**<`Promise`\>(`config: IGameConfig`) : `Promise`




**`en`** Init game with configuration object.




<!---->
<!--    #### Returns `Promise` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `config` | `IGameConfig` | Pass configuration object  |



##### Returns `Promise`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L481)&nbsp;
___
### isPaused
<div style="margin-left: 10px;">

▸   **isPaused**<`boolean`\> : `boolean`




**`en`** Check whether the game is paused.




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L394)&nbsp;
___
### isPersistRootNode
<div style="margin-left: 10px;">

▸   **isPersistRootNode**<`boolean`\>(`node: undefined`) : `boolean`




**`en`** Check whether the node is a persistent root node.




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` |  | The node to be checked  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:585](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L585)&nbsp;
___
### off
<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: EventType, callback: TFunction, thisArg: any`) : `void`




**`en`** 
Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.




**`example`**

```ts

import { log } from 'cc';
// register fire eventListener
var callback = eventTarget.on('fire', function () {
    log("fire in the hole");
}, target);
// remove fire event listener
eventTarget.off('fire', callback, target);
// remove all fire event listeners
eventTarget.off('fire');

```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type being removed.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback to remove.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L114)&nbsp;
___
### on
<div style="margin-left: 10px;">

▸   **on**<`any`\>(`type: string, callback: undefined, target: any, once: undefined | false | true`) : `any`




**`en`** 
Register an callback of a specific event type on the game object.<br>
This type of event should be triggered via `emit`.<br>




<!---->
<!--    #### Returns `any` - Just returns the incoming callback so you can save the anonymous function easier.
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | The callback that will be invoked when the event is dispatched.<br>                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | The target (this object) to invoke the callback, can be null  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `once` | `undefined \| false \| true` | After the first invocation, whether the callback should be unregistered.  |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:448](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L448)&nbsp;
___
### once
<div style="margin-left: 10px;">

▸   **once**<`any`\>(`type: string, callback: undefined, target: any`) : `any`




**`en`** 
Register an callback of a specific event type on the game object,<br>
the callback will remove itself after the first time it is triggered.<br>




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | The callback that will be invoked when the event is dispatched.<br>                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | The target (this object) to invoke the callback, can be null  |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L468)&nbsp;
___
### pause
<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`




**`en`** Pause the game main loop. This will pause:<br>
game logic execution, rendering process, event manager, background music and all audio effects.<br>
This is different with `director.pause` which only pause the game logic execution.<br>




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:369](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L369)&nbsp;
___
### removeAll
<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`




**`en`** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target




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
### removePersistRootNode
<div style="margin-left: 10px;">

▸   **removePersistRootNode**<`void`\>(`node: Node`) : `void`




**`en`** Remove a persistent root node.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `Node` | The node to be removed from persistent node list  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:570](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L570)&nbsp;
___
### restart
<div style="margin-left: 10px;">

▸   **restart**<`Promise`\> : `Promise`




**`en`** Restart game.




<!---->
<!--    #### Returns `Promise` -->
<!---->


##### Returns `Promise`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:402](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L402)&nbsp;
___
### resume
<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`




**`en`** Resume the game from pause. This will resume:<br>
game logic execution, rendering process, event manager, background music and all audio effects.<br>




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L384)&nbsp;
___
### run
<div style="margin-left: 10px;">

▸   **run**<`Promise`\>(`onStart: Game.OnStart`) : `Promise`




**`en`** Run game with configuration object and onStart function.




<!---->
<!--    #### Returns `Promise` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `onStart` | `Game.OnStart` | function to be executed after game initialized  |



##### Returns `Promise`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:505](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L505)&nbsp;   [cocos/core/game.ts:507](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L507)&nbsp;
___
### setFrameRate
<div style="margin-left: 10px;">

▸   **setFrameRate**<`void`\>(`frameRate: number | string`) : `void`




**`en`** Set frame rate of game.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `frameRate` | `number \| string` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:332](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L332)&nbsp;
___
### step
<div style="margin-left: 10px;">

▸   **step**<`void`\> : `void`




**`en`** Run the game frame by frame.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/game.ts:359](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L359)&nbsp;
___
### targetOff
<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`typeOrTarget: any`) : `void`




**`en`** Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.




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




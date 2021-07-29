
## Class: AnimationClip


`extend:`
[Asset](docs/en/asset/Class/Asset.md)












**`en`** The animation clip represents a sequence of key frame animation created with the animation editor or skeletal animation other DCC tools.
The data is divided in different levels: tracks, key frames, curves.



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  WrapMode](#WrapMode)
- [ enableTrsBlending](#enableTrsBlending)
- [ events](#events)
- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ sample](#sample)
- [ speed](#speed)
- [ wrapMode](#wrapMode)
- [ commonTargets](#commonTargets)
- [ curves](#curves)
- [ data](#data)
- [ duration](#duration)
- [ hash](#hash)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ keys](#keys)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ refCount](#refCount)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  deserialize](#deserialize)
- [ **`static`**  createWithSpriteFrames](#createWithSpriteFrames)
- [ addRef](#addRef)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getEventGroupIndexAtRatio](#getEventGroupIndexAtRatio)
- [ getPropertyCurves](#getPropertyCurves)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ removeAll](#removeAll)
- [ targetOff](#targetOff)
- [ toString](#toString)
- [ updateEventDatas](#updateEventDatas)
- [ validate](#validate)
</div>

## Properties


### WrapMode
<div style="margin-left: 10px;">




• `static` **WrapMode**:
`WrapMode`  = `AnimationWrapMode`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L121)&nbsp;


___


### enableTrsBlending
<div style="margin-left: 10px;">
Sets if node TRS curves in this animation can be blended.
Normally this flag is enabled for model animation and disabled for other case.



Sets if node TRS curves in this animation can be blended.
Normally this flag is enabled for model animation and disabled for other case.

•  **enableTrsBlending**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L199)&nbsp;


___


### events
<div style="margin-left: 10px;">




**`en`** Associated event data.





•  **events**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:191](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L191)&nbsp;


___


### isDefault
<div style="margin-left: 10px;">




•  **isDefault**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L86)&nbsp;


___


### loaded
<div style="margin-left: 10px;">




**`en`** 
Whether the asset is loaded or not




•  **loaded**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L82)&nbsp;


___


### sample
<div style="margin-left: 10px;">




**`en`** Animation frame rate: frames per second.
Note this property is only used for animation editing in Editor.





•  **sample**:
`number`  = `60`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L170)&nbsp;


___


### speed
<div style="margin-left: 10px;">




**`en`** Animation playback speed.





•  **speed**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L177)&nbsp;


___


### wrapMode
<div style="margin-left: 10px;">




**`en`** Animation loop mode.





•  **wrapMode**:
`WrapMode`  = `AnimationWrapMode.Normal`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L184)&nbsp;


___


### commonTargets
<div style="margin-left: 10px;">




•  **commonTargets**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L302)&nbsp;   [cocos/core/animation/animation-clip.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L306)&nbsp;


___


### curves
<div style="margin-left: 10px;">




•  **curves**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L286)&nbsp;   [cocos/core/animation/animation-clip.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L290)&nbsp;


___


### data
<div style="margin-left: 10px;">
此动画的数据。



此动画的数据。

•  **data**:
 ``null | Uint8Array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L298)&nbsp;


___


### duration
<div style="margin-left: 10px;">




**`en`** Animation duration.





•  **duration**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L233)&nbsp;   [cocos/core/animation/animation-clip.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L237)&nbsp;


___


### hash
<div style="margin-left: 10px;">




•  **hash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:278](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L278)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isValid
<div style="margin-left: 10px;">




**`en`** 
Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.





**`default`** true





**`example`**

```ts


import { Node, log } from 'cc';
const node = new Node();
log(node.isValid);    // true
node.destroy();
log(node.isValid);    // true, still valid in this frame
// after a frame...
log(node.isValid);    // false, destroyed in the end of last frame


```




•  **isValid**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L266)&nbsp;


___


### keys
<div style="margin-left: 10px;">




**`en`** Frame keys referenced by curves.





•  **keys**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:245](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L245)&nbsp;   [cocos/core/animation/animation-clip.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L249)&nbsp;


___


### name
<div style="margin-left: 10px;">




**`en`** The name of the object.




**`default`** ""




**`example`**

```ts


obj.name = "New Obj";


```




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L221)&nbsp;   [cocos/core/data/object.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L224)&nbsp;


___


### nativeUrl
<div style="margin-left: 10px;">




**`en`** 
Returns the url of this asset's native object, if none it will returns an empty string.




**`readonly`** 





•  **nativeUrl**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L113)&nbsp;


___


### refCount
<div style="margin-left: 10px;">




**`en`** 
The number of reference





•  **refCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L249)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new AnimationClip**(`args: ConstructorParameters`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `args` | `ConstructorParameters` |





</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L151)&nbsp;


---

<!---->
## Methods

### deserialize
<div style="margin-left: 10px;">

▸ `static`  **deserialize**<`any`\>(`data: any`) : `any`




**`method`** deserialize


应 AssetDB 要求提供这个方法。


<!---->
<!--    #### Returns `any` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `data` | `any` | - |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L71)&nbsp;
___
### createWithSpriteFrames
<div style="margin-left: 10px;">

▸ `static`  **createWithSpriteFrames**(`spriteFrames: undefined, sample: number`)




**`en`** Crate clip with a set of sprite frames




**`example`**

```ts


import { AnimationClip } from 'cc';
const clip = AnimationClip.createWithSpriteFrames(spriteFrames, 10);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `spriteFrames` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `sample` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L132)&nbsp;
___
### addRef
<div style="margin-left: 10px;">

▸   **addRef**<`Asset`\> : `Asset`




**`en`** 
Add references of asset





<!---->
<!--    #### Returns `Asset` itself

-->
<!---->


##### Returns `Asset`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L263)&nbsp;
___
### createNode
<div style="margin-left: 10px;">

▸   **createNode**<`void`\>(`callback: CreateNodeCallback`) : `void`




**`en`** 
Create a new node using this asset in the scene.<br/>
If this type of asset dont have its corresponding node type, this method should be null.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `CreateNodeCallback` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L233)&nbsp;
___
### decRef
<div style="margin-left: 10px;">

▸   **decRef**<`Asset`\>(`autoRelease: boolean`) : `Asset`




**`en`** 
Reduce references of asset and it will be auto released when refCount equals 0.





<!---->
<!--    #### Returns `Asset` itself

-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `autoRelease` | `boolean` | - |



##### Returns `Asset`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:278](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L278)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L357)&nbsp;
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
### getEventGroupIndexAtRatio
<div style="margin-left: 10px;">

▸   **getEventGroupIndexAtRatio**<`number`\>(`ratio: number`) : `number`




**`en`** Gets the event group shall be processed at specified ratio.




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | The ratio.  |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:340](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L340)&nbsp;
___
### getPropertyCurves
<div style="margin-left: 10px;">

▸   **getPropertyCurves**




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L315)&nbsp;
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
### initDefault
<div style="margin-left: 10px;">

▸   **initDefault**<`void`\>(`uuid: undefined | string`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `undefined \| string` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L290)&nbsp;
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

▸   **on**(`type: EventType, callback: TFunction, thisArg: any, once: undefined | false | true`)




**`en`** 
Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.




**`example`**

```ts

import { log } from 'cc';
eventTarget.on('fire', function () {
    log("fire in the hole");
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
| `thisArg` | `any` | The target (this object) to invoke the callback, can be null  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `once` | `undefined \| false \| true` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L72)&nbsp;
___
### onLoaded
<div style="margin-left: 10px;">

▸   **onLoaded**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L310)&nbsp;
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
### toString
<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`




**`en`** 
Returns the string representation of the object.<br>
The `Asset` object overrides the `toString()` method of the `Object` object.<br>
JavaScript calls the toString() method automatically<br>
when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.<br>
<br>
For assets of the native type, it will return `this.nativeUrl`.<br>
Otherwise, an empty string is returned.<br>
This method may be overwritten by subclasses.




**`method`** toString




<!---->
<!--    #### Returns `string` 
-->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L192)&nbsp;
___
### updateEventDatas
<div style="margin-left: 10px;">

▸   **updateEventDatas**<`void`\> : `void`




**`en`** 
Commit event data update.
You should call this function after you changed the `events` data to take effect.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:330](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L330)&nbsp;
___
### validate
<div style="margin-left: 10px;">

▸   **validate**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-clip.ts:443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-clip.ts#L443)&nbsp;
___
<!---->




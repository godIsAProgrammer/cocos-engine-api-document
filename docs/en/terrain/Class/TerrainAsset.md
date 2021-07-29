
## Class: TerrainAsset


`extend:`
[Asset](docs/en/asset/Class/Asset.md)












**`en`** terrain asset


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ blockCount](#blockCount)
- [ heights](#heights)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ layerBinaryInfos](#layerBinaryInfos)
- [ layerBuffer](#layerBuffer)
- [ layerInfos](#layerInfos)
- [ lightMapSize](#lightMapSize)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ refCount](#refCount)
- [ tileSize](#tileSize)
- [ version](#version)
- [ weightMapSize](#weightMapSize)
- [ weights](#weights)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  deserialize](#deserialize)
- [ addRef](#addRef)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getHeight](#getHeight)
- [ getLayer](#getLayer)
- [ getVertexCountI](#getVertexCountI)
- [ getVertexCountJ](#getVertexCountJ)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ removeAll](#removeAll)
- [ targetOff](#targetOff)
- [ toString](#toString)
- [ validate](#validate)
</div>

## Properties


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


### blockCount
<div style="margin-left: 10px;">




**`en`** block count




•  **blockCount**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L294)&nbsp;   [cocos/terrain/terrain-asset.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L298)&nbsp;


___


### heights
<div style="margin-left: 10px;">




**`en`** height buffer




•  **heights**:
 ``Uint16Array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:330](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L330)&nbsp;   [cocos/terrain/terrain-asset.ts:334](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L334)&nbsp;


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


### layerBinaryInfos
<div style="margin-left: 10px;">




•  **layerBinaryInfos**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:374](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L374)&nbsp;


___


### layerBuffer
<div style="margin-left: 10px;">




**`en`** layer buffer




•  **layerBuffer**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:354](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L354)&nbsp;   [cocos/terrain/terrain-asset.ts:358](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L358)&nbsp;


___


### layerInfos
<div style="margin-left: 10px;">




**`en`** layer info




•  **layerInfos**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L366)&nbsp;   [cocos/terrain/terrain-asset.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L370)&nbsp;


___


### lightMapSize
<div style="margin-left: 10px;">




**`en`** light map size




•  **lightMapSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L306)&nbsp;   [cocos/terrain/terrain-asset.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L310)&nbsp;


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


### tileSize
<div style="margin-left: 10px;">




**`en`** tile size




•  **tileSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:282](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L282)&nbsp;   [cocos/terrain/terrain-asset.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L286)&nbsp;


___


### version
<div style="margin-left: 10px;">




**`en`** version




•  **version**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L274)&nbsp;


___


### weightMapSize
<div style="margin-left: 10px;">




**`en`** weight map size




•  **weightMapSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L318)&nbsp;   [cocos/terrain/terrain-asset.ts:322](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L322)&nbsp;


___


### weights
<div style="margin-left: 10px;">




**`en`** weight buffer




•  **weights**:
 ``Uint8Array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:342](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L342)&nbsp;   [cocos/terrain/terrain-asset.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L346)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new TerrainAsset**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L247)&nbsp;


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




**`en`** 
Destroy this Object, and release all its own references to other objects.<br/>
Actual object destruction will delayed until before rendering.
From the next frame, this object is not usable any more.
You can use `isValid(obj)` to check whether the object is destroyed before accessing it.




**`example`**

```ts


obj.destroy();


```




<!---->
<!--    #### Returns `boolean` whether it is the first time the destroy being called-->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L286)&nbsp;
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
### getHeight
<div style="margin-left: 10px;">

▸   **getHeight**<`number`\>(`i: number, j: number`) : `number`




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:396](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L396)&nbsp;
___
### getLayer
<div style="margin-left: 10px;">

▸   **getLayer**<`number`\>(`xBlock: number, yBlock: number, layerId: number`) : `number`




**`en`** get layer




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `xBlock` | `number` | block index x  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `yBlock` | `number` | block index y  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `layerId` | `number` | layer id  |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L385)&nbsp;
___
### getVertexCountI
<div style="margin-left: 10px;">

▸   **getVertexCountI**<`number`\> : `number`




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L401)&nbsp;
___
### getVertexCountJ
<div style="margin-left: 10px;">

▸   **getVertexCountJ**<`number`\> : `number`




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain-asset.ts:406](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain-asset.ts#L406)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L288)&nbsp;
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
### validate
<div style="margin-left: 10px;">

▸   **validate**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L295)&nbsp;
___
<!---->




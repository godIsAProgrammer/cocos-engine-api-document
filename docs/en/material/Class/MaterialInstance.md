
## Class: MaterialInstance


`extend:`
[Material](docs/en/material/Class/Material.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ effectAsset](#effectAsset)
- [ effectName](#effectName)
- [ hash](#hash)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ owner](#owner)
- [ parent](#parent)
- [ passes](#passes)
- [ refCount](#refCount)
- [ technique](#technique)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  getHash](#getHash)
- [ **`static`**  deserialize](#deserialize)
- [ addRef](#addRef)
- [ copy](#copy)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getProperty](#getProperty)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ initialize](#initialize)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ onPassStateChange](#onPassStateChange)
- [ once](#once)
- [ overridePipelineStates](#overridePipelineStates)
- [ recompileShaders](#recompileShaders)
- [ removeAll](#removeAll)
- [ reset](#reset)
- [ resetUniforms](#resetUniforms)
- [ setProperty](#setProperty)
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


### effectAsset
<div style="margin-left: 10px;">




**`en`** The current [[EffectAsset]].




•  **effectAsset**:
 ``null | EffectAsset`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L135)&nbsp;


___


### effectName
<div style="margin-left: 10px;">




**`en`** Name of the current [[EffectAsset]].




•  **effectName**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L143)&nbsp;


___


### hash
<div style="margin-left: 10px;">




**`en`** The hash value of this material.




•  **hash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:167](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L167)&nbsp;


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


### owner
<div style="margin-left: 10px;">




•  **owner**:
 ``null | RenderableComponent`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/material-instance.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/material-instance.ts#L52)&nbsp;


___


### parent
<div style="margin-left: 10px;">




•  **parent**:
 ``Material`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/material-instance.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/material-instance.ts#L48)&nbsp;


___


### passes
<div style="margin-left: 10px;">




**`en`** The passes defined in this material.




•  **passes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L159)&nbsp;


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


### technique
<div style="margin-left: 10px;">




**`en`** The current technique index.




•  **technique**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L151)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new MaterialInstance**(`info: IMaterialInstanceInfo`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `info` | `IMaterialInstanceInfo` |





</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/material-instance.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/material-instance.ts#L60)&nbsp;


---

<!---->
## Methods

### getHash
<div style="margin-left: 10px;">

▸ `static`  **getHash**<`number`\>(`material: Material`) : `number`




**`en`** Get hash for a material




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `material` | `Material` |   |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L99)&nbsp;
___
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
### copy
<div style="margin-left: 10px;">

▸   **copy**<`void`\>(`mat: Material`) : `void`




**`en`** Copy the target material.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Material` | The material to be copied.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:339](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L339)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/renderer/core/material-instance.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/material-instance.ts#L98)&nbsp;
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
### getProperty
<div style="margin-left: 10px;">

▸   **getProperty**(`name: string, passIdx: undefined | number`)




**`en`** 
Get the specified uniform value for this material.<br>
Note that only uniforms set through [[Material.setProperty]] can be acquired here.<br>
For the complete rendering data, use [[Pass.getUniform]] instead.




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The property or uniform name.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passIdx` | `undefined \| number` | The target pass index. If not specified, return the first found value in all passes.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L318)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/assets/material.ts:476](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L476)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`info: IMaterialInfo`) : `void`




**`en`** Initialize this material with the given information.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IMaterialInfo` | Material description info.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L192)&nbsp;
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




**`en`** Callback function after material is loaded in [[Loader]]. Initialize the resources automatically.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L249)&nbsp;
___
### onPassStateChange
<div style="margin-left: 10px;">

▸   **onPassStateChange**<`void`\>(`dontNotify: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dontNotify` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/material-instance.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/material-instance.ts#L103)&nbsp;
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
### overridePipelineStates
<div style="margin-left: 10px;">

▸   **overridePipelineStates**<`void`\>(`overrides: PassOverrides, passIdx: undefined | number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `overrides` | `PassOverrides` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passIdx` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/material-instance.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/material-instance.ts#L81)&nbsp;
___
### recompileShaders
<div style="margin-left: 10px;">

▸   **recompileShaders**<`void`\>(`overrides: MacroRecord, passIdx: undefined | number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `overrides` | `MacroRecord` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passIdx` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/material-instance.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/material-instance.ts#L70)&nbsp;
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
### reset
<div style="margin-left: 10px;">

▸   **reset**<`void`\>(`info: IMaterialInfo`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IMaterialInfo` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L207)&nbsp;
___
### resetUniforms
<div style="margin-left: 10px;">

▸   **resetUniforms**<`void`\>(`clearPasses: boolean`) : `void`




**`en`** Reset all the uniforms to the default value specified in [[EffectAsset]].




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clearPasses` | `boolean` | Will the rendering data be cleared too?  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L260)&nbsp;
___
### setProperty
<div style="margin-left: 10px;">

▸   **setProperty**<`void`\>(`name: string, val: MaterialPropertyFull | array<MaterialPropertyFull>, passIdx: undefined | number`) : `void`




**`en`** 
Convenient property setter provided for quick material setup.<br>
[[Pass.setUniform]] should be used instead if you need to do per-frame uniform update.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The target uniform name.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `val` | `MaterialPropertyFull \| array<MaterialPropertyFull>` | The target value.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `passIdx` | `undefined \| number` | The pass to apply to. Will apply to all passes if not specified.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/material.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L281)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/assets/material.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L485)&nbsp;
___
<!---->




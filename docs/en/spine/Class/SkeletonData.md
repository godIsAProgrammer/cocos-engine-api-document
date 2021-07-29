
## Class: SkeletonData


`extend:`
[Asset](docs/en/asset/Class/Asset.md)










**`en`** The skeleton data of spine.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ scale](#scale)
- [ textures](#textures)
- [ atlasText](#atlasText)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ refCount](#refCount)
- [ skeletonJson](#skeletonJson)
- [ skeletonJsonStr](#skeletonJsonStr)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  deserialize](#deserialize)
- [ addRef](#addRef)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ ensureTexturesLoaded](#ensureTexturesLoaded)
- [ getAnimsEnum](#getAnimsEnum)
- [ getRuntimeData](#getRuntimeData)
- [ getSkinsEnum](#getSkinsEnum)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ isTexturesLoaded](#isTexturesLoaded)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ removeAll](#removeAll)
- [ reset](#reset)
- [ resetEnums](#resetEnums)
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


### scale
<div style="margin-left: 10px;">



**`en`** 
A scale can be specified on the JSON or binary loader which will scale the bone positions,
image sizes, and animation translations.
This can be useful when using different sized images than were used when design ing the skeleton
in Spine. For example, if using images that are half the size than were used in Spine,
a scale of 0.5 can be used. This is commonly used for games that can run with either low or high
resolution texture atlases.
see http://en.esotericsoftware.com/spine-using-runtimes#Scaling



**`property`** {Number} scale





•  **scale**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L95)&nbsp;


___


### textures
<div style="margin-left: 10px;">



**`property`** {Texture2D[]} textures





•  **textures**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L72)&nbsp;


___


### atlasText
<div style="margin-left: 10px;">



**`property`** {String} atlasText





•  **atlasText**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L58)&nbsp;   [cocos/spine/skeleton-data.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L61)&nbsp;


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


### refCount
<div style="margin-left: 10px;">



**`en`** 
The number of reference





•  **refCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L249)&nbsp;


___


### skeletonJson
<div style="margin-left: 10px;">



**`en`** See http://en.esotericsoftware.com/spine-json-format



**`property`** {Object} skeletonJson





•  **skeletonJson**:
 ``SkeletonJson`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L39)&nbsp;   [cocos/spine/skeleton-data.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L42)&nbsp;


___


### skeletonJsonStr
<div style="margin-left: 10px;">




•  **skeletonJsonStr**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:27](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L27)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new SkeletonData**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L118)&nbsp;


---

<!---->
## Methods

### deserialize

<div style="margin-left: 10px;">

▸ `static`  **deserialize**<`any`\>(`data: any`) : `any`



**`method`** deserialize


应 AssetDB 要求提供这个方法。

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





##### Returns `Asset`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L263)&nbsp;
___
### createNode

<div style="margin-left: 10px;">

▸   **createNode**<`void`\>(`callback: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L127)&nbsp;
___
### decRef

<div style="margin-left: 10px;">

▸   **decRef**<`Asset`\>(`autoRelease: boolean`) : `Asset`



**`en`** 
Reduce references of asset and it will be auto released when refCount equals 0.




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




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:268](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L268)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`



**`en`** Trigger an event directly with the event name and necessary arguments.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | event type  |
| `arg0` | `any` | - |
| `arg1` | `any` | - |
| `arg2` | `any` | - |
| `arg3` | `any` | - |
| `arg4` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L141)&nbsp;
___
### ensureTexturesLoaded

<div style="margin-left: 10px;">

▸   **ensureTexturesLoaded**<`void`\>(`loaded: null | , caller: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `loaded` | `null \| ` | - |
| `caller` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L151)&nbsp;
___
### getAnimsEnum

<div style="margin-left: 10px;">

▸   **getAnimsEnum**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:251](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L251)&nbsp;
___
### getRuntimeData

<div style="margin-left: 10px;">

▸   **getRuntimeData**(`quiet: undefined | false | true`)



**`en`** Get the included SkeletonData used in spine runtime.<br>
Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.SkeletonData object.



**`method`** getRuntimeData



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `quiet` | `undefined \| false \| true` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L197)&nbsp;
___
### getSkinsEnum

<div style="margin-left: 10px;">

▸   **getSkinsEnum**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L234)&nbsp;
___
### hasEventListener

<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`



**`en`** Checks whether there is correspond event listener registered on the given event.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Event type.  |
| `callback` | `undefined \| ` | Callback function when event triggered.  |
| `target` | `any` | Callback callee.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L52)&nbsp;
___
### initDefault

<div style="margin-left: 10px;">

▸   **initDefault**<`void`\>(`uuid: undefined | string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `undefined \| string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L290)&nbsp;
___
### isTexturesLoaded

<div style="margin-left: 10px;">

▸   **isTexturesLoaded**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L176)&nbsp;
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



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type being removed.  |
| `callback` | `TFunction` | The callback to remove.  |
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



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `thisArg` | `any` | The target (this object) to invoke the callback, can be null  |
| `once` | `undefined \| false \| true` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L72)&nbsp;
___
### onLoaded

<div style="margin-left: 10px;">

▸   **onLoaded**<`void`\> : `void`




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



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `thisArg` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L91)&nbsp;
___
### removeAll

<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`



**`en`** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target



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

▸   **reset**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L135)&nbsp;
___
### resetEnums

<div style="margin-left: 10px;">

▸   **resetEnums**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-data.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-data.ts#L144)&nbsp;
___
### targetOff

<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`typeOrTarget: any`) : `void`



**`en`** Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.



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




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L192)&nbsp;
___
### validate

<div style="margin-left: 10px;">

▸   **validate**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L295)&nbsp;
___
<!---->




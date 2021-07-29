
## Class: Mesh


`extend:`
[Asset](docs/en/asset/Class/Asset.md)










**`en`** Mesh asset


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ morphRendering](#morphRendering)
- [ data](#data)
- [ hash](#hash)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ jointBufferIndices](#jointBufferIndices)
- [ maxPosition](#maxPosition)
- [ minPosition](#minPosition)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ refCount](#refCount)
- [ renderingSubMeshes](#renderingSubMeshes)
- [ struct](#struct)
- [ subMeshCount](#subMeshCount)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  deserialize](#deserialize)
- [ addRef](#addRef)
- [ assign](#assign)
- [ copyAttribute](#copyAttribute)
- [ copyIndices](#copyIndices)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ destroyRenderingMesh](#destroyRenderingMesh)
- [ emit](#emit)
- [ getBoneSpaceBounds](#getBoneSpaceBounds)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ initialize](#initialize)
- [ merge](#merge)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ readAttribute](#readAttribute)
- [ readIndices](#readIndices)
- [ removeAll](#removeAll)
- [ reset](#reset)
- [ targetOff](#targetOff)
- [ toString](#toString)
- [ validate](#validate)
- [ validateMergingMesh](#validateMergingMesh)

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


### morphRendering
<div style="margin-left: 10px;">




•  **morphRendering**:
`MorphRendering | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:271](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L271)&nbsp;


___


### data
<div style="margin-left: 10px;">



**`en`** The actual data of the mesh




•  **data**:
 ``Uint8Array`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:240](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L240)&nbsp;


___


### hash
<div style="margin-left: 10px;">



**`en`** The hash of the mesh




•  **hash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:248](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L248)&nbsp;


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


### jointBufferIndices
<div style="margin-left: 10px;">
The index of the joint buffer of all sub meshes in the joint map buffers



The index of the joint buffer of all sub meshes in the joint map buffers

•  **jointBufferIndices**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:257](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L257)&nbsp;


___


### maxPosition
<div style="margin-left: 10px;">



**`en`** The maximum position of all vertices in the mesh



**`deprecated`** Please use [[struct.maxPosition]] instead





•  **maxPosition**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L224)&nbsp;


___


### minPosition
<div style="margin-left: 10px;">



**`en`** The minimum position of all vertices in the mesh



**`deprecated`** Please use [[struct.minPosition]] instead





•  **minPosition**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L215)&nbsp;


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


### renderingSubMeshes
<div style="margin-left: 10px;">



**`en`** The sub meshes for rendering. Mesh could be split into different sub meshes for rendering.




•  **renderingSubMeshes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L266)&nbsp;


___


### struct
<div style="margin-left: 10px;">



**`en`** The struct of the mesh




•  **struct**:
 ``IStruct`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L232)&nbsp;


___


### subMeshCount
<div style="margin-left: 10px;">



**`en`** The sub meshes count of the mesh.



**`deprecated`** Please use [[renderingSubMeshes.length]] instead





•  **subMeshCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:205](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L205)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Mesh**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:293](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L293)&nbsp;


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
### assign

<div style="margin-left: 10px;">

▸   **assign**<`void`\>(`struct: IStruct, data: Uint8Array`) : `void`



**`en`** Reset the struct and data of the mesh



**`deprecated`** Will be removed in v3.0.0, please use [[reset]] instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `struct` | `IStruct` | The new struct  |
| `data` | `Uint8Array` | The new data  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:420](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L420)&nbsp;
___
### copyAttribute

<div style="margin-left: 10px;">

▸   **copyAttribute**<`boolean`\>(`primitiveIndex: number, attributeName: AttributeName, buffer: ArrayBuffer, stride: number, offset: number`) : `boolean`



**`en`** Read the requested attribute of the given sub mesh and fill into the given buffer.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `primitiveIndex` | `number` | Sub mesh index  |
| `attributeName` | `AttributeName` | Attribute name  |
| `buffer` | `ArrayBuffer` | The target array buffer  |
| `stride` | `number` | Byte distance between two attributes in the target buffer  |
| `offset` | `number` | The offset of the first attribute in the target buffer  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:909](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L909)&nbsp;
___
### copyIndices

<div style="margin-left: 10px;">

▸   **copyIndices**<`boolean`\>(`primitiveIndex: number, outputArray: array<number> | ArrayBufferView`) : `boolean`



**`en`** Read the indices data of the given sub mesh and fill into the given array



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `primitiveIndex` | `number` | Sub mesh index  |
| `outputArray` | `array<number> \| ArrayBufferView` | The target output array  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:979](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L979)&nbsp;
___
### createNode

<div style="margin-left: 10px;">

▸   **createNode**<`void`\>(`callback: CreateNodeCallback`) : `void`



**`en`** 
Create a new node using this asset in the scene.<br/>
If this type of asset dont have its corresponding node type, this method should be null.



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



**`en`** Destroy the mesh and release all related GPU resources




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L394)&nbsp;
___
### destroyRenderingMesh

<div style="margin-left: 10px;">

▸   **destroyRenderingMesh**<`void`\> : `void`



**`en`** Release all related GPU resources




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:403](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L403)&nbsp;
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
### getBoneSpaceBounds

<div style="margin-left: 10px;">

▸   **getBoneSpaceBounds**(`skeleton: Skeleton`)



**`en`** Get [[AABB]] bounds in the skeleton's bone space



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `skeleton` | `Skeleton` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L447)&nbsp;
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

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:1037](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L1037)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L300)&nbsp;
___
### merge

<div style="margin-left: 10px;">

▸   **merge**<`boolean`\>(`mesh: Mesh, worldMatrix: Mat4, validate: undefined | false | true`) : `boolean`



**`en`** Merge the given mesh into the current mesh



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mesh` | `Mesh` | The mesh to be merged  |
| `worldMatrix` | `Mat4` | The world matrix of the given mesh  |
| `validate` | `undefined \| false \| true` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:495](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L495)&nbsp;
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
### readAttribute

<div style="margin-left: 10px;">

▸   **readAttribute**(`primitiveIndex: number, attributeName: AttributeName`)



**`en`** Read the requested attribute of the given sub mesh



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `primitiveIndex` | `number` | Sub mesh index  |
| `attributeName` | `AttributeName` | Attribute name  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:866](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L866)&nbsp;
___
### readIndices

<div style="margin-left: 10px;">

▸   **readIndices**(`primitiveIndex: number`)



**`en`** Read the indices data of the given sub mesh



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `primitiveIndex` | `number` | Sub mesh index  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:959](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L959)&nbsp;
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

▸   **reset**<`void`\>(`info: ICreateInfo`) : `void`



**`en`** Reset the mesh with mesh creation information



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `ICreateInfo` | Mesh creation information including struct and data  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:432](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L432)&nbsp;
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

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:1048](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L1048)&nbsp;
___
### validateMergingMesh

<div style="margin-left: 10px;">

▸   **validateMergingMesh**<`boolean`\>(`mesh: Mesh`) : `boolean`



**`en`** Validation for whether the given mesh can be merged into the current mesh.
To pass the validation, it must satisfy either of these two requirements:
- When the current mesh have no data
- When the two mesh have the same vertex bundle count, the same sub meshes count, and the same sub mesh layout.

Same mesh layout means:
- They have the same primitive type and reference to the same amount vertex bundle with the same indices.
- And they all have or don't have index view



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mesh` | `Mesh` | The other mesh to be validated  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:807](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L807)&nbsp;
___
<!---->
<!---->




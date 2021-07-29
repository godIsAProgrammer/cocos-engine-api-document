
## Class: Primitive


`extend:`
[Mesh](docs/zh/asset/Class/Mesh.md)










**`zh`** 
基础图形网格，可以在运行时构建一些基础的网格。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  PrimitiveType](#PrimitiveType)
- [ info](#info)
- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ morphRendering](#morphRendering)
- [ type](#type)
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


### PrimitiveType
<div style="margin-left: 10px;">




• `static` **PrimitiveType**:
`EnumAlias`  = `PrimitiveType`
</div>

##### Defined in &nbsp;   [cocos/primitive/primitive.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/primitive.ts#L58)&nbsp;   [cocos/primitive/primitive.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/primitive.ts#L96)&nbsp;


___


### info
<div style="margin-left: 10px;">



**`zh`** 
创建此基础图形网格的可选参数，请在 onLoaded 调用之前设置。





•  **info**:
`Record` 
</div>

##### Defined in &nbsp;   [cocos/primitive/primitive.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/primitive.ts#L77)&nbsp;


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



**`zh`** 
该资源是否已经成功加载。





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


### type
<div style="margin-left: 10px;">



**`zh`** 
此基础图形网格的类型，请在 onLoaded 调用之前设置。





•  **type**:
`number`  = `PrimitiveType.BOX`
</div>

##### Defined in &nbsp;   [cocos/primitive/primitive.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/primitive.ts#L67)&nbsp;


___


### data
<div style="margin-left: 10px;">



**`zh`** 此网格的数据。





•  **data**:
 ``Uint8Array`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:240](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L240)&nbsp;


___


### hash
<div style="margin-left: 10px;">



**`zh`** 此网格的哈希值。





•  **hash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:248](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L248)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isValid
<div style="margin-left: 10px;">



**`zh`** 
表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。



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



**`zh`** （各分量都）大于等于此网格任何顶点位置的最大位置。



**`deprecated`** Please use [[struct.maxPosition]] instead





•  **maxPosition**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L224)&nbsp;


___


### minPosition
<div style="margin-left: 10px;">



**`zh`** （各分量都）小于等于此网格任何顶点位置的最大位置。



**`deprecated`** Please use [[struct.minPosition]] instead





•  **minPosition**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L215)&nbsp;


___


### name
<div style="margin-left: 10px;">



**`zh`** 该对象的名称。



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



**`zh`** 
返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。



**`readonly`** 





•  **nativeUrl**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L113)&nbsp;


___


### refCount
<div style="margin-left: 10px;">



**`zh`** 
引用的数量





•  **refCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L249)&nbsp;


___


### renderingSubMeshes
<div style="margin-left: 10px;">



**`zh`** 此网格创建的渲染网格。





•  **renderingSubMeshes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L266)&nbsp;


___


### struct
<div style="margin-left: 10px;">



**`zh`** 此网格的结构。





•  **struct**:
 ``IStruct`` 
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L232)&nbsp;


___


### subMeshCount
<div style="margin-left: 10px;">



**`zh`** 此网格的子网格数量。



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

• **new Primitive**(`type: PrimitiveType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `PrimitiveType` |
</div>

##### Defined in &nbsp;   [cocos/primitive/primitive.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/primitive.ts#L77)&nbsp;


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



**`zh`** 
增加资源的引用





##### Returns `Asset`
</div>

##### Defined in &nbsp;   [cocos/core/assets/asset.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/asset.ts#L263)&nbsp;
___
### assign

<div style="margin-left: 10px;">

▸   **assign**<`void`\>(`struct: IStruct, data: Uint8Array`) : `void`



**`zh`** 重置此网格的结构和数据。



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



**`zh`** 读取子网格的指定属性到目标缓冲区中。



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



**`zh`** 读取子网格的索引数据到目标数组中。



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



**`zh`** 
使用该资源在场景中创建一个新节点。<br/>
如果这类资源没有相应的节点类型，该方法应该是空的。




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



**`zh`** 
减少资源的引用并尝试进行自动释放。




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



**`zh`** 销毁此网格，并释放它占有的所有 GPU 资源。





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L394)&nbsp;
___
### destroyRenderingMesh

<div style="margin-left: 10px;">

▸   **destroyRenderingMesh**<`void`\> : `void`



**`zh`** 释放此网格占有的所有 GPU 资源。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:403](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L403)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`



**`zh`** 派发一个指定事件，并传递需要的参数



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



**`zh`** 获取骨骼变换空间内下的 [[AABB]] 包围盒



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



**`zh`** 检查指定事件是否已注册回调。



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



**`zh`** 合并指定的网格到此网格中。



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



**`zh`** 
删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。




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



**`zh`** 
注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。




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



**`zh`** 
根据`type`和`info`构建相应的网格。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/primitive/primitive.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/primitive.ts#L90)&nbsp;
___
### once

<div style="margin-left: 10px;">

▸   **once**(`type: EventType, callback: TFunction, thisArg: any`)



**`zh`** 
注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。




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



**`zh`** 读取子网格的指定属性。



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



**`zh`** 读取子网格的索引数据。



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



**`zh`** 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。



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



**`zh`** 重置此网格。



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



**`zh`** 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。



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



**`zh`** 
返回对象的字符串表示形式。<br>
`Asset` 对象将会重写 `Object` 对象的 `toString()` 方法。<br>
当资源要表示为文本值时或在字符串连接时引用时，<br>
JavaScript 会自动调用 toString() 方法。<br>
<br>
对于原始类型的资源，它将返回`this.nativeUrl`。<br>
否则，返回空字符串。<br>
子类可能会覆盖此方法。



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



**`zh`** 验证指定网格是否可以合并至当前网格。

当满足以下条件之一时，指定网格可以合并至当前网格：
 - 当前网格无数据而待合并网格有数据；
 - 它们的顶点块数目相同且对应顶点块的布局一致，并且它们的子网格数目相同且对应子网格的布局一致。

两个顶点块布局一致当且仅当：
 - 它们具有相同数量的顶点属性且对应的顶点属性具有相同的属性格式。

两个子网格布局一致，当且仅当：
 - 它们具有相同的图元类型并且引用相同数量、相同索引的顶点块；并且，
 - 要么都需要索引绘制，要么都不需要索引绘制。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mesh` | `Mesh` | The other mesh to be validated  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/3d/assets/mesh.ts:807](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/assets/mesh.ts#L807)&nbsp;
___
<!---->




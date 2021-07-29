
## Class: TextureCube


`extend:`
[SimpleTexture](docs/en/asset/Class/SimpleTexture.md)










**`en`** The texture cube asset.
Each mipmap level of a texture cube have 6 [[ImageAsset]], represents 6 faces of the cube.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  FaceIndex](#FaceIndex)
- [ **`static`**  Filter](#Filter)
- [ **`static`**  PixelFormat](#PixelFormat)
- [ **`static`**  WrapMode](#WrapMode)
- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ height](#height)
- [ hideFlags](#hideFlags)
- [ image](#image)
- [ isCompressed](#isCompressed)
- [ isValid](#isValid)
- [ mipmapLevel](#mipmapLevel)
- [ mipmaps](#mipmaps)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ refCount](#refCount)
- [ width](#width)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  fromTexture2DArray](#fromTexture2DArray)
- [ **`static`**  deserialize](#deserialize)
- [ addRef](#addRef)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getAnisotropy](#getAnisotropy)
- [ getGFXSampler](#getGFXSampler)
- [ getGFXTexture](#getGFXTexture)
- [ getHash](#getHash)
- [ getId](#getId)
- [ getPixelFormat](#getPixelFormat)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ releaseTexture](#releaseTexture)
- [ removeAll](#removeAll)
- [ reset](#reset)
- [ setAnisotropy](#setAnisotropy)
- [ setFilters](#setFilters)
- [ setMipFilter](#setMipFilter)
- [ setWrapMode](#setWrapMode)
- [ targetOff](#targetOff)
- [ toString](#toString)
- [ updateImage](#updateImage)
- [ updateMipmaps](#updateMipmaps)
- [ uploadData](#uploadData)
- [ validate](#validate)
</div>

## Properties


### FaceIndex
<div style="margin-left: 10px;">




• `static` **FaceIndex**:
`FaceIndex`  = `FaceIndex`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L77)&nbsp;


___


### Filter
<div style="margin-left: 10px;">



**`en`** The texture filter mode enum




• `static` **Filter**:
`Filter`  = `Filter`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L92)&nbsp;


___


### PixelFormat
<div style="margin-left: 10px;">



**`en`** The pixel format enum.




• `static` **PixelFormat**:
`PixelFormat`  = `PixelFormat`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L80)&nbsp;


___


### WrapMode
<div style="margin-left: 10px;">



**`en`** The wrap mode enum.




• `static` **WrapMode**:
`WrapMode`  = `WrapMode`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L86)&nbsp;


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


### height
<div style="margin-left: 10px;">



**`en`** Pixel height of the texture




•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L72)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### image
<div style="margin-left: 10px;">



**`en`** Level 0 mipmap image.
Be noted, `this.image = img` equals `this.mipmaps = [img]`,
sets image will clear all previous mipmaps.




•  **image**:
 ``null | ITextureCubeMipmap`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L122)&nbsp;   [cocos/core/assets/texture-cube.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L126)&nbsp;


___


### isCompressed
<div style="margin-left: 10px;">



**`en`** Whether the pixel data is compressed.




•  **isCompressed**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L55)&nbsp;


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


### mipmapLevel
<div style="margin-left: 10px;">



**`en`** The mipmap level of the texture




•  **mipmapLevel**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/simple-texture.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/simple-texture.ts#L80)&nbsp;


___


### mipmaps
<div style="margin-left: 10px;">



**`en`** All levels of mipmap images, be noted, automatically generated mipmaps are not included.
When setup mipmap, the size of the texture and pixel format could be modified.




•  **mipmaps**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L85)&nbsp;   [cocos/core/assets/texture-cube.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L89)&nbsp;


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


### width
<div style="margin-left: 10px;">



**`en`** Pixel width of the texture




•  **width**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L64)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new TextureCube**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L127)&nbsp;


---

<!---->
## Methods

### fromTexture2DArray

<div style="margin-left: 10px;">

▸ `static`  **fromTexture2DArray**<`TextureCube`\>(`textures: undefined, out: TextureCube`) : `TextureCube`



**`en`** Create a texture cube with an array of [[Texture2D]] which represents 6 faces of the texture cube.



**`example`**

```ts


const textures = new Array<Texture2D>(6);
textures[TextureCube.FaceIndex.front] = frontImage;
textures[TextureCube.FaceIndex.back] = backImage;
textures[TextureCube.FaceIndex.left] = leftImage;
textures[TextureCube.FaceIndex.right] = rightImage;
textures[TextureCube.FaceIndex.top] = topImage;
textures[TextureCube.FaceIndex.bottom] = bottomImage;
const textureCube = TextureCube.fromTexture2DArray(textures);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `textures` |  | Texture array, the texture count must be multiple of 6. Every 6 textures are 6 faces of a mipmap level.The order should obey [[FaceIndex]] order.  |
| `out` | `TextureCube` | Output texture cube, if not given, will create a new texture cube.  |


##### Returns `TextureCube`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:149](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L149)&nbsp;
___
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


销毁此贴图，清空所有 Mipmap 并释放占用的 GPU 资源。


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L213)&nbsp;
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
### getAnisotropy

<div style="margin-left: 10px;">

▸   **getAnisotropy**<`number`\> : `number`



**`en`** Gets the anisotropy




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L163)&nbsp;
___
### getGFXSampler

<div style="margin-left: 10px;">

▸   **getGFXSampler**<`Sampler`\> : `Sampler`



**`en`** Gets the sampler resource for the texture




##### Returns `Sampler`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L279)&nbsp;
___
### getGFXTexture

<div style="margin-left: 10px;">

▸   **getGFXTexture**



**`en`** The GFX Texture resource




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/simple-texture.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/simple-texture.ts#L88)&nbsp;
___
### getHash

<div style="margin-left: 10px;">

▸   **getHash**<`number`\> : `number`



**`en`** Gets the texture hash.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L254)&nbsp;
___
### getId

<div style="margin-left: 10px;">

▸   **getId**<`string`\> : `string`



**`en`** Gets the id of the texture




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L145)&nbsp;
___
### getPixelFormat

<div style="margin-left: 10px;">

▸   **getPixelFormat**<`number`\> : `number`



**`en`** Gets the pixel format




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L154)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L286)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L171)&nbsp;
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
### releaseTexture

<div style="margin-left: 10px;">

▸   **releaseTexture**<`void`\> : `void`



**`en`** Release used GPU resources.



**`deprecated`** please use [[destroy]] instead





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L223)&nbsp;
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

▸   **reset**<`void`\>(`info: ITextureCubeCreateInfo`) : `void`



**`en`** Reset the current texture with given size, pixel format and mipmap images.
After reset, the gfx resource will become invalid, you must use [[uploadData]] explicitly to upload the new mipmaps to GPU resources.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `ITextureCubeCreateInfo` | The create information  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L184)&nbsp;
___
### setAnisotropy

<div style="margin-left: 10px;">

▸   **setAnisotropy**<`void`\>(`anisotropy: number`) : `void`



**`en`** Sets the texture's anisotropy



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `anisotropy` | `number` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L229)&nbsp;
___
### setFilters

<div style="margin-left: 10px;">

▸   **setFilters**<`void`\>(`minFilter: Filter, magFilter: Filter`) : `void`



**`en`** Sets the texture's filter mode



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `minFilter` | `Filter` | Filter mode for scale down  |
| `magFilter` | `Filter` | Filter mode for scale up  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L199)&nbsp;
___
### setMipFilter

<div style="margin-left: 10px;">

▸   **setMipFilter**<`void`\>(`mipFilter: Filter`) : `void`



**`en`** Sets the texture's mip filter



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mipFilter` | `Filter` | Filter mode for scale down  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L215)&nbsp;
___
### setWrapMode

<div style="margin-left: 10px;">

▸   **setWrapMode**<`void`\>(`wrapS: WrapMode, wrapT: WrapMode, wrapR: WrapMode`) : `void`



**`en`** Sets the wrap mode of the texture.
Be noted, if the size of the texture is not power of two, only [[WrapMode.CLAMP_TO_EDGE]] is allowed.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `wrapS` | `WrapMode` | S(U) coordinate wrap mode  |
| `wrapT` | `WrapMode` | T(V) coordinate wrap mode  |
| `wrapR` | `WrapMode` | R(W) coordinate wrap mode  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-base.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-base.ts#L176)&nbsp;
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
### updateImage

<div style="margin-left: 10px;">

▸   **updateImage**<`void`\> : `void`



**`en`** Update the level 0 mipmap image.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/simple-texture.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/simple-texture.ts#L101)&nbsp;
___
### updateMipmaps

<div style="margin-left: 10px;">

▸   **updateMipmaps**<`void`\>(`firstLevel: number, count: undefined | number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `firstLevel` | `number` | - |
| `count` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L192)&nbsp;
___
### uploadData

<div style="margin-left: 10px;">

▸   **uploadData**<`void`\>(`source: HTMLCanvasElement | HTMLImageElement | ArrayBufferView | ImageBitmap, level: number, arrayIndex: number`) : `void`



**`en`** Upload data to the given mipmap level.
The size of the image will affect how the mipmap is updated.
- When the image is an ArrayBuffer, the size of the image must match the mipmap size.
- If the image size matches the mipmap size, the mipmap data will be updated entirely.
- If the image size is smaller than the mipmap size, the mipmap will be updated from top left corner.
- If the image size is larger, an error will be raised



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `source` | `HTMLCanvasElement \| HTMLImageElement \| ArrayBufferView \| ImageBitmap` | The source image or image data  |
| `level` | `number` | Mipmap level to upload the image to  |
| `arrayIndex` | `number` | The array index  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/assets/simple-texture.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/simple-texture.ts#L133)&nbsp;
___
### validate

<div style="margin-left: 10px;">

▸   **validate**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/assets/texture-cube.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/texture-cube.ts#L301)&nbsp;
___
<!---->





## Class: SpriteFrame


`extend:`
[Asset](docs/en/asset/Class/Asset.md)












**`en`** 
A `SpriteFrame` support several types
 1. Rectangle sprite frame
 2. Sliced 9 sprite frame
 3. Mesh sprite frame
It mainly contains:<br/>
 - texture: A [[TextureBase]] or [[RenderTexture]] that will be used by render process<br/>
 - rectangle: A rectangle of the texture
 - Sliced 9 border insets: The distance of each side from the internal rect to the sprite frame rect
 - vertices: Vertex list for the mesh type sprite frame
 - uv: The quad uv
 - uvSliced: The sliced 9 uv





**`example`**

```ts


import { resources } from 'cc';
// First way to use a SpriteFrame
const url = "assets/PurpleMonster/icon/spriteFrame";
resources.load(url, (err, spriteFrame) => {
  const node = new Node("New Sprite");
  const sprite = node.addComponent(Sprite);
  sprite.spriteFrame = spriteFrame;
  node.parent = self.node;
});

// Second way to use a SpriteFrame
const self = this;
const url = "test_assets/PurpleMonster";
resources.load(url, (err, imageAsset) => {
 if(err){
   return;
 }

 const node = new Node("New Sprite");
 const sprite = node.addComponent(Sprite);
 const spriteFrame = new SpriteFrame();
 const tex = imageAsset._texture;
 spriteFrame.texture = tex;
 sprite.spriteFrame = spriteFrame;
 node.parent = self.node;
});

// Third way to use a SpriteFrame
const self = this;
const cameraComp = this.getComponent(Camera);
const renderTexture = new RenderTexture();
rendetTex.reset({
  width: 512,
  height: 512,
  depthStencilFormat: RenderTexture.DepthStencilFormat.DEPTH_24_STENCIL_8
});

cameraComp.targetTexture = renderTexture;
const spriteFrame = new SpriteFrame();
spriteFrame.texture = renderTexture;


```


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isDefault](#isDefault)
- [ loaded](#loaded)
- [ unbiasUV](#unbiasUV)
- [ uv](#uv)
- [ uvHash](#uvHash)
- [ uvSliced](#uvSliced)
- [ vertices](#vertices)
- [ atlasUuid](#atlasUuid)
- [ flipUVX](#flipUVX)
- [ flipUVY](#flipUVY)
- [ height](#height)
- [ hideFlags](#hideFlags)
- [ insetBottom](#insetBottom)
- [ insetLeft](#insetLeft)
- [ insetRight](#insetRight)
- [ insetTop](#insetTop)
- [ isValid](#isValid)
- [ name](#name)
- [ nativeUrl](#nativeUrl)
- [ offset](#offset)
- [ original](#original)
- [ originalSize](#originalSize)
- [ packable](#packable)
- [ rect](#rect)
- [ refCount](#refCount)
- [ rotated](#rotated)
- [ texture](#texture)
- [ width](#width)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  deserialize](#deserialize)
- [ **`static`**  createWithImage](#createWithImage)
- [ addRef](#addRef)
- [ checkRect](#checkRect)
- [ clone](#clone)
- [ createNode](#createNode)
- [ decRef](#decRef)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getGFXSampler](#getGFXSampler)
- [ getGFXTexture](#getGFXTexture)
- [ getHash](#getHash)
- [ getOffset](#getOffset)
- [ getOriginalSize](#getOriginalSize)
- [ getRect](#getRect)
- [ getSamplerHash](#getSamplerHash)
- [ hasEventListener](#hasEventListener)
- [ initDefault](#initDefault)
- [ isRotated](#isRotated)
- [ off](#off)
- [ on](#on)
- [ onLoaded](#onLoaded)
- [ once](#once)
- [ removeAll](#removeAll)
- [ reset](#reset)
- [ setOffset](#setOffset)
- [ setOriginalSize](#setOriginalSize)
- [ setRect](#setRect)
- [ setRotated](#setRotated)
- [ targetOff](#targetOff)
- [ textureLoaded](#textureLoaded)
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


### unbiasUV
<div style="margin-left: 10px;">




•  **unbiasUV**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:500](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L500)&nbsp;


___


### uv
<div style="margin-left: 10px;">




**`en`** UV for quad vertices




•  **uv**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:497](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L497)&nbsp;


___


### uvHash
<div style="margin-left: 10px;">




•  **uvHash**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:498](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L498)&nbsp;


___


### uvSliced
<div style="margin-left: 10px;">




**`en`** UV for sliced 9 vertices




•  **uvSliced**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L506)&nbsp;


___


### vertices
<div style="margin-left: 10px;">




**`en`** Vertex list for the mesh type sprite frame




•  **vertices**:
`IVertices | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L491)&nbsp;


___


### atlasUuid
<div style="margin-left: 10px;">




**`en`** The uuid of the atlas asset, if exist




•  **atlasUuid**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:414](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L414)&nbsp;   [cocos/2d/assets/sprite-frame.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L418)&nbsp;


___


### flipUVX
<div style="margin-left: 10px;">




**`en`** Whether flip the uv in X direction




•  **flipUVX**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:454](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L454)&nbsp;   [cocos/2d/assets/sprite-frame.ts:458](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L458)&nbsp;


___


### flipUVY
<div style="margin-left: 10px;">




**`en`** Whether flip the uv in Y direction




•  **flipUVY**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:467](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L467)&nbsp;   [cocos/2d/assets/sprite-frame.ts:471](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L471)&nbsp;


___


### height
<div style="margin-left: 10px;">




**`en`** The pixel height of the sprite frame




•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L434)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### insetBottom
<div style="margin-left: 10px;">




**`en`** Bottom border distance of sliced 9 rect.




•  **insetBottom**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L266)&nbsp;   [cocos/2d/assets/sprite-frame.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L270)&nbsp;


___


### insetLeft
<div style="margin-left: 10px;">




**`en`** Left border distance of sliced 9 rect.




•  **insetLeft**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L285)&nbsp;   [cocos/2d/assets/sprite-frame.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L289)&nbsp;


___


### insetRight
<div style="margin-left: 10px;">




**`en`** Right border distance of sliced 9 rect.




•  **insetRight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L304)&nbsp;   [cocos/2d/assets/sprite-frame.ts:308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L308)&nbsp;


___


### insetTop
<div style="margin-left: 10px;">




**`en`** Top border distance of sliced 9 rect.




•  **insetTop**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L247)&nbsp;   [cocos/2d/assets/sprite-frame.ts:251](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L251)&nbsp;


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


### offset
<div style="margin-left: 10px;">




**`en`** The offset of the sprite frame center.
Sprite frame in an atlas texture could be trimmed for clipping the transparent pixels, so the trimmed rect is smaller than the original one,
the offset defines the distance from the original center to the trimmed center.




•  **offset**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L366)&nbsp;   [cocos/2d/assets/sprite-frame.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L370)&nbsp;


___


### original
<div style="margin-left: 10px;">




•  **original**:
 ``null | `` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:483](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L483)&nbsp;


___


### originalSize
<div style="margin-left: 10px;">




**`en`** The original size before trimmed.




•  **originalSize**:
 ``Size`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L344)&nbsp;   [cocos/2d/assets/sprite-frame.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L348)&nbsp;


___


### packable
<div style="margin-left: 10px;">




•  **packable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:476](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L476)&nbsp;   [cocos/2d/assets/sprite-frame.ts:479](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L479)&nbsp;


___


### rect
<div style="margin-left: 10px;">




**`en`** Returns the rect of the sprite frame in the texture.
If it's an atlas texture, a transparent pixel area is proposed for the actual mapping of the current texture.




•  **rect**:
 ``Rect`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L325)&nbsp;   [cocos/2d/assets/sprite-frame.ts:329](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L329)&nbsp;


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


### rotated
<div style="margin-left: 10px;">




**`en`** Whether the content of sprite frame is rotated.




•  **rotated**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:378](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L378)&nbsp;   [cocos/2d/assets/sprite-frame.ts:382](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L382)&nbsp;


___


### texture
<div style="margin-left: 10px;">




**`en`** The texture of the sprite frame, could be [[TextureBase]] or [[RenderTexture]]




•  **texture**:
 ``TextureBase | RenderTexture`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:397](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L397)&nbsp;   [cocos/2d/assets/sprite-frame.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L401)&nbsp;


___


### width
<div style="margin-left: 10px;">




**`en`** The pixel width of the sprite frame




•  **width**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:426](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L426)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new SpriteFrame**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:536](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L536)&nbsp;


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
### createWithImage
<div style="margin-left: 10px;">

▸ `static`  **createWithImage**<`SpriteFrame`\>(`imageSourceOrImageAsset: ImageSource | ImageAsset`) : `SpriteFrame`




**`en`** Create a SpriteFrame object by an image asset or an native image asset




<!---->
<!--    #### Returns `SpriteFrame` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `imageSourceOrImageAsset` | `ImageSource \| ImageAsset` | ImageAsset or ImageSource, ImageSource support HTMLCanvasElement HTMLImageElement IMemoryImageSource  |



##### Returns `SpriteFrame`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L234)&nbsp;
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
### checkRect
<div style="margin-left: 10px;">

▸   **checkRect**<`boolean`\>(`texture: TextureBase | RenderTexture`) : `boolean`




**`en`** Check whether the rect of the sprite frame is out of the texture boundary




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `texture` | `TextureBase \| RenderTexture` |   |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:761](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L761)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸   **clone**<`SpriteFrame`\> : `SpriteFrame`




<!---->
<!--    #### Returns `SpriteFrame` -->
<!---->


##### Returns `SpriteFrame`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:1233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L1233)&nbsp;
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

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:791](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L791)&nbsp;
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
### getGFXSampler
<div style="margin-left: 10px;">

▸   **getGFXSampler**<`Sampler`\> : `Sampler`




**`en`** Gets the sampler resource of its texture




<!---->
<!--    #### Returns `Sampler` -->
<!---->


##### Returns `Sampler`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:666](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L666)&nbsp;
___
### getGFXTexture
<div style="margin-left: 10px;">

▸   **getGFXTexture**




**`en`** Gets the related GFX [[Texture]] resource




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:658](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L658)&nbsp;
___
### getHash
<div style="margin-left: 10px;">

▸   **getHash**<`number`\> : `number`




**`en`** Gets the hash of its texture




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:674](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L674)&nbsp;
___
### getOffset
<div style="margin-left: 10px;">

▸   **getOffset**<`Vec2`\>(`out: Vec2`) : `Vec2`




**`en`** Returns the offset of the frame




**`deprecated`** since v1.2, please use [[offset]]





<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | The output offset object  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:635](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L635)&nbsp;
___
### getOriginalSize
<div style="margin-left: 10px;">

▸   **getOriginalSize**<`Size`\>(`out: Size`) : `Size`




**`en`** Returns the original size before trimmed.




**`deprecated`** since v1.2, please use [[originalSize]]





<!---->
<!--    #### Returns `Size` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Size` | - |



##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:610](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L610)&nbsp;
___
### getRect
<div style="margin-left: 10px;">

▸   **getRect**<`Rect`\>(`out: Rect`) : `Rect`




**`en`** Returns the rect of the sprite frame in the texture.
If it's an atlas texture, a transparent pixel area is proposed for the actual mapping of the current texture.




**`deprecated`** since v1.2, please use [[rect]]





<!---->
<!--    #### Returns `Rect` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Rect` | - |



##### Returns `Rect`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:587](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L587)&nbsp;
___
### getSamplerHash
<div style="margin-left: 10px;">

▸   **getSamplerHash**<`number`\> : `number`




**`en`** Gets the sampler hash of its texture




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:682](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L682)&nbsp;
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

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:1296](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L1296)&nbsp;
___
### isRotated
<div style="margin-left: 10px;">

▸   **isRotated**<`boolean`\> : `boolean`




**`en`** 
Returns whether the sprite frame is rotated in the texture.




**`deprecated`** since v1.2, please use [[rotated]] instead





<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:564](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L564)&nbsp;
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

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:786](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L786)&nbsp;
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
### reset
<div style="margin-left: 10px;">

▸   **reset**<`void`\>(`info: ISpriteFrameInitInfo, clearData: boolean`) : `void`




**`en`** Resets the sprite frame data




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `ISpriteFrameInitInfo` | SpriteFrame initialization information  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `clearData` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:691](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L691)&nbsp;
___
### setOffset
<div style="margin-left: 10px;">

▸   **setOffset**<`void`\>(`offset: Vec2`) : `void`




**`en`** Sets the offset of the frame




**`deprecated`** since v1.2, please use [[offset]]





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `offset` | `Vec2` | The new offset  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:650](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L650)&nbsp;
___
### setOriginalSize
<div style="margin-left: 10px;">

▸   **setOriginalSize**<`void`\>(`size: Size`) : `void`




**`en`** Sets the original size before trimmed.




**`deprecated`** since v1.2, please use [[originalSize]]





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `size` | `Size` | The new original size  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:625](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L625)&nbsp;
___
### setRect
<div style="margin-left: 10px;">

▸   **setRect**<`void`\>(`rect: Rect`) : `void`




**`en`** Sets the rect of the sprite frame in the texture.




**`deprecated`** since v1.2, please use [[rect]]





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rect` | `Rect` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:601](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L601)&nbsp;
___
### setRotated
<div style="margin-left: 10px;">

▸   **setRotated**<`void`\>(`rotated: boolean`) : `void`




**`en`** 
Set whether the sprite frame is rotated in the texture.




**`deprecated`** since v1.2, please use [[rotated]] instead





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rotated` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L576)&nbsp;
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
### textureLoaded
<div style="margin-left: 10px;">

▸   **textureLoaded**<`boolean`\> : `boolean`




**`en`** 
Returns whether the texture have been loaded.




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:553](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L553)&nbsp;
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

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:1304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L1304)&nbsp;
___
<!---->




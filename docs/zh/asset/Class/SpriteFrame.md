
## Class: SpriteFrame


`extend:`
[Asset](docs/zh/asset/Class/Asset.md)












**`zh`** 
精灵帧资源。
一个 SpriteFrame 支持多种类型
 1. 矩形精灵帧
 2. 九宫格精灵帧
 3. 网格精灵帧
它主要包含下列数据：<br/>
 - 纹理：会被渲染流程使用的 [[TextureBase]] or [[RenderTexture]] 资源。<br/>
 - 矩形：在纹理中的矩形区域。
 - 九宫格信息：九宫格的内部矩形四个边距离 SpriteFrame 外部矩形的距离
 - 网格信息：网格类型精灵帧的所有顶点列表
 - uv: 四边形 UV
 - uvSliced: 九宫格 UV
可通过 `SpriteFrame` 获取该组件。





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




**`zh`** 
该资源是否已经成功加载。





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




**`zh`** 矩形的顶点 UV





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




**`zh`** 九宫格的顶点 UV。





•  **uvSliced**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L506)&nbsp;


___


### vertices
<div style="margin-left: 10px;">




**`zh`** 网格类型精灵帧的所有顶点列表





•  **vertices**:
`IVertices | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L491)&nbsp;


___


### atlasUuid
<div style="margin-left: 10px;">




**`zh`** 图集资源的 uuid。





•  **atlasUuid**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:414](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L414)&nbsp;   [cocos/2d/assets/sprite-frame.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L418)&nbsp;


___


### flipUVX
<div style="margin-left: 10px;">




**`zh`** 延 X 轴方向, 翻转 UV





•  **flipUVX**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:454](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L454)&nbsp;   [cocos/2d/assets/sprite-frame.ts:458](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L458)&nbsp;


___


### flipUVY
<div style="margin-left: 10px;">




**`zh`** 延 Y 轴方向, 翻转 UV





•  **flipUVY**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:467](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L467)&nbsp;   [cocos/2d/assets/sprite-frame.ts:471](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L471)&nbsp;


___


### height
<div style="margin-left: 10px;">




**`zh`** 精灵帧的像素高度





•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L434)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### insetBottom
<div style="margin-left: 10px;">




**`zh`** 九宫格内部矩形底部边框距离 SpriteFrame 矩形的距离。





•  **insetBottom**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L266)&nbsp;   [cocos/2d/assets/sprite-frame.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L270)&nbsp;


___


### insetLeft
<div style="margin-left: 10px;">




**`zh`** 九宫格内部矩形左边框距离 SpriteFrame 矩形的距离。





•  **insetLeft**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L285)&nbsp;   [cocos/2d/assets/sprite-frame.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L289)&nbsp;


___


### insetRight
<div style="margin-left: 10px;">




**`zh`** 九宫格内部矩形右边框距离 SpriteFrame 矩形的距离。





•  **insetRight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L304)&nbsp;   [cocos/2d/assets/sprite-frame.ts:308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L308)&nbsp;


___


### insetTop
<div style="margin-left: 10px;">




**`zh`** 九宫格内部矩形顶部边框距离 SpriteFrame 矩形的距离。





•  **insetTop**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L247)&nbsp;   [cocos/2d/assets/sprite-frame.ts:251](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L251)&nbsp;


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


### offset
<div style="margin-left: 10px;">




**`zh`** 精灵帧偏移量。
在图集中的精灵帧可能会被剔除透明像素以获得更高的空间利用李，剔除后的矩形尺寸比剪裁前更小，偏移量指的是从原始矩形的中心到剪裁后的矩形中心的距离。





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




**`zh`** 修剪前的原始大小。





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




**`zh`** 获取 SpriteFrame 的纹理矩形区域。
如果是一个 atlas 的贴图，则为当前贴图的实际剔除透明像素区域。





•  **rect**:
 ``Rect`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L325)&nbsp;   [cocos/2d/assets/sprite-frame.ts:329](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L329)&nbsp;


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


### rotated
<div style="margin-left: 10px;">




**`zh`** 是否旋转。





•  **rotated**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:378](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L378)&nbsp;   [cocos/2d/assets/sprite-frame.ts:382](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L382)&nbsp;


___


### texture
<div style="margin-left: 10px;">




**`zh`** 贴图对象资源，可以是 [[TextureBase]] 或 [[RenderTexture]] 类型





•  **texture**:
 ``TextureBase | RenderTexture`` 
</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:397](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L397)&nbsp;   [cocos/2d/assets/sprite-frame.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L401)&nbsp;


___


### width
<div style="margin-left: 10px;">




**`zh`** 精灵帧的像素宽度





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




**`zh`** 通过 Image 资源或者平台相关 Image 对象创建一个 SpriteFrame 对象




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




**`zh`** 
增加资源的引用





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




**`zh`** 判断精灵计算的矩形区域是否越界。




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




**`zh`** 
使用该资源在场景中创建一个新节点。<br/>
如果这类资源没有相应的节点类型，该方法应该是空的。





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




**`zh`** 
减少资源的引用并尝试进行自动释放。





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




**`zh`** 派发一个指定事件，并传递需要的参数




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




**`zh`** 贴图资源的采样器





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




**`zh`** 获取渲染贴图的 GFX 资源





<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:658](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L658)&nbsp;
___
### getHash
<div style="margin-left: 10px;">

▸   **getHash**<`number`\> : `number`




**`zh`** 贴图资源的哈希值





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




**`zh`** 获取偏移量。




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




**`zh`** 获取修剪前的原始大小。




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




**`zh`** 获取 SpriteFrame 的纹理矩形区域。
如果是一个 atlas 的贴图，则为当前贴图的实际剔除透明像素区域。




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




**`zh`** 贴图资源的采样器哈希值





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




**`zh`** 检查指定事件是否已注册回调。




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




**`zh`** 
获取 SpriteFrame 是否旋转。




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




**`zh`** 
注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。





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




**`zh`** 
注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。





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




**`zh`** 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。




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




**`zh`** 重置 SpriteFrame 数据。




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




**`zh`** 设置偏移量。




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




**`zh`** 设置修剪前的原始大小。




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




**`zh`** 设置 SpriteFrame 的纹理矩形区域。




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




**`zh`** 
设置 SpriteFrame 是否旋转。




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




**`zh`** 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。




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




**`zh`** 
返回是否已加载精灵帧。





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




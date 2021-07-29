## Interface: ISpriteFrameInitInfo

- [borderBottom](#borderBottom)
- [borderLeft](#borderLeft)
- [borderRight](#borderRight)
- [borderTop](#borderTop)
- [isFlipUv](#isFlipUv)
- [isRotate](#isRotate)
- [offset](#offset)
- [originalSize](#originalSize)
- [rect](#rect)
- [texture](#texture)

### Properties

#### borderBottom

<div style="margin-left: 10px;">




**`en`** Bottom side border for sliced 9 frame.




**`zh`** 九宫格精灵帧的下边界。




**`default`** 0



• **borderBottom**: ``number``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L127)&nbsp;

___
#### borderLeft

<div style="margin-left: 10px;">




**`en`** Left side border for sliced 9 frame.




**`zh`** 九宫格精灵帧的左边界。




**`default`** 0



• **borderLeft**: ``number``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L133)&nbsp;

___
#### borderRight

<div style="margin-left: 10px;">




**`en`** Right side border for sliced 9 frame.




**`zh`** 九宫格精灵帧的右边界。




**`default`** 0



• **borderRight**: ``number``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L139)&nbsp;

___
#### borderTop

<div style="margin-left: 10px;">




**`en`** Top side border for sliced 9 frame.




**`zh`** 九宫格精灵帧的上边界。




**`default`** 0



• **borderTop**: ``number``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L121)&nbsp;

___
#### isFlipUv

<div style="margin-left: 10px;">




**`en`** Whether the uv is flipped




**`zh`** 是否转置 UV。



• **isFlipUv**: ``false | true``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:149](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L149)&nbsp;

___
#### isRotate

<div style="margin-left: 10px;">




**`en`** Whether the content of sprite frame is rotated.




**`zh`** 是否旋转。



• **isRotate**: ``false | true``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L144)&nbsp;

___
#### offset

<div style="margin-left: 10px;">




**`en`** The offset of the sprite frame center from the original center of the original rect.
Sprite frame in an atlas texture could be trimmed for clipping the transparent pixels, so the trimmed rect is smaller than the original one,
the offset defines the distance from the original center to the trimmed center.




**`zh`** 精灵帧偏移量。
在图集中的精灵帧可能会被剔除透明像素以获得更高的空间利用李，剔除后的矩形尺寸比剪裁前更小，偏移量指的是从原始矩形的中心到剪裁后的矩形中心的距离。



• **offset**: ``Vec2``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L115)&nbsp;

___
#### originalSize

<div style="margin-left: 10px;">




**`en`** The original size of the sprite frame




**`zh`** 精灵帧原始尺寸。



• **originalSize**: ``Size``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L102)&nbsp;

___
#### rect

<div style="margin-left: 10px;">




**`en`** The rect of the sprite frame in atlas texture




**`zh`** 精灵帧裁切矩形。



• **rect**: ``Rect``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:107](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L107)&nbsp;

___
#### texture

<div style="margin-left: 10px;">




**`en`** The texture of the sprite frame, could be [[TextureBase]] or [[RenderTexture]]




**`zh`** 贴图对象资源，可以是 [[TextureBase]] 或 [[RenderTexture]] 类型



• **texture**: ``TextureBase | RenderTexture``

</div>


##### Defined in &nbsp;   [cocos/2d/assets/sprite-frame.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assets/sprite-frame.ts#L97)&nbsp;

___


## Class: WebGLTexture


`extend:`
[Texture](docs/en/gfx/Class/Texture.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ depth](#depth)
- [ flags](#flags)
- [ format](#format)
- [ gfxType](#gfxType)
- [ gpuTexture](#gpuTexture)
- [ height](#height)
- [ layerCount](#layerCount)
- [ levelCount](#levelCount)
- [ samples](#samples)
- [ size](#size)
- [ type](#type)
- [ usage](#usage)
- [ width](#width)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
- [ resize](#resize)
</div>

## Properties


### depth
<div style="margin-left: 10px;">



**`en`** Get texture depth.




•  **depth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L95)&nbsp;


___


### flags
<div style="margin-left: 10px;">



**`en`** Get texture flags.




•  **flags**:
 ``TextureFlags`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L127)&nbsp;


___


### format
<div style="margin-left: 10px;">



**`en`** Get texture format.




•  **format**:
 ``Format`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L71)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### gpuTexture
<div style="margin-left: 10px;">




•  **gpuTexture**:
 ``IWebGLGPUTexture`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-texture.ts:33](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-texture.ts#L33)&nbsp;


___


### height
<div style="margin-left: 10px;">



**`en`** Get texture height.




•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L87)&nbsp;


___


### layerCount
<div style="margin-left: 10px;">



**`en`** Get texture array layer.




•  **layerCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L103)&nbsp;


___


### levelCount
<div style="margin-left: 10px;">



**`en`** Get texture mip level.




•  **levelCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L111)&nbsp;


___


### samples
<div style="margin-left: 10px;">



**`en`** Get texture samples.




•  **samples**:
 ``SampleCount`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L119)&nbsp;


___


### size
<div style="margin-left: 10px;">



**`en`** Get texture size.




•  **size**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L135)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`en`** Get texture type.




•  **type**:
 ``TextureType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L55)&nbsp;


___


### usage
<div style="margin-left: 10px;">



**`en`** Get texture usage.




•  **usage**:
 ``TextureUsage`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L63)&nbsp;


___


### width
<div style="margin-left: 10px;">



**`en`** Get texture width.




•  **width**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L79)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLTexture**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/texture.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/texture.ts#L152)&nbsp;


---

<!---->
## Methods

### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-texture.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-texture.ts#L93)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: TextureInfo | TextureViewInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TextureInfo \| TextureViewInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-texture.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-texture.ts#L39)&nbsp;
___
### resize

<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`width: number, height: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |
| `height` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-texture.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-texture.ts#L101)&nbsp;
___
<!---->




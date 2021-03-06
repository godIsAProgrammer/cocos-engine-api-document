
## Class: WebGLFramebuffer


`extend:`
[Framebuffer](docs/zh/gfx/Class/Framebuffer.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ colorTextures](#colorTextures)
- [ depthStencilTexture](#depthStencilTexture)
- [ gfxType](#gfxType)
- [ gpuFramebuffer](#gpuFramebuffer)
- [ renderPass](#renderPass)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
</div>

## Properties


### colorTextures
<div style="margin-left: 10px;">



**`zh`** 颜色纹理视图数组。





•  **colorTextures**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/framebuffer.ts:53](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/framebuffer.ts#L53)&nbsp;


___


### depthStencilTexture
<div style="margin-left: 10px;">



**`zh`** 深度模板纹理视图。





•  **depthStencilTexture**:
 ``Texture | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/framebuffer.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/framebuffer.ts#L61)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### gpuFramebuffer
<div style="margin-left: 10px;">




•  **gpuFramebuffer**:
 ``IWebGLGPUFramebuffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-framebuffer.ts:36](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-framebuffer.ts#L36)&nbsp;


___


### renderPass
<div style="margin-left: 10px;">



**`zh`** GFX 渲染过程。





•  **renderPass**:
 ``RenderPass`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/framebuffer.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/framebuffer.ts#L45)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLFramebuffer**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/framebuffer.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/framebuffer.ts#L71)&nbsp;


---

<!---->
## Methods

### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-framebuffer.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-framebuffer.ts#L81)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: FramebufferInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `FramebufferInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-framebuffer.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-framebuffer.ts#L42)&nbsp;
___
<!---->





## Class: WebGL2RenderPass


`extend:`
[RenderPass](docs/zh/gfx/Class/RenderPass.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ colorAttachments](#colorAttachments)
- [ depthStencilAttachment](#depthStencilAttachment)
- [ gfxType](#gfxType)
- [ gpuRenderPass](#gpuRenderPass)
- [ hash](#hash)
- [ subPasses](#subPasses)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
</div>

## Properties


### colorAttachments
<div style="margin-left: 10px;">




•  **colorAttachments**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/render-pass.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/render-pass.ts#L57)&nbsp;


___


### depthStencilAttachment
<div style="margin-left: 10px;">




•  **depthStencilAttachment**:
 ``null | DepthStencilAttachment`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/render-pass.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/render-pass.ts#L58)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### gpuRenderPass
<div style="margin-left: 10px;">




•  **gpuRenderPass**:
 ``IWebGL2GPURenderPass`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-render-pass.ts:31](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-render-pass.ts#L31)&nbsp;


___


### hash
<div style="margin-left: 10px;">




•  **hash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/render-pass.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/render-pass.ts#L60)&nbsp;


___


### subPasses
<div style="margin-left: 10px;">




•  **subPasses**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/render-pass.ts:59](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/render-pass.ts#L59)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGL2RenderPass**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/render-pass.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/render-pass.ts#L60)&nbsp;


---

<!---->
## Methods

### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-render-pass.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-render-pass.ts#L54)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: RenderPassInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `RenderPassInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-render-pass.ts:37](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-render-pass.ts#L37)&nbsp;
___
<!---->




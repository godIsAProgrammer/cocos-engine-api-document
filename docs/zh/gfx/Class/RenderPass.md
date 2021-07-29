
## Class: RenderPass


`extend:`
[Obj](docs/zh/gfx/Class/Obj.md)










**`zh`** GFX 渲染过程。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ colorAttachments](#colorAttachments)
- [ depthStencilAttachment](#depthStencilAttachment)
- [ gfxType](#gfxType)
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

• **new RenderPass**(`device: Device`)

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

##### Defined in &nbsp;   [cocos/core/gfx/base/render-pass.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/render-pass.ts#L109)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/gfx/base/render-pass.ts:107](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/render-pass.ts#L107)&nbsp;
___
<!---->




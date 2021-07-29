
## Class: WebGLCmdBindStates


`extend:`
[WebGLCmdObject](docs/en/cocos-core-gfx-webgl/Class/WebGLCmdObject.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ blendConstants](#blendConstants)
- [ cmdType](#cmdType)
- [ depthBias](#depthBias)
- [ depthBounds](#depthBounds)
- [ dynamicOffsets](#dynamicOffsets)
- [ gpuDescriptorSets](#gpuDescriptorSets)
- [ gpuInputAssembler](#gpuInputAssembler)
- [ gpuPipelineState](#gpuPipelineState)
- [ lineWidth](#lineWidth)
- [ refCount](#refCount)
- [ scissor](#scissor)
- [ stencilCompareMask](#stencilCompareMask)
- [ stencilWriteMask](#stencilWriteMask)
- [ viewport](#viewport)

### Constructors

- [ constructor](#constructor)

### Methods

- [ clear](#clear)
</div>

## Properties


### blendConstants
<div style="margin-left: 10px;">




•  **blendConstants**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:577](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L577)&nbsp;


___


### cmdType
<div style="margin-left: 10px;">




•  **cmdType**:
`WebGLCmd` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:524](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L524)&nbsp;


___


### depthBias
<div style="margin-left: 10px;">




•  **depthBias**:
`IWebGLDepthBias | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:575](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L575)&nbsp;


___


### depthBounds
<div style="margin-left: 10px;">




•  **depthBounds**:
`IWebGLDepthBounds | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:579](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L579)&nbsp;


___


### dynamicOffsets
<div style="margin-left: 10px;">




•  **dynamicOffsets**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:567](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L567)&nbsp;


___


### gpuDescriptorSets
<div style="margin-left: 10px;">




•  **gpuDescriptorSets**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:565](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L565)&nbsp;


___


### gpuInputAssembler
<div style="margin-left: 10px;">




•  **gpuInputAssembler**:
`IWebGLGPUInputAssembler | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:563](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L563)&nbsp;


___


### gpuPipelineState
<div style="margin-left: 10px;">




•  **gpuPipelineState**:
`IWebGLGPUPipelineState | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:561](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L561)&nbsp;


___


### lineWidth
<div style="margin-left: 10px;">




•  **lineWidth**:
`number | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:573](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L573)&nbsp;


___


### refCount
<div style="margin-left: 10px;">




•  **refCount**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:526](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L526)&nbsp;


___


### scissor
<div style="margin-left: 10px;">




•  **scissor**:
`Rect | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:571](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L571)&nbsp;


___


### stencilCompareMask
<div style="margin-left: 10px;">




•  **stencilCompareMask**:
`IWebGLStencilCompareMask | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L583)&nbsp;


___


### stencilWriteMask
<div style="margin-left: 10px;">




•  **stencilWriteMask**:
`IWebGLStencilWriteMask | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:581](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L581)&nbsp;


___


### viewport
<div style="margin-left: 10px;">




•  **viewport**:
`Viewport | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:569](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L569)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLCmdBindStates**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L583)&nbsp;


---

<!---->
## Methods

### clear
<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-commands.ts:589](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-commands.ts#L589)&nbsp;
___
<!---->




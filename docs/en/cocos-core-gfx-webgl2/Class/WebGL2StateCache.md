
## Class: WebGL2StateCache





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ bs](#bs)
- [ dss](#dss)
- [ glArrayBuffer](#glArrayBuffer)
- [ glBindUBOOffsets](#glBindUBOOffsets)
- [ glBindUBOs](#glBindUBOs)
- [ glCurrentAttribLocs](#glCurrentAttribLocs)
- [ glElementArrayBuffer](#glElementArrayBuffer)
- [ glEnabledAttribLocs](#glEnabledAttribLocs)
- [ glFramebuffer](#glFramebuffer)
- [ glProgram](#glProgram)
- [ glReadFramebuffer](#glReadFramebuffer)
- [ glRenderbuffer](#glRenderbuffer)
- [ glSamplerUnits](#glSamplerUnits)
- [ glTexUnits](#glTexUnits)
- [ glUniformBuffer](#glUniformBuffer)
- [ glVAO](#glVAO)
- [ rs](#rs)
- [ scissorRect](#scissorRect)
- [ texUnit](#texUnit)
- [ texUnitCacheMap](#texUnitCacheMap)
- [ viewport](#viewport)

### Methods

- [ initialize](#initialize)
</div>

## Properties


### bs
<div style="margin-left: 10px;">




•  **bs**:
`BlendState`  = `new BlendState()`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L50)&nbsp;


___


### dss
<div style="margin-left: 10px;">




•  **dss**:
`DepthStencilState`  = `new DepthStencilState()`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L49)&nbsp;


___


### glArrayBuffer
<div style="margin-left: 10px;">




•  **glArrayBuffer**:
`WebGLBuffer | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:34](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L34)&nbsp;


___


### glBindUBOOffsets
<div style="margin-left: 10px;">




•  **glBindUBOOffsets**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:38](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L38)&nbsp;


___


### glBindUBOs
<div style="margin-left: 10px;">




•  **glBindUBOs**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:37](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L37)&nbsp;


___


### glCurrentAttribLocs
<div style="margin-left: 10px;">




•  **glCurrentAttribLocs**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:53](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L53)&nbsp;


___


### glElementArrayBuffer
<div style="margin-left: 10px;">




•  **glElementArrayBuffer**:
`WebGLBuffer | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:35](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L35)&nbsp;


___


### glEnabledAttribLocs
<div style="margin-left: 10px;">




•  **glEnabledAttribLocs**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L52)&nbsp;


___


### glFramebuffer
<div style="margin-left: 10px;">




•  **glFramebuffer**:
`WebGLFramebuffer | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L44)&nbsp;


___


### glProgram
<div style="margin-left: 10px;">




•  **glProgram**:
`WebGLProgram | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L51)&nbsp;


___


### glReadFramebuffer
<div style="margin-left: 10px;">




•  **glReadFramebuffer**:
`WebGLFramebuffer | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L45)&nbsp;


___


### glRenderbuffer
<div style="margin-left: 10px;">




•  **glRenderbuffer**:
`WebGLRenderbuffer | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:43](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L43)&nbsp;


___


### glSamplerUnits
<div style="margin-left: 10px;">




•  **glSamplerUnits**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L42)&nbsp;


___


### glTexUnits
<div style="margin-left: 10px;">




•  **glTexUnits**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:41](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L41)&nbsp;


___


### glUniformBuffer
<div style="margin-left: 10px;">




•  **glUniformBuffer**:
`WebGLBuffer | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:36](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L36)&nbsp;


___


### glVAO
<div style="margin-left: 10px;">




•  **glVAO**:
`WebGLVertexArrayObject | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L39)&nbsp;


___


### rs
<div style="margin-left: 10px;">




•  **rs**:
`RasterizerState`  = `new RasterizerState()`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L48)&nbsp;


___


### scissorRect
<div style="margin-left: 10px;">




•  **scissorRect**:
`Rect`  = `new Rect(0, 0, 0, 0)`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L47)&nbsp;


___


### texUnit
<div style="margin-left: 10px;">




•  **texUnit**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:40](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L40)&nbsp;


___


### texUnitCacheMap
<div style="margin-left: 10px;">




•  **texUnitCacheMap**:
`Record` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L54)&nbsp;


___


### viewport
<div style="margin-left: 10px;">




•  **viewport**:
`Viewport`  = `new Viewport()`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L46)&nbsp;


___

<!---->
## Methods

### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`texUnit: number, bufferBindings: number, vertexAttributes: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `texUnit` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bufferBindings` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `vertexAttributes` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-state-cache.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-state-cache.ts#L56)&nbsp;
___
<!---->




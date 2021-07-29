
## Class: WebGLInputAssembler


`extend:`
[InputAssembler](docs/en/gfx/Class/InputAssembler.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ attributes](#attributes)
- [ attributesHash](#attributesHash)
- [ firstIndex](#firstIndex)
- [ firstInstance](#firstInstance)
- [ firstVertex](#firstVertex)
- [ gfxType](#gfxType)
- [ gpuInputAssembler](#gpuInputAssembler)
- [ indexBuffer](#indexBuffer)
- [ indexCount](#indexCount)
- [ indirectBuffer](#indirectBuffer)
- [ instanceCount](#instanceCount)
- [ vertexBuffers](#vertexBuffers)
- [ vertexCount](#vertexCount)
- [ vertexOffset](#vertexOffset)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ getVertexBuffer](#getVertexBuffer)
- [ initialize](#initialize)
</div>

## Properties


### attributes
<div style="margin-left: 10px;">



**`en`** Get current attributes.




•  **attributes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L61)&nbsp;


___


### attributesHash
<div style="margin-left: 10px;">



**`en`** Get hash of current attributes.




•  **attributesHash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L69)&nbsp;


___


### firstIndex
<div style="margin-left: 10px;">



**`en`** Get starting index.




•  **firstIndex**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L113)&nbsp;   [cocos/core/gfx/base/input-assembler.ts:117](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L117)&nbsp;


___


### firstInstance
<div style="margin-left: 10px;">



**`en`** Get starting instance.




•  **firstInstance**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:149](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L149)&nbsp;   [cocos/core/gfx/base/input-assembler.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L153)&nbsp;


___


### firstVertex
<div style="margin-left: 10px;">



**`en`** Get starting vertex.




•  **firstVertex**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L89)&nbsp;   [cocos/core/gfx/base/input-assembler.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L93)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### gpuInputAssembler
<div style="margin-left: 10px;">




•  **gpuInputAssembler**:
 ``IWebGLGPUInputAssembler`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-input-assembler.ts:34](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-input-assembler.ts#L34)&nbsp;


___


### indexBuffer
<div style="margin-left: 10px;">



**`en`** Get current index buffer.




•  **indexBuffer**:
 ``Buffer | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:53](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L53)&nbsp;


___


### indexCount
<div style="margin-left: 10px;">



**`en`** Get current index count.




•  **indexCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L101)&nbsp;   [cocos/core/gfx/base/input-assembler.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L105)&nbsp;


___


### indirectBuffer
<div style="margin-left: 10px;">



**`en`** Get the indirect buffer, if present.




•  **indirectBuffer**:
 ``Buffer | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L161)&nbsp;


___


### instanceCount
<div style="margin-left: 10px;">



**`en`** Get current instance count.




•  **instanceCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L137)&nbsp;   [cocos/core/gfx/base/input-assembler.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L141)&nbsp;


___


### vertexBuffers
<div style="margin-left: 10px;">



**`en`** Get current vertex buffers.




•  **vertexBuffers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L45)&nbsp;


___


### vertexCount
<div style="margin-left: 10px;">



**`en`** Get current vertex count.




•  **vertexCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L77)&nbsp;   [cocos/core/gfx/base/input-assembler.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L81)&nbsp;


___


### vertexOffset
<div style="margin-left: 10px;">



**`en`** Get current vertex offset.




•  **vertexOffset**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L125)&nbsp;   [cocos/core/gfx/base/input-assembler.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L129)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLInputAssembler**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L189)&nbsp;


---

<!---->
## Methods

### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-input-assembler.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-input-assembler.ts#L110)&nbsp;
___
### getVertexBuffer

<div style="margin-left: 10px;">

▸   **getVertexBuffer**(`stream: number`)



**`en`** Get the specified vertex buffer.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `stream` | `number` | The stream index of the vertex buffer.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/input-assembler.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/input-assembler.ts#L201)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: InputAssemblerInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `InputAssemblerInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-input-assembler.ts:40](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-input-assembler.ts#L40)&nbsp;
___
<!---->




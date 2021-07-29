
## Class: WebGL2Shader


`extend:`
[Shader](docs/en/gfx/Class/Shader.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ attributes](#attributes)
- [ blocks](#blocks)
- [ gfxType](#gfxType)
- [ gpuShader](#gpuShader)
- [ id](#id)
- [ name](#name)
- [ samplers](#samplers)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
</div>

## Properties


### attributes
<div style="margin-left: 10px;">




•  **attributes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L57)&nbsp;


___


### blocks
<div style="margin-left: 10px;">




•  **blocks**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L61)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### gpuShader
<div style="margin-left: 10px;">




•  **gpuShader**:
 ``IWebGL2GPUShader`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-shader.ts:33](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-shader.ts#L33)&nbsp;


___


### id
<div style="margin-left: 10px;">




**`en`** Get current shader id.




•  **id**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L45)&nbsp;


___


### name
<div style="margin-left: 10px;">




**`en`** Get current shader name.




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:53](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L53)&nbsp;


___


### samplers
<div style="margin-left: 10px;">




•  **samplers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L65)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGL2Shader**(`device: Device`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `device` | `Device` |





</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L81)&nbsp;


---

<!---->
## Methods

### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-shader.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-shader.ts#L73)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: ShaderInfo`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `ShaderInfo` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-shader.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-shader.ts#L39)&nbsp;
___
<!---->





## Class: WebGLSampler


`extend:`
[Sampler](docs/zh/gfx/Class/Sampler.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ addressU](#addressU)
- [ addressV](#addressV)
- [ addressW](#addressW)
- [ borderColor](#borderColor)
- [ cmpFunc](#cmpFunc)
- [ gfxType](#gfxType)
- [ gpuSampler](#gpuSampler)
- [ magFilter](#magFilter)
- [ maxAnisotropy](#maxAnisotropy)
- [ minFilter](#minFilter)
- [ mipFilter](#mipFilter)
- [ mipLODBias](#mipLODBias)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
</div>

## Properties


### addressU
<div style="margin-left: 10px;">




•  **addressU**:
 ``Address`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L42)&nbsp;


___


### addressV
<div style="margin-left: 10px;">




•  **addressV**:
 ``Address`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:43](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L43)&nbsp;


___


### addressW
<div style="margin-left: 10px;">




•  **addressW**:
 ``Address`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L44)&nbsp;


___


### borderColor
<div style="margin-left: 10px;">




•  **borderColor**:
 ``Color`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L47)&nbsp;


___


### cmpFunc
<div style="margin-left: 10px;">




•  **cmpFunc**:
 ``ComparisonFunc`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L46)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### gpuSampler
<div style="margin-left: 10px;">




•  **gpuSampler**:
 ``IWebGLGPUSampler`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-sampler.ts:38](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-sampler.ts#L38)&nbsp;


___


### magFilter
<div style="margin-left: 10px;">




•  **magFilter**:
 ``Filter`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:40](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L40)&nbsp;


___


### maxAnisotropy
<div style="margin-left: 10px;">




•  **maxAnisotropy**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L45)&nbsp;


___


### minFilter
<div style="margin-left: 10px;">




•  **minFilter**:
 ``Filter`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L39)&nbsp;


___


### mipFilter
<div style="margin-left: 10px;">




•  **mipFilter**:
 ``Filter`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:41](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L41)&nbsp;


___


### mipLODBias
<div style="margin-left: 10px;">




•  **mipLODBias**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L48)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLSampler**(`device: Device`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `device` | `Device` |





</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/sampler.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/sampler.ts#L61)&nbsp;


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

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-sampler.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-sampler.ts#L100)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: SamplerInfo`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `SamplerInfo` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-sampler.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-sampler.ts#L44)&nbsp;
___
<!---->




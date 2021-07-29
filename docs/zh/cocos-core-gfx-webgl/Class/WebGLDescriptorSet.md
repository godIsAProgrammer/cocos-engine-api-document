
## Class: WebGLDescriptorSet


`extend:`
[DescriptorSet](docs/zh/gfx/Class/DescriptorSet.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ gfxType](#gfxType)
- [ gpuDescriptorSet](#gpuDescriptorSet)
- [ layout](#layout)

### Constructors

- [ constructor](#constructor)

### Methods

- [ bindBuffer](#bindBuffer)
- [ bindSampler](#bindSampler)
- [ bindTexture](#bindTexture)
- [ destroy](#destroy)
- [ getBuffer](#getBuffer)
- [ getSampler](#getSampler)
- [ getTexture](#getTexture)
- [ initialize](#initialize)
- [ update](#update)
</div>

## Properties


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### gpuDescriptorSet
<div style="margin-left: 10px;">




•  **gpuDescriptorSet**:
 ``IWebGLGPUDescriptorSet`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-descriptor-set.ts:35](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-descriptor-set.ts#L35)&nbsp;


___


### layout
<div style="margin-left: 10px;">




•  **layout**:
 ``DescriptorSetLayout`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set.ts:43](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set.ts#L43)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLDescriptorSet**(`device: Device`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `device` | `Device` |





</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set.ts#L54)&nbsp;


---

<!---->
## Methods

### bindBuffer
<div style="margin-left: 10px;">

▸   **bindBuffer**<`void`\>(`binding: number, buffer: Buffer, index: number`) : `void`




**`zh`** 在指定的描述符位置上绑定缓冲。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The target binding.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffer` | `Buffer` | The buffer to be bound.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set.ts#L73)&nbsp;
___
### bindSampler
<div style="margin-left: 10px;">

▸   **bindSampler**<`void`\>(`binding: number, sampler: Sampler, index: number`) : `void`




**`zh`** 在指定的描述符位置上绑定采样器。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The target binding.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `sampler` | `Sampler` | The sampler to be bound.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set.ts#L93)&nbsp;
___
### bindTexture
<div style="margin-left: 10px;">

▸   **bindTexture**<`void`\>(`binding: number, texture: Texture, index: number`) : `void`




**`zh`** 在指定的描述符位置上绑定纹理。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The target binding.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `texture` | `Texture` | The texture to be bound.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set.ts#L113)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-descriptor-set.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-descriptor-set.ts#L67)&nbsp;
___
### getBuffer
<div style="margin-left: 10px;">

▸   **getBuffer**<`Buffer`\>(`binding: number, index: number`) : `Buffer`




**`zh`** 获取当前指定绑定位置上的缓冲。




<!---->
<!--    #### Returns `Buffer` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The target binding.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `Buffer`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set.ts#L132)&nbsp;
___
### getSampler
<div style="margin-left: 10px;">

▸   **getSampler**<`Sampler`\>(`binding: number, index: number`) : `Sampler`




**`zh`** 获取当前指定绑定位置上的采样器。




<!---->
<!--    #### Returns `Sampler` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The target binding.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `Sampler`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set.ts#L142)&nbsp;
___
### getTexture
<div style="margin-left: 10px;">

▸   **getTexture**<`Texture`\>(`binding: number, index: number`) : `Texture`




**`zh`** 获取当前指定绑定位置上的贴图。




<!---->
<!--    #### Returns `Texture` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The target binding.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `Texture`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set.ts#L152)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: DescriptorSetInfo`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DescriptorSetInfo` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-descriptor-set.ts:41](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-descriptor-set.ts#L41)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-descriptor-set.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-descriptor-set.ts#L72)&nbsp;
___
<!---->





## Class: WebGLDescriptorSetLayout


`extend:`
[DescriptorSetLayout](docs/en/gfx/Class/DescriptorSetLayout.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ bindingIndices](#bindingIndices)
- [ bindings](#bindings)
- [ descriptorIndices](#descriptorIndices)
- [ gfxType](#gfxType)
- [ gpuDescriptorSetLayout](#gpuDescriptorSetLayout)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
</div>

## Properties


### bindingIndices
<div style="margin-left: 10px;">




•  **bindingIndices**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set-layout.ts:43](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set-layout.ts#L43)&nbsp;


___


### bindings
<div style="margin-left: 10px;">




•  **bindings**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set-layout.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set-layout.ts#L39)&nbsp;


___


### descriptorIndices
<div style="margin-left: 10px;">




•  **descriptorIndices**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set-layout.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set-layout.ts#L47)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### gpuDescriptorSetLayout
<div style="margin-left: 10px;">




•  **gpuDescriptorSetLayout**:
 ``IWebGLGPUDescriptorSetLayout`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-descriptor-set-layout.ts:31](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-descriptor-set-layout.ts#L31)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLDescriptorSetLayout**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/descriptor-set-layout.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/descriptor-set-layout.ts#L57)&nbsp;


---

<!---->
## Methods

### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-descriptor-set-layout.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-descriptor-set-layout.ts#L75)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: DescriptorSetLayoutInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `DescriptorSetLayoutInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-descriptor-set-layout.ts:35](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-descriptor-set-layout.ts#L35)&nbsp;
___
<!---->




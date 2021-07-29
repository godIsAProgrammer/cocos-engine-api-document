
## Class: Pass






**`en`** Render pass, store actual resources for the rendering process


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  PropertyType](#PropertyType)
- [ **`static`**  getBindingFromHandle](#getBindingFromHandle)
- [ **`static`**  getPropertyTypeFromHandle](#getPropertyTypeFromHandle)
- [ **`static`**  getTypeFromHandle](#getTypeFromHandle)
- [ batchingScheme](#batchingScheme)
- [ blendState](#blendState)
- [ blocks](#blocks)
- [ defines](#defines)
- [ depthStencilState](#depthStencilState)
- [ descriptorSet](#descriptorSet)
- [ device](#device)
- [ dynamicStates](#dynamicStates)
- [ dynamics](#dynamics)
- [ handle](#handle)
- [ hash](#hash)
- [ localSetLayout](#localSetLayout)
- [ passIndex](#passIndex)
- [ phase](#phase)
- [ primitive](#primitive)
- [ priority](#priority)
- [ program](#program)
- [ properties](#properties)
- [ propertyIndex](#propertyIndex)
- [ rasterizerState](#rasterizerState)
- [ root](#root)
- [ rootBufferDirty](#rootBufferDirty)
- [ shaderInfo](#shaderInfo)
- [ stage](#stage)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  getPassHash](#getPassHash)
- [ **`static`**  fillPipelineInfo](#fillPipelineInfo)
- [ bindSampler](#bindSampler)
- [ bindTexture](#bindTexture)
- [ destroy](#destroy)
- [ getBinding](#getBinding)
- [ getHandle](#getHandle)
- [ getShaderVariant](#getShaderVariant)
- [ getUniform](#getUniform)
- [ initialize](#initialize)
- [ overridePipelineStates](#overridePipelineStates)
- [ resetTexture](#resetTexture)
- [ resetTextures](#resetTextures)
- [ resetUBOs](#resetUBOs)
- [ resetUniform](#resetUniform)
- [ setDynamicState](#setDynamicState)
- [ setUniform](#setUniform)
- [ setUniformArray](#setUniformArray)
- [ tryCompile](#tryCompile)
- [ update](#update)
</div>

## Properties


### PropertyType
<div style="margin-left: 10px;">



**`en`** The binding type enums of the property




• `static` **PropertyType**:
  = `PropertyType`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:107](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L107)&nbsp;   [cocos/core/renderer/core/pass.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L95)&nbsp;


___


### getBindingFromHandle
<div style="margin-left: 10px;">



**`en`** Gets the binding with handle




• `static` **getBindingFromHandle**:
  = `getBindingFromHandle`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L125)&nbsp;   [cocos/core/renderer/core/pass.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L91)&nbsp;


___


### getPropertyTypeFromHandle
<div style="margin-left: 10px;">



**`en`** Gets the binding type of the property with handle




• `static` **getPropertyTypeFromHandle**:
  = `getPropertyTypeFromHandle`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L113)&nbsp;   [cocos/core/renderer/core/pass.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L89)&nbsp;


___


### getTypeFromHandle
<div style="margin-left: 10px;">



**`en`** Gets the type of member in uniform buffer object with the handle




• `static` **getTypeFromHandle**:
  = `getTypeFromHandle`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L119)&nbsp;   [cocos/core/renderer/core/pass.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L90)&nbsp;


___


### batchingScheme
<div style="margin-left: 10px;">




•  **batchingScheme**:
 ``BatchingSchemes`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:700](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L700)&nbsp;


___


### blendState
<div style="margin-left: 10px;">




•  **blendState**:
 ``BlendState`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:698](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L698)&nbsp;


___


### blocks
<div style="margin-left: 10px;">




•  **blocks**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:689](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L689)&nbsp;


___


### defines
<div style="margin-left: 10px;">




•  **defines**:
 ``Record`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:684](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L684)&nbsp;


___


### depthStencilState
<div style="margin-left: 10px;">




•  **depthStencilState**:
 ``DepthStencilState`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:697](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L697)&nbsp;


___


### descriptorSet
<div style="margin-left: 10px;">




•  **descriptorSet**:
 ``DescriptorSet`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:701](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L701)&nbsp;


___


### device
<div style="margin-left: 10px;">




•  **device**:
 ``Device`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:679](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L679)&nbsp;


___


### dynamicStates
<div style="margin-left: 10px;">




•  **dynamicStates**:
 ``DynamicStateFlags`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:699](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L699)&nbsp;


___


### dynamics
<div style="margin-left: 10px;">




•  **dynamics**:
 ``IPassDynamics`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:688](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L688)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``PassHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:691](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L691)&nbsp;


___


### hash
<div style="margin-left: 10px;">




•  **hash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:702](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L702)&nbsp;


___


### localSetLayout
<div style="margin-left: 10px;">




•  **localSetLayout**:
 ``DescriptorSetLayout`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:681](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L681)&nbsp;


___


### passIndex
<div style="margin-left: 10px;">




•  **passIndex**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:685](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L685)&nbsp;


___


### phase
<div style="margin-left: 10px;">




•  **phase**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:695](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L695)&nbsp;


___


### primitive
<div style="margin-left: 10px;">




•  **primitive**:
 ``PrimitiveMode`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:693](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L693)&nbsp;


___


### priority
<div style="margin-left: 10px;">




•  **priority**:
 ``RenderPriority`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:692](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L692)&nbsp;


___


### program
<div style="margin-left: 10px;">




•  **program**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:682](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L682)&nbsp;


___


### properties
<div style="margin-left: 10px;">




•  **properties**:
 ``Record`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:683](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L683)&nbsp;


___


### propertyIndex
<div style="margin-left: 10px;">




•  **propertyIndex**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:686](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L686)&nbsp;


___


### rasterizerState
<div style="margin-left: 10px;">




•  **rasterizerState**:
 ``RasterizerState`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:696](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L696)&nbsp;


___


### root
<div style="margin-left: 10px;">




•  **root**:
 ``Root`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:678](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L678)&nbsp;


___


### rootBufferDirty
<div style="margin-left: 10px;">




•  **rootBufferDirty**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:703](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L703)&nbsp;


___


### shaderInfo
<div style="margin-left: 10px;">




•  **shaderInfo**:
 ``IProgramInfo`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:680](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L680)&nbsp;


___


### stage
<div style="margin-left: 10px;">




•  **stage**:
 ``RenderPassStage`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:694](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L694)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Pass**(`root: Root`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `Root` |
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:220](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L220)&nbsp;


---

<!---->
## Methods

### getPassHash

<div style="margin-left: 10px;">

▸ `static`  **getPassHash**<`number`\>(`pass: Pass, hShader: ShaderHandle`) : `number`



**`en`** Get pass hash value by [[Pass]] hash information.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pass` | `Pass` | - |
| `hShader` | `ShaderHandle` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L166)&nbsp;   [cocos/core/renderer/core/pass.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L93)&nbsp;
___
### fillPipelineInfo

<div style="margin-left: 10px;">

▸ `static`  **fillPipelineInfo**<`void`\>(`pass: Pass, info: PassOverrides`) : `void`



**`en`** Fill a pass represented by the given pass handle with the given override info



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pass` | `Pass` | - |
| `info` | `PassOverrides` | The pass override info  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L134)&nbsp;   [cocos/core/renderer/core/pass.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L92)&nbsp;
___
### bindSampler

<div style="margin-left: 10px;">

▸   **bindSampler**<`void`\>(`binding: number, value: Sampler, index: undefined | number`) : `void`



**`en`** Bind a GFX [[Sampler]] the the given uniform binding



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The binding for target uniform of sampler type  |
| `value` | `Sampler` | Target sampler  |
| `index` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:341](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L341)&nbsp;
___
### bindTexture

<div style="margin-left: 10px;">

▸   **bindTexture**<`void`\>(`binding: number, value: Texture, index: undefined | number`) : `void`



**`en`** Bind a GFX [[Texture]] the the given uniform binding



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The binding for target uniform of texture type  |
| `value` | `Texture` | Target texture  |
| `index` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:331](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L331)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`



**`en`** Destroy the current pass.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:383](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L383)&nbsp;
___
### getBinding

<div style="margin-left: 10px;">

▸   **getBinding**<`number`\>(`name: string`) : `number`



**`en`** Gets the uniform binding with its name



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The name of target uniform  |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:271](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L271)&nbsp;
___
### getHandle

<div style="margin-left: 10px;">

▸   **getHandle**<`number`\>(`name: string, offset: number, targetType: Type`) : `number`



**`en`** Get the handle of a UBO member, or specific channels of it.



**`example`**

```ts


import { Vec3, gfx } from 'cc';
// say 'pbrParams' is a uniform vec4
const hParams = pass.getHandle('pbrParams'); // get the default handle
pass.setUniform(hAlbedo, new Vec3(1, 0, 0)); // wrong! pbrParams.w is NaN now

// say 'albedoScale' is a uniform vec4, and we only want to modify the w component in the form of a single float
const hThreshold = pass.getHandle('albedoScale', 3, gfx.Type.FLOAT);
pass.setUniform(hThreshold, 0.5); // now, albedoScale.w = 0.5


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Name of the target UBO member.  |
| `offset` | `number` | Channel offset into the member.  |
| `targetType` | `Type` | Target type of the handle, i.e. the type of data when read/write to it.  |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:256](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L256)&nbsp;
___
### getShaderVariant

<div style="margin-left: 10px;">

▸   **getShaderVariant**<`ShaderHandle`\>(`patches: array<IMacroPatch> | null`) : `ShaderHandle`



**`en`** Gets the shader variant of the current pass and given macro patches



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `patches` | `array<IMacroPatch> \| null` | The macro patches  |


##### Returns `ShaderHandle`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:501](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L501)&nbsp;
___
### getUniform

<div style="margin-left: 10px;">

▸   **getUniform**<`T`\>(`handle: number, out: T`) : `T`



**`en`** Gets a uniform's value.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `handle` | `number` | The handle for the target uniform  |
| `out` | `T` | The output property to store the result  |


##### Returns `T`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L298)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`info: IPassInfoFull`) : `void`



**`en`** Initialize the pass with given pass info, shader will be compiled in the init process



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IPassInfoFull` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L231)&nbsp;
___
### overridePipelineStates

<div style="margin-left: 10px;">

▸   **overridePipelineStates**<`void`\>(`original: IPassInfo, overrides: PassOverrides`) : `void`



**`en`** Override all pipeline states with the given pass override info.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `original` | `IPassInfo` | The original pass info  |
| `overrides` | `PassOverrides` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:363](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L363)&nbsp;
___
### resetTexture

<div style="margin-left: 10px;">

▸   **resetTexture**<`void`\>(`name: string, index: undefined | number`) : `void`



**`en`** Resets the value of the given texture by name to the default value in [[EffectAsset]].



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |
| `index` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L430)&nbsp;
___
### resetTextures

<div style="margin-left: 10px;">

▸   **resetTextures**<`void`\> : `void`



**`en`** Resets all textures and samplers to the default values in [[EffectAsset]]




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:472](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L472)&nbsp;
___
### resetUBOs

<div style="margin-left: 10px;">

▸   **resetUBOs**<`void`\> : `void`



**`en`** Resets all uniform buffer objects to the default values in [[EffectAsset]]




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:450](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L450)&nbsp;
___
### resetUniform

<div style="margin-left: 10px;">

▸   **resetUniform**<`void`\>(`name: string`) : `void`



**`en`** Resets the value of the given uniform by name to the default value in [[EffectAsset]].
This method does not support array type uniform.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L413)&nbsp;
___
### setDynamicState

<div style="margin-left: 10px;">

▸   **setDynamicState**<`void`\>(`state: DynamicStateFlagBit, value: number`) : `void`



**`en`** Sets the dynamic pipeline state property at runtime



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `state` | `DynamicStateFlagBit` | Target dynamic state  |
| `value` | `number` | Target value  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L351)&nbsp;
___
### setUniform

<div style="margin-left: 10px;">

▸   **setUniform**<`void`\>(`handle: number, value: MaterialProperty`) : `void`



**`en`** Sets a vector type uniform value, if a uniform requires frequent update, please use this method.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `handle` | `number` | The handle for the target uniform  |
| `value` | `MaterialProperty` | New value  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L283)&nbsp;
___
### setUniformArray

<div style="margin-left: 10px;">

▸   **setUniformArray**<`void`\>(`handle: number, value: undefined`) : `void`



**`en`** Sets an array type uniform value, if a uniform requires frequent update, please use this method.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `handle` | `number` | The handle for the target uniform  |
| `value` |  | New value  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:312](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L312)&nbsp;
___
### tryCompile

<div style="margin-left: 10px;">

▸   **tryCompile**<`boolean`\> : `boolean`



**`en`** Try to compile the shader and retrieve related resources references.




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L485)&nbsp;
___
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\> : `void`



**`en`** Update the current uniforms data.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:371](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L371)&nbsp;
___
<!---->




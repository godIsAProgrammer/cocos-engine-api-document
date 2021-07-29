
## Class: PassInstance


`extend:`
[Pass](docs/zh/material/Class/Pass.md)












**`zh`** 表示 [[Pass]] 的一种特殊实例



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

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
- [ parent](#parent)
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

- [ beginChangeStatesSilently](#beginChangeStatesSilently)
- [ bindSampler](#bindSampler)
- [ bindTexture](#bindTexture)
- [ destroy](#destroy)
- [ endChangeStatesSilently](#endChangeStatesSilently)
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


### parent
<div style="margin-left: 10px;">




**`zh`** 相关联的原始 Pass





•  **parent**:
 ``Pass`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass-instance.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass-instance.ts#L46)&nbsp;


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

• **new PassInstance**(`parent: Pass, owner: MaterialInstance`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `parent` | `Pass` |





| Name | Type |
| :------ | :------ |
| `owner` | `MaterialInstance` |





</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass-instance.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass-instance.ts#L52)&nbsp;


---

<!---->
## Methods

### beginChangeStatesSilently
<div style="margin-left: 10px;">

▸   **beginChangeStatesSilently**<`void`\> : `void`




**`zh`** 开始静默修改 Pass 相关状态，不会通知材质去重新构建管线状态对象。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass-instance.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass-instance.ts#L111)&nbsp;
___
### bindSampler
<div style="margin-left: 10px;">

▸   **bindSampler**<`void`\>(`binding: number, value: Sampler, index: undefined | number`) : `void`




**`zh`** 绑定实际 GFX [[Sampler]] 到指定 binding。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The binding for target uniform of sampler type  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `Sampler` | Target sampler  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:341](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L341)&nbsp;
___
### bindTexture
<div style="margin-left: 10px;">

▸   **bindTexture**<`void`\>(`binding: number, value: Texture, index: undefined | number`) : `void`




**`zh`** 绑定实际 GFX [[Texture]] 到指定 binding。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `binding` | `number` | The binding for target uniform of texture type  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `Texture` | Target texture  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:331](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L331)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




**`zh`** 销毁当前 pass。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:383](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L383)&nbsp;
___
### endChangeStatesSilently
<div style="margin-left: 10px;">

▸   **endChangeStatesSilently**<`void`\> : `void`




**`zh`** 结束静默状态修改，所有修改将会开始通知材质。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass-instance.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass-instance.ts#L119)&nbsp;
___
### getBinding
<div style="margin-left: 10px;">

▸   **getBinding**<`number`\>(`name: string`) : `number`




**`zh`** 获取指定 uniform 的 binding。




<!---->
<!--    #### Returns `number` -->
<!---->

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




**`zh`** 获取指定 UBO 成员，或其更具体分量的读写句柄。默认以成员自身的类型为目标读写类型（即读写时必须传入与成员类型相同的变量）。




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




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Name of the target UBO member.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `offset` | `number` | Channel offset into the member.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `targetType` | `Type` | Target type of the handle, i.e. the type of data when read/write to it.  |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:256](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L256)&nbsp;
___
### getShaderVariant
<div style="margin-left: 10px;">

▸   **getShaderVariant**<`ShaderHandle`\>(`patches: array<IMacroPatch> | null`) : `ShaderHandle`




**`zh`** 结合指定的编译宏组合获取当前 Pass 的 Shader Variant




<!---->
<!--    #### Returns `ShaderHandle` -->
<!---->

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




**`zh`** 获取指定普通向量类 uniform 的值。




<!---->
<!--    #### Returns `T` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `handle` | `number` | The handle for the target uniform  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `T` | The output property to store the result  |



##### Returns `T`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L298)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`info: IPassInfoFull`) : `void`




**`zh`** 根据指定参数初始化当前 pass，shader 会在这一阶段就尝试编译。





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 重载当前 Pass 的管线状态。这不会影响原始 Pass




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `original` | `IPassInfo` | The original pass info  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `overrides` | `PassOverrides` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass-instance.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass-instance.ts#L86)&nbsp;
___
### resetTexture
<div style="margin-left: 10px;">

▸   **resetTexture**<`void`\>(`name: string, index: undefined | number`) : `void`




**`zh`** 重置指定贴图为 [[EffectAsset]] 默认值。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L430)&nbsp;
___
### resetTextures
<div style="margin-left: 10px;">

▸   **resetTextures**<`void`\> : `void`




**`zh`** 重置所有 texture 和 sampler 为初始默认值。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:472](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L472)&nbsp;
___
### resetUBOs
<div style="margin-left: 10px;">

▸   **resetUBOs**<`void`\> : `void`




**`zh`** 重置所有 UBO 为默认值。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:450](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L450)&nbsp;
___
### resetUniform
<div style="margin-left: 10px;">

▸   **resetUniform**<`void`\>(`name: string`) : `void`




**`zh`** 重置指定（非数组） Uniform 为 [[EffectAsset]] 默认值。





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 设置运行时 pass 内可动态更新的管线状态属性。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `state` | `DynamicStateFlagBit` | Target dynamic state  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `number` | Target value  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L351)&nbsp;
___
### setUniform
<div style="margin-left: 10px;">

▸   **setUniform**<`void`\>(`handle: number, value: MaterialProperty`) : `void`




**`zh`** 设置指定普通向量类 uniform 的值，如果需要频繁更新请尽量使用此接口。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `handle` | `number` | The handle for the target uniform  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `MaterialProperty` | New value  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L283)&nbsp;
___
### setUniformArray
<div style="margin-left: 10px;">

▸   **setUniformArray**<`void`\>(`handle: number, value: undefined`) : `void`




**`zh`** 设置指定数组类 uniform 的值，如果需要频繁更新请尽量使用此接口。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `handle` | `number` | The handle for the target uniform  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` |  | New value  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:312](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L312)&nbsp;
___
### tryCompile
<div style="margin-left: 10px;">

▸   **tryCompile**<`boolean`\>(`defineOverrides: MacroRecord`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `defineOverrides` | `MacroRecord` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass-instance.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass-instance.ts#L96)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\> : `void`




**`zh`** 更新当前 Uniform 数据。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/pass.ts:371](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/pass.ts#L371)&nbsp;
___
<!---->




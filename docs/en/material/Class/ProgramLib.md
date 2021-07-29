
## Class: ProgramLib






**`en`** The global maintainer of all shader resources.


<div class="table-of-content">
<h2>Table of contents</h2>


### Methods

- [ define](#define)
- [ destroyShaderByDefines](#destroyShaderByDefines)
- [ getDescriptorSetLayout](#getDescriptorSetLayout)
- [ getGFXShader](#getGFXShader)
- [ getKey](#getKey)
- [ getTemplate](#getTemplate)
- [ getTemplateInfo](#getTemplateInfo)
- [ hasProgram](#hasProgram)
- [ register](#register)
</div>

## Methods

### define

<div style="margin-left: 10px;">

▸   **define**<`IProgramInfo`\>(`shader: IShaderInfo`) : `IProgramInfo`



**`en`** Register the shader template with the given info



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `shader` | `IShaderInfo` | - |


##### Returns `IProgramInfo`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L208)&nbsp;
___
### destroyShaderByDefines

<div style="margin-left: 10px;">

▸   **destroyShaderByDefines**<`void`\>(`defines: MacroRecord`) : `void`



**`en`** Destroy all shader instance match the preprocess macros



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `defines` | `MacroRecord` | The preprocess macros as filter  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:369](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L369)&nbsp;
___
### getDescriptorSetLayout

<div style="margin-left: 10px;">

▸   **getDescriptorSetLayout**<`DescriptorSetLayout`\>(`device: Device, name: string, isLocal: boolean`) : `DescriptorSetLayout`



**`en`** Gets the pipeline layout of the shader template given its name



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `device` | `Device` | - |
| `name` | `string` | Target shader name  |
| `isLocal` | `boolean` | - |


##### Returns `DescriptorSetLayout`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L304)&nbsp;
___
### getGFXShader

<div style="margin-left: 10px;">

▸   **getGFXShader**<`IHandle`\>(`device: Device, name: string, defines: MacroRecord, pipeline: RenderPipeline, key: undefined | string`) : `IHandle`



**`en`** Gets the shader resource instance with given information



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `device` | `Device` | - |
| `name` | `string` | Shader name  |
| `defines` | `MacroRecord` | Preprocess macros  |
| `pipeline` | `RenderPipeline` | The [[RenderPipeline]] which owns the render command  |
| `key` | `undefined \| string` | The shader cache key, if already known  |


##### Returns `IHandle`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L394)&nbsp;
___
### getKey

<div style="margin-left: 10px;">

▸   **getKey**<`string`\>(`name: string, defines: MacroRecord`) : `string`



**`en`** Gets the shader key with the name and a macro combination



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Target shader name  |
| `defines` | `MacroRecord` | The combination of preprocess macros  |


##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L333)&nbsp;
___
### getTemplate

<div style="margin-left: 10px;">

▸   **getTemplate**<`IProgramInfo`\>(`name: string`) : `IProgramInfo`



**`en`** Gets the shader template with its name



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Target shader name  |


##### Returns `IProgramInfo`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L285)&nbsp;
___
### getTemplateInfo

<div style="margin-left: 10px;">

▸   **getTemplateInfo**<`ITemplateInfo`\>(`name: string`) : `ITemplateInfo`



**`en`** Gets the shader template info with its name



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Target shader name  |


##### Returns `ITemplateInfo`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L294)&nbsp;
___
### hasProgram

<div style="margin-left: 10px;">

▸   **hasProgram**<`boolean`\>(`name: string`) : `boolean`



**`en`** 
Does this library has the specified program



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Target shader name  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:323](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L323)&nbsp;
___
### register

<div style="margin-left: 10px;">

▸   **register**<`void`\>(`effect: EffectAsset`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `effect` | `EffectAsset` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L197)&nbsp;
___
<!---->




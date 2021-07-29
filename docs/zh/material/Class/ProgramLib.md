
## Class: ProgramLib







**`zh`** 维护 shader 资源实例的全局管理器。



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




**`zh`** 注册 shader 模板。





<!---->
<!--    #### Returns `IProgramInfo` -->
<!---->

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




**`zh`** 销毁所有完全满足指定预处理宏特征的 shader 实例。




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 通过名字获取 Shader 模板相关联的管线布局




<!---->
<!--    #### Returns `DescriptorSetLayout` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `device` | `Device` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Target shader name  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `isLocal` | `boolean` | - |



##### Returns `DescriptorSetLayout`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L304)&nbsp;
___
### getGFXShader
<div style="margin-left: 10px;">

▸   **getGFXShader**<`IHandle`\>(`device: Device, name: string, defines: MacroRecord, pipeline: RenderPipeline, key: undefined | string`) : `IHandle`




**`zh`** 获取指定 shader 的渲染资源实例




<!---->
<!--    #### Returns `IHandle` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `device` | `Device` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Shader name  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `defines` | `MacroRecord` | Preprocess macros  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `pipeline` | `RenderPipeline` | The [[RenderPipeline]] which owns the render command  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `key` | `undefined \| string` | The shader cache key, if already known  |



##### Returns `IHandle`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L394)&nbsp;
___
### getKey
<div style="margin-left: 10px;">

▸   **getKey**<`string`\>(`name: string, defines: MacroRecord`) : `string`




**`zh`** 根据 shader 名和预处理宏列表获取 shader key。




<!---->
<!--    #### Returns `string` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Target shader name  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `defines` | `MacroRecord` | The combination of preprocess macros  |



##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L333)&nbsp;
___
### getTemplate
<div style="margin-left: 10px;">

▸   **getTemplate**<`IProgramInfo`\>(`name: string`) : `IProgramInfo`




**`zh`** 通过名字获取 Shader 模板




<!---->
<!--    #### Returns `IProgramInfo` -->
<!---->

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




**`zh`** 通过名字获取 Shader 模版信息




<!---->
<!--    #### Returns `ITemplateInfo` -->
<!---->

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




**`zh`** 
当前是否有已注册的指定名字的 shader




<!---->
<!--    #### Returns `boolean` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `effect` | `EffectAsset` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/core/program-lib.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/core/program-lib.ts#L197)&nbsp;
___
<!---->




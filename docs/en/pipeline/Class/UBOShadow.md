
## Class: UBOShadow






**`en`** The uniform buffer object for shadow


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  BINDING](#BINDING)
- [ **`static`**  COUNT](#COUNT)
- [ **`static`**  DESCRIPTOR](#DESCRIPTOR)
- [ **`static`**  LAYOUT](#LAYOUT)
- [ **`static`**  NAME](#NAME)
- [ **`static`**  SIZE](#SIZE)
</div>

## Properties


### BINDING
<div style="margin-left: 10px;">




• `static` **BINDING**:
`UBO_SHADOW`  = `PipelineGlobalBindings.UBO_SHADOW`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:253](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L253)&nbsp;


___


### COUNT
<div style="margin-left: 10px;">




• `static` **COUNT**:
`number`  = `UBOShadow.SHADOW_COLOR_OFFSET + 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L250)&nbsp;


___


### DESCRIPTOR
<div style="margin-left: 10px;">




• `static` **DESCRIPTOR**:
`DescriptorSetLayoutBinding`  = `new DescriptorSetLayoutBinding(UBOShadow.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L254)&nbsp;


___


### LAYOUT
<div style="margin-left: 10px;">




• `static` **LAYOUT**:
`UniformBlock`  = `new UniformBlock(SetIndex.GLOBAL, UBOShadow.BINDING, UBOShadow.NAME, [
        new Uniform('cc_matLightPlaneProj', Type.MAT4, 1),
        new Uniform('cc_matLightView', Type.MAT4, 1),
        new Uniform('cc_matLightViewProj', Type.MAT4, 1),
        new Uniform('cc_shadowNFLSInfo', Type.FLOAT4, 1),
        new Uniform('cc_shadowWHPBInfo', Type.FLOAT4, 1),
        new Uniform('cc_shadowLPNNInfo', Type.FLOAT4, 1),
        new Uniform('cc_shadowColor', Type.FLOAT4, 1),
    ], 1)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L255)&nbsp;


___


### NAME
<div style="margin-left: 10px;">




• `static` **NAME**:
  = `"CCShadow"`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:252](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L252)&nbsp;


___


### SIZE
<div style="margin-left: 10px;">




• `static` **SIZE**:
`number`  = `UBOShadow.COUNT * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:251](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L251)&nbsp;


___

<!---->




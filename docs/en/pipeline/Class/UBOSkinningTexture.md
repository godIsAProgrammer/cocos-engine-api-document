
## Class: UBOSkinningTexture







**`en`** The uniform buffer object for skinning texture


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
`UBO_SKINNING_TEXTURE`  = `ModelLocalBindings.UBO_SKINNING_TEXTURE`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L418)&nbsp;


___


### COUNT
<div style="margin-left: 10px;">




• `static` **COUNT**:
`number`  = `UBOSkinningTexture.JOINTS_TEXTURE_INFO_OFFSET + 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:414](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L414)&nbsp;


___


### DESCRIPTOR
<div style="margin-left: 10px;">




• `static` **DESCRIPTOR**:
`DescriptorSetLayoutBinding`  = `new DescriptorSetLayoutBinding(UBOSkinningTexture.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L419)&nbsp;


___


### LAYOUT
<div style="margin-left: 10px;">




• `static` **LAYOUT**:
`UniformBlock`  = `new UniformBlock(SetIndex.LOCAL, UBOSkinningTexture.BINDING, UBOSkinningTexture.NAME, [
        new Uniform('cc_jointTextureInfo', Type.FLOAT4, 1),
    ], 1)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:420](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L420)&nbsp;


___


### NAME
<div style="margin-left: 10px;">




• `static` **NAME**:
  = `"CCSkinningTexture"`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:417](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L417)&nbsp;


___


### SIZE
<div style="margin-left: 10px;">




• `static` **SIZE**:
`number`  = `UBOSkinningTexture.COUNT * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:415](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L415)&nbsp;


___

<!---->




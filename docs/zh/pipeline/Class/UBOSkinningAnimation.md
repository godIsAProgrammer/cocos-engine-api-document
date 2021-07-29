
## Class: UBOSkinningAnimation





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
`UBO_SKINNING_ANIMATION`  = `ModelLocalBindings.UBO_SKINNING_ANIMATION`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:433](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L433)&nbsp;


___


### COUNT
<div style="margin-left: 10px;">




• `static` **COUNT**:
`number`  = `UBOSkinningAnimation.JOINTS_ANIM_INFO_OFFSET + 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:429](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L429)&nbsp;


___


### DESCRIPTOR
<div style="margin-left: 10px;">




• `static` **DESCRIPTOR**:
`DescriptorSetLayoutBinding`  = `new DescriptorSetLayoutBinding(UBOSkinningAnimation.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L434)&nbsp;


___


### LAYOUT
<div style="margin-left: 10px;">




• `static` **LAYOUT**:
`UniformBlock`  = `new UniformBlock(SetIndex.LOCAL, UBOSkinningAnimation.BINDING, UBOSkinningAnimation.NAME, [
        new Uniform('cc_jointAnimInfo', Type.FLOAT4, 1),
    ], 1)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:435](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L435)&nbsp;


___


### NAME
<div style="margin-left: 10px;">




• `static` **NAME**:
  = `"CCSkinningAnimation"`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:432](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L432)&nbsp;


___


### SIZE
<div style="margin-left: 10px;">




• `static` **SIZE**:
`number`  = `UBOSkinningAnimation.COUNT * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L430)&nbsp;


___

<!---->




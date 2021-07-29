
## Class: UBOSkinning





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

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:449](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L449)&nbsp;


___


### COUNT
<div style="margin-left: 10px;">




• `static` **COUNT**:
`number`  = `UBOSkinning.JOINTS_OFFSET + JOINT_UNIFORM_CAPACITY * 12`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:445](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L445)&nbsp;


___


### DESCRIPTOR
<div style="margin-left: 10px;">




• `static` **DESCRIPTOR**:
`DescriptorSetLayoutBinding`  = `new DescriptorSetLayoutBinding(UBOSkinning.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:450](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L450)&nbsp;


___


### LAYOUT
<div style="margin-left: 10px;">




• `static` **LAYOUT**:
`UniformBlock`  = `new UniformBlock(SetIndex.LOCAL, UBOSkinning.BINDING, UBOSkinning.NAME, [
        new Uniform('cc_joints', Type.FLOAT4, JOINT_UNIFORM_CAPACITY * 3),
    ], 1)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L451)&nbsp;


___


### NAME
<div style="margin-left: 10px;">




• `static` **NAME**:
  = `"CCSkinning"`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:448](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L448)&nbsp;


___


### SIZE
<div style="margin-left: 10px;">




• `static` **SIZE**:
`number`  = `UBOSkinning.COUNT * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:446](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L446)&nbsp;


___

<!---->





## Class: UBOMorph






**`zh`** 形变配置的 UBO



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  BINDING](#BINDING)
- [ **`static`**  DESCRIPTOR](#DESCRIPTOR)
- [ **`static`**  LAYOUT](#LAYOUT)
- [ **`static`**  NAME](#NAME)
- [ **`static`**  SIZE](#SIZE)
</div>

## Properties


### BINDING
<div style="margin-left: 10px;">




• `static` **BINDING**:
`UBO_MORPH`  = `ModelLocalBindings.UBO_MORPH`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:472](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L472)&nbsp;


___


### DESCRIPTOR
<div style="margin-left: 10px;">




• `static` **DESCRIPTOR**:
`DescriptorSetLayoutBinding`  = `new DescriptorSetLayoutBinding(UBOMorph.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L473)&nbsp;


___


### LAYOUT
<div style="margin-left: 10px;">




• `static` **LAYOUT**:
`UniformBlock`  = `new UniformBlock(SetIndex.LOCAL, UBOMorph.BINDING, UBOMorph.NAME, [
        new Uniform('cc_displacementWeights', Type.FLOAT4, UBOMorph.MAX_MORPH_TARGET_COUNT / 4),
        new Uniform('cc_displacementTextureInfo', Type.FLOAT4, 1),
    ], 1)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:474](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L474)&nbsp;


___


### NAME
<div style="margin-left: 10px;">




• `static` **NAME**:
  = `"CCMorph"`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:471](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L471)&nbsp;


___


### SIZE
<div style="margin-left: 10px;">




• `static` **SIZE**:
`number`  = `UBOMorph.COUNT_BASE_4_BYTES * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:469](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L469)&nbsp;


___

<!---->




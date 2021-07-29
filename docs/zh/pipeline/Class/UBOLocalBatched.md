
## Class: UBOLocalBatched





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
`UBO_LOCAL`  = `ModelLocalBindings.UBO_LOCAL`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L366)&nbsp;


___


### COUNT
<div style="margin-left: 10px;">




• `static` **COUNT**:
`number`  = `16 * UBOLocalBatched.BATCHING_COUNT`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:362](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L362)&nbsp;


___


### DESCRIPTOR
<div style="margin-left: 10px;">




• `static` **DESCRIPTOR**:
`DescriptorSetLayoutBinding`  = `new DescriptorSetLayoutBinding(UBOLocalBatched.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:367](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L367)&nbsp;


___


### LAYOUT
<div style="margin-left: 10px;">




• `static` **LAYOUT**:
`UniformBlock`  = `new UniformBlock(SetIndex.LOCAL, UBOLocalBatched.BINDING, UBOLocalBatched.NAME, [
        new Uniform('cc_matWorlds', Type.MAT4, UBOLocalBatched.BATCHING_COUNT),
    ], 1)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:368](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L368)&nbsp;


___


### NAME
<div style="margin-left: 10px;">




• `static` **NAME**:
  = `"CCLocalBatched"`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:365](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L365)&nbsp;


___


### SIZE
<div style="margin-left: 10px;">




• `static` **SIZE**:
`number`  = `UBOLocalBatched.COUNT * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:363](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L363)&nbsp;


___

<!---->




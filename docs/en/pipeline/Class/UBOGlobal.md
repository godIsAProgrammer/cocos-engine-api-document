
## Class: UBOGlobal







**`en`** The global uniform buffer object


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
`UBO_GLOBAL`  = `PipelineGlobalBindings.UBO_GLOBAL`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L178)&nbsp;


___


### COUNT
<div style="margin-left: 10px;">




• `static` **COUNT**:
`number`  = `UBOGlobal.SCREEN_SIZE_OFFSET + 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L174)&nbsp;


___


### DESCRIPTOR
<div style="margin-left: 10px;">




• `static` **DESCRIPTOR**:
`DescriptorSetLayoutBinding`  = `new DescriptorSetLayoutBinding(UBOGlobal.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L179)&nbsp;


___


### LAYOUT
<div style="margin-left: 10px;">




• `static` **LAYOUT**:
`UniformBlock`  = `new UniformBlock(SetIndex.GLOBAL, UBOGlobal.BINDING, UBOGlobal.NAME, [
        new Uniform('cc_time', Type.FLOAT4, 1),
        new Uniform('cc_screenSize', Type.FLOAT4, 1),
        new Uniform('cc_nativeSize', Type.FLOAT4, 1),
    ], 1)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L180)&nbsp;


___


### NAME
<div style="margin-left: 10px;">




• `static` **NAME**:
  = `"CCGlobal"`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L177)&nbsp;


___


### SIZE
<div style="margin-left: 10px;">




• `static` **SIZE**:
`number`  = `UBOGlobal.COUNT * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L175)&nbsp;


___

<!---->




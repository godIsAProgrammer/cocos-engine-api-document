
## Class: UBOCamera







**`zh`** 全局相机 UBO。



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
`UBO_CAMERA`  = `PipelineGlobalBindings.UBO_CAMERA`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L214)&nbsp;


___


### COUNT
<div style="margin-left: 10px;">




• `static` **COUNT**:
`number`  = `UBOCamera.GLOBAL_FOG_ADD_OFFSET + 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:210](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L210)&nbsp;


___


### DESCRIPTOR
<div style="margin-left: 10px;">




• `static` **DESCRIPTOR**:
`DescriptorSetLayoutBinding`  = `new DescriptorSetLayoutBinding(UBOCamera.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L215)&nbsp;


___


### LAYOUT
<div style="margin-left: 10px;">




• `static` **LAYOUT**:
`UniformBlock`  = `new UniformBlock(SetIndex.GLOBAL, UBOCamera.BINDING, UBOCamera.NAME, [
        new Uniform('cc_matView', Type.MAT4, 1),
        new Uniform('cc_matViewInv', Type.MAT4, 1),
        new Uniform('cc_matProj', Type.MAT4, 1),
        new Uniform('cc_matProjInv', Type.MAT4, 1),
        new Uniform('cc_matViewProj', Type.MAT4, 1),
        new Uniform('cc_matViewProjInv', Type.MAT4, 1),
        new Uniform('cc_cameraPos', Type.FLOAT4, 1),
        new Uniform('cc_screenScale', Type.FLOAT4, 1),
        new Uniform('cc_exposure', Type.FLOAT4, 1),
        new Uniform('cc_mainLitDir', Type.FLOAT4, 1),
        new Uniform('cc_mainLitColor', Type.FLOAT4, 1),
        new Uniform('cc_ambientSky', Type.FLOAT4, 1),
        new Uniform('cc_ambientGround', Type.FLOAT4, 1),
        new Uniform('cc_fogColor', Type.FLOAT4, 1),
        new Uniform('cc_fogBase', Type.FLOAT4, 1),
        new Uniform('cc_fogAdd', Type.FLOAT4, 1),
    ], 1)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:216](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L216)&nbsp;


___


### NAME
<div style="margin-left: 10px;">




• `static` **NAME**:
  = `"CCCamera"`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L213)&nbsp;


___


### SIZE
<div style="margin-left: 10px;">




• `static` **SIZE**:
`number`  = `UBOCamera.COUNT * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:211](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L211)&nbsp;


___

<!---->




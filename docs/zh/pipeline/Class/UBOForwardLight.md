
## Class: UBOForwardLight







**`zh`** 前向灯光 UBO。



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
`UBO_FORWARD_LIGHTS`  = `ModelLocalBindings.UBO_FORWARD_LIGHTS`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:390](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L390)&nbsp;


___


### COUNT
<div style="margin-left: 10px;">




• `static` **COUNT**:
`number`  = `UBOForwardLight.LIGHT_DIR_OFFSET + UBOForwardLight.LIGHTS_PER_PASS * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:386](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L386)&nbsp;


___


### DESCRIPTOR
<div style="margin-left: 10px;">




• `static` **DESCRIPTOR**:
`DescriptorSetLayoutBinding`  = `new DescriptorSetLayoutBinding(UBOForwardLight.BINDING, DescriptorType.DYNAMIC_UNIFORM_BUFFER, 1, ShaderStageFlagBit.FRAGMENT)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L391)&nbsp;


___


### LAYOUT
<div style="margin-left: 10px;">




• `static` **LAYOUT**:
`UniformBlock`  = `new UniformBlock(SetIndex.LOCAL, UBOForwardLight.BINDING, UBOForwardLight.NAME, [
        new Uniform('cc_lightPos', Type.FLOAT4, UBOForwardLight.LIGHTS_PER_PASS),
        new Uniform('cc_lightColor', Type.FLOAT4, UBOForwardLight.LIGHTS_PER_PASS),
        new Uniform('cc_lightSizeRangeAngle', Type.FLOAT4, UBOForwardLight.LIGHTS_PER_PASS),
        new Uniform('cc_lightDir', Type.FLOAT4, UBOForwardLight.LIGHTS_PER_PASS),
    ], 1)`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:392](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L392)&nbsp;


___


### NAME
<div style="margin-left: 10px;">




• `static` **NAME**:
  = `"CCForwardLight"`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:389](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L389)&nbsp;


___


### SIZE
<div style="margin-left: 10px;">




• `static` **SIZE**:
`number`  = `UBOForwardLight.COUNT * 4`
</div>

##### Defined in &nbsp;   [cocos/core/pipeline/define.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/define.ts#L387)&nbsp;


___

<!---->




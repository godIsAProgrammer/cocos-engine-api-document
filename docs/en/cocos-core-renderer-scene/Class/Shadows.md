
## Class: Shadows





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ maxReceived](#maxReceived)
- [ sphere](#sphere)
- [ aspect](#aspect)
- [ autoAdapt](#autoAdapt)
- [ bias](#bias)
- [ distance](#distance)
- [ enabled](#enabled)
- [ far](#far)
- [ handle](#handle)
- [ instancingMaterial](#instancingMaterial)
- [ linear](#linear)
- [ matLight](#matLight)
- [ material](#material)
- [ near](#near)
- [ normal](#normal)
- [ normalBias](#normalBias)
- [ orthoSize](#orthoSize)
- [ packing](#packing)
- [ pcf](#pcf)
- [ selfShadow](#selfShadow)
- [ shadowColor](#shadowColor)
- [ shadowMapDirty](#shadowMapDirty)
- [ size](#size)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ activate](#activate)
- [ destroy](#destroy)
- [ getPlanarInstanceShader](#getPlanarInstanceShader)
- [ getPlanarShader](#getPlanarShader)
- [ initialize](#initialize)
</div>

## Properties


### maxReceived
<div style="margin-left: 10px;">




**`en`** get or set shadow max received.




•  **maxReceived**:
`number`  = `4`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:349](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L349)&nbsp;


___


### sphere
<div style="margin-left: 10px;">




**`en`** The bounding sphere of the shadow map.




•  **sphere**:
`Sphere`  = `new Sphere(0.0, 0.0, 0.0, 0.01)`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L343)&nbsp;


___


### aspect
<div style="margin-left: 10px;">




**`en`** get or set shadow camera aspect.




•  **aspect**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:200](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L200)&nbsp;   [cocos/core/renderer/scene/shadows.ts:203](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L203)&nbsp;


___


### autoAdapt
<div style="margin-left: 10px;">




**`en`** get or set shadow auto control.




•  **autoAdapt**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L315)&nbsp;   [cocos/core/renderer/scene/shadows.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L319)&nbsp;


___


### bias
<div style="margin-left: 10px;">




**`en`** get or set shadow bias.




•  **bias**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:257](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L257)&nbsp;   [cocos/core/renderer/scene/shadows.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L260)&nbsp;


___


### distance
<div style="margin-left: 10px;">




**`en`** The distance from coordinate origin to the receiving plane.




•  **distance**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L141)&nbsp;   [cocos/core/renderer/scene/shadows.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L145)&nbsp;


___


### enabled
<div style="margin-left: 10px;">




**`en`** Whether activate planar shadow.




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L113)&nbsp;   [cocos/core/renderer/scene/shadows.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L118)&nbsp;


___


### far
<div style="margin-left: 10px;">




**`en`** get or set shadow camera far.




•  **far**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L189)&nbsp;   [cocos/core/renderer/scene/shadows.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L192)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``ShadowsHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:335](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L335)&nbsp;


___


### instancingMaterial
<div style="margin-left: 10px;">




•  **instancingMaterial**:
 ``Material`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:331](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L331)&nbsp;


___


### linear
<div style="margin-left: 10px;">




**`en`** on or off linear depth.




•  **linear**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:280](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L280)&nbsp;   [cocos/core/renderer/scene/shadows.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L284)&nbsp;


___


### matLight
<div style="margin-left: 10px;">




•  **matLight**:
 ``Mat4`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:323](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L323)&nbsp;


___


### material
<div style="margin-left: 10px;">




•  **material**:
 ``Material`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L327)&nbsp;


___


### near
<div style="margin-left: 10px;">




**`en`** get or set shadow camera near.




•  **near**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L178)&nbsp;   [cocos/core/renderer/scene/shadows.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L181)&nbsp;


___


### normal
<div style="margin-left: 10px;">




**`en`** The normal of the plane which receives shadow.




•  **normal**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L128)&nbsp;   [cocos/core/renderer/scene/shadows.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L132)&nbsp;


___


### normalBias
<div style="margin-left: 10px;">




**`en`** get or set normal bias.




•  **normalBias**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L304)&nbsp;   [cocos/core/renderer/scene/shadows.ts:307](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L307)&nbsp;


___


### orthoSize
<div style="margin-left: 10px;">




**`en`** get or set shadow camera orthoSize.




•  **orthoSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:211](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L211)&nbsp;   [cocos/core/renderer/scene/shadows.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L214)&nbsp;


___


### packing
<div style="margin-left: 10px;">




**`en`** on or off packing depth.




•  **packing**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:268](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L268)&nbsp;   [cocos/core/renderer/scene/shadows.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L272)&nbsp;


___


### pcf
<div style="margin-left: 10px;">




**`en`** get or set shadow pcf.




•  **pcf**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L234)&nbsp;   [cocos/core/renderer/scene/shadows.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L237)&nbsp;


___


### selfShadow
<div style="margin-left: 10px;">




**`en`** on or off Self-shadowing.




•  **selfShadow**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L292)&nbsp;   [cocos/core/renderer/scene/shadows.ts:296](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L296)&nbsp;


___


### shadowColor
<div style="margin-left: 10px;">




**`en`** Shadow color.




•  **shadowColor**:
 ``Color`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L153)&nbsp;   [cocos/core/renderer/scene/shadows.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L157)&nbsp;


___


### shadowMapDirty
<div style="margin-left: 10px;">




**`en`** shadow Map size has been modified.




•  **shadowMapDirty**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:245](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L245)&nbsp;   [cocos/core/renderer/scene/shadows.ts:249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L249)&nbsp;


___


### size
<div style="margin-left: 10px;">




**`en`** get or set shadow camera orthoSize.




•  **size**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:222](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L222)&nbsp;   [cocos/core/renderer/scene/shadows.ts:225](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L225)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`en`** Shadow type.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L166)&nbsp;   [cocos/core/renderer/scene/shadows.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L169)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Shadows**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L357)&nbsp;


---

<!---->
## Methods

### activate
<div style="margin-left: 10px;">

▸   **activate**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:407](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L407)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L447)&nbsp;
___
### getPlanarInstanceShader
<div style="margin-left: 10px;">

▸   **getPlanarInstanceShader**<`ShaderHandle`\>(`patches: array<IMacroPatch> | null`) : `ShaderHandle`




<!---->
<!--    #### Returns `ShaderHandle` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `patches` | `array<IMacroPatch> \| null` | - |



##### Returns `ShaderHandle`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:373](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L373)&nbsp;
___
### getPlanarShader
<div style="margin-left: 10px;">

▸   **getPlanarShader**<`ShaderHandle`\>(`patches: array<IMacroPatch> | null`) : `ShaderHandle`




<!---->
<!--    #### Returns `ShaderHandle` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `patches` | `array<IMacroPatch> \| null` | - |



##### Returns `ShaderHandle`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:363](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L363)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`shadowsInfo: ShadowsInfo`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `shadowsInfo` | `ShadowsInfo` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/shadows.ts:383](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/shadows.ts#L383)&nbsp;
___
<!---->




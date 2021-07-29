
## Class: BlendTarget







**`zh`** GFX 混合目标。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ blend](#blend)
- [ blendAlphaEq](#blendAlphaEq)
- [ blendColorMask](#blendColorMask)
- [ blendDst](#blendDst)
- [ blendDstAlpha](#blendDstAlpha)
- [ blendEq](#blendEq)
- [ blendSrc](#blendSrc)
- [ blendSrcAlpha](#blendSrcAlpha)
- [ handle](#handle)

### Constructors

- [ constructor](#constructor)

### Methods

- [ assign](#assign)
- [ destroy](#destroy)
- [ reset](#reset)
</div>

## Properties


### blend
<div style="margin-left: 10px;">




•  **blend**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L169)&nbsp;


___


### blendAlphaEq
<div style="margin-left: 10px;">




•  **blendAlphaEq**:
`BlendOp` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L175)&nbsp;


___


### blendColorMask
<div style="margin-left: 10px;">




•  **blendColorMask**:
`ColorMask` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L176)&nbsp;


___


### blendDst
<div style="margin-left: 10px;">




•  **blendDst**:
`BlendFactor` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L171)&nbsp;


___


### blendDstAlpha
<div style="margin-left: 10px;">




•  **blendDstAlpha**:
`BlendFactor` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L174)&nbsp;


___


### blendEq
<div style="margin-left: 10px;">




•  **blendEq**:
`BlendOp` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L172)&nbsp;


___


### blendSrc
<div style="margin-left: 10px;">




•  **blendSrc**:
`BlendFactor` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L170)&nbsp;


___


### blendSrcAlpha
<div style="margin-left: 10px;">




•  **blendSrcAlpha**:
`BlendFactor` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L173)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``RawBufferHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L194)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new BlendTarget**(`blend: boolean, blendSrc: BlendFactor, blendDst: BlendFactor, blendEq: BlendOp, blendSrcAlpha: BlendFactor, blendDstAlpha: BlendFactor, blendAlphaEq: BlendOp, blendColorMask: ColorMask`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `blend` | `boolean` |





| Name | Type |
| :------ | :------ |
| `blendSrc` | `BlendFactor` |





| Name | Type |
| :------ | :------ |
| `blendDst` | `BlendFactor` |





| Name | Type |
| :------ | :------ |
| `blendEq` | `BlendOp` |





| Name | Type |
| :------ | :------ |
| `blendSrcAlpha` | `BlendFactor` |





| Name | Type |
| :------ | :------ |
| `blendDstAlpha` | `BlendFactor` |





| Name | Type |
| :------ | :------ |
| `blendAlphaEq` | `BlendOp` |





| Name | Type |
| :------ | :------ |
| `blendColorMask` | `ColorMask` |





</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L166)&nbsp;


---

<!---->
## Methods

### assign
<div style="margin-left: 10px;">

▸   **assign**<`void`\>(`target: BlendTarget`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `BlendTarget` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L190)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L196)&nbsp;
___
### reset
<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L179)&nbsp;
___
<!---->




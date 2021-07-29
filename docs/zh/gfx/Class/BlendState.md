
## Class: BlendState






**`zh`** GFX 混合状态。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ blendColor](#blendColor)
- [ isA2C](#isA2C)
- [ isIndepend](#isIndepend)
- [ targets](#targets)
- [ handle](#handle)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ reset](#reset)
- [ setTarget](#setTarget)
</div>

## Properties


### blendColor
<div style="margin-left: 10px;">




•  **blendColor**:
`Color` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:209](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L209)&nbsp;


___


### isA2C
<div style="margin-left: 10px;">




•  **isA2C**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L207)&nbsp;


___


### isIndepend
<div style="margin-left: 10px;">




•  **isIndepend**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L208)&nbsp;


___


### targets
<div style="margin-left: 10px;">




•  **targets**:
`array` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:210](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L210)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``RawBufferHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:240](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L240)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new BlendState**(`isA2C: boolean, isIndepend: boolean, blendColor: Color, targets: undefined`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `isA2C` | `boolean` |
| `isIndepend` | `boolean` |
| `blendColor` | `Color` |
| `targets` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L204)&nbsp;


---

<!---->
## Methods

### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L242)&nbsp;
___
### reset

<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L229)&nbsp;
___
### setTarget

<div style="margin-left: 10px;">

▸   **setTarget**<`void`\>(`index: number, target: BlendTarget`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | The index to set target.  |
| `target` | `BlendTarget` | The target to be set.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L221)&nbsp;
___
<!---->





## Class: RasterizerState






**`zh`** GFX 光栅化状态。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ cullMode](#cullMode)
- [ depthBias](#depthBias)
- [ depthBiasClamp](#depthBiasClamp)
- [ depthBiasEnabled](#depthBiasEnabled)
- [ depthBiasSlop](#depthBiasSlop)
- [ isDepthClip](#isDepthClip)
- [ isDiscard](#isDiscard)
- [ isFrontFaceCCW](#isFrontFaceCCW)
- [ isMultisample](#isMultisample)
- [ lineWidth](#lineWidth)
- [ polygonMode](#polygonMode)
- [ shadeModel](#shadeModel)
- [ handle](#handle)

### Constructors

- [ constructor](#constructor)

### Methods

- [ assign](#assign)
- [ destroy](#destroy)
- [ reset](#reset)
</div>

## Properties


### cullMode
<div style="margin-left: 10px;">




•  **cullMode**:
`CullMode` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L66)&nbsp;


___


### depthBias
<div style="margin-left: 10px;">




•  **depthBias**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L69)&nbsp;


___


### depthBiasClamp
<div style="margin-left: 10px;">




•  **depthBiasClamp**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L70)&nbsp;


___


### depthBiasEnabled
<div style="margin-left: 10px;">




•  **depthBiasEnabled**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L68)&nbsp;


___


### depthBiasSlop
<div style="margin-left: 10px;">




•  **depthBiasSlop**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L71)&nbsp;


___


### isDepthClip
<div style="margin-left: 10px;">




•  **isDepthClip**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L72)&nbsp;


___


### isDiscard
<div style="margin-left: 10px;">




•  **isDiscard**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L63)&nbsp;


___


### isFrontFaceCCW
<div style="margin-left: 10px;">




•  **isFrontFaceCCW**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L67)&nbsp;


___


### isMultisample
<div style="margin-left: 10px;">




•  **isMultisample**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L73)&nbsp;


___


### lineWidth
<div style="margin-left: 10px;">




•  **lineWidth**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L74)&nbsp;


___


### polygonMode
<div style="margin-left: 10px;">




•  **polygonMode**:
`PolygonMode` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L64)&nbsp;


___


### shadeModel
<div style="margin-left: 10px;">




•  **shadeModel**:
`ShadeModel` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L65)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``RawBufferHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L96)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new RasterizerState**(`isDiscard: boolean, polygonMode: PolygonMode, shadeModel: ShadeModel, cullMode: CullMode, isFrontFaceCCW: boolean, depthBiasEnabled: boolean, depthBias: number, depthBiasClamp: number, depthBiasSlop: number, isDepthClip: boolean, isMultisample: boolean, lineWidth: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDiscard` | `boolean` |
| `polygonMode` | `PolygonMode` |
| `shadeModel` | `ShadeModel` |
| `cullMode` | `CullMode` |
| `isFrontFaceCCW` | `boolean` |
| `depthBiasEnabled` | `boolean` |
| `depthBias` | `number` |
| `depthBiasClamp` | `number` |
| `depthBiasSlop` | `number` |
| `isDepthClip` | `boolean` |
| `isMultisample` | `boolean` |
| `lineWidth` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L60)&nbsp;


---

<!---->
## Methods

### assign

<div style="margin-left: 10px;">

▸   **assign**<`void`\>(`rs: RasterizerState`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rs` | `RasterizerState` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L92)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L98)&nbsp;
___
### reset

<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/pipeline-state.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/pipeline-state.ts#L77)&nbsp;
___
<!---->




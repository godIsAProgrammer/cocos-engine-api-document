
## Class: FogInfo







**`zh`** 全局雾相关信息


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  FogType](#FogType)
- [ enabled](#enabled)
- [ fogAtten](#fogAtten)
- [ fogColor](#fogColor)
- [ fogDensity](#fogDensity)
- [ fogEnd](#fogEnd)
- [ fogRange](#fogRange)
- [ fogStart](#fogStart)
- [ fogTop](#fogTop)
- [ type](#type)

### Methods

- [ activate](#activate)
</div>

## Properties


### FogType
<div style="margin-left: 10px;">




• `static` **FogType**:
  = `FogType`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L194)&nbsp;


___


### enabled
<div style="margin-left: 10px;">




**`zh`** 是否启用全局雾效




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L219)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L230)&nbsp;


___


### fogAtten
<div style="margin-left: 10px;">




**`zh`** 雾效衰减




•  **fogAtten**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L327)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:331](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L331)&nbsp;


___


### fogColor
<div style="margin-left: 10px;">




**`zh`** 全局雾颜色




•  **fogColor**:
 ``Color`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:239](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L239)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L244)&nbsp;


___


### fogDensity
<div style="margin-left: 10px;">




**`zh`** 全局雾浓度




•  **fogDensity**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L275)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L279)&nbsp;


___


### fogEnd
<div style="margin-left: 10px;">




**`zh`** 雾效结束位置，只适用于线性雾




•  **fogEnd**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:309](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L309)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:313](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L313)&nbsp;


___


### fogRange
<div style="margin-left: 10px;">




**`zh`** 雾效范围，只适用于层级雾




•  **fogRange**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:361](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L361)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:365](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L365)&nbsp;


___


### fogStart
<div style="margin-left: 10px;">




**`zh`** 雾效起始位置，只适用于线性雾




•  **fogStart**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L292)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:296](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L296)&nbsp;


___


### fogTop
<div style="margin-left: 10px;">




**`zh`** 雾效顶部范围，只适用于层级雾




•  **fogTop**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L344)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L348)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`zh`** 全局雾类型




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L254)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:258](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L258)&nbsp;


___

<!---->
## Methods

### activate
<div style="margin-left: 10px;">

▸   **activate**<`void`\>(`resource: Fog`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `resource` | `Fog` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L370)&nbsp;
___
<!---->




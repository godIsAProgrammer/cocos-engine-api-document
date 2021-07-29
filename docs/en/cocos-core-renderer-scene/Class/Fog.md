
## Class: Fog





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ colorArray](#colorArray)
- [ enabled](#enabled)
- [ fogAtten](#fogAtten)
- [ fogColor](#fogColor)
- [ fogDensity](#fogDensity)
- [ fogEnd](#fogEnd)
- [ fogRange](#fogRange)
- [ fogStart](#fogStart)
- [ fogTop](#fogTop)
- [ handle](#handle)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ activate](#activate)
- [ destroy](#destroy)
- [ initialize](#initialize)
</div>

## Properties


### colorArray
<div style="margin-left: 10px;">




•  **colorArray**:
 ``Float32Array`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L197)&nbsp;


___


### enabled
<div style="margin-left: 10px;">



**`en`** Enable global fog





•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L82)&nbsp;   [cocos/core/renderer/scene/fog.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L88)&nbsp;


___


### fogAtten
<div style="margin-left: 10px;">



**`en`** Global fog attenuation





•  **fogAtten**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:165](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L165)&nbsp;   [cocos/core/renderer/scene/fog.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L169)&nbsp;


___


### fogColor
<div style="margin-left: 10px;">



**`en`** Global fog color





•  **fogColor**:
 ``Color`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L96)&nbsp;   [cocos/core/renderer/scene/fog.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L102)&nbsp;


___


### fogDensity
<div style="margin-left: 10px;">



**`en`** Global fog density





•  **fogDensity**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L129)&nbsp;   [cocos/core/renderer/scene/fog.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L133)&nbsp;


___


### fogEnd
<div style="margin-left: 10px;">



**`en`** Global fog end position, only for linear fog





•  **fogEnd**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L153)&nbsp;   [cocos/core/renderer/scene/fog.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L157)&nbsp;


___


### fogRange
<div style="margin-left: 10px;">



**`en`** Global fog range, only for layered fog





•  **fogRange**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L189)&nbsp;   [cocos/core/renderer/scene/fog.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L193)&nbsp;


___


### fogStart
<div style="margin-left: 10px;">



**`en`** Global fog start position, only for linear fog





•  **fogStart**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L141)&nbsp;   [cocos/core/renderer/scene/fog.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L145)&nbsp;


___


### fogTop
<div style="margin-left: 10px;">



**`en`** Global fog top range, only for layered fog





•  **fogTop**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L177)&nbsp;   [cocos/core/renderer/scene/fog.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L181)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``FogHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L204)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`en`** The current global fog type.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:117](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L117)&nbsp;   [cocos/core/renderer/scene/fog.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L120)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Fog**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L206)&nbsp;


---

<!---->
## Methods

### activate

<div style="margin-left: 10px;">

▸   **activate**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L226)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:239](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L239)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`fogInfo: FogInfo`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fogInfo` | `FogInfo` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/fog.ts:212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/fog.ts#L212)&nbsp;
___
<!---->




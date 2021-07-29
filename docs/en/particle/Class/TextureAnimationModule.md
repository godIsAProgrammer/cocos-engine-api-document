
## Class: TextureAnimationModule











<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ animation](#animation)
- [ cycleCount](#cycleCount)
- [ frameOverTime](#frameOverTime)
- [ name](#name)
- [ needAnimate](#needAnimate)
- [ needUpdate](#needUpdate)
- [ randomRow](#randomRow)
- [ rowIndex](#rowIndex)
- [ startFrame](#startFrame)
- [ target](#target)
- [ enable](#enable)
- [ flipV](#flipV)
- [ mode](#mode)
- [ numTilesX](#numTilesX)
- [ numTilesY](#numTilesY)
- [ uvChannelMask](#uvChannelMask)

### Methods

- [ animate](#animate)
- [ bindTarget](#bindTarget)
- [ init](#init)
- [ update](#update)
</div>

## Properties


### animation
<div style="margin-left: 10px;">




•  **animation**:
`number`  = `Animation.WholeSheet`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L157)&nbsp;


___


### cycleCount
<div style="margin-left: 10px;">




•  **cycleCount**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L183)&nbsp;


___


### frameOverTime
<div style="margin-left: 10px;">




•  **frameOverTime**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L166)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `PARTICLE_MODULE_NAME.TEXTURE`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:239](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L239)&nbsp;


___


### needAnimate
<div style="margin-left: 10px;">




•  **needAnimate**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/particle/particle.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle.ts#L124)&nbsp;


___


### needUpdate
<div style="margin-left: 10px;">




•  **needUpdate**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/particle.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle.ts#L123)&nbsp;


___


### randomRow
<div style="margin-left: 10px;">




•  **randomRow**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L228)&nbsp;


___


### rowIndex
<div style="margin-left: 10px;">




•  **rowIndex**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L237)&nbsp;


___


### startFrame
<div style="margin-left: 10px;">




•  **startFrame**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L175)&nbsp;


___


### target
<div style="margin-left: 10px;">




•  **target**:
`IParticleSystemRenderer | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/particle/particle.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle.ts#L122)&nbsp;


___


### enable
<div style="margin-left: 10px;">




•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L87)&nbsp;   [cocos/particle/animator/texture-animation.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L91)&nbsp;


___


### flipV
<div style="margin-left: 10px;">




•  **flipV**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:202](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L202)&nbsp;   [cocos/particle/animator/texture-animation.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L206)&nbsp;


___


### mode
<div style="margin-left: 10px;">




•  **mode**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L108)&nbsp;   [cocos/particle/animator/texture-animation.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L112)&nbsp;


___


### numTilesX
<div style="margin-left: 10px;">




•  **numTilesX**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L123)&nbsp;   [cocos/particle/animator/texture-animation.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L127)&nbsp;


___


### numTilesY
<div style="margin-left: 10px;">




•  **numTilesY**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L139)&nbsp;   [cocos/particle/animator/texture-animation.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L143)&nbsp;


___


### uvChannelMask
<div style="margin-left: 10px;">




•  **uvChannelMask**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L213)&nbsp;   [cocos/particle/animator/texture-animation.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L217)&nbsp;


___

<!---->
## Methods

### animate

<div style="margin-left: 10px;">

▸   **animate**<`void`\>(`p: Particle, dt: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Particle` | - |
| `dt` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:245](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L245)&nbsp;
___
### bindTarget

<div style="margin-left: 10px;">

▸   **bindTarget**<`void`\>(`target: IParticleSystemRenderer`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `IParticleSystemRenderer` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/particle.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle.ts#L126)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\>(`p: Particle`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Particle` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/texture-animation.ts:241](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/texture-animation.ts#L241)&nbsp;
___
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`space: number, trans: Mat4`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `space` | `number` | - |
| `trans` | `Mat4` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/particle.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle.ts#L130)&nbsp;
___
<!---->




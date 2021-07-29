
## Class: RotationOvertimeModule












<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ name](#name)
- [ needAnimate](#needAnimate)
- [ needUpdate](#needUpdate)
- [ target](#target)
- [ x](#x)
- [ y](#y)
- [ z](#z)
- [ enable](#enable)
- [ separateAxes](#separateAxes)

### Methods

- [ animate](#animate)
- [ bindTarget](#bindTarget)
- [ update](#update)
</div>

## Properties


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `PARTICLE_MODULE_NAME.ROTATION`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/rotation-overtime.ts:107](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/rotation-overtime.ts#L107)&nbsp;


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


### target
<div style="margin-left: 10px;">




•  **target**:
`IParticleSystemRenderer | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/particle/particle.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle.ts#L122)&nbsp;


___


### x
<div style="margin-left: 10px;">




•  **x**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/rotation-overtime.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/rotation-overtime.ts#L83)&nbsp;


___


### y
<div style="margin-left: 10px;">




•  **y**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/rotation-overtime.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/rotation-overtime.ts#L94)&nbsp;


___


### z
<div style="margin-left: 10px;">




•  **z**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/rotation-overtime.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/rotation-overtime.ts#L105)&nbsp;


___


### enable
<div style="margin-left: 10px;">




•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/rotation-overtime.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/rotation-overtime.ts#L47)&nbsp;   [cocos/particle/animator/rotation-overtime.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/rotation-overtime.ts#L51)&nbsp;


___


### separateAxes
<div style="margin-left: 10px;">




•  **separateAxes**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/rotation-overtime.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/rotation-overtime.ts#L66)&nbsp;   [cocos/particle/animator/rotation-overtime.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/rotation-overtime.ts#L70)&nbsp;


___

<!---->
## Methods

### animate
<div style="margin-left: 10px;">

▸   **animate**<`void`\>(`p: Particle, dt: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Particle` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle/animator/rotation-overtime.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/rotation-overtime.ts#L109)&nbsp;
___
### bindTarget
<div style="margin-left: 10px;">

▸   **bindTarget**<`void`\>(`target: IParticleSystemRenderer`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `IParticleSystemRenderer` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle/particle.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle.ts#L126)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`space: number, trans: Mat4`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `space` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `trans` | `Mat4` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle/particle.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle.ts#L130)&nbsp;
___
<!---->





## Class: VelocityOvertimeModule












<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ name](#name)
- [ needAnimate](#needAnimate)
- [ needUpdate](#needUpdate)
- [ space](#space)
- [ speedModifier](#speedModifier)
- [ target](#target)
- [ x](#x)
- [ y](#y)
- [ z](#z)
- [ enable](#enable)

### Constructors

- [ constructor](#constructor)

### Methods

- [ animate](#animate)
- [ bindTarget](#bindTarget)
- [ update](#update)
</div>

## Properties


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `PARTICLE_MODULE_NAME.VELOCITY`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L114)&nbsp;


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


### space
<div style="margin-left: 10px;">




•  **space**:
`number`  = `Space.Local`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L110)&nbsp;


___


### speedModifier
<div style="margin-left: 10px;">




•  **speedModifier**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L101)&nbsp;


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

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L71)&nbsp;


___


### y
<div style="margin-left: 10px;">




•  **y**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L81)&nbsp;


___


### z
<div style="margin-left: 10px;">




•  **z**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L91)&nbsp;


___


### enable
<div style="margin-left: 10px;">




•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L52)&nbsp;   [cocos/particle/animator/velocity-overtime.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L56)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new VelocityOvertimeModule**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L114)&nbsp;


---

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

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L128)&nbsp;
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

▸   **update**<`void`\>(`space: number, worldTransform: Mat4`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `space` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldTransform` | `Mat4` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle/animator/velocity-overtime.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/velocity-overtime.ts#L124)&nbsp;
___
<!---->




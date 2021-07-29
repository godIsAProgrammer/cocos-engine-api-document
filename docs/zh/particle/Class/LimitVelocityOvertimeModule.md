
## Class: LimitVelocityOvertimeModule











<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ dampen](#dampen)
- [ drag](#drag)
- [ limit](#limit)
- [ limitX](#limitX)
- [ limitY](#limitY)
- [ limitZ](#limitZ)
- [ multiplyDragByParticleSize](#multiplyDragByParticleSize)
- [ multiplyDragByParticleVelocity](#multiplyDragByParticleVelocity)
- [ name](#name)
- [ needAnimate](#needAnimate)
- [ needUpdate](#needUpdate)
- [ separateAxes](#separateAxes)
- [ space](#space)
- [ target](#target)
- [ enable](#enable)

### Constructors

- [ constructor](#constructor)

### Methods

- [ animate](#animate)
- [ bindTarget](#bindTarget)
- [ update](#update)
</div>

## Properties


### dampen
<div style="margin-left: 10px;">



**`zh`** 当前速度与速度下限的插值。





•  **dampen**:
`number`  = `3`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L108)&nbsp;


___


### drag
<div style="margin-left: 10px;">




•  **drag**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L128)&nbsp;


___


### limit
<div style="margin-left: 10px;">



**`zh`** 速度下限。





•  **limit**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L100)&nbsp;


___


### limitX
<div style="margin-left: 10px;">



**`zh`** X 轴方向上的速度下限。





•  **limitX**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L70)&nbsp;


___


### limitY
<div style="margin-left: 10px;">



**`zh`** Y 轴方向上的速度下限。





•  **limitY**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L80)&nbsp;


___


### limitZ
<div style="margin-left: 10px;">



**`zh`** Z 轴方向上的速度下限。





•  **limitZ**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L90)&nbsp;


___


### multiplyDragByParticleSize
<div style="margin-left: 10px;">




•  **multiplyDragByParticleSize**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L129)&nbsp;


___


### multiplyDragByParticleVelocity
<div style="margin-left: 10px;">




•  **multiplyDragByParticleVelocity**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L130)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `PARTICLE_MODULE_NAME.LIMIT`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L131)&nbsp;


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


### separateAxes
<div style="margin-left: 10px;">



**`zh`** 是否三个轴分开限制。





•  **separateAxes**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L116)&nbsp;


___


### space
<div style="margin-left: 10px;">



**`zh`** 计算速度下限时采用的坐标系 [[Space]]。





•  **space**:
`number`  = `Space.Local`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L125)&nbsp;


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



**`zh`** 是否启用。





•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L51)&nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L55)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new LimitVelocityOvertimeModule**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L133)&nbsp;


---

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

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L146)&nbsp;
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
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`space: number, worldTransform: Mat4`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `space` | `number` | - |
| `worldTransform` | `Mat4` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/limit-velocity-overtime.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/limit-velocity-overtime.ts#L142)&nbsp;
___
<!---->




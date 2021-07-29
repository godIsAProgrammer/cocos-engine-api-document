
## Class: SizeOvertimeModule











<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ name](#name)
- [ needAnimate](#needAnimate)
- [ needUpdate](#needUpdate)
- [ separateAxes](#separateAxes)
- [ size](#size)
- [ target](#target)
- [ x](#x)
- [ y](#y)
- [ z](#z)
- [ enable](#enable)

### Methods

- [ animate](#animate)
- [ bindTarget](#bindTarget)
- [ update](#update)
</div>

## Properties


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `PARTICLE_MODULE_NAME.SIZE`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/size-overtime.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/size-overtime.ts#L102)&nbsp;


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



**`zh`** 决定是否在每个轴上独立控制粒子大小。





•  **separateAxes**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/size-overtime.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/size-overtime.ts#L64)&nbsp;


___


### size
<div style="margin-left: 10px;">



**`zh`** 定义一条曲线来决定粒子在其生命周期中的大小变化。





•  **size**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/size-overtime.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/size-overtime.ts#L73)&nbsp;


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



**`zh`** 定义一条曲线来决定粒子在其生命周期中 X 轴方向上的大小变化。





•  **x**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/size-overtime.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/size-overtime.ts#L82)&nbsp;


___


### y
<div style="margin-left: 10px;">



**`zh`** 定义一条曲线来决定粒子在其生命周期中 Y 轴方向上的大小变化。





•  **y**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/size-overtime.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/size-overtime.ts#L91)&nbsp;


___


### z
<div style="margin-left: 10px;">



**`zh`** 定义一条曲线来决定粒子在其生命周期中 Z 轴方向上的大小变化。





•  **z**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/size-overtime.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/size-overtime.ts#L100)&nbsp;


___


### enable
<div style="margin-left: 10px;">



**`zh`** 是否启用。





•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/size-overtime.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/size-overtime.ts#L47)&nbsp;   [cocos/particle/animator/size-overtime.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/size-overtime.ts#L51)&nbsp;


___

<!---->
## Methods

### animate

<div style="margin-left: 10px;">

▸   **animate**<`void`\>(`particle: Particle, dt: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `particle` | `Particle` | - |
| `dt` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/size-overtime.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/size-overtime.ts#L104)&nbsp;
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




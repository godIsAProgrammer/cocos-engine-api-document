
## Class: ForceOvertimeModule












<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ name](#name)
- [ needAnimate](#needAnimate)
- [ needUpdate](#needUpdate)
- [ randomized](#randomized)
- [ space](#space)
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
`string`  = `PARTICLE_MODULE_NAME.FORCE`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L106)&nbsp;


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


### randomized
<div style="margin-left: 10px;">




•  **randomized**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L102)&nbsp;


___


### space
<div style="margin-left: 10px;">




**`zh`** 加速度计算时采用的坐标系 [[Space]]。





•  **space**:
`number`  = `Space.Local`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L99)&nbsp;


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




**`zh`** X 轴方向上的加速度分量。





•  **x**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L70)&nbsp;


___


### y
<div style="margin-left: 10px;">




**`zh`** Y 轴方向上的加速度分量。





•  **y**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L80)&nbsp;


___


### z
<div style="margin-left: 10px;">




**`zh`** Z 轴方向上的加速度分量。





•  **z**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L90)&nbsp;


___


### enable
<div style="margin-left: 10px;">




**`zh`** 是否启用。





•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L51)&nbsp;   [cocos/particle/animator/force-overtime.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L55)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ForceOvertimeModule**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L106)&nbsp;


---

<!---->
## Methods

### animate
<div style="margin-left: 10px;">

▸   **animate**<`void`\>(`p: any, dt: any`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L119)&nbsp;
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

▸   **update**<`void`\>(`space: any, worldTransform: any`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `space` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldTransform` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle/animator/force-overtime.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/animator/force-overtime.ts#L115)&nbsp;
___
<!---->




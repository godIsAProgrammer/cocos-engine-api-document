
## Class: ParticleSystem


`extend:`
[RenderableComponent](docs/zh/model/Class/RenderableComponent.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  system](#system)
- [ bursts](#bursts)
- [ duration](#duration)
- [ enableCulling](#enableCulling)
- [ gravityModifier](#gravityModifier)
- [ loop](#loop)
- [ node](#node)
- [ playOnAwake](#playOnAwake)
- [ processor](#processor)
- [ rateOverDistance](#rateOverDistance)
- [ rateOverTime](#rateOverTime)
- [ renderer](#renderer)
- [ scaleSpace](#scaleSpace)
- [ simulationSpeed](#simulationSpeed)
- [ startColor](#startColor)
- [ startDelay](#startDelay)
- [ startLifetime](#startLifetime)
- [ startRotation3D](#startRotation3D)
- [ startRotationX](#startRotationX)
- [ startRotationY](#startRotationY)
- [ startRotationZ](#startRotationZ)
- [ startSize3D](#startSize3D)
- [ startSizeX](#startSizeX)
- [ startSizeY](#startSizeY)
- [ startSizeZ](#startSizeZ)
- [ startSpeed](#startSpeed)
- [ capacity](#capacity)
- [ colorOverLifetimeModule](#colorOverLifetimeModule)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ forceOvertimeModule](#forceOvertimeModule)
- [ hideFlags](#hideFlags)
- [ isEmitting](#isEmitting)
- [ isPaused](#isPaused)
- [ isStopped](#isStopped)
- [ isValid](#isValid)
- [ limitVelocityOvertimeModule](#limitVelocityOvertimeModule)
- [ material](#material)
- [ materials](#materials)
- [ name](#name)
- [ prewarm](#prewarm)
- [ rotationOvertimeModule](#rotationOvertimeModule)
- [ shapeModule](#shapeModule)
- [ sharedMaterial](#sharedMaterial)
- [ sharedMaterials](#sharedMaterials)
- [ simulationSpace](#simulationSpace)
- [ sizeOvertimeModule](#sizeOvertimeModule)
- [ textureAnimationModule](#textureAnimationModule)
- [ time](#time)
- [ trailModule](#trailModule)
- [ uuid](#uuid)
- [ velocityOvertimeModule](#velocityOvertimeModule)
- [ visibility](#visibility)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ bindModule](#bindModule)
- [ clear](#clear)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getMaterial](#getMaterial)
- [ getMaterialInstance](#getMaterialInstance)
- [ getParticleCount](#getParticleCount)
- [ getRenderMaterial](#getRenderMaterial)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ pause](#pause)
- [ play](#play)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setCustomData2](#setCustomData2)
- [ setMaterial](#setMaterial)
- [ setMaterialInstance](#setMaterialInstance)
- [ stop](#stop)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
</div>

## Properties


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### bursts
<div style="margin-left: 10px;">



**`zh`** 设定在指定时间发射指定数量的粒子的 burst 的数量。





•  **bursts**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L306)&nbsp;


___


### duration
<div style="margin-left: 10px;">



**`zh`** 粒子系统运行时间。





•  **duration**:
`number`  = `5`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L207)&nbsp;


___


### enableCulling
<div style="margin-left: 10px;">




•  **enableCulling**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:553](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L553)&nbsp;


___


### gravityModifier
<div style="margin-left: 10px;">



**`zh`** 粒子受重力影响的重力系数。





•  **gravityModifier**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:278](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L278)&nbsp;


___


### loop
<div style="margin-left: 10px;">



**`zh`** 粒子系统是否循环播放。





•  **loop**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L215)&nbsp;


___


### node
<div style="margin-left: 10px;">



**`zh`** 该组件被附加到的节点。组件总会附加到一个节点。



**`example`**

```ts


import { log } from 'cc';
log(comp.node);


```




•  **node**:
`Node`  = `NullNode`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L166)&nbsp;


___


### playOnAwake
<div style="margin-left: 10px;">



**`zh`** 粒子系统加载后是否自动开始播放。





•  **playOnAwake**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:268](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L268)&nbsp;


___


### processor
<div style="margin-left: 10px;">




•  **processor**:
`IParticleSystemRenderer`  = `null!`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L583)&nbsp;


___


### rateOverDistance
<div style="margin-left: 10px;">



**`zh`** 每移动单位距离发射的粒子数。





•  **rateOverDistance**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:297](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L297)&nbsp;


___


### rateOverTime
<div style="margin-left: 10px;">



**`zh`** 每秒发射的粒子数。





•  **rateOverTime**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L288)&nbsp;


___


### renderer
<div style="margin-left: 10px;">




•  **renderer**:
`ParticleSystemRenderer`  = `new ParticleSystemRenderer()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:547](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L547)&nbsp;


___


### scaleSpace
<div style="margin-left: 10px;">




•  **scaleSpace**:
`number`  = `Space.Local`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L101)&nbsp;


___


### simulationSpeed
<div style="margin-left: 10px;">



**`zh`** 控制整个粒子系统的更新速度。





•  **simulationSpeed**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L260)&nbsp;


___


### startColor
<div style="margin-left: 10px;">



**`zh`** 粒子初始颜色。





•  **startColor**:
`GradientRange`  = `new GradientRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L95)&nbsp;


___


### startDelay
<div style="margin-left: 10px;">



**`zh`** 粒子系统开始运行后，延迟粒子发射的时间。





•  **startDelay**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L190)&nbsp;


___


### startLifetime
<div style="margin-left: 10px;">



**`zh`** 粒子生命周期。





•  **startLifetime**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L199)&nbsp;


___


### startRotation3D
<div style="margin-left: 10px;">




•  **startRotation3D**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L148)&nbsp;


___


### startRotationX
<div style="margin-left: 10px;">



**`zh`** 粒子初始旋转角度。





•  **startRotationX**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L159)&nbsp;


___


### startRotationY
<div style="margin-left: 10px;">



**`zh`** 粒子初始旋转角度。





•  **startRotationY**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L170)&nbsp;


___


### startRotationZ
<div style="margin-left: 10px;">



**`zh`** 粒子初始旋转角度。





•  **startRotationZ**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L181)&nbsp;


___


### startSize3D
<div style="margin-left: 10px;">




•  **startSize3D**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L106)&nbsp;


___


### startSizeX
<div style="margin-left: 10px;">



**`zh`** 粒子初始大小。





•  **startSizeX**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L115)&nbsp;


___


### startSizeY
<div style="margin-left: 10px;">



**`zh`** 粒子初始大小。





•  **startSizeY**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L124)&nbsp;


___


### startSizeZ
<div style="margin-left: 10px;">



**`zh`** 粒子初始大小。





•  **startSizeZ**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L133)&nbsp;


___


### startSpeed
<div style="margin-left: 10px;">



**`zh`** 粒子初始速度。





•  **startSpeed**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L143)&nbsp;


___


### capacity
<div style="margin-left: 10px;">



**`zh`** 粒子系统能生成的最大粒子数量。





•  **capacity**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L75)&nbsp;   [cocos/particle/particle-system.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L79)&nbsp;


___


### colorOverLifetimeModule
<div style="margin-left: 10px;">



**`zh`** 颜色控制模块。





•  **colorOverLifetimeModule**:
 ``null | ColorOvertimeModule`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L333)&nbsp;   [cocos/particle/particle-system.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L343)&nbsp;


___


### enabled
<div style="margin-left: 10px;">



**`zh`** 表示该组件自身是否启用。



**`default`** true



**`example`**

```ts


import { log } from 'cc';
comp.enabled = true;
log(comp.enabled);


```




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L110)&nbsp;   [cocos/core/components/component.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L113)&nbsp;


___


### enabledInHierarchy
<div style="margin-left: 10px;">



**`zh`** 表示该组件是否被启用并且所在的节点也处于激活状态。




**`example`**

```ts


import { log } from 'cc';
log(comp.enabledInHierarchy);


```




•  **enabledInHierarchy**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L137)&nbsp;


___


### forceOvertimeModule
<div style="margin-left: 10px;">



**`zh`** 粒子加速度模块。





•  **forceOvertimeModule**:
 ``null | ForceOvertimeModule`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:429](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L429)&nbsp;   [cocos/particle/particle-system.ts:439](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L439)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isEmitting
<div style="margin-left: 10px;">




•  **isEmitting**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:974](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L974)&nbsp;


___


### isPaused
<div style="margin-left: 10px;">




•  **isPaused**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:966](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L966)&nbsp;


___


### isStopped
<div style="margin-left: 10px;">




•  **isStopped**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:970](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L970)&nbsp;


___


### isValid
<div style="margin-left: 10px;">



**`zh`** 
表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。



**`default`** true




**`example`**

```ts


import { Node, log } from 'cc';
const node = new Node();
log(node.isValid);    // true
node.destroy();
log(node.isValid);    // true, still valid in this frame
// after a frame...
log(node.isValid);    // false, destroyed in the end of last frame


```




•  **isValid**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L266)&nbsp;


___


### limitVelocityOvertimeModule
<div style="margin-left: 10px;">



**`zh`** 粒子限制速度模块（只支持 CPU 粒子）。





•  **limitVelocityOvertimeModule**:
 ``null | LimitVelocityOvertimeModule`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:454](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L454)&nbsp;   [cocos/particle/particle-system.ts:464](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L464)&nbsp;


___


### material
<div style="margin-left: 10px;">




•  **material**:
 ``null | Material`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L158)&nbsp;   [cocos/core/components/renderable-component.ts:162](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L162)&nbsp;


___


### materials
<div style="margin-left: 10px;">



**`zh`** 模型材质。





•  **materials**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L91)&nbsp;   [cocos/core/components/renderable-component.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L98)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### prewarm
<div style="margin-left: 10px;">



**`zh`** 选中之后，粒子系统会以已播放完一轮之后的状态开始播放（仅当循环播放启用时有效）。





•  **prewarm**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:222](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L222)&nbsp;   [cocos/particle/particle-system.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L226)&nbsp;


___


### rotationOvertimeModule
<div style="margin-left: 10px;">



**`zh`** 粒子旋转模块。





•  **rotationOvertimeModule**:
 ``null | RotationOvertimeModule`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:478](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L478)&nbsp;   [cocos/particle/particle-system.ts:488](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L488)&nbsp;


___


### shapeModule
<div style="margin-left: 10px;">



**`zh`** 粒子发射器模块。





•  **shapeModule**:
 ``null | ShapeModule`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L357)&nbsp;   [cocos/particle/particle-system.ts:367](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L367)&nbsp;


___


### sharedMaterial
<div style="margin-left: 10px;">




•  **sharedMaterial**:
 ``null | Material`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L121)&nbsp;


___


### sharedMaterials
<div style="margin-left: 10px;">




•  **sharedMaterials**:
 ``any`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:313](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L313)&nbsp;   [cocos/particle/particle-system.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L319)&nbsp;


___


### simulationSpace
<div style="margin-left: 10px;">



**`zh`** 选择粒子系统所在的坐标系[[Space]]。<br>





•  **simulationSpace**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:240](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L240)&nbsp;   [cocos/particle/particle-system.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L244)&nbsp;


___


### sizeOvertimeModule
<div style="margin-left: 10px;">



**`zh`** 粒子大小模块。





•  **sizeOvertimeModule**:
 ``null | SizeOvertimeModule`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:381](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L381)&nbsp;   [cocos/particle/particle-system.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L391)&nbsp;


___


### textureAnimationModule
<div style="margin-left: 10px;">



**`zh`** 贴图动画模块。





•  **textureAnimationModule**:
 ``null | TextureAnimationModule`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:502](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L502)&nbsp;   [cocos/particle/particle-system.ts:512](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L512)&nbsp;


___


### time
<div style="margin-left: 10px;">




•  **time**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:978](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L978)&nbsp;


___


### trailModule
<div style="margin-left: 10px;">



**`zh`** 粒子轨迹模块。





•  **trailModule**:
 ``null | TrailModule`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:526](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L526)&nbsp;   [cocos/particle/particle-system.ts:537](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L537)&nbsp;


___


### uuid
<div style="margin-left: 10px;">



**`zh`** 组件的 uuid，用于编辑器。




**`example`**

```ts


import { log } from 'cc';
log(comp.uuid);


```




•  **uuid**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L89)&nbsp;


___


### velocityOvertimeModule
<div style="margin-left: 10px;">



**`zh`** 粒子速度模块。





•  **velocityOvertimeModule**:
 ``null | VelocityOvertimeModule`` 
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:405](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L405)&nbsp;   [cocos/particle/particle-system.ts:415](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L415)&nbsp;


___


### visibility
<div style="margin-left: 10px;">




•  **visibility**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L56)&nbsp;   [cocos/core/components/renderable-component.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L60)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ParticleSystem**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L583)&nbsp;


---

<!---->
## Methods

### addComponent

<div style="margin-left: 10px;">

▸   **addComponent**(`classConstructor: Constructor`)



**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.addComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |


##### Returns `void`

▸   **addComponent**(`className: string`)



**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。



**`example`**

```ts


const test = node.addComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L215)&nbsp;   [cocos/core/components/component.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L226)&nbsp;   [cocos/core/components/component.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L228)&nbsp;
___
### bindModule

<div style="margin-left: 10px;">

▸   **bindModule**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:653](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L653)&nbsp;
___
### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`


将所有粒子从粒子系统中清除。


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:734](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L734)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### getComponent

<div style="margin-left: 10px;">

▸   **getComponent**(`classConstructor: Constructor`)



**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。



**`example`**

```ts


import { Sprite } from 'cc';
// get sprite component.
var sprite = node.getComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |


##### Returns `void`

▸   **getComponent**(`className: string`)



**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。



**`example`**

```ts


// get custom test calss.
var test = node.getComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L247)&nbsp;   [cocos/core/components/component.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L263)&nbsp;   [cocos/core/components/component.ts:265](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L265)&nbsp;
___
### getComponentInChildren

<div style="margin-left: 10px;">

▸   **getComponentInChildren**(`classConstructor: Constructor`)



**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.getComponentInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved  |


##### Returns `void`

▸   **getComponentInChildren**(`className: string`)



**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。



**`example`**

```ts


var Test = node.getComponentInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L306)&nbsp;   [cocos/core/components/component.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L317)&nbsp;   [cocos/core/components/component.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L319)&nbsp;
___
### getComponents

<div style="margin-left: 10px;">

▸   **getComponents**(`classConstructor: Constructor`)



**`zh`** 返回节点上指定类型的所有组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponents(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |


##### Returns `void`

▸   **getComponents**(`className: string`)



**`zh`** 返回节点上指定类型的所有组件。



**`example`**

```ts


const tests = node.getComponents("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L279)&nbsp;   [cocos/core/components/component.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L290)&nbsp;   [cocos/core/components/component.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L292)&nbsp;
___
### getComponentsInChildren

<div style="margin-left: 10px;">

▸   **getComponentsInChildren**(`classConstructor: Constructor`)



**`zh`** 递归查找自身或所有子节点中指定类型的组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponentsInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |


##### Returns `void`

▸   **getComponentsInChildren**(`className: string`)



**`zh`** 递归查找自身或所有子节点中指定类型的组件。



**`example`**

```ts


const tests = node.getComponentsInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L333)&nbsp;   [cocos/core/components/component.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L344)&nbsp;   [cocos/core/components/component.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L346)&nbsp;
___
### getMaterial

<div style="margin-left: 10px;">

▸   **getMaterial**(`idx: number`)



**`zh`** 获取指定子模型的共享材质资源。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L129)&nbsp;
___
### getMaterialInstance

<div style="margin-left: 10px;">

▸   **getMaterialInstance**(`idx: number`)



**`zh`** 获取指定子模型的材质实例。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L173)&nbsp;
___
### getParticleCount

<div style="margin-left: 10px;">

▸   **getParticleCount**<`number`\> : `number`



**`zh`** 获取当前粒子数量





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:744](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L744)&nbsp;
___
### getRenderMaterial

<div style="margin-left: 10px;">

▸   **getRenderMaterial**(`index: number`)



**`zh`** 获取指定位置可供渲染的材质，如果有材质实例则使用材质实例，如果没有则使用材质资源




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L208)&nbsp;
___
### onFocusInEditor

<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLoad

<div style="margin-left: 10px;">

▸   **onLoad**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:611](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L611)&nbsp;
___
### onLostFocusInEditor

<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### pause

<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`


暂停播放粒子效果。


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:697](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L697)&nbsp;
___
### play

<div style="margin-left: 10px;">

▸   **play**<`void`\> : `void`


播放粒子效果。


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:671](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L671)&nbsp;
___
### resetInEditor

<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`



**`zh`** 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### schedule

<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: any, interval: number, repeat: number, delay: number`) : `void`



**`zh`** 
调度一个自定义的回调任务。<br/>
如果回调任务已调度，那么将不会重复调度它，只会更新时间间隔参数。



**`example`**

```ts


import { log } from 'cc';
this.schedule((dt) => void log(`time: ${dt}`), 1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |
| `interval` | `number` | The time interval between each invocation  |
| `repeat` | `number` | The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever  |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L419)&nbsp;
___
### scheduleOnce

<div style="margin-left: 10px;">

▸   **scheduleOnce**<`void`\>(`callback: any, delay: number`) : `void`



**`zh`** 调度一个只运行一次的回调任务，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。



**`method`** scheduleOnce



**`see`** [[schedule]]



**`example`**

```ts


import { log } from 'cc';
this.scheduleOnce((dt) => void log(`time: ${dt}`), 2);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L452)&nbsp;
___
### setCustomData2

<div style="margin-left: 10px;">

▸   **setCustomData2**<`void`\>(`x: any, y: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `any` | - |
| `y` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:755](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L755)&nbsp;
___
### setMaterial

<div style="margin-left: 10px;">

▸   **setMaterial**<`void`\>(`material: Material | null, index: number`) : `void`



**`zh`** 设置指定子模型的 sharedMaterial，如果对应位置有材质实例则会创建一个对应的材质实例。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `material` | `Material \| null` | - |
| `index` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L141)&nbsp;
___
### setMaterialInstance

<div style="margin-left: 10px;">

▸   **setMaterialInstance**<`void`\>(`index: number, matInst: Material | null`) : `void`



**`zh`** 获取指定子模型的材质实例。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |
| `matInst` | `Material \| null` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L192)&nbsp;
___
### stop

<div style="margin-left: 10px;">

▸   **stop**<`void`\> : `void`


停止播放粒子。


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/particle-system.ts:712](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/particle-system.ts#L712)&nbsp;
___
### unschedule

<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`



**`zh`** 取消调度一个自定义的回调任务。



**`example`**

```ts


this.unschedule(_callback);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback_fn` | `any` | The callback function of the task  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L465)&nbsp;
___
### unscheduleAllCallbacks

<div style="margin-left: 10px;">

▸   **unscheduleAllCallbacks**<`void`\> : `void`



**`zh`** 取消调度所有已调度的回调函数。



**`example`**

```ts


this.unscheduleAllCallbacks();


```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
___
<!---->




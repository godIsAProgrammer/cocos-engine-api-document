
## Class: TrailModule





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ colorFromParticle](#colorFromParticle)
- [ colorOverTrail](#colorOverTrail)
- [ colorOvertime](#colorOvertime)
- [ existWithParticles](#existWithParticles)
- [ lifeTime](#lifeTime)
- [ mode](#mode)
- [ textureMode](#textureMode)
- [ widthFromParticle](#widthFromParticle)
- [ widthRatio](#widthRatio)
- [ enable](#enable)
- [ minParticleDistance](#minParticleDistance)
- [ space](#space)

### Constructors

- [ constructor](#constructor)

### Methods

- [ animate](#animate)
- [ beforeRender](#beforeRender)
- [ clear](#clear)
- [ destroy](#destroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onInit](#onInit)
- [ play](#play)
- [ removeParticle](#removeParticle)
- [ update](#update)
- [ updateIA](#updateIA)
- [ updateMaterial](#updateMaterial)
- [ updateRenderData](#updateRenderData)
</div>

## Properties


### colorFromParticle
<div style="margin-left: 10px;">




•  **colorFromParticle**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L286)&nbsp;


___


### colorOverTrail
<div style="margin-left: 10px;">




•  **colorOverTrail**:
`GradientRange`  = `new GradientRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L292)&nbsp;


___


### colorOvertime
<div style="margin-left: 10px;">




•  **colorOvertime**:
`GradientRange`  = `new GradientRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L298)&nbsp;


___


### existWithParticles
<div style="margin-left: 10px;">
粒子本身是否存在。



粒子本身是否存在。

•  **existWithParticles**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:258](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L258)&nbsp;


___


### lifeTime
<div style="margin-left: 10px;">
轨迹存在的生命周期。



轨迹存在的生命周期。

•  **lifeTime**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:220](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L220)&nbsp;


___


### mode
<div style="margin-left: 10px;">
设定粒子生成轨迹的方式。



设定粒子生成轨迹的方式。

•  **mode**:
`number`  = `TrailMode.Particles`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:211](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L211)&nbsp;


___


### textureMode
<div style="margin-left: 10px;">
设定纹理填充方式。



设定纹理填充方式。

•  **textureMode**:
`number`  = `TextureMode.Stretch`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L267)&nbsp;


___


### widthFromParticle
<div style="margin-left: 10px;">




•  **widthFromParticle**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L272)&nbsp;


___


### widthRatio
<div style="margin-left: 10px;">
控制轨迹长度的曲线。



控制轨迹长度的曲线。

•  **widthRatio**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L281)&nbsp;


___


### enable
<div style="margin-left: 10px;">
是否启用。



是否启用。

•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L176)&nbsp;   [cocos/particle/renderer/trail.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L180)&nbsp;


___


### minParticleDistance
<div style="margin-left: 10px;">
每个轨迹粒子之间的最小间距。



每个轨迹粒子之间的最小间距。

•  **minParticleDistance**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L230)&nbsp;   [cocos/particle/renderer/trail.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L234)&nbsp;


___


### space
<div style="margin-left: 10px;">




•  **space**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L242)&nbsp;   [cocos/particle/renderer/trail.ts:246](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L246)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new TrailModule**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:326](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L326)&nbsp;


---

<!---->
## Methods

### animate

<div style="margin-left: 10px;">

▸   **animate**<`void`\>(`p: Particle, scaledDt: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Particle` | - |
| `scaledDt` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:440](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L440)&nbsp;
___
### beforeRender

<div style="margin-left: 10px;">

▸   **beforeRender**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:591](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L591)&nbsp;
___
### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:406](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L406)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:388](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L388)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:368](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L368)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:364](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L364)&nbsp;
___
### onInit

<div style="margin-left: 10px;">

▸   **onInit**<`void`\>(`ps: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ps` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L346)&nbsp;
___
### play

<div style="margin-left: 10px;">

▸   **play**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:400](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L400)&nbsp;
___
### removeParticle

<div style="margin-left: 10px;">

▸   **removeParticle**<`void`\>(`p: Particle`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Particle` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:497](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L497)&nbsp;
___
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:429](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L429)&nbsp;
___
### updateIA

<div style="margin-left: 10px;">

▸   **updateIA**<`void`\>(`count: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `count` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:579](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L579)&nbsp;
___
### updateMaterial

<div style="margin-left: 10px;">

▸   **updateMaterial**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:420](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L420)&nbsp;
___
### updateRenderData

<div style="margin-left: 10px;">

▸   **updateRenderData**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/trail.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/trail.ts#L506)&nbsp;
___
<!---->




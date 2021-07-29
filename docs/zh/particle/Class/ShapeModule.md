
## Class: ShapeModule





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ alignToDirection](#alignToDirection)
- [ arcMode](#arcMode)
- [ arcSpeed](#arcSpeed)
- [ arcSpread](#arcSpread)
- [ boxThickness](#boxThickness)
- [ emitFrom](#emitFrom)
- [ length](#length)
- [ radius](#radius)
- [ radiusThickness](#radiusThickness)
- [ randomDirectionAmount](#randomDirectionAmount)
- [ randomPositionAmount](#randomPositionAmount)
- [ sphericalDirectionAmount](#sphericalDirectionAmount)
- [ angle](#angle)
- [ arc](#arc)
- [ enable](#enable)
- [ position](#position)
- [ rotation](#rotation)
- [ scale](#scale)
- [ shapeType](#shapeType)

### Constructors

- [ constructor](#constructor)

### Methods

- [ emit](#emit)
- [ onInit](#onInit)
</div>

## Properties


### alignToDirection
<div style="margin-left: 10px;">



**`zh`** 根据粒子的初始方向决定粒子的移动方向。





•  **alignToDirection**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L177)&nbsp;


___


### arcMode
<div style="margin-left: 10px;">



**`zh`** 粒子在扇形范围内的发射方式 [[ArcMode]]。





•  **arcMode**:
`number`  = `ArcMode.Random`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L229)&nbsp;


___


### arcSpeed
<div style="margin-left: 10px;">



**`zh`** 粒子沿圆周发射的速度。





•  **arcSpeed**:
`CurveRange`  = `new CurveRange()`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:246](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L246)&nbsp;


___


### arcSpread
<div style="margin-left: 10px;">



**`zh`** 控制可能产生粒子的弧周围的离散间隔。





•  **arcSpread**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L237)&nbsp;


___


### boxThickness
<div style="margin-left: 10px;">



**`zh`** 粒子发射器发射位置（针对 Box 类型的粒子发射器）。





•  **boxThickness**:
`Vec3`  = `new Vec3(0, 0, 0)`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L263)&nbsp;


___


### emitFrom
<div style="margin-left: 10px;">



**`zh`** 粒子从发射器哪个部位发射 [[EmitLocation]]。





•  **emitFrom**:
`number`  = `EmitLocation.Volume`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L169)&nbsp;


___


### length
<div style="margin-left: 10px;">



**`zh`** 圆锥顶部截面距离底部的轴长<bg>。
决定圆锥发射器的高度。





•  **length**:
`number`  = `5`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L255)&nbsp;


___


### radius
<div style="margin-left: 10px;">



**`zh`** 粒子发射器半径。





•  **radius**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:209](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L209)&nbsp;


___


### radiusThickness
<div style="margin-left: 10px;">



**`zh`** 粒子发射器发射位置（对 Box 类型的发射器无效）：<bg>
- 0 表示从表面发射；
- 1 表示从中心发射；
- 0 ~ 1 之间表示在中心到表面之间发射。





•  **radiusThickness**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:220](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L220)&nbsp;


___


### randomDirectionAmount
<div style="margin-left: 10px;">



**`zh`** 粒子生成方向随机设定。





•  **randomDirectionAmount**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:185](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L185)&nbsp;


___


### randomPositionAmount
<div style="margin-left: 10px;">



**`zh`** 粒子生成位置随机设定（设定此值为非 0 会使粒子生成位置超出生成器大小范围）。





•  **randomPositionAmount**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L201)&nbsp;


___


### sphericalDirectionAmount
<div style="margin-left: 10px;">



**`zh`** 表示当前发射方向与当前位置到结点中心连线方向的插值。





•  **sphericalDirectionAmount**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L193)&nbsp;


___


### angle
<div style="margin-left: 10px;">



**`zh`** 圆锥的轴与母线的夹角<bg>。
决定圆锥发射器的开合程度。





•  **angle**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L104)&nbsp;   [cocos/particle/emitter/shape-module.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L108)&nbsp;


___


### arc
<div style="margin-left: 10px;">



**`zh`** 粒子发射器在一个扇形范围内发射。





•  **arc**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L90)&nbsp;   [cocos/particle/emitter/shape-module.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L94)&nbsp;


___


### enable
<div style="margin-left: 10px;">



**`zh`** 是否启用。





•  **enable**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L118)&nbsp;   [cocos/particle/emitter/shape-module.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L122)&nbsp;


___


### position
<div style="margin-left: 10px;">



**`zh`** 粒子发射器位置。





•  **position**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L51)&nbsp;   [cocos/particle/emitter/shape-module.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L54)&nbsp;


___


### rotation
<div style="margin-left: 10px;">



**`zh`** 粒子发射器旋转角度。





•  **rotation**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L64)&nbsp;   [cocos/particle/emitter/shape-module.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L67)&nbsp;


___


### scale
<div style="margin-left: 10px;">



**`zh`** 粒子发射器缩放比例。





•  **scale**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L77)&nbsp;   [cocos/particle/emitter/shape-module.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L80)&nbsp;


___


### shapeType
<div style="margin-left: 10px;">




•  **shapeType**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L136)&nbsp;   [cocos/particle/emitter/shape-module.ts:140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L140)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ShapeModule**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L284)&nbsp;


---

<!---->
## Methods

### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`p: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L300)&nbsp;
___
### onInit

<div style="margin-left: 10px;">

▸   **onInit**<`void`\>(`ps: ParticleSystem`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ps` | `ParticleSystem` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/emitter/shape-module.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/emitter/shape-module.ts#L294)&nbsp;
___
<!---->




## Interface: FrameBoneInfo

- [constructor](#constructor)
- [a](#a)
- [active](#active)
- [appliedValid](#appliedValid)
- [arotation](#arotation)
- [ascaleX](#ascaleX)
- [ascaleY](#ascaleY)
- [ashearX](#ashearX)
- [ashearY](#ashearY)
- [ax](#ax)
- [ay](#ay)
- [b](#b)
- [c](#c)
- [children](#children)
- [d](#d)
- [data](#data)
- [parent](#parent)
- [rotation](#rotation)
- [scaleX](#scaleX)
- [scaleY](#scaleY)
- [shearX](#shearX)
- [shearY](#shearY)
- [skeleton](#skeleton)
- [sorted](#sorted)
- [worldX](#worldX)
- [worldY](#worldY)
- [x](#x)
- [y](#y)
- [getWorldRotationX](#getWorldRotationX)
- [getWorldRotationY](#getWorldRotationY)
- [getWorldScaleX](#getWorldScaleX)
- [getWorldScaleY](#getWorldScaleY)
- [isActive](#isActive)
- [localToWorld](#localToWorld)
- [localToWorldRotation](#localToWorldRotation)
- [rotateWorld](#rotateWorld)
- [setToSetupPose](#setToSetupPose)
- [update](#update)
- [updateAppliedTransform](#updateAppliedTransform)
- [updateWorldTransform](#updateWorldTransform)
- [updateWorldTransformWith](#updateWorldTransformWith)
- [worldToLocal](#worldToLocal)
- [worldToLocalRotation](#worldToLocalRotation)

### Properties

#### constructor

<div style="margin-left: 10px;">


• **constructor**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:460](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L460)&nbsp;
___
#### a

<div style="margin-left: 10px;">


• **a**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L78)&nbsp;
___
#### active

<div style="margin-left: 10px;">


• **active**: ``boolean``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:460](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L460)&nbsp;
___
#### appliedValid

<div style="margin-left: 10px;">


• **appliedValid**: ``boolean``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L452)&nbsp;
___
#### arotation

<div style="margin-left: 10px;">


• **arotation**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L447)&nbsp;
___
#### ascaleX

<div style="margin-left: 10px;">


• **ascaleX**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:448](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L448)&nbsp;
___
#### ascaleY

<div style="margin-left: 10px;">


• **ascaleY**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:449](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L449)&nbsp;
___
#### ashearX

<div style="margin-left: 10px;">


• **ashearX**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:450](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L450)&nbsp;
___
#### ashearY

<div style="margin-left: 10px;">


• **ashearY**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L451)&nbsp;
___
#### ax

<div style="margin-left: 10px;">


• **ax**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:445](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L445)&nbsp;
___
#### ay

<div style="margin-left: 10px;">


• **ay**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:446](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L446)&nbsp;
___
#### b

<div style="margin-left: 10px;">


• **b**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L79)&nbsp;
___
#### c

<div style="margin-left: 10px;">


• **c**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L80)&nbsp;
___
#### children

<div style="margin-left: 10px;">


• **children**: ``array``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:437](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L437)&nbsp;
___
#### d

<div style="margin-left: 10px;">


• **d**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L81)&nbsp;
___
#### data

<div style="margin-left: 10px;">


• **data**: ``BoneData``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L434)&nbsp;
___
#### parent

<div style="margin-left: 10px;">


• **parent**: ``Bone``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:436](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L436)&nbsp;
___
#### rotation

<div style="margin-left: 10px;">


• **rotation**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:440](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L440)&nbsp;
___
#### scaleX

<div style="margin-left: 10px;">


• **scaleX**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:441](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L441)&nbsp;
___
#### scaleY

<div style="margin-left: 10px;">


• **scaleY**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:442](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L442)&nbsp;
___
#### shearX

<div style="margin-left: 10px;">


• **shearX**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L443)&nbsp;
___
#### shearY

<div style="margin-left: 10px;">


• **shearY**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:444](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L444)&nbsp;
___
#### skeleton

<div style="margin-left: 10px;">


• **skeleton**: ``Skeleton``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:435](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L435)&nbsp;
___
#### sorted

<div style="margin-left: 10px;">


• **sorted**: ``boolean``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:459](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L459)&nbsp;
___
#### worldX

<div style="margin-left: 10px;">


• **worldX**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L82)&nbsp;
___
#### worldY

<div style="margin-left: 10px;">


• **worldY**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L83)&nbsp;
___
#### x

<div style="margin-left: 10px;">


• **x**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:438](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L438)&nbsp;
___
#### y

<div style="margin-left: 10px;">


• **y**: ``number``

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:439](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L439)&nbsp;
___
#### getWorldRotationX

<div style="margin-left: 10px;">


• **getWorldRotationX**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:467](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L467)&nbsp;
___
#### getWorldRotationY

<div style="margin-left: 10px;">


• **getWorldRotationY**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L468)&nbsp;
___
#### getWorldScaleX

<div style="margin-left: 10px;">


• **getWorldScaleX**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:469](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L469)&nbsp;
___
#### getWorldScaleY

<div style="margin-left: 10px;">


• **getWorldScaleY**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:470](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L470)&nbsp;
___
#### isActive

<div style="margin-left: 10px;">


• **isActive**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:462](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L462)&nbsp;
___
#### localToWorld

<div style="margin-left: 10px;">


• **localToWorld**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L473)&nbsp;
___
#### localToWorldRotation

<div style="margin-left: 10px;">


• **localToWorldRotation**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:475](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L475)&nbsp;
___
#### rotateWorld

<div style="margin-left: 10px;">


• **rotateWorld**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:476](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L476)&nbsp;
___
#### setToSetupPose

<div style="margin-left: 10px;">


• **setToSetupPose**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:466](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L466)&nbsp;
___
#### update

<div style="margin-left: 10px;">


• **update**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:463](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L463)&nbsp;
___
#### updateAppliedTransform

<div style="margin-left: 10px;">


• **updateAppliedTransform**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:471](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L471)&nbsp;
___
#### updateWorldTransform

<div style="margin-left: 10px;">


• **updateWorldTransform**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:464](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L464)&nbsp;
___
#### updateWorldTransformWith

<div style="margin-left: 10px;">


• **updateWorldTransformWith**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L465)&nbsp;
___
#### worldToLocal

<div style="margin-left: 10px;">


• **worldToLocal**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:472](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L472)&nbsp;
___
#### worldToLocalRotation

<div style="margin-left: 10px;">


• **worldToLocalRotation**

</div>

##### Defined in &nbsp;   [cocos/spine/lib/spine-core.d.ts:474](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/lib/spine-core.d.ts#L474)&nbsp;
___

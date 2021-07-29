
## Class: Skeleton


`extend:`
[Renderable2D](docs/zh/ui/Class/Renderable2D.md)










**`zh`** 
Spine 骨骼动画 <br/>
<br/>
(Skeleton 具有对骨骼数据的引用并且存储了骨骼实例的状态，
它由当前的骨骼动作，slot 颜色，和可见的 slot attachments 组成。<br/>
多个 Skeleton 可以使用相同的骨骼数据，其中包括所有的动画，皮肤和 attachments。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  AnimationCacheMode](#AnimationCacheMode)
- [ **`static`**  Assembler](#Assembler)
- [ **`static`**  BlendState](#BlendState)
- [ **`static`**  PostAssembler](#PostAssembler)
- [ **`static`**  SpineSocket](#SpineSocket)
- [ **`static`**  system](#system)
- [ attachUtil](#attachUtil)
- [ enableBatch](#enableBatch)
- [ loop](#loop)
- [ node](#node)
- [ paused](#paused)
- [ stencilStage](#stencilStage)
- [ animation](#animation)
- [ blendHash](#blendHash)
- [ color](#color)
- [ customMaterial](#customMaterial)
- [ debugBones](#debugBones)
- [ debugMesh](#debugMesh)
- [ debugSlots](#debugSlots)
- [ defaultCacheMode](#defaultCacheMode)
- [ delegateSrc](#delegateSrc)
- [ dstBlendFactor](#dstBlendFactor)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ material](#material)
- [ materials](#materials)
- [ meshRenderDataArray](#meshRenderDataArray)
- [ name](#name)
- [ premultipliedAlpha](#premultipliedAlpha)
- [ renderData](#renderData)
- [ sharedMaterial](#sharedMaterial)
- [ sharedMaterials](#sharedMaterials)
- [ skeletonData](#skeletonData)
- [ socketNodes](#socketNodes)
- [ sockets](#sockets)
- [ srcBlendFactor](#srcBlendFactor)
- [ timeScale](#timeScale)
- [ useTint](#useTint)
- [ uuid](#uuid)
- [ visibility](#visibility)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addAnimation](#addAnimation)
- [ addComponent](#addComponent)
- [ clearTrack](#clearTrack)
- [ clearTracks](#clearTracks)
- [ destroy](#destroy)
- [ destroyRenderData](#destroyRenderData)
- [ disableRender](#disableRender)
- [ findAnimation](#findAnimation)
- [ findBone](#findBone)
- [ findSlot](#findSlot)
- [ getAttachment](#getAttachment)
- [ getBlendState](#getBlendState)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getCurrent](#getCurrent)
- [ getMaterial](#getMaterial)
- [ getMaterialForBlendAndTint](#getMaterialForBlendAndTint)
- [ getMaterialInstance](#getMaterialInstance)
- [ getRenderMaterial](#getRenderMaterial)
- [ getState](#getState)
- [ getTextureAtlas](#getTextureAtlas)
- [ invalidAnimationCache](#invalidAnimationCache)
- [ isAnimationCached](#isAnimationCached)
- [ markForUpdateRenderData](#markForUpdateRenderData)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ onRestore](#onRestore)
- [ postUpdateAssembler](#postUpdateAssembler)
- [ querySockets](#querySockets)
- [ requestMeshRenderData](#requestMeshRenderData)
- [ requestRenderData](#requestRenderData)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setAnimation](#setAnimation)
- [ setAnimationCacheMode](#setAnimationCacheMode)
- [ setAnimationStateData](#setAnimationStateData)
- [ setAttachment](#setAttachment)
- [ setBonesToSetupPose](#setBonesToSetupPose)
- [ setCompleteListener](#setCompleteListener)
- [ setDisposeListener](#setDisposeListener)
- [ setEndListener](#setEndListener)
- [ setEventListener](#setEventListener)
- [ setInterruptListener](#setInterruptListener)
- [ setMaterial](#setMaterial)
- [ setMaterialInstance](#setMaterialInstance)
- [ setMix](#setMix)
- [ setSkeletonData](#setSkeletonData)
- [ setSkin](#setSkin)
- [ setSlotsRange](#setSlotsRange)
- [ setSlotsToSetupPose](#setSlotsToSetupPose)
- [ setStartListener](#setStartListener)
- [ setToSetupPose](#setToSetupPose)
- [ setTrackCompleteListener](#setTrackCompleteListener)
- [ setTrackDisposeListener](#setTrackDisposeListener)
- [ setTrackEndListener](#setTrackEndListener)
- [ setTrackEventListener](#setTrackEventListener)
- [ setTrackInterruptListener](#setTrackInterruptListener)
- [ setTrackStartListener](#setTrackStartListener)
- [ setVertexEffectDelegate](#setVertexEffectDelegate)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ update](#update)
- [ updateAnimationCache](#updateAnimationCache)
- [ updateAssembler](#updateAssembler)
- [ updateBlendHash](#updateBlendHash)
</div>

## Properties


### AnimationCacheMode
<div style="margin-left: 10px;">




• `static` **AnimationCacheMode**:
`AnimationCacheMode`  = `AnimationCacheMode`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L135)&nbsp;


___


### Assembler
<div style="margin-left: 10px;">



**`zh`** 渲染数据组装器





• `static` **Assembler**:
`IAssemblerManager | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L286)&nbsp;


___


### BlendState
<div style="margin-left: 10px;">



**`zh`** 混合模式枚举类型



**`see`** [[BlendFactor]]





• `static` **BlendState**:
`BlendFactor`  = `BlendFactor`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L281)&nbsp;


___


### PostAssembler
<div style="margin-left: 10px;">



**`zh`** 后置渲染数据组装器





• `static` **PostAssembler**:
`IAssemblerManager | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:291](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L291)&nbsp;


___


### SpineSocket
<div style="margin-left: 10px;">




• `static` **SpineSocket**:
`SpineSocket`  = `SpineSocket`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L133)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### attachUtil
<div style="margin-left: 10px;">




•  **attachUtil**:
`AttachUtil` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:478](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L478)&nbsp;


___


### enableBatch
<div style="margin-left: 10px;">



**`zh`** 开启合批，如果渲染大量相同纹理，且结构简单的骨骼动画，开启合批可以降低drawcall，否则请不要开启，cpu消耗会上升。





•  **enableBatch**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:463](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L463)&nbsp;


___


### loop
<div style="margin-left: 10px;">



**`zh`** 是否循环播放当前骨骼动画。





•  **loop**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L327)&nbsp;


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


### paused
<div style="margin-left: 10px;">



**`zh`** 该骨骼动画是否暂停。



**`property`** paused




**`default`** false





•  **paused**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L159)&nbsp;


___


### stencilStage
<div style="margin-left: 10px;">



**`zh`** 组件模板缓冲状态 (注意：请不要直接修改它的值)





•  **stencilStage**:
`Stage`  = `Stage.DISABLED`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L274)&nbsp;


___


### animation
<div style="margin-left: 10px;">



**`zh`** 当前播放的动画名称。



**`property`** {String} animation





•  **animation**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L196)&nbsp;   [cocos/spine/skeleton.ts:203](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L203)&nbsp;


___


### blendHash
<div style="margin-left: 10px;">




•  **blendHash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:314](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L314)&nbsp;


___


### color
<div style="margin-left: 10px;">



**`zh`** 渲染颜色，一般情况下会和贴图颜色相乘。





•  **color**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L244)&nbsp;   [cocos/2d/framework/renderable-2d.ts:248](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L248)&nbsp;


___


### customMaterial
<div style="margin-left: 10px;">




•  **customMaterial**:
 ``null | Material`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L142)&nbsp;   [cocos/spine/skeleton.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L145)&nbsp;


___


### debugBones
<div style="margin-left: 10px;">



**`zh`** 是否显示 bone 的 debug 信息。





•  **debugBones**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L385)&nbsp;   [cocos/spine/skeleton.ts:386](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L386)&nbsp;


___


### debugMesh
<div style="margin-left: 10px;">



**`zh`** 是否显示 mesh 的 debug 信息。





•  **debugMesh**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:400](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L400)&nbsp;   [cocos/spine/skeleton.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L401)&nbsp;


___


### debugSlots
<div style="margin-left: 10px;">



**`zh`** 是否显示 slot 的 debug 信息。





•  **debugSlots**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L370)&nbsp;   [cocos/spine/skeleton.ts:371](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L371)&nbsp;


___


### defaultCacheMode
<div style="margin-left: 10px;">




•  **defaultCacheMode**:
 ``AnimationCacheMode`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:313](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L313)&nbsp;   [cocos/spine/skeleton.ts:316](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L316)&nbsp;


___


### delegateSrc
<div style="margin-left: 10px;">




•  **delegateSrc**:
 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L266)&nbsp;


___


### dstBlendFactor
<div style="margin-left: 10px;">



**`zh`** 指定目标的混合模式，这会克隆一个新的材质对象，注意这带来的性能和内存损耗。



**`example`**

```ts


sprite.dstBlendFactor = BlendFactor.ONE_MINUS_SRC_ALPHA;

```



**`deprecated`** 





•  **dstBlendFactor**:
 ``BlendFactor`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:218](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L218)&nbsp;   [cocos/2d/framework/renderable-2d.ts:225](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L225)&nbsp;


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


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


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


### meshRenderDataArray
<div style="margin-left: 10px;">




•  **meshRenderDataArray**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L136)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### premultipliedAlpha
<div style="margin-left: 10px;">




•  **premultipliedAlpha**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:341](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L341)&nbsp;   [cocos/spine/skeleton.ts:342](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L342)&nbsp;


___


### renderData
<div style="margin-left: 10px;">




•  **renderData**:
 ``null | RenderData`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:261](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L261)&nbsp;


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
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L131)&nbsp;   [cocos/2d/framework/renderable-2d.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L136)&nbsp;


___


### skeletonData
<div style="margin-left: 10px;">
dstBlendFactor



**`zh`** 
骨骼数据包含了骨骼信息（绑定骨骼动作，slots，渲染顺序，
attachments，皮肤等等）和动画但不持有任何状态。<br/>
多个 Skeleton 可以共用相同的骨骼数据。



**`property`** {sp.SkeletonData} skeletonData




dstBlendFactor

•  **skeletonData**:
 ``SkeletonData`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L174)&nbsp;   [cocos/spine/skeleton.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L177)&nbsp;


___


### socketNodes
<div style="margin-left: 10px;">




•  **socketNodes**:
 ``Map`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:445](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L445)&nbsp;


___


### sockets
<div style="margin-left: 10px;">



**`zh`** 
当前动画组件维护的挂点数组。要挂载自定义节点到受动画驱动的骨骼上，必须先在此注册挂点。





•  **sockets**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:432](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L432)&nbsp;   [cocos/spine/skeleton.ts:436](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L436)&nbsp;


___


### srcBlendFactor
<div style="margin-left: 10px;">



**`zh`** 指定源的混合模式，这会克隆一个新的材质对象，注意这带来的性能和内存损耗。



**`example`**

```ts


sprite.srcBlendFactor = BlendFactor.ONE;

```



**`deprecated`** 





•  **srcBlendFactor**:
 ``BlendFactor`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L189)&nbsp;   [cocos/2d/framework/renderable-2d.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L196)&nbsp;


___


### timeScale
<div style="margin-left: 10px;">




•  **timeScale**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L357)&nbsp;   [cocos/spine/skeleton.ts:358](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L358)&nbsp;


___


### useTint
<div style="margin-left: 10px;">



**`zh`** 是否启用染色效果。





•  **useTint**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:415](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L415)&nbsp;   [cocos/spine/skeleton.ts:416](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L416)&nbsp;


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

• **new Skeleton**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:550](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L550)&nbsp;


---

<!---->
## Methods

### addAnimation

<div style="margin-left: 10px;">

▸   **addAnimation**(`trackIndex: number, name: string, loop: boolean, delay: undefined | number`)



**`zh`** 添加一个动画到动画队列尾部，还可以延迟指定的秒数。<br>
返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry 对象。



**`method`** addAnimation



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `trackIndex` | `number` | - |
| `name` | `string` | - |
| `loop` | `boolean` | - |
| `delay` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1015](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1015)&nbsp;
___
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
### clearTrack

<div style="margin-left: 10px;">

▸   **clearTrack**<`void`\>(`trackIndex: number`) : `void`



**`zh`** 清除出指定 track 的动画状态。



**`method`** clearTrack



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `trackIndex` | `number` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1084](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1084)&nbsp;
___
### clearTracks

<div style="margin-left: 10px;">

▸   **clearTracks**<`void`\> : `void`



**`zh`** 清除所有 track 的动画状态。



**`method`** clearTracks





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1070](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1070)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### destroyRenderData

<div style="margin-left: 10px;">

▸   **destroyRenderData**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1269](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1269)&nbsp;
___
### disableRender

<div style="margin-left: 10px;">

▸   **disableRender**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:571](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L571)&nbsp;
___
### findAnimation

<div style="margin-left: 10px;">

▸   **findAnimation**(`name: string`)



**`zh`** 查找指定名称的动画



**`method`** findAnimation



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1040](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1040)&nbsp;
___
### findBone

<div style="margin-left: 10px;">

▸   **findBone**(`boneName: string`)



**`zh`** 
通过名称查找 bone。
这里对每个 bone 的名称进行了对比。<br>
返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Bone 对象。




**`method`** findBone



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `boneName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:841](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L841)&nbsp;
___
### findSlot

<div style="margin-left: 10px;">

▸   **findSlot**(`slotName: string`)



**`zh`** 
通过名称查找 slot。这里对每个 slot 的名称进行了比较。<br>
返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Slot 对象。




**`method`** findSlot



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `slotName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:860](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L860)&nbsp;
___
### getAttachment

<div style="margin-left: 10px;">

▸   **getAttachment**(`slotName: string, attachmentName: string`)



**`zh`** 
通过 slot 和 attachment 的名称获取 attachment。Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。<br>
返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Attachment 对象。




**`method`** getAttachment



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `slotName` | `string` | - |
| `attachmentName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:903](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L903)&nbsp;
___
### getBlendState

<div style="margin-left: 10px;">

▸   **getBlendState**<`BlendState`\> : `BlendState`




##### Returns `BlendState`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:494](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L494)&nbsp;
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
### getCurrent

<div style="margin-left: 10px;">

▸   **getCurrent**(`trackIndex: number`)



**`zh`** 通过 track 索引获取 TrackEntry。<br>
返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry 对象。



**`method`** getCurrent



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `trackIndex` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1056](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1056)&nbsp;
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
### getMaterialForBlendAndTint

<div style="margin-left: 10px;">

▸   **getMaterialForBlendAndTint**<`MaterialInstance`\>(`src: BlendFactor, dst: BlendFactor, type: SpineMaterialType`) : `MaterialInstance`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `src` | `BlendFactor` | - |
| `dst` | `BlendFactor` | - |
| `type` | `SpineMaterialType` | - |


##### Returns `MaterialInstance`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1276)&nbsp;
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
### getState

<div style="margin-left: 10px;">

▸   **getState**



**`zh`** 获取动画状态



**`method`** getState




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1238](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1238)&nbsp;
___
### getTextureAtlas

<div style="margin-left: 10px;">

▸   **getTextureAtlas**<`TextureRegion`\>(`regionAttachment: RegionAttachment | BoundingBoxAttachment`) : `TextureRegion`



**`method`** getTextureAtlas


Return the renderer of attachment.

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `regionAttachment` | `RegionAttachment \| BoundingBoxAttachment` | - |


##### Returns `TextureRegion`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:934](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L934)&nbsp;
___
### invalidAnimationCache

<div style="margin-left: 10px;">

▸   **invalidAnimationCache**<`void`\> : `void`



**`zh`** 
使动画缓存失效，之后会在每帧重新计算。



**`method`** invalidAnimationCache





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:820](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L820)&nbsp;
___
### isAnimationCached

<div style="margin-left: 10px;">

▸   **isAnimationCached**<`boolean`\> : `boolean`



**`zh`** 当前是否处于缓存模式。





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:705](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L705)&nbsp;
___
### markForUpdateRenderData

<div style="margin-left: 10px;">

▸   **markForUpdateRenderData**<`void`\>(`enable: boolean`) : `void`



**`zh`** 标记当前组件的渲染数据为已修改状态，这样渲染数据才会重新计算。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enable` | `boolean` | Marked necessary to update or not  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:372](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L372)&nbsp;
___
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1251](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1251)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1247)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1242)&nbsp;
___
### onFocusInEditor

<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLostFocusInEditor

<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### onRestore

<div style="margin-left: 10px;">

▸   **onRestore**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:340](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L340)&nbsp;
___
### postUpdateAssembler

<div style="margin-left: 10px;">

▸   **postUpdateAssembler**<`void`\>(`render: Batcher2D`) : `void`



**`zh`** 后置渲染数据组装程序，它会在所有子节点的渲染数据组装完成后被调用。
它可能会组装额外的渲染数据到顶点数据缓冲区，也可能只是重置一些渲染状态。
注意：不要手动调用该函数，除非你理解整个流程。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `render` | `Batcher2D` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L434)&nbsp;
___
### querySockets

<div style="margin-left: 10px;">

▸   **querySockets**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1342](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1342)&nbsp;
___
### requestMeshRenderData

<div style="margin-left: 10px;">

▸   **requestMeshRenderData**<`SkeletonMeshData`\>(`vertexFloatCnt: number`) : `SkeletonMeshData`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `vertexFloatCnt` | `number` | - |


##### Returns `SkeletonMeshData`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1257](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1257)&nbsp;
___
### requestRenderData

<div style="margin-left: 10px;">

▸   **requestRenderData**<`RenderData`\> : `RenderData`



**`zh`** 请求新的渲染数据对象。




##### Returns `RenderData`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L391)&nbsp;
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
### setAnimation

<div style="margin-left: 10px;">

▸   **setAnimation**(`trackIndex: number, name: string, loop: boolean`)



**`zh`** 设置当前动画。队列中的任何的动画将被清除。<br>
返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry 对象。



**`method`** setAnimation



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `trackIndex` | `number` | - |
| `name` | `string` | - |
| `loop` | `boolean` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:966](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L966)&nbsp;
___
### setAnimationCacheMode

<div style="margin-left: 10px;">

▸   **setAnimationCacheMode**<`void`\>(`cacheMode: AnimationCacheMode`) : `void`



**`zh`** 
若想切换渲染模式，最好在设置'dragonAsset'之前，先设置好渲染模式，否则有运行时开销。
若在编辑中设置渲染模式，则无需担心设置次序的问题。




**`example`**

```ts

skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cacheMode` | `AnimationCacheMode` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:691](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L691)&nbsp;
___
### setAnimationStateData

<div style="margin-left: 10px;">

▸   **setAnimationStateData**<`void`\>(`stateData: any`) : `void`



**`zh`** 设置动画状态数据。<br>
参数是 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.AnimationStateData。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `stateData` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:639](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L639)&nbsp;
___
### setAttachment

<div style="margin-left: 10px;">

▸   **setAttachment**<`void`\>(`slotName: string, attachmentName: string`) : `void`



**`zh`** 
通过 slot 和 attachment 的名字来设置 attachment。
Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。



**`method`** setAttachment



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `slotName` | `string` | - |
| `attachmentName` | `string` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:921](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L921)&nbsp;
___
### setBonesToSetupPose

<div style="margin-left: 10px;">

▸   **setBonesToSetupPose**<`void`\> : `void`



**`zh`** 
设置 bone 到起始动作
使用 SkeletonData 中的 BoneData 列表中的值。



**`method`** setBonesToSetupPose





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:773](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L773)&nbsp;
___
### setCompleteListener

<div style="margin-left: 10px;">

▸   **setCompleteListener**<`void`\>(`listener: TrackListener`) : `void`



**`zh`** 用来设置动画播放一次循环结束后的事件监听。



**`method`** setCompleteListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `TrackListener` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1145)&nbsp;
___
### setDisposeListener

<div style="margin-left: 10px;">

▸   **setDisposeListener**<`void`\>(`listener: TrackListener`) : `void`



**`zh`** 用来设置动画将被销毁的事件监听。



**`method`** setDisposeListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `TrackListener` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1134)&nbsp;
___
### setEndListener

<div style="margin-left: 10px;">

▸   **setEndListener**<`void`\>(`listener: TrackListener`) : `void`



**`zh`** 用来设置动画播放完后的事件监听。



**`method`** setEndListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `TrackListener` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1123)&nbsp;
___
### setEventListener

<div style="margin-left: 10px;">

▸   **setEventListener**<`void`\>(`listener: TrackListener2`) : `void`



**`zh`** 用来设置动画播放过程中帧事件的监听。



**`method`** setEventListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `TrackListener2` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1156)&nbsp;
___
### setInterruptListener

<div style="margin-left: 10px;">

▸   **setInterruptListener**<`void`\>(`listener: TrackListener`) : `void`



**`zh`** 用来设置动画被打断的事件监听。



**`method`** setInterruptListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `TrackListener` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1112)&nbsp;
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
### setMix

<div style="margin-left: 10px;">

▸   **setMix**<`void`\>(`fromAnimation: string, toAnimation: string, duration: number`) : `void`



**`zh`** 为所有关键帧设定混合及混合时间（从当前值开始差值）。



**`method`** setMix



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fromAnimation` | `string` | - |
| `toAnimation` | `string` | - |
| `duration` | `number` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:949](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L949)&nbsp;
___
### setSkeletonData

<div style="margin-left: 10px;">

▸   **setSkeletonData**<`void`\>(`skeletonData: SkeletonData`) : `void`



**`zh`** 
设置底层运行时用到的 SkeletonData。<br>
这个接口有别于 `skeletonData` 属性，这个接口传入的是 Spine runtime 提供的原始数据，而 skeletonData 的类型是 Creator 提供的资源类型。



**`method`** setSkeletonData



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `skeletonData` | `SkeletonData` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:588](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L588)&nbsp;
___
### setSkin

<div style="margin-left: 10px;">

▸   **setSkin**<`void`\>(`skinName: string`) : `void`



**`zh`** 
按名称查找皮肤，激活该皮肤。这里对每个皮肤的名称进行了比较。<br>
注意：设置皮肤不会改变 attachment 的可见性。<br>
返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Skin 对象。




**`method`** setSkin



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `skinName` | `string` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:881](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L881)&nbsp;
___
### setSlotsRange

<div style="margin-left: 10px;">

▸   **setSlotsRange**<`void`\>(`startSlotIndex: any, endSlotIndex: any`) : `void`



**`zh`** 设置骨骼插槽可视范围。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `startSlotIndex` | `any` | - |
| `endSlotIndex` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:624](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L624)&nbsp;
___
### setSlotsToSetupPose

<div style="margin-left: 10px;">

▸   **setSlotsToSetupPose**<`void`\> : `void`



**`zh`** 
设置 slot 到起始动作。
使用 SkeletonData 中的 SlotData 列表中的值。



**`method`** setSlotsToSetupPose





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:788](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L788)&nbsp;
___
### setStartListener

<div style="margin-left: 10px;">

▸   **setStartListener**<`void`\>(`listener: TrackListener`) : `void`



**`zh`** 用来设置开始播放动画的事件监听。



**`method`** setStartListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `TrackListener` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1101)&nbsp;
___
### setToSetupPose

<div style="margin-left: 10px;">

▸   **setToSetupPose**<`void`\> : `void`



**`zh`** 还原到起始动作



**`method`** setToSetupPose





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:758](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L758)&nbsp;
___
### setTrackCompleteListener

<div style="margin-left: 10px;">

▸   **setTrackCompleteListener**<`void`\>(`entry: TrackEntry, listener: TrackListener2`) : `void`



**`zh`** 用来为指定的 TrackEntry 设置动画一次循环播放结束的事件监听。



**`method`** setTrackCompleteListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `TrackEntry` | - |
| `listener` | `TrackListener2` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1214)&nbsp;
___
### setTrackDisposeListener

<div style="margin-left: 10px;">

▸   **setTrackDisposeListener**<`void`\>(`entry: TrackEntry, listener: TrackListener`) : `void`



**`zh`** 用来为指定的 TrackEntry 设置动画即将被销毁的事件监听。



**`method`** setTrackDisposeListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `TrackEntry` | - |
| `listener` | `TrackListener` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1201)&nbsp;
___
### setTrackEndListener

<div style="margin-left: 10px;">

▸   **setTrackEndListener**<`void`\>(`entry: TrackEntry, listener: TrackListener`) : `void`



**`zh`** 用来为指定的 TrackEntry 设置动画播放结束的事件监听。



**`method`** setTrackEndListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `TrackEntry` | - |
| `listener` | `TrackListener` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1190)&nbsp;
___
### setTrackEventListener

<div style="margin-left: 10px;">

▸   **setTrackEventListener**<`void`\>(`entry: TrackEntry, listener: TrackListener | TrackListener2`) : `void`



**`zh`** 用来为指定的 TrackEntry 设置动画帧事件的监听。



**`method`** setTrackEventListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `TrackEntry` | - |
| `listener` | `TrackListener \| TrackListener2` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1228)&nbsp;
___
### setTrackInterruptListener

<div style="margin-left: 10px;">

▸   **setTrackInterruptListener**<`void`\>(`entry: TrackEntry, listener: TrackListener`) : `void`



**`zh`** 用来为指定的 TrackEntry 设置动画被打断的事件监听。



**`method`** setTrackInterruptListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `TrackEntry` | - |
| `listener` | `TrackListener` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1179)&nbsp;
___
### setTrackStartListener

<div style="margin-left: 10px;">

▸   **setTrackStartListener**<`void`\>(`entry: TrackEntry, listener: TrackListener`) : `void`



**`zh`** 用来为指定的 TrackEntry 设置动画开始播放的事件监听。



**`method`** setTrackStartListener



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `TrackEntry` | - |
| `listener` | `TrackListener` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:1168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L1168)&nbsp;
___
### setVertexEffectDelegate

<div style="margin-left: 10px;">

▸   **setVertexEffectDelegate**<`void`\>(`effectDelegate: VertexEffectDelegate | null | undefined`) : `void`



**`zh`** 设置顶点动画代理




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `effectDelegate` | `VertexEffectDelegate \| null \| undefined` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:749](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L749)&nbsp;
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
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:710](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L710)&nbsp;
___
### updateAnimationCache

<div style="margin-left: 10px;">

▸   **updateAnimationCache**<`void`\>(`animName: any`) : `void`



**`zh`** 
更新某个动画缓存, 预计算动画中所有帧数据，由于在单帧计算所有数据，所以较消耗性能。
若想更新缓存，可使用 invalidAnimationCache 方法，具有较高性能。



**`method`** updateAnimationCache



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `animName` | `any` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:805](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L805)&nbsp;
___
### updateAssembler

<div style="margin-left: 10px;">

▸   **updateAssembler**<`void`\>(`render: Batcher2D`) : `void`



**`zh`** 渲染数据组装程序，这个方法会在所有子节点数据组装之前更新并组装当前组件的渲染数据到 UI 的顶点数据缓冲区中。
一般在 UI 渲染流程中调用，用于组装所有的渲染数据到顶点数据缓冲区。
注意：不要手动调用该函数，除非你理解整个流程。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `render` | `Batcher2D` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L418)&nbsp;
___
### updateBlendHash

<div style="margin-left: 10px;">

▸   **updateBlendHash**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L318)&nbsp;
___
<!---->




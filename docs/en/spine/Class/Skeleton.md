
## Class: Skeleton


`extend:`
[Renderable2D](docs/en/ui/Class/Renderable2D.md)










**`en`** 
The skeleton of Spine <br/>
<br/>
(Skeleton has a reference to a SkeletonData and stores the state for skeleton instance,
which consists of the current pose's bone SRT, slot colors, and which slot attachments are visible. <br/>
Multiple skeletons can use the same SkeletonData which includes all animations, skins, and attachments.) <br/>


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



**`en`** The render data assembler




• `static` **Assembler**:
`IAssemblerManager | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L286)&nbsp;


___


### BlendState
<div style="margin-left: 10px;">



**`en`** The blend factor enums



**`see`** [[BlendFactor]]





• `static` **BlendState**:
`BlendFactor`  = `BlendFactor`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L281)&nbsp;


___


### PostAssembler
<div style="margin-left: 10px;">



**`en`** The post render data assembler




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



**`en`** Enabled batch model, if skeleton is complex, do not enable batch, or will lower performance.




•  **enableBatch**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:463](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L463)&nbsp;


___


### loop
<div style="margin-left: 10px;">



**`en`** TODO




•  **loop**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L327)&nbsp;


___


### node
<div style="margin-left: 10px;">



**`en`** The node this component is attached to. A component is always attached to a node.



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



**`en`** The skeletal animation is paused?



**`property`** paused




**`default`** false





•  **paused**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L159)&nbsp;


___


### stencilStage
<div style="margin-left: 10px;">



**`en`** The component stencil stage (please do not any modification directly on this object)




•  **stencilStage**:
`Stage`  = `Stage.DISABLED`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L274)&nbsp;


___


### animation
<div style="margin-left: 10px;">



**`en`** The name of current playing animation.



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



**`en`** Main color for rendering, it normally multiplies with texture color.




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



**`en`** Indicates whether open debug bones.




•  **debugBones**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L385)&nbsp;   [cocos/spine/skeleton.ts:386](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L386)&nbsp;


___


### debugMesh
<div style="margin-left: 10px;">



**`en`** Indicates whether open debug mesh.




•  **debugMesh**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:400](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L400)&nbsp;   [cocos/spine/skeleton.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L401)&nbsp;


___


### debugSlots
<div style="margin-left: 10px;">



**`en`** Indicates whether open debug slots.




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



**`en`** Specifies the destination blend mode.



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



**`en`** Indicates whether this component is enabled or not.



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



**`en`** Indicates whether this component is enabled and its node is also active in the hierarchy.




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



**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isValid
<div style="margin-left: 10px;">



**`en`** 
Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.




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



**`en`** The materials of the model.




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



**`en`** 
The skeleton data contains the skeleton information (bind pose bones, slots, draw order,
attachments, skins, etc) and animations but does not hold any state.<br/>
Multiple skeletons can share the same skeleton data.



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



**`en`** 
The bone sockets this animation component maintains.<br>
Sockets have to be registered here before attaching custom nodes to animated bones.




•  **sockets**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:432](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L432)&nbsp;   [cocos/spine/skeleton.ts:436](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L436)&nbsp;


___


### srcBlendFactor
<div style="margin-left: 10px;">



**`en`** Specifies the source blend mode, it will clone a new material object.



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



**`en`** Enabled two color tint.




•  **useTint**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:415](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L415)&nbsp;   [cocos/spine/skeleton.ts:416](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L416)&nbsp;


___


### uuid
<div style="margin-left: 10px;">



**`en`** The uuid for editor.




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



**`en`** Adds an animation to be played delay seconds after the current or last queued animation.<br>
Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry object.



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



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



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



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



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



**`en`** Clears track of animation state by trackIndex.



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



**`en`** Clears all tracks of animation state.



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



**`en`** Find animation with specified name.



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



**`en`** 
Finds a bone by name.
This does a string comparison for every bone.<br>
Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Bone object.



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



**`en`** 
Finds a slot by name. This does a string comparison for every slot.<br>
Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Slot object.



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



**`en`** 
Returns the attachment for the slot and attachment name.
The skeleton looks first in its skin, then in the skeleton data’s default skin.<br>
Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Attachment object.



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



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.



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



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.



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



**`en`** Returns the component of supplied type in any of its children using depth first search.



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



**`en`** Returns the component of supplied type in any of its children using depth first search.



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



**`en`** Returns all components of supplied type in the node.



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



**`en`** Returns all components of supplied type in the node.



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



**`en`** Returns all components of supplied type in self or any of its children.



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



**`en`** Returns all components of supplied type in self or any of its children.



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



**`en`** Returns track entry by trackIndex.<br>
Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry object.



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



**`en`** Get the shared material asset of the specified sub-model.



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



**`en`** Get the material instance of the specified sub-model.



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



**`en`** Get the actual rendering material of the specified sub-model.
(material instance if there is one, or the shared material asset)



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



**`en`** Get the animation state object



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



**`en`** 
Invalidates the animation cache, which is then recomputed on each frame..



**`method`** invalidAnimationCache





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:820](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L820)&nbsp;
___
### isAnimationCached

<div style="margin-left: 10px;">

▸   **isAnimationCached**<`boolean`\> : `boolean`



**`en`** Whether in cached mode.




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:705](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L705)&nbsp;
___
### markForUpdateRenderData

<div style="margin-left: 10px;">

▸   **markForUpdateRenderData**<`void`\>(`enable: boolean`) : `void`



**`en`** Marks the render data of the current component as modified so that the render data is recalculated.



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



**`en`** Post render data submission procedure, it's executed after assembler updated for all children.
It may assemble some extra render data to the geometry buffers, or it may only change some render states.
Don't call it unless you know what you are doing.



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



**`en`** Request new render data object.




##### Returns `RenderData`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L391)&nbsp;
___
### resetInEditor

<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`



**`en`** Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
This function is only called in editor.<br/>




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### schedule

<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: any, interval: number, repeat: number, delay: number`) : `void`



**`en`** 
Schedules a custom task.<br/>
If the task is already scheduled, then the interval parameter will be updated without scheduling it again.



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



**`en`** Schedules a task that runs only once, with a delay of 0 or larger.



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



**`en`** Set the current animation. Any queued animations are cleared.<br>
Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry object.



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



**`en`** 
It's best to set cache mode before set property 'dragonAsset', or will waste some cpu time.
If set the mode in editor, then no need to worry about order problem.



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



**`en`** Sets animation state data.<br>
The parameter type is {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.AnimationStateData.



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



**`en`** 
Sets the attachment for the slot and attachment name.
The skeleton looks first in its skin, then in the skeleton data’s default skin.



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



**`en`** 
Sets the bones to the setup pose,
using the values from the `BoneData` list in the `SkeletonData`.



**`method`** setBonesToSetupPose





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:773](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L773)&nbsp;
___
### setCompleteListener

<div style="margin-left: 10px;">

▸   **setCompleteListener**<`void`\>(`listener: TrackListener`) : `void`



**`en`** Set the complete event listener.



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



**`en`** Set the dispose event listener.



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



**`en`** Set the end event listener.



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



**`en`** Set the animation event listener.



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



**`en`** Set the interrupt event listener.



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



**`en`** Set the shared material asset of the specified sub-model,
new material instance will be created automatically if the sub-model is already using one.



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



**`en`** Set the material instance of the specified sub-model.



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



**`en`** 
Mix applies all keyframe values,
interpolated for the specified time and mixed with the current values.



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



**`en`** 
Sets runtime skeleton data to sp.Skeleton.<br>
This method is different from the `skeletonData` property. This method is passed in the raw data provided by the
 Spine runtime, and the skeletonData type is the asset type provided by Creator.



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



**`en`** 
Finds a skin by name and makes it the active skin.
This does a string comparison for every skin.<br>
Note that setting the skin does not change which attachments are visible.<br>
Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Skin object.



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



**`en`** Sets slots visible range.



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



**`en`** 
Sets the slots to the setup pose,
using the values from the `SlotData` list in the `SkeletonData`.



**`method`** setSlotsToSetupPose





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:788](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L788)&nbsp;
___
### setStartListener

<div style="margin-left: 10px;">

▸   **setStartListener**<`void`\>(`listener: TrackListener`) : `void`



**`en`** Set the start event listener.



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



**`en`** Sets the bones and slots to the setup pose.



**`method`** setToSetupPose





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton.ts:758](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton.ts#L758)&nbsp;
___
### setTrackCompleteListener

<div style="margin-left: 10px;">

▸   **setTrackCompleteListener**<`void`\>(`entry: TrackEntry, listener: TrackListener2`) : `void`



**`en`** Set the complete event listener for specified TrackEntry.



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



**`en`** Set the dispose event listener for specified TrackEntry.



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



**`en`** Set the end event listener for specified TrackEntry.



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



**`en`** Set the event listener for specified TrackEntry.



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



**`en`** Set the interrupt event listener for specified TrackEntry.



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



**`en`** Set the start event listener for specified TrackEntry.



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



**`en`** Sets vertex effect delegate.



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



**`en`** Un-schedules a custom task.



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



**`en`** unschedule all scheduled tasks.



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



**`en`** 
Updating an animation cache to calculate all frame data in the animation is a cost in
performance due to calculating all data in a single frame.
To update the cache, use the invalidAnimationCache method with high performance.



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



**`en`** Render data submission procedure, it update and assemble the render data to 2D data buffers before all children submission process.
Usually called each frame when the ui flow assemble all render data to geometry buffers.
Don't call it unless you know what you are doing.



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




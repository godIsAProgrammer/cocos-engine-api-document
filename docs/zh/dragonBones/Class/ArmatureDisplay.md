
## Class: ArmatureDisplay


`extend:`
[Renderable2D](docs/zh/ui/Class/Renderable2D.md)












**`zh`** 
DragonBones 骨骼动画 <br/>
<br/>
Armature Display 具有对骨骼数据的引用并且存储了骨骼实例的状态，
它由当前的骨骼动作，slot 颜色，和可见的 slot attachments 组成。<br/>
多个 Armature Display 可以使用相同的骨骼数据，其中包括所有的动画，皮肤和 attachments。<br/>



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  AnimationCacheMode](#AnimationCacheMode)
- [ **`static`**  Assembler](#Assembler)
- [ **`static`**  BlendState](#BlendState)
- [ **`static`**  PostAssembler](#PostAssembler)
- [ **`static`**  system](#system)
- [ attachUtil](#attachUtil)
- [ node](#node)
- [ playTimes](#playTimes)
- [ premultipliedAlpha](#premultipliedAlpha)
- [ stencilStage](#stencilStage)
- [ animationName](#animationName)
- [ armatureName](#armatureName)
- [ blendHash](#blendHash)
- [ color](#color)
- [ customMaterial](#customMaterial)
- [ debugBones](#debugBones)
- [ delegateSrc](#delegateSrc)
- [ dragonAsset](#dragonAsset)
- [ dragonAtlasAsset](#dragonAtlasAsset)
- [ dstBlendFactor](#dstBlendFactor)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ material](#material)
- [ materials](#materials)
- [ meshRenderDataArray](#meshRenderDataArray)
- [ name](#name)
- [ renderData](#renderData)
- [ sharedMaterial](#sharedMaterial)
- [ sharedMaterials](#sharedMaterials)
- [ socketNodes](#socketNodes)
- [ sockets](#sockets)
- [ srcBlendFactor](#srcBlendFactor)
- [ timeScale](#timeScale)
- [ uuid](#uuid)
- [ visibility](#visibility)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ addEventListener](#addEventListener)
- [ armature](#armature)
- [ buildArmature](#buildArmature)
- [ destroy](#destroy)
- [ destroyRenderData](#destroyRenderData)
- [ disableRender](#disableRender)
- [ getAnimationNames](#getAnimationNames)
- [ getArmatureKey](#getArmatureKey)
- [ getArmatureNames](#getArmatureNames)
- [ getBlendState](#getBlendState)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getMaterial](#getMaterial)
- [ getMaterialForBlend](#getMaterialForBlend)
- [ getMaterialInstance](#getMaterialInstance)
- [ getRenderMaterial](#getRenderMaterial)
- [ initFactory](#initFactory)
- [ invalidAnimationCache](#invalidAnimationCache)
- [ isAnimationCached](#isAnimationCached)
- [ markForUpdateRenderData](#markForUpdateRenderData)
- [ off](#off)
- [ on](#on)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ onRestore](#onRestore)
- [ once](#once)
- [ playAnimation](#playAnimation)
- [ postUpdateAssembler](#postUpdateAssembler)
- [ querySocketPathByName](#querySocketPathByName)
- [ querySockets](#querySockets)
- [ removeEventListener](#removeEventListener)
- [ requestMeshRenderData](#requestMeshRenderData)
- [ requestRenderData](#requestRenderData)
- [ resetInEditor](#resetInEditor)
- [ resetRenderData](#resetRenderData)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setAnimationCacheMode](#setAnimationCacheMode)
- [ setBlendHash](#setBlendHash)
- [ setMaterial](#setMaterial)
- [ setMaterialInstance](#setMaterialInstance)
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

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L135)&nbsp;


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

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:408](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L408)&nbsp;


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


### playTimes
<div style="margin-left: 10px;">




**`zh`** 播放默认动画的循环次数
     -1 表示使用配置文件中的默认值;
     0 表示无限循环
     >0 表示循环次数




**`property`** {Number} playTimes




**`default`** -1





•  **playTimes**:
`number`  = `-1`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L338)&nbsp;


___


### premultipliedAlpha
<div style="margin-left: 10px;">




**`zh`** 是否启用贴图预乘。
当图片的透明区域出现色块时需要关闭该选项，当图片的半透明区域颜色变黑时需要启用该选项。




**`property`** {Boolean} premultipliedAlpha




**`default`** false





•  **premultipliedAlpha**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L352)&nbsp;


___


### stencilStage
<div style="margin-left: 10px;">




**`zh`** 组件模板缓冲状态 (注意：请不要直接修改它的值)





•  **stencilStage**:
`Stage`  = `Stage.DISABLED`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L274)&nbsp;


___


### animationName
<div style="margin-left: 10px;">




**`zh`** 当前播放的动画名称。




**`property`** {String} animationName





•  **animationName**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L217)&nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:220](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L220)&nbsp;


___


### armatureName
<div style="margin-left: 10px;">




**`zh`** 当前的 Armature 名称。




**`property`** {String} armatureName





•  **armatureName**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L186)&nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L187)&nbsp;


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




**`zh`** 用户自定材质





•  **customMaterial**:
 ``null | Material`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L160)&nbsp;   [cocos/2d/framework/renderable-2d.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L164)&nbsp;


___


### debugBones
<div style="margin-left: 10px;">




**`zh`** 是否显示 bone 的 debug 信息。




**`property`** {Boolean} debugBones




**`default`** false





•  **debugBones**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:362](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L362)&nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:363](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L363)&nbsp;


___


### delegateSrc
<div style="margin-left: 10px;">




•  **delegateSrc**:
 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L266)&nbsp;


___


### dragonAsset
<div style="margin-left: 10px;">




**`zh`** 
骨骼数据包含了骨骼信息（绑定骨骼动作，slots，渲染顺序，
attachments，皮肤等等）和动画但不持有任何状态。<br/>
多个 ArmatureDisplay 可以共用相同的骨骼数据。




**`property`** {DragonBonesAsset} dragonAsset





•  **dragonAsset**:
 ``null | DragonBonesAsset`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L151)&nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L154)&nbsp;


___


### dragonAtlasAsset
<div style="margin-left: 10px;">




**`zh`** 
骨骼数据所需的 Atlas Texture 数据。




**`property`** {DragonBonesAtlasAsset} dragonAtlasAsset





•  **dragonAtlasAsset**:
 ``null | DragonBonesAtlasAsset`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L173)&nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L174)&nbsp;


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

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:410](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L410)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


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


### socketNodes
<div style="margin-left: 10px;">




•  **socketNodes**:
 ``Map`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:404](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L404)&nbsp;


___


### sockets
<div style="margin-left: 10px;">




**`zh`** 
当前动画组件维护的挂点数组。要挂载自定义节点到受动画驱动的骨骼上，必须先在此注册挂点。





•  **sockets**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:390](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L390)&nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L394)&nbsp;


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




**`zh`** 当前骨骼中所有动画的时间缩放率。




**`property`** {Number} timeScale




**`default`** 1





•  **timeScale**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:314](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L314)&nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L315)&nbsp;


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

• **new ArmatureDisplay**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:475](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L475)&nbsp;


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




<!---->

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




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L215)&nbsp;   [cocos/core/components/component.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L226)&nbsp;   [cocos/core/components/component.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L228)&nbsp;
___
### addEventListener
<div style="margin-left: 10px;">

▸   **addEventListener**<`void`\>(`eventType: any, listener: any, target: any`) : `void`




**`zh`** 
添加 DragonBones 事件监听器。




**`method`** addEventListener




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `eventType` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `any` | The callback that will be invoked when the event is dispatched.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1213)&nbsp;
___
### armature
<div style="margin-left: 10px;">

▸   **armature**




**`zh`** 
获取 ArmatureDisplay 当前使用的 Armature 对象




**`method`** armature




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1253](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1253)&nbsp;
___
### buildArmature
<div style="margin-left: 10px;">

▸   **buildArmature**<`ArmatureDisplay`\>(`armatureName: string, node: Node`) : `ArmatureDisplay`




**`zh`** 
构建指定名称的 armature 对象




**`method`** buildArmature




<!---->
<!--    #### Returns `ArmatureDisplay` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armatureName` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `Node` | - |



##### Returns `ArmatureDisplay`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1241](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1241)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### destroyRenderData
<div style="margin-left: 10px;">

▸   **destroyRenderData**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:520](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L520)&nbsp;
___
### disableRender
<div style="margin-left: 10px;">

▸   **disableRender**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:608](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L608)&nbsp;
___
### getAnimationNames
<div style="margin-left: 10px;">

▸   **getAnimationNames**(`armatureName: string`)




**`zh`** 
获取指定的 armature 的所有动画名称。




**`method`** getAnimationNames




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armatureName` | `string` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1141)&nbsp;
___
### getArmatureKey
<div style="margin-left: 10px;">

▸   **getArmatureKey**<`string`\> : `string`




**`zh`** 
缓存龙骨数据的key值，换装的时会使用到该值，作为dragonbonesName使用




**`method`** getArmatureKey




**`example`**

```ts

let factory = dragonBones.CCFactory.getInstance();
let needChangeSlot = needChangeArmature.armature().getSlot("changeSlotName");
factory.replaceSlotDisplay(toChangeArmature.getArmatureKey(), "armatureName", "slotName", "displayName", needChangeSlot);

```




<!---->
<!--    #### Returns `string` -->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:669](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L669)&nbsp;
___
### getArmatureNames
<div style="margin-left: 10px;">

▸   **getArmatureNames**




**`zh`** 
获取 DragonBones 数据中所有的 armature 名称




**`method`** getArmatureNames




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1127)&nbsp;
___
### getBlendState
<div style="margin-left: 10px;">

▸   **getBlendState**<`BlendState`\> : `BlendState`




<!---->
<!--    #### Returns `BlendState` -->
<!---->


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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L129)&nbsp;
___
### getMaterialForBlend
<div style="margin-left: 10px;">

▸   **getMaterialForBlend**<`MaterialInstance`\>(`src: BlendFactor, dst: BlendFactor`) : `MaterialInstance`




<!---->
<!--    #### Returns `MaterialInstance` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `src` | `BlendFactor` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dst` | `BlendFactor` | - |



##### Returns `MaterialInstance`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:533](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L533)&nbsp;
___
### getMaterialInstance
<div style="margin-left: 10px;">

▸   **getMaterialInstance**(`idx: number`)




**`zh`** 获取指定子模型的材质实例。





<!---->

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





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L208)&nbsp;
___
### initFactory
<div style="margin-left: 10px;">

▸   **initFactory**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:492](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L492)&nbsp;
___
### invalidAnimationCache
<div style="margin-left: 10px;">

▸   **invalidAnimationCache**<`void`\> : `void`




**`zh`** 
使动画缓存失效，之后会在每帧重新计算。




**`method`** invalidAnimationCache





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1114)&nbsp;
___
### isAnimationCached
<div style="margin-left: 10px;">

▸   **isAnimationCached**<`boolean`\> : `boolean`




**`zh`** 当前是否处于缓存模式。




**`method`** isAnimationCached




<!---->
<!--    #### Returns `boolean` 
-->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:704](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L704)&nbsp;
___
### markForUpdateRenderData
<div style="margin-left: 10px;">

▸   **markForUpdateRenderData**<`void`\>(`enable: boolean`) : `void`




**`zh`** 标记当前组件的渲染数据为已修改状态，这样渲染数据才会重新计算。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enable` | `boolean` | Marked necessary to update or not  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:372](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L372)&nbsp;
___
### off
<div style="margin-left: 10px;">

▸   **off**<`void`\>(`eventType: string, listener: any, target: any`) : `void`




**`zh`** 
移除 DragonBones 事件监听器，与 removeEventListener 作用相同。




**`method`** off




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `eventType` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1183)&nbsp;
___
### on
<div style="margin-left: 10px;">

▸   **on**<`void`\>(`eventType: string, listener: any, target: any`) : `void`




**`zh`** 
添加 DragonBones 事件监听器，与 addEventListener 作用相同。




**`method`** on




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `eventType` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `any` | The callback that will be invoked when the event is dispatched.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1169)&nbsp;
___
### onDestroy
<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:792](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L792)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:718](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L718)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:709](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L709)&nbsp;
___
### onFocusInEditor
<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLoad
<div style="margin-left: 10px;">

▸   **onLoad**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:496](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L496)&nbsp;
___
### onLostFocusInEditor
<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### onRestore
<div style="margin-left: 10px;">

▸   **onRestore**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:340](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L340)&nbsp;
___
### once
<div style="margin-left: 10px;">

▸   **once**<`void`\>(`eventType: string, listener: any, target: any`) : `void`




**`zh`** 
添加 DragonBones 一次性事件监听器，回调会在第一时间被触发后删除自身。




**`method`** once




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `eventType` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `any` | The callback that will be invoked when the event is dispatched.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1198)&nbsp;
___
### playAnimation
<div style="margin-left: 10px;">

▸   **playAnimation**(`animName: string, playTimes: undefined | number`)




**`zh`** 
播放指定的动画.
animName 指定播放动画的名称。
playTimes 指定播放动画的次数。
-1 为使用配置文件中的次数。
0 为无限循环播放。
>0 为动画的重复次数。





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `animName` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `playTimes` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1064](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1064)&nbsp;
___
### postUpdateAssembler
<div style="margin-left: 10px;">

▸   **postUpdateAssembler**<`void`\>(`render: Batcher2D`) : `void`




**`zh`** 后置渲染数据组装程序，它会在所有子节点的渲染数据组装完成后被调用。
它可能会组装额外的渲染数据到顶点数据缓冲区，也可能只是重置一些渲染状态。
注意：不要手动调用该函数，除非你理解整个流程。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `render` | `Batcher2D` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L434)&nbsp;
___
### querySocketPathByName
<div style="margin-left: 10px;">

▸   **querySocketPathByName**(`name: string`)




**`zh`** 查询 Socket 路径




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Slot name or Bone name  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:934](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L934)&nbsp;
___
### querySockets
<div style="margin-left: 10px;">

▸   **querySockets**




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:915](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L915)&nbsp;
___
### removeEventListener
<div style="margin-left: 10px;">

▸   **removeEventListener**<`void`\>(`eventType: any, listener: any, target: any`) : `void`




**`zh`** 
移除 DragonBones 事件监听器。




**`method`** removeEventListener




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `eventType` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1227)&nbsp;
___
### requestMeshRenderData
<div style="margin-left: 10px;">

▸   **requestMeshRenderData**<`ArmatureDisplayMeshData`\> : `ArmatureDisplayMeshData`




<!---->
<!--    #### Returns `ArmatureDisplayMeshData` -->
<!---->


##### Returns `ArmatureDisplayMeshData`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:509](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L509)&nbsp;
___
### requestRenderData
<div style="margin-left: 10px;">

▸   **requestRenderData**<`RenderData`\> : `RenderData`




**`zh`** 请求新的渲染数据对象。




<!---->
<!--    #### Returns `RenderData` The new render data
-->
<!---->


##### Returns `RenderData`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L391)&nbsp;
___
### resetInEditor
<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`




**`zh`** 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### resetRenderData
<div style="margin-left: 10px;">

▸   **resetRenderData**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:527](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L527)&nbsp;
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `interval` | `number` | The time interval between each invocation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `repeat` | `number` | The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L452)&nbsp;
___
### setAnimationCacheMode
<div style="margin-left: 10px;">

▸   **setAnimationCacheMode**<`void`\>(`cacheMode: AnimationCacheMode`) : `void`




**`zh`** 
若想切换渲染模式，最好在设置'dragonAsset'之前，先设置好渲染模式，否则有运行时开销。
若在编辑中设置渲染模式，则无需担心设置次序的问题。





**`method`** setAnimationCacheMode




**`example`**

```ts

armatureDisplay.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE);

```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cacheMode` | `AnimationCacheMode` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:686](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L686)&nbsp;
___
### setBlendHash
<div style="margin-left: 10px;">

▸   **setBlendHash**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:925](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L925)&nbsp;
___
### setMaterial
<div style="margin-left: 10px;">

▸   **setMaterial**<`void`\>(`material: Material | null, index: number`) : `void`




**`zh`** 设置指定子模型的 sharedMaterial，如果对应位置有材质实例则会创建一个对应的材质实例。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `material` | `Material \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L141)&nbsp;
___
### setMaterialInstance
<div style="margin-left: 10px;">

▸   **setMaterialInstance**<`void`\>(`index: number, matInst: Material | null`) : `void`




**`zh`** 获取指定子模型的材质实例。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `matInst` | `Material \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L192)&nbsp;
___
### unschedule
<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`




**`zh`** 取消调度一个自定义的回调任务。




**`example`**

```ts


this.unschedule(_callback);


```




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: any`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:736](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L736)&nbsp;
___
### updateAnimationCache
<div style="margin-left: 10px;">

▸   **updateAnimationCache**<`void`\>(`animName: string`) : `void`




**`zh`** 
更新某个动画缓存, 预计算动画中所有帧数据，由于在单帧计算所有数据，所以较消耗性能。
若想更新缓存，可使用 invalidAnimationCache 方法，具有较高性能。




**`method`** updateAnimationCache




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `animName` | `string` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureDisplay.ts:1102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureDisplay.ts#L1102)&nbsp;
___
### updateAssembler
<div style="margin-left: 10px;">

▸   **updateAssembler**<`void`\>(`render: Batcher2D`) : `void`




**`zh`** 渲染数据组装程序，这个方法会在所有子节点数据组装之前更新并组装当前组件的渲染数据到 UI 的顶点数据缓冲区中。
一般在 UI 渲染流程中调用，用于组装所有的渲染数据到顶点数据缓冲区。
注意：不要手动调用该函数，除非你理解整个流程。





<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L318)&nbsp;
___
<!---->





## Class: TiledLayer


`extend:`
[Renderable2D](docs/zh/ui/Class/Renderable2D.md)












**`zh`** 渲染 TMX layer。


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Assembler](#Assembler)
- [ **`static`**  BlendState](#BlendState)
- [ **`static`**  PostAssembler](#PostAssembler)
- [ **`static`**  system](#system)
- [ colorChanged](#colorChanged)
- [ node](#node)
- [ renderOrder](#renderOrder)
- [ stencilStage](#stencilStage)
- [ texGrids](#texGrids)
- [ tiledTiles](#tiledTiles)
- [ tiles](#tiles)
- [ vertices](#vertices)
- [ blendHash](#blendHash)
- [ color](#color)
- [ cullingRect](#cullingRect)
- [ customMaterial](#customMaterial)
- [ delegateSrc](#delegateSrc)
- [ dstBlendFactor](#dstBlendFactor)
- [ enableCulling](#enableCulling)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ layerSize](#layerSize)
- [ leftDownToCenterX](#leftDownToCenterX)
- [ leftDownToCenterY](#leftDownToCenterY)
- [ material](#material)
- [ materials](#materials)
- [ meshRenderDataArray](#meshRenderDataArray)
- [ name](#name)
- [ renderData](#renderData)
- [ rightTop](#rightTop)
- [ sharedMaterial](#sharedMaterial)
- [ sharedMaterials](#sharedMaterials)
- [ srcBlendFactor](#srcBlendFactor)
- [ uuid](#uuid)
- [ visibility](#visibility)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ addUserNode](#addUserNode)
- [ destroy](#destroy)
- [ destroyRenderData](#destroyRenderData)
- [ destroyUserNode](#destroyUserNode)
- [ getBlendState](#getBlendState)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getLayerName](#getLayerName)
- [ getLayerOrientation](#getLayerOrientation)
- [ getLayerSize](#getLayerSize)
- [ getMapTileSize](#getMapTileSize)
- [ getMaterial](#getMaterial)
- [ getMaterialInstance](#getMaterialInstance)
- [ getNodesByRowCol](#getNodesByRowCol)
- [ getNodesCountByRow](#getNodesCountByRow)
- [ getPositionAt](#getPositionAt)
- [ getProperties](#getProperties)
- [ getProperty](#getProperty)
- [ getRenderMaterial](#getRenderMaterial)
- [ getTexture](#getTexture)
- [ getTextures](#getTextures)
- [ getTileFlagsAt](#getTileFlagsAt)
- [ getTileGIDAt](#getTileGIDAt)
- [ getTileSet](#getTileSet)
- [ getTileSets](#getTileSets)
- [ getTiledTileAt](#getTiledTileAt)
- [ hasAnimation](#hasAnimation)
- [ hasTiledNode](#hasTiledNode)
- [ init](#init)
- [ isCullingDirty](#isCullingDirty)
- [ isInvalidPosition](#isInvalidPosition)
- [ isUserNodeDirty](#isUserNodeDirty)
- [ markForUpdateRenderData](#markForUpdateRenderData)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ onRestore](#onRestore)
- [ postUpdateAssembler](#postUpdateAssembler)
- [ removeUserNode](#removeUserNode)
- [ requestMeshRenderData](#requestMeshRenderData)
- [ requestRenderData](#requestRenderData)
- [ requestSubNodesData](#requestSubNodesData)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setCullingDirty](#setCullingDirty)
- [ setLayerName](#setLayerName)
- [ setMaterial](#setMaterial)
- [ setMaterialInstance](#setMaterialInstance)
- [ setTexture](#setTexture)
- [ setTextures](#setTextures)
- [ setTileGIDAt](#setTileGIDAt)
- [ setTileSet](#setTileSet)
- [ setTileSets](#setTileSets)
- [ setTiledTileAt](#setTiledTileAt)
- [ setTilesGIDAt](#setTilesGIDAt)
- [ setUserNodeDirty](#setUserNodeDirty)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ updateAssembler](#updateAssembler)
- [ updateBlendHash](#updateBlendHash)
- [ updateCulling](#updateCulling)
- [ updateViewPort](#updateViewPort)

</div>

## Properties


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


### colorChanged
<div style="margin-left: 10px;">




•  **colorChanged**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L156)&nbsp;


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


### renderOrder
<div style="margin-left: 10px;">




•  **renderOrder**:
`RenderOrder` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L159)&nbsp;


___


### stencilStage
<div style="margin-left: 10px;">




**`zh`** 组件模板缓冲状态 (注意：请不要直接修改它的值)





•  **stencilStage**:
`Stage`  = `Stage.DISABLED`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L274)&nbsp;


___


### texGrids
<div style="margin-left: 10px;">




•  **texGrids**:
`TiledTextureGrids | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L141)&nbsp;


___


### tiledTiles
<div style="margin-left: 10px;">




•  **tiledTiles**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L92)&nbsp;


___


### tiles
<div style="margin-left: 10px;">




•  **tiles**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L121)&nbsp;


___


### vertices
<div style="margin-left: 10px;">




•  **vertices**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L124)&nbsp;


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


### cullingRect
<div style="margin-left: 10px;">




•  **cullingRect**:
 `` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L104)&nbsp;


___


### customMaterial
<div style="margin-left: 10px;">




**`zh`** 用户自定材质





•  **customMaterial**:
 ``null | Material`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L160)&nbsp;   [cocos/2d/framework/renderable-2d.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L164)&nbsp;


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


### enableCulling
<div style="margin-left: 10px;">




**`zh`** 开启或关闭裁剪。




**`method`** enableCulling




•  **enableCulling**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L196)&nbsp;   [cocos/tiledmap/tiled-layer.ts:203](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L203)&nbsp;


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


### layerSize
<div style="margin-left: 10px;">




•  **layerSize**:
 ``Size`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L131)&nbsp;


___


### leftDownToCenterX
<div style="margin-left: 10px;">




•  **leftDownToCenterX**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L175)&nbsp;


___


### leftDownToCenterY
<div style="margin-left: 10px;">




•  **leftDownToCenterY**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L176)&nbsp;


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
 ``null | `` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L174)&nbsp;


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


### rightTop
<div style="margin-left: 10px;">




•  **rightTop**:
 `` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L108)&nbsp;


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

• **new TiledLayer**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L176)&nbsp;


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
### addUserNode
<div style="margin-left: 10px;">

▸   **addUserNode**<`boolean`\>(`node: Node`) : `boolean`




**`zh`** 添加用户节点。




**`method`** addUserNode




<!---->
<!--    #### Returns `boolean` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `Node` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L212)&nbsp;
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

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1416](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1416)&nbsp;
___
### destroyUserNode
<div style="margin-left: 10px;">

▸   **destroyUserNode**<`void`\>(`node: Node`) : `void`




**`zh`** 销毁用户节点。




**`method`** destroyUserNode




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `Node` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L267)&nbsp;
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
### getLayerName
<div style="margin-left: 10px;">

▸   **getLayerName**<`string`\> : `string`




**`zh`** 获取层的名称。




**`method`** getLayerName




**`example`**

```ts

let layerName = tiledLayer.getLayerName();
cc.log(layerName);

```




<!---->
<!--    #### Returns `string` -->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:439](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L439)&nbsp;
___
### getLayerOrientation
<div style="margin-left: 10px;">

▸   **getLayerOrientation**




**`zh`** 获取 Layer 方向(同地图方向)。




**`method`** getLayerOrientation




**`example`**

```ts

let orientation = tiledLayer.getLayerOrientation();
cc.log("Layer Orientation: " + orientation);

```




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:884](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L884)&nbsp;
___
### getLayerSize
<div style="margin-left: 10px;">

▸   **getLayerSize**<`Size`\> : `Size`




**`zh`** 获得层大小。




**`method`** getLayerSize




**`example`**

```ts

let size = tiledLayer.getLayerSize();
cc.log("layer size: " + size);

```




<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1214)&nbsp;
___
### getMapTileSize
<div style="margin-left: 10px;">

▸   **getMapTileSize**<`Size`\> : `Size`




**`zh`** 获取 tile 的大小( tile 的大小可能会有所不同)。




**`method`** getMapTileSize




**`example`**

```ts

let mapTileSize = tiledLayer.getMapTileSize();
cc.log("MapTile size: " + mapTileSize);

```




<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1227)&nbsp;
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
### getNodesByRowCol
<div style="margin-left: 10px;">

▸   **getNodesByRowCol**(`row: number, col: number`)




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `row` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `col` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:278](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L278)&nbsp;
___
### getNodesCountByRow
<div style="margin-left: 10px;">

▸   **getNodesCountByRow**<`number`\>(`row: any`) : `number`




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `row` | `any` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L284)&nbsp;
___
### getPositionAt
<div style="margin-left: 10px;">

▸   **getPositionAt**(`pos: IVec2Like | number, y: undefined | number`)




**`zh`** 获取指定 tile 的像素坐标。




**`method`** getPositionAt




**`example`**

```ts

let pos = tiledLayer.getPositionAt(cc.v2(0, 0));
cc.log("Pos: " + pos);
let pos = tiledLayer.getPositionAt(0, 0);
cc.log("Pos: " + pos);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pos` | `IVec2Like \| number` | position or x  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:482](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L482)&nbsp;
___
### getProperties
<div style="margin-left: 10px;">

▸   **getProperties**




**`zh`** 获取 layer 的属性，可以使用 Tiled 编辑器添加属性。




**`method`** getProperties




**`example`**

```ts

let properties = tiledLayer.getProperties();
cc.log("Properties: " + properties);

```




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:897](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L897)&nbsp;
___
### getProperty
<div style="margin-left: 10px;">

▸   **getProperty**(`propertyName: string`)




**`zh`** 获取指定属性名的值。




**`method`** getProperty




**`example`**

```ts

let property = tiledLayer.getProperty("info");
cc.log(property);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `propertyName` | `string` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L465)&nbsp;
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
### getTexture
<div style="margin-left: 10px;">

▸   **getTexture**(`index: undefined | number`)




**`zh`** 获取纹理。




**`method`** getTexture




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `undefined \| number` | The index of textures  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1166)&nbsp;
___
### getTextures
<div style="margin-left: 10px;">

▸   **getTextures**




**`zh`** 获取纹理。




**`method`** getTextures




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1180)&nbsp;
___
### getTileFlagsAt
<div style="margin-left: 10px;">

▸   **getTileFlagsAt**(`x: number, y: number`)




**`zh`** 
通过给定的 tile 坐标, 返回 tile 的 flags. <br />
如果它返回 null，则表示该 tile 为空。<br />




**`method`** getTileGIDAt




**`example`**

```ts

let tileGid = tiledLayer.getTileGIDAt(0, 0);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:711](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L711)&nbsp;
___
### getTileGIDAt
<div style="margin-left: 10px;">

▸   **getTileGIDAt**(`x: number, y: number`)




**`zh`** 
通过给定的 tile 坐标、flags（可选）返回 tile 的 GID. <br />
如果它返回 0，则表示该 tile 为空。<br />




**`method`** getTileGIDAt




**`example`**

```ts

let tileGid = tiledLayer.getTileGIDAt(0, 0);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:683](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L683)&nbsp;
___
### getTileSet
<div style="margin-left: 10px;">

▸   **getTileSet**(`index: number`)




**`zh`** 获取 layer 索引位置为0的 Tileset 信息。




**`method`** getTileSet




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | The index of tilesets  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1238](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1238)&nbsp;
___
### getTileSets
<div style="margin-left: 10px;">

▸   **getTileSets**




**`zh`** 获取 layer 所有的 Tileset 信息。




**`method`** getTileSet




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1252](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1252)&nbsp;
___
### getTiledTileAt
<div style="margin-left: 10px;">

▸   **getTiledTileAt**(`x: number, y: number, forceCreate: undefined | false | true`)




**`zh`** 
通过指定的 tile 坐标获取对应的 TiledTile。 <br/>
如果指定的坐标没有 tile，并且设置了 forceCreate 那么将会在指定的坐标创建一个新的 TiledTile 。<br/>
在渲染这个 tile 的时候，将会使用 TiledTile 的节点的旋转、缩放、位移、颜色属性。<br/>




**`method`** getTiledTileAt




**`example`**

```ts

let tile = tiledLayer.getTiledTileAt(100, 100, true);
cc.log(tile);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `forceCreate` | `undefined \| false \| true` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1102)&nbsp;
___
### hasAnimation
<div style="margin-left: 10px;">

▸   **hasAnimation**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L186)&nbsp;
___
### hasTiledNode
<div style="margin-left: 10px;">

▸   **hasTiledNode**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L182)&nbsp;
___
### init
<div style="margin-left: 10px;">

▸   **init**<`void`\>(`layerInfo: TMXLayerInfo, mapInfo: TMXMapInfo, tilesets: undefined, textures: undefined, texGrids: TiledTextureGrids`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `layerInfo` | `TMXLayerInfo` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `mapInfo` | `TMXMapInfo` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `tilesets` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `textures` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `texGrids` | `TiledTextureGrids` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1294)&nbsp;
___
### isCullingDirty
<div style="margin-left: 10px;">

▸   **isCullingDirty**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:731](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L731)&nbsp;
___
### isInvalidPosition
<div style="margin-left: 10px;">

▸   **isInvalidPosition**<`boolean`\>(`x: number, y: number`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:503](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L503)&nbsp;
___
### isUserNodeDirty
<div style="margin-left: 10px;">

▸   **isUserNodeDirty**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L387)&nbsp;
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
### onDestroy
<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:426](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L426)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:407](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L407)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:395](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L395)&nbsp;
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
### removeUserNode
<div style="margin-left: 10px;">

▸   **removeUserNode**<`boolean`\>(`node: Node`) : `boolean`




**`zh`** 移除用户节点。




**`method`** removeUserNode




<!---->
<!--    #### Returns `boolean` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `Node` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L244)&nbsp;
___
### requestMeshRenderData
<div style="margin-left: 10px;">

▸   **requestMeshRenderData**<`TiledMeshData`\> : `TiledMeshData`




<!---->
<!--    #### Returns `TiledMeshData` -->
<!---->


##### Returns `TiledMeshData`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1374](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1374)&nbsp;
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
### requestSubNodesData
<div style="margin-left: 10px;">

▸   **requestSubNodesData**<`TiledSubNodeData`\> : `TiledSubNodeData`




<!---->
<!--    #### Returns `TiledSubNodeData` -->
<!---->


##### Returns `TiledSubNodeData`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1396](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1396)&nbsp;
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
### setCullingDirty
<div style="margin-left: 10px;">

▸   **setCullingDirty**<`void`\>(`value: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:727](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L727)&nbsp;
___
### setLayerName
<div style="margin-left: 10px;">

▸   **setLayerName**<`void`\>(`layerName: string`) : `void`




**`zh`** 设置层的名称




**`method`** SetLayerName




**`example`**

```ts

tiledLayer.setLayerName("New Layer");

```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `layerName` | `string` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L451)&nbsp;
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
### setTexture
<div style="margin-left: 10px;">

▸   **setTexture**<`void`\>(`texture: SpriteFrame`) : `void`




**`zh`** 设置纹理。




**`method`** setTexture




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `texture` | `SpriteFrame` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1190)&nbsp;
___
### setTextures
<div style="margin-left: 10px;">

▸   **setTextures**<`void`\>(`textures: undefined`) : `void`




**`zh`** 设置纹理。




**`method`** setTexture




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `textures` |  |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1200](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1200)&nbsp;
___
### setTileGIDAt
<div style="margin-left: 10px;">

▸   **setTileGIDAt**<`void`\>(`gid: MixedGID, x: number, y: number, flags: undefined | number`) : `void`




**`zh`** 
设置给定坐标的 tile 的 gid (gid = tile 全局 id)，
tile 的 GID 可以使用方法 “tileGIDAt” 来获得。<br />
如果一个 tile 已经放在那个位置，那么它将被删除。




**`method`** setTileGIDAt




**`example`**

```ts

tiledLayer.setTileGIDAt(1001, 10, 10, 1)

```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `gid` | `MixedGID` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `flags` | `undefined \| number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:630](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L630)&nbsp;
___
### setTileSet
<div style="margin-left: 10px;">

▸   **setTileSet**<`void`\>(`tileset: TMXTilesetInfo`) : `void`




**`zh`** 设置 layer 的 tileset 信息。




**`method`** setTileSet




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `tileset` | `TMXTilesetInfo` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1262](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1262)&nbsp;
___
### setTileSets
<div style="margin-left: 10px;">

▸   **setTileSets**<`void`\>(`tilesets: undefined`) : `void`




**`zh`** 设置 layer 的 Tileset 信息。




**`method`** setTileSets




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `tilesets` |  |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1272)&nbsp;
___
### setTiledTileAt
<div style="margin-left: 10px;">

▸   **setTiledTileAt**(`x: number, y: number, tiledTile: TiledTile | null`)




**`zh`** 
将指定的 tile 坐标替换为指定的 TiledTile。




**`method`** setTiledTileAt




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `tiledTile` | `TiledTile \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:1137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L1137)&nbsp;
___
### setTilesGIDAt
<div style="margin-left: 10px;">

▸   **setTilesGIDAt**<`void`\>(`gids: undefined, beginCol: number, beginRow: number, totalCols: number`) : `void`




**`zh`** 
设置给定区域的 tile 的 gid (gid = tile 全局 id)，




**`method`** setTilesGIDAt




**`example`**

```ts

tiledLayer.setTilesGIDAt([1, 1, 1, 1], 10, 10, 2)

```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `gids` |  | an array contains gid  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `beginCol` | `number` | begin col number  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `beginRow` | `number` | begin row number  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `totalCols` | `number` | count of column  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:598](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L598)&nbsp;
___
### setUserNodeDirty
<div style="margin-left: 10px;">

▸   **setUserNodeDirty**<`void`\>(`value: any`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L391)&nbsp;
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
### updateCulling
<div style="margin-left: 10px;">

▸   **updateCulling**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:850](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L850)&nbsp;
___
### updateViewPort
<div style="margin-left: 10px;">

▸   **updateViewPort**<`void`\>(`x: number, y: number, width: number, height: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-layer.ts:737](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-layer.ts#L737)&nbsp;
___
<!---->
<!---->




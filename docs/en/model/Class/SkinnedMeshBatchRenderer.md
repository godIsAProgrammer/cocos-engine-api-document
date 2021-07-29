
## Class: SkinnedMeshBatchRenderer


`extend:`
[SkinnedMeshRenderer](docs/en/model/Class/SkinnedMeshRenderer.md)












**`en`** The skinned mesh batch renderer component, batches multiple skeleton-sharing [[SkinnedMeshRenderer]].


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ShadowCastingMode](#ShadowCastingMode)
- [ **`static`**  ShadowReceivingMode](#ShadowReceivingMode)
- [ **`static`**  system](#system)
- [ atlasSize](#atlasSize)
- [ batchableTextureNames](#batchableTextureNames)
- [ lightmapSettings](#lightmapSettings)
- [ node](#node)
- [ units](#units)
- [ enableMorph](#enableMorph)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ material](#material)
- [ materials](#materials)
- [ mesh](#mesh)
- [ model](#model)
- [ name](#name)
- [ receiveShadow](#receiveShadow)
- [ shadowCastingMode](#shadowCastingMode)
- [ sharedMaterial](#sharedMaterial)
- [ sharedMaterials](#sharedMaterials)
- [ skeleton](#skeleton)
- [ skinningRoot](#skinningRoot)
- [ uuid](#uuid)
- [ visibility](#visibility)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ cook](#cook)
- [ cookMaterials](#cookMaterials)
- [ cookMeshes](#cookMeshes)
- [ cookSkeletons](#cookSkeletons)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getMaterial](#getMaterial)
- [ getMaterialInstance](#getMaterialInstance)
- [ getRenderMaterial](#getRenderMaterial)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ onRestore](#onRestore)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setInstancedAttribute](#setInstancedAttribute)
- [ setMaterial](#setMaterial)
- [ setMaterialInstance](#setMaterialInstance)
- [ setUseBakedAnimation](#setUseBakedAnimation)
- [ setWeights](#setWeights)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ uploadAnimation](#uploadAnimation)
</div>

## Properties


### ShadowCastingMode
<div style="margin-left: 10px;">




• `static` **ShadowCastingMode**:
  = `ModelShadowCastingMode`
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L164)&nbsp;


___


### ShadowReceivingMode
<div style="margin-left: 10px;">




• `static` **ShadowReceivingMode**:
  = `ModelShadowReceivingMode`
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:165](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L165)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### atlasSize
<div style="margin-left: 10px;">




**`en`** Size of the generated texture atlas.




•  **atlasSize**:
`number`  = `1024`
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L148)&nbsp;


___


### batchableTextureNames
<div style="margin-left: 10px;">




**`en`** 
Texture properties that will be actually using the generated atlas.<br>
The first unit's texture will be used if not specified.




•  **batchableTextureNames**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L160)&nbsp;


___


### lightmapSettings
<div style="margin-left: 10px;">




•  **lightmapSettings**:
`ModelLightmapSettings`  = `new ModelLightmapSettings()`
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L170)&nbsp;


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


### units
<div style="margin-left: 10px;">




**`en`** Source skinning model components, containing all the data to be batched.




•  **units**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L169)&nbsp;


___


### enableMorph
<div style="margin-left: 10px;">




•  **enableMorph**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L250)&nbsp;   [cocos/3d/framework/mesh-renderer.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L254)&nbsp;


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


### mesh
<div style="margin-left: 10px;">




•  **mesh**:
 ``null | Mesh`` 
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L177)&nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L181)&nbsp;


___


### model
<div style="margin-left: 10px;">




•  **model**:
 ``null | SkinningModel | BakedSkinningModel`` 
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L94)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### receiveShadow
<div style="margin-left: 10px;">




**`en`** receive shadow.




•  **receiveShadow**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L204)&nbsp;   [cocos/3d/framework/mesh-renderer.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L208)&nbsp;


___


### shadowCastingMode
<div style="margin-left: 10px;">




**`en`** Shadow projection mode.




•  **shadowCastingMode**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:188](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L188)&nbsp;   [cocos/3d/framework/mesh-renderer.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L192)&nbsp;


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

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L68)&nbsp;   [cocos/core/components/renderable-component.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L73)&nbsp;


___


### skeleton
<div style="margin-left: 10px;">




•  **skeleton**:
 ``null | Skeleton`` 
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L187)&nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:191](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L191)&nbsp;


___


### skinningRoot
<div style="margin-left: 10px;">




**`en`** The skinning root. (The node where the controlling Animation is located)
骨骼根节点的引用，对应控制此模型的动画组件所在节点。





•  **skinningRoot**:
 ``null | Node`` 
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L83)&nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L87)&nbsp;


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

• **new SkinnedMeshBatchRenderer**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L96)&nbsp;


---

<!---->
## Methods

### addComponent
<div style="margin-left: 10px;">

▸   **addComponent**(`classConstructor: Constructor`)




**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.




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




**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.




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
### cook
<div style="margin-left: 10px;">

▸   **cook**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L217)&nbsp;
___
### cookMaterials
<div style="margin-left: 10px;">

▸   **cookMaterials**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L223)&nbsp;
___
### cookMeshes
<div style="margin-left: 10px;">

▸   **cookMeshes**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L301)&nbsp;
___
### cookSkeletons
<div style="margin-left: 10px;">

▸   **cookSkeletons**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L260)&nbsp;
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




<!---->

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




**`en`** Returns the component of supplied type in any of its children using depth first search.




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




**`en`** Returns the component of supplied type in any of its children using depth first search.




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




**`en`** Returns all components of supplied type in the node.




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




**`en`** Returns all components of supplied type in the node.




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




**`en`** Returns all components of supplied type in self or any of its children.




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




**`en`** Returns all components of supplied type in self or any of its children.




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




**`en`** Get the shared material asset of the specified sub-model.




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




**`en`** Get the material instance of the specified sub-model.




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




**`en`** Get the actual rendering material of the specified sub-model.
(material instance if there is one, or the shared material asset)




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L208)&nbsp;
___
### onDestroy
<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:200](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L200)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L294)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:287](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L287)&nbsp;
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

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts:195](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-batch-renderer.ts#L195)&nbsp;
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

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L281)&nbsp;
___
### resetInEditor
<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`




**`en`** Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
This function is only called in editor.<br/>




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




**`en`** 
Schedules a custom task.<br/>
If the task is already scheduled, then the interval parameter will be updated without scheduling it again.




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




**`en`** Schedules a task that runs only once, with a delay of 0 or larger.




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
### setInstancedAttribute
<div style="margin-left: 10px;">

▸   **setInstancedAttribute**<`void`\>(`name: string, value: ArrayLike`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `ArrayLike` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L317)&nbsp;
___
### setMaterial
<div style="margin-left: 10px;">

▸   **setMaterial**<`void`\>(`material: Material | null, index: number`) : `void`




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

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L130)&nbsp;
___
### setMaterialInstance
<div style="margin-left: 10px;">

▸   **setMaterialInstance**<`void`\>(`index: number, matInst: Material | null`) : `void`




**`en`** Set the material instance of the specified sub-model.




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
### setUseBakedAnimation
<div style="margin-left: 10px;">

▸   **setUseBakedAnimation**<`void`\>(`val: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `val` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L114)&nbsp;
___
### setWeights
<div style="margin-left: 10px;">

▸   **setWeights**<`void`\>(`weights: undefined, subMeshIndex: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `weights` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `subMeshIndex` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L311)&nbsp;
___
### unschedule
<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`




**`en`** Un-schedules a custom task.




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




**`en`** unschedule all scheduled tasks.




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
### uploadAnimation
<div style="margin-left: 10px;">

▸   **uploadAnimation**<`void`\>(`clip: AnimationClip | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clip` | `AnimationClip \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:107](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L107)&nbsp;
___
<!---->




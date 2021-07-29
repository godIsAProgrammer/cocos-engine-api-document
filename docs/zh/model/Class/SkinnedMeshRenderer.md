
## Class: SkinnedMeshRenderer


`extend:`
[MeshRenderer](docs/zh/model/Class/MeshRenderer.md)












**`zh`** 蒙皮网格渲染器组件。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ShadowCastingMode](#ShadowCastingMode)
- [ **`static`**  ShadowReceivingMode](#ShadowReceivingMode)
- [ **`static`**  system](#system)
- [ lightmapSettings](#lightmapSettings)
- [ node](#node)
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
`EnumAlias`  = `ModelShadowCastingMode`
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L164)&nbsp;   [cocos/3d/framework/mesh-renderer.ts:547](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L547)&nbsp;


___


### ShadowReceivingMode
<div style="margin-left: 10px;">




• `static` **ShadowReceivingMode**:
`EnumAlias`  = `ModelShadowReceivingMode`
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:165](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L165)&nbsp;   [cocos/3d/framework/mesh-renderer.ts:548](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L548)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


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


### enableMorph
<div style="margin-left: 10px;">




•  **enableMorph**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L250)&nbsp;   [cocos/3d/framework/mesh-renderer.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L254)&nbsp;


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


### mesh
<div style="margin-left: 10px;">




**`zh`** 模型的网格数据。





•  **mesh**:
 ``null | Mesh`` 
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L219)&nbsp;   [cocos/3d/framework/mesh-renderer.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L223)&nbsp;


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




**`zh`** 是否接受阴影。





•  **receiveShadow**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L204)&nbsp;   [cocos/3d/framework/mesh-renderer.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L208)&nbsp;


___


### shadowCastingMode
<div style="margin-left: 10px;">




**`zh`** 阴影投射方式。





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




**`zh`** 骨骼资源。





•  **skeleton**:
 ``null | Skeleton`` 
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L67)&nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L71)&nbsp;


___


### skinningRoot
<div style="margin-left: 10px;">




•  **skinningRoot**:
 ``null | Node`` 
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L83)&nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L87)&nbsp;


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

• **new SkinnedMeshRenderer**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skinned-mesh-renderer/skinned-mesh-renderer.ts#L96)&nbsp;


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
### onDestroy
<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L300)&nbsp;
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

##### Defined in &nbsp;   [cocos/3d/framework/mesh-renderer.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/framework/mesh-renderer.ts#L272)&nbsp;
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





## Class: UIStaticBatch


`extend:`
[Renderable2D](docs/en/ui/Class/Renderable2D.md)










**`en`** 
Static batch component of UI.
This component is placed on the root node of all node objects that need to be batch.
Only sprites and label participate in the batch.
Static batch must be enabled manually, otherwise dynamic batch is still used.
Note: Do not place mask, Graphics, and objects such as UI models or particles under child nodes,
otherwise rendering will be skipped after static batching is enabled.



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Assembler](#Assembler)
- [ **`static`**  BlendState](#BlendState)
- [ **`static`**  PostAssembler](#PostAssembler)
- [ **`static`**  system](#system)
- [ node](#node)
- [ stencilStage](#stencilStage)
- [ blendHash](#blendHash)
- [ color](#color)
- [ customMaterial](#customMaterial)
- [ delegateSrc](#delegateSrc)
- [ drawBatchList](#drawBatchList)
- [ dstBlendFactor](#dstBlendFactor)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ material](#material)
- [ materials](#materials)
- [ name](#name)
- [ renderData](#renderData)
- [ sharedMaterial](#sharedMaterial)
- [ sharedMaterials](#sharedMaterials)
- [ srcBlendFactor](#srcBlendFactor)
- [ uuid](#uuid)
- [ visibility](#visibility)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ destroy](#destroy)
- [ destroyRenderData](#destroyRenderData)
- [ getBlendState](#getBlendState)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getMaterial](#getMaterial)
- [ getMaterialInstance](#getMaterialInstance)
- [ getRenderMaterial](#getRenderMaterial)
- [ markAsDirty](#markAsDirty)
- [ markForUpdateRenderData](#markForUpdateRenderData)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ onRestore](#onRestore)
- [ postUpdateAssembler](#postUpdateAssembler)
- [ requestRenderData](#requestRenderData)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setMaterial](#setMaterial)
- [ setMaterialInstance](#setMaterialInstance)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ updateAssembler](#updateAssembler)
- [ updateBlendHash](#updateBlendHash)
</div>

## Properties


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


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


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


### stencilStage
<div style="margin-left: 10px;">



**`en`** The component stencil stage (please do not any modification directly on this object)




•  **stencilStage**:
`Stage`  = `Stage.DISABLED`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L274)&nbsp;


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




•  **color**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/ui-static-batch.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/ui-static-batch.ts#L62)&nbsp;   [cocos/2d/components/ui-static-batch.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/ui-static-batch.ts#L66)&nbsp;


___


### customMaterial
<div style="margin-left: 10px;">



**`en`** The customMaterial




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


### drawBatchList
<div style="margin-left: 10px;">




•  **drawBatchList**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/ui-static-batch.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/ui-static-batch.ts#L74)&nbsp;


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

• **new UIStaticBatch**(`name: string`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L194)&nbsp;


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



**`en`** Destroy current render data.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L401)&nbsp;
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
### markAsDirty

<div style="margin-left: 10px;">

▸   **markAsDirty**<`void`\> : `void`



**`en`** 
Recollect data tags.
The render data will be recollected during the render phase of the current frame, and the next frame will be rendered using fixed data.
Note: 尽量不要频繁调用此接口, 会有一定内存损耗.





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/components/ui-static-batch.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/ui-static-batch.ts#L145)&nbsp;
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

##### Defined in &nbsp;   [cocos/2d/components/ui-static-batch.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/ui-static-batch.ts#L96)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:345](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L345)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:332](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L332)&nbsp;
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

##### Defined in &nbsp;   [cocos/2d/components/ui-static-batch.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/ui-static-batch.ts#L84)&nbsp;
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



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `render` | `Batcher2D` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/components/ui-static-batch.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/ui-static-batch.ts#L121)&nbsp;
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
### updateAssembler

<div style="margin-left: 10px;">

▸   **updateAssembler**<`void`\>(`render: Batcher2D`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `render` | `Batcher2D` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/components/ui-static-batch.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/ui-static-batch.ts#L106)&nbsp;
___
### updateBlendHash

<div style="margin-left: 10px;">

▸   **updateBlendHash**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L318)&nbsp;
___
<!---->




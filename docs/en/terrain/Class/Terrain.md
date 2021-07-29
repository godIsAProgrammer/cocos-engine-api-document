
## Class: Terrain


`extend:`
[Component](docs/en/component/Class/Component.md)












**`en`** Terrain


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  system](#system)
- [ node](#node)
- [ blockCount](#blockCount)
- [ effectAsset](#effectAsset)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ heights](#heights)
- [ hideFlags](#hideFlags)
- [ info](#info)
- [ isValid](#isValid)
- [ lightMapSize](#lightMapSize)
- [ name](#name)
- [ receiveShadow](#receiveShadow)
- [ size](#size)
- [ tileCount](#tileCount)
- [ tileSize](#tileSize)
- [ useNormalMap](#useNormalMap)
- [ usePBR](#usePBR)
- [ uuid](#uuid)
- [ valid](#valid)
- [ vertexCount](#vertexCount)
- [ weightMapSize](#weightMapSize)
- [ weights](#weights)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ addLayer](#addLayer)
- [ build](#build)
- [ destroy](#destroy)
- [ exportAsset](#exportAsset)
- [ exportHeightField](#exportHeightField)
- [ getBlock](#getBlock)
- [ getBlockLayer](#getBlockLayer)
- [ getBlockLayers](#getBlockLayers)
- [ getBlocks](#getBlocks)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getEffectAsset](#getEffectAsset)
- [ getHeight](#getHeight)
- [ getHeightAt](#getHeightAt)
- [ getHeightClamp](#getHeightClamp)
- [ getHeightField](#getHeightField)
- [ getLayer](#getLayer)
- [ getMaxWeightLayerAt](#getMaxWeightLayerAt)
- [ getNormal](#getNormal)
- [ getNormalAt](#getNormalAt)
- [ getPosition](#getPosition)
- [ getWeight](#getWeight)
- [ getWeightAt](#getWeightAt)
- [ importHeightField](#importHeightField)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ onRestore](#onRestore)
- [ rayCheck](#rayCheck)
- [ rebuild](#rebuild)
- [ removeLayer](#removeLayer)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setBlockLayer](#setBlockLayer)
- [ setHeight](#setHeight)
- [ setLayer](#setLayer)
- [ setWeight](#setWeight)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ update](#update)
</div>

## Properties


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


### blockCount
<div style="margin-left: 10px;">




**`en`** get block count




•  **blockCount**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:973](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L973)&nbsp;


___


### effectAsset
<div style="margin-left: 10px;">




**`en`** Terrain effect asset




•  **effectAsset**:
 ``null | EffectAsset`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:867](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L867)&nbsp;   [cocos/terrain/terrain.ts:878](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L878)&nbsp;


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


### heights
<div style="margin-left: 10px;">




**`en`** get height buffer




•  **heights**:
 ``Uint16Array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:997](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L997)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### info
<div style="margin-left: 10px;">




**`en`** get terrain info




•  **info**:
 ``TerrainInfo`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1022](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1022)&nbsp;


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


### lightMapSize
<div style="margin-left: 10px;">




**`en`** get light map size




•  **lightMapSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:981](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L981)&nbsp;


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




**`en`** Receive shadow




•  **receiveShadow**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:887](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L887)&nbsp;   [cocos/terrain/terrain.ts:891](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L891)&nbsp;


___


### size
<div style="margin-left: 10px;">




**`en`** get terrain size




•  **size**:
 ``Size`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:934](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L934)&nbsp;


___


### tileCount
<div style="margin-left: 10px;">




**`en`** get tile count




•  **tileCount**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:953](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L953)&nbsp;


___


### tileSize
<div style="margin-left: 10px;">




**`en`** get tile size




•  **tileSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:945](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L945)&nbsp;


___


### useNormalMap
<div style="margin-left: 10px;">




**`en`** Use normal map




•  **useNormalMap**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:903](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L903)&nbsp;   [cocos/terrain/terrain.ts:907](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L907)&nbsp;


___


### usePBR
<div style="margin-left: 10px;">




**`en`** Use pbr material




•  **usePBR**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:919](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L919)&nbsp;   [cocos/terrain/terrain.ts:923](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L923)&nbsp;


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


### valid
<div style="margin-left: 10px;">




**`en`** check valid




•  **valid**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1013](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1013)&nbsp;


___


### vertexCount
<div style="margin-left: 10px;">




**`en`** get vertex count




•  **vertexCount**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:961](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L961)&nbsp;


___


### weightMapSize
<div style="margin-left: 10px;">




**`en`** get weight map size




•  **weightMapSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:989](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L989)&nbsp;


___


### weights
<div style="margin-left: 10px;">




**`en`** get weight buffer




•  **weights**:
 ``Uint8Array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1005](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1005)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Terrain**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:830](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L830)&nbsp;


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
### addLayer
<div style="margin-left: 10px;">

▸   **addLayer**<`number`\>(`layer: TerrainLayer`) : `number`




**`en`** add layer




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `layer` | `TerrainLayer` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1257](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1257)&nbsp;
___
### build
<div style="margin-left: 10px;">

▸   **build**<`void`\>(`info: TerrainInfo`) : `void`




**`en`** build




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TerrainInfo` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1037](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1037)&nbsp;
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
### exportAsset
<div style="margin-left: 10px;">

▸   **exportAsset**<`TerrainAsset`\> : `TerrainAsset`




<!---->
<!--    #### Returns `TerrainAsset` -->
<!---->


##### Returns `TerrainAsset`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1134)&nbsp;
___
### exportHeightField
<div style="margin-left: 10px;">

▸   **exportHeightField**<`void`\>(`hf: HeightField, heightScale: number`) : `void`




**`en`** export height field




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `hf` | `HeightField` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `heightScale` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1116)&nbsp;
___
### getBlock
<div style="margin-left: 10px;">

▸   **getBlock**<`TerrainBlock`\>(`i: number, j: number`) : `TerrainBlock`




**`en`** get block




<!---->
<!--    #### Returns `TerrainBlock` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `TerrainBlock`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1622](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1622)&nbsp;
___
### getBlockLayer
<div style="margin-left: 10px;">

▸   **getBlockLayer**<`number`\>(`i: number, j: number, index: number`) : `number`




**`en`** get block layer




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1604)&nbsp;
___
### getBlockLayers
<div style="margin-left: 10px;">

▸   **getBlockLayers**(`i: number, j: number`)




**`en`** get block layers




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1589](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1589)&nbsp;
___
### getBlocks
<div style="margin-left: 10px;">

▸   **getBlocks**




**`en`** get all blocks




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1630](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1630)&nbsp;
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
### getEffectAsset
<div style="margin-left: 10px;">

▸   **getEffectAsset**<`EffectAsset`\> : `EffectAsset`




<!---->
<!--    #### Returns `EffectAsset` -->
<!---->


##### Returns `EffectAsset`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1170)&nbsp;
___
### getHeight
<div style="margin-left: 10px;">

▸   **getHeight**<`number`\>(`i: number, j: number`) : `number`




**`en`** get height




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1325)&nbsp;
___
### getHeightAt
<div style="margin-left: 10px;">

▸   **getHeightAt**(`x: number, y: number`)




**`en`** get height by point




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

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1344)&nbsp;
___
### getHeightClamp
<div style="margin-left: 10px;">

▸   **getHeightClamp**<`number`\>(`i: number, j: number`) : `number`




**`en`** set height




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1333)&nbsp;
___
### getHeightField
<div style="margin-left: 10px;">

▸   **getHeightField**<`Uint16Array`\> : `Uint16Array`




<!---->
<!--    #### Returns `Uint16Array` -->
<!---->


##### Returns `Uint16Array`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1308)&nbsp;
___
### getLayer
<div style="margin-left: 10px;">

▸   **getLayer**(`id: number`)




**`en`** get layer




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `id` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1288)&nbsp;
___
### getMaxWeightLayerAt
<div style="margin-left: 10px;">

▸   **getMaxWeightLayerAt**(`x: number, y: number`)




**`en`** get max weight layer by point




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

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1548](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1548)&nbsp;
___
### getNormal
<div style="margin-left: 10px;">

▸   **getNormal**<`Vec3`\>(`i: number, j: number`) : `Vec3`




**`en`** get normal




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1396](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1396)&nbsp;
___
### getNormalAt
<div style="margin-left: 10px;">

▸   **getNormalAt**(`x: number, y: number`)




**`en`** get normal by point




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

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1411](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1411)&nbsp;
___
### getPosition
<div style="margin-left: 10px;">

▸   **getPosition**<`Vec3`\>(`i: number, j: number`) : `Vec3`




**`en`** get position




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1300)&nbsp;
___
### getWeight
<div style="margin-left: 10px;">

▸   **getWeight**<`Vec4`\>(`i: number, j: number`) : `Vec4`




**`en`** get weight




<!---->
<!--    #### Returns `Vec4` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `Vec4`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1477)&nbsp;
___
### getWeightAt
<div style="margin-left: 10px;">

▸   **getWeightAt**(`x: number, y: number`)




**`en`** get normal by point




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

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1493](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1493)&nbsp;
___
### importHeightField
<div style="margin-left: 10px;">

▸   **importHeightField**<`void`\>(`hf: HeightField, heightScale: number`) : `void`




**`en`** import height field




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `hf` | `HeightField` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `heightScale` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1091](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1091)&nbsp;
___
### onDestroy
<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1226)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1219)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1213)&nbsp;
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

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1178)&nbsp;
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

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1241](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1241)&nbsp;
___
### rayCheck
<div style="margin-left: 10px;">

▸   **rayCheck**(`start: Vec3, dir: Vec3, step: number, worldSpace: boolean`)




**`en`** ray check




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `start` | `Vec3` | ray start  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `dir` | `Vec3` | ray direction  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `step` | `number` | ray step  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldSpace` | `boolean` | is world space  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1642](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1642)&nbsp;
___
### rebuild
<div style="margin-left: 10px;">

▸   **rebuild**<`void`\>(`info: TerrainInfo`) : `void`




**`en`** rebuild




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TerrainInfo` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1051](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1051)&nbsp;
___
### removeLayer
<div style="margin-left: 10px;">

▸   **removeLayer**<`void`\>(`id: number`) : `void`




**`en`** remove layer




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `id` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1280](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1280)&nbsp;
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
### setBlockLayer
<div style="margin-left: 10px;">

▸   **setBlockLayer**<`void`\>(`i: number, j: number, index: number, layerId: number`) : `void`




**`en`** set block layer




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `layerId` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1613](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1613)&nbsp;
___
### setHeight
<div style="margin-left: 10px;">

▸   **setHeight**<`void`\>(`i: number, j: number, h: number`) : `void`




**`en`** set height




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `h` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1316](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1316)&nbsp;
___
### setLayer
<div style="margin-left: 10px;">

▸   **setLayer**<`void`\>(`i: number, layer: TerrainLayer`) : `void`




**`en`** set layer




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `layer` | `TerrainLayer` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1272)&nbsp;
___
### setWeight
<div style="margin-left: 10px;">

▸   **setWeight**<`void`\>(`i: number, j: number, w: Vec4`) : `void`




**`en`** set weight




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `Vec4` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1464](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1464)&nbsp;
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
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`deltaTime: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `deltaTime` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1247)&nbsp;
___
<!---->




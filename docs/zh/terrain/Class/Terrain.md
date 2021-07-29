
## Class: Terrain


`extend:`
[Component](docs/zh/component/Class/Component.md)










**`zh`** 地形组件



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


### blockCount
<div style="margin-left: 10px;">



**`zh`** 获得地形块数量





•  **blockCount**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:973](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L973)&nbsp;


___


### effectAsset
<div style="margin-left: 10px;">



**`zh`** 地形特效资源





•  **effectAsset**:
 ``null | EffectAsset`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:867](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L867)&nbsp;   [cocos/terrain/terrain.ts:878](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L878)&nbsp;


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


### heights
<div style="margin-left: 10px;">



**`zh`** 获得高度缓存





•  **heights**:
 ``Uint16Array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:997](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L997)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### info
<div style="margin-left: 10px;">



**`zh`** 获得地形信息





•  **info**:
 ``TerrainInfo`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1022](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1022)&nbsp;


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


### lightMapSize
<div style="margin-left: 10px;">



**`zh`** 获得光照图大小





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



**`zh`** 是否接受阴影





•  **receiveShadow**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:887](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L887)&nbsp;   [cocos/terrain/terrain.ts:891](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L891)&nbsp;


___


### size
<div style="margin-left: 10px;">



**`zh`** 获得地形大小





•  **size**:
 ``Size`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:934](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L934)&nbsp;


___


### tileCount
<div style="margin-left: 10px;">



**`zh`** 获得栅格数量





•  **tileCount**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:953](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L953)&nbsp;


___


### tileSize
<div style="margin-left: 10px;">



**`zh`** 获得栅格大小





•  **tileSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:945](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L945)&nbsp;


___


### useNormalMap
<div style="margin-left: 10px;">



**`zh`** 是否使用法线贴图





•  **useNormalMap**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:903](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L903)&nbsp;   [cocos/terrain/terrain.ts:907](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L907)&nbsp;


___


### usePBR
<div style="margin-left: 10px;">



**`zh`** 是否使用物理材质





•  **usePBR**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:919](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L919)&nbsp;   [cocos/terrain/terrain.ts:923](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L923)&nbsp;


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


### valid
<div style="margin-left: 10px;">



**`zh`** 检测是否有效





•  **valid**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1013](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1013)&nbsp;


___


### vertexCount
<div style="margin-left: 10px;">



**`zh`** 获得顶点数量





•  **vertexCount**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:961](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L961)&nbsp;


___


### weightMapSize
<div style="margin-left: 10px;">



**`zh`** 获得权重图大小





•  **weightMapSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:989](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L989)&nbsp;


___


### weights
<div style="margin-left: 10px;">



**`zh`** 获得权重缓存





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

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:830](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L830)&nbsp;


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
### addLayer

<div style="margin-left: 10px;">

▸   **addLayer**<`number`\>(`layer: TerrainLayer`) : `number`



**`zh`** 添加纹理层




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



**`zh`** 构建地形




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




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### exportAsset

<div style="margin-left: 10px;">

▸   **exportAsset**<`TerrainAsset`\> : `TerrainAsset`




##### Returns `TerrainAsset`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1134)&nbsp;
___
### exportHeightField

<div style="margin-left: 10px;">

▸   **exportHeightField**<`void`\>(`hf: HeightField, heightScale: number`) : `void`



**`zh`** 导出高度图




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `hf` | `HeightField` | - |
| `heightScale` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1116)&nbsp;
___
### getBlock

<div style="margin-left: 10px;">

▸   **getBlock**<`TerrainBlock`\>(`i: number, j: number`) : `TerrainBlock`



**`zh`** 获得地形块对象




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |


##### Returns `TerrainBlock`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1622](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1622)&nbsp;
___
### getBlockLayer

<div style="margin-left: 10px;">

▸   **getBlockLayer**<`number`\>(`i: number, j: number, index: number`) : `number`



**`zh`** 获得地形块纹理层




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |
| `index` | `number` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1604)&nbsp;
___
### getBlockLayers

<div style="margin-left: 10px;">

▸   **getBlockLayers**(`i: number, j: number`)



**`zh`** 获得地形块纹理层




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1589](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1589)&nbsp;
___
### getBlocks

<div style="margin-left: 10px;">

▸   **getBlocks**



**`zh`** 获得地形块缓存





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1630](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1630)&nbsp;
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
### getEffectAsset

<div style="margin-left: 10px;">

▸   **getEffectAsset**<`EffectAsset`\> : `EffectAsset`




##### Returns `EffectAsset`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1170)&nbsp;
___
### getHeight

<div style="margin-left: 10px;">

▸   **getHeight**<`number`\>(`i: number, j: number`) : `number`



**`zh`** 获得地形上的高度




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1325)&nbsp;
___
### getHeightAt

<div style="margin-left: 10px;">

▸   **getHeightAt**(`x: number, y: number`)



**`zh`** 根据点的坐标获得高度




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1344)&nbsp;
___
### getHeightClamp

<div style="margin-left: 10px;">

▸   **getHeightClamp**<`number`\>(`i: number, j: number`) : `number`



**`zh`** 设置高度




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1333)&nbsp;
___
### getHeightField

<div style="margin-left: 10px;">

▸   **getHeightField**<`Uint16Array`\> : `Uint16Array`




##### Returns `Uint16Array`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1308)&nbsp;
___
### getLayer

<div style="margin-left: 10px;">

▸   **getLayer**(`id: number`)



**`zh`** 获得纹理层




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



**`zh`** 根据点的坐标获得权重最大的纹理层




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1548](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1548)&nbsp;
___
### getNormal

<div style="margin-left: 10px;">

▸   **getNormal**<`Vec3`\>(`i: number, j: number`) : `Vec3`



**`zh`** 获得法线




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |


##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1396](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1396)&nbsp;
___
### getNormalAt

<div style="margin-left: 10px;">

▸   **getNormalAt**(`x: number, y: number`)



**`zh`** 根据点的坐标获得法线




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1411](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1411)&nbsp;
___
### getPosition

<div style="margin-left: 10px;">

▸   **getPosition**<`Vec3`\>(`i: number, j: number`) : `Vec3`



**`zh`** 获得地形上的位置




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |


##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1300)&nbsp;
___
### getWeight

<div style="margin-left: 10px;">

▸   **getWeight**<`Vec4`\>(`i: number, j: number`) : `Vec4`



**`zh`** 获得权重




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |


##### Returns `Vec4`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1477)&nbsp;
___
### getWeightAt

<div style="margin-left: 10px;">

▸   **getWeightAt**(`x: number, y: number`)



**`zh`** 根据点的坐标获得权重




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1493](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1493)&nbsp;
___
### importHeightField

<div style="margin-left: 10px;">

▸   **importHeightField**<`void`\>(`hf: HeightField, heightScale: number`) : `void`



**`zh`** 导入高度图




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `hf` | `HeightField` | - |
| `heightScale` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1091](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1091)&nbsp;
___
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1226)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1219)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1213)&nbsp;
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

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1178)&nbsp;
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

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1241](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1241)&nbsp;
___
### rayCheck

<div style="margin-left: 10px;">

▸   **rayCheck**(`start: Vec3, dir: Vec3, step: number, worldSpace: boolean`)



**`zh`** 射线检测



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `start` | `Vec3` | ray start  |
| `dir` | `Vec3` | ray direction  |
| `step` | `number` | ray step  |
| `worldSpace` | `boolean` | is world space  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1642](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1642)&nbsp;
___
### rebuild

<div style="margin-left: 10px;">

▸   **rebuild**<`void`\>(`info: TerrainInfo`) : `void`



**`zh`** 重建地形




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



**`zh`** 移除纹理层




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
### setBlockLayer

<div style="margin-left: 10px;">

▸   **setBlockLayer**<`void`\>(`i: number, j: number, index: number, layerId: number`) : `void`



**`zh`** 获得地形块层




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |
| `index` | `number` | - |
| `layerId` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1613](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1613)&nbsp;
___
### setHeight

<div style="margin-left: 10px;">

▸   **setHeight**<`void`\>(`i: number, j: number, h: number`) : `void`



**`zh`** 设置地形上的高度




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |
| `h` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1316](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1316)&nbsp;
___
### setLayer

<div style="margin-left: 10px;">

▸   **setLayer**<`void`\>(`i: number, layer: TerrainLayer`) : `void`



**`zh`** 设置纹理层




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `layer` | `TerrainLayer` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1272)&nbsp;
___
### setWeight

<div style="margin-left: 10px;">

▸   **setWeight**<`void`\>(`i: number, j: number, w: Vec4`) : `void`



**`zh`** 设置权重




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |
| `j` | `number` | - |
| `w` | `Vec4` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1464](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1464)&nbsp;
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

▸   **update**<`void`\>(`deltaTime: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `deltaTime` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:1247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L1247)&nbsp;
___
<!---->




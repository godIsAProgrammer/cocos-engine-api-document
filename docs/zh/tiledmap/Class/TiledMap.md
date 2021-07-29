
## Class: TiledMap


`extend:`
[Component](docs/zh/component/Class/Component.md)










**`zh`** 在场景中渲染一个 tmx 格式的 Tile Map。


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Orientation](#Orientation)
- [ **`static`**  Property](#Property)
- [ **`static`**  RenderOrder](#RenderOrder)
- [ **`static`**  StaggerAxis](#StaggerAxis)
- [ **`static`**  StaggerIndex](#StaggerIndex)
- [ **`static`**  TMXObjectType](#TMXObjectType)
- [ **`static`**  TileFlag](#TileFlag)
- [ **`static`**  system](#system)
- [ node](#node)
- [ enableCulling](#enableCulling)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ tmxAsset](#tmxAsset)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ destroy](#destroy)
- [ doCleanupImageCache](#doCleanupImageCache)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getLayer](#getLayer)
- [ getLayers](#getLayers)
- [ getMapOrientation](#getMapOrientation)
- [ getMapSize](#getMapSize)
- [ getObjectGroup](#getObjectGroup)
- [ getObjectGroups](#getObjectGroups)
- [ getProperties](#getProperties)
- [ getPropertiesForGID](#getPropertiesForGID)
- [ getProperty](#getProperty)
- [ getTileSize](#getTileSize)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ update](#update)
</div>

## Properties


### Orientation
<div style="margin-left: 10px;">




• `static` **Orientation**:
`Orientation`  = `Orientation`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L85)&nbsp;


___


### Property
<div style="margin-left: 10px;">




• `static` **Property**:
`Property`  = `Property`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L86)&nbsp;


___


### RenderOrder
<div style="margin-left: 10px;">




• `static` **RenderOrder**:
`RenderOrder`  = `RenderOrder`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L91)&nbsp;


___


### StaggerAxis
<div style="margin-left: 10px;">




• `static` **StaggerAxis**:
`StaggerAxis`  = `StaggerAxis`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L88)&nbsp;


___


### StaggerIndex
<div style="margin-left: 10px;">




• `static` **StaggerIndex**:
`StaggerIndex`  = `StaggerIndex`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L89)&nbsp;


___


### TMXObjectType
<div style="margin-left: 10px;">




• `static` **TMXObjectType**:
`TMXObjectType`  = `TMXObjectType`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L90)&nbsp;


___


### TileFlag
<div style="margin-left: 10px;">




• `static` **TileFlag**:
`TileFlag`  = `TileFlag`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L87)&nbsp;


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


### enableCulling
<div style="margin-left: 10px;">




•  **enableCulling**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L127)&nbsp;   [cocos/tiledmap/tiled-map.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L130)&nbsp;


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


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### tmxAsset
<div style="margin-left: 10px;">



**`zh`** TiledMap 资源。



**`property`** {TiledMapAsset} tmxAsset



**`default`** ""





•  **tmxAsset**:
 ``TiledMapAsset`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L104)&nbsp;   [cocos/tiledmap/tiled-map.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L108)&nbsp;


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

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new TiledMap**(`name: string`)

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
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### doCleanupImageCache

<div style="margin-left: 10px;">

▸   **doCleanupImageCache**<`void`\>(`texture: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `texture` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:605](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L605)&nbsp;
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
### getLayer

<div style="margin-left: 10px;">

▸   **getLayer**(`layerName: any`)



**`zh`** 获取指定名称的 layer。



**`method`** getLayer



**`example`**

```ts

let layer = titledMap.getLayer("Player");
cc.log(layer);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `layerName` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:257](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L257)&nbsp;
___
### getLayers

<div style="margin-left: 10px;">

▸   **getLayers**



**`zh`** 返回包含所有 layer 的数组。



**`method`** getLayers



**`example`**

```ts

let layers = titledMap.getLayers();
for (let i = 0; i < layers.length; ++i) {
    cc.log("Layers: " + layers[i]);
}

```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:243](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L243)&nbsp;
___
### getMapOrientation

<div style="margin-left: 10px;">

▸   **getMapOrientation**<`Orientation`\> : `Orientation`



**`zh`** 获取地图方向。



**`method`** getMapOrientation



**`example`**

```ts

let mapOrientation = tiledMap.getMapOrientation();
cc.log("Map Orientation: " + mapOrientation);

```




##### Returns `Orientation`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L176)&nbsp;
___
### getMapSize

<div style="margin-left: 10px;">

▸   **getMapSize**<`Size`\> : `Size`



**`zh`** 获取地图大小。



**`method`** getMapSize



**`example`**

```ts

let mapSize = tiledMap.getMapSize();
cc.log("Map Size: " + mapSize);

```




##### Returns `Size`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L150)&nbsp;
___
### getObjectGroup

<div style="margin-left: 10px;">

▸   **getObjectGroup**(`groupName: string`)



**`zh`** 获取指定的 TMXObjectGroup。



**`method`** getObjectGroup



**`example`**

```ts

let group = titledMap.getObjectGroup("Players");
cc.log("ObjectGroup: " + group);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `groupName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:205](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L205)&nbsp;
___
### getObjectGroups

<div style="margin-left: 10px;">

▸   **getObjectGroups**



**`zh`** 获取所有的对象层。



**`method`** getObjectGroups



**`example`**

```ts

let objGroups = titledMap.getObjectGroups();
for (let i = 0; i < objGroups.length; ++i) {
    cc.log("obj: " + objGroups[i]);
}

```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:191](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L191)&nbsp;
___
### getProperties

<div style="margin-left: 10px;">

▸   **getProperties**



**`zh`** 获取地图的属性。



**`method`** getProperties



**`example`**

```ts

let properties = titledMap.getProperties();
for (let i = 0; i < properties.length; ++i) {
    cc.log("Properties: " + properties[i]);
}

```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L228)&nbsp;
___
### getPropertiesForGID

<div style="margin-left: 10px;">

▸   **getPropertiesForGID**(`gid: GID`)



**`zh`** 通过 GID ，获取指定的属性。



**`method`** getPropertiesForGID



**`example`**

```ts

let properties = titledMap.getPropertiesForGID(GID);
cc.log("Properties: " + properties);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `gid` | `GID` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L303)&nbsp;
___
### getProperty

<div style="margin-left: 10px;">

▸   **getProperty**(`propertyName: string`)



**`zh`** 通过属性名称，获取指定的属性。



**`method`** getProperty



**`example`**

```ts

let property = titledMap.getProperty("info");
cc.log("Property: " + property);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `propertyName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L289)&nbsp;
___
### getTileSize

<div style="margin-left: 10px;">

▸   **getTileSize**<`Size`\> : `Size`



**`zh`** 获取地图背景中 tile 元素的大小。



**`method`** getTileSize



**`example`**

```ts

let tileSize = tiledMap.getTileSize();
cc.log("Tile Size: " + tileSize);

```




##### Returns `Size`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L163)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:321](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L321)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L317)&nbsp;
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

##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:615](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L615)&nbsp;
___
<!---->




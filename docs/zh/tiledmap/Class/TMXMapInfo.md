
## Class: TMXMapInfo


&lt;p&gt;cc.TMXMapInfo contains the information about the map like: &lt;br/&gt;
- Map orientation (hexagonal, isometric or orthogonal)&lt;br/&gt;
- Tile size&lt;br/&gt;
- Map size&lt;/p&gt;


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ currentString](#currentString)
- [ layerAttrs](#layerAttrs)
- [ orientation](#orientation)
- [ parentElement](#parentElement)
- [ parentGID](#parentGID)
- [ properties](#properties)
- [ renderOrder](#renderOrder)
- [ storingCharacters](#storingCharacters)
- [ mapHeight](#mapHeight)
- [ mapSize](#mapSize)
- [ mapWidth](#mapWidth)
- [ tileHeight](#tileHeight)
- [ tileSize](#tileSize)
- [ tileWidth](#tileWidth)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  getShortName](#getShortName)
- [ **`static`**  getNameWithPostfix](#getNameWithPostfix)
- [ getAllChildren](#getAllChildren)
- [ getCurrentString](#getCurrentString)
- [ getHexSideLength](#getHexSideLength)
- [ getImageLayers](#getImageLayers)
- [ getLayerAttribs](#getLayerAttribs)
- [ getLayers](#getLayers)
- [ getMapSize](#getMapSize)
- [ getObjectGroups](#getObjectGroups)
- [ getOrientation](#getOrientation)
- [ getParentElement](#getParentElement)
- [ getParentGID](#getParentGID)
- [ getProperties](#getProperties)
- [ getStaggerAxis](#getStaggerAxis)
- [ getStaggerIndex](#getStaggerIndex)
- [ getStoringCharacters](#getStoringCharacters)
- [ getTileAnimations](#getTileAnimations)
- [ getTileProperties](#getTileProperties)
- [ getTileSize](#getTileSize)
- [ getTilesets](#getTilesets)
- [ initWithXML](#initWithXML)
- [ parseXMLString](#parseXMLString)
- [ setCurrentString](#setCurrentString)
- [ setHexSideLength](#setHexSideLength)
- [ setImageLayers](#setImageLayers)
- [ setLayerAttribs](#setLayerAttribs)
- [ setLayers](#setLayers)
- [ setMapSize](#setMapSize)
- [ setObjectGroups](#setObjectGroups)
- [ setOrientation](#setOrientation)
- [ setParentElement](#setParentElement)
- [ setParentGID](#setParentGID)
- [ setProperties](#setProperties)
- [ setStaggerAxis](#setStaggerAxis)
- [ setStaggerIndex](#setStaggerIndex)
- [ setStoringCharacters](#setStoringCharacters)
- [ setTileAnimations](#setTileAnimations)
- [ setTileProperties](#setTileProperties)
- [ setTileSize](#setTileSize)
- [ setTilesets](#setTilesets)
</div>

## Properties


### currentString
<div style="margin-left: 10px;">
Current string stored from characters stream.




**`property`** {String}   currentString




Current string stored from characters stream.

•  **currentString**:
`string | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:185](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L185)&nbsp;


___


### layerAttrs
<div style="margin-left: 10px;">
Layer attributes.




**`property`** {Object}   layerAttrs




Layer attributes.

•  **layerAttrs**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L173)&nbsp;


___


### orientation
<div style="margin-left: 10px;">
Map orientation.




**`property`** {Number}   orientation




Map orientation.

•  **orientation**:
`Orientation | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L155)&nbsp;


___


### parentElement
<div style="margin-left: 10px;">
Parent element.




**`property`** {Object}   parentElement




Parent element.

•  **parentElement**:
`Record | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L161)&nbsp;


___


### parentGID
<div style="margin-left: 10px;">
Parent GID.




**`property`** {Number}   parentGID




Parent GID.

•  **parentGID**:
`MixedGID`  = `0 as unknown as any`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:167](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L167)&nbsp;


___


### properties
<div style="margin-left: 10px;">
Properties of the map info.




**`property`** {Array}    properties




Properties of the map info.

•  **properties**:
`PropertiesInfo`  = `{} as any`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:149](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L149)&nbsp;


___


### renderOrder
<div style="margin-left: 10px;">




•  **renderOrder**:
`RenderOrder`  = `RenderOrder.RightDown`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L186)&nbsp;


___


### storingCharacters
<div style="margin-left: 10px;">
Is reading storing characters stream.




**`property`** {Boolean}  storingCharacters




Is reading storing characters stream.

•  **storingCharacters**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L179)&nbsp;


___


### mapHeight
<div style="margin-left: 10px;">




•  **mapHeight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L304)&nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:307](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L307)&nbsp;


___


### mapSize
<div style="margin-left: 10px;">




•  **mapSize**:
 ``Size`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L192)&nbsp;


___


### mapWidth
<div style="margin-left: 10px;">




•  **mapWidth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:297](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L297)&nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L300)&nbsp;


___


### tileHeight
<div style="margin-left: 10px;">
Height of a tile



Height of a tile

•  **tileHeight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:339](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L339)&nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L343)&nbsp;


___


### tileSize
<div style="margin-left: 10px;">




•  **tileSize**:
 ``Size`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L194)&nbsp;


___


### tileWidth
<div style="margin-left: 10px;">




•  **tileWidth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:328](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L328)&nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:332](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L332)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new TMXMapInfo**(`tmxFile: string, tsxContentMap: undefined, spfTexturesMap: undefined, textureSizes: undefined, imageLayerTextures: undefined`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `tmxFile` | `string` |





| Name | Type |
| :------ | :------ |
| `tsxContentMap` | `` |





| Name | Type |
| :------ | :------ |
| `spfTexturesMap` | `` |





| Name | Type |
| :------ | :------ |
| `textureSizes` | `` |





| Name | Type |
| :------ | :------ |
| `imageLayerTextures` | `` |





</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:211](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L211)&nbsp;


---

<!---->
## Methods

### getShortName
<div style="margin-left: 10px;">

▸ `static`  **getShortName**<`string`\>(`name: string`) : `string`




<!---->
<!--    #### Returns `string` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |



##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:1070](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L1070)&nbsp;
___
### getNameWithPostfix
<div style="margin-left: 10px;">

▸ `static`  **getNameWithPostfix**<`string`\>(`name: string`) : `string`




<!---->
<!--    #### Returns `string` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |



##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:1063](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L1063)&nbsp;
___
### getAllChildren
<div style="margin-left: 10px;">

▸   **getAllChildren**




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:414](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L414)&nbsp;
___
### getCurrentString
<div style="margin-left: 10px;">

▸   **getCurrentString**


Gets the currentString


<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:1051](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L1051)&nbsp;
___
### getHexSideLength
<div style="margin-left: 10px;">

▸   **getHexSideLength**<`number`\> : `number`


Gets Hex side length.


<!---->
<!--    #### Returns `number` 
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:268](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L268)&nbsp;
___
### getImageLayers
<div style="margin-left: 10px;">

▸   **getImageLayers**


ImageLayers


<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:368](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L368)&nbsp;
___
### getLayerAttribs
<div style="margin-left: 10px;">

▸   **getLayerAttribs**<`number`\> : `number`


Layer attribute


<!---->
<!--    #### Returns `number` 
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:454](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L454)&nbsp;
___
### getLayers
<div style="margin-left: 10px;">

▸   **getLayers**


Layers


<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L351)&nbsp;
___
### getMapSize
<div style="margin-left: 10px;">

▸   **getMapSize**<`Size`\> : `Size`


Map width &amp; height


<!---->
<!--    #### Returns `Size` 
-->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L284)&nbsp;
___
### getObjectGroups
<div style="margin-left: 10px;">

▸   **getObjectGroups**


ObjectGroups


<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L401)&nbsp;
___
### getOrientation
<div style="margin-left: 10px;">

▸   **getOrientation**




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L221)&nbsp;
___
### getParentElement
<div style="margin-left: 10px;">

▸   **getParentElement**


parent element


<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:422](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L422)&nbsp;
___
### getParentGID
<div style="margin-left: 10px;">

▸   **getParentGID**<`number`\> : `number`


parent GID


<!---->
<!--    #### Returns `number` 
-->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:438](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L438)&nbsp;
___
### getProperties
<div style="margin-left: 10px;">

▸   **getProperties**


Properties


<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:486](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L486)&nbsp;
___
### getStaggerAxis
<div style="margin-left: 10px;">

▸   **getStaggerAxis**


Gets the staggerAxis of map.


<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L236)&nbsp;
___
### getStaggerIndex
<div style="margin-left: 10px;">

▸   **getStaggerIndex**


Gets stagger index


<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:252](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L252)&nbsp;
___
### getStoringCharacters
<div style="margin-left: 10px;">

▸   **getStoringCharacters**<`boolean`\> : `boolean`


Is reading storing characters stream


<!---->
<!--    #### Returns `boolean` 
-->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:470](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L470)&nbsp;
___
### getTileAnimations
<div style="margin-left: 10px;">

▸   **getTileAnimations**<`TiledAnimationType`\> : `TiledAnimationType`


Gets the tile animations.


<!---->
<!--    #### Returns `TiledAnimationType` 
-->
<!---->


##### Returns `TiledAnimationType`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:1027](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L1027)&nbsp;
___
### getTileProperties
<div style="margin-left: 10px;">

▸   **getTileProperties**<`Map`\> : `Map`


Gets the tile properties.


<!---->
<!--    #### Returns `Map` 
-->
<!---->


##### Returns `Map`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:1035](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L1035)&nbsp;
___
### getTileSize
<div style="margin-left: 10px;">

▸   **getTileSize**<`Size`\> : `Size`


Tiles width &amp; height


<!---->
<!--    #### Returns `Size` 
-->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L315)&nbsp;
___
### getTilesets
<div style="margin-left: 10px;">

▸   **getTilesets**


tilesets


<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L385)&nbsp;
___
### initWithXML
<div style="margin-left: 10px;">

▸   **initWithXML**<`HTMLElement`\>(`tmxString: string, tsxMap: undefined, spfTextureMap: undefined, textureSizes: undefined, imageLayerTextures: undefined`) : `HTMLElement`


initializes a TMX format with an XML string and a TMX resource path


<!---->
<!--    #### Returns `HTMLElement` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `tmxString` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `tsxMap` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `spfTextureMap` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `textureSizes` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `imageLayerTextures` |  | - |



##### Returns `HTMLElement`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:505](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L505)&nbsp;
___
### parseXMLString
<div style="margin-left: 10px;">

▸   **parseXMLString**<`HTMLElement`\>(`xmlStr: string, tilesetFirstGid: undefined | number`) : `HTMLElement`


Initializes parsing of an XML string, either a tmx (Map) string or tsx (Tileset) string


<!---->
<!--    #### Returns `HTMLElement` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `xmlStr` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `tilesetFirstGid` | `undefined \| number` | - |



##### Returns `HTMLElement`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:537](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L537)&nbsp;
___
### setCurrentString
<div style="margin-left: 10px;">

▸   **setCurrentString**<`void`\>(`currentString: string`) : `void`


Set the currentString


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `currentString` | `string` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:1059](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L1059)&nbsp;
___
### setHexSideLength
<div style="margin-left: 10px;">

▸   **setHexSideLength**<`void`\>(`value: number`) : `void`


Set the Hex side length.


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `number` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L276)&nbsp;
___
### setImageLayers
<div style="margin-left: 10px;">

▸   **setImageLayers**<`void`\>(`value: TMXImageLayerInfo`) : `void`


ImageLayers


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `TMXImageLayerInfo` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:376](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L376)&nbsp;
___
### setLayerAttribs
<div style="margin-left: 10px;">

▸   **setLayerAttribs**<`void`\>(`value: any`) : `void`


Layer attribute


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `any` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:462](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L462)&nbsp;
___
### setLayers
<div style="margin-left: 10px;">

▸   **setLayers**<`void`\>(`value: TMXLayerInfo`) : `void`


Layers


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `TMXLayerInfo` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:359](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L359)&nbsp;
___
### setMapSize
<div style="margin-left: 10px;">

▸   **setMapSize**<`void`\>(`value: Size`) : `void`


Map width &amp; height


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `Size` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L292)&nbsp;
___
### setObjectGroups
<div style="margin-left: 10px;">

▸   **setObjectGroups**<`void`\>(`value: TMXObjectGroupInfo`) : `void`


ObjectGroups


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `TMXObjectGroupInfo` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:409](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L409)&nbsp;
___
### setOrientation
<div style="margin-left: 10px;">

▸   **setOrientation**<`void`\>(`value: Orientation`) : `void`


Set the Map orientation.


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `Orientation` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L229)&nbsp;
___
### setParentElement
<div style="margin-left: 10px;">

▸   **setParentElement**<`void`\>(`value: any`) : `void`


parent element


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `any` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L430)&nbsp;
___
### setParentGID
<div style="margin-left: 10px;">

▸   **setParentGID**<`void`\>(`value: any`) : `void`


parent GID


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `any` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:446](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L446)&nbsp;
___
### setProperties
<div style="margin-left: 10px;">

▸   **setProperties**<`void`\>(`value: any`) : `void`


Properties


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `any` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:494](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L494)&nbsp;
___
### setStaggerAxis
<div style="margin-left: 10px;">

▸   **setStaggerAxis**<`void`\>(`value: StaggerAxis`) : `void`


Set the staggerAxis of map.


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `StaggerAxis` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L244)&nbsp;
___
### setStaggerIndex
<div style="margin-left: 10px;">

▸   **setStaggerIndex**<`void`\>(`value: any`) : `void`


Set the stagger index.


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `any` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L260)&nbsp;
___
### setStoringCharacters
<div style="margin-left: 10px;">

▸   **setStoringCharacters**<`void`\>(`value: any`) : `void`


Is reading storing characters stream


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `any` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:478](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L478)&nbsp;
___
### setTileAnimations
<div style="margin-left: 10px;">

▸   **setTileAnimations**<`void`\>(`animations: TiledAnimationType`) : `void`


Sets the tile animations.


<!---->
<!--    #### Returns `void` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `animations` | `TiledAnimationType` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:1019](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L1019)&nbsp;
___
### setTileProperties
<div style="margin-left: 10px;">

▸   **setTileProperties**<`void`\>(`tileProperties: Map`) : `void`


Set the tile properties.


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `tileProperties` | `Map` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:1043](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L1043)&nbsp;
___
### setTileSize
<div style="margin-left: 10px;">

▸   **setTileSize**<`void`\>(`value: Size`) : `void`


Tiles width &amp; height


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `Size` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:323](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L323)&nbsp;
___
### setTilesets
<div style="margin-left: 10px;">

▸   **setTilesets**<`void`\>(`value: TMXTilesetInfo`) : `void`


tilesets


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `TMXTilesetInfo` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tmx-xml-parser.ts:393](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tmx-xml-parser.ts#L393)&nbsp;
___
<!---->




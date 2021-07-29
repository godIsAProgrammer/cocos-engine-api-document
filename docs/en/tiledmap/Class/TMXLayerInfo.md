
## Class: TMXLayerInfo


cc.TMXLayerInfo contains the information about the layers like:
- Layer name
- Layer size
- Layer opacity at creation time (it can be modified at runtime)
- Whether the layer is visible (if it&#x27;s not visible, then the CocosNode won&#x27;t be created)
This information is obtained from the TMX file.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ layerSize](#layerSize)
- [ maxGID](#maxGID)
- [ minGID](#minGID)
- [ name](#name)
- [ offset](#offset)
- [ opacity](#opacity)
- [ ownTiles](#ownTiles)
- [ properties](#properties)
- [ tiles](#tiles)
- [ tintColor](#tintColor)
- [ visible](#visible)

### Methods

- [ getProperties](#getProperties)
- [ setProperties](#setProperties)
</div>

## Properties


### layerSize
<div style="margin-left: 10px;">




•  **layerSize**:
`Size | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:480](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L480)&nbsp;


___


### maxGID
<div style="margin-left: 10px;">




•  **maxGID**:
`GID`  = `0 as unknown as GID`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:486](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L486)&nbsp;


___


### minGID
<div style="margin-left: 10px;">




•  **minGID**:
`GID`  = `100000 as unknown as GID`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L485)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:479](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L479)&nbsp;


___


### offset
<div style="margin-left: 10px;">




•  **offset**:
`Vec2`  = `new Vec2(0, 0)`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:487](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L487)&nbsp;


___


### opacity
<div style="margin-left: 10px;">




•  **opacity**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:483](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L483)&nbsp;


___


### ownTiles
<div style="margin-left: 10px;">




•  **ownTiles**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:484](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L484)&nbsp;


___


### properties
<div style="margin-left: 10px;">
Properties of the layer info.



**`property`** {Object} properties




Properties of the layer info.

•  **properties**:
`PropertiesInfo`  = `{} as any`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:478](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L478)&nbsp;


___


### tiles
<div style="margin-left: 10px;">




•  **tiles**:
` | Uint32Array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L481)&nbsp;


___


### tintColor
<div style="margin-left: 10px;">




•  **tintColor**:
`Color | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:488](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L488)&nbsp;


___


### visible
<div style="margin-left: 10px;">




•  **visible**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:482](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L482)&nbsp;


___

<!---->
## Methods

### getProperties

<div style="margin-left: 10px;">

▸   **getProperties**


Gets the Properties.


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:494](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L494)&nbsp;
___
### setProperties

<div style="margin-left: 10px;">

▸   **setProperties**<`void`\>(`value: PropertiesInfo`) : `void`


Set the Properties.

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `PropertiesInfo` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:502](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L502)&nbsp;
___
<!---->




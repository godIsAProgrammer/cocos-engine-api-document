
## Class: TMXTilesetInfo


&lt;p&gt;cc.TMXTilesetInfo contains the information about the tilesets like: &lt;br /&gt;
- Tileset name&lt;br /&gt;
- Tileset spacing&lt;br /&gt;
- Tileset margin&lt;br /&gt;
- size of the tiles&lt;br /&gt;
- Image used for the tiles&lt;br /&gt;
- Image size&lt;br /&gt;


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ collection](#collection)
- [ firstGid](#firstGid)
- [ imageName](#imageName)
- [ imageSize](#imageSize)
- [ margin](#margin)
- [ name](#name)
- [ sourceImage](#sourceImage)
- [ spacing](#spacing)
- [ tileOffset](#tileOffset)

### Methods

- [ rectForGID](#rectForGID)
</div>

## Properties


### collection
<div style="margin-left: 10px;">




•  **collection**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:382](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L382)&nbsp;


___


### firstGid
<div style="margin-left: 10px;">
First grid




**`property`** {number} firstGid




First grid

•  **firstGid**:
`GID`  = `0 as any`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:353](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L353)&nbsp;


___


### imageName
<div style="margin-left: 10px;">




•  **imageName**:
`string | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:374](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L374)&nbsp;


___


### imageSize
<div style="margin-left: 10px;">




•  **imageSize**:
`Size`  = `new Size(0, 0)`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:376](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L376)&nbsp;


___


### margin
<div style="margin-left: 10px;">
Margin




**`property`** {number} margin




Margin

•  **margin**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L366)&nbsp;


___


### name
<div style="margin-left: 10px;">
Tileset name




**`property`** {string} name




Tileset name

•  **name**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L348)&nbsp;


___


### sourceImage
<div style="margin-left: 10px;">
Texture containing the tiles (should be sprite sheet / texture atlas)




**`property`** {cc.SpriteFrame} sourceImage




Texture containing the tiles (should be sprite sheet / texture atlas)

•  **sourceImage**:
`SpriteFrame` 
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:371](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L371)&nbsp;


___


### spacing
<div style="margin-left: 10px;">
Spacing




**`property`** {number} spacing




Spacing

•  **spacing**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:359](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L359)&nbsp;


___


### tileOffset
<div style="margin-left: 10px;">




•  **tileOffset**:
`Vec2`  = `new Vec2(0, 0)`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:378](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L378)&nbsp;


___

<!---->
## Methods

### rectForGID
<div style="margin-left: 10px;">

▸   **rectForGID**(`gid_: MixedGID | GID, result: TiledGrid`)




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `gid_` | `MixedGID \| GID` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `result` | `TiledGrid` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L384)&nbsp;
___
<!---->




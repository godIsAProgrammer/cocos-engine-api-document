
## Class: TerrainBlock







**`en`** Terrain block


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ layers](#layers)
- [ lightmap](#lightmap)
- [ lightmapUVParam](#lightmapUVParam)
- [ valid](#valid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ build](#build)
- [ destroy](#destroy)
- [ getIndex](#getIndex)
- [ getLayer](#getLayer)
- [ getMaxLayer](#getMaxLayer)
- [ getRect](#getRect)
- [ getTerrain](#getTerrain)
- [ rebuild](#rebuild)
- [ setBrushMaterial](#setBrushMaterial)
- [ setLayer](#setLayer)
- [ update](#update)
</div>

## Properties


### layers
<div style="margin-left: 10px;">




**`en`** get layers




•  **layers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:588](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L588)&nbsp;


___


### lightmap
<div style="margin-left: 10px;">




**`en`** get light map




•  **lightmap**:
 ``null | Texture2D`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:596](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L596)&nbsp;


___


### lightmapUVParam
<div style="margin-left: 10px;">




**`en`** get light map uv parameter




•  **lightmapUVParam**:
 ``Vec4`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L604)&nbsp;


___


### valid
<div style="margin-left: 10px;">




**`en`** valid




•  **valid**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:569](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L569)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new TerrainBlock**(`t: Terrain, i: number, j: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `t` | `Terrain` |





| Name | Type |
| :------ | :------ |
| `i` | `number` |





| Name | Type |
| :------ | :------ |
| `j` | `number` |





</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L311)&nbsp;


---

<!---->
## Methods

### build
<div style="margin-left: 10px;">

▸   **build**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:328](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L328)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:395](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L395)&nbsp;
___
### getIndex
<div style="margin-left: 10px;">

▸   **getIndex**




**`en`** get index




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:624](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L624)&nbsp;
___
### getLayer
<div style="margin-left: 10px;">

▸   **getLayer**<`number`\>(`index: number`) : `number`




**`en`** get layer




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:658](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L658)&nbsp;
___
### getMaxLayer
<div style="margin-left: 10px;">

▸   **getMaxLayer**




**`en`** get max layer index




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:666](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L666)&nbsp;
___
### getRect
<div style="margin-left: 10px;">

▸   **getRect**<`Rect`\> : `Rect`




**`en`** get rect bound




<!---->
<!--    #### Returns `Rect` -->
<!---->


##### Returns `Rect`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:632](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L632)&nbsp;
___
### getTerrain
<div style="margin-left: 10px;">

▸   **getTerrain**<`Terrain`\> : `Terrain`




**`en`** get terrain owner




<!---->
<!--    #### Returns `Terrain` -->
<!---->


##### Returns `Terrain`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:616](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L616)&nbsp;
___
### rebuild
<div style="margin-left: 10px;">

▸   **rebuild**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L387)&nbsp;
___
### setBrushMaterial
<div style="margin-left: 10px;">

▸   **setBrushMaterial**<`void`\>(`mtl: Material | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mtl` | `Material \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:558](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L558)&nbsp;
___
### setLayer
<div style="margin-left: 10px;">

▸   **setLayer**<`void`\>(`index: number, layerId: number`) : `void`




**`en`** set layer




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `layerId` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:646](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L646)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/terrain.ts:406](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/terrain.ts#L406)&nbsp;
___
<!---->




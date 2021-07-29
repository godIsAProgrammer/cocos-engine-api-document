
## Class: Layers







**`en`** Node's layer manager, it's stored as bit mask data in [[Node.layer]].
Layer information is widely used in raycast, physics and user logic.
Every node can be assigned to multiple layers with different bit masks, you can setup layer with inclusive or exclusive operation.



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  BitMask](#BitMask)
- [ **`static`**  Enum](#Enum)

### Methods

- [ **`static`**  makeMaskInclude](#makeMaskInclude)
- [ **`static`**  makeMaskExclude](#makeMaskExclude)
- [ **`static`**  deleteLayer](#deleteLayer)
- [ **`static`**  addLayer](#addLayer)
</div>

## Properties


### BitMask
<div style="margin-left: 10px;">




**`en`** All layers in [[BitMask]] type




• `static` **BitMask**:
`EnumAlias`  = `BitMask({ ...layerList })`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/layers.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L67)&nbsp;   [cocos/core/scene-graph/layers.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L136)&nbsp;


___


### Enum
<div style="margin-left: 10px;">




**`en`** All layers in an Enum




• `static` **Enum**:
`EnumAlias`  = `Enum(layerList)`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/layers.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L61)&nbsp;   [cocos/core/scene-graph/layers.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L135)&nbsp;


___

<!---->
## Methods

### makeMaskInclude
<div style="margin-left: 10px;">

▸ `static`  **makeMaskInclude**<`number`\>(`includes: undefined`) : `number`




**`en`** 
Make a layer mask accepting nothing but the listed layers




<!---->
<!--    #### Returns `number` A filter which can detect all accepted layers
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `includes` |  | All accepted layers  |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/layers.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L77)&nbsp;
___
### makeMaskExclude
<div style="margin-left: 10px;">

▸ `static`  **makeMaskExclude**<`number`\>(`excludes: undefined`) : `number`




**`en`** 
Make a layer mask accepting everything but the listed layers




<!---->
<!--    #### Returns `number` A filter which can detect for excluded layers
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `excludes` |  | All excluded layers  |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/layers.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L93)&nbsp;
___
### deleteLayer
<div style="margin-left: 10px;">

▸ `static`  **deleteLayer**<`void`\>(`bitNum: number`) : `void`




**`en`** Remove a layer, user can remove layers from bit position 0 to 19, other bits are reserved.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `bitNum` | `number` | Layer's bit position  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/layers.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L123)&nbsp;
___
### addLayer
<div style="margin-left: 10px;">

▸ `static`  **addLayer**<`void`\>(`name: string, bitNum: number`) : `void`




**`en`** Add a new layer, user can use layers from bit position 0 to 19, other bits are reserved.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Layer's name  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bitNum` | `number` | Layer's bit position  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/layers.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L103)&nbsp;
___
<!---->




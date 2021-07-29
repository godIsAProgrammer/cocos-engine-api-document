
## Class: Layers







**`zh`** 节点层管理器，层数据是以掩码数据方式存储在 [[Node.layer]] 中，用于射线检测、物理碰撞和用户自定义脚本逻辑。
每个节点可属于一个或多个层，可通过 “包含式” 或 “排除式” 两种检测器进行层检测。


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




**`zh`** 包含所有层的 [[BitMask]]





• `static` **BitMask**:
`EnumAlias`  = `BitMask({ ...layerList })`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/layers.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L67)&nbsp;   [cocos/core/scene-graph/layers.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/layers.ts#L136)&nbsp;


___


### Enum
<div style="margin-left: 10px;">




**`zh`** 以 Enum 形式存在的所有层列表





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




**`zh`** 
创建一个包含式层检测器，只接受列表中的层




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




**`zh`** 
创建一个排除式层检测器，只拒绝列表中的层




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




**`zh`** 移除一个层，用户可编辑 0 - 19 位为用户自定义层




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




**`zh`** 添加一个新层，用户可编辑 0 - 19 位为用户自定义层




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




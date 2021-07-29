
## Class: TMXObjectGroupInfo


&lt;p&gt;cc.TMXObjectGroupInfo contains the information about the object group like:
- group name
- group size
- group opacity at creation time (it can be modified at runtime)
- Whether the group is visible


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ color](#color)
- [ draworder](#draworder)
- [ name](#name)
- [ objects](#objects)
- [ offset](#offset)
- [ opacity](#opacity)
- [ properties](#properties)
- [ tintColor](#tintColor)
- [ visible](#visible)

### Methods

- [ getProperties](#getProperties)
- [ setProperties](#setProperties)
</div>

## Properties


### color
<div style="margin-left: 10px;">




•  **color**:
`Color`  = `new Color(255, 255, 255, 255)`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L419)&nbsp;


___


### draworder
<div style="margin-left: 10px;">




•  **draworder**:
`DrawOrder`  = `"topdown"`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:421](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L421)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:415](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L415)&nbsp;


___


### objects
<div style="margin-left: 10px;">




•  **objects**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:416](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L416)&nbsp;


___


### offset
<div style="margin-left: 10px;">




•  **offset**:
`Vec2`  = `new Vec2(0, 0)`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:420](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L420)&nbsp;


___


### opacity
<div style="margin-left: 10px;">




•  **opacity**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L418)&nbsp;


___


### properties
<div style="margin-left: 10px;">
Properties of the ObjectGroup info.



**`property`** {Array} properties




Properties of the ObjectGroup info.

•  **properties**:
`PropertiesInfo`  = `{} as any`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:414](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L414)&nbsp;


___


### tintColor
<div style="margin-left: 10px;">




•  **tintColor**:
`Color | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:423](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L423)&nbsp;


___


### visible
<div style="margin-left: 10px;">




•  **visible**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:417](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L417)&nbsp;


___

<!---->
## Methods

### getProperties

<div style="margin-left: 10px;">

▸   **getProperties**


Gets the Properties.


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:428](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L428)&nbsp;
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

##### Defined in &nbsp;   [cocos/tiledmap/tiled-types.ts:436](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-types.ts#L436)&nbsp;
___
<!---->




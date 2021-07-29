
## Class: CCTextureData











<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ frame](#frame)
- [ hashCode](#hashCode)
- [ name](#name)
- [ parent](#parent)
- [ region](#region)
- [ rotated](#rotated)
- [ spriteFrame](#spriteFrame)

### Methods

- [ **`static`**  toString](#toString)
- [ **`static`**  setMaxCount](#setMaxCount)
- [ **`static`**  createRectangle](#createRectangle)
- [ **`static`**  clearPool](#clearPool)
- [ **`static`**  borrowObject](#borrowObject)
- [ copyFrom](#copyFrom)
- [ returnToPool](#returnToPool)
</div>

## Properties


### frame
<div style="margin-left: 10px;">




•  **frame**:
`Rectangle | null` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:2511](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L2511)&nbsp;


___


### hashCode
<div style="margin-left: 10px;">
- 分配给此实例的唯一标识号。



**`version`** DragonBones 4.5



**`language`** zh_CN




- 分配给此实例的唯一标识号。

•  **hashCode**:
`number` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L351)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
`string` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:2508](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L2508)&nbsp;


___


### parent
<div style="margin-left: 10px;">




•  **parent**:
`TextureAtlasData` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:2510](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L2510)&nbsp;


___


### region
<div style="margin-left: 10px;">




•  **region**:
`Rectangle` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:2509](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L2509)&nbsp;


___


### rotated
<div style="margin-left: 10px;">




•  **rotated**:
`boolean` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:2507](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L2507)&nbsp;


___


### spriteFrame
<div style="margin-left: 10px;">




•  **spriteFrame**:
`SpriteFrame | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCTextureData.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCTextureData.ts#L68)&nbsp;


___

<!---->
## Methods

### toString

<div style="margin-left: 10px;">

▸ `static`  **toString**<`string`\> : `string`




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCTextureData.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCTextureData.ts#L70)&nbsp;
___
### setMaxCount

<div style="margin-left: 10px;">

▸ `static`  **setMaxCount**<`void`\>(`objectConstructor: BaseObject | null, maxCount: number`) : `void`



**`version`** DragonBones 4.5



**`language`** zh_CN



- 设置特定对象池的最大缓存数量。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `objectConstructor` | `BaseObject \| null` | 特定的类。 (不设置则设置所有对象池的最大缓存数量)  |
| `maxCount` | `number` | 最大缓存数量。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:312](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L312)&nbsp;
___
### createRectangle

<div style="margin-left: 10px;">

▸ `static`  **createRectangle**<`Rectangle`\> : `Rectangle`




##### Returns `Rectangle`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:2506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L2506)&nbsp;
___
### clearPool

<div style="margin-left: 10px;">

▸ `static`  **clearPool**<`void`\>(`objectConstructor: BaseObject | null`) : `void`



**`version`** DragonBones 4.5



**`language`** zh_CN



- 清除特定对象池的缓存实例。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `objectConstructor` | `BaseObject \| null` | 特定的类。 (不设置则清除所有缓存的实例)  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L325)&nbsp;
___
### borrowObject

<div style="margin-left: 10px;">

▸ `static`  **borrowObject**<`T`\>(`objectConstructor: undefined`) : `T`



**`version`** DragonBones 4.5



**`language`** zh_CN



- 从对象池中获取特定类的实例。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `objectConstructor` |  | 特定的类。  |


##### Returns `T`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L338)&nbsp;
___
### copyFrom

<div style="margin-left: 10px;">

▸   **copyFrom**<`void`\>(`value: TextureData`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `TextureData` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:2513](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L2513)&nbsp;
___
### returnToPool

<div style="margin-left: 10px;">

▸   **returnToPool**<`void`\> : `void`



**`version`** DragonBones 4.5



**`language`** zh_CN



- 清除该实例的所有数据并将其返还对象池。


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:367](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L367)&nbsp;
___
<!---->




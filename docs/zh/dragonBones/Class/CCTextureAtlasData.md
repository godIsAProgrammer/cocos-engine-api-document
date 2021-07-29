
## Class: CCTextureAtlasData











<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ hashCode](#hashCode)
- [ imagePath](#imagePath)
- [ name](#name)
- [ renderTexture](#renderTexture)

### Methods

- [ **`static`**  toString](#toString)
- [ **`static`**  setMaxCount](#setMaxCount)
- [ **`static`**  clearPool](#clearPool)
- [ **`static`**  borrowObject](#borrowObject)
- [ createTexture](#createTexture)
- [ returnToPool](#returnToPool)
</div>

## Properties


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


### imagePath
<div style="margin-left: 10px;">
- 贴图集图片路径。



**`version`** DragonBones 3.0



**`language`** zh_CN




- 贴图集图片路径。

•  **imagePath**:
`string` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:2473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L2473)&nbsp;


___


### name
<div style="margin-left: 10px;">
- 贴图集名称。



**`version`** DragonBones 3.0



**`language`** zh_CN




- 贴图集名称。

•  **name**:
`string` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:2462](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L2462)&nbsp;


___


### renderTexture
<div style="margin-left: 10px;">




•  **renderTexture**:
 ``null | TextureBase | RenderTexture`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCTextureData.ts:15](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCTextureData.ts#L15)&nbsp;   [cocos/dragon-bones/CCTextureData.ts:19](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCTextureData.ts#L19)&nbsp;


___

<!---->
## Methods

### toString

<div style="margin-left: 10px;">

▸ `static`  **toString**<`string`\> : `string`




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCTextureData.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCTextureData.ts#L52)&nbsp;
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
### createTexture

<div style="margin-left: 10px;">

▸   **createTexture**<`CCTextureData`\> : `CCTextureData`




##### Returns `CCTextureData`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCTextureData.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCTextureData.ts#L56)&nbsp;
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




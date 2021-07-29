
## Class: CCFactory








DragonBones factory


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ clock](#clock)
- [ id](#id)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  getInstance](#getInstance)
- [ addDragonBonesData](#addDragonBonesData)
- [ addTextureAtlasData](#addTextureAtlasData)
- [ buildArmature](#buildArmature)
- [ buildArmatureDisplay](#buildArmatureDisplay)
- [ changeSkin](#changeSkin)
- [ clear](#clear)
- [ copyAnimationsToArmature](#copyAnimationsToArmature)
- [ createArmatureNode](#createArmatureNode)
- [ getArmatureData](#getArmatureData)
- [ getDragonBonesData](#getDragonBonesData)
- [ getDragonBonesDataByRawData](#getDragonBonesDataByRawData)
- [ getDragonBonesDataByUUID](#getDragonBonesDataByUUID)
- [ getTextureAtlasData](#getTextureAtlasData)
- [ initUpdate](#initUpdate)
- [ parseDragonBonesData](#parseDragonBonesData)
- [ parseTextureAtlasData](#parseTextureAtlasData)
- [ removeDragonBonesData](#removeDragonBonesData)
- [ removeDragonBonesDataByUUID](#removeDragonBonesDataByUUID)
- [ removeTextureAtlasData](#removeTextureAtlasData)
- [ replaceAnimation](#replaceAnimation)
- [ replaceSkin](#replaceSkin)
- [ replaceSlotDisplay](#replaceSlotDisplay)
- [ update](#update)
</div>

## Properties


### clock
<div style="margin-left: 10px;">
- 由引擎驱动的 WorldClock 实例。



**`version`** DragonBones 5.7



**`language`** zh_CN




- 由引擎驱动的 WorldClock 实例。

•  **clock**:
`WorldClock` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6623](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6623)&nbsp;


___


### id
<div style="margin-left: 10px;">




•  **id**:
`string` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:38](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L38)&nbsp;


___


### uuid
<div style="margin-left: 10px;">




•  **uuid**:
`string` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L39)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new CCFactory**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:41](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L41)&nbsp;


---

<!---->
## Methods

### getInstance

<div style="margin-left: 10px;">

▸ `static`  **getInstance**<`CCFactory`\> : `CCFactory`




##### Returns `CCFactory`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:31](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L31)&nbsp;
___
### addDragonBonesData

<div style="margin-left: 10px;">

▸   **addDragonBonesData**<`void`\>(`data: DragonBonesData, name: string | null`) : `void`



**`see`** #parseDragonBonesData()



**`see`** #getDragonBonesData()



**`see`** #removeDragonBonesData()



**`see`** dragonBones.DragonBonesData



**`version`** DragonBones 3.0



**`language`** zh_CN



- 将 DragonBonesData 实例缓存到工厂中。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `data` | `DragonBonesData` | DragonBonesData 实例。  |
| `name` | `string \| null` | 为该实例指定一个缓存名称，以便可以通过此名称获取该实例。 （如果未设置，则使用该实例中的名称）  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6328](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6328)&nbsp;
___
### addTextureAtlasData

<div style="margin-left: 10px;">

▸   **addTextureAtlasData**<`void`\>(`data: TextureAtlasData, name: string | null`) : `void`



**`see`** #parseTextureAtlasData()



**`see`** #getTextureAtlasData()



**`see`** #removeTextureAtlasData()



**`see`** dragonBones.TextureAtlasData



**`version`** DragonBones 3.0



**`language`** zh_CN



- 将 TextureAtlasData 实例缓存到工厂中。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `data` | `TextureAtlasData` | TextureAtlasData 实例。  |
| `name` | `string \| null` | 为该实例指定一个缓存名称，以便可以通过此名称获取该实例。 （如果未设置，则使用该实例中的名称）  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6395](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6395)&nbsp;
___
### buildArmature

<div style="margin-left: 10px;">

▸   **buildArmature**(`armatureName: string, dragonBonesName: undefined | string, skinName: undefined | string, textureAtlasName: undefined | string`)



**`example`**

```ts

<pre>
    let armature = factory.buildArmature("armatureName", "dragonBonesName");
    armature.clock = factory.clock;
</pre>
```



**`see`** dragonBones.DragonBonesData



**`see`** dragonBones.ArmatureData



**`see`** dragonBones.Armature



**`version`** DragonBones 3.0



**`language`** zh_CN



- 通过缓存的 DragonBonesData 实例和 TextureAtlasData 实例创建一个骨架。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armatureName` | `string` | 骨架数据名称。  |
| `dragonBonesName` | `undefined \| string` | DragonBonesData 实例的缓存名称。 （如果未设置，将检索所有的 DragonBonesData 实例，当多个 DragonBonesData 实例中包含同名的骨架数据时，可能无法准确的创建出特定的骨架）  |
| `skinName` | `undefined \| string` | 皮肤名称，可以设置一个其他骨架数据名称来共享其皮肤数据（如果未设置，则使用默认的皮肤数据）。  |
| `textureAtlasName` | `undefined \| string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6483](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6483)&nbsp;
___
### buildArmatureDisplay

<div style="margin-left: 10px;">

▸   **buildArmatureDisplay**(`armatureName: string, dragonBonesName: undefined | string, skinName: undefined | string, textureAtlasName: undefined | string`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armatureName` | `string` | - |
| `dragonBonesName` | `undefined \| string` | - |
| `skinName` | `undefined \| string` | - |
| `textureAtlasName` | `undefined \| string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L71)&nbsp;
___
### changeSkin

<div style="margin-left: 10px;">

▸   **changeSkin**<`boolean`\>(`armature: Armature, skin: SkinData, exclude: Array | null`) : `boolean`




**`language`** zh_CN



- 已废弃，请参考 {@link #replaceSkin}。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armature` | `Armature` | - |
| `skin` | `SkinData` | - |
| `exclude` | `Array \| null` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6638](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6638)&nbsp;
___
### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\>(`disposeData: undefined | false | true`) : `void`



**`version`** DragonBones 4.5



**`language`** zh_CN



- 清除缓存的所有 DragonBonesData 实例和 TextureAtlasData 实例。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `disposeData` | `undefined \| false \| true` | 是否释放数据。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6448](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6448)&nbsp;
___
### copyAnimationsToArmature

<div style="margin-left: 10px;">

▸   **copyAnimationsToArmature**<`boolean`\>(`toArmature: Armature, fromArmatreName: string, fromSkinName: undefined | string, fromDragonBonesDataName: undefined | string, replaceOriginalAnimation: undefined | false | true`) : `boolean`




**`language`** zh_CN



- 已废弃，请参考 {@link #replaceAnimation}。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `toArmature` | `Armature` | - |
| `fromArmatreName` | `string` | - |
| `fromSkinName` | `undefined \| string` | - |
| `fromDragonBonesDataName` | `undefined \| string` | - |
| `replaceOriginalAnimation` | `undefined \| false \| true` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6649](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6649)&nbsp;
___
### createArmatureNode

<div style="margin-left: 10px;">

▸   **createArmatureNode**<`ArmatureDisplay`\>(`comp: ArmatureDisplay, armatureName: string, node: Node`) : `ArmatureDisplay`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `comp` | `ArmatureDisplay` | - |
| `armatureName` | `string` | - |
| `node` | `Node` | - |


##### Returns `ArmatureDisplay`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L79)&nbsp;
___
### getArmatureData

<div style="margin-left: 10px;">

▸   **getArmatureData**(`name: string, dragonBonesName: undefined | string`)



**`see`** dragonBones.ArmatureData



**`version`** DragonBones 5.1



**`language`** zh_CN



- 获取特定的骨架数据。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | 骨架数据名称。  |
| `dragonBonesName` | `undefined \| string` | DragonBonesData 实例的缓存名称。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6435](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6435)&nbsp;
___
### getDragonBonesData

<div style="margin-left: 10px;">

▸   **getDragonBonesData**(`name: string`)



**`see`** #parseDragonBonesData()



**`see`** #addDragonBonesData()



**`see`** #removeDragonBonesData()



**`see`** dragonBones.DragonBonesData



**`version`** DragonBones 3.0



**`language`** zh_CN



- 获取特定的 DragonBonesData 实例。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | DragonBonesData 实例的缓存名称。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6305](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6305)&nbsp;
___
### getDragonBonesDataByRawData

<div style="margin-left: 10px;">

▸   **getDragonBonesDataByRawData**(`rawData: any`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rawData` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L65)&nbsp;
___
### getDragonBonesDataByUUID

<div style="margin-left: 10px;">

▸   **getDragonBonesDataByUUID**(`uuid: any`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L152)&nbsp;
___
### getTextureAtlasData

<div style="margin-left: 10px;">

▸   **getTextureAtlasData**(`name: string`)



**`see`** #parseTextureAtlasData()



**`see`** #addTextureAtlasData()



**`see`** #removeTextureAtlasData()



**`see`** dragonBones.TextureAtlasData



**`version`** DragonBones 3.0



**`language`** zh_CN



- 获取特定的 TextureAtlasData 实例列表。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | TextureAtlasData 实例缓存名称。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6372](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6372)&nbsp;
___
### initUpdate

<div style="margin-left: 10px;">

▸   **initUpdate**<`void`\>(`dt: undefined | number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L55)&nbsp;
___
### parseDragonBonesData

<div style="margin-left: 10px;">

▸   **parseDragonBonesData**(`rawData: any, name: string | null, scale: undefined | number`)



**`see`** #getDragonBonesData()



**`see`** #addDragonBonesData()



**`see`** #removeDragonBonesData()



**`see`** dragonBones.DragonBonesData



**`version`** DragonBones 4.5



**`language`** zh_CN



- 将原始数据解析为 DragonBonesData 实例，并缓存到工厂中。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rawData` | `any` | 原始数据。  |
| `name` | `string \| null` | 为该实例指定一个缓存名称，以便可以通过此名称获取该实例。 （如果未设置，则使用该实例中的名称）  |
| `scale` | `undefined \| number` | 为所有的骨架指定一个缩放值。 （默认: 1.0）  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6249](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6249)&nbsp;
___
### parseTextureAtlasData

<div style="margin-left: 10px;">

▸   **parseTextureAtlasData**<`TextureAtlasData`\>(`rawData: any, textureAtlas: any, name: string | null, scale: undefined | number`) : `TextureAtlasData`



**`see`** #getTextureAtlasData()



**`see`** #addTextureAtlasData()



**`see`** #removeTextureAtlasData()



**`see`** dragonBones.TextureAtlasData



**`version`** DragonBones 4.5



**`language`** zh_CN



- 将原始贴图集数据和贴图集对象解析为 TextureAtlasData 实例，并缓存到工厂中。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rawData` | `any` | 原始贴图集数据。  |
| `textureAtlas` | `any` | 贴图集对象。  |
| `name` | `string \| null` | 为该实例指定一个缓存名称，以便可以通过此名称获取该实例。 （如果未设置，则使用该实例中的名称）  |
| `scale` | `undefined \| number` | 为贴图集指定一个缩放值。 （默认: 1.0）  |


##### Returns `TextureAtlasData`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6278](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6278)&nbsp;
___
### removeDragonBonesData

<div style="margin-left: 10px;">

▸   **removeDragonBonesData**<`void`\>(`name: string, disposeData: undefined | false | true`) : `void`



**`see`** #parseDragonBonesData()



**`see`** #getDragonBonesData()



**`see`** #addDragonBonesData()



**`see`** dragonBones.DragonBonesData



**`version`** DragonBones 3.0



**`language`** zh_CN



- 移除 DragonBonesData 实例。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | DragonBonesData 实例缓存名称。  |
| `disposeData` | `undefined \| false \| true` | 是否释放数据。 （默认: true）  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6351)&nbsp;
___
### removeDragonBonesDataByUUID

<div style="margin-left: 10px;">

▸   **removeDragonBonesDataByUUID**<`void`\>(`uuid: string, disposeData: undefined | false | true`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | - |
| `disposeData` | `undefined \| false \| true` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L161)&nbsp;
___
### removeTextureAtlasData

<div style="margin-left: 10px;">

▸   **removeTextureAtlasData**<`void`\>(`name: string, disposeData: undefined | false | true`) : `void`



**`see`** #parseTextureAtlasData()



**`see`** #getTextureAtlasData()



**`see`** #addTextureAtlasData()



**`see`** dragonBones.TextureAtlasData



**`version`** DragonBones 3.0



**`language`** zh_CN



- 移除 TextureAtlasData 实例。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | TextureAtlasData 实例的缓存名称。  |
| `disposeData` | `undefined \| false \| true` | 是否释放数据。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6418)&nbsp;
___
### replaceAnimation

<div style="margin-left: 10px;">

▸   **replaceAnimation**<`boolean`\>(`armature: Armature, armatureData: ArmatureData, isOverride: undefined | false | true`) : `boolean`



**`example`**

```ts

<pre>
    let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
    let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
    if (armatureDataB) {
    factory.replaceAnimation(armatureA, armatureDataB);
    }
</pre>
```



**`see`** dragonBones.Armature



**`see`** dragonBones.ArmatureData



**`version`** DragonBones 5.6



**`language`** zh_CN



- 用特定骨架数据的动画数据替换特定骨架现有的动画数据。
这样就能实现制作一个骨架动画模板，让其他没有制作动画的骨架共享该动画。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armature` | `Armature` | 骨架。  |
| `armatureData` | `ArmatureData` | 骨架数据。  |
| `isOverride` | `undefined \| false \| true` | 是否完全覆盖原来的动画。（默认: false）。  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6604)&nbsp;
___
### replaceSkin

<div style="margin-left: 10px;">

▸   **replaceSkin**<`boolean`\>(`armature: Armature, skin: SkinData, isOverride: undefined | false | true, exclude: Array | null`) : `boolean`



**`example`**

```ts

<pre>
    let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
    let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
    if (armatureDataB && armatureDataB.defaultSkin) {
    factory.replaceSkin(armatureA, armatureDataB.defaultSkin, false, ["arm_l", "weapon_l"]);
    }
</pre>
```



**`see`** dragonBones.Armature



**`see`** dragonBones.SkinData



**`version`** DragonBones 5.6



**`language`** zh_CN



- 将特定的皮肤数据共享给特定的骨架使用。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armature` | `Armature` | 骨架。  |
| `skin` | `SkinData` | 皮肤数据。  |
| `isOverride` | `undefined \| false \| true` | 是否完全覆盖原来的皮肤。 （默认: false）  |
| `exclude` | `Array \| null` | 不需要被替换的插槽名称列表。  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6565](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6565)&nbsp;
___
### replaceSlotDisplay

<div style="margin-left: 10px;">

▸   **replaceSlotDisplay**<`boolean`\>(`dragonBonesName: string, armatureName: string, slotName: string, displayName: string, slot: Slot, displayIndex: undefined | number`) : `boolean`



**`example`**

```ts

<pre>
    let slot = armature.getSlot("weapon");
    factory.replaceSlotDisplay("dragonBonesName", "armatureName", "slotName", "displayName", slot);
</pre>
```



**`version`** DragonBones 4.5



**`language`** zh_CN



- 用特定的显示对象数据替换特定插槽当前的显示对象数据。
用 &quot;dragonBonesName/armatureName/slotName/displayName&quot; 指定显示对象数据。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dragonBonesName` | `string` | DragonBonesData 实例的缓存名称。  |
| `armatureName` | `string` | 骨架数据名称。  |
| `slotName` | `string` | 插槽数据名称。  |
| `displayName` | `string` | 显示对象数据名称。  |
| `slot` | `Slot` | 插槽。  |
| `displayIndex` | `undefined \| number` | 被替换的显示对象数据的索引。 （如果未设置，则替换当前的显示对象数据）  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:6522](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L6522)&nbsp;
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

##### Defined in &nbsp;   [cocos/dragon-bones/CCFactory.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCFactory.ts#L61)&nbsp;
___
<!---->




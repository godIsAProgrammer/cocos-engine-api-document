
## Class: CCSlot











<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ armature](#armature)
- [ boundingBoxData](#boundingBoxData)
- [ childArmature](#childArmature)
- [ display](#display)
- [ displayController](#displayController)
- [ displayIndex](#displayIndex)
- [ displayList](#displayList)
- [ global](#global)
- [ globalTransformMatrix](#globalTransformMatrix)
- [ hashCode](#hashCode)
- [ name](#name)
- [ offset](#offset)
- [ parent](#parent)
- [ slotData](#slotData)
- [ visible](#visible)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  toString](#toString)
- [ **`static`**  setMaxCount](#setMaxCount)
- [ **`static`**  clearPool](#clearPool)
- [ **`static`**  borrowObject](#borrowObject)
- [ calculWorldMatrix](#calculWorldMatrix)
- [ containsPoint](#containsPoint)
- [ getDisplay](#getDisplay)
- [ getTexture](#getTexture)
- [ intersectsSegment](#intersectsSegment)
- [ invalidUpdate](#invalidUpdate)
- [ returnToPool](#returnToPool)
- [ setDisplay](#setDisplay)
- [ updateGlobalTransform](#updateGlobalTransform)
- [ updateWorldMatrix](#updateWorldMatrix)
</div>

## Properties


### armature
<div style="margin-left: 10px;">
- 所属的骨架。



**`version`** DragonBones 3.0



**`language`** zh_CN




- 所属的骨架。

•  **armature**:
`Armature` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3264](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3264)&nbsp;


___


### boundingBoxData
<div style="margin-left: 10px;">
- 插槽此时的自定义包围盒数据。



**`version`** DragonBones 5.0



**`language`** zh_CN




- 插槽此时的自定义包围盒数据。

•  **boundingBoxData**:
`BoundingBoxData | null` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:4015](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L4015)&nbsp;


___


### childArmature
<div style="margin-left: 10px;">
- 插槽此时显示的子骨架。



**`example`**

```ts

<pre>
    let slot = armature.getSlot("weapon");
    slot.childArmature = factory.buildArmature("weapon_blabla", "weapon_blabla_project");
</pre>
```



**`version`** DragonBones 3.0



**`language`** zh_CN




- 插槽此时显示的子骨架。

•  **childArmature**:
`Armature | null` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:4065](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L4065)&nbsp;


___


### display
<div style="margin-left: 10px;">
- 插槽此时显示的显示对象。



**`example`**

```ts

<pre>
    let slot = armature.getSlot("text");
    slot.display = new yourEngine.TextField();
</pre>
```



**`version`** DragonBones 3.0



**`language`** zh_CN




- 插槽此时显示的显示对象。

•  **display**:
`any` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:4044](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L4044)&nbsp;


___


### displayController
<div style="margin-left: 10px;">
- 显示对象受到控制的动画状态或混合组名称，设置为 null 则表示受所有的动画状态控制。



**`default`** null



**`see`** dragonBones.AnimationState#displayControl



**`see`** dragonBones.AnimationState#name



**`see`** dragonBones.AnimationState#group



**`version`** DragonBones 4.5



**`language`** zh_CN




- 显示对象受到控制的动画状态或混合组名称，设置为 null 则表示受所有的动画状态控制。

•  **displayController**:
`string | null` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3587](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3587)&nbsp;


___


### displayIndex
<div style="margin-left: 10px;">
- 此时显示的显示对象在显示列表中的索引。



**`example`**

```ts

<pre>
    let slot = armature.getSlot("weapon");
    slot.displayIndex = 3;
    slot.displayController = "none";
</pre>
```



**`version`** DragonBones 4.5



**`language`** zh_CN




- 此时显示的显示对象在显示列表中的索引。

•  **displayIndex**:
`number` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3963](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3963)&nbsp;


___


### displayList
<div style="margin-left: 10px;">
- 包含显示对象或子骨架的显示列表。



**`version`** DragonBones 3.0



**`language`** zh_CN




- 包含显示对象或子骨架的显示列表。

•  **displayList**:
`Array` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3987](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3987)&nbsp;


___


### global
<div style="margin-left: 10px;">
- 相对于骨架坐标系的变换。



**`see`** #updateGlobalTransform()



**`version`** DragonBones 3.0



**`language`** zh_CN




- 相对于骨架坐标系的变换。

•  **global**:
`Transform` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3180)&nbsp;


___


### globalTransformMatrix
<div style="margin-left: 10px;">
- 相对于骨架坐标系的矩阵。



**`version`** DragonBones 3.0



**`language`** zh_CN




- 相对于骨架坐标系的矩阵。

•  **globalTransformMatrix**:
`Matrix` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3167](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3167)&nbsp;


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
- 插槽名称。



**`see`** dragonBones.SlotData#name



**`version`** DragonBones 3.0



**`language`** zh_CN




- 插槽名称。

•  **name**:
`string` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3976](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3976)&nbsp;


___


### offset
<div style="margin-left: 10px;">
- 相对于骨架或父骨骼坐标系的偏移变换。



**`see`** #dragonBones.Bone#invalidUpdate()



**`version`** DragonBones 3.0



**`language`** zh_CN




- 相对于骨架或父骨骼坐标系的偏移变换。

•  **offset**:
`Transform` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3193)&nbsp;


___


### parent
<div style="margin-left: 10px;">
- 所属的父骨骼。



**`version`** DragonBones 3.0



**`language`** zh_CN




- 所属的父骨骼。

•  **parent**:
`Bone` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3275)&nbsp;


___


### slotData
<div style="margin-left: 10px;">
- 插槽数据。



**`see`** dragonBones.SlotData



**`version`** DragonBones 4.5



**`language`** zh_CN




- 插槽数据。

•  **slotData**:
`SlotData` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:4000](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L4000)&nbsp;


___


### visible
<div style="margin-left: 10px;">
- 插槽的显示对象的可见。



**`default`** true



**`version`** DragonBones 5.6



**`language`** zh_CN




- 插槽的显示对象的可见。

•  **visible**:
`boolean` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3940](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3940)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new CCSlot**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCSlot.ts:24](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCSlot.ts#L24)&nbsp;


---

<!---->
## Methods

### toString

<div style="margin-left: 10px;">

▸ `static`  **toString**<`string`\> : `string`




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCSlot.ts:15](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCSlot.ts#L15)&nbsp;
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
### calculWorldMatrix

<div style="margin-left: 10px;">

▸   **calculWorldMatrix**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCSlot.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCSlot.ts#L47)&nbsp;
___
### containsPoint

<div style="margin-left: 10px;">

▸   **containsPoint**<`boolean`\>(`x: number, y: number`) : `boolean`



**`version`** DragonBones 5.0



**`language`** zh_CN



- 检查特定点是否在插槽的自定义边界框内。
点的坐标系为骨架内坐标系。
自定义边界框需要在 DragonBones Pro 中自定义。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | 点的水平坐标。  |
| `y` | `number` | 点的垂直坐标。  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3876](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3876)&nbsp;
___
### getDisplay

<div style="margin-left: 10px;">

▸   **getDisplay**<`any`\> : `any`




**`language`** zh_CN



- 已废弃，请参考 {@link #display}。


##### Returns `any`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:4076](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L4076)&nbsp;
___
### getTexture

<div style="margin-left: 10px;">

▸   **getTexture**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCSlot.ts:38](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCSlot.ts#L38)&nbsp;
___
### intersectsSegment

<div style="margin-left: 10px;">

▸   **intersectsSegment**<`number`\>(`xA: number, yA: number, xB: number, yB: number, intersectionPointA:  | null, intersectionPointB:  | null, normalRadians:  | null`) : `number`



**`version`** DragonBones 5.0



**`language`** zh_CN



- 检查特定线段是否与插槽的自定义边界框相交。
线段和交点的坐标系均为骨架内坐标系。
自定义边界框需要在 DragonBones Pro 中自定义。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `xA` | `number` | 线段起点的水平坐标。  |
| `yA` | `number` | 线段起点的垂直坐标。  |
| `xB` | `number` | 线段终点的水平坐标。  |
| `yB` | `number` | 线段终点的垂直坐标。  |
| `intersectionPointA` | ` \| null` | 线段从起点到终点与边界框相交的第一个交点。 （如果未设置，则不计算交点）  |
| `intersectionPointB` | ` \| null` | 线段从终点到起点与边界框相交的第一个交点。 （如果未设置，则不计算交点）  |
| `normalRadians` | ` \| null` | 交点边界框切线的法线弧度。 [x: 第一个交点切线的法线弧度, y: 第二个交点切线的法线弧度] （如果未设置，则不计算法线）  |


##### Returns `number`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3907](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3907)&nbsp;
___
### invalidUpdate

<div style="margin-left: 10px;">

▸   **invalidUpdate**<`void`\> : `void`



**`version`** DragonBones 4.5



**`language`** zh_CN



- 强制插槽在下一帧更新显示对象的状态。


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3927](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3927)&nbsp;
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
### setDisplay

<div style="margin-left: 10px;">

▸   **setDisplay**<`void`\>(`value: any`) : `void`




**`language`** zh_CN



- 已废弃，请参考 {@link #display}。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:4087](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L4087)&nbsp;
___
### updateGlobalTransform

<div style="margin-left: 10px;">

▸   **updateGlobalTransform**<`void`\> : `void`



**`example`**

```ts

<pre>
    bone.updateGlobalTransform();
    let rotation = bone.global.rotation;
</pre>
```



**`version`** DragonBones 3.0



**`language`** zh_CN



- 出于性能的考虑，骨骼或插槽的 {@link #global} 属性中的旋转或缩放并不总是正确可访问的，有些引擎并不依赖这些属性更新渲染，比如 Egret。
使用此方法可以保证访问到 {@link #global} 属性中正确的旋转或缩放。


##### Returns `void`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:3253](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L3253)&nbsp;
___
### updateWorldMatrix

<div style="margin-left: 10px;">

▸   **updateWorldMatrix**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCSlot.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCSlot.ts#L338)&nbsp;
___
<!---->




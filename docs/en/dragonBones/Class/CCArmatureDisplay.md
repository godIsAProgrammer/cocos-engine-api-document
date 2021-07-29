
## Class: CCArmatureDisplay











<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ hashCode](#hashCode)
- [ name](#name)
- [ parent](#parent)
- [ path](#path)
- [ shouldAdvanced](#shouldAdvanced)
- [ transform](#transform)
- [ type](#type)
- [ node](#node)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  toString](#toString)
- [ **`static`**  setMaxCount](#setMaxCount)
- [ **`static`**  clearPool](#clearPool)
- [ **`static`**  borrowObject](#borrowObject)
- [ addDBEventListener](#addDBEventListener)
- [ addEvent](#addEvent)
- [ advanceTimeBySelf](#advanceTimeBySelf)
- [ convertToRootSpace](#convertToRootSpace)
- [ convertToWorldSpace](#convertToWorldSpace)
- [ dbClear](#dbClear)
- [ dbInit](#dbInit)
- [ dbUpdate](#dbUpdate)
- [ dispatchDBEvent](#dispatchDBEvent)
- [ getRootDisplay](#getRootDisplay)
- [ getRootNode](#getRootNode)
- [ hasDBEventListener](#hasDBEventListener)
- [ hasEvent](#hasEvent)
- [ removeDBEventListener](#removeDBEventListener)
- [ removeEvent](#removeEvent)
- [ returnToPool](#returnToPool)
- [ setEventTarget](#setEventTarget)
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


### name
<div style="margin-left: 10px;">




•  **name**:
`string` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:1617](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L1617)&nbsp;


___


### parent
<div style="margin-left: 10px;">




•  **parent**:
`SkinData` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:1619](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L1619)&nbsp;


___


### path
<div style="margin-left: 10px;">




•  **path**:
`string` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:1618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L1618)&nbsp;


___


### shouldAdvanced
<div style="margin-left: 10px;">




•  **shouldAdvanced**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:19](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L19)&nbsp;


___


### transform
<div style="margin-left: 10px;">




•  **transform**:
`Transform` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:1620](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L1620)&nbsp;


___


### type
<div style="margin-left: 10px;">




•  **type**:
`DisplayType` 
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:1616](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L1616)&nbsp;


___


### node
<div style="margin-left: 10px;">




•  **node**:
 ``this`` 
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:17](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L17)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new CCArmatureDisplay**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:24](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L24)&nbsp;


---

<!---->
## Methods

### toString

<div style="margin-left: 10px;">

▸ `static`  **toString**<`string`\> : `string`




##### Returns `string`
</div>

##### Defined in &nbsp;   [node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts:297](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/node_modules/@cocos/dragonbones-js/out/dragonBones.d.ts#L297)&nbsp;
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
### addDBEventListener

<div style="margin-left: 10px;">

▸   **addDBEventListener**<`void`\>(`type: string, listener: any, target: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |
| `listener` | `any` | - |
| `target` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L108)&nbsp;
___
### addEvent

<div style="margin-left: 10px;">

▸   **addEvent**<`void`\>(`type: string, listener: any, thisObject: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |
| `listener` | `any` | - |
| `thisObject` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:35](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L35)&nbsp;
___
### advanceTimeBySelf

<div style="margin-left: 10px;">

▸   **advanceTimeBySelf**<`void`\>(`on: boolean | number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `on` | `boolean \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L100)&nbsp;
___
### convertToRootSpace

<div style="margin-left: 10px;">

▸   **convertToRootSpace**<`Vec3`\>(`pos: Vec3`) : `Vec3`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pos` | `Vec3` | - |


##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L60)&nbsp;
___
### convertToWorldSpace

<div style="margin-left: 10px;">

▸   **convertToWorldSpace**(`point: Vec3`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec3` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L74)&nbsp;
___
### dbClear

<div style="margin-left: 10px;">

▸   **dbClear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L90)&nbsp;
___
### dbInit

<div style="margin-left: 10px;">

▸   **dbInit**<`void`\>(`armature: Armature | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armature` | `Armature \| null` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L86)&nbsp;
___
### dbUpdate

<div style="margin-left: 10px;">

▸   **dbUpdate**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L94)&nbsp;
___
### dispatchDBEvent

<div style="margin-left: 10px;">

▸   **dispatchDBEvent**<`void`\>(`type: string, eventObject: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |
| `eventObject` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L116)&nbsp;
___
### getRootDisplay

<div style="margin-left: 10px;">

▸   **getRootDisplay**<`CCArmatureDisplay`\> : `CCArmatureDisplay`




##### Returns `CCArmatureDisplay`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L46)&nbsp;
___
### getRootNode

<div style="margin-left: 10px;">

▸   **getRootNode**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L80)&nbsp;
___
### hasDBEventListener

<div style="margin-left: 10px;">

▸   **hasDBEventListener**<`boolean`\>(`type: any`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `any` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L104)&nbsp;
___
### hasEvent

<div style="margin-left: 10px;">

▸   **hasEvent**<`boolean`\>(`type: string`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:31](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L31)&nbsp;
___
### removeDBEventListener

<div style="margin-left: 10px;">

▸   **removeDBEventListener**<`void`\>(`type: string, listener: any, target: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |
| `listener` | `any` | - |
| `target` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L112)&nbsp;
___
### removeEvent

<div style="margin-left: 10px;">

▸   **removeEvent**<`void`\>(`type: string, listener: any, thisObject: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |
| `listener` | `any` | - |
| `thisObject` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:38](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L38)&nbsp;
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
### setEventTarget

<div style="margin-left: 10px;">

▸   **setEventTarget**<`void`\>(`eventTarget: EventTarget`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `eventTarget` | `EventTarget` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/CCArmatureDisplay.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/CCArmatureDisplay.ts#L42)&nbsp;
___
<!---->




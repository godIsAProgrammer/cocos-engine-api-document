
## Class: ArmatureCache





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  FrameTime](#FrameTime)
- [ **`static`**  sharedCache](#sharedCache)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  canCache](#canCache)
- [ dispose](#dispose)
- [ enablePrivateMode](#enablePrivateMode)
- [ getAnimationCache](#getAnimationCache)
- [ getArmatureCache](#getArmatureCache)
- [ initAnimationCache](#initAnimationCache)
- [ invalidAnimationCache](#invalidAnimationCache)
- [ resetArmature](#resetArmature)
- [ updateAnimationCache](#updateAnimationCache)
</div>

## Properties


### FrameTime
<div style="margin-left: 10px;">




• `static` **FrameTime**:
`number`  = `FrameTime`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:550](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L550)&nbsp;


___


### sharedCache
<div style="margin-left: 10px;">




• `static` **sharedCache**:
`ArmatureCache`  = `new ArmatureCache()`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:551](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L551)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ArmatureCache**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:398](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L398)&nbsp;


---

<!---->
## Methods

### canCache

<div style="margin-left: 10px;">

▸ `static`  **canCache**<`boolean`\>(`armature: Armature`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armature` | `Armature` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:539](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L539)&nbsp;
___
### dispose

<div style="margin-left: 10px;">

▸   **dispose**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:408](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L408)&nbsp;
___
### enablePrivateMode

<div style="margin-left: 10px;">

▸   **enablePrivateMode**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:403](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L403)&nbsp;
___
### getAnimationCache

<div style="margin-left: 10px;">

▸   **getAnimationCache**(`armatureKey: any, animationName: any`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armatureKey` | `any` | - |
| `animationName` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L473)&nbsp;
___
### getArmatureCache

<div style="margin-left: 10px;">

▸   **getArmatureCache**(`armatureName: string, armatureKey: string, atlasUUID: string`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armatureName` | `string` | - |
| `armatureKey` | `string` | - |
| `atlasUUID` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:445](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L445)&nbsp;
___
### initAnimationCache

<div style="margin-left: 10px;">

▸   **initAnimationCache**(`armatureKey: string, animationName: string`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armatureKey` | `string` | - |
| `animationName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L481)&nbsp;
___
### invalidAnimationCache

<div style="margin-left: 10px;">

▸   **invalidAnimationCache**<`void`\>(`armatureKey: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armatureKey` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:509](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L509)&nbsp;
___
### resetArmature

<div style="margin-left: 10px;">

▸   **resetArmature**<`void`\>(`uuid: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:438](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L438)&nbsp;
___
### updateAnimationCache

<div style="margin-left: 10px;">

▸   **updateAnimationCache**<`void`\>(`armatureKey: string, animationName: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `armatureKey` | `string` | - |
| `animationName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/dragon-bones/ArmatureCache.ts:521](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/dragon-bones/ArmatureCache.ts#L521)&nbsp;
___
<!---->




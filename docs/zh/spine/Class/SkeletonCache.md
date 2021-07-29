
## Class: SkeletonCache





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  FrameTime](#FrameTime)
- [ **`static`**  sharedCache](#sharedCache)

### Constructors

- [ constructor](#constructor)

### Methods

- [ clear](#clear)
- [ enablePrivateMode](#enablePrivateMode)
- [ getAnimationCache](#getAnimationCache)
- [ getSkeletonCache](#getSkeletonCache)
- [ initAnimationCache](#initAnimationCache)
- [ invalidAnimationCache](#invalidAnimationCache)
- [ removeSkeleton](#removeSkeleton)
- [ updateAnimationCache](#updateAnimationCache)
</div>

## Properties


### FrameTime
<div style="margin-left: 10px;">




• `static` **FrameTime**:
`number`  = `FrameTime`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:579](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L579)&nbsp;


___


### sharedCache
<div style="margin-left: 10px;">




• `static` **sharedCache**:
`SkeletonCache`  = `new SkeletonCache()`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:580](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L580)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new SkeletonCache**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:584](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L584)&nbsp;


---

<!---->
## Methods

### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:595](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L595)&nbsp;
___
### enablePrivateMode

<div style="margin-left: 10px;">

▸   **enablePrivateMode**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:591](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L591)&nbsp;
___
### getAnimationCache

<div style="margin-left: 10px;">

▸   **getAnimationCache**(`uuid: string, animationName: string`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | - |
| `animationName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:640](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L640)&nbsp;
___
### getSkeletonCache

<div style="margin-left: 10px;">

▸   **getSkeletonCache**<`SkeletonCacheItemInfo`\>(`uuid: string, skeletonData: SkeletonData`) : `SkeletonCacheItemInfo`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | - |
| `skeletonData` | `SkeletonData` | - |


##### Returns `SkeletonCacheItemInfo`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:616](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L616)&nbsp;
___
### initAnimationCache

<div style="margin-left: 10px;">

▸   **initAnimationCache**(`uuid: string, animationName: string`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | - |
| `animationName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:660](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L660)&nbsp;
___
### invalidAnimationCache

<div style="margin-left: 10px;">

▸   **invalidAnimationCache**<`void`\>(`uuid: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:648](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L648)&nbsp;
___
### removeSkeleton

<div style="margin-left: 10px;">

▸   **removeSkeleton**<`void`\>(`uuid: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:600](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L600)&nbsp;
___
### updateAnimationCache

<div style="margin-left: 10px;">

▸   **updateAnimationCache**(`uuid: string, animationName: string`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | - |
| `animationName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:689](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L689)&nbsp;
___
<!---->




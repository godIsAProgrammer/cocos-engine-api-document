
## Class: AnimationCache





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ frames](#frames)
- [ isCompleted](#isCompleted)
- [ totalTime](#totalTime)

### Constructors

- [ constructor](#constructor)

### Methods

- [ begin](#begin)
- [ bind](#bind)
- [ clear](#clear)
- [ enableCacheAttachedInfo](#enableCacheAttachedInfo)
- [ end](#end)
- [ fillVertices](#fillVertices)
- [ init](#init)
- [ invalidAllFrame](#invalidAllFrame)
- [ isInited](#isInited)
- [ isInvalid](#isInvalid)
- [ unbind](#unbind)
- [ updateAllFrame](#updateAllFrame)
- [ updateToFrame](#updateToFrame)
</div>

## Properties


### frames
<div style="margin-left: 10px;">




•  **frames**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L96)&nbsp;


___


### isCompleted
<div style="margin-left: 10px;">




•  **isCompleted**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L98)&nbsp;


___


### totalTime
<div style="margin-left: 10px;">




•  **totalTime**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L97)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new AnimationCache**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L109)&nbsp;


---

<!---->
## Methods

### begin

<div style="margin-left: 10px;">

▸   **begin**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L158)&nbsp;
___
### bind

<div style="margin-left: 10px;">

▸   **bind**<`void`\>(`listener: TrackEntryListeners`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `TrackEntryListeners` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L144)&nbsp;
___
### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L135)&nbsp;
___
### enableCacheAttachedInfo

<div style="margin-left: 10px;">

▸   **enableCacheAttachedInfo**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L244)&nbsp;
___
### end

<div style="margin-left: 10px;">

▸   **end**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L190)&nbsp;
___
### fillVertices

<div style="margin-left: 10px;">

▸   **fillVertices**<`void`\>(`skeletonColor: Color, attachmentColor: Color, slotColor: Color, clipper: SkeletonClipping, slot: Slot`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `skeletonColor` | `Color` | - |
| `attachmentColor` | `Color` | - |
| `slotColor` | `Color` | - |
| `clipper` | `SkeletonClipping` | - |
| `slot` | `Slot` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:251](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L251)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\>(`skeletonInfo: SkeletonCacheItemInfo, animationName: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `skeletonInfo` | `SkeletonCacheItemInfo` | - |
| `animationName` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L128)&nbsp;
___
### invalidAllFrame

<div style="margin-left: 10px;">

▸   **invalidAllFrame**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L234)&nbsp;
___
### isInited

<div style="margin-left: 10px;">

▸   **isInited**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L226)&nbsp;
___
### isInvalid

<div style="margin-left: 10px;">

▸   **isInvalid**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L230)&nbsp;
___
### unbind

<div style="margin-left: 10px;">

▸   **unbind**<`void`\>(`listener: TrackEntryListeners`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `TrackEntryListeners` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L154)&nbsp;
___
### updateAllFrame

<div style="margin-left: 10px;">

▸   **updateAllFrame**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:239](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L239)&nbsp;
___
### updateToFrame

<div style="margin-left: 10px;">

▸   **updateToFrame**<`void`\>(`toFrameIdx: undefined | number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `toFrameIdx` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/spine/skeleton-cache.ts:200](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/spine/skeleton-cache.ts#L200)&nbsp;
___
<!---->





## Class: AnimationCurve







**`en`** 
Describe a curve in which three times Hermite interpolation is used for each adjacent key frame.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ keyFrames](#keyFrames)
- [ postWrapMode](#postWrapMode)
- [ preWrapMode](#preWrapMode)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addKey](#addKey)
- [ evaluate](#evaluate)
</div>

## Properties


### keyFrames
<div style="margin-left: 10px;">




**`en`** 
The key frame of the curve.




•  **keyFrames**:
` | null` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/curve.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/curve.ts#L132)&nbsp;


___


### postWrapMode
<div style="margin-left: 10px;">




**`en`** 
Cycle mode [[WrapMode]] when the sampling time exceeds the right end.




•  **postWrapMode**:
`number`  = `WrapMode.Clamp`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/curve.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/curve.ts#L148)&nbsp;


___


### preWrapMode
<div style="margin-left: 10px;">




**`en`** 
Loop mode [[WrapMode]] when the sampling time exceeds the left end.




•  **preWrapMode**:
`number`  = `WrapMode.Loop`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/curve.ts:140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/curve.ts#L140)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new AnimationCurve**(`keyFrames: array<Keyframe> | null`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `keyFrames` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/geometry/curve.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/curve.ts#L150)&nbsp;


---

<!---->
## Methods

### addKey
<div style="margin-left: 10px;">

▸   **addKey**<`void`\>(`keyFrame: Keyframe`) : `void`




**`en`** 
Add a keyframe.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `keyFrame` | `Keyframe` | 关键帧。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/curve.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/curve.ts#L168)&nbsp;
___
### evaluate
<div style="margin-left: 10px;">

▸   **evaluate**<`number`\>(`time: number`) : `number`




**`en`** 
Calculate the curve interpolation at a given point in time.




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `time` | `number` | 时间。  |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/geometry/curve.ts:240](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/curve.ts#L240)&nbsp;
___
<!---->




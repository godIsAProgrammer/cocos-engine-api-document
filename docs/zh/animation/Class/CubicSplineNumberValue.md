
## Class: CubicSplineNumberValue





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ dataPoint](#dataPoint)
- [ inTangent](#inTangent)
- [ outTangent](#outTangent)

### Constructors

- [ constructor](#constructor)

### Methods

- [ getNoLerp](#getNoLerp)
- [ lerp](#lerp)
</div>

## Properties


### dataPoint
<div style="margin-left: 10px;">




•  **dataPoint**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/animation/cubic-spline-value.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cubic-spline-value.ts#L135)&nbsp;


___


### inTangent
<div style="margin-left: 10px;">




•  **inTangent**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/animation/cubic-spline-value.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cubic-spline-value.ts#L138)&nbsp;


___


### outTangent
<div style="margin-left: 10px;">




•  **outTangent**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/animation/cubic-spline-value.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cubic-spline-value.ts#L141)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new CubicSplineNumberValue**(`dataPoint: number, inTangent: number, outTangent: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataPoint` | `number` |
| `inTangent` | `number` |
| `outTangent` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/animation/cubic-spline-value.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cubic-spline-value.ts#L141)&nbsp;


---

<!---->
## Methods

### getNoLerp

<div style="margin-left: 10px;">

▸   **getNoLerp**<`number`\> : `number`




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/animation/cubic-spline-value.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cubic-spline-value.ts#L164)&nbsp;
___
### lerp

<div style="margin-left: 10px;">

▸   **lerp**<`number`\>(`to: CubicSplineNumberValue, t: number, dt: number`) : `number`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `CubicSplineNumberValue` | - |
| `t` | `number` | - |
| `dt` | `number` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/animation/cubic-spline-value.ts:149](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cubic-spline-value.ts#L149)&nbsp;
___
<!---->




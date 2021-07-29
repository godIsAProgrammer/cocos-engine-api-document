
## Class: AnimCurve


动画曲线。


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Linear](#Linear)
- [ type](#type)
- [ types](#types)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  Bezier](#Bezier)
- [ constant](#constant)
- [ empty](#empty)
- [ hasLerp](#hasLerp)
- [ valueAt](#valueAt)
- [ valueBetween](#valueBetween)
</div>

## Properties


### Linear
<div style="margin-left: 10px;">




• `static` **Linear**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L135)&nbsp;


___


### type
<div style="margin-left: 10px;">




•  **type**:
`EasingMethod | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L143)&nbsp;


___


### types
<div style="margin-left: 10px;">




•  **types**:
`Array`  = `undefined`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L141)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new AnimCurve**(`propertyCurveData: Omit, duration: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `propertyCurveData` | `Omit` |





| Name | Type |
| :------ | :------ |
| `duration` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L157)&nbsp;


---

<!---->
## Methods

### Bezier
<div style="margin-left: 10px;">

▸ `static`  **Bezier**(`controlPoints: undefined`)




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `controlPoints` |  | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L137)&nbsp;
___
### constant
<div style="margin-left: 10px;">

▸   **constant**<`boolean`\> : `boolean`


Returns if this curve only yields constants.


<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L273)&nbsp;
___
### empty
<div style="margin-left: 10px;">

▸   **empty**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L266)&nbsp;
___
### hasLerp
<div style="margin-left: 10px;">

▸   **hasLerp**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L207)&nbsp;
___
### valueAt
<div style="margin-left: 10px;">

▸   **valueAt**<`any`\>(`index: number`) : `any`




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:211](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L211)&nbsp;
___
### valueBetween
<div style="margin-left: 10px;">

▸   **valueBetween**<`any`\>(`ratio: number, from: number, fromRatio: number, to: number, toRatio: number`) : `any`




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ratio` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `from` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `fromRatio` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `toRatio` | `number` | - |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-curve.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-curve.ts#L230)&nbsp;
___
<!---->




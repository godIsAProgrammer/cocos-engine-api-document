
## Class: HeightField





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ data](#data)
- [ h](#h)
- [ w](#w)

### Constructors

- [ constructor](#constructor)

### Methods

- [ get](#get)
- [ getAt](#getAt)
- [ getClamp](#getClamp)
- [ set](#set)
</div>

## Properties


### data
<div style="margin-left: 10px;">




•  **data**:
`Uint16Array`  = `new Uint16Array()`
</div>

##### Defined in &nbsp;   [cocos/terrain/height-field.ts:34](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/height-field.ts#L34)&nbsp;


___


### h
<div style="margin-left: 10px;">




•  **h**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/terrain/height-field.ts:36](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/height-field.ts#L36)&nbsp;


___


### w
<div style="margin-left: 10px;">




•  **w**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/terrain/height-field.ts:35](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/height-field.ts#L35)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new HeightField**(`w: number, h: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `w` | `number` |





| Name | Type |
| :------ | :------ |
| `h` | `number` |





</div>

##### Defined in &nbsp;   [cocos/terrain/height-field.ts:36](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/height-field.ts#L36)&nbsp;


---

<!---->
## Methods

### get
<div style="margin-left: 10px;">

▸   **get**<`number`\>(`i: number, j: number`) : `number`




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/height-field.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/height-field.ts#L52)&nbsp;
___
### getAt
<div style="margin-left: 10px;">

▸   **getAt**<`number`\>(`x: number, y: number`) : `number`




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/height-field.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/height-field.ts#L63)&nbsp;
___
### getClamp
<div style="margin-left: 10px;">

▸   **getClamp**<`number`\>(`i: number, j: number`) : `number`




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/terrain/height-field.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/height-field.ts#L56)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸   **set**<`void`\>(`i: number, j: number, value: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `j` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/terrain/height-field.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/terrain/height-field.ts#L48)&nbsp;
___
<!---->




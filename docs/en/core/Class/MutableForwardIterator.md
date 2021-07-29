
## Class: MutableForwardIterator






**`example`**

```ts


import { js } from 'cc';
var array = [0, 1, 2, 3, 4];
var iterator = new js.array.MutableForwardIterator(array);
for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
    var item = array[iterator.i];
    ...
}


```


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ array](#array)
- [ i](#i)
- [ length](#length)

### Constructors

- [ constructor](#constructor)

### Methods

- [ fastRemove](#fastRemove)
- [ fastRemoveAt](#fastRemoveAt)
- [ push](#push)
- [ remove](#remove)
- [ removeAt](#removeAt)
</div>

## Properties


### array
<div style="margin-left: 10px;">




•  **array**:
`array` 
</div>

##### Defined in &nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L47)&nbsp;


___


### i
<div style="margin-left: 10px;">




•  **i**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L45)&nbsp;


___


### length
<div style="margin-left: 10px;">




•  **length**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L50)&nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L54)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new MutableForwardIterator**(`array: undefined`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L45)&nbsp;


---

<!---->
## Methods

### fastRemove

<div style="margin-left: 10px;">

▸   **fastRemove**<`void`\>(`value: T`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `T` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L76)&nbsp;
___
### fastRemoveAt

<div style="margin-left: 10px;">

▸   **fastRemoveAt**<`void`\>(`i: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L83)&nbsp;
___
### push

<div style="margin-left: 10px;">

▸   **push**<`void`\>(`item: T`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `item` | `T` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L93)&nbsp;
___
### remove

<div style="margin-left: 10px;">

▸   **remove**<`void`\>(`value: T`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `T` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L61)&nbsp;
___
### removeAt

<div style="margin-left: 10px;">

▸   **removeAt**<`void`\>(`i: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `i` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/utils/mutable-forward-iterator.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/mutable-forward-iterator.ts#L68)&nbsp;
___
<!---->




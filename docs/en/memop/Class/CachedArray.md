
## Class: CachedArray







**`en`** 
Cached array is a data structure for objects cache, it's designed for persistent data.
Its content array length will keep grow.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ array](#array)
- [ length](#length)

### Constructors

- [ constructor](#constructor)

### Methods

- [ clear](#clear)
- [ concat](#concat)
- [ destroy](#destroy)
- [ fastRemove](#fastRemove)
- [ get](#get)
- [ indexOf](#indexOf)
- [ pop](#pop)
- [ push](#push)
- [ sort](#sort)
</div>

## Properties


### array
<div style="margin-left: 10px;">




**`en`** 
The array which stores actual content




•  **array**:
`array` 
</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L46)&nbsp;


___


### length
<div style="margin-left: 10px;">




**`en`** 
The actual count of data object




•  **length**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L54)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new CachedArray**(`length: number, compareFn: undefined | `)

#### Parameters
| Name | Type |
| :------ | :------ |
| `length` | `number` |





| Name | Type |
| :------ | :------ |
| `compareFn` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L56)&nbsp;


---

<!---->
## Methods

### clear
<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




**`en`** 
Clear the cache. The [[length]] will be set to 0, but the internal array will keep its size.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L113)&nbsp;
___
### concat
<div style="margin-left: 10px;">

▸   **concat**<`void`\>(`array: undefined`) : `void`




**`en`** 
Add all elements of a given array to the end of the current array




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `array` |  | The given array to be appended  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L146)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




**`en`** 
Clear the cache. The [[length]] will be set to 0, and clear the internal array.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L123)&nbsp;
___
### fastRemove
<div style="margin-left: 10px;">

▸   **fastRemove**<`void`\>(`idx: number`) : `void`




**`en`** Delete the element at the specified location and move the last element to that location.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | The index of the element to be deleted  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L157)&nbsp;
___
### get
<div style="margin-left: 10px;">

▸   **get**<`T`\>(`idx: number`) : `T`




**`en`** 
Get the element at the specified index of the array




<!---->
<!--    #### Returns `T` The element at given index
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | The index of the requested element  |



##### Returns `T`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L103)&nbsp;
___
### indexOf
<div style="margin-left: 10px;">

▸   **indexOf**<`number`\>(`val: T`) : `number`




**`en`** Returns the first index at which a given element can be found in the array.




<!---->
<!--    #### Returns `number` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `val` | `T` | The element  |



##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L170)&nbsp;
___
### pop
<div style="margin-left: 10px;">

▸   **pop**




**`en`** 
Pop the last element in the array. The [[length]] will reduce, but the internal array will keep its size.




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L91)&nbsp;
___
### push
<div style="margin-left: 10px;">

▸   **push**<`void`\>(`item: T`) : `void`




**`en`** 
Push an element to the end of the array




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `item` | `T` | The item to be added  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L80)&nbsp;
___
### sort
<div style="margin-left: 10px;">

▸   **sort**<`void`\> : `void`




**`en`** 
Sort the existing elements in cache




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L134)&nbsp;
___
<!---->




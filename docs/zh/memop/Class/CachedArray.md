
## Class: CachedArray







**`zh`** 
适用于对象缓存的数组类型封装，一般用于不易被移除的常驻数据。
它的内部数组长度会持续增长，不会减少。



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




**`zh`** 
实际存储数据内容的数组





•  **array**:
`array` 
</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L46)&nbsp;


___


### length
<div style="margin-left: 10px;">




**`zh`** 
实际数据内容数量





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




**`zh`** 
清空数组所有元素。[[length]] 会被设为 0，但内部数组的实际长度不变





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




**`zh`** 
添加一个指定数组中的所有元素到当前数组末尾




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




**`zh`** 
清空数组所有元素。[[length]] 会被设为 0，并且清空内部数组





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




**`zh`** 删除指定位置的元素并将最后一个元素移动至该位置。




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




**`zh`** 
得到数组中指定位置的元素




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




**`zh`** 返回在数组中可以找到一个给定元素的第一个索引。




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




**`zh`** 
弹出数组最后一个元素，CachedArray 的 [[length]] 会减少，但是内部数组的实际长度不变




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L91)&nbsp;
___
### push
<div style="margin-left: 10px;">

▸   **push**<`void`\>(`item: T`) : `void`




**`zh`** 
向数组末尾添加一个元素




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




**`zh`** 
排序所有现有元素





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/cached-array.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/cached-array.ts#L134)&nbsp;
___
<!---->




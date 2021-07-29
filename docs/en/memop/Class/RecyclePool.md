
## Class: RecyclePool






**`en`** Recyclable object pool. It's designed to be entirely reused each time.
There is no put and get method, each time you get the [[data]], you can use all elements as new.
You shouldn't simultaneously use the same RecyclePool in more than two overlapped logic.
Its size can be automatically incremented or manually resized.



**`see`** [[Pool]]



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ data](#data)
- [ length](#length)

### Constructors

- [ constructor](#constructor)

### Methods

- [ add](#add)
- [ removeAt](#removeAt)
- [ reset](#reset)
- [ resize](#resize)
</div>

## Properties


### data
<div style="margin-left: 10px;">



**`en`** The underlying array of all pool elements.




•  **data**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L74)&nbsp;


___


### length
<div style="margin-left: 10px;">



**`en`** The length of the object pool.




•  **length**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L66)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new RecyclePool**(`fn: undefined, size: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `` |
| `size` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L45)&nbsp;


---

<!---->
## Methods

### add

<div style="margin-left: 10px;">

▸   **add**<`T`\> : `T`



**`en`** Expand the object pool, the size will be increment to current size times two, and fills with new created elements.




##### Returns `T`
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L104)&nbsp;
___
### removeAt

<div style="margin-left: 10px;">

▸   **removeAt**<`void`\>(`idx: number`) : `void`



**`en`** Remove an element of the object pool. This will also decrease size of the pool



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | The index of the element to be removed  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:117](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L117)&nbsp;
___
### reset

<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`



**`en`** Resets the object pool. Only changes the length to 0




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L82)&nbsp;
___
### resize

<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`size: number`) : `void`



**`en`** Resize the object poo, and fills with new created elements.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `size` | `number` | The new size of the pool  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L91)&nbsp;
___
<!---->




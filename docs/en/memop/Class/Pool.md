
## Class: Pool






**`en`** Typed object pool.
It's a traditional design, you can get elements out of the pool or recycle elements by putting back into the pool.



**`see`** [[RecyclePool]]



<div class="table-of-content">
<h2>Table of contents</h2>


### Constructors

- [ constructor](#constructor)

### Methods

- [ alloc](#alloc)
- [ destroy](#destroy)
- [ free](#free)
- [ freeArray](#freeArray)
</div>

## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Pool**(`ctor: undefined, elementsPerBatch: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | `` |
| `elementsPerBatch` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/memop/pool.ts:41](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/pool.ts#L41)&nbsp;


---

<!---->
## Methods

### alloc

<div style="margin-left: 10px;">

▸   **alloc**<`T`\> : `T`



**`en`** Take an object out of the object pool.




##### Returns `T`
</div>

##### Defined in &nbsp;   [cocos/core/memop/pool.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/pool.ts#L64)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\>(`dtor: undefined | `) : `void`



**`en`** Destroy all elements and clear the pool.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dtor` | `undefined \| ` | The destructor function, it will be invoked for all elements in the pool  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/memop/pool.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/pool.ts#L103)&nbsp;
___
### free

<div style="margin-left: 10px;">

▸   **free**<`void`\>(`obj: T`) : `void`



**`en`** Put an object back into the object pool.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `obj` | `T` | The object to be put back into the pool  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/memop/pool.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/pool.ts#L83)&nbsp;
___
### freeArray

<div style="margin-left: 10px;">

▸   **freeArray**<`void`\>(`objs: undefined`) : `void`



**`en`** Put multiple objects back into the object pool.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `objs` |  | An array of objects to be put back into the pool  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/memop/pool.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/pool.ts#L93)&nbsp;
___
<!---->




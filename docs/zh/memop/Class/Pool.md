
## Class: Pool







**`zh`** 支持类型的对象池。这是一个传统设计的对象池，你可以从对象池中取出对象或是放回不再需要对象来复用。




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





| Name | Type |
| :------ | :------ |
| `elementsPerBatch` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/memop/pool.ts:41](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/pool.ts#L41)&nbsp;


---

<!---->
## Methods

### alloc
<div style="margin-left: 10px;">

▸   **alloc**<`T`\> : `T`




**`zh`** 从对象池中取出一个对象。




<!---->
<!--    #### Returns `T` An object ready for use. This function always return an object.
-->
<!---->


##### Returns `T`




</div>

##### Defined in &nbsp;   [cocos/core/memop/pool.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/pool.ts#L64)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\>(`dtor: undefined | `) : `void`




**`zh`** 释放对象池中所有资源并清空缓存池。




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 将一个对象放回对象池中。




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 将一组对象放回对象池中。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `objs` |  | An array of objects to be put back into the pool  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/memop/pool.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/pool.ts#L93)&nbsp;
___
<!---->




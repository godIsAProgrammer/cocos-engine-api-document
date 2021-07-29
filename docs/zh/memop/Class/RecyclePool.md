
## Class: RecyclePool






**`zh`** 循环对象池。这种池子被设计为每次使用都完整复用。
它没有回收和提取的函数，通过获取 [[data]] 可以获取池子中所有元素，全部都应该被当做新对象来使用。
开发者不应该在相互交叉的不同逻辑中同时使用同一个循环对象池。
池子尺寸可以在池子满时自动扩充，也可以手动调整。



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



**`zh`** 实际对象池数组。





•  **data**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L74)&nbsp;


___


### length
<div style="margin-left: 10px;">



**`zh`** 对象池大小。





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



**`zh`** 扩充对象池容量，会自动扩充尺寸到两倍，并填充新的元素。




##### Returns `T`
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L104)&nbsp;
___
### removeAt

<div style="margin-left: 10px;">

▸   **removeAt**<`void`\>(`idx: number`) : `void`



**`zh`** 移除对象池中的一个元素，同时会减小池子尺寸。



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



**`zh`** 清空对象池。目前仅仅会设置尺寸为 0





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L82)&nbsp;
___
### resize

<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`size: number`) : `void`



**`zh`** 设置对象池大小，并填充新的元素。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `size` | `number` | The new size of the pool  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/memop/recycle-pool.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/memop/recycle-pool.ts#L91)&nbsp;
___
<!---->




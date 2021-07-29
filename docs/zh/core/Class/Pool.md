
## Class: Pool






**`zh`** 
长度固定的对象缓存池，可以用来缓存各种对象类型。<br/>
这个对象池的实现非常精简，它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁。



**`example`**

```ts



Example 1:

function Details () {
    this.uuidList = [];
};
Details.prototype.reset = function () {
    this.uuidList.length = 0;
};
Details.pool = new js.Pool(function (obj) {
    obj.reset();
}, 5);
Details.pool.get = function () {
    return this._get() || new Details();
};

var detail = Details.pool.get();
...
Details.pool.put(detail);

Example 2:

function Details (buffer) {
   this.uuidList = buffer;
};
...
Details.pool.get = function (buffer) {
    var cached = this._get();
    if (cached) {
        cached.uuidList = buffer;
        return cached;
    }
    else {
        return new Details(buffer);
    }
};

var detail = Details.pool.get( [] );
...


```


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ count](#count)

### Constructors

- [ constructor](#constructor)

### Methods

- [ get](#get)
- [ put](#put)
- [ resize](#resize)
</div>

## Properties


### count
<div style="margin-left: 10px;">



**`zh`** 
当前可用对象数量，一开始默认是 0，随着对象的回收会逐渐增大，最大不会超过调用构造函数时指定的 size。



**`default`** 0





•  **count**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L94)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Pool**(`cleanup: CleanUpFunction, size: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cleanup` | `CleanUpFunction` |
| `size` | `number` |
• **new Pool**(`size: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L108)&nbsp;   [cocos/core/utils/pool.ts:117](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L117)&nbsp;   [cocos/core/utils/pool.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L126)&nbsp;


---

<!---->
## Methods

### get

<div style="margin-left: 10px;">

▸   **get**



**`zh`** 
获取并初始化对象池中的对象。这个方法默认为空，需要用户自己实现。




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L103)&nbsp;
___
### put

<div style="margin-left: 10px;">

▸   **put**<`void`\>(`obj: T`) : `void`



**`zh`** 向对象池返还一个不再需要的对象。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `obj` | `T` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L156)&nbsp;
___
### resize

<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`length: number`) : `void`



**`zh`** 设置对象池容量。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `length` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L171)&nbsp;
___
<!---->




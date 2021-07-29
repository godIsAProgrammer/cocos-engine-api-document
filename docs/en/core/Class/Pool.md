
## Class: Pool







**`en`** 
A fixed-length object pool designed for general type.<br>
The implementation of this object pool is very simple,
it can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>




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




**`en`** 
The current number of available objects, the default is 0, it will gradually increase with the recycle of the object,
the maximum will not exceed the size specified when the constructor is called.




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





| Name | Type |
| :------ | :------ |
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




**`en`** 
Get and initialize an object from pool. This method defaults to null and requires the user to implement it.




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L103)&nbsp;
___
### put
<div style="margin-left: 10px;">

▸   **put**<`void`\>(`obj: T`) : `void`




**`en`** Put an object into the pool.




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** Resize the pool.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `length` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L171)&nbsp;
___
<!---->




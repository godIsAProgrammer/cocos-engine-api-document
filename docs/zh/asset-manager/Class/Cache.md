
## Class: Cache






**`zh`** 
用于缓存某些内容




<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ count](#count)

### Constructors

- [ constructor](#constructor)

### Methods

- [ add](#add)
- [ clear](#clear)
- [ destroy](#destroy)
- [ find](#find)
- [ forEach](#forEach)
- [ get](#get)
- [ has](#has)
- [ remove](#remove)
</div>

## Properties


### count
<div style="margin-left: 10px;">



**`zh`** 
缓存数量






•  **count**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L221)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Cache**(`map: Record`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Record` |
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:41](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L41)&nbsp;


---

<!---->
## Methods

### add

<div style="margin-left: 10px;">

▸   **add**<`T`\>(`key: string, val: T`) : `T`



**`zh`** 
增加键值对到缓存中




**`example`**

```ts

var cache = new Cache();
cache.add('test', null);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `key` | `string` | The key  |
| `val` | `T` | The value  |


##### Returns `T`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L79)&nbsp;
___
### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`



**`zh`** 
清除所有内容




**`example`**

```ts

var cache = new Cache();
cache.clear();


```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L160)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`



**`zh`** 
销毁这个 cache






##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L233)&nbsp;
___
### find

<div style="margin-left: 10px;">

▸   **find**(`predicate: undefined`)



**`zh`** 
枚举所有内容，找到一个可以满足条件的元素




**`example`**

```ts

var cache = new Cache();
var val = cache.find((val, key) => key === 'test');


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `predicate` |  | The condition  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L204)&nbsp;
___
### forEach

<div style="margin-left: 10px;">

▸   **forEach**<`void`\>(`func: undefined`) : `void`



**`zh`** 
枚举所有内容并执行方法




**`example`**

```ts

var cache = new Cache();
cache.forEach((val, key) => console.log(key));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `func` |  | Function to be invoked  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L183)&nbsp;
___
### get

<div style="margin-left: 10px;">

▸   **get**(`key: string`)



**`zh`** 
通过 key 获取对应的 value




**`example`**

```ts

let cache = new Cache();
let test = cache.get('test');


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `key` | `string` | The key  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L101)&nbsp;
___
### has

<div style="margin-left: 10px;">

▸   **has**<`boolean`\>(`key: string`) : `boolean`



**`zh`** 
通过 Key 判断是否存在对应的内容




**`example`**

```ts

var cache = new Cache();
var exist = cache.has('test');


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `key` | `string` | The key  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L120)&nbsp;
___
### remove

<div style="margin-left: 10px;">

▸   **remove**(`key: string`)



**`zh`** 
通过 Key 移除对应的内容




**`example`**

```ts

var cache = new Cache();
var content = cache.remove('test');


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `key` | `string` | The key  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache.ts#L139)&nbsp;
___
<!---->





## Class: Pipeline






**`zh`** 
管线能执行任务达到某个效果




<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ id](#id)
- [ name](#name)
- [ pipes](#pipes)

### Constructors

- [ constructor](#constructor)

### Methods

- [ append](#append)
- [ async](#async)
- [ insert](#insert)
- [ remove](#remove)
- [ sync](#sync)
</div>

## Properties


### id
<div style="margin-left: 10px;">



**`zh`** 
管线的 id






•  **id**:
`number`  = `Pipeline._pipelineId++`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L56)&nbsp;


___


### name
<div style="margin-left: 10px;">



**`zh`** 
管线的名字






•  **name**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L66)&nbsp;


___


### pipes
<div style="margin-left: 10px;">



**`zh`** 
所有的管道






•  **pipes**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L76)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Pipeline**(`name: string, funcs: undefined`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `funcs` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L76)&nbsp;


---

<!---->
## Methods

### append

<div style="margin-left: 10px;">

▸   **append**<`Pipeline`\>(`func: IPipe`) : `Pipeline`



**`zh`** 
添加一个管道到管线中




**`example`**

```ts

var pipeline = new Pipeline('test', []);
pipeline.append((task, done) => {
     // do something
     done();
});


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `func` | `IPipe` | The new pipe  |


##### Returns `Pipeline`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:165](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L165)&nbsp;
___
### async

<div style="margin-left: 10px;">

▸   **async**<`void`\>(`task: Task`) : `void`



**`zh`** 
异步执行任务




**`example`**

```ts

var pipeline = new Pipeline('sync', [(task, done) => {
     let input = task.input;
     task.output = doSomething(task.input);
     done();
}]);
var task = new Task({input: 'test', onComplete: (err, result) => console.log(result)});
pipeline.async(task);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `task` | `Task` | The task will be executed  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:253](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L253)&nbsp;
___
### insert

<div style="margin-left: 10px;">

▸   **insert**<`Pipeline`\>(`func: IPipe, index: number`) : `Pipeline`



**`zh`** 
在某个特定的点为管线插入一个新的 pipe




**`example`**

```ts

var pipeline = new Pipeline('test', []);
pipeline.insert((task, done) => {
     // do something
     done();
}, 0);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `func` | `IPipe` | The new pipe  |
| `index` | `number` | The specific point you want to insert at.  |


##### Returns `Pipeline`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L135)&nbsp;
___
### remove

<div style="margin-left: 10px;">

▸   **remove**<`Pipeline`\>(`index: number`) : `Pipeline`



**`zh`** 
移除特定位置的管道




**`example`**

```ts

var pipeline = new Pipeline('test', (task, done) => {
     // do something
     done();
});
pipeline.remove(0);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | The specific point  |


##### Returns `Pipeline`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:188](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L188)&nbsp;
___
### sync

<div style="margin-left: 10px;">

▸   **sync**<`any`\>(`task: Task`) : `any`



**`zh`** 
同步执行任务




**`example`**

```ts

var pipeline = new Pipeline('sync', [(task) => {
     let input = task.input;
     task.output = doSomething(task.input);
}]);

var task = new Task({input: 'test'});
console.log(pipeline.sync(task));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `task` | `Task` | The task will be executed  |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L213)&nbsp;
___
<!---->




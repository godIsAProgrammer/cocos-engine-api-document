
## Class: Pipeline







**`en`** 
Pipeline can execute the task for some effect.



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




**`en`** 
The id of pipeline





•  **id**:
`number`  = `Pipeline._pipelineId++`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L56)&nbsp;


___


### name
<div style="margin-left: 10px;">




**`en`** 
The name of pipeline





•  **name**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L66)&nbsp;


___


### pipes
<div style="margin-left: 10px;">




**`en`** 
All pipes of pipeline





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





| Name | Type |
| :------ | :------ |
| `funcs` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L76)&nbsp;


---

<!---->
## Methods

### append
<div style="margin-left: 10px;">

▸   **append**<`Pipeline`\>(`func: IPipe`) : `Pipeline`




**`en`** 
Append a new pipe to the pipeline





**`example`**

```ts

var pipeline = new Pipeline('test', []);
pipeline.append((task, done) => {
     // do something
     done();
});


```




<!---->
<!--    #### Returns `Pipeline` pipeline
-->
<!---->

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




**`en`** 
Execute task asynchronously





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




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** 
At specific point insert a new pipe to pipeline





**`example`**

```ts

var pipeline = new Pipeline('test', []);
pipeline.insert((task, done) => {
     // do something
     done();
}, 0);


```




<!---->
<!--    #### Returns `Pipeline` pipeline
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `func` | `IPipe` | The new pipe  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | The specific point you want to insert at.  |



##### Returns `Pipeline`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L135)&nbsp;
___
### remove
<div style="margin-left: 10px;">

▸   **remove**<`Pipeline`\>(`index: number`) : `Pipeline`




**`en`** 
Remove pipe which at specific point





**`example`**

```ts

var pipeline = new Pipeline('test', (task, done) => {
     // do something
     done();
});
pipeline.remove(0);


```




<!---->
<!--    #### Returns `Pipeline` pipeline
-->
<!---->

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




**`en`** 
Execute task synchronously





**`example`**

```ts

var pipeline = new Pipeline('sync', [(task) => {
     let input = task.input;
     task.output = doSomething(task.input);
}]);

var task = new Task({input: 'test'});
console.log(pipeline.sync(task));


```




<!---->
<!--    #### Returns `any` result
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `task` | `Task` | The task will be executed  |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pipeline.ts:213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pipeline.ts#L213)&nbsp;
___
<!---->




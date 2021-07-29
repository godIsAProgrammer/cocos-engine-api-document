
## Class: Task







**`zh`** 
任务用于在管线中运行以达成某种效果




<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ id](#id)
- [ input](#input)
- [ isFinish](#isFinish)
- [ onComplete](#onComplete)
- [ onError](#onError)
- [ onProgress](#onProgress)
- [ options](#options)
- [ output](#output)
- [ progress](#progress)
- [ source](#source)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  create](#create)
- [ dispatch](#dispatch)
- [ recycle](#recycle)
- [ set](#set)
</div>

## Properties


### id
<div style="margin-left: 10px;">




**`zh`** 
任务id






•  **id**:
`number`  = `Task._taskId++`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L94)&nbsp;


___


### input
<div style="margin-left: 10px;">




**`zh`** 
任务的输入






•  **input**:
`any`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L153)&nbsp;


___


### isFinish
<div style="margin-left: 10px;">




**`zh`** 
此任务是否已经完成






•  **isFinish**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L183)&nbsp;


___


### onComplete
<div style="margin-left: 10px;">




**`zh`** 
完成回调






•  **onComplete**:
`TaskCompleteCallback | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L104)&nbsp;


___


### onError
<div style="margin-left: 10px;">




**`zh`** 
错误回调






•  **onError**:
`TaskErrorCallback | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L124)&nbsp;


___


### onProgress
<div style="margin-left: 10px;">




**`zh`** 
进度回调






•  **onProgress**:
`TaskProgressCallback | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L114)&nbsp;


___


### options
<div style="margin-left: 10px;">




**`zh`** 
自定义参数






•  **options**:
`Record | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L173)&nbsp;


___


### output
<div style="margin-left: 10px;">




**`zh`** 
任务的输出





•  **output**:
`any`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L143)&nbsp;


___


### progress
<div style="margin-left: 10px;">




**`zh`** 
任务的进度






•  **progress**:
`any`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L163)&nbsp;


___


### source
<div style="margin-left: 10px;">




**`zh`** 
任务的源






•  **source**:
`any`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L134)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Task**(`options: ITaskOption`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `options` | `ITaskOption` |





</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L183)&nbsp;


---

<!---->
## Methods

### create
<div style="margin-left: 10px;">

▸ `static`  **create**<`Task`\>(`options: ITaskOption`) : `Task`




**`zh`** 
从对象池中创建 task






**`method`** create




<!---->
<!--    #### Returns `Task` task

-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `ITaskOption` | Some optional paramters  |



##### Returns `Task`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L71)&nbsp;
___
### dispatch
<div style="margin-left: 10px;">

▸   **dispatch**<`void`\>(`event: string, param1: any, param2: any, param3: any, param4: any`) : `void`




**`zh`** 
发布事件





**`example`**

```ts

var task = Task.create();
Task.onComplete = (msg) => console.log(msg);
Task.dispatch('complete', 'hello world');


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `event` | `string` | The event name  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `param1` | `any` | Parameter 1  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `param2` | `any` | Parameter 2  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `param3` | `any` | Parameter 3  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `param4` | `any` | Parameter 4  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L254)&nbsp;
___
### recycle
<div style="margin-left: 10px;">

▸   **recycle**<`void`\> : `void`




**`zh`** 
回收 task 用于复用






<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L289)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸   **set**<`void`\>(`options: ITaskOption`) : `void`




**`zh`** 
设置任务的参数





**`example`**

```ts

var task = new Task();
task.set({input: ['test'], onComplete: (err, result) => console.log(err), onProgress: (finish, total) => console.log(finish / total)});


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `ITaskOption` | Some optional paramters  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/task.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/task.ts#L224)&nbsp;
___
<!---->





## Class: ListEntry






**`en`** A list double-linked list used for "updates with priority"



**`param`** not retained (retained by hashUpdateEntry)





**`param`** selector will no longer be called and entry will be removed at end of the next tick



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ markedForDeletion](#markedForDeletion)
- [ paused](#paused)
- [ priority](#priority)
- [ target](#target)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  put](#put)
- [ **`static`**  get](#get)
</div>

## Properties


### markedForDeletion
<div style="margin-left: 10px;">




•  **markedForDeletion**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L83)&nbsp;


___


### paused
<div style="margin-left: 10px;">




•  **paused**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L82)&nbsp;


___


### priority
<div style="margin-left: 10px;">




•  **priority**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L81)&nbsp;


___


### target
<div style="margin-left: 10px;">




•  **target**:
`ISchedulable` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L80)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ListEntry**(`target: ISchedulable, priority: number, paused: boolean, markedForDeletion: boolean`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ISchedulable` |
| `priority` | `number` |
| `paused` | `boolean` |
| `markedForDeletion` | `boolean` |
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L83)&nbsp;


---

<!---->
## Methods

### put

<div style="margin-left: 10px;">

▸ `static`  **put**<`void`\>(`entry: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L71)&nbsp;
___
### get

<div style="margin-left: 10px;">

▸ `static`  **get**<`any`\>(`target: ISchedulable, priority: number, paused: boolean, markedForDeletion: boolean`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` | - |
| `priority` | `number` | - |
| `paused` | `boolean` | - |
| `markedForDeletion` | `boolean` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L58)&nbsp;
___
<!---->




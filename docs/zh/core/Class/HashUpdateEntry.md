
## Class: HashUpdateEntry







**`zh`** 更新条目列表




**`param`** Which list does it belong to ?




**`param`** entry in the list




**`param`** hash key (retained)




**`param`** 



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ callback](#callback)
- [ entry](#entry)
- [ list](#list)
- [ target](#target)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  put](#put)
- [ **`static`**  get](#get)
</div>

## Properties


### callback
<div style="margin-left: 10px;">




•  **callback**:
`any` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L128)&nbsp;


___


### entry
<div style="margin-left: 10px;">




•  **entry**:
`ListEntry` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L126)&nbsp;


___


### list
<div style="margin-left: 10px;">




•  **list**:
`any` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L125)&nbsp;


___


### target
<div style="margin-left: 10px;">




•  **target**:
`ISchedulable` 
</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L127)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new HashUpdateEntry**(`list: any, entry: ListEntry, target: ISchedulable, callback: any`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `list` | `any` |





| Name | Type |
| :------ | :------ |
| `entry` | `ListEntry` |





| Name | Type |
| :------ | :------ |
| `target` | `ISchedulable` |





| Name | Type |
| :------ | :------ |
| `callback` | `any` |





</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L128)&nbsp;


---

<!---->
## Methods

### put
<div style="margin-left: 10px;">

▸ `static`  **put**<`void`\>(`entry: any`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L116)&nbsp;
___
### get
<div style="margin-left: 10px;">

▸ `static`  **get**<`any`\>(`list: any, entry: ListEntry, target: ISchedulable, callback: any`) : `any`




<!---->
<!--    #### Returns `any` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `list` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `entry` | `ListEntry` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `ISchedulable` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | - |



##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/scheduler.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scheduler.ts#L103)&nbsp;
___
<!---->




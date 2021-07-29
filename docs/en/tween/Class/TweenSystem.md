
## Class: TweenSystem












**`en`** 
Tween system.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ID](#ID)
- [ **`static`**  instance](#instance)
- [ ActionManager](#ActionManager)
- [ id](#id)
- [ priority](#priority)

### Methods

- [ **`static`**  sortByPriority](#sortByPriority)
- [ init](#init)
- [ postUpdate](#postUpdate)
- [ update](#update)
</div>

## Properties


### ID
<div style="margin-left: 10px;">



**`en`** 
The ID flag of the system.




• `static` **ID**:
  = `"TWEEN"`
</div>

##### Defined in &nbsp;   [cocos/tween/tween-system.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween-system.ts#L49)&nbsp;


___


### instance
<div style="margin-left: 10px;">



**`en`** 
Gets the instance of the tween system.




• `static` **instance**:
`TweenSystem` 
</div>

##### Defined in &nbsp;   [cocos/tween/tween-system.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween-system.ts#L57)&nbsp;


___


### ActionManager
<div style="margin-left: 10px;">



**`en`** 
Gets the action manager.




•  **ActionManager**:
 ``ActionManager`` 
</div>

##### Defined in &nbsp;   [cocos/tween/tween-system.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween-system.ts#L65)&nbsp;


___


### id
<div style="margin-left: 10px;">




•  **id**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L49)&nbsp;   [cocos/core/components/system.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L52)&nbsp;


___


### priority
<div style="margin-left: 10px;">




•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L42)&nbsp;   [cocos/core/components/system.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L45)&nbsp;


___

<!---->
## Methods

### sortByPriority

<div style="margin-left: 10px;">

▸ `static`  **sortByPriority**(`a: System, b: System`)



**`en`** Sorting between different systems.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `System` | System a  |
| `b` | `System` | System b  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L62)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`



**`en`** Init the system, will be invoked by [[Director]] when registered, should be implemented if needed.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L76)&nbsp;
___
### postUpdate

<div style="margin-left: 10px;">

▸   **postUpdate**<`void`\>(`dt: number`) : `void`



**`en`** Post update function of the system, it will be invoked after all components late update phase and before the rendering process.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | Delta time after the last frame  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/system.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/system.ts#L88)&nbsp;
___
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: number`) : `void`



**`en`** 
The update will auto execute after all compnents update.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | 间隔时间  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/tween/tween-system.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween-system.ts#L78)&nbsp;
___
<!---->




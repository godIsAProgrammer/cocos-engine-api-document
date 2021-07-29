
## Class: ContainerStrategy


ContainerStrategy class is the root strategy class of container&#x27;s scale strategy,
it controls the behavior of how to scale the cc.game.container and cc.game.canvas object


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ name](#name)

### Methods

- [ apply](#apply)
- [ postApply](#postApply)
- [ preApply](#preApply)
</div>

## Properties


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `"ContainerStrategy"`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:891](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L891)&nbsp;


___

<!---->
## Methods

### apply
<div style="margin-left: 10px;">

▸   **apply**<`void`\>(`_view: View, designedResolution: Size`) : `void`




**`zh`** 策略应用方法




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `_view` | `View` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `designedResolution` | `Size` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:907](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L907)&nbsp;
___
### postApply
<div style="margin-left: 10px;">

▸   **postApply**<`void`\>(`_view: View`) : `void`




**`zh`** 策略调用之后的操作




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `_view` | `View` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:916](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L916)&nbsp;
___
### preApply
<div style="margin-left: 10px;">

▸   **preApply**<`void`\>(`_view: View`) : `void`




**`zh`** 在应用策略之前的操作




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `_view` | `View` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:898](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L898)&nbsp;
___
<!---->




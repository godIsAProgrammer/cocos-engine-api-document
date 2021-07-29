
## Class: ContentStrategy


ContentStrategy class is the root strategy class of content&#x27;s scale strategy,
it controls the behavior of how to scale the scene and setup the viewport for the game


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ name](#name)

### Constructors

- [ constructor](#constructor)

### Methods

- [ apply](#apply)
- [ postApply](#postApply)
- [ preApply](#preApply)
</div>

## Properties


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `"ContentStrategy"`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:984](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L984)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ContentStrategy**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:985](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L985)&nbsp;


---

<!---->
## Methods

### apply
<div style="margin-left: 10px;">

▸   **apply**<`AdaptResult`\>(`_view: View, designedResolution: Size`) : `AdaptResult`




**`zh`** 调用策略方法




<!---->
<!--    #### Returns `AdaptResult` The result scale and viewport rect
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `_view` | `View` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `designedResolution` | `Size` | - |



##### Returns `AdaptResult`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1008](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1008)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1017](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1017)&nbsp;
___
### preApply
<div style="margin-left: 10px;">

▸   **preApply**<`void`\>(`_view: View`) : `void`




**`zh`** 策略应用前的操作




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `_view` | `View` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:998](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L998)&nbsp;
___
<!---->




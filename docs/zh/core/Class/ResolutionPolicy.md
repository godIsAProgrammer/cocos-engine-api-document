
## Class: ResolutionPolicy


ResolutionPolicy class is the root strategy class of scale strategy,
its main task is to maintain the compatibility with Cocos2d-x&lt;/p&gt;


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ContainerStrategy](#ContainerStrategy)
- [ **`static`**  ContentStrategy](#ContentStrategy)
- [ **`static`**  UNKNOWN](#UNKNOWN)
- [ name](#name)
- [ canvasSize](#canvasSize)

### Constructors

- [ constructor](#constructor)

### Methods

- [ apply](#apply)
- [ postApply](#postApply)
- [ preApply](#preApply)
- [ setContainerStrategy](#setContainerStrategy)
- [ setContentStrategy](#setContentStrategy)
</div>

## Properties


### ContainerStrategy
<div style="margin-left: 10px;">




• `static` **ContainerStrategy**:
  = `ContainerStrategy`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1270)&nbsp;


___


### ContentStrategy
<div style="margin-left: 10px;">




• `static` **ContentStrategy**:
  = `ContentStrategy`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1271](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1271)&nbsp;


___


### UNKNOWN
<div style="margin-left: 10px;">
Unknown policy



Unknown policy

• `static` **UNKNOWN**:
`number`  = `5`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1269](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1269)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
`string`  = `"ResolutionPolicy"`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1273)&nbsp;


___


### canvasSize
<div style="margin-left: 10px;">




•  **canvasSize**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1290)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ResolutionPolicy**(`containerStg: ContainerStrategy, contentStg: ContentStrategy`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `containerStg` | `ContainerStrategy` |
| `contentStg` | `ContentStrategy` |
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1276)&nbsp;


---

<!---->
## Methods

### apply

<div style="margin-left: 10px;">

▸   **apply**<`AdaptResult`\>(`_view: View, designedResolution: Size`) : `AdaptResult`



**`zh`** 调用策略方法



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `_view` | `View` | The target view  |
| `designedResolution` | `Size` | The user defined design resolution  |


##### Returns `AdaptResult`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1313](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1313)&nbsp;
___
### postApply

<div style="margin-left: 10px;">

▸   **postApply**<`void`\>(`_view: View`) : `void`



**`zh`** 策略应用之后的操作



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `_view` | `View` | The target view  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1323](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1323)&nbsp;
___
### preApply

<div style="margin-left: 10px;">

▸   **preApply**<`void`\>(`_view: View`) : `void`



**`zh`** 策略应用前的操作



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `_view` | `View` | The target view  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1299](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1299)&nbsp;
___
### setContainerStrategy

<div style="margin-left: 10px;">

▸   **setContainerStrategy**<`void`\>(`containerStg: ContainerStrategy`) : `void`



**`zh`** 设置容器的适配策略



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `containerStg` | `ContainerStrategy` | The container strategy  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1333)&nbsp;
___
### setContentStrategy

<div style="margin-left: 10px;">

▸   **setContentStrategy**<`void`\>(`contentStg: ContentStrategy`) : `void`



**`zh`** 设置内容的适配策略



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `contentStg` | `ContentStrategy` | The content strategy  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:1344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L1344)&nbsp;
___
<!---->




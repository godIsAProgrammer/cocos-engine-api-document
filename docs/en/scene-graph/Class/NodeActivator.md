
## Class: NodeActivator







**`en`** The class used to perform activating and deactivating operations of node and component.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ resetComp](#resetComp)

### Constructors

- [ constructor](#constructor)

### Methods

- [ activateComp](#activateComp)
- [ activateNode](#activateNode)
- [ destroyComp](#destroyComp)
- [ reset](#reset)
</div>

## Properties


### resetComp
<div style="margin-left: 10px;">




•  **resetComp**:
`any` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node-activator.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node-activator.ts#L161)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new NodeActivator**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node-activator.ts:162](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node-activator.ts#L162)&nbsp;


---

<!---->
## Methods

### activateComp
<div style="margin-left: 10px;">

▸   **activateComp**<`void`\>(`comp: any, preloadInvoker: any, onLoadInvoker: any, onEnableInvoker: any`) : `void`




**`en`** Activate or des-activate a component




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `comp` | `any` | Target component  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `preloadInvoker` | `any` | The invoker for `_preload` method, normally from [[ComponentScheduler]]  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onLoadInvoker` | `any` | The invoker for `onLoad` method, normally from [[ComponentScheduler]]  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onEnableInvoker` | `any` | The invoker for `onEnable` method, normally from [[ComponentScheduler]]  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node-activator.ts:218](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node-activator.ts#L218)&nbsp;
___
### activateNode
<div style="margin-left: 10px;">

▸   **activateNode**<`void`\>(`node: any, active: any`) : `void`




**`en`** Activate or des-activate a node




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `any` | Target node  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `active` | `any` | Which state to set the node to  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node-activator.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node-activator.ts#L183)&nbsp;
___
### destroyComp
<div style="margin-left: 10px;">

▸   **destroyComp**<`void`\>(`comp: any`) : `void`




**`en`** Destroy a component




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `comp` | `any` | Target component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node-activator.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node-activator.ts#L260)&nbsp;
___
### reset
<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




**`en`** Reset all activation or des-activation tasks




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/node-activator.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node-activator.ts#L172)&nbsp;
___
<!---->





## Class: TextureBarrierInfo





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ discardContents](#discardContents)
- [ dstQueue](#dstQueue)
- [ nextAccesses](#nextAccesses)
- [ prevAccesses](#prevAccesses)
- [ srcQueue](#srcQueue)

### Constructors

- [ constructor](#constructor)

### Methods

- [ copy](#copy)
</div>

## Properties


### discardContents
<div style="margin-left: 10px;">




•  **discardContents**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1482](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1482)&nbsp;


___


### dstQueue
<div style="margin-left: 10px;">




•  **dstQueue**:
`Queue | null` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1484](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1484)&nbsp;


___


### nextAccesses
<div style="margin-left: 10px;">




•  **nextAccesses**:
`array` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1481)&nbsp;


___


### prevAccesses
<div style="margin-left: 10px;">




•  **prevAccesses**:
`array` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1480](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1480)&nbsp;


___


### srcQueue
<div style="margin-left: 10px;">




•  **srcQueue**:
`Queue | null` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1483](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1483)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new TextureBarrierInfo**(`prevAccesses: undefined, nextAccesses: undefined, discardContents: boolean, srcQueue: Queue | null, dstQueue: Queue | null`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevAccesses` | `` |
| `nextAccesses` | `` |
| `discardContents` | `boolean` |
| `srcQueue` | `` |
| `dstQueue` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1477)&nbsp;


---

<!---->
## Methods

### copy

<div style="margin-left: 10px;">

▸   **copy**<`this`\>(`info: TextureBarrierInfo`) : `this`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `TextureBarrierInfo` | - |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1487](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1487)&nbsp;
___
<!---->




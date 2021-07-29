
## Class: Simulator





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ active](#active)
- [ finished](#finished)
- [ particles](#particles)
- [ renderData](#renderData)
- [ uvFilled](#uvFilled)

### Constructors

- [ constructor](#constructor)

### Methods

- [ emitParticle](#emitParticle)
- [ requestData](#requestData)
- [ reset](#reset)
- [ step](#step)
- [ stop](#stop)
- [ updateParticleBuffer](#updateParticleBuffer)
- [ updateUVs](#updateUVs)
</div>

## Properties


### active
<div style="margin-left: 10px;">




•  **active**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L112)&nbsp;


___


### finished
<div style="margin-left: 10px;">




•  **finished**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L114)&nbsp;


___


### particles
<div style="margin-left: 10px;">




•  **particles**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L111)&nbsp;


___


### renderData
<div style="margin-left: 10px;">




•  **renderData**:
`any` 
</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L115)&nbsp;


___


### uvFilled
<div style="margin-left: 10px;">




•  **uvFilled**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L113)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Simulator**(`system: any`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `system` | `any` |





</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L120)&nbsp;


---

<!---->
## Methods

### emitParticle
<div style="margin-left: 10px;">

▸   **emitParticle**<`void`\>(`pos: any`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pos` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L152)&nbsp;
___
### requestData
<div style="margin-left: 10px;">

▸   **requestData**<`void`\>(`vertexCount: number, indicesCount: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `vertexCount` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `indicesCount` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:475](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L475)&nbsp;
___
### reset
<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L141)&nbsp;
___
### step
<div style="margin-left: 10px;">

▸   **step**<`void`\>(`dt: any`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:329](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L329)&nbsp;
___
### stop
<div style="margin-left: 10px;">

▸   **stop**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L134)&nbsp;
___
### updateParticleBuffer
<div style="margin-left: 10px;">

▸   **updateParticleBuffer**<`void`\>(`particle: any, pos: any, buffer: any, offset: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `particle` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `pos` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffer` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `offset` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L263)&nbsp;
___
### updateUVs
<div style="margin-left: 10px;">

▸   **updateUVs**<`void`\>(`force: undefined | false | true`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `undefined \| false \| true` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:240](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L240)&nbsp;
___
<!---->




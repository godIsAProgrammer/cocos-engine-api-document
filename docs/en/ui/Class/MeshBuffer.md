
## Class: MeshBuffer





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ byteOffset](#byteOffset)
- [ byteStart](#byteStart)
- [ iData](#iData)
- [ indicesOffset](#indicesOffset)
- [ indicesStart](#indicesStart)
- [ lastByteOffset](#lastByteOffset)
- [ vData](#vData)
- [ vertexOffset](#vertexOffset)
- [ vertexStart](#vertexStart)
- [ attributes](#attributes)
- [ indexBuffer](#indexBuffer)
- [ vertexBuffers](#vertexBuffers)
- [ vertexFormatBytes](#vertexFormatBytes)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
- [ recordBatch](#recordBatch)
- [ request](#request)
- [ reset](#reset)
- [ uploadBuffers](#uploadBuffers)
</div>

## Properties


### byteOffset
<div style="margin-left: 10px;">




•  **byteOffset**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L46)&nbsp;


___


### byteStart
<div style="margin-left: 10px;">




•  **byteStart**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L45)&nbsp;


___


### iData
<div style="margin-left: 10px;">




•  **iData**:
`Uint16Array | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:43](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L43)&nbsp;


___


### indicesOffset
<div style="margin-left: 10px;">




•  **indicesOffset**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L48)&nbsp;


___


### indicesStart
<div style="margin-left: 10px;">




•  **indicesStart**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L47)&nbsp;


___


### lastByteOffset
<div style="margin-left: 10px;">




•  **lastByteOffset**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L51)&nbsp;


___


### vData
<div style="margin-left: 10px;">




•  **vData**:
`Float32Array | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L42)&nbsp;


___


### vertexOffset
<div style="margin-left: 10px;">




•  **vertexOffset**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L50)&nbsp;


___


### vertexStart
<div style="margin-left: 10px;">




•  **vertexStart**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L49)&nbsp;


___


### attributes
<div style="margin-left: 10px;">




•  **attributes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:38](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L38)&nbsp;


___


### indexBuffer
<div style="margin-left: 10px;">




•  **indexBuffer**:
 ``Buffer`` 
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:40](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L40)&nbsp;


___


### vertexBuffers
<div style="margin-left: 10px;">




•  **vertexBuffers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L39)&nbsp;


___


### vertexFormatBytes
<div style="margin-left: 10px;">




•  **vertexFormatBytes**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L74)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new MeshBuffer**(`batcher: Batcher2D`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `batcher` | `Batcher2D` |
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L68)&nbsp;


---

<!---->
## Methods

### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L158)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`attrs: undefined, outOfCallback:  | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `attrs` |  | - |
| `outOfCallback` | ` \| null` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L78)&nbsp;
___
### recordBatch

<div style="margin-left: 10px;">

▸   **recordBatch**<`InputAssemblerHandle`\> : `InputAssemblerHandle`




##### Returns `InputAssemblerHandle`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L173)&nbsp;
___
### request

<div style="margin-left: 10px;">

▸   **request**<`boolean`\>(`vertexCount: number, indicesCount: number`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `vertexCount` | `number` | - |
| `indicesCount` | `number` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L111)&nbsp;
___
### reset

<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L145)&nbsp;
___
### uploadBuffers

<div style="margin-left: 10px;">

▸   **uploadBuffers**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/renderer/mesh-buffer.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/renderer/mesh-buffer.ts#L192)&nbsp;
___
<!---->





## Class: TiffReader


cc.tiffReader is a singleton object, it&#x27;s a tiff file reader, it can parse byte array to draw into a canvas



**`name`** tiffReader



<div class="table-of-content">
<h2>Table of contents</h2>


### Constructors

- [ constructor](#constructor)

### Methods

- [ checkLittleEndian](#checkLittleEndian)
- [ clampColorSample](#clampColorSample)
- [ getBits](#getBits)
- [ getBytes](#getBytes)
- [ getFieldTagName](#getFieldTagName)
- [ getFieldTypeLength](#getFieldTypeLength)
- [ getFieldTypeName](#getFieldTypeName)
- [ getFieldValues](#getFieldValues)
- [ getUint16](#getUint16)
- [ getUint32](#getUint32)
- [ getUint8](#getUint8)
- [ hasTowel](#hasTowel)
- [ parseFileDirectory](#parseFileDirectory)
- [ parseTIFF](#parseTIFF)
</div>

## Constructors


### constructor
<div style="margin-left: 10px;">

• **new TiffReader**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:59](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L59)&nbsp;


---

<!---->
## Methods

### checkLittleEndian

<div style="margin-left: 10px;">

▸   **checkLittleEndian**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L79)&nbsp;
___
### clampColorSample

<div style="margin-left: 10px;">

▸   **clampColorSample**<`number`\>(`colorSample: any, bitsPerSample: any`) : `number`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `colorSample` | `any` | - |
| `bitsPerSample` | `any` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L247)&nbsp;
___
### getBits

<div style="margin-left: 10px;">

▸   **getBits**(`numBits: any, byteOffset: any, bitOffset: any`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `numBits` | `any` | - |
| `byteOffset` | `any` | - |
| `bitOffset` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L189)&nbsp;
___
### getBytes

<div style="margin-left: 10px;">

▸   **getBytes**<`number`\>(`numBytes: any, offset: any`) : `number`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `numBytes` | `any` | - |
| `offset` | `any` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L171)&nbsp;
___
### getFieldTagName

<div style="margin-left: 10px;">

▸   **getFieldTagName**<`any`\>(`fieldTag: any`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fieldTag` | `any` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L111)&nbsp;
___
### getFieldTypeLength

<div style="margin-left: 10px;">

▸   **getFieldTypeLength**(`fieldTypeName: any`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fieldTypeName` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L122)&nbsp;
___
### getFieldTypeName

<div style="margin-left: 10px;">

▸   **getFieldTypeName**<`any`\>(`fieldType: any`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fieldType` | `any` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L103)&nbsp;
___
### getFieldValues

<div style="margin-left: 10px;">

▸   **getFieldValues**(`fieldTagName: any, fieldTypeName: any, typeCount: any, valueOffset: any`)



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `fieldTagName` | `any` | - |
| `fieldTypeName` | `any` | - |
| `typeCount` | `any` | - |
| `valueOffset` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L136)&nbsp;
___
### getUint16

<div style="margin-left: 10px;">

▸   **getUint16**<`number`\>(`offset: any`) : `number`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `offset` | `any` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L68)&nbsp;
___
### getUint32

<div style="margin-left: 10px;">

▸   **getUint32**<`number`\>(`offset: any`) : `number`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `offset` | `any` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L73)&nbsp;
___
### getUint8

<div style="margin-left: 10px;">

▸   **getUint8**<`never`\>(`offset: any`) : `never`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `offset` | `any` | - |


##### Returns `never`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L64)&nbsp;
___
### hasTowel

<div style="margin-left: 10px;">

▸   **hasTowel**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L94)&nbsp;
___
### parseFileDirectory

<div style="margin-left: 10px;">

▸   **parseFileDirectory**<`void`\>(`offset: any`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `offset` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:220](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L220)&nbsp;
___
### parseTIFF

<div style="margin-left: 10px;">

▸   **parseTIFF**<`any`\>(`tiffData: any, canvas: any`) : `any`




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `tiffData` | `any` | - |
| `canvas` | `any` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/tiff-reader.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/tiff-reader.ts#L259)&nbsp;
___
<!---->




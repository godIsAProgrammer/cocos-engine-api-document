
## Class: WebGL2Buffer


`extend:`
[Buffer](docs/en/gfx/Class/Buffer.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ count](#count)
- [ flags](#flags)
- [ gfxType](#gfxType)
- [ gpuBuffer](#gpuBuffer)
- [ memUsage](#memUsage)
- [ size](#size)
- [ stride](#stride)
- [ usage](#usage)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
- [ resize](#resize)
- [ update](#update)
</div>

## Properties


### count
<div style="margin-left: 10px;">



**`en`** Count of the buffer wrt. stride.




•  **count**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L88)&nbsp;


___


### flags
<div style="margin-left: 10px;">




•  **flags**:
 ``BufferFlags`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L92)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### gpuBuffer
<div style="margin-left: 10px;">




•  **gpuBuffer**:
 ``IWebGL2GPUBuffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-buffer.ts:38](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-buffer.ts#L38)&nbsp;


___


### memUsage
<div style="margin-left: 10px;">



**`en`** Memory usage of the buffer.




•  **memUsage**:
 ``MemoryUsage`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L64)&nbsp;


___


### size
<div style="margin-left: 10px;">



**`en`** Size of the buffer.




•  **size**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L72)&nbsp;


___


### stride
<div style="margin-left: 10px;">



**`en`** Stride of the buffer.




•  **stride**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L80)&nbsp;


___


### usage
<div style="margin-left: 10px;">



**`en`** Usage type of the buffer.




•  **usage**:
 ``BufferUsage`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L56)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGL2Buffer**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L104)&nbsp;


---

<!---->
## Methods

### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-buffer.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-buffer.ts#L103)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: BufferInfo | BufferViewInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `BufferInfo \| BufferViewInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-buffer.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-buffer.ts#L44)&nbsp;
___
### resize

<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`size: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `size` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-buffer.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-buffer.ts#L113)&nbsp;
___
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`buffer: BufferSource, size: undefined | number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffer` | `BufferSource` | - |
| `size` | `undefined \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl2/webgl2-buffer.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl2/webgl2-buffer.ts#L135)&nbsp;
___
<!---->




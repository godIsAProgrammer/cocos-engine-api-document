
## Class: Buffer


`extend:`
[Obj](docs/zh/gfx/Class/Obj.md)












**`zh`** GFX 缓冲。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ count](#count)
- [ flags](#flags)
- [ gfxType](#gfxType)
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




**`zh`** 缓冲条目数量。





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


### memUsage
<div style="margin-left: 10px;">




**`zh`** 缓冲的内存使用方式。





•  **memUsage**:
 ``MemoryUsage`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L64)&nbsp;


___


### size
<div style="margin-left: 10px;">




**`zh`** 缓冲大小。





•  **size**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L72)&nbsp;


___


### stride
<div style="margin-left: 10px;">




**`zh`** 缓冲步长。





•  **stride**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L80)&nbsp;


___


### usage
<div style="margin-left: 10px;">




**`zh`** 缓冲使用方式。





•  **usage**:
 ``BufferUsage`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L56)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Buffer**(`device: Device`)

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




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L113)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: BufferInfo | BufferViewInfo`) : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `BufferInfo \| BufferViewInfo` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L111)&nbsp;
___
### resize
<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`size: number`) : `void`




**`zh`** 重置缓冲大小。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `size` | `number` | The new buffer size.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L120)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`buffer: BufferSource, size: undefined | number`) : `void`




**`zh`** 更新缓冲内容。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `buffer` | `BufferSource` | The new buffer data.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `size` | `undefined \| number` | Size in bytes to be updated.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/buffer.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/buffer.ts#L128)&nbsp;
___
<!---->




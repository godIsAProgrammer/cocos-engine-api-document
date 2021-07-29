
## Class: Shader


`extend:`
[Obj](docs/zh/gfx/Class/Obj.md)










**`zh`** GFX 着色器。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ attributes](#attributes)
- [ blocks](#blocks)
- [ gfxType](#gfxType)
- [ id](#id)
- [ name](#name)
- [ samplers](#samplers)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ initialize](#initialize)
</div>

## Properties


### attributes
<div style="margin-left: 10px;">




•  **attributes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L57)&nbsp;


___


### blocks
<div style="margin-left: 10px;">




•  **blocks**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L61)&nbsp;


___


### gfxType
<div style="margin-left: 10px;">




•  **gfxType**:
 ``ObjectType`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1662](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1662)&nbsp;


___


### id
<div style="margin-left: 10px;">



**`zh`** 着色器 id。





•  **id**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:45](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L45)&nbsp;


___


### name
<div style="margin-left: 10px;">



**`zh`** 着色器名称。





•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:53](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L53)&nbsp;


___


### samplers
<div style="margin-left: 10px;">




•  **samplers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L65)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Shader**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L81)&nbsp;


---

<!---->
## Methods

### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L91)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`boolean`\>(`info: ShaderInfo`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `ShaderInfo` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/shader.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/shader.ts#L89)&nbsp;
___
<!---->




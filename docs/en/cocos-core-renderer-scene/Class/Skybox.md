
## Class: Skybox





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ enabled](#enabled)
- [ envmap](#envmap)
- [ handle](#handle)
- [ isRGBE](#isRGBE)
- [ model](#model)
- [ useIBL](#useIBL)

### Constructors

- [ constructor](#constructor)

### Methods

- [ activate](#activate)
- [ destroy](#destroy)
- [ initialize](#initialize)
</div>

## Properties


### enabled
<div style="margin-left: 10px;">



**`en`** Whether activate skybox in the scene




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L52)&nbsp;   [cocos/core/renderer/scene/skybox.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L56)&nbsp;


___


### envmap
<div style="margin-left: 10px;">



**`en`** The texture cube used for the skybox




•  **envmap**:
 ``TextureCube | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L100)&nbsp;   [cocos/core/renderer/scene/skybox.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L104)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``SkyboxHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L118)&nbsp;


___


### isRGBE
<div style="margin-left: 10px;">



**`en`** Whether enable RGBE data support in skybox shader




•  **isRGBE**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L78)&nbsp;   [cocos/core/renderer/scene/skybox.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L82)&nbsp;


___


### model
<div style="margin-left: 10px;">




•  **model**:
 ``Model | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L44)&nbsp;


___


### useIBL
<div style="margin-left: 10px;">



**`en`** Whether use environment lighting




•  **useIBL**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L65)&nbsp;   [cocos/core/renderer/scene/skybox.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L69)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Skybox**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L120)&nbsp;


---

<!---->
## Methods

### activate

<div style="margin-left: 10px;">

▸   **activate**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L133)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L184)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`skyboxInfo: SkyboxInfo`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `skyboxInfo` | `SkyboxInfo` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/skybox.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/skybox.ts#L126)&nbsp;
___
<!---->




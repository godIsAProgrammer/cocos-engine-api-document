
## Class: RequestItem







**`en`** 
A collection of information about a request



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ config](#config)
- [ content](#content)
- [ ext](#ext)
- [ file](#file)
- [ info](#info)
- [ isNative](#isNative)
- [ options](#options)
- [ url](#url)
- [ uuid](#uuid)
- [ id](#id)

### Methods

- [ **`static`**  create](#create)
- [ recycle](#recycle)
</div>

## Properties


### config
<div style="margin-left: 10px;">




•  **config**:
`Config | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L140)&nbsp;


___


### content
<div style="margin-left: 10px;">




**`en`** 
The content of asset





•  **content**:
`any`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L118)&nbsp;


___


### ext
<div style="margin-left: 10px;">




**`en`** 
The extension name of asset





•  **ext**:
`string`  = `".json"`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L108)&nbsp;


___


### file
<div style="margin-left: 10px;">




**`en`** 
The file of asset





•  **file**:
`any`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L128)&nbsp;


___


### info
<div style="margin-left: 10px;">




**`en`** 
The information of asset





•  **info**:
`IAssetInfo | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L138)&nbsp;


___


### isNative
<div style="margin-left: 10px;">




**`en`** 
Whether or not it is native asset





•  **isNative**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L150)&nbsp;


___


### options
<div style="margin-left: 10px;">




**`en`** 
Custom options





•  **options**:
`Record`  = `Object.create(null)`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L160)&nbsp;


___


### url
<div style="margin-left: 10px;">




**`en`** 
The final url of request





•  **url**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L98)&nbsp;


___


### uuid
<div style="margin-left: 10px;">




**`en`** 
The uuid of request





•  **uuid**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L88)&nbsp;


___


### id
<div style="margin-left: 10px;">




**`en`** 
The id of request, combined from uuid and isNative





•  **id**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L48)&nbsp;


___

<!---->
## Methods

### create
<div style="margin-left: 10px;">

▸ `static`  **create**<`RequestItem`\> : `RequestItem`




**`en`** 
Create a new request item from pool





<!---->
<!--    #### Returns `RequestItem` requestItem

-->
<!---->


##### Returns `RequestItem`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L67)&nbsp;
___
### recycle
<div style="margin-left: 10px;">

▸   **recycle**<`void`\> : `void`




**`en`** 
Recycle this for reuse





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L172)&nbsp;
___
<!---->




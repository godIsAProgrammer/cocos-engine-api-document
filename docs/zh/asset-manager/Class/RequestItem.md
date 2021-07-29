
## Class: RequestItem






**`zh`** 
请求的相关信息集合




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



**`zh`** 
资源的内容






•  **content**:
`any`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L118)&nbsp;


___


### ext
<div style="margin-left: 10px;">



**`zh`** 
资源的扩展名






•  **ext**:
`string`  = `".json"`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L108)&nbsp;


___


### file
<div style="margin-left: 10px;">



**`zh`** 
资源的文件






•  **file**:
`any`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L128)&nbsp;


___


### info
<div style="margin-left: 10px;">



**`zh`** 
资源的相关信息






•  **info**:
`IAssetInfo | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L138)&nbsp;


___


### isNative
<div style="margin-left: 10px;">



**`zh`** 
资源是否是原生资源






•  **isNative**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L150)&nbsp;


___


### options
<div style="margin-left: 10px;">



**`zh`** 
自定义参数






•  **options**:
`Record`  = `Object.create(null)`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L160)&nbsp;


___


### url
<div style="margin-left: 10px;">



**`zh`** 
请求的最终url






•  **url**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L98)&nbsp;


___


### uuid
<div style="margin-left: 10px;">



**`zh`** 
请求资源的uuid






•  **uuid**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L88)&nbsp;


___


### id
<div style="margin-left: 10px;">



**`zh`** 
请求的 id, 由 uuid 和 isNative 组合而成





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



**`zh`** 
从对象池中创建 requestItem





##### Returns `RequestItem`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L67)&nbsp;
___
### recycle

<div style="margin-left: 10px;">

▸   **recycle**<`void`\> : `void`



**`zh`** 
回收 requestItem 用于复用






##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/request-item.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/request-item.ts#L172)&nbsp;
___
<!---->




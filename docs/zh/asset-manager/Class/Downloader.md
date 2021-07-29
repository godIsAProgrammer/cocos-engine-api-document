
## Class: Downloader







**`zh`** 
管理所有下载过程，downloader 是个单例，所有成员能通过 `cc.assetManager.downloader` 访问，它能下载以下几种类型的文件：
1. 文本
2. 图片
3. 音频
4. 资源
5. 脚本




<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ appendTimeStamp](#appendTimeStamp)
- [ bundleVers](#bundleVers)
- [ downloadDomAudio](#downloadDomAudio)
- [ downloadDomImage](#downloadDomImage)
- [ downloadFile](#downloadFile)
- [ downloadScript](#downloadScript)
- [ limited](#limited)
- [ maxConcurrency](#maxConcurrency)
- [ maxRequestsPerFrame](#maxRequestsPerFrame)
- [ maxRetryCount](#maxRetryCount)
- [ remoteBundles](#remoteBundles)
- [ retryInterval](#retryInterval)
- [ remoteServerAddress](#remoteServerAddress)

### Methods

- [ download](#download)
- [ init](#init)
- [ loadSubpackage](#loadSubpackage)
- [ register](#register)

</div>

## Properties


### appendTimeStamp
<div style="margin-left: 10px;">




•  **appendTimeStamp**:
`boolean`  = `!!EDITOR`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L177)&nbsp;


___


### bundleVers
<div style="margin-left: 10px;">




•  **bundleVers**:
`Record | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:191](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L191)&nbsp;


___


### downloadDomAudio
<div style="margin-left: 10px;">




•  **downloadDomAudio**:
`DownloadHandler | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L197)&nbsp;


___


### downloadDomImage
<div style="margin-left: 10px;">




•  **downloadDomImage**:
`downloadDomImage`  = `downloadDomImage`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:195](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L195)&nbsp;


___


### downloadFile
<div style="margin-left: 10px;">




•  **downloadFile**:
`downloadFile`  = `downloadFile`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L199)&nbsp;


___


### downloadScript
<div style="margin-left: 10px;">




•  **downloadScript**:
`downloadScript`  = `downloadScript`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L201)&nbsp;


___


### limited
<div style="margin-left: 10px;">




•  **limited**:
`boolean`  = `!EDITOR`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L179)&nbsp;


___


### maxConcurrency
<div style="margin-left: 10px;">




**`zh`** 
下载时的最大并发数





•  **maxConcurrency**:
`number`  = `6`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L141)&nbsp;


___


### maxRequestsPerFrame
<div style="margin-left: 10px;">




**`zh`** 
下载时每帧可以启动的最大请求数






•  **maxRequestsPerFrame**:
`number`  = `6`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L151)&nbsp;


___


### maxRetryCount
<div style="margin-left: 10px;">




**`zh`** 
失败重试次数





**`property`** maxRetryCount




•  **maxRetryCount**:
`number`  = `BUILD ? 3 : 0`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L175)&nbsp;


___


### remoteBundles
<div style="margin-left: 10px;">




•  **remoteBundles**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L193)&nbsp;


___


### retryInterval
<div style="margin-left: 10px;">




**`zh`** 
重试的间隔时间






•  **retryInterval**:
`number`  = `2000`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L189)&nbsp;


___


### remoteServerAddress
<div style="margin-left: 10px;">




**`zh`** 
远程服务器地址






•  **remoteServerAddress**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L161)&nbsp;


___

<!---->
## Methods

### download
<div style="margin-left: 10px;">

▸   **download**<`void`\>(`id: string, url: string, type: string, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`




**`zh`** 
在限制下使用对应的 handler 来下载文件





**`example`**

```ts

download('http://example.com/test.tga', '.tga', {onFileProgress: (loaded, total) => console.lgo(loaded/total)}, onComplete: (err) => console.log(err));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `id` | `string` | The unique id of this download  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | The url should be downloaded  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | The type indicates that which handler should be used to download, such as '.jpg'  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IDownloadParseOptions` | some optional paramters will be transferred to the corresponding handler.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallback` | callback when finishing downloading  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:322](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L322)&nbsp;
___
### init
<div style="margin-left: 10px;">

▸   **init**<`void`\>(`remoteServerAddress: string, bundleVers: Record, remoteBundles: undefined`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `remoteServerAddress` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `bundleVers` | `Record` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `remoteBundles` |  | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:262](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L262)&nbsp;
___
### loadSubpackage
<div style="margin-left: 10px;">

▸   **loadSubpackage**<`void`\>(`name: string, completeCallback: CompleteCallbackNoData`) : `void`




**`zh`** 通过子包名加载子包代码。




**`deprecated`** loader.downloader.loadSubpackage is deprecated, please use AssetManager.loadBundle instead





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Sub package name  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `completeCallback` | `CompleteCallbackNoData` | Callback invoked when sub package loaded  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:403](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L403)&nbsp;
___
### register
<div style="margin-left: 10px;">

▸   **register**<`void`\>(`type: string, handler: DownloadHandler`) : `void`




**`zh`** 
当你想修改默认行为或者拓展 downloader 来下载其他格式文件时可以注册自定义的 handler





**`example`**

```ts

downloader.register('.tga', (url, options, onComplete) => onComplete(null, null));
downloader.register({'.tga': (url, options, onComplete) => onComplete(null, null), '.ext': (url, options, onComplete) => onComplete(null, null)});


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Extension likes '.jpg' or map likes {'.jpg': jpgHandler, '.png': pngHandler}  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `handler` | `DownloadHandler` | handler  |



##### Returns `void`


▸   **register**<`void`\>(`map: Record`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `map` | `Record` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L288)&nbsp;   [cocos/core/asset-manager/downloader.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L289)&nbsp;   [cocos/core/asset-manager/downloader.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L290)&nbsp;
___
<!---->
<!---->




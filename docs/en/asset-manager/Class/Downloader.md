
## Class: Downloader






**`en`** 
Control all download process, it is a singleton. All member can be accessed with `cc.assetManager.downloader` , it can download several types of files:
1. Text
2. Image
3. Audio
4. Assets
5. Scripts



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



**`en`** 
The maximum number of concurrent when downloading





•  **maxConcurrency**:
`number`  = `6`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L141)&nbsp;


___


### maxRequestsPerFrame
<div style="margin-left: 10px;">



**`en`** 
The maximum number of request can be launched per frame when downloading





•  **maxRequestsPerFrame**:
`number`  = `6`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L151)&nbsp;


___


### maxRetryCount
<div style="margin-left: 10px;">



**`en`** 
The max number of retries when fail




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



**`en`** 
Wait for while before another retry, unit: ms





•  **retryInterval**:
`number`  = `2000`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L189)&nbsp;


___


### remoteServerAddress
<div style="margin-left: 10px;">



**`en`** 
The address of remote server





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



**`en`** 
Use corresponding handler to download file under limitation




**`example`**

```ts

download('http://example.com/test.tga', '.tga', {onFileProgress: (loaded, total) => console.lgo(loaded/total)}, onComplete: (err) => console.log(err));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `id` | `string` | The unique id of this download  |
| `url` | `string` | The url should be downloaded  |
| `type` | `string` | The type indicates that which handler should be used to download, such as '.jpg'  |
| `options` | `IDownloadParseOptions` | some optional paramters will be transferred to the corresponding handler.  |
| `onComplete` | `CompleteCallback` | callback when finishing downloading  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:322](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L322)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\>(`remoteServerAddress: string, bundleVers: Record, remoteBundles: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `remoteServerAddress` | `string` | - |
| `bundleVers` | `Record` | - |
| `remoteBundles` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:262](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L262)&nbsp;
___
### loadSubpackage

<div style="margin-left: 10px;">

▸   **loadSubpackage**<`void`\>(`name: string, completeCallback: CompleteCallbackNoData`) : `void`



**`en`** Load sub package with name.



**`deprecated`** loader.downloader.loadSubpackage is deprecated, please use AssetManager.loadBundle instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | Sub package name  |
| `completeCallback` | `CompleteCallbackNoData` | Callback invoked when sub package loaded  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/downloader.ts:403](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/downloader.ts#L403)&nbsp;
___
### register

<div style="margin-left: 10px;">

▸   **register**<`void`\>(`type: string, handler: DownloadHandler`) : `void`



**`en`** 
Register custom handler if you want to change default behavior or extend downloader to download other format file




**`example`**

```ts

downloader.register('.tga', (url, options, onComplete) => onComplete(null, null));
downloader.register({'.tga': (url, options, onComplete) => onComplete(null, null), '.ext': (url, options, onComplete) => onComplete(null, null)});


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Extension likes '.jpg' or map likes {'.jpg': jpgHandler, '.png': pngHandler}  |
| `handler` | `DownloadHandler` | handler  |


##### Returns `void`

▸   **register**<`void`\>(`map: Record`) : `void`



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




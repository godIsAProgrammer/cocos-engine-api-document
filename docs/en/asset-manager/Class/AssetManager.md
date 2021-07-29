
## Class: AssetManager






**`en`** 
This module controls asset's behaviors and information, include loading, releasing etc. it is a singleton
All member can be accessed with `cc.assetManager`.



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ allowImageBitmap](#allowImageBitmap)
- [ assets](#assets)
- [ bundles](#bundles)
- [ cacheAsset](#cacheAsset)
- [ cacheManager](#cacheManager)
- [ dependUtil](#dependUtil)
- [ downloader](#downloader)
- [ factory](#factory)
- [ fetchPipe](#fetchPipe)
- [ fetchPipeline](#fetchPipeline)
- [ force](#force)
- [ generalImportBase](#generalImportBase)
- [ generalNativeBase](#generalNativeBase)
- [ loadPipe](#loadPipe)
- [ packManager](#packManager)
- [ parser](#parser)
- [ pipeline](#pipeline)
- [ preprocessPipe](#preprocessPipe)
- [ presets](#presets)
- [ references](#references)
- [ transformPipeline](#transformPipeline)
- [ utils](#utils)
- [ main](#main)
- [ resources](#resources)

### Methods

- [ getBundle](#getBundle)
- [ init](#init)
- [ loadAny](#loadAny)
- [ loadBundle](#loadBundle)
- [ loadRemote](#loadRemote)
- [ postLoadNative](#postLoadNative)
- [ preloadAny](#preloadAny)
- [ releaseAll](#releaseAll)
- [ releaseAsset](#releaseAsset)
- [ removeBundle](#removeBundle)
</div>

## Properties


### allowImageBitmap
<div style="margin-left: 10px;">



**`en`** 
Whether to use image bitmap to load image first. If enabled, images loading will become faster but memory usage will increase.





•  **allowImageBitmap**:
`boolean`  = `!sys.isMobile`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L207)&nbsp;


___


### assets
<div style="margin-left: 10px;">



**`en`** 
The collection of asset which is already loaded, you can remove cache with {{#crossLink "AssetManager/releaseAsset:method"}}{{/crossLink}}





•  **assets**:
`Cache`  = `assets`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L175)&nbsp;


___


### bundles
<div style="margin-left: 10px;">



**`en`** 
The collection of bundle which is already loaded, you can remove cache with {{#crossLink "AssetManager/removeBundle:method"}}{{/crossLink}}





•  **bundles**:
`Cache`  = `bundles`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L166)&nbsp;


___


### cacheAsset
<div style="margin-left: 10px;">



**`en`** 
Whether or not cache the loaded asset





•  **cacheAsset**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:257](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L257)&nbsp;


___


### cacheManager
<div style="margin-left: 10px;">



**`en`** 
Cache manager is a module which controls all caches downloaded from server in non-web platform.





•  **cacheManager**:
`CacheManager | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L267)&nbsp;


___


### dependUtil
<div style="margin-left: 10px;">



**`en`** 
Manage relationship between asset and its dependencies





•  **dependUtil**:
`DependUtil`  = `dependUtil`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L187)&nbsp;


___


### downloader
<div style="margin-left: 10px;">



**`en`** 
Manage all downloading task





•  **downloader**:
`Downloader`  = `downloader`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L227)&nbsp;


___


### factory
<div style="margin-left: 10px;">




•  **factory**:
`Factory`  = `factory`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L279)&nbsp;


___


### fetchPipe
<div style="margin-left: 10px;">




•  **fetchPipe**:
`IPipe`  = `fetch`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L283)&nbsp;


___


### fetchPipeline
<div style="margin-left: 10px;">



**`en`** 
Fetching pipeline





•  **fetchPipeline**:
`Pipeline`  = `fetchPipeline.append(preprocess).append(fetch)`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L146)&nbsp;


___


### force
<div style="margin-left: 10px;">



**`en`** 
Whether or not load asset forcely, if it is true, asset will be loaded regardless of error





•  **force**:
`boolean`  = `EDITOR || PREVIEW`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L197)&nbsp;


___


### generalImportBase
<div style="margin-left: 10px;">




•  **generalImportBase**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L177)&nbsp;


___


### generalNativeBase
<div style="margin-left: 10px;">




•  **generalNativeBase**:
`string`  = `""`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L178)&nbsp;


___


### loadPipe
<div style="margin-left: 10px;">




•  **loadPipe**:
`IPipe`  = `load`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L285)&nbsp;


___


### packManager
<div style="margin-left: 10px;">



**`en`** 
Manage all packed asset





•  **packManager**:
`PackManager`  = `packManager`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L247)&nbsp;


___


### parser
<div style="margin-left: 10px;">



**`en`** 
Manage all parsing task





•  **parser**:
`Parser`  = `parser`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L237)&nbsp;


___


### pipeline
<div style="margin-left: 10px;">



**`en`** 
Normal loading pipeline





•  **pipeline**:
`Pipeline`  = `pipeline.append(preprocess).append(load)`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L136)&nbsp;


___


### preprocessPipe
<div style="margin-left: 10px;">




•  **preprocessPipe**:
`IPipe`  = `preprocess`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L281)&nbsp;


___


### presets
<div style="margin-left: 10px;">



**`en`** 
The preset of options





•  **presets**:
  = `presets`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:277](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L277)&nbsp;


___


### references
<div style="margin-left: 10px;">




•  **references**:
`null | Cache`  = `references`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:287](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L287)&nbsp;


___


### transformPipeline
<div style="margin-left: 10px;">



**`en`** 
Url transformer





•  **transformPipeline**:
`Pipeline`  = `transformPipeline.append(parse).append(combine)`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L156)&nbsp;


___


### utils
<div style="margin-left: 10px;">



**`en`** 
Some useful function





•  **utils**:
`"/Users/qisen.cao/workspace/code/engine/cocos/core/asset-manager/helper"`  = `helper`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L217)&nbsp;


___


### main
<div style="margin-left: 10px;">



**`en`** 
The builtin 'main' bundle





•  **main**:
 ``Bundle | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L303)&nbsp;


___


### resources
<div style="margin-left: 10px;">



**`en`** 
The builtin 'resources' bundle





•  **resources**:
 ``Bundle | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L315)&nbsp;


___

<!---->
## Methods

### getBundle

<div style="margin-left: 10px;">

▸   **getBundle**(`name: string`)



**`en`** 
Get the bundle which has been loaded




**`example`**

```ts

// ${project}/assets/test1
cc.assetManager.getBundle('test1');

cc.assetManager.getBundle('resources');


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The name of bundle  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:368](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L368)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\>(`options: IAssetManagerOptions`) : `void`



**`en`** 
Initialize assetManager with options




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IAssetManagerOptions` | the configuration  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:329](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L329)&nbsp;
___
### loadAny

<div style="margin-left: 10px;">

▸   **loadAny**<`void`\>(`requests: Request, options: IOptions | null, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`



**`en`** 
General interface used to load assets with a progression callback and a complete callback. You can achieve almost all
effect you want with combination of `requests` and `options`.It is highly recommended that you use more simple API,
such as `load`, `loadDir` etc. Every custom parameter in `options` will be distribute to each of `requests`. if request
already has same one, the parameter in request will be given priority. Besides, if request has dependencies, `options`
will distribute to dependencies too. Every custom parameter in `requests` will be tranfered to handler of `downloader`
and `parser` as `options`. You can register you own handler downloader or parser to collect these custom parameters for some effect.

Reserved Keyword: `uuid`, `url`, `path`, `dir`, `scene`, `type`, `priority`, `preset`, `audioLoadMode`, `ext`,
`bundle`, `onFileProgress`, `maxConcurrency`, `maxRequestsPerFrame`, `maxRetryCount`, `version`, `xhrResponseType`,
`xhrWithCredentials`, `xhrMimeType`, `xhrTimeout`, `xhrHeader`, `reloadAsset`, `cacheAsset`, `cacheEnabled`,
Please DO NOT use these words as custom options!




**`example`**

```ts

cc.assetManager.loadAny({url: 'http://example.com/a.png'}, (err, img) => cc.log(img));
cc.assetManager.loadAny(['60sVXiTH1D/6Aft4MRt9VC'], (err, assets) => cc.log(assets));
cc.assetManager.loadAny([{ uuid: '0cbZa5Y71CTZAccaIFluuZ'}, {url: 'http://example.com/a.png'}], (err, assets) => cc.log(assets));
cc.assetManager.downloader.register('.asset', (url, options, onComplete) => {
     url += '?userName=' + options.userName + "&password=" + options.password;
     cc.assetManager.downloader.downloadFile(url, null, onComplete);
});
cc.assetManager.parser.register('.asset', (file, options, onComplete) => {
     var json = JSON.parse(file);
     var skin = json[options.skin];
     var model = json[options.model];
     onComplete(null, {skin, model});
});
cc.assetManager.loadAny({ url: 'http://example.com/my.asset', skin: 'xxx', model: 'xxx', userName: 'xxx', password: 'xxx' });


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | The request you want to load  |
| `options` | `IOptions \| null` | Optional parameters  |
| `onProgress` | `ProgressCallback \| null` | Callback invoked when progression change  |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback invoked when finish loading  |


##### Returns `void`

▸   **loadAny**<`void`\>(`requests: Request, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |
| `onProgress` | `ProgressCallback \| null` | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`

▸   **loadAny**<`void`\>(`requests: Request, options: IOptions | null, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |
| `options` | `IOptions \| null` | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`

▸   **loadAny**<`void`\>(`requests: string, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `string` | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`

▸   **loadAny**<`void`\>(`requests: undefined, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` |  | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`

▸   **loadAny**<`void`\>(`requests: Request, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:441](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L441)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:442](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L442)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L443)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:444](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L444)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:445](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L445)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:446](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L446)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L447)&nbsp;
___
### loadBundle

<div style="margin-left: 10px;">

▸   **loadBundle**<`void`\>(`nameOrUrl: string, options: IBundleOptions | null, onComplete: CompleteCallbackWithData | null`) : `void`



**`en`** 
load bundle




**`example`**

```ts

loadBundle('http://localhost:8080/test', null, (err, bundle) => console.log(err));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `nameOrUrl` | `string` | The name or root path of bundle  |
| `options` | `IBundleOptions \| null` | Some optional paramter, same like downloader.downloadFile  |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback when bundle loaded or failed  |


##### Returns `void`

▸   **loadBundle**<`void`\>(`nameOrUrl: string, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `nameOrUrl` | `string` | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:617](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L617)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L618)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:619](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L619)&nbsp;
___
### loadRemote

<div style="margin-left: 10px;">

▸   **loadRemote**<`void`\>(`url: string, options: IRemoteOptions | null, onComplete: CompleteCallbackWithData | null`) : `void`



**`en`** 
Load remote asset with url, such as audio, image, text and so on.




**`example`**

```ts

cc.assetManager.loadRemote('http://www.cloud.com/test1.jpg', (err, texture) => console.log(err));
cc.assetManager.loadRemote('http://www.cloud.com/test2.mp3', (err, audioClip) => console.log(err));
cc.assetManager.loadRemote('http://www.cloud.com/test3', { ext: '.png' }, (err, texture) => console.log(err));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | The url of asset  |
| `options` | `IRemoteOptions \| null` | Some optional parameters  |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback invoked when finish loading  |


##### Returns `void`

▸   **loadRemote**<`void`\>(`url: string, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:575](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L575)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L576)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:577](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L577)&nbsp;
___
### postLoadNative

<div style="margin-left: 10px;">

▸   **postLoadNative**<`void`\>(`asset: Asset, options: INativeAssetOptions | null, onComplete: CompleteCallbackNoData | null`) : `void`



**`en`** 
Load native file of asset, if you check the option 'Async Load Assets', you may need to load native file with this before you use the asset




**`example`**

```ts

cc.assetManager.postLoadNative(texture, (err) => console.log(err));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset` | The asset  |
| `options` | `INativeAssetOptions \| null` | Some optional parameters  |
| `onComplete` | `CompleteCallbackNoData \| null` | Callback invoked when finish loading  |


##### Returns `void`

▸   **postLoadNative**<`void`\>(`asset: Asset, onComplete: CompleteCallbackNoData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset` | - |
| `onComplete` | `CompleteCallbackNoData \| null` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:522](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L522)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:523](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L523)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:524](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L524)&nbsp;
___
### preloadAny

<div style="margin-left: 10px;">

▸   **preloadAny**<`void`\>(`requests: Request, options: IOptions | null, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`



**`en`** 
General interface used to preload assets with a progression callback and a complete callback.It is highly recommended that you use
more simple API, such as `preloadRes`, `preloadResDir` etc. Everything about preload is just likes `cc.assetManager.loadAny`, the
difference is `cc.assetManager.preloadAny` will only download asset but not parse asset. You need to invoke `cc.assetManager.loadAny(preloadTask)`
to finish loading asset




**`example`**

```ts

cc.assetManager.preloadAny('0cbZa5Y71CTZAccaIFluuZ', (err) => cc.assetManager.loadAny('0cbZa5Y71CTZAccaIFluuZ'));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | The request you want to preload  |
| `options` | `IOptions \| null` | Optional parameters  |
| `onProgress` | `ProgressCallback \| null` | Callback invoked when progression change  |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback invoked when finish preloading  |


##### Returns `void`

▸   **preloadAny**<`void`\>(`requests: Request, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |
| `onProgress` | `ProgressCallback \| null` | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`

▸   **preloadAny**<`void`\>(`requests: Request, options: IOptions | null, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |
| `options` | `IOptions \| null` | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`

▸   **preloadAny**<`void`\>(`requests: Request, onComplete: CompleteCallbackWithData | null`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |
| `onComplete` | `CompleteCallbackWithData \| null` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L485)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:490](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L490)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L491)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:492](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L492)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:493](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L493)&nbsp;
___
### releaseAll

<div style="margin-left: 10px;">

▸   **releaseAll**<`void`\> : `void`



**`en`** 
Release all assets. Refer to {{#crossLink "AssetManager/releaseAsset:method"}}{{/crossLink}} for detailed informations.





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:692](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L692)&nbsp;
___
### releaseAsset

<div style="margin-left: 10px;">

▸   **releaseAsset**<`void`\>(`asset: Asset`) : `void`



**`en`** 
Release asset and it's dependencies.
This method will not only remove the cache of the asset in assetManager, but also clean up its content.
For example, if you release a texture, the texture asset and its gl texture data will be freed up.
Notice, this method may cause the texture to be unusable, if there are still other nodes use the same texture,
they may turn to black and report gl errors.




**`example`**

```ts

// release a texture which is no longer need
cc.assetManager.releaseAsset(texture);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset` | The asset to be released  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:664](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L664)&nbsp;
___
### removeBundle

<div style="margin-left: 10px;">

▸   **removeBundle**<`void`\>(`bundle: Bundle`) : `void`



**`en`** 
Remove this bundle. NOTE: The asset whthin this bundle will not be released automatically,
you can call {{#crossLink "Bundle/releaseAll:method"}}{{/crossLink}} manually before remove it if you need




**`typescript`** 
removeBundle(bundle: cc.AssetManager.Bundle): void




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `bundle` | `Bundle` | The bundle to be removed  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L385)&nbsp;
___
<!---->




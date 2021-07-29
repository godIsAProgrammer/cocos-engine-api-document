
## Class: AssetManager







**`zh`** 
此模块管理资源的行为和信息，包括加载，释放等，这是一个单例，所有成员能够通过 `cc.assetManager` 调用




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




**`zh`** 
是否优先使用 image bitmap 来加载图片，启用之后，图片加载速度会更快, 但内存占用会变高，






•  **allowImageBitmap**:
`boolean`  = `!sys.isMobile`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L207)&nbsp;


___


### assets
<div style="margin-left: 10px;">




**`zh`** 
已加载资源的集合， 你能通过 {{#crossLink "AssetManager/releaseAsset:method"}}{{/crossLink}} 来移除缓存





•  **assets**:
`Cache`  = `assets`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L175)&nbsp;


___


### bundles
<div style="margin-left: 10px;">




**`zh`** 
已加载 bundle 的集合， 你能通过 {{#crossLink "AssetManager/removeBundle:method"}}{{/crossLink}} 来移除缓存






•  **bundles**:
`Cache`  = `bundles`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L166)&nbsp;


___


### cacheAsset
<div style="margin-left: 10px;">




**`zh`** 
是否缓存已加载的资源






•  **cacheAsset**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:257](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L257)&nbsp;


___


### cacheManager
<div style="margin-left: 10px;">




**`zh`** 
缓存管理器是一个模块，在非 WEB 平台上，用于管理所有从服务器上下载下来的缓存






•  **cacheManager**:
`CacheManager | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L267)&nbsp;


___


### dependUtil
<div style="margin-left: 10px;">




**`zh`** 
管理资源依赖关系





•  **dependUtil**:
`DependUtil`  = `dependUtil`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L187)&nbsp;


___


### downloader
<div style="margin-left: 10px;">




**`zh`** 
管理所有下载任务






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




**`zh`** 
下载管线






•  **fetchPipeline**:
`Pipeline`  = `fetchPipeline.append(preprocess).append(fetch)`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L146)&nbsp;


___


### force
<div style="margin-left: 10px;">




**`zh`** 
是否强制加载资源, 如果为 true ，加载资源将会忽略报错






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




**`zh`** 
管理所有合并后的资源






•  **packManager**:
`PackManager`  = `packManager`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L247)&nbsp;


___


### parser
<div style="margin-left: 10px;">




**`zh`** 
管理所有解析任务






•  **parser**:
`Parser`  = `parser`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L237)&nbsp;


___


### pipeline
<div style="margin-left: 10px;">




**`zh`** 
正常加载管线






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




**`zh`** 
可选参数的预设集






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




**`zh`** 
Url 转换器






•  **transformPipeline**:
`Pipeline`  = `transformPipeline.append(parse).append(combine)`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L156)&nbsp;


___


### utils
<div style="margin-left: 10px;">




**`zh`** 
一些有用的方法






•  **utils**:
`"/Users/qisen.cao/workspace/code/engine/cocos/core/asset-manager/helper"`  = `helper`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L217)&nbsp;


___


### main
<div style="margin-left: 10px;">




**`zh`** 
内置 main 包





•  **main**:
 ``Bundle | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L303)&nbsp;


___


### resources
<div style="margin-left: 10px;">




**`zh`** 
内置 resources 包






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




**`zh`** 
获取已加载的分包





**`example`**

```ts

// ${project}/assets/test1
cc.assetManager.getBundle('test1');

cc.assetManager.getBundle('resources');


```




<!---->

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




**`zh`** 
初始化资源管理器





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 
通用加载资源接口，可传入进度回调以及完成回调，通过组合 `request` 和 `options` 参数，几乎可以实现和扩展所有想要的加载效果。非常建议
你使用更简单的API，例如 `load`、`loadDir` 等。`options` 中的自定义参数将会分发到 `requests` 的每一项中，如果request中已存在同名的
参数则以 `requests` 中为准，同时如果有其他依赖资源，则 `options` 中的参数会继续向依赖项中分发。request中的自定义参数都会以 `options`
形式传入加载流程中的 `downloader`, `parser` 的方法中, 你可以扩展 `downloader`, `parser` 收集参数完成想实现的效果。

保留关键字: `uuid`, `url`, `path`, `dir`, `scene`, `type`, `priority`, `preset`, `audioLoadMode`, `ext`, `bundle`, `onFileProgress`,
 `maxConcurrency`, `maxRequestsPerFrame`, `maxRetryCount`, `version`, `xhrResponseType`, `xhrWithCredentials`, `xhrMimeType`, `xhrTimeout`, `xhrHeader`,
 `reloadAsset`, `cacheAsset`, `cacheEnabled`, 请不要使用这些字段为自定义参数!





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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | The request you want to load  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IOptions \| null` | Optional parameters  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | Callback invoked when progression change  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback invoked when finish loading  |



##### Returns `void`


▸   **loadAny**<`void`\>(`requests: Request, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **loadAny**<`void`\>(`requests: Request, options: IOptions | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IOptions \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **loadAny**<`void`\>(`requests: string, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **loadAny**<`void`\>(`requests: undefined, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **loadAny**<`void`\>(`requests: Request, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:441](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L441)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:442](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L442)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L443)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:444](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L444)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:445](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L445)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:446](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L446)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L447)&nbsp;
___
### loadBundle
<div style="margin-left: 10px;">

▸   **loadBundle**<`void`\>(`nameOrUrl: string, options: IBundleOptions | null, onComplete: CompleteCallbackWithData | null`) : `void`




**`zh`** 
加载资源包





**`example`**

```ts

loadBundle('http://localhost:8080/test', null, (err, bundle) => console.log(err));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `nameOrUrl` | `string` | The name or root path of bundle  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IBundleOptions \| null` | Some optional paramter, same like downloader.downloadFile  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback when bundle loaded or failed  |



##### Returns `void`


▸   **loadBundle**<`void`\>(`nameOrUrl: string, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `nameOrUrl` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:617](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L617)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L618)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:619](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L619)&nbsp;
___
### loadRemote
<div style="margin-left: 10px;">

▸   **loadRemote**<`void`\>(`url: string, options: IRemoteOptions | null, onComplete: CompleteCallbackWithData | null`) : `void`




**`zh`** 
使用 url 加载远程资源，例如音频，图片，文本等等。





**`example`**

```ts

cc.assetManager.loadRemote('http://www.cloud.com/test1.jpg', (err, texture) => console.log(err));
cc.assetManager.loadRemote('http://www.cloud.com/test2.mp3', (err, audioClip) => console.log(err));
cc.assetManager.loadRemote('http://www.cloud.com/test3', { ext: '.png' }, (err, texture) => console.log(err));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | The url of asset  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IRemoteOptions \| null` | Some optional parameters  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback invoked when finish loading  |



##### Returns `void`


▸   **loadRemote**<`void`\>(`url: string, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:575](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L575)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L576)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:577](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L577)&nbsp;
___
### postLoadNative
<div style="margin-left: 10px;">

▸   **postLoadNative**<`void`\>(`asset: Asset, options: INativeAssetOptions | null, onComplete: CompleteCallbackNoData | null`) : `void`




**`zh`** 
加载资源的原生文件，如果你勾选了'延迟加载资源'选项，你可能需要在使用资源之前调用此方法来加载原生文件





**`example`**

```ts

cc.assetManager.postLoadNative(texture, (err) => console.log(err));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset` | The asset  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `INativeAssetOptions \| null` | Some optional parameters  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackNoData \| null` | Callback invoked when finish loading  |



##### Returns `void`


▸   **postLoadNative**<`void`\>(`asset: Asset, onComplete: CompleteCallbackNoData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackNoData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:522](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L522)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:523](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L523)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:524](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L524)&nbsp;
___
### preloadAny
<div style="margin-left: 10px;">

▸   **preloadAny**<`void`\>(`requests: Request, options: IOptions | null, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




**`zh`** 
通用预加载资源接口，可传入进度回调以及完成回调，非常建议你使用更简单的 API ，例如 `preloadRes`, `preloadResDir` 等。`preloadAny` 和 `loadAny`
几乎一样，区别在于 `preloadAny` 只会下载资源，不会去解析资源，你需要调用 `cc.assetManager.loadAny(preloadTask)` 来完成资源加载。





**`example`**

```ts

cc.assetManager.preloadAny('0cbZa5Y71CTZAccaIFluuZ', (err) => cc.assetManager.loadAny('0cbZa5Y71CTZAccaIFluuZ'));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | The request you want to preload  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IOptions \| null` | Optional parameters  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | Callback invoked when progression change  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback invoked when finish preloading  |



##### Returns `void`


▸   **preloadAny**<`void`\>(`requests: Request, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **preloadAny**<`void`\>(`requests: Request, options: IOptions | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IOptions \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **preloadAny**<`void`\>(`requests: Request, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `requests` | `Request` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L485)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:490](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L490)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L491)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:492](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L492)&nbsp;   [cocos/core/asset-manager/asset-manager.ts:493](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L493)&nbsp;
___
### releaseAll
<div style="margin-left: 10px;">

▸   **releaseAll**<`void`\> : `void`




**`zh`** 
释放所有资源。详细信息请参考 {{#crossLink "AssetManager/releaseAsset:method"}}{{/crossLink}}






<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:692](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L692)&nbsp;
___
### releaseAsset
<div style="margin-left: 10px;">

▸   **releaseAsset**<`void`\>(`asset: Asset`) : `void`




**`zh`** 
释放资源以及其依赖资源, 这个方法不仅会从 assetManager 中删除资源的缓存引用，还会清理它的资源内容。
比如说，当你释放一个 texture 资源，这个 texture 和它的 gl 贴图数据都会被释放。
注意，这个函数可能会导致资源贴图或资源所依赖的贴图不可用，如果场景中存在节点仍然依赖同样的贴图，它们可能会变黑并报 GL 错误。





**`example`**

```ts

// release a texture which is no longer need
cc.assetManager.releaseAsset(texture);


```




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 
移除此包, 注意：这个包内的资源不会自动释放, 如果需要的话你可以在摧毁之前手动调用 {{#crossLink "Bundle/releaseAll:method"}}{{/crossLink}} 进行释放





**`typescript`** 
removeBundle(bundle: cc.AssetManager.Bundle): void





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `bundle` | `Bundle` | The bundle to be removed  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/asset-manager.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/asset-manager.ts#L385)&nbsp;
___
<!---->




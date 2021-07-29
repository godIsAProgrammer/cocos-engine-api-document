
## Class: PackManager







**`zh`** 
处理打包资源，包括拆包，加载，缓存等等，这是一个单例, 所有成员能通过 `cc.assetManager.packManager` 访问




<div class="table-of-content">
<h2>Table of contents</h2>


### Methods

- [ init](#init)
- [ load](#load)
- [ register](#register)
- [ unpack](#unpack)
- [ unpackJson](#unpackJson)

</div>

## Methods

### init
<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pack-manager.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pack-manager.ts#L124)&nbsp;
___
### load
<div style="margin-left: 10px;">

▸   **load**<`void`\>(`item: RequestItem, options: IDownloadParseOptions | null, onComplete: CompleteCallback`) : `void`




**`zh`** 
下载请求对象，如果请求对象不在任何包内，则正常下载，否则下载对应的 package 并进行拆解，并取回包内对应的内容





**`example`**

```ts

var requestItem = cc.AssetManager.RequestItem.create();
requestItem.uuid = 'fcmR3XADNLgJ1ByKhqcC5Z';
requestItem.info = config.getAssetInfo('fcmR3XADNLgJ1ByKhqcC5Z');
packManager.load(requestItem, null, (err, data) => console.log(err));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `item` | `RequestItem` | Some item you want to download  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IDownloadParseOptions \| null` | Some optional parameters  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallback` | Callback when finished  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pack-manager.ts:211](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pack-manager.ts#L211)&nbsp;
___
### register
<div style="margin-left: 10px;">

▸   **register**<`void`\>(`type: string, handler: Unpacker`) : `void`




**`zh`** 
当你想修改默认行为或者拓展 packManager 来拆分其他格式的包时可以注册自定义的 handler





**`example`**

```ts

packManager.register('.bin', (packUuid, file, options, onComplete) => onComplete(null, null));
packManager.register({
 '.bin': (packUuid, file, options, onComplete) => onComplete(null, null),
 '.ab': (packUuid, file, options, onComplete) => onComplete(null, null),
});

```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Extension likes '.bin' or map likes {'.bin': binHandler, '.ab': abHandler}  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `handler` | `Unpacker` | handler  |



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

##### Defined in &nbsp;   [cocos/core/asset-manager/pack-manager.ts:149](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pack-manager.ts#L149)&nbsp;   [cocos/core/asset-manager/pack-manager.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pack-manager.ts#L150)&nbsp;   [cocos/core/asset-manager/pack-manager.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pack-manager.ts#L151)&nbsp;
___
### unpack
<div style="margin-left: 10px;">

▸   **unpack**<`void`\>(`pack: undefined, data: any, type: string, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`




**`zh`** 
用对应的 handler 来进行解包





**`method`** unpack




**`example`**

```ts

downloader.downloadFile('pack.json', {xhrResponseType: 'json'}, null, (err, file) => {
     packManager.unpack(['2fawq123d', '1zsweq23f'], file, '.json', null, (err, data) => console.log(err));
});


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pack` |  | The uuid of packed assets  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `data` | `any` | The packed data  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | The type indicates that which handler should be used to download, such as '.jpg'  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IDownloadParseOptions` | Some optional parameter  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallback` | callback when finishing unpacking  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pack-manager.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pack-manager.ts#L181)&nbsp;
___
### unpackJson
<div style="margin-left: 10px;">

▸   **unpackJson**<`void`\>(`pack: undefined, json: any, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`




**`zh`** 
拆解 json 包，恢复为打包之前的内容





**`example`**

```ts

downloader.downloadFile('pack.json', { xhrResponseType: 'json'}, null, (err, file) => {
     packManager.unpackJson(['a', 'b'], file, null, (err, data) => console.log(err));
});


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `pack` |  | The pack  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `json` | `any` | The content of pack  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IDownloadParseOptions` | Some optional parameters  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallback` | Callback when finish unpacking  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/pack-manager.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/pack-manager.ts#L84)&nbsp;
___
<!---->
<!---->





## Class: PackManager







**`en`** 
Handle the packed asset, include unpacking, loading, cache and so on. It is a singleton. All member can be accessed with `cc.assetManager.packManager`



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




**`en`** 
Download request item, If item is not in any package, download as usual. Otherwise, download the corresponding package and unpack it.
And then retrieve the corresponding content form it.





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




**`en`** 
Register custom handler if you want to change default behavior or extend packManager to unpack other format pack





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




**`en`** 
Use corresponding handler to unpack package





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




**`en`** 
Unpack the json, revert to what it was before packing





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




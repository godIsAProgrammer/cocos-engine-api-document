
## Class: Parser






**`zh`** 
解析已下载的文件，parser 是一个单例, 所有成员能通过 `cc.assetManaager.parser` 访问




<div class="table-of-content">
<h2>Table of contents</h2>


### Methods

- [ init](#init)
- [ parse](#parse)
- [ parseASTCTex](#parseASTCTex)
- [ parseAudio](#parseAudio)
- [ parseImage](#parseImage)
- [ parseImport](#parseImport)
- [ parsePKMTex](#parsePKMTex)
- [ parsePVRTex](#parsePVRTex)
- [ parsePlist](#parsePlist)
- [ register](#register)

</div>

## Methods

### init

<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:332](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L332)&nbsp;
___
### parse

<div style="margin-left: 10px;">

▸   **parse**<`void`\>(`id: string, file: any, type: string, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`



**`zh`** 
使用对应的handler来解析文件




**`example`**

```ts

downloader.download('test.jpg', 'test.jpg', '.jpg', {}, (err, file) => {
     parser.parse('test.jpg', file, '.jpg', null, (err, img) => console.log(err));
});


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `id` | `string` | The id of file  |
| `file` | `any` | File  |
| `type` | `string` | The corresponding type of file, likes '.jpg'.  |
| `options` | `IDownloadParseOptions` | Some optional paramters will be transferred to the corresponding handler.  |
| `onComplete` | `CompleteCallback` | callback when finishing downloading  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L385)&nbsp;
___
### parseASTCTex

<div style="margin-left: 10px;">

▸   **parseASTCTex**<`void`\>(`file: ArrayBuffer | ArrayBufferView, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `file` | `ArrayBuffer \| ArrayBufferView` | - |
| `options` | `IDownloadParseOptions` | - |
| `onComplete` | `CompleteCallback` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L267)&nbsp;
___
### parseAudio

<div style="margin-left: 10px;">

▸   **parseAudio**<`void`\>(`file: ArrayBuffer | HTMLAudioElement, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `file` | `ArrayBuffer \| HTMLAudioElement` | - |
| `options` | `IDownloadParseOptions` | - |
| `onComplete` | `CompleteCallback` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L180)&nbsp;
___
### parseImage

<div style="margin-left: 10px;">

▸   **parseImage**<`void`\>(`file: HTMLImageElement | Blob, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `file` | `HTMLImageElement \| Blob` | - |
| `options` | `IDownloadParseOptions` | - |
| `onComplete` | `CompleteCallback` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L168)&nbsp;
___
### parseImport

<div style="margin-left: 10px;">

▸   **parseImport**<`void`\>(`file: Record, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `file` | `Record` | - |
| `options` | `IDownloadParseOptions` | - |
| `onComplete` | `CompleteCallback` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L317)&nbsp;
___
### parsePKMTex

<div style="margin-left: 10px;">

▸   **parsePKMTex**<`void`\>(`file: ArrayBuffer | ArrayBufferView, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `file` | `ArrayBuffer \| ArrayBufferView` | - |
| `options` | `IDownloadParseOptions` | - |
| `onComplete` | `CompleteCallback` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:239](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L239)&nbsp;
___
### parsePVRTex

<div style="margin-left: 10px;">

▸   **parsePVRTex**<`void`\>(`file: ArrayBuffer | ArrayBufferView, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `file` | `ArrayBuffer \| ArrayBufferView` | - |
| `options` | `IDownloadParseOptions` | - |
| `onComplete` | `CompleteCallback` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L192)&nbsp;
___
### parsePlist

<div style="margin-left: 10px;">

▸   **parsePlist**<`void`\>(`file: string, options: IDownloadParseOptions, onComplete: CompleteCallback`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `file` | `string` | - |
| `options` | `IDownloadParseOptions` | - |
| `onComplete` | `CompleteCallback` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L310)&nbsp;
___
### register

<div style="margin-left: 10px;">

▸   **register**<`void`\>(`type: string, handler: ParseHandler`) : `void`



**`zh`** 
当你想修改默认行为或者拓展 parser 来解析其他格式文件时可以注册自定义的handler




**`example`**

```ts

parser.register('.tga', (file, options, onComplete) => onComplete(null, null));
parser.register({'.tga': (file, options, onComplete) => onComplete(null, null), '.ext': (file, options, onComplete) => onComplete(null, null)});


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Extension likes '.jpg' or map likes {'.jpg': jpgHandler, '.png': pngHandler}  |
| `handler` | `ParseHandler` | The corresponding handler  |


##### Returns `void`

▸   **register**<`void`\>(`map: Record`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `map` | `Record` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/parser.ts:354](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L354)&nbsp;   [cocos/core/asset-manager/parser.ts:355](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L355)&nbsp;   [cocos/core/asset-manager/parser.ts:356](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/parser.ts#L356)&nbsp;
___
<!---->
<!---->




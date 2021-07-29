
## Class: CCLoader






**`zh`** 资源加载管理器，引擎会自动创建一个单例对象 {{loader}}。





**`deprecated`** since v3.0 loader is deprecated, please backup your project and upgrade to assetManager



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ downloader](#downloader)
- [ loader](#loader)
- [ md5Pipe](#md5Pipe)
- [ onProgress](#onProgress)

### Methods

- [ addDownloadHandlers](#addDownloadHandlers)
- [ addLoadHandlers](#addLoadHandlers)
- [ getDependsRecursively](#getDependsRecursively)
- [ getItem](#getItem)
- [ getRes](#getRes)
- [ getResCount](#getResCount)
- [ getXMLHttpRequest](#getXMLHttpRequest)
- [ isAutoRelease](#isAutoRelease)
- [ load](#load)
- [ loadRes](#loadRes)
- [ loadResArray](#loadResArray)
- [ loadResDir](#loadResDir)
- [ release](#release)
- [ releaseAll](#releaseAll)
- [ releaseAsset](#releaseAsset)
- [ releaseRes](#releaseRes)
- [ removeItem](#removeItem)
- [ setAutoRelease](#setAutoRelease)
- [ setAutoReleaseRecursively](#setAutoReleaseRecursively)
</div>

## Properties


### downloader
<div style="margin-left: 10px;">



**`zh`** 
loader 中的资源下载程序，默认情况下是第二个加载的。<br>
它用于下载带有多个处理程序的文件：纯文本，图像，脚本，音频，字体，uuid。<br>
您可以使用 addDownloadHandlers 来添加自己的下载函数




**`deprecated`** since v3.0 loader.downloader is deprecated, please use assetManager.downloader instead





•  **downloader**:
 ``Downloader`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:546](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L546)&nbsp;


___


### loader
<div style="margin-left: 10px;">



**`zh`** 
loader 中的资源下载程序，默认情况下是第三个加载的。<br>
它用于解析下载的内容及多个处理程序的文件：纯文本，图像，脚本，音频，字体，uuid。<br>
您可以使用 addLoadHandlers 来添加自己的下载函数




**`deprecated`** since v3.0 loader.loader is deprecated, please use assetManager.parser instead





•  **loader**:
 ``Parser`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:562](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L562)&nbsp;


___


### md5Pipe
<div style="margin-left: 10px;">



**`zh`** loader 中的 md5 加载管道，如果项目没有使用 md5 构建，则此项可能不存在。<br>
用于修改带有 md5 后缀的真实可下载的 URL 。




**`deprecated`** since v3.0 loader.md5Pipe is deprecated, assetLoader and md5Pipe were merged into assetManager.transformPipeline





•  **md5Pipe**:
 `` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:530](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L530)&nbsp;


___


### onProgress
<div style="margin-left: 10px;">



**`zh`** Loader 默认的进度回调函数，如果在调用 {{load}} 函数时没有指定进度回调函数的话，会调用默认进度回调函数。




**`deprecated`** since v3.0, loader.onProgress is deprecated, please transfer onProgress to API as a parameter





•  **onProgress**:
 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L104)&nbsp;


___

<!---->
## Methods

### addDownloadHandlers

<div style="margin-left: 10px;">

▸   **addDownloadHandlers**<`void`\>(`extMap: Record`) : `void`



**`zh`** 为下载程序添加自定义支持的类型处理程序或修改现有的类型处理程序。



**`example`**

```ts

typescript
 loader.addDownloadHandlers({
     // This will match all url with `.scene` extension or all url with `scene` type
     'scene' : function (url, callback) {}
 });

```



**`deprecated`** since v3.0 loader.addDownloadHandlers is deprecated, please use assetManager.downloader.register instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `extMap` | `Record` | Handlers for corresponding type in a map  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:579](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L579)&nbsp;
___
### addLoadHandlers

<div style="margin-left: 10px;">

▸   **addLoadHandlers**<`void`\>(`extMap: Record`) : `void`



**`zh`** 为加载程序添加自定义支持的类型处理程序或修改现有的类型处理程序。



**`example`**

```ts

typescript
 loader.addLoadHandlers({
     // This will match all url with `.scene` extension or all url with `scene` type
     'scene' : function (url, callback) {}
 });

```



**`deprecated`** since v3.0 loader.addLoadHandlers is deprecated, please use assetManager.parser.register instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `extMap` | `Record` | Handlers for corresponding type in a map  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:603](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L603)&nbsp;
___
### getDependsRecursively

<div style="margin-left: 10px;">

▸   **getDependsRecursively**(`owner: Asset | string`)



**`zh`** 
获取一个指定资源的所有依赖资源，包含它自身，并保存在数组中返回。<br>
owner 参数接收以下几种类型：1. 资源 asset 对象；2. 资源目录下的 url；3. 资源的 uuid。<br>
返回的数组将仅保存依赖资源的 uuid，获取这些 uuid 后，你可以从 loader 释放这些资源；通过 [[getRes]] 获取某个资源或者进行其他你需要的操作。<br>
想要释放一个资源及其依赖资源，可以参考 [[release]]。<br>
下面是一些示例代码：



**`example`**

```ts

typescript
// Release all dependencies of a loaded prefab
let deps = loader.getDependsRecursively(prefab);
loader.release(deps);
// Retrieve all dependent textures
let deps = loader.getDependsRecursively('prefabs/sample');
let textures = [];
for (let i = 0; i < deps.length; ++i) {
    let item = loader.getRes(deps[i]);
    if (item instanceof cc.Texture2D) {
        textures.push(item);
    }
}


```



**`deprecated`** since v3.0 loader.getDependsRecursively is deprecated, please use use assetManager.dependUtil.getDepsRecursively instead



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `owner` | `Asset \| string` | The owner asset or the resource url or the asset's uuid  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:516](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L516)&nbsp;
___
### getItem

<div style="margin-left: 10px;">

▸   **getItem**(`id: any`)



**`zh`** 根据 id 获取一个 item



**`deprecated`** since v3.0 loader.getItem is deprecated, please use assetManager.assets.get instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `id` | `any` | The id of the item  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L233)&nbsp;
___
### getRes

<div style="margin-left: 10px;">

▸   **getRes**(`url: string, type: Constructor`)



**`zh`** 
根据 ID 获取资源数据。<br>
当使用 [[load]] 或 [[loadRes]] 来加载资源时，<br>
URL 将是资源的唯一标识。<br>
在完成加载之后，你可以通过将 URL 传递给此 API 来获取它们。




**`deprecated`** since v3.0 loader.getRes is deprecated, please use resources.get instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |
| `type` | `Constructor` | Only asset of type will be returned if this argument is supplied.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:469](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L469)&nbsp;
___
### getResCount

<div style="margin-left: 10px;">

▸   **getResCount**<`number`\> : `number`



**`zh`** 获取加载的总资源数量



**`deprecated`** since v3.0 loader.getResCount is deprecated, please use assetManager.assets.count instead





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:478](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L478)&nbsp;
___
### getXMLHttpRequest

<div style="margin-left: 10px;">

▸   **getXMLHttpRequest**<`XMLHttpRequest`\> : `XMLHttpRequest`



**`zh`** 获取一个新的 XMLHttpRequest 的实例。




**`deprecated`** since v3.0 loader.getXMLHttpRequest is deprecated, please use XMLHttpRequest directly





##### Returns `XMLHttpRequest`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L221)&nbsp;
___
### isAutoRelease

<div style="margin-left: 10px;">

▸   **isAutoRelease**<`boolean`\>(`asset: Asset | string`) : `boolean`



**`zh`** 返回指定的资源是否有被设置为自动释放，不论场景的“Auto Release Assets”如何设置。<br>
<br>
参考：{{setAutoRelease}}，{{setAutoReleaseRecursively}}




**`method`** isAutoRelease



**`deprecated`** cc.loader.isAutoRelease is deprecated




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset \| string` | asset object or the raw asset's url  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:807](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L807)&nbsp;
___
### load

<div style="margin-left: 10px;">

▸   **load**<`void`\>(`res: string | array<string> | Record, progressCallback:  | null, completeCallback:  | null`) : `void`



**`zh`** 
使用进度回调和完整回调加载资源。<br>




**`example`**

```ts

TypeScript
loader.load('a.png', function (err, tex) {
    cc.log('Result should be a texture: ' + (tex instanceof cc.Texture2D));
});

loader.load('http://example.com/a.png', function (err, tex) {
    cc.log('Should load a texture from external url: ' + (tex instanceof cc.Texture2D));
});

loader.load({url: 'http://example.com/getImageREST?file=a.png', type: 'png'}, function (err, tex) {
    cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
});


```



**`deprecated`** since v3.0, loader.load is deprecated, please use assetManager.loadRemote instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `res` | `string \| array<string> \| Record` | Url list in an array  |
| `progressCallback` | ` \| null` | Callback invoked when progression change  |
| `completeCallback` | ` \| null` | Callback invoked when all resources loaded  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L146)&nbsp;
___
### loadRes

<div style="margin-left: 10px;">

▸   **loadRes**<`any`\>(`url: string, type: Constructor, progressCallback: LoadProgressCallback, completeCallback: LoadCompleteCallback`) : `any`



**`zh`** 
从项目的 “assets” 文件夹下的 “resources” 文件夹中加载资源<br>
<br>
注意：Creator 中的所有资源 URL 都使用正斜杠，使用反斜杠的 URL 将不起作用。




**`deprecated`** since v3.0 loader.loadRes is deprecated, please use resources.load  instead



**`example`**

```ts

typescript
// load the prefab (project/assets/resources/misc/character/cocos) from resources folder
loader.loadRes('misc/character/cocos', function (err, prefab) {
    if (err) {
        cc.error(err.message || err);
        return;
    }
    cc.log('Result should be a prefab: ' + (prefab instanceof cc.Prefab));
});

// load the sprite frame of (project/assets/resources/imgs/cocos.png) from resources folder
loader.loadRes('imgs/cocos', cc.SpriteFrame, function (err, spriteFrame) {
    if (err) {
        cc.error(err.message || err);
        return;
    }
    cc.log('Result should be a sprite frame: ' + (spriteFrame instanceof cc.SpriteFrame));
});


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | Url of the target resource.                      The url is relative to the "resources" folder, extensions must be omitted.  |
| `type` | `Constructor` | Only asset of type will be loaded if this argument is supplied.  |
| `progressCallback` | `LoadProgressCallback` | Callback invoked when progression change.  |
| `completeCallback` | `LoadCompleteCallback` | Callback invoked when the resource loaded.  |


##### Returns `any`

▸   **loadRes**<`any`\>(`url: string, type: Constructor, completeCallback: LoadCompleteCallback`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |
| `type` | `Constructor` | - |
| `completeCallback` | `LoadCompleteCallback` | - |


##### Returns `any`

▸   **loadRes**<`any`\>(`url: string, progressCallback: LoadProgressCallback, completeCallback: LoadCompleteCallback`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |
| `progressCallback` | `LoadProgressCallback` | - |
| `completeCallback` | `LoadCompleteCallback` | - |


##### Returns `any`

▸   **loadRes**<`any`\>(`url: string, completeCallback: LoadCompleteCallback`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |
| `completeCallback` | `LoadCompleteCallback` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L279)&nbsp;   [cocos/core/asset-manager/deprecated.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L285)&nbsp;   [cocos/core/asset-manager/deprecated.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L290)&nbsp;   [cocos/core/asset-manager/deprecated.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L295)&nbsp;   [cocos/core/asset-manager/deprecated.ts:299](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L299)&nbsp;
___
### loadResArray

<div style="margin-left: 10px;">

▸   **loadResArray**<`void`\>(`urls: undefined, type: Constructor, progressCallback: LoadProgressCallback, completeCallback: LoadCompleteCallback`) : `void`



**`zh`** 此方法除了接受 URL 数组参数外，与 [[loadRes]] 方法相同。




**`deprecated`** since v3.0 loader.loadResArray is deprecated, please use resources.load instead



**`example`**

```ts

typescript
// load the SpriteFrames from resources folder
let spriteFrames;
let urls = ['misc/characters/character_01', 'misc/weapons/weapons_01'];
loader.loadResArray(urls, cc.SpriteFrame, function (err, assets) {
    if (err) {
        cc.error(err);
        return;
    }
    spriteFrames = assets;
    // ...
});


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `urls` |  | Array of URLs of the target resource.                         The url is relative to the "resources" folder, extensions must be omitted.  |
| `type` | `Constructor` | Only asset of type will be loaded if this argument is supplied.  |
| `progressCallback` | `LoadProgressCallback` | Callback invoked when progression change.  |
| `completeCallback` | `LoadCompleteCallback` | A callback which is called when all assets have been loaded, or an error occurs.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:347](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L347)&nbsp;
___
### loadResDir

<div style="margin-left: 10px;">

▸   **loadResDir**<`any`\>(`url: string, type: Constructor, progressCallback: LoadProgressCallback, completeCallback: LoadDirCompleteCallback`) : `any`



**`zh`** 
将所有资产加载到项目 “assets / resources” 文件夹中
<br>
注意：Creator 中的所有资源 URL 都使用正斜杠，使用反斜杠的 URL 将不起作用。




**`deprecated`** since v3.0 loader.loadResDir is deprecated, please use resources.loadDir instead



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | Url of the target folder.                      The url is relative to the "resources" folder, extensions must be omitted.  |
| `type` | `Constructor` | Only asset of type will be loaded if this argument is supplied.  |
| `progressCallback` | `LoadProgressCallback` | Callback invoked when progression change.  |
| `completeCallback` | `LoadDirCompleteCallback` | A callback which is called when all assets have been loaded, or an error occurs.  |


##### Returns `any`

▸   **loadResDir**<`any`\>(`url: string, type: Constructor, completeCallback: LoadDirCompleteCallback`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |
| `type` | `Constructor` | - |
| `completeCallback` | `LoadDirCompleteCallback` | - |


##### Returns `any`

▸   **loadResDir**<`any`\>(`url: string, progressCallback: LoadProgressCallback, completeCallback: LoadDirCompleteCallback`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |
| `progressCallback` | `LoadProgressCallback` | - |
| `completeCallback` | `LoadDirCompleteCallback` | - |


##### Returns `any`

▸   **loadResDir**<`any`\>(`url: string, completeCallback: LoadDirCompleteCallback`) : `any`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |
| `completeCallback` | `LoadDirCompleteCallback` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:414](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L414)&nbsp;   [cocos/core/asset-manager/deprecated.ts:420](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L420)&nbsp;   [cocos/core/asset-manager/deprecated.ts:425](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L425)&nbsp;   [cocos/core/asset-manager/deprecated.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L430)&nbsp;   [cocos/core/asset-manager/deprecated.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L434)&nbsp;
___
### release

<div style="margin-left: 10px;">

▸   **release**<`void`\>(`asset: Asset | string | Array`) : `void`



**`zh`** 
通过 id（通常是资源 url）来释放一个资源或者一个资源数组。<br>
这个方法不仅会从 loader 中删除资源的缓存引用，还会清理它的资源内容。<br>
比如说，当你释放一个 texture 资源，这个 texture 和它的 gl 贴图数据都会被释放。<br>
在复杂项目中，我们建议你结合 [[getDependsRecursively]] 来使用，便于在设备内存告急的情况下更快地释放不再需要的资源的内存。<br>
注意，这个函数可能会导致资源贴图或资源所依赖的贴图不可用，如果场景中存在节点仍然依赖同样的贴图，它们可能会变黑并报 GL 错误。<br>




**`example`**

```ts

typescript
// Release a texture which is no longer need
loader.release(texture);
// Release all dependencies of a loaded prefab
let deps = loader.getDependsRecursively('prefabs/sample');
loader.release(deps);
// If there is no instance of this prefab in the scene, the prefab and its dependencies like textures, sprite frames, etc, will be freed up.
// If you have some other nodes share a texture in this prefab, you can skip it in two ways:
// 1. Forbid auto release a texture before release
loader.setAutoRelease(texture2d, false);
// 2. Remove it from the dependencies array
let deps = loader.getDependsRecursively('prefabs/sample');
let index = deps.indexOf(texture2d._uuid);
if (index !== -1)
    deps.splice(index, 1);
loader.release(deps);

```



**`deprecated`** since v3.0 loader.release is deprecated, please use assetManager.releaseAsset instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset \| string \| Array` | Asset or assets to be released  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:650](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L650)&nbsp;
___
### releaseAll

<div style="margin-left: 10px;">

▸   **releaseAll**<`void`\> : `void`



**`zh`** 释放所有资源。详细信息请参考 {{release}}




**`deprecated`** since v3.0 loader.releaseAll is deprecated, please use assetManager.releaseAll instead





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:693](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L693)&nbsp;
___
### releaseAsset

<div style="margin-left: 10px;">

▸   **releaseAsset**<`void`\>(`asset: Asset`) : `void`



**`zh`** 通过资源对象自身来释放资源。详细信息请参考 {{release}}



**`deprecated`** since v3.0 loader.releaseAsset is deprecated, please use assetManager.releaseAsset instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset` | The asset to be released  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:670](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L670)&nbsp;
___
### releaseRes

<div style="margin-left: 10px;">

▸   **releaseRes**<`void`\>(`res: string, type: Constructor`) : `void`



**`zh`** 释放通过 {{loadRes}} 加载的资源。详细信息请参考 {{release}}



**`deprecated`** since v3.0 loader.releaseRes is deprecated, please use cc.assetManager.releaseRes instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `res` | `string` | The asset url, it should be related path without extension to the `resources` folder.  |
| `type` | `Constructor` | If type is provided, the asset for correspond type will be returned  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:682](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L682)&nbsp;
___
### removeItem

<div style="margin-left: 10px;">

▸   **removeItem**<`boolean`\>(`id: any`) : `boolean`



**`zh`** 移除指定的已完成 item。
这将仅仅从 pipeline 或者 loader 中删除其缓存，并不会释放它所依赖的资源。
cc.loader 中提供了另一种删除资源及其依赖的清理方法，请参考 {{Loader.release}}



**`deprecated`** since 3.0, loader.removeItem is deprecated, please use assetManager.assets.remove instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `id` | `any` | The id of the item  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:711](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L711)&nbsp;
___
### setAutoRelease

<div style="margin-left: 10px;">

▸   **setAutoRelease**<`void`\>(`asset: Asset | string, autoRelease: boolean`) : `void`



**`zh`** 
设置当场景切换时是否自动释放资源。<br>
默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。<br>
而使用 `loader.loadRes` 或 `loader.loadResDir` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
使用这个 API 可以在单个资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
<br>
参考：{{setAutoReleaseRecursively}}，{{isAutoRelease}}




**`example`**

```ts

typescript
// auto release the texture event if "Auto Release Assets" disabled in current scene
loader.setAutoRelease(texture2d, true);
// don't release the texture even if "Auto Release Assets" enabled in current scene
loader.setAutoRelease(texture2d, false);
// first parameter can be url
loader.setAutoRelease(audioUrl, false);

```



**`deprecated`** since v3.0 loader.setAutoRelease is deprecated, if you want to prevent some asset from auto releasing, please use Asset.addRef instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset \| string` | The asset or its url or its uuid  |
| `autoRelease` | `boolean` | Whether to release automatically during scene switch  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:747](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L747)&nbsp;
___
### setAutoReleaseRecursively

<div style="margin-left: 10px;">

▸   **setAutoReleaseRecursively**<`void`\>(`asset: Asset | string, autoRelease: boolean`) : `void`



**`zh`** 
设置当场景切换时是否自动释放资源及资源引用的其它资源。<br>
默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。<br>
而使用 `loader.loadRes` 或 `loader.loadResDir` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
使用这个 API 可以在指定资源及资源递归引用到的所有资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
<br>
参考：{{setAutoRelease}}，{{isAutoRelease}}




**`example`**

```ts

typescript
// auto release the SpriteFrame and its Texture event if "Auto Release Assets" disabled in current scene
loader.setAutoReleaseRecursively(spriteFrame, true);
// don't release the SpriteFrame and its Texture even if "Auto Release Assets" enabled in current scene
loader.setAutoReleaseRecursively(spriteFrame, false);
// don't release the Prefab and all the referenced assets
loader.setAutoReleaseRecursively(prefab, false);

```



**`deprecated`** loader.setAutoReleaseRecursively is deprecated, if you want to prevent some asset from auto releasing, please use Asset.addRef instead




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `asset` | `Asset \| string` | The asset or its url or its uuid  |
| `autoRelease` | `boolean` | Whether to release automatically during scene switch  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:784](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L784)&nbsp;
___
<!---->




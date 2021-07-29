
## Class: CCLoader






**`en`** Loader for resource loading process. The engine automatically initialize its singleton object {{loader}}.




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



**`en`** 
The downloader in loader's pipeline, it's by default the second pipe.<br>
It's used to download files with several handlers: pure text, image, script, audio, font, uuid.<br>
You can add your own download function with addDownloadHandlers



**`deprecated`** since v3.0 loader.downloader is deprecated, please use assetManager.downloader instead





•  **downloader**:
 ``Downloader`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:546](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L546)&nbsp;


___


### loader
<div style="margin-left: 10px;">



**`en`** 
The loader in loader's pipeline, it's by default the third pipe.<br>
It's used to parse downloaded content with several handlers: JSON, image, plist, fnt, uuid.<br>
You can add your own download function with addLoadHandlers



**`deprecated`** since v3.0 loader.loader is deprecated, please use assetManager.parser instead





•  **loader**:
 ``Parser`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:562](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L562)&nbsp;


___


### md5Pipe
<div style="margin-left: 10px;">



**`en`** The md5 pipe in loader's pipeline, it could be absent if the project isn't build with md5 option.<br>
It's used to modify the url to the real downloadable url with md5 suffix.



**`deprecated`** since v3.0 loader.md5Pipe is deprecated, assetLoader and md5Pipe were merged into assetManager.transformPipeline





•  **md5Pipe**:
 `` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:530](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L530)&nbsp;


___


### onProgress
<div style="margin-left: 10px;">



**`en`** The default progression callback during the loading process,
if no progression callback is passed to {{load}} function, then this default callback will be used.



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



**`en`** Add custom supported types handler or modify existing type handler for download process.



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



**`en`** Add custom supported types handler or modify existing type handler for load process.



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



**`en`** 
Get all resource dependencies of the requested asset in an array, including itself.<br>
The owner parameter accept the following types: 1. The asset itself; 2. The resource url; 3. The asset's uuid.<br>
The returned array stores the dependencies with their uuids, after retrieve dependencies,<br>
you can release them, access dependent assets by passing the uuid to [[getRes]], or other stuffs you want.<br>
For release all dependencies of an asset, please refer to [[release]]
Here is some examples:



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



**`en`** Returns an item in pipeline.



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



**`en`** 
Get resource data by id. <br>
When you load resources with [[load]] or [[loadRes]],
the url will be the unique identity of the resource.
After loaded, you can acquire them by passing the url to this API.



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



**`en`** Get total resources count in loader.



**`deprecated`** since v3.0 loader.getResCount is deprecated, please use assetManager.assets.count instead





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:478](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L478)&nbsp;
___
### getXMLHttpRequest

<div style="margin-left: 10px;">

▸   **getXMLHttpRequest**<`XMLHttpRequest`\> : `XMLHttpRequest`



**`en`** Gets a new XMLHttpRequest instance.



**`deprecated`** since v3.0 loader.getXMLHttpRequest is deprecated, please use XMLHttpRequest directly





##### Returns `XMLHttpRequest`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L221)&nbsp;
___
### isAutoRelease

<div style="margin-left: 10px;">

▸   **isAutoRelease**<`boolean`\>(`asset: Asset | string`) : `boolean`



**`en`** Returns whether the asset is configured as auto released, despite how "Auto Release Assets" property is set on scene asset.<br>
<br>
See: {{setAutoRelease}}, {{setAutoReleaseRecursively}}



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



**`en`** 
Load resources with a progression callback and a complete callback.<br>




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



**`en`** 
Load assets from the "resources" folder inside the "assets" folder of your project.<br>
<br>
Note: All asset URLs in Creator use forward slashes, URLs using backslashes will not work.



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



**`en`** This method is like [[loadRes]] except that it accepts array of url.



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



**`en`** 
Load all assets in a folder inside the "assets/resources" folder of your project.<br>
<br>
Note: All asset URLs in Creator use forward slashes, URLs using backslashes will not work.



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



**`en`** 
Release the content of an asset or an array of assets by uuid.<br>
This method will not only remove the cache of the asset in loader, but also clean up its content.<br>
For example, if you release a texture, the texture asset and its gl texture data will be freed up.<br>
In complexe project, you can use this function with [[getDependsRecursively]] to free up memory in critical circumstances.<br>
Notice, this method may cause the texture to be unusable, if there are still other nodes use the same texture, they may turn to black
and report gl errors.<br>



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



**`en`** Resource all assets. Refer to {{release}} for detailed informations.



**`deprecated`** since v3.0 loader.releaseAll is deprecated, please use assetManager.releaseAll instead





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/deprecated.ts:693](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/deprecated.ts#L693)&nbsp;
___
### releaseAsset

<div style="margin-left: 10px;">

▸   **releaseAsset**<`void`\>(`asset: Asset`) : `void`



**`en`** Release the asset by its object. Refer to {{release}} for detailed informations.



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



**`en`** Release the asset loaded by {{loadRes}}. Refer to {{release}} for detailed informations.



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



**`en`** Removes an completed item in pipeline.
It will only remove the cache in the pipeline or loader, its dependencies won't be released.
cc.loader provided another method to completely cleanup the resource and its dependencies,
please refer to {{Loader.release}}



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



**`en`** 
Indicates whether to release the asset when loading a new scene.<br>
By default, when loading a new scene, all assets in the previous scene will be released or preserved<br>
according to whether the previous scene checked the "Auto Release Assets" option.<br>
On the other hand, assets dynamically loaded by using `loader.loadRes` or `loader.loadResDir`<br>
will not be affected by that option, remain not released by default.<br>
Use this API to change the default behavior on a single asset, to force preserve or release specified asset when scene switching.<br>
<br>
See: {{setAutoReleaseRecursively}}, {{isAutoRelease}}



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



**`en`** 
Indicates whether to release the asset and its referenced other assets when loading a new scene.<br>
By default, when loading a new scene, all assets in the previous scene will be released or preserved<br>
according to whether the previous scene checked the "Auto Release Assets" option.<br>
On the other hand, assets dynamically loaded by using `loader.loadRes` or `loader.loadResDir`<br>
will not be affected by that option, remain not released by default.<br>
Use this API to change the default behavior on the specified asset and its recursively referenced assets,
to force preserve or release specified asset when scene switching.<br>
<br>
See: {{setAutoRelease}}, {{isAutoRelease}}



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




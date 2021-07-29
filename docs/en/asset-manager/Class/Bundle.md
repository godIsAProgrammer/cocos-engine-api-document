
## Class: Bundle







**`en`** 
A bundle contains an amount of assets(includes scene), you can load, preload, release asset which is in this bundle



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ base](#base)
- [ deps](#deps)
- [ name](#name)

### Methods

- [ get](#get)
- [ getAssetInfo](#getAssetInfo)
- [ getDirWithPath](#getDirWithPath)
- [ getInfoWithPath](#getInfoWithPath)
- [ getSceneInfo](#getSceneInfo)
- [ init](#init)
- [ load](#load)
- [ loadDir](#loadDir)
- [ loadScene](#loadScene)
- [ preload](#preload)
- [ preloadDir](#preloadDir)
- [ preloadScene](#preloadScene)
- [ release](#release)
- [ releaseAll](#releaseAll)
</div>

## Properties


### base
<div style="margin-left: 10px;">




**`en`** 
The root path of this bundle, such like 'http://example.com/bundle1'





•  **base**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L90)&nbsp;


___


### deps
<div style="margin-left: 10px;">




**`en`** 
The dependency of this bundle





•  **deps**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L78)&nbsp;


___


### name
<div style="margin-left: 10px;">




**`en`** 
The name of this bundle





•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L66)&nbsp;


___

<!---->
## Methods

### get
<div style="margin-left: 10px;">

▸   **get**(`path: string, type: AssetType | null`)




**`en`** 
Get cached asset within this bundle by path and type. <br>
After you load asset with {{#crossLink "Bundle/load:method"}}{{/crossLink}} or {{#crossLink "Bundle/loadDir:method"}}{{/crossLink}},
you can acquire them by passing the path to this API.

NOTE：The `path` and `type` parameters passed need to be the same as those passed to `Bundle.load`,
otherwise it may return some other resources with the same name!





**`example`**

```ts

bundle1.get('music/hit', cc.AudioClip);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `path` | `string` | The path of asset  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | Only asset of type will be returned if this argument is supplied.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:517](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L517)&nbsp;
___
### getAssetInfo
<div style="margin-left: 10px;">

▸   **getAssetInfo**(`uuid: string`)




**`en`** 
Get asset's info with uuid





**`method`** getAssetInfo




**`example`**

```ts

var info = bundle.getAssetInfo('fcmR3XADNLgJ1ByKhqcC5Z');


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | The asset's uuid  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L148)&nbsp;
___
### getDirWithPath
<div style="margin-left: 10px;">

▸   **getDirWithPath**(`path: string, type: AssetType | null, out: undefined`)




**`en`** 
Get all asset's info within specific folder





**`example`**

```ts

var infos = [];
bundle.getDirWithPath('images', cc.Texture2D, infos);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `path` | `string` | The relative path of folder, such as 'images'  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | The constructor should be used to filter paths  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` |  | The output array  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L129)&nbsp;
___
### getInfoWithPath
<div style="margin-left: 10px;">

▸   **getInfoWithPath**(`path: string, type: AssetType | null`)




**`en`** 
Get asset's info using path, only valid when asset is in bundle folder.





**`example`**

```ts

var info = bundle.getInfoWithPath('image/a', cc.Texture2D);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `path` | `string` | The relative path of asset, such as 'images/a'  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | The constructor of asset, such as  `cc.Texture2D`  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L109)&nbsp;
___
### getSceneInfo
<div style="margin-left: 10px;">

▸   **getSceneInfo**(`name: string`)




**`en`** 
Get scene'info with name





**`method`** getSceneInfo




**`example`**

```ts

var info = bundle.getSceneInfo('first.fire');


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The name of scene  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:167](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L167)&nbsp;
___
### init
<div style="margin-left: 10px;">

▸   **init**<`void`\>(`options: IConfigOption`) : `void`




**`en`** 
Initialize this bundle with options





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IConfigOption` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L181)&nbsp;
___
### load
<div style="margin-left: 10px;">

▸   **load**<`void`\>(`paths: string, type: AssetType | null, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




**`en`** 
Load the asset within this bundle by the path which is relative to bundle's path





**`example`**

```ts

// load the texture (${project}/assets/resources/textures/background.jpg) from resources
cc.resources.load('textures/background', cc.Texture2D, (err, texture) => console.log(err));

// load the audio (${project}/assets/resources/music/hit.mp3) from resources
cc.resources.load('music/hit', cc.AudioClip, (err, audio) => console.log(err));

// load the prefab (${project}/assets/bundle1/misc/character/cocos) from bundle1 folder
bundle1.load('misc/character/cocos', cc.Prefab, (err, prefab) => console.log(err));

// load the sprite frame (${project}/assets/some/xxx/bundle2/imgs/cocos.png) from bundle2 folder
bundle2.load('imgs/cocos', cc.SpriteFrame, null, (err, spriteFrame) => console.log(err));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` | `string` | Paths of the target assets.The path is relative to the bundle's folder, extensions must be omitted.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | Only asset of type will be loaded if this argument is supplied.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | Callback invoked when progression change.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback invoked when all assets loaded.  |



##### Returns `void`


▸   **load**<`void`\>(`paths: undefined, type: AssetType | null, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **load**<`void`\>(`paths: string, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **load**<`void`\>(`paths: undefined, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **load**<`void`\>(`paths: string, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **load**<`void`\>(`paths: undefined, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **load**<`void`\>(`paths: string, type: AssetType | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **load**<`void`\>(`paths: undefined, type: AssetType | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` |  | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L217)&nbsp;   [cocos/core/asset-manager/bundle.ts:222](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L222)&nbsp;   [cocos/core/asset-manager/bundle.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L226)&nbsp;   [cocos/core/asset-manager/bundle.ts:227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L227)&nbsp;   [cocos/core/asset-manager/bundle.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L228)&nbsp;   [cocos/core/asset-manager/bundle.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L229)&nbsp;   [cocos/core/asset-manager/bundle.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L230)&nbsp;   [cocos/core/asset-manager/bundle.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L231)&nbsp;   [cocos/core/asset-manager/bundle.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L232)&nbsp;
___
### loadDir
<div style="margin-left: 10px;">

▸   **loadDir**<`void`\>(`dir: string, type: AssetType | null, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




**`en`** 
Load all assets under a folder inside the bundle folder.<br>
<br>
Note: All asset paths in Creator use forward slashes, paths using backslashes will not work.





**`example`**

```ts

// load all audios (resources/audios/)
cc.resources.loadDir('audios', cc.AudioClip, (err, audios) => {});

// load all textures in "resources/imgs/"
cc.resources.loadDir('imgs', cc.Texture2D, null, function (err, textures) {
    var texture1 = textures[0];
    var texture2 = textures[1];
});

// load all prefabs (${project}/assets/bundle1/misc/characters/) from bundle1 folder
bundle1.loadDir('misc/characters', cc.Prefab, (err, prefabs) => console.log(err));

// load all sprite frame (${project}/assets/some/xxx/bundle2/skills/) from bundle2 folder
bundle2.loadDir('skills', cc.SpriteFrame, null, (err, spriteFrames) => console.log(err));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dir` | `string` | path of the target folder.The path is relative to the bundle folder, extensions must be omitted.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | Only asset of type will be loaded if this argument is supplied.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | Callback invoked when progression change.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | A callback which is called when all assets have been loaded, or an error occurs.  |



##### Returns `void`


▸   **loadDir**<`void`\>(`dir: string, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dir` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **loadDir**<`void`\>(`dir: string, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dir` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **loadDir**<`void`\>(`dir: string, type: AssetType | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dir` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L333)&nbsp;   [cocos/core/asset-manager/bundle.ts:334](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L334)&nbsp;   [cocos/core/asset-manager/bundle.ts:335](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L335)&nbsp;   [cocos/core/asset-manager/bundle.ts:336](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L336)&nbsp;   [cocos/core/asset-manager/bundle.ts:337](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L337)&nbsp;
___
### loadScene
<div style="margin-left: 10px;">

▸   **loadScene**<`void`\>(`sceneName: string, options: IAssetOptions | null, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




**`en`** 
Loads the scene within this bundle by its name.





**`example`**

```ts

bundle1.loadScene('first', (err, sceneAsset) => cc.director.runScene(sceneAsset));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | The name of the scene to load.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IAssetOptions \| null` | Some optional parameters  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | Callback invoked when progression change.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | callback, will be called after scene launched.  |



##### Returns `void`


▸   **loadScene**<`void`\>(`sceneName: string, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **loadScene**<`void`\>(`sceneName: string, options: IAssetOptions | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IAssetOptions \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **loadScene**<`void`\>(`sceneName: string, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:420](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L420)&nbsp;   [cocos/core/asset-manager/bundle.ts:421](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L421)&nbsp;   [cocos/core/asset-manager/bundle.ts:422](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L422)&nbsp;   [cocos/core/asset-manager/bundle.ts:423](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L423)&nbsp;   [cocos/core/asset-manager/bundle.ts:424](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L424)&nbsp;
___
### preload
<div style="margin-left: 10px;">

▸   **preload**<`void`\>(`paths: string | array<string>, type: AssetType | null, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




**`en`** 
Preload the asset within this bundle by the path which is relative to bundle's path.
After calling this method, you still need to finish loading by calling `Bundle.load`.
It will be totally fine to call `Bundle.load` at any time even if the preloading is not
yet finished





**`example`**

```ts

// preload the texture (${project}/assets/resources/textures/background.jpg) from resources
cc.resources.preload('textures/background', cc.Texture2D);

// preload the audio (${project}/assets/resources/music/hit.mp3) from resources
cc.resources.preload('music/hit', cc.AudioClip);
// wait for while
cc.resources.load('music/hit', cc.AudioClip, (err, audioClip) => {});

* // preload the prefab (${project}/assets/bundle1/misc/character/cocos) from bundle1 folder
bundle1.preload('misc/character/cocos', cc.Prefab);

// load the sprite frame of (${project}/assets/bundle2/imgs/cocos.png) from bundle2 folder
bundle2.preload('imgs/cocos', cc.SpriteFrame);
// wait for while
bundle2.load('imgs/cocos', cc.SpriteFrame, (err, spriteFrame) => {});


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` | `string \| array<string>` | Paths of the target asset.The path is relative to bundle folder, extensions must be omitted.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | Only asset of type will be loaded if this argument is supplied.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | Callback invoked when progression change.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | Callback invoked when the resource loaded.  |



##### Returns `void`


▸   **preload**<`void`\>(`paths: string | array<string>, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` | `string \| array<string>` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **preload**<`void`\>(`paths: string | array<string>, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` | `string \| array<string>` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **preload**<`void`\>(`paths: string | array<string>, type: AssetType | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `paths` | `string \| array<string>` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:282](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L282)&nbsp;   [cocos/core/asset-manager/bundle.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L283)&nbsp;   [cocos/core/asset-manager/bundle.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L284)&nbsp;   [cocos/core/asset-manager/bundle.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L285)&nbsp;   [cocos/core/asset-manager/bundle.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L286)&nbsp;
___
### preloadDir
<div style="margin-left: 10px;">

▸   **preloadDir**<`void`\>(`dir: string, type: AssetType | null, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




**`en`** 
Preload all assets under a folder inside the bundle folder.<br> After calling this method, you still need to
finish loading by calling `Bundle.loadDir`.
It will be totally fine to call `Bundle.loadDir` at any time even if the preloading is not yet finished





**`example`**

```ts

// preload all audios (resources/audios/)
cc.resources.preloadDir('audios', cc.AudioClip);

// preload all textures in "resources/imgs/"
cc.resources.preloadDir('imgs', cc.Texture2D);
// wait for while
cc.resources.loadDir('imgs', cc.Texture2D, (err, textures) => {});

// preload all prefabs (${project}/assets/bundle1/misc/characters/) from bundle1 folder
bundle1.preloadDir('misc/characters', cc.Prefab);

// preload all sprite frame (${project}/assets/some/xxx/bundle2/skills/) from bundle2 folder
bundle2.preloadDir('skills', cc.SpriteFrame);
// wait for while
bundle2.loadDir('skills', cc.SpriteFrame, (err, spriteFrames) => {});

```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dir` | `string` | path of the target folder.The path is relative to the bundle folder, extensions must be omitted.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | Only asset of type will be preloaded if this argument is supplied.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | Callback invoked when progression change.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | A callback which is called when all assets have been loaded, or an error occurs.  |



##### Returns `void`


▸   **preloadDir**<`void`\>(`dir: string, onProgress: ProgressCallback | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dir` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **preloadDir**<`void`\>(`dir: string, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dir` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`


▸   **preloadDir**<`void`\>(`dir: string, type: AssetType | null, onComplete: CompleteCallbackWithData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dir` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackWithData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L385)&nbsp;   [cocos/core/asset-manager/bundle.ts:386](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L386)&nbsp;   [cocos/core/asset-manager/bundle.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L387)&nbsp;   [cocos/core/asset-manager/bundle.ts:388](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L388)&nbsp;   [cocos/core/asset-manager/bundle.ts:389](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L389)&nbsp;
___
### preloadScene
<div style="margin-left: 10px;">

▸   **preloadScene**<`void`\>(`sceneName: string, options: IAssetOptions | null, onProgress: ProgressCallback, onComplete: CompleteCallbackNoData | null`) : `void`




**`en`** 
Preloads the scene within this bundle by its name. After calling this method, you still need to finish loading
by calling `Bundle.loadScene` or `cc.director.loadScene`.It will be totally fine to call `Bundle.loadDir` at any
time even if the preloading is not yet finished





**`example`**

```ts

bundle1.preloadScene('first');
// wait for a while
bundle1.loadScene('first', (err, scene) => cc.director.runScene(scene));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | The name of the scene to preload.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IAssetOptions \| null` | Some optional parameters  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback` | callback, will be called when the load progression change.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackNoData \| null` | callback, will be called after scene loaded.  |



##### Returns `void`


▸   **preloadScene**<`void`\>(`sceneName: string, onProgress: ProgressCallback | null, onComplete: CompleteCallbackNoData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `ProgressCallback \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackNoData \| null` | - |



##### Returns `void`


▸   **preloadScene**<`void`\>(`sceneName: string, options: IAssetOptions | null, onComplete: CompleteCallbackNoData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `options` | `IAssetOptions \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackNoData \| null` | - |



##### Returns `void`


▸   **preloadScene**<`void`\>(`sceneName: string, onComplete: CompleteCallbackNoData | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onComplete` | `CompleteCallbackNoData \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:474](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L474)&nbsp;   [cocos/core/asset-manager/bundle.ts:475](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L475)&nbsp;   [cocos/core/asset-manager/bundle.ts:476](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L476)&nbsp;   [cocos/core/asset-manager/bundle.ts:477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L477)&nbsp;   [cocos/core/asset-manager/bundle.ts:478](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L478)&nbsp;
___
### release
<div style="margin-left: 10px;">

▸   **release**<`void`\>(`path: string, type: AssetType | null`) : `void`




**`en`** 
Release the asset loaded by {{#crossLink "Bundle/load:method"}}{{/crossLink}} or {{#crossLink "Bundle/loadDir:method"}}{{/crossLink}}
and it's dependencies. Refer to {{#crossLink "AssetManager/releaseAsset:method"}}{{/crossLink}} for detailed informations.

NOTE：The `path` and `type` parameters passed need to be the same as those passed to `Bundle.load`,
otherwise it may release some other resources with the same name!





**`example`**

```ts

// release a texture which is no longer need
bundle1.release('misc/character/cocos');


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `path` | `string` | The path of asset  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `AssetType \| null` | Only asset of type will be released if this argument is supplied.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:548](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L548)&nbsp;
___
### releaseAll
<div style="margin-left: 10px;">

▸   **releaseAll**<`void`\> : `void`




**`en`** 
Release all assets within this bundle. Refer to {{#crossLink "AssetManager/releaseAll:method"}}{{/crossLink}} for detailed informations.





**`example`**

```ts

// release all asset within bundle1
bundle1.releaseAll();

```




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/bundle.ts:589](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/bundle.ts#L589)&nbsp;
___
<!---->





## Class: DependUtil






**`en`** 
Control asset's dependency list, it is a singleton. All member can be accessed with `cc.assetManager.dependUtil`



<div class="table-of-content">
<h2>Table of contents</h2>


### Methods

- [ getDeps](#getDeps)
- [ getDepsRecursively](#getDepsRecursively)
- [ getNativeDep](#getNativeDep)
- [ init](#init)
- [ parse](#parse)
- [ remove](#remove)
</div>

## Methods

### getDeps

<div style="margin-left: 10px;">

▸   **getDeps**(`uuid: string`)



**`en`** 
Get asset's direct referencing non-native dependency list. For example, Material's non-native dependencies are Texture.




**`example`**

```ts

var deps = dependUtil.getDeps('fcmR3XADNLgJ1ByKhqcC5Z');


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | asset's uuid  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/depend-util.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/depend-util.ts#L94)&nbsp;
___
### getDepsRecursively

<div style="margin-left: 10px;">

▸   **getDepsRecursively**(`uuid: string`)



**`en`** 
Get non-native dependency list of the loaded asset, include indirect reference.
The returned array stores the dependencies with their uuid, after retrieve dependencies,




**`example`**

```ts

var deps = dependUtil.getDepsRecursively('fcmR3XADNLgJ1ByKhqcC5Z');


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | The asset's uuid  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/depend-util.ts:117](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/depend-util.ts#L117)&nbsp;
___
### getNativeDep

<div style="margin-left: 10px;">

▸   **getNativeDep**(`uuid: string`)



**`en`** 
Get asset's native dependency. For example, Texture's native dependency is image.




**`example`**

```ts

var dep = dependUtil.getNativeDep('fcmR3XADNLgJ1ByKhqcC5Z');

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | asset's uuid  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/depend-util.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/depend-util.ts#L72)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/depend-util.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/depend-util.ts#L55)&nbsp;
___
### parse

<div style="margin-left: 10px;">

▸   **parse**<`IDependencies`\>(`uuid: string, json: any`) : `IDependencies`



**`en`** 
Extract dependency list from serialized data or asset and then store in cache.




**`example`**

```ts

downloader.downloadFile('test.json', { xhrResponseType: 'json'}, null, (err, file) => {
    var dependencies = parse('fcmR3XADNLgJ1ByKhqcC5Z', file);
});


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | The uuid of serialized data or asset  |
| `json` | `any` | Serialized data or asset  |


##### Returns `IDependencies`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/depend-util.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/depend-util.ts#L145)&nbsp;
___
### remove

<div style="margin-left: 10px;">

▸   **remove**<`void`\>(`uuid: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uuid` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/depend-util.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/depend-util.ts#L124)&nbsp;
___
<!---->




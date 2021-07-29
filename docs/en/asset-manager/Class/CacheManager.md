
## Class: CacheManager






**`en`** 
Cache manager is a module which controls all caches downloaded from server in non-web platform, it is a singleton
All member can be accessed with `cc.assetManager.cacheManager`.



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ autoClear](#autoClear)
- [ cacheDir](#cacheDir)
- [ cacheEnabled](#cacheEnabled)
- [ cacheInterval](#cacheInterval)
- [ cachedFiles](#cachedFiles)
- [ deleteInterval](#deleteInterval)

### Methods

- [ clearCache](#clearCache)
- [ clearLRU](#clearLRU)
- [ getCache](#getCache)
- [ getTemp](#getTemp)
- [ removeCache](#removeCache)
</div>

## Properties


### autoClear
<div style="margin-left: 10px;">



**`en`** 
Whether or not auto clear cache when storage ran out, this property only works on mini-game platforms





•  **autoClear**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L69)&nbsp;


___


### cacheDir
<div style="margin-left: 10px;">



**`en`** 
The name of cacheDir





•  **cacheDir**:
`string` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L49)&nbsp;


___


### cacheEnabled
<div style="margin-left: 10px;">



**`en`** 
Whether or not cache asset into user's storage space, this property only works on mini-game platforms





•  **cacheEnabled**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:59](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L59)&nbsp;


___


### cacheInterval
<div style="margin-left: 10px;">



**`en`** 
The interval between caching resources, this property only works on mini-game platforms, unit: ms





•  **cacheInterval**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L79)&nbsp;


___


### cachedFiles
<div style="margin-left: 10px;">



**`en`** 
List of all cached files





•  **cachedFiles**:
`Cache` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L99)&nbsp;


___


### deleteInterval
<div style="margin-left: 10px;">



**`en`** 
The interval between deleting resources, when you use `cleanLRU`, the resources will be deleted as this interval, unit: ms





•  **deleteInterval**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L89)&nbsp;


___

<!---->
## Methods

### clearCache

<div style="margin-left: 10px;">

▸   **clearCache**<`void`\> : `void`



**`en`** 
Clear all caches, please use with caution, If necessary, we recommend using it before the game is launched





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L133)&nbsp;
___
### clearLRU

<div style="margin-left: 10px;">

▸   **clearLRU**<`void`\> : `void`



**`en`** 
Clear part of caches with LRU strategy





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L143)&nbsp;
___
### getCache

<div style="margin-left: 10px;">

▸   **getCache**<`string`\>(`originUrl: string`) : `string`



**`en`** 
Get cached path with origin url




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `originUrl` | `string` | - |


##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L111)&nbsp;
___
### getTemp

<div style="margin-left: 10px;">

▸   **getTemp**<`string`\>(`originUrl: string`) : `string`



**`en`** 
Get temporary path with origin url, this method only works on mini-game platforms




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `originUrl` | `string` | - |


##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L123)&nbsp;
___
### removeCache

<div style="margin-left: 10px;">

▸   **removeCache**<`void`\>(`originUrl: string`) : `void`



**`en`** 
Remove cache with origin url




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `originUrl` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L153)&nbsp;
___
<!---->




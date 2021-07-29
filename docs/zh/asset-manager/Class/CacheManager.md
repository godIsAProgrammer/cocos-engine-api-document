
## Class: CacheManager







**`zh`** 
缓存管理器是一个模块，在非 WEB 平台上，用于管理所有从服务器上下载下来的缓存，这是一个单例，所有成员能通过 `cc.assetManager.cacheManager` 访问。




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




**`zh`** 
是否在存储空间满了后自动清理缓存，此属性只在小游戏平台有效






•  **autoClear**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L69)&nbsp;


___


### cacheDir
<div style="margin-left: 10px;">




**`zh`** 
缓存目录的名称





•  **cacheDir**:
`string` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:49](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L49)&nbsp;


___


### cacheEnabled
<div style="margin-left: 10px;">




**`zh`** 
是否缓存资源到用户存储空间，此属性只在小游戏平台有效






•  **cacheEnabled**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:59](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L59)&nbsp;


___


### cacheInterval
<div style="margin-left: 10px;">




**`zh`** 
缓存资源的间隔时间，此属性只在小游戏平台有效，单位：毫秒






•  **cacheInterval**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L79)&nbsp;


___


### cachedFiles
<div style="margin-left: 10px;">




**`zh`** 
所有缓存文件列表






•  **cachedFiles**:
`Cache` 
</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L99)&nbsp;


___


### deleteInterval
<div style="margin-left: 10px;">




**`zh`** 
清理资源的间隔时间，当你使用 `cleanLRU` 时，资源将以此间隔被删除，单位：毫秒






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




**`zh`** 
清空所有缓存，请谨慎使用，如果必要的话，我们建议在游戏启动之前使用






<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L133)&nbsp;
___
### clearLRU
<div style="margin-left: 10px;">

▸   **clearLRU**<`void`\> : `void`




**`zh`** 
使用 LRU 策略清空部分缓存






<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L143)&nbsp;
___
### getCache
<div style="margin-left: 10px;">

▸   **getCache**<`string`\>(`originUrl: string`) : `string`




**`zh`** 
通过原始 url 获取缓存后的路径





<!---->
<!--    #### Returns `string` The cached path
-->
<!---->

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




**`zh`** 
通过原始 url 获取临时文件的路径，此方法只在小游戏平台有效





<!---->
<!--    #### Returns `string` The temp path
-->
<!---->

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




**`zh`** 
通过原始 url 移除缓存






<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `originUrl` | `string` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/asset-manager/cache-manager.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/asset-manager/cache-manager.ts#L153)&nbsp;
___
<!---->




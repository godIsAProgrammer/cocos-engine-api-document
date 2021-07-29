
## Class: DependUtil






**`zh`** 
控制资源的依赖列表，这是一个单例, 所有成员能通过 `cc.assetManager.dependUtil` 访问




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



**`zh`** 
获取资源直接引用的非原生依赖列表，例如，材质的非原生依赖是 Texture




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



**`zh`** 
获取某个已经加载好的资源的所有非原生依赖资源列表，包括间接引用的资源，并保存在数组中返回。
返回的数组将仅保存依赖资源的 uuid。




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



**`zh`** 
获取资源的原生依赖，例如 Texture 的原生依赖是图片




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



**`zh`** 
从序列化数据或资源中提取出依赖列表，并且存储在缓存中。




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




## Functions: instantiate

### instantiate


___
▸ **instantiate**<`Node`\>(`prefab: Prefab`): `Node`
___



**`en`** Instantiate a node from the Prefab.




**`example`**

```ts


import { instantiate, director } from 'cc';
// Instantiate node from prefab.
const node = instantiate(prefabAsset);
node.parent = director.getScene();


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `prefab` | `Prefab` | The prefab.  |


#### Returns `Node` The instantiated node.
___

### instantiate


___
▸ **instantiate**<`T`\>(`original: T`): `T`
___



**`en`** Clones the object `original.




**`example`**

```ts


import { instantiate, director } from 'cc';
// Clone a node.
const node = instantiate(targetNode);
node.parent = director.getScene();


```


#### Type parameters
| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `original` | `T` | An existing object that you want to make a copy of.It can be any JavaScript object(`typeof original === 'object'`) but:- it shall not be array or null;- it shall not be object of `Asset`;- if it's an object of `CCObject`, it should not have been destroyed.  |


#### Returns `T` The newly instantiated object.
___


##### Defined in &nbsp;   [cocos/core/data/instantiate.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/instantiate.ts#L68)&nbsp;   [cocos/core/data/instantiate.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/instantiate.ts#L87)&nbsp;   [cocos/core/data/instantiate.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/instantiate.ts#L89)&nbsp;

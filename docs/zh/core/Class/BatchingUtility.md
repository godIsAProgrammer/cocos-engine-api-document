
## Class: BatchingUtility






**`zh`** 服务于 3D 模型静态合批的工具类



<div class="table-of-content">
<h2>Table of contents</h2>


### Methods

- [ **`static`**  unbatchStaticModel](#unbatchStaticModel)
- [ **`static`**  batchStaticModel](#batchStaticModel)
</div>

## Methods

### unbatchStaticModel

<div style="margin-left: 10px;">

▸ `static`  **unbatchStaticModel**<`boolean`\>(`staticModelRoot: Node, batchedRoot: Node`) : `boolean`


Undoes everything &#x60;batchStaticModel&#x60; did.

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `staticModelRoot` | `Node` | root of all the static models to be batched  |
| `batchedRoot` | `Node` | the target output node  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/3d/misc/batch-utils.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/misc/batch-utils.ts#L104)&nbsp;
___
### batchStaticModel

<div style="margin-left: 10px;">

▸ `static`  **batchStaticModel**<`boolean`\>(`staticModelRoot: Node, batchedRoot: Node`) : `boolean`


Collect the Models under &#x60;staticModelRoot&#x60;,
merge all the meshes statically into one (while disabling each component),
and attach it to a new Model on &#x60;batchedRoot&#x60;.
The world transform of each model is guaranteed to be preserved.

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `staticModelRoot` | `Node` | root of all the static models to be batched  |
| `batchedRoot` | `Node` | the target output node  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/3d/misc/batch-utils.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/misc/batch-utils.ts#L64)&nbsp;
___
<!---->




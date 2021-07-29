## Functions: find

### find


___
▸ **find**(`path: string, referenceNode: Node`)
___



**`zh`** 通过路径从节点树中查找节点的方法，路径是大小写敏感的，并且通过 `/` 来分隔节点层级。
即使节点的状态是未启用的也可以找到，建议将结果缓存，而不是每次需要都去查找。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `path` | `string` | The path of the target node  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `referenceNode` | `Node` | If given, the search will be limited in the sub node tree of the reference node  |


___


##### Defined in &nbsp;   [cocos/core/scene-graph/find.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/find.ts#L46)&nbsp;

## Functions: find

### find


___
▸ **find**(`path: string, referenceNode: Node`)
___


**`en`** Finds a node by hierarchy path, the path is case-sensitive.
It will traverse the hierarchy by splitting the path using '/' character.
This function will still returns the node even if it is inactive.
It is recommended to not use this function every frame instead cache the result at startup.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `path` | `string` | The path of the target node  |
| `referenceNode` | `Node` | If given, the search will be limited in the sub node tree of the reference node  |

___


##### Defined in &nbsp;   [cocos/core/scene-graph/find.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/find.ts#L46)&nbsp;

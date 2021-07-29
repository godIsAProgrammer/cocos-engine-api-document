## Functions: setClassAlias

### setClassAlias


___
▸ **setClassAlias**<`void`\>(`target: Constructor, alias: string`): `void`
___


**`zh`** 为类设置别名。
当 `setClassAlias(target, alias)` 后，
`alias` 将作为类 `target`的“单向 ID” 和“单向名称”。
因此，`_getClassById(alias)` 和 `getClassByName(alias)` 都会得到 `target`。
这种映射是单向的，意味着 `getClassName(target)` 和 `_getClassId(target)` 将不会是 `alias`。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `Constructor` | Constructor of target class.  |
| `alias` | `string` | Alias to set. The name shall not have been set as class name or alias of another class.  |

#### Returns `void` 
___


##### Defined in &nbsp;   [cocos/core/utils/js-typed.ts:545](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/js-typed.ts#L545)&nbsp;

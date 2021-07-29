## Functions: setClassAlias

### setClassAlias


___
▸ **setClassAlias**<`void`\>(`target: Constructor, alias: string`): `void`
___



**`en`** Set an alias name for class.
If `setClassAlias(target, alias)`, `alias` will be a single way short cut for class `target`.
If you try `js.getClassByName(alias)`, you will get target.
But `js.getClassName(target)` will return the original name of `target`, not the alias.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `Constructor` | Constructor of target class.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `alias` | `string` | Alias to set. The name shall not have been set as class name or alias of another class.  |


#### Returns `void` 
___


##### Defined in &nbsp;   [cocos/core/utils/js-typed.ts:545](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/js-typed.ts#L545)&nbsp;

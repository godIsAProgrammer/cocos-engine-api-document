## Functions: createMap

### createMap


___
▸ **createMap**<`any`\>(`forceDictMode: undefined | false | true`): `any`
___



**`en`** 
A simple wrapper of `Object.create(null)` which ensures the return object have no prototype (and thus no inherited members).
This eliminates the need to make `hasOwnProperty` judgments when we look for values by key on the object,
which is helpful for performance in this case.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `forceDictMode` | - | - |


#### Returns `any` 
___


##### Defined in &nbsp;   [cocos/core/utils/js-typed.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/js-typed.ts#L174)&nbsp;

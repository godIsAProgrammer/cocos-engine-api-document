## Functions: createMap

### createMap


___
▸ **createMap**<`any`\>(`forceDictMode: undefined | false | true`): `any`
___



**`zh`** 
该方法是对 `Object.create(null)` 的简单封装。
`Object.create(null)` 用于创建无 prototype （也就无继承）的空对象。
这样我们在该对象上查找属性时，就不用进行 `hasOwnProperty` 判断，此时对性能提升有帮助。




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `forceDictMode` | - | - |


#### Returns `any` 
___


##### Defined in &nbsp;   [cocos/core/utils/js-typed.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/js-typed.ts#L174)&nbsp;

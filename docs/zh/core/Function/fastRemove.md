## Functions: fastRemove

### fastRemove


___
▸ **fastRemove**<`void`\>(`array: undefined, value: T`): `void`
___


**`zh`** 
移除首个指定的数组元素。判定元素相等时相当于于使用了 `Array.prototype.indexOf`。
此函数十分高效，但会改变数组的元素次序。


#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `array` | - | 数组。  |
| `value` | `T` | 待移除元素。  |

#### Returns `void` 
___


##### Defined in &nbsp;   [cocos/core/utils/array.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/array.ts#L96)&nbsp;

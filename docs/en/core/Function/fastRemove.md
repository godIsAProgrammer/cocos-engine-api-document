## Functions: fastRemove

### fastRemove


___
▸ **fastRemove**<`void`\>(`array: undefined, value: T`): `void`
___


**`en`** 
Removes the first occurrence of a specific object from the array.
Decision of the equality of elements is similar to `Array.prototype.indexOf`.
It's faster but the order of the array will be changed.


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

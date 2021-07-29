## Functions: binarySearchBy

### binarySearchBy

Searches the **sorted** array for an element and returns the index of that element.
___
▸ **binarySearchBy**<`number`\>(`array: undefined, value: T, lessThan: undefined`): `number`
___

#### Type parameters
| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `array` | - | The array to search in.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `T` | The value to search.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `lessThan` | - | The predicate which implements the less than semantic.  |


#### Returns `number` The index of the searched element in the sorted array, if one is found;
otherwise, a negative number that is the bitwise complement of the index of the next element that is large than the searched value or,
if there is no larger element(include the case that the array is empty), the bitwise complement of array&#x27;s length.

___


##### Defined in &nbsp;   [cocos/core/algorithm/binary-search.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/algorithm/binary-search.ts#L74)&nbsp;

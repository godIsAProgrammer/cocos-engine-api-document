## Functions: binarySearchEpsilon

### binarySearchEpsilon

Searches the **sorted** number array for an element and returns the index of that element.
___
▸ **binarySearchEpsilon**<`number`\>(`array: undefined, value: number, EPSILON: number`): `number`
___


#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `array` | - | The array to search in.  |
| `value` | `number` | The value to search.  |
| `EPSILON` | `number` | The epsilon to compare the numbers. Default to `1e-6`.  |

#### Returns `number` The index of the searched element in the sorted array, if one is found;
otherwise, a negative number that is the bitwise complement of the index of the next element that is large than the searched value or,
if there is no larger element(include the case that the array is empty), the bitwise complement of array&#x27;s length.

___


##### Defined in &nbsp;   [cocos/core/algorithm/binary-search.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/algorithm/binary-search.ts#L48)&nbsp;

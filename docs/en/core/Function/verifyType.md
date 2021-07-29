## Functions: verifyType

### verifyType


___
▸ **verifyType**<`array`\>(`array: undefined, type: T`): `array`
___



**`en`** 
Verify array's Type.
This function tests each element using `instanceof` operator.


#### Type parameters
| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `array` | - | 数组。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `T` | 类型。  |


#### Returns `array` 当每一个元素都是指定类型时返回 &#x60;true&#x60;，否则返回 &#x60;false&#x60;。

___


##### Defined in &nbsp;   [cocos/core/utils/array.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/array.ts#L132)&nbsp;

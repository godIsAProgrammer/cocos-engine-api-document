## Functions: extendsEnum

### extendsEnum


___
▸ **extendsEnum**(``)
___



**`zh`** 
组合任意多个枚举。
此函数的行为等价于返回了一个新的枚举，其成员囊括了所有源枚举的成员。
这些枚举的成员必须各不相同（包括成员名和值），否则行为是未定义的。




**`example`**

```ts


enum Apple { apple = 'apple', }
enum Pen { pen = 'pen' }
// As if `enum ApplePen { apple = 'apple'; pen = 'pen'; }`
const ApplePen = extendsEnum(Apple, Pen);


```



#### Parameters


___

### extendsEnum


___
▸ **extendsEnum**<`E0`\>(`e0: E0`): `E0`
___

#### Type parameters
| Name |
| :------ |
| `E0` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e0` | `E0` | - |


#### Returns `E0` 
___

### extendsEnum


___
▸ **extendsEnum**(`e0: E0, e1: E1`)
___

#### Type parameters
| Name |
| :------ |
| `E0` |
| Name |
| :------ |
| `E1` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e0` | `E0` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `e1` | `E1` | - |


___

### extendsEnum


___
▸ **extendsEnum**(`e0: E0, e1: E1, e2: E2`)
___

#### Type parameters
| Name |
| :------ |
| `E0` |
| Name |
| :------ |
| `E1` |
| Name |
| :------ |
| `E2` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e0` | `E0` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `e1` | `E1` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `e2` | `E2` | - |


___

### extendsEnum


___
▸ **extendsEnum**(`e0: E0, e1: E1, e2: E2, e3: E3`)
___

#### Type parameters
| Name |
| :------ |
| `E0` |
| Name |
| :------ |
| `E1` |
| Name |
| :------ |
| `E2` |
| Name |
| :------ |
| `E3` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e0` | `E0` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `e1` | `E1` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `e2` | `E2` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `e3` | `E3` | - |


___


##### Defined in &nbsp;   [cocos/core/data/utils/extends-enum.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L48)&nbsp;   [cocos/core/data/utils/extends-enum.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L50)&nbsp;   [cocos/core/data/utils/extends-enum.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L52)&nbsp;   [cocos/core/data/utils/extends-enum.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L54)&nbsp;   [cocos/core/data/utils/extends-enum.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L56)&nbsp;   [cocos/core/data/utils/extends-enum.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L58)&nbsp;

## Functions: extendsEnum

### extendsEnum


___
▸ **extendsEnum**(``)
___


**`en`** 
Combine arbitray number of enumerations.
It behaves like an enumeration having members that is a combination of members of the source enumerations
is returned.
These enumerations shall have non-overlaped member names or member values.
If not, the behavior is undefined.



**`example`**

```ts


enum Apple { apple = 'apple', }
enum Pen { pen = 'pen' }
// As if `enum ApplePen { apple = 'apple'; pen = 'pen'; }`
const ApplePen = extendsEnum(Apple, Pen);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |

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
| `E1` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e0` | `E0` | - |
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
| `E1` |
| `E2` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e0` | `E0` | - |
| `e1` | `E1` | - |
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
| `E1` |
| `E2` |
| `E3` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e0` | `E0` | - |
| `e1` | `E1` | - |
| `e2` | `E2` | - |
| `e3` | `E3` | - |

___


##### Defined in &nbsp;   [cocos/core/data/utils/extends-enum.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L48)&nbsp;   [cocos/core/data/utils/extends-enum.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L50)&nbsp;   [cocos/core/data/utils/extends-enum.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L52)&nbsp;   [cocos/core/data/utils/extends-enum.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L54)&nbsp;   [cocos/core/data/utils/extends-enum.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L56)&nbsp;   [cocos/core/data/utils/extends-enum.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/utils/extends-enum.ts#L58)&nbsp;

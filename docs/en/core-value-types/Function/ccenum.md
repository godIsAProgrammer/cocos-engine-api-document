## Functions: ccenum

### ccenum

Make the enum type &#x60;enumType&#x60; as enumeration so that Creator may identify, operate on it.
Formally, as a result of invocation on this function with enum type &#x60;enumType&#x60;:
- &#x60;Enum.isEnum(enumType)&#x60; returns &#x60;true&#x60;;
- &#x60;Enum.getList(enumType)&#x60; returns the enumerators of &#x60;enumType&#x60;.
___
▸ **ccenum**<`void`\>(`enumType: EnumT`): `void`
___

#### Type parameters
| Name |
| :------ |
| `EnumT` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enumType` | `EnumT` | An enum type, eg, a kind of type with similar semantic defined by TypeScript.  |


#### Returns `void` 
___


##### Defined in &nbsp;   [cocos/core/value-types/enum.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/value-types/enum.ts#L181)&nbsp;

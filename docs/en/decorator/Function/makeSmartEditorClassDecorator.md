## Functions: makeSmartEditorClassDecorator

### makeSmartEditorClassDecorator

Make a smart class decorator.
The smart decorator sets the editor property &#x60;propertyName&#x60;, on the decorated class, into:
- &#x60;defaultValue&#x60; if the decorator is called with &#x60;@x&#x60; form, or
- the argument if the decorator is called with an argument, eg, the &#x60;@x(arg0)&#x60; form.
___
▸ **makeSmartEditorClassDecorator**(`propertyName: string, defaultValue: TValue`)
___

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `propertyName` | `string` | The editor property.  |
| `defaultValue` | `TValue` | - |

___


##### Defined in &nbsp;   [cocos/core/data/decorators/utils.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/decorators/utils.ts#L142)&nbsp;

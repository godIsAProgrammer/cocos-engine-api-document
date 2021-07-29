## Functions: makeSmartEditorClassDecorator

### makeSmartEditorClassDecorator

Make a smart class decorator.
The smart decorator sets the editor property &#x60;propertyName&#x60;, on the decorated class, into:
- &#x60;defaultValue&#x60; if the decorator is called with &#x60;@x&#x60; form, or
- the argument if the decorator is called with an argument, eg, the &#x60;@x(arg0)&#x60; form.
___
▸ **makeSmartEditorClassDecorator**(`propertyName: string, defaultValue: TValue`)
___



**`zh`** 
创建一个智能类装饰器。
该智能类装饰器将根据以下情况来设置被装饰类的编辑器属性 `propertyName`：
- 如果该装饰器是以 `@x` 形式调用的，该属性将被设置为 `defaultValue`。
- 如果该装饰器是以一个参数的形式，即 `@x(arg0)` 的形式调用的，该属性将被设置为传入的参数值。


#### Type parameters
| Name |
| :------ |
| `TValue` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `propertyName` | `string` | The editor property.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `defaultValue` | `TValue` | - |


___


##### Defined in &nbsp;   [cocos/core/data/decorators/utils.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/decorators/utils.ts#L142)&nbsp;

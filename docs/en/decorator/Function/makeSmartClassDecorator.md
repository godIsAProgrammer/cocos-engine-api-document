## Functions: makeSmartClassDecorator

### makeSmartClassDecorator


___
▸ **makeSmartClassDecorator**(`decorate: undefined`)
___


**`en`** 
Make a smart class decorator which can properly handle the following form decorator syntax:
- `@x`
- `@x(arg0)`

and forward both the decorated class and the `arg0` (in first form, `arg0` is forward as `undefined`) to
`decorate`.


#### Type parameters

| Name |
| :------ |
| `TArg` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `decorate` | - |   |

___


##### Defined in &nbsp;   [cocos/core/data/decorators/utils.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/decorators/utils.ts#L89)&nbsp;

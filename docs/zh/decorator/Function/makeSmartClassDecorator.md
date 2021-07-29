## Functions: makeSmartClassDecorator

### makeSmartClassDecorator


___
▸ **makeSmartClassDecorator**(`decorate: undefined`)
___



**`zh`** 
创建一个智能类装饰器，它能正确地处理以下形式的装饰器语法：
- `@x`
- `@x(arg0)`

并且，将被装饰的类和 `arg0`（若是第一种形式，`arg0` 就是 `undefined`）一起转发给 `decorate`。


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

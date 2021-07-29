## Functions: transparentCompareFn

### transparentCompareFn


___
▸ **transparentCompareFn**<`number`\>(`a: IRenderPass, b: IRenderPass`): `number`
___


**`en`** Comparison sorting function. Transparent objects are sorted by priority -> depth back to front -> shader ID.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IRenderPass` | - |
| `b` | `IRenderPass` | - |

#### Returns `number` 
___


##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L50)&nbsp;

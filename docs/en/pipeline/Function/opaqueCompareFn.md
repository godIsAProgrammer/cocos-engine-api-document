## Functions: opaqueCompareFn

### opaqueCompareFn


___
▸ **opaqueCompareFn**<`number`\>(`a: IRenderPass, b: IRenderPass`): `number`
___



**`en`** Comparison sorting function. Opaque objects are sorted by priority -> depth front to back -> shader ID.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `a` | `IRenderPass` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `b` | `IRenderPass` | - |


#### Returns `number` 
___


##### Defined in &nbsp;   [cocos/core/pipeline/render-queue.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/pipeline/render-queue.ts#L42)&nbsp;

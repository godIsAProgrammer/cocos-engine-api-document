## Functions: formatStr

### formatStr

A string tool to construct a string with format string.
___
▸ **formatStr**<`any`\>(`msg: string | any, subst: undefined`): `any`
___



**`example`**

```ts


import { js } from 'cc';
js.formatStr("a: %s, b: %s", a, b);
js.formatStr(a, b, c);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `msg` | - | A JavaScript string containing zero or more substitution strings (%s).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `subst` | - | JavaScript objects with which to replace substitution strings within msg.This gives you additional control over the format of the output.  |


#### Returns `any` 
___


##### Defined in &nbsp;   [cocos/core/utils/js-typed.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/js-typed.ts#L285)&nbsp;

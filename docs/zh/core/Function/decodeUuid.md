## Functions: decodeUuid

### decodeUuid


___
▸ **decodeUuid**<`string`\>(`base64: string`): `string`
___



**`zh`** 
解码 uuid，返回原始 uuid





**`example`**

```ts


const uuid = 'fcmR3XADNLgJ1ByKhqcC5Z';
const originalUuid = decodeUuid(uuid); // fc991dd7-0033-4b80-9d41-c8a86a702e59


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `base64` | `string` | the encoded uuid  |


#### Returns `string` the original uuid

___


##### Defined in &nbsp;   [cocos/core/utils/decode-uuid.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/decode-uuid.ts#L58)&nbsp;

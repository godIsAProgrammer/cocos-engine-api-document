## Functions: tween

### tween


___
▸ **tween**<`Tween`\>(`target: T`): `Tween`
___


**`zh`** 
tween 是一个工具函数，帮助实例化 Tween 实例。



**`example`**

```ts

tween(this.node)
  .to(1, {scale: new Vec3(2, 2, 2), position: new Vec3(5, 5, 5)})
  .call(() => { console.log('This is a callback'); })
  .by(1, {scale: new Vec3(-1, -1, -1)}, {easing: 'sineOutIn'})
  .start()

```


#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `T` | 缓动的目标  |

#### Returns `Tween` Tween 实例
___


##### Defined in &nbsp;   [cocos/tween/tween.ts:472](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L472)&nbsp;

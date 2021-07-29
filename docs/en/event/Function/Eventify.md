## Functions: Eventify

### Eventify


___
▸ **Eventify**<`Constructor`\>(`base: Constructor`): `Constructor`
___


**`en`** Generate a new class from the given base class, after polyfill all functionalities in [[IEventified]] as if it's extended from [[EventTarget]]



**`example`**

```ts


class Base { say() { console.log('Hello!'); } }
class MyClass extends Eventify(Base) { }
function (o: MyClass) {
    o.say(); // Ok: Extend from `Base`
    o.emit('sing', 'The ghost'); // Ok: `MyClass` implements IEventified
}


```


#### Type parameters

| Name |
| :------ |
| `TBase` |

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `base` | `Constructor` | The base class  |

#### Returns `Constructor` 
___


##### Defined in &nbsp;   [cocos/core/event/eventify.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L158)&nbsp;

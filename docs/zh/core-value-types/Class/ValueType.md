
## Class: ValueType






**`zh`** 所有值类型的基类。



<div class="table-of-content">
<h2>Table of contents</h2>


### Methods

- [ clone](#clone)
- [ equals](#equals)
- [ set](#set)
- [ toString](#toString)
</div>

## Methods

### clone

<div style="margin-left: 10px;">

▸   **clone**<`ValueType`\> : `ValueType`



**`zh`** 
克隆当前值。克隆的结果值应与当前值相等，即满足 `this.equals(this, value.clone())`。
本方法的基类版本简单地返回 `this`；
派生类**必须**重写本方法，并且返回的对象不应当为 `this`，即满足 `this !== this.clone()`。




##### Returns `ValueType`
</div>

##### Defined in &nbsp;   [cocos/core/value-types/value-type.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/value-types/value-type.ts#L52)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: this`) : `boolean`



**`zh`** 
判断当前值是否与指定值相等。此判断应当具有交换性，即满足 `this.equals(other) === other.equals(this)`。
本方法的基类版本简单地返回 `false`。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `this` | 相比较的值。  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/value-types/value-type.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/value-types/value-type.ts#L68)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸   **set**<`void`\>(`other: this`) : `void`



**`zh`** 
赋值当前值使其与指定值相等。
本方法的基类版本简单地返回 `this`，派生类**必须**重写本方法。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `this` | The other object  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/value-types/value-type.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/value-types/value-type.ts#L82)&nbsp;
___
### toString

<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`



**`zh`** 
返回当前值的字符串表示。
本方法的基类版本返回空字符串。




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/value-types/value-type.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/value-types/value-type.ts#L95)&nbsp;
___
<!---->




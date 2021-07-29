
## Class: ValueType







**`en`** The base class of all value types.


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




**`en`** 
Clone the current object. The clone result of the object should be equal to the current object, i.e. satisfy `this.equals(this, value.clone())`.
The base version of this method do nothing and returns `this'.
The derived class **must** rewrite this method and the returned object should not be `this`, i.e. satisfy `this !== this.clone()`.




<!---->
<!--    #### Returns `ValueType` The cloned object
-->
<!---->


##### Returns `ValueType`




</div>

##### Defined in &nbsp;   [cocos/core/value-types/value-type.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/value-types/value-type.ts#L52)&nbsp;
___
### equals
<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: this`) : `boolean`




**`en`** 
Check whether the current object is equal to the specified object.
This check should be interchangeable, i.e. satisfy `this.equals(other) === other.equals(this)`.
The base version of this method will returns `false'.




<!---->
<!--    #### Returns `boolean` 相等则返回 &#x60;true&#x60;，否则返回 &#x60;false&#x60;。
-->
<!---->

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




**`en`** 
Set the property values of the current object with the given object.
The base version of this method will returns `this' and the derived class **must** rewrite this method.




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** 
Convert the current object to a string.
The base version of this method will returns an empty string.




<!---->
<!--    #### Returns `string` The string representation of the current object
-->
<!---->


##### Returns `string`




</div>

##### Defined in &nbsp;   [cocos/core/value-types/value-type.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/value-types/value-type.ts#L95)&nbsp;
___
<!---->




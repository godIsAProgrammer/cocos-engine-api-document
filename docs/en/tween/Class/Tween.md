
## Class: Tween







**`en`** 
Tween provide a simple and flexible way to action, It's transplanted from cocos creator。





**`example`**

```ts

tween(this.node)
  .to(1, {scale: new Vec3(2, 2, 2), position: new Vec3(5, 5, 5)})
  .call(() => { console.log('This is a callback'); })
  .by(1, {scale: new Vec3(-1, -1, -1), position: new Vec3(-5, -5, -5)}, {easing: 'sineOutIn'})
  .start()

```


<div class="table-of-content">
<h2>Table of contents</h2>


### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  stopAllByTarget](#stopAllByTarget)
- [ **`static`**  stopAllByTag](#stopAllByTag)
- [ **`static`**  stopAll](#stopAll)
- [ by](#by)
- [ call](#call)
- [ clone](#clone)
- [ delay](#delay)
- [ hide](#hide)
- [ parallel](#parallel)
- [ removeSelf](#removeSelf)
- [ repeat](#repeat)
- [ repeatForever](#repeatForever)
- [ reverseTime](#reverseTime)
- [ sequence](#sequence)
- [ set](#set)
- [ show](#show)
- [ start](#start)
- [ stop](#stop)
- [ tag](#tag)
- [ target](#target)
- [ then](#then)
- [ to](#to)
- [ union](#union)
</div>

## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Tween**(`target: T | null`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `target` | `` |





</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L66)&nbsp;


---

<!---->
## Methods

### stopAllByTarget
<div style="margin-left: 10px;">

▸ `static`  **stopAllByTarget**<`void`\>(`target: undefined | object`) : `void`




**`en`** 
Stop all tweens by target




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `undefined \| object` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:408](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L408)&nbsp;
___
### stopAllByTag
<div style="margin-left: 10px;">

▸ `static`  **stopAllByTag**<`void`\>(`tag: number, target: undefined | object`) : `void`




**`en`** 
Stop all tweens by tag




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `tag` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `undefined \| object` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:399](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L399)&nbsp;
___
### stopAll
<div style="margin-left: 10px;">

▸ `static`  **stopAll**<`void`\> : `void`




**`en`** 
Stop all tweens




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:390](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L390)&nbsp;
___
### by
<div style="margin-left: 10px;">

▸   **by**<`Tween`\>(`duration: number, props: ConstructorType, opts: ITweenOption`) : `Tween`




**`en`** 
Add an action which calculate with relative value.




**`method`** by




<!---->
<!--    #### Returns `Tween` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `duration` | `number` | 缓动时间，单位为秒  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `props` | `ConstructorType` | 缓动的属性列表  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `opts` | `ITweenOption` | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L197)&nbsp;
___
### call
<div style="margin-left: 10px;">

▸   **call**<`Tween`\>(`callback: Function`) : `Tween`




**`en`** 
Add an callback action.




**`method`** call




<!---->
<!--    #### Returns `Tween` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `Function` | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L244)&nbsp;
___
### clone
<div style="margin-left: 10px;">

▸   **clone**<`Tween`\>(`target: T`) : `Tween`




**`en`** 
Clone a tween.




<!---->
<!--    #### Returns `Tween` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `T` | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L146)&nbsp;
___
### delay
<div style="margin-left: 10px;">

▸   **delay**<`Tween`\>(`duration: number`) : `Tween`




**`en`** 
Add an delay action.




**`method`** delay




<!---->
<!--    #### Returns `Tween` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `duration` | `number` | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L229)&nbsp;
___
### hide
<div style="margin-left: 10px;">

▸   **hide**<`Tween`\> : `Tween`




**`en`** 
Add an hide action, only for node target.




<!---->
<!--    #### Returns `Tween` -->
<!---->


##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:354](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L354)&nbsp;
___
### parallel
<div style="margin-left: 10px;">

▸   **parallel**<`Tween`\>(`args: undefined`) : `Tween`




**`en`** 
Add an parallel action.




<!---->
<!--    #### Returns `Tween` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `args` |  | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:268](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L268)&nbsp;
___
### removeSelf
<div style="margin-left: 10px;">

▸   **removeSelf**<`Tween`\> : `Tween`




**`en`** 
Add an removeSelf action, only for node target.




<!---->
<!--    #### Returns `Tween` -->
<!---->


##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:378](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L378)&nbsp;
___
### repeat
<div style="margin-left: 10px;">

▸   **repeat**<`Tween`\>(`repeatTimes: number, embedTween: Tween`) : `Tween`




**`en`** 
Add an repeat action.
This action will integrate before actions to a sequence action as their parameters.




<!---->
<!--    #### Returns `Tween` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `repeatTimes` | `number` | 重复次数  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `embedTween` | `Tween` | 可选，嵌入 Tween  |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L283)&nbsp;
___
### repeatForever
<div style="margin-left: 10px;">

▸   **repeatForever**<`Tween`\>(`embedTween: Tween`) : `Tween`




**`en`** 
Add an repeat forever action.
This action will integrate before actions to a sequence action as their parameters.




**`method`** repeatForever




<!---->
<!--    #### Returns `Tween` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `embedTween` | `Tween` | 可选，嵌入 Tween  |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L311)&nbsp;
___
### reverseTime
<div style="margin-left: 10px;">

▸   **reverseTime**<`Tween`\>(`embedTween: Tween`) : `Tween`




**`en`** 
Add an reverse time action.
This action will integrate before actions to a sequence action as their parameters.




**`method`** reverseTime




<!---->
<!--    #### Returns `Tween` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `embedTween` | `Tween` | 可选，嵌入 Tween  |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:334](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L334)&nbsp;
___
### sequence
<div style="margin-left: 10px;">

▸   **sequence**<`Tween`\>(`args: undefined`) : `Tween`




**`en`** 
Add an sequence action.




<!---->
<!--    #### Returns `Tween` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `args` |  | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:256](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L256)&nbsp;
___
### set
<div style="margin-left: 10px;">

▸   **set**<`Tween`\>(`props: ConstructorType`) : `Tween`




**`en`** 
Directly set target properties.




**`method`** set




<!---->
<!--    #### Returns `Tween` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `props` | `ConstructorType` | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L214)&nbsp;
___
### show
<div style="margin-left: 10px;">

▸   **show**<`Tween`\> : `Tween`




**`en`** 
Add an show action, only for node target.




<!---->
<!--    #### Returns `Tween` -->
<!---->


##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L366)&nbsp;
___
### start
<div style="margin-left: 10px;">

▸   **start**<`Tween`\> : `Tween`




**`en`** 
Start this tween.




<!---->
<!--    #### Returns `Tween` -->
<!---->


##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L113)&nbsp;
___
### stop
<div style="margin-left: 10px;">

▸   **stop**<`Tween`\> : `Tween`




**`en`** 
Stop this tween.




<!---->
<!--    #### Returns `Tween` -->
<!---->


##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L133)&nbsp;
___
### tag
<div style="margin-left: 10px;">

▸   **tag**<`this`\>(`tag: number`) : `this`




**`en`** Sets tween tag




<!---->
<!--    #### Returns `this` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `tag` | `number` | - |



##### Returns `this`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L76)&nbsp;
___
### target
<div style="margin-left: 10px;">

▸   **target**<`Tween`\>(`target: T`) : `Tween`




**`en`** 
Sets tween target.




<!---->
<!--    #### Returns `Tween` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `T` | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L102)&nbsp;
___
### then
<div style="margin-left: 10px;">

▸   **then**<`Tween`\>(`other: Tween`) : `Tween`




**`en`** 
Insert an action or tween to this sequence.




<!---->
<!--    #### Returns `Tween` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Tween` | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L87)&nbsp;
___
### to
<div style="margin-left: 10px;">

▸   **to**<`Tween`\>(`duration: number, props: ConstructorType, opts: ITweenOption`) : `Tween`




**`en`** 
Add an action which calculate with absolute value.




**`method`** to




<!---->
<!--    #### Returns `Tween` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `duration` | `number` | 缓动时间，单位为秒  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `props` | `ConstructorType` | 缓动的属性列表  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `opts` | `ITweenOption` | - |



##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L176)&nbsp;
___
### union
<div style="margin-left: 10px;">

▸   **union**<`Tween`\> : `Tween`




**`en`** 
Integrate all previous actions to an action.




<!---->
<!--    #### Returns `Tween` -->
<!---->


##### Returns `Tween`




</div>

##### Defined in &nbsp;   [cocos/tween/tween.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/tween.ts#L157)&nbsp;
___
<!---->




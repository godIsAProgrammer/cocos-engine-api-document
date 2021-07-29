
## Class: EventTouch


`extend:`
[Event](docs/zh/event/Class/Event.md)










**`zh`** 
触摸事件。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  ACCELERATION](#ACCELERATION)
- [ **`static`**  KEYBOARD](#KEYBOARD)
- [ **`static`**  MOUSE](#MOUSE)
- [ **`static`**  NONE](#NONE)
- [ **`static`**  TOUCH](#TOUCH)
- [ bubbles](#bubbles)
- [ currentTarget](#currentTarget)
- [ eventPhase](#eventPhase)
- [ propagationImmediateStopped](#propagationImmediateStopped)
- [ propagationStopped](#propagationStopped)
- [ simulate](#simulate)
- [ target](#target)
- [ touch](#touch)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ getAllTouches](#getAllTouches)
- [ getCurrentTarget](#getCurrentTarget)
- [ getDelta](#getDelta)
- [ getDeltaX](#getDeltaX)
- [ getDeltaY](#getDeltaY)
- [ getEventCode](#getEventCode)
- [ getID](#getID)
- [ getLocation](#getLocation)
- [ getLocationInView](#getLocationInView)
- [ getLocationX](#getLocationX)
- [ getLocationY](#getLocationY)
- [ getPreviousLocation](#getPreviousLocation)
- [ getStartLocation](#getStartLocation)
- [ getTouches](#getTouches)
- [ getType](#getType)
- [ getUIDelta](#getUIDelta)
- [ getUILocation](#getUILocation)
- [ getUIStartLocation](#getUIStartLocation)
- [ isStopped](#isStopped)
- [ reuse](#reuse)
- [ setLocation](#setLocation)
- [ unuse](#unuse)
</div>

## Properties


### ACCELERATION
<div style="margin-left: 10px;">



**`zh`** 
加速器事件类型。





• `static` **ACCELERATION**:
`string`  = `"acceleration"`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L84)&nbsp;


___


### KEYBOARD
<div style="margin-left: 10px;">



**`zh`** 
键盘事件类型。





• `static` **KEYBOARD**:
`string`  = `"keyboard"`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L76)&nbsp;


___


### MOUSE
<div style="margin-left: 10px;">



**`zh`** 
鼠标事件类型。





• `static` **MOUSE**:
`string`  = `"mouse"`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L68)&nbsp;


___


### NONE
<div style="margin-left: 10px;">



**`zh`** 
尚未派发事件阶段。





• `static` **NONE**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L95)&nbsp;


___


### TOUCH
<div style="margin-left: 10px;">



**`zh`** 
触摸事件类型。





• `static` **TOUCH**:
`string`  = `"touch"`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L60)&nbsp;


___


### bubbles
<div style="margin-left: 10px;">



**`zh`** 
表示该事件是否进行冒泡。





•  **bubbles**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L143)&nbsp;


___


### currentTarget
<div style="margin-left: 10px;">



**`zh`** 
当前目标。





•  **currentTarget**:
`Object | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L161)&nbsp;


___


### eventPhase
<div style="margin-left: 10px;">



**`zh`** 
事件阶段。





•  **eventPhase**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L177)&nbsp;


___


### propagationImmediateStopped
<div style="margin-left: 10px;">



**`zh`** 
立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。





•  **propagationImmediateStopped**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L196)&nbsp;


___


### propagationStopped
<div style="margin-left: 10px;">



**`zh`** 
停止传递当前事件。





•  **propagationStopped**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L186)&nbsp;


___


### simulate
<div style="margin-left: 10px;">



**`zh`** 表示触摸事件是真实触点触发的还是模拟的





•  **simulate**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:389](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L389)&nbsp;


___


### target
<div style="margin-left: 10px;">



**`zh`** 
最初事件触发的目标。





•  **target**:
`Object | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L152)&nbsp;


___


### touch
<div style="margin-left: 10px;">



**`zh`** 当前触点对象





•  **touch**:
`Touch | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L384)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`zh`** 
事件类型。





•  **type**:
`string` 
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L134)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new EventTouch**(`changedTouches: undefined, bubbles: undefined | false | true, eventCode: undefined | string, touches: undefined`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `changedTouches` | `` |
| `bubbles` | `` |
| `eventCode` | `` |
| `touches` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:395](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L395)&nbsp;


---

<!---->
## Methods

### getAllTouches

<div style="margin-left: 10px;">

▸   **getAllTouches**



**`zh`** 获取所有触摸点的列表。
注意：如果手指行为是 touch end，这个时候列表是没有该手指信息的。如需知道该手指信息，可通过 `getTouches` 获取识别。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:432](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L432)&nbsp;
___
### getCurrentTarget

<div style="margin-left: 10px;">

▸   **getCurrentTarget**



**`zh`** 
获取当前目标节点




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L273)&nbsp;
___
### getDelta

<div style="margin-left: 10px;">

▸   **getDelta**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:515](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L515)&nbsp;
___
### getDeltaX

<div style="margin-left: 10px;">

▸   **getDeltaX**<`number`\> : `number`



**`zh`** 获取触点距离上一次事件移动的 x 轴距离。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:532](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L532)&nbsp;
___
### getDeltaY

<div style="margin-left: 10px;">

▸   **getDeltaY**<`number`\> : `number`



**`zh`** 获取触点距离上一次事件移动的 y 轴距离。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:540](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L540)&nbsp;
___
### getEventCode

<div style="margin-left: 10px;">

▸   **getEventCode**<`string`\> : `string`



**`zh`** 获取触摸事件类型。





##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L413)&nbsp;
___
### getID

<div style="margin-left: 10px;">

▸   **getID**



**`zh`** 获取触点的标识 ID，可以用来在多点触摸中跟踪触点。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L506)&nbsp;
___
### getLocation

<div style="margin-left: 10px;">

▸   **getLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取触点位置。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:453](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L453)&nbsp;
___
### getLocationInView

<div style="margin-left: 10px;">

▸   **getLocationInView**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取当前触点在游戏窗口中的位置。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:471](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L471)&nbsp;
___
### getLocationX

<div style="margin-left: 10px;">

▸   **getLocationX**<`number`\> : `number`



**`zh`** 获取当前触点 X 轴位置。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:548](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L548)&nbsp;
___
### getLocationY

<div style="margin-left: 10px;">

▸   **getLocationY**<`number`\> : `number`



**`zh`** 获取当前触点 Y 轴位置。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:556](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L556)&nbsp;
___
### getPreviousLocation

<div style="margin-left: 10px;">

▸   **getPreviousLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:480](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L480)&nbsp;
___
### getStartLocation

<div style="margin-left: 10px;">

▸   **getStartLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取触点落下时的位置对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:489](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L489)&nbsp;
___
### getTouches

<div style="margin-left: 10px;">

▸   **getTouches**



**`zh`** 获取有变动的触摸点的列表。
注意：第一根手指按下不动，接着按第二根手指，这时候触点信息就只有变动的这根手指（第二根手指）的信息。
如果需要获取全部手指的信息，请使用 `getAllTouches`。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:423](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L423)&nbsp;
___
### getType

<div style="margin-left: 10px;">

▸   **getType**<`string`\> : `string`



**`zh`** 
获取事件类型。





##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:283](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L283)&nbsp;
___
### getUIDelta

<div style="margin-left: 10px;">

▸   **getUIDelta**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取触点距离上一次事件 UI 世界下移动的距离对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:524](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L524)&nbsp;
___
### getUILocation

<div style="margin-left: 10px;">

▸   **getUILocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取 UI 坐标系下的触点位置。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:462](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L462)&nbsp;
___
### getUIStartLocation

<div style="margin-left: 10px;">

▸   **getUIStartLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取触点落下时的 UI 世界下位置对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:498](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L498)&nbsp;
___
### isStopped

<div style="margin-left: 10px;">

▸   **isStopped**<`boolean`\> : `boolean`



**`zh`** 
检查该事件是否已经停止传递。





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L260)&nbsp;
___
### reuse

<div style="margin-left: 10px;">

▸   **reuse**<`void`\>(`type: string, bubbles: undefined | false | true`) : `void`



**`zh`** 
重新初始化让对象池中取出的事件可再次使用。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | The name of the event (case-sensitive), e.g. "click", "fire", or "submit"  |
| `bubbles` | `undefined \| false \| true` | A boolean indicating whether the event bubbles up through the tree or not  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L231)&nbsp;
___
### setLocation

<div style="margin-left: 10px;">

▸   **setLocation**<`void`\>(`x: number, y: number`) : `void`



**`zh`** 设置当前触点位置



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The current touch location on the x axis  |
| `y` | `number` | The current touch location on the y axis  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:442](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L442)&nbsp;
___
### unuse

<div style="margin-left: 10px;">

▸   **unuse**<`void`\> : `void`



**`zh`** 
重置事件对象以便在对象池中存储。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L214)&nbsp;
___
<!---->




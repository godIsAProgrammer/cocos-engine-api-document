
## Class: EventMouse


`extend:`
[Event](docs/zh/event/Class/Event.md)










**`zh`** 鼠标事件类型



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
- [ eventType](#eventType)
- [ movementX](#movementX)
- [ movementY](#movementY)
- [ propagationImmediateStopped](#propagationImmediateStopped)
- [ propagationStopped](#propagationStopped)
- [ target](#target)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ getButton](#getButton)
- [ getCurrentTarget](#getCurrentTarget)
- [ getDelta](#getDelta)
- [ getDeltaX](#getDeltaX)
- [ getDeltaY](#getDeltaY)
- [ getLocation](#getLocation)
- [ getLocationInView](#getLocationInView)
- [ getLocationX](#getLocationX)
- [ getLocationY](#getLocationY)
- [ getPreviousLocation](#getPreviousLocation)
- [ getScrollX](#getScrollX)
- [ getScrollY](#getScrollY)
- [ getType](#getType)
- [ getUIDelta](#getUIDelta)
- [ getUIDeltaX](#getUIDeltaX)
- [ getUIDeltaY](#getUIDeltaY)
- [ getUILocation](#getUILocation)
- [ getUILocationX](#getUILocationX)
- [ getUILocationY](#getUILocationY)
- [ getUIPreviousLocation](#getUIPreviousLocation)
- [ isStopped](#isStopped)
- [ reuse](#reuse)
- [ setButton](#setButton)
- [ setLocation](#setLocation)
- [ setScrollData](#setScrollData)
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


### eventType
<div style="margin-left: 10px;">



**`zh`** 鼠标事件类型，可以是 UP, DOWN, MOVE, CANCELED。





•  **eventType**:
`string` 
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L115)&nbsp;


___


### movementX
<div style="margin-left: 10px;">



**`zh`** 鼠标在 UI 坐标系下 X 轴上的移动距离





•  **movementX**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L103)&nbsp;


___


### movementY
<div style="margin-left: 10px;">



**`zh`** 鼠标在 UI 坐标系下 Y 轴上的移动距离





•  **movementY**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L109)&nbsp;


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


### target
<div style="margin-left: 10px;">



**`zh`** 
最初事件触发的目标。





•  **target**:
`Object | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/event/event.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/event.ts#L152)&nbsp;


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

• **new EventMouse**(`eventType: string, bubbles: undefined | false | true, prevLoc: Vec2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `bubbles` | `` |
| `prevLoc` | `Vec2` |
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L129)&nbsp;


---

<!---->
## Methods

### getButton

<div style="margin-left: 10px;">

▸   **getButton**<`number`\> : `number`



**`zh`** 获取鼠标按键。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L327)&nbsp;
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



**`zh`** 获取鼠标距离上一次事件移动的距离对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L259)&nbsp;
___
### getDeltaX

<div style="margin-left: 10px;">

▸   **getDeltaX**<`number`\> : `number`



**`zh`** 获取鼠标距离上一次事件移动的 X 轴距离。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L272)&nbsp;
___
### getDeltaY

<div style="margin-left: 10px;">

▸   **getDeltaY**<`number`\> : `number`



**`zh`** 获取鼠标距离上一次事件移动的 Y 轴距离。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:280](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L280)&nbsp;
___
### getLocation

<div style="margin-left: 10px;">

▸   **getLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取鼠标相对于左下角位置对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:187](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L187)&nbsp;
___
### getLocationInView

<div style="margin-left: 10px;">

▸   **getLocationInView**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L201)&nbsp;
___
### getLocationX

<div style="margin-left: 10px;">

▸   **getLocationX**<`number`\> : `number`



**`zh`** 获取鼠标当前 X 轴位置。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:335](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L335)&nbsp;
___
### getLocationY

<div style="margin-left: 10px;">

▸   **getLocationY**<`number`\> : `number`



**`zh`** 获取鼠标当前 Y 轴位置。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L343)&nbsp;
___
### getPreviousLocation

<div style="margin-left: 10px;">

▸   **getPreviousLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L230)&nbsp;
___
### getScrollX

<div style="margin-left: 10px;">

▸   **getScrollX**<`number`\> : `number`



**`zh`** 获取鼠标滚动的 X 轴距离，只有滚动时才有效。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L159)&nbsp;
___
### getScrollY

<div style="margin-left: 10px;">

▸   **getScrollY**<`number`\> : `number`



**`zh`** 获取滚轮滚动的 Y 轴距离，只有滚动时才有效。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:167](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L167)&nbsp;
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



**`zh`** 获取鼠标距离上一次事件移动在 UI 坐标系下的距离对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L289)&nbsp;
___
### getUIDeltaX

<div style="margin-left: 10px;">

▸   **getUIDeltaX**<`number`\> : `number`



**`zh`** 获取鼠标距离上一次事件移动在 UI 坐标系下的 X 轴距离。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L302)&nbsp;
___
### getUIDeltaY

<div style="margin-left: 10px;">

▸   **getUIDeltaY**<`number`\> : `number`



**`zh`** 获取鼠标距离上一次事件移动在 UI 坐标系下的 Y 轴距离。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L310)&nbsp;
___
### getUILocation

<div style="margin-left: 10px;">

▸   **getUILocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取当前事件在 UI 窗口内的坐标位置，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L215)&nbsp;
___
### getUILocationX

<div style="margin-left: 10px;">

▸   **getUILocationX**<`number`\> : `number`



**`zh`** 获取鼠标当前 X 轴位置。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L351)&nbsp;
___
### getUILocationY

<div style="margin-left: 10px;">

▸   **getUILocationY**<`number`\> : `number`



**`zh`** 获取鼠标当前 Y 轴位置。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:360](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L360)&nbsp;
___
### getUIPreviousLocation

<div style="margin-left: 10px;">

▸   **getUIPreviousLocation**<`Vec2`\>(`out: Vec2`) : `Vec2`



**`zh`** 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | Pass the out object to avoid object creation, very good practice  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L244)&nbsp;
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
### setButton

<div style="margin-left: 10px;">

▸   **setButton**<`void`\>(`button: number`) : `void`



**`zh`** 设置鼠标按键。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `button` | `number` | The button code  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L319)&nbsp;
___
### setLocation

<div style="margin-left: 10px;">

▸   **setLocation**<`void`\>(`x: number, y: number`) : `void`



**`zh`** 设置当前鼠标位置。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | The location on x axis  |
| `y` | `number` | The location on y axis  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L177)&nbsp;
___
### setScrollData

<div style="margin-left: 10px;">

▸   **setScrollData**<`void`\>(`scrollX: number, scrollY: number`) : `void`



**`zh`** 设置鼠标滚轮的滚动数据。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scrollX` | `number` | The scroll value on x axis  |
| `scrollY` | `number` | The scroll value on y axis  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/event-manager/events.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/event-manager/events.ts#L150)&nbsp;
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




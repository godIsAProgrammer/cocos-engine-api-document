
## Class: View




`extend: `
[Empty](docs/zh/event/Class/Empty.md)&nbsp;
[IEventified](docs/zh/event/Interface/IEventified.md)&nbsp;








**`zh`** View 代表游戏窗口视图，它的核心功能包括：
 - 对所有 UI Canvas 进行设计分辨率适配。
 - 提供窗口视图的交互，比如监听 resize 事件，控制 retina 屏幕适配，等等。
 - 控制 Canvas 节点相对于外层 DOM 节点的缩放和偏移。
引擎会自动初始化它的单例对象 {{view}}，所以你不需要实例化任何 View，只需要直接使用 `view.methodName();`



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  instance](#instance)

### Constructors

- [ constructor](#constructor)

### Methods

- [ adjustViewportMeta](#adjustViewportMeta)
- [ convertToLocationInView](#convertToLocationInView)
- [ emit](#emit)
- [ enableAutoFullScreen](#enableAutoFullScreen)
- [ enableRetina](#enableRetina)
- [ getCanvasSize](#getCanvasSize)
- [ getDesignResolutionSize](#getDesignResolutionSize)
- [ getDevicePixelRatio](#getDevicePixelRatio)
- [ getFrameSize](#getFrameSize)
- [ getResolutionPolicy](#getResolutionPolicy)
- [ getScaleX](#getScaleX)
- [ getScaleY](#getScaleY)
- [ getViewportRect](#getViewportRect)
- [ getVisibleOrigin](#getVisibleOrigin)
- [ getVisibleOriginInPixel](#getVisibleOriginInPixel)
- [ getVisibleSize](#getVisibleSize)
- [ getVisibleSizeInPixel](#getVisibleSizeInPixel)
- [ hasEventListener](#hasEventListener)
- [ init](#init)
- [ isAutoFullScreenEnabled](#isAutoFullScreenEnabled)
- [ isRetinaEnabled](#isRetinaEnabled)
- [ off](#off)
- [ on](#on)
- [ once](#once)
- [ removeAll](#removeAll)
- [ resizeWithBrowserSize](#resizeWithBrowserSize)
- [ setCanvasSize](#setCanvasSize)
- [ setDesignResolutionSize](#setDesignResolutionSize)
- [ setFrameSize](#setFrameSize)
- [ setOrientation](#setOrientation)
- [ setRealPixelResolution](#setRealPixelResolution)
- [ setResizeCallback](#setResizeCallback)
- [ setResolutionPolicy](#setResolutionPolicy)
- [ targetOff](#targetOff)
</div>

## Properties


### instance
<div style="margin-left: 10px;">




• `static` **instance**:
`View` 
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L121)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new View**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L146)&nbsp;


---

<!---->
## Methods

### adjustViewportMeta

<div style="margin-left: 10px;">

▸   **adjustViewportMeta**<`void`\>(`enabled: boolean`) : `void`



**`zh`** 设置引擎是否调整 viewport meta 来配合屏幕适配。
默认设置为启动，我们强烈建议你不要将它设置为关闭。
即使当它启动时，你仍然能够设置你的 viewport meta，它不会被覆盖。
仅在 Web 模式下有效



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | Enable automatic modification to "viewport" meta  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L294)&nbsp;
___
### convertToLocationInView

<div style="margin-left: 10px;">

▸   **convertToLocationInView**<`Vec2`\>(`tx: number, ty: number, relatedPos: any, out: Vec2`) : `Vec2`



**`zh`** 将屏幕坐标转换为游戏视图下的坐标。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `tx` | `number` | The X axis translation  |
| `ty` | `number` | The Y axis translation  |
| `relatedPos` | `any` | The related position object including "left", "top", "width", "height" informations  |
| `out` | `Vec2` | The out object to save the conversion result  |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:660](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L660)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`



**`zh`** 派发一个指定事件，并传递需要的参数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | event type  |
| `arg0` | `any` | - |
| `arg1` | `any` | - |
| `arg2` | `any` | - |
| `arg3` | `any` | - |
| `arg4` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L141)&nbsp;
___
### enableAutoFullScreen

<div style="margin-left: 10px;">

▸   **enableAutoFullScreen**<`void`\>(`enabled: boolean`) : `void`



**`zh`** 启动时，移动端游戏会在移动端自动尝试进入全屏模式。
你能够传入 true 为参数去启动它，用 false 参数来关闭它。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | Enable or disable auto full screen on mobile devices  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:332](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L332)&nbsp;
___
### enableRetina

<div style="margin-left: 10px;">

▸   **enableRetina**<`void`\>(`enabled: boolean`) : `void`



**`zh`** 对于 Apple 这种支持 Retina 显示的设备上默认进行优化而其他类型设备默认不进行优化，
它仅会在你调用 setDesignResolutionPolicy 方法时有影响。
仅在 Web 模式下有效。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | Enable or disable retina display  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L308)&nbsp;
___
### getCanvasSize

<div style="margin-left: 10px;">

▸   **getCanvasSize**<`Size`\> : `Size`



**`zh`** 返回视图中 canvas 的尺寸。
在 native 平台下，它返回全屏视图下屏幕的尺寸。
在 Web 平台下，它返回 canvas 元素尺寸。





##### Returns `Size`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:393](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L393)&nbsp;
___
### getDesignResolutionSize

<div style="margin-left: 10px;">

▸   **getDesignResolutionSize**<`Size`\> : `Size`



**`zh`** 返回视图的设计分辨率。
默认下分辨率尺寸同 `getFrameSize` 方法相同





##### Returns `Size`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:585](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L585)&nbsp;
___
### getDevicePixelRatio

<div style="margin-left: 10px;">

▸   **getDevicePixelRatio**<`number`\> : `number`



**`zh`** 返回设备或浏览器像素比例。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:648](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L648)&nbsp;
___
### getFrameSize

<div style="margin-left: 10px;">

▸   **getFrameSize**<`Size`\> : `Size`



**`zh`** 返回视图中边框尺寸。
在 native 平台下，它返回全屏视图下屏幕的尺寸。
在 web 平台下，它返回 canvas 元素的外层 DOM 元素尺寸。





##### Returns `Size`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:406](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L406)&nbsp;
___
### getResolutionPolicy

<div style="margin-left: 10px;">

▸   **getResolutionPolicy**<`ResolutionPolicy`\> : `ResolutionPolicy`



**`zh`** 返回当前分辨率方案



**`see`** {{ResolutionPolicy}}





##### Returns `ResolutionPolicy`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L465)&nbsp;
___
### getScaleX

<div style="margin-left: 10px;">

▸   **getScaleX**<`number`\> : `number`



**`zh`** 返回横轴的缩放比，这个缩放比是将画布像素分辨率放到设计分辨率的比例。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:632](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L632)&nbsp;
___
### getScaleY

<div style="margin-left: 10px;">

▸   **getScaleY**<`number`\> : `number`



**`zh`** 返回纵轴的缩放比，这个缩放比是将画布像素分辨率缩放到设计分辨率的比例。





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:640](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L640)&nbsp;
___
### getViewportRect

<div style="margin-left: 10px;">

▸   **getViewportRect**<`Rect`\> : `Rect`



**`zh`** 返回视窗剪裁区域。





##### Returns `Rect`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:624](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L624)&nbsp;
___
### getVisibleOrigin

<div style="margin-left: 10px;">

▸   **getVisibleOrigin**<`Vec2`\> : `Vec2`



**`zh`** 返回视图窗口可见区域原点。





##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L447)&nbsp;
___
### getVisibleOriginInPixel

<div style="margin-left: 10px;">

▸   **getVisibleOriginInPixel**<`Vec2`\> : `Vec2`



**`zh`** 返回视图窗口可见区域像素原点。





##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L455)&nbsp;
___
### getVisibleSize

<div style="margin-left: 10px;">

▸   **getVisibleSize**<`Size`\> : `Size`



**`zh`** 返回视图窗口可见区域尺寸。





##### Returns `Size`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L430)&nbsp;
___
### getVisibleSizeInPixel

<div style="margin-left: 10px;">

▸   **getVisibleSizeInPixel**<`Size`\> : `Size`



**`zh`** 返回视图窗口可见区域像素尺寸。





##### Returns `Size`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:438](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L438)&nbsp;
___
### hasEventListener

<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`



**`zh`** 检查指定事件是否已注册回调。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Event type.  |
| `callback` | `undefined \| ` | Callback function when event triggered.  |
| `target` | `any` | Callback callee.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L52)&nbsp;
___
### init

<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L197)&nbsp;
___
### isAutoFullScreenEnabled

<div style="margin-left: 10px;">

▸   **isAutoFullScreenEnabled**<`boolean`\> : `boolean`



**`zh`** 检查自动进入全屏模式是否启动。
仅在 Web 模式下有效。




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:353](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L353)&nbsp;
___
### isRetinaEnabled

<div style="margin-left: 10px;">

▸   **isRetinaEnabled**<`boolean`\> : `boolean`



**`zh`** 检查是否对 Retina 显示设备进行优化。
仅在 Web 模式下有效。





##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L319)&nbsp;
___
### off

<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: EventType, callback: TFunction, thisArg: any`) : `void`



**`zh`** 
删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。




**`example`**

```ts

import { log } from 'cc';
// register fire eventListener
var callback = eventTarget.on('fire', function () {
    log("fire in the hole");
}, target);
// remove fire event listener
eventTarget.off('fire', callback, target);
// remove all fire event listeners
eventTarget.off('fire');

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type being removed.  |
| `callback` | `TFunction` | The callback to remove.  |
| `thisArg` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L114)&nbsp;
___
### on

<div style="margin-left: 10px;">

▸   **on**(`type: EventType, callback: TFunction, thisArg: any, once: undefined | false | true`)



**`zh`** 
注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。




**`example`**

```ts

import { log } from 'cc';
eventTarget.on('fire', function () {
    log("fire in the hole");
}, node);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `thisArg` | `any` | The target (this object) to invoke the callback, can be null  |
| `once` | `undefined \| false \| true` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L72)&nbsp;
___
### once

<div style="margin-left: 10px;">

▸   **once**(`type: EventType, callback: TFunction, thisArg: any`)



**`zh`** 
注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。




**`example`**

```ts

import { log } from 'cc';
eventTarget.once('fire', function () {
    log("this is the callback and will be invoked only once");
}, node);

```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |
| `thisArg` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L91)&nbsp;
___
### removeAll

<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`



**`zh`** 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The event type or target with which the listeners will be removed  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L133)&nbsp;
___
### resizeWithBrowserSize

<div style="margin-left: 10px;">

▸   **resizeWithBrowserSize**<`void`\>(`enabled: boolean`) : `void`



**`zh`** 设置当发现浏览器的尺寸改变时，是否自动调整 canvas 尺寸大小。
仅在 Web 模式下有效。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | Whether enable automatic resize with browser's resize event  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L228)&nbsp;
___
### setCanvasSize

<div style="margin-left: 10px;">

▸   **setCanvasSize**<`void`\>(`width: number, height: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |
| `height` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:365](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L365)&nbsp;
___
### setDesignResolutionSize

<div style="margin-left: 10px;">

▸   **setDesignResolutionSize**<`void`\>(`width: number, height: number, resolutionPolicy: ResolutionPolicy | number`) : `void`



**`zh`** 通过设置设计分辨率和匹配模式来进行游戏画面的屏幕适配。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | Design resolution width.  |
| `height` | `number` | Design resolution height.  |
| `resolutionPolicy` | `ResolutionPolicy \| number` | The resolution policy desired  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:512](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L512)&nbsp;
___
### setFrameSize

<div style="margin-left: 10px;">

▸   **setFrameSize**<`void`\>(`width: number, height: number`) : `void`



**`zh`** 在 native 平台下，设置视图框架尺寸。
在 web 平台下，设置 canvas 外层 DOM 元素尺寸。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |
| `height` | `number` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L418)&nbsp;
___
### setOrientation

<div style="margin-left: 10px;">

▸   **setOrientation**<`void`\>(`orientation: number`) : `void`



**`zh`** 设置游戏屏幕朝向，它能够是横版，竖版或自动。
当设置为横版或竖版，并且屏幕的宽高比例不匹配时，
`view` 会自动用 CSS 旋转游戏场景的 canvas，
这个方法不会对 native 部分产生任何影响，对于 native 而言，你需要在应用设置中的设置排版。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `orientation` | `number` | Possible values: macro.ORIENTATION_LANDSCAPE | macro.ORIENTATION_PORTRAIT | macro.ORIENTATION_AUTO  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L275)&nbsp;
___
### setRealPixelResolution

<div style="margin-left: 10px;">

▸   **setRealPixelResolution**<`void`\>(`width: number, height: number, resolutionPolicy: ResolutionPolicy | number`) : `void`



**`zh`** 设置容器（container）需要的像素分辨率并且适配相应分辨率的游戏内容。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | Design resolution width.  |
| `height` | `number` | Design resolution height.  |
| `resolutionPolicy` | `ResolutionPolicy \| number` | The resolution policy desired  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L604)&nbsp;
___
### setResizeCallback

<div style="margin-left: 10px;">

▸   **setResizeCallback**<`void`\>(`callback:  | null`) : `void`



**`zh`** 设置 `view` 调整视窗尺寸行为的回调函数，
这个回调函数会在应用适配模式之前被调用，
因此你可以在这个回调函数内添加任意附加改变，
仅在 Web 平台下有效。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | ` \| null` | The callback function  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:256](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L256)&nbsp;
___
### setResolutionPolicy

<div style="margin-left: 10px;">

▸   **setResolutionPolicy**<`void`\>(`resolutionPolicy: ResolutionPolicy | number`) : `void`



**`zh`** 设置当前分辨率模式



**`see`** {{ResolutionPolicy}}




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `resolutionPolicy` | `ResolutionPolicy \| number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:474](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L474)&nbsp;
___
### targetOff

<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`typeOrTarget: any`) : `void`



**`zh`** 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The target to be searched for all related listeners  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L126)&nbsp;
___
<!---->




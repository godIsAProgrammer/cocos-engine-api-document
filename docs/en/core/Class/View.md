
## Class: View




`extend: `
[Empty](docs/en/event/Class/Empty.md)&nbsp;
[IEventified](docs/en/event/Interface/IEventified.md)&nbsp;










**`en`** View represents the game window.<br/>
It's main task include: <br/>
 - Apply the design resolution policy to the UI Canvas<br/>
 - Provide interaction with the window, like resize event on web, retina display support, etc...<br/>
 - Manage the scale and translation of canvas related to the frame on Web<br/>
<br/>
With {{view}} as its singleton initialized by the engine, you don't need to call any constructor or create functions,<br/>
the standard way to use it is by calling:<br/>
 - view.methodName(); <br/>


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
</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L146)&nbsp;


---

<!---->
## Methods

### adjustViewportMeta
<div style="margin-left: 10px;">

▸   **adjustViewportMeta**<`void`\>(`enabled: boolean`) : `void`




**`en`** 
Sets whether the engine modify the "viewport" meta in your web page.<br/>
It's enabled by default, we strongly suggest you not to disable it.<br/>
And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
Only useful on web




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** Returns the real location in view for a translation based on a related position




<!---->
<!--    #### Returns `Vec2` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `tx` | `number` | The X axis translation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ty` | `number` | The Y axis translation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `relatedPos` | `any` | The related position object including "left", "top", "width", "height" informations  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec2` | The out object to save the conversion result  |



##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:660](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L660)&nbsp;
___
### emit
<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`




**`en`** Trigger an event directly with the event name and necessary arguments.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | event type  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg0` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg1` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg2` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg3` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `arg4` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L141)&nbsp;
___
### enableAutoFullScreen
<div style="margin-left: 10px;">

▸   **enableAutoFullScreen**<`void`\>(`enabled: boolean`) : `void`




**`en`** 
If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
You can pass true as parameter to enable it and disable it by passing false.<br/>
Only useful on web




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** 
Retina support is enabled by default for Apple device but disabled for other devices,<br/>
it takes effect only when you called setDesignResolutionPolicy<br/>
Only useful on web




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** 
Returns the canvas size of the view.<br/>
On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
On web, it returns the size of the canvas element.




<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:393](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L393)&nbsp;
___
### getDesignResolutionSize
<div style="margin-left: 10px;">

▸   **getDesignResolutionSize**<`Size`\> : `Size`




**`en`** Returns the designed size for the view.
Default resolution size is the same as 'getFrameSize'.




<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:585](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L585)&nbsp;
___
### getDevicePixelRatio
<div style="margin-left: 10px;">

▸   **getDevicePixelRatio**<`number`\> : `number`




**`en`** Returns device pixel ratio for retina display.




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:648](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L648)&nbsp;
___
### getFrameSize
<div style="margin-left: 10px;">

▸   **getFrameSize**<`Size`\> : `Size`




**`en`** 
Returns the frame size of the view.<br/>
On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
On web, it returns the size of the canvas's outer DOM element.




<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:406](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L406)&nbsp;
___
### getResolutionPolicy
<div style="margin-left: 10px;">

▸   **getResolutionPolicy**<`ResolutionPolicy`\> : `ResolutionPolicy`




**`en`** Returns the current resolution policy




**`see`** {{ResolutionPolicy}}





<!---->
<!--    #### Returns `ResolutionPolicy` -->
<!---->


##### Returns `ResolutionPolicy`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L465)&nbsp;
___
### getScaleX
<div style="margin-left: 10px;">

▸   **getScaleX**<`number`\> : `number`




**`en`** Returns scale factor of the horizontal direction (X axis).




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:632](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L632)&nbsp;
___
### getScaleY
<div style="margin-left: 10px;">

▸   **getScaleY**<`number`\> : `number`




**`en`** Returns scale factor of the vertical direction (Y axis).




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:640](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L640)&nbsp;
___
### getViewportRect
<div style="margin-left: 10px;">

▸   **getViewportRect**<`Rect`\> : `Rect`




**`en`** Returns the view port rectangle.




<!---->
<!--    #### Returns `Rect` -->
<!---->


##### Returns `Rect`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:624](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L624)&nbsp;
___
### getVisibleOrigin
<div style="margin-left: 10px;">

▸   **getVisibleOrigin**<`Vec2`\> : `Vec2`




**`en`** Returns the visible origin of the view port.




<!---->
<!--    #### Returns `Vec2` -->
<!---->


##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L447)&nbsp;
___
### getVisibleOriginInPixel
<div style="margin-left: 10px;">

▸   **getVisibleOriginInPixel**<`Vec2`\> : `Vec2`




**`en`** Returns the visible origin of the view port.




<!---->
<!--    #### Returns `Vec2` -->
<!---->


##### Returns `Vec2`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L455)&nbsp;
___
### getVisibleSize
<div style="margin-left: 10px;">

▸   **getVisibleSize**<`Size`\> : `Size`




**`en`** Returns the visible area size of the view port.




<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L430)&nbsp;
___
### getVisibleSizeInPixel
<div style="margin-left: 10px;">

▸   **getVisibleSizeInPixel**<`Size`\> : `Size`




**`en`** Returns the visible area size of the view port.




<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:438](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L438)&nbsp;
___
### hasEventListener
<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`




**`en`** Checks whether there is correspond event listener registered on the given event.




<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Event type.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `undefined \| ` | Callback function when event triggered.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | Callback callee.  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L52)&nbsp;
___
### init
<div style="margin-left: 10px;">

▸   **init**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L197)&nbsp;
___
### isAutoFullScreenEnabled
<div style="margin-left: 10px;">

▸   **isAutoFullScreenEnabled**<`boolean`\> : `boolean`




**`en`** 
Check whether auto full screen is enabled.<br/>
Only useful on web




<!---->
<!--    #### Returns `boolean` Auto full screen enabled or not
-->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:353](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L353)&nbsp;
___
### isRetinaEnabled
<div style="margin-left: 10px;">

▸   **isRetinaEnabled**<`boolean`\> : `boolean`




**`en`** 
Check whether retina display is enabled.<br/>
Only useful on web




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L319)&nbsp;
___
### off
<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: EventType, callback: TFunction, thisArg: any`) : `void`




**`en`** 
Removes the listeners previously registered with the same type, callback, target and or useCapture,
if only type is passed as parameter, all listeners registered with that type will be removed.




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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type being removed.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback to remove.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L114)&nbsp;
___
### on
<div style="margin-left: 10px;">

▸   **on**(`type: EventType, callback: TFunction, thisArg: any, once: undefined | false | true`)




**`en`** 
Register an callback of a specific event type on the EventTarget.
This type of event should be triggered via `emit`.




**`example`**

```ts

import { log } from 'cc';
eventTarget.on('fire', function () {
    log("fire in the hole");
}, node);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | The target (this object) to invoke the callback, can be null  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `once` | `undefined \| false \| true` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L72)&nbsp;
___
### once
<div style="margin-left: 10px;">

▸   **once**(`type: EventType, callback: TFunction, thisArg: any`)




**`en`** 
Register an callback of a specific event type on the EventTarget,
the callback will remove itself after the first time it is triggered.




**`example`**

```ts

import { log } from 'cc';
eventTarget.once('fire', function () {
    log("this is the callback and will be invoked only once");
}, node);

```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | A string representing the event type to listen for.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback that will be invoked when the event is dispatched.                             The callback is ignored if it is a duplicate (the callbacks are unique).  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L91)&nbsp;
___
### removeAll
<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`




**`en`** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** 
Sets whether resize canvas automatically when browser's size changed.<br/>
Useful only on web.




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:365](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L365)&nbsp;
___
### setDesignResolutionSize
<div style="margin-left: 10px;">

▸   **setDesignResolutionSize**<`void`\>(`width: number, height: number, resolutionPolicy: ResolutionPolicy | number`) : `void`




**`en`** Sets the resolution policy with designed view size in points.<br/>
The resolution policy include: <br/>
[1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.<br/>
[2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.<br/>
[3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.<br/>
[4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width<br/>
[5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height<br/>
[ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by ResolutionPolicy<br/>




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | Design resolution width.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `number` | Design resolution height.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `resolutionPolicy` | `ResolutionPolicy \| number` | The resolution policy desired  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:512](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L512)&nbsp;
___
### setFrameSize
<div style="margin-left: 10px;">

▸   **setFrameSize**<`void`\>(`width: number, height: number`) : `void`




**`en`** On native, it sets the frame size of view.<br/>
On web, it sets the size of the canvas's outer DOM element.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `number` |   |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L418)&nbsp;
___
### setOrientation
<div style="margin-left: 10px;">

▸   **setOrientation**<`void`\>(`orientation: number`) : `void`




**`en`** 
Sets the orientation of the game, it can be landscape, portrait or auto.
When set it to landscape or portrait, and screen w/h ratio doesn't fit,
`view` will automatically rotate the game canvas using CSS.
Note that this function doesn't have any effect in native,
in native, you need to set the application orientation in native project settings




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** Sets the container to desired pixel resolution and fit the game content to it.
This function is very useful for adaptation in mobile browsers.
In some HD android devices, the resolution is very high, but its browser performance may not be very good.
In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
But this API can be helpful to set a desired pixel resolution which is in between.
This API will do the following:
    1. Set viewport's width to the desired width in pixel
    2. Set body width to the exact pixel resolution
    3. The resolution policy will be reset with designed view size in points.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | Design resolution width.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `number` | Design resolution height.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `resolutionPolicy` | `ResolutionPolicy \| number` | The resolution policy desired  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/platform/view.ts:604](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/platform/view.ts#L604)&nbsp;
___
### setResizeCallback
<div style="margin-left: 10px;">

▸   **setResizeCallback**<`void`\>(`callback:  | null`) : `void`




**`en`** 
Sets the callback function for `view`'s resize action,<br/>
this callback will be invoked before applying resolution policy, <br/>
so you can do any additional modifications within the callback.<br/>
Useful only on web.




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** Sets the current resolution policy




**`see`** {{ResolutionPolicy}}





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The target to be searched for all related listeners  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L126)&nbsp;
___
<!---->




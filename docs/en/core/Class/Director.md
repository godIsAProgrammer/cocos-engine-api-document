
## Class: Director




`extend: `
[Empty](docs/en/event/Class/Empty.md)&nbsp;
[IEventified](docs/en/event/Interface/IEventified.md)&nbsp;








**`en`** 
<p>
   ATTENTION: USE `director` INSTEAD OF `Director`.<br/>
   `director` is a singleton object which manage your game's logic flow.<br/>
   Since the `director` is a singleton, you don't need to call any constructor or create functions,<br/>
   the standard way to use it is by calling:<br/>
     - `director.methodName();` <br/>

   It creates and handle the main Window and manages how and when to execute the Scenes.<br/>
   <br/>
   The `director` is also responsible for:<br/>
     - initializing the OpenGL context<br/>
     - setting the OpenGL pixel format (default on is RGB565)<br/>
     - setting the OpenGL buffer depth (default on is 0-bit)<br/>
     - setting the color for clear screen (default one is BLACK)<br/>
     - setting the projection (default one is 3D)<br/>
     - setting the orientation (default one is Portrait)<br/>
     <br/>
   <br/>
   The `director` also sets the default OpenGL context:<br/>
     - GL_TEXTURE_2D is enabled<br/>
     - GL_VERTEX_ARRAY is enabled<br/>
     - GL_COLOR_ARRAY is enabled<br/>
     - GL_TEXTURE_COORD_ARRAY is enabled<br/>
</p>
<p>
  `director` also synchronizes timers with the refresh rate of the display.<br/>
  Features and Limitations:<br/>
     - Scheduled timers & drawing are synchronizes with the refresh rate of the display<br/>
     - Only supports animation intervals of 1/60 1/30 & 1/15<br/>
</p>



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  instance](#instance)
- [ root](#root)

### Constructors

- [ constructor](#constructor)


### Methods

- [ calculateDeltaTime](#calculateDeltaTime)
- [ convertToGL](#convertToGL)
- [ convertToUI](#convertToUI)
- [ emit](#emit)
- [ end](#end)
- [ getAnimationInterval](#getAnimationInterval)
- [ getAnimationManager](#getAnimationManager)
- [ getCurrentTime](#getCurrentTime)
- [ getDeltaTime](#getDeltaTime)
- [ getRunningScene](#getRunningScene)
- [ getScene](#getScene)
- [ getScheduler](#getScheduler)
- [ getSystem](#getSystem)
- [ getTotalFrames](#getTotalFrames)
- [ getTotalTime](#getTotalTime)
- [ getWinSize](#getWinSize)
- [ getWinSizeInPixels](#getWinSizeInPixels)
- [ hasEventListener](#hasEventListener)
- [ isPaused](#isPaused)
- [ loadScene](#loadScene)
- [ mainLoop](#mainLoop)
- [ off](#off)
- [ on](#on)
- [ once](#once)
- [ pause](#pause)
- [ preloadScene](#preloadScene)
- [ purgeCachedData](#purgeCachedData)
- [ purgeDirector](#purgeDirector)
- [ registerSystem](#registerSystem)
- [ removeAll](#removeAll)
- [ reset](#reset)
- [ resume](#resume)
- [ runSceneImmediate](#runSceneImmediate)
- [ setAnimationInterval](#setAnimationInterval)
- [ setClearColor](#setClearColor)
- [ setDepthTest](#setDepthTest)
- [ setScheduler](#setScheduler)
- [ startAnimation](#startAnimation)
- [ stopAnimation](#stopAnimation)
- [ targetOff](#targetOff)
- [ unregisterSystem](#unregisterSystem)
</div>

## Properties


### instance
<div style="margin-left: 10px;">




• `static` **instance**:
`Director` 
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:235](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L235)&nbsp;


___


### root
<div style="margin-left: 10px;">




•  **root**:
 ``null | Root`` 
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:702](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L702)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Director**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L250)&nbsp;


---

<!---->
<!---->
## Methods

### calculateDeltaTime

<div style="margin-left: 10px;">

▸   **calculateDeltaTime**<`void`\>(`now: any`) : `void`



**`en`** Calculates delta time since last time it was called, the result is saved to an internal property.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `now` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L290)&nbsp;
___
### convertToGL

<div style="margin-left: 10px;">

▸   **convertToGL**<`Vec2`\>(`uiPoint: Vec2`) : `Vec2`



**`en`** 
Converts a view coordinate to an WebGL coordinate<br/>
Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)<br/>
Implementation can be found in directorWebGL.



**`deprecated`** since v2.0




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `uiPoint` | `Vec2` | - |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:309](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L309)&nbsp;
___
### convertToUI

<div style="margin-left: 10px;">

▸   **convertToUI**<`Vec2`\>(`glPoint: Vec2`) : `Vec2`



**`en`** 
Converts an OpenGL coordinate to a view coordinate<br/>
Useful to convert node points to window points for calls such as glScissor<br/>
Implementation can be found in directorWebGL.



**`deprecated`** since v2.0




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `glPoint` | `Vec2` | - |


##### Returns `Vec2`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:328](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L328)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`



**`en`** Trigger an event directly with the event name and necessary arguments.



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
### end

<div style="margin-left: 10px;">

▸   **end**<`void`\> : `void`



**`en`** End the life of director in the next frame




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:349](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L349)&nbsp;
___
### getAnimationInterval

<div style="margin-left: 10px;">

▸   **getAnimationInterval**<`number`\> : `number`



**`en`** Returns the FPS value. Please use [[Game.setFrameRate]] to control animation interval.



**`deprecated`** since v2.0.





##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:734](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L734)&nbsp;
___
### getAnimationManager

<div style="margin-left: 10px;">

▸   **getAnimationManager**<`any`\> : `any`



**`en`** Returns the `AnimationManager` associated with this director. Please use getSystem(AnimationManager.ID)



**`deprecated`** 





##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:840](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L840)&nbsp;
___
### getCurrentTime

<div style="margin-left: 10px;">

▸   **getCurrentTime**<`number`\> : `number`



**`en`** Returns the current time.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:770](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L770)&nbsp;
___
### getDeltaTime

<div style="margin-left: 10px;">

▸   **getDeltaTime**<`number`\> : `number`



**`en`** Returns the delta time since last frame.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:754](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L754)&nbsp;
___
### getRunningScene

<div style="margin-left: 10px;">

▸   **getRunningScene**



**`en`** Returns current logic Scene.



**`deprecated`** Since v2.0.





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:711](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L711)&nbsp;
___
### getScene

<div style="margin-left: 10px;">

▸   **getScene**



**`en`** Returns current logic Scene.



**`example`**

```ts


import { director } from 'cc';
// This will help you to get the Canvas node in scene
director.getScene().getChildByName('Canvas');


```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:725](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L725)&nbsp;
___
### getScheduler

<div style="margin-left: 10px;">

▸   **getScheduler**<`Scheduler`\> : `Scheduler`



**`en`** Returns the scheduler associated with this director.




##### Returns `Scheduler`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:794](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L794)&nbsp;
___
### getSystem

<div style="margin-left: 10px;">

▸   **getSystem**(`name: string`)



**`en`** get a system.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:831](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L831)&nbsp;
___
### getTotalFrames

<div style="margin-left: 10px;">

▸   **getTotalFrames**<`number`\> : `number`



**`en`** Returns how many frames were called since the director started.




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:778](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L778)&nbsp;
___
### getTotalTime

<div style="margin-left: 10px;">

▸   **getTotalTime**<`number`\> : `number`



**`en`** Returns the total passed time since game start, unit: ms




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:762](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L762)&nbsp;
___
### getWinSize

<div style="margin-left: 10px;">

▸   **getWinSize**<`Size`\> : `Size`



**`en`** 
Returns the size of the WebGL view in points.<br/>
It takes into account any possible rotation (device orientation) of the window.



**`deprecated`** since v2.0





##### Returns `Size`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:360](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L360)&nbsp;
___
### getWinSizeInPixels

<div style="margin-left: 10px;">

▸   **getWinSizeInPixels**<`Size`\> : `Size`



**`en`** 
Returns the size of the OpenGL view in pixels.<br/>
It takes into account any possible rotation (device orientation) of the window.<br/>
On Mac winSize and winSizeInPixels return the same value.
(The pixel here refers to the resource resolution. If you want to get the physics resolution of device, you need to use `view.getFrameSize()`)



**`deprecated`** since v2.0





##### Returns `Size`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:375](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L375)&nbsp;
___
### hasEventListener

<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`



**`en`** Checks whether there is correspond event listener registered on the given event.



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
### isPaused

<div style="margin-left: 10px;">

▸   **isPaused**<`boolean`\> : `boolean`



**`en`** Returns whether or not the Director is paused.




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:786](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L786)&nbsp;
___
### loadScene

<div style="margin-left: 10px;">

▸   **loadScene**<`boolean`\>(`sceneName: string, onLaunched: Director.OnSceneLaunched, onUnloaded: Director.OnUnload`) : `boolean`



**`en`** Loads the scene by its name.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | The name of the scene to load.  |
| `onLaunched` | `Director.OnSceneLaunched` | callback, will be called after scene launched.  |
| `onUnloaded` | `Director.OnUnload` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:579](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L579)&nbsp;
___
### mainLoop

<div style="margin-left: 10px;">

▸   **mainLoop**<`void`\>(`time: number`) : `void`



**`en`** Run main loop of director



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `time` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:866](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L866)&nbsp;
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
### pause

<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`



**`en`** Pause the director's ticker, only involve the game logic execution.<br>
It won't pause the rendering process nor the event manager.<br>
If you want to pause the entire game including rendering, audio and event,<br>
please use `game.pause`.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L387)&nbsp;
___
### preloadScene

<div style="margin-left: 10px;">

▸   **preloadScene**<`void`\>(`sceneName: string, onLoaded: Director.OnSceneLoaded`) : `void`



**`en`** 
Pre-loads the scene to reduces loading time. You can call this method at any time you want.<br>
After calling this method, you still need to launch the scene by `director.loadScene`.<br>
It will be totally fine to call `director.loadScene` at any time even if the preloading is not<br>
yet finished, the scene will be launched after loaded automatically.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | 场景名称。  |
| `onLoaded` | `Director.OnSceneLoaded` | 加载回调。  |


##### Returns `void`

▸   **preloadScene**<`void`\>(`sceneName: string, onProgress: Director.OnLoadSceneProgress, onLoaded: Director.OnSceneLoaded`) : `void`



**`en`** 
Pre-loads the scene to reduces loading time. You can call this method at any time you want.<br>
After calling this method, you still need to launch the scene by `director.loadScene`.<br>
It will be totally fine to call `director.loadScene` at any time even if the preloading is not<br>
yet finished, the scene will be launched after loaded automatically.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | 场景名称。  |
| `onProgress` | `Director.OnLoadSceneProgress` | 加载进度回调。  |
| `onLoaded` | `Director.OnSceneLoaded` | 加载回调。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:620](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L620)&nbsp;   [cocos/core/director.ts:635](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L635)&nbsp;   [cocos/core/director.ts:637](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L637)&nbsp;
___
### purgeCachedData

<div style="margin-left: 10px;">

▸   **purgeCachedData**<`void`\> : `void`



**`en`** Removes cached all cocos2d cached data.



**`deprecated`** since v2.0





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:399](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L399)&nbsp;
___
### purgeDirector

<div style="margin-left: 10px;">

▸   **purgeDirector**<`void`\> : `void`



**`en`** Purge the `director` itself, including unschedule all schedule,<br>
remove all event listeners, clean up and exit the running scene, stops all animations, clear cached data.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:409](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L409)&nbsp;
___
### registerSystem

<div style="margin-left: 10px;">

▸   **registerSystem**<`void`\>(`name: string, sys: System, priority: number`) : `void`



**`en`** Register a system.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |
| `sys` | `System` | - |
| `priority` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:814](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L814)&nbsp;
___
### removeAll

<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`



**`en`** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The event type or target with which the listeners will be removed  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L133)&nbsp;
___
### reset

<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`



**`en`** Reset the director, can be used to restart the director after purge




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:438](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L438)&nbsp;
___
### resume

<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`



**`en`** Resume game logic execution after pause, if the current scene is not paused, nothing will happen.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:658](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L658)&nbsp;
___
### runSceneImmediate

<div style="margin-left: 10px;">

▸   **runSceneImmediate**<`void`\>(`scene: Scene | SceneAsset, onBeforeLoadScene: Director.OnBeforeLoadScene, onLaunched: Director.OnSceneLaunched`) : `void`



**`en`** 
Run a scene. Replaces the running scene with a new one or enter the first scene.<br>
The new scene will be launched immediately.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scene` | `Scene \| SceneAsset` | The need run scene.  |
| `onBeforeLoadScene` | `Director.OnBeforeLoadScene` | The function invoked at the scene before loading.  |
| `onLaunched` | `Director.OnSceneLaunched` | The function invoked at the scene after launch.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:459](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L459)&nbsp;
___
### setAnimationInterval

<div style="margin-left: 10px;">

▸   **setAnimationInterval**<`void`\>(`value: number`) : `void`



**`en`** Sets animation interval, this doesn't control the main loop.<br>
To control the game's frame rate overall, please use `game.setFrameRate`



**`deprecated`** since v2.0



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `number` | The animation interval desired.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:746](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L746)&nbsp;
___
### setClearColor

<div style="margin-left: 10px;">

▸   **setClearColor**<`void`\>(`clearColor: Color`) : `void`



**`en`** 
Set color for clear screen.<br>
(Implementation can be found in directorCanvas.js/directorWebGL.js)



**`deprecated`** since v2.0




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clearColor` | `Color` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:695](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L695)&nbsp;
___
### setDepthTest

<div style="margin-left: 10px;">

▸   **setDepthTest**<`void`\>(`value: boolean`) : `void`



**`en`** 
Enables or disables WebGL depth test.<br>
Implementation can be found in directorCanvas.js/directorWebGL.js



**`deprecated`** since v2.0




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `boolean` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:679](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L679)&nbsp;
___
### setScheduler

<div style="margin-left: 10px;">

▸   **setScheduler**<`void`\>(`scheduler: Scheduler`) : `void`



**`en`** Sets the scheduler associated with this director.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scheduler` | `Scheduler` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:802](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L802)&nbsp;
___
### startAnimation

<div style="margin-left: 10px;">

▸   **startAnimation**<`void`\> : `void`



**`en`** Starts Animation




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:849](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L849)&nbsp;
___
### stopAnimation

<div style="margin-left: 10px;">

▸   **stopAnimation**<`void`\> : `void`



**`en`** Stops animation




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:858](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L858)&nbsp;
___
### targetOff

<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`typeOrTarget: any`) : `void`



**`en`** Removes all callbacks previously registered with the same target (passed as parameter).
This is not for removing all listeners in the current event target,
and this is not for removing all listeners the target parameter have registered.
It's only for removing all listeners (callback and target couple) registered on the current event target by the target parameter.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The target to be searched for all related listeners  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L126)&nbsp;
___
### unregisterSystem

<div style="margin-left: 10px;">

▸   **unregisterSystem**<`void`\>(`sys: System`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sys` | `System` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:822](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L822)&nbsp;
___
<!---->




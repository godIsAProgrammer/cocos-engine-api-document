
## Class: Director




`extend: `
[Empty](docs/zh/event/Class/Empty.md)&nbsp;
[IEventified](docs/zh/event/Interface/IEventified.md)&nbsp;










**`zh`** 
<p>
    注意：用 `director` 代替 `Director`。<br/>
    `director` 一个管理你的游戏的逻辑流程的单例对象。<br/>
    由于 `director` 是一个单例，你不需要调用任何构造函数或创建函数，<br/>
    使用它的标准方法是通过调用：<br/>
      - `director.methodName();`
    <br/>
    它创建和处理主窗口并且管理什么时候执行场景。<br/>
    <br/>
    `director` 还负责：<br/>
     - 初始化 OpenGL 环境。<br/>
     - 设置OpenGL像素格式。(默认是 RGB565)<br/>
     - 设置OpenGL缓冲区深度 (默认是 0-bit)<br/>
     - 设置空白场景的颜色 (默认是 黑色)<br/>
     - 设置投影 (默认是 3D)<br/>
     - 设置方向 (默认是 Portrait)<br/>
   <br/>
   `director` 设置了 OpenGL 默认环境 <br/>
     - GL_TEXTURE_2D   启用。<br/>
     - GL_VERTEX_ARRAY 启用。<br/>
     - GL_COLOR_ARRAY  启用。<br/>
     - GL_TEXTURE_COORD_ARRAY 启用。<br/>
</p>
<p>
  `director` 也同步定时器与显示器的刷新速率。
  <br/>
  特点和局限性: <br/>
     - 将计时器 & 渲染与显示器的刷新频率同步。<br/>
     - 只支持动画的间隔 1/60 1/30 & 1/15。<br/>
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
</div>

##### Defined in &nbsp;   [cocos/core/director.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L250)&nbsp;


---

<!---->
<!---->
## Methods

### calculateDeltaTime
<div style="margin-left: 10px;">

▸   **calculateDeltaTime**<`void`\>(`now: any`) : `void`




**`zh`** 计算从上一帧到现在的时间间隔，结果保存在私有属性中





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 将触摸点的屏幕坐标转换为 WebGL View 下的坐标。




**`deprecated`** since v2.0





<!---->
<!--    #### Returns `Vec2` -->
<!---->

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




**`zh`** 将触摸点的 WebGL View 坐标转换为屏幕坐标。




**`deprecated`** since v2.0





<!---->
<!--    #### Returns `Vec2` -->
<!---->

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




**`zh`** 派发一个指定事件，并传递需要的参数




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
### end
<div style="margin-left: 10px;">

▸   **end**<`void`\> : `void`




**`zh`** 执行完当前帧后停止 director 的执行





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:349](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L349)&nbsp;
___
### getAnimationInterval
<div style="margin-left: 10px;">

▸   **getAnimationInterval**<`number`\> : `number`




**`zh`** 获取单位帧执行时间。请使用 [[Game.setFrameRate]] 来控制游戏帧率。




**`deprecated`** since v2.0.





<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:734](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L734)&nbsp;
___
### getAnimationManager
<div style="margin-left: 10px;">

▸   **getAnimationManager**<`any`\> : `any`




**`zh`** 获取和 director 相关联的 `AnimationManager`（动画管理器）。请使用 getSystem(AnimationManager.ID) 来替代




**`deprecated`** 





<!---->
<!--    #### Returns `any` -->
<!---->


##### Returns `any`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:840](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L840)&nbsp;
___
### getCurrentTime
<div style="margin-left: 10px;">

▸   **getCurrentTime**<`number`\> : `number`




**`zh`** 获取当前帧的时间。





<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:770](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L770)&nbsp;
___
### getDeltaTime
<div style="margin-left: 10px;">

▸   **getDeltaTime**<`number`\> : `number`




**`zh`** 获取上一帧的增量时间。





<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:754](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L754)&nbsp;
___
### getRunningScene
<div style="margin-left: 10px;">

▸   **getRunningScene**




**`zh`** 获取当前逻辑场景。




**`deprecated`** Since v2.0.





<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:711](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L711)&nbsp;
___
### getScene
<div style="margin-left: 10px;">

▸   **getScene**




**`zh`** 获取当前逻辑场景。




**`example`**

```ts


import { director } from 'cc';
// This will help you to get the Canvas node in scene
director.getScene().getChildByName('Canvas');


```




<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:725](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L725)&nbsp;
___
### getScheduler
<div style="margin-left: 10px;">

▸   **getScheduler**<`Scheduler`\> : `Scheduler`




**`zh`** 获取和 director 相关联的调度器。





<!---->
<!--    #### Returns `Scheduler` -->
<!---->


##### Returns `Scheduler`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:794](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L794)&nbsp;
___
### getSystem
<div style="margin-left: 10px;">

▸   **getSystem**(`name: string`)




**`zh`** 获取一个 system。





<!---->

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




**`zh`** 获取 director 启动以来游戏运行的总帧数。





<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:778](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L778)&nbsp;
___
### getTotalTime
<div style="margin-left: 10px;">

▸   **getTotalTime**<`number`\> : `number`




**`zh`** 获取从游戏开始到现在总共经过的时间，单位为 ms





<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:762](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L762)&nbsp;
___
### getWinSize
<div style="margin-left: 10px;">

▸   **getWinSize**<`Size`\> : `Size`




**`zh`** 获取视图的大小，以点为单位。




**`deprecated`** since v2.0





<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:360](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L360)&nbsp;
___
### getWinSizeInPixels
<div style="margin-left: 10px;">

▸   **getWinSizeInPixels**<`Size`\> : `Size`




**`zh`** 
获取视图大小，以像素为单位（这里的像素指的是资源分辨率。
如果要获取屏幕物理分辨率，需要用 `view.getFrameSize()`）




**`deprecated`** since v2.0





<!---->
<!--    #### Returns `Size` -->
<!---->


##### Returns `Size`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:375](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L375)&nbsp;
___
### hasEventListener
<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`




**`zh`** 检查指定事件是否已注册回调。




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
### isPaused
<div style="margin-left: 10px;">

▸   **isPaused**<`boolean`\> : `boolean`




**`zh`** 是否处于暂停状态。





<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:786](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L786)&nbsp;
___
### loadScene
<div style="margin-left: 10px;">

▸   **loadScene**<`boolean`\>(`sceneName: string, onLaunched: Director.OnSceneLaunched, onUnloaded: Director.OnUnload`) : `boolean`




**`zh`** 通过场景名称进行加载场景。





<!---->
<!--    #### Returns `boolean` if error, return false
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | The name of the scene to load.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onLaunched` | `Director.OnSceneLaunched` | callback, will be called after scene launched.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onUnloaded` | `Director.OnUnload` | - |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:579](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L579)&nbsp;
___
### mainLoop
<div style="margin-left: 10px;">

▸   **mainLoop**<`void`\>(`time: number`) : `void`




**`zh`** 运行主循环





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 
注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。





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




**`zh`** 
注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。





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
### pause
<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`




**`zh`** 暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。<br>
如果想要更彻底得暂停游戏，包含渲染，音频和事件，请使用 `game.pause` 。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L387)&nbsp;
___
### preloadScene
<div style="margin-left: 10px;">

▸   **preloadScene**<`void`\>(`sceneName: string, onLoaded: Director.OnSceneLoaded`) : `void`




**`zh`** 预加载场景，你可以在任何时候调用这个方法。
调用完后，你仍然需要通过 `director.loadScene` 来启动场景，因为这个方法不会执行场景加载操作。<br>
就算预加载还没完成，你也可以直接调用 `director.loadScene`，加载完成后场景就会启动。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | 场景名称。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onLoaded` | `Director.OnSceneLoaded` | 加载回调。  |



##### Returns `void`


▸   **preloadScene**<`void`\>(`sceneName: string, onProgress: Director.OnLoadSceneProgress, onLoaded: Director.OnSceneLoaded`) : `void`




**`zh`** 预加载场景，你可以在任何时候调用这个方法。
调用完后，你仍然需要通过 `director.loadScene` 来启动场景，因为这个方法不会执行场景加载操作。<br>
就算预加载还没完成，你也可以直接调用 `director.loadScene`，加载完成后场景就会启动。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sceneName` | `string` | 场景名称。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onProgress` | `Director.OnLoadSceneProgress` | 加载进度回调。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onLoaded` | `Director.OnSceneLoaded` | 加载回调。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:620](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L620)&nbsp;   [cocos/core/director.ts:635](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L635)&nbsp;   [cocos/core/director.ts:637](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L637)&nbsp;
___
### purgeCachedData
<div style="margin-left: 10px;">

▸   **purgeCachedData**<`void`\> : `void`




**`zh`** 删除cocos2d所有的缓存数据




**`deprecated`** since v2.0





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:399](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L399)&nbsp;
___
### purgeDirector
<div style="margin-left: 10px;">

▸   **purgeDirector**<`void`\> : `void`




**`zh`** 清除 `director` 本身，包括停止所有的计时器，<br>
移除所有的事件监听器，清理并退出当前运行的场景，停止所有动画，清理缓存数据。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:409](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L409)&nbsp;
___
### registerSystem
<div style="margin-left: 10px;">

▸   **registerSystem**<`void`\>(`name: string, sys: System, priority: number`) : `void`




**`zh`** 注册一个系统。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `sys` | `System` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `priority` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:814](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L814)&nbsp;
___
### removeAll
<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: any`) : `void`




**`zh`** 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。




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
### reset
<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




**`zh`** 重置此 Director，可用于在清除后重启 Director。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:438](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L438)&nbsp;
___
### resume
<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`




**`zh`** 恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:658](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L658)&nbsp;
___
### runSceneImmediate
<div style="margin-left: 10px;">

▸   **runSceneImmediate**<`void`\>(`scene: Scene | SceneAsset, onBeforeLoadScene: Director.OnBeforeLoadScene, onLaunched: Director.OnSceneLaunched`) : `void`




**`zh`** 运行指定场景。将正在运行的场景替换为（或重入为）新场景。新场景将立即启动。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scene` | `Scene \| SceneAsset` | The need run scene.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onBeforeLoadScene` | `Director.OnBeforeLoadScene` | The function invoked at the scene before loading.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `onLaunched` | `Director.OnSceneLaunched` | The function invoked at the scene after launch.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:459](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L459)&nbsp;
___
### setAnimationInterval
<div style="margin-left: 10px;">

▸   **setAnimationInterval**<`void`\>(`value: number`) : `void`




**`zh`** 设置动画间隔，这不控制主循环。<br>
要控制游戏的帧速率，请使用 `game.setFrameRate`




**`deprecated`** since v2.0




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 
设置场景的默认擦除颜色。<br>
支持全透明，但不支持透明度为中间值。要支持全透明需手工开启 `macro.ENABLE_TRANSPARENT_CANVAS`。




**`deprecated`** since v2.0





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 启用/禁用深度测试（在 Canvas 渲染模式下不会生效）。




**`deprecated`** since v2.0





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 设置和 director 相关联的调度器。





<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 开始动画





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:849](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L849)&nbsp;
___
### stopAnimation
<div style="margin-left: 10px;">

▸   **stopAnimation**<`void`\> : `void`




**`zh`** 停止动画





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:858](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L858)&nbsp;
___
### targetOff
<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`typeOrTarget: any`) : `void`




**`zh`** 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。




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
### unregisterSystem
<div style="margin-left: 10px;">

▸   **unregisterSystem**<`void`\>(`sys: System`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sys` | `System` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/director.ts:822](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/director.ts#L822)&nbsp;
___
<!---->




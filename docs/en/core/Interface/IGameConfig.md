## Interface: IGameConfig

- [assetOptions](#assetOptions)
- [collisionMatrix](#collisionMatrix)
- [customJointTextureLayouts](#customJointTextureLayouts)
- [debugMode](#debugMode)
- [exposeClassName](#exposeClassName)
- [frameRate](#frameRate)
- [groupList](#groupList)
- [id](#id)
- [jsList](#jsList)
- [physics](#physics)
- [registerSystemEvent](#registerSystemEvent)
- [renderMode](#renderMode)
- [renderPipeline](#renderPipeline)
- [scenes](#scenes)
- [showFPS](#showFPS)

### Properties

#### assetOptions

<div style="margin-left: 10px;">


• **assetOptions**: ``IAssetManagerOptions``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:152](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L152)&nbsp;

___
#### collisionMatrix

<div style="margin-left: 10px;">


• **collisionMatrix**: ``array``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L132)&nbsp;

___
#### customJointTextureLayouts

<div style="margin-left: 10px;">


• **customJointTextureLayouts**: ``array``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L157)&nbsp;

___
#### debugMode

<div style="margin-left: 10px;">




**`zh`** 
设置 debug 模式，在浏览器中这个选项会被忽略。




**`en`** 
Set debug mode, only valid in non-browser environment.



• **debugMode**: ``debug.DebugMode``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:67](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L67)&nbsp;

___
#### exposeClassName

<div style="margin-left: 10px;">




**`zh`** 
暴露类名让 Chrome DevTools 可以识别，如果开启会稍稍降低类的创建过程的性能，但对对象构造没有影响。




**`en`** 
Expose class name to chrome debug tools, the class intantiate performance is a little bit slower when exposed.



• **exposeClassName**: ``false | true``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L83)&nbsp;

___
#### frameRate

<div style="margin-left: 10px;">




**`zh`** 
设置想要的帧率你的游戏，但真正的FPS取决于你的游戏实现和运行环境。




**`en`** 
Set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.



• **frameRate**: ``number``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L91)&nbsp;

___
#### groupList

<div style="margin-left: 10px;">


• **groupList**: ``array``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L137)&nbsp;

___
#### id

<div style="margin-left: 10px;">




**`zh`** 
Web 页面上的 Canvas Element ID，仅适用于 web 端。




**`en`** 
Sets the id of your canvas element on the web page, it's useful only on web.



• **id**: ``string | HTMLElement``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L99)&nbsp;

___
#### jsList

<div style="margin-left: 10px;">


• **jsList**: ``array``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L142)&nbsp;

___
#### physics

<div style="margin-left: 10px;">


• **physics**: ``IPhysicsConfig``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:162](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L162)&nbsp;

___
#### registerSystemEvent

<div style="margin-left: 10px;">


• **registerSystemEvent**: ``false | true``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L127)&nbsp;

___
#### renderMode

<div style="margin-left: 10px;">




**`zh`** 
渲染模式。
设置渲染器类型，仅适用于 web 端：
- 0 - 通过引擎自动选择。
- 1 - 强制使用 canvas 渲染。
- 2 - 强制使用 WebGL 渲染，但是在部分 Android 浏览器中这个选项会被忽略。




**`en`** 
Sets the renderer type, only useful on web:
- 0 - Automatically chosen by engine.
- 1 - Forced to use canvas renderer.
- 2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers.



• **renderMode**: ``0 | 1 | 2``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L114)&nbsp;

___
#### renderPipeline

<div style="margin-left: 10px;">


• **renderPipeline**: ``string``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:147](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L147)&nbsp;

___
#### scenes

<div style="margin-left: 10px;">




**`zh`** 
当前包中可用场景。




**`en`** 
Include available scenes in the current bundle.



• **scenes**: ``array``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L122)&nbsp;

___
#### showFPS

<div style="margin-left: 10px;">




**`zh`** 
当 showFPS 为 true 的时候界面的左下角将显示 fps 的信息，否则被隐藏。




**`en`** 
Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.



• **showFPS**: ``false | true``

</div>


##### Defined in &nbsp;   [cocos/core/game.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/game.ts#L75)&nbsp;

___

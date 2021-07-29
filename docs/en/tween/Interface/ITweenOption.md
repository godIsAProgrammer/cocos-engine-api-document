## Interface: ITweenOption

- [easing](#easing)
- [onComplete](#onComplete)
- [onStart](#onStart)
- [onUpdate](#onUpdate)
- [progress](#progress)

### Properties

#### easing

<div style="margin-left: 10px;">



**`en`** 
Easing function, you can pass in a string or custom function.



**`zh`** 
缓动函数，可以使用已有的，也可以传入自定义的函数。



• **easing**: ``TweenEasing | ``

</div>

##### Defined in &nbsp;   [cocos/tween/export-api.ts:65](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/export-api.ts#L65)&nbsp;
___
#### onComplete

<div style="margin-left: 10px;">



**`en`** 
A callback that is triggered when a tween action is completed.



**`zh`** 
回调，当缓动动作完成时触发。



• **onComplete**: ``

</div>

##### Defined in &nbsp;   [cocos/tween/export-api.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/export-api.ts#L97)&nbsp;
___
#### onStart

<div style="margin-left: 10px;">



**`en`** 
A callback that is triggered when a tween action is started.



**`zh`** 
回调，当缓动动作启动时触发。



• **onStart**: ``

</div>

##### Defined in &nbsp;   [cocos/tween/export-api.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/export-api.ts#L81)&nbsp;
___
#### onUpdate

<div style="margin-left: 10px;">



**`en`** 
A callback that is triggered when a tween action is update.



**`zh`** 
回调，当缓动动作更新时触发。



• **onUpdate**: ``

</div>

##### Defined in &nbsp;   [cocos/tween/export-api.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/export-api.ts#L89)&nbsp;
___
#### progress

<div style="margin-left: 10px;">



**`en`** 
Interpolation functin, you can pass in a custom function.



**`zh`** 
插值函数，参数的意义 start:起始值，end:目标值，current:当前值，ratio:当前进度



• **progress**: ``

</div>

##### Defined in &nbsp;   [cocos/tween/export-api.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tween/export-api.ts#L73)&nbsp;
___

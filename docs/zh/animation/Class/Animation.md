
## Class: Animation




`extend: `
[Component](docs/zh/component/Class/Component.md)&nbsp;
[IEventified](docs/zh/event/Interface/IEventified.md)&nbsp;








**`zh`** 
动画组件管理一组动画状态，控制它们的播放。
为了方便，动画组件还存储了一组动画剪辑。
每个剪辑都会独自创建一个关联的动画状态对象。
动画组件具有事件特性，它会派发一系列播放状态相关的事件。
参考 [[EventType]]



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  EventType](#EventType)
- [ **`static`**  system](#system)
- [ node](#node)
- [ playOnLoad](#playOnLoad)
- [ clips](#clips)
- [ defaultClip](#defaultClip)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addClip](#addClip)
- [ addComponent](#addComponent)
- [ createState](#createState)
- [ crossFade](#crossFade)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getAnimationState](#getAnimationState)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getState](#getState)
- [ hasEventListener](#hasEventListener)
- [ off](#off)
- [ on](#on)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ once](#once)
- [ pause](#pause)
- [ play](#play)
- [ removeAll](#removeAll)
- [ removeClip](#removeClip)
- [ removeState](#removeState)
- [ resetInEditor](#resetInEditor)
- [ resume](#resume)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ start](#start)
- [ stop](#stop)
- [ targetOff](#targetOff)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
</div>

## Properties


### EventType
<div style="margin-left: 10px;">




• `static` **EventType**:
`EnumAlias`  = `EventType`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L131)&nbsp;   [cocos/core/animation/animation-component.ts:494](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L494)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### node
<div style="margin-left: 10px;">



**`zh`** 该组件被附加到的节点。组件总会附加到一个节点。



**`example`**

```ts


import { log } from 'cc';
log(comp.node);


```




•  **node**:
`Node`  = `NullNode`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L166)&nbsp;


___


### playOnLoad
<div style="margin-left: 10px;">



**`zh`** 
是否在组件开始运行时自动播放默认剪辑。
注意，若在组件开始运行前调用了 `crossFade` 或 `play()`，此字段将不会生效。





•  **playOnLoad**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L143)&nbsp;


___


### clips
<div style="margin-left: 10px;">



**`zh`** 
获取或设置此组件管理的剪辑。
设置时，已有剪辑关联的动画状态将被停止；若默认剪辑不在新的动画剪辑中，将被重置为空。





•  **clips**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L74)&nbsp;   [cocos/core/animation/animation-component.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L78)&nbsp;


___


### defaultClip
<div style="margin-left: 10px;">



**`see`** [[playOnLoad]]





•  **defaultClip**:
 ``null | AnimationClip`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L115)&nbsp;   [cocos/core/animation/animation-component.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L119)&nbsp;


___


### enabled
<div style="margin-left: 10px;">



**`zh`** 表示该组件自身是否启用。



**`default`** true



**`example`**

```ts


import { log } from 'cc';
comp.enabled = true;
log(comp.enabled);


```




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L110)&nbsp;   [cocos/core/components/component.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L113)&nbsp;


___


### enabledInHierarchy
<div style="margin-left: 10px;">



**`zh`** 表示该组件是否被启用并且所在的节点也处于激活状态。




**`example`**

```ts


import { log } from 'cc';
log(comp.enabledInHierarchy);


```




•  **enabledInHierarchy**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L137)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isValid
<div style="margin-left: 10px;">



**`zh`** 
表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。



**`default`** true




**`example`**

```ts


import { Node, log } from 'cc';
const node = new Node();
log(node.isValid);    // true
node.destroy();
log(node.isValid);    // true, still valid in this frame
// after a frame...
log(node.isValid);    // false, destroyed in the end of last frame


```




•  **isValid**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L266)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### uuid
<div style="margin-left: 10px;">



**`zh`** 组件的 uuid，用于编辑器。




**`example`**

```ts


import { log } from 'cc';
log(comp.uuid);


```




•  **uuid**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L89)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Animation**(`name: string`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L194)&nbsp;


---

<!---->
## Methods

### addClip

<div style="margin-left: 10px;">

▸   **addClip**<`AnimationState`\>(`clip: AnimationClip, name: undefined | string`) : `AnimationState`



**`deprecated`** please use [[createState]]


添加一个动画剪辑到 &#x60;this.clips&#x60;中并以此剪辑创建动画状态。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clip` | `AnimationClip` | The animation clip  |
| `name` | `undefined \| string` | The animation state name, if absent, the default clip's name will be used  |


##### Returns `AnimationState`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L324)&nbsp;
___
### addComponent

<div style="margin-left: 10px;">

▸   **addComponent**(`classConstructor: Constructor`)



**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.addComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |


##### Returns `void`

▸   **addComponent**(`className: string`)



**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。



**`example`**

```ts


const test = node.addComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L215)&nbsp;   [cocos/core/components/component.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L226)&nbsp;   [cocos/core/components/component.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L228)&nbsp;
___
### createState

<div style="margin-left: 10px;">

▸   **createState**<`AnimationState`\>(`clip: AnimationClip, name: undefined | string`) : `AnimationState`



**`zh`** 
使用指定的动画剪辑创建一个动画状态。
若指定名称的动画状态已存在，已存在的动画状态将先被设为停止并被覆盖。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clip` | `AnimationClip` | The animation clip  |
| `name` | `undefined \| string` | The animation state name, if absent, the default clip's name will be used  |


##### Returns `AnimationState`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L294)&nbsp;
___
### crossFade

<div style="margin-left: 10px;">

▸   **crossFade**<`void`\>(`name: string, duration: number`) : `void`



**`zn`** 
平滑地切换到指定动画状态。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The name of the animation to switch to  |
| `duration` | `number` | The duration of the cross fade, default value is 0.3s  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L217)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
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
### getAnimationState

<div style="margin-left: 10px;">

▸   **getAnimationState**<`AnimationState`\>(`name: string`) : `AnimationState`



**`zh`** 
获取指定的动画状态。



**`deprecated`** please use [[getState]]




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |


##### Returns `AnimationState`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L263)&nbsp;
___
### getComponent

<div style="margin-left: 10px;">

▸   **getComponent**(`classConstructor: Constructor`)



**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。



**`example`**

```ts


import { Sprite } from 'cc';
// get sprite component.
var sprite = node.getComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |


##### Returns `void`

▸   **getComponent**(`className: string`)



**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。



**`example`**

```ts


// get custom test calss.
var test = node.getComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L247)&nbsp;   [cocos/core/components/component.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L263)&nbsp;   [cocos/core/components/component.ts:265](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L265)&nbsp;
___
### getComponentInChildren

<div style="margin-left: 10px;">

▸   **getComponentInChildren**(`classConstructor: Constructor`)



**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.getComponentInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved  |


##### Returns `void`

▸   **getComponentInChildren**(`className: string`)



**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。



**`example`**

```ts


var Test = node.getComponentInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L306)&nbsp;   [cocos/core/components/component.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L317)&nbsp;   [cocos/core/components/component.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L319)&nbsp;
___
### getComponents

<div style="margin-left: 10px;">

▸   **getComponents**(`classConstructor: Constructor`)



**`zh`** 返回节点上指定类型的所有组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponents(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |


##### Returns `void`

▸   **getComponents**(`className: string`)



**`zh`** 返回节点上指定类型的所有组件。



**`example`**

```ts


const tests = node.getComponents("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L279)&nbsp;   [cocos/core/components/component.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L290)&nbsp;   [cocos/core/components/component.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L292)&nbsp;
___
### getComponentsInChildren

<div style="margin-left: 10px;">

▸   **getComponentsInChildren**(`classConstructor: Constructor`)



**`zh`** 递归查找自身或所有子节点中指定类型的组件。



**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponentsInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |


##### Returns `void`

▸   **getComponentsInChildren**(`className: string`)



**`zh`** 递归查找自身或所有子节点中指定类型的组件。



**`example`**

```ts


const tests = node.getComponentsInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L333)&nbsp;   [cocos/core/components/component.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L344)&nbsp;   [cocos/core/components/component.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L346)&nbsp;
___
### getState

<div style="margin-left: 10px;">

▸   **getState**<`AnimationState`\>(`name: string`) : `AnimationState`



**`zh`** 
获取指定的动画状态。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The name of the animation  |


##### Returns `AnimationState`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L275)&nbsp;
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
### off

<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: EventType, callback: undefined | , thisArg: any`) : `void`



**`zh`** 
取消注册动画事件回调。



**`example`**

```ts


// unregister event to all animation
animation.off('play', this.onPlay, this);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | The event type to unregister  |
| `callback` | `undefined \| ` | The callback to unregister  |
| `thisArg` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L430)&nbsp;
___
### on

<div style="margin-left: 10px;">

▸   **on**<`TFunction`\>(`type: EventType, callback: TFunction, thisArg: any, once: undefined | false | true`) : `TFunction`



**`zh`** 
注册动画事件回调。<bg>
回调的事件里将会附上发送事件的 AnimationState。<bg>
当播放一个动画时，会自动将事件注册到对应的 AnimationState 上，停止播放时会将事件从这个 AnimationState 上取消注册。



**`example`**

```ts


onPlay: function (type, state) {
    // callback
}

// register event to all animation
animation.on('play', this.onPlay, this);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | The event type to listen to  |
| `callback` | `TFunction` | The callback when event triggered  |
| `thisArg` | `any` | - |
| `once` | `undefined \| false \| true` | - |


##### Returns `TFunction`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:400](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L400)&nbsp;
___
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L182)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L178)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L174)&nbsp;
___
### onFocusInEditor

<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLoad

<div style="margin-left: 10px;">

▸   **onLoad**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L160)&nbsp;
___
### onLostFocusInEditor

<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### once

<div style="margin-left: 10px;">

▸   **once**<`TFunction`\>(`type: EventType, callback: TFunction, thisArg: any`) : `TFunction`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | - |
| `callback` | `TFunction` | - |
| `thisArg` | `any` | - |


##### Returns `TFunction`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:408](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L408)&nbsp;
___
### pause

<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`



**`zh`** 
暂停所有动画状态，并暂停所有切换。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L232)&nbsp;
___
### play

<div style="margin-left: 10px;">

▸   **play**<`void`\>(`name: undefined | string`) : `void`



**`zh`** 
立即切换到指定动画状态。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `undefined \| string` | The name of the animation to be played, if absent, the default clip will be played  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L198)&nbsp;
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
### removeClip

<div style="margin-left: 10px;">

▸   **removeClip**<`void`\>(`clip: AnimationClip, force: undefined | false | true`) : `void`



**`zh`** 
从动画列表中移除指定的动画剪辑，<br/>
如果依赖于 clip 的 AnimationState 正在播放或者 clip 是 defaultClip 的话，默认是不会删除 clip 的。<br/>
但是如果 force 参数为 true，则会强制停止该动画，然后移除该动画剪辑和相关的动画。这时候如果 clip 是 defaultClip，defaultClip 将会被重置为 null。<br/>



**`deprecated`** please use [[removeState]]



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clip` | `AnimationClip` | - |
| `force` | `undefined \| false \| true` | If force is true, then will always remove the clip and any animation states based on it.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L344)&nbsp;
___
### removeState

<div style="margin-left: 10px;">

▸   **removeState**<`void`\>(`name: string`) : `void`



**`zh`** 
停止并移除指定的动画状态。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The name of the animation state  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L308)&nbsp;
___
### resetInEditor

<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`



**`zh`** 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### resume

<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`



**`zh`** 
恢复所有动画状态，并恢复所有切换。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L242)&nbsp;
___
### schedule

<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: any, interval: number, repeat: number, delay: number`) : `void`



**`zh`** 
调度一个自定义的回调任务。<br/>
如果回调任务已调度，那么将不会重复调度它，只会更新时间间隔参数。



**`example`**

```ts


import { log } from 'cc';
this.schedule((dt) => void log(`time: ${dt}`), 1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |
| `interval` | `number` | The time interval between each invocation  |
| `repeat` | `number` | The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever  |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L419)&nbsp;
___
### scheduleOnce

<div style="margin-left: 10px;">

▸   **scheduleOnce**<`void`\>(`callback: any, delay: number`) : `void`



**`zh`** 调度一个只运行一次的回调任务，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。



**`method`** scheduleOnce



**`see`** [[schedule]]



**`example`**

```ts


import { log } from 'cc';
this.scheduleOnce((dt) => void log(`time: ${dt}`), 2);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L452)&nbsp;
___
### start

<div style="margin-left: 10px;">

▸   **start**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L168)&nbsp;
___
### stop

<div style="margin-left: 10px;">

▸   **stop**<`void`\> : `void`



**`zh`** 
停止所有动画状态，并停止所有切换。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:252](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L252)&nbsp;
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
### unschedule

<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`



**`zh`** 取消调度一个自定义的回调任务。



**`example`**

```ts


this.unschedule(_callback);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback_fn` | `any` | The callback function of the task  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L465)&nbsp;
___
### unscheduleAllCallbacks

<div style="margin-left: 10px;">

▸   **unscheduleAllCallbacks**<`void`\> : `void`



**`zh`** 取消调度所有已调度的回调函数。



**`example`**

```ts


this.unscheduleAllCallbacks();


```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
___
<!---->




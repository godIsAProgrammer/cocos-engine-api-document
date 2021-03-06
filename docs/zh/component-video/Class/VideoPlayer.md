
## Class: VideoPlayer


`extend:`
[Component](docs/zh/component/Class/Component.md)










**`zh`** 
Video 组件，用于在游戏中播放视频。
由于不同平台对于 VideoPlayer 组件的授权、API、控制方式都不同，还没有形成统一的标准，所以目前只支持 Web、iOS 和 Android 平台。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  EventType](#EventType)
- [ **`static`**  ResourceType](#ResourceType)
- [ **`static`**  system](#system)
- [ node](#node)
- [ videoPlayerEvent](#videoPlayerEvent)
- [ clip](#clip)
- [ currentTime](#currentTime)
- [ duration](#duration)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ fullScreenOnAwake](#fullScreenOnAwake)
- [ hideFlags](#hideFlags)
- [ isPlaying](#isPlaying)
- [ isValid](#isValid)
- [ keepAspectRatio](#keepAspectRatio)
- [ loop](#loop)
- [ mute](#mute)
- [ name](#name)
- [ nativeVideo](#nativeVideo)
- [ playOnAwake](#playOnAwake)
- [ playbackRate](#playbackRate)
- [ remoteURL](#remoteURL)
- [ resourceType](#resourceType)
- [ state](#state)
- [ stayOnBottom](#stayOnBottom)
- [ uuid](#uuid)
- [ volume](#volume)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ onCompleted](#onCompleted)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onError](#onError)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ onMetaLoaded](#onMetaLoaded)
- [ onPasued](#onPasued)
- [ onPlaying](#onPlaying)
- [ onReadyToPlay](#onReadyToPlay)
- [ onStopped](#onStopped)
- [ pause](#pause)
- [ play](#play)
- [ resetInEditor](#resetInEditor)
- [ resume](#resume)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ stop](#stop)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ update](#update)
</div>

## Properties


### EventType
<div style="margin-left: 10px;">




• `static` **EventType**:
`EventType`  = `EventType`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L288)&nbsp;


___


### ResourceType
<div style="margin-left: 10px;">




• `static` **ResourceType**:
  = `ResourceType`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L289)&nbsp;


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


### videoPlayerEvent
<div style="margin-left: 10px;">



**`zh`** 
视频播放回调函数，该回调函数会在特定情况被触发，比如播放中，暂时，停止和完成播放。





•  **videoPlayerEvent**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L301)&nbsp;


___


### clip
<div style="margin-left: 10px;">



**`zh`** 
本地视频剪辑。





•  **clip**:
 ``null | VideoClip`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L128)&nbsp;   [cocos/video/video-player.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L131)&nbsp;


___


### currentTime
<div style="margin-left: 10px;">



**`zh`** 
指定视频从什么时间点开始播放，单位是秒，也可以用来获取当前视频播放的时间进度。





•  **currentTime**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L319)&nbsp;   [cocos/video/video-player.ts:323](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L323)&nbsp;


___


### duration
<div style="margin-left: 10px;">



**`zh`** 
获取以秒为单位的视频总时长。





•  **duration**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L338)&nbsp;


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


### fullScreenOnAwake
<div style="margin-left: 10px;">



**`zh`** 
是否全屏播放视频





•  **fullScreenOnAwake**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L250)&nbsp;   [cocos/video/video-player.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L259)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isPlaying
<div style="margin-left: 10px;">



**`zh`** 
当前视频是否正在播放？





•  **isPlaying**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:360](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L360)&nbsp;


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


### keepAspectRatio
<div style="margin-left: 10px;">



**`zh`** 
是否保持视频原来的宽高比





•  **keepAspectRatio**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L231)&nbsp;   [cocos/video/video-player.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L234)&nbsp;


___


### loop
<div style="margin-left: 10px;">



**`zh`** 
视频是否应在结束时再次播放





•  **loop**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L214)&nbsp;   [cocos/video/video-player.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L217)&nbsp;


___


### mute
<div style="margin-left: 10px;">



**`zh`** 
是否静音视频。静音时设置音量为 0，取消静音是恢复原来的音量。





•  **mute**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L197)&nbsp;   [cocos/video/video-player.ts:200](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L200)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### nativeVideo
<div style="margin-left: 10px;">



**`zh`** 
原始视频对象，用于用户定制





•  **nativeVideo**:
 ``null | HTMLVideoElement`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:309](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L309)&nbsp;


___


### playOnAwake
<div style="margin-left: 10px;">



**`zh`** 
视频加载后是否自动开始播放？





•  **playOnAwake**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L145)&nbsp;   [cocos/video/video-player.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L148)&nbsp;


___


### playbackRate
<div style="margin-left: 10px;">



**`zh`** 
视频播放时的速率（0.0 ~ 10.0）





•  **playbackRate**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L161)&nbsp;   [cocos/video/video-player.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L164)&nbsp;


___


### remoteURL
<div style="margin-left: 10px;">



**`zh`** 
远程视频的 URL





•  **remoteURL**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L110)&nbsp;   [cocos/video/video-player.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L113)&nbsp;


___


### resourceType
<div style="margin-left: 10px;">



**`zh`** 
视频来源：REMOTE 表示远程视频 URL，LOCAL 表示本地视频地址。





•  **resourceType**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L93)&nbsp;   [cocos/video/video-player.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L96)&nbsp;


___


### state
<div style="margin-left: 10px;">



**`zh`** 
获取当前视频状态。





•  **state**:
 ``EventType`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:349](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L349)&nbsp;


___


### stayOnBottom
<div style="margin-left: 10px;">



**`zh`** 
永远在游戏视图最底层（这个属性只有在 Web 平台上有效果。注意：具体效果无法保证一致，跟各个浏览器是否支持与限制有关）





•  **stayOnBottom**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L276)&nbsp;   [cocos/video/video-player.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L279)&nbsp;


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


### volume
<div style="margin-left: 10px;">



**`zh`** 
视频的音量（0.0 ~ 1.0）





•  **volume**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L180)&nbsp;   [cocos/video/video-player.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L183)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new VideoPlayer**(`name: string`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L194)&nbsp;


---

<!---->
## Methods

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
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
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
### onCompleted

<div style="margin-left: 10px;">

▸   **onCompleted**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L452)&nbsp;
___
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L413)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:407](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L407)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L401)&nbsp;
___
### onError

<div style="margin-left: 10px;">

▸   **onError**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:457](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L457)&nbsp;
___
### onFocusInEditor

<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLostFocusInEditor

<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### onMetaLoaded

<div style="margin-left: 10px;">

▸   **onMetaLoaded**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:426](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L426)&nbsp;
___
### onPasued

<div style="margin-left: 10px;">

▸   **onPasued**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:442](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L442)&nbsp;
___
### onPlaying

<div style="margin-left: 10px;">

▸   **onPlaying**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:437](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L437)&nbsp;
___
### onReadyToPlay

<div style="margin-left: 10px;">

▸   **onReadyToPlay**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:431](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L431)&nbsp;
___
### onStopped

<div style="margin-left: 10px;">

▸   **onStopped**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L447)&nbsp;
___
### pause

<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`



**`zh`** 
暂停播放。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:496](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L496)&nbsp;
___
### play

<div style="margin-left: 10px;">

▸   **play**<`void`\> : `void`



**`zh`** 
开始播放。<br>
如果视频处于正在播放状态，将会重新开始播放视频。<br>
如果视频处于暂停状态，则会继续播放视频。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:472](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L472)&nbsp;
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
如果一个视频播放被暂停播放了，调用这个接口可以继续播放。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:484](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L484)&nbsp;
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
### stop

<div style="margin-left: 10px;">

▸   **stop**<`void`\> : `void`



**`zh`** 
停止播放。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:508](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L508)&nbsp;
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
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`dt: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:420](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L420)&nbsp;
___
<!---->




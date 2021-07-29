
## Class: VideoPlayer


`extend:`
[Component](docs/en/component/Class/Component.md)










**`en`** 
VideoPlayer is a component for playing videos, you can use it for showing videos in your game.
Because different platforms have different authorization, API and control methods for VideoPlayer component.
And have not yet formed a unified standard, only Web, iOS, and Android platforms are currently supported.


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



**`en`** The node this component is attached to. A component is always attached to a node.



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



**`en`** 
The video player's callback, it will be triggered when certain event occurs, like: playing, paused, stopped and completed.




•  **videoPlayerEvent**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L301)&nbsp;


___


### clip
<div style="margin-left: 10px;">



**`en`** 
The local video clip




•  **clip**:
 ``null | VideoClip`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L128)&nbsp;   [cocos/video/video-player.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L131)&nbsp;


___


### currentTime
<div style="margin-left: 10px;">



**`en`** 
The current playback time of the now playing item in seconds, you could also change the start playback time.




•  **currentTime**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L319)&nbsp;   [cocos/video/video-player.ts:323](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L323)&nbsp;


___


### duration
<div style="margin-left: 10px;">



**`en`** 
Get the audio duration, in seconds.




•  **duration**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L338)&nbsp;


___


### enabled
<div style="margin-left: 10px;">



**`en`** Indicates whether this component is enabled or not.



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



**`en`** Indicates whether this component is enabled and its node is also active in the hierarchy.




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



**`en`** 
Whether play video in fullscreen mode.




•  **fullScreenOnAwake**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L250)&nbsp;   [cocos/video/video-player.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L259)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isPlaying
<div style="margin-left: 10px;">



**`en`** 
Is the audio currently playing?




•  **isPlaying**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:360](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L360)&nbsp;


___


### isValid
<div style="margin-left: 10px;">



**`en`** 
Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.




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



**`en`** 
Whether keep the aspect ration of the original video.




•  **keepAspectRatio**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L231)&nbsp;   [cocos/video/video-player.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L234)&nbsp;


___


### loop
<div style="margin-left: 10px;">



**`en`** 
Whether the video should be played again at the end




•  **loop**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L214)&nbsp;   [cocos/video/video-player.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L217)&nbsp;


___


### mute
<div style="margin-left: 10px;">



**`en`** 
Mutes the VideoPlayer. Mute sets the volume=0, Un-Mute restore the original volume.




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



**`en`** 
Raw video objects for user customization




•  **nativeVideo**:
 ``null | HTMLVideoElement`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:309](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L309)&nbsp;


___


### playOnAwake
<div style="margin-left: 10px;">



**`en`** 
Whether the video start playing automatically after loaded?




•  **playOnAwake**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L145)&nbsp;   [cocos/video/video-player.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L148)&nbsp;


___


### playbackRate
<div style="margin-left: 10px;">



**`en`** 
The Video playback rate




•  **playbackRate**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L161)&nbsp;   [cocos/video/video-player.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L164)&nbsp;


___


### remoteURL
<div style="margin-left: 10px;">



**`en`** 
The remote URL of video.




•  **remoteURL**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L110)&nbsp;   [cocos/video/video-player.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L113)&nbsp;


___


### resourceType
<div style="margin-left: 10px;">



**`en`** 
The resource type of video player, REMOTE for remote url and LOCAL for local file path.




•  **resourceType**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L93)&nbsp;   [cocos/video/video-player.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L96)&nbsp;


___


### state
<div style="margin-left: 10px;">



**`en`** 
Get current audio state.




•  **state**:
 ``EventType`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:349](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L349)&nbsp;


___


### stayOnBottom
<div style="margin-left: 10px;">



**`en`** 
Always below the game view (only useful on Web.
Note: The specific effects are not guaranteed to be consistent, depending on whether each browser supports or restricts).




•  **stayOnBottom**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L276)&nbsp;   [cocos/video/video-player.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L279)&nbsp;


___


### uuid
<div style="margin-left: 10px;">



**`en`** The uuid for editor.




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



**`en`** 
The volume of the video.




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



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



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



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



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



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.



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



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.



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



**`en`** Returns the component of supplied type in any of its children using depth first search.



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



**`en`** Returns the component of supplied type in any of its children using depth first search.



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



**`en`** Returns all components of supplied type in the node.



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



**`en`** Returns all components of supplied type in the node.



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



**`en`** Returns all components of supplied type in self or any of its children.



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



**`en`** Returns all components of supplied type in self or any of its children.



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



**`en`** 
Pause the clip.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:496](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L496)&nbsp;
___
### play

<div style="margin-left: 10px;">

▸   **play**<`void`\> : `void`



**`en`** 
Play the clip.<br>
Restart if already playing.<br>
Resume if paused.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:472](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L472)&nbsp;
___
### resetInEditor

<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`



**`en`** Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
This function is only called in editor.<br/>




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### resume

<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`



**`en`** 
If a video is paused, call this method to resume playing.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:484](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L484)&nbsp;
___
### schedule

<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: any, interval: number, repeat: number, delay: number`) : `void`



**`en`** 
Schedules a custom task.<br/>
If the task is already scheduled, then the interval parameter will be updated without scheduling it again.



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



**`en`** Schedules a task that runs only once, with a delay of 0 or larger.



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



**`en`** 
Stop the clip.




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/video/video-player.ts:508](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player.ts#L508)&nbsp;
___
### unschedule

<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`



**`en`** Un-schedules a custom task.



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



**`en`** unschedule all scheduled tasks.



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




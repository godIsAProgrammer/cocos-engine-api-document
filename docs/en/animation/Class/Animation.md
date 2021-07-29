
## Class: Animation




`extend: `
[Component](docs/en/component/Class/Component.md)&nbsp;
[IEventified](docs/en/event/Interface/IEventified.md)&nbsp;










**`en`** 
Animation component governs a group of animation states to control playback of the states.
For convenient, it stores a group of animation clips.
Each of those clips would have an associated animation state uniquely created.
Animation component is eventful, it dispatch a serials playback status events.
See [[EventType]].


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


### playOnLoad
<div style="margin-left: 10px;">




**`en`** 
Whether the default clip should get into playing when this components starts.
Note, this field takes no effect if `crossFade()` or `play()` has been called before this component starts.




•  **playOnLoad**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L143)&nbsp;


___


### clips
<div style="margin-left: 10px;">




**`en`** 
Gets or sets clips this component governs.
When set, associated animation state of each existing clip will be stopped.
If the existing default clip is not in the set of new clips, default clip will be reset to null.




•  **clips**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L74)&nbsp;   [cocos/core/animation/animation-component.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L78)&nbsp;


___


### defaultClip
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the default clip.




**`en`** 
获取或设置默认剪辑。
设置时，若指定的剪辑不在 `this.clips` 中则会被自动添加至 `this.clips`。




**`see`** [[playOnLoad]]





•  **defaultClip**:
 ``null | AnimationClip`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L115)&nbsp;   [cocos/core/animation/animation-component.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L119)&nbsp;


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


### hideFlags
<div style="margin-left: 10px;">




**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


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


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


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


<!---->
<!--    #### Returns `AnimationState` The created animation state
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clip` | `AnimationClip` | The animation clip  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `undefined \| string` | The animation state name, if absent, the default clip's name will be used  |



##### Returns `AnimationState`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L324)&nbsp;
___
### addComponent
<div style="margin-left: 10px;">

▸   **addComponent**(`classConstructor: Constructor`)




**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.




**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.addComponent(Sprite);


```




<!---->

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




<!---->

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




**`en`** 
Creates a state for specified clip.
If there is already a clip with same name, the existing animation state will be stopped and overridden.




<!---->
<!--    #### Returns `AnimationState` The animation state created
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clip` | `AnimationClip` | The animation clip  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `undefined \| string` | The animation state name, if absent, the default clip's name will be used  |



##### Returns `AnimationState`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L294)&nbsp;
___
### crossFade
<div style="margin-left: 10px;">

▸   **crossFade**<`void`\>(`name: string, duration: number`) : `void`




**`en`** 
Smoothly switch to play specified animation state.




**`zn`** 
平滑地切换到指定动画状态。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | The name of the animation to switch to  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `duration` | `number` | The duration of the cross fade, default value is 0.3s  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L217)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
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
### getAnimationState
<div style="margin-left: 10px;">

▸   **getAnimationState**<`AnimationState`\>(`name: string`) : `AnimationState`




**`en`** 
Get specified animation state.




**`deprecated`** please use [[getState]]





<!---->
<!--    #### Returns `AnimationState` -->
<!---->

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




**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.




**`example`**

```ts


import { Sprite } from 'cc';
// get sprite component.
var sprite = node.getComponent(Sprite);


```




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




<!---->

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




**`en`** 
Get specified animation state.




<!---->
<!--    #### Returns `AnimationState` If no animation found, return null, otherwise the correspond animation state is returned
-->
<!---->

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
### off
<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: EventType, callback: undefined | , thisArg: any`) : `void`




**`en`** 
Unregister animation event callback.




**`example`**

```ts


// unregister event to all animation
animation.off('play', this.onPlay, this);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | The event type to unregister  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `undefined \| ` | The callback to unregister  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L430)&nbsp;
___
### on
<div style="margin-left: 10px;">

▸   **on**<`TFunction`\>(`type: EventType, callback: TFunction, thisArg: any, once: undefined | false | true`) : `TFunction`




**`en`** 
Register animation event callback.<bg>
The event arguments will provide the AnimationState which emit the event.<bg>
When play an animation, will auto register the event callback to the AnimationState,<bg>
and unregister the event callback from the AnimationState when animation stopped.




**`example`**

```ts


onPlay: function (type, state) {
    // callback
}

// register event to all animation
animation.on('play', this.onPlay, this);


```




<!---->
<!--    #### Returns `TFunction` The registered callback-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | The event type to listen to  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | The callback when event triggered  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `once` | `undefined \| false \| true` | - |



##### Returns `TFunction`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:400](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L400)&nbsp;
___
### onDestroy
<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L182)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:178](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L178)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L174)&nbsp;
___
### onFocusInEditor
<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLoad
<div style="margin-left: 10px;">

▸   **onLoad**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L160)&nbsp;
___
### onLostFocusInEditor
<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### once
<div style="margin-left: 10px;">

▸   **once**<`TFunction`\>(`type: EventType, callback: TFunction, thisArg: any`) : `TFunction`




<!---->
<!--    #### Returns `TFunction` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `TFunction` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `thisArg` | `any` | - |



##### Returns `TFunction`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:408](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L408)&nbsp;
___
### pause
<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`




**`en`** 
Pause all animation states and all switching.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L232)&nbsp;
___
### play
<div style="margin-left: 10px;">

▸   **play**<`void`\>(`name: undefined | string`) : `void`




**`en`** 
Switch to play specified animation state, without fading.




<!---->
<!--    #### Returns `void` -->
<!---->

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
### removeClip
<div style="margin-left: 10px;">

▸   **removeClip**<`void`\>(`clip: AnimationClip, force: undefined | false | true`) : `void`




**`en`** 
Remove clip from the animation list. This will remove the clip and any animation states based on it.<br>
If there are animation states depend on the clip are playing or clip is defaultClip, it will not delete the clip.<br>
But if force is true, then will always remove the clip and any animation states based on it. If clip is defaultClip,
defaultClip will be reset to null




**`deprecated`** please use [[removeState]]




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clip` | `AnimationClip` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `undefined \| false \| true` | If force is true, then will always remove the clip and any animation states based on it.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L344)&nbsp;
___
### removeState
<div style="margin-left: 10px;">

▸   **removeState**<`void`\>(`name: string`) : `void`




**`en`** 
Stops and removes specified clip.




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
This function is only called in editor.<br/>




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### resume
<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`




**`en`** 
Resume all animation states and all switching.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L242)&nbsp;
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `interval` | `number` | The time interval between each invocation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `repeat` | `number` | The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever  |

| Name | Type | Description |
| :------: | :------: | :------: |
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




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L452)&nbsp;
___
### start
<div style="margin-left: 10px;">

▸   **start**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L168)&nbsp;
___
### stop
<div style="margin-left: 10px;">

▸   **stop**<`void`\> : `void`




**`en`** 
Stop all animation states and all switching.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-component.ts:252](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-component.ts#L252)&nbsp;
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
### unschedule
<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`




**`en`** Un-schedules a custom task.




**`example`**

```ts


this.unschedule(_callback);


```




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
___
<!---->




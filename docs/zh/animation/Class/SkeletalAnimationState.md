
## Class: SkeletalAnimationState


`extend:`
[AnimationState](docs/zh/animation/Class/AnimationState.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ duration](#duration)
- [ frameRate](#frameRate)
- [ speed](#speed)
- [ time](#time)
- [ weight](#weight)
- [ clip](#clip)
- [ current](#current)
- [ curveLoaded](#curveLoaded)
- [ delay](#delay)
- [ isMotionless](#isMotionless)
- [ isPaused](#isPaused)
- [ isPlaying](#isPlaying)
- [ length](#length)
- [ name](#name)
- [ playbackRange](#playbackRange)
- [ ratio](#ratio)
- [ repeatCount](#repeatCount)
- [ wrapMode](#wrapMode)

### Constructors

- [ constructor](#constructor)

### Methods

- [ allowLastFrameEvent](#allowLastFrameEvent)
- [ destroy](#destroy)
- [ emit](#emit)
- [ initialize](#initialize)
- [ off](#off)
- [ on](#on)
- [ onPlay](#onPlay)
- [ once](#once)
- [ pause](#pause)
- [ play](#play)
- [ rebuildSocketCurves](#rebuildSocketCurves)
- [ resume](#resume)
- [ sample](#sample)
- [ setTime](#setTime)
- [ step](#step)
- [ stop](#stop)
- [ update](#update)
</div>

## Properties


### duration
<div style="margin-left: 10px;">



**`zh`** 单次动画的持续时间，秒。（动画长度）



**`readonly`** 





•  **duration**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L270)&nbsp;


___


### frameRate
<div style="margin-left: 10px;">




•  **frameRate**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:331](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L331)&nbsp;


___


### speed
<div style="margin-left: 10px;">



**`zh`** 播放速率。



**`default:`** 1.0





•  **speed**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L301)&nbsp;


___


### time
<div style="margin-left: 10px;">



**`zh`** 动画当前**累计播放**的时间，单位为秒。



**`default`** 0





•  **time**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:308](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L308)&nbsp;


___


### weight
<div style="margin-left: 10px;">
The weight.



The weight.

•  **weight**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:329](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L329)&nbsp;


___


### clip
<div style="margin-left: 10px;">



**`zh`** 此动画状态正在播放的剪辑。





•  **clip**:
 ``AnimationClip`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L176)&nbsp;


___


### current
<div style="margin-left: 10px;">



**`zh`** 获取动画的时间进度，单位为秒。





•  **current**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:314](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L314)&nbsp;


___


### curveLoaded
<div style="margin-left: 10px;">
This method is used for internal purpose only.



This method is used for internal purpose only.

•  **curveLoaded**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:397](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L397)&nbsp;


___


### delay
<div style="margin-left: 10px;">



**`zh`** 延迟多少秒播放。



**`default`** 0





•  **delay**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L255)&nbsp;   [cocos/core/animation/animation-state.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L259)&nbsp;


___


### isMotionless
<div style="margin-left: 10px;">



**`zh`** 该 `Playable` 是否已被暂停或停止。





•  **isMotionless**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L56)&nbsp;


___


### isPaused
<div style="margin-left: 10px;">



**`zh`** 该 `Playable` 是否已被暂停。



**`default`** false





•  **isPaused**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L48)&nbsp;


___


### isPlaying
<div style="margin-left: 10px;">



**`zh`** 该 `Playable` 是否正在播放状态。



**`default`** false





•  **isPlaying**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:39](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L39)&nbsp;


___


### length
<div style="margin-left: 10px;">




•  **length**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:188](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L188)&nbsp;


___


### name
<div style="margin-left: 10px;">



**`zh`** 动画的名字。





•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L184)&nbsp;


___


### playbackRange
<div style="margin-left: 10px;">



**`zh`** 
获取或设置播放范围。
范围的 `min`、`max` 字段都是以秒为单位的。
设置时，应当指定一个有效的范围；实际的播放范围是该字段和 [0, 周期] 之间的交集。
设置播放范围时将重置累计播放时间。





•  **playbackRange**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L284)&nbsp;   [cocos/core/animation/animation-state.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L288)&nbsp;


___


### ratio
<div style="margin-left: 10px;">



**`zh`** 获取动画播放的比例时间。





•  **ratio**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:322](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L322)&nbsp;


___


### repeatCount
<div style="margin-left: 10px;">



**`zh`** 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）。




**`default`** 1





•  **repeatCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L233)&nbsp;   [cocos/core/animation/animation-state.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L237)&nbsp;


___


### wrapMode
<div style="margin-left: 10px;">



**`zh`** 
动画循环方式。
需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount。



**`default:`** WrapMode.Normal





•  **wrapMode**:
 ``WrapMode`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L201)&nbsp;   [cocos/core/animation/animation-state.ts:205](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L205)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new SkeletalAnimationState**(`clip: AnimationClip, name: string`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clip` | `AnimationClip` |
| `name` | `string` |
</div>

##### Defined in &nbsp;   [cocos/3d/skeletal-animation/skeletal-animation-state.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skeletal-animation/skeletal-animation-state.ts#L72)&nbsp;


---

<!---->
## Methods

### allowLastFrameEvent

<div style="margin-left: 10px;">

▸   **allowLastFrameEvent**<`void`\>(`allowed: boolean`) : `void`



**`zh`** 
是否允许触发 `LastFrame` 事件。
该方法仅用作内部用途。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `allowed` | `boolean` | True if the last frame events may be triggered.This method is only used for internal purpose only.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:590](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L590)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:525](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L525)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`args: undefined`) : `void`



**`deprecated`** Since V1.1.1, animation states were no longer defined as event targets.
To process animation events, use `Animation` instead.




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `args` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:540](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L540)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`root: Node`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `root` | `Node` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/skeletal-animation/skeletal-animation-state.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skeletal-animation/skeletal-animation-state.ts#L79)&nbsp;
___
### off

<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: string, callback: Function, target: any`) : `void`



**`deprecated`** Since V1.1.1, animation states were no longer defined as event targets.
To process animation events, use `Animation` instead.




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |
| `callback` | `Function` | - |
| `target` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:575](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L575)&nbsp;
___
### on

<div style="margin-left: 10px;">

▸   **on**(`type: string, callback: Function, target: any`)



**`deprecated`** Since V1.1.1, animation states were no longer defined as event targets.
To process animation events, use `Animation` instead.




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |
| `callback` | `Function` | - |
| `target` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:549](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L549)&nbsp;
___
### onPlay

<div style="margin-left: 10px;">

▸   **onPlay**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/skeletal-animation/skeletal-animation-state.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skeletal-animation/skeletal-animation-state.ts#L99)&nbsp;
___
### once

<div style="margin-left: 10px;">

▸   **once**(`type: string, callback: Function, target: any`)



**`deprecated`** Since V1.1.1, animation states were no longer defined as event targets.
To process animation events, use `Animation` instead.




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |
| `callback` | `Function` | - |
| `target` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:562](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L562)&nbsp;
___
### pause

<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`



**`zh`** 暂停动画。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L100)&nbsp;
___
### play

<div style="margin-left: 10px;">

▸   **play**<`void`\> : `void`



**`zh`** 播放动画。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L68)&nbsp;
___
### rebuildSocketCurves

<div style="margin-left: 10px;">

▸   **rebuildSocketCurves**<`void`\>(`sockets: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sockets` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/3d/skeletal-animation/skeletal-animation-state.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/3d/skeletal-animation/skeletal-animation-state.ts#L120)&nbsp;
___
### resume

<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`



**`zh`** 重新播放动画。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L111)&nbsp;
___
### sample

<div style="margin-left: 10px;">

▸   **sample**<`WrappedInfo`\> : `WrappedInfo`




##### Returns `WrappedInfo`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:648](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L648)&nbsp;
___
### setTime

<div style="margin-left: 10px;">

▸   **setTime**<`void`\>(`time: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `time` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:601](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L601)&nbsp;
___
### step

<div style="margin-left: 10px;">

▸   **step**<`void`\> : `void`



**`zh`** 执行一帧动画。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L122)&nbsp;
___
### stop

<div style="margin-left: 10px;">

▸   **stop**<`void`\> : `void`



**`zh`** 停止动画播放。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L86)&nbsp;
___
### update

<div style="margin-left: 10px;">

▸   **update**<`void`\>(`delta: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `delta` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:625](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L625)&nbsp;
___
<!---->




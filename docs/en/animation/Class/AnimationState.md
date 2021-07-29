
## Class: AnimationState


`extend:`
[Playable](docs/en/animation/Class/Playable.md)












**`en`** 
The AnimationState gives full control over animation playback process.
In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.


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
- [ once](#once)
- [ pause](#pause)
- [ play](#play)
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




**`en`** The iteration duration of this animation in seconds. (length)




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




**`en`** The animation's playback speed. 1 is normal playback speed.




**`default:`** 1.0





•  **speed**:
`number`  = `1`
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:301](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L301)&nbsp;


___


### time
<div style="margin-left: 10px;">




**`en`** The current accumulated time of this animation in seconds.




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




**`en`** The clip that is being played by this animation state.




•  **clip**:
 ``AnimationClip`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L176)&nbsp;


___


### current
<div style="margin-left: 10px;">




**`en`** Gets the time progress, in seconds.




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




**`en`** The start delay which represents the number of seconds from an animation's start time to the start of
the active interval.




**`default`** 0





•  **delay**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L255)&nbsp;   [cocos/core/animation/animation-state.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L259)&nbsp;


___


### isMotionless
<div style="margin-left: 10px;">




**`en`** Whether if this `Playable` has been paused or stopped.




•  **isMotionless**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L56)&nbsp;


___


### isPaused
<div style="margin-left: 10px;">




**`en`** Whether if this `Playable` has been paused. This can be true even if in edit mode(isPlaying == false).




**`default`** false





•  **isPaused**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L48)&nbsp;


___


### isPlaying
<div style="margin-left: 10px;">




**`en`** Whether if this `Playable` is in playing.




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




**`en`** The name of the playing animation.




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L184)&nbsp;


___


### playbackRange
<div style="margin-left: 10px;">




**`en`** 
Gets or sets the playback range.
The `min` and `max` field of the range are measured in seconds.
While setting, the range object should be a valid range.
The actual playback range would be the inclusion of this field and [0, duration].




•  **playbackRange**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:284](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L284)&nbsp;   [cocos/core/animation/animation-state.ts:288](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L288)&nbsp;


___


### ratio
<div style="margin-left: 10px;">




**`en`** Gets the playback ratio.




•  **ratio**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:322](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L322)&nbsp;


___


### repeatCount
<div style="margin-left: 10px;">




**`en`** The animation's iteration count property.

A real number greater than or equal to zero (including positive infinity) representing the number of times
to repeat the animation node.

Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
calculations.





**`default`** 1





•  **repeatCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L233)&nbsp;   [cocos/core/animation/animation-state.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L237)&nbsp;


___


### wrapMode
<div style="margin-left: 10px;">




**`en`** 
Wrapping mode of the playing animation.
Notice : dynamic change wrapMode will reset time and repeatCount property




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

• **new AnimationState**(`clip: AnimationClip, name: string`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `clip` | `AnimationClip` |





| Name | Type |
| :------ | :------ |
| `name` | `string` |





</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:378](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L378)&nbsp;


---

<!---->
## Methods

### allowLastFrameEvent
<div style="margin-left: 10px;">

▸   **allowLastFrameEvent**<`void`\>(`allowed: boolean`) : `void`




**`en`** 
Whether `LastFrame` should be triggered.




<!---->
<!--    #### Returns `void` -->
<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:525](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L525)&nbsp;
___
### emit
<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`args: undefined`) : `void`




**`deprecated`** Since V1.1.1, animation states were no longer defined as event targets.
To process animation events, use `Animation` instead.





<!---->
<!--    #### Returns `void` -->
<!---->

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

▸   **initialize**<`void`\>(`root: Node, propertyCurves: undefined`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `root` | `Node` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `propertyCurves` |  | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L401)&nbsp;
___
### off
<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: string, callback: Function, target: any`) : `void`




**`deprecated`** Since V1.1.1, animation states were no longer defined as event targets.
To process animation events, use `Animation` instead.





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `Function` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
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





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `Function` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:549](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L549)&nbsp;
___
### once
<div style="margin-left: 10px;">

▸   **once**(`type: string, callback: Function, target: any`)




**`deprecated`** Since V1.1.1, animation states were no longer defined as event targets.
To process animation events, use `Animation` instead.





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `Function` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `target` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:562](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L562)&nbsp;
___
### pause
<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`




**`en`** Pause this animation.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L100)&nbsp;
___
### play
<div style="margin-left: 10px;">

▸   **play**<`void`\> : `void`




**`en`** Play this animation.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L68)&nbsp;
___
### resume
<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`




**`en`** Resume this animation.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L111)&nbsp;
___
### sample
<div style="margin-left: 10px;">

▸   **sample**<`WrappedInfo`\> : `WrappedInfo`




<!---->
<!--    #### Returns `WrappedInfo` -->
<!---->


##### Returns `WrappedInfo`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:648](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L648)&nbsp;
___
### setTime
<div style="margin-left: 10px;">

▸   **setTime**<`void`\>(`time: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`en`** Perform a single frame step.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L122)&nbsp;
___
### stop
<div style="margin-left: 10px;">

▸   **stop**<`void`\> : `void`




**`en`** Stop this animation.




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L86)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`delta: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `delta` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/animation-state.ts:625](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/animation-state.ts#L625)&nbsp;
___
<!---->
<!---->




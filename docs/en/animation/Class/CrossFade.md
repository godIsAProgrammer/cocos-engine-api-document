
## Class: CrossFade


`extend:`
[Playable](docs/en/animation/Class/Playable.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isMotionless](#isMotionless)
- [ isPaused](#isPaused)
- [ isPlaying](#isPlaying)

### Constructors

- [ constructor](#constructor)

### Methods

- [ clear](#clear)
- [ crossFade](#crossFade)
- [ pause](#pause)
- [ play](#play)
- [ resume](#resume)
- [ step](#step)
- [ stop](#stop)
- [ update](#update)
</div>

## Properties


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

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new CrossFade**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/animation/cross-fade.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cross-fade.ts#L50)&nbsp;


---

<!---->
## Methods

### clear
<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/cross-fade.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cross-fade.ts#L115)&nbsp;
___
### crossFade
<div style="margin-left: 10px;">

▸   **crossFade**<`void`\>(`state: AnimationState | null, duration: number`) : `void`


在指定时间内将从当前动画状态切换到指定的动画状态。


<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `state` | `AnimationState \| null` | 指定的动画状态。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `duration` | `number` | 切换时间。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/cross-fade.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cross-fade.ts#L86)&nbsp;
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

▸   **update**<`void`\>(`deltaTime: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `deltaTime` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/animation/cross-fade.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/cross-fade.ts#L56)&nbsp;
___
<!---->




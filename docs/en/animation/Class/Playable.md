
## Class: Playable





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isMotionless](#isMotionless)
- [ isPaused](#isPaused)
- [ isPlaying](#isPlaying)

### Methods

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
## Methods

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

##### Defined in &nbsp;   [cocos/core/animation/playable.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/animation/playable.ts#L130)&nbsp;
___
<!---->




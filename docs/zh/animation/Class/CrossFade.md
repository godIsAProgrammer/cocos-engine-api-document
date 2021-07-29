
## Class: CrossFade


`extend:`
[Playable](docs/zh/animation/Class/Playable.md)










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




**`zh`** 暂停动画。





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




**`zh`** 播放动画。





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




**`zh`** 重新播放动画。





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




**`zh`** 执行一帧动画。





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




**`zh`** 停止动画播放。





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




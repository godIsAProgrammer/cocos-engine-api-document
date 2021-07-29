
## Class: VideoPlayerImpl





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ UICamera](#UICamera)
- [ componentEventList](#componentEventList)
- [ fullScreenOnAwake](#fullScreenOnAwake)
- [ isPlaying](#isPlaying)
- [ loaded](#loaded)
- [ state](#state)
- [ video](#video)

### Constructors

- [ constructor](#constructor)

### Methods

- [ canFullScreen](#canFullScreen)
- [ canPlay](#canPlay)
- [ createVideoPlayer](#createVideoPlayer)
- [ delayedFullScreen](#delayedFullScreen)
- [ delayedPlay](#delayedPlay)
- [ destroy](#destroy)
- [ disable](#disable)
- [ enable](#enable)
- [ getCurrentTime](#getCurrentTime)
- [ getDuration](#getDuration)
- [ onCanPlay](#onCanPlay)
- [ onClick](#onClick)
- [ onEnded](#onEnded)
- [ onError](#onError)
- [ onLoadedMetadata](#onLoadedMetadata)
- [ onPause](#onPause)
- [ onPlay](#onPlay)
- [ onPlaying](#onPlaying)
- [ onStoped](#onStoped)
- [ pause](#pause)
- [ play](#play)
- [ removeVideoPlayer](#removeVideoPlayer)
- [ resume](#resume)
- [ seekTo](#seekTo)
- [ stop](#stop)
- [ syncClip](#syncClip)
- [ syncFullScreenOnAwake](#syncFullScreenOnAwake)
- [ syncKeepAspectRatio](#syncKeepAspectRatio)
- [ syncLoop](#syncLoop)
- [ syncMatrix](#syncMatrix)
- [ syncMute](#syncMute)
- [ syncPlaybackRate](#syncPlaybackRate)
- [ syncStayOnBottom](#syncStayOnBottom)
- [ syncURL](#syncURL)
- [ syncVolume](#syncVolume)
</div>

## Properties


### UICamera
<div style="margin-left: 10px;">




•  **UICamera**:
 ``null | Camera`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L134)&nbsp;


___


### componentEventList
<div style="margin-left: 10px;">




•  **componentEventList**:
 ``Map`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L130)&nbsp;


___


### fullScreenOnAwake
<div style="margin-left: 10px;">




•  **fullScreenOnAwake**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L128)&nbsp;


___


### isPlaying
<div style="margin-left: 10px;">




•  **isPlaying**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L133)&nbsp;


___


### loaded
<div style="margin-left: 10px;">




•  **loaded**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L129)&nbsp;


___


### state
<div style="margin-left: 10px;">




•  **state**:
 ``EventType`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L132)&nbsp;


___


### video
<div style="margin-left: 10px;">




•  **video**:
 ``null | HTMLVideoElement`` 
</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L131)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new VideoPlayerImpl**(`component: any`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `component` | `any` |





</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L77)&nbsp;


---

<!---->
## Methods

### canFullScreen
<div style="margin-left: 10px;">

▸   **canFullScreen**<`void`\>(`enabled: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L101)&nbsp;
___
### canPlay
<div style="margin-left: 10px;">

▸   **canPlay**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L100)&nbsp;
___
### createVideoPlayer
<div style="margin-left: 10px;">

▸   **createVideoPlayer**<`void`\>(`url: string`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:109](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L109)&nbsp;
___
### delayedFullScreen
<div style="margin-left: 10px;">

▸   **delayedFullScreen**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L226)&nbsp;
___
### delayedPlay
<div style="margin-left: 10px;">

▸   **delayedPlay**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:210](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L210)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:258](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L258)&nbsp;
___
### disable
<div style="margin-left: 10px;">

▸   **disable**<`void`\>(`noPause: undefined | false | true`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `noPause` | `undefined \| false \| true` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L112)&nbsp;
___
### enable
<div style="margin-left: 10px;">

▸   **enable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L111)&nbsp;
___
### getCurrentTime
<div style="margin-left: 10px;">

▸   **getCurrentTime**<`number`\> : `number`




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L127)&nbsp;
___
### getDuration
<div style="margin-left: 10px;">

▸   **getDuration**<`number`\> : `number`




<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L126)&nbsp;
___
### onCanPlay
<div style="margin-left: 10px;">

▸   **onCanPlay**<`void`\>(`e: Event`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e` | `Event` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L156)&nbsp;
___
### onClick
<div style="margin-left: 10px;">

▸   **onClick**<`void`\>(`e: Event`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e` | `Event` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:189](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L189)&nbsp;
___
### onEnded
<div style="margin-left: 10px;">

▸   **onEnded**<`void`\>(`e: Event`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e` | `Event` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:185](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L185)&nbsp;
___
### onError
<div style="margin-left: 10px;">

▸   **onError**<`void`\>(`e: Event`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e` | `Event` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L193)&nbsp;
___
### onLoadedMetadata
<div style="margin-left: 10px;">

▸   **onLoadedMetadata**<`void`\>(`e: Event`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e` | `Event` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L139)&nbsp;
___
### onPause
<div style="margin-left: 10px;">

▸   **onPause**<`void`\>(`e: Event`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e` | `Event` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L170)&nbsp;
___
### onPlay
<div style="margin-left: 10px;">

▸   **onPlay**<`void`\>(`e: Event`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e` | `Event` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L161)&nbsp;
___
### onPlaying
<div style="margin-left: 10px;">

▸   **onPlaying**<`void`\>(`e: Event`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e` | `Event` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L166)&nbsp;
___
### onStoped
<div style="margin-left: 10px;">

▸   **onStoped**<`void`\>(`e: Event`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `e` | `Event` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L179)&nbsp;
___
### pause
<div style="margin-left: 10px;">

▸   **pause**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L103)&nbsp;
___
### play
<div style="margin-left: 10px;">

▸   **play**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:202](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L202)&nbsp;
___
### removeVideoPlayer
<div style="margin-left: 10px;">

▸   **removeVideoPlayer**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L110)&nbsp;
___
### resume
<div style="margin-left: 10px;">

▸   **resume**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L104)&nbsp;
___
### seekTo
<div style="margin-left: 10px;">

▸   **seekTo**<`void`\>(`val: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `val` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L106)&nbsp;
___
### stop
<div style="margin-left: 10px;">

▸   **stop**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L105)&nbsp;
___
### syncClip
<div style="margin-left: 10px;">

▸   **syncClip**<`void`\>(`clip: any`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `clip` | `any` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L115)&nbsp;
___
### syncFullScreenOnAwake
<div style="margin-left: 10px;">

▸   **syncFullScreenOnAwake**<`void`\>(`enabled: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L217)&nbsp;
___
### syncKeepAspectRatio
<div style="margin-left: 10px;">

▸   **syncKeepAspectRatio**<`void`\>(`enabled: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L118)&nbsp;
___
### syncLoop
<div style="margin-left: 10px;">

▸   **syncLoop**<`void`\>(`enabled: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L122)&nbsp;
___
### syncMatrix
<div style="margin-left: 10px;">

▸   **syncMatrix**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L123)&nbsp;
___
### syncMute
<div style="margin-left: 10px;">

▸   **syncMute**<`void`\>(`enabled: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L121)&nbsp;
___
### syncPlaybackRate
<div style="margin-left: 10px;">

▸   **syncPlaybackRate**<`void`\>(`val: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `val` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L119)&nbsp;
___
### syncStayOnBottom
<div style="margin-left: 10px;">

▸   **syncStayOnBottom**<`void`\>(`enabled: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enabled` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:117](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L117)&nbsp;
___
### syncURL
<div style="margin-left: 10px;">

▸   **syncURL**<`void`\>(`url: string`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L116)&nbsp;
___
### syncVolume
<div style="margin-left: 10px;">

▸   **syncVolume**<`void`\>(`val: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `val` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/video/video-player-impl.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/video/video-player-impl.ts#L120)&nbsp;
___
<!---->




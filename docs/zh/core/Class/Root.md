
## Class: Root






**`zh`** 
Root类



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ batcher2D](#batcher2D)
- [ cumulativeTime](#cumulativeTime)
- [ curWindow](#curWindow)
- [ dataPoolManager](#dataPoolManager)
- [ device](#device)
- [ fixedFPS](#fixedFPS)
- [ fps](#fps)
- [ frameCount](#frameCount)
- [ frameTime](#frameTime)
- [ handle](#handle)
- [ mainWindow](#mainWindow)
- [ pipeline](#pipeline)
- [ scenes](#scenes)
- [ tempWindow](#tempWindow)
- [ useDeferredPipeline](#useDeferredPipeline)
- [ windows](#windows)

### Constructors

- [ constructor](#constructor)

### Methods

- [ activeWindow](#activeWindow)
- [ createCamera](#createCamera)
- [ createLight](#createLight)
- [ createModel](#createModel)
- [ createScene](#createScene)
- [ createWindow](#createWindow)
- [ destroy](#destroy)
- [ destroyLight](#destroyLight)
- [ destroyModel](#destroyModel)
- [ destroyScene](#destroyScene)
- [ destroyScenes](#destroyScenes)
- [ destroyWindow](#destroyWindow)
- [ destroyWindows](#destroyWindows)
- [ frameMove](#frameMove)
- [ initialize](#initialize)
- [ onGlobalPipelineStateChanged](#onGlobalPipelineStateChanged)
- [ resetCumulativeTime](#resetCumulativeTime)
- [ resize](#resize)
- [ setRenderPipeline](#setRenderPipeline)
</div>

## Properties


### batcher2D
<div style="margin-left: 10px;">



**`zh`** 
UI实例
引擎内部使用，用户无需调用此接口





•  **batcher2D**:
 ``Batcher2D`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L129)&nbsp;


___


### cumulativeTime
<div style="margin-left: 10px;">



**`zh`** 
累计时间（秒）





•  **cumulativeTime**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L145)&nbsp;


___


### curWindow
<div style="margin-left: 10px;">



**`zh`** 
当前窗口





•  **curWindow**:
 ``RenderWindow | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L88)&nbsp;   [cocos/core/root.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L92)&nbsp;


___


### dataPoolManager
<div style="margin-left: 10px;">




•  **dataPoolManager**:
 ``DataPoolManager`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L190)&nbsp;


___


### device
<div style="margin-left: 10px;">



**`zh`** 
GFX 设备





•  **device**:
 ``Device`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L72)&nbsp;


___


### fixedFPS
<div style="margin-left: 10px;">



**`zh`** 
每秒固定帧率





•  **fixedFPS**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L177)&nbsp;   [cocos/core/root.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L186)&nbsp;


___


### fps
<div style="margin-left: 10px;">



**`zh`** 
每秒帧率





•  **fps**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L169)&nbsp;


___


### frameCount
<div style="margin-left: 10px;">



**`zh`** 
一秒内的累计帧数





•  **frameCount**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L161)&nbsp;


___


### frameTime
<div style="margin-left: 10px;">



**`zh`** 
帧时间（秒）





•  **frameTime**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L153)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``RootHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L194)&nbsp;


___


### mainWindow
<div style="margin-left: 10px;">



**`zh`** 
主窗口





•  **mainWindow**:
 ``RenderWindow | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L80)&nbsp;


___


### pipeline
<div style="margin-left: 10px;">



**`zh`** 
渲染管线





•  **pipeline**:
 ``RenderPipeline`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L120)&nbsp;


___


### scenes
<div style="margin-left: 10px;">



**`zh`** 
场景列表





•  **scenes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L137)&nbsp;


___


### tempWindow
<div style="margin-left: 10px;">



**`zh`** 
临时窗口（用于数据传输）





•  **tempWindow**:
 ``RenderWindow | null`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L100)&nbsp;   [cocos/core/root.ts:104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L104)&nbsp;


___


### useDeferredPipeline
<div style="margin-left: 10px;">




•  **useDeferredPipeline**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L198)&nbsp;


___


### windows
<div style="margin-left: 10px;">



**`zh`** 
窗口列表





•  **windows**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L112)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Root**(`device: Device`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `Device` |
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L223)&nbsp;


---

<!---->
## Methods

### activeWindow

<div style="margin-left: 10px;">

▸   **activeWindow**<`void`\>(`window: RenderWindow`) : `void`



**`zh`** 
激活指定窗口为当前窗口



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `window` | `RenderWindow` | GFX 窗口  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:362](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L362)&nbsp;
___
### createCamera

<div style="margin-left: 10px;">

▸   **createCamera**<`Camera`\> : `Camera`




##### Returns `Camera`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:532](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L532)&nbsp;
___
### createLight

<div style="margin-left: 10px;">

▸   **createLight**<`T`\>(`LightCtor: undefined`) : `T`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `LightCtor` |  | - |


##### Returns `T`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:536](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L536)&nbsp;
___
### createModel

<div style="margin-left: 10px;">

▸   **createModel**<`T`\>(`ModelCtor: undefined`) : `T`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ModelCtor` |  | - |


##### Returns `T`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:508](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L508)&nbsp;
___
### createScene

<div style="margin-left: 10px;">

▸   **createScene**<`RenderScene`\>(`info: IRenderSceneInfo`) : `RenderScene`



**`zh`** 
创建渲染场景



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IRenderSceneInfo` | 渲染场景描述信息  |


##### Returns `RenderScene`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:475](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L475)&nbsp;
___
### createWindow

<div style="margin-left: 10px;">

▸   **createWindow**(`info: IRenderWindowInfo`)



**`zh`** 
创建窗口



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IRenderWindowInfo` | GFX 窗口描述信息  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:437](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L437)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L270)&nbsp;
___
### destroyLight

<div style="margin-left: 10px;">

▸   **destroyLight**<`void`\>(`l: Light`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `l` | `Light` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:547](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L547)&nbsp;
___
### destroyModel

<div style="margin-left: 10px;">

▸   **destroyModel**<`void`\>(`m: Model`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `m` | `Model` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:519](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L519)&nbsp;
___
### destroyScene

<div style="margin-left: 10px;">

▸   **destroyScene**<`void`\>(`scene: RenderScene`) : `void`



**`zh`** 
销毁指定的渲染场景



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scene` | `RenderScene` | 渲染场景  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:487](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L487)&nbsp;
___
### destroyScenes

<div style="margin-left: 10px;">

▸   **destroyScenes**<`void`\> : `void`



**`zh`** 
销毁全部场景





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:501](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L501)&nbsp;
___
### destroyWindow

<div style="margin-left: 10px;">

▸   **destroyWindow**<`void`\>(`window: RenderWindow`) : `void`



**`zh`** 
销毁指定的窗口



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `window` | `RenderWindow` | GFX 窗口  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:449](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L449)&nbsp;
___
### destroyWindows

<div style="margin-left: 10px;">

▸   **destroyWindows**<`void`\> : `void`



**`zh`** 
销毁全部窗口





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:463](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L463)&nbsp;
___
### frameMove

<div style="margin-left: 10px;">

▸   **frameMove**<`void`\>(`deltaTime: number`) : `void`



**`zh`** 
每帧执行函数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `deltaTime` | `number` | 间隔时间  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:379](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L379)&nbsp;
___
### initialize

<div style="margin-left: 10px;">

▸   **initialize**<`Promise`\>(`info: IRootInfo`) : `Promise`



**`zh`** 
初始化函数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `IRootInfo` | Root描述信息  |


##### Returns `Promise`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L244)&nbsp;
___
### onGlobalPipelineStateChanged

<div style="margin-left: 10px;">

▸   **onGlobalPipelineStateChanged**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:349](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L349)&nbsp;
___
### resetCumulativeTime

<div style="margin-left: 10px;">

▸   **resetCumulativeTime**<`void`\> : `void`



**`zh`** 
重置累计时间





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L370)&nbsp;
___
### resize

<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`width: number, height: number`) : `void`



**`zh`** 
重置大小



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | 屏幕宽度  |
| `height` | `number` | 屏幕高度  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:299](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L299)&nbsp;
___
### setRenderPipeline

<div style="margin-left: 10px;">

▸   **setRenderPipeline**<`boolean`\>(`rppl: RenderPipeline`) : `boolean`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `rppl` | `RenderPipeline` | - |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/root.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/root.ts#L318)&nbsp;
___
<!---->




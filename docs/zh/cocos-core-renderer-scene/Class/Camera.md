
## Class: Camera





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ isWindowSize](#isWindowSize)
- [ screenScale](#screenScale)
- [ aperture](#aperture)
- [ apertureValue](#apertureValue)
- [ aspect](#aspect)
- [ clearColor](#clearColor)
- [ clearDepth](#clearDepth)
- [ clearFlag](#clearFlag)
- [ clearStencil](#clearStencil)
- [ ec](#ec)
- [ enabled](#enabled)
- [ exposure](#exposure)
- [ farClip](#farClip)
- [ forward](#forward)
- [ fov](#fov)
- [ fovAxis](#fovAxis)
- [ frustum](#frustum)
- [ handle](#handle)
- [ height](#height)
- [ iso](#iso)
- [ isoValue](#isoValue)
- [ matProj](#matProj)
- [ matProjInv](#matProjInv)
- [ matView](#matView)
- [ matViewInv](#matViewInv)
- [ matViewProj](#matViewProj)
- [ matViewProjInv](#matViewProjInv)
- [ name](#name)
- [ nearClip](#nearClip)
- [ node](#node)
- [ orthoHeight](#orthoHeight)
- [ position](#position)
- [ priority](#priority)
- [ projectionType](#projectionType)
- [ scene](#scene)
- [ shutter](#shutter)
- [ shutterValue](#shutterValue)
- [ viewport](#viewport)
- [ visibility](#visibility)
- [ width](#width)
- [ window](#window)

### Constructors

- [ constructor](#constructor)

### Methods

- [ attachToScene](#attachToScene)
- [ changeTargetWindow](#changeTargetWindow)
- [ destroy](#destroy)
- [ detachCamera](#detachCamera)
- [ detachFromScene](#detachFromScene)
- [ initialize](#initialize)
- [ resize](#resize)
- [ screenPointToRay](#screenPointToRay)
- [ screenToWorld](#screenToWorld)
- [ setFixedSize](#setFixedSize)
- [ update](#update)
- [ worldMatrixToScreen](#worldMatrixToScreen)
- [ worldToScreen](#worldToScreen)
</div>

## Properties


### isWindowSize
<div style="margin-left: 10px;">




•  **isWindowSize**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L127)&nbsp;


___


### screenScale
<div style="margin-left: 10px;">




•  **screenScale**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L128)&nbsp;


___


### aperture
<div style="margin-left: 10px;">




•  **aperture**:
 ``CameraAperture`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:555](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L555)&nbsp;   [cocos/core/renderer/scene/camera.ts:561](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L561)&nbsp;


___


### apertureValue
<div style="margin-left: 10px;">




•  **apertureValue**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:565](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L565)&nbsp;


___


### aspect
<div style="margin-left: 10px;">




•  **aspect**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L447)&nbsp;


___


### clearColor
<div style="margin-left: 10px;">




•  **clearColor**:
 ``IVec4Like`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:379](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L379)&nbsp;   [cocos/core/renderer/scene/camera.ts:387](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L387)&nbsp;


___


### clearDepth
<div style="margin-left: 10px;">




•  **clearDepth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:617](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L617)&nbsp;   [cocos/core/renderer/scene/camera.ts:621](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L621)&nbsp;


___


### clearFlag
<div style="margin-left: 10px;">




•  **clearFlag**:
 ``ClearFlags`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:609](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L609)&nbsp;   [cocos/core/renderer/scene/camera.ts:613](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L613)&nbsp;


___


### clearStencil
<div style="margin-left: 10px;">




•  **clearStencil**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:625](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L625)&nbsp;   [cocos/core/renderer/scene/camera.ts:629](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L629)&nbsp;


___


### ec
<div style="margin-left: 10px;">




•  **ec**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:597](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L597)&nbsp;   [cocos/core/renderer/scene/camera.ts:601](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L601)&nbsp;


___


### enabled
<div style="margin-left: 10px;">




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L317)&nbsp;   [cocos/core/renderer/scene/camera.ts:321](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L321)&nbsp;


___


### exposure
<div style="margin-left: 10px;">




•  **exposure**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:605](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L605)&nbsp;


___


### farClip
<div style="margin-left: 10px;">




•  **farClip**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L370)&nbsp;   [cocos/core/renderer/scene/camera.ts:375](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L375)&nbsp;


___


### forward
<div style="margin-left: 10px;">




•  **forward**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:522](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L522)&nbsp;   [cocos/core/renderer/scene/camera.ts:527](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L527)&nbsp;


___


### fov
<div style="margin-left: 10px;">




•  **fov**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L352)&nbsp;   [cocos/core/renderer/scene/camera.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L357)&nbsp;


___


### fovAxis
<div style="margin-left: 10px;">




•  **fovAxis**:
 ``CameraFOVAxis`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L343)&nbsp;   [cocos/core/renderer/scene/camera.ts:348](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L348)&nbsp;


___


### frustum
<div style="margin-left: 10px;">




•  **frustum**:
 ``Frustum`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:504](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L504)&nbsp;   [cocos/core/renderer/scene/camera.ts:509](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L509)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``CameraHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:633](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L633)&nbsp;


___


### height
<div style="margin-left: 10px;">




•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L443)&nbsp;


___


### iso
<div style="margin-left: 10px;">




•  **iso**:
 ``CameraISO`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L583)&nbsp;   [cocos/core/renderer/scene/camera.ts:589](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L589)&nbsp;


___


### isoValue
<div style="margin-left: 10px;">




•  **isoValue**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:593](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L593)&nbsp;


___


### matProj
<div style="margin-left: 10px;">




•  **matProj**:
 ``Mat4`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L468)&nbsp;   [cocos/core/renderer/scene/camera.ts:473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L473)&nbsp;


___


### matProjInv
<div style="margin-left: 10px;">




•  **matProjInv**:
 ``Mat4`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L477)&nbsp;   [cocos/core/renderer/scene/camera.ts:482](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L482)&nbsp;


___


### matView
<div style="margin-left: 10px;">




•  **matView**:
 ``Mat4`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L451)&nbsp;   [cocos/core/renderer/scene/camera.ts:456](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L456)&nbsp;


___


### matViewInv
<div style="margin-left: 10px;">




•  **matViewInv**:
 ``null | Mat4`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:460](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L460)&nbsp;   [cocos/core/renderer/scene/camera.ts:464](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L464)&nbsp;


___


### matViewProj
<div style="margin-left: 10px;">




•  **matViewProj**:
 ``Mat4`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:486](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L486)&nbsp;   [cocos/core/renderer/scene/camera.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L491)&nbsp;


___


### matViewProjInv
<div style="margin-left: 10px;">




•  **matViewProjInv**:
 ``Mat4`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:495](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L495)&nbsp;   [cocos/core/renderer/scene/camera.ts:500](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L500)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``null | string`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:435](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L435)&nbsp;


___


### nearClip
<div style="margin-left: 10px;">




•  **nearClip**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:361](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L361)&nbsp;   [cocos/core/renderer/scene/camera.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L366)&nbsp;


___


### node
<div style="margin-left: 10px;">




•  **node**:
 ``Node`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:309](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L309)&nbsp;   [cocos/core/renderer/scene/camera.ts:313](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L313)&nbsp;


___


### orthoHeight
<div style="margin-left: 10px;">




•  **orthoHeight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L325)&nbsp;   [cocos/core/renderer/scene/camera.ts:330](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L330)&nbsp;


___


### position
<div style="margin-left: 10px;">




•  **position**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:531](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L531)&nbsp;   [cocos/core/renderer/scene/camera.ts:536](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L536)&nbsp;


___


### priority
<div style="margin-left: 10px;">




•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:547](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L547)&nbsp;   [cocos/core/renderer/scene/camera.ts:551](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L551)&nbsp;


___


### projectionType
<div style="margin-left: 10px;">




•  **projectionType**:
 ``CameraProjection`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:334](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L334)&nbsp;   [cocos/core/renderer/scene/camera.ts:339](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L339)&nbsp;


___


### scene
<div style="margin-left: 10px;">




•  **scene**:
 ``null | RenderScene`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:431](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L431)&nbsp;


___


### shutter
<div style="margin-left: 10px;">




•  **shutter**:
 ``CameraShutter`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:569](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L569)&nbsp;   [cocos/core/renderer/scene/camera.ts:575](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L575)&nbsp;


___


### shutterValue
<div style="margin-left: 10px;">




•  **shutterValue**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:579](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L579)&nbsp;


___


### viewport
<div style="margin-left: 10px;">




•  **viewport**:
 ``Rect`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L391)&nbsp;   [cocos/core/renderer/scene/camera.ts:395](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L395)&nbsp;


___


### visibility
<div style="margin-left: 10px;">




•  **visibility**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:540](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L540)&nbsp;   [cocos/core/renderer/scene/camera.ts:543](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L543)&nbsp;


___


### width
<div style="margin-left: 10px;">




•  **width**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:439](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L439)&nbsp;


___


### window
<div style="margin-left: 10px;">




•  **window**:
 ``null | RenderWindow`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:513](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L513)&nbsp;   [cocos/core/renderer/scene/camera.ts:518](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L518)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Camera**(`device: Device`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `device` | `Device` |





</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:165](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L165)&nbsp;


---

<!---->
## Methods

### attachToScene
<div style="margin-left: 10px;">

▸   **attachToScene**<`void`\>(`scene: RenderScene`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scene` | `RenderScene` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L226)&nbsp;
___
### changeTargetWindow
<div style="margin-left: 10px;">

▸   **changeTargetWindow**<`void`\>(`window: RenderWindow | null`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `window` | `RenderWindow \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:637](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L637)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:211](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L211)&nbsp;
___
### detachCamera
<div style="margin-left: 10px;">

▸   **detachCamera**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:650](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L650)&nbsp;
___
### detachFromScene
<div style="margin-left: 10px;">

▸   **detachFromScene**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L232)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`void`\>(`info: ICameraInfo`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `info` | `ICameraInfo` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L184)&nbsp;
___
### resize
<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`width: number, height: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:238](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L238)&nbsp;
___
### screenPointToRay
<div style="margin-left: 10px;">

▸   **screenPointToRay**<`Ray`\>(`out: Ray, x: number, y: number`) : `Ray`


transform a screen position (in oriented space) to a world space ray


<!---->
<!--    #### Returns `Ray` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Ray` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |



##### Returns `Ray`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:659](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L659)&nbsp;
___
### screenToWorld
<div style="margin-left: 10px;">

▸   **screenToWorld**<`Vec3`\>(`out: Vec3, screenPos: Vec3`) : `Vec3`


transform a screen position (in oriented space) to world space


<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `screenPos` | `Vec3` | - |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:695](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L695)&nbsp;
___
### setFixedSize
<div style="margin-left: 10px;">

▸   **setFixedSize**<`void`\>(`width: number, height: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:246](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L246)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\>(`forceUpdate: boolean`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `forceUpdate` | `boolean` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L254)&nbsp;
___
### worldMatrixToScreen
<div style="margin-left: 10px;">

▸   **worldMatrixToScreen**<`Mat4`\>(`out: Mat4, worldMatrix: Mat4, width: number, height: number`) : `Mat4`


transform a world space matrix to screen space


<!---->
<!--    #### Returns `Mat4` the resulting vector
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Mat4` | the resulting vector  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldMatrix` | `Mat4` | the world space matrix to be transformed  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | framebuffer width  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `number` | framebuffer height  |



##### Returns `Mat4`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:774](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L774)&nbsp;
___
### worldToScreen
<div style="margin-left: 10px;">

▸   **worldToScreen**<`Vec3`\>(`out: Vec3, worldPos: Vec3`) : `Vec3`


transform a world space position to screen space


<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldPos` | `Vec3` | - |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/camera.ts:742](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/camera.ts#L742)&nbsp;
___
<!---->




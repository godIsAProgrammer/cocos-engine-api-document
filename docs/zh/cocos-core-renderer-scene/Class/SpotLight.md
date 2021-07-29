
## Class: SpotLight


`extend:`
[Light](docs/zh/cocos-core-renderer-scene/Class/Light.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ aabb](#aabb)
- [ aspect](#aspect)
- [ baked](#baked)
- [ color](#color)
- [ colorTemperature](#colorTemperature)
- [ colorTemperatureRGB](#colorTemperatureRGB)
- [ direction](#direction)
- [ frustum](#frustum)
- [ handle](#handle)
- [ luminance](#luminance)
- [ name](#name)
- [ node](#node)
- [ position](#position)
- [ range](#range)
- [ scene](#scene)
- [ size](#size)
- [ spotAngle](#spotAngle)
- [ type](#type)
- [ useColorTemperature](#useColorTemperature)

### Constructors

- [ constructor](#constructor)

### Methods

- [ attachToScene](#attachToScene)
- [ destroy](#destroy)
- [ detachFromScene](#detachFromScene)
- [ initialize](#initialize)
- [ update](#update)
</div>

## Properties


### aabb
<div style="margin-left: 10px;">




•  **aabb**:
 ``AABB`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:115](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L115)&nbsp;


___


### aspect
<div style="margin-left: 10px;">




•  **aspect**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L106)&nbsp;   [cocos/core/renderer/scene/spot-light.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L111)&nbsp;


___


### baked
<div style="margin-left: 10px;">




•  **baked**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L71)&nbsp;   [cocos/core/renderer/scene/light.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L75)&nbsp;


___


### color
<div style="margin-left: 10px;">




•  **color**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L79)&nbsp;   [cocos/core/renderer/scene/light.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L84)&nbsp;


___


### colorTemperature
<div style="margin-left: 10px;">




•  **colorTemperature**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L96)&nbsp;   [cocos/core/renderer/scene/light.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L102)&nbsp;


___


### colorTemperatureRGB
<div style="margin-left: 10px;">




•  **colorTemperatureRGB**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L106)&nbsp;


___


### direction
<div style="margin-left: 10px;">




•  **direction**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L92)&nbsp;


___


### frustum
<div style="margin-left: 10px;">




•  **frustum**:
 ``Frustum`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L119)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``IHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L138)&nbsp;


___


### luminance
<div style="margin-left: 10px;">




•  **luminance**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L84)&nbsp;   [cocos/core/renderer/scene/spot-light.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L88)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``null | string`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L126)&nbsp;   [cocos/core/renderer/scene/light.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L130)&nbsp;


___


### node
<div style="margin-left: 10px;">




•  **node**:
 ``null | Node`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L110)&nbsp;   [cocos/core/renderer/scene/light.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L118)&nbsp;


___


### position
<div style="margin-left: 10px;">




•  **position**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:62](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L62)&nbsp;


___


### range
<div style="margin-left: 10px;">




•  **range**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L74)&nbsp;   [cocos/core/renderer/scene/spot-light.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L80)&nbsp;


___


### scene
<div style="margin-left: 10px;">




•  **scene**:
 ``null | RenderScene`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L134)&nbsp;


___


### size
<div style="margin-left: 10px;">




•  **size**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:66](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L66)&nbsp;   [cocos/core/renderer/scene/spot-light.ts:70](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L70)&nbsp;


___


### spotAngle
<div style="margin-left: 10px;">




•  **spotAngle**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L96)&nbsp;   [cocos/core/renderer/scene/spot-light.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L100)&nbsp;


___


### type
<div style="margin-left: 10px;">




•  **type**:
 ``LightType`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L122)&nbsp;


___


### useColorTemperature
<div style="margin-left: 10px;">




•  **useColorTemperature**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L88)&nbsp;   [cocos/core/renderer/scene/light.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L92)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new SpotLight**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L121)&nbsp;


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

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:165](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L165)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L173)&nbsp;
___
### detachFromScene
<div style="margin-left: 10px;">

▸   **detachFromScene**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/light.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/light.ts#L169)&nbsp;
___
### initialize
<div style="margin-left: 10px;">

▸   **initialize**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L130)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/spot-light.ts:145](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/spot-light.ts#L145)&nbsp;
___
<!---->




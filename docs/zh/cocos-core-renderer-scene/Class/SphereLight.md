
## Class: SphereLight


`extend:`
[Light](docs/zh/cocos-core-renderer-scene/Class/Light.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ aabb](#aabb)
- [ baked](#baked)
- [ color](#color)
- [ colorTemperature](#colorTemperature)
- [ colorTemperatureRGB](#colorTemperatureRGB)
- [ handle](#handle)
- [ luminance](#luminance)
- [ name](#name)
- [ node](#node)
- [ position](#position)
- [ range](#range)
- [ scene](#scene)
- [ size](#size)
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

##### Defined in &nbsp;   [cocos/core/renderer/scene/sphere-light.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L63)&nbsp;


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

##### Defined in &nbsp;   [cocos/core/renderer/scene/sphere-light.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L55)&nbsp;   [cocos/core/renderer/scene/sphere-light.ts:59](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L59)&nbsp;


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

##### Defined in &nbsp;   [cocos/core/renderer/scene/sphere-light.ts:34](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L34)&nbsp;


___


### range
<div style="margin-left: 10px;">




•  **range**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/sphere-light.ts:46](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L46)&nbsp;   [cocos/core/renderer/scene/sphere-light.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L51)&nbsp;


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

##### Defined in &nbsp;   [cocos/core/renderer/scene/sphere-light.ts:38](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L38)&nbsp;   [cocos/core/renderer/scene/sphere-light.ts:42](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L42)&nbsp;


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

• **new SphereLight**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/sphere-light.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L69)&nbsp;


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

##### Defined in &nbsp;   [cocos/core/renderer/scene/sphere-light.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L101)&nbsp;
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

##### Defined in &nbsp;   [cocos/core/renderer/scene/sphere-light.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L77)&nbsp;
___
### update
<div style="margin-left: 10px;">

▸   **update**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/renderer/scene/sphere-light.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/renderer/scene/sphere-light.ts#L88)&nbsp;
___
<!---->




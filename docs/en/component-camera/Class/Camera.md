
## Class: Camera


`extend:`
[Component](docs/en/component/Class/Component.md)










**`en`** The Camera Component.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Aperture](#Aperture)
- [ **`static`**  ClearFlag](#ClearFlag)
- [ **`static`**  FOVAxis](#FOVAxis)
- [ **`static`**  ISO](#ISO)
- [ **`static`**  ProjectionType](#ProjectionType)
- [ **`static`**  Shutter](#Shutter)
- [ **`static`**  system](#system)
- [ node](#node)
- [ aperture](#aperture)
- [ camera](#camera)
- [ clearColor](#clearColor)
- [ clearDepth](#clearDepth)
- [ clearFlags](#clearFlags)
- [ clearStencil](#clearStencil)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ far](#far)
- [ fov](#fov)
- [ fovAxis](#fovAxis)
- [ hideFlags](#hideFlags)
- [ inEditorMode](#inEditorMode)
- [ isValid](#isValid)
- [ iso](#iso)
- [ name](#name)
- [ near](#near)
- [ orthoHeight](#orthoHeight)
- [ priority](#priority)
- [ projection](#projection)
- [ rect](#rect)
- [ screenScale](#screenScale)
- [ shutter](#shutter)
- [ targetTexture](#targetTexture)
- [ uuid](#uuid)
- [ visibility](#visibility)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ convertToUINode](#convertToUINode)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ screenPointToRay](#screenPointToRay)
- [ screenToWorld](#screenToWorld)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ worldToScreen](#worldToScreen)
</div>

## Properties


### Aperture
<div style="margin-left: 10px;">




• `static` **Aperture**:
`EnumAlias`  = `Aperture`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L91)&nbsp;   [cocos/core/components/camera-component.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L74)&nbsp;


___


### ClearFlag
<div style="margin-left: 10px;">




• `static` **ClearFlag**:
`EnumAlias`  = `ClearFlag`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L90)&nbsp;   [cocos/core/components/camera-component.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L73)&nbsp;


___


### FOVAxis
<div style="margin-left: 10px;">




• `static` **FOVAxis**:
`EnumAlias`  = `FOVAxis`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L89)&nbsp;   [cocos/core/components/camera-component.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L72)&nbsp;


___


### ISO
<div style="margin-left: 10px;">




• `static` **ISO**:
`EnumAlias`  = `ISO`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:93](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L93)&nbsp;   [cocos/core/components/camera-component.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L76)&nbsp;


___


### ProjectionType
<div style="margin-left: 10px;">




• `static` **ProjectionType**:
`EnumAlias`  = `ProjectionType`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L88)&nbsp;   [cocos/core/components/camera-component.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L71)&nbsp;


___


### Shutter
<div style="margin-left: 10px;">




• `static` **Shutter**:
`EnumAlias`  = `Shutter`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L92)&nbsp;   [cocos/core/components/camera-component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L75)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### node
<div style="margin-left: 10px;">



**`en`** The node this component is attached to. A component is always attached to a node.



**`example`**

```ts


import { log } from 'cc';
log(comp.node);


```




•  **node**:
`Node`  = `NullNode`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L166)&nbsp;


___


### aperture
<div style="margin-left: 10px;">



**`en`** Camera aperture, controls the exposure parameter.




•  **aperture**:
 ``CameraAperture`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:342](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L342)&nbsp;   [cocos/core/components/camera-component.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L346)&nbsp;


___


### camera
<div style="margin-left: 10px;">




•  **camera**:
 ``Camera`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L136)&nbsp;


___


### clearColor
<div style="margin-left: 10px;">



**`en`** Clearing color of the camera.




•  **clearColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L198)&nbsp;   [cocos/core/components/camera-component.ts:202](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L202)&nbsp;


___


### clearDepth
<div style="margin-left: 10px;">



**`en`** Clearing depth of the camera.




•  **clearDepth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L215)&nbsp;   [cocos/core/components/camera-component.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L219)&nbsp;


___


### clearFlags
<div style="margin-left: 10px;">



**`en`** Clearing flags of the camera, specifies which part of the framebuffer will be actually cleared every frame.




•  **clearFlags**:
 ``ClearFlagBit`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L182)&nbsp;   [cocos/core/components/camera-component.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L186)&nbsp;


___


### clearStencil
<div style="margin-left: 10px;">



**`en`** Clearing stencil of the camera.




•  **clearStencil**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L230)&nbsp;   [cocos/core/components/camera-component.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L234)&nbsp;


___


### enabled
<div style="margin-left: 10px;">



**`en`** Indicates whether this component is enabled or not.



**`default`** true



**`example`**

```ts


import { log } from 'cc';
comp.enabled = true;
log(comp.enabled);


```




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L110)&nbsp;   [cocos/core/components/component.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L113)&nbsp;


___


### enabledInHierarchy
<div style="margin-left: 10px;">



**`en`** Indicates whether this component is enabled and its node is also active in the hierarchy.




**`example`**

```ts


import { log } from 'cc';
log(comp.enabledInHierarchy);


```




•  **enabledInHierarchy**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L137)&nbsp;


___


### far
<div style="margin-left: 10px;">



**`en`** Far clipping distance of the camera, should be as small as possible within acceptable range.




•  **far**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:326](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L326)&nbsp;   [cocos/core/components/camera-component.ts:330](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L330)&nbsp;


___


### fov
<div style="margin-left: 10px;">



**`en`** Field of view of the camera.




•  **fov**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L281)&nbsp;   [cocos/core/components/camera-component.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L285)&nbsp;


___


### fovAxis
<div style="margin-left: 10px;">



**`en`** The axis on which the FOV would be fixed regardless of screen aspect changes.




•  **fovAxis**:
 ``CameraFOVAxis`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:262](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L262)&nbsp;   [cocos/core/components/camera-component.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L266)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### inEditorMode
<div style="margin-left: 10px;">




•  **inEditorMode**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:439](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L439)&nbsp;   [cocos/core/components/camera-component.ts:443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L443)&nbsp;


___


### isValid
<div style="margin-left: 10px;">



**`en`** 
Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.




**`default`** true




**`example`**

```ts


import { Node, log } from 'cc';
const node = new Node();
log(node.isValid);    // true
node.destroy();
log(node.isValid);    // true, still valid in this frame
// after a frame...
log(node.isValid);    // false, destroyed in the end of last frame


```




•  **isValid**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L266)&nbsp;


___


### iso
<div style="margin-left: 10px;">



**`en`** Camera ISO, controls the exposure parameter.




•  **iso**:
 ``CameraISO`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:374](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L374)&nbsp;   [cocos/core/components/camera-component.ts:378](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L378)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### near
<div style="margin-left: 10px;">



**`en`** Near clipping distance of the camera, should be as large as possible within acceptable range.




•  **near**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L311)&nbsp;   [cocos/core/components/camera-component.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L315)&nbsp;


___


### orthoHeight
<div style="margin-left: 10px;">



**`en`** Viewport height in orthographic mode.




•  **orthoHeight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:296](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L296)&nbsp;   [cocos/core/components/camera-component.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L300)&nbsp;


___


### priority
<div style="margin-left: 10px;">



**`en`** Render priority of the camera. Cameras with higher depth are rendered after cameras with lower depth.




•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L146)&nbsp;   [cocos/core/components/camera-component.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L150)&nbsp;


___


### projection
<div style="margin-left: 10px;">



**`en`** Projection type of the camera.




•  **projection**:
 ``CameraProjection`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:246](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L246)&nbsp;   [cocos/core/components/camera-component.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L250)&nbsp;


___


### rect
<div style="margin-left: 10px;">



**`en`** Screen viewport of the camera wrt. the sceen size.




•  **rect**:
 ``Rect`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:389](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L389)&nbsp;   [cocos/core/components/camera-component.ts:393](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L393)&nbsp;


___


### screenScale
<div style="margin-left: 10px;">



**`en`** Scale of the internal buffer size,
set to 1 to keep the same with the canvas size.




•  **screenScale**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L430)&nbsp;   [cocos/core/components/camera-component.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L434)&nbsp;


___


### shutter
<div style="margin-left: 10px;">



**`en`** Camera shutter, controls the exposure parameter.




•  **shutter**:
 ``CameraShutter`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:358](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L358)&nbsp;   [cocos/core/components/camera-component.ts:362](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L362)&nbsp;


___


### targetTexture
<div style="margin-left: 10px;">



**`en`** Output render texture of the camera. Default to null, which outputs directly to screen.




•  **targetTexture**:
 ``null | RenderTexture`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:405](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L405)&nbsp;   [cocos/core/components/camera-component.ts:409](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L409)&nbsp;


___


### uuid
<div style="margin-left: 10px;">



**`en`** The uuid for editor.




**`example`**

```ts


import { log } from 'cc';
log(comp.uuid);


```




•  **uuid**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L89)&nbsp;


___


### visibility
<div style="margin-left: 10px;">



**`en`** Visibility mask, declaring a set of node layers that will be visible to this camera.




•  **visibility**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L164)&nbsp;   [cocos/core/components/camera-component.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L168)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Camera**(`name: string`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L194)&nbsp;


---

<!---->
## Methods

### addComponent

<div style="margin-left: 10px;">

▸   **addComponent**(`classConstructor: Constructor`)



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.addComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |


##### Returns `void`

▸   **addComponent**(`className: string`)



**`en`** Adds a component class to the node. You can also add component to node by passing in the name of the script.



**`example`**

```ts


const test = node.addComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L215)&nbsp;   [cocos/core/components/component.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L226)&nbsp;   [cocos/core/components/component.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L228)&nbsp;
___
### convertToUINode

<div style="margin-left: 10px;">

▸   **convertToUINode**<`Vec3`\>(`wpos: Vec3, uiNode: Node, out: Vec3`) : `Vec3`



**`en`** 3D node to UI local node coordinates. The converted value is the offset under the UI node.




**`example`**

```ts


this.convertToUINode(target.worldPosition, uiNode.parent, out);
uiNode.position = out;


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `wpos` | `Vec3` | 3D 节点世界坐标  |
| `uiNode` | `Node` | UI 节点  |
| `out` | `Vec3` | 返回在当前传入的 UI 节点下的偏移量  |


##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:511](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L511)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### getComponent

<div style="margin-left: 10px;">

▸   **getComponent**(`classConstructor: Constructor`)



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.



**`example`**

```ts


import { Sprite } from 'cc';
// get sprite component.
var sprite = node.getComponent(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |


##### Returns `void`

▸   **getComponent**(`className: string`)



**`en`** 
Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
You can also get component in the node by passing in the name of the script.



**`example`**

```ts


// get custom test calss.
var test = node.getComponent("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L247)&nbsp;   [cocos/core/components/component.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L263)&nbsp;   [cocos/core/components/component.ts:265](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L265)&nbsp;
___
### getComponentInChildren

<div style="margin-left: 10px;">

▸   **getComponentInChildren**(`classConstructor: Constructor`)



**`en`** Returns the component of supplied type in any of its children using depth first search.



**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.getComponentInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved  |


##### Returns `void`

▸   **getComponentInChildren**(`className: string`)



**`en`** Returns the component of supplied type in any of its children using depth first search.



**`example`**

```ts


var Test = node.getComponentInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L306)&nbsp;   [cocos/core/components/component.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L317)&nbsp;   [cocos/core/components/component.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L319)&nbsp;
___
### getComponents

<div style="margin-left: 10px;">

▸   **getComponents**(`classConstructor: Constructor`)



**`en`** Returns all components of supplied type in the node.



**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponents(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |


##### Returns `void`

▸   **getComponents**(`className: string`)



**`en`** Returns all components of supplied type in the node.



**`example`**

```ts


const tests = node.getComponents("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L279)&nbsp;   [cocos/core/components/component.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L290)&nbsp;   [cocos/core/components/component.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L292)&nbsp;
___
### getComponentsInChildren

<div style="margin-left: 10px;">

▸   **getComponentsInChildren**(`classConstructor: Constructor`)



**`en`** Returns all components of supplied type in self or any of its children.



**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponentsInChildren(Sprite);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |


##### Returns `void`

▸   **getComponentsInChildren**(`className: string`)



**`en`** Returns all components of supplied type in self or any of its children.



**`example`**

```ts


const tests = node.getComponentsInChildren("Test");


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L333)&nbsp;   [cocos/core/components/component.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L344)&nbsp;   [cocos/core/components/component.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L346)&nbsp;
___
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L468)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:462](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L462)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L455)&nbsp;
___
### onFocusInEditor

<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLoad

<div style="margin-left: 10px;">

▸   **onLoad**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L451)&nbsp;
___
### onLostFocusInEditor

<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### resetInEditor

<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`



**`en`** Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
This function is only called in editor.<br/>




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### schedule

<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: any, interval: number, repeat: number, delay: number`) : `void`



**`en`** 
Schedules a custom task.<br/>
If the task is already scheduled, then the interval parameter will be updated without scheduling it again.



**`example`**

```ts


import { log } from 'cc';
this.schedule((dt) => void log(`time: ${dt}`), 1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |
| `interval` | `number` | The time interval between each invocation  |
| `repeat` | `number` | The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever  |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L419)&nbsp;
___
### scheduleOnce

<div style="margin-left: 10px;">

▸   **scheduleOnce**<`void`\>(`callback: any, delay: number`) : `void`



**`en`** Schedules a task that runs only once, with a delay of 0 or larger.



**`method`** scheduleOnce



**`see`** [[schedule]]



**`example`**

```ts


import { log } from 'cc';
this.scheduleOnce((dt) => void log(`time: ${dt}`), 2);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L452)&nbsp;
___
### screenPointToRay

<div style="margin-left: 10px;">

▸   **screenPointToRay**<`Ray`\>(`x: number, y: number, out: Ray`) : `Ray`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |
| `out` | `Ray` | - |


##### Returns `Ray`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:479](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L479)&nbsp;
___
### screenToWorld

<div style="margin-left: 10px;">

▸   **screenToWorld**<`Vec3`\>(`screenPos: Vec3, out: Vec3`) : `Vec3`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `screenPos` | `Vec3` | - |
| `out` | `Vec3` | - |


##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L491)&nbsp;
___
### unschedule

<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`



**`en`** Un-schedules a custom task.



**`example`**

```ts


this.unschedule(_callback);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback_fn` | `any` | The callback function of the task  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L465)&nbsp;
___
### unscheduleAllCallbacks

<div style="margin-left: 10px;">

▸   **unscheduleAllCallbacks**<`void`\> : `void`



**`en`** unschedule all scheduled tasks.



**`example`**

```ts


this.unscheduleAllCallbacks();


```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
___
### worldToScreen

<div style="margin-left: 10px;">

▸   **worldToScreen**<`Vec3`\>(`worldPos: Vec3, out: Vec3`) : `Vec3`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldPos` | `Vec3` | - |
| `out` | `Vec3` | - |


##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L485)&nbsp;
___
<!---->




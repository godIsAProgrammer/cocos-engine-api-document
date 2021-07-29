
## Class: Camera


`extend:`
[Component](docs/zh/component/Class/Component.md)












**`zh`** 相机组件。



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




**`zh`** 该组件被附加到的节点。组件总会附加到一个节点。




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




**`zh`** 相机光圈，影响相机的曝光参数。





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




**`zh`** 相机的颜色缓冲默认值。





•  **clearColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L198)&nbsp;   [cocos/core/components/camera-component.ts:202](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L202)&nbsp;


___


### clearDepth
<div style="margin-left: 10px;">




**`zh`** 相机的深度缓冲默认值。





•  **clearDepth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L215)&nbsp;   [cocos/core/components/camera-component.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L219)&nbsp;


___


### clearFlags
<div style="margin-left: 10px;">




**`zh`** 相机的缓冲清除标志位，指定帧缓冲的哪部分要每帧清除。





•  **clearFlags**:
 ``ClearFlagBit`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L182)&nbsp;   [cocos/core/components/camera-component.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L186)&nbsp;


___


### clearStencil
<div style="margin-left: 10px;">




**`zh`** 相机的模板缓冲默认值。





•  **clearStencil**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L230)&nbsp;   [cocos/core/components/camera-component.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L234)&nbsp;


___


### enabled
<div style="margin-left: 10px;">




**`zh`** 表示该组件自身是否启用。




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




**`zh`** 表示该组件是否被启用并且所在的节点也处于激活状态。





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




**`zh`** 相机的远裁剪距离，应在可接受范围内尽量取最小。





•  **far**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:326](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L326)&nbsp;   [cocos/core/components/camera-component.ts:330](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L330)&nbsp;


___


### fov
<div style="margin-left: 10px;">




**`zh`** 相机的视角大小。





•  **fov**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L281)&nbsp;   [cocos/core/components/camera-component.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L285)&nbsp;


___


### fovAxis
<div style="margin-left: 10px;">




**`zh`** 指定视角的固定轴向，在此轴上不会跟随屏幕长宽比例变化。





•  **fovAxis**:
 ``CameraFOVAxis`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:262](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L262)&nbsp;   [cocos/core/components/camera-component.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L266)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





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




**`zh`** 
表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。




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




**`zh`** 相机感光度，影响相机的曝光参数。





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




**`zh`** 相机的近裁剪距离，应在可接受范围内尽量取最大。





•  **near**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:311](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L311)&nbsp;   [cocos/core/components/camera-component.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L315)&nbsp;


___


### orthoHeight
<div style="margin-left: 10px;">




**`zh`** 正交模式下的相机视角高度。





•  **orthoHeight**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:296](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L296)&nbsp;   [cocos/core/components/camera-component.ts:300](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L300)&nbsp;


___


### priority
<div style="margin-left: 10px;">




**`zh`** 相机的渲染优先级，值越小越优先渲染。





•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L146)&nbsp;   [cocos/core/components/camera-component.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L150)&nbsp;


___


### projection
<div style="margin-left: 10px;">




**`zh`** 相机的投影类型。





•  **projection**:
 ``CameraProjection`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:246](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L246)&nbsp;   [cocos/core/components/camera-component.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L250)&nbsp;


___


### rect
<div style="margin-left: 10px;">




**`zh`** 此相机最终渲染到屏幕上的视口位置和大小。





•  **rect**:
 ``Rect`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:389](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L389)&nbsp;   [cocos/core/components/camera-component.ts:393](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L393)&nbsp;


___


### screenScale
<div style="margin-left: 10px;">




**`zh`** 相机内部缓冲尺寸的缩放值, 1 为与 canvas 尺寸相同。





•  **screenScale**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:430](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L430)&nbsp;   [cocos/core/components/camera-component.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L434)&nbsp;


___


### shutter
<div style="margin-left: 10px;">




**`zh`** 相机快门，影响相机的曝光参数。





•  **shutter**:
 ``CameraShutter`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:358](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L358)&nbsp;   [cocos/core/components/camera-component.ts:362](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L362)&nbsp;


___


### targetTexture
<div style="margin-left: 10px;">




**`zh`** 指定此相机的渲染输出目标贴图，默认为空，直接渲染到屏幕。





•  **targetTexture**:
 ``null | RenderTexture`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:405](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L405)&nbsp;   [cocos/core/components/camera-component.ts:409](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L409)&nbsp;


___


### uuid
<div style="margin-left: 10px;">




**`zh`** 组件的 uuid，用于编辑器。





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




**`zh`** 可见性掩码，声明在当前相机中可见的节点层级集合。





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




**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。




**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.addComponent(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |



##### Returns `void`


▸   **addComponent**(`className: string`)




**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。




**`example`**

```ts


const test = node.addComponent("Test");


```




<!---->

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




**`zh`** 3D 节点转 UI 本地节点坐标。转换后的值是该 UI 节点下的偏移。




**`example`**

```ts


this.convertToUINode(target.worldPosition, uiNode.parent, out);
uiNode.position = out;


```




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `wpos` | `Vec3` | 3D 节点世界坐标  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `uiNode` | `Node` | UI 节点  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | 返回在当前传入的 UI 节点下的偏移量  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:511](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L511)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### getComponent
<div style="margin-left: 10px;">

▸   **getComponent**(`classConstructor: Constructor`)




**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。




**`example`**

```ts


import { Sprite } from 'cc';
// get sprite component.
var sprite = node.getComponent(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |



##### Returns `void`


▸   **getComponent**(`className: string`)




**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。




**`example`**

```ts


// get custom test calss.
var test = node.getComponent("Test");


```




<!---->

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




**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。




**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.getComponentInChildren(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved  |



##### Returns `void`


▸   **getComponentInChildren**(`className: string`)




**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。




**`example`**

```ts


var Test = node.getComponentInChildren("Test");


```




<!---->

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




**`zh`** 返回节点上指定类型的所有组件。




**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponents(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |



##### Returns `void`


▸   **getComponents**(`className: string`)




**`zh`** 返回节点上指定类型的所有组件。




**`example`**

```ts


const tests = node.getComponents("Test");


```




<!---->

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




**`zh`** 递归查找自身或所有子节点中指定类型的组件。




**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponentsInChildren(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |



##### Returns `void`


▸   **getComponentsInChildren**(`className: string`)




**`zh`** 递归查找自身或所有子节点中指定类型的组件。




**`example`**

```ts


const tests = node.getComponentsInChildren("Test");


```




<!---->

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




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L468)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:462](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L462)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:455](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L455)&nbsp;
___
### onFocusInEditor
<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLoad
<div style="margin-left: 10px;">

▸   **onLoad**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:451](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L451)&nbsp;
___
### onLostFocusInEditor
<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### resetInEditor
<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`




**`zh`** 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### schedule
<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: any, interval: number, repeat: number, delay: number`) : `void`




**`zh`** 
调度一个自定义的回调任务。<br/>
如果回调任务已调度，那么将不会重复调度它，只会更新时间间隔参数。




**`example`**

```ts


import { log } from 'cc';
this.schedule((dt) => void log(`time: ${dt}`), 1);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `interval` | `number` | The time interval between each invocation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `repeat` | `number` | The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L419)&nbsp;
___
### scheduleOnce
<div style="margin-left: 10px;">

▸   **scheduleOnce**<`void`\>(`callback: any, delay: number`) : `void`




**`zh`** 调度一个只运行一次的回调任务，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。




**`method`** scheduleOnce




**`see`** [[schedule]]




**`example`**

```ts


import { log } from 'cc';
this.scheduleOnce((dt) => void log(`time: ${dt}`), 2);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L452)&nbsp;
___
### screenPointToRay
<div style="margin-left: 10px;">

▸   **screenPointToRay**<`Ray`\>(`x: number, y: number, out: Ray`) : `Ray`




<!---->
<!--    #### Returns `Ray` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Ray` | - |



##### Returns `Ray`




</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:479](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L479)&nbsp;
___
### screenToWorld
<div style="margin-left: 10px;">

▸   **screenToWorld**<`Vec3`\>(`screenPos: Vec3, out: Vec3`) : `Vec3`




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `screenPos` | `Vec3` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | - |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L491)&nbsp;
___
### unschedule
<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`




**`zh`** 取消调度一个自定义的回调任务。




**`example`**

```ts


this.unschedule(_callback);


```




<!---->
<!--    #### Returns `void` -->
<!---->

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




**`zh`** 取消调度所有已调度的回调函数。




**`example`**

```ts


this.unscheduleAllCallbacks();


```




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
___
### worldToScreen
<div style="margin-left: 10px;">

▸   **worldToScreen**<`Vec3`\>(`worldPos: Vec3, out: Vec3`) : `Vec3`




<!---->
<!--    #### Returns `Vec3` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldPos` | `Vec3` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | - |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/core/components/camera-component.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/camera-component.ts#L485)&nbsp;
___
<!---->




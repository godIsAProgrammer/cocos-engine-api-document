
## Class: UITransform


`extend:`
[Component](docs/zh/component/Class/Component.md)












**`zh`** 
UI 变换组件。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  EventType](#EventType)
- [ **`static`**  system](#system)
- [ node](#node)
- [ anchorPoint](#anchorPoint)
- [ anchorX](#anchorX)
- [ anchorY](#anchorY)
- [ cameraPriority](#cameraPriority)
- [ contentSize](#contentSize)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ height](#height)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ name](#name)
- [ priority](#priority)
- [ uuid](#uuid)
- [ visibility](#visibility)
- [ width](#width)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ convertToNodeSpaceAR](#convertToNodeSpaceAR)
- [ convertToWorldSpaceAR](#convertToWorldSpaceAR)
- [ destroy](#destroy)
- [ getBoundingBox](#getBoundingBox)
- [ getBoundingBoxTo](#getBoundingBoxTo)
- [ getBoundingBoxToWorld](#getBoundingBoxToWorld)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getComputeAABB](#getComputeAABB)
- [ isHit](#isHit)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setAnchorPoint](#setAnchorPoint)
- [ setContentSize](#setContentSize)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
</div>

## Properties


### EventType
<div style="margin-left: 10px;">




• `static` **EventType**:
`SystemEventType`  = `SystemEventType`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L242)&nbsp;


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


### anchorPoint
<div style="margin-left: 10px;">




**`zh`** 
锚点位置。





•  **anchorPoint**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L153)&nbsp;   [cocos/2d/framework/ui-transform.ts:157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L157)&nbsp;


___


### anchorX
<div style="margin-left: 10px;">




•  **anchorX**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L166)&nbsp;   [cocos/2d/framework/ui-transform.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L170)&nbsp;


___


### anchorY
<div style="margin-left: 10px;">




•  **anchorY**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L179)&nbsp;   [cocos/2d/framework/ui-transform.ts:183](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L183)&nbsp;


___


### cameraPriority
<div style="margin-left: 10px;">




**`zh`** 查找被渲染相机的渲染优先级。





•  **cameraPriority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L237)&nbsp;


___


### contentSize
<div style="margin-left: 10px;">




**`zh`** 
内容尺寸。





•  **contentSize**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L74)&nbsp;   [cocos/2d/framework/ui-transform.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L78)&nbsp;


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


### height
<div style="margin-left: 10px;">




•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L120)&nbsp;   [cocos/2d/framework/ui-transform.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L124)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


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


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### priority
<div style="margin-left: 10px;">




**`zh`** 
渲染先后顺序，按照广度渲染排列，按同级节点下进行一次排列。




**`deprecated`** 





•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L201)&nbsp;   [cocos/2d/framework/ui-transform.ts:205](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L205)&nbsp;


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




**`zh`** 查找被渲染相机的可见性掩码。




**`deprecated`** since v3.0





•  **visibility**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L228)&nbsp;


___


### width
<div style="margin-left: 10px;">




•  **width**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L97)&nbsp;   [cocos/2d/framework/ui-transform.ts:101](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L101)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new UITransform**(`name: string`)

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
### convertToNodeSpaceAR
<div style="margin-left: 10px;">

▸   **convertToNodeSpaceAR**<`Vec3`\>(`worldPoint: Vec3, out: Vec3`) : `Vec3`




**`zh`** 
将一个 UI 节点世界坐标系下点转换到另一个 UI 节点 (局部) 空间坐标系，这个坐标系以锚点为原点。
非 UI 节点转换到 UI 节点(局部) 空间坐标系，请走 Camera 的 `convertToUINode`。





**`example`**

```ts


const newVec3 = uiTransform.convertToNodeSpaceAR(cc.v3(100, 100, 0));


```




<!---->
<!--    #### Returns `Vec3` - 返回与目标节点的相对位置。-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldPoint` | `Vec3` | 世界坐标点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | 转换后坐标。  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L481)&nbsp;
___
### convertToWorldSpaceAR
<div style="margin-left: 10px;">

▸   **convertToWorldSpaceAR**<`Vec3`\>(`nodePoint: Vec3, out: Vec3`) : `Vec3`




**`zh`** 
将距当前节点坐标系下的一个点转换到世界坐标系。





**`example`**

```ts


const newVec3 = uiTransform.convertToWorldSpaceAR(3(100, 100, 0));


```




<!---->
<!--    #### Returns `Vec3` - 返回 UI 世界坐标系。-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `nodePoint` | `Vec3` | 节点坐标。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | 转换后坐标。  |



##### Returns `Vec3`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L506)&nbsp;
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
### getBoundingBox
<div style="margin-left: 10px;">

▸   **getBoundingBox**<`Rect`\> : `Rect`




**`zh`** 
返回父节坐标系下的轴向对齐的包围盒。





**`example`**

```ts


const boundingBox = uiTransform.getBoundingBox();


```




<!---->
<!--    #### Returns `Rect` - 节点大小的包围盒-->
<!---->


##### Returns `Rect`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:529](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L529)&nbsp;
___
### getBoundingBoxTo
<div style="margin-left: 10px;">

▸   **getBoundingBoxTo**<`Rect`\>(`parentMat: Mat4`) : `Rect`




**`zh`** 
返回包含当前包围盒及其子节点包围盒的最小包围盒。





<!---->
<!--    #### Returns `Rect` 
-->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `parentMat` | `Mat4` | 父节点矩阵。  |



##### Returns `Rect`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L576)&nbsp;
___
### getBoundingBoxToWorld
<div style="margin-left: 10px;">

▸   **getBoundingBoxToWorld**<`Rect`\> : `Rect`




**`zh`** 
返回节点在世界坐标系下的对齐轴向的包围盒（AABB）。
该边框包含自身和已激活的子节点的世界边框。





**`example`**

```ts


const newRect = uiTransform.getBoundingBoxToWorld();


```




<!---->
<!--    #### Returns `Rect` - 返回世界坐标系下包围盒。-->
<!---->


##### Returns `Rect`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:558](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L558)&nbsp;
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
### getComputeAABB
<div style="margin-left: 10px;">

▸   **getComputeAABB**<`AABB`\>(`out: AABB`) : `AABB`




**`zh`** 
计算出此 UI_2D 节点在世界空间下的 aabb 包围盒





<!---->
<!--    #### Returns `AABB` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `AABB` | - |



##### Returns `AABB`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L618)&nbsp;
___
### isHit
<div style="margin-left: 10px;">

▸   **isHit**<`boolean`\>(`point: Vec2, listener: EventListener`) : `boolean`




**`zh`** 
当前节点的点击计算。





<!---->
<!--    #### Returns `boolean` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | 屏幕点。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `listener` | `EventListener` | 事件监听器。  |



##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:397](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L397)&nbsp;
___
### onDestroy
<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L267)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L263)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L259)&nbsp;
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

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:253](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L253)&nbsp;
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
### setAnchorPoint
<div style="margin-left: 10px;">

▸   **setAnchorPoint**<`void`\>(`point: Vec2 | number, y: undefined | number`) : `void`




**`zh`** 
设置锚点的百分比。<br>
锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br>
锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br>
但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br>
默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br>
注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。





**`example`**

```ts


import { Vec2 } from 'cc';
node.setAnchorPoint(new Vec2(1, 1));
node.setAnchorPoint(1, 1);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2 \| number` | 节点锚点或节点 x 轴锚。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `undefined \| number` | 节点 y 轴锚。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L366)&nbsp;
___
### setContentSize
<div style="margin-left: 10px;">

▸   **setContentSize**<`void`\>(`size: Size`) : `void`




**`zh`** 
设置节点 UI Transform 的原始大小，不受该节点是否被缩放或者旋转的影响。





**`example`**

```ts


import { Size } from 'cc';
node.setContentSize(new Size(100, 100));


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `size` | `Size` | The size of the UI transformation.  |



##### Returns `void`


▸   **setContentSize**<`void`\>(`width: number, height: number`) : `void`




**`zh`** 
设置节点 UI Transform 的原始大小，不受该节点是否被缩放或者旋转的影响。





**`example`**

```ts


import { Size } from 'cc';
node.setContentSize(100, 100);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | The width of the UI transformation.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `height` | `number` | The height of the UI transformation.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L285)&nbsp;   [cocos/2d/framework/ui-transform.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L302)&nbsp;   [cocos/2d/framework/ui-transform.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L304)&nbsp;
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
<!---->




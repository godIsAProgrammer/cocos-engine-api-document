
## Class: UITransform


`extend:`
[Component](docs/en/component/Class/Component.md)










**`en`** 
The component of transform in UI.



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


### anchorPoint
<div style="margin-left: 10px;">



**`en`** 
Anchor point of the UI node.





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



**`en`** Get the priority of the rendering camera




•  **cameraPriority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:237](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L237)&nbsp;


___


### contentSize
<div style="margin-left: 10px;">



**`en`** 
Size of the UI node.





•  **contentSize**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:74](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L74)&nbsp;   [cocos/2d/framework/ui-transform.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L78)&nbsp;


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


### height
<div style="margin-left: 10px;">




•  **height**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L120)&nbsp;   [cocos/2d/framework/ui-transform.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L124)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


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


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### priority
<div style="margin-left: 10px;">



**`en`** 
Render sequence.
Note: UI rendering is only about priority.




**`deprecated`** 





•  **priority**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L201)&nbsp;   [cocos/2d/framework/ui-transform.ts:205](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L205)&nbsp;


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



**`en`** Get the visibility bit-mask of the rendering camera



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
### convertToNodeSpaceAR

<div style="margin-left: 10px;">

▸   **convertToNodeSpaceAR**<`Vec3`\>(`worldPoint: Vec3, out: Vec3`) : `Vec3`



**`en`** 
Converts a Point to node (local) space coordinates.




**`example`**

```ts


const newVec3 = uiTransform.convertToNodeSpaceAR(cc.v3(100, 100, 0));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldPoint` | `Vec3` | 世界坐标点。  |
| `out` | `Vec3` | 转换后坐标。  |


##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L481)&nbsp;
___
### convertToWorldSpaceAR

<div style="margin-left: 10px;">

▸   **convertToWorldSpaceAR**<`Vec3`\>(`nodePoint: Vec3, out: Vec3`) : `Vec3`



**`en`** 
Converts a Point in node coordinates to world space coordinates.




**`example`**

```ts


const newVec3 = uiTransform.convertToWorldSpaceAR(3(100, 100, 0));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `nodePoint` | `Vec3` | 节点坐标。  |
| `out` | `Vec3` | 转换后坐标。  |


##### Returns `Vec3`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:506](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L506)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### getBoundingBox

<div style="margin-left: 10px;">

▸   **getBoundingBox**<`Rect`\> : `Rect`



**`en`** 
Returns a "local" axis aligned bounding box of the node. <br/>
The returned box is relative only to its parent.




**`example`**

```ts


const boundingBox = uiTransform.getBoundingBox();


```




##### Returns `Rect`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:529](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L529)&nbsp;
___
### getBoundingBoxTo

<div style="margin-left: 10px;">

▸   **getBoundingBoxTo**<`Rect`\>(`parentMat: Mat4`) : `Rect`



**`en`** 
Returns the minimum bounding box containing the current bounding box and its child nodes.




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



**`en`** 
Returns a "world" axis aligned bounding box of the node.<br/>
The bounding box contains self and active children's world bounding box.




**`example`**

```ts


const newRect = uiTransform.getBoundingBoxToWorld();


```




##### Returns `Rect`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:558](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L558)&nbsp;
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
### getComputeAABB

<div style="margin-left: 10px;">

▸   **getComputeAABB**<`AABB`\>(`out: AABB`) : `AABB`



**`en`** 
Compute the corresponding aabb in world space for raycast.




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



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | 屏幕点。  |
| `listener` | `EventListener` | 事件监听器。  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:397](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L397)&nbsp;
___
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L267)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L263)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L259)&nbsp;
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

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:253](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L253)&nbsp;
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
### setAnchorPoint

<div style="margin-left: 10px;">

▸   **setAnchorPoint**<`void`\>(`point: Vec2 | number, y: undefined | number`) : `void`



**`en`** 
Sets the anchor point in percent. <br/>
anchor point is the point around which all transformations and positioning manipulations take place. <br/>
It's like a pin in the node where it is "attached" to its parent. <br/>
The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.<br/>
But you can use values higher than (1,1) and lower than (0,0) too.<br/>
The default anchor point is (0.5,0.5), so it starts at the center of the node.




**`example`**

```ts


import { Vec2 } from 'cc';
node.setAnchorPoint(new Vec2(1, 1));
node.setAnchorPoint(1, 1);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2 \| number` | 节点锚点或节点 x 轴锚。  |
| `y` | `undefined \| number` | 节点 y 轴锚。  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L366)&nbsp;
___
### setContentSize

<div style="margin-left: 10px;">

▸   **setContentSize**<`void`\>(`size: Size`) : `void`



**`en`** 
Sets the untransformed size of the ui transform.<br/>
The contentSize remains the same no matter if the node is scaled or rotated.<br/>



**`example`**

```ts


import { Size } from 'cc';
node.setContentSize(new Size(100, 100));


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `size` | `Size` | The size of the UI transformation.  |


##### Returns `void`

▸   **setContentSize**<`void`\>(`width: number, height: number`) : `void`



**`en`** 
Sets the untransformed size of the ui transform.<br/>
The contentSize remains the same no matter if the node is scaled or rotated.<br/>



**`example`**

```ts


import { Size } from 'cc';
node.setContentSize(100, 100);


```



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `width` | `number` | The width of the UI transformation.  |
| `height` | `number` | The height of the UI transformation.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/ui-transform.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L285)&nbsp;   [cocos/2d/framework/ui-transform.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L302)&nbsp;   [cocos/2d/framework/ui-transform.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/ui-transform.ts#L304)&nbsp;
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
<!---->




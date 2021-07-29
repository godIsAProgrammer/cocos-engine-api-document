## Interface: ImageExtendedNode

- [constructor](#constructor)
- [_active](#_active)
- [_activeInHierarchy](#_activeInHierarchy)
- [_children](#_children)
- [_components](#_components)
- [_dirtyFlags](#_dirtyFlags)
- [_euler](#_euler)
- [_eulerDirty](#_eulerDirty)
- [_eventMask](#_eventMask)
- [_eventProcessor](#_eventProcessor)
- [_id](#_id)
- [_layer](#_layer)
- [_lpos](#_lpos)
- [_lrot](#_lrot)
- [_lscale](#_lscale)
- [_mat](#_mat)
- [_name](#_name)
- [_objFlags](#_objFlags)
- [_offset](#_offset)
- [_originalSceneId](#_originalSceneId)
- [_parent](#_parent)
- [_poolHandle](#_poolHandle)
- [_pos](#_pos)
- [_prefab](#_prefab)
- [_registerIfAttached](#_registerIfAttached)
- [_rot](#_rot)
- [_scale](#_scale)
- [_scene](#_scene)
- [_siblingIndex](#_siblingIndex)
- [_static](#_static)
- [_uiProps](#_uiProps)
- [layerInfo](#layerInfo)
- [EventType](#EventType)
- [NodeSpace](#NodeSpace)
- [TransformBit](#TransformBit)
- [TransformDirtyBit](#TransformDirtyBit)
- [_stackId](#_stackId)
- [_stacks](#_stacks)
- [bookOfChange](#bookOfChange)
- [idGenerator](#idGenerator)
- [_persistNode](#_persistNode)
- [active](#active)
- [activeInHierarchy](#activeInHierarchy)
- [angle](#angle)
- [children](#children)
- [components](#components)
- [eulerAngles](#eulerAngles)
- [eventProcessor](#eventProcessor)
- [forward](#forward)
- [handle](#handle)
- [hasChangedFlags](#hasChangedFlags)
- [hideFlags](#hideFlags)
- [isValid](#isValid)
- [layer](#layer)
- [matrix](#matrix)
- [name](#name)
- [parent](#parent)
- [position](#position)
- [rotation](#rotation)
- [scale](#scale)
- [scene](#scene)
- [uuid](#uuid)
- [worldMatrix](#worldMatrix)
- [worldPosition](#worldPosition)
- [worldRotation](#worldRotation)
- [worldScale](#worldScale)
- [_checkMultipleComp](#_checkMultipleComp)
- [_destroyImmediate](#_destroyImmediate)
- [_destruct](#_destruct)
- [_instantiate](#_instantiate)
- [_onBatchCreated](#_onBatchCreated)
- [_onBeforeSerialize](#_onBeforeSerialize)
- [_onHierarchyChanged](#_onHierarchyChanged)
- [_onHierarchyChangedBase](#_onHierarchyChangedBase)
- [_onPostActivated](#_onPostActivated)
- [_onPreDestroy](#_onPreDestroy)
- [_onPreDestroyBase](#_onPreDestroyBase)
- [_onSetParent](#_onSetParent)
- [_onSiblingIndexChanged](#_onSiblingIndexChanged)
- [_removeComponent](#_removeComponent)
- [_updateScene](#_updateScene)
- [_updateSiblingIndex](#_updateSiblingIndex)
- [addChild](#addChild)
- [addComponent](#addComponent)
- [attr](#attr)
- [destroy](#destroy)
- [destroyAllChildren](#destroyAllChildren)
- [dispatchEvent](#dispatchEvent)
- [emit](#emit)
- [getChildByName](#getChildByName)
- [getChildByPath](#getChildByPath)
- [getChildByUuid](#getChildByUuid)
- [getComponent](#getComponent)
- [getComponentInChildren](#getComponentInChildren)
- [getComponents](#getComponents)
- [getComponentsInChildren](#getComponentsInChildren)
- [getParent](#getParent)
- [getPosition](#getPosition)
- [getRotation](#getRotation)
- [getScale](#getScale)
- [getSiblingIndex](#getSiblingIndex)
- [getWorldMatrix](#getWorldMatrix)
- [getWorldPosition](#getWorldPosition)
- [getWorldRS](#getWorldRS)
- [getWorldRT](#getWorldRT)
- [getWorldRotation](#getWorldRotation)
- [getWorldScale](#getWorldScale)
- [hasEventListener](#hasEventListener)
- [insertChild](#insertChild)
- [invalidateChildren](#invalidateChildren)
- [inverseTransformPoint](#inverseTransformPoint)
- [isChildOf](#isChildOf)
- [lookAt](#lookAt)
- [off](#off)
- [on](#on)
- [once](#once)
- [pauseSystemEvents](#pauseSystemEvents)
- [removeAllChildren](#removeAllChildren)
- [removeChild](#removeChild)
- [removeComponent](#removeComponent)
- [removeFromParent](#removeFromParent)
- [resumeSystemEvents](#resumeSystemEvents)
- [rotate](#rotate)
- [setParent](#setParent)
- [setPosition](#setPosition)
- [setRTS](#setRTS)
- [setRotation](#setRotation)
- [setRotationFromEuler](#setRotationFromEuler)
- [setScale](#setScale)
- [setSiblingIndex](#setSiblingIndex)
- [setWorldPosition](#setWorldPosition)
- [setWorldRotation](#setWorldRotation)
- [setWorldRotationFromEuler](#setWorldRotationFromEuler)
- [setWorldScale](#setWorldScale)
- [syncFromNativeTransform](#syncFromNativeTransform)
- [syncToNativeTransform](#syncToNativeTransform)
- [targetOff](#targetOff)
- [translate](#translate)
- [updateWorldTransform](#updateWorldTransform)
- [walk](#walk)
- [_deferredDestroy](#_deferredDestroy)
- [_findChildComponent](#_findChildComponent)
- [_findChildComponents](#_findChildComponents)
- [_findComponent](#_findComponent)
- [_findComponents](#_findComponents)
- [_setScene](#_setScene)
- [clearBooks](#clearBooks)
- [isNode](#isNode)

### Properties

#### constructor

<div style="margin-left: 10px;">


• **constructor**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L148)&nbsp;

___
#### _active

<div style="margin-left: 10px;">


• **_active**: ``boolean``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:309](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L309)&nbsp;

___
#### _activeInHierarchy

<div style="margin-left: 10px;">


• **_activeInHierarchy**: ``boolean``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:320](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L320)&nbsp;

___
#### _children

<div style="margin-left: 10px;">


• **_children**: ``array``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L306)&nbsp;

___
#### _components

<div style="margin-left: 10px;">


• **_components**: ``array``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:312](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L312)&nbsp;

___
#### _dirtyFlags

<div style="margin-left: 10px;">


• **_dirtyFlags**: ``TransformBit``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L144)&nbsp;

___
#### _euler

<div style="margin-left: 10px;">


• **_euler**: ``Vec3``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L142)&nbsp;

___
#### _eulerDirty

<div style="margin-left: 10px;">


• **_eulerDirty**: ``boolean``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L146)&nbsp;

___
#### _eventMask

<div style="margin-left: 10px;">


• **_eventMask**: ``number``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L327)&nbsp;

___
#### _eventProcessor

<div style="margin-left: 10px;">


• **_eventProcessor**: ``any``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:326](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L326)&nbsp;

___
#### _id

<div style="margin-left: 10px;">


• **_id**: ``string``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:322](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L322)&nbsp;

___
#### _layer

<div style="margin-left: 10px;">


• **_layer**: ``number``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L138)&nbsp;

___
#### _lpos

<div style="margin-left: 10px;">


• **_lpos**: ``Vec3``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L129)&nbsp;

___
#### _lrot

<div style="margin-left: 10px;">


• **_lrot**: ``Quat``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L132)&nbsp;

___
#### _lscale

<div style="margin-left: 10px;">


• **_lscale**: ``Vec3``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L135)&nbsp;

___
#### _mat

<div style="margin-left: 10px;">


• **_mat**: ``Mat4``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L125)&nbsp;

___
#### _name

<div style="margin-left: 10px;">


• **_name**: ``string``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L324)&nbsp;

___
#### _objFlags

<div style="margin-left: 10px;">


• **_objFlags**: ``number``

</div>


##### Defined in &nbsp;   [cocos/core/data/object.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L193)&nbsp;

___
#### _offset

<div style="margin-left: 10px;">


• **_offset**: ``Vec2``

</div>


##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:48](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L48)&nbsp;

___
#### _originalSceneId

<div style="margin-left: 10px;">


• **_originalSceneId**: ``string``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:332](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L332)&nbsp;

___
#### _parent

<div style="margin-left: 10px;">


• **_parent**: ``this | null``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L303)&nbsp;

___
#### _poolHandle

<div style="margin-left: 10px;">


• **_poolHandle**: ``NodeHandle``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L148)&nbsp;

___
#### _pos

<div style="margin-left: 10px;">


• **_pos**: ``Vec3``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L119)&nbsp;

___
#### _prefab

<div style="margin-left: 10px;">


• **_prefab**: ``PrefabInfo | null``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:316](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L316)&nbsp;

___
#### _registerIfAttached

<div style="margin-left: 10px;">


• **_registerIfAttached**: ``_registerIfAttached``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L346)&nbsp;

___
#### _rot

<div style="margin-left: 10px;">


• **_rot**: ``Quat``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L121)&nbsp;

___
#### _scale

<div style="margin-left: 10px;">


• **_scale**: ``Vec3``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L123)&nbsp;

___
#### _scene

<div style="margin-left: 10px;">


• **_scene**: ``Scene``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L318)&nbsp;

___
#### _siblingIndex

<div style="margin-left: 10px;">


• **_siblingIndex**: ``number``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:329](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L329)&nbsp;

___
#### _static

<div style="margin-left: 10px;">


• **_static**: ``boolean``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L116)&nbsp;

___
#### _uiProps

<div style="margin-left: 10px;">


• **_uiProps**: ``NodeUIProperties``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L114)&nbsp;

___
#### layerInfo

<div style="margin-left: 10px;">


• **layerInfo**: ``TMXImageLayerInfo``

</div>


##### Defined in &nbsp;   [cocos/tiledmap/tiled-map.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/tiledmap/tiled-map.ts#L47)&nbsp;

___
#### EventType

<div style="margin-left: 10px;">




**`en`** Event types emitted by Node




**`zh`** 节点可能发出的事件类型



• **EventType**: ``SystemEventType``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L92)&nbsp;

___
#### NodeSpace

<div style="margin-left: 10px;">




**`en`** Coordinates space




**`zh`** 空间变换操作的坐标系



• **NodeSpace**: ``NodeSpace``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L98)&nbsp;

___
#### TransformBit

<div style="margin-left: 10px;">




**`en`** Bit masks for Node transformation parts, can be used to determine which part changed in [[SystemEventType.TRANSFORM_CHANGED]] event




**`zh`** 节点变换更新的具体部分，可用于判断 [[SystemEventType.TRANSFORM_CHANGED]] 事件的具体类型



• **TransformBit**: ``TransformBit``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L111)&nbsp;

___
#### TransformDirtyBit

<div style="margin-left: 10px;">




**`en`** Bit masks for Node transformation parts




**`zh`** 节点变换更新的具体部分




**`deprecated`** please use [[Node.TransformBit]]



• **TransformDirtyBit**: ``TransformBit``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L105)&nbsp;

___
#### _stackId

<div style="margin-left: 10px;">


• **_stackId**: ``number``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L223)&nbsp;

___
#### _stacks

<div style="margin-left: 10px;">


• **_stacks**: ``Array``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:222](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L222)&nbsp;

___
#### bookOfChange

<div style="margin-left: 10px;">


• **bookOfChange**: ``Map``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L86)&nbsp;

___
#### idGenerator

<div style="margin-left: 10px;">


• **idGenerator**: ``IDGenerator``

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L219)&nbsp;

___
#### _persistNode

<div style="margin-left: 10px;">




**`en`** If true, the node is an persist node which won't be destroyed during scene transition.
If false, the node will be destroyed automatically when loading a new scene. Default is false.




**`zh`** 如果为true，则该节点是一个常驻节点，不会在场景转换期间被销毁。
如果为false，节点将在加载新场景时自动销毁。默认为 false。




**`default`** false


• **_persistNode**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L102)&nbsp;   [cocos/core/scene-graph/base-node.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L105)&nbsp;

___
#### active

<div style="margin-left: 10px;">




**`en`** 
The local active state of this node.
Note that a Node may be inactive because a parent is not active, even if this returns true.
Use [[activeInHierarchy]]
if you want to check if the Node is actually treated as active in the scene.




**`zh`** 
当前节点的自身激活状态。
值得注意的是，一个节点的父节点如果不被激活，那么即使它自身设为激活，它仍然无法激活。
如果你想检查节点在场景中实际的激活状态可以使用 [[activeInHierarchy]]




**`default`** true



• **active**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L163)&nbsp;   [cocos/core/scene-graph/base-node.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L166)&nbsp;

___
#### activeInHierarchy

<div style="margin-left: 10px;">




**`en`** Indicates whether this node is active in the scene.




**`zh`** 表示此节点是否在场景中激活。



• **activeInHierarchy**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L184)&nbsp;

___
#### angle

<div style="margin-left: 10px;">




**`en`** Rotation in local coordinate system, represented by euler angles, but limited on z axis




**`zh`** 本地坐标系下的旋转，用欧拉角表示，但是限定在 z 轴上。



• **angle**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:238](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L238)&nbsp;   [cocos/core/scene-graph/node.ts:242](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L242)&nbsp;

___
#### children

<div style="margin-left: 10px;">




**`en`** All children nodes.




**`zh`** 节点的所有子节点。




**`readonly`** 



• **children**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L146)&nbsp;

___
#### components

<div style="margin-left: 10px;">




**`en`** Gets all components attached to this node.




**`zh`** 获取附加到此节点的所有组件。



• **components**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L89)&nbsp;

___
#### eulerAngles

<div style="margin-left: 10px;">




**`en`** Rotation in local coordinate system, represented by euler angles




**`zh`** 本地坐标系下的旋转，用欧拉角表示



• **eulerAngles**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L221)&nbsp;   [cocos/core/scene-graph/node.ts:225](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L225)&nbsp;

___
#### eventProcessor

<div style="margin-left: 10px;">




**`en`** The event processor of the current node, it provides EventTarget ability.




**`zh`** 当前节点的事件处理器，提供 EventTarget 能力。




**`readonly`** 



• **eventProcessor**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L214)&nbsp;

___
#### forward

<div style="margin-left: 10px;">




**`en`** The vector representing forward direction in local coordinate system, it's the minus z direction by default




**`zh`** 当前节点面向的前方方向，默认前方为 -z 方向



• **forward**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:321](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L321)&nbsp;   [cocos/core/scene-graph/node.ts:325](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L325)&nbsp;

___
#### handle

<div style="margin-left: 10px;">


• **handle**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L172)&nbsp;

___
#### hasChangedFlags

<div style="margin-left: 10px;">




**`en`** Whether the node's transformation have changed during the current frame.




**`zh`** 这个节点的空间变换信息在当前帧内是否有变过？



• **hasChangedFlags**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L351)&nbsp;   [cocos/core/scene-graph/node.ts:355](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L355)&nbsp;

___
#### hideFlags

<div style="margin-left: 10px;">




**`en`** After inheriting CCObject objects, control whether you need to hide, lock, serialize, and other functions.




**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。



• **hideFlags**

</div>


##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;

___
#### isValid

<div style="margin-left: 10px;">




**`en`** 
Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
When an object's `destroy` is called, it is actually destroyed after the end of this frame.
So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
If you want to determine whether the current frame has called `destroy`, use `isValid(obj, true)`,
but this is often caused by a particular logical requirements, which is not normally required.





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


• **isValid**

</div>


##### Defined in &nbsp;   [cocos/core/data/object.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L266)&nbsp;

___
#### layer

<div style="margin-left: 10px;">




**`en`** Layer of the current Node, it affects raycast, physics etc, refer to [[Layers]]




**`zh`** 节点所属层，主要影响射线检测、物理碰撞等，参考 [[Layers]]



• **layer**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:337](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L337)&nbsp;   [cocos/core/scene-graph/node.ts:343](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L343)&nbsp;

___
#### matrix

<div style="margin-left: 10px;">




**`en`** Local transformation matrix




**`zh`** 本地坐标系变换矩阵



• **matrix**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:298](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L298)&nbsp;

___
#### name

<div style="margin-left: 10px;">




**`en`** Name of node.




**`zh`** 该节点名称。



• **name**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L120)&nbsp;   [cocos/core/scene-graph/base-node.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L123)&nbsp;

___
#### parent

<div style="margin-left: 10px;">




**`en`** The parent node




**`zh`** 父节点



• **parent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L193)&nbsp;   [cocos/core/scene-graph/base-node.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L196)&nbsp;

___
#### position

<div style="margin-left: 10px;">




**`en`** Position in local coordinate system




**`zh`** 本地坐标系下的坐标



• **position**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L181)&nbsp;   [cocos/core/scene-graph/node.ts:185](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L185)&nbsp;

___
#### rotation

<div style="margin-left: 10px;">




**`en`** Rotation in local coordinate system, represented by a quaternion




**`zh`** 本地坐标系下的旋转，用四元数表示



• **rotation**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L208)&nbsp;   [cocos/core/scene-graph/node.ts:212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L212)&nbsp;

___
#### scale

<div style="margin-left: 10px;">




**`en`** Scale in local coordinate system




**`zh`** 本地坐标系下的缩放



• **scale**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L272)&nbsp;   [cocos/core/scene-graph/node.ts:276](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L276)&nbsp;

___
#### scene

<div style="margin-left: 10px;">




**`en`** Which scene this node belongs to.




**`zh`** 此节点属于哪个场景。




**`readonly`** 



• **scene**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:205](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L205)&nbsp;

___
#### uuid

<div style="margin-left: 10px;">




**`en`** The uuid for editor, will be stripped after building project.




**`zh`** 主要用于编辑器的 uuid，在编辑器下可用于持久化存储，在项目构建之后将变成自增的 id。




**`readonly`** 



• **uuid**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L136)&nbsp;

___
#### worldMatrix

<div style="margin-left: 10px;">




**`en`** World transformation matrix




**`zh`** 世界坐标系变换矩阵



• **worldMatrix**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:312](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L312)&nbsp;

___
#### worldPosition

<div style="margin-left: 10px;">




**`en`** Position in world coordinate system




**`zh`** 世界坐标系下的坐标



• **worldPosition**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L194)&nbsp;   [cocos/core/scene-graph/node.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L199)&nbsp;

___
#### worldRotation

<div style="margin-left: 10px;">




**`en`** Rotation in world coordinate system, represented by a quaternion




**`zh`** 世界坐标系下的旋转，用四元数表示



• **worldRotation**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:258](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L258)&nbsp;   [cocos/core/scene-graph/node.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L263)&nbsp;

___
#### worldScale

<div style="margin-left: 10px;">




**`en`** Scale in world coordinate system




**`zh`** 世界坐标系下的缩放



• **worldScale**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:285](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L285)&nbsp;   [cocos/core/scene-graph/node.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L290)&nbsp;

___
#### _checkMultipleComp

<div style="margin-left: 10px;">


• **_checkMultipleComp**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1389](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1389)&nbsp;

___
#### _destroyImmediate

<div style="margin-left: 10px;">


• **_destroyImmediate**

</div>


##### Defined in &nbsp;   [cocos/core/data/object.ts:336](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L336)&nbsp;

___
#### _destruct

<div style="margin-left: 10px;">


• **_destruct**

</div>


##### Defined in &nbsp;   [cocos/core/data/object.ts:326](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L326)&nbsp;

___
#### _instantiate

<div style="margin-left: 10px;">


• **_instantiate**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1267](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1267)&nbsp;

___
#### _onBatchCreated

<div style="margin-left: 10px;">


• **_onBatchCreated**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:399](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L399)&nbsp;

___
#### _onBeforeSerialize

<div style="margin-left: 10px;">


• **_onBeforeSerialize**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:431](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L431)&nbsp;

___
#### _onHierarchyChanged

<div style="margin-left: 10px;">


• **_onHierarchyChanged**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:394](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L394)&nbsp;

___
#### _onHierarchyChangedBase

<div style="margin-left: 10px;">


• **_onHierarchyChangedBase**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1296](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1296)&nbsp;

___
#### _onPostActivated

<div style="margin-left: 10px;">


• **_onPostActivated**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:436](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L436)&nbsp;

___
#### _onPreDestroy

<div style="margin-left: 10px;">


• **_onPreDestroy**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1259)&nbsp;

___
#### _onPreDestroyBase

<div style="margin-left: 10px;">


• **_onPreDestroyBase**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1327)&nbsp;

___
#### _onSetParent

<div style="margin-left: 10px;">


• **_onSetParent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:375](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L375)&nbsp;

___
#### _onSiblingIndexChanged

<div style="margin-left: 10px;">


• **_onSiblingIndexChanged**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1382](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1382)&nbsp;

___
#### _removeComponent

<div style="margin-left: 10px;">


• **_removeComponent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1212)&nbsp;

___
#### _updateScene

<div style="margin-left: 10px;">


• **_updateScene**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L338)&nbsp;

___
#### _updateSiblingIndex

<div style="margin-left: 10px;">


• **_updateSiblingIndex**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1231)&nbsp;

___
#### addChild

<div style="margin-left: 10px;">


• **addChild**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:539](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L539)&nbsp;

___
#### addComponent

<div style="margin-left: 10px;">


• **addComponent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:898](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L898)&nbsp;   [cocos/core/scene-graph/base-node.ts:910](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L910)&nbsp;   [cocos/core/scene-graph/base-node.ts:912](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L912)&nbsp;

___
#### attr

<div style="margin-left: 10px;">


• **attr**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L391)&nbsp;

___
#### destroy

<div style="margin-left: 10px;">


• **destroy**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L164)&nbsp;

___
#### destroyAllChildren

<div style="margin-left: 10px;">


• **destroyAllChildren**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1204)&nbsp;

___
#### dispatchEvent

<div style="margin-left: 10px;">


• **dispatchEvent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1157](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1157)&nbsp;

___
#### emit

<div style="margin-left: 10px;">


• **emit**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1146)&nbsp;

___
#### getChildByName

<div style="margin-left: 10px;">


• **getChildByName**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:491](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L491)&nbsp;

___
#### getChildByPath

<div style="margin-left: 10px;">


• **getChildByPath**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:516](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L516)&nbsp;

___
#### getChildByUuid

<div style="margin-left: 10px;">


• **getChildByUuid**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:466](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L466)&nbsp;

___
#### getComponent

<div style="margin-left: 10px;">


• **getComponent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:777](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L777)&nbsp;   [cocos/core/scene-graph/base-node.ts:793](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L793)&nbsp;   [cocos/core/scene-graph/base-node.ts:795](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L795)&nbsp;

___
#### getComponentInChildren

<div style="margin-left: 10px;">


• **getComponentInChildren**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:835](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L835)&nbsp;   [cocos/core/scene-graph/base-node.ts:846](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L846)&nbsp;   [cocos/core/scene-graph/base-node.ts:848](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L848)&nbsp;

___
#### getComponents

<div style="margin-left: 10px;">


• **getComponents**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:808](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L808)&nbsp;   [cocos/core/scene-graph/base-node.ts:815](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L815)&nbsp;   [cocos/core/scene-graph/base-node.ts:817](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L817)&nbsp;

___
#### getComponentsInChildren

<div style="margin-left: 10px;">


• **getComponentsInChildren**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:865](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L865)&nbsp;   [cocos/core/scene-graph/base-node.ts:876](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L876)&nbsp;   [cocos/core/scene-graph/base-node.ts:878](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L878)&nbsp;

___
#### getParent

<div style="margin-left: 10px;">


• **getParent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L401)&nbsp;

___
#### getPosition

<div style="margin-left: 10px;">


• **getPosition**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:661](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L661)&nbsp;

___
#### getRotation

<div style="margin-left: 10px;">


• **getRotation**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:740](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L740)&nbsp;

___
#### getScale

<div style="margin-left: 10px;">


• **getScale**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:784](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L784)&nbsp;

___
#### getSiblingIndex

<div style="margin-left: 10px;">


• **getSiblingIndex**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:562](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L562)&nbsp;

___
#### getWorldMatrix

<div style="margin-left: 10px;">


• **getWorldMatrix**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1011](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1011)&nbsp;

___
#### getWorldPosition

<div style="margin-left: 10px;">


• **getWorldPosition**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:863](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L863)&nbsp;

___
#### getWorldRS

<div style="margin-left: 10px;">


• **getWorldRS**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1023](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1023)&nbsp;

___
#### getWorldRT

<div style="margin-left: 10px;">


• **getWorldRT**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1037](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1037)&nbsp;

___
#### getWorldRotation

<div style="margin-left: 10px;">


• **getWorldRotation**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:938](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L938)&nbsp;

___
#### getWorldScale

<div style="margin-left: 10px;">


• **getWorldScale**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:997](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L997)&nbsp;

___
#### hasEventListener

<div style="margin-left: 10px;">


• **hasEventListener**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1169)&nbsp;

___
#### insertChild

<div style="margin-left: 10px;">


• **insertChild**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:553](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L553)&nbsp;

___
#### invalidateChildren

<div style="margin-left: 10px;">


• **invalidateChildren**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:535](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L535)&nbsp;

___
#### inverseTransformPoint

<div style="margin-left: 10px;">


• **inverseTransformPoint**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:797](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L797)&nbsp;

___
#### isChildOf

<div style="margin-left: 10px;">


• **isChildOf**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:748](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L748)&nbsp;

___
#### lookAt

<div style="margin-left: 10px;">


• **lookAt**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:517](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L517)&nbsp;

___
#### off

<div style="margin-left: 10px;">


• **off**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1097](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1097)&nbsp;

___
#### on

<div style="margin-left: 10px;">


• **on**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1071](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1071)&nbsp;

___
#### once

<div style="margin-left: 10px;">


• **once**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1125)&nbsp;

___
#### pauseSystemEvents

<div style="margin-left: 10px;">


• **pauseSystemEvents**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1089](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1089)&nbsp;

___
#### removeAllChildren

<div style="margin-left: 10px;">


• **removeAllChildren**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:731](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L731)&nbsp;

___
#### removeChild

<div style="margin-left: 10px;">


• **removeChild**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:720](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L720)&nbsp;

___
#### removeComponent

<div style="margin-left: 10px;">


• **removeComponent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:993](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L993)&nbsp;   [cocos/core/scene-graph/base-node.ts:1014](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1014)&nbsp;   [cocos/core/scene-graph/base-node.ts:1016](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1016)&nbsp;

___
#### removeFromParent

<div style="margin-left: 10px;">


• **removeFromParent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:709](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L709)&nbsp;

___
#### resumeSystemEvents

<div style="margin-left: 10px;">


• **resumeSystemEvents**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1104](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1104)&nbsp;

___
#### rotate

<div style="margin-left: 10px;">


• **rotate**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:490](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L490)&nbsp;

___
#### setParent

<div style="margin-left: 10px;">


• **setParent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L370)&nbsp;

___
#### setPosition

<div style="margin-left: 10px;">


• **setPosition**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:629](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L629)&nbsp;   [cocos/core/scene-graph/node.ts:638](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L638)&nbsp;   [cocos/core/scene-graph/node.ts:640](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L640)&nbsp;

___
#### setRTS

<div style="margin-left: 10px;">


• **setRTS**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1050](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1050)&nbsp;

___
#### setRotation

<div style="margin-left: 10px;">


• **setRotation**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:673](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L673)&nbsp;   [cocos/core/scene-graph/node.ts:683](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L683)&nbsp;   [cocos/core/scene-graph/node.ts:685](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L685)&nbsp;

___
#### setRotationFromEuler

<div style="margin-left: 10px;">


• **setRotationFromEuler**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:704](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L704)&nbsp;   [cocos/core/scene-graph/node.ts:713](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L713)&nbsp;   [cocos/core/scene-graph/node.ts:715](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L715)&nbsp;

___
#### setScale

<div style="margin-left: 10px;">


• **setScale**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:752](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L752)&nbsp;   [cocos/core/scene-graph/node.ts:761](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L761)&nbsp;   [cocos/core/scene-graph/node.ts:763](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L763)&nbsp;

___
#### setSiblingIndex

<div style="margin-left: 10px;">


• **setSiblingIndex**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:570](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L570)&nbsp;

___
#### setWorldPosition

<div style="margin-left: 10px;">


• **setWorldPosition**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:819](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L819)&nbsp;   [cocos/core/scene-graph/node.ts:828](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L828)&nbsp;   [cocos/core/scene-graph/node.ts:830](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L830)&nbsp;

___
#### setWorldRotation

<div style="margin-left: 10px;">


• **setWorldRotation**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:876](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L876)&nbsp;   [cocos/core/scene-graph/node.ts:886](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L886)&nbsp;   [cocos/core/scene-graph/node.ts:888](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L888)&nbsp;

___
#### setWorldRotationFromEuler

<div style="margin-left: 10px;">


• **setWorldRotationFromEuler**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:916](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L916)&nbsp;

___
#### setWorldScale

<div style="margin-left: 10px;">


• **setWorldScale**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:951](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L951)&nbsp;   [cocos/core/scene-graph/node.ts:960](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L960)&nbsp;   [cocos/core/scene-graph/node.ts:962](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L962)&nbsp;

___
#### syncFromNativeTransform

<div style="margin-left: 10px;">


• **syncFromNativeTransform**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1140)&nbsp;

___
#### syncToNativeTransform

<div style="margin-left: 10px;">


• **syncToNativeTransform**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1125)&nbsp;

___
#### targetOff

<div style="margin-left: 10px;">


• **targetOff**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:1179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L1179)&nbsp;

___
#### translate

<div style="margin-left: 10px;">


• **translate**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:456](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L456)&nbsp;

___
#### updateWorldTransform

<div style="margin-left: 10px;">


• **updateWorldTransform**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:552](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L552)&nbsp;

___
#### walk

<div style="margin-left: 10px;">


• **walk**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:616](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L616)&nbsp;

___
#### _deferredDestroy

<div style="margin-left: 10px;">


• **_deferredDestroy**

</div>


##### Defined in &nbsp;   [cocos/core/data/object.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L172)&nbsp;

___
#### _findChildComponent

<div style="margin-left: 10px;">


• **_findChildComponent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L274)&nbsp;

___
#### _findChildComponents

<div style="margin-left: 10px;">


• **_findChildComponents**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L292)&nbsp;

___
#### _findComponent

<div style="margin-left: 10px;">


• **_findComponent**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:233](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L233)&nbsp;

___
#### _findComponents

<div style="margin-left: 10px;">


• **_findComponents**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L254)&nbsp;

___
#### _setScene

<div style="margin-left: 10px;">


• **_setScene**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/base-node.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/base-node.ts#L229)&nbsp;

___
#### clearBooks

<div style="margin-left: 10px;">


• **clearBooks**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:1114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L1114)&nbsp;

___
#### isNode

<div style="margin-left: 10px;">


• **isNode**

</div>


##### Defined in &nbsp;   [cocos/core/scene-graph/node.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/node.ts#L160)&nbsp;

___

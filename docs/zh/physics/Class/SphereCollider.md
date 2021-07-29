
## Class: SphereCollider


`extend:`
[Collider](docs/zh/physics/Class/Collider.md)










**`zh`** 
球碰撞器。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Axis](#Axis)
- [ **`static`**  Type](#Type)
- [ **`static`**  system](#system)
- [ node](#node)
- [ type](#type)
- [ attachedRigidBody](#attachedRigidBody)
- [ boundingSphere](#boundingSphere)
- [ center](#center)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ isTrigger](#isTrigger)
- [ isValid](#isValid)
- [ material](#material)
- [ name](#name)
- [ needCollisionEvent](#needCollisionEvent)
- [ needTriggerEvent](#needTriggerEvent)
- [ radius](#radius)
- [ shape](#shape)
- [ sharedMaterial](#sharedMaterial)
- [ uuid](#uuid)
- [ worldBounds](#worldBounds)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ addGroup](#addGroup)
- [ addMask](#addMask)
- [ destroy](#destroy)
- [ emit](#emit)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getGroup](#getGroup)
- [ getMask](#getMask)
- [ hasEventListener](#hasEventListener)
- [ off](#off)
- [ on](#on)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ once](#once)
- [ removeAll](#removeAll)
- [ removeGroup](#removeGroup)
- [ removeMask](#removeMask)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setGroup](#setGroup)
- [ setMask](#setMask)
- [ targetOff](#targetOff)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
</div>

## Properties


### Axis
<div style="margin-left: 10px;">



**`zh`** 
坐标轴方向的枚举。





• `static` **Axis**:
`EnumAlias`  = `EAxisDirection`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L68)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:483](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L483)&nbsp;


___


### Type
<div style="margin-left: 10px;">



**`zh`** 
碰撞体类型的枚举。





• `static` **Type**:
`EnumAlias`  = `EColliderType`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L60)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:482](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L482)&nbsp;


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


### type
<div style="margin-left: 10px;">




•  **type**:
`EColliderType` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L217)&nbsp;


___


### attachedRigidBody
<div style="margin-left: 10px;">



**`zh`** 
获取碰撞器所绑定的刚体组件，可能为空。





•  **attachedRigidBody**:
 ``RigidBody | null`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L83)&nbsp;


___


### boundingSphere
<div style="margin-left: 10px;">




•  **boundingSphere**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:203](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L203)&nbsp;


___


### center
<div style="margin-left: 10px;">



**`zh`** 
在本地空间中，获取或设置碰撞器的中心点。





•  **center**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:176](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L176)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L180)&nbsp;


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


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isTrigger
<div style="margin-left: 10px;">



**`zh`** 
获取或设置碰撞器是否为触发器。(builtin中无论真假都为触发器)





•  **isTrigger**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L156)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L160)&nbsp;


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


### material
<div style="margin-left: 10px;">



**`zh`** 
获取或设置此碰撞器的物理材质，共享状态下获取将会生成新的实例。





•  **material**:
 ``null | PhysicsMaterial`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L116)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L126)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### needCollisionEvent
<div style="margin-left: 10px;">




•  **needCollisionEvent**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L213)&nbsp;


___


### needTriggerEvent
<div style="margin-left: 10px;">




•  **needTriggerEvent**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:209](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L209)&nbsp;


___


### radius
<div style="margin-left: 10px;">



**`zh`** 
获取或设置球的半径。





•  **radius**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/sphere-collider.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/sphere-collider.ts#L64)&nbsp;   [cocos/physics/framework/components/colliders/sphere-collider.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/sphere-collider.ts#L68)&nbsp;


___


### shape
<div style="margin-left: 10px;">



**`zh`** 
获取封装对象，通过此对象可以访问到底层实例。





•  **shape**:
 ``ISphereShape`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/sphere-collider.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/sphere-collider.ts#L81)&nbsp;


___


### sharedMaterial
<div style="margin-left: 10px;">



**`zh`** 
获取或设置此碰撞器的物理材质。





•  **sharedMaterial**:
 ``null | PhysicsMaterial`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L98)&nbsp;   [cocos/physics/framework/components/colliders/collider.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L102)&nbsp;


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


### worldBounds
<div style="margin-left: 10px;">




•  **worldBounds**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L197)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new SphereCollider**()

#### Parameters

| Name | Type |
| :------ | :------ |
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/sphere-collider.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/sphere-collider.ts#L88)&nbsp;


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



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L215)&nbsp;   [cocos/core/components/component.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L226)&nbsp;   [cocos/core/components/component.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L228)&nbsp;
___
### addGroup

<div style="margin-left: 10px;">

▸   **addGroup**<`void`\>(`v: number`) : `void`



**`zh`** 
添加分组值，可填要加入的 group。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L344)&nbsp;
___
### addMask

<div style="margin-left: 10px;">

▸   **addMask**<`void`\>(`v: number`) : `void`



**`zh`** 
添加掩码值，可填入需要检查的 group。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:397](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L397)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### emit

<div style="margin-left: 10px;">

▸   **emit**<`void`\>(`type: EventType, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any`) : `void`



**`zh`** 派发一个指定事件，并传递需要的参数



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `EventType` | event type  |
| `arg0` | `any` | - |
| `arg1` | `any` | - |
| `arg2` | `any` | - |
| `arg3` | `any` | - |
| `arg4` | `any` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L141)&nbsp;
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



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L333)&nbsp;   [cocos/core/components/component.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L344)&nbsp;   [cocos/core/components/component.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L346)&nbsp;
___
### getGroup

<div style="margin-left: 10px;">

▸   **getGroup**<`number`\> : `number`



**`zh`** 
获取分组值。




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L317)&nbsp;
___
### getMask

<div style="margin-left: 10px;">

▸   **getMask**<`number`\> : `number`



**`zh`** 
获取掩码值。




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L370)&nbsp;
___
### hasEventListener

<div style="margin-left: 10px;">

▸   **hasEventListener**<`boolean`\>(`type: string, callback: undefined | , target: any`) : `boolean`



**`zh`** 检查指定事件是否已注册回调。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `string` | Event type.  |
| `callback` | `undefined \| ` | Callback function when event triggered.  |
| `target` | `any` | Callback callee.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:52](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L52)&nbsp;
___
### off

<div style="margin-left: 10px;">

▸   **off**<`void`\>(`type: TriggerEventType | CollisionEventType, callback: undefined | , target: any`) : `void`



**`zh`** 
取消已经注册的触发或碰撞事件相关的回调。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `TriggerEventType \| CollisionEventType` | The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;  |
| `callback` | `undefined \| ` | The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.  |
| `target` | `any` | The event callback target.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:275](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L275)&nbsp;
___
### on

<div style="margin-left: 10px;">

▸   **on**<`any`\>(`type: TriggerEventType | CollisionEventType, callback: TFunction, target: any, once: undefined | false | true`) : `any`



**`zh`** 
注册触发或碰撞事件相关的回调。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `TriggerEventType \| CollisionEventType` | The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;  |
| `callback` | `TFunction` | The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.  |
| `target` | `any` | The event callback target.  |
| `once` | `undefined \| false \| true` | - |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:260](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L260)&nbsp;
___
### onFocusInEditor

<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLostFocusInEditor

<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### once

<div style="margin-left: 10px;">

▸   **once**<`any`\>(`type: TriggerEventType | CollisionEventType, callback: TFunction, target: any`) : `any`



**`zh`** 
注册触发或碰撞事件相关的回调，执行一次后会自动取消注册。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `type` | `TriggerEventType \| CollisionEventType` | The event type, onTriggerEnter|onTriggerStay|onTriggerExit|onCollisionEnter|onCollisionStay|onCollisionExit;  |
| `callback` | `TFunction` | The event callback, signature:`(event?:ICollisionEvent|ITriggerEvent)=>void`.  |
| `target` | `any` | The event callback target.  |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:289](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L289)&nbsp;
___
### removeAll

<div style="margin-left: 10px;">

▸   **removeAll**<`void`\>(`typeOrTarget: TriggerEventType | CollisionEventType | Record`) : `void`



**`zh`** 
移除所有指定目标或类型的注册事件。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `TriggerEventType \| CollisionEventType \| Record` | The event type or target.  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:303](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L303)&nbsp;
___
### removeGroup

<div style="margin-left: 10px;">

▸   **removeGroup**<`void`\>(`v: number`) : `void`



**`zh`** 
减去分组值，可填要移除的 group。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:357](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L357)&nbsp;
___
### removeMask

<div style="margin-left: 10px;">

▸   **removeMask**<`void`\>(`v: number`) : `void`



**`zh`** 
减去掩码值，可填入不需要检查的 group。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:410](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L410)&nbsp;
___
### resetInEditor

<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`



**`zh`** 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。





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



**`zh`** 调度一个只运行一次的回调任务，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。



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
### setGroup

<div style="margin-left: 10px;">

▸   **setGroup**<`void`\>(`v: number`) : `void`



**`zh`** 
设置分组值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:331](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L331)&nbsp;
___
### setMask

<div style="margin-left: 10px;">

▸   **setMask**<`void`\>(`v: number`) : `void`



**`zh`** 
设置掩码值。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `v` | `number` | 整数，范围为 2 的 0 次方 到 2 的 31 次方  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/colliders/collider.ts:384](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/colliders/collider.ts#L384)&nbsp;
___
### targetOff

<div style="margin-left: 10px;">

▸   **targetOff**<`void`\>(`typeOrTarget: any`) : `void`



**`zh`** 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `typeOrTarget` | `any` | The target to be searched for all related listeners  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/event/eventify.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/event/eventify.ts#L126)&nbsp;
___
### unschedule

<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`



**`zh`** 取消调度一个自定义的回调任务。



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



**`zh`** 取消调度所有已调度的回调函数。



**`example`**

```ts


this.unscheduleAllCallbacks();


```




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
___
<!---->




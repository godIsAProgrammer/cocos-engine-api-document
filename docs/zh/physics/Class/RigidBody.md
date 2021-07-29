
## Class: RigidBody


`extend:`
[Component](docs/zh/component/Class/Component.md)










**`zh`** 
刚体组件。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Type](#Type)
- [ **`static`**  system](#system)
- [ node](#node)
- [ allowSleep](#allowSleep)
- [ angularDamping](#angularDamping)
- [ angularFactor](#angularFactor)
- [ body](#body)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ group](#group)
- [ hideFlags](#hideFlags)
- [ isAwake](#isAwake)
- [ isDynamic](#isDynamic)
- [ isKinematic](#isKinematic)
- [ isSleeping](#isSleeping)
- [ isSleepy](#isSleepy)
- [ isStatic](#isStatic)
- [ isValid](#isValid)
- [ linearDamping](#linearDamping)
- [ linearFactor](#linearFactor)
- [ mass](#mass)
- [ name](#name)
- [ sleepThreshold](#sleepThreshold)
- [ type](#type)
- [ useGravity](#useGravity)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ addGroup](#addGroup)
- [ addMask](#addMask)
- [ applyForce](#applyForce)
- [ applyImpulse](#applyImpulse)
- [ applyLocalForce](#applyLocalForce)
- [ applyLocalImpulse](#applyLocalImpulse)
- [ applyLocalTorque](#applyLocalTorque)
- [ applyTorque](#applyTorque)
- [ clearForces](#clearForces)
- [ clearState](#clearState)
- [ clearVelocity](#clearVelocity)
- [ destroy](#destroy)
- [ getAngularVelocity](#getAngularVelocity)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getGroup](#getGroup)
- [ getLinearVelocity](#getLinearVelocity)
- [ getMask](#getMask)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ removeGroup](#removeGroup)
- [ removeMask](#removeMask)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setAngularVelocity](#setAngularVelocity)
- [ setGroup](#setGroup)
- [ setLinearVelocity](#setLinearVelocity)
- [ setMask](#setMask)
- [ sleep](#sleep)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ wakeUp](#wakeUp)
</div>

## Properties


### Type
<div style="margin-left: 10px;">



**`zh`** 
刚体类型的枚举。





• `static` **Type**:
`EnumAlias`  = `ERigidBodyType`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L73)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:747](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L747)&nbsp;


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


### allowSleep
<div style="margin-left: 10px;">



**`zh`** 
获取或设置是否允许休眠。





•  **allowSleep**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L155)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L159)&nbsp;


___


### angularDamping
<div style="margin-left: 10px;">



**`zh`** 
获取或设置旋转阻尼。





•  **angularDamping**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:195](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L195)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L199)&nbsp;


___


### angularFactor
<div style="margin-left: 10px;">



**`zh`** 
获取或设置旋转速度的因子，可以用来控制每个轴方向上的旋转速度的缩放。





•  **angularFactor**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:255](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L255)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L259)&nbsp;


___


### body
<div style="margin-left: 10px;">



**`zh`** 
获取封装对象，通过此对象可以访问到底层实例。





•  **body**:
 ``null | IRigidBody`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:375](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L375)&nbsp;


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


### group
<div style="margin-left: 10px;">



**`zh`** 
获取或设置分组。





•  **group**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L86)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L94)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">



**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isAwake
<div style="margin-left: 10px;">



**`zh`** 
获取是否是唤醒的状态。





•  **isAwake**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:291](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L291)&nbsp;


___


### isDynamic
<div style="margin-left: 10px;">



**`zh`** 
获取或设置刚体是否是动力学态类型的（将根据物理动力学控制运动）。





•  **isDynamic**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:345](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L345)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:349](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L349)&nbsp;


___


### isKinematic
<div style="margin-left: 10px;">



**`zh`** 
获取或设置刚体是否是运动态类型的（将由用户来控制运动）。





•  **isKinematic**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:360](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L360)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:364](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L364)&nbsp;


___


### isSleeping
<div style="margin-left: 10px;">



**`zh`** 
获取是否是正在休眠的状态。





•  **isSleeping**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L317)&nbsp;


___


### isSleepy
<div style="margin-left: 10px;">



**`zh`** 
获取是否是可进入休眠的状态。





•  **isSleepy**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L304)&nbsp;


___


### isStatic
<div style="margin-left: 10px;">



**`zh`** 
获取或设置刚体是否是静态类型的（静止不动的）。





•  **isStatic**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:330](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L330)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:334](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L334)&nbsp;


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


### linearDamping
<div style="margin-left: 10px;">



**`zh`** 
获取或设置线性阻尼。





•  **linearDamping**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L175)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:179](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L179)&nbsp;


___


### linearFactor
<div style="margin-left: 10px;">



**`zh`** 
获取或设置线性速度的因子，可以用来控制每个轴方向上的速度的缩放。





•  **linearFactor**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:235](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L235)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:239](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L239)&nbsp;


___


### mass
<div style="margin-left: 10px;">



**`zh`** 
获取或设置刚体的质量。





•  **mass**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L133)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L137)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### sleepThreshold
<div style="margin-left: 10px;">



**`zh`** 
获取或设置进入休眠的速度临界值。





•  **sleepThreshold**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:272](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L272)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L279)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`zh`** 
获取或设置刚体类型。





•  **type**:
 ``ERigidBodyType`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:112](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L112)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L116)&nbsp;


___


### useGravity
<div style="margin-left: 10px;">



**`zh`** 
获取或设置刚体是否使用重力。





•  **useGravity**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L215)&nbsp;   [cocos/physics/framework/components/rigid-body.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L219)&nbsp;


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

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new RigidBody**(`name: string`)

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

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:673](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L673)&nbsp;
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

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:726](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L726)&nbsp;
___
### applyForce

<div style="margin-left: 10px;">

▸   **applyForce**<`void`\>(`force: Vec3, relativePoint: Vec3`) : `void`



**`zh`** 
在世界空间中，相对于刚体的质心的某点上对刚体施加作用力。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `Vec3` | 作用力  |
| `relativePoint` | `Vec3` | 作用点，相对于刚体的质心  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:453](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L453)&nbsp;
___
### applyImpulse

<div style="margin-left: 10px;">

▸   **applyImpulse**<`void`\>(`impulse: Vec3, relativePoint: Vec3`) : `void`



**`zh`** 
在世界空间中，相对于刚体的质心的某点上对刚体施加冲量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `impulse` | `Vec3` | 冲量  |
| `relativePoint` | `Vec3` | 作用点，相对于刚体的中心点  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L481)&nbsp;
___
### applyLocalForce

<div style="margin-left: 10px;">

▸   **applyLocalForce**<`void`\>(`force: Vec3, localPoint: Vec3`) : `void`



**`zh`** 
在本地空间中，相对于刚体的质心的某点上对刚体施加作用力。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `Vec3` | 作用力  |
| `localPoint` | `Vec3` | 作用点  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:467](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L467)&nbsp;
___
### applyLocalImpulse

<div style="margin-left: 10px;">

▸   **applyLocalImpulse**<`void`\>(`impulse: Vec3, localPoint: Vec3`) : `void`



**`zh`** 
在本地空间中，相对于刚体的质心的某点上对刚体施加冲量。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `impulse` | `Vec3` | 冲量  |
| `localPoint` | `Vec3` | 作用点  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:495](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L495)&nbsp;
___
### applyLocalTorque

<div style="margin-left: 10px;">

▸   **applyLocalTorque**<`void`\>(`torque: Vec3`) : `void`



**`zh`** 
在本地空间中，对刚体施加扭矩。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `torque` | `Vec3` | 扭矩  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:519](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L519)&nbsp;
___
### applyTorque

<div style="margin-left: 10px;">

▸   **applyTorque**<`void`\>(`torque: Vec3`) : `void`



**`zh`** 
在世界空间中，对刚体施加扭矩。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `torque` | `Vec3` | 扭矩  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:508](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L508)&nbsp;
___
### clearForces

<div style="margin-left: 10px;">

▸   **clearForces**<`void`\> : `void`



**`zh`** 
清除刚体受到的力。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:567](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L567)&nbsp;
___
### clearState

<div style="margin-left: 10px;">

▸   **clearState**<`void`\> : `void`



**`zh`** 
清除刚体受到的力和速度。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:555](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L555)&nbsp;
___
### clearVelocity

<div style="margin-left: 10px;">

▸   **clearVelocity**<`void`\> : `void`



**`zh`** 
清除刚体的速度。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:579](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L579)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### getAngularVelocity

<div style="margin-left: 10px;">

▸   **getAngularVelocity**<`void`\>(`out: Vec3`) : `void`



**`zh`** 
获取旋转速度。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | 速度 Vec3  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:618](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L618)&nbsp;
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

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:646](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L646)&nbsp;
___
### getLinearVelocity

<div style="margin-left: 10px;">

▸   **getLinearVelocity**<`void`\>(`out: Vec3`) : `void`



**`zh`** 
获取线性速度。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Vec3` | 速度 Vec3  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:592](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L592)&nbsp;
___
### getMask

<div style="margin-left: 10px;">

▸   **getMask**<`number`\> : `number`



**`zh`** 
获取掩码值。




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:699](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L699)&nbsp;
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

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:686](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L686)&nbsp;
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

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:739](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L739)&nbsp;
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
### setAngularVelocity

<div style="margin-left: 10px;">

▸   **setAngularVelocity**<`void`\>(`value: Vec3`) : `void`



**`zh`** 
设置旋转速度。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `Vec3` | 速度 Vec3  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:631](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L631)&nbsp;
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

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:660](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L660)&nbsp;
___
### setLinearVelocity

<div style="margin-left: 10px;">

▸   **setLinearVelocity**<`void`\>(`value: Vec3`) : `void`



**`zh`** 
设置线性速度。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `value` | `Vec3` | 速度 Vec3  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:605](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L605)&nbsp;
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

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:713](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L713)&nbsp;
___
### sleep

<div style="margin-left: 10px;">

▸   **sleep**<`void`\> : `void`



**`zh`** 
休眠刚体。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:543](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L543)&nbsp;
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
### wakeUp

<div style="margin-left: 10px;">

▸   **wakeUp**<`void`\> : `void`



**`zh`** 
唤醒刚体。





##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/physics/framework/components/rigid-body.ts:531](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/components/rigid-body.ts#L531)&nbsp;
___
<!---->




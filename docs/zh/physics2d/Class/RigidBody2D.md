
## Class: RigidBody2D


`extend:`
[Component](docs/zh/component/Class/Component.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  system](#system)
- [ awakeOnLoad](#awakeOnLoad)
- [ bullet](#bullet)
- [ enabledContactListener](#enabledContactListener)
- [ node](#node)
- [ allowSleep](#allowSleep)
- [ angularDamping](#angularDamping)
- [ angularVelocity](#angularVelocity)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ fixedRotation](#fixedRotation)
- [ gravityScale](#gravityScale)
- [ group](#group)
- [ hideFlags](#hideFlags)
- [ impl](#impl)
- [ isValid](#isValid)
- [ linearDamping](#linearDamping)
- [ linearVelocity](#linearVelocity)
- [ name](#name)
- [ type](#type)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ applyAngularImpulse](#applyAngularImpulse)
- [ applyForce](#applyForce)
- [ applyForceToCenter](#applyForceToCenter)
- [ applyLinearImpulse](#applyLinearImpulse)
- [ applyLinearImpulseToCenter](#applyLinearImpulseToCenter)
- [ applyTorque](#applyTorque)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getInertia](#getInertia)
- [ getLinearVelocityFromWorldPoint](#getLinearVelocityFromWorldPoint)
- [ getLocalCenter](#getLocalCenter)
- [ getLocalPoint](#getLocalPoint)
- [ getLocalVector](#getLocalVector)
- [ getMass](#getMass)
- [ getWorldCenter](#getWorldCenter)
- [ getWorldPoint](#getWorldPoint)
- [ getWorldVector](#getWorldVector)
- [ isAwake](#isAwake)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ sleep](#sleep)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ wakeUp](#wakeUp)
</div>

## Properties


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### awakeOnLoad
<div style="margin-left: 10px;">




**`zh`** 
是否在初始化时唤醒此刚体





•  **awakeOnLoad**:
`boolean`  = `true`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:212](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L212)&nbsp;


___


### bullet
<div style="margin-left: 10px;">




**`zh`** 
这个刚体是否是一个快速移动的刚体，并且需要禁止穿过其他快速移动的刚体？
需要注意的是 :
 - 所有刚体都被禁止从 运动刚体 和 静态刚体 中穿过。此选项只关注于 动态刚体。
 - 应该尽量少的使用此选项，因为它会增加程序处理时间。





•  **bullet**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:51](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L51)&nbsp;


___


### enabledContactListener
<div style="margin-left: 10px;">




•  **enabledContactListener**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:35](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L35)&nbsp;


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
如果此刚体永远都不应该进入睡眠，那么设置这个属性为 false。
需要注意这将使 CPU 占用率提高。





•  **allowSleep**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L83)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L86)&nbsp;


___


### angularDamping
<div style="margin-left: 10px;">




**`zh`** 
Angular damping 用于衰减刚体的角速度。衰减系数可以大于 1，但是当衰减系数比较大的时候，衰减的效果会变得比较敏感。





•  **angularDamping**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L138)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L141)&nbsp;


___


### angularVelocity
<div style="margin-left: 10px;">




**`zh`** 
刚体的角速度





•  **angularVelocity**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:175](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L175)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L181)&nbsp;


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


### fixedRotation
<div style="margin-left: 10px;">




**`zh`** 
是否禁止此刚体进行旋转





•  **fixedRotation**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:195](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L195)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L198)&nbsp;


___


### gravityScale
<div style="margin-left: 10px;">




**`zh`** 
缩放应用在此刚体上的重力值





•  **gravityScale**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L100)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L103)&nbsp;


___


### group
<div style="margin-left: 10px;">




**`zh`** 
获取或设置分组。





•  **group**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:27](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L27)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:30](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L30)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### impl
<div style="margin-left: 10px;">




•  **impl**:
 ``null | IRigidBody2D`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:527](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L527)&nbsp;


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
Linear damping 用于衰减刚体的线性速度。衰减系数可以大于 1，但是当衰减系数比较大的时候，衰减的效果会变得比较敏感。





•  **linearDamping**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L119)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:122](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L122)&nbsp;


___


### linearVelocity
<div style="margin-left: 10px;">




**`zh`** 
刚体在世界坐标下的线性速度





•  **linearVelocity**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L155)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:161](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L161)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### type
<div style="margin-left: 10px;">




**`zh`** 
刚体类型： Static, Kinematic, Dynamic or Animated.





•  **type**:
 ``ERigidBody2DType`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L60)&nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L63)&nbsp;


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

• **new RigidBody2D**(`name: string`)

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
### applyAngularImpulse
<div style="margin-left: 10px;">

▸   **applyAngularImpulse**<`void`\>(`impulse: number, wake: boolean`) : `void`




**`zh`** 
施加一个角速度冲量。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `impulse` | `number` | the angular impulse in units of kg*m*m/s  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | also wake up the body  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L385)&nbsp;
___
### applyForce
<div style="margin-left: 10px;">

▸   **applyForce**<`void`\>(`force: Vec2, point: Vec2, wake: boolean`) : `void`




**`zh`** 
施加一个力到刚体上的一个点。如果力没有施加到刚体的质心上，还会产生一个扭矩并且影响到角速度。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `Vec2` | the world force vector.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | the world position.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | also wake up the body.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L310)&nbsp;
___
### applyForceToCenter
<div style="margin-left: 10px;">

▸   **applyForceToCenter**<`void`\>(`force: Vec2, wake: boolean`) : `void`




**`zh`** 
施加一个力到刚体上的质心上。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `force` | `Vec2` | the world force vector.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | also wake up the body.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:324](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L324)&nbsp;
___
### applyLinearImpulse
<div style="margin-left: 10px;">

▸   **applyLinearImpulse**<`void`\>(`impulse: Vec2, point: Vec2, wake: boolean`) : `void`




**`zh`** 
施加冲量到刚体上的一个点，将立即改变刚体的线性速度。
如果冲量施加到的点不是刚体的质心，那么将产生一个扭矩并影响刚体的角速度。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `impulse` | `Vec2` | the world impulse vector, usually in N-seconds or kg-m/s.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | the world position  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | alse wake up the body  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:356](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L356)&nbsp;
___
### applyLinearImpulseToCenter
<div style="margin-left: 10px;">

▸   **applyLinearImpulseToCenter**<`void`\>(`impulse: Vec2, wake: boolean`) : `void`




**`zh`** 
施加冲量到刚体上的质心点，将立即改变刚体的线性速度。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `impulse` | `Vec2` | the world impulse vector, usually in N-seconds or kg-m/s.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | alse wake up the body  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:371](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L371)&nbsp;
___
### applyTorque
<div style="margin-left: 10px;">

▸   **applyTorque**<`void`\>(`torque: number, wake: boolean`) : `void`




**`zh`** 
施加一个扭矩力，将影响刚体的角速度




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `torque` | `number` | about the z-axis (out of the screen), usually in N-m.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `wake` | `boolean` | also wake up the body  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L338)&nbsp;
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
### getInertia
<div style="margin-left: 10px;">

▸   **getInertia**<`number`\> : `number`




**`zh`** 
获取刚体本地坐标系下原点的旋转惯性





<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:493](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L493)&nbsp;
___
### getLinearVelocityFromWorldPoint
<div style="margin-left: 10px;">

▸   **getLinearVelocityFromWorldPoint**<`Out`\>(`worldPoint: IVec2Like, out: Out`) : `Out`




**`zh`** 
获取刚体上指定点的线性速度




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldPoint` | `IVec2Like` | a point in world coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving point  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:399](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L399)&nbsp;
___
### getLocalCenter
<div style="margin-left: 10px;">

▸   **getLocalCenter**<`Out`\>(`out: Out`) : `Out`




**`zh`** 
获取刚体本地坐标系下的质心





<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:468](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L468)&nbsp;
___
### getLocalPoint
<div style="margin-left: 10px;">

▸   **getLocalPoint**<`Out`\>(`worldPoint: IVec2Like, out: Out`) : `Out`




**`zh`** 
将一个给定的世界坐标系下的点转换为刚体本地坐标系下的点




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldPoint` | `IVec2Like` | a point in world coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving point  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:442](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L442)&nbsp;
___
### getLocalVector
<div style="margin-left: 10px;">

▸   **getLocalVector**<`Out`\>(`worldVector: IVec2Like, out: Out`) : `Out`




**`zh`** 
将一个给定的世界坐标系下的向量转换为刚体本地坐标系下的向量




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `worldVector` | `IVec2Like` | a vector in world coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving vector  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:413](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L413)&nbsp;
___
### getMass
<div style="margin-left: 10px;">

▸   **getMass**<`number`\> : `number`




**`zh`** 
获取刚体的质量。





<!---->
<!--    #### Returns `number` -->
<!---->


##### Returns `number`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L292)&nbsp;
___
### getWorldCenter
<div style="margin-left: 10px;">

▸   **getWorldCenter**<`Out`\>(`out: Out`) : `Out`




**`zh`** 
获取刚体世界坐标系下的质心





<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:480](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L480)&nbsp;
___
### getWorldPoint
<div style="margin-left: 10px;">

▸   **getWorldPoint**<`Out`\>(`localPoint: IVec2Like, out: Out`) : `Out`




**`zh`** 
将一个给定的刚体本地坐标系下的点转换为世界坐标系下的点




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `localPoint` | `IVec2Like` | a point in local coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving point  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:456](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L456)&nbsp;
___
### getWorldVector
<div style="margin-left: 10px;">

▸   **getWorldVector**<`Out`\>(`localVector: IVec2Like, out: Out`) : `Out`




**`zh`** 
将一个给定的刚体本地坐标系下的向量转换为世界坐标系下的向量




<!---->
<!--    #### Returns `Out` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `localVector` | `IVec2Like` | a vector in world coordinates.  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | optional, the receiving vector  |



##### Returns `Out`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:427](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L427)&nbsp;
___
### isAwake
<div style="margin-left: 10px;">

▸   **isAwake**<`boolean`\> : `boolean`




**`zh`** 
获取刚体是否正在休眠





<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:254](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L254)&nbsp;
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
### sleep
<div style="margin-left: 10px;">

▸   **sleep**<`void`\> : `void`




**`zh`** 
休眠刚体。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:280](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L280)&nbsp;
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
### wakeUp
<div style="margin-left: 10px;">

▸   **wakeUp**<`void`\> : `void`




**`zh`** 
唤醒刚体。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/rigid-body-2d.ts:268](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/rigid-body-2d.ts#L268)&nbsp;
___
<!---->




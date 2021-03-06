
## Class: RelativeJoint2D


`extend:`
[Joint2D](docs/zh/physics2d/Class/Joint2D.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  system](#system)
- [ TYPE](#TYPE)
- [ anchor](#anchor)
- [ collideConnected](#collideConnected)
- [ connectedAnchor](#connectedAnchor)
- [ connectedBody](#connectedBody)
- [ node](#node)
- [ angularOffset](#angularOffset)
- [ autoCalcOffset](#autoCalcOffset)
- [ body](#body)
- [ correctionFactor](#correctionFactor)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ hideFlags](#hideFlags)
- [ impl](#impl)
- [ isValid](#isValid)
- [ linearOffset](#linearOffset)
- [ maxForce](#maxForce)
- [ maxTorque](#maxTorque)
- [ name](#name)
- [ uuid](#uuid)

### Constructors

- [ constructor](#constructor)

### Methods

- [ addComponent](#addComponent)
- [ destroy](#destroy)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ resetInEditor](#resetInEditor)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
</div>

## Properties


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### TYPE
<div style="margin-left: 10px;">




•  **TYPE**:
`EJoint2DType`  = `EJoint2DType.RELATIVE`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:18](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L18)&nbsp;


___


### anchor
<div style="margin-left: 10px;">




•  **anchor**:
`Vec2`  = `new Vec2()`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/joint-2d.ts:17](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/joint-2d.ts#L17)&nbsp;


___


### collideConnected
<div style="margin-left: 10px;">




•  **collideConnected**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/joint-2d.ts:23](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/joint-2d.ts#L23)&nbsp;


___


### connectedAnchor
<div style="margin-left: 10px;">




•  **connectedAnchor**:
`Vec2`  = `new Vec2()`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/joint-2d.ts:20](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/joint-2d.ts#L20)&nbsp;


___


### connectedBody
<div style="margin-left: 10px;">




•  **connectedBody**:
`RigidBody2D | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/joint-2d.ts:26](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/joint-2d.ts#L26)&nbsp;


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


### angularOffset
<div style="margin-left: 10px;">



**`zh`** 
关节另一端的刚体相对于起始端刚体的角度偏移量





•  **angularOffset**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L98)&nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L106)&nbsp;


___


### autoCalcOffset
<div style="margin-left: 10px;">



**`zh`** 
自动计算关节连接的两个刚体间的 angularOffset 和 linearOffset





•  **autoCalcOffset**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L120)&nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:123](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L123)&nbsp;


___


### body
<div style="margin-left: 10px;">




•  **body**:
 ``null | RigidBody2D`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/joint-2d.ts:29](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/joint-2d.ts#L29)&nbsp;


___


### correctionFactor
<div style="margin-left: 10px;">



**`zh`** 
位置矫正系数，范围为 [0, 1]





•  **correctionFactor**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L61)&nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L64)&nbsp;


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


### impl
<div style="margin-left: 10px;">




•  **impl**:
 ``null | IJoint2D`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/joint-2d.ts:33](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/joint-2d.ts#L33)&nbsp;


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


### linearOffset
<div style="margin-left: 10px;">



**`zh`** 
关节另一端的刚体相对于起始端刚体的位置偏移量





•  **linearOffset**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:78](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L78)&nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L84)&nbsp;


___


### maxForce
<div style="margin-left: 10px;">



**`zh`** 
可以应用于刚体的最大的力值





•  **maxForce**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:27](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L27)&nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:30](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L30)&nbsp;


___


### maxTorque
<div style="margin-left: 10px;">



**`zh`** 
可以应用于刚体的最大扭矩值





•  **maxTorque**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:44](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L44)&nbsp;   [cocos/physics-2d/framework/components/joints/relative-joint-2d.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/framework/components/joints/relative-joint-2d.ts#L47)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


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

• **new RelativeJoint2D**(`name: string`)

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




## Interface: IPhysics2DContact

- [colliderA](#colliderA)
- [colliderB](#colliderB)
- [disabled](#disabled)
- [disabledOnce](#disabledOnce)
- [getFriction](#getFriction)
- [getImpulse](#getImpulse)
- [getManifold](#getManifold)
- [getRestitution](#getRestitution)
- [getTangentSpeed](#getTangentSpeed)
- [getWorldManifold](#getWorldManifold)
- [isTouching](#isTouching)
- [setFriction](#setFriction)
- [setRestitution](#setRestitution)
- [setTangentSpeed](#setTangentSpeed)

### Properties

#### colliderA

<div style="margin-left: 10px;">




**`en`** 
One of the collider that collided




**`zh`** 
发生碰撞的碰撞体之一



• **colliderA**: ``Collider2D | null``

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L177)&nbsp;

___
#### colliderB

<div style="margin-left: 10px;">




**`en`** 
One of the collider that collided




**`zh`** 
发生碰撞的碰撞体之一



• **colliderB**: ``Collider2D | null``

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L184)&nbsp;

___
#### disabled

<div style="margin-left: 10px;">




**`en`** 
If set disabled to true, the contact will be ignored until contact end.
If you just want to disabled contact for current time step or sub-step, please use disabledOnce.




**`zh`** 
如果 disabled 被设置为 true，那么直到接触结束此接触都将被忽略。
如果只是希望在当前时间步或子步中忽略此接触，请使用 disabledOnce 。



• **disabled**: ``boolean``

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:193](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L193)&nbsp;

___
#### disabledOnce

<div style="margin-left: 10px;">




**`en`** 
Disabled contact for current time step or sub-step.




**`zh`** 
在当前时间步或子步中忽略此接触。



• **disabledOnce**: ``boolean``

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:200](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L200)&nbsp;

___
#### getFriction

<div style="margin-left: 10px;">


• **getFriction**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L263)&nbsp;

___
#### getImpulse

<div style="margin-left: 10px;">


• **getImpulse**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L226)&nbsp;

___
#### getManifold

<div style="margin-left: 10px;">


• **getManifold**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:216](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L216)&nbsp;

___
#### getRestitution

<div style="margin-left: 10px;">


• **getRestitution**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:277](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L277)&nbsp;

___
#### getTangentSpeed

<div style="margin-left: 10px;">


• **getTangentSpeed**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:248](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L248)&nbsp;

___
#### getWorldManifold

<div style="margin-left: 10px;">


• **getWorldManifold**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L208)&nbsp;

___
#### isTouching

<div style="margin-left: 10px;">


• **isTouching**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:234](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L234)&nbsp;

___
#### setFriction

<div style="margin-left: 10px;">


• **setFriction**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:256](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L256)&nbsp;

___
#### setRestitution

<div style="margin-left: 10px;">


• **setRestitution**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L270)&nbsp;

___
#### setTangentSpeed

<div style="margin-left: 10px;">


• **setTangentSpeed**

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:241](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L241)&nbsp;

___

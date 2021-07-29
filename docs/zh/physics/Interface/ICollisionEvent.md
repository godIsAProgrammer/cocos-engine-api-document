## Interface: ICollisionEvent

- [contacts](#contacts)
- [impl](#impl)
- [otherCollider](#otherCollider)
- [selfCollider](#selfCollider)
- [type](#type)

### Properties

#### contacts

<div style="margin-left: 10px;">




**`en`** 
Information about all points of impact in a collision event.




**`zh`** 
碰撞中的所有碰撞点的信息。



• **contacts**: ``array``

</div>


##### Defined in &nbsp;   [cocos/physics/framework/physics-interface.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-interface.ts#L223)&nbsp;

___
#### impl

<div style="margin-left: 10px;">




**`en`** 
Gets the lowLevel object, through which all the exposed properties can be accessed.




**`zh`** 
获取实现对象，通过它可以访问到底层暴露的所有属性。



• **impl**: ``any``

</div>


##### Defined in &nbsp;   [cocos/physics/framework/physics-interface.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-interface.ts#L231)&nbsp;

___
#### otherCollider

<div style="margin-left: 10px;">




**`en`** 
Another collider in collision.




**`zh`** 
碰撞中的另一个碰撞器。



• **otherCollider**: ``Collider``

</div>


##### Defined in &nbsp;   [cocos/physics/framework/physics-interface.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-interface.ts#L215)&nbsp;

___
#### selfCollider

<div style="margin-left: 10px;">




**`en`** 
The collider component instance of the event owner.




**`zh`** 
碰撞中的自己的碰撞器。



• **selfCollider**: ``Collider``

</div>


##### Defined in &nbsp;   [cocos/physics/framework/physics-interface.ts:207](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-interface.ts#L207)&nbsp;

___
#### type

<div style="margin-left: 10px;">




**`en`** 
The type of collision event.




**`zh`** 
碰撞的事件类型。



• **type**: ``CollisionEventType``

</div>


##### Defined in &nbsp;   [cocos/physics/framework/physics-interface.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-interface.ts#L199)&nbsp;

___

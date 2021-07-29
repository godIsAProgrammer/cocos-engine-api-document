## Interface: ITriggerEvent

- [impl](#impl)
- [otherCollider](#otherCollider)
- [selfCollider](#selfCollider)
- [type](#type)

### Properties

#### impl

<div style="margin-left: 10px;">




**`en`** 
Gets the lowLevel object, through which all the exposed properties can be accessed.




**`zh`** 
获取实现对象，通过它可以访问到底层暴露的所有属性。



• **impl**: ``any``

</div>


##### Defined in &nbsp;   [cocos/physics/framework/physics-interface.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-interface.ts#L71)&nbsp;

___
#### otherCollider

<div style="margin-left: 10px;">




**`en`** 
Trigger another collider in event.




**`zh`** 
触发事件中的另一个碰撞器



• **otherCollider**: ``Collider``

</div>


##### Defined in &nbsp;   [cocos/physics/framework/physics-interface.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-interface.ts#L63)&nbsp;

___
#### selfCollider

<div style="margin-left: 10px;">




**`en`** 
The collider component instance of the event owner.




**`zh`** 
触发事件中的自己的碰撞器



• **selfCollider**: ``Collider``

</div>


##### Defined in &nbsp;   [cocos/physics/framework/physics-interface.ts:55](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-interface.ts#L55)&nbsp;

___
#### type

<div style="margin-left: 10px;">




**`en`** 
The type of trigger event.




**`zh`** 
触发的事件类型。



• **type**: ``TriggerEventType``

</div>


##### Defined in &nbsp;   [cocos/physics/framework/physics-interface.ts:47](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics/framework/physics-interface.ts#L47)&nbsp;

___

## Interface: IPhysics2DManifoldPoint

- [localPoint](#localPoint)
- [normalImpulse](#normalImpulse)
- [tangentImpulse](#tangentImpulse)

### Properties

#### localPoint

<div style="margin-left: 10px;">



**`en`** 
The local point usage depends on the manifold type:
- Physics2DManifoldType.Circles: the local center of circleB
- Physics2DManifoldType.FaceA: the local center of circleB or the clip point of polygonB
- Physics2DManifoldType.FaceB: the clip point of polygonA



**`zh`** 
本地坐标点的用途取决于 manifold 的类型
- Physics2DManifoldType.Circles: circleB 的本地中心点
- Physics2DManifoldType.FaceA: circleB 的本地中心点 或者是 polygonB 的截取点
- Physics2DManifoldType.FaceB: polygonB 的截取点



• **localPoint**: ``Vec2``

</div>

##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L99)&nbsp;
___
#### normalImpulse

<div style="margin-left: 10px;">



**`en`** 
Normal impulse.



**`zh`** 
法线冲量。



• **normalImpulse**: ``number``

</div>

##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:106](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L106)&nbsp;
___
#### tangentImpulse

<div style="margin-left: 10px;">



**`en`** 
Tangent impulse.



**`zh`** 
切线冲量。



• **tangentImpulse**: ``number``

</div>

##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L113)&nbsp;
___

## Interface: IPhysics2DManifold

- [localNormal](#localNormal)
- [localPoint](#localPoint)
- [points](#points)
- [type](#type)

### Properties

#### localNormal

<div style="margin-left: 10px;">




**`en`** 
-Physics2DManifoldType.Circles: not used
-Physics2DManifoldType.FaceA: the normal on polygonA
-Physics2DManifoldType.FaceB: the normal on polygonB




**`zh`** 
-Physics2DManifoldType.Circles: 没被使用到
-Physics2DManifoldType.FaceA: polygonA 的法向量
-Physics2DManifoldType.FaceB: polygonB 的法向量



• **localNormal**: ``Vec2``

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L151)&nbsp;

___
#### localPoint

<div style="margin-left: 10px;">




**`en`** 
The local point usage depends on the manifold type:
-Physics2DManifoldType.Circles: the local center of circleA
-Physics2DManifoldType.FaceA: the center of faceA
-Physics2DManifoldType.FaceB: the center of faceB




**`zh`** 
用途取决于 manifold 类型
-Physics2DManifoldType.Circles: circleA 的本地中心点
-Physics2DManifoldType.FaceA: faceA 的本地中心点
-Physics2DManifoldType.FaceB: faceB 的本地中心点



• **localPoint**: ``Vec2``

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L140)&nbsp;

___
#### points

<div style="margin-left: 10px;">




**`en`** 
the points of contact.




**`zh`** 
接触点信息。



• **points**: ``array``

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L159)&nbsp;

___
#### type

<div style="margin-left: 10px;">




**`en`** 
Manifold type




**`zh`** 
Manifold 类型



• **type**: ``Physics2DManifoldType``

</div>


##### Defined in &nbsp;   [cocos/physics-2d/spec/i-physics-contact.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/physics-2d/spec/i-physics-contact.ts#L127)&nbsp;

___

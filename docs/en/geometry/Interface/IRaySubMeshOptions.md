## Interface: IRaySubMeshOptions

- [distance](#distance)
- [doubleSided](#doubleSided)
- [mode](#mode)
- [result](#result)

### Properties

#### distance

<div style="margin-left: 10px;">




**`en`** 
The maximum distance of the raycast, `Infinity` by default.




**`zh`** 
射线检测的最大距离，默认为`Infinity`。



• **distance**: ``number``

</div>


##### Defined in &nbsp;   [cocos/core/geometry/spec.ts:127](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/spec.ts#L127)&nbsp;

___
#### doubleSided

<div style="margin-left: 10px;">




**`en`** 
Whether to detect the double-sided or not，`false` by default.




**`zh`** 
是否检测双面，默认为`false`。



• **doubleSided**: ``false | true``

</div>


##### Defined in &nbsp;   [cocos/core/geometry/spec.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/spec.ts#L143)&nbsp;

___
#### mode

<div style="margin-left: 10px;">




**`en`** 
The raycast mode，`ANY` by default.




**`zh`** 
射线检测模式：[0, 1, 2]=>[`ALL`, `CLOSEST`, `ANY`]



• **mode**: ``ERaycastMode``

</div>


##### Defined in &nbsp;   [cocos/core/geometry/spec.ts:119](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/spec.ts#L119)&nbsp;

___
#### result

<div style="margin-left: 10px;">




**`en`** 
An array used to store the results of a ray detection.




**`zh`** 
用于存储射线检测结果的数组。



• **result**: ``array``

</div>


##### Defined in &nbsp;   [cocos/core/geometry/spec.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/spec.ts#L135)&nbsp;

___

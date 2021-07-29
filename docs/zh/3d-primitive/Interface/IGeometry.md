## Interface: IGeometry

- [attributes](#attributes)
- [boundingRadius](#boundingRadius)
- [colors](#colors)
- [customAttributes](#customAttributes)
- [doubleSided](#doubleSided)
- [indices](#indices)
- [maxPos](#maxPos)
- [minPos](#minPos)
- [normals](#normals)
- [positions](#positions)
- [primitiveMode](#primitiveMode)
- [tangents](#tangents)
- [uvs](#uvs)

### Properties

#### attributes

<div style="margin-left: 10px;">



**`en`** 
specify vertex attributes, use (positions|normals|uvs|colors) as keys



**`zh`** 
顶点属性。



• **attributes**: ``array``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L129)&nbsp;
___
#### boundingRadius

<div style="margin-left: 10px;">



**`en`** 
Bounding sphere radius.



**`zh`** 
包围球半径。



• **boundingRadius**: ``number``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L142)&nbsp;
___
#### colors

<div style="margin-left: 10px;">



**`en`** 
Vertex colors.



**`zh`** 
顶点颜色。



• **colors**: ``array``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L121)&nbsp;
___
#### customAttributes

<div style="margin-left: 10px;">


• **customAttributes**: ``array``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L131)&nbsp;
___
#### doubleSided

<div style="margin-left: 10px;">



**`en`** 
whether rays casting from the back face of this geometry could collide with it



**`zh`** 
是否是双面，用于判断来自于几何体背面的射线检测。



• **doubleSided**: ``false | true``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L190)&nbsp;
___
#### indices

<div style="margin-left: 10px;">



**`en`** 
Geometry indices, if one needs indexed-draw.



**`zh`** 
几何索引，当使用索引绘制时。



• **indices**: ``array``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L174)&nbsp;
___
#### maxPos

<div style="margin-left: 10px;">



**`en`** 
Max position.



**`zh`** 
最大位置。



• **maxPos**: ``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:162](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L162)&nbsp;
___
#### minPos

<div style="margin-left: 10px;">



**`en`** 
Min position.



**`zh`** 
最小位置。



• **minPos**: ``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:150](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L150)&nbsp;
___
#### normals

<div style="margin-left: 10px;">



**`en`** 
Vertex normals.



**`zh`** 
顶点法线。



• **normals**: ``array``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L97)&nbsp;
___
#### positions

<div style="margin-left: 10px;">



**`en`** 
Vertex positions.



**`zh`** 
顶点位置。



• **positions**: ``array``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L89)&nbsp;
___
#### primitiveMode

<div style="margin-left: 10px;">



**`en`** 
Topology of the geometry vertices. Default is TRIANGLE_LIST.



**`zh`** 
几何顶点的拓扑图元。默认值是TRIANGLE_LIST。



• **primitiveMode**: ``PrimitiveMode``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L182)&nbsp;
___
#### tangents

<div style="margin-left: 10px;">



**`en`** 
Vertex Tangents.



**`zh`** 
顶点切线。



• **tangents**: ``array``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L113)&nbsp;
___
#### uvs

<div style="margin-left: 10px;">



**`en`** 
Texture coordinates.



**`zh`** 
纹理坐标。



• **uvs**: ``array``

</div>

##### Defined in &nbsp;   [cocos/primitive/define.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/primitive/define.ts#L105)&nbsp;
___

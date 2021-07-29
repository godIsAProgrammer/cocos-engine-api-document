
## Class: Rect


`extend:`
[ValueType](docs/en/core-value-types/Class/ValueType.md)










**`en`** 
A 2D rectangle defined by x, y position and width, height.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ height](#height)
- [ width](#width)
- [ x](#x)
- [ y](#y)
- [ center](#center)
- [ origin](#origin)
- [ size](#size)
- [ w](#w)
- [ xMax](#xMax)
- [ xMin](#xMin)
- [ yMax](#yMax)
- [ yMin](#yMin)
- [ z](#z)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  union](#union)
- [ **`static`**  lerp](#lerp)
- [ **`static`**  intersection](#intersection)
- [ **`static`**  fromMinMax](#fromMinMax)
- [ clone](#clone)
- [ contains](#contains)
- [ containsRect](#containsRect)
- [ equals](#equals)
- [ intersects](#intersects)
- [ lerp](#lerp)
- [ set](#set)
- [ toString](#toString)
- [ transformMat4](#transformMat4)
- [ transformMat4ToPoints](#transformMat4ToPoints)
</div>

## Properties


### height
<div style="margin-left: 10px;">



**`en`** The height of the Rect.




•  **height**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:256](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L256)&nbsp;


___


### width
<div style="margin-left: 10px;">



**`en`** The width of the Rect.




•  **width**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L250)&nbsp;


___


### x
<div style="margin-left: 10px;">



**`en`** The minimum x value.




•  **x**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:238](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L238)&nbsp;


___


### y
<div style="margin-left: 10px;">



**`en`** The minimum y value.




•  **y**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L244)&nbsp;


___


### center
<div style="margin-left: 10px;">



**`en`** The position of the center of the rectangle.




•  **center**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L192)&nbsp;   [cocos/core/math/rect.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L197)&nbsp;


___


### origin
<div style="margin-left: 10px;">



**`en`** Returns a new {{Vec2}} object representing the position of the rectangle




•  **origin**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L206)&nbsp;   [cocos/core/math/rect.ts:210](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L210)&nbsp;


___


### size
<div style="margin-left: 10px;">



**`en`** Returns a new {{Size}} object represents the width and height of the rectangle




•  **size**:
 ``Size`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:219](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L219)&nbsp;   [cocos/core/math/rect.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L223)&nbsp;


___


### w
<div style="margin-left: 10px;">




•  **w**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L231)&nbsp;   [cocos/core/math/rect.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L232)&nbsp;


___


### xMax
<div style="margin-left: 10px;">



**`en`** The maximum x value.




•  **xMax**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L168)&nbsp;   [cocos/core/math/rect.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L172)&nbsp;


___


### xMin
<div style="margin-left: 10px;">



**`en`** The minimum x value.




•  **xMin**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L142)&nbsp;   [cocos/core/math/rect.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L146)&nbsp;


___


### yMax
<div style="margin-left: 10px;">



**`en`** The maximum y value.




•  **yMax**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L180)&nbsp;   [cocos/core/math/rect.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L184)&nbsp;


___


### yMin
<div style="margin-left: 10px;">



**`en`** The minimum y value.




•  **yMin**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L155)&nbsp;   [cocos/core/math/rect.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L159)&nbsp;


___


### z
<div style="margin-left: 10px;">




•  **z**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L229)&nbsp;   [cocos/core/math/rect.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L230)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Rect**(`other: Rect`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Rect` |
• **new Rect**(`x: undefined | number, y: undefined | number, width: undefined | number, height: undefined | number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `` |
| `y` | `` |
| `width` | `` |
| `height` | `` |
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:256](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L256)&nbsp;   [cocos/core/math/rect.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L263)&nbsp;   [cocos/core/math/rect.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L273)&nbsp;


---

<!---->
## Methods

### union

<div style="margin-left: 10px;">

▸ `static`  **union**<`Out`\>(`out: Out, one: Out, other: Out`) : `Out`



**`en`** Returns the smallest rectangle that contains the current rect and the given rect.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | Output Rect.  |
| `one` | `Out` | One of the specify Rect.  |
| `other` | `Out` | Another of the specify Rect.  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L121)&nbsp;
___
### lerp

<div style="margin-left: 10px;">

▸ `static`  **lerp**<`Out`\>(`out: Out, from: Out, to: Out, ratio: number`) : `Out`



**`en`** Calculate the interpolation result between this rect and another one with given ratio



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | Output rect.  |
| `from` | `Out` | Original rect.  |
| `to` | `Out` | Target rect.  |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L77)&nbsp;
___
### intersection

<div style="margin-left: 10px;">

▸ `static`  **intersection**<`Out`\>(`out: Out, one: Out, other: Out`) : `Out`



**`en`** Returns the overlapping portion of 2 rectangles.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | Output Rect.  |
| `one` | `Out` | One of the specify Rect.  |
| `other` | `Out` | Another of the specify Rect.  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L97)&nbsp;
___
### fromMinMax

<div style="margin-left: 10px;">

▸ `static`  **fromMinMax**<`Out`\>(`out: Out, v1: VecLike, v2: VecLike`) : `Out`



**`en`** Creates a rectangle from two coordinate values.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Out` | - |
| `v1` | `VecLike` | Specified point 1.  |
| `v2` | `VecLike` | Specified point 2.  |


##### Returns `Out`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L56)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸   **clone**<`Rect`\> : `Rect`



**`en`** clone the current Rect.




##### Returns `Rect`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L294)&nbsp;
___
### contains

<div style="margin-left: 10px;">

▸   **contains**<`boolean`\>(`point: Vec2`) : `boolean`



**`en`** Check whether the current rect contains the given point.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `point` | `Vec2` | Specified point.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:393](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L393)&nbsp;
___
### containsRect

<div style="margin-left: 10px;">

▸   **containsRect**<`boolean`\>(`other: Rect`) : `boolean`



**`en`** Returns true if the other rect entirely inside this rectangle.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Rect` | Specified rectangles.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:406](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L406)&nbsp;
___
### equals

<div style="margin-left: 10px;">

▸   **equals**<`boolean`\>(`other: Rect`) : `boolean`



**`en`** Check whether the current Rect equals another one.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Rect` | Specified rectangles.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:338](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L338)&nbsp;
___
### intersects

<div style="margin-left: 10px;">

▸   **intersects**<`boolean`\>(`other: Rect`) : `boolean`



**`en`** Check whether the current rectangle intersects with the given one.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Rect` | Specified rectangles.  |


##### Returns `boolean`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:379](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L379)&nbsp;
___
### lerp

<div style="margin-left: 10px;">

▸   **lerp**<`this`\>(`to: Rect, ratio: number`) : `this`



**`en`** Calculate the interpolation result between this Rect and another one with given ratio.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `to` | `Rect` | Target Rect.  |
| `ratio` | `number` | The interpolation coefficient.The range is [0,1].  |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:351](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L351)&nbsp;
___
### set

<div style="margin-left: 10px;">

▸   **set**<`any`\>(`other: Rect`) : `any`



**`en`** Set values with another Rect.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Rect` | Specified Rect.  |


##### Returns `any`

▸   **set**<`any`\>(`x: undefined | number, y: undefined | number, width: undefined | number, height: undefined | number`) : `any`



**`en`** Set the value of each component of the current Rect.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `undefined \| number` | The x parameter of the specified rectangle  |
| `y` | `undefined \| number` | The y parameter of the specified rectangle  |
| `width` | `undefined \| number` | The width parameter of the specified rectangle  |
| `height` | `undefined \| number` | The height parameter of the specified rectangle  |


##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:304](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L304)&nbsp;   [cocos/core/math/rect.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L315)&nbsp;   [cocos/core/math/rect.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L317)&nbsp;
___
### toString

<div style="margin-left: 10px;">

▸   **toString**<`string`\> : `string`



**`en`** Return the information of the current rect in string




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:369](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L369)&nbsp;
___
### transformMat4

<div style="margin-left: 10px;">

▸   **transformMat4**<`this`\>(`mat: Mat4`) : `this`



**`en`** Apply matrix4 to the rect.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat4` | - |


##### Returns `this`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:422](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L422)&nbsp;
___
### transformMat4ToPoints

<div style="margin-left: 10px;">

▸   **transformMat4ToPoints**<`void`\>(`mat: Mat4, out_lb: Vec2, out_lt: Vec2, out_rt: Vec2, out_rb: Vec2`) : `void`


应用矩阵变换到当前矩形，并将结果输出到四个顶点上。

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat4` | - |
| `out_lb` | `Vec2` | - |
| `out_lt` | `Vec2` | - |
| `out_rt` | `Vec2` | - |
| `out_rb` | `Vec2` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L452)&nbsp;
___
<!---->




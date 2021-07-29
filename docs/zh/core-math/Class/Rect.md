
## Class: Rect


`extend:`
[ValueType](docs/zh/core-value-types/Class/ValueType.md)










**`zh`** 
轴对齐矩形。
矩形内的所有点都大于等于矩形的最小点 (xMin, yMin) 并且小于等于矩形的最大点 (xMax, yMax)。
矩形的宽度定义为 xMax - xMin；高度定义为 yMax - yMin。



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



**`zh`** 矩形的高度。





•  **height**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:256](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L256)&nbsp;


___


### width
<div style="margin-left: 10px;">



**`zh`** 矩形的宽度。





•  **width**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:250](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L250)&nbsp;


___


### x
<div style="margin-left: 10px;">



**`zh`** 矩形最小点的 x 坐标。





•  **x**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:238](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L238)&nbsp;


___


### y
<div style="margin-left: 10px;">



**`zh`** 矩形最小点的 y 坐标。





•  **y**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:244](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L244)&nbsp;


___


### center
<div style="margin-left: 10px;">



**`zh`** 获取或设置矩形中心点的坐标。





•  **center**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L192)&nbsp;   [cocos/core/math/rect.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L197)&nbsp;


___


### origin
<div style="margin-left: 10px;">



**`zh`** 获取或设置矩形的 x 和 y 坐标。





•  **origin**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L206)&nbsp;   [cocos/core/math/rect.ts:210](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L210)&nbsp;


___


### size
<div style="margin-left: 10px;">



**`zh`** 获取或设置矩形的尺寸。





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



**`zh`** 获取或设置矩形在 x 轴上的最大值。





•  **xMax**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L168)&nbsp;   [cocos/core/math/rect.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L172)&nbsp;


___


### xMin
<div style="margin-left: 10px;">



**`zh`** 获取或设置矩形在 x 轴上的最小值。





•  **xMin**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L142)&nbsp;   [cocos/core/math/rect.ts:146](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L146)&nbsp;


___


### yMax
<div style="margin-left: 10px;">



**`zh`** 获取或设置矩形在 y 轴上的最大值。





•  **yMax**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:180](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L180)&nbsp;   [cocos/core/math/rect.ts:184](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L184)&nbsp;


___


### yMin
<div style="margin-left: 10px;">



**`zh`** 获取或设置矩形在 y 轴上的最小值。





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



**`zh`** 创建同时包含当前矩形和指定矩形的最小矩形，将其赋值给出口矩形。



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



**`zh`** 根据指定的插值比率，从当前矩形到目标矩形之间做插值。



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



**`zh`** 计算当前矩形与指定矩形重叠部分的矩形，将其赋值给出口矩形。



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



**`zh`** 由任意两个点创建一个矩形，目标矩形即是这两个点各向 x、y 轴作线所得到的矩形。



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



**`zh`** 克隆当前矩形。





##### Returns `Rect`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:294](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L294)&nbsp;
___
### contains

<div style="margin-left: 10px;">

▸   **contains**<`boolean`\>(`point: Vec2`) : `boolean`



**`zh`** 判断当前矩形是否包含指定的点。



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



**`zh`** 判断当前矩形是否包含指定矩形。



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



**`zh`** 判断当前矩形是否与指定矩形相等。



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



**`zh`** 判断当前矩形是否与指定矩形相交。



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



**`zh`** 根据指定的插值比率，从当前矩形到目标矩形之间做插值。



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



**`zh`** 设置当前矩形使其与指定矩形相等。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `other` | `Rect` | Specified Rect.  |


##### Returns `any`

▸   **set**<`any`\>(`x: undefined | number, y: undefined | number, width: undefined | number, height: undefined | number`) : `any`



**`zh`** 设置当前矩形使其与指定参数的矩形相等。



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



**`zh`** 返回当前矩形的字符串表示。




##### Returns `string`
</div>

##### Defined in &nbsp;   [cocos/core/math/rect.ts:369](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/math/rect.ts#L369)&nbsp;
___
### transformMat4

<div style="margin-left: 10px;">

▸   **transformMat4**<`this`\>(`mat: Mat4`) : `this`



**`zh`** 
应用矩阵变换到当前矩形：
应用矩阵变换到当前矩形的最小点得到新的最小点，
将当前矩形的尺寸视为二维向量应用矩阵变换得到新的尺寸；
并将如此构成的新矩形。



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




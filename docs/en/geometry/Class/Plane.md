
## Class: Plane






**`en`** 
Basic Geometry: Plane.


<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ d](#d)
- [ n](#n)
- [ type](#type)
- [ w](#w)
- [ x](#x)
- [ y](#y)
- [ z](#z)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  set](#set)
- [ **`static`**  normalize](#normalize)
- [ **`static`**  fromPoints](#fromPoints)
- [ **`static`**  fromNormalAndPoint](#fromNormalAndPoint)
- [ **`static`**  create](#create)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
- [ transform](#transform)
</div>

## Properties


### d
<div style="margin-left: 10px;">



**`en`** 
The distance from the origin to the plane.




•  **d**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L182)&nbsp;


___


### n
<div style="margin-left: 10px;">



**`en`** 
The normal of the plane.




•  **n**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L174)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`en`** 
Gets the type of the shape.




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L190)&nbsp;


___


### w
<div style="margin-left: 10px;">




•  **w**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L201)&nbsp;   [cocos/core/geometry/plane.ts:202](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L202)&nbsp;


___


### x
<div style="margin-left: 10px;">




•  **x**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:195](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L195)&nbsp;   [cocos/core/geometry/plane.ts:196](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L196)&nbsp;


___


### y
<div style="margin-left: 10px;">




•  **y**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:197](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L197)&nbsp;   [cocos/core/geometry/plane.ts:198](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L198)&nbsp;


___


### z
<div style="margin-left: 10px;">




•  **z**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L199)&nbsp;   [cocos/core/geometry/plane.ts:200](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L200)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Plane**(`nx: number, ny: number, nz: number, d: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nx` | `number` |
| `ny` | `number` |
| `nz` | `number` |
| `d` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:204](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L204)&nbsp;


---

<!---->
## Methods

### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`Plane`\>(`out: Plane, nx: number, ny: number, nz: number, d: number`) : `Plane`



**`en`** 
Set the components of a plane to the given values



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Plane` | 接受操作的对象。  |
| `nx` | `number` | 法向分量的 x 部分。  |
| `ny` | `number` | 法向分量的 y 部分。  |
| `nz` | `number` | 法向分量的 z 部分。  |
| `d` | `number` | 与原点的距离。  |


##### Returns `Plane`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:124](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L124)&nbsp;
___
### normalize

<div style="margin-left: 10px;">

▸ `static`  **normalize**<`Plane`\>(`out: Plane, a: Plane`) : `Plane`



**`en`** 
normalize a plane



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Plane` | 接受操作的对象。  |
| `a` | `Plane` | 操作的源数据。  |


##### Returns `Plane`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:159](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L159)&nbsp;
___
### fromPoints

<div style="margin-left: 10px;">

▸ `static`  **fromPoints**<`Plane`\>(`out: Plane, a: Vec3, b: Vec3, c: Vec3`) : `Plane`



**`en`** 
create a plane from three points



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Plane` | 接受操作的对象。  |
| `a` | `Vec3` | 点 a。  |
| `b` | `Vec3` | 点 b。  |
| `c` | `Vec3` | 点 c。  |


##### Returns `Plane`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L102)&nbsp;
___
### fromNormalAndPoint

<div style="margin-left: 10px;">

▸ `static`  **fromNormalAndPoint**<`Plane`\>(`out: Plane, normal: Vec3, point: Vec3`) : `Plane`



**`en`** 
create plane from normal and point



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Plane` | 接受操作的对象。  |
| `normal` | `Vec3` | 平面的法线。  |
| `point` | `Vec3` | 平面上的一点。  |


##### Returns `Plane`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:143](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L143)&nbsp;
___
### create

<div style="margin-left: 10px;">

▸ `static`  **create**<`Plane`\>(`nx: number, ny: number, nz: number, d: number`) : `Plane`



**`en`** 
create a new plane



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `nx` | `number` | 法向分量的 x 部分。  |
| `ny` | `number` | 法向分量的 y 部分。  |
| `nz` | `number` | 法向分量的 z 部分。  |
| `d` | `number` | 与原点的距离。  |


##### Returns `Plane`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:59](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L59)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸ `static`  **copy**<`Plane`\>(`out: Plane, p: Plane`) : `Plane`



**`en`** 
copy the values from one plane to another



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Plane` | 接受操作的对象。  |
| `p` | `Plane` | 复制的来源。  |


##### Returns `Plane`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L84)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`Plane`\>(`p: Plane`) : `Plane`



**`en`** 
clone a new plane



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Plane` | 克隆的来源。  |


##### Returns `Plane`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L71)&nbsp;
___
### transform

<div style="margin-left: 10px;">

▸   **transform**<`void`\>(`mat: Mat4`) : `void`



**`en`** 
transform this plane.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Mat4` |   |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/plane.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/plane.ts#L229)&nbsp;
___
<!---->




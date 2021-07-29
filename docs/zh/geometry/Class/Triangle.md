
## Class: Triangle






**`zh`** 
基础几何 三角形。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ a](#a)
- [ b](#b)
- [ c](#c)
- [ type](#type)

### Constructors

- [ constructor](#constructor)

### Methods

- [ **`static`**  set](#set)
- [ **`static`**  fromPoints](#fromPoints)
- [ **`static`**  create](#create)
- [ **`static`**  copy](#copy)
- [ **`static`**  clone](#clone)
</div>

## Properties


### a
<div style="margin-left: 10px;">



**`zh`** 
点 a。





•  **a**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L158)&nbsp;


___


### b
<div style="margin-left: 10px;">



**`zh`** 
点 b。





•  **b**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L166)&nbsp;


___


### c
<div style="margin-left: 10px;">



**`zh`** 
点 c。





•  **c**:
`Vec3` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L174)&nbsp;


___


### type
<div style="margin-left: 10px;">



**`zh`** 
获取形状的类型。





•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:182](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L182)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Triangle**(`ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ax` | `number` |
| `ay` | `number` |
| `az` | `number` |
| `bx` | `number` |
| `by` | `number` |
| `bz` | `number` |
| `cx` | `number` |
| `cy` | `number` |
| `cz` | `number` |
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L186)&nbsp;


---

<!---->
## Methods

### set

<div style="margin-left: 10px;">

▸ `static`  **set**<`Triangle`\>(`out: Triangle, ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number`) : `Triangle`



**`zh`** 
将给定三角形的属性设置为给定值。



**`function`** 




#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Triangle` | 给定的三角形。  |
| `ax` | `number` | a 点的 x 部分。  |
| `ay` | `number` | a 点的 y 部分。  |
| `az` | `number` | a 点的 z 部分。  |
| `bx` | `number` | b 点的 x 部分。  |
| `by` | `number` | b 点的 y 部分。  |
| `bz` | `number` | b 点的 z 部分。  |
| `cx` | `number` | c 点的 x 部分。  |
| `cy` | `number` | c 点的 y 部分。  |
| `cz` | `number` | c 点的 z 部分。  |


##### Returns `Triangle`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L133)&nbsp;
___
### fromPoints

<div style="margin-left: 10px;">

▸ `static`  **fromPoints**<`Triangle`\>(`out: Triangle, a: Vec3, b: Vec3, c: Vec3`) : `Triangle`



**`zh`** 
用三个点创建一个 triangle。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Triangle` | 接受操作的 triangle。  |
| `a` | `Vec3` | a 点。  |
| `b` | `Vec3` | b 点。  |
| `c` | `Vec3` | c 点。  |


##### Returns `Triangle`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L108)&nbsp;
___
### create

<div style="margin-left: 10px;">

▸ `static`  **create**<`Triangle`\>(`ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number`) : `Triangle`



**`zh`** 
创建一个新的 triangle。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ax` | `number` | a 点的 x 部分。  |
| `ay` | `number` | a 点的 y 部分。  |
| `az` | `number` | a 点的 z 部分。  |
| `bx` | `number` | b 点的 x 部分。  |
| `by` | `number` | b 点的 y 部分。  |
| `bz` | `number` | b 点的 z 部分。  |
| `cx` | `number` | c 点的 x 部分。  |
| `cy` | `number` | c 点的 y 部分。  |
| `cz` | `number` | c 点的 z 部分。  |


##### Returns `Triangle`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:58](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L58)&nbsp;
___
### copy

<div style="margin-left: 10px;">

▸ `static`  **copy**<`Triangle`\>(`out: Triangle, t: Triangle`) : `Triangle`



**`zh`** 
将一个 triangle 的值复制到另一个 triangle。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `out` | `Triangle` | 接受操作的 triangle。  |
| `t` | `Triangle` | 被复制的 triangle。  |


##### Returns `Triangle`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L89)&nbsp;
___
### clone

<div style="margin-left: 10px;">

▸ `static`  **clone**<`Triangle`\>(`t: Triangle`) : `Triangle`



**`zh`** 
克隆一个新的 triangle。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `t` | `Triangle` | 克隆的目标。  |


##### Returns `Triangle`
</div>

##### Defined in &nbsp;   [cocos/core/geometry/triangle.ts:72](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/triangle.ts#L72)&nbsp;
___
<!---->




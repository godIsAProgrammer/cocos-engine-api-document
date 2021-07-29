
## Class: Impl





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ dataOffset](#dataOffset)
- [ distTol](#distTol)
- [ fillColor](#fillColor)
- [ lineCap](#lineCap)
- [ lineJoin](#lineJoin)
- [ lineWidth](#lineWidth)
- [ pathLength](#pathLength)
- [ pathOffset](#pathOffset)
- [ paths](#paths)
- [ pointsOffset](#pointsOffset)
- [ strokeColor](#strokeColor)
- [ tessTol](#tessTol)
- [ updatePathOffset](#updatePathOffset)

### Methods

- [ addPoint](#addPoint)
- [ arc](#arc)
- [ bezierCurveTo](#bezierCurveTo)
- [ circle](#circle)
- [ clear](#clear)
- [ close](#close)
- [ ellipse](#ellipse)
- [ getRenderDataList](#getRenderDataList)
- [ lineTo](#lineTo)
- [ moveTo](#moveTo)
- [ quadraticCurveTo](#quadraticCurveTo)
- [ rect](#rect)
- [ requestRenderData](#requestRenderData)
- [ roundRect](#roundRect)
</div>

## Properties


### dataOffset
<div style="margin-left: 10px;">




•  **dataOffset**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:76](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L76)&nbsp;


___


### distTol
<div style="margin-left: 10px;">




•  **distTol**:
`number`  = `0.01`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L85)&nbsp;


___


### fillColor
<div style="margin-left: 10px;">




•  **fillColor**:
`Color`  = `Color.WHITE.clone()`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:86](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L86)&nbsp;


___


### lineCap
<div style="margin-left: 10px;">




•  **lineCap**:
`LineCap`  = `LineCap.BUTT`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L87)&nbsp;


___


### lineJoin
<div style="margin-left: 10px;">




•  **lineJoin**:
`LineJoin`  = `LineJoin.MITER`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L89)&nbsp;


___


### lineWidth
<div style="margin-left: 10px;">




•  **lineWidth**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:90](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L90)&nbsp;


___


### pathLength
<div style="margin-left: 10px;">




•  **pathLength**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:79](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L79)&nbsp;


___


### pathOffset
<div style="margin-left: 10px;">




•  **pathOffset**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:80](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L80)&nbsp;


___


### paths
<div style="margin-left: 10px;">




•  **paths**:
`array`  = `[]`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L82)&nbsp;


___


### pointsOffset
<div style="margin-left: 10px;">




•  **pointsOffset**:
`number`  = `0`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:92](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L92)&nbsp;


___


### strokeColor
<div style="margin-left: 10px;">




•  **strokeColor**:
`Color`  = `Color.BLACK.clone()`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:88](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L88)&nbsp;


___


### tessTol
<div style="margin-left: 10px;">




•  **tessTol**:
`number`  = `0.25`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:84](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L84)&nbsp;


___


### updatePathOffset
<div style="margin-left: 10px;">




•  **updatePathOffset**:
`boolean`  = `false`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:77](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L77)&nbsp;


___

<!---->
## Methods

### addPoint

<div style="margin-left: 10px;">

▸   **addPoint**<`void`\>(`x: number, y: number, flags: PointFlags`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |
| `flags` | `PointFlags` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:214](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L214)&nbsp;
___
### arc

<div style="margin-left: 10px;">

▸   **arc**<`void`\>(`cx: number, cy: number, r: number, startAngle: number, endAngle: number, counterclockwise: boolean`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | - |
| `cy` | `number` | - |
| `r` | `number` | - |
| `startAngle` | `number` | - |
| `endAngle` | `number` | - |
| `counterclockwise` | `boolean` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:144](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L144)&nbsp;
___
### bezierCurveTo

<div style="margin-left: 10px;">

▸   **bezierCurveTo**<`void`\>(`c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `c1x` | `number` | - |
| `c1y` | `number` | - |
| `c2x` | `number` | - |
| `c2y` | `number` | - |
| `x` | `number` | - |
| `y` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:120](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L120)&nbsp;
___
### circle

<div style="margin-left: 10px;">

▸   **circle**<`void`\>(`cx: number, cy: number, r: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | - |
| `cy` | `number` | - |
| `r` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L153)&nbsp;
___
### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L173)&nbsp;
___
### close

<div style="margin-left: 10px;">

▸   **close**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:195](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L195)&nbsp;
___
### ellipse

<div style="margin-left: 10px;">

▸   **ellipse**<`void`\>(`cx: number, cy: number, rx: number, ry: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | - |
| `cy` | `number` | - |
| `rx` | `number` | - |
| `ry` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L148)&nbsp;
___
### getRenderDataList

<div style="margin-left: 10px;">

▸   **getRenderDataList**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:206](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L206)&nbsp;
___
### lineTo

<div style="margin-left: 10px;">

▸   **lineTo**<`void`\>(`x: number, y: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L113)&nbsp;
___
### moveTo

<div style="margin-left: 10px;">

▸   **moveTo**<`void`\>(`x: number, y: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:100](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L100)&nbsp;
___
### quadraticCurveTo

<div style="margin-left: 10px;">

▸   **quadraticCurveTo**<`void`\>(`cx: number, cy: number, x: number, y: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | - |
| `cy` | `number` | - |
| `x` | `number` | - |
| `y` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L138)&nbsp;
___
### rect

<div style="margin-left: 10px;">

▸   **rect**<`void`\>(`x: number, y: number, w: number, h: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |
| `w` | `number` | - |
| `h` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L158)&nbsp;
___
### requestRenderData

<div style="margin-left: 10px;">

▸   **requestRenderData**<`MeshRenderData`\> : `MeshRenderData`




##### Returns `MeshRenderData`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L199)&nbsp;
___
### roundRect

<div style="margin-left: 10px;">

▸   **roundRect**<`void`\>(`x: number, y: number, w: number, h: number, r: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | - |
| `y` | `number` | - |
| `w` | `number` | - |
| `h` | `number` | - |
| `r` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/2d/assembler/graphics/webgl/impl.ts:168](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/assembler/graphics/webgl/impl.ts#L168)&nbsp;
___
<!---->




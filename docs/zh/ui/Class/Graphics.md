
## Class: Graphics


`extend:`
[Renderable2D](docs/zh/ui/Class/Renderable2D.md)












**`zh`** 
自定义图形类



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ **`static`**  Assembler](#Assembler)
- [ **`static`**  BlendState](#BlendState)
- [ **`static`**  LineCap](#LineCap)
- [ **`static`**  LineJoin](#LineJoin)
- [ **`static`**  PostAssembler](#PostAssembler)
- [ **`static`**  system](#system)
- [ impl](#impl)
- [ model](#model)
- [ node](#node)
- [ stencilStage](#stencilStage)
- [ blendHash](#blendHash)
- [ color](#color)
- [ customMaterial](#customMaterial)
- [ delegateSrc](#delegateSrc)
- [ dstBlendFactor](#dstBlendFactor)
- [ enabled](#enabled)
- [ enabledInHierarchy](#enabledInHierarchy)
- [ fillColor](#fillColor)
- [ hideFlags](#hideFlags)
- [ isValid](#isValid)
- [ lineCap](#lineCap)
- [ lineJoin](#lineJoin)
- [ lineWidth](#lineWidth)
- [ material](#material)
- [ materials](#materials)
- [ miterLimit](#miterLimit)
- [ name](#name)
- [ renderData](#renderData)
- [ sharedMaterial](#sharedMaterial)
- [ sharedMaterials](#sharedMaterials)
- [ srcBlendFactor](#srcBlendFactor)
- [ strokeColor](#strokeColor)
- [ uuid](#uuid)
- [ visibility](#visibility)

### Constructors

- [ constructor](#constructor)

### Methods

- [ activeSubModel](#activeSubModel)
- [ addComponent](#addComponent)
- [ arc](#arc)
- [ bezierCurveTo](#bezierCurveTo)
- [ circle](#circle)
- [ clear](#clear)
- [ close](#close)
- [ destroy](#destroy)
- [ destroyRenderData](#destroyRenderData)
- [ ellipse](#ellipse)
- [ fill](#fill)
- [ fillRect](#fillRect)
- [ getBlendState](#getBlendState)
- [ getComponent](#getComponent)
- [ getComponentInChildren](#getComponentInChildren)
- [ getComponents](#getComponents)
- [ getComponentsInChildren](#getComponentsInChildren)
- [ getMaterial](#getMaterial)
- [ getMaterialInstance](#getMaterialInstance)
- [ getRenderMaterial](#getRenderMaterial)
- [ lineTo](#lineTo)
- [ markForUpdateRenderData](#markForUpdateRenderData)
- [ moveTo](#moveTo)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onFocusInEditor](#onFocusInEditor)
- [ onLoad](#onLoad)
- [ onLostFocusInEditor](#onLostFocusInEditor)
- [ onRestore](#onRestore)
- [ postUpdateAssembler](#postUpdateAssembler)
- [ quadraticCurveTo](#quadraticCurveTo)
- [ rect](#rect)
- [ requestRenderData](#requestRenderData)
- [ resetInEditor](#resetInEditor)
- [ roundRect](#roundRect)
- [ schedule](#schedule)
- [ scheduleOnce](#scheduleOnce)
- [ setMaterial](#setMaterial)
- [ setMaterialInstance](#setMaterialInstance)
- [ stroke](#stroke)
- [ unschedule](#unschedule)
- [ unscheduleAllCallbacks](#unscheduleAllCallbacks)
- [ updateAssembler](#updateAssembler)
- [ updateBlendHash](#updateBlendHash)
</div>

## Properties


### Assembler
<div style="margin-left: 10px;">




**`zh`** 渲染数据组装器





• `static` **Assembler**:
`IAssemblerManager | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:286](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L286)&nbsp;


___


### BlendState
<div style="margin-left: 10px;">




**`zh`** 混合模式枚举类型




**`see`** [[BlendFactor]]





• `static` **BlendState**:
`BlendFactor`  = `BlendFactor`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:281](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L281)&nbsp;


___


### LineCap
<div style="margin-left: 10px;">




• `static` **LineCap**:
`LineCap`  = `LineCap`
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L228)&nbsp;


___


### LineJoin
<div style="margin-left: 10px;">




• `static` **LineJoin**:
`LineJoin`  = `LineJoin`
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L227)&nbsp;


___


### PostAssembler
<div style="margin-left: 10px;">




**`zh`** 后置渲染数据组装器





• `static` **PostAssembler**:
`IAssemblerManager | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:291](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L291)&nbsp;


___


### system
<div style="margin-left: 10px;">




• `static` **system**:
`null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:155](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L155)&nbsp;


___


### impl
<div style="margin-left: 10px;">




•  **impl**:
`Impl | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:229](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L229)&nbsp;


___


### model
<div style="margin-left: 10px;">




•  **model**:
`Model | null`  = `null`
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:230](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L230)&nbsp;


___


### node
<div style="margin-left: 10px;">




**`zh`** 该组件被附加到的节点。组件总会附加到一个节点。




**`example`**

```ts


import { log } from 'cc';
log(comp.node);


```




•  **node**:
`Node`  = `NullNode`
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L166)&nbsp;


___


### stencilStage
<div style="margin-left: 10px;">




**`zh`** 组件模板缓冲状态 (注意：请不要直接修改它的值)





•  **stencilStage**:
`Stage`  = `Stage.DISABLED`
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L274)&nbsp;


___


### blendHash
<div style="margin-left: 10px;">




•  **blendHash**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:314](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L314)&nbsp;


___


### color
<div style="margin-left: 10px;">




•  **color**:
 ``Color`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:201](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L201)&nbsp;   [cocos/2d/components/graphics.ts:205](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L205)&nbsp;


___


### customMaterial
<div style="margin-left: 10px;">




**`zh`** 用户自定材质





•  **customMaterial**:
 ``null | Material`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L160)&nbsp;   [cocos/2d/framework/renderable-2d.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L164)&nbsp;


___


### delegateSrc
<div style="margin-left: 10px;">




•  **delegateSrc**:
 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L266)&nbsp;


___


### dstBlendFactor
<div style="margin-left: 10px;">




•  **dstBlendFactor**:
 ``BlendFactor`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:220](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L220)&nbsp;   [cocos/2d/components/graphics.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L224)&nbsp;


___


### enabled
<div style="margin-left: 10px;">




**`zh`** 表示该组件自身是否启用。




**`default`** true




**`example`**

```ts


import { log } from 'cc';
comp.enabled = true;
log(comp.enabled);


```




•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:110](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L110)&nbsp;   [cocos/core/components/component.ts:113](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L113)&nbsp;


___


### enabledInHierarchy
<div style="margin-left: 10px;">




**`zh`** 表示该组件是否被启用并且所在的节点也处于激活状态。





**`example`**

```ts


import { log } from 'cc';
log(comp.enabledInHierarchy);


```




•  **enabledInHierarchy**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L137)&nbsp;


___


### fillColor
<div style="margin-left: 10px;">




**`zh`** 
填充绘画的颜色。





•  **fillColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:169](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L169)&nbsp;   [cocos/2d/components/graphics.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L173)&nbsp;


___


### hideFlags
<div style="margin-left: 10px;">




**`zh`** 在继承 CCObject 对象后，控制是否需要隐藏，锁定，序列化等功能。





•  **hideFlags**:
 ``Flags`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L232)&nbsp;   [cocos/core/data/object.ts:236](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L236)&nbsp;


___


### isValid
<div style="margin-left: 10px;">




**`zh`** 
表示该对象是否可用（被 destroy 后将不可用）。<br>
当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
如果希望判断当前帧是否调用过 `destroy`，请使用 `isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。




**`default`** true





**`example`**

```ts


import { Node, log } from 'cc';
const node = new Node();
log(node.isValid);    // true
node.destroy();
log(node.isValid);    // true, still valid in this frame
// after a frame...
log(node.isValid);    // false, destroyed in the end of last frame


```




•  **isValid**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/data/object.ts:266](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/data/object.ts#L266)&nbsp;


___


### lineCap
<div style="margin-left: 10px;">




**`zh`** 
指定如何绘制每一条线段末端。





•  **lineCap**:
 ``LineCap`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:125](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L125)&nbsp;   [cocos/2d/components/graphics.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L129)&nbsp;


___


### lineJoin
<div style="margin-left: 10px;">




**`zh`** 
用来设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性。





•  **lineJoin**:
 ``LineJoin`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:103](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L103)&nbsp;   [cocos/2d/components/graphics.ts:107](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L107)&nbsp;


___


### lineWidth
<div style="margin-left: 10px;">




**`zh`** 
当前线条宽度。





•  **lineWidth**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:82](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L82)&nbsp;   [cocos/2d/components/graphics.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L85)&nbsp;


___


### material
<div style="margin-left: 10px;">




•  **material**:
 ``null | Material`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L158)&nbsp;   [cocos/core/components/renderable-component.ts:162](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L162)&nbsp;


___


### materials
<div style="margin-left: 10px;">




**`zh`** 模型材质。





•  **materials**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:91](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L91)&nbsp;   [cocos/core/components/renderable-component.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L98)&nbsp;


___


### miterLimit
<div style="margin-left: 10px;">




**`zh`** 
设置斜接面限制比例。





•  **miterLimit**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:190](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L190)&nbsp;   [cocos/2d/components/graphics.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L194)&nbsp;


___


### name
<div style="margin-left: 10px;">




•  **name**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:64](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L64)&nbsp;   [cocos/core/components/component.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L75)&nbsp;


___


### renderData
<div style="margin-left: 10px;">




•  **renderData**:
 ``null | RenderData`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:261](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L261)&nbsp;


___


### sharedMaterial
<div style="margin-left: 10px;">




•  **sharedMaterial**:
 ``null | Material`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L121)&nbsp;


___


### sharedMaterials
<div style="margin-left: 10px;">




•  **sharedMaterials**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L131)&nbsp;   [cocos/2d/framework/renderable-2d.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L136)&nbsp;


___


### srcBlendFactor
<div style="margin-left: 10px;">




•  **srcBlendFactor**:
 ``BlendFactor`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:213](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L213)&nbsp;   [cocos/2d/components/graphics.ts:217](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L217)&nbsp;


___


### strokeColor
<div style="margin-left: 10px;">




**`zh`** 
笔触的颜色。





•  **strokeColor**:
 ``Readonly`` 
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:147](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L147)&nbsp;   [cocos/2d/components/graphics.ts:151](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L151)&nbsp;


___


### uuid
<div style="margin-left: 10px;">




**`zh`** 组件的 uuid，用于编辑器。





**`example`**

```ts


import { log } from 'cc';
log(comp.uuid);


```




•  **uuid**:
 ``string`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L89)&nbsp;


___


### visibility
<div style="margin-left: 10px;">




•  **visibility**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:56](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L56)&nbsp;   [cocos/core/components/renderable-component.ts:60](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L60)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new Graphics**()

#### Parameters
</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:245](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L245)&nbsp;


---

<!---->
## Methods

### activeSubModel
<div style="margin-left: 10px;">

▸   **activeSubModel**<`void`\>(`idx: number`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:577](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L577)&nbsp;
___
### addComponent
<div style="margin-left: 10px;">

▸   **addComponent**(`classConstructor: Constructor`)




**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。




**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.addComponent(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |



##### Returns `void`


▸   **addComponent**(`className: string`)




**`zh`** 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。




**`example`**

```ts


const test = node.addComponent("Test");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:215](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L215)&nbsp;   [cocos/core/components/component.ts:226](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L226)&nbsp;   [cocos/core/components/component.ts:228](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L228)&nbsp;
___
### arc
<div style="margin-left: 10px;">

▸   **arc**<`void`\>(`cx: number, cy: number, r: number, startAngle: number, endAngle: number, counterclockwise: boolean`) : `void`




**`zh`** 
绘制圆弧路径。圆弧路径的圆心在 (cx, cy) 位置，半径为 r ，根据 counterclockwise （默认为false）指定的方向从 startAngle 开始绘制，到 endAngle 结束。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | 中心控制点的坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cy` | `number` | 中心控制点的坐标 y 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `r` | `number` | 圆弧弧度。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `startAngle` | `number` | 开始弧度，从正 x 轴顺时针方向测量。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `endAngle` | `number` | 结束弧度，从正 x 轴顺时针方向测量。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `counterclockwise` | `boolean` | 如果为真，在两个角度之间逆时针绘制。默认顺时针。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:385](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L385)&nbsp;
___
### bezierCurveTo
<div style="margin-left: 10px;">

▸   **bezierCurveTo**<`void`\>(`c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number`) : `void`




**`zh`** 
绘制三次贝赛尔曲线路径。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `c1x` | `number` | 第一个控制点的坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `c1y` | `number` | 第一个控制点的坐标 y 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `c2x` | `number` | 第二个控制点的坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `c2y` | `number` | 第二个控制点的坐标 y 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | 最后一个控制点的坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | 最后一个控制点的坐标 y 轴。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:342](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L342)&nbsp;
___
### circle
<div style="margin-left: 10px;">

▸   **circle**<`void`\>(`cx: number, cy: number, r: number`) : `void`




**`zh`** 
绘制圆形路径。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | 中心点的坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cy` | `number` | 中心点的坐标 y 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `r` | `number` | 圆半径。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:424](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L424)&nbsp;
___
### clear
<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




**`zh`** 
擦除之前绘制的所有内容的方法。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:497](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L497)&nbsp;
___
### close
<div style="margin-left: 10px;">

▸   **close**<`void`\> : `void`




**`zh`** 
将笔点返回到当前路径起始点的。它尝试从当前点到起始点绘制一条直线。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:522](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L522)&nbsp;
___
### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`boolean`\> : `boolean`




<!---->
<!--    #### Returns `boolean` -->
<!---->


##### Returns `boolean`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:352](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L352)&nbsp;
___
### destroyRenderData
<div style="margin-left: 10px;">

▸   **destroyRenderData**<`void`\> : `void`




**`zh`** 销毁当前渲染数据。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:401](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L401)&nbsp;
___
### ellipse
<div style="margin-left: 10px;">

▸   **ellipse**<`void`\>(`cx: number, cy: number, rx: number, ry: number`) : `void`




**`zh`** 
绘制椭圆路径。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | 中心点的坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cy` | `number` | 中心点的坐标 y 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `rx` | `number` | 椭圆 x 轴半径。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `ry` | `number` | 椭圆 y 轴半径。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:405](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L405)&nbsp;
___
### fill
<div style="margin-left: 10px;">

▸   **fill**<`void`\> : `void`




**`zh`** 
根据当前的画线样式，填充当前或已经存在的路径。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:554](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L554)&nbsp;
___
### fillRect
<div style="margin-left: 10px;">

▸   **fillRect**<`void`\>(`x: any, y: any, w: any, h: any`) : `void`




**`zh`** 
绘制填充矩形。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `any` | 矩形起始坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `any` | 矩形起始坐标 y 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `any` | 矩形宽度。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `h` | `any` | 矩形高度。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:485](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L485)&nbsp;
___
### getBlendState
<div style="margin-left: 10px;">

▸   **getBlendState**<`BlendState`\> : `BlendState`




<!---->
<!--    #### Returns `BlendState` -->
<!---->


##### Returns `BlendState`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:494](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L494)&nbsp;
___
### getComponent
<div style="margin-left: 10px;">

▸   **getComponent**(`classConstructor: Constructor`)




**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。




**`example`**

```ts


import { Sprite } from 'cc';
// get sprite component.
var sprite = node.getComponent(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved or to be created  |



##### Returns `void`


▸   **getComponent**(`className: string`)




**`zh`** 
获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
传入参数也可以是脚本的名称。




**`example`**

```ts


// get custom test calss.
var test = node.getComponent("Test");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L247)&nbsp;   [cocos/core/components/component.ts:263](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L263)&nbsp;   [cocos/core/components/component.ts:265](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L265)&nbsp;
___
### getComponentInChildren
<div style="margin-left: 10px;">

▸   **getComponentInChildren**(`classConstructor: Constructor`)




**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。




**`example`**

```ts


import { Sprite } from 'cc';
const sprite = node.getComponentInChildren(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of component to be retrieved  |



##### Returns `void`


▸   **getComponentInChildren**(`className: string`)




**`zh`** 递归查找所有子节点中第一个匹配指定类型的组件。




**`example`**

```ts


var Test = node.getComponentInChildren("Test");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the component  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:306](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L306)&nbsp;   [cocos/core/components/component.ts:317](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L317)&nbsp;   [cocos/core/components/component.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L319)&nbsp;
___
### getComponents
<div style="margin-left: 10px;">

▸   **getComponents**(`classConstructor: Constructor`)




**`zh`** 返回节点上指定类型的所有组件。




**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponents(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |



##### Returns `void`


▸   **getComponents**(`className: string`)




**`zh`** 返回节点上指定类型的所有组件。




**`example`**

```ts


const tests = node.getComponents("Test");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:279](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L279)&nbsp;   [cocos/core/components/component.ts:290](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L290)&nbsp;   [cocos/core/components/component.ts:292](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L292)&nbsp;
___
### getComponentsInChildren
<div style="margin-left: 10px;">

▸   **getComponentsInChildren**(`classConstructor: Constructor`)




**`zh`** 递归查找自身或所有子节点中指定类型的组件。




**`example`**

```ts


import { Sprite } from 'cc';
const sprites = node.getComponentsInChildren(Sprite);


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `classConstructor` | `Constructor` | The class of components to be retrieved  |



##### Returns `void`


▸   **getComponentsInChildren**(`className: string`)




**`zh`** 递归查找自身或所有子节点中指定类型的组件。




**`example`**

```ts


const tests = node.getComponentsInChildren("Test");


```




<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `className` | `string` | A string for the class name of the components  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:333](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L333)&nbsp;   [cocos/core/components/component.ts:344](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L344)&nbsp;   [cocos/core/components/component.ts:346](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L346)&nbsp;
___
### getMaterial
<div style="margin-left: 10px;">

▸   **getMaterial**(`idx: number`)




**`zh`** 获取指定子模型的共享材质资源。





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L129)&nbsp;
___
### getMaterialInstance
<div style="margin-left: 10px;">

▸   **getMaterialInstance**(`idx: number`)




**`zh`** 获取指定子模型的材质实例。





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `idx` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:173](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L173)&nbsp;
___
### getRenderMaterial
<div style="margin-left: 10px;">

▸   **getRenderMaterial**(`index: number`)




**`zh`** 获取指定位置可供渲染的材质，如果有材质实例则使用材质实例，如果没有则使用材质资源





<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L208)&nbsp;
___
### lineTo
<div style="margin-left: 10px;">

▸   **lineTo**<`void`\>(`x: number, y: number`) : `void`




**`zh`** 
绘制直线路径。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | 绘制路径坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | 绘制路径坐标 y 轴。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:320](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L320)&nbsp;
___
### markForUpdateRenderData
<div style="margin-left: 10px;">

▸   **markForUpdateRenderData**<`void`\>(`enable: boolean`) : `void`




**`zh`** 标记当前组件的渲染数据为已修改状态，这样渲染数据才会重新计算。




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `enable` | `boolean` | Marked necessary to update or not  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:372](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L372)&nbsp;
___
### moveTo
<div style="margin-left: 10px;">

▸   **moveTo**<`void`\>(`x: number, y: number`) : `void`




**`zh`** 
移动路径起点到坐标(x, y)。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | 移动坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | 移动坐标 y 轴。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:302](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L302)&nbsp;
___
### onDestroy
<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:274](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L274)&nbsp;
___
### onDisable
<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:270](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L270)&nbsp;
___
### onEnable
<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:265](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L265)&nbsp;
___
### onFocusInEditor
<div style="margin-left: 10px;">

▸   **onFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:574](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L574)&nbsp;
___
### onLoad
<div style="margin-left: 10px;">

▸   **onLoad**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:259](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L259)&nbsp;
___
### onLostFocusInEditor
<div style="margin-left: 10px;">

▸   **onLostFocusInEditor**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:576](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L576)&nbsp;
___
### onRestore
<div style="margin-left: 10px;">

▸   **onRestore**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:253](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L253)&nbsp;
___
### postUpdateAssembler
<div style="margin-left: 10px;">

▸   **postUpdateAssembler**<`void`\>(`render: Batcher2D`) : `void`




**`zh`** 后置渲染数据组装程序，它会在所有子节点的渲染数据组装完成后被调用。
它可能会组装额外的渲染数据到顶点数据缓冲区，也可能只是重置一些渲染状态。
注意：不要手动调用该函数，除非你理解整个流程。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `render` | `Batcher2D` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:434](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L434)&nbsp;
___
### quadraticCurveTo
<div style="margin-left: 10px;">

▸   **quadraticCurveTo**<`void`\>(`cx: number, cy: number, x: number, y: number`) : `void`




**`zh`** 
绘制二次贝赛尔曲线路径。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cx` | `number` | 起始控制点的坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `cy` | `number` | 起始控制点的坐标 y 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | 终点控制点的坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | 终点控制点的坐标 x 轴。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:362](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L362)&nbsp;
___
### rect
<div style="margin-left: 10px;">

▸   **rect**<`void`\>(`x: number, y: number, w: number, h: number`) : `void`




**`zh`** 
绘制矩形路径。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | 矩形起始坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | 矩形起始坐标 y 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | 矩形宽度。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `h` | `number` | 矩形高度。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:444](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L444)&nbsp;
___
### requestRenderData
<div style="margin-left: 10px;">

▸   **requestRenderData**<`RenderData`\> : `RenderData`




**`zh`** 请求新的渲染数据对象。




<!---->
<!--    #### Returns `RenderData` The new render data
-->
<!---->


##### Returns `RenderData`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:391](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L391)&nbsp;
___
### resetInEditor
<div style="margin-left: 10px;">

▸   **resetInEditor**<`void`\> : `void`




**`zh`** 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:583](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L583)&nbsp;
___
### roundRect
<div style="margin-left: 10px;">

▸   **roundRect**<`void`\>(`x: number, y: number, w: number, h: number, r: number`) : `void`




**`zh`** 
绘制圆角矩形路径。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `x` | `number` | 矩形起始坐标 x 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `y` | `number` | 矩形起始坐标 y 轴。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `w` | `number` | 矩形宽度。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `h` | `number` | 矩形高度。  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `r` | `number` | 矩形圆角半径。  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L465)&nbsp;
___
### schedule
<div style="margin-left: 10px;">

▸   **schedule**<`void`\>(`callback: any, interval: number, repeat: number, delay: number`) : `void`




**`zh`** 
调度一个自定义的回调任务。<br/>
如果回调任务已调度，那么将不会重复调度它，只会更新时间间隔参数。




**`example`**

```ts


import { log } from 'cc';
this.schedule((dt) => void log(`time: ${dt}`), 1);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `interval` | `number` | The time interval between each invocation  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `repeat` | `number` | The repeat count of this task, the task will be invoked (repeat + 1) times, use [[macro.REPEAT_FOREVER]] to repeat a task forever  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:419](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L419)&nbsp;
___
### scheduleOnce
<div style="margin-left: 10px;">

▸   **scheduleOnce**<`void`\>(`callback: any, delay: number`) : `void`




**`zh`** 调度一个只运行一次的回调任务，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。




**`method`** scheduleOnce




**`see`** [[schedule]]




**`example`**

```ts


import { log } from 'cc';
this.scheduleOnce((dt) => void log(`time: ${dt}`), 2);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` | `any` | The callback function of the task  |

| Name | Type | Description |
| :------: | :------: | :------: |
| `delay` | `number` | The delay time for the first invocation, Unit: s  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:452](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L452)&nbsp;
___
### setMaterial
<div style="margin-left: 10px;">

▸   **setMaterial**<`void`\>(`material: Material | null, index: number`) : `void`




**`zh`** 设置指定子模型的 sharedMaterial，如果对应位置有材质实例则会创建一个对应的材质实例。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `material` | `Material \| null` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L141)&nbsp;
___
### setMaterialInstance
<div style="margin-left: 10px;">

▸   **setMaterialInstance**<`void`\>(`index: number, matInst: Material | null`) : `void`




**`zh`** 获取指定子模型的材质实例。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `matInst` | `Material \| null` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/renderable-component.ts:192](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/renderable-component.ts#L192)&nbsp;
___
### stroke
<div style="margin-left: 10px;">

▸   **stroke**<`void`\> : `void`




**`zh`** 
根据当前的画线样式，绘制当前或已经存在的路径。





<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/components/graphics.ts:537](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/components/graphics.ts#L537)&nbsp;
___
### unschedule
<div style="margin-left: 10px;">

▸   **unschedule**<`void`\>(`callback_fn: any`) : `void`




**`zh`** 取消调度一个自定义的回调任务。




**`example`**

```ts


this.unschedule(_callback);


```




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback_fn` | `any` | The callback function of the task  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:465](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L465)&nbsp;
___
### unscheduleAllCallbacks
<div style="margin-left: 10px;">

▸   **unscheduleAllCallbacks**<`void`\> : `void`




**`zh`** 取消调度所有已调度的回调函数。




**`example`**

```ts


this.unscheduleAllCallbacks();


```




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/components/component.ts:481](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/components/component.ts#L481)&nbsp;
___
### updateAssembler
<div style="margin-left: 10px;">

▸   **updateAssembler**<`void`\>(`render: Batcher2D`) : `void`




**`zh`** 渲染数据组装程序，这个方法会在所有子节点数据组装之前更新并组装当前组件的渲染数据到 UI 的顶点数据缓冲区中。
一般在 UI 渲染流程中调用，用于组装所有的渲染数据到顶点数据缓冲区。
注意：不要手动调用该函数，除非你理解整个流程。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `render` | `Batcher2D` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:418](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L418)&nbsp;
___
### updateBlendHash
<div style="margin-left: 10px;">

▸   **updateBlendHash**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/2d/framework/renderable-2d.ts:318](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/2d/framework/renderable-2d.ts#L318)&nbsp;
___
<!---->




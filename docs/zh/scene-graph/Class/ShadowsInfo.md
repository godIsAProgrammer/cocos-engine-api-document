
## Class: ShadowsInfo






**`zh`** 平面阴影相关信息



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ aspect](#aspect)
- [ autoAdapt](#autoAdapt)
- [ bias](#bias)
- [ distance](#distance)
- [ enabled](#enabled)
- [ far](#far)
- [ linear](#linear)
- [ maxReceived](#maxReceived)
- [ near](#near)
- [ normal](#normal)
- [ normalBias](#normalBias)
- [ orthoSize](#orthoSize)
- [ packing](#packing)
- [ pcf](#pcf)
- [ selfShadow](#selfShadow)
- [ shadowColor](#shadowColor)
- [ shadowMapSize](#shadowMapSize)
- [ type](#type)

### Methods

- [ activate](#activate)
- [ setPlaneFromNode](#setPlaneFromNode)
</div>

## Properties


### aspect
<div style="margin-left: 10px;">



**`zh`** 获取或者设置阴影相机的宽高比。





•  **aspect**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:680](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L680)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:684](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L684)&nbsp;


___


### autoAdapt
<div style="margin-left: 10px;">



**`zh`** 阴影纹理生成是否自适应





•  **autoAdapt**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:608](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L608)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:612](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L612)&nbsp;


___


### bias
<div style="margin-left: 10px;">



**`zh`** 获取或者设置阴影纹理偏移值





•  **bias**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:525](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L525)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:529](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L529)&nbsp;


___


### distance
<div style="margin-left: 10px;">



**`zh`** 阴影接收平面与原点的距离





•  **distance**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:483](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L483)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:487](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L487)&nbsp;


___


### enabled
<div style="margin-left: 10px;">



**`zh`** 是否启用平面阴影？





•  **enabled**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:427](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L427)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:437](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L437)&nbsp;


___


### far
<div style="margin-left: 10px;">



**`zh`** 获取或者设置阴影相机远裁剪面





•  **far**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:636](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L636)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:640](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L640)&nbsp;


___


### linear
<div style="margin-left: 10px;">



**`zh`** 打开或者关闭线性深度。提高阴影质量，降低性能。与 packing depth 互斥。





•  **linear**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:561](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L561)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:570](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L570)&nbsp;


___


### maxReceived
<div style="margin-left: 10px;">



**`zh`** 获取或者设置阴影接收的最大光源数量





•  **maxReceived**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:511](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L511)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:515](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L515)&nbsp;


___


### near
<div style="margin-left: 10px;">



**`zh`** 获取或者设置阴影相机近裁剪面





•  **near**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:622](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L622)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:626](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L626)&nbsp;


___


### normal
<div style="margin-left: 10px;">



**`zh`** 阴影接收平面的法线





•  **normal**:
 ``Vec3`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:469](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L469)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:473](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L473)&nbsp;


___


### normalBias
<div style="margin-left: 10px;">



**`zh`** 打开或者关闭自阴影。





•  **normalBias**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:594](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L594)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:598](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L598)&nbsp;


___


### orthoSize
<div style="margin-left: 10px;">



**`zh`** 获取或者设置阴影相机正交大小





•  **orthoSize**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:650](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L650)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:654](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L654)&nbsp;


___


### packing
<div style="margin-left: 10px;">



**`zh`** 打开或者关闭深度压缩。降低阴影质量，提高性能。与 liner depth 互斥。





•  **packing**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:539](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L539)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:551](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L551)&nbsp;


___


### pcf
<div style="margin-left: 10px;">



**`zh`** 阴影接收平面的法线





•  **pcf**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:497](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L497)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:501](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L501)&nbsp;


___


### selfShadow
<div style="margin-left: 10px;">



**`zh`** 打开或者关闭自阴影。





•  **selfShadow**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:580](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L580)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:584](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L584)&nbsp;


___


### shadowColor
<div style="margin-left: 10px;">



**`zh`** 阴影颜色





•  **shadowColor**:
 ``Color`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:456](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L456)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:460](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L460)&nbsp;


___


### shadowMapSize
<div style="margin-left: 10px;">



**`zh`** 获取或者设置阴影纹理大小





•  **shadowMapSize**:
 ``Vec2`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:663](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L663)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:670](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L670)&nbsp;


___


### type
<div style="margin-left: 10px;">




•  **type**:
 ``number`` 
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:443](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L443)&nbsp;   [cocos/core/scene-graph/scene-globals.ts:447](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L447)&nbsp;


___

<!---->
## Methods

### activate

<div style="margin-left: 10px;">

▸   **activate**<`void`\>(`resource: Shadows`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `resource` | `Shadows` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:700](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L700)&nbsp;
___
### setPlaneFromNode

<div style="margin-left: 10px;">

▸   **setPlaneFromNode**<`void`\>(`node: Node`) : `void`



**`zh`** 根据指定节点的世界变换设置阴影接收平面的信息



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `node` | `Node` | The node for setting up the plane  |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/scene-graph/scene-globals.ts:693](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/scene-graph/scene-globals.ts#L693)&nbsp;
___
<!---->




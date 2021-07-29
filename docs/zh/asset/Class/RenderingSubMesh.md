
## Class: RenderingSubMesh







**`zh`** 包含所有顶点数据的渲染子网格，可以用来创建 [[InputAssembler]]。



<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ mesh](#mesh)
- [ subMeshIdx](#subMeshIdx)
- [ attributes](#attributes)
- [ flatBuffers](#flatBuffers)
- [ geometricInfo](#geometricInfo)
- [ handle](#handle)
- [ iaInfo](#iaInfo)
- [ indexBuffer](#indexBuffer)
- [ indirectBuffer](#indirectBuffer)
- [ jointMappedBuffers](#jointMappedBuffers)
- [ primitiveMode](#primitiveMode)
- [ vertexBuffers](#vertexBuffers)

### Constructors

- [ constructor](#constructor)

### Methods

- [ destroy](#destroy)
- [ enableVertexIdChannel](#enableVertexIdChannel)
- [ genFlatBuffers](#genFlatBuffers)
</div>

## Properties


### mesh
<div style="margin-left: 10px;">




•  **mesh**:
`Mesh` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L95)&nbsp;


___


### subMeshIdx
<div style="margin-left: 10px;">




•  **subMeshIdx**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L97)&nbsp;


___


### attributes
<div style="margin-left: 10px;">




**`zh`** 所有顶点属性。





•  **attributes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L142)&nbsp;


___


### flatBuffers
<div style="margin-left: 10px;">




**`zh`** 扁平化的顶点缓冲区。





•  **flatBuffers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L221)&nbsp;


___


### geometricInfo
<div style="margin-left: 10px;">




**`zh`** （用于射线检测的）几何信息。





•  **geometricInfo**:
 ``IGeometricInfo`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:172](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L172)&nbsp;


___


### handle
<div style="margin-left: 10px;">




•  **handle**:
 ``IHandle`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:323](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L323)&nbsp;


___


### iaInfo
<div style="margin-left: 10px;">




•  **iaInfo**:
 ``InputAssemblerInfo`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:321](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L321)&nbsp;


___


### indexBuffer
<div style="margin-left: 10px;">




**`zh`** 使用的索引缓冲区，若未使用则无需指定。





•  **indexBuffer**:
 ``null | Buffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L154)&nbsp;


___


### indirectBuffer
<div style="margin-left: 10px;">




**`zh`** 间接绘制缓冲区。





•  **indirectBuffer**:
 ``null | Buffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L160)&nbsp;


___


### jointMappedBuffers
<div style="margin-left: 10px;">




**`zh`** 骨骼索引按映射表处理后的顶点缓冲。





•  **jointMappedBuffers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L273)&nbsp;


___


### primitiveMode
<div style="margin-left: 10px;">




**`zh`** 图元类型。





•  **primitiveMode**:
 ``PrimitiveMode`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L166)&nbsp;


___


### vertexBuffers
<div style="margin-left: 10px;">




**`zh`** 使用的所有顶点缓冲区。





•  **vertexBuffers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:148](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L148)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new RenderingSubMesh**(`vertexBuffers: undefined, attributes: undefined, primitiveMode: PrimitiveMode, indexBuffer: Buffer | null, indirectBuffer: Buffer | null`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `vertexBuffers` | `` |





| Name | Type |
| :------ | :------ |
| `attributes` | `` |





| Name | Type |
| :------ | :------ |
| `primitiveMode` | `PrimitiveMode` |





| Name | Type |
| :------ | :------ |
| `indexBuffer` | `` |





| Name | Type |
| :------ | :------ |
| `indirectBuffer` | `` |





</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:121](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L121)&nbsp;


---

<!---->
## Methods

### destroy
<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:327](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L327)&nbsp;
___
### enableVertexIdChannel
<div style="margin-left: 10px;">

▸   **enableVertexIdChannel**<`void`\>(`device: Device`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `device` | `Device` | Device used to create related rendering resources.  |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:363](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L363)&nbsp;
___
### genFlatBuffers
<div style="margin-left: 10px;">

▸   **genFlatBuffers**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:223](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L223)&nbsp;
___
<!---->




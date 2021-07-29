
## Class: RenderingSubMesh







**`en`** Sub mesh for rendering which contains all geometry data, it can be used to create [[InputAssembler]].


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




**`en`** All vertex attributes used by the sub mesh




•  **attributes**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:142](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L142)&nbsp;


___


### flatBuffers
<div style="margin-left: 10px;">




**`en`** Flatted vertex buffers




•  **flatBuffers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:221](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L221)&nbsp;


___


### geometricInfo
<div style="margin-left: 10px;">




**`en`** The geometric info of the sub mesh, used for raycast.




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




**`en`** Index buffer used by the sub mesh




•  **indexBuffer**:
 ``null | Buffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:154](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L154)&nbsp;


___


### indirectBuffer
<div style="margin-left: 10px;">




**`en`** Indirect buffer used by the sub mesh




•  **indirectBuffer**:
 ``null | Buffer`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:160](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L160)&nbsp;


___


### jointMappedBuffers
<div style="margin-left: 10px;">




**`en`** The vertex buffer for joint after mapping




•  **jointMappedBuffers**:
 ``array`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:273](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L273)&nbsp;


___


### primitiveMode
<div style="margin-left: 10px;">




**`en`** Primitive mode used by the sub mesh




•  **primitiveMode**:
 ``PrimitiveMode`` 
</div>

##### Defined in &nbsp;   [cocos/core/assets/rendering-sub-mesh.ts:166](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/rendering-sub-mesh.ts#L166)&nbsp;


___


### vertexBuffers
<div style="margin-left: 10px;">




**`en`** All vertex buffers used by the sub mesh




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




**`en`** Adds a vertex attribute input called 'a_vertexId' into this sub-mesh.
This is useful if you want to simulate `gl_VertexId` in WebGL context prior to 2.0.
Once you call this function, the vertex attribute is permanently added.
Subsequent calls to this function take no effect.




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




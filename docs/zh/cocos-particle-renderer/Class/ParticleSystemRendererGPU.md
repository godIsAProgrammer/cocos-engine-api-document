
## Class: ParticleSystemRendererGPU


`extend:`
[ParticleSystemRendererBase](docs/zh/cocos-particle-renderer/Class/ParticleSystemRendererBase.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Constructors

- [ constructor](#constructor)

### Methods

- [ attachToScene](#attachToScene)
- [ beforeRender](#beforeRender)
- [ clear](#clear)
- [ detachFromScene](#detachFromScene)
- [ enableModule](#enableModule)
- [ getDefaultTrailMaterial](#getDefaultTrailMaterial)
- [ getFreeParticle](#getFreeParticle)
- [ getParticleCount](#getParticleCount)
- [ initShaderUniform](#initShaderUniform)
- [ onDestroy](#onDestroy)
- [ onDisable](#onDisable)
- [ onEnable](#onEnable)
- [ onInit](#onInit)
- [ onMaterialModified](#onMaterialModified)
- [ onRebuildPSO](#onRebuildPSO)
- [ setNewParticle](#setNewParticle)
- [ setVertexAttributes](#setVertexAttributes)
- [ updateMaterialParams](#updateMaterialParams)
- [ updateParticles](#updateParticles)
- [ updateRenderData](#updateRenderData)
- [ updateRenderMode](#updateRenderMode)
- [ updateShaderUniform](#updateShaderUniform)
- [ updateTrailMaterial](#updateTrailMaterial)
</div>

## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ParticleSystemRendererGPU**(`info: any`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `any` |
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:118](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L118)&nbsp;


---

<!---->
## Methods

### attachToScene

<div style="margin-left: 10px;">

▸   **attachToScene**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L96)&nbsp;
___
### beforeRender

<div style="margin-left: 10px;">

▸   **beforeRender**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:227](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L227)&nbsp;
___
### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:158](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L158)&nbsp;
___
### detachFromScene

<div style="margin-left: 10px;">

▸   **detachFromScene**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:105](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L105)&nbsp;
___
### enableModule

<div style="margin-left: 10px;">

▸   **enableModule**<`void`\>(`name: string, val: boolean, pm: IParticleModule`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `name` | `string` | - |
| `val` | `boolean` | - |
| `pm` | `IParticleModule` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:174](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L174)&nbsp;
___
### getDefaultTrailMaterial

<div style="margin-left: 10px;">

▸   **getDefaultTrailMaterial**<`null`\> : `null`




##### Returns `null`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:130](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L130)&nbsp;
___
### getFreeParticle

<div style="margin-left: 10px;">

▸   **getFreeParticle**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:186](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L186)&nbsp;
___
### getParticleCount

<div style="margin-left: 10px;">

▸   **getParticleCount**<`number`\> : `number`




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:366](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L366)&nbsp;
___
### initShaderUniform

<div style="margin-left: 10px;">

▸   **initShaderUniform**<`void`\>(`mat: Material`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mat` | `Material` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:247](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L247)&nbsp;
___
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:164](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L164)&nbsp;
___
### onDisable

<div style="margin-left: 10px;">

▸   **onDisable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:85](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L85)&nbsp;
___
### onEnable

<div style="margin-left: 10px;">

▸   **onEnable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:73](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L73)&nbsp;
___
### onInit

<div style="margin-left: 10px;">

▸   **onInit**<`void`\>(`ps: Component`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `ps` | `Component` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L138)&nbsp;
___
### onMaterialModified

<div style="margin-left: 10px;">

▸   **onMaterialModified**<`void`\>(`index: number, material: Material`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |
| `material` | `Material` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:370](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L370)&nbsp;
___
### onRebuildPSO

<div style="margin-left: 10px;">

▸   **onRebuildPSO**<`void`\>(`index: number, material: Material`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `index` | `number` | - |
| `material` | `Material` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:377](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L377)&nbsp;
___
### setNewParticle

<div style="margin-left: 10px;">

▸   **setNewParticle**<`void`\>(`p: Particle`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `p` | `Particle` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:194](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L194)&nbsp;
___
### setVertexAttributes

<div style="margin-left: 10px;">

▸   **setVertexAttributes**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L153)&nbsp;
___
### updateMaterialParams

<div style="margin-left: 10px;">

▸   **updateMaterialParams**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:396](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L396)&nbsp;
___
### updateParticles

<div style="margin-left: 10px;">

▸   **updateParticles**<`number`\>(`dt: number`) : `number`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | - |


##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:199](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L199)&nbsp;
___
### updateRenderData

<div style="margin-left: 10px;">

▸   **updateRenderData**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:224](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L224)&nbsp;
___
### updateRenderMode

<div style="margin-left: 10px;">

▸   **updateRenderMode**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:147](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L147)&nbsp;
___
### updateShaderUniform

<div style="margin-left: 10px;">

▸   **updateShaderUniform**<`void`\>(`dt: number`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `dt` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-gpu.ts:232](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-gpu.ts#L232)&nbsp;
___
### updateTrailMaterial

<div style="margin-left: 10px;">

▸   **updateTrailMaterial**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L129)&nbsp;
___
<!---->




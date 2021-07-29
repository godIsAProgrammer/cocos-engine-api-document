
## Class: ParticleSystemRendererCPU


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
- [ updateTrailMaterial](#updateTrailMaterial)
</div>

## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ParticleSystemRendererCPU**(`info: any`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `any` |
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:116](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L116)&nbsp;


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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:310](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L310)&nbsp;
___
### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:153](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L153)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:208](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L208)&nbsp;
___
### getDefaultTrailMaterial

<div style="margin-left: 10px;">

▸   **getDefaultTrailMaterial**<`any`\> : `any`




##### Returns `any`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:177](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L177)&nbsp;
___
### getFreeParticle

<div style="margin-left: 10px;">

▸   **getFreeParticle**




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:170](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L170)&nbsp;
___
### getParticleCount

<div style="margin-left: 10px;">

▸   **getParticleCount**<`number`\> : `number`




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:315](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L315)&nbsp;
___
### onDestroy

<div style="margin-left: 10px;">

▸   **onDestroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:89](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L89)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L139)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:319](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L319)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:331](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L331)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:181](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L181)&nbsp;
___
### setVertexAttributes

<div style="margin-left: 10px;">

▸   **setVertexAttributes**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L111)&nbsp;
___
### updateMaterialParams

<div style="margin-left: 10px;">

▸   **updateMaterialParams**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:411](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L411)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:231](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L231)&nbsp;
___
### updateRenderData

<div style="margin-left: 10px;">

▸   **updateRenderData**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:295](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L295)&nbsp;
___
### updateRenderMode

<div style="margin-left: 10px;">

▸   **updateRenderMode**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:163](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L163)&nbsp;
___
### updateTrailMaterial

<div style="margin-left: 10px;">

▸   **updateTrailMaterial**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-cpu.ts:477](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-cpu.ts#L477)&nbsp;
___
<!---->




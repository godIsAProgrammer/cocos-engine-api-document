
## Class: ParticleSystemRendererBase





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

• **new ParticleSystemRendererBase**(`info: ParticleSystemRenderer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `ParticleSystemRenderer` |
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L63)&nbsp;


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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:141](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L141)&nbsp;
___
### clear

<div style="margin-left: 10px;">

▸   **clear**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:117](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L117)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:140](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L140)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L132)&nbsp;
___
### getParticleCount

<div style="margin-left: 10px;">

▸   **getParticleCount**<`number`\> : `number`




##### Returns `number`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:131](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L131)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:69](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L69)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:133](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L133)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:134](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L134)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:137](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L137)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L136)&nbsp;
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

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:138](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L138)&nbsp;
___
### updateRenderData

<div style="margin-left: 10px;">

▸   **updateRenderData**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:139](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L139)&nbsp;
___
### updateRenderMode

<div style="margin-left: 10px;">

▸   **updateRenderMode**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:135](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L135)&nbsp;
___
### updateTrailMaterial

<div style="margin-left: 10px;">

▸   **updateTrailMaterial**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/particle/renderer/particle-system-renderer-base.ts:129](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle/renderer/particle-system-renderer-base.ts#L129)&nbsp;
___
<!---->




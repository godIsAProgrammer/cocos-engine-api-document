
## Class: ParticlePool


`extend:`
[Pool](docs/zh/core/Class/Pool.md)










<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ count](#count)

### Constructors

- [ constructor](#constructor)

### Methods

- [ get](#get)
- [ put](#put)
- [ resize](#resize)
</div>

## Properties


### count
<div style="margin-left: 10px;">




**`zh`** 
当前可用对象数量，一开始默认是 0，随着对象的回收会逐渐增大，最大不会超过调用构造函数时指定的 size。




**`default`** 0





•  **count**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L94)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new ParticlePool**(`cleanup: CleanUpFunction, size: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `cleanup` | `CleanUpFunction` |





| Name | Type |
| :------ | :------ |
| `size` | `number` |





• **new ParticlePool**(`size: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `size` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L108)&nbsp;   [cocos/core/utils/pool.ts:117](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L117)&nbsp;   [cocos/core/utils/pool.ts:126](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L126)&nbsp;


---

<!---->
## Methods

### get
<div style="margin-left: 10px;">

▸   **get**<`Particle`\> : `Particle`




<!---->
<!--    #### Returns `Particle` -->
<!---->


##### Returns `Particle`




</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L81)&nbsp;
___
### put
<div style="margin-left: 10px;">

▸   **put**<`void`\>(`obj: Particle`) : `void`




**`zh`** 向对象池返还一个不再需要的对象。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `obj` | `Particle` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:156](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L156)&nbsp;
___
### resize
<div style="margin-left: 10px;">

▸   **resize**<`void`\>(`length: number`) : `void`




**`zh`** 设置对象池容量。





<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `length` | `number` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L171)&nbsp;
___
<!---->




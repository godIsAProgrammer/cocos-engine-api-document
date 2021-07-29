
## Class: ParticlePool


`extend:`
[Pool](docs/en/core/Class/Pool.md)









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



**`en`** 
The current number of available objects, the default is 0, it will gradually increase with the recycle of the object,
the maximum will not exceed the size specified when the constructor is called.



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




##### Returns `Particle`
</div>

##### Defined in &nbsp;   [cocos/particle-2d/particle-simulator-2d.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/particle-2d/particle-simulator-2d.ts#L81)&nbsp;
___
### put

<div style="margin-left: 10px;">

▸   **put**<`void`\>(`obj: Particle`) : `void`



**`en`** Put an object into the pool.



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



**`en`** Resize the pool.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `length` | `number` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/core/utils/pool.ts:171](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/pool.ts#L171)&nbsp;
___
<!---->




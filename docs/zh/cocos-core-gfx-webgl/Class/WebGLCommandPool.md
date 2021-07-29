
## Class: WebGLCommandPool





<div class="table-of-content">
<h2>Table of contents</h2>


### Constructors

- [ constructor](#constructor)

### Methods

- [ alloc](#alloc)
- [ free](#free)
- [ freeCmds](#freeCmds)
- [ release](#release)
</div>

## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebGLCommandPool**(`Clazz: undefined, count: number`)

#### Parameters
| Name | Type |
| :------ | :------ |
| `Clazz` | `` |





| Name | Type |
| :------ | :------ |
| `count` | `number` |





</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-allocator.ts:40](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-allocator.ts#L40)&nbsp;


---

<!---->
## Methods

### alloc
<div style="margin-left: 10px;">

▸   **alloc**<`T`\>(`Clazz: undefined`) : `T`




<!---->
<!--    #### Returns `T` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `Clazz` |  | - |



##### Returns `T`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-allocator.ts:57](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-allocator.ts#L57)&nbsp;
___
### free
<div style="margin-left: 10px;">

▸   **free**<`void`\>(`cmd: T`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmd` | `T` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-allocator.ts:81](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-allocator.ts#L81)&nbsp;
___
### freeCmds
<div style="margin-left: 10px;">

▸   **freeCmds**<`void`\>(`cmds: CachedArray`) : `void`




<!---->
<!--    #### Returns `void` -->
<!---->

#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `cmds` | `CachedArray` | - |



##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-allocator.ts:87](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-allocator.ts#L87)&nbsp;
___
### release
<div style="margin-left: 10px;">

▸   **release**<`void`\> : `void`




<!---->
<!--    #### Returns `void` -->
<!---->


##### Returns `void`




</div>

##### Defined in &nbsp;   [cocos/core/gfx/webgl/webgl-command-allocator.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/webgl/webgl-command-allocator.ts#L96)&nbsp;
___
<!---->




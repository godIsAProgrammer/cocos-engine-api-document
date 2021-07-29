
## Class: DeviceInfo





<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ bindingMappingInfo](#bindingMappingInfo)
- [ canvasElm](#canvasElm)
- [ devicePixelRatio](#devicePixelRatio)
- [ isAntialias](#isAntialias)
- [ isPremultipliedAlpha](#isPremultipliedAlpha)
- [ nativeHeight](#nativeHeight)
- [ nativeWidth](#nativeWidth)

### Constructors

- [ constructor](#constructor)
</div>

## Properties


### bindingMappingInfo
<div style="margin-left: 10px;">
For non-vulkan backends, to maintain compatibility and maximize
descriptor cache-locality, descriptor-set-based binding numbers need
to be mapped to backend-specific bindings based on the maximum limit
of available descriptor slots in each set.



For non-vulkan backends, to maintain compatibility and maximize
descriptor cache-locality, descriptor-set-based binding numbers need
to be mapped to backend-specific bindings based on the maximum limit
of available descriptor slots in each set.

•  **bindingMappingInfo**:
`BindingMappingInfo` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1694](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1694)&nbsp;


___


### canvasElm
<div style="margin-left: 10px;">




•  **canvasElm**:
`HTMLElement` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1677](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1677)&nbsp;


___


### devicePixelRatio
<div style="margin-left: 10px;">




•  **devicePixelRatio**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1680](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1680)&nbsp;


___


### isAntialias
<div style="margin-left: 10px;">




•  **isAntialias**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1678](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1678)&nbsp;


___


### isPremultipliedAlpha
<div style="margin-left: 10px;">




•  **isPremultipliedAlpha**:
`boolean` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1679](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1679)&nbsp;


___


### nativeHeight
<div style="margin-left: 10px;">




•  **nativeHeight**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1682](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1682)&nbsp;


___


### nativeWidth
<div style="margin-left: 10px;">




•  **nativeWidth**:
`number` 
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1681](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1681)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new DeviceInfo**(`canvasElm: HTMLElement, isAntialias: boolean, isPremultipliedAlpha: boolean, devicePixelRatio: number, nativeWidth: number, nativeHeight: number, bindingMappingInfo: BindingMappingInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasElm` | `HTMLElement` |
| `isAntialias` | `boolean` |
| `isPremultipliedAlpha` | `boolean` |
| `devicePixelRatio` | `number` |
| `nativeWidth` | `number` |
| `nativeHeight` | `number` |
| `bindingMappingInfo` | `BindingMappingInfo` |
</div>

##### Defined in &nbsp;   [cocos/core/gfx/base/define.ts:1674](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/gfx/base/define.ts#L1674)&nbsp;


---

<!---->




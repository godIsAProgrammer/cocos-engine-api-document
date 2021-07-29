## Interface: IMaterialInfo

- [defines](#defines)
- [effectAsset](#effectAsset)
- [effectName](#effectName)
- [states](#states)
- [technique](#technique)

### Properties

#### defines

<div style="margin-left: 10px;">




**`en`** 
The shader macro definitions. Default to 0 or the specified value in [[EffectAsset]].




**`zh`** 
这个材质定义的预处理宏，默认全为 0，或 [[EffectAsset]] 中的指定值。



• **defines**: ``MacroRecord | ``

</div>


##### Defined in &nbsp;   [cocos/core/assets/material.ts:75](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L75)&nbsp;

___
#### effectAsset

<div style="margin-left: 10px;">




**`en`** The EffectAsset to use. Must provide if `effectName` is not specified.




**`zh`** 
这个材质将使用的 EffectAsset，直接提供资源引用，和 `effectName` 至少要指定一个。



• **effectAsset**: ``EffectAsset | null``

</div>


##### Defined in &nbsp;   [cocos/core/assets/material.ts:54](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L54)&nbsp;

___
#### effectName

<div style="margin-left: 10px;">




**`en`** 
The name of the EffectAsset to use. Must provide if `effectAsset` is not specified.




**`zh`** 
这个材质将使用的 EffectAsset，通过 effect 名指定，和 `effectAsset` 至少要指定一个。



• **effectName**: ``string``

</div>


##### Defined in &nbsp;   [cocos/core/assets/material.ts:61](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L61)&nbsp;

___
#### states

<div style="margin-left: 10px;">




**`en`** 
The override values on top of the pipeline states specified in [[EffectAsset]].




**`zh`** 
这个材质的自定义管线状态，将覆盖 effect 中的属性。<br>
注意在可能的情况下请尽量少的自定义管线状态，以减小对渲染效率的影响。



• **states**: ``PassOverrides | ``

</div>


##### Defined in &nbsp;   [cocos/core/assets/material.ts:83](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L83)&nbsp;

___
#### technique

<div style="margin-left: 10px;">




**`en`** 
The index of the technique to use.




**`zh`** 
这个材质将使用第几个 technique，默认为 0。



• **technique**: ``number``

</div>


##### Defined in &nbsp;   [cocos/core/assets/material.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/assets/material.ts#L68)&nbsp;

___

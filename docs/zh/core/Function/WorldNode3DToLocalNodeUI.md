## Functions: WorldNode3DToLocalNodeUI

### WorldNode3DToLocalNodeUI


___
▸ **WorldNode3DToLocalNodeUI**<`Vec3`\>(`mainCamera: Camera, wpos: Vec3, uiNode: Node, out: Vec3`): `Vec3`
___


**`zh`** 
非 UI 节点转换到 UI 节点(局部) 空间坐标系。



**`deprecated`** 将在 1.2 移除，请使用 Camera 的 `convertToUINode`。



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `mainCamera` | `Camera` | 主相机。  |
| `wpos` | `Vec3` | 世界空间位置。  |
| `uiNode` | `Node` | UI节点。  |
| `out` | `Vec3` | 返回局部坐标。  |

#### Returns `Vec3` 
___


##### Defined in &nbsp;   [cocos/core/utils/coordinates-converts-utils.ts:50](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/utils/coordinates-converts-utils.ts#L50)&nbsp;

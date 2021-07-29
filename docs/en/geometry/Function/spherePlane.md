## Functions: spherePlane

### spherePlane


___
▸ **spherePlane**<`number`\>(`sphere: Sphere, plane: Plane`): `number`
___



**`en`** 
sphere-plane intersect, not necessarily faster than obb-plane,due to the length calculation of the
plane normal to factor out the unnomalized plane distance.



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `sphere` | `Sphere` | - |

| Name | Type | Description |
| :------: | :------: | :------: |
| `plane` | `Plane` | - |


#### Returns `number` inside(back) &#x3D; -1, outside(front) &#x3D; 0, intersect &#x3D; 1

___


##### Defined in &nbsp;   [cocos/core/geometry/intersect.ts:1162](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/core/geometry/intersect.ts#L1162)&nbsp;

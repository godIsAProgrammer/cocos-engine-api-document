
## Class: WebViewImplWeb


`extend:`
[WebViewImpl](docs/en/component-web-view/Class/WebViewImpl.md)









<div class="table-of-content">
<h2>Table of contents</h2>


### Properties

- [ UICamera](#UICamera)
- [ componentEventList](#componentEventList)
- [ loaded](#loaded)
- [ state](#state)
- [ webview](#webview)

### Constructors

- [ constructor](#constructor)

### Methods

- [ createWebView](#createWebView)
- [ destroy](#destroy)
- [ disable](#disable)
- [ enable](#enable)
- [ evaluateJS](#evaluateJS)
- [ loadURL](#loadURL)
- [ removeWebView](#removeWebView)
- [ reset](#reset)
- [ setJavascriptInterfaceScheme](#setJavascriptInterfaceScheme)
- [ setOnJSCallback](#setOnJSCallback)
- [ syncMatrix](#syncMatrix)
</div>

## Properties


### UICamera
<div style="margin-left: 10px;">




•  **UICamera**:
 ``null | Camera`` 
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl.ts:99](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl.ts#L99)&nbsp;


___


### componentEventList
<div style="margin-left: 10px;">




•  **componentEventList**:
 ``Map`` 
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl.ts:96](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl.ts#L96)&nbsp;


___


### loaded
<div style="margin-left: 10px;">




•  **loaded**:
 ``boolean`` 
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl.ts:95](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl.ts#L95)&nbsp;


___


### state
<div style="margin-left: 10px;">




•  **state**:
 ``EventType`` 
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl.ts:98](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl.ts#L98)&nbsp;


___


### webview
<div style="margin-left: 10px;">




•  **webview**:
 ``null | HTMLIFrameElement`` 
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl.ts:97](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl.ts#L97)&nbsp;


___

<!---->
## Constructors


### constructor
<div style="margin-left: 10px;">

• **new WebViewImplWeb**(`component: any`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `any` |
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:40](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L40)&nbsp;


---

<!---->
## Methods

### createWebView

<div style="margin-left: 10px;">

▸   **createWebView**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:71](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L71)&nbsp;
___
### destroy

<div style="margin-left: 10px;">

▸   **destroy**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl.ts:111](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl.ts#L111)&nbsp;
___
### disable

<div style="margin-left: 10px;">

▸   **disable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:108](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L108)&nbsp;
___
### enable

<div style="margin-left: 10px;">

▸   **enable**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:102](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L102)&nbsp;
___
### evaluateJS

<div style="margin-left: 10px;">

▸   **evaluateJS**<`void`\>(`str: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `str` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:114](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L114)&nbsp;
___
### loadURL

<div style="margin-left: 10px;">

▸   **loadURL**<`void`\>(`url: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `url` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:63](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L63)&nbsp;
___
### removeWebView

<div style="margin-left: 10px;">

▸   **removeWebView**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:94](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L94)&nbsp;
___
### reset

<div style="margin-left: 10px;">

▸   **reset**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl.ts:68](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl.ts#L68)&nbsp;
___
### setJavascriptInterfaceScheme

<div style="margin-left: 10px;">

▸   **setJavascriptInterfaceScheme**<`void`\>(`scheme: string`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `scheme` | `string` | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:132](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L132)&nbsp;
___
### setOnJSCallback

<div style="margin-left: 10px;">

▸   **setOnJSCallback**<`void`\>(`callback: undefined`) : `void`



#### Parameters

| Name | Type | Description |
| :------: | :------: | :------: |
| `callback` |  | - |


##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:128](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L128)&nbsp;
___
### syncMatrix

<div style="margin-left: 10px;">

▸   **syncMatrix**<`void`\> : `void`




##### Returns `void`
</div>

##### Defined in &nbsp;   [cocos/web-view/web-view-impl-web.ts:136](https://github.com/cocos-creator/engine/blob/c7bf6b8a9/cocos/web-view/web-view-impl-web.ts#L136)&nbsp;
___
<!---->




ResultCount
===========

### Import
```js
  import ResultCount from '@govuk-frederic/result-count';
```
<!-- STORY -->

### Usage

Simple
```jsx
<ResultCount backgroundColor="#6f777b" color="white">0</ResultCount>
```
Long count
```jsx
<ResultCount backgroundColor="#6f777b" color="white">000</ResultCount>
```
Disable count
```jsx
<ResultCount backgroundColor="#dee0e2" color="black">0</ResultCount>
```
Highlight count
```jsx
<ResultCount backgroundColor="#b10e1e" color="white">3</ResultCount>
```
Alternative count
```jsx
<ResultCount backgroundColor="#e48600" color="#3a2505">3</ResultCount>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `backgroundColor` |  | ```GREY_1``` | string | 
 `children` |  | ```undefined``` | node | 
 `color` |  | ```WHITE``` | string | 



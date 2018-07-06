ResultCountTitle
================

### Import
```js
  import ResultCountTitle from '@govuk-frederic/result-count-title';
```
<!-- STORY -->

### Usage

Simple
```jsx
<ResultCountTitle count={3} countColor="white" countBackgroundColor="#b10e1e">Title</ResultCountTitle>
```
Counter Title with value 0
```jsx
<ResultCountTitle count={0} countColor="black" countBackgroundColor="#dee0e2">Title</ResultCountTitle>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | `````` | node | 
 `count` |  | `````` | union(number|string) | 
 `countBackgroundColor` |  | `````` | string | 
 `countColor` |  | `````` | string | 



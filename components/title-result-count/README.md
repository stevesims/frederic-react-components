TitleResultCount
================

### Import
```js
  import TitleResultCount from '@govuk-frederic/title-result-count';
```
<!-- STORY -->

### Usage

Simple
```jsx
<ResultCountHeader count={3} countColor="white" countBackgroundColor="#b10e1e">
 Title Title Title
</ResultCountHeader>
```

Counter title with value 0
```jsx
<ResultCountHeader count={0} countColor="black" countBackgroundColor="#dee0e2">
 Title Title Title
</ResultCountHeader>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | `````` | node | 
 `count` |  | `````` | union(number|string) | 
 `countBackgroundColor` |  | `````` | string | 
 `countColor` |  | `````` | string | 



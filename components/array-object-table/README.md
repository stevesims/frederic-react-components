ArrayObjectTable
================

### Import
```js
  import ArrayObjectTable from '@govuk-frederic/array-object-table';
```
<!-- STORY -->

### Usage

Simple
```jsx
import { rowsFromArray, titlesFromFields } from '@govuk-frederic/utils';

const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two' },
];
const array = [
  { one: 'test', two: 'test' },
  { one: 'test' },
  {},
];
const title = ['Heading'];

<ArrayObjectTable fields={fields} array={array} title={title}/>;
```

With skipEmptyRows
```jsx
import { rowsFromArray, titlesFromFields } from '@govuk-frederic/utils';

const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two' },
];
const array = [
  {},
  {},
];
const title = ['Heading'];

<ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows/>
```

With skipEmptyRows and hideWithNoValues
```jsx
import { rowsFromArray, titlesFromFields } from '@govuk-frederic/utils';

const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two' },
];
const array = [
  {},
  {},
];
const title = ['Heading'];

<ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows hideWithNoValues/>;
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `array` |  | ```[]``` | arrayOf[object Object] | 
 `fields` |  | ```[]``` | arrayOf[object Object] | 
 `hideWithNoValues` |  | ```false``` | bool | 
 `skipEmptyRows` |  | ```false``` | bool | 
 `title` |  | `````` | node | 



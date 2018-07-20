Table
=====

### Import
```js
  import Table from '@govuk-frederic/table';
```
<!-- STORY -->

### Usage

Simple
```jsx
const verticalTableNames = { headings: 'heading', values: ['one', 'two', 'three', 'four'] };
<Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={verticalTableNames} />
```

rowIncludesHeading
```jsx
<Table titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading />
```

rowIncludesHeading, no titles
```jsx
const horizontalTableNames = { headings: 'heading', values: ['one', 'two', 'three'] };
<Table rows={arrayExampleContent} rowIncludesHeading names={horizontalTableNames} />
```

rowIncludesHeading, no titles, small single row
```jsx
const horizontalTableNames = { headings: 'heading', values: ['one', 'two', 'three'] };
<Table rows={[['title', 'value']]} rowIncludesHeading names={horizontalTableNames} />
```

rowIncludesHeading, with flexible columns
```jsx
const horizontalTableNames = { headings: 'heading', values: ['one', 'two', 'three'] };
<Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading names={horizontalTableNames} />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `flexibleColumns` |  | ```false``` | bool | 
 `name` |  | `````` | string | 
 `nameByRow` |  | ```false``` | bool | 
 `names` |  | ```[]``` | arrayOf[object Object] | 
 `rowIncludesHeading` |  | ```false``` | bool | 
 `rows` | true | `````` | arrayOf[object Object] | 
 `titles` |  | `````` | arrayOf[object Object] | 



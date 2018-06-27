ArrowLeft
=========

### Import
```js
  import ArrowLeft from '@govuk-frederic/arrow-left';
```
<!-- STORY -->

### Usage

Dark
```jsx
import { GREY_1 } from 'govuk-colours';

const darkBackground = {
  backgroundColor: GREY_1,
  minHeight: '320px',
  minWidth: '320px',
  padding: '20px',
};

<div style={darkBackground}>
  <ArrowLeft width={28} fill="white" />
</div>
```

Light
```jsx
import { WHITE } from 'govuk-colours';

const lightBackground = {
  backgroundColor: WHITE,
  minHeight: '320px',
  minWidth: '320px',
  padding: '20px',
};

<div style={lightBackground}>
  <ArrowLeft width={28} fill="black" />
</div>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | string | 
 `color` |  | ```undefined``` | string | 
 `fill` |  | ```BLUE``` | string | 
 `onClick` |  | ```undefined``` | func | 
 `width` |  | ```20``` | number | 



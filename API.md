ArrowLeft
=========

### Import
```js
  import ArrowLeft from '@govuk-frederic/arrow-left';
```
<!-- STORY -->

### Usage

Simple
```jsx
<ArrowLeft />
```

Dark background
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

Light background
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

Dark background & title
```jsx
import { GREY_1 } from 'govuk-colours';

const darkBackground = {
 backgroundColor: GREY_1,
 minHeight: '320px',
 minWidth: '320px',
 padding: '20px',
};

<div style={darkBackground}>
 <ArrowLeft width={28} fill="white" color="white">
   Back to previous page
 </ArrowLeft>
</div>
```

Light background & title
```jsx
import { WHITE } from 'govuk-colours';

const lightBackground = {
  backgroundColor: WHITE,
  minHeight: '320px',
  minWidth: '320px',
  padding: '20px',
};

<div style={lightBackground}>
 <ArrowLeft width={28} fill="black">
   Back to previous page
 </ArrowLeft>
</div>
```

Wrapped with anchor with title text
```jsx
import { WHITE } from 'govuk-colours';

const lightBackground = {
 backgroundColor: WHITE,
 minHeight: '320px',
 minWidth: '320px',
 padding: '20px',
};

<div style={lightBackground}>
 <a href="http://example.com" style={{ color: '#005CA7' }}>
   <ArrowLeft width={28} fill="black">
     Back to previous page
   </ArrowLeft>
 </a>
</div>
```

Wrapped with anchor with title text on dark background
```jsx
import { GREY_1 } from 'govuk-colours';

const darkBackground = {
 backgroundColor: GREY_1,
 minHeight: '320px',
 minWidth: '320px',
 padding: '20px',
};

<div style={darkBackground}>
 <a href="http://example.com" style={{ color: 'white' }}>
   <ArrowLeft width={28} fill="white">
     Back to previous page
   </ArrowLeft>
 </a>
</div>
```

Passing down onClick with title text
```jsx
import { GREY_1 } from 'govuk-colours';

const darkBackground = {
 backgroundColor: GREY_1,
 minHeight: '320px',
 minWidth: '320px',
 padding: '20px',
};

<div style={darkBackground}>
 <ArrowLeft width={28} fill="white" onClick={action('clicked arrow button')}>
   Back to previous page
 </ArrowLeft>
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


Arrow
=====

### Import
```js
  import Arrow from '@govuk-frederic/arrow';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Arrow />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `fill` |  | ```'#0C60A2'``` | string | 
 `width` |  | ```20``` | number | 


CompactTableAccordionGroup
==========================

### Import
```js
  import CompactTableAccordionGroup from '@govuk-frederic/compact-table-accordion-group';
```
<!-- STORY -->

### Usage

State managed with children
```jsx
import manageState from 'manage-state';

const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedCompactTableAccordionGroup title="Title" expanded="expanded">
  Children
</ManagedCompactTableAccordionGroup>
```

State managed without children
```jsx
import manageState from 'manage-state';

const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedCompactTableAccordionGroup title="Title" expanded="expanded"/>
```

Toggle open on title click with 'changeOnTitleClick' prop
```jsx
import manageState from 'manage-state';

const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedCompactTableAccordionGroup changeOnTitleClick title="Title" expanded="expanded">
  Children
</ManagedCompactTableAccordionGroup>
```

Array
```jsx
import manageState from 'manage-state';

const arrayExampleItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
  propsToState: ['open'],
});


<ManagedCompactTableAccordionGroup
  expanded={
  arrayExampleItems.map((item, index) => {
    if (index) {
      return <div>{item}</div>;
    }
    return null;
  })}
>
  {arrayExampleItems[0]}
</ManagedCompactTableAccordionGroup>
```

### TODO:
- Implement Async story example in CodeSandbox

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `changeOnTitleClick` |  | ```false``` | bool | 
 `children` |  | ```undefined``` | node | 
 `expanded` | true | `````` | node | 
 `onChange` |  | `````` | func | 
 `open` |  | ```false``` | bool | 
 `title` |  | `````` | node | 


Count
=====

### Import
```js
  import Count from '@govuk-frederic/count';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Count value="5" />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `textClass` |  | `````` | string | 
 `value` | true | `````` | union(string|number) | 


CountdownTextArea
=================

### Import
```js
  import CountdownTextArea from '@govuk-frederic/countdown-text-area';
```
<!-- STORY -->

### Usage

Simple
```jsx
import manageState from 'manage-state';

const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 changeEvent: true,
 propsToState: ['value'],
});

<ManagedCountdownTextarea />
```

With maxlength (150)
```jsx
import manageState from 'manage-state';

const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 changeEvent: true,
 propsToState: ['value'],
});
 
<ManagedCountdownTextarea noMaxLengthAttr maxLength={150} />
```

With maxlength (100) and positiveOnly
```jsx
import manageState from 'manage-state';

const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 changeEvent: true,
 propsToState: ['value'],
});

<ManagedCountdownTextarea maxLength={100} positiveOnly />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `maxLength` |  | ```undefined``` | number | 
 `noMaxLengthAttr` |  | ```false``` | bool | 
 `positiveOnly` |  | ```false``` | bool | 


CounterBar
==========

### Import
```js
  import CounterBar from '@govuk-frederic/counter-bar';
```
<!-- STORY -->

### Usage

Simple
```jsx
<CounterBar>
  <CounterBar.Total score={15}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Active counter
```jsx
<CounterBar>
  <CounterBar.Total score={15}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3} active>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Active total
```jsx
<CounterBar>
  <CounterBar.Total score={15} active>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Empty counters
```jsx
<CounterBar>
  <CounterBar.Total score={7}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter />
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter />
  </CounterBar.Counters>
</CounterBar>
```
CounterBar with padded counters container
```jsx
<div style={{padding: '4px'}}>
  <CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>
</div>
```
Zero/no scores
```jsx
<CounterBar>
  <CounterBar.Total score={9}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={0}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Custom colours on total
```jsx
<CounterBar>
  <CounterBar.Total score={15} scoreColor="yellow" scoreBackgroundColor="pink">All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Custom colours on counters
```jsx
<CounterBar>
  <CounterBar.Total score={15}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2} scoreColor="orange" scoreBackgroundColor="blue">Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4} scoreColor="yellow" scoreBackgroundColor="purple">Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Use any HTML element string for the total
```jsx
<CounterBar>
  <CounterBar.Total score={15} component="aside">All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Use a Link component for the total
```jsx
import { HashRouter, Link } from 'react-router-dom';

<HashRouter>
  <CounterBar>
    <CounterBar.Total score={15} component={Link} to="/courses?sort=name'/">All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>
</HashRouter>
```
Use any HTML element string for a counter
```jsx
<CounterBar>
  <CounterBar.Total score={15}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1} component="nav">Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2} component="aside">Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3} component="div">Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4} component="section">Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5} component="span">Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Use a Link component for a counter
```jsx
import { HashRouter, Link } from 'react-router-dom';

<HashRouter>
  <CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1} component={Link} to="/courses/1/">Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>
</HashRouter>
```
Use an active Link component for a counter
```jsx
import { HashRouter, Link } from 'react-router-dom';

<HashRouter>
  <CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1} component={Link} to="/courses/1/" active>Counter *1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>
</HashRouter>

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 


DistractionFree
===============

### Import
```js
  import DistractionFree from '@govuk-frederic/distraction-free';
```
<!-- STORY -->

### Usage

Simple
```jsx
<DistractionFree onClick={(e) => {}}>
   content goes here
</DistractionFree>
```

With title
```jsx
<DistractionFree arrowLeftTitle="Back to example" onClick={(e) => {}}>
   content goes here
</DistractionFree>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `arrowLeftTitle` |  | `````` | string | 
 `children` |  | `````` | node | 
 `onClick` |  | `````` | func | 


HeaderButton
============

### Import
```js
  import HeaderButton from '@govuk-frederic/header-button';
```
<!-- STORY -->

### Usage

Simple
```jsx
<HeaderButton>One</HeaderButton>
```

Multiple header buttons
```jsx
<Fragment>
 <HeaderButton>One</HeaderButton>
 <HeaderButton>Two</HeaderButton>
</Fragment>
```

Multiple header buttons with keyline
```jsx
import Keyline from '@govuk-frederic/keyline';

<Fragment>
 <Keyline>
   <HeaderButton>One</HeaderButton>
   <HeaderButton>Two</HeaderButton>
 </Keyline>
</Fragment>
```

Active header button
```jsx
<HeaderButton active>On</HeaderButton>
```

Disabled header button
```jsx
<HeaderButton disabled>Off</HeaderButton>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `active` |  | `````` | bool | 
 `children` |  | `````` | node | 
 `disabled` |  | `````` | bool | 


Keyline
=======

### Import
```js
  import Keyline from '@govuk-frederic/keyline';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Keyline>
   <p>example</p>
</Keyline>
```

inlineBlock
```jsx
<Keyline inlineBlock>
   <p>example</p>
</Keyline>
```

inlineBlock with orange border
```jsx
<<Keyline inlineBlock borderColor="#ff9900">
   <p>example</p>
</Keyline>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `borderColor` |  | `````` | string | 
 `children` |  | `````` | node | 
 `inlineBlock` |  | `````` | bool | 


OpenButton
==========

### Import
```js
  import OpenButton from '@govuk-frederic/open-button';
```
<!-- STORY -->

### Usage

Simple
```jsx
import manageState from 'manage-state';

const ManagedOpenButton = manageState(OpenButton, { propsToState: ['open']});

<ManagedOpenButton />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `onChange` |  | `````` | func | 
 `open` |  | `````` | bool | 


RemoveButton
============

### Import
```js
  import RemoveButton from '@govuk-frederic/remove-button';
```
<!-- STORY -->

### Usage

Simple
```jsx
<RemoveButton title="Remove" />
```

Next to some text
```jsx
<div><span>Text here</span><RemoveButton title="Remove" /></div>
```


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
<ResultCountTitle count={3}>Title</ResultCountTitle>
```

In black with count value 0
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
<ResultCount>0</ResultCount>
```

Overriding background and text colours
```jsx
<ResultCount backgroundColor="#6f777b" color="white">000</ResultCount>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `backgroundColor` |  | ```GREY_1``` | string | 
 `children` |  | ```undefined``` | node | 
 `color` |  | ```WHITE``` | string | 


Spinner
=======

### Import
```js
  import Spinner from '@govuk-frederic/spinner';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Spinner visible />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `visible` |  | `````` | bool | 


TableAccordionGroup
===================

### Import
```js
  import TableAccordionGroup from '@govuk-frederic/table-accordion-group';
```
<!-- STORY -->

### Usage

State managed with children
```jsx
import manageState from 'manage-state';

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedTableAccordionGroup title="Title" expanded="expanded">
  Children
</ManagedTableAccordionGroup>
```

State managed without children
```jsx
import manageState from 'manage-state';

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedTableAccordionGroup title="Title" expanded="expanded"/>
```

Toggle open on title click with 'changeOnTitleClick' prop
```jsx
import manageState from 'manage-state';

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedTableAccordionGroup changeOnTitleClick title="Title" expanded="expanded">
  Children
</ManagedTableAccordionGroup>
```

Array
```jsx
import manageState from 'manage-state';

const arrayExampleItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
  propsToState: ['open'],
});


<ManagedTableAccordionGroup
  expanded={
  arrayExampleItems.map((item, index) => {
    if (index) {
      return <div>{item}</div>;
    }
    return null;
  })}
>
  {arrayExampleItems[0]}
</ManagedTableAccordionGroup>
```

### TODO:
- Implement Async story example in CodeSandbox

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `changeOnTitleClick` |  | ```false``` | bool | 
 `children` |  | ```undefined``` | node | 
 `expanded` | true | `````` | node | 
 `onChange` |  | `````` | func | 
 `open` |  | ```false``` | bool | 
 `title` |  | `````` | node | 


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
<Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={exampleNames} />
```

rowIncludesHeading
```jsx
<Table titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading />
```

rowIncludesHeading, no titles
```jsx
<Table rows={arrayExampleContent} rowIncludesHeading names={exampleNames} />
```

rowIncludesHeading, no titles, small single row
```jsx
<Table rows={[['title', 'value']]} rowIncludesHeading />
```

rowIncludesHeading, with flexible columns
```jsx
<Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `flexibleColumns` |  | `````` | bool | 
 `name` |  | `````` | string | 
 `names` |  | ```[]``` | arrayOf[object Object] | 
 `rowIncludesHeading` |  | `````` | bool | 
 `rows` | true | `````` | arrayOf[object Object] | 
 `titles` |  | `````` | arrayOf[object Object] | 


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
<TitleResultCount count={3}>
 Title Title Title
</TitleResultCount>
```

Counter title with value 0 and override text and background colour.
```jsx
<TitleResultCount count={0} countColor="black" countBackgroundColor="#dee0e2">
 Title Title Title
</TitleResultCount>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | `````` | node | 
 `count` |  | `````` | union(number|string) | 
 `countBackgroundColor` |  | `````` | string | 
 `countColor` |  | `````` | string | 



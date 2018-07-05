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



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `changeOnTitleClick` |  | ```false``` | bool | 
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

Setup
```jsx
import manageState from 'manage-state';
const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 changeEvent: true,
 propsToState: ['value'],
});
```
Default
```jsx
<ManagedCountdownTextarea />
```
With maxlength (150)
```jsx
<ManagedCountdownTextarea noMaxLengthAttr maxLength={150} />
```
With maxlength (100) and positiveOnly
```jsx
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



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `activeTitle` |  | `````` | bool | 
 `counters` |  | `````` | arrayOf[object Object] | 
 `listTitle` |  | `````` | any | 
 `name` | true | `````` | string | 
 `onSelect` |  | ```() => {}``` | func | 


DistractionFree
===============

### Import
```js
  import DistractionFree from '@govuk-frederic/distraction-free';
```
<!-- STORY -->

### Usage

Default
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

Default
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




ResultCountTitle
================

### Import
```js
  import ResultCountTitle from '@govuk-frederic/result-count-title';
```
<!-- STORY -->



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



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `changeOnTitleClick` |  | ```false``` | bool | 
 `children` | true | `````` | node | 
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



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | `````` | node | 
 `count` |  | `````` | union(number|string) | 
 `countBackgroundColor` |  | `````` | string | 
 `countColor` |  | `````` | string | 



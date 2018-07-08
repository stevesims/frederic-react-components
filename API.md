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
<CounterBar
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 2 },
   { id: 'jkl', name: 'Counter 4', score: 9 },
   { id: 'mno', name: 'Counter 5', score: 2 },
   { id: 'pqr', name: 'Counter 6', score: 1 },
   { id: 'stu', name: 'Counter 7', score: 0 },
 ]}
/>
```
Active counter
```jsx
<CounterBar
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { active: true, id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 2 },
 ]}
/>
```
Active title
```jsx
<CounterBar
 activeTitle
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 0 },
 ]}
/>
```
Active counter and title on click
```jsx
<CounterBar
 listTitle="All counters"
 activeTitle
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 2 },
   { id: 'jkl', name: 'Counter 4', score: 9 },
   { id: 'mno', name: 'Counter 5', score: 2 },
   { id: 'pqr', name: 'Counter 6', score: 1 },
   { id: 'stu', name: 'Counter 7' },
 ]}
 // eslint-disable-next-line no-alert
 onSelect={ (id) => alert(`Counter with id: ${id} selected.`) }
/>
```
Clickable counters
```jsx
<CounterBar
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 2 },
   { id: 'jkl', name: 'Counter 4', score: 9 },
   { id: 'mno', name: 'Counter 5', score: 2 },
   { id: 'pqr', name: 'Counter 6', score: 1 },
   { id: 'stu', name: 'Counter 7' },
 ]}
 // eslint-disable-next-line no-alert
 onSelect={ (id) => alert(`Counter with id: ${id} selected.`) }
/>
```

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
<ResultCountTitle count={3} countColor="white" countBackgroundColor="#b10e1e">Title</ResultCountTitle>
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

Simple
```jsx
<TableAccordionGroup title="Title" expanded="expanded">Children</TableAccordionGroup>
```

Open
```jsx
<TableAccordionGroup open title="Title" expanded="expanded">Children</TableAccordionGroup>
```

State managed
```jsx
import manageState from 'manage-state';

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
 propsToState: ['open'],
});

<ManagedTableAccordionGroup title="Title" expanded="expanded">Children</ManagedTableAccordionGroup>
```

changeOnTitleClick
```jsx
import manageState from 'manage-state';

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
 propsToState: ['open'],
});

<ManagedTableAccordionGroup changeOnTitleClick title="Title" expanded="expanded">Children</ManagedTableAccordionGroup>
```

array
```jsx
import manageState from 'manage-state';

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

async
```jsx
import ResultCountTitle from '@govuk-frederic/result-count-title';
import Spinner from '@govuk-frederic/spinner';

class TableAccordionGroupAsyncExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        count: 88,
        firstItem: 'Davis Paul Jones',
        id: 1,
        title: 'Names',
      }, {
        count: 3,
        firstItem: 'Some address',
        id: 2,
        title: 'Addresses',
      }],
    };
  }

  loadItem(index) {
    // mock ajax call
    setTimeout(() => {
      this.setState(() => {
        const newItems = this.state.items.map((item, i) => {
          if (index === i) {
            return {
              ...item,
              loaded: true,
              text: `Loaded item ${index}`,
            };
          } return item;
        });
        return { items: newItems };
      });
    }, 1000);
  }

  onChange(open, index) {
    this.setState(() => {
      const newItems = this.state.items.map((item, i) => {
        if (index === i) {
          return {
            ...item,
            open,
          };
        } return item;
      });
      return { items: newItems };
    });

    // eslint disable justification:
    // "avoid the use of user input in property name fields"
    //  * https://blog.liftsecurity.io/2015/01/14/the-dangers-of-square-bracket-notat * ion/
    // - `index` is not a user input as it comes from items.map in render.
    // - This code is also not expected to be executed on a server, other than  * during unit tests,
    //   in which case this vulnerability is not relevant.
    if (open && !this.state.items[index].loaded) { // eslint-disable-line  * security/detect-object-injection
      this.loadItem(index);
    }
  }

  render() {
    const { items } = this.state;

    return (<div>
      {items.map((item, index) => (
        <TableAccordionGroup
          changeOnTitleClick
          key={item.id}
          title={
            <ResultCountTitle count={item.count} title={item.title} />
          }
          open={item.open}
          expanded={item.loaded ? item.text : <Spinner visible />}
          onChange={({open}) => this.onChange(open, index)}>
          {item.firstItem}
        </TableAccordionGroup>
      ))}
    </div>);
  }
}

<TableAccordionGroupAsyncExample />
```

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



import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ObjectTable from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Tables/ObjectTable', module);
const examples = storiesOf('Tables/ObjectTable/Examples', module);
const title = ['Heading'];
  
stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const object = { one: 'test', two: 'test' };

  return <ObjectTable fields={fields} object={object} title={title}/>;
});

examples.add('Component default shows empty cells', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const object = { one: 'test' };
  
  return <ObjectTable fields={fields} object={object} title={title}/>;
});

examples.add('With no values for found fields', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const objectWithNoValues = { };
  
  return <ObjectTable fields={fields} object={objectWithNoValues} title={title} />;
});

examples.add('Hide table even when no data with hideWithNoValues', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const objectWithNoValues = { };
  
  return <ObjectTable fields={fields} object={objectWithNoValues} title={title} hideWithNoValues />;
});

examples.add('Mixed values no skip rows', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
    { key: 'five', heading: 'Five' },
    { key: 'six', heading: 'Six' },
    { key: 'seven', heading: 'Seven' },
  ];
  const object = {
    one: 'test',
    two: 'test',
    three: '',
    four: 'Beta',
    five: null,
    six: 0,
    seven: undefined,
    eight: undefined,
  };
  
  return <ObjectTable fields={fields} object={object} title={title} />;
});

examples.add('Mixed values with skip rows', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
    { key: 'five', heading: 'Five' },
    { key: 'six', heading: 'Six' },
    { key: 'seven', heading: 'Seven' },
    { key: 'eight', heading: 'Eight', transform: (result = 'TOBOLOL') => result },
  ];
  const object = {
    one: 'test',
    two: 'test',
    three: '',
    four: 'Beta',
    five: null,
    six: 0,
    seven: undefined,
    eight: undefined,
  };
  
  return <ObjectTable fields={fields} object={object} title={title} skipEmptyRows />;
});

examples.add('Missing item specified in key', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
    { key: 'five', heading: 'Five' },
    { key: 'six', heading: 'Six' },
    { key: 'seven', heading: 'Seven' },
  ];
  const object = {
    one: 'test',
    MISSING: 'test',
    three: '',
    four: 'Beta',
    five: null,
    six: 0,
    seven: undefined,
    eight: undefined,
  };
  
  return <ObjectTable fields={fields} object={object} title={title} skipEmptyRows />;
});

examples.add('With default transform', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
    { key: 'five', heading: 'Five' },
    { key: 'six', heading: 'Six' },
    { key: 'seven', heading: 'Seven' },
  ];
  const object = {
    one: 'test',
    MISSING: 'test',
    three: '',
    four: 'Beta',
    five: null,
    six: 0,
    seven: undefined,
    eight: undefined,
  };

  const defaultTransform = (result = '-') => result;
  
  return <ObjectTable
    fields={fields}
    object={object}
    title={title}
    defaultTransform={defaultTransform}
    skipEmptyRows
  />;
});

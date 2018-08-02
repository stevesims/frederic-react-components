import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ArrayObjectTable from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Tables/ArrayObjectTable', module);
const examples = storiesOf('Tables/ArrayObjectTable/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);


stories.add('Component default', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const array = [
    { one: 'test', two: 'test' },
    { one: 'test', two: 'test' },
  ];
  const title = ['Heading'];
  
  return <ArrayObjectTable fields={fields} array={array} title={title}/>;
});

examples.add('Component default shows empty cells', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const array = [
    { one: 'test' },
    { one: 'test', two: 'test' },
  ];
  const title = ['Heading'];
  
  return <ArrayObjectTable fields={fields} array={array} title={title}/>;
});

examples.add('Component default shows one empty row if none are returned', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const array = [
    {},
    {},
  ];
  const title = ['Heading'];
  
  return <ArrayObjectTable fields={fields} array={array} title={title}/>;
});

examples.add('hideWithNoValues set to true', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const array = [
    {},
    {},
  ];
  const title = ['Heading'];

  return <ArrayObjectTable fields={fields} array={array} title={title} hideWithNoValues/>;
});

examples.add('skipEmptyRows set to false', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const array = [
    { one: 'test', two: 'test' },
    {},
  ];
  const title = ['Heading'];

  return <ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows={false}/>;
});

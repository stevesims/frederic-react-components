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
    { one: 'test' },
    { one: 'test', two: 'test' },
    {},
  ];
  const title = ['Heading'];
  
  return <ArrayObjectTable fields={fields} array={array} title={title}/>;
});

examples.add('skipEmptyRows (one mock empty row is shown if no rows)', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const array = [
    {},
    {},
  ];
  const title = ['Heading'];
  
  return <ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows/>;
});

examples.add('skipEmtpyRows and hideWithNoValues (table is hidden if no rows)', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const array = [
    {},
    {},
  ];
  const title = ['Heading'];

  return <ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows hideWithNoValues/>;
});

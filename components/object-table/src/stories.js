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

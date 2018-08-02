import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ObjectTable from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Tables/ObjectTable', module);
const examples = storiesOf('Tables/ObjectTable/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

const fields = [
  { heading: 'A', key: 'a', transform: (d) => d },
  { heading: 'B', key: 'b' },
  { heading: 'C', key: 'c', transform: (d) => d },
];
const obj = { a: 'Alpha', b: 'Beta', c: 'Gamma' };
const objectWithNoValues = { a: '', b: '', c: '' };
const title = ['My ArrayObjectTable'];

stories.add('Component default', () => (
  <ObjectTable fields={fields} object={obj} title={title}/>
));

examples.add('With no values for found fields', () => (
  <ObjectTable fields={fields} object={objectWithNoValues} title={title} />
));

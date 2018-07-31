import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ArrayObjectTable from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Tables/ArrayObjectTable', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

const fields = [
  { heading: 'A', key: 'a', transform: (d) => d },
  { heading: 'B', key: 'b', transform: (d) => d },
  { heading: 'C', key: 'c', transform: (d) => d },
];
const array = [
  { a: 'Alpha', b: 'Beta', c: 'Gamma' },
  { a: 'Alpha', b: 'Beta', c: 'Gamma' },
  { a: 'Alpha', b: 'Beta', c: 'Gamma' },
];
const title = ['My ArrayObjectTable'];

stories.add('Component default', () => (
  <ArrayObjectTable fields={fields} array={array} title={title}/>
));

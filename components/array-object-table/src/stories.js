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
    { heading: 'A', key: 'a' },
    { heading: 'B', key: 'b' },
    { heading: 'C', key: 'c' },
  ];
  const array = [
    { a: 'Alpha', b: 'Beta', c: 'Gamma' },
    { a: 'Alpha', b: 'Beta', c: 'Gamma' },
    { a: 'Alpha', b: 'Beta', c: 'Gamma' },
  ];
  const title = ['My ArrayObjectTable'];
  
  return <ArrayObjectTable fields={fields} array={array} title={title}/>;
});

examples.add('Component default shows empty cells', () => {
  const fields = [
    { heading: 'A', key: 'a' },
    { heading: 'B', key: 'b' },
    { heading: 'C', key: 'c' },
  ];
  const array = [
    { a: 'Alpha', b: 'Beta', c: 'Gamma' },
    { a: 'Alpha', b: 'Beta', c: 'Gamma' },
    { a: 'Alpha', z: 'Beta', c: 'Gamma' },
  ];
  const title = ['My ArrayObjectTable'];
  
  return <ArrayObjectTable fields={fields} array={array} title={title}/>;
});

examples.add('Component default omits empty rows', () => {
  const fields = [
    { heading: 'A', key: 'a' },
    { heading: 'B', key: 'b' },
    { heading: 'C', key: 'c' },
  ];
  const array = [
    { a: 'Alpha', b: 'Beta', c: 'Gamma' },
    { a: 'Alpha', b: 'Beta', c: 'Gamma' },
    { d: 'Alpha', e: 'Beta', f: 'Gamma' },
  ];
  const title = ['My ArrayObjectTable'];
  
  return <ArrayObjectTable fields={fields} array={array} title={title}/>;
});

examples.add('hideWithNoValues set to true', () => {
  const fields = [
    { heading: 'A', key: 'a'},
    { heading: 'B', key: 'b' },
    { heading: 'C', key: 'c' },
  ];
  const array = [
    { d: 'Alpha', e: 'Beta', f: 'Gamma' },
    { d: 'Alpha', e: 'Beta', f: 'Gamma' },
    { d: 'Alpha', e: 'Beta', f: 'Gamma' },
  ];
  const title = ['My ArrayObjectTable'];

  return <ArrayObjectTable fields={fields} array={array} title={title} hideWithNoValues/>;
});

examples.add('skipEmptyRows set to false', () => {
  const fields = [
    { heading: 'A', key: 'a' },
    { heading: 'B', key: 'b' },
    { heading: 'C', key: 'c' },
  ];
  const array = [
    { d: 'Alpha', e: 'Beta', f: 'Gamma' },
    { d: 'Alpha', e: 'Beta', f: 'Gamma' },
    { d: 'Alpha', e: 'Beta', f: 'Gamma' },
  ];
  const title = ['My ArrayObjectTable'];

  return <ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows={false}/>;
});

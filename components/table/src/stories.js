import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Table from '.';
import ReadMe from '../README.md';

const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
const arrayExampleContent = [
  ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
  ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
  ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
];

const verticalTableNames = { headings: 'heading', values: ['one', 'two', 'three', 'four'] };
const horizontalTableNames = { headings: 'heading', values: ['one', 'two', 'three'] };

const stories = storiesOf('Tables/Table', module);
const examples = storiesOf('Tables/Table/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () =>
  <Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={verticalTableNames} />,
);

examples.add('rowIncludesHeading', () =>
  <Table titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading names={horizontalTableNames} />,
);

examples.add('rowIncludesHeading, no titles', () =>
  <Table rows={arrayExampleContent} rowIncludesHeading names={horizontalTableNames} />,
);

examples.add('rowIncludesHeading, no titles, small single row', () =>
  <Table rows={[['title', 'value']]} rowIncludesHeading names={horizontalTableNames} />,
);

examples.add('rowIncludesHeading, with flexible columns', () =>
  <Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading names={horizontalTableNames} />,
);

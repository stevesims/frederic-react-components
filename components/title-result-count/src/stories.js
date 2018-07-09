import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ResultCountHeader from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Count/TitleResultCount', module);
const examples = storiesOf('Count/TitleResultCount/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => <ResultCountHeader count={3} countColor="white" countBackgroundColor="#b10e1e">Title Title Title</ResultCountHeader>);
examples.add('Counter title with value 0', () => <ResultCountHeader count={0} countColor="black" countBackgroundColor="#dee0e2">Title Title Title</ResultCountHeader>);

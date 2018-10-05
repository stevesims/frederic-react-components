import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import { PageNavigationExample } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Page/PageNavigation', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', PageNavigationExample);

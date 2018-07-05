import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import HeaderButton from '.';
import Keyline from '@govuk-frederic/keyline';
import ReadMe from '../README.md';

const stories = storiesOf('Buttons/HeaderButton', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () =>
  <HeaderButton>One</HeaderButton>,
);

stories.add('Multiple Header Buttons', () =>
  <Fragment>
    <HeaderButton>One</HeaderButton>
    <HeaderButton>Two</HeaderButton>
  </Fragment>,
);

stories.add('Multiple Header Buttons with keyline', () =>
  <Fragment>
    <Keyline>
      <HeaderButton>One</HeaderButton>
      <HeaderButton>Two</HeaderButton>
    </Keyline>
  </Fragment>,
);

stories.add('Active Header Button', () =>
  <HeaderButton active>On</HeaderButton>,
);

stories.add('Disabled Header Button', () =>
  <HeaderButton disabled>Off</HeaderButton>,
);

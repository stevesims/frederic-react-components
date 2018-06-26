import React from 'react';
import { storiesOf } from '@storybook/react';
import manageState from 'manage-state';

import CountdownTextArea from '.';

const ManagedCountdownTextarea = manageState(CountdownTextArea, {
  changeEvent: true,
  propsToState: ['value'],
});

const stories = storiesOf('Forms/CountdownTextarea', module);

stories.add('Component default', () => <ManagedCountdownTextarea />);
stories.add('with maxLength (150)', () => <ManagedCountdownTextarea noMaxLengthAttr maxLength={150} />);
stories.add('with maxLength (100) and positiveOnly', () => <ManagedCountdownTextarea maxLength={100} positiveOnly />);

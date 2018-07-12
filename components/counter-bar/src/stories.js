import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import CounterBar from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Count/CounterBar', module);
const examples = storiesOf('Count/CounterBar/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () =>
(<CounterBar>
  <CounterBar.Total score={16}>All counters</CounterBar.Total>
  <CounterBar.Container>
    <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 3</CounterBar.Item>
    <CounterBar.Item score={9}>Counter 4</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 5</CounterBar.Item>
    <CounterBar.Item score={1}>Counter 6</CounterBar.Item>
    <CounterBar.Item score={0}>Counter 7</CounterBar.Item>
  </CounterBar.Container>
</CounterBar>),
);

examples.add('Active Counter', () =>
(<CounterBar>
  <CounterBar.Total score={5}>All counters</CounterBar.Total>
  <CounterBar.Container>
    <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
    <CounterBar.Item score={2} active>Counter 2</CounterBar.Item>
    <CounterBar.Item score={3}>Counter 3</CounterBar.Item>
  </CounterBar.Container>
</CounterBar>),
);

examples.add('Active Title', () =>
  (<CounterBar>
    <CounterBar.Total active score={2}>All counters</CounterBar.Total>
    <CounterBar.Container>
      <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
      <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
      <CounterBar.Item score={0}>Counter 3</CounterBar.Item>
    </CounterBar.Container>
  </CounterBar>),
);

examples.add('CounterBar with padded container', () =>
(<div style={{padding: '4px'}}>
  <CounterBar>
    <CounterBar.Total score={8}>All counters</CounterBar.Total>
    <CounterBar.Container>
      <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
      <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
      <CounterBar.Item score={2}>Counter 3</CounterBar.Item>
      <CounterBar.Item score={0}>Counter 4</CounterBar.Item>
      <CounterBar.Item score={2}>Counter 5</CounterBar.Item>
      <CounterBar.Item score={0}>Counter 6</CounterBar.Item>
      <CounterBar.Item score={2}>Counter 7</CounterBar.Item>
    </CounterBar.Container>
  </CounterBar>
</div>),
);

examples.add('Zero/no scores', () =>
  <CounterBar>
    <CounterBar.Total score={0}>All counters</CounterBar.Total>
    <CounterBar.Container>
      <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
      <CounterBar.Item>Counter 2</CounterBar.Item>
      <CounterBar.Item score={0}>Counter 3</CounterBar.Item>
    </CounterBar.Container>
  </CounterBar>,
);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { GREY_1, WHITE } from 'govuk-colours';

import ArrowLeft from '.';

const darkBackground = {
  backgroundColor: GREY_1,
  minHeight: '320px',
  minWidth: '320px',
  padding: '20px',
};

const lightBackground = {
  backgroundColor: WHITE,
  minHeight: '320px',
  minWidth: '320px',
  padding: '20px',
};

const stories = storiesOf('Icons/ArrowLeft', module);

stories
  .add('Component default', () => (
    <div style={darkBackground}>
      <ArrowLeft width={28} fill="white" />
    </div>
  ));

stories.add('default with light background & title', () => (
  <div style={lightBackground}>
    <ArrowLeft width={28} fill="black">
          Back to previous page
    </ArrowLeft>
  </div>
));

stories.add('with title text', () => (
  <div style={darkBackground}>
    <ArrowLeft width={28} fill="white" color="white">
          Back to previous page
    </ArrowLeft>
  </div>
));

stories.add('wrapped with anchor with title text', () => (
  <div style={lightBackground}>
    <a href="http://example.com" style={{ color: '#005CA7'}}>
      <ArrowLeft width={28} fill="black">
            Back to previous page
      </ArrowLeft>
    </a>
  </div>
));

stories.add('wrapped with anchor with title text on darkBackground', () => (
  <div style={darkBackground}>
    <a href="http://example.com" style={{ color: 'white'}}>
      <ArrowLeft width={28} fill="white">
            Back to previous page
      </ArrowLeft>
    </a>
  </div>
));

stories.add('passing down onClick with title text', () => (
  <div style={darkBackground}>
    <ArrowLeft width={28} fill="white" color="white" onClick={action('clicked arrow button')}>
          Back to previous page
    </ArrowLeft>
  </div>
));

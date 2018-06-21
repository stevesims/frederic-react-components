import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

describe('Arrow', () => {
  const wrapper = <Component />;

  it('renders without crashing', () => {
    shallow(wrapper);
  });
});

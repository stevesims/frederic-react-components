import React from 'react';
import { mount } from 'enzyme';

import { PageNavigationExample } from './fixtures';

describe(PageNavigationExample, () => {
  let wrapper;

  it('renders the storybook example', () => {
    wrapper = mount(<PageNavigationExample />);
    expect(wrapper).toMatchSnapshot();
  });
});

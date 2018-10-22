import React from 'react';
import { mount } from 'enzyme';

import { PageNavigationExample, ReactRouterExample } from './fixtures';

describe(PageNavigationExample, () => {
  let wrapper;

  it('renders the storybook example', () => {
    wrapper = mount(<PageNavigationExample />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe(PageNavigationExample, () => {
  let wrapper;

  it('renders the with React Router', () => {
    wrapper = mount(<ReactRouterExample />);
    expect(wrapper).toMatchSnapshot();
  });
});

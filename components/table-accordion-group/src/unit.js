import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Component, { Title } from '.';
import OpenButton from '@frederic-react-components/open-button';

describe('TableAccordionGroup: Component renders with only required properties', assert => {
  shallow(<Component expanded="Expanded">Test</Component>);
  assert.end();
});

describe('TableAccordionGroup: OpenButton click triggers onChange', assert => {
  const handleChange = sinon.spy();

  const wrapper = mount(
    <Component expanded="Expanded" onChange={handleChange}>
      Test
    </Component>,
  );
  wrapper.find(OpenButton).simulate('click');
  assert.equal(handleChange.callCount, 1);
  assert.end();
});

describe('TableAccordionGroup: Title triggers onChange when changeOnTitleClick is true', assert => {
  const handleChange = sinon.spy();

  const wrapper = mount(
    <Component expanded="Expanded" title="Test" onChange={handleChange} changeOnTitleClick>
      Test
    </Component>,
  );
  wrapper.find(Title).simulate('click');
  assert.equal(handleChange.callCount, 1);
  assert.end();
});

describe('TableAccordionGroup: Title does not trigger onChange when changeOnTitleClick not set', assert => {
  const handleChange = sinon.spy();

  const wrapper = mount(
    <Component expanded="Expanded" onChange={handleChange}>
      Test
    </Component>,
  );
  wrapper
    .find(Title)
    .first()
    .simulate('click');
  assert.equal(handleChange.callCount, 0);
  assert.end();
});

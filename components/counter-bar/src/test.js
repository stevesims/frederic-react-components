import React from 'react';
import { mount } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { LINK_COLOUR, WHITE, MINISTRY_OF_DEFENCE_WEBSAFE } from 'govuk-colours';

import CounterBar from '.';

expect.extend(createMatchers(emotion));

describe('CounterBar', () => {
  let wrapper;
  const handleChange = jest.fn();
  
  it('renders counters without active title', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total score={4}>All counters</CounterBar.Total>
      <CounterBar.Container>
        <CounterBar.Item score={1}>Counter 1</CounterBar.Item>
        <CounterBar.Item score={3}>Counter 2</CounterBar.Item>
        <CounterBar.Item />
        <CounterBar.Item score={0}>Counter 4</CounterBar.Item>
      </CounterBar.Container>
    </CounterBar>);
    const totalWrapper = wrapper.find('Total');
    expect(totalWrapper).not.toHaveStyleRule('background', LINK_COLOUR);
    expect(totalWrapper).not.toHaveStyleRule('color', WHITE);
    expect(totalWrapper).not.toHaveStyleRule('outline', `2px solid ${LINK_COLOUR}`);
  });

  it('renders empty counters', () => {
    expect(wrapper.find('Item').at(2)).toHaveStyleRule('opacity', '0');
  });
    
  it('renders counters with active title', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total active score={2}>All counters</CounterBar.Total>
      <CounterBar.Container>
        <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
        <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
        <CounterBar.Item score={0}>Counter 3</CounterBar.Item>
      </CounterBar.Container>
    </CounterBar>);
    const totalWrapper = wrapper.find('Total');
    expect(totalWrapper).toHaveStyleRule('background', LINK_COLOUR);
    expect(totalWrapper).toHaveStyleRule('color', WHITE);
    expect(totalWrapper).toHaveStyleRule('outline', `2px solid ${LINK_COLOUR}`);
  });

  xit('renders default props as expected', () => {
    expect(typeof wrapper.prop('onSelect') === 'function').toBe(true);
    wrapper.prop('onSelect')();
  });

  it('renders counters with disabled counter values', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total active score={0}>All counters</CounterBar.Total>
      <CounterBar.Container>
        <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
      </CounterBar.Container>
    </CounterBar>);
    const itemWrapper = wrapper.find('ItemWrapper').first();
    expect(itemWrapper.prop('disabled')).toBe(true);
  });
  
  it('renders counters with active values', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total score={2}>All counters</CounterBar.Total>
      <CounterBar.Container>
        <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
        <CounterBar.Item score={2} active>Counter 2</CounterBar.Item>
        <CounterBar.Item score={0}>Counter 3</CounterBar.Item>
      </CounterBar.Container>
    </CounterBar>);
    const itemWrapper = wrapper.find('Item').at(1);
    expect(itemWrapper).toHaveStyleRule('background', LINK_COLOUR);
    expect(itemWrapper).toHaveStyleRule('color', WHITE);
    expect(itemWrapper).toHaveStyleRule('outline', `2px solid ${LINK_COLOUR}`);
  });
  
  xit('calls onSelect ID when CountWrapper is clicked', () => {
    wrapper.setProps({ onSelect: handleChange }).find('CountWrapper').simulate('click');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  xit('calls onSelect with expected ID when clicked', () => {
    handleChange.mockReset();
    wrapper.find('Counter').first().simulate('click');
    expect(handleChange).toHaveBeenCalledWith(testActiveCounters[0].id);
  });

  xit('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

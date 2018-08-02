import React from 'react';
import { mount } from 'enzyme';

import Component from '.';

describe('ObjectTable', () => {
  it('does render with no data', () => {
    const wrapper = mount(<Component />);
    expect(wrapper.html());
  });
  it('renders a table of data based on params', () => {
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: () => 'two' },
    ];
    const object = { one: 'test', two: 'test' };
    const wrapper = mount(<Component fields={fields} object={object} />);
    const table = wrapper.find('Table');
    const rows = table.prop('rows');
  
    expect(rows).toEqual([['One', 'test'], ['Two', 'two']]);
  });

  it('optionally renders a heading for a table', () => {
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: () => 'two' },
    ];
    const object = { one: 'test', two: 'test' };
    const wrapper = mount(<Component fields={fields} object={object} title="Heading" />);
    expect(wrapper.contains('Heading')).toBe(true);
  });

  it('omits rows in table for null values', () => {
    const fields = [
      { key: 'one', heading: 'one' },
      { key: 'two', heading: 'two', transform: () => null },
      { key: 'three', heading: 'three'},
    ];
    const object = { one: 'test', two: 'test', three: null };
    const wrapper = mount(<Component fields={fields} object={object} />);
    const rows = wrapper.find('tr');
    
    expect(rows.length).toBe(1);
  });

  it('does not render anything when rows have no values and hideWithNoValues is true', () => {
    const fields = [
      { key: 'one', heading: 'one' },
      { key: 'two', heading: 'two', transform: () => null },
      { key: 'three', heading: 'three'},
    ];
    const object = {};
    const wrapper = mount(<Component fields={fields} object={object} />);   
    expect(wrapper.html()).toBe(null);
  });

  xit('renders one tbody row when no valid data if hideWithNoValues is not true', () => {
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two' },
    ];
    const object = {};
    const wrapper = mount(<Component fields={fields} object={object} hideWithNoValues/>);  
    expect(wrapper.find('tr').length).toBe(1);
  });
});


import React from 'react';
import { mount } from 'enzyme';

import Component from '.';

describe('ArrayObjectTable', () => {
  it('does render with no data', () => {
    const wrapper = mount(<Component />);
    expect(wrapper.html());
  });
  it('renders a table of data based on params', () => {
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: () => 'two' },
      { key: 'three', heading: 'Three' },
    ];
    const array = [
      {}, // empty record to be automatically omitted
      {
        one: 'test',
        two: 'test',
      },
    ];
    const wrapper = mount(<Component fields={fields} array={array} />);
    const table = wrapper.find('Table');
    const rows = table.prop('rows');
    const titles = table.prop('titles');
  
    expect(rows).toEqual([['test', 'two', '-']]);
    expect(titles).toEqual(['One', 'Two', 'Three']);
  });

  it('optionally renders a heading for a table', () => {
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: () => 'two' },
    ];
    const array = [{
      one: 'test',
      two: 'test',
    }];
    const wrapper = mount(<Component fields={fields} array={array} title="Heading" />);
    expect(wrapper.contains('Heading'));
  });
});


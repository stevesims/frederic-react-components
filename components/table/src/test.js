import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('Table', () => {
  const titles = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
  const rows = [
    ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
    ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
    ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
  ];
  
  const verticalTableNames = { headings: 'heading', values: ['one', 'two', 'three', 'four'] };
  const horizontalTableNames = { headings: 'heading', values: ['one', 'two', 'three'] };

  let wrapper;

  it('renders as a table', () => {
    wrapper = shallow(<Component titles={titles} rows={rows} />);
    expect(wrapper).toHaveStyleRule('display', 'table');
  });

  it('renders titles from prop', () => {
    expect(wrapper.find('TableHeading')).toHaveLength(4);
  });

  it('renders rows from prop', () => {
    expect(wrapper.find('tr')).toHaveLength(4);
  });

  it('names each cell according to its column', () => {
    wrapper.setProps({name: 'name', names: verticalTableNames});
    const th = wrapper.find('TableHeading').at(2);
    expect(th.prop('name')).toBe('heading');
    const td = wrapper.find('TableData').at(2);
    expect(td.prop('name')).toBe('three');
  });

  it('renders rows with header column', () => {
    wrapper.setProps({rowIncludesHeading: true});
    expect(wrapper.find('TableHeading')).toHaveLength(7);
  });

  it('names each cell according to its row', () => {
    wrapper.setProps({ names: horizontalTableNames });

    let td = wrapper.find('TableData').at(0);
    expect(td.prop('name')).toBe('one');

    td = wrapper.find('TableData').at(4);
    expect(td.prop('name')).toBe('two');

    td = wrapper.find('TableData').at(8);
    expect(td.prop('name')).toBe('three');
  });

  it('sets th width according to rowHeading prop', () => {
    expect(wrapper.find('TableHeading').at(3)).not.toHaveStyleRule('width');
    const t = titles.slice(-1);
    const r = rows.map(row => row.slice(-1));
    wrapper.setProps({titles: t, rows: r});
    expect(wrapper.find('TableHeading').at(3)).toHaveStyleRule('width', '25%');
  });

  it('sets vertical-align to \'top\' prop', () => {
    wrapper = shallow(<Component titles={titles} rows={rows} />);

    wrapper.find('TableHeading').forEach((heading) => {
      expect(heading).toHaveStyleRule('vertical-align', 'baseline');
    });
    wrapper.find('TableData').forEach((heading) => {
      expect(heading).toHaveStyleRule('vertical-align', 'baseline');
    });

    wrapper.setProps({verticalAlign: 'top'});

    wrapper.find('TableHeading').forEach((heading) => {
      expect(heading).toHaveStyleRule('vertical-align', 'top');
    });
    wrapper.find('TableData').forEach((value) => {
      expect(value).toHaveStyleRule('vertical-align', 'top');
    });
  });

  it('sets table-layout according to flexibleColumns prop', () => {
    expect(wrapper).toHaveStyleRule('table-layout', 'fixed');
    wrapper.setProps({flexibleColumns: true});
    expect(wrapper).toHaveStyleRule('table-layout', 'auto');
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { mount, shallow } from 'enzyme';

import Section, { Entry } from '.';

let wrapper;

describe('TableOfContents Section', () => {
  it('renders standalone', () => {
    wrapper = mount(
      <Section id="id" title="Title">Section text here</Section>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});

describe('TableOfContents Section Entry', () => {
  describe('works with Context API', () => {
    const addContent = jest.fn();
    const removeContent = jest.fn();

    it('renders without crashing', () => {
      wrapper = shallow(
        <Entry id="id" title="Title" toc={{ addContent, removeContent }}>
          Section text here
        </Entry>,
      );
      expect(wrapper.exists()).toBe(true);
    });

    it('has called addContent in context', () => {
      expect(addContent.mock.calls.length).toBe(1);
    });

    it('has not yet called removeContent in context', () => {
      expect(removeContent.mock.calls.length).toBe(0);
    });

    it('calls removeContent on remove/unmount', () => {
      wrapper.unmount();
      expect(removeContent.mock.calls.length).toBe(1);
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('works without Context API', () => {
    it('renders without crashing', () => {
      wrapper = mount(
        <Entry id="id" title="Title">
        Section text here
        </Entry>,
      );
      expect(wrapper.exists()).toBe(true);
    });

    it('does not find toc prop', () => {
      expect(wrapper.prop('toc')).toBeUndefined();
    });

    it('unmounts without issue', () => {
      wrapper.unmount();
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

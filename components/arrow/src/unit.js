import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

test(
  'OpenButton: Component renders with no properties',
  assert => {
    shallow(<Component />);
    assert.end();
  }
);
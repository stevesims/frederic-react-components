
import React from 'react';
import { mount, shallow } from 'enzyme';

import ArrowLeft from '.';

describe(
  'ArrowLeft: ArrowLeft renders with no properties',
  assert => {
    mount(<ArrowLeft />);
    assert.end();
  }
);

describe(
  'ArrowLeft: ArrowLeft renders with a title',
  assert => {
    shallow(<ArrowLeft title="Example" />);
    assert.end();
  }
);

describe(
  'ArrowLeft: ArrowLeft renders with a title and colour fill',
  assert => {
    shallow(<ArrowLeft fill="red">Title</ArrowLeft>);
    assert.end();
  }
);

describe(
  'ArrowLeft: ArrowLeft support setting color',
  assert => {
    mount(<ArrowLeft color="purple" />);
    assert.end();
  }
);

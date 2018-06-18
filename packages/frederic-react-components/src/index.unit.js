import test from 'tape';

import fs from 'fs';
import path from 'path';

import * as packageExports from './index';
import pkg from '../package.json';

test('index - ensure all items exported exist', () => {
  // all exports are truthy
  Object.keys(packageExports).map(exportName => {
    assert(!!packageExports[exportName], `${exportName} is truthy`);
  });
  assert.end();
});

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());

test('Components exist in dependencies', () => {
  // all componenents are dependencies of frederic-react-components
  // if needed in future, can add an exclusion list/array to this test
  const components = dirs(path.join(__dirname, '../../../components'));

  components.map(component => {
    assert(!!pkg.dependencies[`@frederic-react-components/${component}`], `${component} is in dependencies`);
  });
  assert.end();
});

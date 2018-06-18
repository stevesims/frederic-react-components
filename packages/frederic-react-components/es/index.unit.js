'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('./index');

var packageExports = _interopRequireWildcard(_index);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('index - ensure all items exported exist', function () {
  // all exports are truthy
  Object.keys(packageExports).map(function (exportName) {
    assert(!!packageExports[exportName], exportName + ' is truthy');
  });
  assert.end();
});

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
var dirs = function dirs(p) {
  return _fs2.default.readdirSync(p).filter(function (f) {
    return _fs2.default.statSync(_path2.default.join(p, f)).isDirectory();
  });
};

(0, _tape2.default)('Components exist in dependencies', function () {
  // all componenents are dependencies of frederic-react-components
  // if needed in future, can add an exclusion list/array to this test
  var components = dirs(_path2.default.join(__dirname, '../../../components'));

  components.map(function (component) {
    assert(!!_package2.default.dependencies['@frederic-react-components/' + component], component + ' is in dependencies');
  });
  assert.end();
});
//# sourceMappingURL=index.unit.js.map
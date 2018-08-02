import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'govuk-frederic';

import { objectHasValueForKeys, keysFromFields, rowsFromObject } from '@govuk-frederic/utils';

// TODO document format of `fields` prop
// TODO consider refactoring so that table props provided by utility functions

const ObjectTable = ({ fields = [], object = {}, hideWithNoValues = false, title }) => {
  // establish whether we have any data
  if (!hideWithNoValues && objectHasValueForKeys(object, keysFromFields(fields))) {
    const displayRows = rowsFromObject(object, fields);

    return <Fragment>
      {title ? title : null}
      <Table rows={displayRows} rowIncludesHeading />
    </Fragment>;
  }

  return null;
};

ObjectTable.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    transform: PropTypes.func,
  })),
  object: PropTypes.object,
  hideWithNoValues: PropTypes.bool,
  title: PropTypes.node,
};

export default ObjectTable;

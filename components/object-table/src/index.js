import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'govuk-frederic';

import { objectHasValueForKeys, keysFromFields, rowsFromObject } from '@govuk-frederic/utils';

// TODO document format of `fields` prop
// TODO consider refactoring so that table props provided by utility functions

const ObjectTable = ({ title, fields = [], object = {}, hideWithNoValues = false, skipEmptyRows = true, ...props }) => {
  if (!hideWithNoValues || objectHasValueForKeys(object, keysFromFields(fields))) {
    const rows = rowsFromObject(object, fields, skipEmptyRows);
    if (rows.length) {
      return <Fragment>
        {title ? title : null}
        <Table rows={rows} rowIncludesHeading {...props} />
      </Fragment>;
    }
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
  skipEmptyRows: PropTypes.bool,
  title: PropTypes.node,
};

export default ObjectTable;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from '@govuk-frederic/table';

import { objectHasValueForKeys, keysFromFields, rowsFromObject } from '@govuk-frederic/utils';

// TODO document format of `fields` prop
// TODO consider refactoring so that table props provided by utility functions

const ObjectTable = ({ fields = [], object = {}, title }) => {
  // establish whether we have any data
  if (objectHasValueForKeys(object, keysFromFields(fields))) {
    const displayRows = rowsFromObject(object, fields);

    // TODO remove brutal and nasty style bodge when we have a nicer whitespace solution
    return <Fragment>
      {title ? <div style={{marginTop: '30px'}}>{title}</div> : null}
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
  title: PropTypes.node,
};

export default ObjectTable;

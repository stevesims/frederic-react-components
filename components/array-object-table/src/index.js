import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'govuk-frederic';

import { rowsFromArray, titlesFromFields } from '@govuk-frederic/utils';


// TODO: THIS RENDERS COLUMNS BASED ON THE FIELDS ARRAY
// TODO document format of `fields` prop
// TODO consider refactoring so that table props provided by utility functions
const ArrayObjectTable = ({ fields = [], array = [], hideWithNoValues = false, skipEmptyRows = true, title, ...props }) => {
  let rows = rowsFromArray(array, fields, skipEmptyRows);
  if (!rows.length && !hideWithNoValues) rows = rowsFromArray([{}], fields, false);
  return rows.length ?
    <Fragment>
      {title ? title : null}
      <Table rows={rows} titles={titlesFromFields(fields)} {...props}/>
    </Fragment>
    :
    null;
};

ArrayObjectTable.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    transform: PropTypes.func,
  })),
  array: PropTypes.arrayOf(PropTypes.object),
  hideWithNoValues: PropTypes.bool,
  skipEmptyRows: PropTypes.bool,
  title: PropTypes.node,
};

export default ArrayObjectTable;

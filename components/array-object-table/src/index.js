import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from '@govuk-frederic/table';

import { rowsFromArray, titlesFromFields } from '@govuk-frederic/utils';

// TODO document format of `fields` prop
// TODO consider refactoring so that table props provided by utility functions

const ArrayObjectTable = ({ fields = [], array = [], title }) => {
  const rows = rowsFromArray(array, fields);
  return rows.length ?
    <Fragment>
      {title ? title : null}
      <Table rows={rows} titles={titlesFromFields(fields)} />
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
  title: PropTypes.node,
};

export default ArrayObjectTable;
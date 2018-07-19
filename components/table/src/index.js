import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const TableContainer = styled('table', {
  // use `forwardProps` here as by default emotion doesn't allow setting `name` prop on a `table`
  forwardProps: ['name'],
})(
  {
    display: 'table',
    fontFamily: 'nta, Arial, sans-serif',
    width: '100%',
  },
  ({ flexibleColumns }) => ({ tableLayout: flexibleColumns ? 'auto' : 'fixed' }),
);

const cellStyles = {
  ':first-child': {
    padding: '15px 4px 15px 0',
  },
  ':last-child': {
    padding: '15px 0 15px 4px',
  },
  borderBottom: '1px solid #bfc1c3',
  display: 'table-cell',
  fontSize: '14px',
  padding: '15px 4px',
};

const TableData = styled('td', {
  // use `forwardProps` here as by default emotion doesn't allow setting `name` prop on a `td`
  forwardProps: ['name'],
})(
  cellStyles,
  (verticalAlign) => (verticalAlign), 
);

const TableHeading = styled('th')(
  cellStyles,
  (verticalAlign) => (verticalAlign), 
  ({rowHeading, columnCount}) => (
    {
      fontWeight: 'bold',
      textAlign: 'left',
      width: rowHeading && columnCount < 4 ? '25%' : undefined,
    }
  ),
);

const getName = (names, row, column, isHeading = false) => {
  const colName = names[column];
  if (Array.isArray(colName)) {
    return colName[(isHeading ? column : row)];
  }
  return colName;
};

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={exampleNames} />
 * ```
 * 
 * rowIncludesHeading, vertical align override
 * ```jsx
 * <Table verticalAlign="top" titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading />
 * ```
 * 
 * rowIncludesHeading, no titles
 * ```jsx
 * <Table rows={arrayExampleContent} rowIncludesHeading names={exampleNames} />
 * ```
 * 
 * rowIncludesHeading, no titles, small single row
 * ```jsx
 * <Table rows={[['title', 'value']]} rowIncludesHeading />
 * ```
 * 
 * rowIncludesHeading, with flexible columns
 * ```jsx
 * <Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading />
 * ```
 */
const Table = ({ name, names = [], rowIncludesHeading, titles, rows, flexibleColumns, verticalAlign }) => (
  <TableContainer name={name} flexibleColumns={flexibleColumns}>
    {titles &&
      titles.length && (
      <thead>
        <tr>
          {titles.map((title, index) => (
            // disable false-positive rule - this is an access into an array of strings, not object access
            // eslint-disable-next-line security/detect-object-injection
            <TableHeading key={title.key || index} verticalAlign={verticalAlign} name={getName(names, 0, index, true)}>
              {title}
            </TableHeading>
          ))}
        </tr>
      </thead>
    )}
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.map(
            (item, itemIndex) =>
              rowIncludesHeading && itemIndex === 0 ? (
                <TableHeading rowHeadingcolumnCount={row.length} key={item.key || itemIndex} verticalAlign={verticalAlign} name={getName(names, index, itemIndex)}>
                  {item}
                </TableHeading>
              ) : (
                // disable false-positive rule - this is an access into an array of strings, not object access
                // eslint-disable-next-line security/detect-object-injection
                <TableData key={item.key || itemIndex} verticalAlign={verticalAlign} name={getName(names, index, itemIndex)}>
                  {item}
                </TableData>
              ),
          )}
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

Table.propTypes = {
  flexibleColumns: PropTypes.bool,
  name: PropTypes.string,
  names: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  ]),
  rowIncludesHeading: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))).isRequired,
  titles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  verticalAlign: PropTypes.string,
};

Table.defaultProps = {
  verticalAlign: 'baseline',
};

export default Table;

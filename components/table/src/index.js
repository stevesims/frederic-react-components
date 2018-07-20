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
  verticalAlign: 'top',
};

const TableData = styled('td', {
  // use `forwardProps` here as by default emotion doesn't allow setting `name` prop on a `td`
  forwardProps: ['name'],
})(cellStyles);

const TableHeading = styled('th')(
  cellStyles,
  ({rowHeading, columnCount}) => (
    {
      fontWeight: 'bold',
      textAlign: 'left',
      width: rowHeading && columnCount < 4 ? '25%' : undefined,
    }
  ),
);

const getName = (names, row, column, nameByRow) => {
  if (nameByRow) {
    return Array.isArray(names[row]) ? names[row][column] : names[row];
  } 
  return Array.isArray(names[column]) ? names[column][row] : names[column];
};

const calculateIndex = (titles, nameByRow, index) => {
  if (nameByRow) {
    // Only if there are headings at the top, we need to increment the row
    return (titles && titles.length) ? (index + 1) : index;
  }
  return (index + 1);
};

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * const verticalTableNames = { headings: 'heading', values: ['one', 'two', 'three', 'four'] };
 * <Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={verticalTableNames} />
 * ```
 * 
 * rowIncludesHeading
 * ```jsx
 * <Table titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading />
 * ```
 * 
 * rowIncludesHeading, no titles
 * ```jsx
 * const horizontalTableNames = { headings: 'heading', values: ['one', 'two', 'three'] };
 * <Table rows={arrayExampleContent} rowIncludesHeading names={horizontalTableNames} />
 * ```
 * 
 * rowIncludesHeading, no titles, small single row
 * ```jsx
 * const horizontalTableNames = { headings: 'heading', values: ['one', 'two', 'three'] };
 * <Table rows={[['title', 'value']]} rowIncludesHeading names={horizontalTableNames} />
 * ```
 * 
 * rowIncludesHeading, with flexible columns
 * ```jsx
 * const horizontalTableNames = { headings: 'heading', values: ['one', 'two', 'three'] };
 * <Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading names={horizontalTableNames} />
 * ```
 */
const Table = ({ name, names, rowIncludesHeading, nameByRow, titles, rows, flexibleColumns }) => (
  <TableContainer name={name} flexibleColumns={flexibleColumns}>
    {titles &&
      titles.length && (
      <thead>
        <tr>
          {titles.map((title, index) => (
            // disable false-positive rule - this is an access into an array of strings, not object access
            // eslint-disable-next-line security/detect-object-injection
            <TableHeading key={title.key || index} name={getName(names, 0, index, nameByRow)}>
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
                <TableHeading rowHeading columnCount={row.length} key={item.key || itemIndex} name={getName(names, calculateIndex(titles, nameByRow, index), itemIndex, nameByRow)}>
                  {item}
                </TableHeading>
              ) : (
                // disable false-positive rule - this is an access into an array of strings, not object access
                // eslint-disable-next-line security/detect-object-injection
                <TableData key={item.key || itemIndex} name={getName(names, calculateIndex(titles, nameByRow, index), itemIndex, nameByRow)}>
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
  names: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  ),
  nameByRow: PropTypes.bool,
  rowIncludesHeading: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))).isRequired,
  titles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
};

Table.defaultProps = {
  flexibleColumns: false,
  nameByRow: false,
  names: [],
  rowIncludesHeading: false,
};

export default Table;

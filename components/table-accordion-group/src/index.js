import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Collapse } from 'react-collapse';
import { FONT_SIZE } from '@govuk-react/constants';

import OpenButton from '@govuk-frederic/open-button';

const Container = styled('div')({
  display: 'flex',
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: '1.75',
  paddingBottom: '10px',
  paddingTop: '10px',
  position: 'relative',
});

const Title = styled('header')(({ clickable }) => (clickable ? { cursor: 'pointer' } : undefined), {
  paddingLeft: '16px',
});

const Items = styled('div')({});
const FirstItem = styled('div')({});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <TableAccordionGroup title="Title" expanded="expanded">Children</TableAccordionGroup>
 * ```
 * 
 * Open
 * ```jsx
 * <TableAccordionGroup open title="Title" expanded="expanded">Children</TableAccordionGroup>
 * ```
 * 
 * State managed
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
 *  propsToState: ['open'],
 * });
 * 
 * <ManagedTableAccordionGroup title="Title" expanded="expanded">Children</ManagedTableAccordionGroup>
 * ```
 * 
 * changeOnTitleClick
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
 *  propsToState: ['open'],
 * });
 * 
 * <ManagedTableAccordionGroup changeOnTitleClick title="Title" expanded="expanded">Children</ManagedTableAccordionGroup>
 * ```
 * 
 * array
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
 *  propsToState: ['open'],
 * });
 * 
 * <ManagedTableAccordionGroup
 *  expanded={
 *    arrayExampleItems.map((item, index) => {
 *      if (index) {
 *        return <div>{item}</div>;
 *      }
 *      return null;
 *    })}
 * >
 *  {arrayExampleItems[0]}
 * </ManagedTableAccordionGroup>
 * ```
 * 
 * async
 * ```jsx
 * import ResultCountTitle from '@govuk-frederic/result-count-title';
 * import Spinner from '@govuk-frederic/spinner';
 * 
 * class TableAccordionGroupAsyncExample extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       items: [{
 *         count: 88,
 *         firstItem: 'Davis Paul Jones',
 *         id: 1,
 *         title: 'Names',
 *       }, {
 *         count: 3,
 *         firstItem: 'Some address',
 *         id: 2,
 *         title: 'Addresses',
 *       }],
 *     };
 *   }
 * 
 *   loadItem(index) {
 *     // mock ajax call
 *     setTimeout(() => {
 *       this.setState(() => {
 *         const newItems = this.state.items.map((item, i) => {
 *           if (index === i) {
 *             return {
 *               ...item,
 *               loaded: true,
 *               text: `Loaded item ${index}`,
 *             };
 *           } return item;
 *         });
 *         return { items: newItems };
 *       });
 *     }, 1000);
 *   }
 * 
 *   onChange(open, index) {
 *     this.setState(() => {
 *       const newItems = this.state.items.map((item, i) => {
 *         if (index === i) {
 *           return {
 *             ...item,
 *             open,
 *           };
 *         } return item;
 *       });
 *       return { items: newItems };
 *     });
 * 
 *     // eslint disable justification:
 *     // "avoid the use of user input in property name fields"
 *     //  * https://blog.liftsecurity.io/2015/01/14/the-dangers-of-square-bracket-notat * ion/
 *     // - `index` is not a user input as it comes from items.map in render.
 *     // - This code is also not expected to be executed on a server, other than  * during unit tests,
 *     //   in which case this vulnerability is not relevant.
 *     if (open && !this.state.items[index].loaded) { // eslint-disable-line  * security/detect-object-injection
 *       this.loadItem(index);
 *     }
 *   }
 * 
 *   render() {
 *     const { items } = this.state;
 * 
 *     return (<div>
 *       {items.map((item, index) => (
 *         <TableAccordionGroup
 *           changeOnTitleClick
 *           key={item.id}
 *           title={
 *             <ResultCountTitle count={item.count} title={item.title} />
 *           }
 *           open={item.open}
 *           expanded={item.loaded ? item.text : <Spinner visible />}
 *           onChange={({open}) => this.onChange(open, index)}>
 *           {item.firstItem}
 *         </TableAccordionGroup>
 *       ))}
 *     </div>);
 *   }
 * }
 * 
 * <TableAccordionGroupAsyncExample />
 * ```
 */
const TableAccordionGroup = ({ title, children, expanded, onChange, open, changeOnTitleClick }) => {
  return (
    <Container>
      <OpenButton open={open} onChange={onChange} />
      <Title clickable={changeOnTitleClick} onClick={changeOnTitleClick ? () => onChange({ open: !open }) : undefined }>
        {title}
      </Title>
      <Items>
        <FirstItem>{children}</FirstItem>
        <Collapse isOpened={open}>{expanded}</Collapse>
      </Items>
    </Container>
  );
};

TableAccordionGroup.propTypes = {
  changeOnTitleClick: PropTypes.bool,
  children: PropTypes.node.isRequired,
  expanded: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.node,
};

TableAccordionGroup.defaultProps = {
  changeOnTitleClick: false,
  open: false,
};

export default TableAccordionGroup;

export { Title };

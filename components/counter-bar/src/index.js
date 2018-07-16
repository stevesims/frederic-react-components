import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import ResultCountTitle from '@govuk-frederic/result-count-title';

import { BLACK, GREY_1, GREY_3, LINK_COLOUR, RED, WHITE, YELLOW } from 'govuk-colours';

const Wrapper = styled('div')({
  display: 'flex',
  flexWrap: 'nowrap',
  lineHeight: '1',
});

const TotalWrapperInner = styled('a')(
  {
    ':focus': {
      outline: `solid 4px ${YELLOW}`,
    },
    border: '0',
    flex: '0 0 auto',
    margin: '0 6px 6px 0',
    maxWidth: '250px',
    outline: 'none',
    padding: '0 8px 0 0',
  },
  ({ active }) => ({
    background: active ? LINK_COLOUR : WHITE,
    color: active ? WHITE : undefined,
    outline: active ? `2px solid ${LINK_COLOUR}` : undefined,
  }),
);

const ItemsWrapper = styled('div')(
  {
    alignItems: 'flex-start',
    display: 'flex',
    marginRight: '-6px',
    flex: '1',
    flexWrap: 'wrap',
  },
);

const ItemWrapperInner = styled(TotalWrapperInner)(
  {
    ':last-child': {
      marginRight: '0',
    },
    color: WHITE,
    flex: '1',
  },
  ({ active }) => ({
    background: active ? LINK_COLOUR : GREY_1,
  }),
  ({ empty }) => (empty ? { opacity: 0 } : undefined),
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={16}>All counters</CounterBar.Total>
 *   <CounterBar.Container>
 *     <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 3</CounterBar.Item>
 *     <CounterBar.Item score={9}>Counter 4</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 5</CounterBar.Item>
 *     <CounterBar.Item score={1}>Counter 6</CounterBar.Item>
 *     <CounterBar.Item score={0}>Counter 7</CounterBar.Item>
 *   </CounterBar.Container>
 * </CounterBar>
 * ```
 * Active counter
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={5}>All counters</CounterBar.Total>
 *     <CounterBar.Container>
 *     <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
 *     <CounterBar.Item score={2} active>Counter 2</CounterBar.Item>
 *     <CounterBar.Item score={3}>Counter 3</CounterBar.Item>
 *   </CounterBar.Container>
 * </CounterBar>
 * ```
 * Active title
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={2} active>All counters</CounterBar.Total>
 *   <CounterBar.Container>
 *     <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
 *     <CounterBar.Item score={0}>Counter 3</CounterBar.Item>
 *   </CounterBar.Container>
 * </CounterBar>
 * ```
 * CounterBar with padded container
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={8}>All counters</CounterBar.Total>
 *   <CounterBar.Container>
 *     <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 3</CounterBar.Item>
 *     <CounterBar.Item score={0}>Counter 4</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 5</CounterBar.Item>
 *     <CounterBar.Item score={0}>Counter 6</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 7</CounterBar.Item>
 *   </CounterBar.Container>
 * </CounterBar>
 * ```
 * Zero/no scores
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={0}>All counters</CounterBar.Total>
 *   <CounterBar.Container>
 *     <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
 *     <CounterBar.Item>Counter 2</CounterBar.Item>
 *     <CounterBar.Item score={0}>Counter 3</CounterBar.Item>
 *   </CounterBar.Container>
 * </CounterBar>,
 * ```
 * Use any HTML element string for the total
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={2} component="aside">All counters</CounterBar.Total>
 *   <CounterBar.Container>
 *     <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
 *   </CounterBar.Container>
 * </CounterBar>
 * ```
 * Use a Link component for the total
 * ```jsx
 * import { HashRouter, Link } from 'react-router-dom';
 * 
 * <HashRouter>
 *   <CounterBar>
 *     <CounterBar.Total score={2} component={Link} to="/courses?sort=name'/">All counters</CounterBar.Total>
 *     <CounterBar.Container>
 *       <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
 *       <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
 *     </CounterBar.Container>
 *   </CounterBar>
 * </HashRouter>
 * ```
 * Use any HTML element string for an item
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={2}>All counters</CounterBar.Total>
 *   <CounterBar.Container>
 *     <CounterBar.Item score={0} component="nav">Counter 1</CounterBar.Item>
 *     <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
 *   </CounterBar.Container>
 * </CounterBar>
 * ```
 * Use a Link component for an item
 * ```jsx
 * import { HashRouter, Link } from 'react-router-dom';
 * 
 * <HashRouter>
 *   <CounterBar>
 *     <CounterBar.Total score={2}>All counters</CounterBar.Total>
 *     <CounterBar.Container>
 *       <CounterBar.Item score={0} component={Link} to="/courses?sort=name'/">Counter 1</CounterBar.Item>
 *       <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
 *     </CounterBar.Container>
 *   </CounterBar>
 * </HashRouter>
 * ```
 */
const CounterBar = props => <Wrapper {...props}/>;

CounterBar.propTypes = {
  children: PropTypes.node.isRequired,
};

CounterBar.Total = ({
  active,
  children,
  component,
  score,
  scoreColor,
  scoreDisabledColor,
  scoreBackgroundColor,
  scoreDisabledBackgroundColor,
  ...props
}) => {
  const TotalWrapper = TotalWrapperInner.withComponent(component);
  return (
    <TotalWrapper active={active} disabled={!score} {...props}>
      <ResultCountTitle
        count={score}
        countColor={score > 0 ? 
          scoreColor : scoreDisabledColor}
        countBackgroundColor={score > 0 ? 
          scoreBackgroundColor : scoreDisabledBackgroundColor}
        >
        {children}
      </ResultCountTitle>
    </TotalWrapper>
  );
};
CounterBar.Total.displayName = 'Total';

CounterBar.Item = ({
  active,
  children,
  component,
  score,
  scoreColor,
  scoreDisabledColor,
  scoreBackgroundColor,
  scoreDisabledBackgroundColor,
  ...props
}) => {
  const ItemWrapper = ItemWrapperInner.withComponent(component);
  return (
    <ItemWrapper
      active={active}
      disabled={!score}
      empty={!children || children.length === 0}
      {...props}
    >
      <ResultCountTitle
        count={score || 0}
        countColor={score > 0 ? scoreColor : scoreDisabledColor}
        countBackgroundColor={score > 0 ? scoreBackgroundColor : scoreDisabledBackgroundColor}
        >
        {children}
      </ResultCountTitle>
    </ItemWrapper>
  ); 
};
CounterBar.Item.displayName = 'Item';

const sharedPropTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  component: PropTypes.node,
  score: PropTypes.number,
  scoreColor: PropTypes.string,
  scoreDisabledColor: PropTypes.string,
  scoreBackgroundColor: PropTypes.string,
  scoreDisabledBackgroundColor: PropTypes.string,
};

CounterBar.Total.propTypes = { ...sharedPropTypes, children: PropTypes.node.isRequired };
CounterBar.Item.propTypes = sharedPropTypes;

const sharedDefaultProps = {
  component: 'a',
  scoreColor: WHITE,
  scoreDisabledColor: BLACK,
  scoreBackgroundColor: RED,
  scoreDisabledBackgroundColor: GREY_3,
};

CounterBar.Total.defaultProps = sharedDefaultProps;
CounterBar.Item.defaultProps = sharedDefaultProps;

CounterBar.Container = ItemsWrapper;
CounterBar.Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterBar;

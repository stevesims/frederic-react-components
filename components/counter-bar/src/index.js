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

const TotalWrapper = styled('a')(
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

const ItemWrapper = styled(TotalWrapper)(
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
 */
const CounterBar = props => <Wrapper {...props}/>;

CounterBar.propTypes = {
  children: PropTypes.node.isRequired,
};

CounterBar.Total = ({active, countBackgroundColor, countDisabledBackgroundColor, children, score, scoreBackgroundColor, scoreDisabledBackgroundColor}) => {
  return (
    <TotalWrapper active={active} disabled={!score}>
      <ResultCountTitle
        count={score}
        countColor={score > 0 ? countBackgroundColor : countDisabledBackgroundColor}
        countBackgroundColor={score > 0 ? scoreBackgroundColor : scoreDisabledBackgroundColor}
        >
        {children}
      </ResultCountTitle>
    </TotalWrapper>
  );
};
CounterBar.Total.displayName = 'Total';

CounterBar.Total.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  countBackgroundColor: PropTypes.string,
  countDisabledBackgroundColor: PropTypes.string,
  score: PropTypes.number,
  scoreBackgroundColor: PropTypes.string,
  scoreDisabledBackgroundColor: PropTypes.string,
};

CounterBar.Total.defaultProps = {
  countBackgroundColor: WHITE,
  countDisabledBackgroundColor: BLACK,
  scoreBackgroundColor: RED,
  scoreDisabledBackgroundColor: GREY_3,
};

CounterBar.Item = ({active, children, score}) => {
 return (
   <ItemWrapper
     active={active}
     disabled={!score}
     empty={!children || children.length === 0}>
     <ResultCountTitle
       countColor={score > 0 ? WHITE : BLACK}
       countBackgroundColor={score > 0 ? RED : GREY_3}
       count={score || 0}
          >
       {children}
     </ResultCountTitle>
   </ItemWrapper>
 ); 
};
CounterBar.Item.displayName = 'Item';

CounterBar.Item.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  score: PropTypes.number,
};

CounterBar.Container = ItemsWrapper;
CounterBar.Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterBar;

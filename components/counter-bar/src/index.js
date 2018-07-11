import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import ResultCountTitle from '@govuk-frederic/result-count-title';

import { BLACK, GREY_1, GREY_3, LINK_COLOUR, RED, WHITE, YELLOW } from 'govuk-colours';

const Container = styled('div')({
  display: 'flex',
  flexWrap: 'nowrap',
  lineHeight: '1',
});

const CountWrapper = styled('a')(
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

const CountersWrapper = styled('div')(
  {
    alignItems: 'flex-start',
    display: 'flex',
    marginRight: '-6px',
    flex: '1 1 auto',
    flexWrap: 'wrap',
  },
);

const Counter = styled(CountWrapper)(
  {
    ':last-child': {
      marginRight: '0',
    },
    color: WHITE,
    flex: '1 1 auto',
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
 * <CounterBar
 *  listTitle="All counters"
 *  name="name"
 *  counters={[
 *    { id: 'abc', name: 'Counter 1', score: 0 },
 *    { id: 'def', name: 'Counter 2', score: 2 },
 *    { id: 'ghi', name: 'Counter 3', score: 2 },
 *    { id: 'jkl', name: 'Counter 4', score: 9 },
 *    { id: 'mno', name: 'Counter 5', score: 2 },
 *    { id: 'pqr', name: 'Counter 6', score: 1 },
 *    { id: 'stu', name: 'Counter 7', score: 0 },
 *  ]}
 * />
 * ```
 * Active counter
 * ```jsx
 * <CounterBar
 *  listTitle="All counters"
 *  name="name"
 *  counters={[
 *    { id: 'abc', name: 'Counter 1', score: 0 },
 *    { active: true, id: 'def', name: 'Counter 2', score: 2 },
 *    { id: 'ghi', name: 'Counter 3', score: 2 },
 *  ]}
 * />
 * ```
 * Active title
 * ```jsx
 * <CounterBar
 *  activeTitle
 *  listTitle="All counters"
 *  name="name"
 *  counters={[
 *    { id: 'abc', name: 'Counter 1', score: 0 },
 *    { id: 'def', name: 'Counter 2', score: 2 },
 *    { id: 'ghi', name: 'Counter 3', score: 0 },
 *  ]}
 * />
 * ```
 * Active counter and title on click
 * ```jsx
 * <CounterBar
 *  listTitle="All counters"
 *  activeTitle
 *  name="name"
 *  counters={[
 *    { id: 'abc', name: 'Counter 1', score: 0 },
 *    { id: 'def', name: 'Counter 2', score: 2 },
 *    { id: 'ghi', name: 'Counter 3', score: 2 },
 *    { id: 'jkl', name: 'Counter 4', score: 9 },
 *    { id: 'mno', name: 'Counter 5', score: 2 },
 *    { id: 'pqr', name: 'Counter 6', score: 1 },
 *    { id: 'stu', name: 'Counter 7' },
 *  ]}
 *  // eslint-disable-next-line no-alert
 *  onSelect={ (id) => alert(`Counter with id: ${id} selected.`) }
 * />
 * ```
 * Clickable counters
 * ```jsx
 * <CounterBar
 *  listTitle="All counters"
 *  name="name"
 *  counters={[
 *    { id: 'abc', name: 'Counter 1', score: 0 },
 *    { id: 'def', name: 'Counter 2', score: 2 },
 *    { id: 'ghi', name: 'Counter 3', score: 2 },
 *    { id: 'jkl', name: 'Counter 4', score: 9 },
 *    { id: 'mno', name: 'Counter 5', score: 2 },
 *    { id: 'pqr', name: 'Counter 6', score: 1 },
 *    { id: 'stu', name: 'Counter 7' },
 *  ]}
 *  // eslint-disable-next-line no-alert
 *  onSelect={ (id) => alert(`Counter with id: ${id} selected.`) }
 * />
 * ```
 * 
 * Padded container
 * ```jsx 
 * <CounterBar
 *  listTitle="All counters"
 *  name="name"
 *  counters={[
 *    { id: 'abc', name: 'Counter 1', score: 0 },
 *    { id: 'def', name: 'Counter 2', score: 2 },
 *    { id: 'ghi', name: 'Counter 3', score: 2 },
 *    { id: 'jkl', name: 'Counter 4', score: 0 },
 *    { id: 'mno', name: 'Counter 5', score: 2 },
 *    { id: 'pqr', name: 'Counter 6', score: 0 },
 *    { id: 'stu', name: 'Counter 7', score: 2 },
 *  ]}
 * />
 * ```
 * 
 * Zero/no scores
 * ```jsx 
 * <CounterBar
 *  listTitle="All counters"
 *  name="name"
 *  counters={[
 *    { id: 'abc', name: 'Counter 1', score: 0 },
 *    { id: 'def', name: 'Counter 2' },
 *    { id: 'ghi', name: 'Counter 3', score: 0 },
 *  ]}
 * />
 * ```
 */
const CounterBar = ({ activeTitle, listTitle, counters, onSelect, ...props }) => {
  const totalScore = counters.reduce((a, b) => a + (Number(b.score) || 0), 0);
  return (
    <Container {...props}>
      <CountWrapper active={activeTitle} disabled={!totalScore} onClick={() => onSelect()}>
        <ResultCountTitle
          count={totalScore}
          countColor={totalScore > 0 ? WHITE : BLACK}
          countBackgroundColor={totalScore > 0 ? RED : GREY_3}
        >
          {listTitle}
        </ResultCountTitle>
      </CountWrapper>
      <CountersWrapper>
        {counters.map(counter => (
          <Counter
            active={counter.active}
            disabled={!counter.score}
            key={counter.id}
            name={counter.id}
            onClick={() => onSelect(counter.id)}
            empty={!counter.name || counter.name.length === 0}
        >
            <ResultCountTitle
              countColor={counter.score > 0 ? WHITE : BLACK}
              countBackgroundColor={counter.score > 0 ? RED : GREY_3}
              count={counter.score || 0}
          >
              {counter.name}
            </ResultCountTitle>
          </Counter>
      ))}
      </CountersWrapper>
    </Container>
  );
};

CounterBar.propTypes = {
  activeTitle: PropTypes.bool,
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      id: PropTypes.any.isRequired,
      name: PropTypes.string,
      score: PropTypes.number,
    }),
  ),
  listTitle: PropTypes.any,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

CounterBar.defaultProps = {
  onSelect: () => {},
};

export default CounterBar;
export { CountWrapper, Counter };

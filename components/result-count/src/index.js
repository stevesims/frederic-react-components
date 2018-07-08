import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { GREY_1, WHITE } from 'govuk-colours';

const StyledResultCount = styled('span')(({ backgroundColor, color }) => ({
  background: backgroundColor,
  color,
  display: 'inline-block',
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: '15px',
  lineHeight: '1.25',
  minHeight: '20px',
  minWidth: '20px',
  padding: '1px 4px',
  textAlign: 'center',
}));

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <ResultCount backgroundColor="#6f777b" color="white">0</ResultCount>
 * ```
 * 
 * Long count
 * ```jsx
 * <ResultCount backgroundColor="#6f777b" color="white">000</ResultCount>
 * ```
 * 
 * Disable count
 * ```jsx
 * <ResultCount backgroundColor="#dee0e2" color="black">0</ResultCount>
 * ```
 * 
 * Highlight count
 * ```jsx
 * <ResultCount backgroundColor="#b10e1e" color="white">3</ResultCount>
 * ```
 * 
 * Alternative count
 * ```jsx
 * <ResultCount backgroundColor="#e48600" color="#3a2505">3</ResultCount>
 * ```
 */
const ResultCount = props => <StyledResultCount {...props} />;

ResultCount.defaultProps = {
  backgroundColor: GREY_1,
  children: undefined,
  color: WHITE,
};

ResultCount.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
};

export default ResultCount;

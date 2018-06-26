import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { GREY_1, WHITE } from 'govuk-colours';

const StyledResultCount = styled('span')(({ backgroundColor, color }) => ({
  background: backgroundColor || GREY_1,
  color: color || WHITE,
  display: 'inline-block',
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: '15px',
  lineHeight: '1.25',
  minHeight: '20px',
  minWidth: '20px',
  padding: '1px 4px',
  textAlign: 'center',
}));

const ResultCount = props => <StyledResultCount {...props}>X</StyledResultCount>;

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

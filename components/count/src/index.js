import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { NTA_LIGHT } from '@govuk-react/constants';

const StyledCount = styled('div')({
  fontFamily: NTA_LIGHT,
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Count value="5" />
 * ```
 */
const Count = ({ value, ...props }) => <StyledCount {...props}><span>{value}</span></StyledCount>;

Count.propTypes = {
  textClass: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Count;

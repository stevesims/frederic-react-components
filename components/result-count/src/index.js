import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { GREY_1, WHITE } from 'govuk-colours';

const ResultCount = styled('div')(({ backgroundColor, color }) => ({
  alignSelf: 'flex-start',
  background: backgroundColor || GREY_1,
  color: color || WHITE,
  flex: '0 0 auto',
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: '15px',
  lineHeight: '1.25',
  minHeight: '20px',
  minWidth: '20px',
  padding: '1px 4px',
  marginRight: '6px',
  textAlign: 'center',
}));

ResultCount.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
};

export default ResultCount;

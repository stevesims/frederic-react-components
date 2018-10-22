import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { SPACING } from '@govuk-react/constants';
import { BLUE, YELLOW } from 'govuk-colours';

const asAnchor = (AnchorType) => {
  const Anchor = props => (
    <AnchorType {...props}>{props.children}</AnchorType>
  );

  const StyledHoc = styled(Anchor)({
    display: 'flex',
    padding: SPACING.SCALE_1,
    color: BLUE,
    textDecoration: 'none',
    fontSize: '16px',
    lineHeight: '1.25',
    fontWeight: '700',
    borderBottom: '4px solid transparent',
    paddingTop: SPACING.SCALE_3,
    paddingLeft: SPACING.SCALE_3,
    paddingBottom: '11px',
    paddingRight: SPACING.SCALE_3,
    ':hover': {
      color: '#2b8cc4',
      borderBottom: '4px solid #2b8cc4',
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`,
    },
  });

  Anchor.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
  };

  return StyledHoc;
};

export default asAnchor;

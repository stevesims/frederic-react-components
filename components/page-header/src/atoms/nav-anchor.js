import React from 'react';
import styled from 'react-emotion';
import { WHITE, BLACK, YELLOW, RED } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';

const NavAnchor = styled(({
  as: T = 'a',
  ...props
}) => <T {...props } />)({
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '1.25',
  display: 'flex',
  padding: SPACING.SCALE_1,
  color: WHITE,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  ':focus': {
    outline: 'none',
    color: BLACK,
    background: YELLOW,
  },
}, ({ active }) => (active && {
  color: RED,
}));

export default NavAnchor;

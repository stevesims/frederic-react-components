import styled from 'react-emotion';

import { WHITE, BLACK, YELLOW, RED } from 'govuk-colours';

const PageHeaderAnchor = styled(({
  as: T = 'a',
}))({
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

export default PageHeaderAnchor;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { SPACING } from '@govuk-react/constants';
import { BLUE, WHITE } from 'govuk-colours';

import Anchor from './atoms/anchor';

const StyledNavigation = styled('div')({
  width: '100%',
  background: WHITE,
  color: BLUE,
  borderBottom: 'solid 1px #e2e2e2',
});

const InnerContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: SPACING.SCALE_5,
  paddingRight: SPACING.SCALE_5,
});

const NavigationItems = styled('div')({
  display: 'flex',
});

/**
 *
 * ### Usage
 *
 * Default example
 *
 * ```jsx
 * import { Link } from 'react-router-dom';
 * import asNavLink from 'as-nav-link';
 * import PageNavigation from '@govuk-frederic/page-navigation';
 *
 * const NavLink = asNavLink(PageNavigation.Anchor);
 * const NavigationItems = [
 *   {
 *     url: '/',
 *     title: 'Home',
 *   },
 *   {
 *     url: '/section-01',
 *     title: 'Section 01',
 *   },
 *   {
 *     url: '/section-02',
 *     title: 'Section 02',
 *   },
 * ];
 *
 * …
 *
 * <PageNavigation>
 *   {NavigationItems.map(({url, title}, index) => (
 *     <NavLink key={index} to={url}>{title}</NavLink>
 *   ))}
 * </PageNavigation>
 * ```
 *
 * ### TODO:
 * - Add responsive considerations
 * - Replace magic numbers from HOC items with constants
 */
const PageNavigation = ({ children }) => (
  <StyledNavigation>
    <InnerContainer>
      <NavigationItems>
        {children}
      </NavigationItems>
    </InnerContainer>
  </StyledNavigation>
);

PageNavigation.propTypes = {
  /** Navigation items */
  children: PropTypes.node,
};

PageNavigation.defaultProps = {
  children: null,
};

PageNavigation.Anchor = Anchor;

export default PageNavigation;

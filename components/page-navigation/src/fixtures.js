import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import asNavLink from 'as-nav-link';

import PageNavigation from '.';

const NavLink = asNavLink()(PageNavigation.Anchor);

const PageNavigationExample = () => (
  <BrowserRouter>
    <PageNavigation>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/section-01">Section 01</NavLink>
      <NavLink exact to="/section-02">Section 02</NavLink>
    </PageNavigation>
  </BrowserRouter>
);

export default PageNavigation;

export {
  PageNavigationExample,
};

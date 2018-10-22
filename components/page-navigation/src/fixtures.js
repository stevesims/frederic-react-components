import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import asNavLink from 'as-nav-link';

import PageNavigation from '.';

const NavLink = asNavLink()(PageNavigation.Anchor);

const ReactRouterExample = () => (
  <BrowserRouter>
    <PageNavigation>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/section-01">Section 01</NavLink>
      <NavLink to="/section-02">Section 02</NavLink>
    </PageNavigation>
  </BrowserRouter>
);

const PageNavigationExample = () => (
  <PageNavigation>
    <PageNavigation.Anchor exact to="/">Home</PageNavigation.Anchor>
    <PageNavigation.Anchor exact to="/section-01">Section 01</PageNavigation.Anchor>
    <PageNavigation.Anchor exact to="/section-02">Section 02</PageNavigation.Anchor>
  </PageNavigation>
);

export default PageNavigation;

export {
  PageNavigationExample,
  ReactRouterExample,
};

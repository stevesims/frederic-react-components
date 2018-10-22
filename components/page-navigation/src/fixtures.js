import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import asNavLink from 'as-nav-link';

import PageNavigation from '.';

const NavLink = asNavLink(PageNavigation.Anchor);
const NavigationItems = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/section-01',
    title: 'Section 01',
  },
  {
    url: '/section-02',
    title: 'Section 02',
  },
];

const PageNavigationExample = () => (
  <BrowserRouter>
    <PageNavigation>
      {NavigationItems.map(({url, title}, index) => (
        <NavLink key={index} to={url}>{title}</NavLink>
      ))}
    </PageNavigation>
  </BrowserRouter>
);

export default PageNavigation;

export {
  PageNavigationExample,
};

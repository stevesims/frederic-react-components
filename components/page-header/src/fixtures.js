import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import asNavLink from 'as-nav-link';

import PageHeader, { LogoAnchor, Anchor } from '.';

const LogoLink = asNavLink(LogoAnchor);
const NavLink = asNavLink(Anchor);

const PageLogo = (<LogoLink to="/">Logo text</LogoLink>);

const PageHeaderExample = () => (
  <BrowserRouter>
    <PageHeader logo={PageLogo}>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/account">My Account</NavLink>
      <NavLink to="/account/subsection"> - Account subsection</NavLink>
    </PageHeader>
  </BrowserRouter>
);

export default PageHeader;

export {
  PageHeaderExample,
};

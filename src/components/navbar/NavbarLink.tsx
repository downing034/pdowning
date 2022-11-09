import React from 'react';

export interface NavbarLinkProps {
  linkText: string;
  href: string;
}

const NavbarLink = ({ linkText, href }: NavbarLinkProps) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>{linkText}</a>
    </li>
  );
};

export default NavbarLink;
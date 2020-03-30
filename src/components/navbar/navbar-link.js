import React from 'react';

export default function NavbarLink({ linkText, href }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>{linkText}</a>
    </li>
  );
};

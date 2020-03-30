import React from 'react';
import NavbarLink from './navbar-link';

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">Insert Logo Here</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <NavbarLink href="#" linkText="About"/>
            <NavbarLink href="#" linkText="Portfolio"/>
            <NavbarLink href="#" linkText="Resume"/>
          </ul>
        </div>

        <div>
          <ul className="nav navbar-nav float-right mr-auto">
            <NavbarLink href="#" linkText="Contact"/>
          </ul>
        </div>
      </div>
    </nav>
  )
};


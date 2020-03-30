import React from 'react';
import Logo from '../../images/logo-transparent.png';
import NavbarLink from './navbar-link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={Logo}/>
        </a>
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


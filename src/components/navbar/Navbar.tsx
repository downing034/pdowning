import React, { useState, useEffect } from 'react';
import NavbarLink from './NavbarLink';
import { LogoTransparent } from 'images';

const Navbar = () => {
  const [navbarClasses, setNavbarClasses] = useState<string>('navbar-no-color')

  const listenScrollEvent = (e: Event) => {
    const classes = window.scrollY > 360 ? 'navbar-darken' : 'navbar-no-color';
    setNavbarClasses(classes);
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  });

  return (
    <nav className={`navbar ${navbarClasses} fixed-top navbar-expand-lg`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={LogoTransparent}/>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <NavbarLink href="#about" linkText="About"/>
            <NavbarLink href="#portfolio" linkText="Portfolio"/>
            <NavbarLink href="#resume" linkText="Resume"/>
          </ul>
        </div>

        <div>
          <ul className="nav navbar-nav float-right mr-auto">
            <NavbarLink href="#contact" linkText="Contact"/>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;